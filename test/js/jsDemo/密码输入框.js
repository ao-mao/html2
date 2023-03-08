var ipt = document.querySelector('#ipt')
var mess = document.querySelector('.mess')
var a = 12231
ipt.onblur = function(){
    console.log(this.value.length)
    if(this.value.length <6 || this.value.length >12){
        mess.classList = "mess worng"
        mess.textContent = "密码长度不正确"
    }else{
        mess.classList="mess rigth"
        mess.textContent = "密码输入长度正确"
    }
}
ipt.onfocus = function(){
    this.value =''
    mess.classList="mess"
    mess.textContent="请输入6-12位密码"
}