const app = require('./init-express');

app.get('/api/customers', (req, res) => {
    // eslint-disable-next-line func-names
    (async function () {
        try {
            const result = await pool.request()
                .query('select * from customer');

            res.send(result.recordsets);
        }
        catch (err) {
            res.sendStatus(400);
        }
    })();
});
