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
        if (err) {
            console.log('XXX: Error in get(/user)->User.findOne({ _id: req.query._id })');
            console.log(err);
            return;
        }
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
            if (err) {
                console.log('XXX: Error in post(/upload_meal)->picture.save()');
                console.log(err);
                return;
            }
            // store in mLab users collection
            User.findOne({_id: req.body.userId}, function(err, user) {
                if (err) {
                    console.log('XXX: Error in post(/upload_meal)->picture.save()->User.findOne()');
                    console.log(err);
                    return;
                }
                user.mealKeys.push(key);
                user.save(function(err) {
                    if (err) {
                        console.log('XXX: Error in post(/upload_meal)->picture.save()->User.findOne()->user.save()');
                        console.log(err);
                        return;
                    }
                    res.send({success: 1, mealId : key});
                });
            });
        });
});

const numberOfMealsDisplayed = 9;

router.get('/images',
    connect.ensureLoggedIn(),
    function(req, res) {

        // get all meals
        Picture.find({}, function(err, mLabMeals) {
            if (err) {
                console.log('XXX: Error in get(/images)->Picture.find()');
                console.log(err);
                return;
            }
            // get user
            User.findOne({_id: req.query.userId}, function(err, user) {
                if (err) {
                    console.log('XXX: Error in get(/images)->Picture.find()->User.findOne({_id: req.query.userId})');
                    console.log(err);
                    return;
                }

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
                        if ((mealIndex !== startingMealIndex) && (mealsAdded < numberOfMealsDisplayed)) {
                            // add meal to mealsJson if meal is unliked and doesn't belong to user
                            addMeal();
                        } else {
                            // update mealIndex in database
                            user.mealIndex = mealIndex;
                            user.save(function(err) {
                                if (err) {
                                    console.log('XXX: Error in getMeals()->user.save()');
                                    console.log(err);
                                    return;
                                }
                                // send mealsJson
                                res.send(mealsJson);
                                return;
                            });
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
                            if (err) {
                                console.log('XXX: Error in addMeal()->s3.getSignedUrl(getObject, urlParams)');
                                console.log(err);
                                return;
                            }
                            // get meal author name
                            User.findOne({_id: mLabMeals[mealIndex].userId}, function(err, mealOwner) {
                                if (err) {
                                    console.log('XXX: Error in addMeal()->s3.getSignedUrl(getObject, urlParams)->User.findOne({_id: mLabMeals[mealIndex].userId})');
                                    console.log(err);
                                    return;
                                }
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
            if (err) {
                console.log('XXX: Error get(/meal_author_profile)->Picture.findOne({key: req.query.mealKey})');
                console.log(err);
                return;
            }
            getUserProfile(meal.userId, res);
        });
});

router.post('/bio',
    connect.ensureLoggedIn(),
    function(req, res) {
        // get user from mLab
        User.findOne({_id: req.body.userId}, function(err, user) {
            if (err) {
                console.log('XXX: Error in post(/bio)->User.findOne({_id: req.body.userId})');
                console.log(err);
                return;
            }
            // update bio field in mLab
            user.bio = req.body.bio;
            user.save(function(err) {
                if (err) {
                    console.log('XXX: Error in post(/bio)->User.findOne({_id: req.body.userId})->user.save()');
                    console.log(err);
                    return;
                }
                res.send({success : 1});
            });
        });
});

router.post('/delete_meal',
    connect.ensureLoggedIn(),
    function(req, res) {
        // find meal owner
        Picture.findOne({key: req.body.mealKey}, function(err, meal) {
            if (err) {
                console.log('XXX: Error in post(/delete_meal)->Picture.findOne({key: req.body.mealKey})');
                console.log(err);
                return;
            }
            const mealOwnerId = meal.userId;
            // get meal owner from mLab
            User.findOne({_id: mealOwnerId}, function(err, mealOwner) {
                if (err) {
                    console.log('XXX: Error in post(/delete_meal)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: mealOwnerId})');
                    console.log(err);
                    return;
                }
                // remove meal from mealKeys
                const mealIndex = mealOwner.mealKeys.indexOf(req.body.mealKey);
                mealOwner.mealKeys.splice(mealIndex, 1);
                // save updates to mealOwner on mLab
                mealOwner.save(function(err) {
                    if (err) {
                        console.log('XXX: Error in post(/delete_meal)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: mealOwnerId})->mealOwner.save()');
                        console.log(err);
                        return;
                    }
                    // get all users from mLab
                    User.find({}, function(err, allUsers) {
                        if (err) {
                            console.log('XXX: Error in post(/delete_meal)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: mealOwnerId})->mealOwner.save()->User.find({})');
                            console.log(err);
                            return;
                        }
                        for (var i = 0; i < allUsers.length; i++) {
                            var currentUser = allUsers[i];
                            // remove meal from mealsLiked
                            var mealLikedIndex = -1; // -1 indicates that the meal isn't in mealsLiked
                            for (var j = 0; j < currentUser.mealsLiked.length; j++) {
                                if (currentUser.mealsLiked[j] === req.body.mealKey) {
                                    mealLikedIndex = j;
                                    break;
                                }
                            }
                            if (mealLikedIndex !== -1) {
                                allUsers[i].mealsLiked.splice(mealLikedIndex, 1);
                            }
                        }
                        // make bulkWrite array
                        bulkWriteArray = [];
                        for (var i = 0; i < allUsers.length; i++) {
                            const bulkWriteElement = {
                                updateOne: {
                                    filter: {_id        : allUsers[i]._id},
                                    update: {mealsLiked : allUsers[i].mealsLiked}
                                }
                            };
                            bulkWriteArray.push(bulkWriteElement);
                        }
                        // save updates to all users on mLab
                        User.bulkWrite(bulkWriteArray, function(err) {
                            if (err) {
                                console.log('XXX: Error in post(/delete_meal)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: mealOwnerId})->mealOwner.save()->User.find({})->User.bulkWrite(bulkWriteArray)');
                                console.log(err);
                                return;
                            }
                            // delete meal from mLab
                            meal.remove(function(err, mealCopy) {
                                if (err) {
                                    console.log('XXX: Error in post(/delete_meal)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: mealOwnerId})->mealOwner.save()->User.find({})->User.bulkWrite(bulkWriteArray)->meal.remove()');
                                    console.log(err);
                                    return;
                                }
                                // delete meal from s3
                                s3MealParams = {Bucket: bucketName, Key: req.body.mealKey};
                                s3.deleteObject(s3MealParams, function(err, data) {
                                    if (err) {
                                        console.log('XXX: Error in post(/delete_meal)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: mealOwnerId})->mealOwner.save()->User.find({})->User.bulkWrite(bulkWriteArray)->meal.remove()->s3.deleteObject(s3MealParams)');
                                        console.log(err);
                                        return;
                                    }
                                    res.send({success: 1});
                                });
                            });
                        });
                    });
                });
            });
        });
});

router.post('/like',
    connect.ensureLoggedIn(),
    function(req, res) {
        // get meal from mLab
        Picture.findOne({key: req.body.mealKey}, function(err, meal) {
            if (err) {
                console.log('XXX: Error in post(/like)->Picture.findOne({key: req.body.mealKey})');
                console.log(err);
                return;
            }
            // get id of meal owner
            const mealOwnerId = meal.userId;
            // get user from mLab
            User.findOne({_id: req.body.userId}, function(err, user) {
                if (err) {
                    console.log('XXX: Error in post(/like)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: req.body.userId})');
                    console.log(err);
                    return;
                }
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
                    if (err) {
                        console.log('XXX: Error in post(/like)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: req.body.userId})->User.findOne({_id: mealOwnerId})');
                        console.log(err);
                        return;
                    }
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
                            if (err) {
                                console.log('XXX: Error in post(/like)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: req.body.userId})->User.findOne({_id: mealOwnerId})->mealOwner.save()');
                                console.log(err);
                                return;
                            }
                            // save updates to user in mLab
                            user.save(function(err) {
                                if (err) {
                                    console.log('XXX: Error in post(/like)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: req.body.userId})->User.findOne({_id: mealOwnerId})->mealOwner.save()->user.save()');
                                    console.log(err);
                                    return;
                                }
                                res.send({success: 1});
                            });
                        });
                    } else {
                        user.save(function(err) {
                            if (err) {
                                console.log('XXX: Error in post(/like)->Picture.findOne({key: req.body.mealKey})->User.findOne({_id: req.body.userId})->User.findOne({_id: mealOwnerId})->user.save()');
                                console.log(err);
                                return;
                            }
                            res.send({succes: 1});
                        });
                    }
                });
            });
        });
});

