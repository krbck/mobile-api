const express = require('express');
const app = express();
const port = 80;

// Trust proxy headers (needed when running behind gateways/sidecars like Istio/Envoy)
app.set('trust proxy', true);

// Middleware to log all incoming requests
app.use((req, res, next) => {
    if (req.path === '/health') {
        return next();
    }
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const clientIp = req.headers['x-forwarded-for'] || req.ip;
        const host = req.headers['host'] || '';
        console.log(`[${new Date().toISOString()}] ${req.method} ${host}${req.originalUrl || req.url} ${res.statusCode} - ${duration}ms - IP: ${clientIp} - UA: ${req.headers['user-agent']}`);
    });
    next();
});

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

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
