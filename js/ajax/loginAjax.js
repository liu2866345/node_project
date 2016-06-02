/**
 * Created by LIUD009 on 2016/6/2.
 */

var execute = function(req,resp,path,para,config){

    resp.writeHead('200',{'Content-Type':'text-plain'});

    var rederHtml = "[{url:'"+config.serverPath+config.port+ajax[_path]+"'}]";
    resp.write(rederHtml);
    resp.end();

}

exports.execute = execute;