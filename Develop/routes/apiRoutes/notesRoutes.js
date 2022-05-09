const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/Notes');
const db = require('../../db/db.json');

router.get('/notes' , (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();

    const note = createNewNote(req.body, db);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const note = deleteNote(req.params.id, db);
    res.json(note);
});

module.exports = router;