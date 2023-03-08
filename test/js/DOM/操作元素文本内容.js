/**
    1、innerHTML
        操作元素：超文本，包括标签
        1、获取
            语法：范围.innerHTML
        2、设置（完全覆盖,不会自动解析）
            语法：范围.innerHTML=。。。
    2、innerText
        获取、操作文本内容，不包括标签
        1、获取：范围.innerText
        2、操作：范围.innerText = '文本'  （完全覆盖，不会自动解析）
    3、value
        读取、操作表单的value
        语法：元素.value
 */
/*1、innerHTML
// 1、获取
 var div = document.querySelector('div')
console.log( div.innerHTML)
// 2 设置
div.innerHTML = "hello word by js"
div.innerHTML = "<p>hello word by p</>"
 */

/*2、innerText
//1、获取
var divText = document.querySelector("div")
console.log(divText.innerText)
//2、写
divText.innerText = "hello"
divText.innerText = "<span>hello</span>"
*/

/*3、value

*/
// 1、设置
var bt = document.querySelector("input")
bt.value = "value by js"
// 2、读
var str = bt.value
console.log(str)
