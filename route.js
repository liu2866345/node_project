/**
 * Created by LIUD009 on 2016/5/30.
 */

var fs = require("fs");
var config = require("./js/config");

/**
 * 路由配置
 * @param path
 * 请求为http://localhost:8800/html 下的页面
 * 后缀.html  .do .ajax
 * .html用于直接返回html页面
 * .do经过处理后返回页面
 * .ajax返回json数据
 */
var route = function(req,resp,path,para){//后缀.html  .do .ajax

    var htmlReg = /\.html$/;
    var doReg = /\.do$/;
    var ajaxReg = /\.ajax/;
    var jsReg = /\.js$/;
    var cssReg = /\.css$/;

    if(htmlReg.test(path)){

        outputFile(path,resp,'text-plain');

    }else if(doReg.test(path)){

        parseDORequest(req,resp,path,para);

    }else if(ajaxReg.test(path)){

        ajaxHandler(req,resp,path,para);

    }else if(jsReg.test(path)){

        outputFile(path,resp,'text-plain');

    }else if(cssReg.test(path)){

        outputFile(path,resp,'text/css');

    }else{
        resp.writeHead('404',{'Content-Type':'text-plain'});
    }

};

/**
 * 读取请求文件并且返回文件
 * @param path
 * @param resp
 * @param textPlain
 */
var outputFile = function(path,resp,textPlain){
    fs.readFile(config.basePath+path,function(err,data){
        if(err){
            resp.writeHead('404',{'Content-Type':textPlain});
            console.log("404  --> can not find page in "+config.basePath+path);
        }else{
            resp.writeHead('200',{'Content-Type':textPlain});
            var rederHtml = data.toString();
            resp.write(rederHtml);
            console.log("200  --> success find page in "+config.basePath+path);
        };
        resp.end();
    })
};

/**
 * 解析并处理.do请求
 * 根据请求名调用相应js处理
 * @param req
 * @param resp
 * @param path
 * @param para
 */
var parseDORequest = function (req,resp,path,para) {

    var _path = (path.split(".")[0]).split("/").pop();
    handlerAjaxAndDo(req,resp,_path,para,'Do');

}

/**
 * ajax处理函数
 * @param req   request对象
 * @param resp  response对象
 * @param path 请求的action  /login.ajax
 * @param para 请求参数
 */
var ajaxHandler = function (req,resp,path,para) {

    var _path = path.split(".")[0].replace(/\//g,'');
    handlerAjaxAndDo(req,resp,_path,para,'Ajax');

}

/**
 * 处理请求，根据请求名调用对应的js处理
 * @param req
 * @param resp
 * @param path  login
 * @param para
 */
var handlerAjaxAndDo = function(req,resp,path,para,type){

    var execute = ParseAjaxDoToJs[type.toLowerCase()][path+type];
    try{
        execute.execute(req,resp,path,para,config);
    }catch(e){
        throw "file: "+path+type+' can not exports execute function...';
    }

};

exports.route = route;