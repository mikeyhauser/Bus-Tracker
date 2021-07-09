const { Schema, model } = require('mongoose');
const studentSchema = new Schema(
    {       
      name: {
        // this is student name
        type: String,
        required: true,
        trim: true
      },
      busNumber:   
      {
        type: Number
      },
      missedBus:
      {
        type: Boolean
      },
    
      contact:{
          type: String
      }
      
    }
  );
  
  const Student = model('Student', studentSchema);
  
  module.exports = Student;