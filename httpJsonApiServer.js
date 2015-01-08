var net = require('http');
var url = require('url');
var port = +process.argv[2];
var parseTime = '/api/parsetime';
var unixTime = '/api/unixtime';


var server = net.createServer(function(request, response){
  var parsedURL = url.parse(request.url, true);
  var result;
  if (parsedURL.pathname === parseTime)
    result = convertIsoToParseTime(new Date(parsedURL.query.iso))

  else if (parsedURL.pathname === unixTime)
    result = convertIsoToMilliseconds(new Date(parsedURL.query.iso))


  if (result){
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result))

  } else {
    response.writeHead(404)
    response.end()
  }
});

var convertIsoToParseTime = function(time){
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

var convertIsoToMilliseconds = function(time){
  return { unixtime : time.getTime() }
}

server.listen(port);

/*
Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.
For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:
    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }
Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:
    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.
*/
