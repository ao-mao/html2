
var targetTime = new Date(2022, 4, 20, 00, 00, 00)
function daojishi() {
    var nowtime = new Date()
    var res = diffTimeFn(nowtime, targetTime)

    if (res.day < 10) res.day = '0' + res.day
    if (res.hour < 10) res.hour = '0' + res.hour
    if (res.min < 10) res.min = '0' + res.min
    if (res.sec < 10) res.sec = '0' + res.sec
    daybox.innerText = res.day
    hourbox.innerText = res.hour
    minbox.innerText = res.min
    secbox.innerText = res.sec
}
daojishi()
setInterval(daojishi, 1000)