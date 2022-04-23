

## NPM

### 介绍

全称：Node Package Manager , Node 的包管理器，也是一个应用程序。

### 包是什么

Node.js 的包基本遵循 CommonJS 规范，将一组相关的模块组合在一起，形成一个完整的工具

### 作用

通过 NPM 可以对 Node 的工具包进行**搜索、下载、安装、删除、上传**。借助别人写好的包，可以让我们的开发更加方便。

### 安装

安装完 nodejs 之后会自动安装 npm

### 背景知识(开发+生产)

```js
开发环境:项目处在编码阶段,
    用到的辅助工具依赖就安装到devDependencies下,使用npm install 包名 --save-dev||-D
	例如:css预处理器:Less, Sass, Stylus; ESlint; Webpack打包工具
    
    
生产环境: 上线服务
	如果项目运行需要的依赖,就安装到dependencies下, 使用npm install 包名  --save||-S
    例如:Vue.js,React框架; axios; ElementUI组件库
```



### 常用命令

```js
npm -version/-v
npm init/i 初始化
npm i --yes 简洁写法 全部采用默认值,但上级路径中不能存在中文
npm search/s name 搜索包
npm install/i name 安装包

//安装到依赖中  包名会被注册在package.json中的dependencies里面,在生产环境下这个包的依赖依然存在.
//安装包并添加到生产中(devdependencies)  6版本可省略,自动添加到依赖中
npm i name --save-dev
npm i name -D

//安装包并添加到开发中(dependencies)
//
npm i name --save
npm i name -S


npm i name -g 全局安装

npm i/install  安装全部依赖
npm i --production 只安装dependencies中的依赖

npm remove/r name1 name2 移除包,可以添加多个包的名字
```



#### 查看 npm 的版本

```sh
npm -v 
```

#### 初始化

```sh
//主要是用来创建package.json文件,如果已经存在,则不需要重新创建.
//包名字不能使用中文,大写和npm

npm init
//简洁写法, 输入都采用默认值
npm init --yes
```

运行后会创建 package.json 文件  //一般放在根目录下           

```json
{
  "name": "1-npm",      #包的名字
  "version": "1.0.0",   #包的版本
  "description": "",    #包的描述
  "main": "index.js",   #包的入口文件
  "scripts": {			#脚本配置
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",			#作者
  "license": "ISC"		#版权声明
}
```

> ==注意生成的包名不能使用中文，大写 ！！！ 不能使用 npm 作为包的名字==

关于开源证书扩展阅读

<http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html>

#### <span style="color:blue">搜索包</span>

```sh
npm search jquery
npm s jquery
```



#### 工具包网站

```js
国外: https://www.npmjs.com/
```



#### 安装工具包

```sh
// devdependency 开发依赖
// dependency 生产依赖
// 命令行可以添加多个包 npm i chalk ludash

npm install jquery
npm i jquery //等效于npm install jquery --save

# 安装并在 package.json 中保存包的信息(dependencies 属性)
npm install jquery --save
npm install jquery -S

# 安装并在 package.json 中保存包的信息(devDependencies 属性) 主要用来保存一些开发依赖包,例如webpack
npm install babel --save-dev
npm install babel -D

```

>  6 版本的 npm ，安装包时会自动保存在 dependencies 中，可以不用写 --save





#### 全局安装

```sh
//package.json没有变化,对单个项目没有影响
//全局安装位置的查看命令: npm root -g 打印结果就是下面的文件夹
//安装位置: .../AppDate/Roaming/npm/node_modles
//会创建全局的命令: 


npm install less -g
npm install nodemon -g 

//nodemon包 作用/自动刷新页面 无需重启
nodemon xxx.js

```

全局安装一般用于安装==全局工具==，如 cnpm，yarn，webpack ，gulp等，全局命令的安装位置

```
C:\Users\你的用户名\AppData\Roaming\npm
```

> 全局安装命令在任意的命令行下, 都可以执行

#### 全局变量配置

```js
window电脑
环境变量的设置 path路径
```



#### 查询安装包

```js
1.查询全局是否安装过某个包
npm list 包名 -g

2.查询全局安装过的包
npm list -g --depth 0
```





#### 安装依赖

根据 package.json 中的依赖声明， 安装工具包.我们上传仓库的时候,是不会上传node_module中的文件的.所以下载后,需要在本地将package.json中的补充完整.

