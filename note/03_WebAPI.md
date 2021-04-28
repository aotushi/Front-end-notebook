

# 三. Web API & 手写代码

## 1. 事件冒泡与事件委托

### 1) 事件冒泡的流程

- 基于DOM树形结构
- 事件在目标元素上处理后, 会由内向外(上)逐层传递
- 应用场景: 事件代理/委托/委派

### 2) 事件委托

- 减少内存占用(事件监听回调从n变为1)
- 动态添加的内部元素也能响应
- 不要滥用

### 3) 封装一个绑带事件监听的函数(有难度)

```
/* 
绑定事件监听的通用函数(不带委托)
*/
function bindEvent1 (ele, type, fn) {
  ele.addEventListener(type, fn)
}

/* 
绑定事件监听的通用函数(带委托)
*/
function bindEvent2(ele, type, fn, selector) {

  ele.addEventListener(type, event => {
    // 得到发生事件的目标
    const target = event.target
    if (selector) {
      // 如果元素被指定的选择器字符串选择, 返回true; 否则返回false。
      if (target.matches(selector)) {
        // 委托绑定调用
        fn.call(target, event)
      } 
    } else {
      // 普通绑定调用
      fn.call(ele, event)
      // fn(event) // this不对
    }
  })
}


<ul>
   <span>
    <li>
    <li>
</ul>
    
bindEvent2(ul, 'click', (event) => {}, 'li')
bindEvent2(ul, 'click', (event) => {})
```

## 2. 前后台交互 & ajax

### 1) 区别ajax请求与一般HTTP请求

- ajax请求是一种特别的http请求
- 对服务器端来说, 没有任何区别, 区别在浏览器端
- 浏览器端发请求: 只有XHR或fetch发出的才是ajax请求, 其它所有的都是非ajax请求
- 浏览器端接收到响应
  - 一般请求: 浏览器一般会直接显示响应体数据, 也就是我们常说的刷新/跳转页面
  - ajax请求: 浏览器不会对界面进行任何更新操作, 只是调用监视的回调函数并传入响应相关数据

### 2) xhr.status

- 2XX: 表示成功处理请求, 如200, 201
- 3XX: 需要生定向, 浏览器直接跳转, 如302
- 4XX: 客户端请求错误, 如:  401, 404 
- 5XX: 服务器端错误, 如: 500

### 3) 封装一个简易的ajax异步请求函数

```js
/* 
xhr + promise 封装一个异步ajax请求的通用函数  简洁版
*/
function ajax(url) {
  return new Promise((resolve, reject) => {
    // 创建一个XHR对象
    const xhr = new XMLHttpRequest()
    // 初始化一个异步请求(还没发请求)
    xhr.open('GET', url, true)
      
    xhr.onreadystatechange = function () { 
        /*
        ajax引擎得到响应数据后
        	将xhr的readyState属性指定为4
        	将响应数据保存在response / responseText属性上
        	调用此回调函数
        */
        
      // 如果状态值不为4, 直接结束(请求还没有结束)
      if (xhr.readyState !== 4) {
        return
      }
      // 如果响应码在200~~299之间, 说明请求都是成功的
      if (xhr.status>=200 && xhr.status<300) {
        // 指定promise成功及结果值
        resolve(JSON.parse(xhr.responseText))
      } else { // 请求失败了
        // 指定promise失败及结果值
        reject(new Error('request error staus '+ request.status))
      }
    }
    xhr.send(null)
  })
}

/* 
xhr + promise 封装一个异步ajax请求的通用函数  加强版
  返回值: promise
  参数为配置对象
    url: 请求地址
    params: 包含所有query请求参数的对象
    data: 包含所有请求体参数数据的对象
    method: 为请求方式
*/
function axios({url, params={}, data={}, method='GET'}) {
  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    // 创建一个XHR对象
    const request = new XMLHttpRequest()
    
    // 根据params拼接query参数
    let queryStr = Object.keys(params).reduce((pre, key) => {
      pre += `&${key}=${params[key]}`
      return pre
    }, '')
    if (queryStr.length>0) {
      queryStr = queryStr.substring(1)
      url += '?' + queryStr
    }
    // 请求方式转换为大写
    method = method.toUpperCase()
    
    // 初始化一个异步请求(还没发请求)
    request.open(method, url, true)
    // 绑定请求状态改变的监听
    request.onreadystatechange = function () {
      // 如果状态值不为4, 直接结束(请求还没有结束)
      if (request.readyState !== 4) {
        return
      }
      // 如果响应码在200~~299之间, 说明请求都是成功的
      if (request.status>=200 && request.status<300) {
        // 准备响应数据对象
        const responseData = {
          data: JSON.parse(request.response),
          status: request.status,
          statusText: request.statusText
        }
        // 指定promise成功及结果值
        resolve(responseData)
      } else { // 请求失败了
        // 指定promise失败及结果值
        const error = new Error('request error staus '+ request.status)
        reject(error)
      }
    }

    // 如果是post/put请求
    if (method==='POST' || method==='PUT' || method==='DELETE') {
      // 设置请求头: 使请求体参数以json形式传递
      request.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
      // 包含所有请求参数的对象转换为json格式
      const dataJson = JSON.stringify(data)
      // 发送请求, 指定请求体数据
      request.send(dataJson)
    } else {// GET请求
      // 发送请求
      request.send(null)
    }
  })
}
```



