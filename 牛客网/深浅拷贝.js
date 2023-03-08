
let  obj1 = {
    a:  1,
    b:  2,
    c:  3
}
let obj2 = obj1;
obj2.a = 5;
console.log(obj1.a);  // 5
console.log(obj2.a);  // 5
/*
    深浅拷贝是对引用数据类型来说的，因为基本数据类型的值存储在栈中，而基本数据类型值的修改叫做赋值。
    引用数据类型的值则存储在堆中，obj1赋予obj2时，只是将堆中obj1的数据赋予了obj2，所以在修改obj2时，obj1还是会发生改变。
    而时候，我们需要的是 修改obj2时，obj1不发生改变。所以就出现了，深浅拷贝。
    浅拷贝：就是指只拷贝引用数据类型的第一层数据。浅拷贝的时候如果数据是基本数据类型，那么就如同直接赋值那种，会拷贝其本身，
    如果除了基本数据类型之外还有一层对象，那么对于浅拷贝而言就只能拷贝其引用，对象的改变会反应到拷贝对象上。
    深拷贝：深拷贝就会拷贝多层，即使是嵌套了对象，也会都拷贝出来，内容和原对象一样，更改原对象，拷贝对象不会发生变化。
*/

// 浅拷贝
let obj3 = {}
for(var k in obj1){
    obj3[k] = obj1[k]
}
obj3.a=3
console.log(obj1);
console.log(obj3);

/**
使用JSON.stringify()以及JSON.parse()
let _tmp = JSON.stringify(obj);//将对象转换为json字符串形式
let result = JSON.parse(_tmp);//将转换而来的字符串转换为原生js对象

可以看到没有发生引用问题，修改obj2的数据，并不会对obj1造成任何影响
但是使用JSON.stringify()以及JSON.parse()它是不可以拷贝 undefined ， function， RegExp 等等类型的
 */

var objString = JSON.stringify(obj1);
var obj2 = JSON.parse(objString);
obj2.a = 5;
console.log(obj1.a);  // 1
console.log(obj2.a); // 5


/**
 * 使用递归
 * 
 */
function deepClone1(obj) {
    //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
    var objClone = Array.isArray(obj) ? [] : {};
    //进行深拷贝的不能为空，并且是对象或者是
    if (obj && typeof obj === "object") {
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] && typeof obj[key] === "object") {
            objClone[key] = deepClone1(obj[key]);
          } else {
            objClone[key] = obj[key];
          }
        }
      }
    }
    return objClone;
  }

//   concat（数组的深拷贝）
// 使用concat合并数组，会返回一个新的数组。
// 对象是一个引用数据类型 普通的复制是一个浅拷贝