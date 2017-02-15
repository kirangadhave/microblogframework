// server.js

var express = require('express');
var app = express();
var config = require('./config.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Configure Port
var port = config.port;

// Body Parser
app.use(bodyParser.urlencoded({
  extended: true
}));

// Configure Mongo
mongoose.connect('mongodb://localhost/todos');

// Import Routes
require('./routes/blog-routes.js')(app, mongoose);

// Spin up server
app.listen(port, function(){
	console.log("Server started on " + port);
});
