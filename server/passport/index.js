/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const localStrategy = require('./localStrategy');
const User = require('../../database/models/user');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(localStrategy);

module.exports = passport;
