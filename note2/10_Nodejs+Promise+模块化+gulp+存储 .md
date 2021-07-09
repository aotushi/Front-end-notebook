### NodeJS简介

#### 介绍

```
Node.js是一个基于Chrome v8引擎的JavaScript运行环境, 是一个应用程序.
官网: https://nodejs.org/en  
```

#### 作用

```
* 解析运行JS代码
* 操作系统资源,如内存,硬盘,网络
```

#### 应用场景

```
- app接口服务
- 网页聊天室
- 动态网站,个人博客, 论坛,商城等
- 后端的web服务,例如服务器端的请求（爬虫），代理请求（跨域）
- 前端项目打包(webpack,gulp)
```

#### 使用

```
https://npm.taobao.org/mirrors/node

Nodejs 的版本号奇数为开发版本，偶数为发布版本，我们选择偶数号的 LTS 版本（长期维护版本 long term service）

安装完成后，在 CMD 命令行窗口下运行 node -v，如显示版本号则证明安装成功，反之安装失败，重新安装。
```

#### 注意

```
在 nodejs 环境下，不能使用 BOM 和 DOM ，也没有全局对象 window，全局对象的名字叫 global
```

#### 安装及环境变量配置

来源:https://zhuanlan.zhihu.com/p/86241466

1.官网下载安装

2.安装时注意修改安装目录，建议放在非C盘目录下，一路默认安装即可

3.安装完成后启动命令行工具，输入 `node -v``npm -v` 查看安装版本，出现提示版本信息即为安装成功



**环境变量配置**

>  说明：这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似：npm install 模块名 [-g] 的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，占C盘空间。
> 本文是将 `nodejs` 安装在 `D:\soft\nodejs` 目录下,以下操作可根据实际安装目录情况进行对应调整。



1. 在安装目录下，如 `D:\soft\nodejs` 新建两个文件夹 `node_global`(全局包存放目录) 和 `node_cache`(缓存目录)；
2. 打开命令行工具，执行以下两句操作： `npm config set prefix "D:\soft\nodejs\node_global"``npm config set cache "D:\soft\nodejs\node_cache"`；
3. 配置环境变量：

- 打开系统属性-高级-环境变量，在系统变量中新建 变量名：`NODE_PATH`,变量值：`D:\soft\nodejs\node_global\node_modules`（见图2）;
- 编辑用户变量的 `path`，将默认的 `C` 盘下 `APPData/Roaming\npm` 修改为 `D:\soft\nodejs\node_global`（见图3）；
- 保存即可









### NodeJS初体验

#### 编写JS代码

```js
- 文件的名字不能写成node.js
```

#### Node运行js文件

```js
1.打开命令行
2.使用cd和dir命令,将命令行工作目录定位到文件位置// (dir查看文件, 盘符: 移动到相应盘下, cd 名字: 移动到相应文件名下)
3.运行文件 node 名字.js

========
快速打开文件夹
一.利用命令行
1.资源管理器中打开指定文件夹
2.路径导航-点击-可编辑
3.输入cmd

二.利用编辑器
集成终端中打开

==============================
node中不能运行BOM和DOM. 使用全局对象global
```





#### 练习题

```js
- 输出1-10 横向输出
编写js文件

for(let i=1; i<11; i++){
    a=a.concat(i+' ');//str += i+' ';
}
console.log(a);

- 在控制台输出如下符号(没有数字)
*               1 
***             3
*****           5
*******         7
*********       9

for(let i=0; i<5; i++){
    let str='';
    for(let j=0; j<2*i+1; j++){
        str += '*';
    }
    console.log(str);
}

- 在控制台输出如下符号:
    *          1 
   ***         3
  *****        5
 *******       7
*********      9

let str='';
for(let i=0; i<5; i++){
    for(let m=0; m<5-i; m++){
        str += ' ';
    }
    for(let j=0; j<2*i-1; j++){
        str += '*';
    }
    str += '\r\n';
}
console.log(str);

- 99乘法表
1*1=1
1*2=2  2*2=4  
1*3=3  2*3=6  3*3=9
1*4=4  2*4=8  3*4=12   4*4=16

for(let i=1; i<=9; i++){
    let str='';
    for(let j=1; j<=i; j++){
        str += `${j}*${i}=${i*j} `;
    }
    console.log(str);
}
```





### buffer缓冲器

#### 介绍:

> Buffer是一个和数组类似的对象,不同的是buffer是专门用来保存二进制的数据的.



#### 特点

* 大小固定: 在创建时就确定了,且无法调整
* 性能较好: 直接对计算机内存进行操作
* 每个元素大小为1个字节(byte).//1个字节对应8个二进制位,存储的数值范围是0~255.



#### 创建

```js
3种方式:
let buf_1=Buffer.alloc(10);//创建一个长度为10个字节的Buffer
let buf_2=Buffer.allocUnsafe(10);//申请空间, 但是不对内存初始化 速度会稍微慢一些
let buf_3=Buffer.from('字符串');//把字符串内容保存起来了 保存的是字符对应的ascii码表对应的数字

console.log(buf_3);//<Buffer e5 ad 97 e7 ac a6 e4 b8 b2>
//为什么是9位?  一个utf-8的中文字符占3个字节.
```





#### 读取和写入

```js
可以直接通过 [] 的方式对数据进行处理，可以使用 toString 方法将 Buffer 输出为字符串
- [ ] 对 buffer 进行读取和设置
- toString 将 Buffer 转化为字符串

console.log(buf_3[0])//索引读取
console.log(buf_3.toString());//转换成字符串读取

//例子
buf_3[0] = 120;
conole.log(buf_3.toString());//
```



#### 溢出

```js
溢出的高位数据会舍弃

buf_3[0]=365;
console.log(buf_3.toString());//
溢出后,高位舍弃 高于8位的数字都舍弃.例如‭0001 0110 1101‬  => 0110 1101‬
```



#### 单位换算

```js
一个 UTF-8 的中文字符大多数情况都是占 3 个字节

let buf_4=Buffer.from('我爱你');
console.log(buf_4);//log: 只有9位

1Bit 对应的是 1 个二进制位
8 Bit = 1 字节（Byte）
1024Byte = 1KB 
1024KB = 1MB
1024MB = 1GB
1024GB = 1TB
平时所说的网速 10M 20M 100M 这里指的是 Bit ，所以理论下载速度 除以 8 才是正常的理解的下载速度 ?
https://www.zhihu.com/question/21271444
单位不同.
100M带宽,这里的M实际上是Mbps,也就是Mbit/s,兆比特每秒而非兆字节每秒.
上传和下载速度,M指的是MB(兆字节),1MB=1024kb,1kb=1024Byte,1Byte=8bit.

比如100M的宽带: 100Mbit/s=12.5MByte/s
```





### 文件系统fs

> 全称file system,是nodejs



#### 文件简单写入

```js

- 简单写入
fs.writeFile(file, data, [,option], callback)
fs.writeFileSync(file, data);
options选项:
encoding默认值:utf-8
mode默认值:0o666
flag默认值:w

-流式写入
fs.createWriteStream(path, [,option])
options:
flag默认值w
encoding默认值utf-8
mode默认值0o666
```



```js
1.引入fs模块
const fs=require('fs');//require 内置函数.

2.调用方法写入文件 './'表示当前文件夹;绝对路径写入: d:/文件夹/文件.类型
fs.writeFile();


语法:fs.writeFile('路径+目标文件', '内容', 回调函数);
实现:fs.writeFile('路径+目标文件', '内容', err=>{
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
})
======================
flag a:append w:write r:read  默认是w

fs.writeFile('文件名路径', 内容, {flag: 'a'}, err=>{
    if(err) throw err;  //if/else语句,代码块只有一条语句,大括号可省略
});
```



#### 文件简单写入同步API

```js
- 同步API 执行顺序和编写顺序是一致的

fs.writeFileSync(路径, Date.now());
console.log(Date.now());
```





##### d盘下写入文件

```js
前提: 
- 不能直接在c盘的根目录下写入文件.权限的默认设置
- 文件路径包含没有创建的文件夹,写入会失败的.

let fs=require('fs');
fs.writeFile('d:/index.html', 'content', err=>{
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
})
```



#### 读取和写入场景

```js
当需要持久化保存数据的时候, 想到'写入文件'
```





#### 写入流写入文件

```js
1.引入fs模块
2.调用方法,创建写入流对象
3.调用方法写入内容
4.关闭写入流

const fs=require('fs');
const ws=fs.createWriteStream('目录');
ws.write('*{margin:0;padding:0}\r\n');  \\转义字符,\r回车  \n换行
ws.write('body{height:100vh;background:#98c}');
ws.close();
```



#### 写入文件的两种方式比较

```js
writeFile 简单写入,应对简单的内容写入,次数较少

createWriteStream 应对批量内容写入
```



### 文件读取

```js
- 步骤:
1.引入fs模块
2.调用方法,读取文件内容

const fs=require('fs');
fs.readFile('路径', (err, data)=>{
    if(err) throw err;
    console.log(data.toString());//需要使用toString()方法,data是buffer文件
})



- 注意事项:
路径中的斜杠 使用转义字符: 再次转义
```



#### 文件读取同步API

```js
- 读取文件,同步API  阻塞线程,效率低
let result = fs.readFileSync('路径');
console.log(result.toString());
```







#### 流式读取文件

```js
1.引入fs模块
2.创建读取流对象
3.绑定事件 //每读取一段数据(64kb)触发一次

const rs=fs.createReadStream('路径');
rs.on('data', chunk=>{ 
    console.log(chunk.toString()); //案例中的音频里是二进制数据,toString看不到里面的原始内容,读取内容无意义.chunk文件是buff格式
    console.log(chunk.length);//每次打印的是65536(64kb)
});


65536 就是64kb 256*256
1kb


//读取流创建打开的时候
rs.on('open', ()=>{console.log('读取流打开了')})

//读取流关闭的时候触发
rs.on('close', ()=>{console.log('读取关闭了')})

//与close对应的事件,类似
rs.on('end', ()=>{console.log('读取流结束了')});
```



#### 读取文件方式选择

```js
对于小文件 readFile
对于大文件 createReadStream

使用场景:

```





#### 移动文件+重命名

```js
1.引入fs模块
2.移动文件


//移动
fs.rename('目标文件位置', '移动到的文件位置/同路径下的新名字', err=>{
    if(err) throw err;
    console.log('移动成功')
})

//重命名
fs.rename('目标文件位置', '移动到的文件位置newname',err=>{
    if(err) throw err;
    console.log('重命名成功');
})


```



#### 移动+重命名同步API

```js

renameSync

fs.renameSync()
```





#### 删除文件

```js
1.引入fs模块
2.删除 //不会进回收站,直接删除的

fs.unlink('要删除的文件路径', err=>{
    if(err) throw err;
    console.log('删除成功')
})


```



#### 删除文件同步API

```js
同步API
fs.unlinkSync('./project/index.html', err=>{
    if(err) throw err;
    console.log('删除成功');
})
```





### 文件夹操作

```js
const fs = require('fs');
//创建文件夹
fs.mkdir('路径', err=>{
    if(err) throw err;
    console.log('创建成功');
})

//读取文件夹 使用场景:搜索
fs.readdir('路径', (err, data)=>{
    if(err) throw err;
    console.log(data);//data文件夹下的文件列表,可以读其他盘
})

//删除文件夹
fs.rmdir('目录路径', err=>{
    if(err) throw err;
    console.log('删除成功');
})

//非空文件夹删除 添加参数 recursive:递归
fs.rmdir('目录路径', {recursive:true}, err=>{
    if(err) throw err;
    console.log('删除成功');
})
 
```



#### 创建文件夹场景

```js
安装软件 网盘
```



### 路径

```js
相对路径: 
./  当前文件所在的文件夹
../ 所在文件所处的上一级目录

绝对路径:
//1.  D:/文件夹/文件夹
//2. 以斜杠开头的路径也是绝对路径.: linux下斜杠表示根目录 /usr/share/local
```



#### 案例

```js
- 在d盘下创建project文件夹,包含css(app.css),js(app.js),images(logo.png),index.html文件.

const fs=require('fs');

//同步写法
fs.mkdirSync('d:/project');
fs.mkdirSync('d:/project/css');
fs.mkdirSync('d:/project/js');
fs.mkdirSync('d:/project/images');

fs.writeFileSync('d:/project/index.html', '');
fs.writeFileSync('d:/project/css/app.css', '');
fs.writeFileSync('d:/project/js/app.js', '');
fs.writeFileSync('d:/project/images/logo.png', '');



//异步写法
fs.mkdir('d:/project', err=>{
    if(err) throw err;
   
    
    fs.mkdir('d:/project/css', err=>{
        if(err) throw err;
        fs.writeFile('d:/project/css/app.css', '',  err=>{
            if(err) throw err;
            console.log('yes');
        })
    });
    
    fs.mkdir('d:/project/js', err=>{
        if(err) throw err;
        fs.writeFile('d:/project/js/app.js', '',  err=>{
            if(err) throw err;
            console.log('yes');
        })
    });
    
    fs.mkdir('d:/project/images', err=>{
        if(err) throw err;
        fs.writeFile('d:/project/images/logo.png', '',  err=>{
            if(err) throw err;
            console.log('yes');
        })
    })

    fs.writeFile('d:/project/index.html','', err=>{
        if(err) throw err;
        console.log('yes');
    });
});
```





### 路径问题 +dirname

```js
node中, fs模块中的相对路径和平常的相对路径不同:
./ ../ 相对的都是执行命令时所在的工作目录.

改进:
相对路径转绝对路径
# 全局特殊变量: __dirname, 始终保存的是当前执行文件所在文件夹的绝对路径.
作用:将相对路径可以拼接成绝对路径,使每一次运行的结果,都是一致的.

案例: 
fs.writeFile(__dirname+'/app.js', 内容, 回调函数)
```





### stat  查看文件状态

```js
方法: 用来查看文件的状态

const fs = require('fs');

fs.stat(__dirname+'/index.html', (err, stats)=>{
    if(err) throw err;
    console.log(stats);
 //打印结果:Stats {
  dev: 4000601358,
  mode: 16822,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 844424930181990,
  size: 0,
  blocks: 0,
  atimeMs: 1607572139193.629,
  mtimeMs: 1607417686385.6775,
  ctimeMs: 1607417686385.6775,
  birthtimeMs: 1607158453023.9072,
  atime: 2020-12-10T03:48:59.194Z,
  mtime: 2020-12-08T08:54:46.386Z,
  ctime: 2020-12-08T08:54:46.386Z,
  birthtime: 2020-12-05T08:54:13.024Z
}
    
    
    
    
    //stats.size 文件大小
    //stats.mtime 最后修改时间
    //调用方法
    console.log(stats.isDirectory());//判断是否是一个文件夹 返回true/false
})
```



## HTTP协议

> 介绍: 超文本传输协议. 基于TCP/IP的应用层通信协议,详细规定了浏览器与万维网服务器之间互相通信的规则.
>
> 协议主要规定了两方面的内容:
>
> * 客户端向服务器发送数据,称之为==请求报文==
> * 服务器向客户端返回数据,称之为==响应报文==



