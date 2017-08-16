var connection = require("./connection.js");


var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
        if (err) {
            throw err;
          }
          cb(result);
    });
  },
  insertOne: function(burger_name, devoured, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ( ?? , ?? , curdate() )";
    connection.query(queryString, [burger_name, devoured], function(err, result) {
        if (err) {
            throw err;
          }
          cb(result);
    });
  },
  updateOne: function (id, cb) {
    var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ??";
    connection.query(queryString, [id], function(err, result) {
        if (err) {
            throw err;
          }
          cb(result);
    });
  }
};

module.exports = orm;
