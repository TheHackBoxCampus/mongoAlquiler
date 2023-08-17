// express
import { Router } from "express";

// dto
import Client from "../storage/structure/clients.js";
import Cars from "../storage/structure/cars.js";
import Booking from "../storage/structure/booking.js"
import Employee from "../storage/structure/employee.js"
import Branch from "../storage/structure/branch.js";
import Rent from "../storage/structure/rent.js";

// controllers
import searchAllClients from "../controllers/clients.findAll.js";
import rentAndClient from "../controllers/rent.relation.client.js";
import availablesCarsRent from "../controllers/cars.availables.rent.js";
import availablesCars from "../controllers/cars.availables.js";
import bookingEarring from "../controllers/booking.earring.js";
import detailsRent from "../controllers/details.rent.js";
import employeeSeller from "../controllers/employes.seller.js";
import totalRent from "../controllers/total.rent.js";
import clientSpecific from "../controllers/client.specific.js";
import abilityGTfive from "../controllers/ability.five.js";
import rentDateSpecific from "../controllers/rent.date.js";
import bookingSpecificClient from "../controllers/booking.earring.specifc.js";
import employment from "../controllers/employment.js";
import atLeastRent from "../controllers/atLeastRent.js";
import sortByBrand from "../controllers/sortByBrand.js";
import availablesCarsPlusAddress from "../controllers/cars.availables address.js";
import rentTotal from "../controllers/rent.total.js";
import equalFive from "../controllers/equal.five.js";
import betweenDate from "../controllers/between.date.js";

// middlewares
import { login } from "../controllers/auth.user.controller.js";
import verifyDataMD from "../middleware/auth.login.md.js";
import VTA from "../middleware/verifyjwtSession.js";
import { numberRequest } from "../limits/setting.limits.js";
import { generateTokenSpecific } from "../controllers/generate.structure.sign.token.js";
import { customAuthPassport } from "../middleware/verifyTokens/jwt.verify.js";

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
 * ? token /clients
 * */  

authUserRoute.get(
  "/clientes",
  numberRequest,
  VTA,
  customAuthPassport(Client),
  searchAllClients
);


/**
 * ? token /Branch
 */

authUserRoute.get(
  "/total_automoviles",
  numberRequest,
  VTA, 
  customAuthPassport(Branch),
  availablesCars
)


/**
 * ? token /Booking
*/

authUserRoute.get(
  "/automoviles/estado/disponible",
  numberRequest,
  VTA, 
  customAuthPassport(Booking),
  availablesCarsRent
)

/**
 * ? token /Client
*/

authUserRoute.get(
  "/alquiler/activo",
  numberRequest,
  VTA, 
  customAuthPassport(Client),
  rentAndClient
)

/**
 * ? token /Booking
*/

authUserRoute.get(
  "/reserva/pendiente",
  numberRequest,
  VTA, 
  customAuthPassport(Booking),
  bookingEarring
)

/**
 * ? token /Rent
*/

authUserRoute.get(
  "/detalles/alquiler/:id",
  numberRequest,
  VTA, 
  customAuthPassport(Rent),
  detailsRent
)

/**
 * ? token /Employee
*/

authUserRoute.get(
  "/empleados/vendedor",
  numberRequest,
  VTA, 
  customAuthPassport(Employee),
  employeeSeller
)


/**
 * ? token /Rent
 */

authUserRoute.get(
  "/alquiler/costo/:id",
  numberRequest,
  VTA, 
  customAuthPassport(Rent),
  totalRent
)


/**
 * ? token /Client
 */

authUserRoute.get(
  "/clientes/:id",
  numberRequest,
  VTA, 
  customAuthPassport(Client),
  clientSpecific
)

/**
 * ? token /Cars
 */

authUserRoute.get(
  "/automoviles/asientos",
  numberRequest,
  VTA, 
  customAuthPassport(Cars),
  abilityGTfive
)

/**
 * ? token /Rent
 */

authUserRoute.get(
  "/alquiler/fecha",
  numberRequest,
  VTA, 
  customAuthPassport(Rent),
  rentDateSpecific
)

/**
 * ? token /Booking
 */

authUserRoute.get(
  "/reserva/cliente/:nombre",
  numberRequest,
  VTA, 
  customAuthPassport(Booking),
  bookingSpecificClient
)


/**
 * ? token /Employee
 */

authUserRoute.get(
  "/empleados/cargo",
  numberRequest,
  VTA, 
  customAuthPassport(Employee),
  employment
)

/**
 * ? token /Rent
 */

authUserRoute.get(
  "/alquiler/clientes/",
  numberRequest,
  VTA, 
  customAuthPassport(Rent),
  atLeastRent
)

/**
 * ? token /Cars
 */

authUserRoute.get(
  "/automoviles/orden",
  numberRequest,
  VTA, 
  customAuthPassport(Cars),
  sortByBrand
)

/**
 * ? token /Branch
 */

authUserRoute.get(
  "/automoviles/direccion",
  numberRequest,
  VTA, 
  customAuthPassport(Branch),
  availablesCarsPlusAddress
)

/**
 * ? token /Rent
 */

authUserRoute.get(
  "/alquiler/total",
  numberRequest,
  VTA, 
  customAuthPassport(Rent),
  rentTotal
)

/**
 * ? token /Cars
 */

authUserRoute.get(
  "/automoviles/asientoEspecifico",
  numberRequest,
  VTA, 
  customAuthPassport(Cars),
  equalFive
)

/**
 * ? token /Rent
 */

authUserRoute.get(
  "/alquiler/fecha/entre",
  numberRequest,
  VTA, 
  customAuthPassport(Rent),
  betweenDate
)


export default authUserRoute;