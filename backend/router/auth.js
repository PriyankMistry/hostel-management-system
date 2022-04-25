const express = require('express');
const bcrypt = require('bcrypt'); //encryption library

//importing models
const Student = require('../model/studentSchema');
const Warden = require('../model/wardenSchema');
const Admin = require('../model/adminSchema');
const LeaveForm = require('../model/leaveformSchema');

const router = express.Router(); //for routing purposes


router.get('/yo', async (req, res) =>{
    res.send('y')
})
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
                res.status(201).json({role: userLogin.role})
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

module.exports = router;


