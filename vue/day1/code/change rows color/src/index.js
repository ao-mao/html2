// 导入jquery
import $ from "jquery"
// 导入css
import "./index.css"

// jQuery的入口函数
$(function(){
    // 奇、偶行变色
    $("li:odd").css("background-color","red");
    $("li:even").css("background","blue");
})