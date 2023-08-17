import conx from "../config/db.js";

const employment = async (req, res) => {
    let db = await conx(); 
    let collection = await db.collection("empleado");
    let CA = await collection.find({
        $or: [{ cargo: "Asistente" }, { cargo: "Gerente" }],
    }).toArray();

    res.status(200).send(CA)
}

export default employment; 