// function connect({host,prot,username,password}){
//     console.log(host);
//     console.log(prot);
//     console.log(username);
//     console.log(password);
// }
//rest参数 ---》 ...user(多余的参数存到user里面)
// function connect({host,prot,...user}){
//     console.log(host);
//     console.log(prot);
//     console.log(user);

// }
// connect({
//     host:'127.0.0.1',
//     prot:'3306',
//     username:'test',
//     password:'test'
// })


// 对象
// const skt = {
//     q:'天音波',
//     w:'金钟罩'
// }
// ...skt =>   q:'天音波',w:'金钟罩'

/** 
const skt1 = {
    q:'jinzonzao'
}
const skt2 = {
    w:'jinzonzao'
}
const skt3 = {
    r:'menglonbaiwei'
}

const manshen = {...skt1,...skt2,...skt3}
console.log(manshen);


//正则拓展 - 命名捕获分组
let str = '<a href="http://www.atguigu.com">尚硅谷</a>'
// 提取url和标签文本
const reg = /<a href="(.*)">(.*)<\/a>/;

const res = reg.exec(str)
console.log(res);
console.log(res[1]);
// 提取url和标签文本
const reg2 = /a href="(?<url>.*)">(?<text>.*)<\/a>/

const res2 = reg2.exec(str)
console.log(res2);
console.log(res2.groups.url);


// 声明字符串
let str = 'js12312312就就就321啦啦啦'
// 正向断言
const reg =  /\d+(?=啦)/
const res = reg.exec(str)
console.log(res);

// 反向断言
const reg2 =  /(?<=就)\d+/
const res2 = reg2.exec(str)
console.log(res2);

*/

//dot . 元字符 除换行符以外的任意单个字符
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
//模式修正符 //s  -》.可以匹配任意字符  全局修正符 //gs
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs
// const res = reg.exec(str)
let res ;
let data =[]
while(res =reg.exec(str)){
    console.log(res);
    data.push({title:res[1],time:res[2]})
}
console.log(data);
