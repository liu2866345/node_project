/**
 * Created by LIUD009 on 2016/6/2.
 */

//var express = require('express');
//
//var app = express();
//
//app.get('/',function(req,resp){
//
//    resp.cookie('cookie_liu','liudongliang');
//    resp.send("hello wold!");
//
//});
//
//app.post('/',function(req,resp){
//
//    resp.cookie('cookie_liu','liudongliang');
//    resp.send("hello wold!");
//
//});
//
//app.listen('8822',function(req,resp){
//
//console.log("server star in 8822...")
//});

var http = require("http");

http.createServer(function(req,resp){

    resp.setHeader("Set-Cookie", ['username=xxx', 'age=xxx;path=/']);
    resp.writeHead('200',{'Content-Type':'text-plain'});
    //resp.set('Set-Cookie', 'cookie_liu=liudongliang;');
    //resp._headers={'set-cookie': "cookie_expressset=AAAAAAAAAA; Path=/"};
    //resp._headerNames['set-cookie'] = "Set-Cookie";



    resp.write("hello world!");
    resp.end();

}).listen(8822);

console.log("server star in 8822...")