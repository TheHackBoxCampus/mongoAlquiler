import express from "express"; 

const app = express(); 


/**
 * ! middleware
 */
app.use(express.json());
app.use(express.text()); 


export default app; 