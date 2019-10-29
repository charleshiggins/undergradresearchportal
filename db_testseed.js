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
con.query("CREATE TABLE IF NOT EXISTS testdb.person (idperson INT NOT NULL AUTO_INCREMENT, onyen VARCHAR(100) NULL,role VARCHAR(45) NULL,PRIMARY KEY (idperson))", function (err, result) {
  if (err) throw err;
  console.log("person table created.");
});

con.query("CREATE TABLE IF NOT EXISTS testdb.application (id INTEGER PRIMARY KEY, fname varchar(255),  mname varchar(255),  lname varchar(255), pid varchar(255), email varchar(255), proposal varchar(255), transcript varchar(255), facultyName varchar(500), facultyEmail varchar(255), academicDepartment varchar(255), personID int, FOREIGN KEY (personID) REFERENCES person(idperson))", function (err, result) {
  if (err) throw err;
  console.log("Application table created.");
});

con.query("CREATE TABLE IF NOT EXISTS testdb.question (id INTEGER PRIMARY KEY, text varchar(500))", function (err, result) {
  if (err) throw err;
  console.log("question table created.");
});

con.query("CREATE TABLE IF NOT EXISTS testdb.response (id INTEGER PRIMARY KEY, appID int, questionID int, answerText varchar(500), FOREIGN KEY (appID) REFERENCES application(id), FOREIGN KEY (questionID) REFERENCES question(id))", function (err, result) {
  if (err) throw err;
  console.log("response table created.");
});
con.query("INSERT INTO testdb.person values (?, ?, ?)", ['1', 'testuser', 'student'], function (err, result) {
  if (err) throw err;
  console.log("seed row created.");
});

con.commit();
con.end();