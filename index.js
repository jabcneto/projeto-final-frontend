var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '')));
var port = process.env.PORT || 8080;

app.listen(port);