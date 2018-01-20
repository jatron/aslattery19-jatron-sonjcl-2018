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
            {   key: '1',
                url: '/static/test-images/padthai.jpg',  
                authorName: 'alexis',
                tagline: "pad thai",
                description: 'this is my pad thai recipe',
                ingredients: 'peanuts, noodles, limes, tofu, egg',
                allergens: 'peanuts, egg'
            },
            {   key: '12',
                url: '/static/test-images/dumplings.jpg', 
                authorName: 'alexis',
                tagline: "dumplings",
                description: 'this is my dumpling recipe', 
                ingredients: 'bread, pork, soy sauce, vegetables',
                allergens: 'meat'

            },
            {   key: '123',
                url: '/static/test-images/hotdog.jpg', 
                authorName: 'alexis',
                tagline: "hot dog",
                description: 'my hot dog recipe', 
                ingredients: 'bun, meat, ketchup, mustard',
                allergens: 'meat, wheat'
            },
            {   key: '1234',
                url: '/static/test-images/milkshake.jpg', 
                authorName: 'alexis',
                tagline: "milkshake",
                description: 'my milkshake recipe', 
                ingredients: 'ice cream, milk, vanilla',
                allergens: 'dairy'
            },
            {   key: '12345',
                url: '/static/test-images/ramen.jpg', 
                authorName: 'alexis',
                tagline: 'ramen',
                description: 'my ramen recipe', 
                ingredients: 'noodles, soup, veggies, egg',
                allergens: 'egg'
            },
            {   key: '123456',
                url: '/static/test-images/salad.jpg', 
                authorName: 'alexis',
                tagline: "salad",
                description: 'my salad recipe', 
                ingredients: 'lettuce, tomatoes, carrots, dressing',
                allergens: 'none'
            },
            {   key: '1234567',
                url: '/static/test-images/sandwich.jpg', 
                authorName: 'alexis',
                tagline: "sandwich",
                description: 'my sandwich recipe', 
                ingredients: 'bread, meat, cheese, lettuce, tomato',
                allergens: 'meat, dairy'
            },
            {   key: '12345678',
                url: '/static/test-images/spaghetti.jpg', 
                authorName: 'alexis',
                tagline: "spaghetti",
                description: 'my spaghetti recipe', 
                ingredients: 'pasta, pasta sauce',
                allergens: 'none'
            },
            {   key: '123456789',
                url: '/static/test-images/sushi.jpg', 
                authorName: 'alexis',
                tagline: "sushi",
                description: 'my sushi recipe', 
                ingredients: 'rice, seaweed, fish',
                allergens: 'fish'
            }

          ]
        })
});


module.exports = router;
