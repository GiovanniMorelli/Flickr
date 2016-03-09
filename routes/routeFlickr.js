var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cardFlickr', function(req, res, next) {
    res.render('directives/cardFlickr.jade');
});

module.exports = router;