//promise---异步编程新的解决方案---构造函数，可以获得一个返回结果
// 实例化对象
const p = new Promise(function(resolve,reject){
    setTimeout(function(){
        // 数据读取成功
        let data = '数据库数据';
        //改变promise状态，可以调用resolve或者reject
        resolve(data);

        // //数据读取失败
        // let err = '数据读取失败'
        // reject(err);
    },1000)
})
//调用promise对象的then方法
//状态成功调用value
let res = p.then(function(value){
    console.log(value);
    // 1 返回非promise值
    // return 123
    // 2 返回promise类型，返回值却决于执行结果
    // return new Promise((resolve,reject) => {
    //     resolve('ok')
    // })
    //3 抛出异常,value为出错值
    throw new Error('出错了')
},
//状态失败调用reason
function(reason){
    console.log(reason);
})
// res返回值为promise对象，其中执行有返回值则返回，否则value为underfunded
console.log(res);

// promise可以指定回调,也可以链式回调
// 链式回调  p.then(value=>{},reason=>{}).then(value=>{},reason=>{})
// 指定回调  p.then(value=>{})