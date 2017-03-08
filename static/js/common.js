var _ = (function(window, $) {
    // 自封装ajax请求
    // 应该不会用到get了
    function ajax(obj) {
        var url = obj.url,
            method = obj.method.toLowerCase(),
            fn = obj.fn,
            data = obj.data,
            Data = parseData(data);
        var xhr = new XMLHttpRequest();
        if (method === 'get') {
            url = url + '?' + Data;
            Data = null;
        }
        xhr.open(method, url);
        if (method = 'post') {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        xhr.send(Data);
        xhr.onreadystatechange = function() {
            if (xhr.status == 200 && xhr.readyState == 4) {
                var result = xhr.responseText;
                fn(result);
            }
        }
    }
    // 用于get请求的参数转换
    function parseData(obj) {
        var finalData = '';
        for (var key in obj) {
            finalData += key + '=' + obj[key] + '&';
        }
        return finalData.slice(0, -1);
    };

    //选择符
    var getId = str => $.getElementById(str),
        getTag = str => $.getElementsByTagName(str),
        advSear = str => $.querySelectorAll(str),
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;

    function el(ele) {
        if (rquickExpr.test(ele)) {
            match = rquickExpr.exec(ele);
            if (match = match[1]) {
                return getId(match);
            } else if (match = match[2]) {
                return getTag(match);
            } else if (match = match[3]) {
                return getClass(match);
            }
        }
        if ($.querySelectorAll) {
            return advSear(ele);
        }
    }

    //表单验证的正则匹配函数
    var name_test = (str) => /^[\u4e00-\u9fa5_a-zA-Z0-9]{1,10}$/.test(str),
        nickname_test = (str) => /^[\u4e00-\u9fa5_a-zA-Z0-9]{1,10}$/.test(str),
        age_test = (str) => /^\d{1,2}$/.test(str),
        sex_test = (str) => str !== null,
        tel_test = (str) => /^[1][358][0-9]{9}$/.test(str);

    //接口
    return {
        ajax: ajax,
        el: el,
        test: {
            name: name_test,
            nickname: nickname_test,
            age: age_test,
            sex: sex_test,
            tel: tel_test
        }
    }
})(window, document);