### 线程与进程

```js
https://zhuanlan.zhihu.com/p/331430643
```



单线程就是一个接一个的计算，多线程就是同时处理多个计算

单线程在程序执行时，所走的程序都是按照连续顺序下来的，前面的必须处理好，才会执行后面的。多线程运行就是一个进程内有多个相对独立的并且实现特定的任务以竞争CPU的方式执行，宏观上是并发，实际上是分时执行，只是执行的时间片较短

每个正在运行的程序即是进程，至少包含一个线程，这个线程叫主线程，它在程序启动时被创建，用于执行main函数。只有一个主线程的程序，称为单线程程序。拥有多个线程的程序，称为多线程程序。



进程是当一个程序开始运行时，它就是一个进程，进程包括运行中的程序和程序所使用到的内存和系统资源（一个进程又是由多个线程所组成的）

所以，线程是不能单独存在的，它是由进程来启动和管理的，一个进程就是一个程序的运行实例。线程是依附于进程的，而进程中使用多线程并行处理能提升运算效率。线程之间共享进程中的数据。当一个进程关闭后，操作系统会回收进程所占用的内存。

目前的多进程架构浏览器Chrome包括，1个浏览器主进程，1个GPU进程，1个网络进程，多个渲染进程和多个插件进程

```js
1.打开一个页面，为啥有4个进程？因为打开1个页面：至少需要1个网络进程，1个浏览器进程，1个GPU进程以及1个渲染进程

2.
```



#### FIddle工具



### 端口号

```js
- 是计算机服务的端口,一台计算机有65536个端口.
UDP,TCP协议报头只有两字节存储端口号,所以只能是0~65535


//https://www.zhihu.com/question/361111920/answer/1828767342
台主机上的 TCP 连接数并不会受端口号 65535 的限制，我们有很多的办法绕开。最终限制最大 TCP 连接数的资源是机器上的内存。
```



### 请求报文

> 4部分.请求行,;请求头,空行,请求体



#### 请求行

```Markdown
请求行:GET...
组成部分:
- 请求类型: GET POST patch...
- URL
- HTTP协议版本(1.0, 1,1, 2.0)

URL:特殊格式字符串
组成部分:
协议: HTTPS HTTP ftp...
域名:或者是主机名(可使用ip地址)
端口号: HTTP端口默认80 HTTPS默认端口443
/s:        URL路径部分(域名之后的)
wd=URL&..  查询字符串(&参数分隔符) 各种形式
#logo      锚点


如果浏览器访问某个网页时,没有加任何路径,此时默认的路径就是[/]
```







#### 请求头

```html
格式: 头名字:头的值

Accept: 接受的数据类型  */* 表示其他类型
Accept-language 接受的语言 q=0.5表示喜好系数.
User-Agent  用户代理,浏览器的字符串标识
Accept-Encoding:  客户端接受的压缩方式
Host  主机名
Connection   链接.请求响应完成后链接的处理方式
 - keep alive  保持链接
 - close 关闭
Cookie 特殊的请求头.每一次向服务器发送请求,cookie会自动携带,传递给服务器
 - 格式:键名:键值;键名:键值;....

请求头的类型比较多,不止以上几种.可以去mdn查询:httpheaders
```



#### 请求体

```js
get请求 请求体是空的
post请求, 请求体一般不为空

请求体格式是非常灵活的,任意编写.
-两种主要形式:
 - URL查询字符串
 - JSON形式

form表单可以发送很多HTTP请求,并不是只能发送get.
表单一定要加name属性.没有name属性,input元素就是无效的数据.没有name就没有办法拼接内容

HTML样式:
<input name="login_email">
<input name="login_password">
    
请求体终端打印样式:
login_email=779498590@qq.com&login_password=zDAZn2w76CUCPzD
{"name":"xiaohigh", "age": 33}
    
请求体格式是非常灵活的, 任意编写. url 参数与 JSON 格式两种情况用的较多
```







### 响应报文

> 响应行, 响应头, 空行, 响应体



#### 响应行

> HTTP/1.1 200 OK

```HTML
- mdn文档: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status
- 包含部分 
 - HTTP/1.1 协议版本
 - 200  响应状态码 mdn查询
  - 1xx开头 信息响应,临时响应
  - 2xx开头 成功
  - 3xx开头 重定向
  - 4xx开头 客户端错误 404找不到资源;403禁止的
  - 5xx开头 服务器错误 503服务器内部错误
- OK 响应状态字符串 默认情况下与状态码是一一对应的.可以更改任何字符,但意义不大.
```





#### 响应头

```js

- 包含部分:
 - Cache-Control:private 缓存控制,private私有的,只允许客户端缓存.君子协定. publick公开
 - Connection:keep-alive 链接配置
 - Content-Type:text/html;charset=utf-8 内容(响应体)类型  //html格式字符串 使用utf-8解读
 - Date   响应时间
 - expire 过期时间
 - server 服务器信息
 - set-cookie  设置cookie
 - strict-transport-security: 告知浏览器后续请求都使用HTTPS协议
 - Traceid: 跟踪ID
 - X-Ua-Compatible: IE=Edge,chrome=1 使用IE最新版解析,使用Chrome内核解析
 - Content-length :内容(响应体)长度
```





#### 响应体

```js
响应体就是HTML,css,js,图片,字体文件等, 内容非常灵活,可任意设置
- 网页源代码(右键查看)就是响应体的内容
```





### 面试题整理

```js
https://github.com/forthealllight/blog/issues/19

https://juejin.cn/post/6844903844216832007#heading-13
```





### http模块

```js

127.0.0.1 指向本机IP地址
localhost 指向本机的域名

nodejs修改文件内容,一定要重启服务.

局域网相互访问:
- node http服务启动
- 查看本机在局域网下的IP地址 
- 浏览器: ip+端口访问
```



```js
1.引入http模块
const http=require('http');

2.创建服务对象
//request 是对请求报文的封装对象 获取请求报文中的数据
//response 是对响应报文的封装对象  设置响应
const server=http.createServer(function(request, response){
    response.end('http server start');//设置响应,  end设置响应体
})

3.监听端口,启动服务
server.listen(80, ()=>{
    console.log('服务已启动,80端口监听中')
})                           
```





#### GET和POST区别

```js
- 使用场景
GET:
1.地址栏输入URL访问
2.点击a链接
3.link标签引入css
4.script标签引入js
5.img标签引入图片
6.form表单 <form method='get'>
7.ajax
8.其他标签(iframe..)

POST:
1.form表单 <form method='post'>
2.ajax
```





#### 请求报文获取

```js

//1.引入HTTP模块
const http=require('http');
const url=require('url');

//2.创建服务对象  每个http请求到来之后,都会执行下面这个回调函数
const server=http.createServer((request, response)=>{
    //获取请求报文的请求类型
    console.log(request.method);// get或post 大小写都有;会有两次结果,有网页图标favcion
    //重要  关于请求报文的斜杠.如果访问某个网页时,没有加任何路径,默认的路径就是斜杠.
    
    //读取URL
    console.log(request.url);//保存了URL中的[路径]和[查询字符串]
    
    //URL内容的拆分(正则, split, API)
    const result=url.parse(request.url, true);//true传不传都可以,但不传入,无法获取query.
    console.log(result);//pathname属性就是[路径], query属性就是[查询字符串]. 路径是做判断,查询字符串是提取参数.
    
    //http版本号
    console.log(request.httpVersion);
    
    //请求头信息的获取
    console.log(request.headers);//请求头经过服务器后,变成对象形式,键名都是小写.
    
    //请求头其中具体类型获取
    console.log(request.headers['user-agent']);//为什么使用中括号而非点号.因为属性的名字不是标准的标识符,标识符没有中横线.其他符合标识符规范的键名可以采用对象.属性名的形式
    
    //设置响应体
    response.end('xxxx'); //这一步一定要有
})
```



```js
URL内容拆分结果
const http=require('http');
const url=require('url');

const result=url.parse(require.url, true);

==========================================
Url {
  protocol: null,
  slashes: null, 
  auth: null,    
  host: null,    
  port: null,    
  hostname: null,
  hash: null,
  search: null,
  query: null,    //查询字符串
  pathname: '/',  //路径
  path: '/',
  href: '/'
}    
```



#### 请求体获取

```js
- 链式调用
- 引入querystring模块
- 请求体获取: 3步走:1.声明变量; 2.绑定data事件; 3.绑定end事件; 


//引入querystring模块 将查询字符串转换为对象
const qs=require('querystring');

require('http')
.createServer((request, response)=>{
    //1.声明变量
    let body='';
    //2.绑定data事件
    request.on('data', chunk=>{//request也实现了读取流的接口,每次64kb
        body += chunk;
    })
    //3.绑定end事件
    request.on('end', ()=>{
        //输出请求体结果
        console.log(body);//控制台输出样式: username=xxx&password=xxxx.字符串形式
        const data=qs.prase(body);//字符串转换成对象,需要特定模块, 便于使用
        console.log(data);//控制台输出样式:{username:xxxx, password:xxx}
        console.log(data.username);//使用形式
        
        response.end('receive body');
    })
    
}).listen(80)

//发送请求体,get请求,请求体是空的.需要使用post请求(form表单)
<form>
    <input action='http://127.0.0.1:80' method='post'>
    <inptu type='text' name='username'>
    <input type='password' name='password'>
    <input type='submit' value='登录'>
</form>


```



### 响应报文设置

#### 响应行设置

```js


require('http')
.createServer((request, response)=>{
    //设置响应状态码
    response.statusCode=201;//在控制台中的Network查看
    //设置响应状态字符串
    response.statusMessage='love'; //一般不做修改
    
    //响应头  response.setHeader('头的名字', '头的值') 值使用中文会报错,需要设置头content-type
    response.setHeader('message', 'iloveyou');//在控制台Network,点击域名,查看右侧Headers-Response Headers中可以查看新添加的头信息.
    
    //响应头 类型
    response.setHeader('Content-type', 'text/html;charset=utf-8');
    
    //响应体设置 两种方式write和end. 两种区别:1. write多次调用,end只能调用一次且end方法必须要有,否则页面会一直加载中; 2.设置响应体内容两种方式: write设置,end无内容且结束;如果一步可以完成,可直接使用end方法.
    
    response.write('我是响应体');
    response.end('');
    
    
})
.listen(80);
```







#### 响应头设置

```js

```









#### 响应体设置

```js
write和end方法向响应体内添加内容,区别:
write方法可多次调用,end只能调用一次;end方法必须要设置,可以不传参.
```



#### 响应文件中的内容

```js
HTTP服务:
GET /index.html  返回public目录中的index.html文件中的内容
GET /css/app.css 返回public目录中的css/app.css文件的内容
GET /images/logo.png 返回public目录中的images/logo.png文件的内容

//同js文件目录下有文件夹及文件内容: 
public/index.html
public/app/app.css
public/images/logo.png

const url=require('url');
const fs=require('fs');

require('http')
.createServer((request, response)=>{
    let path=url.parse(request.url, true).pathname;
    //判断
    if(path==='/index.html'){
        //返回文件中的内容. 文件读取模块
        const html=fs.readFileSync(__dirname + '/public/index.html');//相对转绝对
        //响应HTML
        response.end(html);
    }else if(path==='/css/app.css'){
        const css=fs.readFileSync(__dirname + '/public/css/app.css');
        //响应css
        response.end(css);
     }else if(path === '/images/logo.png'){
         const img = fs.readFileSync(__dirname + '/public/iamges/logo.png');
         response.end(img);
     }else if(path === '/css/index.css'){
        const css2=fs.readFileSync(__dirname + '/public/css/index.css');
        //响应css
        response.end(css2);
     }
    
    
    else{
        response.end('<h1>404 Not Found</h1>')
    }
})

======================js代码封装============================
    
    


========================index.html==========================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>首页</title>
    <link rel="stylesheet" href="/css/app.css"> //绝对路径写法 点杠写法也可以 绝对路径是不用修改的
    <link rel="stylesheet" href="/css/index.css">
</head>
<body>
    <h1>首页</h1>
    <img src="/images/logo.png" alt="">

    <script src="/js/app.js"></script>
</body>
</html>    
```

#### 封装JS文件

```js
- 不需要对新的文件添加if标签的
- 

require('http')
.createServer((request, response)=>{
    let path=url.parse(request.url, true).pathname;
    //获取请求的路径部分
    let path = url.parse(request.url, true).pathname;
    
    let directory=__dirname+'/public'; //directory文件夹代表网站的根目录. 服务端去哪个文件去查找文件,哪个目录就是根目录.  全局变量__dirname表示当前执行文件所在文件夹的绝对路径.
    
    //拼接文件路径
    let filepath=directory + path;
    //将filepath的组成拆分成directory和path组成.
    
    
    
    
    
    //读取文件
    fs.readFile(filepath, (err, data)=>{
        if(err){
            response.end('<h1>404 Not Found</h1>');
        }else{
            response.end(data);//如果没有错误,响应文件中的内容
        }
    })
    }
})
.listen(8000);
```





### 路径

```js
页面当中的路径

- 相对路径(相对路径最终发送请求时,浏览器都会将其转换为绝对路径) 
	./app.css [./]表示和当前页面处于的同一层级  转绝对路径,参照当前页面层级,去除点号转绝对路径
    ../app.css [../]表示相对于当前页面层级的上一层级

- 绝对路径
    - 以斜杠开头的路径(和请求报文中的请求行中的URL一致)
    - 以域名开头的路径
```



### Chrome使用

```js
- Network

Headers: 请求行和头, 响应行和头

Response: 响应体
preview: 解析后的响应体. 字符串情况下使用preview下会格式化.

xhr: 显示ajax内容
查看请求体:
All:点击login-headers:


查询解析后的字符串参数: Query String Parameters
点击-查询网址--headers--query string parameters
```







### 练习

#### 1.根据路径不同显示不同内容的练习

```js
GET /login 响应体返回[登录页面]
GET /register 响应体返回[注册页面]

网址形式: /login/?a=100&b=200

const url=require('url');
require('http')
.createServer((request, response)=>{
    //解决汉字乱码问题,设置响应字符集
    response.setHeader('Content-type', 'text/html; charset=utf-8')
    const path=url.parse(request.url, true).pathname;
    if(request.method.toUpperCase()==='GET' && path==='/login'){
        response.end('登录页面');
    }else if(request.method.toUpperCase()==='GET' && path==='/register'){
        response.end('注册页面');
    }else{
        response.end('<h1>404 Not Found</h1>')
    }
    //处理response.end: 只有在输入其他网址情况下才输出,没有意义.改进:添加进判断404页面
    //response.end('test');
})
.listen(80)
```





#### 2.

