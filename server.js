require('dotenv').config()

require('./config/db.connection')

const express = require ('express')
const cors = require('cors')
const morgan = require('morgan')

const {PORT} = process.env