var input = document.documentElement.querySelector('input')
console.log(input)
//点击之后聚焦
input.onfocus = function(){
    if(input.value === '手机'){
        input.value = ''
    }
    input.style.color = "#333"
} 
//失去焦点
input.onblur = function(){
    if(!input.value){
        input.value = '手机'
        input.style.color = "#999"
    }
    
}