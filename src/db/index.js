import dotenv from "dotenv";
dotenv.config();
import mongoose from "mogoose";
import { db_name } from "../constant.js";
const MONGO_URL=process.env.MONGODB_URI;
const connectDb=async()=>{
    try{
       const connnectionInstant= await mongoose.connect(MONGO_URL);
        console.log(`/n MongoDB conneted !! DB HOST ${connnectionInstant}`);
    }catch(error){
        console.error("MONGODB CONNECTION ERROR:",error);
        process.exit(1);

    }
}