
/**
 * 定时器的使用 
 * 定时器类型（函数，时间）
 * //过了多久才执行
setTimeout(
    function () {
        console.log("TimeOut")
    }, 1000
)

//多久执行一次
setInterval(
    function () {
        console.log("setInterval")
    }, 500
)
 */

/**
 * 定时器的返回值
 * 返回值：不管什么类型的定时器，都只返回这是第几个定时器
 */
var time1 =setTimeout(
    function () {
        console.log("TimeOut")
    }, 2000
)
console.log(time1)

var time2 = setInterval(
    function () {
        console.log("setInterval")
    }, 500
)
console.log(time2)

var time3 =setTimeout(
    function () {
        console.log("TimeOut")
    }, 1000
)
console.log(time3)

//关闭定时器
bth.onclick = function(){
    // clearTimeout(time1)
    clearInterval(time2)
}