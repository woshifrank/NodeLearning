const path = require('path');

// base file name
console.log(path.basename(__filename));
// directory except filename
console.log(path.dirname(__filename));
// file extension
console.log(path.extname(__filename));
// create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);
// Concatenate path
console.log(path.join(__dirname, 'test', 'hello.html'));