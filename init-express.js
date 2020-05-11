var express = require('express');

const app = express();

const argv = require('minimist')(process.argv.slice(2));
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

const { port = 8000 } = argv;

process.stdout.write(`Application running on ${port}\n`);

module.exports = { app, port };
