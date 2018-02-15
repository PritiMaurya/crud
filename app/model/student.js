const {mongoose} = require('../db/mongoose-connect');
const validator = require('validator');


const studentSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        trim: true
    },
    lname:{
        type:String,
        required: true,
        maxlength: 10,
        trim: true
    },
    email:{
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: "{value} is not valid"
        },
        trim: true
    },
    password:{
        type: String,
        trim: true
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    status:{
      type: Boolean,
      default: true
    },
    tokens:[
        {
            token:{
                type: String
            },access:{
                type: String
            }
        }
    ]
});






var Student = mongoose.model('student',studentSchema)

module.exports = {
    Student
};