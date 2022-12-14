const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with /api/notes..
router.post('/', ensureLoggedIn, notesCtrl.create);
router.get('/find', ensureLoggedIn, notesCtrl.find);
router.put('/edit', ensureLoggedIn, notesCtrl.edit);

module.exports = router;