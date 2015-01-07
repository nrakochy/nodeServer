var net = require('http')
var fs = require('fs')
var mapStream = require('through2-map')
var port = +process.argv[2]



var server = net.createServer(function(request, response){
  if (request.method != 'POST')
    response.end('WRONG REQUEST TYPE')

  request.pipe(mapStream(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(response)
})

server.listen(port)


