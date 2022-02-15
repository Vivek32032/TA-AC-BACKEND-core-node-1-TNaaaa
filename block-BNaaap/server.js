
var http = require('http');
var server = http.createServer(handleRequest);
function handleRequest(req,res){
    res.statusCode = 201;
    res.setHeader('content-Type', 'text/html');
    // res.whiteHead(200,{'content-Type': 'text/html'})
    res.end('<h1> Welcome <h1>');

}

server.listen(4444,()=>{
    console.log('listening on port 4444')
})