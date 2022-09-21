const dotenv = require('dotenv');
const cloudinaryModule = require('cloudinary');

dotenv.config();

const cloudinary = cloudinaryModule.v2

cloudinary.config({
    cloud_name: process.env.CL_NAME,
    api_key: process.env.CL_APIKEY,
    api_secret: process.env.CL_SECRET,
    secure: true
});

// console.log(cloudinary.config());