let app = require('./init-express');
let config = require('./const');
const sql = require('mssql')
app.listen(8000, async () => {

    try {
        pool = await sql.connect(config);
        console.log("I am ready to do operation!");
    } catch (err) {
        console.log(err);
    }
});

require('./api-get-all');
require('./api-get-one');
require('./api-post-one');
require('./api-delete-one');

sql.on('error', err => {
    res.sendStatus(400);
})
