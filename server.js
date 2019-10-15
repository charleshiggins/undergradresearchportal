const express = require('express')
const app = express()
var mysql = require('mysql');
var fs = require('fs')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
});

con.connect();

app.use('/', express.static('./client/public'));

app.get('/submit', function (req, res) {
 con.query("INSERT INTO testdb.application values (?, ?)", [Math.floor(Math.random() * Math.floor(4000)), 'aaaaaaa'], function (err, result) {
   if (err) {
    return res.status(500).send('error msg');
   }
   return res.status(200).send('nice');
  });
});

app.listen(8080)