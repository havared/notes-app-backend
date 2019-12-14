const mongoose = require('mongoose');
const { schema } = require('./schema');
const Note = mongoose.model('Note', schema);


module.exports = { Note };
