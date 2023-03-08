//迭代器--iterator--对象里的属性
//声明一个数组
let xiyou = ['唐僧','孙悟空','猪八戒','沙僧']
//使用for...of
// for(let x of xiyou){
//     console.log(x);
// }
//for in遍历
// for(let x in xiyou){
//     console.log(x);
// }

// console.log(xiyou);
let iterator = xiyou[Symbol.iterator]()
//next方法会指向下一个元素。 返回一个value和done
//done为true这停止指向下一个元素
console.log(iterator.next());



//自定义遍历数组,对象不能直接用for of遍历
const banji={
    name:'终极一班',
    stus:[
        'xiaotian',
        'xiaobin',
        'xiaoxia','xioahui'
    ],
    [Symbol.iterator](){
        let index = 0 
        let _this = this 
        return{
            next:function(){
                if(index<_this.stus.length){
                    const result = {value:_this.stus[index],done:false}
                    index++
                    return result
                }else{
                    return {value:undefined,done:true}
                }
            }
        }
    }
}
for(let v of banji){
    console.log(v);
}