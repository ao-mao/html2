/**
 * 计算时间差
 * @param {Date} time1 时间节点一 
 * @param {Date} time2 时间节点二
 * @returns {object}
 */
function diffTimeFn(time1, time2) {
    //多少秒
    var diffTime = Math.round(Math.abs(time1.getTime() - time2.getTime()) / 1000)
    //多少天
    var day = parseInt(diffTime / (60 * 60 * 24))
    //第几天的第几个小时
    var hour = parseInt(diffTime % (60 * 60 * 24) / (60 * 60))
    //第几个小时的第几分钟
    var min = parseInt(diffTime % (60 * 60) / 60)
    //第几分钟的第几秒
    var sec = parseInt(diffTime % 60 % 60)
    return resTime = {
        "day": day,
        "hour": hour,
        "min": min,
        "sec": sec
    }
}

/**
 * 计算随机数
 * @param {number} a 数字一 
 * @param {number} b 数字二
 * @returns {number} 随机数
 */

function rangeRandom(a, b) {
    //判断a,b的大小
    var max = Math.max(a, b)
    var min = Math.min(a, b)

    var res = Math.floor((Math.random() * (max - min + 1)) + min)
    return res

}

/**
 * 解析查询字符串
 * @param {String} str 要解析的查询字符串
 * @returns {obj}
 */
function parseQueryString(str) {
    var obj = {}
    if (str) {
        var items = str.slice(1).split("&")
        items.forEach(function (item) {
            var a = item.split("=")
            obj[a[0]] = a[1]
        })
    }
    return obj;
}

/**
 * 判断浏览器版本，提高兼容性
 * @param {*} ele    目标对象
 * @param {*} style  获取样式
 * @returns 返回样式的值
 */
function getStyle(ele, style) {
    //判断window里面有没有getComputedStyle
    if ('getComputedStyle' in window) {
        return window.getComputedStyle(ele)[style]
    }
    return ele.window.currentStyle[style]
}

/**
 * 
 * @param {目标节点} ele 
 * @returns  下一个节点 
 */
function getNextElementSibling(ele) {
    while (ele === ele.nextSibling) {
        if (ele.nodeType === 1) {
            return ele
        }
    }
    return null
}