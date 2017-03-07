var express = require('express');

var app = express();
var morgan = require('morgan');
app.use(morgan('short'));
var path = require('path');

//直接引用这个中间件
var webpackDevMiddleware = require("webpack-dev-middleware");
//获取webpack
var webpack = require("webpack");
//配置文件
var compiler = webpack({
    //入口文件为刚才的main.js
    entry: './static/js/main.js',
    //随便找个地方输出 
    output: {
        path: path.resolve(__dirname, './static'),
        publicPath: '/static/',

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
            //渲染图片
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
            },
        ]
    },
});
//链接webpack与express
app.use(webpackDevMiddleware(compiler, {
    // options
}));

var apiRouter = require("./router/api_router");

var bodyParser = require('body-parser');

//为了解析post 这个需要在主配置中引用
app.use(bodyParser.urlencoded({ extended: false }));

//默认根路径会指向index.html
//需要在前面使用get劫持请求然后重定向
app.get('/', function(req, res) {
    res.redirect('./login.html');
});

//设定静态路径 所有请求优先在此路径查找
//不要把服务器配置JS文件和静态页面放在同一个文件夹！！！！
app.use(express.static(path.join(__dirname, 'static')));

app.use("/index", apiRouter);

app.listen(9000);