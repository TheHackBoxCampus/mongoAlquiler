import "reflect-metadata";
import { plainToClass, classToPlain } from "class-transformer";
import Client from "../storage/structure/clients.js"
import Car from "../storage/structure/cars.js";
import Branch from "../storage/structure/branch.js"
import globalProperties from "../env/env.js";
import jwt from "jsonwebtoken"; 
import Booking from "../storage/structure/booking.js";
import Rent from "../storage/structure/rent.js";
import Employee from "../storage/structure/employee.js";

const getClass = (p) => {
    const o = { 'clientes': Client, 'automoviles' : Car, "sucursal": Branch, "reserva": Booking, "alquiler": Rent, "empleado": Employee}
    let iM = o[p]; 
    
    if (!iM) throw {status: 500, message: "Categoria invalida"} 
    else return {attr: plainToClass(iM, {}, {ignoreDecorators: true}), cls: iM}
}

const generateTokenSpecific = async (req, res, next) => {
    try {   
        let s = getClass(req.params.category).attr; 
        let tpr = new Promise((resolve, reject) => {
            jwt.sign(Object.assign({}, classToPlain(s)), globalProperties.KEY, {algorithm: "HS256", expiresIn: "10m"}, (err, token) => {
                err ? reject(err) : resolve(token)
            })
        })
    
        let t = await tpr; 
        req.category = {token: t, category: req.params.category}
        return next();
    }catch(err){
        return res.status(500).send({status: 500, message: err.message})
    }
}

export {
    generateTokenSpecific
}