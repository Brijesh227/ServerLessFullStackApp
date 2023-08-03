import express, { Express, Request, Response } from "express";
import connectDb from "./config/dbConfig";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

async function startServer() {
    try {
        await connectDb();

        app.listen(port, () => {
            console.log(`server listening on port: ${port}`);
        });
    } catch (error) {
        console.log("error while starting server", error);
    }
}

startServer();
