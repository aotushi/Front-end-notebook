## react脚手架配置代理总结



### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当ajax请求了**3000**不存在的资源时，那么该请求会转发给5000 （**优先匹配前端资源**）
4. 请求URL可以简写:



### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。





## Vue代理

> 使用vcli框架中的代理,使用了webpack中的配置. 在cli脚手架, uniapp中都需要在vue.config.js中配置]
>
> 小程序不需要跨域设置 

```js
webpack中文文档:
https://webpack.docschina.org/configuration/dev-server/#devserverproxy

cli.vuejs.org文档
https://cli.vuejs.org/zh/config/#devserver-proxy

```



```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {   //接头暗号, 请求网址中应该包含/api
        target: '<url>',   //目标服务器地址
        ws: true,          //websocket 
        changeOrigin: true, //允许跨域
        pathRewrite:{
            '/api':'/'
        }
      },
      
    }
  }
}
```



### websocket长链接

```js
//简介 websocket
握手协议 长链接 
//作用
用于数据实时通信，服务器端能够主动推送消息给客户端， 
//场景： 
1. 实时聊天，2. 购买商品使用第三方支付微信，支付后，微信后台主动推送支付结果给商家服务器端，用于更新订单状态
```

