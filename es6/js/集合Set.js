/** 
// 声明一个set
let s = new Set()
let s2 = new Set(['1',23,4,56,77,33,'test'])
console.log(s,s2);
//元素个数
console.log(s2.size);
//添加元素
s2.add(4554)
console.log(s2);
//删除元素u
s2.delete(4554)
console.log(s2);
//清空
// s2.clear()
// console.log(s2);
//检测
console.log(s2.has(23));
//遍历
for(let v of s2){
    console.log(v);
}
*/

//实践
let arr = [1,2,3,4,5,6,7,8,2,3,4,9]
//数组去重
let res = [...new Set(arr)]
console.log(res);
//交集
let arr2 = [3,6,9,11]
// let res2 = [...new Set(arr)].filter(item=>{
//     let s2 = new Set(arr2)
//     return (s2.has(item)) ? true:false
// })
//简化
let res2 = [...new Set(arr)].filter(item=>new Set(arr2).has(item))
console.log(res2);

//并集（去重）
let res3 = [...new Set([...arr,...arr2])]
console.log(res3);

// 差集
let res4 = [...new Set(arr)].filter(item=>!(new Set(arr2).has(item)))
console.log(res4);