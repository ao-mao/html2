/*
    一、style方式：
        1、语法：元素.style
        2、作用，获取内容对象里面包含的所有方法
        4、获取，元素.style.样式(只能获取到行内样式)
    二、获取非行内样式
        1、语法，window.getComputedStyle(元素)
        2、作用，获取内容对象里面包含的所有方法
        4、获取，元素.style.样式
        二-1 ie低版本
            语法：元素.currentStyle（一个对象）
    三、设置样式，只能设置行内样式
        元素.style.样式名 = 值
 */

/*
//style
var sty = document.documentElement.querySelector('div')
console.log(sty.style.width)
console.log(sty.style.height)
sty.style.width="300px"
sty.style.height="300px"
*/

/*
//二行内样式
var div = document.documentElement.querySelector('div')
var sty = window.getComputedStyle(div)
console.log(sty.height)
console.log(sty.width)
console.log(sty['background'])
//ie低版本
console.log(div.currentStyle['width'])
*/

/* 
三、兼容问题   
        1、getComputedStyle在谷歌里面会报is a not function
            ie 报不支持getComputedStyle
*/
//判断 ele元素，style样式
function getStyle(ele,style) {
    //判断window里面有没有getComputedStyle
    if('getComputedStyle' in window){
        return window.getComputedStyle(ele)[style]
    }
        return ele.window.currentStyle[style]
}
var div = document.getElementsByClassName('sty')
var res = getStyle(div[0],"width")
console.log(res)