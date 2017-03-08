var mongoose = require('mongoose');

//监听连接事件
var db = mongoose.connection;
//失败时的回调
db.on('error', console.error.bind(console, 'connection failed'));
//生成表
var teacherSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    job: { type: String, required: true },
    nickname: { type: String, required: true, unique: true },
    birth: { type: String, required: true },
    sex: { type: String, required: true },
    reg: { type: String, required: true },
    tel: { type: Number, required: true },
    email: { type: String, required: true },
    addr: { type: String, required: true },
});

var t_info = mongoose.model('t_info', teacherSchema);
//添加数据
function add(obj) {
    var data = new t_info({
        name: obj.name,
        job: obj.job,
        nickname: obj.nickname,
        birth: obj.birth,
        sex: obj.sex,
        reg: obj.reg,
        tel: obj.tel,
        email: obj.email,
        addr: obj.addr
    });
    data.save((err, data) => {
        if (err) {
            // return console.log(err);
        }
        return 'Data save success';
    });
}
//添加多个
function multiAdd(arr) {
    mongoose.connect("mongodb://localhost:27017/teacher");
    for (var i = 0, len = arr.length; i < len; i++) {
        add(arr[i]);
    }
    console.log(1);
    db.close();
}
//查询数据
function find(obj, fn) {
    mongoose.connect("mongodb://localhost:27017/teacher");
    t_info.find(obj, (err, data) => {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        fn(data);
    });
    db.close();
}
//删除数据 暂未实现
function del() {

}
//暴露接口
module.exports = {
    find: find,
    del: del,
    adds: multiAdd
}