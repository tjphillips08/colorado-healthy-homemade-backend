const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema(
    { 
    name:{type:String, required:true},  
    desc: {type:String, required:true},
    day:{type:String, required:true}, 
    image: {type:String, required:true},  
    portions: {type:Number, required:true},  
    created: {type:Date, required:true, default:Date.now},
    // onwer:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
    

    },
    
    {timestamps: true}

    //632b0457434712d1b6bb829e
    
    );

    const Food = mongoose.model('Food', FoodSchema);

    module.exports = Food;