const http = require('http');
const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>This is my 1st res </h1><h1> This is my 2st res</h1><h3>this is my 3r res</h3></body></html>');
    res.end()
  }).listen(8080);
  

console.log("hola");