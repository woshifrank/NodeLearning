/* const person1 = require('./person');
const User = require('./user');
const user1 = new User('frank',30);
console.log(person1);
console.log(person1.age);
user1.greeting(); */

const path = require('path');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req.url);
    /* if(req.url === '/'){
		// read from html files
        fs.readFile(path.join(__dirname,'public','index.html'), (err,content) =>{
            if (err) throw err; 
            res.writeHead(200,{'Content-Type':'text/html'});
            //res.end('<h1>Home coming!!!</h1>');
			res.end(content);
        })
    }
    if(req.url === '/api/users'){
        const users =[
             {name:"Alice", age:'26'},
             {name:"Bob", age:'24'}
        ];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(users));
     } */

     // build file path
     let filePath = path.join(
        __dirname, 
        'public', 
        req.url === '/' ? 'index.html': req.url
    );

    // Extension of file
    let extname = path.extname(filePath);
    // Initial content type
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
             break;
        case '.js':
            contentType = 'image/png';
            break;
        case '.js':
            contentType = 'image/jpg';
            break;
    }

    // read File
    fs.readFile(filePath,(err,content)=>{
        if (err){
            if (err.code === 'ENDENT'){
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content)=> {
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(content, 'utf-8');
                });
            }
            else{
                // some server error
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            }
        }
        else{
            // success
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content, 'utf-8');
        }
    });
    //console.log(filePath)
    //res.end();
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`server is running on ${PORT}`));
