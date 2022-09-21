const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const {User} = require('../models')


// AUTH REGISTER ROUTE - POST
router.post('/register',async(req, res) =>{
    try{
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(req.body.password, salt)
        req.body.password = passwordHash
        console.log(req.body)
        res.status(200).json({message: 'success,hitting register '})
    }catch(err){
        res.status(404).json({message: err.message});
    
    }
    })

// AUTH LOGIN ROUTE - POST
router.post('/login',async(req, res) =>{
    try{
        res.status(200).json({message: 'success,hitting login '})
    }catch(err){
        res.status(404).json({message: err.message});
    
    }
    })

    module.exports = router