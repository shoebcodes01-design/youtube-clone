
import connectDb from "./db/index.js";

dotenv.config({
    path: "./.env"
});

connectDb();
