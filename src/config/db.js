import { MongoClient } from "mongodb";
import globalProperties from "../env/env.js";

const conx = async () => {
  try {
     let credentials = JSON.parse(globalProperties.USER_DB)
     let uri = `mongodb+srv://${credentials.username}:${credentials.password}@cluster0.mehpwtz.mongodb.net/${credentials.database}`;
     let options = {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     };
     let client = await MongoClient.connect(uri, options);
     console.log("DB-> success")
     return client.db()
  } catch (err) {
    return { status: 500, error: err };
  }
};

export default conx;
