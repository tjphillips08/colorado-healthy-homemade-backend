const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({ 
    name:String,
    type: String,
    image: String,
    cuisine: String,

    }, {timestamps: true});

    const Food = mongoose.model('Food', FoodSchema);

    module.exports = Food;