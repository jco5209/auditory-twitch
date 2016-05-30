var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// require routes for short-hand setup
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// http request logging (:mathod, :url, :status, :response-time-ms, :res)
app.use(logger('dev'));
// intercepts and parses set data & populates req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// similar to bodyParser, except for cookies ( req.cookies )
app.use(cookieParser());
// express & node function which makes public directory accesible from just /public/*
app.use(express.static(path.join(__dirname, 'public')));

// short-hand setup | paths defined as only '/' now | paths are now mini-apps
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// next() is literal | 'next in stack if applicable'

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