```js
## 练习
 一
创建一个 HTTP 服务, 访问的时候, 返回一个粉色背景的界面, 顺便加一个 h1 标题, 标题内容 
『身是菩提树，心如明镜台，时时勤拂拭，勿使惹尘埃。』

二
http://127.0.0.1/?bg=rgb(0,10,200)&text=rgb(10,23,33)

根据参数变换网页的背景


require('require')
.createServer((request, response)=>{
    response.setHeader('Content-type', 'text/html;charset=utf-8');
    let query=url.parse(url.request, true).query;
    let bg=query.bg?query.bg:pink;
    
    response.end(`
                 <!DOCTYPE html>
                 <html lang="en">
                 <head>
                 <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <title>Document</title>
                 <style>
                 body{
                 	background:pink;
                 }
				 h1{color:${bg}};
              </style>
              </head>
              <body>
              <h1></h1>
              </body>
              </html>
    `);
})
.listen(80);
===========================================================
url=require('url');
require('http')
.createServer((request, response)=>{
    response.setHeader('Content-type', 'text/html;charset=utf-8');
    let path=url.path(request.url).query;
    let bg=query.bg?query.bg:'pink ';
    let txtbg=query.text?query.text:'#fff';
    response.end(`
                 <!DOCTYPE html>
                 <html lang="en">
                 <head>
                 <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <title>Document</title>
                 <style>
                 body{
                 background:${bg};
                 }
              </style>
              </head>
              <body>
              <h1></h1>
              </body>
              </html>
    `);
})
.listen(80);
```



#### 3.新建表格隔行换色

```js
搭建 HTTP 服务.
GET  /table  响应一个表格 4 行 3 列表格, 并实现隔行换色 (JS)

- 使用内联样式

const url=require('url');
require('http')
.createServer((request, response)=>{
    //获取URL路径部分
    const path=url.parse(request.url).pathname;
    if(path==='/table' && request.method==='GET'){
        
    }else{
        response.end('<h1>404 Not found</h1>')
    }
    response.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table,td{
            border-collapse: collapse;
        }
        td{
            border:1px solid;
            padding:10px 20px;
        }
    </style>
</head>
<body>
    <table>
        <tr><td>aaa</td><td>aaa</td><td>aaa</td><td>aaa</td></tr>
        <tr><td>aaa</td><td>aaa</td><td>aaa</td><td>aaa</td></tr>
        <tr><td>aaa</td><td>aaa</td><td>aaa</td><td>aaa</td></tr>
        <tr><td>aaa</td><td>aaa</td><td>aaa</td><td>aaa</td></tr>
    </table>
    <script>
        var trlist=document.querySelectorAll('tr');
        for(let i=0; i<trlist.length; i++){
            if(i % 2 === 0){
                trlist[i].style.background='pink';
            }else{
                trlist[i].style.background='yellowgreen';
            }
        }

    </script>
</body>
</html>
	`);
})
.listen(80);
```



#### 3.2 外部引入css和js代码

```js
- 使用link标签获得请求

问题: 响应体中的js和css应在在本地哪个位置?

    
//<link rel="stylesheet" href="/abc.css">    
//<script src="./js/app.js"></script>    
    
require('http')
.createServer((request, response)=>{
    //获取URL路径部分
    const path=url.parse(request.url).pathname;
    if(path==='/table' && request.method==='GET'){
        
    }else if(path==='/js/app.js' && request.method==='GET'){
             response.end(`
	 var trlist=document.querySelectorAll('tr');
        for(let i=0; i<trlist.length; i++){
            if(i % 2 === 0){
                trlist[i].style.background='pink';
            }else{
                trlist[i].style.background='yellowgreen';
            }
        }
	`)
    }
    else if(path==='/abc.css'){`
			table, td{
                border-collapse: collapse;
            }
            td{
                padding:10px 20px;
            }`
            
    }
    else{
        response.end('<h1>404 Not found</h1>')
    }
    response.end(`.....
```



#### 4.歌曲列表案例

```js
const data = [
    {
        id:1,
        name: '孙燕姿',
        song: '绿光'
    },
    {
        id:2,
        name: '周杰伦',
        song: '不能说的密码'
    },
    {
        id:3,
        name:'林俊杰',
        song: '不为谁而作的歌'
    },
    {
        id:4,
        name: '五月天',
        song:'干杯'
    },
    {
        id: 5,
        name: '张艺兴',
        song: '莲'
    },
    {
        id:6,
        name:'刘德华',
        song:'冰雨'
    },
    {
        id: 7,
        name: '张学友',
        song: '情人'
    }
];
//
const http = require('http');
const server = http.createServer((request, response) => {
    //响应一个表格
    // 拼接 tr 内容
    //  { id:1, name: '孙燕姿', song: '逆光' }   =>  <tr><td>1</td><td>孙燕姿</td><td>逆光</td></tr>
    //声明空字符串
    let str = '';
    data.forEach(item => {
        str += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.song}</td></tr>`
    });

    response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>网页练习</title>
            <link rel="stylesheet" href="">
            <style>
                table, td{
                    border-collapse: collapse;
                }
                td{
                    padding: 10px 20px;
                }
            </style>
        </head>
        <body>
            <h1>歌曲列表</h1>
            <table border="1">
                <tr><td>ID</td><td>歌手</td><td>歌曲</td></tr>
                ${str}
            </table>
        </body>
        </html>
    `);
});

server.listen(8000);
```



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

cnpm 是淘宝对国外 npm 服务器的一个完整镜像版本，也就是淘宝 npm 镜像，网站地址<http://npm.taobao.org/>

#### 安装

安装配置方式有两种

* npm install -g cnpm --registry=https://registry.npm.taobao.org
* alias cnpm="npm --registry=https://registry.npm.taobao.org \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://npm.taobao.org/dist \
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
npm config set registry https://registry.npm.taobao.org
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







## MongoDB

```
bin文件夹下的一般都是可执行文件(binary)

Linux下文件名称的潜规则:

```



### 三个重要概念

* 一个服务可以创建多个数据库
* 数据库（database） 数据库是一个仓库，在仓库中可以存放集合
* 集合（collection）    集合类似于JS中的数组，在集合中可以存放文档
* 文档（document）  文档数据库中的最小单位，类似于 JS 中的对象，在 MongoDB 中每一条数据都是一个 JS 的对象

### 常用命令

#### 数据库集合命令

1) 显示所有的数据库

```sh
show dbs
show databases
```

2) （创建）切换到指定的数据库

```
use 数据库名
```

3) 显示当前所在的数据库

```
db   //清屏命令cls
```

4)   删除当前数据库（先切换再删除）

```
use project_1
db.dropDatabase()
```

5)  显示当前数据库中的所有集合+创建集合

```js
show collections //显示集合

db.createCollection('集合名称') //创建集合
```

6)  删除当前集合 

```js
db.collection(集合名称).drop()
```

7)  重命名集合

```js
db.collection(集合名称).renameCollection('newName')
```

> 操作集合时，如果集合不存在则会自动创建集合

#### 文档命令

1）插入文档

```
db.collection(集合名称).insert(文档对象{name:'张三', age:20});
```

2)  查询文档

```
db.collection(集合名称).find(查询条件)	/查询条件可为空
db.collection.findOne(查询条件)

_id mongodb为文档创建的id
```

3)  更新文档

```js
db.collection.update(查询条件,新的文档,配置对象)   

db.user.update({name:'张三'}, {name:zhangsan}) //全更新,其他被省略
db.user.update({name:'张三'}, {$set: {name:'zhangsan'}}) //部分更新,其他不变


// 更新一个
db.collection.updateOne(查询条件,要更新的内容[,配置对象]) 
// 批量更新
db.collection.updateMany(查询条件,要更新的内容[,配置对象])
//eg
db.students.update({name:'xiaohigh'},{$set:{age:19}})
//配置对象
{
    //可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入
    upsert: <boolean>,   
    //可选，mongodb 默认是false,只更新找到的第一条记录，如果为true,就把按条件查出来多条记录全部更新
    multi: <boolean>,
    //可选，抛出异常的级别。    
    writeConcern: <document>
}

```

4)  删除集合中的文档

```
db.collection.remove(查询条件)
```

#### 条件控制

##### 运算符

在 mongodb 不能 > < >=  <= !== 等运算符，需要使用替代符号

* `>`   使用 `$gt`
* `<`   使用 `$lt`
* `>=`   使用 `$gte`
* `<=`   使用 `$lte`
* `!==`   使用 `$ne`



##### 大于小于

```
db.songs.find({hot:{$gt:2000}})
```



##### 逻辑或

`$in` 满足其中一个即可 

```
db.students.find({age:{$in:[18,24,26]}}) //  /[aedf]/  
```

`$or` 逻辑或的情况

```js
db.students.find({$or:[{age:18},{age:24}]});
```

`$and` 逻辑与的情况

```
db.students.find({$and: [{age: {$lt:20}}, {age: {$gt: 15}}]});
```

##### 正则匹配

条件中可以直接使用 JS 的正则语法

```js
db.students.find({name:/imissyou/});  //name中包含imissyou的就能匹配
```



### Mongoose

### 介绍

Mongoose 是一个对象文档模型（ODM）库，它对Node原生的MongoDB模块进行了进一步的优化封装，并提供了更多的功能。 官网 <http://www.mongoosejs.net/>

### 作用

使用代码操作 mongodb 数据库

### 使用流程

一、安装 mongoose

在命令行下使用 npm 或者其他包管理工具安装（cnpm  yarn）

```sh
npm install mongoose --save
```

二、引入包

在运行文件中引入 mongoose

```js
var mongoose = require('mongoose');
```

三、连接数据库

```js
mongoose.connect('mongodb://127.0.0.1:27017/data'); //data表示数据库的名字.如果数据库不存在会自动创建. 默认端口27017,不写默认此端口号.

//如果启动时遇到警告提醒， 则按照提示增加选项即可
mongoose.connect('mongodb://127.0.0.1/data', {useNewUrlParser: true, useUnifiedTopology: true});
```

四、监听连接事件

```js
mongoose.connection.on('open', function () {
	
	//下面编写数据库操作代码
    
    //五、创建文档结构
    var SongSchema = new mongoose.Schema({
        title: String,  //歌名
        author: String  //歌手
    });
    
    //六、创建文档模型
    var SongModel = mongoose.model('songs', SongSchema);
    
    //七、使用模型进行文档处理（这里以增加数据为例）
    SongModel.create({title:'野狼disco',author:'宝石gem'}, function(err,data){
        if(err) throw err; //这里判断错误
        
        //下面编写创建成功后的逻辑
        // ... ...
        
        //八、关闭数据库连接（可选，代码上线之后一般不加）
        mongoose.connection.close();
    });
	
});

--v 是mongoose是自动添加的版本号




const mongoose=require('mongoose');
mongoose.connect('mongobd://127.0.0.1:27017/数据库名称', {});

mongoose.connection.on('open', ()=>{
    //5. 创建文档结构对象 Schema
    const userSchema=new mongoose.Schema({
        username:String,
        password:String,
        age:     Number,
        gender:  String
    });
    
    //6.创建模型对象 mongoose.model('数据库中的集合名字', )
    const userModel=mongoose.model('users',userSchema );
    
    //7.调用方法
    userModel.create()
    
})



```

### 数据类型

文档结构可选的字段类型列表

- ==String==
- ==Number==
- Date
- Buffer
- Boolean
- Mixed   任意类型（使用 mongoose.Schema.Types.Mixed 设置）
- ObjectId
- ==Array==
- Decimal128（4.3版本后加入）

### CURD

数据库的基本操作包括四个，增加（create），删除（delete），修改（update），查（read）

#### 增加

插入一条

```js
SongModel.create({
    title:'给我一首歌的时间',
    author: 'Jay'
}, function(err, data){
    //错误
    console.log(err);
    //插入后的数据对象
    console.log(data);
});
```

批量插入

```js
SongModel.insertMany([
    {
        title:'给我一首歌的时间',
        author: 'Jay'
    },
    {
        title:'爱笑的眼睛',
        author: 'JJ Lin',
    },
    {
        title:'缘分一道桥',
        author: 'Leehom Wang'
    }
], function(err, data){
    console.log(err);
    console.log(data);
});
```

#### 删除

> 实际工作中,很少真正的删除数据.

删除一条数据

```js
SongModel.deleteOne({_id:'5dd65f32be6401035cb5b1ed'}, function(err, data){
    console.log(err);
    console.log(data);
});
```

批量删除

```js
SongModel.deleteMany({author:'Jay'}, function(err, data){
    console.log(err);
    console.log(data);
});
```

#### 更新

更新一条数据

```js
SongModel.updateOne({author: 'JJ Lin'}, {author: '林俊杰'}, function (err, data) {
    console.log(err);
    console.log(data);
});
```

批量更新数据

```js
SongModel.updateMany({author: 'Leehom Wang'}, {author: '王力宏'}, function (err, data) {
    console.log(err);
    console.log(data);
});
```

#### 查询

查询一条数据

```js
SongModel.findOne({author: '王力宏'}, function(err, data){
    console.log(err);
    console.log(data);
});
//根据 id 查询数据
SongModel.findById('5dd662b5381fc316b44ce167',function(err, data){
    console.log(err);
    console.log(data);
});
```

批量查询数据

```js
//不加条件查询
SongModel.find(function(err, data){
    console.log(err);
    console.log(data);
});
//加条件查询
SongModel.find({author: '王力宏'}, function(err, data){
    console.log(err);
    console.log(data);
});
```

##### 字段筛选

```js
SongModel.find().select({_id:0,title:1}).exec(function(err,data){
    console.log(data);
});

字段名称:1 显示
字段名称:0 不显示
```

##### 数据排序

```js
SongModel.find().sort({字段名称:1}).exec(function(err,data){
    console.log(data);
});

字段名称:1 升序
字段名称:-1 降序
```

##### 数据截取// 分页功能

```js
SongModel.find().skip(10).limit(10).exec(function(err,data){
    console.log(data);
});

limit(10) 限定为10条
skip(10)  跳过10条
```

## 图形化操作





###  mongodb 配置密码

一、**服务端**启动命令行 mongod 带验证选项

```sh
# mongod --auth
```

二、**新开客户端** 命令行创建用户

```sh
> use admin
> db.createUser({user:"admin",pwd:"password",roles:["root"]})
```

三、连接 mongod 服务

```
> mongo
> use admin
> db.auth("admin", "password")
```

四、mongoose 连接操作

```js
mongoose.connect('mongodb://admin:password@localhost/prepare?authSource=admin');
```



### 数据库操作的模块化拆分

```js
//1.安装 npm i mongoose
//2.引入mongoose模块
const mongoose=require('mongoose');
//3.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/data', {});
                 
//4.绑定连接成功的事件
mongoose.connection.on('open', ()=>{
    //5.创建文档结构对象 Schema结构
    const UserSchema=new mongoose.Schema({
        title:String,
        singer:mongoose.Schema.Types.Mixed,
        duration:Number,
        tags:Array
    });
    //6.创建模型对象
    const UserModel=mongoose.model('song', SongSchema);
    //7.调用方法
    UserModel.create({
        username:'admin',
        age:20,
        gender:'男'
    }, (err, data)=>{
        if(err) throw err;
        console.log(data);
        //8.选做 关闭mongodb的连接
        mongoose.connection.close();
    })
})
```





