const { configureServer } = require("./server");
const { getParams } = require("./lib/DBparams");
const { connectToDB } = require("./lib/DBconnect");

async function initializeServer(params) {
    try {
        if (!params) {
            console.log("Fetching DB params");
            params = await getParams();
        }

        const pool = await connectToDB(params);
        console.log("DB initialized");

        configureServer(pool);
    } catch (error) {
        console.error("Error initializing server:", error);
        process.exit(1);
    }
}

(async() => {
    await initializeServer();
})();