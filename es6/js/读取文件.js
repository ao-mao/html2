const fs = require('fs')

//调用方法读文件
// fs.readFile('../文件/reade.txt',(err,data)=>{
//     // 抛出异常
//     if(err) throw err;
//     // 输出数据
//     console.log(data.toString());
// }) 

// 使用promise
const p = new Promise(function(resolve,reject){
    fs.readFile('../文件/reade.txt',(err,data)=>{
        if(err) reject(err)
        resolve(data)
    })
})
p.then(function(value){
    console.log(value.toString());
},function(reason){
    console.log('读取失败');
})