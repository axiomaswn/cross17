`use strict`
const LocalStrategy = require('passport-local').Strategy;
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const User = require('../models/user')

module.exports = function (passport) {

  passport.serializeUser(function(user, callback){
    callback(null, user)
  })

  passport.use('login-ujian', new LocalStrategy(function(usernameInput, passwordInput, done){

    User.findOne({ username: usernameInput }, function(err, data){
      if (!data) {
        done(null, false, {message: 'errrrrr'})
      }else{
        if (passwordHash.verify(passwordInput, data.password)) {
          done(null, data)
        }else{
          done(null, false, {message: 'errrrrxxxx'})
        }
      }

    })

  }))

}
