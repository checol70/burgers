// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-mm-dca-b2a397549bf4.g5.cleardb.net",
  port: 3306,
  user: "0CB3DE4F1CB3D0866E12D28262CF874E",
  password: "",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
