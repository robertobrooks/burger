var orm = require("./config/orm.js");

//Select all Burgers
orm.selectAll("burgers");

//Insert one row
orm.insertOne("Big Mac", 0);

//Update burger 1 to devour
orm.updateOne(1);

module.exports = burger;