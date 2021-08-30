const LocalStrategy = require('passport-local').Strategy;
const User = require('../../database/models/user');

const localStrategy = new LocalStrategy((username, password, done) => {
  User.findOne({ email: username }, async (err, user) => {
    console.log(user);
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, { message: 'Incorrect username' });
    }

    const validPassword = await user.checkPassword(password);
    if (!validPassword) {
      return done(null, false, { message: 'Incorrect password' });
    }

    return done(null, user);
  });
});

module.exports = localStrategy;
