const express = require('express');
const router = express.Router();

///////////////////////////////
// ROUTES
////////////////////////////////

// FOOD INDEX ROUTE
router.get('/',async (req, res) => {
    res.status(200).json({message:"food index route"})
})

// FOOD CREATE ROUTE
router.post('/',async (req, res) => {
    res.status(200).json({message:"food create route"})
})


module.exports = router