```js
主题代码app.js
重复代码 ./db/db.js
//./db/db.js

const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/data')

//封装函数
function db(success, error=()=>{}){
    mongoose.connection.on('open', success);
    mongoose.connection.on('error', error)
}

module.exports=db;
```





```js
//app.js
const db=require('./db/db');
//db(()=>{},  ()=>{})


```





## 原生AJAX

### AJAX简介

```
Asynchronous JavaScript and XML
AJAX 全称为Asynchronous Javascript And XML，就是异步的 JS 和 XML。
通过AJAX可以在浏览器中向服务器发送异步请求，最大的优势：无刷新获取数据。
AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。

```



### XML简介

```
extensible markup language 可扩展标记语言
XML 可扩展标记语言。
XML 被设计用来传输和存储数据。
XML和HTML类似，不同的是HTML中都是预定义标签，而XML中没有预定义标签，全都是自定义标签，用来表示一些数据。

- 已被JSON代替
```



### AJAX特点

```
- 优点
1)	可以无需刷新页面而与服务器端进行通信。
2)	允许你根据用户事件来更新部分页面内容

- 缺点
1)	没有浏览历史，不能回退
2)	存在跨域问题
3)	SEO不友好

```





### AJAX基本使用

#### 其他

```
http://c.biancheng.net/view/5995.html
```



#### 实现方式

```
1.原生ajax
2.封装:axios jQuery
3.fetch 系统自带
```





#### 核心对象

```
XMLHttpRequest ajax的所有操作都是通过该对象进行的.
```



#### 使用步骤

```js
设置ajax步骤:
1.创建ajax请求对象 const xhr=new XMLHttpRequest()
2.初始化          xhr.open('GET', 'url')
3.发送请求         xhr.send(body); ///get请求不传body参数，只有post请求传参.传参形式一般a=100&b=200类.
4.事件响应         xhr.onreadystatechange=function(){
				 if(xhr.readyState===4){
                     console.log(xhr.responseText);
                     //xhr.responseXML 接收xml格式的响应数据
					 //xhr.responseText 接收文本格式的响应数据

                 }
			 }
```



### GET请求

```js
XMLHttpRequest ajax的所有操作都是通过该对象进行的


====================页面中script=================
//ajax使用步骤
    
//0.创建ajax请求对象
const xhr=new XMLHttpRequest();
//1.初始化
xhr.open('GET', 'http://127.0.0.1/server');
//2.发送请求
xhr.send();
//3.绑定事件
xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        //查看服务器响应结果
        //响应状态码
        console.log(xhr.status);
        //响应状态码字符串
        console.log(xhr.statusText);
        //响应头
        console.log(xhr.getAllResponseHeaders());
        //响应体
        console.log(xhr.responseText);
    }
}


====================后台=================
const express=require('express');
const app=express();

app.get('/server', (request, respones)=>{
    //添加响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello, ajax');
});

app.listen(80);
```



### GET请求发送参数

```
URL中添加参数 url?keyword=abc
```



### POST请求



```js
==========服务端==============
const express=require('express');
const app=express();

app.post('/server', (request, respones)=>{
    //添加响应头
    response.setHeader('Access-Control-Allow-Origin', '*');//解决跨域
    response.setHeader('Access-Control-Allow-Headers', '*');//解决请求头设置报错
    response.setHeader('');
    response.send('Hello, ajax');
});

app.listen(80);


==========客户端==============
<script>
    const result=document.querySelector('#result');
	//绑定事件
	result.onmouseover=function(){
        //0.创建ajax对象
        const xhr=new XMLHttpRequest();
        //1.初始化[请求行]
        xhr.open('POST', 'http://127.0.0.1/server');
        //设置[请求头] 请求头的报文不能使用空文
        xhr.setRequestHeader('name', 'daydayup');
        //设置content-type 将[请求体]内容格式化 在Chrome-network中的最下格式化显示
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
        //2.发送 设置[请求体]
        xhr.send('username=admin&&password=admin');
        //3.绑定事件
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                result.innerHTML=xhr.responseText;
            }
        }
    }
<script>   
        
//浏览器中请求体在哪里查看?
点击xhr中的初始化URL, 在headers中的一栏        
```



### AJAX请求状态

```js
xhr.readyState 可以用来查看请求当前的状态
https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
0: 表示XMLHttpRequest实例已经生成，但是open()方法还没有被调用. 创建
1: 表示send()方法还没有被调用，仍然可以使用setRequestHeader()，设定HTTP请求的头信息。//初始化与服务端链接
2: 表示send()方法已经执行，并且头信息和状态码已经收到。//
3: 表示正在接收服务器传来的body部分的数据。
4: 表示服务器数据已经完全接收，或者本次接收已经失败了

```





### IE中缓存问题

```js
IE会对ajax请求响应的结果进行缓存,若下次请求与本次请求的URL完全一致,则以缓存结果作为响应结果.不向服务器发送请求.

问题：在一些浏览器中(IE),由于缓存机制的存在，ajax只会发送的第一次请求，剩余多次请求不会在发送给浏览器而是直接加载缓存中的数据。
解决方式：浏览器的缓存是根据url地址来记录的，所以我们只需要修改url地址即可避免缓存问题
xhr.open("get","/testAJAX?t="+Date.now());


//ajax使用步骤:
//1.创建ajax请求对象
const xhr=new XMLHttpRequest();
//2.初始化
xhr.open('GET', 'http://127.0.0.1/server?keyword=abc&t='+Date.now());
//3.发送请求
xhr.send();
//4.绑定事件onreadystatechange 处理响应结果. readyState是xhr对象中的一个属性,总共有5个值
xhr.onreadystatechange=function(){
    //判断
    if(xhr.readyState === 4){
        ....
    }
}

```



### AJAX响应JSON数据

```js
需要将响应体中的JSON字符串转换为对象

服务端: 对象数据转换成json字符串
客户端: json字符串转换成json对象
...
===============客户端======================
xhr.onreadystatechange=function(){
	if(xhr.readyState === 4){
        //响应体字符串 转换为 JS对象
        let data = JSON.parse(xhr.responseText);
         
               
    }
}
    
    
==================服务端==========================    
//发送的数据需要先转换为JSON字符串
 data={name:'尚硅谷',pos:['北京', '上海', '深圳', '武汉']};
 let str=JSON.stringify(data);
 response.send(str)   ;
    
# 针对JSON数据自动化转为对象的方式    
1.设置响应体类型后,响应体结果可简写:xhr.response.
xhr.responseType='json';
2.使用响应体的时候,用xhr.response
console.log(xhr.response)    
```



### 超时反馈与手动取消请求

```html
<input type='text'><br>
<button>点击取消</button>
<script>
    //获取元素
    const input=document.querySeclector('input');
    const btn=document.querySeclector('button');
    let xhr;//ajax请求对象的变量   
    
    
    //绑定事件 丧失焦点的时候发送ajax请求
    input.onblur=function(){ 
        //判断 避免多次发送请求,占用服务器资源.
        if(xhr){//判断xhr是否是一个对象.
            xhr.abort();
        }
        xhr=new XMLHttpRequest();
        //设置超时时间 超过1000毫米之后没有返回结果则断开连接,status更改为canceled
        xhr.timeout=1000;
        //超时以后自动触发的回调函数. 
        xhr.ontimeout=function(){console.log('请求超时啦, 请稍后再试!')};
        xhr.open('GET', 'http://127.0.0.1/dalay-server');
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                console.log(xhr.responseText);
            }
        }
    }
    //按钮绑定取消发送ajax请求.
    btn.onclick=function(){
        xhr.abort();// 第一,xhr更改声明类型,const-->let;第二,将xhr声明在全局中
    }
</script>    
```





## jQuery发送AJAX



### jQuery复习

```js
jQuery复习:
- 获取元素
$('#d')
$('.class')
$('div')
$('#id .class .class div')

- 属性操作
$('selector').attr() //设置和读取属性
 $('selector').attr('属性名称')//获取 $('selector').attr('属性名称', '属性值')
$('selector').removeAttr() //移除属性

- 文本操作
$('selector').html() //会对标签进行解析
$('selector').text() //不会对标签进行解析

- 样式操作
$('selector').css(样式名:样式值) //
$('selector').css('background') //获取样式值
$('selector').addClass(); //添加class
$('selector').removeClass(); //移除class
```



### jQuery中的ajax

#### get请求

```js
 $.get(url, [data], [callback], [type])
url:请求的URL地址。
data:请求携带的参数。
callback:载入成功时回调函数。
type:设置返回内容格式，xml, html, script, json, text, _default。

```



#### post请求

```
$.post(url, [data], [callback], [type])
url:请求的URL地址。
data:请求携带的参数。
callback:载入成功时回调函数。
type:设置返回内容格式，xml, html, script, json, text, _default。

```



#### get案例

```html
//如果你是get请求,参数放在URL中;如果是post请求,参数放在请求体中
//jQuery中的get方法中参数设置的时候是一个对象,但会转换成URL中的参数.
==========客户端=================
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>  //引入jQuery
<button>GET</button>
<button>POST</button>
<button>通用方法发送</button>
<script>
    $('button').eq(0).click(function(){
        //$.get(url, 参数, 回调函数) 当请求成功的时候,执行回调 get请求,参数在浏览器network-headers中查看
        $.get('http://127.0.0.1/jquery-server', {name:'abc', keyword:'def'},function(data){
            	console.log(data);//请求成功时,在浏览器console中输出结果  data是响应体
        })
    })
</script> 

============服务端=================
const express=require('express');
const app=express();
app.all('/jquery-server', (request, response)=>{
    //添加响应头
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
    //数据对象
		response.send('hello, jquery ajax');
})
app.listen(80, ()=>{console.log('80端口监听中...')});
```



#### post请求

```html

<script>
    $('button').eq(1).click(function(){
        //$.post(url, 参数, 回调函数) 当请求成功的时候,执行回调. post请求时,参数在浏览器中network-headers中查看
        $.post('http://127.0.0.1/jquery-server', {name:'abc', keyword:'def'},function(data){
            	console.log(data);//请求成功时,在浏览器console中输出结果
        })
    })
</script> 
```



#### 通用方法ajax

```html
jQuery API文档地址:https://jquery.cuishifeng.cn/
$.ajax()方法接收一个对象类型的参数,
<script>
    $('button').eq(2).click=(function(){
        //通用方法发送ajax请求 接收一个对象类型的参数
        $.ajax({
            //请求类型
            type: 'GET',
            //URL
            url:'http://127.0.0.1/jquery-server',
            //请求头信息 请求报文
            headers:{
              键:值,
              键:值
            }
            //发送的数据 get类型下是URL中的参数,post类型下是请求体中的数据
            data:{
                a:200,
                b:200
            }
            //成功的回调  打印的响应体内容
            success:function(data){
            	console.log(data);
        	},
            //失败的回调 出错误执行 浏览器console面板打印内容
            error:function(){
                console.log('发送失败');
            },
           //超时时间  服务端延时3秒
           timeout:2000  //两秒内数据没有回来,断开连接; 请求类型变更为canceled   
            	
        })
    })
</script>     


============服务端=================
app.all('/jquery-server', (request, response)=>{
    //添加响应头
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
    //数据对象
	setTimeout(()=>{
		response.send('hello, jquery ajax');
	}, 3000)
})
```









## 跨域

```
http请求分两大类: 普通请求,ajax请求


```





### 如何产生

```
1.同源策略
2.浏览器特有的一个问题,服务器之间是没有这个问题的.
3.跨域问题是浏览器的ajax引擎阻挡了返回的服务器数据
```



### 同源策略

```
- 同源策略(Same-Origin Policy)最早由 Netscape 公司提出，是浏览器的一种安全策略。
- 同源： 两者的协议、域名、端口号 必须完全相同。 两个资源必须来自同一个服务.
- 违背同源策略就是跨域。
- AJAX 的请求默认是要遵循『同源策略的』

```

### url简写

```
如果当前请求时一个同源的请求,则URL的协议,域名,端口,可以不写.
可以简写的类型: a, form, img, link, script, ajax 
```



### 如何解决跨域

```
1)	JSONP是什么
JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求。
2)	JSONP怎么工作的？
在网页有一些标签天生具有跨域能力，比如：img link iframe script。
JSONP就是利用script标签的跨域能力来发送请求的。案例:例如网页中script标签有不同地址的src


1)	CORS是什么？ 
CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持get和post请求。
2)	CORS怎么工作的？
CORS是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。

```





### 原生JSONP实现跨域

#### JSONP介绍

```
1)JSONP是什么
JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求。
2)JSONP怎么工作的？
在网页有一些标签天生具有跨域能力，比如：img link iframe script。
JSONP就是利用script标签的跨域能力来发送请求的。

```



#### JSONP案例

```html
--第一版 点击事件 使用script标签获取跨域内容,并将内容写入到页面中

================浏览器端=======================
<style>
    #abc {
        width: 400px;
        height: 200px;
        border: solid 1px #000;
    }
</style>
</head>
<body>
    <button>点击发送跨域请求</button>
    <div id="abc"></div>
<script>
	//获取元素
    const btn=document.querySelector('button');
    const abc=document.querySelector('#abc');
    
    btn.addEventListener('click', function(){
        //1.创建script标签
        let script=document.createElement('script');
        //2.设置script标签的src
        script.src='http://localhost:8001/jsonp-server';
        //3.将script标签插入到文档中
        document.body.appendChild(script);
    })
</script>  
    
================服务端=======================
<script>//为了代码格式添加
	const express=require('express');
    const app=express();
    app.all('/jsonp-server', (requeset, response)=>{
        response.send('跨域');
        //问题:浏览器通过script的src获取内容,但script标签无法解析中文.console控制台报错,is not defined.
        //如果返回的是response.send('alert(13)'),浏览器可正常执行.
    })
    app.listen(80);
</script>
```



```html
- 第二版 服务端使用jQuery+模板字符串+引号传递JS语句.
- 

================浏览器端=======================

================服务端=======================
<script>
    ...
    let data='中文汉字';
	response.send(
    	result.innerHTML= `${data}`;
    )
    ...
</script>
```



```HTML
- 第三版 服务器返回结果的数据处理代码不能放在服务器端. 客户端更改变量名字,服务端的JSON语句就无法使用
================浏览器端=======================
<body>
    <button>点击发送跨域请求</button>
    <div id="abc"></div>
<script>
	//获取元素
    const btn=document.querySelector('button');
    const result=document.querySelector('#abc');
    //重要:创建一个回调函数
    function callback(data){
        result.innerHTML=data;
    }
    ...
</script>


================服务端=======================
<script>//为了代码格式添加
	const express=require('express');
    const app=express();
    app.all('/jsonp-server', (requeset, response)=>{
        let data='中文汉字';
        response.send(`callback('${data}')`);
    })
    app.listen(80);
</script>
```



