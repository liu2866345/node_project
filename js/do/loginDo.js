/**
 * Created by LIUD009 on 2016/6/2.
 */

var fs = require("fs");
var htmlParse = require("../common/renderMode.js");

var doParse = {
    login:'/html/home.html'
}

var loginParse = function(req,resp,path,para,config){
    var _para = {};
    var user = {};
    for(var key in para){
        user[key] = para[key];
    }
    _para.user = user;
    fs.readFile(config.basePath+doParse[path],function(err,data){
        if(err){
            resp.writeHead('404',{'Content-Type':'text-plain'});
            console.log("404  --> can not find page in "+config.basePath+path);
        }else{
            resp.writeHead('200',{'Content-Type':'text-plain'});
            var rederHtml = data.toString();
            rederHtml = htmlParse.render.renderByJsonObj(rederHtml,_para);
            resp.write(rederHtml);
            console.log("200  --> success find page in "+config.basePath+path);
        };
        resp.end();
    })
}

exports.execute = loginParse;