var http = require('http')

http.createServer(function(req, res){
    res.end("My Message direcionada")
}).listen(8081);

console.log("The Server is active");