const mysql = require("mysql2");


const db = mysql.createConnection({
    host: 'localhost',
    user: "hyfuser",
    password: "hyfpassword",
    database: "world",
    port: 3306
  
  });

  db.connect((err) => {
    if (err) throw err;
    console.log("db Connected!");
  });


  const executedResult=  (err, results)=>{
    if (err) throw err;
  console.table(results);
  }


  //1.What are the names of countries with population greater than 8 million?
  db.query("SELECT Name FROM country WHERE Population > 8000000", executedResult);

  
//2. What are the names of countries that have “land” in their names?
db.query("SELECT Name FROM country WHERE Name LIKE '%land%' ", executedResult);

//3. What are the names of the cities with population in between 500,000 and 1 million?
db.query( "SELECT Name FROM city WHERE Population BETWEEN 500000 and 1000000", executedResult);

// 4. What's the name of all the countries on the continent ‘Europe’?
 db.query("SELECT Name FROM country WHERE Continent = 'Europe'", executedResult);

// 5. List all the countries in the descending order of their surface areas.
 db.query("SELECT Name FROM country ORDER BY SurfaceArea DESC ", executedResult);

// 6. What are the names of all the cities in the Netherlands?
db.query("SELECT Name FROM city WHERE CountryCode ='NLD'", executedResult);

// 7. What is the population of Rotterdam?
 db.query("SELECT Population FROM city WHERE Name ='Rotterdam'", executedResult);

// 8. What's the top 10 countries by Surface Area?
 db.query( "SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10 ",executedResult);

// 9. What's the top 10 most populated cities?
 db.query("SELECT Name FROM city ORDER BY Population DESC LIMIT 10 ",executedResult);

// 10. What is the population number of the world?
 db.query("SELECT SUM (Population) FROM country ", executedResult);

db.end();