```sh
npm i //等价于install
npm install

npm i --production // 只安装 dependencies 属性中的依赖
```

#### 移除包

```sh
npm remove jquery
npm remove jquery chalk //可以在写法上移出多个包
```

#### 使用流程

```js
- 在页面中直接调用地址
1.下载到本地
2.页面中使用链接引入

- node环境下如何使用

//引入lodash包
const _=require('lodash');
console.log(_.random(1, 100));
//node调用js文件


- 其他:
包是存在依赖的,下载一个包,可能在下载了多个包
```



#### 团队开发使用流程

```js
# node_modules文件夹是不进入git仓库的,需要在.gitignore中忽略.
# 远端仓库 强推会覆盖远端仓库内容, 语法: git push -u origin master -f

1. 从仓库中拉取仓库代码 //git clone 远端地址
2. 运行 npm install 安装相关依赖 //npm i
3. 运行项目，继续开发


```







### 封装 NPM 包

创建自己的 NPM 包可以帮助代码进行迭代进化，使用步骤也比较简单

0. 修改为官方的地址 (npm config set registry https://registry.npmjs.org/) 使用非官方地址时才要(淘宝镜像才使用此步)

1. 创建文件夹，并创建文件 **index.js**， 在文件中声明函数，使用 module.exports 暴露
2. 文件夹下 npm 初始化工具包(npm init)，package.json 填写包的信息
3. 账号注册（激活账号）,==完成邮箱验证==
4. 文件夹下,命令行下 『npm login』 填写相关用户信息
5. 文件夹下, 命令行下『 npm publish』 提交包 👌

> npm 有垃圾检测机制，如果名字简单或做测试提交，很可能会被拒绝提交
>
> ==可以尝试改一下包的名称来解决这个问题==



### 升级npm包

升级 NPM 包，需要修改 package.json 中的版本号修改，只需要执行『npm publish』就可以能提交

1. 修改包代码
2. 修改 package.json 中版本号
3. npm publish 提交

### 删除 npm 包

```
npm unpublish 包名 --force
```

### CNPM

#### 介绍

cnpm 是淘宝对国外 npm 服务器的一个完整镜像版本，也就是淘宝 npm 镜像，网站地址:

* 旧地址 http://npm.taobao.org/  (2022.05.31到期)
* 新地址 https://npmmirror.com

#### 安装

安装配置方式有两种

* npm install -g cnpm --registry=https://registry.npmmirror.com
* alias cnpm="npm --registry=https://registry.npmmirror.com \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://registry.npmmirror.com/dist \
  --userconfig=$HOME/.cnpmrc"       (只能在Linux下使用)

#### 使用

配置完成后，就可以使用 cnpm 命令来管理包，使用方法跟 npm 一样

```sh
cnpm install lodash
```

#### npm 配置淘宝镜像地址

```sh
//查看配置的镜像
npm get registry

//淘宝镜像
npm config set registry https://registry.npmmirror.com
//官方镜像   
npm config set registry https://registry.npmjs.org/

```

> 在发布工具的时候, 一定要将仓库地址, 修改为官方的地址

### Yarn

#### 介绍

yarn 是 Facebook 开源的新的包管理器，可以用来代替 npm。

#### 特点

yarn 相比于 npm 有几个特点

* 本地缓存。安装过的包下次不会进行远程安装
* 并行下载。一次下载多个包，而 npm 是串行下载
* 精准的版本控制。保证每次安装跟上次都是一样的

#### 安装

##### yarn 安装: 命令行+安装包

只需要一行命令即可安装 yarn, 缺点:yarn全局命令不生效 解决:添加path变量

```sh
npm install yarn -g
```

##### msi 安装包安装

<https://classic.yarnpkg.com/en/docs/install#windows-stable>

#### 相关命令

yarn 的相关命令

1)  yarn --version //yarn -v

2)  yarn init  //生成package.json   

3)  yarn global add  packageName (全局安装)

​	全局安装路径 `C:\Users\你的用户名\AppData\Local\Yarn\bin`

4)  yarn global remove less (全局删除)

5)  yarn add packageName (局部安装)  //安装在当前文件夹下的node_modules文件夹

6)  yarn add package --dev (开发依赖 相当于npm中的--save-dev)

