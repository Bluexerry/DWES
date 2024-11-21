// src/loaders/routes.js
const express = require("express");
const userRoutes = require("../routes/users");

module.exports = (app) => {
  app.use(express.json());
  app.use("/users", userRoutes);
};