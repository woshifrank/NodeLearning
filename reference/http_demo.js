const http = require('http');

http.createServer((req,res)=>{
    res.write('First node.js web');
    res.end();
}).listen(5000,()=>console.log('server is running'));