var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var dbURI = 'mongodb://127.0.0.1/locolink';

const options = {
  promiseLibrary: global.Promise,
  useMongoClient: true,
};
mongoose.connect(dbURI,options);
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});