//js控制css 元素名.style.样式 = 值
//box.style.background = "blue"

//定时弹出
setTimeout(
    function(){
        box.style.display="block"
    },1000 * rangeRandom(1,3)
)

//点击btn 关闭
btn.onclick = function(){
    box.style.display="none"
}