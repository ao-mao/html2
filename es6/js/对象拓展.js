// 对象合并
const config1 = {
    name:'root',
    pass:'123',
    test:'dasda'
}
const config2 = {
    name:'root2',
    pass:'1233',
    test2:'wobuzd'
}
console.log(Object.assign(config1,config2));//存在就覆盖，不存在就保留

//设置原型对象
const school = {
    name:'尚硅谷'
}
const cities = {
    xiaoqu :['北京','上海','深圳']
}
Object.setPrototypeOf(school,cities)
console.log(school);