项目启动脚本server.js
项目路由 route.js
文件目录 css：存放css文件 common文件夹下放公共的css
        html：项目的所有页面，也是页面访问的根目录，可通过basePath+html+...来访问下面的页面
        images: 存放项目的所有图片、common存放共同的图片部分、sprite存放组合图标、其它部分自行建立文件夹
        js:common共同的js、frame框架js、lib第三方类库、react是react用到的未 编译的js、jsx和node包相关文件、package.json为webpack配置文件、webpack.config.js是react的配置js
            view文件夹存放页面需要的js文件、为react编译后的js文件
            config.js用于配置项目基准路径、端口等

登录页访问地址http://localhost:8800/html/user/login.html
       访问数据：http://localhost:8800/login.ajax

3中请求类型说明：
    1.直接请求文件：eg:css、js、html
    2..ajax请求--返回json字符串
    3. .do请求，处理数据，渲染html并且返回新的html、跳转页面

react使用：
    进入js/react目录、执行webpack命令

调试工具使用：
1.D:\node_server>node --debug server.js
2.node-inspector &
3.在chrome中输入http://127.0.0.1:8080?port=5858此页为调试页面
4.打开项目页面http://localhost:8811/html/user/login.html