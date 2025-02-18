var express = require('express');
var router = express.Router();
/////////////////////////////////////////////////
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/////////////////////////////////////////////////
router.get('/transporte',( req, res )=>{
  res.render('home/transporte')
});
////////////////////////////////////////////////
router.get('/hospedaje',( req, res )=>{
  res.render('home/hospedaje')
});
///////////////////////////////////////////////
router.get('/turismo',( req, res )=>{
  res.render('home/turismo')
});
module.exports = router;

