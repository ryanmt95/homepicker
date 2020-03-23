const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);


// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Models
var models = require("./database/models");
//Sync database
models.sequelize.sync().then(function() {
    console.log("database set up successful!");
}).catch(function(err){
    console.log(err, "Database update failed :(");
})

//Routes for application
require('./database/routes')(app);
// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.',
//     }));

module.exports = app;