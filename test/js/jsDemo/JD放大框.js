// 先加载
window.addEventListener('load', function () {
    var limg = document.querySelector('.imgdiv')
    var mask = document.querySelector('.mask')
    var img = document.querySelector('.left-img')
    var bimg = document.querySelector('.big-img')

    limg.addEventListener('mouseover', function () {
        mask.style.display = 'block'
        bimg.style.display = 'block'
    })

    limg.addEventListener('mouseout', function () {
        mask.style.display = 'none'
        bimg.style.display = 'none'
    })

    limg.addEventListener('mousemove', function (e) {
        maskleft = e.pageX - mask.offsetWidth / 2 - limg.offsetLeft
        masktop = e.pageY - mask.offsetHeight / 2 - limg.offsetTop
        //最大移动距离
        var maskWidthMax =  img.offsetWidth - mask.offsetWidth
        var maskHeightMax = img.offsetHeight-mask.offsetHeight
        if (maskleft < 0) {
            maskleft = 0
        }
        //图片宽-遮挡层框
        if (maskleft > maskWidthMax) {
            maskleft = 100
        }
        if (masktop < 0) {
            masktop = 0
        }
        //图片高-遮挡层高
        if (masktop > maskHeightMax) {
            masktop = 100
        }

        mask.style['margin-left'] = maskleft + 'px'
        mask.style['margin-top'] = masktop + 'px'

        //大图片的移动距离 = 遮挡层最大距离 * 大图片最大移动距离 / 遮挡层最大移动距离



    })


})