const { Schema, model } = require('mongoose');

const busSchema = new Schema(
    {


      busNumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true
      },
      students: [
        {
          type: Schema.Types.ObjectId,
          ref: "Student"
        }],

      isRunning: {
        type: Boolean,
        required: true
      },
      engineHours: {
        type: Number,
      },
      daysToService: {
        type: Number
      }

      
    });
  
  const Bus = model('Bus', busSchema);
  
  module.exports = Bus;