let app = require('./init-express');
app.get("/api/customers/:id", (req, res) => {
    (async function () {
        try {

            let result = await pool.request()
                .query(`select * from customer where id = ${req.params.id}`);
            if (result.rowsAffected > 0) {
                res.send(result.recordset);
            } else {
                res.sendStatus(400);
            }

        } catch (err) {
            res.sendStatus(400);
        }
    })()

});
