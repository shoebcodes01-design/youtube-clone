import mongoose from "mongoose";
import { db_name } from "../constant.js";

const connectDb = async () => {
    const MONGO_URL = process.env.MONGODB_URI;
    const connectionInstance = await mongoose.connect(`${MONGO_URL}/${db_name}`);
    console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
};
export default connectDb;