7)  yarn (global) remove package  移除命令

8)  yarn list //列出已经安装的包名 用的很少

9)  yarn info packageName //获取包的有关信息  几乎不用

10)  yarn //安装package.json中的所有依赖  和npm i的作用一样



> npm 5 引入离线缓存，提高了安装速度，也引入了 package-lock.json 文件增强了版本控制

yarn 修改仓库地址

```sh
yarn config set registry https://registry.npm.taobao.org
```

### CYarn

跟 npm 与 cnpm 的关系一样，可以为 yarn 设置国内的淘宝镜像，提升安装的速度. 基本上用不着

```sh
npm install cyarn -g --registry "https://registry.npm.taobao.org"
```

配置后，只需将yarn改为cyarn使用即可

### bower

```js
下载后,使用link标签引用
```



### 局部装和全局安装

```js
- 局部安装较多
- 全局安装(特定的)有: cnpm nodemon 
```







### 附录

### 关于版本号

版本格式：主版本号.次版本号.修订号

* "^3.0.0" ：锁定主版本，以后安装包的时候，保证包是3.x.x版本，x默认取最新的。
* "~3.2.x" ：锁定小版本，以后安装包的时候，保证包是3.1.x版本，x默认取最新的。
* "3.1.1" ：锁定完整版本，以后安装包的时候，保证包必须是3.1.1版本。

安装指定版本的工具包

```shell
yarn add jquery@1.11.2
```

#### npm 清除缓存

```
npm cache clean
```







### 模块化

#### 组件化好处

```
1.复用性
2.维护性
```



### 介绍

模块化指的就是将一个大的功能拆分为一个一个小的模块，通过不同的模块的组合来实现一个大功能。

- 在node中一个 js 文件就是一个模块
- 模块内部代码对于外部来说都是不可见的，可以通过两种方式向外部暴露

### 模块创建

```js
在模块JS文件中使用module_exports暴露需要引入的对象
```



在文件中对外暴露的两种方法: **module_exports=模块  exports.模块**

```js
function test(){
    return 11;
}

//exports=module.exports={
//一个对象
module.exports = test;
}

//多个对象 ES6对象语法=
module.exoprts={
    test,
    test2
}
=========第二种==============
exports.test=test;
exports.test2=test2;
```

这里有几点注意：

* module.exports 可以暴露任意数据
* 可以使用 module.exports 暴露多个数据
* exports 也可以暴露数据，不过不能使用 `exports = xxx` 的形式
* require返回的是目标模块module.exports的值





### 模块引入

使用 require 引入文件即可

```js
var test = require('./test.js');  
//路径问题: 引入文件时, 无需使用绝对路径.写相对路径就可以,即使更改位置,也不会产生影响.
//require 返回的是目标模块 module.exports 的值
原始多个类型
```

这里有几点注意：

* 如果没有加文件后缀，会按照以下后缀的**顺序**来加载文件
  * .js    fs模块同步读取文件编译执行
  * .json  fs模块同步读取文件，用JSON.parse()解析返回结果. 必须使用双引号,最后一个不写逗号
  * .node 这是c/c++编写的扩展文件，通过dlopen()方法编译
* 其他扩展名  会以.js文件载入
* 如果是文件夹则会默认加载该文件夹下 package.json 文件中 main 属性对应的文件   npm init --yes
* 如果 main 属性对应的文件不存在，则自动找 index.js  index.json 
* 如果是内置模块或者是 npm 安装的模块，直接使用包名字即可 //例如http, fs
* npm 引入包时，如果当前文件夹下的 node_modules 没有，则会自动向上查找

### 简化

引入

```js
下载到本地的包 了解

const _ = require('./node_modules/lodash/lodash.js');
const _ = require('./node_modules/lodash/');
```



导出

```
module.exports       
```

导入

```
var res = require('./module.js');
var name=require('name');
```





## express框架



```
- 路由和静态资源同时存在, 谁在前面使用谁
```





### express介绍及初体验

```
Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你快速创建各种 Web 和移动设备应用。
简单来说Express就是运行在node中的用来搭建服务器的模块。
```



