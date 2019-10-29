const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass",
});

queryResults = {}


con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM testdb.application", function (err, result, fields) {
        if (err) throw err;
        queryResults = result;
        makeCSV()
    });
});


function makeCSV() {
    console.log(queryResults)


    const csvWriter = createCsvWriter({
        path: 'output.csv',
        header: [
            { id: 'fname', title: 'First Name' },
            { id: 'mname', title: 'Middle Inital' },
            { id: 'lname', title: 'Last Name' },
            { id: 'pid', title: 'pid' },
            { id: 'email', title: 'Email' },
            { id: 'facultyName', title: 'Faculty Name' },
            { id: 'facultyEmail', title: 'Faculty Email' },
            { id: 'academicDepartment', title: 'Academic Department' },


        ]
    });
    const applicationInfo = []
    for (i = 0; i < queryResults.length; i++) {
        applicationInfo.push({
            fname: queryResults[i].fname, mname: queryResults[i].mname, lname: queryResults[i].lname, pid: queryResults[i].pid,
            email: queryResults[i].email, facultyName: queryResults[i].facultyName, facultyEmail: queryResults[i].facultyEmail,
            academicDepartment: queryResults[i].academicDepartment
        })
    }

    csvWriter.writeRecords(applicationInfo)
        .then(() => {
            console.log("csv succesfully generated");
        });
}