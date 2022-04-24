
const bcrypt = require('bcrypt')


const pwd = 'admin123';

bcrypt.hash(pwd,10).then((a) =>{
    console.log(a)
})

