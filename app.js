const express = require('express');
const app = express();
const morgan = require('morgan');

const articleRoutes = require('./api/routes/articles');
const dealRoutes = require('./api/routes/deals');

app.use(morgan('dev'));

app.use('/articles', articleRoutes);
app.use('/deals', dealRoutes);
module.exports = app;
