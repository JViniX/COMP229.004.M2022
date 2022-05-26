var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    userName: 'Julio'  });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', userName: 'Julio' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', userName: 'Julio' });
});

module.exports = router;
