const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your username
  password: 'Lucky@2005',
  database: 'sdpproject',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the MySQL database.');
  }
});
