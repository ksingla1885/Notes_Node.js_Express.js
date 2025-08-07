const http = require('http');

const server = http.createServer((req, res)=> {
    console.log('request sent');
    console.log('hello world');
})

server.listen(5000, () => {
    console.log('server is listening at 5000');
})
