var _ = (function() {
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
    return {
        ajax: ajax
    }
})();