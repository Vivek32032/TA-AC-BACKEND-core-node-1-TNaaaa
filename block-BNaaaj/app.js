let area = require("./area.js");


console.log(area.rectangle(2,5));
console.log(area.square(6));
console.log(area.circle(5));

var buffer1 = Buffer.alloc(12);
var buffer2 = Buffer.allocUnsafe(12);

buffer1.write("hello World");
console.log(buffer1.toString());


