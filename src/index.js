import connectDb from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed, starting server without DB:", error.message);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} (without DB)`);
        });
    });
