const { Router } = require('express');
const filesRoutes = require('./files');

const router = Router();

router.use('/files', filesRoutes);

module.exports = router;