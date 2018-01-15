const mongoose = require('mongoose');

// set up mongoDB connection
const mongoURL = 'mongodb://jatron:qwerty123@ds255797.mlab.com:55797/lets_eat';
const options = {
  useMongoClient: true
};
mongoose.connect(mongoURL, options);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// db error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
