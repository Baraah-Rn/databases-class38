import mysql from "mysql";
import util from "util";
import { createTables } from "./transactions-create-tables.js";
import { insertData } from "./transactions-insert-values.js";

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "root",
  password: "ChoosePassword",
};

const SEND_AMOUNT = `
  UPDATE account
  SET balance = balance - 1000
  WHERE account_number = 101;
`;

const RECEIPT_AMOUNT = `
  UPDATE account
  SET balance = balance + 1000
  WHERE account_number = 102;
`;

const transfer = [SEND_AMOUNT, RECEIPT_AMOUNT];
const createDb = [
  "DROP DATABASE IF EXISTS bank;",
  "CREATE DATABASE bank;",
  "USE bank;",
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
