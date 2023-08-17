import conx from "../config/db.js";

const rentDateSpecific = async (req, res) => {
    let db = await conx(); 
    let collection = await db.collection("alquiler");
    let consult = await collection.find({ fecha_inicio: { $eq: "2023-07-05" } }).toArray(); 
    res.status(200).send(consult)
}

export default rentDateSpecific; 