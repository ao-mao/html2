//getElementsByTagName会取到表头，所以需要从1开始添加事件
// var tbs = document.getElementsByTagName("tr")

var tbs = document.querySelector("tbody").querySelectorAll("tr")
console.log(tbs)
for(i = 0 ; i<tbs.length ; i++){
    tbs[i].onmousemove=function(){
        this.style.backgroundColor = "skyblue"
    }
    tbs[i].onmouseleave = function(){
        this.style.backgroundColor= ''
    }
}