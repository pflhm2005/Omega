var mongoose = require('mongoose');

var crup = require('./CRUP');

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

module.exports = crup(mongoose, db, t_info);