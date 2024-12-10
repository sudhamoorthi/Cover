const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON body

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "test" && password === "test") {
    res.status(200).json({ success: true, message: "Login successful!" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials!" });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
