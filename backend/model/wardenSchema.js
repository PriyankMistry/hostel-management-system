const mongoose = require('mongoose');


//Creating warden's schema

const wardenSchema = new mongoose.Schema({
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

    block:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true
    }
})

//creating warden registration collection
const Warden = mongoose.model('wardenRegistration', wardenSchema)

module.exports = Warden;