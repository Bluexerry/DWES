const fs = require('fs');
const path = require('path');
const notesDir = path.join(__dirname, '../../notas');

// Crear el directorio 'notas' si no existe, con opción 'recursive'
if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
    console.log(`Directorio 'notas' creado en ${notesDir}`);
}

class Note {
    static getAllNotes() {
        try {
            return fs.readdirSync(notesDir)
                .filter(file => file.endsWith('.note'))
                .map(file => {
                    const filePath = path.join(notesDir, file);
                    const stats = fs.statSync(filePath);
                    return {
                        name: path.basename(file, '.note'),
                        size: stats.size,
                        createdAt: stats.birthtime,
                        updatedAt: stats.mtime
                    };
                });
        } catch (error) {
            console.error(`Error al leer el directorio 'notas': ${error.message}`);
            throw error;
        }
    }

    static getNoteContent(name) {
        const filePath = path.join(notesDir, `${name}.note`);
        if (fs.existsSync(filePath)) {
            return fs.readFileSync(filePath, 'utf8');
        }
        throw new Error('Note not found');
    }

    static createNote(name, content) {
        const filePath = path.join(notesDir, `${name}.note`);
        fs.writeFileSync(filePath, content);
    }

    static deleteNote(name) {
        const filePath = path.join(notesDir, `${name}.note`);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        } else {
            throw new Error('Note not found');
        }
    }

    static updateNoteContent(name, content) {
        const filePath = path.join(notesDir, `${name}.note`);
        if (fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, content);
        } else {
            throw new Error('Note not found');
        }
    }
}

module.exports = Note;