var http = require('http')
var bl = require('bl')
var url = process.argv[2]

http.get(url, function(response){
 response.pipe(bl(function(error, data){
   if(error)
     console.log("ERROR:" + error);
   data = data.toString();
   count = data.length
   console.log(count);
   console.log(data);
   }))
});
