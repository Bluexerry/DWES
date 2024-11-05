const fs = require('node:fs/promises');
const path = require('node:path');
const picocolor = require('picocolors');

const folder = process.argv[2] ?? '.';

async function ls(directory) {
    let files;

    try {
        files = await fs.readdir(folder)
    } catch (error) {
        console.error(picocolor.red(`Error al leer el archivo ${folder}`));
        process.exit(1);
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let fileStats;
        try {
            fileStats = await fs.stat(filePath); //Stats - información del archivo
        } catch (error) {
            console.error('Error al leer el archivo ${filePath}');
            return;
        }

        const isDirectory = fileStats.isDirectory()
        const fileType = isDirectory ? 'Dir:' : 'File:';
        const fileSize = fileStats.size;
        const fileModified = fileStats.mtime.toLocaleDateString();

        return `${fileType} ${picocolor.blue(file.padEnd(20))} ${picocolor.green(fileSize.toString().padStart(11))} ${picocolor.yellow(fileModified)}`;

    });

    const filesInfo = await Promise.all(filePromises);
    filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);
