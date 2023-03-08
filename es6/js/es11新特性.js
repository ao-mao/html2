/** 
// Promise.allSettled 接受以一个promise数组,返回结果永远是成功,返回promise
// 声明两个Promise对象
const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('商品数据-1')
    }, 1000);  
})
const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject('出错了')
    }, 1000);  
})
// 调用allSettled
const res = Promise.allSettled([p1,p2])
console.log(res);
// all只要一个返回失败，则返回失败的值
const res2 = Promise.all([p1,p2])
console.log(res2);

//字符串拓展
// matchAll
let str = `
    <ul>
        <li>
            <a>肖申克的救赎</a>
            <p>上映时间：1994-09-10</p>
        </li>
        <li>
            <a>阿甘正传</a>
            <p>上映时间：1994-07-06</p>
         </li>
    </ul>` 
//声明正则
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/sg
// 调用方法
const res = str.matchAll(reg)
console.log(res);
// 遍历结果
//循环
// for(let v of res){
//     console.log(v);
// }
//扩展运算符
const arr = [...res]
console.log(arr);


//可选链操作符 ?.
function main(config){
    // const dbHost = config && config.db && config.db.host
    const dbHost = config?.db?.host
    console.log(dbHost);
}
main({
    db:{
        host:'192.168.1.100',
        userName:'name'
    },
    cache:{
        host:'192.168.1.101',
        userName:'admin'
    }
}
)

//动态import 提高效率（需要才加载）
//静态加载
// import * as m1 from "./模块化/es11Hello"
// 获取元素
const btn = document.getElementById('btn')
btn.onclick = function(){
    //动态加载 提高效率
    import('./模块化/es11Hello.js').then(module => {
        module.hello()
    })
}

// BigInt

let n = 521n
console.log(n,typeof n);
//BigInt不能使用浮点型，主要用于大数值的运算
let n2 = 123
console.log(BigInt(n2));

//大数值运算
let max = Number.MAX_SAFE_INTEGER;
console.log(max);//9007199254740991
console.log(max+1);//9007199254740992
console.log(max+2);//9007199254740992
console.log(BigInt(max)+BigInt(2));
*/
// globalThis 全局变量  ====>始终指向全局对象
console.log(globalThis);
