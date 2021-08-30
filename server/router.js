const router = require('express').Router();
const controllers = require('./controllers');
const passport = require('./passport/index');

router.get('/users', controllers.getUser);
router.post('/users', controllers.createUser);

router.post(
  '/users/login',
  (req, res, next) => {
    console.log('login route, req.body: ', req.body);
    next();
  },
  passport.authenticate('local'),
  controllers.login
);

router.get('/users/logout', controllers.logout);

module.exports = router;
