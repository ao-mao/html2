var arr1 = [12,35,54,1,32,11,23,45,65,78,90,98,77,67,6,45]
var arr2 = []
for(var i = 0;i<arr1.length;i++){
    if(arr2[arr1[i]] !== undefined){
        arr2[arr1[i]] +=1
    }else{
        arr2[arr1[i]]=1
    }
}
console.log(arr2)
var arr3 =[],count=0
for(var i =0;i<arr2.length;i++){
    if(arr2[i] !== undefined){
        console.log(i,arr2[i])
        while(arr2[i]!=0){
            arr3[count] = i
            arr2[i]--,count++
            console.log(count,arr2[i])
        }
    }
}
console.log(count)
console.log(arr1)
console.log(arr3)
