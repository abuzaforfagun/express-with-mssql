const app = require('../init-express');

app.delete('/api/customers/:id', (req, res) => {
    // eslint-disable-next-line func-names
    (async function () {
        try {
            await pool.request()
                .query(`DELETE from Customer WHERE id = ${req.params.id}`);

            res.sendStatus(200);
        }
        catch (err) {
            res.sendStatus(400);
        }
    })();
});
