const http = require('http')

return http
    .createServer((req, res) => {
        res.end('tests')
    })
    .listen(8080)