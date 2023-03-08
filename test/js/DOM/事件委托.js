var ul = document.querySelector('ul')
/* 
    委托事件的原理：
        通过事件冒泡，轻松地解决子类注册事件的繁琐操作，提高性能
*/

ul.addEventListener('mousemove',function(e){
    
    e.target.addEventListener('mouseover',function(){
        this.style["background-color"]="pink"
    })
})