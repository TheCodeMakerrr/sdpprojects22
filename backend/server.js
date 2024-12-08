const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

// MySQL connection setup using mysql2
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lucky@2005',
  database: 'sdpproject',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit process on database connection failure
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Route for user signup
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required' });
  }

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.execute(query, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).json({ message: 'Error signing up' });
    }
    res.status(200).json({ message: 'Signup successful' });
  });
});

// Route for feedback submission
app.post('/feedback', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  const query = 'INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)';
  db.execute(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting feedback:', err);
      return res.status(500).json({ message: 'Error submitting feedback' });
    }
    res.status(200).json({ message: 'Feedback submitted successfully!' });
  });
});

// Route to get user profile by email (or ID if preferred)
app.get('/profile', (req, res) => {
  const { email } = req.query;  // Assuming user is querying by email

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const query = 'SELECT id, name, email FROM users WHERE email = ?';
  db.execute(query, [email], (err, result) => {
    if (err) {
      console.error('Error fetching user profile:', err);
      return res.status(500).json({ message: 'Error retrieving profile' });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ profile: result[0] });
  });
});

// Route to update user profile
app.put('/profile', (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ message: 'Email, name, and password are required to update profile' });
  }

  const query = 'UPDATE users SET name = ?, password = ? WHERE email = ?';
  db.execute(query, [name, password, email], (err, result) => {
    if (err) {
      console.error('Error updating user profile:', err);
      return res.status(500).json({ message: 'Error updating profile' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Profile updated successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
