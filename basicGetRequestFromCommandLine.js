var http = require('http')
var url = process.argv[2]

http.get(url, function(response){
 response.setEncoding('utf8');
 response.on('data', function(chunk){
   dataLine = chunk.split('\n')
   dataLine.forEach(function(line){
     console.log(line);
   })
 })
});
