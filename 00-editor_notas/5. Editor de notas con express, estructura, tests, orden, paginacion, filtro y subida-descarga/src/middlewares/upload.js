const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configuración de multer para almacenar archivos .note
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../../uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true }); // Crear la carpeta si no existe
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    },
});

const fileFilter = (req, file, cb) => {
    if (path.extname(file.originalname) === '.note') {
        cb(null, true);
    } else {
        cb(new Error('Solo se permiten archivos con extensión .note'), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;