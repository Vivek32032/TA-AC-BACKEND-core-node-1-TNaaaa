var http = require("http");
var server = http.createServer(handleRequest);
function handleRequest(req,res){
 res.end('welcome');
}
server.listen(4000,()=>{
    console.log('listening on port 4000');
})