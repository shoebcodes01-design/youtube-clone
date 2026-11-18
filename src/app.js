import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/videos", videoRouter);

export { app };
