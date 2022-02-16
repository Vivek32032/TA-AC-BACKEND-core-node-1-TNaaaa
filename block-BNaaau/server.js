
var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    console.log(req,res);
    res.end('test');
}

server.listen(5000,()=>{
    console.log('listening on port 5000')
})


// create a node server

var nodeServer = http.createServer(handleRequestForNode);

function handleRequestForNode(req,res){
    res.write( 'My first server in NodeJS');
    res.end();
}

nodeServer.listen(5100,()=>{
    console.log('listening on port 5100');
})

// port 5555

var nodeServer = http.createServer(handleRequestForNodeTwo);

function handleRequestForNodeTwo(req,res){
    res.end();
}

nodeServer.listen(5555,()=>{
    console.log('listening on port 5100');
})












// function handleRequest(req,res){
//     if(req.method === 'GET' && req.url === '/'){
//         res.write('Welcome to homepage');
//         res.end();
//     }else if(req.method === "GET" && req.url === '/file'){
//         res.setHeader('Content-Type', 'text/html');
//         fs.readFile('./node.html',(err,content)=>{
//             if(err) console.log(err);
//             res.end(content)
//         })
//     }else if(req.method === "GET" && req.url === '/stream'){
//         res.setHeader('Content-Type', 'text/html');
//         fs.createReadStream('./node.html').pipe(res);
//         }
//     else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         res.end('<h2> Page Not Found <h2>')
//     }

// }

// server.listen(5555,()=>{
//     console.log('listening on port 5555')
// })