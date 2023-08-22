const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

const pool = require('./db');

// Middleware for JSON request and response
app.use(express.json());

// Get all todos 
app.get('/', async (req, res) => {
  try {
    const todos = await pool.query('SELECT * FROM todos');
    res.json(todos.rows);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: 'Server error' }); // Send an error response
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
