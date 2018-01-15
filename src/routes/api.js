// dependencies
const express = require('express');

// models
const User = require('../models/user');

const router = express.Router();

// api endpoints
router.get('/user', function(req, res) {
  User.findOne({ _id: req.query._id }, function(err, user) {
    if (err) console.log(err);
    else {
      res.send(user);
    }
  });
});

module.exports = router;
