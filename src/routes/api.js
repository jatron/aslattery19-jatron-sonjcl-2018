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
router.get('/whoami', function(req, res) {
  if(req.isAuthenticated()){
    res.send(req.user);
  }
  else{
    res.send({});
  }
});

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
        // create meal id
        const key = uuidv4();
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
                res.send({success: 1, mealId : key});
            });
        });
});

const numberOfMealsDisplayed = 9;

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
                // iterate through images (starting at mealIndex) until you find numberOfMealsDisplayed meals to display
                getMeals(true);

                // assumes mealIndex < mLabMeals.length, mLabMeals.length > 0
                function getMeals(isFirstCall) {
                    if (isFirstCall) {
                        // add meal to mealsJson if meal is unliked and doesn't belong to user
                        addMeal();
                    } else {
                        if ((mealIndex != startingMealIndex) && (mealsAdded < numberOfMealsDisplayed)) {
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
                            if (err) throw err;
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

router.get('/profile',
    connect.ensureLoggedIn(),
    function(req, res) {
        getUserProfile(req.query.userId, res);
});

router.get('/meal_author_profile',
    connect.ensureLoggedIn(),
    function(req, res) {
        // get meal from mLab
        Picture.findOne({key: req.query.mealKey}, function(err, meal) {
            if (err) throw err;
            getUserProfile(meal.userId, res);
        });
});

router.post('/bio',
    connect.ensureLoggedIn(),
    function(req, res) {
        // get user from mLab
        User.findOne({_id: req.body.userId}, function(err, user) {
            if (err) throw err;
            // update bio field in mLab
            user.bio = req.body.bio;
            user.save();
            res.send({success : 1});
        });
});

router.post('/delete_meal',
    connect.ensureLoggedIn(),
    function(req, res) {
        // delete meal from mLab
        // get meal owner from mLab
        // remove meal from mealKeys
        // save user on mLab
        // delete meal from s3
});

router.post('/like',
    connect.ensureLoggedIn(),
    function(req, res) {
        // get meal from mLab
        Picture.findOne({key: req.body.mealKey}, function(err, meal) {
            if (err) throw err;
            // get id of meal owner
            const mealOwnerId = meal.userId;
            // get user from mLab
            User.findOne({_id: req.body.userId}, function(err, user) {
                if (err) throw err;
                // add id of meal owner to usersLiked[]
                if (!user.usersLiked) {
                    user.usersLiked = [];
                }
                user.usersLiked.push(mealOwnerId);
                // add meal to mealsLiked
                if (!user.mealLiked) {
                    user.mealsLiked = [];
                }
                user.mealsLiked.push(req.body.mealKey);
                // get meal owner from mLab
                User.findOne({_id: mealOwnerId}, function(err, mealOwner) {
                    if (err) throw err;
                    // if meal owner likes user
                    if (!mealOwner.usersLiked) {
                        mealOwner.usersLiked = [];
                    }
                    if (Helpers.arrayContains(req.body.userId, mealOwner.usersLiked)) {
                        // add user to meal owner's matches
                        if (!mealOwner.matches) {
                            mealOwner.matches = [];
                        }
                        mealOwner.matches.push(req.body.userId);
                        // add meal owner to user's matches
                        if (!user.matches) {
                            user.matches = [];
                        }
                        user.matches.push(mealOwnerId);
                        // save updates to meal owner in mLab
                        mealOwner.save(function(err) {
                            if (err) throw err;
                            // save updates to user in mLab
                            user.save(function(err) {
                                if (err) throw err;
                                res.send({success: 1});
                            })
                        });
                    } else {
                        user.save(function(err) {
                            if (err) throw err;
                            res.send({succes: 1});
                        })
                    }
                });
            });
        });
});

function getUserProfile(userId, res) {
    // get user from mLab
    User.findOne({_id: userId}, function(err, user) {
        if (err) throw err;
        var userProfileJson = {
            userId          : userId,
            name            : user.name,
            school          : user.school,
            bio             : user.bio,
            profilePicture  : 'https://image.freepik.com/free-icon/male-profile-user-shadow_318-40244.jpg', // TODO: get profile picture from facebook or Google
            meals           : []
        };

        // add all meals belonging to user to userProfileJson.meals
        var mealIndex = 0;
        addMealsToUserProfileJson();

        function addMealsToUserProfileJson() {
            if (mealIndex < user.mealKeys.length) {
                // get url from s3
                const mealKey = user.mealKeys[mealIndex];
                urlParams = {Bucket: bucketName, Key: mealKey};
                s3.getSignedUrl('getObject', urlParams, function(err, mealImageUrl) {
                    if (err) throw err;
                    // get meal metadata from mLab
                    Picture.findOne({key: mealKey}, function(err, mealMetadata) {
                        if (err) throw err;
                        const mealJson = {
                            key         : mealKey,
                            url         : mealImageUrl,
                            tagline     : mealMetadata.tagline,
                            description : mealMetadata.description,
                            ingredients : mealMetadata.ingredients,
                            allergens   : mealMetadata.allergens
                        };
                        // append mealJson to userProfileJson.meals
                        userProfileJson.meals.push(mealJson);
                        mealIndex++;
                        addMealsToUserProfileJson();
                    });
                });
            } else {
                res.send(userProfileJson);
            }
        }
    });
}

module.exports = router;
