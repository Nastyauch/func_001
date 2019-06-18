const concat = require('goss_concat');
let r = 255, g = 255, b = 255;
rgb = (r,g,b) => concat(r.toString(16), g.toString(16), b.toString(16)); 
console.log(" #" + rgb(r, g, b)); 
