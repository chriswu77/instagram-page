/* eslint-disable func-names */
/* eslint-disable object-shorthand */

const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const history = require('connect-history-api-fallback');
const passport = require('./passport/index');
const db = require('../database/index');
const router = require('./router');

const app = express();

app.use(
  history({
    rewrites: [
      {
        from: /^\/api\/.*$/,
        to: function (context) {
          return context.parsedUrl.pathname;
        },
      },
    ],
  })
);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  session({
    secret: 'ruggable',
    store: MongoStore.create({ client: db }),
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);

module.exports = app;
