//话不多说 先引这两
var express = require("express");
var path = require('path');
//实例化一个路由对象
var data = express.Router();

var t_list = require('../database/teacher_list');

var t_info = require('../database/teacher_information');

var u_list = require('../database/user_list');

//信息
data.post('/teacher_check', function(req, res) {
    var obj = { name: req.body.name };
    t_info.find(obj, function(data) {
        if (data) {
            res.send(data);
        } else {
            res.send('failed');
        }
    });
});

//初始化数据
//完美读取数据库！！！
data.get('/teacher_init', function(req, res) {
    t_list.find({}, function(data) {
        res.send(data);
    });
});

data.post('/teacher_del', function(req, res) {
    var obj = { name: req.body.name };
    t_list.del(obj, function(data) {
        res.send(data);
    })
});

data.post('/teacher_add', function(req, res) {
    t_list.adds([req.body]);
    res.send('success');
})

//用户初始化
data.get('/user_init', function(req, res) {
    u_list.find({}, function(data) {
        res.send(data);
    });
})

module.exports = data;




// 添加数据
// t_list.adds([
//     { 'name': '赵玉川', 'nickname': '布头儿', 'age': 28, 'sex': '男', 'tel': '15901256171' },
//     { 'name': '赵玉川2', 'nickname': '布头儿2', 'age': 25, 'sex': '男', 'tel': '15901556171' },
//     { 'name': '赵玉川3', 'nickname': '布头儿3', 'age': 24, 'sex': '男', 'tel': '15901776171' },
// ]);

// u_list.adds([
//     { 'account': 'botue@sina.com', 'nickname': '布头儿', 'age': 28, 'sex': '男', 'area': '河北省', 'tel': '15901256171', 'score': 43, 'reg_time': '2016/05/01 10:12:32', 'log_time': '2016/05/10 12:16:19' },
//     { 'account': 'botue2@sina.com', 'nickname': '布头儿2', 'age': 25, 'sex': '男', 'area': '河南省', 'tel': '15901256171', 'score': 21, 'reg_time': '2016/05/01 10:12:32', 'log_time': '2016/05/10 12:16:19' },
//     { 'account': 'botue3e@sina.com', 'nickname': '布头儿3', 'age': 23, 'sex': '女', 'area': '河东省', 'tel': '15901256171', 'score': 22, 'reg_time': '2016/05/01 10:12:32', 'log_time': '2016/05/10 12:16:19' },
//     { 'account': 'botue4@sina.com', 'nickname': '布头儿4', 'age': 25, 'sex': '男', 'area': '河西省', 'tel': '15901256171', 'score': 66, 'reg_time': '2016/05/01 10:12:32', 'log_time': '2016/05/10 12:16:19' },
//     { 'account': 'botue5@sina.com', 'nickname': '布头儿5', 'age': 27, 'sex': '女', 'area': '河上省', 'tel': '15901256171', 'score': 55, 'reg_time': '2016/05/01 10:12:32', 'log_time': '2016/05/10 12:16:19' },
//     { 'account': 'botue6@sina.com', 'nickname': '布头儿6', 'age': 22, 'sex': '男', 'area': '河下省', 'tel': '15901256171', 'score': 11, 'reg_time': '2016/05/01 10:12:32', 'log_time': '2016/05/10 12:16:19' },
//     { 'account': 'botue7@sina.com', 'nickname': '布头儿7', 'age': 21, 'sex': '女', 'area': '河左省', 'tel': '15901256171', 'score': 73, 'reg_time': '2016/05/01 10:12:32', 'log_time': '2016/05/10 12:16:19' },
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