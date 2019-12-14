const { Router: router } = require('express');

const { get, getAllNotes } = require('./get');
const { create } = require('./create');
const { update } = require('./update');

module.exports = (models, { config }) => {
  const api = router();

  api.get('/', getAllNotes(models, { config }));
  api.get('/:_id', get(models, { config }));
  api.post('/', create(models, { config }));
  api.put('/:_id', update(models, { config }));

  return api;
};
