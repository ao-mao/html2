const fs = require('fs')
//回调
// fs.readFile('../文件/aaa.txt',(err,data1)=>{
//     fs.readFile('../文件/bbb.txt',(err,data2)=>{
//         fs.readFile('../文件/ccc.txt',(err,data3)=>{
//             let res = data1 +'\n'+ data2 +'\n'+data3
//             console.log(res);
//         })
//     })
// })

//promise
const p = new Promise((resolve,reject)=>{
    fs.readFile('../文件/aaa.txt',(err,data)=>{
        resolve(data)
      })
})
// then方法的链式调用
p.then(value=>{//value为成功调用的data
    return new Promise((resolve ,reject)=>{
        fs.readFile('../文件/bbb.txt',(err,data)=>{
            resolve([value,data])
          })
    })
}).then(value=>{//此时如果成功返回，则value为一个数组[value,data]
    return new Promise((resolve ,reject)=>{
        fs.readFile('../文件/ccc.txt',(err,data)=>{
            value.push(data)
            resolve(value)
          })
    })
}).then(value=>{
    console.log(value.join('\r\n'));
})
