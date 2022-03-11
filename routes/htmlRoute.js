const express = require('express');
const router = express.Router();
const path = require('path');

//HTML calls

//Call for Home Page
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Call for notes.html
router.get('notes/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
