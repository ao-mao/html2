/* window.location  存储和网页地址内容有关的所有信息
    hash：当前页面的哈希值
    href：读写的属性（当前地址栏地址）
        读 获取当前地址栏的地址（中文是url编码格式）
        写 设置当前打开的页面的地址（跳转页面）
    search 当前地址中的  查询字符串(queryString)
    */
// console.log(window.location)

/*//href
//1、读
console.log(window.location.href)//file:///E:/Users/HTML/test/html/jsDemo/demo01.html
//2、设置
btn.onclick=function(){
    window.location.href="https://www.bilibili.com/"
}*/

//search
// console.log(window.location.search)

/*
    解析查询字符串
        1： " "
        2、?key=value&key=value....
    步骤：准备一个函数接收一个参数
        =》参数：要解析的查询字符串
    2、开始解析：
        判断


var str = "?a=1000&b=200"
function parseQueryString(str){
    var obj = {}
    if(str){
        var items = str.slice(1).split("&")
        items.forEach(function (item) {
            var a = item.split("=")
            obj[a[0]] = a[1] 
        })
    }
    return obj;
}
var res = parseQueryString(str)
console.log(res)
*/

//刷新 reload window.location.reload()不能直接用，否则！！！！浏览器会重复刷新直至卡死
reload.onclick = function(){
    window.location.reload()
}