### 4) 跨域

- 什么是跨域(同源策略)
- JSONP
- CORS
- 代理服务器



### 5) 同源策略

- 同源: 协议, 域名, 端口, 三者都相同

- ajax请求时, 浏览器要求当前网页和Server必须同源(安全), 否则会抛出跨域的错误

- 加载image/link/script不受同源策略限制

  

### 6) JSONP原理

- 前台:

  - <script src="目标url?callback=fn" />

  - 接收响应数据的函数: function fn (data) {}

- 后台

  - 处理请求, 产生需要返回的数据data
  - 读取callback请求参数得到前台处理响应数据的函数名fn
  - 返回执行函数fn的js代码: 'fn && fn(data)'

- 不足

  - 只能处理GET请求
  - 每个请求在后台都要做处理, 麻烦

  ```js
  // 发送jsonp请求的函数
  function jsonp() {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      // 传参并指定回调执行函数为backFn
      script.src = 'http://localhost:4000/getUserInfo?id=100&callback=fn'
      document.body.appendChild(script)
  }
  
  // 回调函数, 接收响应数据
  function fn(data) {
  	console.log(data)
  }
  ```

  

### 7) CORS原理

- 后台: 返回允许浏览器在某个域上发送跨域请求的相关响应头

```js
// 使用cors, 允许跨域, 且允许携带跨域cookie
app.use(function (req, res, next) {
  // console.log('----')
  // 允许跨域的地址
  res.header('Access-Control-Allow-Origin', 'http://localhost:5500')  // 不要是*
  // 允许携带凭证(也就是cookie)
  res.header('Access-Control-Allow-Credentials', 'true')
  // 允许跨域的请求头
  res.set("Access-Control-Allow-Headers", "Content-Type")
  // 放行
  next()
})
```

- 前台: 不需要做特别任何处理

```js
axios.defaults.withCredentials = true // 允许携带cookie
xhr.withCredentials = true
```

### 8) 代理服务器

- 开发环境: 利用webpack-dev-server中的http-proxy-middle  进行正向代理
  - vue脚手架项目
  - react脚手架项目
  - 自定义webpack配置
  - 直接使用http-proxy-middle配置
- 生产环境: 利用nigix  进行反向代理
- https://www.cnblogs.com/taostaryu/p/10547132.html



### 9) 使用axios发送ajax请求

```js
//总结,axios的两种用法:配置对象,调用函数对象的方法

axios(url)
axios({
    method: '',
    url: '',  // 如果有params参数必须拼接在url中
    params: {}, // query参数
    data: {} // 请求体参数
})
axios.get(url, {配置})
axios.post(url, data, {配置})
axios.put(url, data, {配置})
axios.delete(url, {配置})

const service = axios.create({
    baseURL: '',
    timeout: 20000,
})

service.interceptors.request.use((config) => {
   	// 添加请求头
    config.headers['token'] = token值
    return config // 必须返回config
})

xhr.send()

service.interceptors.response.use(
    response => {
        // return response
        return response.data
    },
    error => {
        
    }
)


service({}).then(data => {
    
})

//实现原理
Promise.resolve(config)
    .then((config) => {  // 请求拦截器的回调
    	return config
	})  
    .then((config) => { // 用来发ajax的回调
        return new Promise((resolve, reject) => {
            // 根据config使用xhr发请求
            resolve(response)
        })
    })
	.then(   // 响应拦截器
        (response) => {
            return response.data
        }, 
        (error) => {
            
        }
	)
	.then((data) => { // 最终发具体请求的成功回调
    
	})
```



```js
使用案例: post请求使用params参数

axios.post(url,[data[,config]])

axios.post('url',null,{params:{name:name,age:age}})
```







### 10) axios二次封装

1. 配置通用的基础路径和超时

2. 显示请求进度条
   1. 显示进度条: 请求拦截器回调
   2. 结束进度条: 响应拦截器回调

3. 成功返回的数据不再是response, 而直接是响应体数据response.data

4. 统一处理请求错误, 具体请求也可以选择处理或不处理

5. 每个请求自动携带userTempId的请求头: 在请求拦截器中实现

6. 如果当前有token, 自动携带token的请求头
7. 对token过期的错误进行处理

