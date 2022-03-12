const path = require('path');
const router = require('express').Router();


//HTML calls


router.get('/notes', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//Call for Home Page
router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;
