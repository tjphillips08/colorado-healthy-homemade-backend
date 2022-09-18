
require('dotenv').config()

// require('./config/db.connection')

const express = require ('express')
// const cors = require('cors')
// const morgan = require('morgan')

const {PORT = 4000} = process.env

const app = express()

// create a test route 

app.get('/',(req,res) => {
res.send('Hello World')

})



app.listen(PORT, ()=> console.log(`listening on ${PORT}`)) 