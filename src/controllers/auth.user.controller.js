import generateToken from "../libs/generateKey.js";
import globalProperties from "../env/env.js";
import axios from "axios";
import login_md from "../storage/auth.user.login.js";

const gu = async () => {
    let $server = JSON.parse(globalProperties.SERVER);
    try {
        let c = await axios.get(`http://${$server.hostname}:${$server.port}/users`)
        let u = await c.data; 
        return u; 
    }catch (err) {
        console.log(err.message)
    }
}

const login = async (req, res) => {
    let d = req.body; 
    let t = await generateToken(); 
    let u = await gu(); 
    let ru = []; 

    for(let p in u) {
        for(let x=0; x < u[p].length; x++){
            ru.push(u[p][x])
        }
    }

    let a = false; 

    let nu = new login_md()

    for(let g=0; g < ru.length; g++) {
        ru[g].name == d.name && ru[g].password == d.password ? a = !a : a = a;
    }

    a ? res.send({user:d, token:t}) : res.status(401).send("usuario no encontrado");
}

export { login }