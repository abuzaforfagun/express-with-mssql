let app = require('./init-express');
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
     
    

});