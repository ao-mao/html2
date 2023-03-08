var lis = document.querySelectorAll('li')
var divs = document.querySelector('.body').querySelectorAll('div')
console.log(divs)
for(i = 0 ; i< lis.length ; i++){
    lis[i].setAttribute('index',i)
    lis[i].onclick = function(){
        for(i = 0 ;i<lis.length;i++){
            lis[i].classList = ''
        }
        this.classList="cen"
        //切换
        var index = this.getAttribute("index")
        console.log(index)
        for(i = 0 ;i<lis.length;i++){
            divs[i].style.display = "none"
        }
        divs[index].style.display='block'
    }

}