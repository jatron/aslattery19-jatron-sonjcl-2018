// dependencies
const express = require('express');
const router = express.Router();

// public endpoints
router.get('/', function(req, res, next) {
  res.sendFile('home.html', { root: 'src/views'});
});

router.get('/meal_match', function(req, res) {
  res.sendFile('meal_match.html', { root: 'src/views' });
});

module.exports = router;
