var express = require('express');
var path = require('path');
var router = express.Router();
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var db = require('./database/db');
var consign = require('consign');
var session = require('express-session');

var app = express();
require('./config/enviroment.config.js')(app, express, path);


///consign({ cwd: 'routes' }).include('api').into(router);
var port = normalizePort(process.env.PORT || '4000');
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

var server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade'); //extension of views

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public_dev')))


var development = process.env.NODE_ENV !== 'production';
if (development) {
  ///app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}
var production = process.env.NODE_ENV !== 'development';
if (production) {
  ////app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.use('/', index);
app.all('/api/v1/*', [require('./middlewares/validateRequest')]);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
