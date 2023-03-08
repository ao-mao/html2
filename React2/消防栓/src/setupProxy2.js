//http-proxy-middleware低版本配置
// const proxy = require('http-proxy-middleware');
//http-proxy-middleware高版本配置
const { createProxyMiddleware: proxy } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/api", {
      // target: "https://api.yq.com.cn",

      // target: "https//8.134.89.240:443",
      target: "http://106.55.243.24:3000",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
