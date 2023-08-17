import conx from "../config/db.js";

const employeeSeller = async (req, res) => {
    let db = await conx(); 
    let collection = await db.collection("empleado");
    let consult = await collection.aggregate([
        {
          $match: { cargo: "Vendedor" }, // * Cargo para filtrado
        },
        {
          $project: {
            _id: 0,
            nombre: 1,
            apellido: 1,
            telefono: 1,
            cargo: 1,
          },
        },
      ]).toArray();
    res.status(200).send(consult)
}

export default employeeSeller; 