## HTTP概述

> [HTTP概述 - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview)

### 概述

**HTTP是一种能够获取如 HTML 这样的网络资源的** [protocol](https://developer.mozilla.org/zh-CN/docs/Glossary/Protocol)(通讯协议)。**它是在 Web 上进行数据交换的基础，是一种 client-server 协议，也就是说，请求通常是由像浏览器这样的接受方发起的。**

客户端和服务端通过交换各自的消息（与数据流正好相反）进行交互。由像浏览器这样的客户端发出的消息叫做 *requests*，被服务端响应的消息叫做 *responses。*

### 基于HTTP组件系统

#### 客户端: user-agent

user-agent 就是任何能够为用户发起行为的工具。这个角色通常都是由浏览器来扮演。一些例外情况，比如是工程师使用的程序，以及Web开发人员调试应用程序。



#### Web服务器

在上述通信过程的另一端，是由Web Server来*服务*并提供客户端所请求的文档。Server只是虚拟意义上代表一个机器：它可以是共享负载（负载均衡）的一组服务器组成的计算机集群，也可以是一种复杂的软件，通过向其他计算机（如缓存，数据库服务器，电子商务服务器 ...）发起请求来获取部分或全部资源。



#### 代理Proxies

在浏览器和服务器之间，有许多计算机和其他设备转发了HTTP消息。由于Web栈层次结构的原因，它们大多都出现在传输层、网络层和物理层上，对于HTTP应用层而言就是透明的，虽然它们可能会对应用层性能有重要影响。还有一部分是表现在应用层上的，被称为**代理（Proxies）**。代理（Proxies）既可以表现得透明，又可以不透明（“改变请求”会通过它们）。代理主要有如下几种作用：

- 缓存（可以是公开的也可以是私有的，像浏览器的缓存）
- 过滤（像反病毒扫描，家长控制...）
- 负载均衡（让多个服务器服务不同的请求）
- 认证（对不同资源进行权限管理）
- 日志记录（允许存储历史信息）



### HTTP特点

#### HTTP 是简单的,容易读懂的

#### 可扩展的

在 HTTP/1.0 中出现的 [HTTP headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers) 让协议扩展变得非常容易。只要服务端和客户端就新 headers 达成语义一致，新功能就可以被轻松加入进来。

#### HTTP是无状态的,有会话的

HTTP是无状态的：在同一个连接中，两个执行成功的请求之间是没有关系的。

这就带来了一个问题，用户没有办法在同一个网站中进行连续的交互，使用HTTP的头部扩展，HTTP Cookies就可以解决这个问题。把Cookies添加到头部中，创建一个会话让每次请求都能共享相同的上下文信息，达成相同的状态。

HTTP本质是无状态的，使用Cookies可以创建有状态的会话。

#### HTTP和连接

一个连接是由传输层来控制的，这从根本上不属于HTTP的范围。

在互联网中，有两个最常用的传输层协议：TCP是可靠的，而UDP不是。因此，HTTP依赖于面向连接的TCP进行消息传递，但连接并不是必须的。

在客户端（通常指浏览器）与服务器能够交互（客户端发起请求，服务器返回响应）之前，必须在这两者间建立一个 TCP 链接，打开一个 TCP 连接需要多次往返交换消息（因此耗时）。



### HTTP能控制什么

- [缓存 ](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)
  文档如何缓存能通过HTTP来控制。服务端能告诉代理和客户端哪些文档需要被缓存，缓存多久，而客户端也能够命令中间的缓存代理来忽略存储的文档。
- *开放同源限制*
   HTTP可以通过修改头部来开放这样的限制，因此Web文档可以是由不同域下的信息拼接成的 
- *认证*
  一些页面能够被保护起来，仅让特定的用户进行访问。基本的认证功能可以直接通过HTTP提供，使用[`Authenticate`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authenticate)相似的头部即可，或用HTTP Cookies来设置指定的会话。
- *[代理和隧道](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling)*
  通常情况下，服务器和/或客户端是处于内网的，对外网隐藏真实 IP 地址。因此 HTTP 请求就要通过代理越过这个网络屏障。但并非所有的代理都是 HTTP 代理。例如，SOCKS协议的代理就运作在更底层，一些像 FTP 这样的协议也能够被它们处理。
- *会话* 
  使用HTTP Cookies允许你用一个服务端的状态发起请求，这就创建了会话。虽然基本的HTTP是无状态协议。这很有用，不仅是因为这能应用到像购物车这样的电商业务上，更是因为这使得任何网站都能轻松为用户定制展示内容了。



### HTTP流

> 当客户端想要和服务端进行信息交互时（服务端是指最终服务器，或者是一个中间代理），过程表现为下面几步：

#### 1.打开一个TCP连接

TCP连接被用来发送一条或多条请求，以及接受响应消息。客户端可能打开一条新的连接，或重用一个已经存在的连接，或者也可能开几个新的TCP连接连向服务端。

#### 2.发送一个HTTP报文

HTTP报文（在HTTP/2之前）是语义可读的。在HTTP/2中，这些简单的消息被封装在了帧中，这使得报文不能被直接读取，但是原理仍是相同的。

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```



#### 3.读取服务端返回的报文信息

```http
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
```



#### 4.关闭连接或者为后续请求重用连接。

当HTTP流水线启动时，后续请求都可以不用等待第一个请求的成功响应就被发送。然而HTTP流水线已被证明很难在现有的网络中实现，因为现有网络中有很多老旧的软件与现代版本的软件共存。因此，HTTP流水线已被在有多请求下表现得更稳健的HTTP/2的帧所取代。



### HTTP报文

HTTP/1.1以及更早的HTTP协议报文都是语义可读的。在HTTP/2中，这些报文被嵌入到了一个新的二进制结构，帧。帧允许实现很多优化，比如报文头部的压缩和复用。即使只有原始HTTP报文的一部分以HTTP/2发送出来，每条报文的语义依旧不变，客户端会重组原始HTTP/1.1请求。因此用HTTP/1.1格式来理解HTTP/2报文仍旧有效。

有两种HTTP报文的类型，请求与响应，每种都有其特定的格式。

#### 请求

案例:

![http-request](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/http-request.21xsklz7rx28.webp)



#### 响应

![HTTP-response](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/HTTP-response.5zyxiin1ews0.webp)





## HTTP协议

> https://developer.mozilla.org/zh-CN/docs/Web/HTTP
>
> [(26 封私信 / 12 条消息) 前端工程师应该对 HTTP 了解到什么程度？从哪些途径去熟悉更好？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/20391668) 代办



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





### HTTP消息

> [HTTP消息 - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages)

HTTP消息是服务器和客户端之间交换数据的方式。有两种类型的消息︰ 

请求（requests）--由客户端发送用来触发一个服务器上的动作；

响应（responses）--来自服务器的应答。

HTTP消息由采用ASCII编码的多行文本构成。在HTTP/1.1及早期版本中，这些消息通过连接公开地发送。在HTTP/2中，为了优化和性能方面的改进，曾经可人工阅读的消息被分到多个HTTP帧中。

**HTTP 请求和响应具有类似解构, 由以下部分组成:**

1.**起始行**:  总是单行; 用于描述要执行的请求，或者是对应的状态，成功或失败

2.**可选HTTP头集合**: 指明请求或描述消息正文

3.**空行:** 指示所有关于请求的元数据已经发送完毕

4.**可选的正文**: 包含请求或响应的相关数据, 正文大小由起始行HTTP头指定

起始行和HTTP消息中的HTTP头统称为请求头 而其有效负载被称为消息正文.

<img src="https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/HTTPMsgStructure2.6ek1f6fu5hw0.webp" alt="HTTPMsgStructure2" style="zoom: 200%;" />



### HTTP消息- Request

#### 起始行

起始行包含3个元素:

* HTTP方法
* 请求目标(request target)
* HTTP版本



##### HTTP方法

描述要求执行的动作. 例如,`GET`表示要获取资源, `POST`表示向服务器推送数据(创建/修改资源,或产生要返回的临时文件).

##### 请求目标request target

通常是一个URL,或者是协议,端口号和域名的绝对路径. 通常以请求的环境为特征.请求的格式因不同的hTTP方法而异. 它可以是以下几种形式:

* 原始形式(origin form): 一个绝对路径，末尾跟上一个 ' ? ' 和查询字符串. 被`GET，POST，HEAD 和 OPTIONS `方法所使用.

```http
POST / HTTP/1.1
GET /background.png HTTP/1.0
HEAD /test.html?query=alibaba HTTP/1.1
OPTIONS /anypage.html HTTP/1.0
```



* 绝对形式(absolute form): 一个完整的URL, 主要在使用 `GET` 方法连接到代理时使用。

```http
GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1
```

* 授权形式(authority form) : 由域名和可选端口（以`':'`为前缀）组成的 URL. 仅在使用 `CONNECT` 建立 HTTP 隧道时才使用

```http
CONNECT developer.mozilla.org:80 HTTP/1.1
```

* 星号形式 (asterisk form)，一个简单的星号(`'*'`)，配合 `OPTIONS` 方法使用，代表整个服务器。

```javascript
OPTIONS * HTTP/1.1
```



##### HTTP版本

定义了剩余报文的结构，作为对期望的响应版本的指示符。



#### Headers

来自请求的 [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) 遵循和 HTTP header 相同的基本结构：不区分大小写的字符串，紧跟着的冒号 `(':')` 和一个结构取决于 header 的值。 整个 header（包括值）由一行组成，这一行可以相当长。

请求头可以分为几组：

* *General headers，*例如 [`Via`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Via)，适用于整个报文。
* *Request headers，*例如 [`User-Agent`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent)，[`Accept-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Type)，通过进一步的定义(例如 [`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language))，或者给定上下文(例如 [`Referer`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer))，或者进行有条件的限制 (例如 [`If-None`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None)) 来修改请求。
* *Entity headers，*例如 [`Content-Length`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length)，适用于请求的 body。显然，如果请求中没有任何 body，则不会发送这样的头文件。





#### Body

请求的最后一部分是它的 body。不是所有的请求都有一个 body: 例如获取资源的请求，GET，HEAD，DELETE 和 OPTIONS，通常它们不需要 body。 有些请求将数据发送到服务器以便更新数据：常见的的情况是 POST 请求（包含 HTML 表单数据）

Body 大致可分为两类：

- *Single-resource bodies*，由一个单文件组成。该类型 body 由两个 header 定义： [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 和 [`Content-Length`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length).
- *[Multiple-resource bodies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data)*，由多部分 body 组成，每一部分包含不同的信息位。通常是和  [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms) 连系在一起。

![HTTP_Request_Headers2](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/HTTP_Request_Headers2.4tfbn35oqs80.webp)





#### HTTP/1.1 request messages



> Request messages are sent by a client to a target server

#### Request syntax

A client sends *request messages* to the server, which consist of:

* a **request line**, consisting of 
  * the case-sensitive(区分大小写) request method, 
  * a [space](https://en.wikipedia.org/wiki/Space_(punctuation)), 
  * the requested URL, 
  * another space, 
  * the protocol version, a [carriage return](https://en.wikipedia.org/wiki/Carriage_return),(回车) and a [line feed](https://en.wikipedia.org/wiki/Line_feed)(换行), e.g.:


```html
requestMethod URL protocolVersion

GET /images/logo.png HTTP/1.1
```



* **zero or more [request header fields](https://en.wikipedia.org/wiki/HTTP_request_header_field)** (at least 1 or more headers in case of HTTP/1.1), each consisting of the case-insensitive field name(域名), a colon(冒号), optional leading [whitespace](https://en.wikipedia.org/wiki/Whitespace_(computer_science))(可选前导空格), the field value, an optional trailing whitespace(空白;末尾无用空白) and ending with a carriage return and a line feed, e.g.:

> Host:  www.example.com
>
> Accept-Language: en

* **an empty line**, consisting of a carriage return and a line feed;
* **an optional [message body](https://en.wikipedia.org/wiki/HTTP_message_body)**.

In the HTTP/1.1 protocol, all header fields except `Host: hostname` are optional.



#### 请求方法

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



### HTTP消息-Response



#### HTTP响应 HTTP/1.1 response messages

> A response message is sent by a server to a client as a reply to its former request message.

#### Response syntax

> A server sends *response messages* to the client, which consist of

* a **status line**, consisting of the protocol version, a [space](https://en.wikipedia.org/wiki/Space_(punctuation)), the [response status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), another space, a possibly empty reason phrase, a [carriage return](https://en.wikipedia.org/wiki/Carriage_return) and a [line feed](https://en.wikipedia.org/wiki/Line_feed), e.g.:

```
HTTP/1.1 200 OK
```



* **zero or more [response header fields](https://en.wikipedia.org/wiki/HTTP_response_header_field)**, each consisting of the case-insensitive field name, a colon, optional leading [whitespace](https://en.wikipedia.org/wiki/Whitespace_(computer_science)), the field value, an optional trailing whitespace and ending with a carriage return and a line feed, e.g.:

```
Content-Type: text/html
```

- **an empty line**, consisting of a carriage return and a line feed;
- **an optional [message body](https://en.wikipedia.org/wiki/HTTP_message_body)**.



#### Response status code

> In HTTP/1.0 and since, the first line of the HTTP response is called the *status line* and includes a numeric *status code* (such as "[404](https://en.wikipedia.org/wiki/HTTP_404)") and a textual *reason phrase* (such as "Not Found"). 
>
> The response status code is a three-digit integer code representing the result of the server's attempt to understand and satisfy the client's corresponding request. 
>
> 

The first digit of the status code defines its class:

- `1XX` (informational)

  The request was received, continuing process.

- `2XX` (successful)

  The request was successfully received, understood, and accepted.

- `3XX` (redirection)

  Further action needs to be taken in order to complete the request.

- `4XX` (client error)

  The request contains bad syntax or cannot be fulfilled.

- `5XX` (server error)

  The server failed to fulfill an apparently valid request.





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



## 浏览器的工作原理

> [浏览器的工作原理：现代网络浏览器幕后揭秘 - HTML5 Rocks](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
>
> [浏览器原理 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903613278470152)



### 浏览器主要组成部分

- 浏览器引擎：在用户界面和呈现引擎之间传送指令。
- 渲染引擎：负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。
- 网络：用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现。
- JavaScript 解释器：用于解析和执行 JavaScript 代码。
- [数据存储](https://cloud.tencent.com/product/cdcs?from=10680)：浏览器需要在硬盘上保存各种数据，例如 Cookie、storage、indexdb。



### 过程(重要)

1. 解析过程
2. CSS样式计算
3. 构建Render Tree
4. layout：布局。定位坐标和大小，是否换行，position, overflow之类的属性。确定了每个DOM元素的样式规则后，计算每个DOM元素最终在屏幕上显示的大小和位置。Web页面中元素的布局是相对的，因此一个元素的布局发生变化，会联动地引发其他元素的布局发生变化。比如`body`元素的width变化会影响其后代元素的宽度。因此，布局过程是经常发生的。
5. paint：绘制文字、颜色、图像、边框和阴影等，也就是一个DOM元素所有的可视效果。一般来说，这个绘制过程是在多个层上完成的。
6. composite：渲染层合并。页面中DOM元素的绘制是在多个层上进行的，在每个层上完成绘制过程之后，浏览器会将所有层按照合理的顺序合并成一个图层，然后在屏幕上呈现。



#### 1.解析过程

- 获取请求文档的内容后，呈现引擎将开始解析 HTML 文档，并将各标记逐个转化成“内容树”上的 DOM 节点。
- 解析外部 CSS以及style元素中的样式数据形成呈现树。呈现树包含多个带有视觉属性（如颜色和尺寸）的矩形。这些矩形的排列顺序就是它们将在屏幕上显示的顺序。呈现树构建完毕之后，进入“布局”处理阶段，也就是为每个节点分配一个应出现在屏幕上的确切坐标。
- 解析script标签时，解析完毕马上执行，并且阻塞页面。
- 绘制 - 呈现引擎会遍历呈现树，由用户界面后端层将每个节点绘制出来。



##### 1.1 词法,语法分析与编译

词法分析器将输入内容分解成一个个有效标记，解析器负责根据语言的语法规则分析文档的结构来构建解析树。词法分析器知道如何将无关的字符（空格、换行符等）分离出来，所以我们平时写一些空格也不会影响大局。

在语法分析的过程中，解析器会向词法分析器请求一个标记（就是前面分解出来的标记），并尝试将其与某条语法规则（比如标签要闭合、正确嵌套）进行匹配。如果发现了匹配规则，解析器会将一个对应于该标记的节点添加到解析树中，然后继续请求下一个标记。

如果没有规则可以匹配，解析器就会将标记存储到内部，并继续请求标记，直至找到可与所有内部存储的标记匹配的规则（如div多层嵌套的情况，这样子能找到div闭合部分）。如果找不到任何匹配规则，解析器就会引发一个异常。这意味着文档无效，包含语法错误。

解析器类型有两种：

- 自上而下解析器：从语法的高层结构出发，尝试从中找到匹配的结构。
- 自下而上解析器：从低层规则出发，将输入内容逐步转化为语法规则，直至满足高层规则。将扫描输入内容，找到匹配的规则后，将匹配的输入内容替换成规则。如此继续替换，直到输入内容的结尾。部分匹配的表达式保存在解析器的堆栈中。

编译：将源代码编译成机器代码，源代码先走完解析的过程形成成解析树，解析树被翻译成机器代码文档，完成编译的过程



##### 1.2 DTD

特殊的是，恰好html不能用上面两种解析方法。有一种可以定义 HTML 的正规格式：DTD，但它不是与上下文无关的语法，html明显是和上下文关系紧密的。我们知道 HTML 是有点“随意”的，对于不闭合的或者不正确嵌套标签有可能不报错，并且尝试解释成正确的样子，具有一定的容错机性，因此可以达到简化网络开发的效果。另一方面，这使得它很难编写正式的语法。概括地说，HTML 无法很容易地通过常规解析器解析（因为它的语法不是与上下文无关的语法），所以采用了 DTD 格式。



##### 1.3 解析为dom过程

解析器解析html文档的解析树是由 DOM 元素和属性节点构成的树结构。它是 HTML 文档的对象表示，同时也是外部内容（例如 JavaScript）与 HTML 元素之间的api，其根节点是document。

上面已经说到，不能使用常规的解析技术解释html，浏览器就创建了自定义的解析器来解析 。对于HTML/SVG/XHTML这三种文档，Webkit有三个C++的类对应这三种文档，并产生一个DOM Tree。解释html成dom的过程，由两个阶段组成：标记化和树构建。

###### 1.3.1 标计划算法

对于一段html：

```html
<html>
<body>
hi
</body>
</html>
```

该算法使用状态机来表示。每一个状态接收来自输入信息流的一个或多个字符，并根据这些字符更新下一个状态。当前的标记化状态和树结构状态会影响进入下一状态的决定。

初始状态是数据状态。遇到字符 < 时，状态更改为“标记打开状态”。接收一个字母会创建“起始标记”，状态更改为“标记名称状态”。这个状态会一直保持到接收 > 字符，接收到将会进入“标记打开状态”。在此期间接收的每个字符都会附加到新的标记名称上。

1.  比如我们先写html标签，先遇到<，进入“标记打开状态”，遇到html四个字母进入“标记名称状态”，接着接收到了>字符，会发送当前的标记，状态改回“数据状态” 
2.  `<body>` 标记也会进行同样的处理。现在 html 和 body 标记均已发出，而且目前是“数据状态”。接收到 hi中的 h 字符时，将创建并发送字符标记，直到接收 `</body>` 中的 <。我们将为hi的每个字符都发送一个字符标记。 
3.  回到“标记打开状态”。接收下一个输入字符 / 时，会创建闭合标签token，并改为“标记名称状态”。我们会再次保持这个状态，直到接收 >。然后将发送新的标记，并回到“数据状态”。最后，`</html>` 输入也会进行同样的处理。



###### 1.3.2 树构建过程

在创建解析器的同时也会创建 document 对象。在树构建阶段，以 Document 为根节点的 DOM 树也会不断进行修改，向其中添加各种元素。标记生成器发送的每个节点都会由树构建器进行处理。

1.  树构建阶段的输入是一个来自标记化阶段的标记序列。第一个模式是“initial mode”。接收 HTML 标记后转为“before html”模式，并在这个模式下重新处理此标记。这样会创建一个 HTMLHtmlElement 元素，并将其附加到 Document 根对象上。 
2.  状态改为“before head”。此时我们接收“body”标记。由于容错性，就算我们的没head标签，系统也会隐式创建一个 HTMLHeadElement，并将其添加到树中。 
3.  进入了“in head”模式，然后转入“after head”模式。系统对 body 标记进行重新处理，创建并插入 HTMLBodyElement，同时模式转变为“in body”。 
4.  接收由“hi”字符串生成的一系列字符标记。接收第一个字符时会创建并插入文本节点，而其他字符也将附加到该节点。当然还有其他节点，比如属性节点、换行节点。我们实际场景还有外部资源以及其他各种各样的复杂标签嵌套和内容结构，不过原理都类似。对于中间这个过程，遇到外部资源如何处理，顺序是怎样的，后面再讲。 
5.  接收 body 结束标记会触发“after body”模式。现在我们将接收 HTML 结束标记，然后进入“after after body”模式。接收到文件结束标记后，解析过程就此结束，dom树已经建立完毕（不是加载完毕，在DOMContentLoaded之前，document.readyState = ‘interactive ’）。 

结束后，此时文档被标注为交互状态，浏览器开始解析那些script标签上带有“defer”脚本，也就是那些应在文档解析完成后才执行的脚本，文档状态将设置为“完成”，执行完毕触发DOMContentLoaded事件（当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，不会等待样式表、图像和iframe的完成加载）。



##### 1.4 css和js解析过程

###### 1.4.1 css解析

解析CSS会产生CSS规则树，前面已经说到，html不是与上下文无关的语法，而css和js是与上下文无关的语法，所以常规的解析方法都可以用。对于建立CSS 规则树，是需要比照着DOM树来的。CSS匹配DOM树主要是从右到左解析CSS选择器。解析CSS的顺序是浏览器的样式 -> 用户自定义的样式 -> 页面的link标签等引进来的样式 -> 写在style标签里面的内联样式

样式表不会更改 DOM 树，因此没有必要等待样式表并停止文档解析。而脚本在文档解析阶段会请求样式信息时还没有加载和解析样式，脚本就会获得错误的回复。Firefox 在样式表加载和解析的过程中，会禁止所有脚本。而对于 WebKit 而言，仅当脚本尝试访问的样式属性可能受尚未加载的样式表影响时，它才会禁止该脚本。



###### 1.4.2 js解析(重要)

- 网络整个解析的过程是同步的，会暂停 DOM 的解析。解析器遇到 script标记时立即解析并执行脚本。文档的解析将**停止**，直到脚本执行完毕。 
-  如果脚本是外部的，那么解析过程会**停止**，直到从网络同步抓取资源完成后再继续。 
-  目前浏览器的script标签是并行下载的，他们互相之间不会阻塞，但是会阻塞其他资源（图片）的下载 

所以为了用户体验，后来有了async和defer，将脚本标记为异步，不会阻塞其他线程解析和执行。标注为“defer”的script不会停止文档解析，而是等到解析结束才执行；标注为“async”只能引用外部脚本，下载完马上执行，而且不能保证加载顺序。

![](https://ask.qcloudimg.com/http-save/yehe-3635362/njtwjj5gl3.png?imageView2/2/w/1620)



脚本的预解析：在执行脚本时，其他线程会解析文档的其余部分，找出并加载需要通过网络加载的其他资源。通过这种方式，资源可以在并行连接上加载，从而提高总体速度。请注意，预解析器不会修改 DOM 树，而是将这项工作交由主解析器处理；预解析器只会解析外部资源（例如外部脚本、样式表和图片）的引用。

脚本主要是通过DOM API和CSSOM API来操作DOM Tree和CSS Rule Tree.

另外，我们又可以想到一个问题，为什么jsonp能response一个类eval字符串就马上执行呢？其实也是因为普通的script标签解析完成就马上执行，我们在服务器那边大概是这样子返回： res.end（'callback（'+data+'）'）

整个过程，就是：动态创建script标签，src为服务器的一个get请求接口，遇到src当然马上请求服务器，然后服务器返回处理data的callback函数这样子的代码。其实，我们可以看作是前端发get请求，服务端响应文档是js文件，而且这个文件只有一行代码：callback（data）。当然你可以写很多代码，不过一般没见过有人这么干。



#### 2.渲染树

html、css、js解析完成后，浏览器引擎会通过DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree（渲染树）。

1. 在渲染树中，会把DOM树中没有的元素给去除，比如head标签以及里面的内容，以及display:none的元素也会被去除，但是 visibility 属性值为“hidden”的元素仍会显示
2. CSS 的 Rule Tree主要是为了完成匹配并把CSS Rule附加上渲染树上的每个Element，也就是所谓的Frame（Firefox 将渲染树中的元素称为frame，WebKit 的是呈现器或呈现对象，其实就是DOM节点，别以为是什么高大上的东西。 呈现器知道如何布局并将自身及其子元素绘制出来 ）。然后，计算每个Frame的位置，这通常是layout和reflow过程中发生。
3. 一旦渲染树构建完成，浏览器会把树里面的内容绘制在屏幕上。

**需要注意的点：**

-  有一些 DOM 元素对应多个可视化对象。它们往往是具有复杂结构的元素，无法用单一的矩形来描述。如“select”元素有 3 个呈现器：一个用于显示区域，一个用于下拉列表框，还有一个用于按钮。如果由于宽度不够，文本无法在一行中显示而分为多行，那么新的行也会作为新的呈现器而添加。 
-  inline 元素只能包含 block 元素或 inline 元素中的一种。如果出现了混合内容，则应创建匿名的 block 呈现器，以包裹 inline 元素。所以我们平时的inline-block可以设置宽高。 
-  有一些呈现对象对应于 DOM 节点，但在树中所在的位置与 DOM 节点不同。脱离文档流的浮动定位和绝对定位的元素就是这样，被放置在树中的其他地方，并映射到真正的frame，而放在原位的是占位frame。



##### 2.1 css样式计算

构建渲染树之前，需要计算每一个呈现对象的可视化属性。这是通过计算每个元素的样式属性来完成的。

Firefox：CSS 解析生成 CSS Rule Tree，通过比对DOM生成Style Context Tree，然后Firefox通过把Style Context Tree和其Render Tree（Frame Tree）关联上完成样式计算

Webkit：把Style对象直接存在了相应的DOM结点上了

样式被js改变过的话，会重新计算样式（Recalculate Style）。Recalculate被触发的时，处理脚本给元素设置的样式。Recalculate Style会计算Render树（渲染树）,然后从根节点开始进行页面渲染，将CSS附加到DOM上的过程。所以任何企图改变元素样式的操作都会触发Recalculate，在JavaScript执行完成后才触发的，下面将会讲到的layout也是。



##### 2.2 构建渲染树

Firefox：系统会针对 DOM 更新注册展示层，作为侦听器。展示层将框架创建工作委托FrameConstructor，由该构造器解析样式并创建frame。

WebKit：解析样式和创建呈现器的过程称为“附加”。每个 DOM 节点都有一个“attach”方法。附加是同步进行的，将节点插入 DOM 树需要调用新的节点“attach”方法。

处理 html 和 body 标记就会构建渲染树根节点。这个根节点呈现对象对应于 CSS 规范中所说的容器 block，这是最上层的 block，包含了其他所有 block。它的尺寸就是视口，即浏览器窗口显示区域的尺寸。Firefox 称之为 ViewPortFrame，而 WebKit 称之为 RenderView。这就是文档所指向的呈现对象。渲染树的其余部分以 DOM 树节点插入的形式来构建。



#### 3.布局(重要)

呈现器在创建完成并添加到渲染树时，并不包含位置和大小信息。***计算这些值的过程***称为<span style="color:red">布局（layout）或重排（repaint）</span>。这个得记住了，记准确了！为什么呢？计算offsetWidth和offsetHeight的、js操作dom、改变style属性时候，都会引发重排！

前面通过样式计算确定了每个DOM元素的样式，这一步就是具体计算每个DOM元素最终在屏幕上显示的大小和位置。Web页面中元素的布局是相对的，因此一个元素的布局发生变化，会联动地引发其他元素的布局发生变化。比如，元素的width变化会影响其后代元素的宽度。因此，layout过程是经常发生的。

HTML 是流式布局，这意味着大多数情况下只要一次遍历就能计算出几何信息。处于流中靠后位置元素通常不会影响靠前位置元素的几何特征，因此布局可以按从左至右、从上至下的顺序遍历文档。坐标系是相对于根节点而建立的，使用的是上坐标和左坐标。根呈现器的位置左边是 0,0，其尺寸为视口。layout过程计算一个元素绝对的位置和尺寸。Layout计算的是布局位置信息。任何有可能改变元素位置或大小的样式都会触发这个Layout事件。

layout是一个递归的过程。它从根呈现器（对应于 HTML 文档的  元素）开始，然后递归遍历部分或所有的框架层次结构，为每一个需要计算的呈现器计算几何信息。所有的呈现器都有一个“layout”或者“reflow”方法，每一个呈现器都会调用其需要进行布局的子代的 layout 方法。任何有可能改变元素位置或大小的样式都会触发这个Layout事件。

由于元素相覆盖，相互影响，稍有不慎的操作就有可能导致一次自上而下的布局计算。所以我们在进行元素操作的时候要一再小心尽量避免修改这些重新布局的属性。当你修改了元素的样式（比如width、height或者position等）也就是修改了layout，那么浏览器会检查哪些元素需要重新布局，然后对页面激发一个reflow过程完成重新布局。被reflow的元素，接下来也会激发绘制过程也就是<span style="color:red">重绘（repaint）</span>，最后激发渲染层合并过程，生成最后的画面。由于元素相覆盖，相互影响，稍有不慎的操作就有可能导致一次自上而下的布局计算。所以我们在进行元素操作的时候要一再小心尽量避免修改这些重新布局的属性。

如果呈现器在布局过程中需要换行，会立即停止布局，并告知其父代需要换行。父代会创建额外的呈现器，并对其调用布局。

**几种布局模式**

1. 父呈现器确定自己的宽度。
2. 父呈现器依次处理子呈现器，并且放置子呈现器（设置 x,y 坐标）。如果有必要，调用子呈现器的布局，这会计算子呈现器的高度。
3. 父呈现器根据子呈现器的累加高度以及边距和补白的高度来设置自身高度，此值也可供父呈现器的父呈现器使用。

##### 3.1 Dirty 位系统（Dirty bit system）

为避免对所有细小更改都进行整体布局，浏览器采用了一种“dirty 位”系统。如果某个呈现器发生了更改，或者将自身及其子代标注为“dirty”，则需要进行布局。类似于脏检测。

有“dirty”和“children are dirty”两种标记方法。“children are dirty”表示尽管呈现器自身没有变化，但它至少有一个子代需要布局。dirty就是自己都变化了。

##### 3.2 全局布局和增量布局

- 全局布局：指触发了整个呈现树范围的布局，呈现器的全局样式更改或者屏幕大小调整都会触发全局布局。
- 增量布局：采用增量方式，也就是只对 dirty 呈现器进行布局（这样可能存在需要进行额外布局的弊端）。

当呈现器为 dirty 时，会异步触发增量布局。例如，当来自网络的额外内容添加到 DOM 树之后，新的呈现器附加到了呈现树中。

##### 3.3 异步布局和同步布局

增量布局是异步执行的。Firefox 将增量布局的“reflow 命令”加入队列，而调度程序会触发这些命令的批量执行。WebKit 也有用于执行增量布局的计时器：对呈现树进行遍历，并对 dirty 呈现器进行布局。 请求样式信息（例如“offsetHeight”）的脚本可同步触发增量布局。 全局布局往往是同步触发的。 有时，当初始布局完成之后，如果一些属性（如滚动位置）发生变化，布局就会作为回调而触发。

##### 浏览器的自身优化

如果布局是由“大小调整”或呈现器的位置（而非大小）改变而触发的，那么可以从缓存中获取呈现器的大小，而无需重新计算。 在某些情况下，只有一个子树进行了修改，因此无需从根节点开始布局。这适用于在本地进行更改而不影响周围元素的情况，例如在文本字段中插入文本（否则每次键盘输入都将触发从根节点开始的布局）。

因为这个优化方案，所以你每改一次样式，它就不会reflow或repaint一次。但是有些情况，如果我们的程序需要某些特殊的值，那么浏览器需要返回最新的值，而会有一些样式的改变，从而造成频繁的reflow/repaint。比如获取下面这些值，浏览器会马上进行reflow：

>  offsetTop, offsetLeft, offsetWidth, offsetHeight scrollTop/Left/Width/Height clientTop/Left/Width/Height getComputedStyle(), currentStyle



##### 我们可以做的性能优化:

尽量减少重绘重排。具体：

1. 不要一条一条地修改DOM的样式（用class批量操作）
2. 缓存dom节点，供后面使用（for循环，取html集合长度，你懂的）
3. 把DOM离线后修改（documentFragment、虚拟dom、把它display:none再改再显示）
4. 尽量修改层级比较低的DOM
5. 有动画的DOM使用fixed或absoult的position，脱离文档流



#### 4.重绘和重排(重要)

##### 4.1 重排（reflow）

重排（也叫回流）会计算页面布局（Layout）。某个节点Reflow时会重新计算节点的尺寸和位置，而且还有可能触其后代节点reflow。重排后，浏览器会重新绘制受影响的部分到屏幕，该过程称为重绘。另外，DOM变化不一定都会影响几何属性，比如改变一个元素的背景色不影响宽高，这种情况下只会发生重绘，代价较小。

当DOM的变化影响了元素的几何属性（宽或高），浏览器需要重新计算元素的几何属性，由于流式布局其他元素的几何属性和位置也受到影响。浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。 reflow 会从根节点开始递归往下，依次计算所有的结点几何尺寸和位置，在reflow过程中，可能会增加一些frame，如文本字符串。DOM 树里的每个结点都会有reflow方法，一个结点的reflow很有可能导致子结点，甚至父点以及同级结点的reflow。

当渲染树的一部分（或全部）因为元素的尺寸、布局、隐藏等改变而需要重新构建。所以，每个页面至少需要一次reflow，就是页面第一次加载的时候。

##### 4.2 重绘（repaint）

repaint（重绘）遍历所有节点，检测节点的可见性、颜色、轮廓等可见的样式属性，然后根据检测的结果更新页面的响应部分。当渲染树中的一些元素需要更新一些不会改变元素不局的属性，比如只是影响元素的外观、风格、而不会影响布局的那些属性，这时候就只发生重绘。当然，页面首次加载也是要重绘一次的。

光栅：光栅主要是针对图形的一个栅格化过程。现代浏览器中主要的绘制工作主要用光栅化软件来完成。所以元素重绘由这个元素和绘制层级的关系，来决定的是否会很大程度影响你的性能-，如果这个元素盖住的多层元素都被重新绘制，性能损耗当然大。



#### 5.paint(绘制)

在绘制阶段，系统会遍历渲染树，并调用呈现器的“paint”方法，将呈现器的内容绘制成位图。绘制工作是使用用户界面基础组件完成的 你所看见的一切都会触发paint。包括拖动滚动条，鼠标选择中文字等这些完全不改变样式，只改变显示结果的动作都会触发paint。paint的工作就是把文档中用户可见的那一部分展现给用户。paint是把layout和样式计算的结果直接在浏览器视窗上绘制出来，它并不实现具体的元素计算，只是layout后面的那一步。

绘制顺序：背景颜色->背景图片->边框->子代->轮廓

其实就是元素进入堆栈样式上下文的顺序。这些堆栈会从后往前绘制，因此这样的顺序会影响绘制。

再说回来，在样式发生变化时，浏览器会尽可能做出最小的响应。因此，元素的颜色改变后，只会对该元素进行重绘。元素的位置改变后，只会对该元素及其子元素（可能还有同级元素）进行布局和重绘。添加 DOM 节点后，会对该节点进行布局和重绘。一些重大变化（例如增大“html”元素的字体）会导致缓存无效，使得整个渲染树都会进行重新布局和绘制。



#### 6.composite(重要)

概念不复杂，即是渲染层合并，我们将渲染树绘制后，形成一个个图层，最后把它们组合起来显示到屏幕。渲染层合并。前面也说过，对于页面中DOM元素的绘制是在多个层上进行的。在每个层上完成绘制过程之后，浏览器会将绘制的位图发送给[GPU](https://cloud.tencent.com/product/gpu?from=10680)绘制到屏幕上，将所有层按照合理的顺序合并成一个图层，然后在屏幕上呈现。

对于有位置重叠的元素的页面，这个过程尤其重要，因为一量图层的合并顺序出错，将会导致元素显示异常。另外，这部分主要的是这涉及到我们常说的GPU加速的问题。

说到性能优化，针对页面渲染过程的话，我们希望的是代价最小，避免多余的性能损失，少一点让浏览器做的步骤。比如我们可以分析一下开头的那幅图： 

![](https://ask.qcloudimg.com/http-save/yehe-3635362/eyt9ggwz7z.png?imageView2/2/w/1620)

明显，我们改的越深，代价越大，所以我们只改最后一个流程——合成的时候，性能是最好的。浏览器会为使用了transform或者animation的元素单独创建一个层。当有单独的层之后，此元素的Repaint操作将只需要更新自己，不用影响到别，局部更新。所以开启了硬件加速的动画会变得流畅很多。

因为每个页面元素都有一个独立的渲染进程，包含了主线程和合成线程，主线程负责js的执行、CSS样式计算、计算Layout、将页面元素绘制成位图(Paint)、发送位图给合成线程。合成线程则主要负责将位图发送给GPU、计算页面的可见部分和即将可见部分(滚动)、通知GPU绘制位图到屏幕上。加上一个点，GPU对于动画图形的渲染处理比CPU要快，那么就可以达到加速的效果。

注意不能滥用GPU加速，一定要分析其实际性能表现。因为GPU加速创建渲染层是有代价的，每创建一个新的渲染层，就意味着新的内存分配和更复杂的层的管理。并且在移动端 GPU 和 CPU 的带宽有限制，创建的渲染层过多时，合成也会消耗跟多的时间，随之而来的就是耗电更多，内存占用更多。过多的渲染层来带的开销而对页面渲染性能产生的影响，甚至远远超过了它在性能改善上带来的好处。



#### 7.浏览器加载的时间线(重要)

这是补充前面的html解析为dom部分的内容。

1. 创建document对象，解析html，将元素对象和文本内容添加到文档中，此时document.readyState = 'loading'
2. 遇到link外部css的时候，创建新的线程异步加载，继续解析html
3. 遇到有src的scripts（没有async和defer标记）加载外部的js时，同步加载并阻塞解析html，而且加载完马上执行
4. 遇到设置async和defer的script，创建新的线程异步加载，继续解析html。async加载完马上执行，defer在DOMContentLoaded前执行
5. 遇到带有src的img，解析dom结构，再异步加载src的图片资源，不会等待img加载完成继续解析文档。另外，img要等待css加载完才解码，所以css阻塞图片的呈现，类似于js阻塞html解析一样。可以想一下，如果css被设置为display：none，还有意义吗？所以此时虽然对后台有请求但不解码
6. 文档**解析**完毕，document.readyState = 'interactive'
7. 此时带有defer的js开始按顺序执行
8. DOMContentLoaded触发，程序从同步脚本执行转化为事件驱动阶段（类似ele.onclick = handel已经开始生效）
9. 当所有的script加载完成并且成功执行、img和css加载完毕，document.readyState = 'completed'，触发onload事件
10. 异步响应ui行为，开始交互



#### 8.补充 script和link标签的问题

CSSOM树和DOM树是互不关联的两个过程。平时我们把link标签放部头而script放body尾部，因为js阻塞阻塞DOM树的构建。但是js需要查询CSS信息，所以js还要等待CSSOM树构建完才可以执行。这就造成CSS阻塞了js，js阻塞了DOM树构建。所以我们只要设置link的preload来预加载css文件，解决了js执行时CSSOM树还没构建好的阻塞问题。当然，script异步加载也是另外的方法。

总的来说，参考一下很多人说过的规律：

- CSS 不会阻塞 DOM 的解析，但会阻塞 DOM 渲染。
- JS 阻塞 DOM 解析，但浏览器会"偷看"DOM，提前下载资源。
- 浏览器遇到 script且没有defer或async属性的标签时，会触发页面渲染，因而如果前面CSS资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本。





### 浏览器如何进行页面渲染

> https://godbasin.github.io/2021/10/16/web-browser-render/



### 浏览器如何渲染页面>>>待完成

> [How browsers work (taligarsiel.com)](http://taligarsiel.com/Projects/howbrowserswork1.htm)











## 浏览器相关

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

> [细说浏览器输入URL后发生了什么 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904054074654728)
>
> [从URL输入到页面展现到底发生什么？- github](https://github.com/ljianshu/Blog/issues/24)   //待整理
>
> 

![lya7b81ow94pniln3aif.jpg (880×622) (cloudinary.com)](https://res.cloudinary.com/practicaldev/image/fetch/s--GY9Fa-eL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lya7b81ow94pniln3aif.jpg)







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









本地存储

> 

## HTTP Cookie



> 浏览器系列之 Cookie 和 SameSite 属性 https://github.com/mqyqingfeng/Blog/issues/157

### cookie

> 一般我们都会说 “HTTP 是一个无状态的协议”，不过要注意这里的 HTTP 其实是指 HTTP 1.x，而所谓无状态协议，简单的理解就是即使同一个客户端连续两次发送请求给服务器，服务器也识别不出这是同一个客户端发送的请求，这导致的问题就比如你加了一个商品到购物车中，但因为识别不出是同一个客户端，你刷新下页面就没有了……

#### 出现背景

* 为了解决 HTTP 无状态导致的问题，后来出现了 Cookie。(首先无状态并不是不好，有优点，但也会导致一些问题)

* Cookie 的存在也不是为了解决通讯协议无状态的问题，只是为了<span style="color:blue">解决客户端与服务端会话状态的问题</span>，这个状态是指后端服务的状态而非通讯协议的状态。



#### cookie介绍

> Cookie（复数形态Cookies），类型为「小型文本文件」，指某些网站为了辨别用户身份而储存在用户本地终端上的数据。

* 一般不超过 4KB 的变量存储在浏览器上

* 由一个名称（Name）、一个值（Value）和其它几个用于控制 Cookie 有效期、安全性、使用范围的可选属性组成.

* cookie本质是一个存储在浏览器的文本,随着http请求自动传递给服务器.也可以说cookie是一个请求头(响应头):

  * 服务器以响应头的形式将cookie发送浏览器
  * 浏览器收到以后自动将cookie保存
  * 浏览器再次访问服务器时, 会以[请求头]的形式将cookie发回.

  

#### 如何查看

> 浏览器 >>> application >>> Cookies

在浏览器里查看到了 Cookie，这并不意味着 Cookie 文件只是存放在浏览器里的。实际上，Cookies 相关的内容还可以存在本地文件里，就比如说 Mac 下的 Chrome，存放目录就是 `~/Library/Application Support/Google/Chrome/Default`，里面会有一个名为 Cookies 的数据库文件，你可以使用 sqlite 软件打开它

存放在本地的好处就在于即使你关闭了浏览器，Cookie 依然可以生效。



#### Cookie的设置

##### 设置流程

1. 客户端发送 HTTP 请求到服务器
2. 当服务器收到 HTTP 请求时，在响应头里面添加一个 Set-Cookie 字段
3. 浏览器收到响应后保存下 Cookie
4. 之后对该服务器每一次请求中都通过 Cookie 字段将 Cookie 信息发送给服务器。



##### 案例

以 `https://main.m.taobao.com/` 为例来看下这个过程：

我们在请求返回的 Response Headers 可以看到 Set-Cookie 字段：

![cookie1](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/cookie1.48sie5jdf600.webp)

然后我们查看一下Cookie:

![cookie2](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/cookie2.2ho9972y93q0.webp)

我们刷新一遍页面，再看下这个请求，可以在 Request Headers 看到 cookie 字段：

![cookie3](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/cookie3.5svpn2zexc00.webp)





#### Cookie的属性

下面这张图里我们可以看到 Cookies 相关的一些属性：

![cookie4](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/cookie4.687zvx9e1ic0.webp)

主要说一些大家可能没有注意的点：

##### **Name/Value**

用 JavaScript 操作 Cookie 的时候注意对 Value 进行编码处理。

##### **Expires**

Expires 用于设置 Cookie 的过期时间。比如：

```javascript
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

当 Expires 属性缺省时，表示是<span style="color:blue">会话性 Cookie</span>，像上图 Expires 的值为 Session，表示的就是会话性 Cookie。当为会话性 Cookie 的时候，值保存在客户端内存中，并在用户关闭浏览器时失效。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期 Cookie 也会被保留下来，就好像浏览器从来没有关闭一样。

与会话性 Cookie 相对的是<span style="color:blue">持久性 Cookie</span>，持久性 Cookies 会保存在用户的硬盘中，直至过期或者清除 Cookie。这里值得注意的是，设定的日期和时间只与客户端相关，而不是服务端。



##### **Max-age**

Max-Age 用于设置在 Cookie 失效之前需要经过的秒数。比如：

```
Set-Cookie: id=a3fWa; Max-Age=604800;
```

Max-Age 可以为正数、负数、甚至是 0。

如果 max-Age 属性为正数时，浏览器会将其持久化，即写到对应的 Cookie 文件中。

当 max-Age 属性为负数，则表示该 Cookie 只是一个会话性 Cookie。

当 max-Age 为 0 时，则会立即删除这个 Cookie。

假如 Expires 和 Max-Age 都存在，Max-Age 优先级更高。



##### **Domain**

Domain 指定了 Cookie 可以送达的主机名。假如没有指定，那么默认值为当前文档访问地址中的主机部分（但是不包含子域名）。

像淘宝首页设置的 Domain 就是 .taobao.com，这样无论是 a.taobao.com 还是 b.taobao.com 都可以使用 Cookie。

在这里注意的是，不能跨域设置 Cookie，比如阿里域名下的页面把 Domain 设置成百度是无效的：

```
Set-Cookie: qwerty=219ffwef9w0f; Domain=baidu.com; Path=/; Expires=Wed, 30 Aug 2020 00:00:00 GMT
```



##### Path

Path 指定了一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部。比如设置 `Path=/docs`，`/docs/Web/` 下的资源会带 Cookie 首部，`/test` 则不会携带 Cookie 首部。

Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。

##### Secure属性

标记为 Secure 的 Cookie 只应通过被HTTPS协议加密过的请求发送给服务端。使用 HTTPS 安全协议，可以保护 Cookie 在浏览器和 Web 服务器间的传输过程中不被窃取和篡改。

##### HTTPOnly

设置 HTTPOnly 属性可以防止客户端脚本通过 document.cookie 等方式访问 Cookie，有助于避免 XSS 攻击。

##### SameSite

 Chrome80 版本中默认屏蔽了第三方的 Cookie

**作用**

SameSite 属性可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）

**属性值**

SameSite 可以有下面三种值：

1. **Strict** 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。
2. **Lax** 允许部分第三方请求携带 Cookie
3. **None** 无论是否跨站都会发送 Cookie

之前默认是 None 的，Chrome80 后默认是 Lax。

**跨域和跨站**

首先要理解的一点就是跨站和跨域是不同的。同站(same-site)/跨站(cross-site)」和第一方(first-party)/第三方(third-party)是等价的。但是与浏览器同源策略（SOP）中的「同源(same-origin)/跨域(cross-origin)」是完全不同的概念。

同源策略的同源是指两个 URL 的协议/主机名/端口一致。例如，https://www.taobao.com/pages/...，它的协议是 https，主机名是 [www.taobao.com，端口是](http://www.taobao.xn--com%2C-ye1g628gmm4a/) 443。

同源策略作为浏览器的安全基石，其「同源」判断是比较严格的，相对而言，Cookie中的「同站」判断就比较宽松：只要两个 URL 的 eTLD+1 相同即可，不需要考虑协议和端口。其中，eTLD 表示有效顶级域名，注册于 Mozilla 维护的公共后缀列表（Public Suffix List）中，例如，.com、.co.uk、.github.io 等。eTLD+1 则表示，有效顶级域名+二级域名，例如 taobao.com 等。

举几个例子，www.taobao.com 和 [www.baidu.com](http://www.baidu.com/) 是跨站，www.a.taobao.com 和 [www.b.taobao.com](http://www.b.taobao.com/) 是同站，a.github.io 和 b.github.io 是跨站(注意是跨站)。



**改变**

接下来看下从 None 改成 Lax 到底影响了哪些地方的 Cookies 的发送？直接来一个图表：

![samesite](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/samesite.7egvdxoc1y40.webp)

从上图可以看出，对大部分 web 应用而言，Post 表单，iframe，AJAX，Image 这四种情况从以前的跨站会发送三方 Cookie，变成了不发送。

Post表单：应该的，学 CSRF 总会举表单的例子。

iframe：iframe 嵌入的 web 应用有很多是跨站的，都会受到影响。

AJAX：可能会影响部分前端取值的行为和结果。

Image：图片一般放 CDN，大部分情况不需要 Cookie，故影响有限。但如果引用了需要鉴权的图片，可能会受到影响。

除了这些还有 script 的方式，这种方式也不会发送 Cookie，像淘宝的大部分请求都是 jsonp，如果涉及到跨站也有可能会被影响。

**问题**

1. 天猫和飞猪的页面靠请求淘宝域名下的接口获取登录信息，由于 Cookie 丢失，用户无法登录，页面还会误判断成是由于用户开启了浏览器的“禁止第三方 Cookie”功能导致而给与错误的提示
2. 淘宝部分页面内嵌支付宝确认付款和确认收货页面、天猫内嵌淘宝的登录页面等，由于 Cookie 失效，付款、登录等操作都会失败
3. 阿里妈妈在各大网站比如今日头条，网易，微博等投放的广告，也是用 iframe 嵌入的，没有了 Cookie，就不能准确的进行推荐
4. 一些埋点系统会把用户 id 信息埋到 Cookie 中，用于日志上报，这种系统一般走的都是单独的域名，与业务域名分开，所以也会受到影响。
5. 一些用于防止恶意请求的系统，对判断为恶意请求的访问会弹出验证码让用户进行安全验证，通过安全验证后会在请求所在域种一个Cookie，请求中带上这个Cookie之后，短时间内不再弹安全验证码。在Chrome80以上如果因为Samesite的原因请求没办法带上这个Cookie，则会出现一直弹出验证码进行安全验证。
6. 天猫商家后台请求了跨域的接口，因为没有 Cookie，接口不会返回数据
7. ……



**解决**

解决方案就是设置 SameSite 为 none。

以 Adobe 网站为例：https://www.adobe.com/sea/，查看请求可以看到：

![Adobe](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/Adobe.19seh6no9qg0.webp)

不过也会有两点要注意的地方：

1. HTTP 接口不支持 SameSite=none

如果你想加 SameSite=none 属性，那么该 Cookie 就必须同时加上 Secure 属性，表示只有在 HTTPS 协议下该 Cookie 才会被发送。

1. 需要 UA 检测，部分浏览器不能加 SameSite=none

IOS 12 的 Safari 以及老版本的一些 Chrome 会把 SameSite=none 识别成 SameSite=Strict，所以服务端必须在下发 Set-Cookie 响应头时进行 User-Agent 检测，对这些浏览器不下发 SameSite=none 属性



#### cookie的不足

* 各个浏览器对cookie的数量和大小都有不同的限制，这样就导致我们不能在Cookie中保存过多的信息。一般数量不超过50个，单个大小不超过4kb。
* cookie是由服务器发送给浏览器，再由浏览器将cookie发回，如果cookie较大会导致发送速度非常慢，降低用户的体验



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







### session

> Session 是一个对象，存储特定用户会话所需的属性及配置信息。
>
> Session是保存在服务器端的数据.（保存介质， 文件、数据库、内存）



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

1)	**存在的位置：**
cookie 存在于客户端
session 存在于服务器端，一个session域对象为一个用户浏览器服务
2)	**安全性：(https证书)**
cookie是以明文的方式存放在客户端的，安全性较低，可以通过一个加密算法进行加密后存放
session存放于服务器中，所以安全性较好
3)	**网络传输量：**
cookie会传递消息给服务器
session本身存放于服务器，但是通过cookie传递id，会有少量的传送流量
4)	**大小：**
cookie 保存的数据不能超过4K，很多浏览器都限制一个站点最多保存50个cookie
session 保存数据理论上没有任何限制







## 前台数据存储

> 作为 Web Storage API 的接口，**`Storage`** 提供了访问特定域名下的会话存储或本地存储的功能，例如，可以添加、修改或删除存储的数据项。
>
> 如果你想要操作一个域名的会话存储，可以使用 [`Window.sessionStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)；如果想要操作一个域名的本地存储，可以使用 [`Window.localStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)。

#### 存储方式

- cookie

- sessionStorage

- localStorage

  注意: session后台数据存储



#### cookie



### Window.sessionStorage

#### 概述

`sessionStorage` 属性允许你访问一个，对应当前源的 session [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象。它与 [`localStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 相似，不同之处在于 `localStorage` 里面存储的数据没有过期时间设置，而存储在 `sessionStorage` 里面的数据在页面会话结束时会被清除。

#### 特点

- 页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。
- **在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，**这点和 session cookies 的运行方式不同。
- 打开多个相同的 URL 的 Tabs 页面，会创建各自的 `sessionStorage`。
- 关闭对应浏览器标签或窗口，会清除对应的 `sessionStorage`



#### 语法

```javascript
// 保存数据到 sessionStorage
sessionStorage.setItem('key', 'value');

// 从 sessionStorage 获取数据
let data = sessionStorage.getItem('key');

// 从 sessionStorage 删除保存的数据
sessionStorage.removeItem('key');

// 从 sessionStorage 删除所有保存的数据
sessionStorage.clear();
```





#### localStorage

##### 概述

> 只读的`localStorage` 属性允许你访问一个[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 源（origin）的对象 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)；存储的数据将保存在浏览器会话中。



##### 实例

访问当前域名下的本地Storage对象.



##### 实际使用

如何监听localStorage的变化

> * storageEvent
> * 封装localStorage

storageEvent

JavaScript原生就有一个监听localStorage变化的事件——**storage**，使用方法如下

```javascript
window.addEventListener('storage', () => {
  //callbacks
})
```

封装localStorage

代理一下对localStorage进行多一层的封装，使得我们每次在操作localStorage的时候，都会多走一层函数，而我们就可以在这一层中去执行监听的事件了，下面是简单的代码例子：

```javascript
class CommonLocalStorage {
  private storage: Storage
  constructor() {
    this.storage = window.localStorage
  }

	set(key: string, value: any) {
    //执行监听的操作
    return this.storage.setItem(`${prefix}${key}`, value)
  }

	get(key: string) {
    //执行监听的操作
    return this.storage.removeItem(`${prefix}${key}`)
  }

	clear() {
    //执行监听的操作
    this.storage.clear()
  }
}

const commonStorage = new CommonLocalStorage()

export default commonStorage
```



#### 区别 localStoarge与sessionStorage

- 相同点(5条):
  - 浏览器不能禁用
  - 纯浏览器端存储, 大小不受限制
  - 只能保存文本, 如果是对象或数组, 需要转换为JSON
  - 请求时不会自动携带
  - API相同:
    - setItem(key, value)
    - getItem(key, value)
    - removeitem(key, value)
- 不同点(1条,关闭浏览器是否会被删除):
  - localStorage保存在本地文件中, 除非编码或手动删除, 否则一直存在
  - sessonStorage数据保存在当前会话内存中, 关闭浏览器则清除



#### 区别cookie 与 localStorage和sessionStorage

- 容量:  cookie小
- 请求时是否自动携带:  cookie自动携带
- API易用性:  cookie的操作语法不方便
- 浏览器是否可禁用: cookie可禁用

#### 区别cookie与session

- cookie保存在浏览器端(前台可以操作)
- session保存在服务器端(前台不能操作)
- session依赖于cookie(session的id以cookie的形式保存在浏览器端)







### 如何快速掌握HTTP协议

> [如何快速掌握 HTTP 协议？ (weibo.com)](https://weibo.com/ttarticle/p/show?id=2309404371449275123719)







## http实例

### 页面关闭时候发送请求

#### 来源

> 阮一峰的网络日志
>
>   ↓↓↓
>
> css-tricks.com
>
> https://css-tricks.com/send-an-http-request-on-page-exit/



#### 解决

**Fetch's keepalive flag**





**Navigator.sendBeacon()**



****

























