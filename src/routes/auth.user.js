import { Router } from "express";
import { login } from "../controllers/auth.user.controller.js";

const authUserRoute = Router();

authUserRoute.get("/login", login)

export default authUserRoute; 