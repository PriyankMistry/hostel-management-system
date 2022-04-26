const mongoose = require('mongoose');

const leaveformSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },

    appdate:{
        type:Date,
        required:true
    },

    depdate:{
        type:Date,
        required:true
    },

    deptime:{
        type:String,
        required:true
    },

    arrdate:{
        type:Date,
        required:true
    },

    arrtime:{
        type:String,
        required:true
    },

    reason:{
        type:String,
        required:true
    },

    destination:{
        type:String,
        required:true
    },

    cperson: {
            name:{
                type:String,
                required:true
            },

            relation:{
                type:String,
                required:true
            },
        
            phone:{
                type:Number,
                required:true
            }

        },
    status: {
        type:String,
        default:"Pending"
    },

    type: {
        type:String,
        required:true
    }
    }
)


const LeaveForm = mongoose.model('leaveform', leaveformSchema);

module.exports = LeaveForm;