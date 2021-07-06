const { Schema, model } = require('mongoose');

const breakdownSchema = new Schema(
    {
        busNumber: {
            type: Number,
            required: true,
            unique: true,
            trim: true
        },
        mechanicalProblem: {
            type: String,
            trim: true,
            required: true
        },
        dateOfBreakdown: {
            type: String,
            required: true
        },

        assignedMechanic: {
            type: String
        },

        partsOrdered: {
            type: Boolean
        },
        projectedCompletion: {
            type: String
        }

    }
);

const breakdown = model('breakdown', breakdownSchema);

module.exports = breakdown;