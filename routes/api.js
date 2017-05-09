var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Api Home page');
});

router.get('/about', function(req, res) {
  res.send('Api About page');
});

module.exports = router;