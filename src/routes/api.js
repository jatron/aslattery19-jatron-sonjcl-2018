// dependencies
const express = require('express');
const connect = require('connect-ensure-login');
const AWS = require('aws-sdk');
const fs = require('fs');
const uuidv4 = require('uuid/v4');

// models
const User = require('../models/user');
const Picture = require('../models/picture');
const Helpers = require('../helpers/helpers');

const router = express.Router();

// Create an S3 client
const s3 = new AWS.S3();

// api endpoints
router.get('/user', function(req, res) {
    User.findOne({ _id: req.query._id }, function(err, user) {
        if (err) throw err;
        res.send(user);
    });
});

var bucketName = 'lets-eat-images';

// XXX: At the moment, the API only supports uploading jpg images
router.post(
    '/upload_meal',
    connect.ensureLoggedIn(),
    function(req, res) {
        // read image file
        fs.readFile(req.body.meal.path, function(err, data) {
            if (err) throw err;
            // create meal id
            const key = uuidv4();
            params = {Bucket: bucketName, Key: key, Body: data, ContentType: 'image/jpg'};
            // store image in s3
            s3.putObject(params, function(err, data) {
                if (err) throw err;
                // store in mLab pictures collection
                picture = new Picture({
                    key             :   key,
                    userId          :   req.body.userId,
                    tagline         :   req.body.meal.tagline,
                    description     :   req.body.meal.description,
                    ingredients     :   req.body.meal.ingredients,
                    allergens       :   req.body.meal.allergens
                });
                picture.save(function(err) {
                    if (err) throw err;
                    // store in mLab users collection
                    User.findOne({_id: req.body.userId}, function(err, user) {
                        if (err) throw err;
                        user.mealKeys.push(key);
                        user.save();
                        res.send({success: 1});
                    });
                });
            });
        });
});

router.get('/images',
    connect.ensureLoggedIn(),
    function(req, res) {

        // get all meals
        Picture.find({}, function(err, mLabMeals) {
            if (err) throw err;
            // get user
            User.findOne({_id: req.query.userId}, function(err, user) {
                if (err) throw err;

                var mealIndex;
                if (user.mealIndex) {
                    mealIndex = user.mealIndex;
                } else {
                    mealIndex = 0;
                }

                var mealsJson = {
                    meals : []
                };
                if (mLabMeals.length === 0) {
                    res.send(mealsJson);
                    return;
                }
                // set mealIndex = 0 if it's greater or equal to the number of meals stored in our database
                if (mealIndex >= mLabMeals.length) mealIndex = 0;
                const startingMealIndex = mealIndex;
                var mealsAdded = 0;
                // iterate through images (starting at mealIndex) until you find 15 meals to display
                getMeals(true);

                // assumes mealIndex < mLabMeals.length, mLabMeals.length > 0
                function getMeals(isFirstCall) {
                    if (isFirstCall) {
                        // add meal to mealsJson if meal is unliked and doesn't belong to user
                        addMeal();
                    } else {
                        if ((mealIndex != startingMealIndex) && (mealsAdded < 15)) {
                            // add meal to mealsJson if meal is unliked and doesn't belong to user
                            addMeal();
                        } else {
                            // update mealIndex in database
                            user.mealIndex = mealIndex;
                            user.save();
                            // send mealsJson
                            res.send(mealsJson);
                            return;
                        }
                    }
                }

                function addMeal(){
                    const mealKey = mLabMeals[mealIndex].key;
                    // if mealKey is not in user.mealKeys and not in user.mealsLiked, add to mealsJson
                    if (!Helpers.arrayContains(mealKey, user.mealKeys) && !Helpers.arrayContains(mealKey, user.mealsLiked)) {
                        // get meal image url
                        urlParams = {Bucket: bucketName, Key: mealKey};
                        s3.getSignedUrl('getObject', urlParams, function(err, url) {
                            // get meal author name
                            User.findOne({_id: mLabMeals[mealIndex].userId}, function(err, mealOwner) {
                                if (err) throw err;
                                // create mealJson
                                const mealJson = {
                                    key         : mealKey,
                                    url         : url,
                                    authorName  : mealOwner.name,
                                    tagline     : mLabMeals[mealIndex].tagline,
                                    description : mLabMeals[mealIndex].description,
                                    ingredients : mLabMeals[mealIndex].ingredients,
                                    allergens   : mLabMeals[mealIndex].allergens
                                };
                                // add to mealsJson
                                mealsJson.meals.push(mealJson);
                                // update mealsAdded and mealIndex
                                mealsAdded++;
                                mealIndex = (mealIndex + 1) % mLabMeals.length;
                                getMeals(false);
                            });
                        });
                    } else {
                        mealIndex = (mealIndex + 1) % mLabMeals.length;
                        getMeals(false);
                    }
                }
            });
        });
    }
);

module.exports = router;
