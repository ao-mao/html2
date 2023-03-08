// Number.EPSILON 是 JavaScript的最小精度

function equal(a,b){
    if(Math.abs(a-b)<Number.EPSILON){
        return true
    }else{
        return false
    }
}
console.log(0.1+0.2 === 0.3);
console.log(equal(0.1+0.2,0.3));

//八进制和二进制
let b = 0b1010 //二进制 0b+数字
let o = 0o777 //八进制 0o+数字
let x = 0xff //十六进制
console.log(b,o,x);

//检测一个数值是否为有限数 == Number.isFinite
console.log(Number.isFinite(100));
console.log(Number.isFinite(100/0));
console.log(Number.isFinite(Infinity));//无穷

//检测数值是否为NaN=== Number.isNaN
console.log(Number.isNaN(123));
