
var http = require('http');
var server = http.createServer(handleRequest);
function handleRequest(req,res){
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;
    if(req.method === 'GET' && req.url === '/'){
        res.write('Welcome to homepage');
        res.end();
    }else if(req.method === "GET" && req.url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2> About page </h2>');
    }
    else if(req.method === 'POST' && pathname === '/about'){
        res.end('Posted for the first time');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h2> Page Not Found <h2>')
    }

}

server.listen(5000,()=>{
    console.log('listening on port 5000')
})