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

<<<<<<< HEAD
const Breakdown = model('Breakdown', breakdownSchema);

module.exports = Breakdown;
=======
const breakdown = model('breakdown', breakdownSchema);

module.exports = breakdown;
>>>>>>> 3e9b66d66cd31f254a15ec4f54d60706797c95e0
