/*
1、原生属性
    1、设置属性类名
        元素.classname = ''
    2、获取属性类名
        var res = 元素.className
    3、修改
        元素.classname = ''
    4、追加类名
        元素.classname = 元素.classname + ' 追加的类名'
    
2、h5操作类名
    1、查找 ：范围.div.classList
    2、追加 : 范围.classList.add('')
    3、删除 ：范围.classList.remove('')
    4、切换 ：范围.classList.toggle('')  当有这个类名时就删除，没有就添加

 */

    
var div = document.documentElement.querySelector("div")
div.className = 'maomao'
console.log(div.className)
div.className = div.className + ' test'+ ' test2'

//h5操作类名
// 1、
console.log(div.classList)
// 2、
div.classList.add("box")
console.log(div.classList)
// 3、
div.classList.remove('box')
console.log(div.classList)
// 4、
btn.onclick= function(){
    div.classList.toggle("box")
}