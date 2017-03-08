//话不多说 先引这两
var express = require("express");
var path = require('path');
//实例化一个路由对象
var data = express.Router();

var t_list = require('../database/teacher_list');

var t_info = require('../database/teacher_information');

//信息
data.post('/check', function(req, res) {
    var obj = { name: req.body.name };
    t_info.find(obj, function(data) {
        res.send(data);
    });
    // res.send(checkData[index]);
});

//初始化数据
//完美读取数据库！！！
data.get('/init', function(req, res) {
    t_list.find({}, function(data) {
        res.send(data);
    });
});

data.post('/del', function(req, res) {

});

module.exports = data;

// 添加数据
// t_list.adds([
//     { 'name': '赵玉川', 'nickname': '布头儿', 'age': 28, 'sex': '男', 'tel': '15901256171' },
//     { 'name': '赵玉川2', 'nickname': '布头儿2', 'age': 25, 'sex': '男', 'tel': '15901556171' },
//     { 'name': '赵玉川3', 'nickname': '布头儿3', 'age': 24, 'sex': '男', 'tel': '15901776171' },
// ]);

// t_info.adds([{
//         'name': '赵玉川',
//         'job': '讲师',
//         'nickname': '麻衣长老',
//         'birth': '1985-05-25',
//         'sex': '男',
//         'reg': '2015-11-13',
//         'tel': '13051524959',
//         'email': 'zhaoyuchuan@qq.com',
//         'addr': '河北省 保定市 曲阳县'
//     },
//     {
//         'name': '赵玉川2',
//         'job': '讲师2',
//         'nickname': '麻衣长老2',
//         'birth': '1995-05-25',
//         'sex': '女',
//         'reg': '2013-11-13',
//         'tel': '13053424959',
//         'email': 'zhaoyuchuan@qq.com',
//         'addr': '河南省 保定市 曲阳县'
//     },
//     {
//         'name': '赵玉川3',
//         'job': '讲师3',
//         'nickname': '麻衣长老3',
//         'birth': '1991-05-25',
//         'sex': '女',
//         'reg': '2014-11-13',
//         'tel': '13056624959',
//         'email': 'zhaoyuchuan@qq.com',
//         'addr': '河东省 保定市 曲阳县'
//     }
// ]);