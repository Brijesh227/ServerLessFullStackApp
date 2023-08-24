import serverless from "serverless-http";
import startServer from "./app";

const binaryMimeTypes = [
    "application/javascript",
    "application/json",
    "application/octet-stream",
    "application/xml",
    "image/jpeg",
    "image/png",
    "image/gif",
];

export const handler = async () => {
    try {
        const server = await startServer();
        if (server) {
            return serverless(server, {
                binary: binaryMimeTypes,
            })
        }
    } catch (error) {
        console.log("erro from lambda", error);
        return undefined;
    }
}
