const express = require('express');
const bcrypt = require('bcrypt'); //encryption library

//importing models
const Student = require('../model/studentSchema');
const Warden = require('../model/wardenSchema');
const Admin = require('../model/adminSchema');
const LeaveForm = require('../model/leaveformSchema');

const router = express.Router(); //for routing purposes


router.post('/login', async (req,res) =>{

    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(422).json({error: 'Please fill the details!'})
        }
        //checking if user mail exists in the database

        const userLogin = await Student.findOne({email}) || await Warden.findOne({email}) || await Admin.findOne({email}) //{email:email}

        if(!userLogin){
            return res.json({error: 'Enter correct credentials!'})
        }

        try{
            if(await bcrypt.compare(password, userLogin.password)){
                console.log(userLogin)
                res.status(201).json({role: userLogin.role,userEmail:userLogin.email})
            }
            else{
                res.json({error: 'Enter correct credentials!'})
            }
        } catch(err){
            console.log(err)
        }
    }catch(err){
        console.log(err)
    }
})


router.get('/warden/leaveapplications', async (req,res) => {

    const datas = [];

        let leaveforms = await LeaveForm.find();
      
        //  leaveforms.map(async (leaveform) => {
        //         const student =  await Student.findOne({email:leaveform.email})
        //         const {name, block, rollno, room, course} = student;
        //         datas.push({name, block, rollno, room, course,leaveform});
        // })

        for(var i=0;i<leaveforms.length;i++){
            const student =  await Student.findOne({email:leaveforms[i].email})
            const {name, block, rollno, room, course} = student;
            datas.push({name, block, rollno, room, course,leaveform:leaveforms[i]});
        }

        return res.status(200).json(datas)
         
     })




router.post('/warden/leaveapplications/update', async(req,res) => {
    const doc = await LeaveForm.findOneAndUpdate({_id:req.body._id},
    {status:req.body.status},{new: true})

    res.status(201).send(doc)


})



module.exports = router;


