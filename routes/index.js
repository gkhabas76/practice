var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main/index', { title: 'Express', subheading: "I am a main page" });
});

router.get('/about', function(req, res, next) {
	  res.render('main/about', { title: 'Express', subheading:"I am a about us page" });
});

router.get('/contact', function(req, res, next){
	res.render('main/contact',{title:"Contact", subheading:"I am a contact page"})
});

module.exports = router;
