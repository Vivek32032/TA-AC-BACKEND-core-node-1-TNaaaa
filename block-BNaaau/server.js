
var http = require('http');
var fs = require('fs');
var url = require('url')

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
    console.log(req.headers);
    res.end(req.headers['user-agent']);
}

nodeServer.listen(5555,()=> {
    console.log('listening on port 5555');
})


//port 5566

var server66 = http.createServer(handleRequest66);
function handleRequest66(req,res){
    console.log(req.url,req.method);
    res.end(req.method + req.url);
}

server66.listen(5566,()=>{
    console.log('listening on port 5566');

})

//port 7000

var server70 = http.createServer(handleRequest70);

function handleRequest70(req,res){
    console.log(req.method,req.url);
    res.end(req.method + req.url);
}

server70.listen(7000,()=>{
    console.log('listening on port 7000');

})

//port 3333

var server33 = http.createServer(handleRequest33);

function handleRequest33(req,res){
    res.statusCode = 202;
    res.end(JSON.stringify(req.headers))
}

server33.listen(3333,()=>{
    console.log('listening on port 3333');

})

//port 8000

var server80 = http.createServer(handleRequest80);

function handleRequest80(req,res){
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(`<h3>Welcome to altcampus </h3>`);
}

server80.listen(8000,()=>{
    console.log('listening on port 8000');

});

//port 8888

var server88 = http.createServer(handleRequest88);

function handleRequest88(req,res){
    res.writeHead(201, {'Content-type': 'application/json'})

    res.end(JSON.stringify({
        success:true,
        message: 'Welcome to Nodejs'
    }));
}

server88.listen(8888,()=>{
    console.log('listening on port 8888');

});

//port 5050

var server50 = http.createServer(handleRequest50);

function handleRequest50(req,res){
    console.log(req.method);
    res.writeHead(201, {'Content-type': 'text/html'})
    res.end(`<h3>posted for first time </h3>`);
}

server50.listen(5050,()=>{
    console.log('listening on port 5050');

});


//port 2345

var server2345 = http.createServer(handleRequest2345);

function handleRequest2345(req,res){
    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-type', 'text/plain');
        res.end(`Vivek`);
    }
    else if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-type','text/html');
        res.end('<h2>Santosh</h2>')

    }
    else{
        res.writeHead(404, {'Content-type': 'text/plain'})
        res.end(`Page not found`);    }
   
}

server2345.listen(2345,() => {
    console.log('listening on port 2345');

});


//port 2326

var server2326 = http.createServer(handleRequest2326);


function handleRequest2326(req,res){
    if(req.method === 'GET' && req.url === '/users'){
        res.setHeader('Content-type', 'text/html');
        fs.createReadStream('./form.html').pipe(res);
    }
    if(req.method === 'POST' && req.url === '/users'){
        res.end('Posted for the second time')
    }
}

server2326.listen(2326,() => {
    console.log('listening on port 2326');

});


var server4556 = http.createServer(handleRequest4556);


function handleRequest4556(req,res){
   var parsedUrl = url.parse(req.url,true);
   console.log(parsedUrl.pathname,req.url);
   res.setHeader('Content-Type', 'application/json')
   res.end(JSON.stringify(parsedUrl.query))
}

server4556.listen(4556,() => {
    console.log('listening on port 4556');

});


