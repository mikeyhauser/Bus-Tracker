const { Schema, model } = require('mongoose');


const stopSchema = new Schema(
    {
        location: {
            type: String,
            required: true,
            trim: true
        },
        students: [
            {
              type: Schema.Types.ObjectId,
              ref: "Student"
            }],
        order: {
            type: Number,
            required: true,
            trim: true
        }

    });

const Stop = model('Stop', stopSchema);
module.exports = Stop;
