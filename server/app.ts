import express from 'express';
import connectDb from "./config/dbConfig";
import authRoute from "./routes/auth";

import dotenv from "dotenv";
dotenv.config();

const app: express.Application = express();

export default async function startServer() {
    try {
        await connectDb();
        app.use("/auth", authRoute);
        return app;
    } catch (error) {
        throw new Error(`${error}`);
    }
}
