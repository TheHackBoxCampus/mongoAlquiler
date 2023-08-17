import conx from "../config/db.js";

const abilityGTfive = async (req, res) => {
    let db = await conx(); 
    let collection = await db.collection("automovil");
    let consult = await collection.find({ capacidad: { $gt: 5 } }).toArray(); 
    res.status(200).send(consult)
}

export default abilityGTfive; 