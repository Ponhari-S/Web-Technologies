const http = require('http');

const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html');
    
    console.log(`Received a ${req.method} request for: ${req.url}`);

    res.write('<h1>Hello from your Node.js Server!</h1>');
    res.write('<p>This response was generated without any external frameworks.</p>');
    
    res.end(); 
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(` Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.');
});