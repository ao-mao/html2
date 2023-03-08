
//历史记录
console.log(window.history)

/**
 * window.history
 *      back()回退  需要有历史记录
 *      forward()前进 回退过之后才能使用
 *      go(整数) （整数为前进 0为刷新 负数为倒退）
 */

 forward.onclick = function(){
    //  window.history.forward()
    window.history.go(1)
 }