import generateToken from "../libs/generateKey.js";
import globalProperties from "../env/env.js";
import axios from "axios";
import login_md from "../storage/auth.user.login.js";

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
    let d = Object.keys(req.body).length > 0 ? req.body : {status: 500, message: "Parametros requeridos"};
    let nd; 

    if (!d.status) {
        try {
            let nu = new login_md(d.password, d.email);
            let v = nu.scapeData(nu); 
            let v2 = nu.validateContentData(v); 
            let v3 = nu.validateLengthObject(v2); 
            nd = v3
        
            let t = await generateToken(); 
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
        
            a ? res.send({user:id, token:t}) : res.status(404).send({status: 404, message: "usuario no encontrado"}); 

        } catch (err) {
            res.send({ status: 500, message: err.message })
        }
 
    } else 
        res.status(500).send(d)
}

export { login }