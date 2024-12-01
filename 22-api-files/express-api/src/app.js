const express = require('express');
const loaders = require('./loaders');

const app = express();

loaders.init(app);

module.exports = app;