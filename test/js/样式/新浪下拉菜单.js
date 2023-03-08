var uls = document.querySelector('.all')
var ulchildren = uls.children
console.log(uls)
for (i = 0; i < ulchildren.length; i++) {
    //给每个li添加一个改变背景色的事件


    ulchildren[i].onmouseover = function () {
        this.children[1].style.display = 'block';
    }
    ulchildren[i].onmouseout = function () {
        this.children[1].style.display = 'none';
    }
}