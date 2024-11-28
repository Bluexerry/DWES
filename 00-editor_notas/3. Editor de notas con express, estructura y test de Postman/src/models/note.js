const fs = require('fs');
const path = require('path');
const notesDir = path.join(__dirname, '../../notas');

if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir);

class Note {
    static getAllNotes() {
        return fs.readdirSync(notesDir).map(file => path.basename(file, '.note'));
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