import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";
import { insertData } from "./insertData.js";

dotenv.config();

const createDB = async (client) => {
    const dropDB = await client
      .db("databaseWeek4")
      .collection("data")
      .deleteMany({});
    console.log("DB is created");
  };
  

  const main = async () => {
    const client = new MongoClient(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    try {
      await createDB(client);
      await insertData(client);
      await countTotalPopulation(client, "Netherlands");
      await informationOfContinents(client, "100+", 2020);
    } catch (error) {
      console.log(error);
    } finally {
      await client.close();
    }
  };
  
  main();