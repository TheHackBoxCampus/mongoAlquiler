import express from "express";
import morgan from "morgan";
import cors from "cors"
import authUserRoute from "./routes/auth.user.js";

const app = express();

/**
 * ! middleware
 */
app.use(express.json());
app.use(express.text());
app.use(morgan("dev"));
app.use(cors());


/**
 * * Routes
 */

app.use(authUserRoute);

export default app; 