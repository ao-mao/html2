var btns = document.getElementsByTagName('button')
for(i = 0 ;i<btns.length ;i++){
    btns[i].onclick = function(){
        for(i=0;i<btns.length;i++){
            btns[i].style.backgroundColor = '';
        }
        this.style.backgroundColor='pink'
    }
}