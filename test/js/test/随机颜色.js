function rgb(type) {
    if (type) {
        var str = '#'
        for (var i = 0; i < 3; i++) {
            var res = rangeRandom(0, 255).toString(16)
            if(res.length == 1) (
                res = '0' + res
            )
                str += res
        }
        return str
    }
    var rgb = `rgb(${rangeRandom(0,255)},${rangeRandom(0,255)},${rangeRandom(0,255)})`
    return rgb 
}
var re = rgb()
console.log(re)
