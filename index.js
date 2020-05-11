const sql = require('mssql/msnodesqlv8');
const { app, port } = require('./init-express');
const config = require('./const');

app.listen(port, async () => {
    try {
        const conn = new sql.ConnectionPool(config);
        sqlServer = await conn.connect();
    }
    catch (err) {
        // eslint-disable-next-line no-console
        console.log('Failed to listen 8000...', err);
    }
});
app.use((req, res, next) => {
    process.stdout.write(`Middleware tiggered: ${req.url}\n`);
    next();
});

require('./end-points/api-get-all');
require('./end-points/api-get-one');
require('./end-points/api-post-one');
require('./end-points/api-delete-one');

sql.on('error', (err) => {
    res.statusMessage = `Unable to connect SQL Server. Error Details: ${err}`;
    res.sendStatus(400);
});
