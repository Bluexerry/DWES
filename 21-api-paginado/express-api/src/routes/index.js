const express = require('express');
const itemsRoutes = require('./items');

const router = express.Router();

router.use('/items', itemsRoutes);

module.exports = router;