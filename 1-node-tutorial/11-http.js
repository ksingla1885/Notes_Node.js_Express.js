const http = require("http");

// const server = http.createServer((req, res)=> {
//     res.write("Welcome to our webpage");
//     res.end();
// })


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("welcome to our webpage");
    }

    if(req.url === '/about'){
        res.end("welcome to our history");
    }

    res.end(`<h1> No page found </h1>
        <a href="/"> Back Home </a>`)
})

server.listen(5000);