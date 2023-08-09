import globalProperties from "../env/env.js";
import jwt from "jsonwebtoken";

const generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ id: payload }, globalProperties.KEY, { expiresIn: "10m", algorithm: "HS256" }, (err, token) => {
            err ? reject(err) : resolve(token)
        })
    })
}

export default generateToken; 