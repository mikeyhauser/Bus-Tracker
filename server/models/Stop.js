const { Schema, model } = require('mongoose');


const stopSchema = new Schema(
    {   
        route: {
            type: Number
        },
        location: {
            type: String,
            required: true,
            trim: true
        },
        students: [
            ],
        order: {
            type: Number,
            required: true,
            trim: true
        }

    });

const stop = model('stop', stopSchema);
module.exports = stop;
