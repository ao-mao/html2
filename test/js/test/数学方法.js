//random() 0~1之间取一个随机小数 不包括1
var res1 = Math.random()
console.log(res1)

// round四舍五入后取整
var num = 12.421
var res2 = Math.round(num)//12
console.log(res2)

// ceil 向上取整
var res3 = Math.ceil(num)//13
console.log(res3)

// floor 向下取整
var res4 = Math.floor(num)//12
console.log(res4)

// pow 多少次幂
var res5 = Math.pow(2,3) // 8
console.log(res5)


//sqrt 算数平方根
var res6 = Math.sqrt(8) //2.8284271247461903
console.log(res6)

//abs 取绝对值
var res7 = Math.abs(-100) //100
console.log(res7)

//max(a,b,c,d,e...) 取最大值,不能带入数组
var res8 = Math.max(1,2,3,5,6,2)
console.log(res8) //6

//min(a,b,c,d,e,f....)取最小值，不能带入数组
var rex = Math.min(1,2,3,5,6,2)
console.log(rex) //1

//圆周率 PI
console.log(Math.PI)//3.141592653589793

//查看Math方法
console.log(Math)