const express = require('express');
const routes = require('../routes');

const init = (app) => {
  app.use(express.json());
  app.use('/api', routes);
};

module.exports = {
  init,
};