```html
- last版 去掉服务端和客户端的耦合, 函数名称
- 使用URL参数来传递函数名称
================浏览器端=======================
<body>
    <button>点击发送跨域请求</button>
    <div id="abc"></div>
<script>
	//获取元素
    const btn=document.querySelector('button');
    const result=document.querySelector('#abc');
    //重要:创建一个回调函数
    function callback2(data){
        result.innerHTML=data;
    }
    btn.addEventListener('click', function(){
        //1.创建script标签
        let script=document.createElement('script');
        //2.设置script标签的src
        script.src='http://localhost/jsonp-server?callback=callback2';
        //3.将script标签插入到文档中
        document.body.appendChild(script);
    })    
</script>


================服务端=======================
<script>//为了代码格式添加
	const express=require('express');
    const app=express();
    app.all('/jsonp-server', (requeset, response)=>{
        //获取URL中的参数
        let callback=request.query.callback;
        let data='中文汉字';
        response.send(`${callback}('${data}')`); //函数调用形式的字符串
    })
    app.listen(80);
</script>

```





```js
========HTML页面===============
<button>点击发送跨域请求</button>
<div id='abc'></div>
<script>
    //获取元素
    const button=document.querySelector('button');
	const abc=document.querySelector('#abc');

	//4.创建回调函数 
	//构建逻辑:1.服务端返回的处理代码不能放在服务端,原因之一是应对变量更名产生的后端操作.
    //2.解决方法: 本地创建回调函数
    //3.服务端返回的函数调用,名称需要和本地保持动态的一致
	//4.使用URL参数形式将函数名称发送到服务端. 只要前端两处名称保持一致即可.
	function ccc(data){
        abc.innerHTML=data;
    }
	//绑定事件
	button.addEventListener('click', function(){
        //1.创建script标签
        let script=document.createElement('script');
        //2.设置script标签的src
        script.src='http://127.0.0.1:8001/jsonp-server?callback=ccc';
        //3.将script标签插入到文档中
        document.body.appendChild(script);
    })
</script>

===============jsonp-server.js====================
app.all('/jsonp-server', (request, response)=>{
        //获取callback参数
        let callback=request.query.callback;
        //数据
        let data='test test';
        response.end(`
			${callback}(`${data}`); //内容发送到网页上script标签内,类型只能是JS代码
		`)
    })        
```



#### jQuery发送JSON请求

```html
//$.getJSON('发送请求的URL固定写法', 回调函数function(data){})
//http://127.0.0.1/路径?callback=?. 其中?callback=?是固定写法.


================客户端=======================
<script crossorigin="anonymous" src='https://cdn.bootcss.com/jquery/3.5.0/jquery.min.js'></script>
...
<button>点击发送 JSONP 请求</button>
<div id="result"> </div>
<script>
    $('button').click(function(){
        //大小写 注意
        $.getJSON('http://127.0.0.1:8001/jsonp-server?callback=?', function(data){
            // console.log(data);
            $('#result').html(data);
        });
    });
</script>


================服务端=======================
<script>//为了代码格式添加
	const express=require('express');
    const app=express();
    app.all('/jsonp-server', (requeset, response)=>{
        //获取URL中的参数
        let callback=request.query.callback;
        let data='中文汉字';
        response.send(`${callback}('${data}')`); //函数调用形式的字符串
    })
    app.listen(80);
</script>
```



### AJAX功能调试步骤

```
1.检查console是否有报错
2.检查network 是否有请求
 2.1 如果没有请求
 2.1.1 检查事件绑定
 2.1.2 检查请求发送
 2.2 如果请求已经发送
 	2.2.1 检查响应体是否满足条件
     2.2.1.0 响应体是否满足条件,如果不满足:服务端人员
     2.2.1.1 如果数据OK,检查(回调函数)
     


```





### CORS

#### CORS介绍

```
CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持get和post等请求。

2)	CORS怎么工作的？
CORS是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。
```



#### CORS使用

```js
3)	CORS的使用
//* 表示任何客户端网页都可跨域向我发送请求
//可将*号更改为特定的网站.例如a.com
主要是服务器端的设置：
router.get("/testAJAX" , function (req , res) {
	//通过res来设置响应头，来允许跨域请求
	//res.set("Access-Control-Allow-Origin","http://127.0.0.1:3000");  
	res.set("Access-Control-Allow-Origin","*");
	res.send("testAJAX返回的响应");
});

```





#### CORS案例

```html


================客户端====================
<button>点击</button>
<script>
	const btn=document.querySelector('button');
    btn.onclick=function(){
        const xhr=new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/cors-server');
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                console.log(xhr.responseText);
            }
        }
    }
</script>

================客户端====================
<script>
	const express=require('expres');
	const app=express();

	app.all('/cors-server', (request, response)=>{
		response.setHeader('Access-Control-Allow-Origin', '*');
        response.send('CORS');
	})
</script>
设置CORS响应头    
response.setHeader('Access-Control-Allow-Origin', '*');//星号表示允许任何客户端网页发送请求
```



### 练习

#### 歌曲列表

```HTML
<script>
	const btn=document.querySelector('button');
    const table=document.querySelector('tbody');
    
    btn.onclick=function(){
        const xhr=new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1/songs');
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState === 4){
                let result = responseText;
                let data=JSON.parse(result);
                //遍历数据
                data.data.forEach(item=>{
                 //创建tr td,然后插入元素
                 const tr = document.createElement('tr');
                 const td1 = document.createElement('td');
                 td1.innerHTML=item.id;
                 const td2 = document.createElement('td');
                 td2.innerHTML=item.name   
                 const td3 = document.createElement('td');
                 td3.innerHTML=item.time_public;   
                 const td4 = document.createElement('td');
                 td4.innerHTML=item.singer[0].name;   
                 const td5 = document.createElement('td');
                 td5.innerHTML=item.album.name;
                    
                 //将td插入到tr中
                 tr.appendChild(td1);
                 tr.appendChild(td2);   
                 tr.appendChild(td3);
                 tr.appendChild(td4);
                 tr.appendChild(td5);   
                 //将tr插入到table中
                 table.appendChild(tr);   
                })
            }
        }
    }
</script>
```



```html
=====服务端======
<script>
const express=require('exprss');
const app=express();
    
app.all('/songs', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Header', '*');
    response.setHeader('Content-Type','application/json;charset=utf-8');
    response.end(require('fs').readFileSync('./data.json'));
    
});
app.all('*', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('404');
})    


</script> 

===================客户端=======================
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>歌曲表格</title>
    <link crossorigin='anonymous' href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <h2 class="page-header">歌曲表格 <button class="btn btn-sm btn-info">点击获取歌曲列表</button></h2>
    <table class="table table-striped table-hover table-border">
        <tr>
            <td>ID</td>
           <td>歌曲名称</td>
            <td>发布时间</td>
            <td>歌手名称</td>
            <td>专辑名称</td>
        </tr>
    </table>
</div>
<script>
	const btn=document.querySelector('button');
    btn.onclick=function(){
        const xhr=new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1/songs');
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status>=200 && xhr.status<300){
                    let obj=JSON.parse(xhr.responseText);
                    
                    obj.data.forEach(items=>{
                        const tr=document.createElement('tr');
                        const td1=document.createElement('td');
                        const td2=document.createElement('td');
                        const td3=document.createElement('td');
                        const td4=document.createElement('td');
                        const td5=document.createElement('td');
                        
                        td1.innerHTML=items.id;
                        td2.innerHTML=items.name;
                        td3.innerHTML=items.time_public;
                        td4.innerHTML=items.singer[0].name;
                        td5.innerHTML=items.album.name;
                        
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                        tr.appendChild(td3);
                        tr.appendChild(td4);
                        tr.appendChild(td5);
                        
                        table.appendChild(tr);
                    })
                }
            }
        }
    }
</script>    
    
```





### 封装jquery中的ajax

```js
//get请求类型中,jQuery发送ajax,参数对象的位置是作为URL的参数.


let $={
    get:function(url, data, callback){
        let xhr=new XMLHttpRequest();
        let str='';
        for(let i in data){
            str += `${i}=${data[i]}`;
        }
        let url=(str+'?'+url).slice(0, -1);
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readystate===4){
                if(xhr.status>=200 && xhr.status<300){
                    callback(xhr.responseText);
                }
            }
        }
    }
}

$.get('http://127.0.0.1', {a:100, b:200}, function(data){console.log(data)})
```



## Promise



#### 实例对象与函数对象

```js
实例对象: new函数产生的对象,称为实例对象,简称为对象
函数对象: 将函数作为对象使用,简称为函数对象. //函数.属性/方法
```



```js
function Fn(){} //Fn是函数
const fn=new Fn() //Fn是构造函数,new返回的是实例对象
console.log(Fn.prototype) //Fn是函数对象
Fn.call({})   //Fn是函数对象

$('#test') //$是函数
$.ajax() //$是函数对象

总结:
1.点的左边是对象(可能是实例对象也可能是函数对象)
2.()的左边是函数
```



#### 二种类型的回调函数

##### 同步回调

```js
理解:
立即执行,完全执行完了才结束,不会放入回调队列中. 

案例:
例如,数组的API. promise执行器函数
const att=[1,2,3];
arr.forEach(item=>{
	console.log(item);
})
```



##### 异步回调

```js
理解:不会立即执行,会放入回调队列中将来执行.编写顺序和执行顺序不相同

案例:
例如,定时器, 文件系统fs,mongoose, ajax请求回调

mongoose.connection.on('open', ()=>{}) //当连接数据库成功以后才执行回调

$.get('./server',{}, function(data){}) //ajax
```



### JS中5大错误类型

```js
1.	Error: 所有错误的父类型
2.	ReferenceError: 引用的变量不存在
3.	TypeError: 数据类型不正确的错误
4.	RangeError: 数据值不在其所允许的范围内
5.	SyntaxError: 语法错误
```



### try catch

```js
- 捕获错误 try...catch
- 抛出错误 throw error

* 语法固定 try...catch   try 尝试的意思  catch 捕获
* 1. try catch捕获到错误之后, 后续代码可以继续执行
* 2. catch 可以将错误信息捕获到. e 是一个对象, 有message和stack两个属性
* 3. 抛出错误之后, 在后续的 try 里面的代码不会执行
* 4. try 不能捕获语法错误. 其他三种类型错误可以捕获.
* 5. 允许使用 throw 手动的抛出错误
* 6. 抛出任意类型的数据





- 运行流程
1.try catch捕获到错误之后,后续代码是可以继续执行的
2. catch可以将错误信息捕获到,e是一个对象,有message和stack两个属性
 2.1 message: 发生错误的信息; stack:发生错误的位置,配合使用console.dir(e)
3.抛出错误之后,在后续的try里的代码是不会执行的
4.try不能捕获语法错误,其他三种类型错误可以捕获
5.允许使用throw手动抛出错误
   Throw new Error(‘xxx’)   catch(e) 
6.抛出任意类型的数据


- err对象的结构
1.	message属性: 错误相关信息
2.	stack属性: 函数调用栈记录信息 错误发生的位置信息
```



```js
try捕获到错误之后,把错误信息变成对象, 然后传递给catch
try{
    console.log(a);
    console.log(111);//出错之后的代码不会执行
}catch(e){
    console.log(e);//结果是字符串
    console.dir(e);//
}
console.log('可继续执行'); 
```





### Promise

#### 介绍

```
- 抽象表达:
 1.Promise是一门新的技术(ES6规范)
 2.Promise是JS中进行异步编程的新解决方案. 旧方案是单纯使用回调函数
- 具体表达:
 1.从语法上来说,Promise是一个构造函数
 2.从功能上来说,Promise对象用来封装一个异步操作并可以获取其成功/失败的结果值.
 
- 异步操作有哪些?
定时器, 文件操作fs,数据库的操作,ajax请求回调
```



#### Promise状态改变

```html
0.状态就是其对象上的属性, 
1.promise对象的状态有3种:初始值pending 成功fulfilled(resolved,旧值)和失败rejected
2.一个promise对象只能改变一次状态
3.无论变为成功或失败,都会有一个结果数据
4.成功的结果数据一般称为value,失败的结果数据一般称为reason

let p = new Promise((resolve, reject)=>{})
console.log(p);
打印结果: 
Promise {<pending>}
    __proto__: Promise
    [[PromiseState]]: "pending"
    [[PromiseResult]]: undefined
```



#### Promise的基本流程

![image-20201215185442341](C:\Users\pm\AppData\Roaming\Typora\typora-user-images\image-20201215185442341.png)

```js
执行器函数中可以是『同步任务』, 也可以是『异步任务』
```



#### 使用Promise原因

```html
1.指定回调函数的方式更加灵活
 1.1 旧的:必须在启动异步任务前指定
 1.2 promise:启动异步任务->返回promise对象->给promise对象绑定回调函数(甚至可以在异步任务结束后指定多个)
2.支持链式调用,可以解决回调地域的问题
 2.1回调地域:回调函数嵌套调用,外部回调函数异步执行的结果是嵌套的回调执行的条件
 2.2回调地狱缺点:不便于阅读;不便于处理异常
 2.3解决方案:promise链式调用
 2.4终极解决方案:async/await
```

```js
$.get(url, (data)=>{   //回调是在异步任务前指定
    console.log(data)
})
```





### Promise的基本使用

```html
<script>
  // 1) 创建promise对象(pending状态), 指定执行器函数
  const p = new Promise((resolve, reject) => {
    // 2) 在执行器函数中启动异步任务
    setTimeout(() => {
      const time = Date.now()
      // 3) 根据结果做不同处理
      // 3.1) 如果成功了, 调用resolve(), 指定成功的value, 变为resolved状态
      if (time%2===1) {
        resolve('成功的值 '+ time)
      } else { // 3.2) 如果失败了, 调用reject(), 指定失败的reason, 变为rejected状态
        reject('失败的值' + time)
      }
    }, 2000)
  })

  // 4) 用promise指定成功或失败的回调函数来获取成功的vlaue或失败的reason
  p.then(
    value => { // 成功的回调函数onResolved, 得到成功的vlaue
      console.log('成功的value: ', value)
    },
    reason => { // 失败的回调函数onRejected, 得到失败的reason
      console.log('失败的reason: ', reason)
    }
  )
</script>

```



#### 30%中奖案例

```html
 // 点击按钮, 1s 后显示是否中奖.  30%概率中奖
// 中奖弹出   恭喜恭喜  显示中奖号码
// 未中奖弹出  再接再厉  显示号码

//回调函数写法
<body>
    <button id='btn'>点击按钮</button>
    <script>
        function rand(m, n){
            return Math.round(Math.random()*(n-m)+m);
        }
    	const btn=document.querySelector('#btn');
        btn.onclick=function(){
            setTimeout(()=>{
                let n = random(1,100);
                if(n<=30){
                    alert('恭喜恭喜,中奖号码'+n);
                }else{
                    alert('再接再厉,中奖号码'+n);
                }
            },1000)
        }
    </script>   
</body>

//Promise方法
<script>
	btn.onclick=function(){
        let p=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let n = random(1,100);
                if(n<=30){
                    //alert('恭喜恭喜,中奖号码'+n);
                    resolve(n);
                }else{
                    //alert('再接再厉,中奖号码'+n);
                    reject(n);
                }
            },1000)
        });
        
        p.then((value)=>{
            console.log('成功啦, 恭喜中奖啦!! 中奖号码为 '+value );
        }, (reason)=>{
            console.log('失败啦, 再接再厉  号码为' + reason );
        })
    }
</script>
```





