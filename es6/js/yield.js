//生成器---yeild---特殊编程
//异步编程，纯回调函数

/** 
 function * gen(){
    console.log();
    yield 'one'
    console.log(222);
    yield 'two'
    console.log(333);
    yield 'three'
    console.log('hello generator');
 }
 let iterator = gen()
 console.log(iterator);
//  调用next方法才能调用gen方法
 iterator.next()
 iterator.next()
 iterator.next()
 iterator.next()

//  遍历
for(let v of gen()){
     console.log(v);
 }

function * gen1(arg){
    console.log(arg);
    let one = yield 'one'
    console.log(one);
    let two = yield 'two'
    console.log(two);
    let three = yield 'three'
    console.log(three);
 }
let iterator1 = gen1('AAA')
// next方法传入实参
console.log(iterator.next('aaa'));
console.log(iterator.next('bbb'));
console.log(iterator.next('ccc'));
console.log(iterator.next('ddd'));
*/

//异步编程---定时器案例
// 定时器套娃，影响阅读代码
function one(){
    setTimeout(()=>{
        console.log('one');
        iterator.next()
    },1000)
}
function two(){
    setTimeout(()=>{
        console.log('two');
        iterator.next()
    },2000)
}
function three(){
    setTimeout(()=>{
        console.log('three');
        iterator.next()
    },3000)  
}

function * fn2(){
    yield one();
    yield two()
    yield three();
}
let iterator = fn2()
iterator.next();