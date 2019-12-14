const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const create = ({ Note }, { config }) => async (req, res, next) => {
    try {
        const note = new Note();
        if (!req.body.text) {
            throw new NotAcceptable(405, 'Text should be provided');
        }
        _.extend(note, req.body);
        await note.save();
        return sendOne(res, { note });
    } catch (error) {
        next(error);
    }
};

module.exports= { create };
