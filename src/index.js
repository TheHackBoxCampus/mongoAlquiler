import app from "./app.js";
import globalProperties from "./env/env.js";
import conx from "./config/db.js";

let stable = false

const start = async () => {
    try {
        stable = await conx();
        const $server = JSON.parse(globalProperties.SERVER);
        app.listen($server, () => console.log(`listening http://${$server.hostname}:${$server.port}`));
    } catch (err) {
        console.log(err)
    }
}

start();
export default stable; 