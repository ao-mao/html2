/*
var time1 = new Date()
console.log(time1)

// //修改年份
// time.setFullYear(2019)
// console.log(time)

//计算时间戳
var time2 = new Date(2021,4,17,10,50,00)
//abs获取绝对值 得到毫秒
var diffTime = Math.round(Math.abs(time1.getTime()-time2.getTime()))
//换算成天
var day = parseInt(diffTime/(1000*60*60*24))
console.log(day)

//换算成小时
var hour = parseInt(diffTime/1000/60/60)
console.log(hour)

//换算成分钟
var min = parseInt(diffTime/1000/60)
console.log(min)

//换算成秒
var sec = parseInt(diffTime/1000)
console.log(sec)
 */

//封装时间差（使用对象，而不使用字符串或数组返回，利用对象的灵活性）
function diffTimeFn(time1, time2){
    //多少秒
    var diffTime = Math.round(Math.abs(time1.getTime()-time2.getTime())/1000)
    //多少天
    var day = parseInt(diffTime/(60*60*24))
    //第几天的第几个小时
    var hour = parseInt(diffTime%(60*60*24)/(60*60))
    //第几个小时的第几分钟
    var min = parseInt(diffTime%(60*60)/60)
    //第几分钟的第几秒
    var sec = parseInt(diffTime%60/60)
    return resTime={
        "day":day,
        "hour":hour,
        "min" : min,
        "sec" : sec
    }

}
var time1 = new Date()
var time2 = new Date(2021,4,17,13,50,00)
var res = diffTimeFn(time1,time2)
console.log(res)