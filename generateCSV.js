const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'output.csv',
    header: [
        { id: 'onyen', title: 'Onyen' },
        { id: 'fname', title: 'First Name' }
    ]
});

const applicationInfo = [
    { onyen: 'charles7', fname: 'Charles' },
    { onyen: 'reesb', fname: 'Rees' },
    { onyen: 'annunzip', fname: 'Patrick' },

];

csvWriter.writeRecords(applicationInfo)
    .then(() => {
        console.log("csv succesfully generated");
    });