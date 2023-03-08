var topBar = document.querySelector(".topBar")
var btn = document.querySelector(".butBar")
window.onscroll = function () {
    var heigth = document.documentElement.scrollTop || document.body.scrollTop
    if (heigth > 300) {
        //方法一、
        // topBar.className = "topBar ative"
        // btn.className = "butBar ative"

        //方法二、
        topBar.classList.add("ative")
        btn.classList.add("ative")
    } else {
        // 方法1、
        // topBar.className = "topBar"
        // btn.className = "butBar"

        //方法二、
        topBar.classList.remove('ative')
        btn.classList.remove('ative')
    }

    //防止在按钮未出现时，点击仍然生效
    btn.onclick = function () {
        if (btn.className === 'butBar ative') {
            document.documentElement.scrollTo({
                top: 0
            })
        }
    }
}


