const http = require('http');
const port = process.env.PORT || process.env.HELLO_NODE_APP_SERVICE_PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World!\n');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});