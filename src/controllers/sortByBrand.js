import conx from "../config/db.js";

const sortByBrand = async (req, res) => {
    let db = await conx(); 
    let collection = await db.collection("automovil");
    let CA = await collection.find().sort(
        {
          marca: 1,
        },
        {
          modelo: 1,
        }
      ).toArray(); 
    res.status(200).send(CA)
}

export default sortByBrand; 