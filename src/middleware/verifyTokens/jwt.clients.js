import "reflect-metadata"
import { classToPlain, plainToClass } from "class-transformer";
import Client from "../../storage/structure/clients.js";
import passport from "../../passport/auth.passport.setting.js"

const verifyClientjwt = (decoded) => {
    let copy = JSON.stringify({...decoded}); 
    let ref = JSON.stringify(classToPlain(plainToClass(Client, {}, {ignoreDecorators: true}))); 
    let verify = copy === ref; 
    return verify
}

const customAuthClientPassport = (req, res, next) => {
    passport.authenticate("bearer", { session: false }, (err, decoded) => {
       if(err) res.status(500).send({status: 500, message: "Error en la autenticacion a clientes"})
       else {
          let np = Object.entries(decoded).map(p => p[0] != "iat" && p[0] != "exp" ? p : false).filter(Boolean)
          let it = Object.fromEntries(np);
          let r = verifyClientjwt(it)

          return r ? next() : res.status(500).send({status: 500, message: "El token que esta colocando no es de esta categoria"});
  
        }
    })(req, res, next);
}

export {
    customAuthClientPassport
}; 