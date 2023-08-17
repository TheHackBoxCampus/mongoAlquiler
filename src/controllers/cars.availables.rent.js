import conx from "../config/db.js";

const availablesCarsRent = async (req, res) => {
    const db = await conx();
    const s = await db.collection("reserva");

    // ? Obtener todos los automóviles disponibles para alquiler
    let CA = await s.find({ Estado: "Disponible" }).toArray(); 
    res.status(200).send(CA);
}

export default availablesCarsRent; 