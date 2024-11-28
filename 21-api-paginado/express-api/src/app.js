const express = require('express');
const loaders = require('./loaders/express');

const app = express();

loaders.init(app);

module.exports = app;