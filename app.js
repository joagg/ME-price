const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const articleRoutes = require('./api/routes/articles');
const dealRoutes = require('./api/routes/deals');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/articles', articleRoutes);
app.use('/deals', dealRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
