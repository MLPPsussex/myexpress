const express = require('express');
const app = express();
var count=0
// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define an API endpoint to retrieve data
app.get('/api/data', (req, res) => {
    // Simulated data from the backend server
    count++
    const data = { message: 'Hello!'+count };

    res.json(data);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

