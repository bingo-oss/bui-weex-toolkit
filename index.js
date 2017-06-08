#!/usr/bin/env node
console.log("Welcome to use bui-weex cli. Powered by BingoSoft.");
var package = require('./package.json');
var version = package.version;
 
//模版目录
var template="template";

var fs = require('fs');
var stat = fs.stat;
var path = require('path');

//复制单个文件
function copyFile (from, to) {
  from = path.join(__dirname, template, from);
  write(to, fs.readFileSync(from, 'utf-8'))
}

//复制目录
function copyDir(fromPath,toPath){
	fromPath = path.join(__dirname, template, fromPath);
    /*
     * 复制目录中的所有文件包括子目录
     * @param{ String } 需要复制的目录
     * @param{ String } 复制到指定的目录
     */
    var copy = function( src, dst ){
        // 读取目录中的所有文件/目录
        fs.readdir( src, function( err, paths ){
            if( err ){
                throw err;
            }
            paths.forEach(function( path ){
                var _src = src + '/' + path,
                    _dst = dst + '/' + path,
                    readable, writable;
                stat( _src, function( err, st ){
                    if( err ){
                        throw err;
                    }
                    // 判断是否为文件
                    if( st.isFile() ){
                        // 创建读取流
                        readable = fs.createReadStream( _src );
                        // 创建写入流
                        writable = fs.createWriteStream( _dst );
                        // 通过管道来传输流
                        readable.pipe( writable );
                    }
                    // 如果是目录则递归调用自身
                    else if( st.isDirectory() ){
                        exists( _src, _dst, copy );
                    }
                });
            });
        });
    };

    // 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
    var exists = function( src, dst, callback ){
        fs.exists( dst, function( exists ){
            // 已存在
            if( exists ){
                callback( src, dst );
            }

            // 不存在
            else{
                fs.mkdir( dst, function(){
                    callback( src, dst );
                });
            }
        });
    };

    // 复制目录
    exists(fromPath,toPath,copy);
}

//写入文件
function write (path, str, mode) {
  fs.writeFileSync(path, str)
}

//创建目录
function mkdir (path, fn) {
  fs.mkdir(path, function (err) {
    fn && fn()
  })
}

function displayHelp(){
	console.log("Usage: bui-weex [options]");
	console.log("  ")
	console.log("Options:");
	console.log("-v                    see toolkit version");
	console.log("-h                    see options help");
	console.log("init <projectName>    create bui-weex project");
}

//处理命令行参数
var config = {};
process.argv.slice(2).forEach( function (item) {
  switch (item) {
    case "-v":
      console.log("Toolkit Version:"+version);
      break;
    case "-h":
      displayHelp();
   	  break;
    case "init":
      console.log("Init Project...");
      config.action="init";
      break;
  }
});


var BASE_PATH = ".";
var PROJECT_NAME = "bui-weex";
var project_path = ".";

//bui-weex init [projectName]
if(config.action=="init"){
	if(process.argv.length == 4){
		PROJECT_NAME = process.argv[3];
	}
	//拷贝路径
	project_path = BASE_PATH+'/'+PROJECT_NAME
	//生成目录并拷贝
	mkdir(project_path,function(){
		copyDir('pj_sample', project_path);
	});
  console.log("Success.");
}














