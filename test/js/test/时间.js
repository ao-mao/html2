//获取当前时间
var data = new Date();
console.log(data)

//自定义时间(年，月，日,时，分，秒)
var oneData = new Date(2022,1,12,12,12,12)
console.log(oneData)

//获取当前的年
var time = new Date()
var year = time.getFullYear()
console.log(year)

//获取当前的月 0表示一月
var month = time.getMonth()
console.log(month)

//获取当前的日期
data = time.getDate()
console.log(data)

//获取当前的小时
var hour = time.getHours()
console.log(hour)

//获取当前的分钟
var min = time.getMinutes()
console.log(min)

//获取当前的秒
var sec = time.getSeconds()
console.log(sec)

/**获取世界时间，在前面加上utc，比如getUTCMonth */

//一周中的，周几信息 0表示周日
var mou = time.getDay()
console.log(mou)


/**getTime
 * 时间戳
 * 格林威治时间：1970年1月1日 0 点 0分 0秒（计算机元年）
 * 时间戳：时间对象 到 格林威治时间 毫秒数
 */
var glwz = time.getTime()
console.log(glwz)
