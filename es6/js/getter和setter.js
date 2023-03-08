//get和set
class Phone{
    get price(){
        console.log('价格属性被读取了');
        return '返回值'
    }
    set price(newVal){
        console.log('属性被修改');
    }

}

// 对象实例化
let s = new Phone();
console.log(s.price);
s.price = 'free'