#### 读取文件

```html
//resource文件下有名称为1,2,3的html文件

//无promise版本
<script>
const fs = require('fs');

fs.readFile('./resource/1.htmlx', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});
    
//throw err报错信息: err是一个对象
[Error: ENOENT: no such file or directory, open 'D:\0922frontend\1215\day15\课堂\Promise\代码\1-Promise\1-基础\resource\1.htmlx'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\0922frontend\\1215\\day15\\课堂\\Promise\\代码\\1-Promise\\1-基础\\resource\\1.htmlx'
}
    
</script>

//promise版本
<script>
	const fs=require('fs');
    let p=new Promise((resolve, reject)=>{
        let data=fs.readFile('./resource/1.html', (err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    });
    p.then((value)=>{
        console.log(value.toString())
    }, (reason)=>{
        console.log(reason.code);//
    })
</script>


```



#### 发送ajax请求

```js
<scirpt>
    cosnt btn=document.querySelector('button');
	btn.onclick=function(){
        let p = new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http:');
            xhr.send();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status >= 200 && xhr.status < 300){
                        //成功的情况,成功的值是非常灵活可自定义的
                        resolve({
                            status:xhr.status,
                            statustext:xhr.statusText,
                            headers:xhr.getAllResponseHeaders(),
                            body:xhr.responseText
                        })
                    }else{ 
                        //失败的情况  失败的情况也是放在readyState这个判断中的.
                        reject(xhr.status);
                    }
                }
            }
        })
    }
//对成功和失败的情况进行处理
//格式:p.then(成功函数1, 失败函数2)
p.then((value)=>{
		console.log(value);
    },(reason)=>{
		console.log(reason);
    })
</script>    
```



#### 连接mongoose数据库

```js
//db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/h5200922');

//实例化 Promise 对象
let p = new Promise((resolve, reject) => {
    //连接成功
    mongoose.connection.on('open', () => {
        resolve();
    });
    //连接失败
    mongoose.connection.on('error', () => {
        reject();
    });
});

//暴露
module.exports = p;


//html
const mongoose = require('mongoose');
//引入 db.js
const p = require('./db/db');

p.then(value => {
    //结构对象
    const UserSchema = new mongoose.Schema({
        username:String,
        password:String,
        age: Number,
        gender: String
    })

    const UserModel = mongoose.model('users', UserSchema);

    //mongoose 提供 promise 的结果处理
    UserModel.find({username: 'abc'}).then(data => {
        console.log(data);
    });
}, reason => {
    console.log('连接失败, 请重试');
})


```



#### 封装函数读取文件内容

```js
/**
 * 作用: 读取文件的中的内容
 * 封装一个函数 mineReadFile
 * 参数        path 文件路径
 * 返回结果    Promise 对象
 */

根据函数使用形式倒推封装函数:
mineReadFile('./resource/1.html')
.then(value=>{console.log(value.toString())}, reason=>{console.log('读取失败')})

//函数封装
const fs=require('fs');
function mineReadFile(path){
    return new Promise((resoleve, reject)=>{ //返回一个Promise对象
        //使用readFile读取文件内容
        fs.readFile(path, (err, data)=>{
            if(err){
                //调用reject函数
                reject(err);
            }
            //成功的状态,调用resolve函数
            resolve(data);
        })
    })
}

mineReadFile(path).then(value=>{console.log(value), reason=>{console.log(reason)}});

========================彻底封装=======================
const fs=require('fs');
function mineReadFile(path){
    return new Promise((resolve, reject)=>{
        fs.readFile(path,(err,data)=>{
            if err reject err;
            resolve(data);
        })
    }).then(value=>{console.log(value)}, reason=>{console.log(reason)})
}

mineReadFile(path);
```





### promisify

```
可以将 fs 模块中的异步的 API, 转化成返回 promise 对象形式的函数
```



```js
//nodejs中的内置模块
//传入一个错误优先的回调函数
const util=require('util');
const fs=require('fs');

//获取读取文件的函数 将函数转换为promise形态
const mineReadFile=util.promisify(fs.readFile);

========第二种形式===============
const {promisify}=require('util');
const myReadFile=promisify(require('fs').readFile);

//读取文件
mineReadFile('./resource/1.html')
.then(value=>{
    console.log(value.toString());
}, reason=>{
    console.log(reason);
})

```





### API-如何使用promise

#### Promise构造函数介绍

```js
Promise(executor){}

1.executor函数: 执行器(resolve, reject)=>{}
2.resolve函数: 内部定义成功时,调用的函数 value=>{}
3.reject函数: 内部定义失败时, 调用的函数 reason=>{}

说明:executor会在promise内部立即同步调用,异步操作在执行器中执行
 1. Promise 的实例化接收一个 函数类型的参数( 『执行器函数』 )
 2. resolve和 reject 两个形参类型都是 函数.
 3. 执行器函数是一个同步的回调函数
 
 const p = new Promise((resolve, reject) => {
     console.log(111);
 });
console.log(222);


//then方法
//then 方法是 Promise 实例对象中的一个方法
Promise.prototype.then方法: (onResolved, onRejected)=>{}
1.onResolved函数:成功的回调函数 (value)=>{}
2.onRejected函数:失败的回调函数 (reason)=>{}
说明:指定用于得到成功value的成功回调和用于得到失败reason的失败回调返回一个新的promise对象
```



#### catch

```js
//catch 是属于 Promise 的实例对象的 只能指定失败的回调
Promise.prototype.catch方法: (onRejected) => {}
(1)	onRejected函数: 失败的回调函数 (reason) => {}
说明: then()的语法糖, 相当于: then(undefined, onRejected)


const p=new Promise((resolve, reject)=>{
    reject('失败');
});

p.then(undefined, (reason)=>{
    console.log(reason);
});
//catch方法指定失败回调
p.catch(reason=>{console.log(reason)})
```



#### resolve

```js
# 介绍:
- resolve是Promise函数对象的方法 //Promise.resolve()
- 将一个值转换为Promise对象,值可以是任意类型
- Promise.resolve()可以看做是new Promise(resolve=>resolve())的简写,可以用于快速封装字面量对象或其他对象,将其封装成Promise实例.
# 返回值
let p = Promise.resolve(123);
- log结果:
 Promise {<fulfilled>: 123}
 fulfilled:是Promise对象成功的状态
 rejected:  是Promise对象失败的状态
 
- 详细结果:
__proto__: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: 123

# 案例
//如果resolve方法里是一个promise对象,则这个promise对象的返回状态决定了resolve的返回状态,它成功的结果值就是resolve的成功状态返回结果值
let p3=Promise.resolve(new Promise((resolve, reject)=>{resolve('ok')}));
console.log(p3);
log结果:
Promise {<fulfilled>: "ok"}
详细结果:

//resolve返回状态和结果值都和作为参数的promise对象相同
let p4=Promise.resolve(new Promise((resolve, reject)=>{reject('ok')}));
console.log(p4);
log结果:
Promise {<rejected>: "ok"}
详细结果:
Promise {<rejected>: "ok"}
    __proto__: Promise
    [[PromiseState]]: "rejected"
    [[PromiseResult]]: "ok"

解析: 里面的promise对象的状态决定了resolve返回的对象的状态.
      如果里面是个成功的promise,则返回结果也是成功的promise.
      如果里面是一个失败的promise,则返回的结果也是失败的promise.



```





#### reject

```js
是Promise函数对象的方法,将一个值转换为(失败的Promise)对象

# 返回值
let p = Promise.reject(123);
console.log(p)
log结果:
Promise {<rejected>: 123}
详细结果:
Promise {<rejected>: 123}
    __proto__: Promise
    [[PromiseState]]: "rejected"
    [[PromiseResult]]: 123


# 案例
let p3=Promise.reject(new Promise((resolve, reject)=>{resolve('ok')}));
console.log(p3);
log结果:
Promise {<rejected>: Promise}
详细log结果:
Promise {<rejected>: Promise}
__proto__: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: Promise
    __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "ok"
# 解析:无论内部promise的返回结果是成功还是失败,reject的返回结果永远都是失败                       

let p = Promise.reject(Promise.reject(Promise.reject(Promise.reject('abc'))));
console.log(p)
//log结果:
Promise {<rejected>: Promise}
    __proto__: Promise
    [[PromiseState]]: "rejected"
    [[PromiseResult]]: Promise
        __proto__: Promise
        [[PromiseState]]: "rejected"
        [[PromiseResult]]: Promise
            __proto__: Promise
            [[PromiseState]]: "rejected"
            [[PromiseResult]]: Promise
                __proto__: Promise
                [[PromiseState]]: "rejected"
                [[PromiseResult]]: "abc"


let p = Promise.resolve(Promise.resolve(Promise.resolve(Promise.reject('abc'))));



let p = Promise.resolve(Promise.resolve(Promise.resolve(Promise.reject('abc'))));
console.log(p);

//详细结果:
Promise {<rejected>: "abc"}
    __proto__: Promise
    [[PromiseState]]: "rejected"
    [[PromiseResult]]: "abc"
```







#### resolve和reject

```js
- resolve 执行, 改变了 p 对象的状态(PromiseState)『fulfilled』, 设置 p 对象成功的结果值(PromiseResult)为 『ok』
- reject 执行, 改变了 p 对象的状态(PromiseState) 『rejected』 , 设置 p 对象失败的结果值(PromiseResult)为 『error』

```





#### all

```js
Promise.all方法: (promises) => {}
(1)	promises: 包含n个promise的数组
说明: 返回一个新的promise, 只有所有的promise都成功才成功, 只要有一个失败了就直接失败. 成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。

// all 方法也是属于函数对象的
// 接受一个参数, 这个参数是promise数组
// 返回值
// 若数组中每一个promise对象状态都为 fulfilled 则返回的 promise 对象状态为成功, 并且数组中成功promise对象的结果, 为返回 promise 对象成功的结果
// 若数组中有一个promise对象是失败的, 则返回的 promise 对象状态为失败, 且返回的promise对象失败的结果为, 那个失败promise对象失败结果


let p1 = new Promise((resolve, reject) => {
    resolve('ok');
});
// let p2 = Promise.resolve('success');
let p2 = Promise.reject('error');
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('yeah!!');
    }, 1000);
});

let result = Promise.all([p1, p2, p3]);

console.log(result);
```



#### race

```js
race是属于Promise函数对象的
race接受一个promise的数组

// race 是属于 Promise 函数对象的.  race 赛跑
// race 接受一个 promise 的数组
// 返回结果也是 promise 对象
// 对象的状态由数组中, 第一个改变状态的对象决定.

let p2 = Promise.resolve('success');

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok');
    },10);
});

const result = Promise.race([p1, p2]);//通过这里查看先后顺序. 异步执行下p1状态为pending,race结果由p2返回决定.

console.log(result);
```



### 关键问题

#### 如何改变promise的状态?

```js
//3种方式改变状态:
(1)	resolve(value): 如果当前是pending就会变为fulfilled
(2)	reject(reason): 如果当前是pending就会变为rejected
(3)	抛出异常: 如果当前是pending就会变为rejected
- 其他情况下的状态值都是pending.

返回其他值
let p = new Promise((resolve, reject) => {
    // resolve();
    // reject();
    // throw '有点问题';  手动抛出错误
    // console.log(a);   a没有定义,由执行环境去抛出错误
});

console.log(p);
         
         
```



#### 为Promise对象指定多个成功或失败的回调

```js
//当promise改变为对应状态时都会调用 多次调用then方法
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error');
    }, 1000);
});

// //指定回调
p.then(value => {
    console.log(value);
}, reason => {
    console.error(reason);
});

p.then(value => {
    alert(value);
}, reason => {
    alert(reason);
});
```





#### 改变promise状态和指定回调函数(then)谁先谁后

```js
1.都有可能. 正常时先指定回调再改变状态
2.先改变状态再指定回调的方法//同步
 2.1 直接调用resolve()/reject()
 2.2 延迟更长时间才调用then()
    let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve('ok')},1000);
    })
    setTimeout(()=>{p.then(value=>{console.log(value)})},3000)
 
3.先指定回调(先调用then方法)再改变状态//执行器种直接异步调用resolve()/reject()
   let p = new Promise((resolve,reject) => {
        setTimeout(function(){
            resolve('ok')
        },1000)
     })
     p.then(value => {
         console.log(value);
     })

4.什么时候得到数据?
4.1 如果先指定的回调函数,当状态发生改变时,调用回调函数,得到数据
4.2 如果先改变的状态,当指定回调函数时,回调函数就会调用,得到数据

```





#### promise.then()返回新的promise的结果状态由什么决定

```js
//then方法的返回结果是一个promise对象
(1)	简单表达: 由then()指定的回调函数执行的结果决定(执行结果就是函数的返回值)
(2)	详细表达:                                    
①	如果抛出异常, 新promise变为rejected, reason为抛出的异常/throw抛出的值
②	如果返回的是非promise的任意值, 新promise变为fulfilled(resolved) 值为返回值
③	如果返回的是另一个新promise, 此promise的结果就会成为新promise的结果,其值也会为then方法的返回值.



```





#### promise如何串连多个操作任务?

```js
(1)	promise的then()返回一个新的promise, 可以开成then()的链式调用
(2)	通过then的链式调用串连多个同步/异步任务

let p = new Promise((resolve, reject) => {
    reject('error');
});

p.then(value => {
    console.log(value);
}, reason => {
    console.error(reason);
}).then(value => {
    console.log(111);
    return new Promise((resolve, reject) => {
        reject(333);
    })
}, reason => {
    console.error(222);
}).then(value => {
    console.log(444);
}, reason =>{
    console.error(555);
})
```



#### 链式调用实例-读取多个文件

```js
//合并1-3个HTML文件

//普通写法 回调地狱
const fs=require('fs');

fs.readFile('./resource/1.html', (err, data)=>{
    if(err) throw err;
    fs.readFile('./resource/2.html', (err, data2)=>{
        if(err) throw err;
        fs.readFile('./resource/3.html', (err, data3)=>{
            if(err) throw err;
            console.log(data+data2+data3);//加号 自动转换成字符串
        })
    })
})

//promise
const fs=require('fs');

const p=new Promise((resolve, reject)=>{
    fs.readFile('./resource/1.html', (err, data)=>{
        if(err) reject(err);
        resolve(data);
    })
});

p.then(vlaue=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./resource/2.html', (err, data)=>{
            if(err) reject(err);
            resolve([value, data]);
        })
    })
}).then(value=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./resource/3.html' (err, data)=>{
            if(err) reject(err);
            resolve([...value, data])
        })
    })
}).then(vlaue=>{
    console.log(value.join(''));
}).catch((reaso n)=>{
    console.log(reason);
    fs.writeFileSync('./error.log', reason.path+'\r\n', {falg:'a'});//错误路径
})

//promisify
const {promisify}=require('util');
const mineReadFile=promisify(require('fs').readFile);
const p1 = mineReadFile('./resource/1.html');
const p2 = mineReadFile('./resource/2.html');
const p3 = mineReadFile('./resource/3.html');

const result=Promise.all([p1, p2, p3]);
result.then(value=>{
    console.log(value.join(''));
}, reason=>{
    console.log('读取失败');
})


//async和await
const {promisify}=require('util');
const readFile=promisify(require('fs').readFile);

async function mine(){
    const one = await readFile('./resource/1.html');
    const two = await readFile('./resource/2.html');
    const three = await readFile('./resource/3.html');
    
    return console.log(one+two+three);
}

mine();
```







