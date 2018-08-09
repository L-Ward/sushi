// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "dyud5fa2qycz1o3v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "jmfpulep14ygfyeo",
  password: "gacwqn4hvm6grbps",
  database: "zrch1nfe047ri5a3	"
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
