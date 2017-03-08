//话不多说 先引这两
var express = require("express");
var path = require('path');
//实例化一个路由对象
var api = express.Router();

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

//处理添加系统
//暂时不会数据库 先返回一个字符串表示爷已收到
api.post('/add', function(req, res) {
    var data = req.body;
    if (data) {
        res.send('success');
    }
});

api.post('/del', function(req, res) {
    var data = req.body;
    res.send(req.body.id);
});

module.exports = api;