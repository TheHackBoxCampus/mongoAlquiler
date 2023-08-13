import rateLimit from "express-rate-limit";

const numberRequest = rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true,
        legacyHeaders: false, 
        skip: (req, res) => {
            if(req.headers["content-length"] > 150) {
                res.status(413).send({
                    status: 413, 
                    message: "Cantidad de bytes inadecuada para el json"
                })
                return true
            }
        },
        message: (req, res) => res.status(429).send({status: 429, message: "Limite de peticiones alcanzado"})
})

export { numberRequest }