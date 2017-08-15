var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Routes
module.exports = function(app) {

app.get('/', function (req, res) {
    res.render('index', {});
});

};