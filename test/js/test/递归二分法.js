var arr = [123,322,12,54,21,11,45,13]
function find(arr){
    if(arr.length <= 1) {
        return arr
    }
    var index = parseInt(arr.length/2)
    var center = arr.splice(index,1)
    var rigth = []
    var left = []
    for(var i  = 0; i<arr.length;i++){
        if(arr[i]<=center[0]){
            left.push(arr[i])
        }else{
            rigth.push(arr[i])
        }
    }
    return find(left).concat(center,find(rigth))
}
var res  = find(arr)
console.log(res)
console.log(arr)