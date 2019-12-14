const express = require('express');
const { errorHandler } = require('../middleware');

// list of models here
const { Note } = require('../models/note');

// list of controllers here
const notes = require('../controllers/notes');

// combine models into one object
const models = { Note };

const routersInit = config => {
  const router = express();

  // register api points
  router.use('/notes', notes(models, { config }));
  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
