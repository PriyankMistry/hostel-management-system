const mongoose = require('mongoose')


//Creating student's schema

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },

    email:{
        type:String,
        required:true 
    },

    phone:{
        type:Number,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    cpassword:{
        type:String,
        required:true
    },

    rollno:{
        type:String,
        required:true
    },

    room:{
        type:Number,
        required:true
    },

    block:{
        type:String,
        required:true
    },

    course:{
        type:String,
        required:true
    },

    quota:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true
    }


})


//creating student registration collection
const Student = mongoose.model('studentRegistration', studentSchema) //(collection_name, schema)


module.exports = Student;