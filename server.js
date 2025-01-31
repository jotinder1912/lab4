const express = require('express');
const path = require('path');
const app = express();
const port = 8084; // Changed port number to 8084

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Redirect to index.html on root request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});