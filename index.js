const express = require('express');
const app = express();
const port = 3000;

// Static version field
const VERSION = "1.0.0";

app.get('/api/version', (req, res) => {
    res.json({ version: VERSION });
});

app.get('/api/checkversion', (req, res) => {
    res.json({ version: VERSION });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
