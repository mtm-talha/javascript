// 1. Import the database driver
const mysql = require('mysql2');

// 2. Create a database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'database',
  });
  
// 3. Test the database connection
connection.connect((error) => {
    if (error) {
      console.error('Failed to connect to the database:', error);
      return;
    }
    console.log('Database connection successful!');
  });
  
// 4. Perform CRUD operations
const insertQuery = 'INSERT INTO users (name, age) VALUES (?, ?)'; // Example query: Insert a new record
const values = ['John Doe', 30];

connection.query(insertQuery, values, (error, results, fields) => {
  if (error) {
    console.error('Failed to insert data:', error);
    return;
  }
  console.log('Data inserted successfully:', results);
});

const selectQuery = 'SELECT * FROM users'; // Example query: Select records

connection.query(selectQuery, (error, results, fields) => {
  if (error) {
    console.error('Failed to fetch data:', error);
    return;
  }
  console.log('Fetched data:', results);
});


