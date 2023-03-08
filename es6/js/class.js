 //手机类
 /**
 class Phone{
    //构造方法
    constructor(brand,price){
        this.brand = brand
        this.price = price
    }
    //方法必须使用该语法
    call(){
        console.log('i can 打电话');
    }
 }
 let onePlus = new Phone('1+',1999)
 console.log(onePlus);
 onePlus.call()
  */

 //静态成员
 function Phone(){

 }
//  一下都是静态成员
/** 
 Phone.name = '手机'
 Phone.chane()= () => {
    console.log('test');
 }
 */

 class Phone2{
    static name = '手机'
    static change(){
        console.log('tetst');
    }
 }
 let nokia = new Phone();
//  name,change属于类中，而不是实例对象
 console.log(nokia.name);
 console.log(Phone.name);