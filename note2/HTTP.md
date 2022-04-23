

## HTTP协议

### 背景

> 前端后端交互，这时候我们需要了解什么是请求报文，什么是响应报文，



### what

> 介绍: 超文本传输协议(英语：**H**yper**T**ext **T**ransfer **P**rotocol，缩写：**HTTP**)是一种用于分布式、协作式和[超媒体](https://zh.wikipedia.org/wiki/超媒體)信息系统的[应用层](https://zh.wikipedia.org/wiki/应用层)[协议](https://zh.wikipedia.org/wiki/网络传输协议)[[1\]](https://zh.wikipedia.org/wiki/超文本传输协议#cite_note-ietf2616-1)。HTTP是[万维网](https://zh.wikipedia.org/wiki/全球資訊網)的数据通信的基础。
>
> 设计HTTP最初的目的是为了提供一种发布和接收[HTML](https://zh.wikipedia.org/wiki/HTML)页面的方法。通过HTTP或者[HTTPS](https://zh.wikipedia.org/wiki/HTTPS)协议请求的资源由[统一资源标识符](https://zh.wikipedia.org/wiki/统一资源标志符)（Uniform Resource Identifiers，URI）来标识。
>
> 协议主要规定了两方面的内容:
>
> * 客户端向服务器发送数据,称之为==请求报文==
> * 服务器向客户端返回数据,称之为==响应报文==

**简单理解**

> **HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范**

**超文本**

*超文本*是用超链接的方法，将各种不同空间的文字信息组织在一起的网状文本.最成功的超文本系统之应用，当属在互联网上使用的[万维网](https://zh.wikipedia.org/wiki/全球資訊網)[[2\]](https://zh.wikipedia.org/wiki/超文本#cite_note-2)。



### 概述

HTTP是一个客户端（用户）和服务端（网站）之间请求和应答的标准，通常使用[TCP协议](https://zh.wikipedia.org/wiki/传输控制协议)。通过使用[网页浏览器](https://zh.wikipedia.org/wiki/網頁瀏覽器)、[网络爬虫](https://zh.wikipedia.org/wiki/网络爬虫)或者其它的工具，客户端发起一个HTTP请求到服务器上指定端口（默认[端口](https://zh.wikipedia.org/wiki/通訊埠)为80）。我们称这个客户端为用户代理程序（user agent）。应答的服务器上存储着一些资源，比如HTML文件和图像。我们称这个应答服务器为源服务器（origin server）。在用户代理和源服务器中间可能存在多个“中间层”，比如[代理服务器](https://zh.wikipedia.org/wiki/代理伺服器)、[网关](https://zh.wikipedia.org/wiki/网关)或者[隧道](https://zh.wikipedia.org/wiki/隧道)（tunnel）。

尽管[TCP/IP](https://zh.wikipedia.org/wiki/TCP/IP)协议是互联网上最流行的应用，但是在HTTP协议中并没有规定它必须使用或它支持的层。事实上HTTP可以在任何互联网协议或其他网络上实现。HTTP假定其下层协议提供可靠的传输。因此，任何能够提供这种保证的协议都可以被其使用，所以其在TCP/IP协议族使用TCP作为其传输层。

通常，由HTTP客户端发起一个请求，创建一个到服务器指定端口（默认是80端口）的TCP连接。HTTP服务器则在那个端口监听客户端的请求。一旦收到请求，服务器会向客户端返回一个状态，比如"HTTP/1.1 200 OK"，以及返回的内容，如请求的文件、错误消息、或者其它信息。



### 请求方法

HTTP/1.1协议中共定义了八种方法（也叫“动作”）来以不同方式操作指定的资源：

- GET

  向指定的资源发出“显示”请求。使用GET方法应该只用在读取资料，而不应当被用于产生“[副作用](https://zh.wikipedia.org/wiki/超文本传输协议#副作用)”的操作中，例如在[网络应用程序](https://zh.wikipedia.org/wiki/网络应用程序)中。其中一个原因是GET可能会被[网络爬虫](https://zh.wikipedia.org/wiki/網路爬蟲)等随意访问。参见[安全方法](https://zh.wikipedia.org/wiki/超文本传输协议#安全方法)。浏览器直接发出的GET只能由一个url触发。GET上要在url之外带一些参数就只能依靠url上附带querystring。

- HEAD

  与GET方法一样，都是向服务器发出指定资源的请求。只不过服务器将不传回资源的本文部分。它的好处在于，使用这个方法可以在不必传输全部内容的情况下，就可以获取其中“关于该资源的信息”（元信息或称元数据）。

- POST

  向指定资源提交数据，请求服务器进行处理（例如提交表单或者上传文件）。数据被包含在请求本文中。这个请求可能会创建新的资源或修改现有资源，或二者皆有。每次提交，表单的数据被浏览器用编码到HTTP请求的body里。浏览器发出的POST请求的body主要有两种格式，一种是application/x-www-form-urlencoded用来传输简单的数据，大概就是"key1=value1&key2=value2"这样的格式。另外一种是传文件，会采用multipart/form-data格式。采用后者是因为application/x-www-form-urlencoded的编码方式对于文件这种二进制的数据非常低效。

- PUT

  向指定资源位置上传其最新内容。

- DELETE

  请求服务器删除Request-URI所标识的资源。

- TRACE

  回显服务器收到的请求，主要用于测试或诊断。

- OPTIONS

  这个方法可使服务器传回该资源所支持的所有HTTP请求方法。用'*'来代替资源名称，向Web服务器发送OPTIONS请求，可以测试服务器功能是否正常运作。

- CONNECT

  HTTP/1.1协议中预留给能够将连接改为隧道方式的代理服务器。通常用于SSL加密服务器的链接（经由非加密的HTTP代理服务器）。

方法名称是区分大小写的。当某个请求所针对的资源不支持对应的请求方法的时候，服务器应当返回[状态码405](https://zh.wikipedia.org/wiki/HTTP状态码#405)（Method Not Allowed），当服务器不认识或者不支持对应的请求方法的时候，应当返回[状态码501](https://zh.wikipedia.org/wiki/HTTP状态码#501)（Not Implemented）。

**HTTP服务器至少应该实现GET和HEAD方法**，其他方法都是可选的。当然，所有的方法支持的实现都应当符合下述的方法各自的语义定义。此外，除了上述方法，特定的HTTP服务器还能够扩展自定义的方法。例如：

- PATCH（由 [RFC 5789](https://tools.ietf.org/html/rfc5789) 指定的方法）

**安全方法**

对于GET和HEAD方法而言，除了进行获取资源信息外，这些请求不应当再有其他意义。也就是说，这些方法应当被认为是“安全的”。 客户端可能会使用其他“非安全”方法，例如POST，PUT及DELETE，应该以特殊的方式（通常是按钮而不是[超链接](https://zh.wikipedia.org/wiki/超链接)）告知客户可能的后果（例如一个按钮控制的资金交易），或请求的操作可能是不安全的（例如某个文件将被上传或删除）。

但是，不能想当然地认为服务器在处理某个GET请求时不会产生任何副作用。事实上，很多动态资源会把这作为其特性。这里重要的区别在于用户并没有请求这一副作用，因此不应由用户为这些副作用承担责任。

**副作用**

假如在不考虑诸如错误或者过期等问题的情况下，若干次请求的副作用与单次请求相同或者根本没有副作用，那么这些请求方法就能够被视作“[幂等(idempotence)](https://zh.wikipedia.org/wiki/冪等)”的。GET，HEAD，PUT和DELETE方法都有这样的幂等属性，同样由于根据协议，OPTIONS，TRACE都不应有副作用，因此也理所当然也是幂等的。

假如一个由若干请求组成的请求序列产生的结果，在重复执行这个请求序列或者其中任何一个或多个请求后仍没有发生变化，则这个请求序列便是“幂等”的。但是，可能出现一个由若干请求组成的请求序列是“非幂等”的，即使这个请求序列中所有执行的请求方法都是幂等的。例如，这个请求序列的结果依赖于某个会在下次执行这个序列的过程中被修改的变量。

### 版本

> HTTP的发展是由[蒂姆·伯纳斯-李](https://zh.wikipedia.org/wiki/提姆·柏內茲-李)于1989年在[欧洲核子研究组织](https://zh.wikipedia.org/wiki/歐洲核子研究組織)（CERN）所发起
>
> 1999年6月公布的 [RFC 2616](https://tools.ietf.org/html/rfc2616)，定义了HTTP协议中现今广泛使用的一个版本——HTTP 1.1。
>
> 2014年12月，[互联网工程任务组](https://zh.wikipedia.org/wiki/互联网工程任务组)（IETF）的Hypertext Transfer Protocol Bis（httpbis）工作小组将[HTTP/2](https://zh.wikipedia.org/wiki/HTTP/2)标准提议递交至[IESG](https://zh.wikipedia.org/w/index.php?title=IESG&action=edit&redlink=1)进行讨论[[2\]](https://zh.wikipedia.org/wiki/超文本传输协议#cite_note-2)，于2015年2月17日被批准。[[3\]](https://zh.wikipedia.org/wiki/超文本传输协议#cite_note-approval2-3) 
>
> HTTP/2标准于2015年5月以RFC 7540正式发表，取代HTTP 1.1成为HTTP的实现标准。[[4\]](https://zh.wikipedia.org/wiki/超文本传输协议#cite_note-rfc7540-4)



HTTP/1.0

这是第一个在通讯中指定版本号的HTTP协议版本。

HTTP/1.1

默认采用持续连接（Connection: keep-alive），能很好地配合代理服务器工作。还支持以[管道方式](https://zh.wikipedia.org/wiki/HTTP管线化)在同时发送多个请求，以便降低线路负载，提高传输速度。

HTTP/1.1相较于HTTP/1.0协议的区别主要体现在：

- 缓存处理
- 带宽优化及网络连接的使用
- 错误通知的管理
- 消息在网络中的发送
- 互联网地址的维护
- 安全性及完整性

HTTP/2, HTTP/3

they have kept the above mentioned features of HTTP/1.1



### HTTP/1.1 request messages

> Request messages are sent by a client to a target server

#### Request syntax

A client sends *request messages* to the server, which consist of:

* a **request line**, consisting of the case-sensitive(区分大小写) request method, a [space](https://en.wikipedia.org/wiki/Space_(punctuation)), the requested URL, another space, the protocol version, a [carriage return](https://en.wikipedia.org/wiki/Carriage_return),(回车) and a [line feed](https://en.wikipedia.org/wiki/Line_feed)(换行), e.g.:

> GET /images/logo.png HTTP/1.1

* **zero or more [request header fields](https://en.wikipedia.org/wiki/HTTP_request_header_field)** (at least 1 or more headers in case of HTTP/1.1), each consisting of the case-insensitive field name(域名), a colon(冒号), optional leading [whitespace](https://en.wikipedia.org/wiki/Whitespace_(computer_science))(可选前导空格), the field value, an optional trailing whitespace(空白;末尾无用空白) and ending with a carriage return and a line feed, e.g.:

> Host:  www.example.com
>
> Accept-Language: en

* **an empty line**, consisting of a carriage return and a line feed;
* **an optional [message body](https://en.wikipedia.org/wiki/HTTP_message_body)**.

In the HTTP/1.1 protocol, all header fields except `Host: hostname` are optional.



#### Request methods



### HTTP/1.1 response messages

> A response message is sent by a server to a client as a reply to its former request message.

#### Response syntax

> A server sends *response messages* to the client, which consist of

* a **status line**, consisting of the protocol version, a [space](https://en.wikipedia.org/wiki/Space_(punctuation)), the [response status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), another space, a possibly empty reason phrase, a [carriage return](https://en.wikipedia.org/wiki/Carriage_return) and a [line feed](https://en.wikipedia.org/wiki/Line_feed), e.g.:

```
HTTP/1.1 200 OK
```



* zero or more [response header fields](https://en.wikipedia.org/wiki/HTTP_response_header_field), each consisting of the case-insensitive field name, a colon, optional leading [whitespace](https://en.wikipedia.org/wiki/Whitespace_(computer_science)), the field value, an optional trailing whitespace and ending with a carriage return and a line feed, e.g.:

```
Content-Type: text/html
```

- an empty line, consisting of a carriage return and a line feed;
- an optional [message body](https://en.wikipedia.org/wiki/HTTP_message_body).



#### Response status code







### 状态码

> [List of HTTP status codes - Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

#### 概述

> **HTTP状态码**（英语：HTTP Status Code）是用以表示[网页服务器](https://zh.wikipedia.org/wiki/網頁伺服器)[超文本传输协议](https://zh.wikipedia.org/wiki/超文本传输协议)响应状态的3位数字代码。
>
> 所有状态码被分为五类，状态码的第一个数字代表了响应的五种状态之一。所示的消息短语是典型的，但是可以提供任何可读取的替代方案。 除非另有说明，状态码是HTTP/1.1标准（[RFC 7231](https://tools.ietf.org/html/rfc7231)）的一部分。[[1\]](https://zh.wikipedia.org/wiki/HTTP状态码#cite_note-1)
>
> HTTP状态码的官方注册表由[互联网号码分配局](https://zh.wikipedia.org/wiki/互联网号码分配局)（Internet Assigned Numbers Authority）维护

### 5 classes standard

There are five classes defined by the standard:

- *1xx informational response* – the request was received, continuing process
- *2xx successful* – the request was successfully received, understood, and accepted
- *3xx redirection* – further action needs to be taken in order to complete the request
- *4xx client error* – the request contains bad syntax or cannot be fulfilled
- *5xx server error* – the server failed to fulfil an apparently valid request





> 所有HTTP响应的第一行都是**状态行**，依次是当前**HTTP版本号**，3位数字组成的[状态代码](https://zh.wikipedia.org/wiki/HTTP状态码)，以及描述状态的短语，彼此由空格分隔。









### 端口号

```js
- 是计算机服务的端口,一台计算机有65536个端口. 2**16
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







## HTTP HTTPS

> https://juejin.cn/post/7016593221815910408

### 概述

http: 是一个客户端和服务器端请求和应答的标准（TCP），用于从 WWW 服务器传输超文本到本地浏览器的超文本传输协议。
 https:是以安全为目标的 HTTP 通道，即 HTTP 下 加入 SSL 层进行加密。其作用是：建立一个信息安全通道，来确保数据的传输，确保网站的真实性。



### 区别及优缺点

http 是超文本传输协议，信息是明文传输，HTTPS 协议要比 http 协议`安全`，https 是具有安全性的 ssl 加密传输协议，可防止数据在传输过程中被窃取、改变，确保数据的完整性(当然这种安全性并非绝对的，对于更深入的 Web 安全问题，此处暂且不表)。

http 协议的`默认端口`为 80，https 的默认端口为 443。

http 的连接很简单，是无状态的。https 握手阶段比较`费时`，会使页面加载时间延长 50%，增加 10%~20%的耗电。

https `缓存`不如 http 高效，会增加数据开销。

Https 协议需要 ca 证书，费用较高，功能越强大的`证书费`用越高。

SSL 证书需要绑定 `IP`，不能再同一个 IP 上绑定多个域名，IPV4 资源支持不了这种消耗。



###  HTTPS协议工作原理

客户端在使用 HTTPS 方式与 Web 服务器通信时有以下几个步骤：

1. 客户端使用 https url 访问服务器，则要求 web 服务器`建立 ssl 链接`。
2. web 服务器接收到客户端的请求之后，会`将网站的证书（证书中包含了公钥），传输给客户端`。
3. 客户端和 web 服务器端开始`协商 SSL 链接的安全等级`，也就是加密等级。
4. 客户端浏览器通过双方协商一致的安全等级，`建立会话密钥`，然后通过网站的公钥来加密会话密钥，并传送给网站。
5. web 服务器`通过自己的私钥解密出会话密钥`。
6. web 服务器`通过会话密钥加密与客户端之间的通信`。

[解读HTTP1/HTTP2/HTTP3](https://juejin.cn/post/6995109407545622542)





## 浏览器相关原理

> [浏览器相关原理(面试题)详细总结一 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903962216824839#heading-10)
>
> [浏览器相关原理(面试题)详细总结二 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903969693646862#heading-1)

### 1.Chrome打开一个页面需要启动多少进程?分别有哪些进程?

浏览器从关闭状态进行启动，然后新开 1 个页面至少需要 1 个网络进程、1 个浏览器进程、1 个 GPU 进程以及 1 个渲染进程，共 4 个进程；后续再新开标签页，浏览器、网络进程、GPU进程是共享的，不会重新启动，如果2个页面属于同一站点的话，并且从a页面中打开的b页面，那么他们也会共用一个渲染进程，否则新开一个渲染进程。

最新的 Chrome 浏览器包括：1 个浏览器（Browser）主进程、1 个 GPU 进程、1 个网络（NetWork）进程、多个渲染进程和多个插件进程。

| 名称       | 定义                                                         |
| ---------- | ------------------------------------------------------------ |
| 浏览器进程 | 主要负责界面显示、用户交互、子进程管理，同时提供存储等功能   |
| 渲染进程   | 核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。 |
| GPU进程    | Chrome 刚开始发布的时候是没有 GPU 进程的。而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程 |
| 网络进程   | 主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程 |
| 插件进程   | 主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响 |



### 2.如何保证页面文件能被完成送达浏览器

#### 背景

互联网中的数据是通过数据包来传输的。数据包要在互联网上进行传输，就要符合网际协议(IP)，互联网上不同的在线设备都有唯一的地址，地址只是一个数字，只要知道这个具体的地址，就可以往这里发送信息。

如果要想把一个数据包从主机 A 发送给主机 B，那么在传输之前，数据包上会被附加上主机 B 的 IP 地址信息，这样在传输过程中才能正确寻址。额外地，数据包上还会附加上主机 A 本身的 IP 地址，有了这些信息主机 B 才可以回复信息给主机 A。这些附加的信息会被装进一个叫 IP 头的数据结构里。IP 头是 IP 数据包开头的信息，包含 IP 版本、源 IP 地址、目标 IP 地址、生存时间等信息。

IP 是非常底层的协议，只负责把数据包传送到对方电脑，但是对方电脑并不知道把数据包交给哪个程序，是交给浏览器还是交给王者荣耀？因此，需要基于 IP 之上开发能和应用打交道的协议，最常见的是`用户数据包协议（User Datagram Protocol)，简称UDP`和`传输控制协议（Transmission Control Protocol）,简称TCP`.



#### 传输过程

1.上层将数据包交给传输层

2.传输层会在数据包前面加上`UDP`头, 组成新的UDP数据包,再将新的UDP数据包交给网络层

3.网络层再将IP头附加到数据包上,组成新的IP数据包,并交给底层

4.数据包被传输到主机B的网络层,在这里主机B拆开IP头信息,并将拆开来的数据包交给传输层

5.在传输层,数据包中的UDP头会被拆开,并根据UDP中所提供的端口号,把数据部分交给上层的应用程序

6.最终,数据包就发送到主机B上层的应用程序这里



### 3.UCP和TCP的区别

* TCP协议在传送数据段的时候要给段标号；UDP协议不

* TCP协议可靠；UDP协议不可靠

* TCP协议是面向连接；UDP协议采用无连接

* TCP协议负载较高，采用虚电路；UDP采用无连接

* TCP协议的发送方要确认接收方是否收到数据段（3次握手协议）

* TCP协议采用窗口技术和流控制

### 4.TCP传输的详细过程

#### 4.1 进行3次握手,尽力TCP连接

#### 4.2 发送HTTP请求,服务器处理请求,返回响应结果

#### 4.3 关闭TCP连接




### 5.站点第二次打开的速度会快很多?

主要原因是第一次加载页面过程中，缓存了一些耗时的数据。 那么，哪些数据会被缓存呢？

#### 5.1 DNS缓存

在浏览器本地把对应的 IP 和域名关联起来，这样在进行DNS解析的时候就很快

#### 5.2 MemoryCache

是指存在内存中的缓存。从优先级上来说，它是浏览器最先尝试去命中的一种缓存。从效率上来说，它是响应速度最快的一种缓存。 内存缓存是快的，也是“短命”的。它和渲染进程“生死相依”，当进程结束后，也就是 tab 关闭以后，内存里的数据也将不复存在。

#### 5.3 浏览器缓存

浏览器缓存，也称Http缓存，分为强缓存和协商缓存。优先级较高的是强缓存，在命中强缓存失败的情况下，才会走协商缓存。

**强缓存**

`强缓存`是利用 http 头中的 `Expires` 和 `Cache-Control` 两个字段来控制的。强缓存中，当请求再次发出时，浏览器会根据其中的 expires 和 cache-control 判断目标资源是否“命中”强缓存，若命中则直接从缓存中获取资源，不会再与服务端发生通信。

实现强缓存，过去我们一直用expires。当服务器返回响应时，在 Response Headers 中将过期时间写入 expires 字段。像这样

```javascript
expires: Wed, 12 Sep 2019 06:12:18 GMT
```

可以看到，expires 是一个时间戳，接下来如果我们试图再次向服务器请求资源，浏览器就会先对比本地时间和 expires 的时间戳，如果本地时间小于 expires 设定的过期时间，那么就直接去缓存中取这个资源。

从这样的描述中大家也不难猜测，expires 是有问题的，它最大的问题在于对“本地时间”的依赖。如果服务端和客户端的时间设置可能不同，或者我直接手动去把客户端的时间改掉，那么 expires 将无法达到我们的预期。

考虑到 expires 的局限性，HTTP1.1 新增了`Cache-Control`字段来完成 expires 的任务。expires 能做的事情，Cache-Control 都能做；expires 完成不了的事情，Cache-Control 也能做。因此，Cache-Control 可以视作是 expires 的完全替代方案。在当下的前端实践里，我们继续使用 expires 的唯一目的就是向下兼容.

```javascript
cache-control: max-age=31536000
```

在 Cache-Control 中，我们通过max-age来控制资源的有效期。max-age 不是一个时间戳，而是一个时间长度。在本例中，max-age 是 31536000 秒，它意味着该资源在 31536000 秒以内都是有效的，完美地规避了时间戳带来的潜在问题。

Cache-Control 相对于 expires 更加准确，它的优先级也更高。当 Cache-Control 与 expires 同时出现时，我们以 Cache-Control 为准。

**协商缓存**

协商缓存依赖于服务端与浏览器之间的通信。协商缓存机制下，浏览器需要向服务器去询问缓存的相关信息，进而判断是重新发起请求、下载完整的响应，还是从本地获取缓存的资源。如果服务端提示缓存资源未改动（Not Modified），资源会被重定向到浏览器缓存，<u>这种情况下网络请求对应的状态码是 304。</u>

协商缓存的实现,从 `Last-Modified` 到 `Etag`,Last-Modified 是一个时间戳，如果我们启用了协商缓存，它会在首次请求时随着 Response Headers 返回：

```javascript
Last-Modified: Fri, 27 Oct 2017 06:35:57 GMT
```

随后我们每次请求时，会带上一个叫 If-Modified-Since 的时间戳字段，它的值正是上一次 response 返回给它的 last-modified 值：

```javascript
If-Modified-Since: Fri, 27 Oct 2017 06:35:57 GMT
```

服务器接收到这个时间戳后，会比对该时间戳和资源在服务器上的最后修改时间是否一致，从而判断资源是否发生了变化。如果发生了变化，就会返回一个完整的响应内容，并在 Response Headers 中添加新的 Last-Modified 值；否则，返回如上图的 304 响应，Response Headers 不会再添加 Last-Modified 字段。

使用Last-Modified 存在一些弊端，这其中最常见的就是这样两个场景:

* 我们编辑了文件，但文件的内容没有改变。服务端并不清楚我们是否真正改变了文件，它仍然通过最后编辑时间进行判断。因此这个资源在再次被请求时，会被当做新资源，进而引发一次完整的响应——不该重新请求的时候，也会重新请求
* 当我们修改文件的速度过快时（比如花了 100ms 完成了改动），由于 If-Modified-Since 只能检查到以秒为最小计量单位的时间差，所以它是感知不到这个改动的——该重新请求的时候，反而没有重新请求了

这两个场景其实指向了同一个 bug——服务器并没有正确感知文件的变化。为了解决这样的问题，`Etag 作为 Last-Modified 的补充出现了。`

`Etag` 是由服务器为每个资源生成的唯一的标识字符串，这个标识字符串可以是基于文件内容编码的，只要文件内容不同，它们对应的 Etag 就是不同的，反之亦然。因此 Etag 能够精准地感知文件的变化。

Etag 的生成过程需要服务器额外付出开销，会影响服务端的性能，这是它的弊端。因此启用 Etag 需要我们审时度势。正如我们刚刚所提到的——Etag 并不能替代 Last-Modified，它只能作为 Last-Modified 的补充和强化存在。

Etag 在感知文件变化上比 Last-Modified 更加准确，优先级也更高。当 Etag 和 Last-Modified 同时存在时，以 Etag 为准。

#### 5.4 Service Worker Cache

Service Worker 是一种独立于主线程之外的 Javascript 线程。它脱离于浏览器窗体，因此无法直接访问 DOM。这样独立的个性使得 Service Worker 的“个人行为”无法干扰页面的性能，这个“幕后工作者”可以帮我们实现离线缓存、消息推送和网络代理等功能。我们借助 Service worker 实现的离线缓存就称为 Service Worker Cache。

Service Worker 的生命周期包括 install、active、working 三个阶段。一旦 Service Worker 被 install，它将始终存在，只会在 active 与 working 之间切换，除非我们主动终止它。这是它可以用来实现离线存储的重要先决条件.



#### 5.5 Push Cache

ush Cache 是指 HTTP2 在 server push 阶段存在的缓存。这块的知识比较新，应用也还处于萌芽阶段，应用范围有限不代表不重要——HTTP2 是趋势、是未来。在它还未被推而广之的此时此刻，我仍希望大家能对 Push Cache 的关键特性有所了解：

Push Cache 是缓存的最后一道防线。浏览器只有在 Memory Cache、HTTP Cache 和 Service Worker Cache 均未命中的情况下才会去询问 Push Cache。

Push Cache 是一种存在于会话阶段的缓存，当 session 终止时，缓存也随之释放。

不同的页面只要共享了同一个 HTTP2 连接，那么它们就可以共享同一个 Push Cache。





### 浏览器输入URL后发生了什么？

![lya7b81ow94pniln3aif.jpg (880×622) (cloudinary.com)](https://res.cloudinary.com/practicaldev/image/fetch/s--GY9Fa-eL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lya7b81ow94pniln3aif.jpg)



> [细说浏览器输入URL后发生了什么 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904054074654728)



* 合成URL
* DNS域名解析
* 建立TCP连接
* 发送HTTP请求,服务器处理请求,返回响应结果
* 关闭TCP连接,四次挥手
* 浏览器渲染



#### DNS域名解析

**概况**

在网络世界，你肯定记得住网站的名称，但是很难记住网站的 IP 地址，因而也需要一个地址簿，就是 DNS 服务器。DNS 服务器是高可用、高并发和分布式的，它是树状结构，如图：

![DNS服务器](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/30/16ff45f30e08f1ae~tplv-t2oaga2asx-watermark.awebp)

**DNS分类:**

* 根DNS服务器: 返回顶级DNS服务器的IP地址
* 顶级DNS服务器: 返回权威DNS服务器的IP地址
* 权威DNS服务器: 返回相应主机的IP地址



**DNS的域名查询方式**

DNS的域名查找，

* 在客户端和浏览器，本地DNS之间的查询方式是递归查询；
* 在本地DNS服务器与根域及其子域之间的查询方式是迭代查询；

1.递归查询:

在客户端输入 URL 后，会有一个递归查找的过程，从浏览器缓存中查找->本地的hosts文件查找->找本地DNS解析器缓存查找->本地DNS服务器查找，这个过程中任何一步找到了都会结束查找流程。

![递归查询](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/30/16ff45eedca06afb~tplv-t2oaga2asx-watermark.awebp)

2.迭代查询:

如果本地DNS服务器无法查询到，则根据本地DNS服务器设置的转发器进行查询。若未用转发模式，则迭代查找过程如下图：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/30/16ff48f72977d744~tplv-t2oaga2asx-watermark.awebp)

3.综合

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/30/16ff45e132f02931~tplv-t2oaga2asx-watermark.awebp)



4.查找中的优化:

* DNS存在着多级缓存，从离浏览器的距离排序的话，有以下几种: 浏览器缓存，系统缓存，路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存。

* 在域名和 IP 的映射过程中，给了应用基于域名做负载均衡的机会，可以是简单的<u>负载均衡</u>，也可以根据地址和运营商做全局的负载均衡。

#### 建立TCP连接

首先，判断是不是https的，如果是，则HTTPS其实是HTTP + SSL / TLS 两部分组成，也就是在HTTP上又加了一层处理加密信息的模块。服务端和客户端的信息传输都会通过TLS进行加密，所以传输的数据都是加密后的数据。

进行三次握手,建立TCP连接:

* 第一次握手：建立连接。客户端发送连接请求报文段，将SYN位置为1，Sequence Number为x；然后，客户端进入SYN_SEND状态，等待服务器的确认；
* 第二次握手：服务器收到SYN报文段。服务器收到客户端的SYN报文段，需要对这个SYN报文段进行确认，设置Acknowledgment Number为x+1(Sequence Number+1)；同时，自己还要发送SYN请求信息，将SYN位置为1，Sequence Number为y；服务器端将上述所有信息放到一个报文段（即SYN+ACK报文段）中，一并发送给客户端，此时服务器进入SYN_RECV状态；
* 第三次握手：客户端收到服务器的SYN+ACK报文段。然后将Acknowledgment Number设置为y+1，向服务器发送ACK报文段，这个报文段发送完毕以后，客户端和服务器端都进入ESTABLISHED状态，完成TCP三次握手。



#### 发送HTTP请求,服务器处理请求,返回响应结果

TCP连接建立后，浏览器就可以利用HTTP／HTTPS协议向服务器发送请求了。服务器接受到请求，就解析请求头，如果头部有缓存相关信息如if-none-match与if-modified-since，则验证缓存是否有效，若有效则返回状态码为304，若无效则重新返回资源，状态码为200.





#### 关闭TCP连接

* 第一次分手：主机1（可以使客户端，也可以是服务器端），设置Sequence Number和Acknowledgment Number，向主机2发送一个FIN报文段；此时，主机1进入FIN_WAIT_1状态；这表示主机1没有数据要发送给主机2了；

* 第二次分手：主机2收到了主机1发送的FIN报文段，向主机1回一个ACK报文段，Acknowledgment Number为Sequence Number加1；主机1进入FIN_WAIT_2状态；主机2告诉主机1，我"同意"你的关闭请求；

* 第三次分手：主机2向主机1发送FIN报文段，请求关闭连接，同时主机2进入LAST_ACK状态；

* 第四次分手：主机1收到主机2发送的FIN报文段，向主机2发送ACK报文段，然后主机1进入TIME_WAIT状态；主机2收到主机1的ACK报文段以后，就关闭连接；此时，主机1等待2MSL后依然没有收到回复，则证明Server端已正常关闭，那好，主机1也可以关闭连接了。



#### 浏览器渲染

按照渲染的时间顺序，流水线可分为如下几个子阶段：构建 DOM 树、样式计算、布局阶段、分层、栅格化和显示。如图：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/30/16ff48eeecb52d79~tplv-t2oaga2asx-watermark.awebp)

1.渲染进程将 HTML 内容转换为能够读懂DOM 树结构。

2.渲染引擎将 CSS 样式表转化为浏览器可以理解的styleSheets，计算出 DOM 节点的样式。

3.创建布局树，并计算元素的布局信息。

4.对布局树进行分层，并生成分层树。

5.为每个图层生成绘制列表，并将其提交到合成线程。合成线程将图层分图块，并栅格化将图块转换成位图。

6.合成线程发送绘制图块命令给浏览器进程。浏览器进程根据指令生成页面，并显示到显示器上。



##### 构建DOM树

浏览器从网络或硬盘中获得HTML字节数据后会经过一个流程将字节解析为DOM树,先将HTML的原始字节数据转换为文件指定编码的字符,然后浏览器会根据HTML规范来将字符串转换成各种令牌标签，如html、body等。最终解析成一个树状的对象模型，就是dom树。



##### 样式计算

渲染引擎将 CSS 样式表转化为浏览器可以理解的 styleSheets，计算出 DOM 节点的样式。

CSS 样式来源主要有 3 种，分别是`通过 link 引用的外部 CSS 文件、style标签内的 CSS、元素的 style 属性内嵌的 CSS。` 其样式计算过程为:

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/30/16ff45e91f199812~tplv-t2oaga2asx-watermark.awebp)



上面的 CSS 文本中有很多属性值，如 2em、blue、bold，这些类型数值不容易被渲染引擎理解，所以需要将所有值转换为渲染引擎容易理解的、标准化的计算值，这个过程就是属性值标准化。

##### 页面布局

局过程，即排除 `script、meta` 等功能化、非视觉节点，排除 `display: none` 的节点，计算元素的位置信息，确定元素的位置，构建一棵只包含可见元素布局树

其中，这个过程需要注意的是`回流和重绘`，关于回流和重绘，详细的可以看我另一篇文章[《浏览器相关原理(面试题)详细总结二》](https://juejin.cn/post/6844903969693646862#heading-1)，



##### 生成分层树

页面中有很多复杂的效果，如一些复杂的 3D 变换、页面滚动，或者使用 z-indexing 做 z 轴排序等，为了更加方便地实现这些效果，渲染引擎还需要为特定的节点生成专用的图层，并生成一棵对应的图层树（LayerTree）



##### 栅格化

合成线程会按照视口附近的图块来优先生成位图，实际生成位图的操作是由栅格化来执行的。所谓栅格化，是指将图块转换为位图。如图：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/30/16ff45f311bb8934~tplv-t2oaga2asx-watermark.awebp)

通常一个页面可能很大，但是用户只能看到其中的一部分，我们把用户可以看到的这个部分叫做视口（viewport）。在有些情况下，有的图层可以很大，比如有的页面你使用滚动条要滚动好久才能滚动到底部，但是通过视口，用户只能看到页面的很小一部分，所以在这种情况下，要绘制出所有图层内容的话，就会产生太大的开销，而且也没有必要。



##### 显示

最后，合成线程发送绘制图块命令给浏览器进程。浏览器进程根据指令生成页面，并显示到显示器上，渲染过程完成。









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



### 其他