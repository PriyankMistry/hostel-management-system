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

    depdatetime:{
        type:Date,
        required:true
    },

    arrdatetime:{
        type:Date,
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

        }
    }
)


const LeaveForm = mongoose.model('leaveform', leaveformSchema);

module.exports = LeaveForm;