const express = require('express')
const app = express()
var mysql = require('mysql');
var fs = require('fs')
var cors = require('cors') //delete this when not testing with local file directory
app.use(cors())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
});

con.connect();
app.use(express.json())
app.use('/', express.static('./client/public'));

app.get('/submit', function (req, res) {
  con.query("INSERT INTO testdb.application values (?, ?)", [Math.floor(Math.random() * Math.floor(4000)), 'aaaaaaa'], function (err, result) {
    if (err) {
      return res.status(500).send('error msg');
    }
    return res.status(200).send('nice');
  });
});

app.post('/submitApplication', function (req, res, next) {
  console.log(req.body);
  con.query("INSERT INTO testdb.application values (?, ?, ?, ?, ?, ?, ?, ?, ?)", [Math.floor(Math.random() * Math.floor(4000)), req.body.Application.fname,  req.body.Application.mname,  req.body.Application.lname,  req.body.Application.pid,  req.body.Application.email,  req.body.Application.Faculty.fullname,  req.body.Application.Faculty.email,  req.body.Application.Faculty.academicDepartment], function (err, result) {
    if (err) {
      return res.status(500).send('error msg');
    }
    return res.status(200).send('nice');
  });


})

app.listen(8080)
