var express = require("express");
let app = express();
const sql = require('mssql')
let config = require('./const');

app.use(express.json());
let pool = "";
app.listen(8000, ()=>{
    
    try {
        pool = sql.connect(config)
        console.log("I am ready to do operation!");
    } catch (err) {
        // ... error checks
        console.log(err);
    }
});