const express = require('express')
const cors = require('cors')

const app = express()

//using dotenv helps us access data from .env file
require('dotenv').config({path: './config.env'}) //this needs to be written only once for us to be able to access .env keys from anywhere
const PORT = process.env.PORT

require('./database/connection'); //server to database connection

//app.use(path, callback function); gets executed when the path hits. (after req is sent, app.use(), before res is sent)

app.use(express.json()) //to make our app parse the data in json  
app.use(cors()) //to relax the security so that requests can be made
app.use(require('./router/auth')) 


app.listen(PORT , () => console.log(`server running on ${PORT}`))



