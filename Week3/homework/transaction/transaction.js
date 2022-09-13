import mysql from "mysql";
import util from "util";
import { createTables } from "./createTables.js";
import { insertData } from "./insertValues.js";

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
};

const SendAmount = `
  UPDATE account
  SET balance = balance - 1000
  WHERE account_number = 101;
`;

const ReceiptAmount = `
  UPDATE account
  SET balance = balance + 1000
  WHERE account_number = 102;
`;

const transfer = [SendAmount, ReceiptAmount];
const createDb = [
  "DROP DATABASE IF EXISTS wallet;",
  "CREATE DATABASE wallet;",
  "USE wallet;",
];

const executeDB = async () => {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));
  createDb.map((query) => execQuery(query));
  console.log("database is created");
  createTables.map((query) => execQuery(query));
  console.log("tables are created");
  insertData.map((query) => execQuery(query));
  console.log("data is inserted");
  connection.beginTransaction();
  try {
    const transaction = transfer.map((query) => execQuery(query));
    await Promise.all(transaction);
    connection.commit();
    console.log("transaction done");
    connection.end();
  } catch (err) {
    connection.rollback();
    connection.end();
    console.log(err);
  }
};

executeDB();