var fs = require("fs");
var http = require("http");

var html = fs.readFileSync("index.html");

http.createServer(function (request, response){
    response.end(html);
}).listen(8888);
console.log("Rodando")

