const p = new Promise((resolve,reject)=>{
    reject('出错了')
})
p.catch(reason => {
    console.warn(reason);
})