const Note = require('../../models/note');

module.exports = {
  create,
  find,
  edit,
}

function create(req, res) {
  try {
    const note = new Note(req.body);
    note.user = req.user._id;
    note.save();
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function find(req, res) {
  try {
    const notes = await Note.find({user: req.user._id})
    res.json(notes);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function edit(req, res) {
  try {
    // console.log(req)
    const note = await Note.find({content: req.body.content._id})
    note.content = req.body.content;
    note.save();
  } catch (err) {
    res.status(400).json(err);
  }
}