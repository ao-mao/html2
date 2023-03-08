/**
 * 通过js获取页面中的元素。
 * 两类标签：
 *      1、常规标签
 *          1、html
 *              document.documentElement
 *          2、head
 *              document.head
 *          3、body
 *              document.body
 * 
 *      2、非常规标签
 *          1、查找范围.getElementById("id名")
                范围：document 或者一个元素
                返回值：这个id的元素或者null
            2、查找范围.getElementsByTagName("标签名")
                范围：document 或者一个元素
                返回值：一个伪数组（如果要某个指定的id，则要使用小标，或者遍历）
            3、查找范围.getElementsByClassName("类名")
                范围：document 或者一个元素
                返回值：一个伪数组（如果要某个指定的id，则要使用小标，或者遍历）
            4、查找范围.getElementsByName("name名")
                范围：document 或者一个元素
                返回值：一个伪数组（如果要某个指定的id，则要使用小标，或者遍历）
            5、查找访问..querySelector("选择器")  ie低版本不支持
                范围：document 或者一个元素
                选择器：与css一样
                返回值：元素或者null
            6、查找范围.querySelectorAll("选择器")  ie低版本不支持
                范围：document 或者一个元素
                选择器：与css一样
                返回值：一个伪数组（如果要某个指定的id，则要使用小标，或者遍历）

 */

/*
获取常规标签                
//获取html
var html = document.documentElement
console.log(html)

//获取head
var head = document.head
console.log(head)

//获取body
var body = document.body
console.log(body)
*/

var btn = document.getElementById("btn")
console.log(btn)

// var div = document.getElementById("box")
// var a = div.getElementById("btn")
// console.log(a)

//查找div的标签
var div = document.getElementsByTagName("div")
//在div范围下查找button标签
btn = div[0].getElementsByTagName("button")
console.log(btn)

var className = document.getElementsByClassName("btn")
console.log(className)

btn = document.getElementsByName("btn")
console.log(btn)

btn = document.querySelector("a#btn")
btn = document.querySelector(".btn")
btn = document.querySelector("#btn")
console.log(btn)

div = document.querySelectorAll("div")
console.log(div)