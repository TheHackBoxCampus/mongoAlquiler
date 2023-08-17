import express from "express";
import morgan from "morgan";
import cors from "cors"
import authUserRoute from "./routes/auth.user.js";
import path from "path"
import cookieParser from "cookie-parser";
import session from "express-session";
import globalProperties from "./env/env.js";
import passport from "passport";

const app = express();

/**
 * ! middleware
 */
app.use(express.json());
app.use(express.text());
app.use(morgan("dev"));
app.use(cookieParser()); 
app.use(cors());
app.use(passport.initialize()); 

/**
 * ! middlewares of session
 */

app.use(session({
    secret: globalProperties.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        httpOnly: true
    }
}))

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