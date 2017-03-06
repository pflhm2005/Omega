var path = require('path');
var webpack = require('webpack');

module.exports = {
    //入口文件为刚才的main.js
    entry: './static/js/main.js',
    //随便找个地方输出 
    output: {
        path: path.resolve(__dirname, './static'),
        publicPath: '/static/',
        filename: 'main.js'
    },
    module: {
        rules: [
            //处理vue单文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            //处理import等语法
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            //暂时用不到
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    //路径简化
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'vue-router$': 'vue-router/dist/vue-router.common.js',
        }
    },
    //     devtool: '#eval-source-map'
}