const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema(
    { 
    name:{type:{type:String, required:true},  
    type: {type:String, required:true},
    day:{type:String, required:true}, 
    image: {type:String, required:true},  
    cuisine: {type:String, required:true},  

    },
    
    {timestamps: true}
    
    );

    const Food = mongoose.model('Food', FoodSchema);

    module.exports = Food;