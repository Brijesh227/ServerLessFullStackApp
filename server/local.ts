import startServer from "./app";
const port = process.env.PORT;

(async function () {
    try{
        const server = await startServer();
    
        server?.listen(port, () => {
            console.log(`server listening on port: ${port}`);
        });
    } catch(err) {
        console.log("error while starting server",err);
    }
})()
