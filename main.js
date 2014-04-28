/*
 * 简单的路由器
 */
 
 var  http = require('http');
 var  url  = require('url');
 var  fs   = require('fs'); 
 var  path = require('path');
 
 function write(res,code,body){
	 res.writeHead(code,{"Content-Type":"text/plain"});
	 res.write(body);
	 res.end();
 }
 
 http.createServer(function(request,response,pathname){
 
 	 var file = './apps'+url.parse(request.url).pathname,mode;
 	 	 file += file.match(/\\$/) 
 	 	 	  ? "index.js" : ".js";
 	 fs.exists(file,function( exist ){
	 	 if ( exist ){
	 	 	 if (Mode = require(file)){
		 	 	 new Mode(request,response);	 
	 	 	 } else {
		 	 	write(request,200,"ok");
		 	 }
	 	 } else {
		 	 write(request,404,"对不起，你的请求不存在！");
	 	 }
 	 }); 	
 }).listen(8080);console.log('ok');