var express = require ('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render("products/product", {title:"Product", subheading:"I am a product page"});
})

router.get('/create', function(req, res, next){
	res.render('products/create',{title:"Product Creation", subheading:"I am a product creation page" });
})

router.get('/details', function(req, res, next){
	res.render('products/details',{title:"Product Creation", subheading:"I am a product creation page" });
})


module.exports= router;