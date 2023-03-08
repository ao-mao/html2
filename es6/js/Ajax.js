// 创建promise对象
const p = new Promise((resolve, reject) => {
    //创建对象
    const xhr = new XMLHttpRequest();
    //初始化
    xhr.open('get', 'https://api.uomg.com/api/get.kg?songurl=https://node.kg.qq.com/play?s=YaCv8EYfJunVWYcH')
    // 发送
    xhr.send()
    //绑定事件，处理响应结果
    xhr.onreadystatechange = function () {
        // 判断
        if (xhr.readyState === 4) {
            // 判断状态码
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        }
    }
})
p.then(function(value){
    console.log(value);
},function(reason){
    console.log(reason);
})
