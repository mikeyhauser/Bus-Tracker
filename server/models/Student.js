const { Schema, model } = require('mongoose');


const studentSchema = new Schema(
    {
        
      name: {
        type: String,
        required: true,
        trim: true
      },
      busNumber: {
          type: Number
      },
    
      contact:{
          type: Number
      }
      
    }
  );
  
  const Student = model('Student', studentSchema);
  
  module.exports = Student;
  