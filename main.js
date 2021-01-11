
const csvParser = require ('csv-parser'); //CSV->JSON
const fs = require('fs');
const filepath = "./volunteer_attendance_data.csv";

fs.createReadStream(filepath).on('error',()=>{ //init ReadStream obj
    // error chking
}).pipe(csvParser()).on('data',(row)=>{
    console.log(row);   //row data
}).on('end',()=>{
    //end of csv
})