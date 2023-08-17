import conx from "../config/db.js";

const atLeastRent = async (req, res) => {
    const db = await conx();
    const collection = await db.collection("alquiler");
    let CA = await collection.aggregate([
        {
          $lookup: {
            from: "cliente",
            localField: "ID_cliente",
            foreignField: "_id",
            as: "alquileres",
          },
        },
        {
          $unwind: "$alquileres"
        },
        {
          $group: {
              _id: "$alquileres.nombre",
              cantidad_alquiler: {$sum: 1}
          }
        },
        {
          $match: {
              cantidad_alquiler: {$exists: true, $not: {$size: 0}}      
          }
        },
      ]).toArray();
    res.status(200).send(CA);
}

export default atLeastRent; 