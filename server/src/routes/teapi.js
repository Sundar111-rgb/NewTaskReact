const  express = require('express');
const detailsRoute = require('../customer/detailsRoute');

const app = express();

app.use('/details',detailsRoute);

module.exports = app;
