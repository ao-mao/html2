/**
 * symbol基本数据类型
 *  1、symbol的值唯一，解决命名冲突
 *  2、symbol值不能与其他数据进行运算
 *  3、symblo定义的对象属性不能使用for..in循环遍历，但是可以使用Reflect.ownKeys来获取对象的所有建名
 */

// 创建symbol
let s = Symbol();
console.log(s,typeof(s));

// symbol的值唯一,每次都会返回新的symbol
let s1=Symbol('加油')
let s2=Symbol('加油')
console.log(s1 === s2);

//symbol.for创建，会将创建的Symbol存入一个全局的注册表中，在下次创建时，
// 会首先从注册表中查找是否已有相同的值存在，如果没有，则创建；如果有，便不会创建重复的Symbol
let s3 = Symbol.for('学习')
let s4 = Symbol.for('学习')
console.log(s3 === s4);

// 2、symbol值不能与其他数据进行运算
// let res = s+111 //Uncaught TypeError: Cannot convert a Symbol value to a number



// 二、对象中添加symbol属性和方法
// 第一种方法
let game = {
    up:function(){
        console.log('我能上升');
    },
    down:function(){
        console.log('我能上升');
    }
}
// game.down = function(){
//     console.log('我是真的能上升');
// }
// 创建另一个对象
let methods = {
    up:Symbol(),
    dowm:Symbol()
}
game[methods.up ] = function(){
    console.log('我是真的能上升');
}
console.log(game);

//第二种方法
let youxi ={
    name:'第二种方法',
    [Symbol('value')]:function(){
        console.log('我是第二种方法');
    }
}
console.log(youxi);