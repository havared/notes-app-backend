const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const update = ({ Note }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const note = await Note.findOne({ _id });
    if(note){
        _.extend(note, req.body);
        await note.save();
        return sendOne(res, { note });
    }else {
         res.status(200).send({ message: 'Not found' });
    }
  } catch (error) {
      console.log('Error', error);
      next(error);
  }
};


module.exports= { update };
