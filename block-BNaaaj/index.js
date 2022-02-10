var os = require('os');

console.log('Welcome to Nodejs');

console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.uptime());

var {readFile} = require("fs");