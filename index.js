var express = require("express");
let app = express();
const sql = require('mssql')
let config = require('./const');

app.use(express.json());
let pool = "";
app.listen(8000, async ()=>{
    
    try {
        // pool = sql.connect(config)
        pool = await sql.connect(config);
        console.log("I am ready to do operation!");
    } catch (err) {
        // ... error checks
        console.log(err);
    }
});

app.get("/api/customers", (req, res) => {
    (async function () {
        try {
            
            let result1 = await pool.request()
                .query('select * from customer')
                
            res.send(result1.recordsets);
        
            // Stored procedure
            
            // let result2 = await pool.request()
            //     .input('input_parameter', sql.Int, value)
            //     .output('output_parameter', sql.VarChar(50))
            //     .execute('procedure_name')
            
            // console.dir(result2)
        } catch (err) {
            res.sendStatus(400);
        }
    })()
     
    sql.on('error', err => {
        res.sendStatus(400);
    })

});
app.get("/api/customers/:id", (req, res) => {
    (async function () {
        try {
            
            let result1 = await pool.request()
                .query(`select * from customer where id = ${req.params.id}`);
                
            console.log(result1)
            res.send(result1.recordset);
        
            // Stored procedure
            
            // let result2 = await pool.request()
            //     .input('input_parameter', sql.Int, value)
            //     .output('output_parameter', sql.VarChar(50))
            //     .execute('procedure_name')
            
            // console.dir(result2)
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    })()
     
    sql.on('error', err => {
        console.log(err);
        res.sendStatus(400);
    })

});