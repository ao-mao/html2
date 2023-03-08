/*
    数据类型：基本数据类型、复杂数据类型
    基本数据类型：存放在栈内存，只是一个值
        lg：a=9,b=a b-1=8,a的值不变
    复杂数据类型：在栈内存中存放的地址值，数据存放在堆内存中。
    要获取值，就得通过地址值才能找到数据
        lg：var b = {"name":"lww",age : 1}
            var a = b //b的地址赋值给了a，所以a拿到的是地址
            a.name="test" //修改名字
            此时b.name的值就会变成test
*/
function fn(a, b) {
    a = 111
    p = b
    p.name = "hhhh"
    console.log("a=" + a, p)
}
var num = 100
var person = { "name": "lww", "age": 11 }
/*
调用fn时，传入的person复杂数据类型依旧是地址值
而传入的num基本数据类型，只是一个值，这个值不会因为函数发生改变
*/
fn(num, person)
console.log("num=" + num, person)


fn.test = "fn.tst"
console.dir(fn)

/**
 * //Array数组的两种创建方式
    var arr1 = []
    var arr2 = new Array()
    console.log(arr1)
    console.log(arr2)
    
 */

/*
//Array传入数据
// 1、
var arr1= [1,2,3,45]
console.log(arr1)
//2、
var arr2 = new Array(1,2,3)
console.log(arr2)
//当使用内置构造函数时，只传递一个参数，则代表这个数组的长度
var arr3 = new Array(100)
console.log(arr3)
*/

// 数组的操作

