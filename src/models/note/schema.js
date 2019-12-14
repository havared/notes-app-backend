const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checklistSchema = new Schema({
     item_name: { type: String, required: true },
     checked: { type: Boolean, default: false }
});

const schema = new Schema(
    {
        text: { type: String, required: true },
        is_checklist: { type: Boolean, default: false },
        checklist: [checklistSchema]
    },
    {
        timestamps: { createdAt: "created", updatedAt: "updated" }
    }
);

module.exports = { schema };
