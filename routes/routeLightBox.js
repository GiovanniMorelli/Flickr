var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/lightBox', function(req, res, next) {
    res.render('template/lightbox.jade');
});

module.exports = router;