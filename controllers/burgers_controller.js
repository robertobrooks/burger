var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
    var hbsObject = { 
         burgers: data 
    };
    res.render('../views/index.handlebars', hbsObject);
});  

});

module.exports = router;