import jwt from "jsonwebtoken";
import globalProperties from "../env/env.js";

// * verify token authentication

const VTA = async (req, res, next) => {
    const session = req.cookies.auth;

    if(!session) res.status(401).send({status: 401, message: "Usuario no autenticado"})
    else {
        try {
            let decoded = await new Promise((resolve, reject) => {
                jwt.verify(session, globalProperties.KEY, {algorithms: "HS256"}, (err, decoded) => {
                    return err ? reject(err) : resolve(decoded)                
                })
            })
            return next(); 
        }catch (err) {
            return res.status(403).send({status: 403, message: "Su sesion a caducado o su token es incorrecto!"})
        }
    }
    
}

export default VTA; 