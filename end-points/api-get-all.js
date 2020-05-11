const { app } = require('../init-express');

app.get('/api/customers', (req, res) => {
    // eslint-disable-next-line func-names
    (async function () {
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
