var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
    console.log('new server');


    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.end();
}).listen(8080);




http.createServer(function (request, response)).listen(8080);
console.log('Server started');