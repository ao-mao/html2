// 本地缓存
/*
    // 1.1 localStorage.setItem 只能存字符串
    localStorage.setItem("name","MaoMao")
    var arr = {
        name :"lww",
        age : 10,
        adress : "南沙"
    }
    localStorage.setItem("obj1",arr)
    localStorage.setItem("obj2",JSON.stringify(arr))
    //1.2 localStorage.getItem获得一个数据
    var res1 = localStorage.getItem("obj1")
    var res2 = localStorage.getItem("obj2")
    var res3 = localStorage.getItem("name")
    console.log(res1)
    console.log(res2)
    console.log(JSON.parse(res2))
    console.log(res3)

    //1.3 localStorage.removeItem 移除一个数据  
    localStorage.removeItem("obj2")

    //1.4 localStorage.clear清除所有数据
    localStorage.clear()
*/

//——————————————————————————————————————————————————————————————————————————————————————————————————

//会话缓存
// 1.1 sessionStorage.setItem
sessionStorage.setItem("name","毛毛")
sessionStorage.setItem("name","MaoMao")
var arr = {
    name :"lww",
    age : 10,
    adress : "南沙"
}
sessionStorage.setItem("obj1",arr)
sessionStorage.setItem("obj2",JSON.stringify(arr))

// 1.2 sessionStorage.getItem
var res = sessionStorage.getItem("name")
console.log(res)

//sessionStorage.removeItem()
sessionStorage.removeItem("obj1")

//sessionStorage.clear()
sessionStorage.clear()