```js
//1.安装express
 npm i experss --yes //非中文文件夹下 快捷命令安装
//2.引用express
const express=require('express');
//3.创建应用对象
const app=express();
//4.创建路由规则
app.get('/', (request, response)=>{
    response.end('hello express');
})
//5.监听端口
app.listen(80, ()=>{
    console.log(80端口监听,服务启动);
})
```



### express路由功能

#### 什么是路由

```
路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。
路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成的。
```



#### Route定义

```
我们可以将路由定义为三个部分：
第一部分：HTTP请求的方法（get或post）
第二部分：URI路径
第三部分: 回调函数
```





#### 路由的实现

```
app.<method>(path，callback) 
语法解析：
method指的是HTTP请求方法，比如：
app.get()
app.post()
path指要通过回调函数来处理的URL地址
callback参数是应该处理该请求并把响应发回客户端的请求处理程序

```



#### Route运行流程

```
当Express服务器接收到一个HTTP请求时，它会查找已经为适当的HTTP方法和路径定义的路由
如果找到一个，Request和Response对象会被创建，并被传递给路由的回调函数
我们便可以通过Request对象读取请求，通过Response对象返回响应
Express中还提供了all()方法，可以处理两种请求。
```



#### Request对象

```
Request对象是路由回调函数中的第一个参数，代表了用户发送给服务器的请求信息
通过Request对象可以读取用户发送的请求包括URL地址中的查询字符串中的参数，和post请求的请求体中的参数。
```



#### Request对象属性和方法

```js
属性/方法	描述
request.query	获取get请求查询字符串的参数，拿到的是一个对象
request.params	获取get请求参数路由的参数，拿到的是一个对象
request.body	获取post请求体，拿到的是一个对象（要借助一个中间件）
request.get(xxxx)	获取请求头中指定key对应的value
```



#### Response对象

#### response对象是什么

```
Response对象是路由回调函数中的第二个参数，代表了服务器发送给用户的响应信息。
通过Response对象可以设置响应报文中的各个内容，包括响应头和响应体。
```



#### Response对象的属性和方法

```
属性/方法	描述
response.send()	给浏览器做出一个响应
response.end()	给浏览器做出一个响应（不会自动追加响应头）
response.download()	告诉浏览器下载一个文件
response.sendFile()	给浏览器发送一个文件
response.redirect()	重定向到一个新的地址（url）
response.set(header,value)	自定义响应头内容
res.status(code)	设置响应状态码
```





```js
//服务端进行请求报文比对的时候,比对的是URL的路径部分,不涉及查询字符串的比对
//其他类型请求: delete, put等
//4.创建路由规则
app.get('/', (request, response)=>{
    response.end('hello express');
})

//post请求需要依赖form表单的提交行为 method=post
app.post('/login', (request, response)=>{ // /login?name=aa&age=18  依然能返回end中的内容
    response.end('hello login');
})

//app.all 不区分请求方法的路由规则
app.all('/login', (request, response)=>{ // /login?name=aa&age=18  依然能返回end中的内容
    response.end('hello login');
})

//404配置  通配符*号
app.all('*', (request, response)=>{ // /login?name=aa&age=18  依然能返回end中的内容
    response.end('404 Not Found');
})

```



### express请求报文参数获取

```js
//1.安装express
 npm i experss --yes //非中文文件夹下
//2.引用express
const express=require('express');
cosnt url=require('url');
//3.创建应用对象
const app=express();
//4.创建路由规则
app.get('/req', (request, response)=>{
    //获取参数
    
    //获取请求类型
    console.log(request.method);
    //获取URL
    console.log(request.url);
    //获取路径 没有必要, 路径就是/req
    console.log(url.parse(request.url, true).pathname)
    //查询字符串
    console.log(request.query);
    //获取请求头信息
    console.log(request.headers);
    //获取请求头中指定key对应的value
    console.log(request.get('host'));
    response.end('hello express');
})
//5.监听端口
app.listen(80, ()=>{
    console.log(80端口监听,服务启动);
})
```



### express路由参数的获取

```js
-params
- 使用冒号+id(:id)的方式来占位
app.get('/:id.html', (request, response)=>{
    let id=request.parames.id;//params返回的一个对象例如{id:'2020'};
    response.send(`id为${id}的信息`);//end方法变成send方法,自动添加响应头
})
```



### express响应设置

