const express = require('express');
const router = express.Router();
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')

const {Food} = require('../models')

///////////////////////////////
// ROUTES
////////////////////////////////

// FOOD INDEX ROUTE
router.get('/',async (req, res) => {
    try{
        const food = await Food.find({})
        res.json(food)
    } catch(err) {
        res.status(400).json(err)
    }
})
// FOOD CREATE ROUTE
router.post("/", async (req, res) => {
  try {
    // create new person
    res.json(await Food.create(req.body));
  } catch (err) {
    //send error

    res.status(400).json(err);
  }
});

      

  // GET FOOD BY ID
  router.get('/:id', async (req,res)=>{
    try {
        res.json(await Food.findById(req.params.id)).populate('owner, username').exec;
    }catch (err){
        res.status(400).json(err);
    }
  })

  // FOOD UPDATE ROUTE
  router.put('/:id', async (req,res)=>{
    try{
        res.json(
            await Food.findByIdAndUpdate(req.params.id, req.body, {new:true})
        )
    } catch (err) {
        res.status(400).json(err)
    }
  })

  router.delete('/:id',async (req, res) => {
    try {
        res.json(await Food.findByIdAndRemove(req.params.id))
    } catch (err) {
        res.status(400).json(err)
    }
  })


module.exports = router