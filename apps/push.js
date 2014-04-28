var spawn = require('child_process').spawn;
//更新当前仓库版本号
module.exports= function(request,response){
	var gitpull = spawn('git',['pull']);
	gitpull.stdout.on("data",function(data){
		console.log("标准输出:\n"+data);
	});
	gitpull.stderr.on('data',function(data){
		console.log("标准错误输出："+data);
	});
	gitpull.on('exit',function(code){
		console.log("子进程已退出，代码："+code);

	});
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("ok");
	response.end();
}