const arr = [1,2,3,4,5]
//展开
console.log(...arr);
//合并
const arr2=[6,7,8,9]
const arr3 = [...arr,...arr2]
console.log(arr3);
//克隆
const arr4 = [...arr]
console.log(arr4);
// 伪数组转真数组
const divs = ['...伪数组']