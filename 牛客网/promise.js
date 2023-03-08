var promise = new Promise((resolve , reject) =>{
    if('操作成功'){
        resolve('操作成功')
    }else{
        reject('操作失败')
    }
})

promise.then(res =>{
    console.log(res);//返回成功
}).catch(err =>{
    console.log(err);//返回失败
})


// promise.all
let p1 = new Promise((reslove,rejetc) => {
    reslove('成功')
})
let p2 = new Promise((reslove,rejetc) => {
    reslove('succss')
})
let p3 = new Promise.reject('失败')

promise.all[p1,p2].then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

// promise.race
Promise.race([p1,p2m,p3]).then(result =>{
    console.log(result);
}).catch(error => {
    console.log(error);
})