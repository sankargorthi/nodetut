import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html>
        <body>Hello World</body>
    </html>`);
});

server.listen(port);
console.log(`Server running at http://localhost:${port}/`);
