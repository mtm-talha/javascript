/*
Instead of relying on an ORM, you write and execute SQL queries yourself using the appropriate database driver.
*/
const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "database",
});

// Creating a new user
connection.query("INSERT INTO users (name, age) VALUES (?, ?)", [
  "John Doe",
  30,
]);

// Retrieving users
connection.query("SELECT * FROM users").then(([rows]) => {
  console.log(rows);
});
