const app = require('./init-express');

app.post('/api/customers', (req, res) => {
    // eslint-disable-next-line func-names
    (async function () {
        try {
            const result = await pool.request()
                .query(`INSERT INTO 
                        customer (name, email, phone, address) 
                        VALUES ('${req.body.name}', '${req.body.email}', '${req.body.phone}', '${req.body.address}'); select SCOPE_IDENTITY() as id;`);
            const customer = req.body;
            customer.id = JSON.stringify(result.recordset[0].id);

            res.send(customer);
        }
        catch (err) {
            res.sendStatus(400);
        }
    })();
});
