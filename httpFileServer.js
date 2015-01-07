var net = require('http')
var fs = require('fs')
var port = +process.argv[2]
var fileLocation = process.argv[3]

var server = net.createServer(function(request, response){
  fs.createReadStream(fileLocation).pipe(response)
})

server.listen(port)


