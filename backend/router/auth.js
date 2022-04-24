const express = require('express');
const bcrypt = require('bcrypt'); //encryption library

//importing models
const Student = require('../model/studentSchema');
const Warden = require('../model/wardenSchema');
const Admin = require('../model/adminSchema');
const LeaveForm = require('../model/leaveformSchema');

const router = express.Router(); //for routing purposes

router.get('/users', (req,res) =>{
    res.send('you attempted a GET request')
});

/*Using ASYNC AWAIT*/

router.post('/register/warden', async(req,res) =>{

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

router.post('/register/student', async(req,res) =>{

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



router.post('/student/leaveform', async (req,res) => {

    const { email, appdate, depdatetime, arrdatetime, reason, destination, cpersonName, cpersonRelation, cpersonPhone} = req.body
    if(!email || !appdate || !depdatetime || !arrdatetime || !reason || !destination || !cpersonName || !cpersonRelation || !cpersonPhone){
        return res.status(422).json({error: 'Please fill in all the required fields.'})
    }

    if(! await Student.findOne({email})){
        return res.status(422).json({ error: "This email doesn't exist."})
    }

    const leaveform = new LeaveForm({ email, appdate, depdatetime, arrdatetime, reason, destination, cperson:{name:cpersonName, relation:cpersonRelation, phone:cpersonPhone}})
    
    try{

        if(await leaveform.save()){
            res.status(201).json({ message: "Leave Form submitted successfuly!" })
        }

    }catch(err){
        console.log(err)
    }

})


module.exports = router;



/*Using PROMISES*/

// router.post('/register', (req,res) =>{

//     const {name, email, phone, password, cpassword, roll, room, block} = req.body;
    
//     //checking if all values are filled
//     if(!name || !email || !phone || !password || !cpassword || !roll || !room || !block){
//         return res.status(422).json({error: 'Please fill in the input'})
//     }

//     //Student has all documents of the collection(basically it is a collection)
//     //{schemaEmail:userEmail}
//     Student.findOne({email:email})
//     .then((userExist) => {
//         if(userExist) {
//             return res.status(422).json({error: 'This email already exists!'})
//         }

//         //creating instance(document) of the collection
//         const user = new Student({name, email, phone, password, cpassword, roll, room, block});
        
//         user.save().then(() => {
//             res.status(201).json({ message: "Created!"})
//         }).catch((err) => { res.status(500).json({ error: 'Failed'})})

//     }).catch(err => {console.log(err)})
 
//     // await user.save()

//     // try{
//     //     // const salt = await bcrypt.genSalt()
//     //     const hashedpwd = await bcrypt.hash(req.body.password, 10 /*salt*/ )
//     //     const user = { name: req.body.name, password: hashedpwd}
//     //     users.push(user)
//     //     res.status(201).send()  //function chaining
//     // }

//     // catch{
//     //     req.status(500).send()  
//     // }
    
// })

/***********************END************************************/

