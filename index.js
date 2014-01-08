var http = require('http')
http.createServer(function(res, req) { res.end('hi!') }).listen(8081)