```js
app.get('/res', (request, response)=>{
    //设置响应
    response.statusCode=205;//原生
    response.status(205);//express框架
    
    //设置响应状态字符串
    response.statusMessage='bac';
    
    //设置响应头
    response.set('name', 'bac');
    
    //设置响应体
    response.write('dd');//原生
    response.end('dd');//原生
    response.send('dd')//express 自动添加响应头信息
   
    //文件下载
    response.download('./package.json'); //访问 直接下载
    
    //文件内容的响应 需要绝对路径  像readfile+end结合
    response.sendFile(__dirname+'./package.json')
    
    //重定向
    response.redirect('https://www.baidu.com');
    
    response.send('hell res');
})
```



### 表单页面显示与表单提交

```js
//URL请求login.html,返回login.html页面
//表单显示与表单提交是两个请求

app.get('/login', (request. response)=>{
    response.sendFile(__dirname+'/login.html')
})

app.post('/login', (request, response)=>{
    response.send('登录成功');
})


===========================================
<body>
    <form action="http://127.0.0.1/login" method='post'>
        
    </form>
</body>
    
```





### 中间件介绍及初体验

#### 中间件简介

```
Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。
中间件（Middleware） 是一个函数，它可以访问请求对象（request）, 响应对象（response）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。
```



#### 中间件的功能

```
1)	执行任何代码。
2)	修改请求和响应对象。
3)	终结请求-响应循环。
4)	调用堆栈中的下一个中间件。
```



#### 中间件的分类

```
1)	应用级中间件（过滤非法的请求，例如防盗链）
2)	第三方中间件（通过npm下载的中间件，例如body-parser）
3)	内置中间件（express内部封装好的中间件）
4)	路由器中间件 （Router）
```



```js
中间件是一个函数
//请求: 每个请求都输出时间戳 Date.now()
//需要在每个请求中添加console.log(Date.now())
//把公共的重复代码封装到函数内部

//每一次http请求到来后,都会先执行中间件函数代码,再去执行路由里的回调代码

const express=require('express');
const app=express();
//1.声明中间件函数. 有3个参数,request(请求对象) response(响应对象) next(指针变量)
let outputTime=function(request,response,next){
    //输出当前时间戳
    console.log(Date.now());
    //调用next函数
    next();//指向下一个回调函数. http-->中间件函数-->next->下一个回调函数
}

//2.使用中间件
app.use(outputTime);

app.get('/', (request, response)=>{
    response.end('hello express');
})

app.listen(80, ()=>{
    console.log(80端口监听,服务启动);
})
```



### 案例-请求日志中间件的封装

```js
//全局中间件 每个请求到来后都会经过这个函数

const express=require('express');
const app=expess();
let moment=require('moment');
let fs=require('fs');

let output=function(request, response, next){
    let time=moment().format('YYYY-MM-DD HH:mm:ss');
    let path=decodeURI(request.url); //decodeURI 将网址中的汉字转码为可识别
    let str=`[${time}] path \r\n`;
    fs.writeFileSync('./access.log', str, {flag:'a'});
    
    next();
      
}

//使用全局中间件
app.use(output);

app.get('/home', (request, response)=>{
    response.end('home ok');
})

app.get('/admin', (request, response)=>{
    response.end('admin ok')
})
```





### 路由中间件

```js
//路由中间件 函数在某些规则或路由中才有效  使用场景:检查用户登录的状态或权限

//网址中有参数才可以访问
//需求:网站中的参数需要有1才能返回正确页面,否则返回错误页面
====================没有中间件的写法============================
app.get('/admin?vip=1',(request, response)=>{
    if(request.query.vip===1){
        response.send('后台首页');
    }else{
        response.send('没有权限');
    }
} )


app.get('/setting?vip=1',(request, response)=>{
    if(request.query.vip===1){
        response.send('设置页面');
    }else{
        response.send('没有权限');
    }
} 
        
===================路由中间件的写法===========================
 let checkpage=function(request, response, next){
    if(request.query.vip===1){
        next();
    }else{
        response.send('没有权限');
    }
}
//路由中间件的设置: 把函数放在路由规则的第二个参数里
app.get('/admin', checkpage, (request, response)=>{
   response.send('登录页面');
})        
```











### 静态资源响应与路由响应

