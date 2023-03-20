const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.SQL_PASSWORD,
  database: "vaccenter",
});

module.exports = connection;
