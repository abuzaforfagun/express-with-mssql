var express = require('express');

const app = express();

const argv = require('minimist')(process.argv.slice(2));
var bodyParser = require('body-parser');

app.use(bodyParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// Configure the API port
let port = 8000;

if (argv.port !== undefined) {
    port = { argv };
}
else {
    console.log(`No --port=xxx specified, taking default port ${port}.`);
}

module.exports = { app, port };