#### Promise异常穿透

```js
(1)	当使用promise的then链式调用时, 可以在最后指定失败的回调, 
(2)	前面任何操作出了异常, 都会传到最后失败的回调中处理


new Promise((resolve, reject) => {
    resolve('ok');
    // reject('error'); 假如是失败promise,依然会向后执行到catch
}).then(value => {
    //console.log(value);// ok 
    throw 'oh no'; //返回失败回调,向下执行,被catch获取
}).then(value => {
    console.log(value);// undefined
}).catch(reason => {
    console.error(reason);
});
```



#### Promise中断链条

```js
//链式调用执行中断 执行打印1和2后停止执行
//返回一个pending状态的promise对象 有且只有这一种方法
//传一个错误的promise对象值,会被catch捕获,如果没有catch方法会报错
//中断方法 return new Promise(()=>{})

const p=new Promise((resolve, reject)=>{
    console.log(11);
    resolve();
});
p.then((value)=>{
    console.log(22);
    return new Promise(()={});
}).then((value)=>{
    console.log(33);
}).then((value)=>{
    console.log(44);
}).then((value)=>{
    console.log(55);
})
```





### 自定义Promise

```js

```





### 自定义promise-异常传透



### 自定义promise-值传递



### 自定义promise-中断链条



### then方法回调执行是异步

```HTML
then方法回调执行是异步的

<scirpt>
	let p = new Promise((resolve, reject)=>{
    	resolve('success');
    });
    
    p.then(value=>{
    	console.log(111)
    });
    console.log(222);
</scirpt>
//打印顺序:
222
111
```







## async函数

```
async是一个关键字,用来描述async函数的.
1.函数的返回值为promise对象. 不看return. 返回的promise对象的成功和失败及结果,看return.

2.promise对象的结果由async函数执行的返回值决定. 返回规则和then方法回调返回结果是一样的.
  2.1 如果返回结果是非promise类型的值,则返回值是成功的promise
  2.2 抛出一个错误, 函数的状态为失败状态rejected, 错误值为函数返回值.
  2.3 如果返回结果是promise类型的值, 则promise的状态和值决定了这个函数的状态和返回值

带 async 关键字的函数，它使得你的函数的返回值必定是 promise 对象
也就是
如果async关键字函数返回的不是promise，会自动用Promise.resolve()包装
如果async关键字函数显式地返回promise，那就以你返回的promise为准

```



### await表达式

```html
1.	await右侧的表达式一般为promise对象, 但也可以是其它的值
2.	如果表达式是promise对象, await返回的是promise成功的值.如果是失败的值,await会把promise的异常抛出,可以使用try..catch捕获错误.
3.	如果表达式是其它值, 直接将此值作为await的返回值

await...后面的代码相当于放到成功的回调中
```





```js
await等的是右侧「表达式」的结果
右侧如果是函数，那么函数的return值就是「表达式的结果」
右侧如果是一个 'hello' 或者什么值，那表达式的结果就是 'hello'

async function async1() {
    console.log( 'async1 start' )
    await async2()
    console.log( 'async1 end' )
}
async function async2() {
    console.log( 'async2' )
}
async1()
console.log( 'script start' )

上面例子中， 'async2' 和 'script start' 谁先打印呢？
实践的结论是，从右向左的。先打印async2，后打印的script start

await 等到之后,对于await来说，分2个情况:不是promise对象,是promise对象

如果不是 promise , await会阻塞后面的代码，先执行async外面的同步代码，同步代码执行完，再回到async内部，把这个非promise的东西，作为 await表达式的结果

如果它等到的是一个 promise 对象，await 也会暂停async后面的代码，先执行async外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。

分析一下 await async2()
前文提过await，1.它先计算出右侧的结果，2.然后看到await后，中断async函数

先得到await右侧表达式的结果。执行async2()，打印同步代码console.log('async2'), 并且return Promise.resolve(undefined)
await后，中断async函数，先执行async外的同步代码
目前就直接打印 console.log('async2')

回到async内部，执行await Promise.resolve(undefined)
如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。
在我们这个例子中，就是Promise.resolve(undefined)正常处理完成，并返回其处理结果。那么await async2()就算是执行结束了。
目前这个promise的状态是fulfilled，等其处理结果返回就可以执行await下面的代码了。

那何时能拿到处理结果呢？
需要在then的第一个参数里，才能拿到结果。
所以这里的 await Promise.resolve() 就类似于 Promise.resolve(undefined).then((undefined) => {})
把then的第一个回调参数 (undefined) => {} 推入微任务队列。then执行完，才是await async2()执行结束。
await async2()执行结束，才能继续执行后面的代码

```









### async和await结合使用

#### 注意事项

```
1.	await必须写在async函数中, 但async函数中可以没有await
2.	如果await的promise失败了, 就会抛出异常, 需要通过try...catch捕获处理

```



#### 案例+++

```js
//https://www.cnblogs.com/fundebug/p/10095355.html

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}

async function async2() {
    console.log("async2");
}

console.log("script start");

setTimeout(function() {
    console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
    console.log("promise1");
    resolve();
}).then(function() {
    console.log("promise2");
});

console.log("script end");
```





```js
//await右侧不是promise对象
async function main(){
    let result = await 123;
    console.log(result);
}
main();//执行结果是123


//右侧为promise类型的值 即使是异步函数,也能正常获取成功的结果
async function main(){
    let result = await (new Promise((resolve, reject)=>{
        resolve('ok');
    }));
    console.log(result);
}
main();//执行结果是ok

async function main(){
    let p = Promise.resolve('ok');
    let result = await p;
    console.log(result);
}
main();//执行结果是ok

//如果promise的对象是失败 会抛出错误,使用try..catch
async function main(){
    try(
         let p = await (new Promise(resolve, reject)=>{
        	reject('error');
        });
    	console.log(p);
    )catch(e){
       console.log(e);
    }
}
main();//输出结果为catch函数输出的'error'
```



#### 案例2

```js
- 读取resource文件夹下的1-3个HTML文件

const fs=require('fs');
const {promisify}=require('util');
let readfile=promisify(fs.readFile);

async function main(){
    let p1=await readfile('./resource/1.html');
    let p2=await readfile('./resource/2.html');
    let p3=await readfile('./resource/3.html');

    console.log(p1+p2+p3);
}
mian();
```



#### 案例3-封装ajax

```html
- 封装ajax函数,实现获取url接口结果
<button>点击获取天气</button
<script>
function sendAjax(url){
    let xhr=new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange=function(){
       return new Promise((resolve, reject)=>{
        if(xhr.readyState === 4){
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.status)
            }
        }
    }
   })
}

const btn=document.querySelector('button');
btn.onclick=async function(){
	let url='';
	let result = await sendAjax(url);
	console.log(result);
    <!--promise方法 sendAjax.then()   -->
                                                
};
</script>
```





## JS异步之宏队列和微队列

```
1.	JS中用来存储[待执行回调函数]的队列包含2个不同特定的列队
2.	宏列队: 用来保存待执行的宏任务(回调函数), 比如: 定时器回调/DOM事件回调/ajax回调
3.	微列队: 用来保存待执行的微任务(回调), 比如: promise的回调/MutationObserver的回调
4.	JS执行时会区别这2个队列
(1)	JS引擎首先必须先执行所有的初始化同步任务代码
(2)	每次准备取出第一个宏任务执行前, 都要将所有的微任务一个一个取出来执行.微队列等级高于宏队列

```



```js
//因为是一道前端面试题，所以答案是以浏览器的eventloop机制为准的，在node平台上运行会有差异。
// https://www.cnblogs.com/fundebug/p/10095355.html

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}

async function async2() {
    console.log("async2");
}

console.log("script start");

setTimeout(function() {
    console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
    console.log("promise1");
    resolve();
}).then(function() {
    console.log("promise2");
});

console.log("script end");

//打印结果:
script start
async1 start
async2
promise1
script end
async1 end
promise2
undefined
setTimeout
```







#### 试题1

```js
<script type="text/javascript">
//宏队列 1
//微队列 3 4
//同步 2 5
 
    setTimeout(() => {
        console.log(1)
    }, 0)
    new Promise((resolve) => {
        console.log(2)
        resolve()
    }).then(
        () => {
        console.log(3)
    }).
    then(
        () => {
        console.log(4)
    })
    console.log(5)

</script> 
```





#### 案例2

```HTML

<script type="text/javascript">
    //同步  3 7 4
    //微队列 1 2
    //宏队列 5 
    let first = () => (new Promise((resolve, reject) => {
        console.log(3)
        let p = new Promise((resolve, reject) => {
            console.log(7)
            setTimeout(() => {
                console.log(5)
                resolve(6)
            }, 0)
            resolve(1)
        })
        resolve(2)
        p.then((arg) => {
            console.log(arg)
        })
    }))
    first().then((arg) => {
        console.log(arg)
    })
    console.log(4)
</script>
```



#### 案例3

```js
<script type="text/javascript">
    
    setTimeout(() => {
        console.log("0")
    }, 0);

    new Promise((resolve, reject) => {
        console.log("1")
        resolve()
    }).then(() => {
        console.log("2")
        new Promise((resolve, reject) => {
            console.log("3")
            resolve()
        }).then(() => {
            console.log("4")
        }).then(() => {
            console.log("5")
        })
    }).then(() => {
        console.log("6")
    });

    new Promise((resolve, reject) => {
        console.log("7")
        resolve()
    }).then(() => {
        console.log("8")
    })

    
</script>
```





### axios

```js
文档:http://www.axios-js.com/zh-cn/docs/
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

- 引用:
网页端: bootcdn.cn找链接: 
//<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js"></script>
服务端:npm i axios

- 特点:
1.从浏览器中创建 XMLHttpRequests
2.从 node.js 创建 http 请求
3.支持 Promise API
4.拦截请求和响应
5.转换请求数据和响应数据
6.取消请求
7.自动转换 JSON 数据
8.客户端支持防御 XSRF

```



#### axios的浏览器使用

```html
//http://www.axios-js.com/zh-cn/docs/#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE
// jQuery无法在post时向URL中传参 axios可以
<button id='btn'>
    点击发送ajax
</button>
<script>
   let btn=document.getElementById('btn');
   btn.onclick=function(){
   //axios发送ajax  axios返回一个promise
   axios({
       //请求的类型 默认
       method:'GET',
       //请求的URL
       url:,
       //自定义请求头
       headers:{
       		a:100,
       		b:200
   		},
       //URL参数 
       params:{
         c:300,
         d:400
       }  
   }).then(response=>{
       //response的结果{} 包括:status statusText headers data响应体(如果响应体为JSON,自动转为字符串)
       	console.log(response);  //输出的结果是axios返回promise对象成功的结果
   	  })    
   } 
</script>    
    
```



```js
//get请求

axios.get('/user?Id=123')
axios.get('/user', {params:{Id:123}})

//post请求
axios.post('/user', {firstName:'xx', lastName:'xxx'})

//axios API
axios(config)

axios({
    method:'get',
    url:'/user/123',
    data:{
        firstName:'xx',
        lastName:'xxx'
    }
})

axios(url[,config])
//发送get请求,默认的方法
axios('/user/123')
```





#### axios在nodejs中使用

```js

```











## 模块化规范

浏览器无法识别commonjs语法

引入模块require() 相当于在node_modules文件下模块包中的package.json下的main属性对应的值.



### 扩展阅读

```
https://segmentfault.com/a/1190000017466120    !!!
```





### 模块化介绍

### 模块化好处

### 模块化进化史

```js
1.全局function阶段
- 全局函数模式: 将不同的功能封装成不同的全局函数
- 问题: Global被污染了, 很容易引起命名冲突

2.namespace模式(命名空间)//将数据放在对象中,字面量创建对象方式
- namespace 模式: 简单对象封装
- 作用: 减少了全局变量
- 问题: 依然可以修改模块内部代码，不安全

3.IIFE模式(立即执行函数)
- IIFE模式: 匿名函数自调用(闭包)
- IIFE : immediately-invoked function expression(立即调用函数表达式)
- 作用: 数据是私有的, 外部只能通过暴露的方法操作
- 问题: 如果当前这个模块依赖另一个模块怎么办?

4.IIFE模式增强
- 引入jQuery到项目中
(function(window, $){})(window, jQuery)
- IIFE模式增强 : 引入依赖
- 这就是现代模块实现的基石


5.页面加载多个js的问题
- 一个页面需要引入多个js文件
- 问题:
  - 请求过多
  - 依赖模糊
  - 难以维护
- 这些问题可以通过现代模块化编码和项目构建来解决

```



### 模块化规范

```js
Commonjs
AMD
CMD
ES6
```



#### CommonJS

#### 说明

```js
//说明
在浏览器端: 模块需要提前编译打包处理
在服务器端: 模块的加载是运行时同步加载的
每个文件都可当作一个模块


CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。AMD规范则是非同步加载模块，允许指定回调函数。由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以CommonJS规范比较适用。但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范。
```

#### 基本语法

```js
CommonJS暴露的模块到底是什么? CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

require命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。

- 暴露模块:
module.exports=value
exports.xxx=value

- 引入模块:
require(xxx);
 - 如果是第三方模块,xxx为模块名
 - 自定义模块,xxx为模块文件路径
 
 
 如果导出的模块为单独的function功能(一个实例化对象),推荐exports.xx
 如果导出的模块为特定的类型,例如类包含了很多方法,推荐module.exports
```



```js

//定义模块代码
//module1.js
module.exports={
    msg:'module1',
    foo:function(){}, //对象方法的完整写法
    foo(){    //对象方法的简写形式   微信小程序中不能使用简化写法
        console.log(this.msg);
    }
}
//module2.js
module.exports=fucntion(){
    console.log('module2')
}

//module3.js
exports.foo=function(){
    console.log('foo()module3');
}
exports.arr=[1,2,3,3,2]

//引入第三方库,应该放置在最前面
let uniq=require('uniq');
let module1=require('./modules/module1')
let module2=require('./modules/module2')
let module3=require('./modules/module3')

module1.foo() //module1
module2() //module2
module3.foo()  //foo() module3
console.log(uniq(module3.arr)) //[1,2,3]
```













#### 实现(两种产品)

