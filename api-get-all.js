let app = require('./init-express');
app.get("/api/customers", (req, res) => {
    (async function () {
        try {

            let result = await pool.request()
                .query('select * from customer')

            res.send(result.recordsets);
        } catch (err) {
            res.sendStatus(400);
        }
    })()



});