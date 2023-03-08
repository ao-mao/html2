/**
 * BOM 对象模型
 *      浏览器提供一套操作浏览器窗口的属性和方法
 *      window.  可以省略不写
    * console.log(window.innerHeight)
    console.log(window.innerWidth)
    console.log(innerHeight)
    console.log(innerWidth)
 */ 
//浏览器可视窗口尺寸

/**
 * alert、confirm、prompt都是单线程，只有在用户点击确定或取消才会进入下一步操作
 * 
 * */
var res = alert('警告框')
console.log(res)// 返回 undifine
var res = confirm('选择框')
console.log(res)// 返回 ture / flase
var res = prompt('选择框')
console.log(res)// 返回 输入的文本