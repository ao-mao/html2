/**
 * 卷去高度：document.documentElement.scrollTop
 *      ！：必须有DOCTYPE标签
 *          document.body.scrollTop
 *      ! ： 必须没有DOCTYPE标签
 * 
 * 结合，兼容写法：
 *  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
 * 
 * 
 *  * 卷去宽度：document.documentElement.scrollLeft
 *      ！：必须有DOCTYPE标签
 *          document.body.scrollLeft
 *      ! ： 必须没有DOCTYPE标签
 *兼容写法：  var scrollTop = document.documentElement.scrollLeft || document.body.scrollLeft
 * 

 * 
 */
// window.onscroll=function(){
//     console.log("documentElement"+document.documentElement.scrollTop)
// }
// window.onscroll=function(){
//     console.log("body"+document.body.scrollTop)
// }

window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    console.log(scrollTop)
}