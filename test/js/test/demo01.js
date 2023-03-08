//单纯输出
//alert("hello js - alert");
console.log("hello js - console.log");
document.write("hello js - document.write");
// 定义标签
document.write("<\hr>")
// 定义变量与使用
var a = 1
var b= "a"
document.writeln(a+b);
document.writeln("<hr>")
//数据类型
var type=typeof a;
document.write(type)
document.writeln("<br>")
var str = String(1);
document.writeln(str)


// 定义方法
function fn1(){
    console.log("无参方法被调用")    
}
function fn(a,b){
    console.log("有参方法调用："+a,b)
}
function fn(){
    console.log("给无参方法传递值并调用："+arguments[0])
}
fn1()
fn(1,2)
fn(1,2,3)

function onfn(){
    console.log("触发点击")
}


//点击事件
box.onclick=onfn

//对象数据
var obj = new Object()
// 添加数据
obj.name = "lww"
obj.age = 35
obj.del=1
console.log(obj)
//删除数据
delete obj.del
console.log(obj)
// 修改数据
obj.name = "hhhh"
console.log(obj)
//获取成员
console.log(obj.name)

//数组数据
var obj1 = new Object()
// 添加数据
obj1["name"] = "lww"
obj1["age"] = 35
obj1["del"] = 1
console.table(obj1)
//删除数据
delete obj1.del
console.table(obj1)
// 修改数据
obj["name"] = "hhhh"
console.table(obj1)
//获取数据
console.log(obj1.name)

//for in 变量对象
for(var key in obj1){
    console.log(key ,obj[key])
}

//判断成员是否在对象里
console.log("name" in obj)