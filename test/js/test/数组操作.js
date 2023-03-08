/*
var a = [1,2,3,4,5,6,7]
a.push(8)
console.log(a)// [1, 2, 3, 4, 5, 6, 7, 8]
a.pop()
console.log(a)//[1, 2, 3, 4, 5, 6, 7]
a.unshift("新来的")
console.log(a)//['新来的', 1, 2, 3, 4, 5, 6, 7]
a.shift()
console.log(a)//[1, 2, 3, 4, 5, 6, 7]
a.reverse()
console.log(a)// [7, 6, 5, 4, 3, 2, 1]
// a.sort()
// console.log()
//升序
a.sort(function (x,b){return x - b})
console.log(a)// [1, 2, 3, 4, 5, 6, 7]
//降序
a.sort(function (x,b){return b - x})
console.log(a)// [7, 6, 5, 4, 3, 2, 1]
*/

var arr = ["aaa","bbb","ccc","ddd"]
/**
 * splice用法一、
 * var res = arr.splice(1,2)
    console.log("res:",res)//['bbb', 'ccc']
    console.log("arr:",arr)//['aaa', 'ddd']
*  用法二、

var res = arr.splice(1,2,"xxx","test",6666)
console.log("res:",res)//['bbb', 'ccc']
console.log("arr:",arr)// ['aaa', 'xxx', 'test', 6666, 'ddd']

*concat
    var res = arr.concat("hello","word")
    console.log(res)//['aaa', 'bbb', 'ccc', 'ddd', 'hello', 'word']
    console.log(arr)// ['aaa', 'bbb', 'ccc', 'ddd']
    res = arr.concat(["aa","bb"],[1,2])
    console.log(res)//['aaa', 'bbb', 'ccc', 'ddd', 'aa', 'bb', 1, 2]
    console.log(arr)// ['aaa', 'bbb', 'ccc', 'ddd']
 */
var res = arr.join("-")
console.log(res)//aaa-bbb-ccc-ddd
console.log(arr)// ['aaa', 'bbb', 'ccc', 'ddd']