const { Schema, model } = require('mongoose');

const busSchema = new Schema(
    {
      busNumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true
      },
      stops: {
        type: Number
      },
      students: 
      [
        {
          type: String
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

      
    }
  );
  
  const Bus = model('Bus', busSchema);
  
  module.exports = Bus;