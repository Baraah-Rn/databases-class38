import mysql from "mysql";

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "root",
  password: "ChoosePassword",
  database: "new_world",
};

const showResult = (error, results, fields) => {
  error ? console.log(error) : console.log("The solution is", results);
};

const getPopulation = (Country, name, code, cb) => {
  const conn = mysql.createConnection(CONNECTION_CONFIG);
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
    (err, result) => {
      if (err) cb(err);
      cb(result);
    }
  );
};

// injection is ' OR '1'='1
getPopulation("country", "Aruba", "AB ' OR '1'='1", showResult);

// Repair the function
const saveGetPopulation = (Country, name, code, cb) => {
  const conn = mysql.createConnection(CONNECTION_CONFIG);
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = ? and code = ?`,
    [name, code],
    (err, result) => {
      if (err) cb(err);
      cb(result);
    }
  );
};
