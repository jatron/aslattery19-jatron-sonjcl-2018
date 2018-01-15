// dependencies
const express = require('express');
const AWS = require('aws-sdk');
const fs = require('fs');
const uuidv4 = require('uuid/v4');

// models
const User = require('../models/user');

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

router.post('/upload_image', function(req, res) {
    fs.readFile(req.body.fileName, function(err, data) {
        if (err) throw err;
        const key = uuidv4();
        params = {Bucket: bucketName, Key: key, Body: data , ContentType: 'image/jpg'};
        s3.putObject(params, function(err, data) {
            if (err) throw err;
            console.log("Successfully uploaded data to " + bucketName +'/' + key);
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
