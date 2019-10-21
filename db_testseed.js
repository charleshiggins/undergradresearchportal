var mysql = require('mysql');
var fs = require('fs')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
});

con.connect();

console.log("Connected!");

 con.query("DROP DATABASE IF EXISTS testdb", function (err, result) {
   if (err) throw err;
   console.log("Database dropped.");
 });
con.query("CREATE DATABASE IF NOT EXISTS testdb", function (err, result) {
  if (err) throw err;
  console.log("Database created.");
});
con.query("CREATE TABLE IF NOT EXISTS testdb.application (id INTEGER PRIMARY KEY, fname varchar(255),  mname varchar(255),  lname varchar(255), pid varchar(255), email varchar(255), facultyName varchar(500), facultyEmail varchar(255), academicDepartment varchar(255))", function (err, result) {
  if (err) throw err;
  console.log("Table created.");
});

con.commit();
con.end();