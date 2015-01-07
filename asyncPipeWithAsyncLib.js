var http = require('http')
var bl = require('bl')
var urlData = []
var index;
var counter = 0;


var getDataFromUrls = function(i){
  http.get(process.argv[i], function(response){
    response.pipe(bl(function(error, data){
      if(error)
        console.log("ERROR:" + error);
      urlData[i-2] = data.toString();
      counter ++;

      if (counter === process.argv.length - 2)
        printData();
    }))
  })
};

function printData(){
  urlData.forEach(function(string){
    console.log(string);
  });
}

for(index = 2; index < process.argv.length; index ++)
    getDataFromUrls(index);

