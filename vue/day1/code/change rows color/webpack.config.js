const path = require("path")
// 导入"html-webpack-plugin"
const HtmlPlugin = require("html-webpack-plugin");
// 构造函数
const htmlPlugin = new HtmlPlugin({
    //指定复制的页面
    template:'./src/index.html',
    //指定复制出来的文件及路径
    filename:'./index.html'
});
// node.js的语法
module.exports = {
    mode:"development",
    entry: path.join(__dirname,".\\src\\index.js"),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    // 插件的数组，webpack将来会加载并调用这些插件
    plugins:[htmlPlugin],
    devServer:{
        // 自动打开浏览器
        open:true,
        port:80,
        host:'127.0.0.1'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    }
} 