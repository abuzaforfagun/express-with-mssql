const sql = require('mssql/msnodesqlv8');
const app = require('./init-express');
const config = require('./const');


app.listen(8000, async () => {
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
    console.log(`Middleware tiggered: ${req.url}`);
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
