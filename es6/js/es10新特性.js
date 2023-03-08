/** 
//对象拓展方法
//二维数组
const res = Object.fromEntries([
    ['name','尚硅谷'],
    ['xueke','Java，大数据，运维，前端']
])
console.log(res);

//Map
const m = new Map();
m.set('name','ATGUIGU')
const res2 = Object.fromEntries(m)
console.log(res2);

// es8 Object.entries
const es8 = Object.entries({
    name:'尚硅谷'
})
console.log(es8);
// entries和fromEntries互为逆运算

//字符串拓展
// es5 trim清除字符串
let str = '   i love you   '
console.log(str);
console.log(str.trim());//两边清除
console.log(str.trimStart());//清除左边
console.log(str.trimEnd());//清除右边

//数组
// flat 将多维数组转化为低维数组
const arr = [1,2,3,[,4,5]]
const arr2 = [1,2,3,[,4,5,[6,7,8]]]
// flat(2) 2表示深度，一维深度为零，二维深度为1，默认深度为1
console.log(arr.flat(),arr2.flat(2));

//flatMap
const arr3 = [1,2,3,4]
const res3 = arr3.map(item => item *10)
console.log(res3);
//假如返回是二维数组
const res4 = arr3.map(item => [item *10])
console.log(res4);
const res5 = arr3.flatMap(item => [item *10])
console.log(res5);


// Symbol拓展 获取字符串的描述
let s = Symbol('尚硅谷')
console.log(s.description);
*/

//私有属性
class person {
    //公有属性
    name;
    // 私有属性
    #age;
    #weight;
    // 构造方法
    constructor(name, age, weight) {
        this.name = name;
        this.#age = age;
        this.#weight = weight
    }
    intro() {
        console.log(girl.#age);
        console.log(girl.#weight);
    }
}
// 实例化
const girl = new person('小红', 18, 23)
console.log(girl.name);
// 错误写法
// console.log(girl.#age);
// console.log(girl.#weight);
// 调用私有属性
girl.intro()