```js
- 如果是静态资源(HTML,css,js,图片,多媒体. 长时间不会改变) 使用静态资源static响应 
- 如果是动态资源(首页) 使用路由响应

express内置中间件:静态资源服务


const express = require('express');
cosnt app = express();

//1. 使用中间件(静态资源服务) 参数是网站根目录的路径
app.use(express.static(__dirname+'/public'))

app.listen(80);

//2. 在根目录下新建public文件夹,以下新建index.html文件

//3. 访问localhost/index.html 访问成功
```





### 请求体获取-中间件body-parser

```js
- body-parser

//1.引入body-parser包

const express=require('express');
const bodyParser=require('body-parser');

const app=express();

//2.使用中间件 专门针对表单内容进行解析
app.use(bodyParser.urlencodeed({extened:false}))

//3.路由规则. 如果获取:使用表单页面访问/login网址
app.post('/login', (request, response)=>{
    //3.获取请求体的数据
    console.log(request.body);//打印请求体数据
    response.end('登录');
    
})

//5.监听端口 启动服务
app.listen(80, ()=>{
    console.log('服务启动, 80端口正监听');
})
```





### 路由器的介绍与实践

```js
========================入口文件============================
const express=require('express');
const app=experss();
//1.引入路由器规则
const homeRouter=require('./router/homeRouter');
const adminRouter=require('./router/adminRouter');
//2.使用该路由的中间件
app.use(homeRouter);
app.use(adminRouter); //代码从上到下执行,如果homeRouter中的路由规则有通配符,则不会执行下面的

app.listen(80, ()=>{
    console.log('server is working, 80port is listening');
})




=================路由文件 homeRouter.js===================
//router文件夹下homeRouter.js文件

const express=require('expess');
//创建路由器对象
const router=express.Router();

//
router.get('./home', (request, response)=>{
    response.end('hello express');
})

router.get('./login', (request, response)=>{
    response.end('登录页面');
})

//对外暴露
module.exports=router;

===================路由文件 adminRouter.js====================
const express=require('express');
const router=express.Router();

router.get('./admin', (request, response)=>{
    response.send('后台登录页面');
})
router.get('./logout', (request, response)=>{
    response.send('退出成功');
})

module.exports=router;


    
```





### ejs 模板引擎

#### EJS的使用

```js
1.下载安装
npm i ejs --save
2.配置模板引擎
app.set('view.engine', 'ejs');
3.配置模板的存放目录
app.set('views','/views'); //后面路径名称没有固定要求
4.在views目录下创建模板文件
xxx.ejs
5.使用模板,通过response来渲染模板
response.render('模板名称',{数据对象})


esj不认识HTML注释
作用: 为了分离数据和页面而产生的

- ejs中的两种语法标记
 <%= %> 输出变量
 <% %> 语法标记
```





```js
//1.安装ejs模块
//2.引入ejs包
//3.调用ejs中的render方法进行数据编译

==============第一种=============================
let title='枫桥夜泊';  //变量要和对象中的属性名同名
const ejs=require('ejs');
ejs.render('<h1><%= title %></h1>', {title:title})
//render方法第一个参数:字符串,第二个参数:对象
// 使用<%= %> 符号来赋值, 没有等于号相当于模字符串
console.log(result);

===============第二种==============================
const fs=require('fs');
    
let str=fs.readFileSync('./ejs/index.html').toString();
let result = ejs.render(str, {title:title});

console.log(result);


     
```



### ejs的遍历和判断

```js
//将数组中的值用ul和li标签拼在一起

====================字符串和js同处于一个文件===============================
const express=require('express');
const ejs=require('ejs');

let fruit=['apple', 'banner', 'pear', 'peach'];

//1.准备字符串
let str=`
	<ul>
		<% for(let i=0; i<fruit.length; i++){ %>
			<li> <%= fruit[i] %> </li>
		<% } %>
	</ul>
`

let result=ejs.render(str, {fruit:fruit});


=========================字符串放置在其他文件=============================
    
const express=require('express');
const ejs=require('ejs');
cosnt fs=require('fs');

let title='我喜爱的水果';
let str=fs.readFileSync('./ejs/index.html').toString();
let result=ejs.render(str, {fruit, fruit, title:title});

console.log(result);
```





### express框架中使用ejs

