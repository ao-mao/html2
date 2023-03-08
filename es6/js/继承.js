/** 
// 构造函数继承
function Phone(brand , price){
    this.brand = brand  
    this.price = price
}
Phone.prototype.call = function(){
    console.log('test');
}
//智能手机
function SmartPhone(brand,price,color,size){
    Phone.call(this,brand,price)
    this.color = color
    this.size  = size
}
//设置子级构造函数的原型
SmartPhone.prototype = new Phone
SmartPhone.prototype.constructor = SmartPhone

//声明子类方法
SmartPhone.prototype.photo=function(){
    console.log('拍照');
}
// 实例化
const xiaomi = new SmartPhone('小米','1999','黑色','5.5')
console.log(xiaomi);
*/

//class类继承
//父类
class Phone{
    // 构造方法
    constructor(brand,price){
        this.brand = brand
        this.price = price
    }
    //父类的属性成员
    call(){
        console.log('我可以打电话');
    }
    up(){
        console.log('test');
    }
}
//子类
class SmartPhone extends Phone{
    //子类构造方法
    constructor(brand,price,color,size){
        //父类的方法
        super(brand,price)
        this.color = color;
        this.size = size;
    }
    photo(){
        console.log('take photo');
    }
    game(){
        console.log('play game');
    }
    //方法重写（子类不能直接调用父类的同名方法 ）
    call(){
        console.log('我可以视频通话');
    }
}
//实例化
const xiaomi = new SmartPhone('小米',799,'黑色','7.5')
console.log(xiaomi);
//方法调用
xiaomi.call()
xiaomi.up()
xiaomi.photo()