const winston = require('winston');

const { format, transports, createLogger } = winston;
const { combine, timestamp, printf, colorize } = format;

// Formato personalizado para mostrar información detallada
const customFormat = printf(({ timestamp, level, message }) => {
    return `[${timestamp}] ${level}: ${message}`;
});

const logger = createLogger({
    level: 'info', // Puedes cambiar a 'debug' para obtener más detalles
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        colorize(),
        customFormat
    ),
    transports: [
        new transports.Console()
    ],
});

module.exports = logger;
