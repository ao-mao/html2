async function fn1(){
    return 'abc'
}
console.log(fn1());//Promise { 'abc' }


async function fn2(){
    return new Promise((resolve ,reject)=>{
        setTimeout(() => {
            resolve('fn2')
        }, 1000);
    })
}

function fn3(){
    return '2222';
}

async function fn5(){
    console.log('fn5===============================================================');
    var c = await fn2();
    var d = await fn3();
    console.log(1111);
    
    console.log(c);
    console.log(d);
}
fn5()

async function fn6(){
    return Promise.reject('err')
}

async function fn7(){
    console.log('fn7===============================================================');
    try{
        var e = await fn6()
    }catch(e){
        console.log(e);
    }
}
fn7()