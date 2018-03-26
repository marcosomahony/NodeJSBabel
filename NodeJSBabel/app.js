// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const tweetsRouter = require('./routes/tweets.routes');
const usersRouter = require('./routes/users.routes');

const app = express();

const cache = {};
app.get('*', (req, res, next) => {
  const response = req._response;
  if (cache[req.url]) {
    console.log('req', req.url);
    return res.json(cache[req.url]);
  }
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/tweets', tweetsRouter);
app.use('/users', usersRouter);

// metodo de cacheo [no funciona?]
app.get('*', (req, res, next) => {
  console.log('cacheo');
  const response = req._response;
  if (response) {
    cache[req.url] = response;
    return res.json(response);
  }
  next();
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ msg: err.message || 'error' });
});

module.exports = app;