router.get('/matches',
    connect.ensureLoggedIn(),
    function(req, res) {
        // create skeleton of JSON object that will be sent
        var matchesJson = {
            matches     : []
        };
        // get user from mLab
        User.findOne({_id: req.query.userId}, function(err, user) {
            if (err) {
                console.log('XXX: Error in get(/matches)->User.findOne({_id: req.query.userId})');
                console.log(err);
                return;
            }
            var matchIndex = 0;
            // for each userId in matches, get match from mLab and add match's ID and name to matchesJson
            addMatches();

            function addMatches() {
                if (matchIndex >= user.matches.length) {
                    res.send(matchesJson);
                    return;
                } else {
                    // get match from mLab
                    User.findOne({_id: user.matches[matchIndex]}, function(err, matchUser) {
                        if (err) {
                            console.log('XXX: Error in addMatches()->User.findOne({_id: user.matches[matchIndex]})');
                            console.log(err);
                            return;
                        }
                        // add match's ID and name to matchesJson
                        const matchJson = {
                            userId  : user.matches[matchIndex],
                            name    : matchUser.name
                        }
                        matchesJson.matches.push(matchJson);
                        matchIndex++;
                        addMatches();
                    });
                }
            }
        });
});

function getUserProfile(userId, res) {
    // get user from mLab
    User.findOne({_id: userId}, function(err, user) {
        if (err) {
            console.log('XXX: Error in getUserProfile()->User.findOne({_id: userId})');
            console.log(err);
            return;
        }
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
                    if (err) {
                        console.log('XXX: error in addMealsToUserProfileJson()->s3.getSignedUrl(getObject, urlParams)');
                        console.log(err);
                        return;
                    }
                    // get meal metadata from mLab
                    Picture.findOne({key: mealKey}, function(err, mealMetadata) {
                        if (err) {
                            console.log('XXX: error in addMealsToUserProfileJson()->s3.getSignedUrl(getObject, urlParams)->Picture.findOne({key: mealKey})');
                            console.log(err);
                            return;
                        }
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
