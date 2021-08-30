const User = require('../database/models/user');

const controllers = {
  login: async (req, res) => {
    console.log('logged in', req.user);
    res.status(200).send(req.user);
  },

  createUser: async (req, res) => {
    try {
      const { email } = req.body;
      const foundUser = await User.findOne({ email });
      if (foundUser) {
        res.status(200).send({
          error: 'User already exists',
        });
      } else {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send(newUser);
      }
    } catch (err) {
      console.log('signup error:', err);
    }
  },

  getUser: async (req, res) => {
    console.log('get user route', req.user);
    if (req.user) {
      res.status(200).send(req.user);
    } else {
      res.status(200).send(null);
    }
  },

  logout: (req, res) => {
    if (req.user) {
      req.logout();
      res.status(200).send('User has been logged out');
    } else {
      res.status(404).send('No user signed in');
    }
  },
};

module.exports = controllers;
