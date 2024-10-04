//=============
//Imports
//=============
import "dotenv/config";
import mongoose from "mongoose";

//==============
// Const
//==============
const { DB_PROD_MONGO, DB_TEST_MONGO, URL_MONGO, USER_MONGO, PASS_MONGO } = process.env;
//const ENV = process.env.VERCEL_ENV ?? "development";

//==============
// Connect DB
//==============
export const connectDB = async () => {
  console.log(`🔍 Checking 🛢️  database 🧮 connection...`);
  try {
    const BASE =
      process.env.VERCEL_ENV?.trim() === "production"
        ? `${DB_PROD_MONGO}`
        : `${DB_TEST_MONGO}`;
    await mongoose.connect(`${URL_MONGO}${BASE}`);
    console.log(`✅ Data base ${BASE} 🆗 is connected 💯 successfully.`);
  } catch (error) {
    console.log("❎ Unable to connect to the database ☠️ ");
    console.log(error.message);
  }
};
