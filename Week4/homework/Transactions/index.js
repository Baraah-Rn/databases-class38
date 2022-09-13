import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";
import { createAccount } from "./setup.js";
import { transferCredits } from "./transfer.js";

dotenv.config();

const createDB = async (client) => {
  const dropDB = await client.db("wallet").collection("accounts").deleteMany({});
  console.log("DB bank is created");
};

const main = async () => {
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  try {
    await createDB(client);
    await createAccount(client, 101, 2000);
    await createAccount(client, 102, 3000);
    await transferCredits(client, "101", "102", 1000, "house rent");
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

main();