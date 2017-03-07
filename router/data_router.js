//话不多说 先引这两
var express = require("express");
var path = require('path');
//实例化一个路由对象
var data = express.Router();

var teacher = [
    { 'name': '赵玉川', 'nickname': '布头儿', 'age': 28, 'sex': '男', 'tel': '15901256171', 'id': 0 },
    { 'name': '赵玉川2', 'nickname': '布头儿', 'age': 28, 'sex': '男', 'tel': '15901256171', 'id': 1 },
    { 'name': '赵玉川3', 'nickname': '布头儿', 'age': 28, 'sex': '男', 'tel': '15901256171', 'id': 2 },
]

var checkData = {
    '0': {
        'name': '赵玉川',
        'job': '讲师',
        'nickname': '麻衣长老',
        'birth': '1985-05-25',
        'sex': '男',
        'reg': '2015-11-13',
        'tel': '13051524959',
        'email': 'zhaoyuchuan@qq.com',
        'addr': '河北省 保定市 曲阳县'
    },
    '1': {
        'name': '赵玉川2',
        'job': '讲师2',
        'nickname': '麻衣长老2',
        'birth': '1995-05-25',
        'sex': '女',
        'reg': '2013-11-13',
        'tel': '13053424959',
        'email': 'zhaoyuchuan@qq.com',
        'addr': '河南省 保定市 曲阳县'
    },
    '2': {
        'name': '赵玉川3',
        'job': '讲师3',
        'nickname': '麻衣长老3',
        'birth': '1991-05-25',
        'sex': '女',
        'reg': '2014-11-13',
        'tel': '13056624959',
        'email': 'zhaoyuchuan@qq.com',
        'addr': '河东省 保定市 曲阳县'
    }
}

//信息
data.post('/check', function(req, res) {
    var index = req.body.id;
    res.send(checkData[index]);
});

//初始化数据
data.get('/init', function(req, res) {
    res.send(teacher)
});

data.post('/del', function(req, res) {

});

module.exports = data;