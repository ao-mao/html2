var strNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
function forGetNum(num) {
    var str
    if (num < 11) {
        str = strNum[num]
    } else if (num < 20) {
        str = "十" + strNum[num % 10]
    } else if (num % 10 === 0) {
        str = strNum[num / 10] + '十'
    } else {
        var a = parseInt(num / 10)
        var b = num % 10
        str = strNum[a] + '十' + strNum[b]
    }
    return str
}
function forGetYear(year) {
    var a = parseInt(year / 1000)
    var b = parseInt(year % 1000 / 100)
    var c = parseInt(year % 100 / 10)
    var d = parseInt(year % 10)
    return strNum[a] + strNum[b] + strNum[c] + strNum[d] + '年 '
}

var time = new Date()
function timeToString(time) {
    var year = time.getFullYear()
    var mon = time.getMonth() + 1
    var day = time.getDate()
    var week = time.getDay()
    var hour = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var yearStr = forGetYear(year)
    var monStr = forGetNum(mon)
    var dayStr = forGetNum(day)
    var hourStr = forGetNum(hour)
    var minStr = forGetNum(min)
    var secStr = forGetNum(sec)
    var weekStr
    if(week === 0 ){
        weekStr='周日'
    }else{
        weekStr = forGetNum(week)
    }
    console.log(yearStr + monStr + '月 ' + dayStr + '日 周' +weekStr+' '+ hourStr + '时 ' + minStr + '分 ' + secStr + '秒')
}
timeToString(time)