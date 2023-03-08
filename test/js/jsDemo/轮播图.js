window.addEventListener('load', function () {
    var imgsBody = this.document.querySelector('.imgsBody')
    var imgs = this.document.querySelector('.imgs')
    var butn_l = this.document.querySelector('.lbutn')
    var butn_r = this.document.querySelector('.rbutn')
    var img = this.document.querySelector('.img')
    var i = 0

    //克隆第一个照片
    imgs.appendChild(imgs.children[0].cloneNode(true))

    imgs.addEventListener('mouseover', function () {
        butn_l.style.display = 'block'
        butn_r.style.display = 'block'
        clearInterval(atuoIntervalr)
        atuoIntervalr = null
    })

    imgs.addEventListener('mouseout', function () {
        butn_l.style.display = 'none'
        butn_r.style.display = 'none'
        atuoIntervalr = setInterval(atuoImg(), 2000)
    })




    //注册li
    var a
    var lis = document.querySelector('.lis')
    var imgCount = imgs.childElementCount;
    for (a = 0; a < imgCount - 1; a++) {
        var li = document.createElement('li')
        //添加属性
        li.setAttribute('index', a)
        // 获取父类并插入
        lis.appendChild(li)
        lis.children[0].className = 'curent'
        li.addEventListener('mouseover', function () {
            for (var b = 0; b < imgCount - 1; b++) {
                lis.children[b].className = ''
            }
            this.className = 'curent'
            i = this.getAttribute('index')
            console.log(i);
            var crMove = -i * img.width
            move(lis, crMove)
        })
    }







    // 步长算法
    function move(obj, target) {
        clearInterval(obj.a)
        clearInterval(atuoIntervalr)
        obj.a = setInterval(function () {
            var long = (target - imgs.offsetLeft) / 10
            if (target == imgs.offsetLeft) {
                console.log(this + "结束啦");
                clearInterval(obj.a)
                atuoIntervalr = setInterval(atuoImg, 2000)
            }
            long = long > 0 ? Math.ceil(long) : Math.floor(long)
            imgs.style["margin-left"] = imgs.offsetLeft + long + 'px';
        }, 15)
    }

    // 按钮控制
    butn_l.addEventListener('click', function () {
        if (imgs.clientWidth == 800) {
            imgs.style["margin-left"] = -(imgCount - 1) * img.width + 'px'
        }
        i = -Math.floor(imgs.offsetLeft / img.clientWidth)
        if (i == 0) {
            i = imgCount - 1
        }
        i--
        var w = - (i) * img.clientWidth
        move(butn_l, w)
        for (var b = 0; b < imgCount - 1; b++) {
            lis.children[b].className = ''
        }
        lis.children[i].className = 'curent'

    });
    butn_r.addEventListener('click', function () {
        if (i == imgCount - 1) imgs.style["margin-left"] = 0 + 'px'
        i = -Math.ceil(imgs.offsetLeft / img.clientWidth)
        if (i == imgCount - 1) i = 0
        i++
        var w = - (i) * img.clientWidth
        move(butn_r, w)
        for (var b = 0; b < imgCount - 1; b++) {
            lis.children[b].className = ''
        }
        if (i == 5) lis.children[0].className = 'curent'
        else lis.children[i].className = 'curent'

    });

    // 自动轮播
    function atuoImg() {
        // butn_r.click()
        if (i == 1) imgs.style["margin-left"] = 0 + 'px'
        if (i < imgCount) {
            var taget = - (i * img.width)
            move(atuoImg, taget)
            for (var b = 0; b < imgCount - 1; b++) {
                lis.children[b].className = ''
            }
        }
        if (i === imgCount - 1) i = 0
        lis.children[i].className = 'curent'
        i++
    }

    var atuoIntervalr = setInterval(atuoImg(), 2000)
})