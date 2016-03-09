var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flickr' });
});

router.get('/templateFlickr', function(req, res, next) {
  res.render('template/dinamycContent.jade');
});






module.exports = router;
