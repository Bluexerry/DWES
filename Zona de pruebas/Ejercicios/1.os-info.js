const os = require('node:os'); // Importamos el módulo 'os' de Node.js 

console.log('Información del sistema operativo:');
console.log('-----------------------------------\n');
console.log(`Nombre del sistema operativo: ${os.platform()}`); // linux, windows, mac, etc
console.log(`Version del sistema oeprativo: ${os.release()}`); // 10, 8, 7, etc
console.log(`Arquitectura: ${os.arch()}`); // x64, x32
console.log(`CPUs: ${os.cpus().length}`); // Con estos vamos a poder escalar procesos en Node.js
console.log(`Memoria total: ${os.totalmem() / 1024 / 1024} bytes`); // bytes a megabytes
console.log(`Memoria libre: ${os.freemem() / 1024 / 1024} bytes`); // bytes a megabytes
console.log(`uptime ${os.uptime() / 60 / 60} horas`); // segundos a horas
console.log('-----------------------------------\n');