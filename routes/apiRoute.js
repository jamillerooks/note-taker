const router = require('express').Router();
const storage = require('../db/storage');

//Gets existing notes

router.get('/notes', (req, res) => {
    storage
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

//Post new note
router.post('/notes', (req, res) => {
    storage
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

//Delete note
router.delete('/notes/:id', (req, res) => {
    storage
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;


		

module.exports = router;
