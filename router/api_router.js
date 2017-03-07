//话不多说 先引这两
var express = require("express");
var path = require('path');
//实例化一个路由对象
var api = express.Router();
var app = express();


//这个路由处理来自index的post请求
api.post('/', function(req, res) {
    //获取post请求传入的账号密码
    var user = req.body.username,
        password = req.body.password;
    //进行判断 老子还不会数据库啊
    if (user === 'admin' && password === 'admin') {
        //通过 给你index页面
        res.sendFile(path.join(__dirname, '../static/index.html'));
    } else {
        //失败 回去你的login吧
        res.redirect('./login.html');
    }
});

api.post('/add', function(req, res) {
    console.log(req.body);
    console.log(req.url);
    res.send(200);
})

module.exports = api;