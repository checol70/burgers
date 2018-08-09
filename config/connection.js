// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mysql://b8343a0401e3cb:1f7cb802@us-cdbr-iron-east-01.cleardb.net/heroku_a0d168ad519dac0?reconnect=true",
  //port: 3306,
  user: "b8343a0401e3cb",
  password: "1f7cb802",
  database: "us-cdbr-iron-east-01"
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
