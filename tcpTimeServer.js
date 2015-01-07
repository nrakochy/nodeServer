var net = require('net')
var port = +process.argv[2]

var server = net.createServer(function(socket){
  socket.end(timeWriter() + '\n');
})

server.listen(port)

function timeWriter(){
  var date = new Date();
  var fullYear = digitFormatter(date.getFullYear());
  var month = digitFormatter(date.getMonth() + 1);
  var numDate = digitFormatter(date.getDate());
  var hours = digitFormatter(date.getHours());
  var minutes = digitFormatter(date.getMinutes());
  return(fullYear + '-' + month + '-' + numDate + ' ' + hours + ":" + minutes)
}

function digitFormatter(num){
  return(num < 10 ? '0' : '') + num
}
