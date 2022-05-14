/**
 * helloworld.js
 * 
 * @author selam 
 * @since 2022-05-09
 */
 console.log("Starting HTTPServer for HelloWorld...");

 const http = require("http");
 //create and start an HTTPServer
 http.createServer(function(req, res){
     res.writeHead(200, {
         "content-Type": "text/html"
     });
     res.end("Hello World!");
 }).listen(8080);