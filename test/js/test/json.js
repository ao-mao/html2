var arr = {
    name :"lww",
    age : 10,
    adress : "南沙"
}
//转换json格式
var jsonArr = JSON.stringify(arr)
console.log(jsonArr)
//json转字符串
var newArr = JSON.parse(jsonArr)
console.log(newArr)