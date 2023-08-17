import conx from "../config/db.js";

const availablesCarsPlusAddress = async (req, res) => {
    const db = await conx();
    const collection = await db.collection("sucursal");
    let CA = await collection.aggregate([
      {
          $lookup: {
              from: "sucursal_automovil",
              localField: "_id",
              foreignField: "sucursal_id",
              as: "sucursales"
          }
      },
      {
          $unwind: "$sucursales"
      },
      {
          $group: {
            _id: {
              sucursal_id: "$_id",
              nombre: "$nombre",
              direccion: "$direccion"
            },
            cantidad_automoviles: { $sum: "$sucursales.cantidad_disponible"}
          }
      },
      {
          $project: {
              cantidad_automoviles: 1,
          }
      }
  ]).toArray();
    res.status(200).send(CA);
}

export default availablesCarsPlusAddress; 