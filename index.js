const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors({
  origin: 'https://clientcover-c73b4.web.app', // Replace with your Firebase app's URL
  methods: ['GET', 'POST'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

// Other middleware
app.use(express.json());

// Routes
app.post('/', (req, res) => {
  const { username, password } = req.body;
  if (username === 'test' && password === 'test') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
