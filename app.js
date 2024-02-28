const http = require('http');

const server  = http.createServer((req, res) => {
    res.write('Welcome to our home page')
    res.end();
})
console.log("My name is khan ");

server.listen(5000);