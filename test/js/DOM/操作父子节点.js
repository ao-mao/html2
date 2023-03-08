/*
var but = document.querySelector('#but')
//得到but的父节点,返回上一级最近的点,没有就是null
var parent = but.parentNode
console.log(parent)

//获取子节点
//nodeType : text---3  div---1 style---2
var div = document.querySelector('#gradbut')
console.log(div.childNodes)
console.log(div.childNodes[0].nodeType)


//建议使用
console.log(div.children)
*/


var bt = document.querySelector("button")

// 获取下一个节点 包括文本，属性等节点
var nextNode = bt.nextSibling;
console.log(nextNode);
// 获取上一个节点 包括文本，属性等节点
var previcou = bt.previousSibling
console.log(previcou)


console.log('parentNode',bt.parentNode);

//ie9以下不能用
console.log(bt);
console.log(bt.nextElementSibling)
console.log(bt.previousElementSibling);