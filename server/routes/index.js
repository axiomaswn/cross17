var express = require('express');
var router = express.Router();
var passport = require('passport');
var userController = require('../controllers/user')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',passport.authenticate('login-ujian'), userController.login);

router.post('/register', userController.register);


module.exports = router;
