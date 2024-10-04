//===========
// Imports
//===========
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

//===========
// Const
//===========
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

//=====================
// Cloudinary Config
//=====================
export const setCloudinary = () =>
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });
