const express = require('express');
const router = express.Router();

const Student = require('../model/studentSchema');
const Warden = require('../model/wardenSchema');
const Admin = require('../model/adminSchema');
const LeaveForm = require('../model/leaveformSchema');

router.post('/leaveform', async (req,res) => {

    let type=''

    const { email, appdate, depdate, deptime, arrdate, arrtime, reason, destination, cpersonName, cpersonRelation, cpersonPhone} = req.body
    // if(!email || !appdate || !depdate || !arrdate || !deptime || !arrtime || !reason || !destination || !cpersonName || !cpersonRelation || !cpersonPhone){
    //     return res.status(422).json({error: 'Please fill in all the required fields.'})
    // }

    if(! await Student.findOne({email})){
        return res.status(422).json({ error: "This email doesn't exist."})
    }

    let d1 = new Date(arrdate) // new Date() constructor return object having all info of the date
    let d2 = new Date(depdate)

    console.log(d1, arrdate)

    let timediff= Math.abs(d1.getTime() - d2.getTime()); //getTime() returns no of milliseconds since january 1, 1970
    let daydiff = Math.ceil(timediff/(24*60*60*1000))

    if(daydiff>=1){
        type = 'Long Leave'
    }
    else{
        type = 'Short Leave'
    }
    const leaveform = new LeaveForm({ email, appdate, depdate, deptime, arrdate, arrtime, reason, destination, cperson:{name:cpersonName, relation:cpersonRelation, phone:cpersonPhone}, type})
    
    try{

        if(await leaveform.save()){
            res.status(201).json({ message: "Leave Form submitted successfuly!" })
        }

    }catch(err){
        console.log(err)
    }

})


module.exports = router
