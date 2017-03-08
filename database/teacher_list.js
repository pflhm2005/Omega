var mongoose = require('mongoose');

//监听连接事件
var db = mongoose.connection;
//失败时的回调
db.on('error', console.error.bind(console, 'connection failed'));
//生成表
var teacherSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    nickname: { type: String, required: true },
    age: { type: Number, required: true },
    sex: { type: String, required: true },
    tel: { type: Number, required: true },
});

var t = mongoose.model('t', teacherSchema);
//添加数据
function add(obj) {
    var data = new t({
        name: obj.name,
        nickname: obj.nickname,
        age: obj.age,
        sex: obj.sex,
        tel: obj.tel,
    });
    data.save((err, data) => {
        if (err) {
            // return console.log(err);
        }
    });
}
//添加多个
function multiAdd(arr) {
    mongoose.connect("mongodb://localhost:27017/teacher");
    for (var i = 0, len = arr.length; i < len; i++) {
        console.log(arr[i]);
        add(arr[i]);
    }
    db.close();
}
//查询数据
function find(obj, fn) {
    mongoose.connect("mongodb://localhost:27017/teacher");
    t.find(obj, (err, data) => {
        if (err) {
            return console.log(err);
        } else {
            fn(data);
        }
    });
    db.close();
}
//删除数据
function del(obj, fn) {
    mongoose.connect("mongodb://localhost:27017/teacher");
    t.remove(obj, (err, result) => {
        if (err) {
            return console.log(err);
        } else {
            fn('success');
        }
    });
    db.close();
}
//暴露接口
module.exports = {
    find: find,
    del: del,
    adds: multiAdd
}