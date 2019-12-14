const get = ({ Note }, { config }) => async (req, res, next) => {
    const { _id } = req.params;
    try {
        const note = await Note.findOne({ _id });
        if(note) res.status(200).send({ note });
        else res.status(200).send({ message: 'Not found' });
    } catch (error) {
        next(error);
    }
};

const getAllNotes = ({ Note }, { config }) => async (req, res, next) => {
    const { _id } = req.params;
    try {
        const all_notes = await Note.find({}).sort({ created: -1 });
        if(all_notes) res.status(200).send({ all_notes });
        else res.status(200).send({ message: 'Notes not available' });
    } catch (error) {
        next(error);
    }
};


module.exports = { get, getAllNotes };
