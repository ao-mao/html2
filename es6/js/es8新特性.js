/** 
// async 和 await 异步编程新解决方案

//async
async function fn(){
    // 返回非promise对象，则返回成功的promise对象
    // 返回成功的promise
    return '尚硅谷'
    //抛出错误，返回结果是失败的promis
    // throw new Error('出错')
    //返回promise对象
    // return new Promise((resolve ,reject)=>{
    //     resolve('成功')
    //     // reject('失败')
    // })
}
const rs = fn()
console.log(rs);
rs.then(value =>{
    console.log(value);
}, reason =>{
    console.warn(reason);
})


// await
// 创建promise对象
const p = new Promise((resolve, reject) => {
    reject('失败')
})
//await 要放在 async函数中
async function fn2() {
    //promise返回失败时，需要捕获异常
    try {
        let rs = await p;
        console.log(rs);
    } catch (e) {
        console.log(e);
    }
}
fn2()

// async await 结合读文件
// 引入fs模块
const fs = require('fs')


// 读文件
function readAaa() {
    return new Promise((resolve, reject) => {
        fs.readFile('../文件/aaa.txt', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)    
            }
        })
    })
}
function readBbb() {
    return new Promise((resolve, reject) => {
        fs.readFile('../文件/bbb.txt', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)    
            }
        })
    })
}
function readCcc() {
    return new Promise((resolve, reject) => {
        fs.readFile('../文件/ccc.txt', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)    
            }
        })
    })
}
async function main(){
    try {
       let aaa = await readAaa();
       let bbb = await readBbb();
       let ccc = await readCcc();
       console.log(aaa.toString());
       console.log(bbb.toString());
       console.log(ccc.toString());
    } catch (e) {
        console.log(e);
    }
}
main()


//ajax async await 请求
function sendAjax(url) {
    return new Promise((resolve ,reject) => {
        const x = new XMLHttpRequest()
        x.open('get', url)
        x.send()
        x.onreadystatechange = function () {
            if (x.readyState === 4) {
                if (x.status >= 200 && x.status < 300) {
                    resolve(x.response)
                }else{
                    reject(x.status)
                }
            }
        }
    })
}
// 测试
// const rs = sendAjax("https://api.uomg.com/api/get.kg?songurl=https://node.kg.qq.com/play?s=YaCv8EYfJunVWYcH")
// rs.then(value => {
//     console.log(value);
// }, reason =>    {
//     console.log(reason);
// })
// async await测试
async function main(){
    let res = await sendAjax("https://api.uomg.com/api/get.kg?songurl=https://node.kg.qq.com/play?s=YaCv8EYfJunVWYcH")
    console.log(res);
}
main()
*/

//对象方法拓展
// 创建对象
const school = {
    name:'尚硅谷',
    cities:['北京','上海','深圳'],
    xueke:['前端','运维','Java','大数据']
}
//获取对象所有键
console.log(Object.keys(school));
//获取对象的所有值
console.log(Object.values(school));
//entries
console.log(Object.entries(school));

//创建Map
const m = new Map(Object.entries(school))
console.log(m.get('cities'));

//对象属性的描述对象
console.log(Object.getOwnPropertyDescriptors(school));
