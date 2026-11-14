/* 
Reference: Lecture Hands On with WebProject.zip, app.js and express generator structure
*/
var express = require('express');
var router = express.Router();

/* home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

module.exports = router;
