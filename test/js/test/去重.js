var arr = [1,2,2,3,1,4,5,1,2,3,5,6]
/**
 * 方法一、
for(var i = 0 ; i < arr.length ; i++){
   for(var j = i+1 ; j < arr.length ; j++){
    if(arr[j] === arr[i]){
        arr.splice(j,1)
        j--
    }
   }
}

//方法二、
    var newArr=[]
    for(var i = 0 ; i<arr.length ; i++){
        if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i])
        }
        // if(newArr.includes(arr[i]) === false){
        //     newArr.push(arr[i])
        // }
    }
console.log(newArr)
*/