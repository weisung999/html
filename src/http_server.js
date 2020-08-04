const http = require('http');

const server = http.createServer(function(request,response){
    response.writeHead(200,{
        "Content-Type":"text.html"
    });

    response.end(`<h1> Hello World to Server Successfully!!! </h1> 
    <p> ${request.url} </p>`);
});

server.listen(3000);