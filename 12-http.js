const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to Homepage!!')
    }
    if(req.url === '/about'){
        res.end('About page')
    }
    res.end(`
        <h1>OOP's</h1>
        <a href='/'>Backhome</a>
    `)
})
server.listen(8080)