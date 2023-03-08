// 箭头函数
let fn = ()=>{
    console.log('我是箭头函数');
}


//this 始终指向声明函数所在作用域的this值 自身没有this
let getName = () => {
    console.log(this.name);
}
let getNmae2 = function(){
    console.log(this.name);
}
// 设置window对象的name属性
window.name = '尚硅谷'
const school ={
    name:'ATGUIGU'
}
getName()
getNmae2()

getName.call(school)
getNmae2.call(school)
