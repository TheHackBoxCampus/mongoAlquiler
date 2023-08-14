import { Router } from "express";
import Client from "../storage/structure/clients.js";
import Cars from "../storage/structure/cars.js";
import { login } from "../controllers/auth.user.controller.js";
import verifyDataMD from "../middleware/auth.login.md.js";
import VTA from "../middleware/verifyjwtSession.js";
import { numberRequest } from "../limits/setting.limits.js";
import { generateTokenSpecific } from "../controllers/generate.structure.sign.token.js";
import { customAuthPassport } from "../middleware/verifyTokens/jwt.verify.js";
import searchAllClients from "../controllers/clients.findAll.js";
import availablesCars from "../controllers/cars.availables.js";

const authUserRoute = Router();

/**
 * ? Route to generate token of session
 * */

authUserRoute.get(
    "/login", 
    numberRequest, 
    verifyDataMD, 
    login);

/**
 * ? Route to generate token of categories 
 * */    

authUserRoute.get(
  "/generate/:category",
  numberRequest,
  VTA,
  generateTokenSpecific,
  (req, res) => res.send(req.category)
);

/**
 * ? Route /clients
 * */  

authUserRoute.get(
  "/clientes",
  numberRequest,
  VTA,
  customAuthPassport(Client),
  searchAllClients
);


/**
 * ? Route /Cars
 */

authUserRoute.get(
  "/total_automoviles",
  numberRequest,
  VTA, 
  customAuthPassport(Cars),
  availablesCars
)
export default authUserRoute;
