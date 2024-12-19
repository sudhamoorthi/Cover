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
    res.status(200).json({ message: 'Login ' + username + ' successful' });
  } else {
    res.status(401).json({ message: 'Invalid ' + username +' credentials' });
  }
});



// JSON data
const covers = [
  { id: 1, name: '6x10 Cover', size: '6*10', rate: 10, quantity: 0, total: 0, selected: false },
  { id: 2, name: '7x12 Cover', size: '7*12', rate: 15, quantity: 0, total: 0, selected: false },
  { id: 3, name: '9x13 Cover', size: '9*13', rate: 20, quantity: 0, total: 0, selected: false },
  { id: 4, name: '10x16 Cover', size: '10*16', rate: 25, quantity: 0, total: 0, selected: false },
  { id: 5, name: '12x19 Cover', size: '12*19', rate: 30, quantity: 0, total: 0, selected: false },
  { id: 6, name: '14x22 Cover', size: '14*22', rate: 35, quantity: 0, total: 0, selected: false },
  { id: 7, name: '16x24 Cover', size: '16*24', rate: 40, quantity: 0, total: 0, selected: false }
];

// Endpoint to return the covers data
app.get('/covers', (req, res) => {
  res.status(200).json(covers);
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
