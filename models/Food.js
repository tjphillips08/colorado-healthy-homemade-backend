const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema(
    { 
    name:{type:String, required:true},  
    desc: {type:String, required:true},
    day:{type:String, required:true}, 
    image: {type:String, required:true},  
    portions: {type:Number, required:true},  
    created: {type:Date, required:true, default:Date.now},

    

    },
    
    {timestamps: true}


    
    );

    const Food = mongoose.model('Food', FoodSchema);

    module.exports = Food;