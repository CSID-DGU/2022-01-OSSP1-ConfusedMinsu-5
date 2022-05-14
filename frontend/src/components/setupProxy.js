const { createProxyMiddleware} = require("http-proxy-middleware");

module.exports=function(app){
    app.use(
        "/api/graduateGuide",
        createProxyMiddleware({
            target:"http://localhost:5315",
            changeOrigin : true,
        })
    )

};