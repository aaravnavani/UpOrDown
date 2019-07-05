var http = require("http");
var [url] = process.argv.slice(2);
http.get({ host: url }, function(res){
    if( res.statusCode == 200 || res.statusCode == 301 )
        console.log("This site is up and running!");
    else
        console.log("This site is down " + res.statusCode);
});