```js
//不需要引入ejs

=================JS执行文件======================
const exprss=require('express');
cosnt app=express();

//1.设置模板引擎 view engine与ejs与views是固定的值,'./views'是模板存放的位置 模板:具有ejs语法的文件

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (request, response)=>{
    response.send('首页');
})

app.get('/test', (request, response)=>{
    //显示一个页面
    let title='that is work';
    //创建模板 模板的后缀一定是ejs
    //3. 解析编译模板
    response.render('test', {title:title});//第一个参数需要和views中模板的名字保持一致,无需前缀;第2个参数是数据对象
    
})


app.listen(80, ()=>{
    console.log('server is running');
})




======================views模板文件views====test.ejs=====================
//注意模板文件的文件类型 ejs    
    
<h1><%= title %> </h1>    
```





### 电影网站

```js
//需求: 通过GET访问/movie/1.html 来显示页面

- 文件夹 movie/data.json,server.js
- 文件夹 
```



```js
- data.json

{
    'movies':[
        {
            "id":1,
            "name": "无间道",
            "intro": "无间道是一部关于警匪的电影",
            "path": "/movies/无间道.mp4",
            "pos": "香港",
            "type": "警匪",
            "tags": ["警匪","动作"]
        },
        {
            "id":2,
            "name": "无间道2",
            "intro": "无间道是一部关于警匪的电影",
            "path": "/movies/无间道.mp4",
            "pos": "香港",
            "type": "警匪",
            "tags": ["警匪","动作"]
        },
        {
            "id":3,
            "name": "无间道3",
            "intro": "无间道是一部关于警匪的电影",
            "path": "/movies/无间道.mp4",
            "pos": "香港",
            "type": "警匪",
            "tags": ["警匪","动作"]
        }
    ]
}
```



```js
- require与fs.readFile的区别:
require JSON 文件返回的结果是对象
readFile JSON 文件返回的结果是Buffer

- server.js

const exprss=require('express');
const app=express();
const data=require('./data.json');

//开启静态资源服务
app.use(express.static(__dirname+'/public'))
//设置ejs
app.set('view engine', 'ejs');
app.set('views', './views')

function getMovieInfo(id){
    //遍历数组  其中的id是个字符串
    for(let i=0; i,data.length; i++){
        if(Number(id)===data.movies[i].id){
            return data.movies[i];
        }
    } 
    return false;
}

app.get('/movie/:id.html', (request, response)=>{
    //获取id
    let id=request.params.id;
    
    //获取电影的详细信息 封装一个函数来获取
    let moviesInfo=getMovieInfo(id);
    
    
    //使用ejs显示模板内容
    response.render('detail', {moviesInfo});//模板的名字, 数据
    
})

app.listen(80);
```



```html
- 电影详情页 detail.html


```



```js
- 文件夹views下的detail.ejs

<link href='/css/app.js'> //绝对路径,要在根目录下查找文件
```



### 会话控制cookie

> HTTP协议是一个无状态协议,它无法区分多次请求是否发送自同一客户端.而我们在实际运用中却又有大量这种需求, 我们通过**会话(session)的控制**来解决该问题.



#### cookie是什么

```
cookie本质是一个存储在浏览器的文本,随着http请求自动传递给服务器.
也可以说cookie是一个请求头(响应头):
服务器以响应头的形式将cookie发送浏览器
浏览器收到以后自动将cookie保存
浏览器再次访问服务器时, 会以[请求头]的形式将cookie发回.
```



#### cookie的不足

```
各个浏览器对cookie的数量和大小都有不同的限制，这样就导致我们不能在Cookie中保存过多的信息。一般数量不超过50个，单个大小不超过4kb。
cookie是由服务器发送给浏览器，再由浏览器将cookie发回，如果cookie较大会导致发送速度非常慢，降低用户的体验
1.
2.
```



#### 框架下cookie的使用