```js
- 服务端实现   Node.js
- 浏览器端实现 Browserify  //也成为CommonJS的浏览器端的打包工具 http://browserify.org


- 区别Node与Browserify
 - Node.js运行时动态加载模块(同步)
 - Browserify是在转译(编译)时就会加载打包(合并)require的模块
```



#### Browserify介绍

```
- 介绍
打包工具 可以将CommonJS模块化规范的代码打包成单独的一个JS文件
应对浏览器运行JS文件的场景. 浏览器不支持CommonJS规范代码
```

#### Browserify使用步骤

```
- 使用步骤

1.安装 npm i browserify -g //全局安装
2.用CommonJS模块化语法编写JS代码
 2.1 要有一个入口文件(app.js/index.js ..)
 2.2 该文件中编写功能代码 //引入模块 编写功能
 2.3 如果文件依赖其他模块,使用require函数引入其他模块即可
3.打包
 browserify 入口文件路径 -o 输出文件路径

4.HTML文件中引入[输出的文件路径]
```





### 文件夹命名规范src/build/dist

```js
src 文件夹的名字,src里放的都是程序员编写的代码(源文件)
build 构建. 放置的是打包后的文件
dist 发布. 放置最终优化后的代码
```





### ES6

#### 说明

```js
- 依赖模块需要编译打包处理
- 文档 https://es6.ruanyifeng.com/

无论什么样的暴露方式,向外暴露的都是对象,只是形式不一样.
默认暴露:
 export default 100; 
//暴露的是一个对象,这个对象是以default为属性名,暴露内容为vi的对象
{default: 100}

//引入:
默认暴露的引入: import a from '..'
默认暴露的全写: import {default as a} from '..'
由于默认暴露全写麻烦,所以才出现简写形式

分别暴露:
export const a = 100;
export const reqxx = () => {}
//最终暴露出文件的时候,会自动把分别暴露的信息封装为一个对象
{
    a:a,
    reqxx:reqxx
}
引入的时候:
import {reqxx} from './xx.js';

整体暴露
const a = 100;
const obj = {a:100};
//最终暴露的是export后面的对象
export {
	a,
    obj
}

引入:
import {a, obj} from './xx.js';

//无论什么暴露方式,如果想拿到所有暴露出文件的那个整体对象,
import * as xx from './xx.js';
```



#### 语法

```
- 暴露模块
1.分别暴露 export 暴露内容
2.统一暴露 export {xxx, yyy}
3.默认暴露 export default 暴露内容/{暴露内容}

- 引入模块
1.通用引入 import * as m1 from './m1'
2.解构赋值形式引入 import {xxx} from './m1';  //不是解构赋值
3.简便导入 import m3 from './m3'
```



#### Babel和Browserify 浏览器端实现ES6

```js
1. 使用Babel 将ES6内容转换为ES5内容
2. 使用Browserify编译打包JS
```



### 暴露方式

#### 1.分别暴露

```js
export 函数/其他数据

===========================================
export function fn(){};
export const data='中文汉字';
```



#### 2. 统一暴露

```js
// 这里不是对象的简写,不能写对象的完整形式(变量名:对象名)
// 用的比较少.可以分别暴露和全部暴露
export{
	变量名,
    变量名
}
==========================================
function fn(a, b){
    return a+b;
}
const name='中文汉字';

export{
	fn,
    name
}
```



#### 3.默认暴露

```js
export default 暴露的数据名称
export default {}

export default{
    //对象形式居多,其他基本数据类型/函数都可以
}


=======================================
export default{
	type:'string',
    others:'H20201218', //带引号可运行    
}    
```





### 引入方式

#### 1.通用方式

```js
//特点:通杀
//* 所有
//as 设置别名
//将所有暴露的数据都保存在变量m1当中
import * as m1 from './m1'
```



#### 2.解构赋值形式引入

```js

分别暴露的引入 import {变量1, 变量2} from './m1'
统一暴露的引入 import {变量3, 变量4, 变量2 as 新变量2} from './m2' 
默认暴露的引入 import {default as aaa} from '路径/name.js' //aaa代表暴露的数据 as有设置别名的意思

//一个网页中引入多个模块,模块之间有重名变量的情况,则将其中重名变量使用as更新下变量名
```



#### 3.简便导入

```js
//只支持默认暴露
//默认暴露,导入名称可以与暴露名称不一致

import m3 from './m3';
console.log(m3);

导出m3.js文件:
export default{
    cls:'aaaa',
    type:'niu',   //最后可以加引号
}
```



### ES6模块化代码使用流程

```
1.使用ES6模块化语法编写代码
2.安装
 2.1  全局安装 npm i babel-cli browserify -g
 2.2  局部安装 npm i babel-preset-es2015
3.将ES6语法转化为ES5
 3.1 项目文件下创建.babelrc填写配置内容 //.babelrc是 babel 运行配置文件,rc=run control
 {
    "presets": ["es2015"]
 }
 3.2 babel ES6文件夹路径 -d 输出的ES5的存放目录路径
    //例如:babel ./src/js -d ./build/js
4.将转换后的代码进行打包
 browserify 入门文件路径 -o 输出文件路径
 //例如 browserify ./build/js/app.js -o ./dist/js/bundle.js
 
5.HTML文件引入输出后的文件路径 
```



### ES6模块-抽奖案例

```html
src文件下
<script>
===========app.js=================
//npm i jquery   安装jQuery  
//导入jQuery
improt $ from 'jquery';
//导入其他模块
import {percent} from './percent';
import {rand}    from './rand';
$.('button').on('click', function(){
    if(percent(30)){
        console.log('恭喜恭喜');
    }else{
        console.log('再接再厉');
    }
})  
===========percent.js=================
//概率算法 percent(10) 有10%概率返回true  
import {rand} from './rand';
export function percent(n){
    let num=random(1, 100);
    if(num<=n){           //重要
        return true;
    }else{
        return false;
    }
}   
===========rand.js=================
export function(x,y){
    return Math.round(Math.random()*(y-x)+x);
    //return Math.ceil(Math.random() * (n - m + 1)) + m - 1);
}    
</script>
===========index.html=================
<body>
    ...
    <button>
        点击抽奖-ES6语法
    </button>
    <script src='./dist/js/bundle.js'></script>  //js引入需要放在按钮之后.放在上面无法获取到按钮元素,会报错.
</body> 
```









### gulp

### 介绍

  * gulp 是一个基于 Nodejs 的自动化构建工具，中文主页: http://www.gulpjs.com.cn/
  * 能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务

### 使用步骤：

1. 安装 nodejs

2. 全局安装 gulp

   ```shell
   npm install gulp -g
   ```

3. 局部安装gulp

   ```shell
   npm init 
   npm install gulp --save-dev
   ```

4. 创建一个简单的应用，文件结构如下：

   ```js
   |- gulpfile.js  								//gulp运行的配置文件 和package.json文件同级,根目录
   |- package.json
   ```

5. 配置编码: gulpfile.js

   ```js
   //引入gulp模块
   const gulp = require('gulp');
   
   //定义任务
   gulp.task('任务名', function() {
     // 将你的任务的任务代码放在这
   });
   ```

6. 构建命令: 

   ```shell
   gulp 任务名
   ```

   > The following tasks did not complete: default
   >
   > Did you forget to signal async completion?
   >
   > 错误的解决方法：
   >
   > 1. 返回一个可读流
   > 2. 传入一个回调并执行
   > 3. 回调函数设置为 async 函数

### gulp 插件

gulp 插件是专门针对 gulp 开发的工具包（npm包），用来实现特定的功能。

#### gulp-jshint 语法检查：

JSHint 是一个 JavaScript 的代码质量检查工具。gulp-jshint 是为 gulp 封装的插件

使用步骤：

1. 安装插件

   ```shell script
   npm install jshint gulp-jshint --save-dev
   ```

2. 创建配置文件 .jshintrc（选项配置地址 <https://jshint.com/docs/options/>）

   ```json
   {
       "esversion": 6,  
       "asi":true,				// 是否允许不写结尾处的分号
       "undef": true, 			// 是否使用之前必须定义
       "devel": true, 			// 是否没有定义也可以使用 console，alert 进行调试
       "eqeqeq": true,			// 是否强制使用 === 
       "unused": true, 		// 是否定义了必须使用
       "globals": { 			// 配置全局变量，直接使用不会报错
           "$": true 
       }
   }
   ```

   

3. gulpfile.js 引入 jshint

   ```js
   const jshint = require('gulp-jshint')
   ```

4. 定义任务

   ```js
   gulp.task('jshint', function() {
     // 将你的任务的任务代码放在这
     return gulp.src('./src/js/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
   });
   ```

   4.运行命令

```
    gulp jshint 
```

#### gulp-babel 语法转换

Babel 是一个 JavaScript 编译器，可以将新的 JS 语法（ES6、7、8）转化为浏览器识别的 ES5 语法。

gulp-babel 是 babel 为 gulp 封装的插件

1. 安装插件： 

   ```shell
   npm install --save-dev gulp-babel @babel/core @babel/preset-env
   ```

   @babel/core 是 babel 的核心包

   @babel/preset-env  预设的包 (babel-preset-es2015)

2. gulpfile.js 引入：

   ```js
   const babel = require('gulp-babel');
   ```

3. 定义任务:

   ```js
   gulp.task('babel', () => {
       return gulp.src('./src/js/*.js')
           .pipe(babel({ //进行语法转换
               presets: ['@babel/env']
           })).pipe(gulp.dest('build/js'))//输出到指定目录
   });
   ```

4. 运行命令：

   ```
   gulp babel
   ```

> ==经过 babel 转换后的 ES6 模块化语法变成了 CommonJs 语法，还需要用 browserify 转换==

#### gulp-browserify 转换 CommonJs 模块化语法

1. 安装插件：

   ```shell
   npm install --save-dev gulp-browserify
   ```

2. 安装插件（用于重命名）

   ```
   npm install --save-dev gulp-rename
   ```

3. 引入：

   ```js
   const browserify = require('gulp-browserify');
   const rename = require('gulp-rename');
   ```

4. 定义任务:

   ```js
   gulp.task('browserify', function() {
     return gulp.src('./build/js/index.js') //入口文件
       .pipe(browserify())					//将CommonJs语法转换为浏览器能识别的语法
       .pipe(rename('built.js'))			//为了防止冲突将文件重命名
       .pipe(gulp.dest('build/js'))		//输出到指定位置
   });
   ```

5. 运行命令

   ```shell
   gulp browserify
   ```


#### 配置默认任务，让多个任务依次执行

定义默认任务

```js
gulp.task('default', gulp.series('jshint', 'babel', 'browserify'));
```




#### gulp-uglify 压缩 JavaScript

1. 安装插件

   ```shell script
   npm install --save-dev gulp-uglify
   ```

2. 引入插件

   ```js
   const uglify = require('gulp-uglify');
   ```

3. 定义任务

   ```js
   gulp.task('uglify', function () {
     return gulp.src('build/js/built.js')
       .pipe(uglify())  //压缩js
       .pipe(rename('dist.min.js'))
       .pipe(gulp.dest('dist/js'))
   });
   ```

4. 运行命令

   ```shell script
   gulp uglify
   ```


#### gulp-less 编译 less 文件及使用 less-plugin-autoprefix 扩展前缀

1. 安装插件 

   ```shell script
   npm install gulp-less less-plugin-autoprefix
   ```

2. 引入插件

   ```js
   const less = require('gulp-less');
   const LessAutoprefix = require('less-plugin-autoprefix');
   const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
   ```

3. 定义任务：

   ```js
   gulp.task('less', function () {
     return gulp.src('./src/css/*.less')
       .pipe(less({
         plugins: [autoprefix]//自动扩展前缀
       }))
       .pipe(gulp.dest('./build/css'));
   });
   ```

4. 运行命令：

   ```shell
   gulp less 
   ```

#### 使用 gulp-concat 合并 CSS 文件

1. 安装插件

   ```shell script
   npm install --save-dev gulp-concat
   ```

2. 引入

   ```js
   const concat = require('gulp-concat');
   ```

3. 定义任务

   ```js
   gulp.task('concat', function () {
       return gulp.src('./build/css/*.css')
           .pipe(concat('built.css'))
           .pipe(gulp.dest('./build/css/concat'));
   });
   ```

4. 运行命令：`gulp concat` 

#### gulp-cssmin 压缩 CSS 文件

1. 安装插件：

   ```shell script
   npm install --save-dev gulp-cssmin
   ```

2. 引入

   ```js
   const cssmin = require('gulp-cssmin');
   ```

3. 定义任务

   ```js
   gulp.task('cssmin', function () {
       return gulp.src('build/css/concat/built.css')
           .pipe(cssmin())
           .pipe(rename('dist.min.css'))
           .pipe(gulp.dest('dist/css'));
   });
   ```

#### gulp-htmlmin 压缩 HTML 文件

1. 安装插件

   ```shell script
   npm install --save gulp-htmlmin
   ```

2. 引入

   ```js
   const htmlmin = require('gulp-htmlmin');
   ```

3. 定义任务

   ```js
   gulp.task('htmlmin', () => {
     return gulp.src('src/index.html')
       .pipe(htmlmin({
         collapseWhitespace: true ,//去除空格
         removeComments:true //去除注释
       }))
       .pipe(gulp.dest('dist'));
   });
   ```

#### 自动化配置

1. 安装模块

   ```shell script
   npm install gulp-livereload gulp-connect opn --save-dev
   ```


2. 引入模块

   ```js
   const livereload = require('gulp-livereload');
   const connect = require('gulp-connect');
   const opn = require('opn');
   ```

3. 自动执行任务，编译代码

   ```js
   //1. 在所有可能要执行任务后面加上 .pipe(livereload());
   gulp.task('watch', function () {
       //2. 启动热加载服务
       livereload.listen();
       //3. 通过自己服务器打开项目，自动刷新
       connect.server({
           root: 'dist',
           port: 3000,
           livereload: true  // 自动刷新
       });
       //3. 自动打开浏览器
       opn('http://localhost:3000/index.html');
       //4. 监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
       gulp.watch('src/css/*.less', gulp.series(['less', 'concat', 'cssmin']));
       gulp.watch('./src/js/*.js', gulp.series(['jshint', 'babel', 'browserify', 'uglify']));
       gulp.watch('./src/index.html', gulp.series('htmlmin'));
   });
   ```


> 备注：必须要在 src 文件夹中修改 index.html 中引入样式和脚本的路径，gulp 不会自动处理路径。

### 相关插件:

* gulp-concat : 合并文件(js/css)
* gulp-uglify : 压缩js文件
* gulp-rename : 文件重命名
* gulp-less : 编译less
* gulp-livereload : 实时自动编译刷新

### 重要API

* gulp.src(filePath/pathArr) : 
  * 指向指定路径的所有文件, 返回文件流对象
  * 用于读取文件
* gulp.dest(dirPath/pathArr)
  * 指向指定的所有文件夹
  * 用于向文件夹中输出文件
* gulp.task(name, [deps], fn) 
  * 定义一个任务
* gulp.watch() 
  * 监视文件的变化