/*
//创建节点 创建一个，只能用一次，再创建需要重新创建
var li = document.createElement('li')
// 插入节点 需要指定的节点
var ul = document.querySelector('ul')
//append在后面追加
ul.append(li)

var li = document.createElement('li')
//insertBefore在前面追加insertBefore（节点,元素位置）
ul.insertBefore(li,ul.children[0])
*/


// 删除节点 父元素.removeChild(目标元素节点)
// ul.removeChild(ul.children[0])
var but = document.querySelector("button")
var ul = document.querySelector('ul')
but.onclick = function(){

    if(ul.children.length != 0){
        ul.removeChild(ul.children[0])
    }else{
        alert('已清空')
    }
}