```js
通过配置cookie-parser中间件,可以将cookie解析为一个对象,并且添加为response的cookie属性.
使用步骤:
//1.下载安装包
npm i cookie-parser -S

//2.引入
const express=require('express');
var cookieParser=require('cookie-parser');
//3.设置中间件
app.use(cookieParser());

app.get('/set-cookie', (requset, response)=>{
    //4.创建cookie的两种方式:区别在于参数个数,生命周期
    //格式: response.cookie('参数1','参加2',留存时间对象) 
    //设置后,浏览器端的Response-Headers中会多出一个响应头Set-Cookie.Request-Headers多出一个Cookie的请求头
    //Request-Headers: Cookie:name=xiaohigh
    //Response-Headers:Set-Cookie: name(参数1)=xiaohigh(参数2); Path=/
    
    response.cookie('username', 'sunwukong', {maxAge:60*60*24*1000});
    response.cookie('name', 'xiaohigh', {maxAge:60*1000}) //声明周期 60秒*1000毫秒
})       
    
    //5.获取cookie  
    app.get('/get-cookie', (request, response)=>{
    	conole.log(request.cookies); //服务端
    	response.send('获取cookie'); //cookie设置是对响应头进行设置,响应体没有内容.所以需要send.不设置会一直页面会一直请求.
	})  

//5.删除cookie
app.get('/clearcookie', (request, response)=>{
    response.clearCookie('username')//用来删除一个指定的cookie
})
app.listen(80);



- 格式补充:
set-cookie 是服务器响应cookie
- path=/
path路径,设置该cookie生效的路径
/ 表示根目录
domain 该cookie生效的域名 例如baike.baidu.com

- 声明周期
1.设置时间的cookie
结束时间:设置的时间周期
2.未设置时间的cookie
结束时间:关闭浏览器.但若还在相应时间范围内,带声明周期的cookie会存在.




```

#### cookie的查看

```
浏览器中如何查看

Chrome-设置-使用搜索框搜索'cookie'
```





### session

> Session 是一个对象，存储特定用户会话所需的属性及配置信息。Session是保存在服务器端的数据.（保存介质， 文件、数据库、内存）



#### session工作流程

```
我们可以在服务器中为每一次会话创建一个对象，然后每个对象都设置一个唯一的id，并将该id以cookie的形式发送给浏览器(响应头中查看)，然后将会话中产生的数据统一保存到这个对象中，这样我们就可以将用户的数据全都保存到服务器中，而不需要保存到客户端，客户端只需要保存一个id即可。
```





#### 框架下session使用

```js
查看使用:npmjs.com网站

//1.下载安装
npm i express-session

//2.引入模块
var session=require('express-session');

//3.中间件设置
app.use(session({
    name:'id22',          //设置cookie的name,默认值是connect.sid
    secret: 'keyboard cat', //参与加密的字符串(又称签名)
    resave: false,         //是否在每次请求时重新保存session
    saveUninitialized: true, //是否每一个客户端都进行初始化 是否为每次请求都设置一个cookie用来储存session的id.建议使用true,虽然初始默认值是false.
    //cookie:{secure:true}  //需要证书
    //设置cookie
    cookie:{
        httpOnly:true, //开启权限,前后端无法无法通过JS操作
        maxAge:1000*30 //控制sessionID的过期时间的.
    }
}))

//4.设置session 
//session的存储位置: 内存. 放在内存中的特点: 重启之后session会丢失
app.get('/set-session', (request, response)=>{
    request.session.name='xiaohigh';
    request.session.email='xiaohigh@qq.com';
//浏览器请求此页面之后,在Response-Headers中有Set-Cookie,其值有connect-id及加密值,path路径,HTTPOnly(表明该cookie只能进行HTTP请求使用,表明该cookie不允许浏览器使用JS修改cookie. 通常可使用document.cookie获取当前浏览器的cookie).  
    response.send('session的设置');
})

//5.获取session
app.get('/get-session', (request, response)=>{
    console.log(request.session.name);
    console.log(request.session.email);
    
    response.send('获取session');
})

//6.删除session
app.get('/clear-session', (request, response)=>{
    request.session.destroy(function(){
        response.send('session删除成功');
    })
})

app.listen(80);

```





### cookie与session的区别

```
1)	存在的位置：
cookie 存在于客户端
session 存在于服务器端，一个session域对象为一个用户浏览器服务
2)	安全性：(https证书)
cookie是以明文的方式存放在客户端的，安全性较低，可以通过一个加密算法进行加密后存放
session存放于服务器中，所以安全性较好
3)	网络传输量：
cookie会传递消息给服务器
session本身存放于服务器，但是通过cookie传递id，会有少量的传送流量
4)	大小：
cookie 保存的数据不能超过4K，很多浏览器都限制一个站点最多保存50个cookie
session 保存数据理论上没有任何限制

```







## MongoDB(x)



