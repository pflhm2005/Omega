var crup = function(mongoose, db, DB) {

    function add(obj) {
        var data = new DB(obj);
        data.save((err, data) => {
            if (err) {
                return console.log(err);
            }
        });
    }

    function multiAdd(arr) {
        mongoose.connect("mongodb://localhost:27017/teacher");
        for (var i = 0, len = arr.length; i < len; i++) {
            add(arr[i]);
        }
        db.close();
    }
    //查询数据
    function find(obj, fn) {
        mongoose.connect("mongodb://localhost:27017/teacher");
        DB.find(obj, (err, data) => {
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
        DB.remove(obj, (err, result) => {
            if (err) {
                return console.log(err);
            } else {
                fn('success');
            }
        });
        db.close();
    }
    return {
        find: find,
        del: del,
        adds: multiAdd
    }
};

module.exports = crup;