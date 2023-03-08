/*
操作对象
    1、原生属性
        语法：元素.属性名（class除外 元素.className）
        读：元素.属性名  读取该元素的值
        写：元素.属性名 = '值'  设置该元素的值
    2、自定义属性
        1、设置：元素.setAttribute('属性名','属性值')
        2、获取：getAttribute('属性名')  
            返回值：字符串
        3、移除：removeAttribute('属性名') 
            removeAttribute可以操作自定义属性，也可以操作原生属性
    3、h5自定义属性
        1、自定义属性的设置和获取的方法也能用
        2、dataset 
            包含了 key:除去 data- 的内容 value：值
            获取：
               属性是"data-a" --> res = div.dataset.a
            设置:
                div.dataset.a = "abc" --> data-a='abc'
            删除：delete div.dataset.hello


 */


//原生属性
var div = document.querySelector('div')
div.id='hello'
console.log(div.id)

//自定义属性
div.setAttribute("test","hhh")
var test =  div.getAttribute('test')
console.log(test)
div.removeAttribute('test')

//h5自定义属性
var res = div.dataset.a
console.log(res)
div.dataset.hello = 'word'
delete div.dataset.hello