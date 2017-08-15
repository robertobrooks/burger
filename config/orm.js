var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(burger_name, devoured) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ( ?? , ?? , curdate() )";
    console.log(queryString);
    connection.query(queryString, [burger_name, devoured], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function (id) {
    var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ??";
    console.log(queryString);
    connection.query(queryString, [id], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
