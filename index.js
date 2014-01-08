var http = require('http')
var hat = require('hat')
http.createServer(function(req, res) { res.end(hat()) }).listen(8081)