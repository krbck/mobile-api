const express = require('express');
const app = express();
const port = 80;

// Version from environment variable
const VERSION = process.env.APP_VERSION || "1.0.0";

app.get('/api/version', (req, res) => {
    res.json({ version: VERSION });
});

app.get('/api/checkversion', (req, res) => {
    res.json({ version: VERSION });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
