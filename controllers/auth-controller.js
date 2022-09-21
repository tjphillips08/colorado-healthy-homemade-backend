const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const {User} = require('../models')
const {createUserToken} = require('../middleware/auth');
const { authenticate } = require('passport');


// AUTH REGISTER ROUTE - POST
router.post('/register',async(req, res) =>{
    try{
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(req.body.password, salt)
        
        const pwStore = req.body.password
        
        req.body.password = passwordHash
        console.log(req.body)
        
        const newUser = await User.create(req.body)
        if(newUser){
            res.status(201).json({
            currentUser: newUser,
            isLoggedIn: true, 
            token: authenticatedUserToken
        })
    } else {
        res.status(400).json({err:"Something went wrong"})

    }
    }catch(err){
        res.status(400).json({message: err.message});
    
    }
    })

// AUTH LOGIN ROUTE - POST
router.post('/login',async(req, res) =>{
    try{
        const loggingUser = req.body.username;
        const foundUser = await User.findOne({username: loggingUser});
        const token = await createUserToken(req,foundUser);
        res.status(200).json({
            user:foundUser,
            isLoggedIn: true,
            token,
        })
    }catch(err){
        res.status(401).json({message: err.message});
    
    }
    })

    module.exports = router