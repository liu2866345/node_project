var webpack = require('webpack');

var path = require('path');

var reactRoot = path.join(__dirname, 'node_modules');

module.exports = {
    entry: {
        login   : ['../view/login.js']
    },
    output: {
        path: 'D:/node_server/js/view',
        filename: '[name].js'
    },
    resolve: {
        root:'E:/project/11/react-mobile/project/js',
        extensions: ['', '.js', '.jsx'],
        alias:{
            'config':'config.js'//此路径前不能有.
        }
    },
    module: {
        loaders: [
            {
            test:/\.js$/,
            loader: 'babel-loader!jsx-loader'
        },{
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    }
};