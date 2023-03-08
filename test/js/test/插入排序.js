var arr = [123,322,12,54,21,11,45,13]
function insertSort(arr){
  for(var i = 1 ; i<arr.length ; i++){
      var tmp = arr[i]
      var j = i -1 
      // console.log("第"+i+"轮："+arr)
      while(arr[j]>tmp){
        arr[j+1] = arr[j]
        // console.log(arr)
        j--
      }
     
      arr[j+1]=tmp
  }
}
insertSort(arr)
console.log(arr)