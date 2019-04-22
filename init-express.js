var express = require('express');

const app = express();
var subpath = express();

var argv = require('minimist')(process.argv.slice(2));
var bodyParser = require('body-parser');

app.use(bodyParser());
app.use('/v1', subpath);
const swagger = require('swagger-node-express').createNew(subpath);

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());
app.use(express.static('dist'));

swagger.setApiInfo({
    title: 'example API',
    description: 'API to do something, manage something...',
    termsOfServiceUrl: '',
    contact: 'yourname@something.com',
    license: '',
    licenseUrl: ''
});
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

swagger.configureSwaggerPaths('', 'api-docs', '');

// Configure the API domain
let domain = 'localhost';
if (argv.domain !== undefined) {
    // eslint-disable-next-line prefer-destructuring
    domain = argv.domain;
}
else {
    console.log('No --domain=xxx specified, taking default hostname "localhost".');
}

// Configure the API port
let port = 8000;
if (argv.port !== undefined) {
    port = argv.port;
}
else {
    console.log(`No --port=xxx specified, taking default port ${port}.`);
}

// Set and display the application URL
const applicationUrl = `http://${domain}:${port}`;
console.log(`snapJob API running on ${applicationUrl}`);


swagger.configure(applicationUrl, '1.0.0');
module.exports = app;
