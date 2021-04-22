# vue脚手架配置代理总结



## 方法一

> 在vue.config.js中追加如下配置

```json
devServer:{
    "proxy":"http://localhost:5000"
}
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （有限匹配前端资源）



## 方法二

编写vue.config.js配置具体代理规则：

```js
module.exports = {
	devServer: {
    proxy: {
      '/api1': {// 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api1': ''}
      },
      '/api2': {// 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:5001',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      }
    }
  }
}
```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。