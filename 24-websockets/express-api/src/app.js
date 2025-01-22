const express = require('express');
const expressLoader = require('./loaders/express');

const app = express();

expressLoader(app);

module.exports = app;