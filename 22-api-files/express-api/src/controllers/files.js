const path = require('path');

module.exports.uploadFiles = (req, res) => {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: 'Successfully uploaded files' });
};

module.exports.downloadFile = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../../files', filename);
  res.download(filePath);
};