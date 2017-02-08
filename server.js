// server.js

var express = require('express');
var app = express();
var config = require('./config.js');

// Configure Port
var port = config.port;



// Spin up server
app.listen(port, function(){
	console.log("Server started on " + port);
});
