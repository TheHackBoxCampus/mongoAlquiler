import express from "express";
import morgan from "morgan";
import cors from "cors"
import authUserRoute from "./routes/auth.user.js";
import path from "path"

const app = express();

/**
 * ! middleware
 */
app.use(express.json());
app.use(express.text());
app.use(morgan("dev"));
app.use(cors());

/**
 * !json
 */

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use("/users", express.static(path.join(__dirname, "users/users.json")))

/**
 * * Routes
 */

app.use(authUserRoute);

export default app; 