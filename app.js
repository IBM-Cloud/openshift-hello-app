const http = require('http');
      fs   = require('fs');
const port = process.env.PORT || process.env.HELLO_NODE_APP_SERVICE_PORT || 8080;
const environment = process.env.ENVIRONMENT || 'unknown';

fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    }
    html=html+"<p>from</p> <h3>"+environment+" project</h3>"; 
    const server=http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);
        response.end();  
    }).listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
});
