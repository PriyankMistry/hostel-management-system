const express = require('express')
const router = express.Router();

const bcrypt = require('bcrypt'); //encryption library
const Student = require('../model/studentSchema');
const Warden = require('../model/wardenSchema');
const Admin = require('../model/adminSchema');
const LeaveForm = require('../model/leaveformSchema');

router.post('/student', async(req,res) =>{

    const {name, email, phone, password, cpassword, rollno, room, block, course, quota} = req.body;
    let hashedpwd; //scope of the let variable is in the whole scope (router.post('./register',....))
    //checking if all values are filled
    if(!name || !email || !phone || !password || !cpassword || !rollno || !room || !block || !course || !quota){
        return res.status(422).json({error: 'Please fill in all the required fields.'})
    }

    try{
        //Student model has all documents of the collection(basically it is a collection)
        //{schemaEmail:userEmail}
        const userExist = await Student.findOne({email}) || await Warden.findOne({email}) || await Admin.findOne({email})
        if (userExist) {
            return res.status(422).json({ error: 'This email already exists.' })
        }

        if(password!=cpassword){
            return res.status(422).json({ error: "Both the passwords don't match." })
        }

        //Encrypting the password
        try {
            // const salt = await bcrypt.genSalt()
            //const hashedpwd = await bcrypt.hash(password, 10 /*salt*/)  THIS DIDNT WORK. In creating user, this variable wasnt getting called.
            hashedpwd = await bcrypt.hash(password, 10 /*salt*/)
        }catch {
            req.status(500).send({error: 'Could not hash'})
        }

        //creating instance(document) of the collection
        const user = new Student({ name, email, phone, password:hashedpwd, cpassword:hashedpwd, rollno, room, block, course, quota, role:'student'});  //{schemaEmail:userEmail}
        try{
            const userRegister = await user.save();
            if(userRegister) {
                res.status(201).json({ message: "Created the account successfuly!" })}
        } catch (err){
            res.status(500).json({ error: 'Failed to save the data in the database.' })
        }

    } catch (err){
        res.status(500).json({ error: 'Failed' })
    }
    
} )


router.post('/warden', async(req,res) =>{

    const {name, email, phone, password, cpassword, block} = req.body;
    let hashedpwd; //scope of the let variable is in the whole scope (router.post('./register',....))
    
    //checking if all values are filled
    if(!name || !email || !phone || !password || !cpassword || !block){
        return res.status(422).json({error: 'Please fill in all the required fields.'})
    }

    try{
        //Warden model has all documents of the collection(basically it is a collection)
        //{schemaEmail:userEmail}
        const userExist = await Warden.findOne({email}) || await Student.findOne({email}) || await Admin.findOne({email})
        if (userExist) {
            return res.status(422).json({ error: 'This email already exists.' })
        }

        if(password!=cpassword){
            return res.status(422).json({ error: "Both the passwords don't match." })
        }

        //Encrypting the password
        try {
            // const salt = await bcrypt.genSalt()
            //const hashedpwd = await bcrypt.hash(password, 10 /*salt*/)  THIS DIDNT WORK. In creating user, this variable wasnt getting called.
            hashedpwd = await bcrypt.hash(password, 10 /*salt*/)
        }catch {
            req.status(500).send({error: 'Could not hash'})
        }

        //creating instance(document) of the collection
        const user = new Warden({ name, email, phone, password:hashedpwd, cpassword:hashedpwd, block, role:'warden'});  //{schemaEmail:userEmail}
        try{
            const userRegister = await user.save();
            if(userRegister) {
                res.status(201).json({ message: "Created the account successfuly!" })}
        } catch (err){
            res.status(500).json({ error: 'Failed to save the data in the database.' })
        }

    } catch (err){
        res.status(500).json({ error: 'Failed' })
    }
    
})

module.exports = router;