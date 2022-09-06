import mysql from "mysql";

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
  multipleStatements: true,
};

const showResult = (err, results, fields) => {
    err ? console.log("Not found") : console.log("The results are", results);
  };

  
const getPopulation = (Country, name, code, cb) => {
  const conn = mysql.createConnection(CONNECTION_CONFIG);
  conn.query(

    //the Injection
   // `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,


   //The function  no longer vulnerable to SQL injection
   `SELECT Population FROM ${Country} WHERE Name = ? and code = ?`,
   [name,code],
   (err, result) => {
    if (err) cb(err);
    cb(result);
  }
);
};

// injection is ' OR '1'='1
getPopulation("country", "asia", "as ' OR '1'='1", showResult);