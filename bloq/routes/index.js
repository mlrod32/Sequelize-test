var express = require('express');
var router = express.Router();
var Post  = reequire('../models');

var posts = Post.findAll({
	include:[]
}).then((res)=>{
	console.log(res);
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
