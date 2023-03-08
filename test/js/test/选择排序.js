var arr = [46,12,23,45,65,34,22,34,65,1]
for(var i = 0 ;i < arr.length ; i++){
    for(var j = i+1 ; j<arr.length ; j++){
        if(arr[i]>arr[j]){
            var tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
        }
    }
    console.log(arr)
}    
