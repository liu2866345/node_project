/**
 * Created by LIUD009 on 2016/6/1.
 * 渲染模板相关方法
 */

var render = {
    /**
     * 通过json obj渲染页面中{variable}变量,页面中的变量名要和obj中的变量名一致
     * html - 字符串
     * obj - 对象
     * 可支持多级变量eg:person.name
     *
     */
    renderByJsonObj : function(html,obj){
        if(Object.prototype.toString.call(obj) == "[object Object]"){//obj = {p:{name:''}}
            var waitReplaceArr = html.match(/\{*[^{^}]*\}/g);//待替换数组
            for(var key in waitReplaceArr){//key {obj.name}
                var dataObjArr = waitReplaceArr[key].replace(/\{|\}|\s/g,'').split(".");

                var eachValue = obj;//最终被替换的值
                for(var i=0; i <dataObjArr.length; i++){
                    eachValue = eachValue[dataObjArr[i]];
                };
                //替换当前key
                var _reg = eval("/"+waitReplaceArr[key]+"/g");
                html = html.replace(_reg,eachValue);
            }
            return html;
        }else{//obj为除了Object的其他类型

        }
    }
};

exports.render = render;