// dependencies
const express = require('express');

// models
const User = require('../models/user');

const router = express.Router();

// api endpoints
// router.get('/user', function(req, res) {
//   User.findOne({ _id: req.query._id }, function(err, user) {
//     if (err) console.log(err);
//     else {
//       res.send(user);
//     }
//   });
// });

router.get('/meals', function(req, res){
//     res.send(
//         meals: [
//         {
//             key           :   "key1",
//             url           :   "url",
//             authorName    :   "Alexis",
//             tagline       :   "tagline",
//             description   :   "description",
//             ingredients   :   "ingredients",
//             allergens     :   "allergens"
//         }]
//         )
// });

    res.send({ _id: req.query._id, name: 'Me Myname', fbid: '',
          meals: [
            {   key: '1234',
                url: '/static/test-images/padthai.jpg',  
                authorName: 'alexis',
                tagline: "pad thai",
                description: 'this is my pad thai recipe',
                ingredients: 'peanuts, noodles, limes, tofu, egg',
                allergens: 'peanuts, egg'
            },
            {   key: '1234',
                url: '/static/test-images/dumplings.jpg', 
                authorName: 'alexis',
                tagline: "dumplings",
                description: 'this is my dumpling recipe', 
                ingredients: 'bread, pork, soy sauce, vegetables',
                allergens: 'meat'

            },
            {   key: '1234',
                url: '/static/test-images/hotdog.jpg', 
                authorName: 'alexis',
                tagline: "hot dog",
                description: 'my hot dog recipe', 
                ingredients: 'bun, meat, ketchup, mustard',
                allergens: 'meat, wheat'
            }
          ]
        })
});


module.exports = router;
