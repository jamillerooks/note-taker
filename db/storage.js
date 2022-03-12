const fs = require('fs');
const util = require('util');
const uuid = require('uuid').v4;

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

class Storage {
	write(note) {
		return writeNote('db/db.json', JSON.stringify(note));
	}

	read() {
		return readNote('db/db.json', 'utf8');
	}

	getNotes() {
		return this.read().then((notes) => {
			return JSON.parse(notes) || [];
		});
	}

	addNote(note) {
		const { title, text } = note;
		if (!title || !text) {
			throw new Error('title and text are required');
		}

		const newNote = { title, text, id: uuid() };
		return this.getNotes()
			.then((notes) => [...notes, newNote])
			.then((updateNotes) => this.write(updateNotes))
			.then(() => newNote);
	}

	deleteNote(id) {
		return this.getNotes()
			.then((notes) => notes.filter((note) => note.id !== id))
			.then((filteredNotes) => this.write(filteredNotes));
	}
}
module.exports = new Storage();
