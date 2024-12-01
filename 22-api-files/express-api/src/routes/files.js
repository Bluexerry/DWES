const { Router } = require('express');
const multer = require('multer');
const filesController = require('../controllers/files');

const router = Router();
const upload = multer({ dest: 'files/' });

router.post('/upload', upload.array('files'), filesController.uploadFiles);
router.get('/download/:filename', filesController.downloadFile);

module.exports = router;