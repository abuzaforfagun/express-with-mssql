var express = require("express");
let app = express();
const sql = require('mssql')
let config = require('./const');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


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
            
            let result = await pool.request()
                .query('select * from customer')
                
            res.send(result.recordsets);
        
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
            
            let result = await pool.request()
                .query(`select * from customer where id = ${req.params.id}`);
                
            console.log(result)
            if(result.rowsAffected > 0){
                res.send(result.recordset);
            }else{
                res.sendStatus(400);    
            }
        
        } catch (err) {
            res.sendStatus(400);
        }
    })()
     
    sql.on('error', err => {
        res.sendStatus(400);
    })

});
app.post("/api/customers", (req, res) => {
    (async function () {
        try {
            
            let result = await pool.request()
                .query(`INSERT INTO 
                        customer (name, email, phone, address) 
                        VALUES ('${req.body.name}', '${req.body.email}', '${req.body.phone}', '${req.body.address}'); select SCOPE_IDENTITY() as id;`);
            let customer = req.body;
            customer.id = JSON.stringify(result.recordset[0].id);
            
            res.send(customer);
        
        } catch (err) {
            
            res.sendStatus(400);
        }
    })()
     
    sql.on('error', err => {
        
        res.sendStatus(400);
    })

});

app.delete("/api/customers/:id", (req, res) => {
    (async function () {
        try {
            
            let result = await pool.request()
                .query(`DELETE from Customer WHERE id = ${req.params.id}`);
            
            res.sendStatus(200);
        
        } catch (err) {
            
            res.sendStatus(400);
        }
    })()
     
    sql.on('error', err => {
        
        res.sendStatus(400);
    })

});