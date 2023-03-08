var allBtn = document.querySelector(".all>input")
var itemBtns = document.querySelectorAll('.items > input')
//全选
allBtn.onclick = function(){
    //checked表示已选中 
    var type = allBtn.checked
    //设置其他选项
    // for(var i = 0 ; i<itemBtns.length ; i++){
    //     itemBtns[i].checked = type
    // }
    itemBtns.forEach(function(item){item.checked = type})
}

//设置其他选项
itemBtns.forEach(function(item){
    //点击事件
    item.onclick = function(){
        //假设现在都是被选中
        var flag = true
        itemBtns.forEach(function(i){
            if(!i.checked) flag=false
        })
         //假如flag === flase 则全选按钮为未选中状态
        allBtn.checked = flag
 }
})