var arr = [2,1,3,5,9];var count = 0;
arr.forEach((val1,val2)=>{//arr = [2,1,3,5,9];
        count++; //第一次循环count++为0
        if(count % 3 == 0){ //第一次循环count为1，不满足条件，不进入if条件里
            break;
        }
        console.log(val1);//第一次循环val1=2
})
