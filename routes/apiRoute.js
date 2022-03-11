const express = require('express');
const router = express.Router();
const storage = require('../db/storage');

//Gets existing notes
router.get('/notes', (req, res) => {
	storage
		.getNotes()
		.then((notes) => {
			res.json(notes);
		})
		.catch((e) => {
			res.stat(500).json(e);
		});
});

//Post new note
router.post('/notes', (req, res) => {
	console.log(req.body);
	storage
		.addNote(req.body)
		.then((notes) => {
			res.json(notes);
		})
		.catch((e) => {
			res.stat(500).json(e);
		});
});

router.delete('/notes:id', (req, res)=>{
    storage.removeNote(req.params.id).then(() =>res.json({ok: true}))
    .catch((e) => res.status(500).json(e))
});

module.exports = router;
