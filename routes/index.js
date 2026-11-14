/* 
Reference: Lecture Hands On with WebProject.zip, app.js and express generator structure
*/
let express = require('express');
let router = express.Router();

/* home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* projects me page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
