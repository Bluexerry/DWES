const expressLoader = require('./express');

module.exports.init = (app) => {
  expressLoader(app);
};