
import mysql2 from "mysql2";
import util from "util";

import {keys} from "./authors.js";
import {relationships} from "./RPaperTable.js";
import {joins} from "./printData.js";
import {AggregateFunctions} from "./retrieveRows.js";


const CONNECTION_CONFIG ={
  host: 'localhost',
  user: "hyfuser",
  password: "hyfpassword",
  port: 3306

};
const createDB = [
  "DROP DATABASE IF EXISTS mySQLDatabase;",
  "CREATE DATABASE mySQLDatabase;",
  "USE mySQLDatabase;"
];


const showResult = (error, results) => {
  error ? console.log(error) : console.log( results);
}



const seedDatabase = async () => {
  const connection = mysql2.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));

  try {
    const createDatabase = createDB.map((query) => execQuery(query));
    await Promise.all(createDatabase);
    const keysSolution = keys.map((query) => execQuery(query));
    await Promise.all(keysSolution);
    const relationshipsSolution = relationships.map((query) => execQuery(query));
    await Promise.all(relationshipsSolution);
    joins.forEach((query) => execQuery(query, showResult));
    AggregateFunctions.forEach((query) => execQuery(query, showResult));
    connection.end();
  } catch (error) {
    console.error(error.message);
    connection.end();
  }
};

seedDatabase();