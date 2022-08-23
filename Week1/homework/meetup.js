
const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  user: "hyfuser",
  password: "hyfpassword",
  database: "meetup",
  port: 3306

});


db.query("DROP DATABASE IF EXISTS meetup", function (error, result) {
  if (error) throw error;
  console.log("Database has been DELETED");
});


db.connect((err) => {
  if (err) throw err;
  console.log("db Connected!");
});



db.query("CREATE DATABASE IF NOT EXISTS meetup", function (error, result) {
  if (error) throw error;
  console.log("DB meetup has been CREATED");
});
db.query("USE meetup");


let sql = "CREATE TABLE if not exists Invitee (invitee_no INT AUTO_INCREMENT PRIMARY KEY, invitee_name text, invited_by VARCHAR(25))";
db.query(sql, function (err, results) {
  if (err) throw err;
  console.log(results)
  console.log("Tables Invitee has been created");
});

sql = "INSERT INTO Invitee  VALUES?";

let values = [
  [1, "Oscar", "Rob"],
  [2, "Ruby", "Wouter"],
  [3, "Noha", "Rob"],
  [4, "Omar", "Wouter"],
  [5, "Samar", "Rob"]
];

db.query(sql, [values], (err, results) => {
  if (err) throw err;
  console.log("the data has been added to table Invitee")
})



sql = "CREATE TABLE if not exists Meeting  (meeting_no int AUTO_INCREMENT PRIMARY KEY , meeting_title VARCHAR(45) , starting_time Time, ending_time Time , room_no int)";
db.query(sql, function (err, results) {
  if (err) throw err;
  console.log(results)
  console.log("Tables Meeting has been created");
});

sql = "INSERT INTO Meeting VALUES?";

values = [
  [1, "English conversation", "2022-10-23 010:30:00", "2022-08-22 12:30:00", 10],
  [2, "Spanish conversation", "2022-10-23 010:30:00", "2022-08-22 12:30:00", 12],
  [3, "Management ", "2022-10-23 010:30:00", "2022-08-22 12:30:00", 14],
  [4, "Health care", "2022-10-23 010:30:00", "2022-08-22 12:30:00", 15],
  [5, "Skin care", "2022-10-23 010:30:00", "2022-08-22 12:30:00", 20]
];

db.query(sql, [values], (err, results) => {
  if (err) throw err;
  console.log("the data has been added to table Meeting ")
});





sql = "CREATE TABLE if not exists Room (room_no int AUTO_INCREMENT PRIMARY KEY , room_name VARCHAR(20) , floor_number int)";
db.query(sql, function (err, results) {
  if (err) throw err;
  console.log(results)
  console.log("Tables Room has been created");
});

sql = "INSERT INTO Room  VALUES?";

values = [
  [1, "Jungle", 2005],
  [2, "Eea", 2006],
  [3, "Forest", 2007],
  [4, "Night light", 2008],
  [5, "Sun set", 2009]
];

db.query(sql, [values], (err, results) => {
  if (err) throw err;
  console.log("the data has been added to table Room")
});


db.end();






