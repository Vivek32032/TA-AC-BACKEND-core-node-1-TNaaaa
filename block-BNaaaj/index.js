var os = require('os');

console.log('Welcome to Nodejs');

console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.uptime());

var {readFile,readFileSync,unlink} = require("fs");

var sync = readFileSync('./app.js');
readFile('./app.js', (err,content) => {
    console.log(err,content.toString());
})

