// dependencies
const express = require('express');

// models
const User = require('../models/user');

const router = express.Router();

// api endpoints
// router.get('/user', function(req, res) {
// //  User.findOne({ _id: req.query._id }, function(err, user) {
// //    if (err) console.log(err);
// //    else {
// //      res.send(user);
// //    }
// //  });
// 	res.send({ _id: req.query._id, name: 'Me Myname', fbid: '', // change 'image' to 'url' !!
//       meals: [
// 		{	key: '1234',
// 			tagline: 'spaghetti',  // now tagline fix in profile.js!!
// 			url: 'http://gbc.blob.core.windows.net/media/img57915.jpg',
// 			description: 'uses lots of tomatoes', // now description
// 			allergens: 'peanuts, gluten',
// 			ingredients: 'spaghetti, spaghetti sauce'
// 		},
// 		{	key: '1234',
// 			tagline: 'meatballs',
// 			url: 'http://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/12/29/0/CCDRD221_meatballs-tomato-sauce_s4x3.jpg.rend.hgtvcom.616.462.suffix/1357779682604.jpeg',
// 			description: 'not vegetarian-friendly',
// 			allergens: 'lactose',
// 			ingredients: 'meat, ball'

// 		},
// 		{	key: '1234',
// 			tagline: 'chocolate souffle',
// 			url: 'https://assets.marthastewart.com/styles/wmax-750/d27/chocolate-souffle-med107742/chocolate-souffle-med107742_horiz.jpg?itok=h6VrTFqc',
// 			description: 'yummy!',
// 			allergens: 'cacao, lactose',
// 			ingredients: 'chocolateflour'
// 		}
// 	  ]
//     });
// });

// who am i (from catbook)
router.get('/whoami', function(req, res) {
	res.send({ _id: req.query._id,
      user:
		{	name: 'Johnny Cash',
			image: 'https://fthmb.tqn.com/ggyEhoAmPjVIl4I8PwohsgfjU-E=/768x0/filters:no_upscale()/Made-of-Money-by-Jan-Stromme-GettyImages-641601160-59f4f8f2aad52b001048a0f2.jpg',
			school: 'Money Insitute of Technology'
		}
    })
  // if(req.isAuthenticated()){
  //   res.send(req.user);
  // }
  // else{
  //   res.send({});
});

router.get('/profile', function(req, res) {
//  User.findOne({ _id: req.query._id }, function(err, user) {
//    if (err) console.log(err);
//    else {
//      res.send(user);
//    }
//  });
    res.send(
        {
      userId            :   "12345",
      name              :   "Bobby Hill",
      school            :   "MIT",
      bio               :   "I <3 cupcakes",
      url               :   "https://chwomp.files.wordpress.com/2013/07/bobbyhill.jpg",
      meals             : 
      [
        {   key: '1',
            tagline: 'spaghetti',  // now tagline fix in profile.js!!
            url: 'http://gbc.blob.core.windows.net/media/img57915.jpg',
            description: 'uses lots of tomatoes', // now description
            allergens: 'peanuts, gluten',
            ingredients: 'spaghetti, spaghetti sauce'
        },
        {   key: '2',
            tagline: 'meatballs',
            url: 'http://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/12/29/0/CCDRD221_meatballs-tomato-sauce_s4x3.jpg.rend.hgtvcom.616.462.suffix/1357779682604.jpeg',
            description: 'not vegetarian-friendly',
            allergens: 'lactose',
            ingredients: 'meat, ball'

        },
        {   key: '3',
            tagline: 'chocolate souffle',
            url: 'https://assets.marthastewart.com/styles/wmax-750/d27/chocolate-souffle-med107742/chocolate-souffle-med107742_horiz.jpg?itok=h6VrTFqc',
            description: 'yummy!',
            allergens: 'cacao, lactose',
            ingredients: 'chocolateflour'
        }
      ]
    })
});

/*

requests for profile page:
- API request /api/profile: pass user ID, server sends JSON obj with prof pic, user, school, bio, 


for adding image:
send 
*/

module.exports = router;
