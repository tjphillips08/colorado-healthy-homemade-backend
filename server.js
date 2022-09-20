///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables

require('dotenv').config();

require('./config/db.connection')


// import expres
const express = require ('express')
const cors = require('cors')
const morgan = require('morgan')

const PORT = process.env.PORT || 4000
const foodController = require('./controllers/food-controller')

// create application object
const app = express()

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// create a test route 
app.use('/food', foodController)

app.get('/',(req,res) => {
res.send('Hello World')

})



app.listen(PORT, ()=> console.log(`listening on ${PORT} ✅`))

//export app