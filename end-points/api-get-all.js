const { app } = require('../init-express');

app.get('/api/customers', (req, res) => {
    (async () => {
        try {
            const result = await sqlServer.request()
                .query('select * from customer');

            res.send(result.recordsets[0]);
        }
        catch (err) {
            res.sendStatus(400);
        }
    })();
});
