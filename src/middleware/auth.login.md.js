import login_md from "../storage/auth.user.login.js";

const verifyDataMD = (req, res, next) => {
    let d = Object.keys(req.body).length > 0 ? req.body : {status: 500, message: "Parametros requeridos"};

    if (!d.status) {
        try {
            let nu = new login_md(d.password, d.email);
            let v = nu.scapeData(nu); 
            let v2 = nu.validateContentData(v); 
            let v3 = nu.validateLengthObject(v2); 
            req.v3 = v3 
            next(); 
        }catch (err) {
            return res.status(500).send({status: 500, message: err.message})
        }
    }else { res.status(500).send(d) }
}

export default verifyDataMD; 