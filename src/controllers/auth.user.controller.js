import generateToken from "../libs/generateKey.js";
import globalProperties from "../env/env.js";
import axios from "axios";

const GU = async () => {
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
    let nd = req.v3; 
    let u = await GU(); 
    let ru = []; 
    
    for(let p in u) {
        for(let x=0; x < u[p].length; x++){
            ru.push(u[p][x])
        }
    }
    
    let a = false; 
    let id; 
    
    for(let g=0; g < ru.length; g++) {
        if(ru[g].password == nd.password && ru[g].email == nd.email) { 
            id = ru[g].id
            a = !a; 
        }
    }
    
    /** !session  */
    let t = await generateToken(id); 
    res.cookie("auth", t); 

    a ? res.send({status: 201, message: "Autenticacion exitosa"}) : res.status(404).send({status: 404, message: "usuario no encontrado"}); 
}

export { login }