```js
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
import router from '@/router'

NProgress.configure({ showSpinner: false }) // 隐藏右侧的旋转进度条

// 创建instance
const instance = axios.create({
  // baseURL: 'http://182.92.128.115/api',
  baseURL: '/api',
  timeout: 20000
})

// 指定请求拦截器
instance.interceptors.request.use(config => {
  // 显示进度条: 请求拦截器回调
  NProgress.start()

  /* 每个请求自动携带userTempId的请求头: 在请求拦截器中实现 */
  const userTempId = store.state.user.userTempId
  config.headers.userTempId = userTempId
  
  /* 6. 如果当前有token, 自动携带token的请求头 */
  const token = store.state.user.token
  if (token) {
    config.headers.token = token
  }
  
  return config // 必须返回config
}) 


// 指定响应拦截器
instance.interceptors.response.use(
  response => { // 成功的回调
    // 结束进度条: 响应拦截器回调
    NProgress.done()
    // 成功返回的数据不再是response, 而直接是响应体数据response.data
    return response.data
  },

  async error => { // 失败的回调
    // 结束进度条: 响应拦截器回调
    NProgress.done()

    // 统一处理请求错误, 具体请求也可以选择处理或不处理
    // alert('请求出错: ' + error.message||'未知错误')

    // 取出响应对象
    const { response } = error
    // 如果是请求处理出错
    if (response && response.status) {
      // 401说明token非法
      if (response.status === 401) {
        // 如果当前没在登陆页
        if (router.currentRoute.path!=='/login') {
          // 分发action去清除用户token信息
          await store.dispatch('logout')
          // 跳转到登陆页面
          router.replace('/login')
          // 提示
          message.error('登陆已过期, 请重新登陆')
        }
      } else {
        message.error('请求出错: ' + error.message||'未知错误')
      }
    } else if (!response) { // 网络连接不上服务器
      message.error('您的网络发生异常，无法连接服务器')
    }

    // throw error
    return Promise.reject(error) // 将错误向下传递
  }
)

// 向外暴露instance
export default instance
```



```js
//这个文件是对axios进行二次封装
//额外的让axios发请求的时候，具有其它的功能
// 配置基础路径和超时限制
// 添加进度条信息  nprogress
// 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
// 统一处理请求错误, 具体请求也可以选择处理或不处理
import axios from 'axios'
// 引入nprogress相关的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

//以后只要是对axios二次封装，不会在axios身上直接去封装，而是创建一个新的axios实例进行封装
//axios.create()创建一个新的和axios具有相同功能的一个实例
const service = axios.create({
  //配置基础路径和超时限制
  baseURL: '/api',  //设置，当前项目当中所有接口路径的公共路径部分，基础路径
  timeout: 20000,//当ajax请求超过设置的这个事件就会报错
});


// 添加进度条信息功能  nprogress
// 以后如果你想对axios添加额外的功能或者是给请求头添加额外的信息
// 必然用到axios的请求拦截器和响应拦截器

//请求拦截器，每个ajax请求都要经过这个拦截器去拦截
service.interceptors.request.use(
  // 请求拦截器当中成功的回调
  (config)=>{
    // config其实就是我们的请求报文
    // 这个请求报文，最后一定要返回去，因为还要继续往下走
    //在这里我们可以添加额外的功能，也可以给请求头添加需要的数据
    NProgress.start(); //开启进度条

    //请求头内部需要添加临时标识，后期每个请求都会带上这个临时标识
    let userTempId = store.state.user.userTempId
    if(userTempId){
      config.headers.userTempId = userTempId
    }

    //登录成功后，需要把token添加到请求头当中，从今往后所有的请求当中都要带上这个token
    let token = store.state.user.token
    if(token){
      config.headers.token = token
    }


    return config
  },
  // 请求拦截器当中失败的回调一般不写，因为失败了，也就没有下文了
  // () => {
  // }
);

//响应拦截器
//返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
//统一处理请求错误, 具体请求也可以选择处理或不处理
service.interceptors.response.use(
  (response) => {
    //response其实就是我们的响应报文
    //我们也是可以添加额外功能或者对响应报文进行处理
    NProgress.done(); //停止进度条
    return response.data //返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
  },
  (error) => {
    NProgress.done(); //停止进度条
    //可以统一处理错误
    alert('发送ajax请求失败'+error.message||'未知错误')
    //统一处理完成之后，这个错误可以让后面继续处理
    // return Promise.reject(new Error('发送ajax请求失败')) //后面想继续处理这个错误，返回失败的promise
    //也可以不让后面继续处理这个错误，中断promise链
    return new Promise(() => {})  //返回的是pending状态的promise，代表中断promise链，后期也就没办法处理了
  }
);


export default service  //把封装好的axios实例，暴露出去，后面去用

```





