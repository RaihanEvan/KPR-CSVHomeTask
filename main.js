
const csvParser = require('csv-parser'); //CSV->JSON
const fs = require('fs');
const filepath = "./volunteer_attendance_data.csv";

fs.createReadStream(filepath).on('error', () => { //init ReadStream obj
    // error chking
}).pipe(csvParser()).on('data', (row) => {
    if (row.shiftReason == "Regular shift") {
        console.log(row);   //row data
    } else if (row.shiftReason == "Make up shift") {
        console.log(row);
    } else if (row.shiftReason == "Dropping by") {
        console.log(row);
    } else {
        
    }

}).on('end', () => {
    //end of csv
})
