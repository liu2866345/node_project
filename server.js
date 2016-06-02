/**
 * Created by LIUD009 on 2016/5/27.
 * 服务js
 */
var http  = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require('querystring');
var router = require('./route.js');
var config = require('./js/config.js');

http.createServer(function(req,resp){

    //url
    var pathname = url.parse(req.url).pathname;
    if(pathname == "/favicon.ico"){
        return;
    }

    var query = url.parse(req.url).query;

    if(req.method.toUpperCase() == 'POST'){
        var postBody = '';
        req.on("data", function (chunk) {
            postBody = postBody+chunk;
        });
        req.on("end",function(){
            query = querystring.parse(postBody);
            router.route(req,resp,pathname,query);
        })
    }else{
        router.route(req,resp,pathname,query);
    }

}).listen(config.port);


/**
 * 预先加载所有映射需要的js（包括.do、.ajax）
 */
var parsePathToJs = function(){

    var waitParsePathArr = [{type:'ajax',value:config.basePath+'/js/ajax/'},{type:'do',value:config.basePath+'/js/do/'}];

    ParseAjaxDoToJs = {//全局的do、ajax映射路径对象
        do:{},
        ajax:{}
    };
    waitParsePathArr.forEach(function(item){//key = 0 {type:'ajax',value:config.basePath+'/js/ajax/'}
        fs.readdir(item.value,function(err,files){
            files.forEach(function(file){//file为文件名
                var searchFile = file.split(".")[0];

                (ParseAjaxDoToJs[item.type])[searchFile] = require(item.value+file);

            });
        });
    });
};

var  init = function(){
    parsePathToJs();
    console.log("init success ...")
};

init();

console.log('Server runing at http://127.0.0.1:/'+config.port);