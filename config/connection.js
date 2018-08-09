// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ofcmikjy9x4lroa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "excqoj3gzne242va",
  password: "lsvmgt05j9qhtty0",
  database: "m5hay21n7qmafnvf"
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
