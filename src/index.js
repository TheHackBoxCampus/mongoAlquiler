import app from "./app.js";
import globalProperties from "./env/env.js";

const start = () => {
    try {
        const $server = JSON.parse(globalProperties.SERVER); 
        app.listen($server, () => console.log(`listening http://${$server.hostname}:${$server.port}`)); 
    }catch(err) {
        throw Error(err)
    }
}

start(); 