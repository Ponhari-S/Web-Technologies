const express = require('express');
const app = express();
const PORT = 3000;

const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} request to: ${req.url}`);
    
    next(); 
};

app.use(requestLogger);
app.use(express.json());

const preprocessRequest = (req, res, next) => {
    req.receivedAt = Date.now();
    console.log("-> Preprocessing: Added timestamp to request object.");
    next();
};

const mockAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === 'secret-123') {
        console.log("-> Auth: Success.");
        next();
    } else {
        console.log("-> Auth: Failed.");
        res.status(403).json({ error: "Unauthorized" });
    }
};

app.get('/api/secure-data', preprocessRequest, mockAuth, (req, res) => {
    const processingTime = Date.now() - req.receivedAt;
    res.json({
        message: "Access granted to secure data!",
        processingTime: `${processingTime}ms`
    });
});

app.get('/api/public', (req, res) => {
    res.send("This is a public endpoint.");
});

app.listen(PORT, () => {
    console.log(`Middleware demo running at http://localhost:${PORT}`);
});