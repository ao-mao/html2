// 声明map
let m = new Map()

// 添加元素(key,value)
m.set('name','lww')
m.set('change',function(){
    console.log('we can change u');
})

let key = {
    school1 : 'daton',
    schhol2 : 'taisi'
}
m.set(key,['大同','太石'])

//size
console.log(m.size);
console.log(m);

//获取
console.log(m.get('name'));
console.log(m.get(key));

//删除
console.log(m.delete('name'));
console.log(m);

//遍历
for(let v of m){
    console.log(v);
}

//清空
m.clear()
