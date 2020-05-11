const app = require('../init-express');

app.get('/api/customers/:id', (req, res) => {
    // eslint-disable-next-line func-names
    (async function () {
        try {
            const a = `select * from customer where id = ${req.params.id}`;
            const result = await sqlServer.request()
                .query(`select * from customer where id = ${req.params.id}`);

            if (result.recordsets.length > 0) {
                res.send(result.recordset);
            }
            else {
                res.sendStatus(400);
            }
        }
        catch (err) {
            res.sendStatus(400);
        }
    })();
});
