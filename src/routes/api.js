// dependencies
const express = require('express');
const connect = require('connect-ensure-login');
const AWS = require('aws-sdk');
const fs = require('fs');
const uuidv4 = require('uuid/v4');

// models
const User = require('../models/user');
const Picture = require('../models/picture');

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

router.get('/images', function(req, res) {
    var params = {Bucket: bucketName};
    s3.listObjects(params, function(err, data){
        if (err) throw err;
        var bucketContents = data.Contents;
        var imageUrls = [];
        var bucketIndex = 0;
        if (bucketIndex < bucketContents.length) {
            getUrl();
        } else {
            res.send({imageUrls : imageUrls});
        }
        function getUrl() {
            var urlParams = {Bucket: bucketName, Key: bucketContents[bucketIndex].Key};
            s3.getSignedUrl('getObject', urlParams, function(err, url) {
                if (err) throw err;
                imageUrls.push(url);
                bucketIndex++;
                if (bucketIndex < bucketContents.length) {
                    getUrl();
                } else {
                // we get here when we finish iterating through bucketContents
                res.send({imageUrls : imageUrls});
                }
            });
        }
    });
});

module.exports = router;
