const express = require('express');
const app = express();
const port = 80;

// Version from environment variable
const VERSION = process.env.APP_VERSION || "1.0.0";

app.get('/api/version', (req, res) => {
    res.json({ version: VERSION });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.get('/api/checkversion', (req, res) => {
    res.json({ version: VERSION });
});

app.listen(port,'0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
