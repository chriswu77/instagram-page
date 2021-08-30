const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/instagram';

const dbConnection = mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log(`Connected to: ${mongoURI}`);
    return db.connection.getClient();
  })
  .catch((err) => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = dbConnection;
