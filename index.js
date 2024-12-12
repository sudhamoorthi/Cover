const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON body

// Define the POST route for "/"
app.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username === 'test' && password === 'test') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
