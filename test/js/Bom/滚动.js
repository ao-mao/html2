/**
 * scrollTo(num,num) 滚动到（num，num）位置
 *      
 * 

btn.onclick = function(){
    // 语法一、必须写两个参数 特点瞬间定位
    // scrollTo(30,30)
    
    // 语法二、可以写任意参数 特点：可以根据第三个参数来确定是平滑滚动还是瞬间定位 behavior:"smooth"(平滑) "instant"(瞬间)
    //smooth的时间不能设置，固定的
    scrollTo({
        top:100,
        behavior:"smooth"
    })
}*/


/**
 * 自动滚到指定位置
 */
var time
btn.onclick=function(){
    //每隔30毫秒滚上去一点
    time =  setInterval(function(){
        document.documentElement.scrollTop-=20
   
    if(document.documentElement.scrollTop<= 0 ){
        clearInterval(time)
    } 
},30)
}

var st
window.onscroll=function(){
    //当滚动条往下滚动时，scrollTop的值比减去20之后的值要大
    if(document.documentElement.scrollTop >= st){
        clearInterval(time)
    }
    st = document.documentElement.scrollTop
}
 