### 11) Restless API 与 Restful API

- Restless API  

  - 传统的API, 把每个url当作一个功能操作      /deleteUser
  - 同一个url, 后台只进行CRUD的某一种操作
  - 请求方式不决定请求的CRUD操作
  - 一个请求路径只对应一个操作
  - 一般只有GET/POST

- Restful API 

  - 新式的API, 把每个url当作一个唯一资源   /user/2
  - 同一个url, 可以通过不同类型的请求对后台资源数据进行CRUD四种操作
  - 请求方式来决定了请求在后台进行CRUD的哪种操作
    - GET: 查询
    - POST: 添加
    - PUT: 更新
    - DELETE: 删除
  - 同一个请求路径可以进行多个操作
  - 请求方式会用到GET/POST/PUT/DELETE

- 测试: 可以使用json-server快速搭建模拟的rest api 接口


### 11) 从输入url到渲染出页面的整个过程

http://www.baidu.com

1. DNS 解析（查询）：将域名地址解析 ip 地址

- 浏览器 DNS 缓存
- 计算机 DNS 缓存
- 路由器 DNS 缓存
- 网络运营商 DNS 缓存
- 递归查询

2. TCP 链接：TCP 三次握手  ===> 建立连接

- 客户端发送服务端：我准备好了，请你准备一下
- 服务端发送客户端：我也准备好了，请你确认一下
- 客户端发送服务端：确认完毕

![TCP三次握手_通俗版](.\images\TCP三次握手_通俗版.jpeg)

3. 发送请求

- 将请求报文发送过去

4. 返回响应

- 将响应报文发送过来

5. 解析渲染页面

- 遇到 HTML，调用 HTML 解析器，解析成 DOM 树
- 遇到 CSS，调用 CSS 解析器，解析成 CSSOM 树
- 遇到 JS，调用 JS 解析器（JS 引擎），解析 JS 代码
  - 可能要修改元素节点，重新调用 HTML 解析器，解析更新DOM 树
  - 可能要修改样式节点，重新调用 CSS 解析器，解析更新 CSSOM 树
- 将 DOM + CSSOM = Render Tree（渲染树）
- layout 布局：计算元素的位置和大小信息
- render 渲染：将颜色/文字/图片等渲染上去

6. 断开链接：TCP 四次挥手
   (断开请求链接 2 次, 断开响应链接 2 次)

- 客户端发送服务端：请求数据发送完毕，可以断开了
- 服务端发送客户端：请求数据接受完毕，可以断开了
- 服务端发送客户端：响应数据发送完毕，可以断开了
- 客户端发送服务端：响应数据接受完毕，可以断开了

![四次挥手_通俗版](.\images\四次挥手_通俗版.jpeg)





## 3. 前台数据存储

### 1) 存储方式

- cookie
- sessionStorage
- localStorage

注意: session后台数据存储

### 2) cookie

- 本身用于浏览器和Server通讯
- 被 "借用" 到本地存储
- 可用document.cookie读取或保存
- 可以利用cookies工具库简化编码



### 3) cookie的缺点

- 存储大小有限, 最大4KB
- http请求时会自动发送给服务器, 增加了请求的数据量
- 原生的操作语法不太方便操作cookie
- 浏览器可以设置禁用



### 4) localStoarge与sessionStorage

- 相同点:
  - 纯浏览器端存储, 大小不受限制, 请求时不会自动携带
  - 只能保存文本, 如果是对象或数组, 需要转换为JSON
  - API相同:
    - setItem(key, value)
    - getItem(key, value)
    - removeitem(key, value)
  - 浏览器不能禁用
- 不同点:
  - localStorage保存在本地文件中, 除非编码或手动删除, 否则一直存在
  - sessonStorage数据保存在当前会话内存中, 关闭浏览器则清除



### 5) 区别cookie 与 localStorage和sessionStorage

- 容量
- 请求时是否自动携带
- API易用性
- 浏览器是否可禁用

### 6) 区别cookie与session

- cookie保存在浏览器端(前台可以操作)
- session保存在服务器端(前台不能操作)
- session依赖于cookie(session的id以cookie的形式保存在浏览器端)

```js
1. localStorage
   1. 永久存储，存储在硬盘，除非主动删除
   2. 存储量5M
2. sessionStorage
   1. 会话存储，存储在内存，会话结束，释放内存
   2. 存储量5M
3. cookie
   1. 由来： http协议是无状态协议
   2. 特点： 
      1. 存储量4kb
      2. cookie不安全，容易被截获，容易被编译
      3. 服务器端生成，保存在客户端
      4. 以后发请求每次都会自动携带，会造成带宽的浪费
4. session
   1. 服务器端生成，保存在服务器端
   2. 需要用cookie作为载体
```



