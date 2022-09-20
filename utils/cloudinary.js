dotenv.config()
const cloudinary = cloudinaryModule.V2

cloudinary.config({
    cloud_name: process.env.CL_NAME,
    api_key:process.env.CL_APIKEY,
    api_serret:process.env.CL_SECRET
})

module.exports = cloudinary