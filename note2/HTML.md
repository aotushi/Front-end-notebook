###  资源文档

#### 1.标准和文档

* w3.org
* whatwg.org
* developer.mozilla.org
* msdn.microsoft.com
* developer.apple.com

#### 2.大师

* Tim Berners-Lee
* Brendan Eich
* Bjarne Stroustrup





### HTML标签

#### 是什么

- HTML 标签是由*尖括号*包围的关键词，比如 \<html>
- HTML 标签通常是*成对出现*的，比如 \<b> 和 \</b>
- 标签对中的第一个标签是*开始标签*，第二个标签是*结束标签*
- 开始和结束标签也被称为*开放标签*和*闭合标签*

#### 种类

* 单标签(自结束标签)
* 双标签(有开始有结束)

#### 标签的关系

* 嵌套关系(包含关系,祖先和后代的关系)
* 并列关系(同级关系,兄弟之间的关系)



### HTML元素

#### 主要组成部分

* 开始标签(Opening tag): 包含元素的名称(本例为p)，被大于号、小于号所包围。表示元素从这里开始或者开始起作用.
* 结束标签(Closing tag): 与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾 
* 内容: 元素的内容
* 元素: 开始标签+结束标签+内容,便是一个完整的元素

![element.png (584×255) (mozit.cloud)](https://media.prod.mdn.mozit.cloud/attachments/2019/02/08/16475/cfa4526491ae15e6256fd67bb16bc7ea/element.png)



#### 标签和元素的关系

> [HTML Tags Vs Elements - Tutorial Republic](https://www.tutorialrepublic.com/html-tutorial/html-elements.php)

* 一个HTML元素是开始标签及它的属性,结束标签,及两者之间的所有的集合
* 简单起见,标签项和元素通常来表示同样的事情-就是它在你网页上定义的东西.



### HTML元素参考

> [HTML 元素参考 - HTML（超文本标记语言） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)



#### 根元素



#### 文档元数据



#### 分区根元素



#### 内容分区



#### 文本内容



#### 内联文本内容



#### 图片和多媒体



#### 内嵌内容



#### 脚本



#### 编辑表示



#### 表格内容



#### 表单



#### 交互元素



#### Web组件







### HTML标签写法和注释

#### 标签写法

在HTML中,标签和属性名字是大小写不敏感.意味着标签`<P>` 和 `<p>`在HTML中定义同样的段落.

但是在XHTML中,它们是大小写敏感的.

使用建议: 使用小写标签和属性名在HTML中.



#### HTML注释

An HTML comment begins with `<!--`, and ends with `-->`, as shown in the example below:

```html
<!-- This is an HTML comment -->
<!-- This is a multi-line HTML comment 
     that spans across more than one line -->
<p>This is a normal piece of text.</p>


<!-- Hiding this image for testing
<img src="images/smiley.png" alt="Smiley">
-->
```



### HTML元素的类型

#### 

元素可以被分成两类: 块级别元素 和 行内级别元素.

块元素装饰文档结构,行内元素装饰块的内容.

块元素占据可访问宽度的100%,它的首尾被渲染成换行符; 行内元素仅占据它所需空间.

最常用的块级元素:

```
<div>
<p>
<h1> - <h6>
<form>
<ol>
<ul>
<li>
```

最常用的行内元素

```
<img>
<a>
<span>
<strong>
<b>
<em>
<i>
<code>
<input>
<button>
```



#### 块元素

> 块级别元素是作为块被格式化的元素(即, 占据可用全部宽度),在块元素之前和之后有换行符.
>
> 通常来说,块元素可以包含行内元素和其他块元素.



#### 内联元素

内联级元素是源文档中不构成新内容块的元素; 内容以行形式分布. ????

内联元素通常只包含文本和其他内联元素.

一个内联元素仅仅占据需要的宽度,也不会强制换行.



### HTML属性

#### 是什么

* 定义元素额外的特征或属性,例如图片的宽度和高度. 
* 属性通常被定义在开始(闭合)标签,通常包含名字/值对,例如`name="value"`. 属性值应始终用引号引起来.

* 一些属性需要特定元素.来个例子, 一个`<img>`标签必须包含一个`src`  和 `alt`属性.

* 在HTML5中有几个属性不是由名字/值对构成,只是仅仅由名字构成.这样的属性被称为**布尔值属性**. 通常用的布尔值属性是`checked, readonly, required`等等.

* 属性值通常**大小写敏感**,除了id和class属性. 使用推荐是小写.



#### 图示

![](https://mdn.mozillademos.org/files/16476/attribute.png)



#### 属性的组成

* 在属性与元素名称（或上一个属性，如果有超过一个属性的话）之间的<span style="color:blue">空格符</span>
* 属性的<span style="color:blue">名称</span>，并接上一个等号。
* 由引号所包围的<span style="color:blue">属性值</span>



#### 命名注意事项

不包含 ASCII 空格（以及 `"` `'`  `=` `<` `>` 反引号）的简单属性值可以不使用引号，但是建议将所有属性值用引号括起来，这样的代码一致性更佳，更易于阅读。





### HTML文档

#### 基本结构(4部分)

* DTD(文档类型声明 `<!DOCTYPE>` declaration)
* The main container(`<html>` element)
* The head section(`<head>` element)
* The body section(`<body>` element)



#### 文档声明类型

##### 作用

会通知浏览器即将处理的文档类型,允许它们相应的调整处理机制.这DTD插入一个特殊标签(<!DOCTYPE>),为每个文档采用特定形式.此声明只能出现在文档开始.



#### main container: HTML元素

##### 组成

分成两部分: the `<head>` and  the `<body>`



##### \<head>元素

`<head>`部分是文档元信息(metadata)的容器.描述了文档的各种属性信息,包括文档标题,与其他文件的关系等.



此元数据可以根据使用的元素分成5类.

* The document's title: 简要描述文档中处理的主题.这是必要的一项,使用`<title>`元素插入.
* Style declarations: Style组定义用在为文档中的元素设置描述性属性. 它使用`<style>`元素插入.
* Client-side scripts: 插入程序以提供功能和交互. 用`<script>`元素来声明
* Meta statement: 定义自定义的属性和值. 使用`<meta>`元素插入.
* Relational information: 表示与文档以某种方式相关的资源. 使用`<link>`标签插入.
* base



##### \<body>元素

文档`<body>`仅仅是可渲染部分的容器.从这开始写你自己的内容(添加标题,段落,图片等),当页面加载时候你的访客立即访问的部分.



### meta标签

#### 资料

> [HTML meta标签总结与属性使用介绍 - SegmentFault 思否](https://segmentfault.com/a/1190000004279791)
>
> [HTML Standard (whatwg.org)](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element)



#### 作用

* meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。
* 这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务



#### 组成

- 如果设置了 [`name`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#attr-name) 属性，`meta` 元素提供的是文档级别（*document-level*）的元数据，应用于整个页面。
- 如果设置了 [`http-equiv`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#attr-http-equiv) 属性，`meta` 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 [`charset`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#attr-charset) 属性，`meta` 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 [`itemprop`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-itemprop) 属性，`meta` 元素提供用户定义的元数据。



#### name属性

##### 作用

* 与之对应的属性值为content，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取
* name属性主要用于描述网页，比如网页的关键词，叙述等。

##### description

```html
<meta name="description" content="xxx">
```



##### viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1"
```



##### robots

说明：robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引。
content的参数有all,none,index,noindex,follow,nofollow。默认是all。

```html
<meta name="robots" content="none"> 

<meta name="robots" content="index,follow,max-snippet:200,max-image-preview:large">

//max-snippet 谷歌搜索参数 最多只能使用 [number] 个字符作为此搜索结果的文字摘要。
//max-image-preview:       设置此网页的图片预览在搜索结果中的尺寸上限。
      
```





#### http-equiv属性

http-equiv顾名思义，相当于http的文件头作用。equiv的全称是"equivalent"

##### content-type

说明：用于设定网页字符集，便于浏览器解析与渲染页面

```html
<meta http-equiv="content-Type" content="text/html;charset=utf-8">  //旧的HTML，不推荐

<meta charset="utf-8"> //HTML5设定网页字符集的方式，推荐使用UTF-8
```

##### X-UA-Compatible(浏览器采取何种版本渲染当前页面)

说明：用于告知浏览器以何种版本来渲染页面。（一般都设置为最新模式，在各大框架中这个设置也很常见。）

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/> //指定IE和Chrome使用最新版本渲染当前页面
```

##### cache-control(指定请求和响应遵循的缓存机制)

###### 用法1.

说明：指导浏览器如何缓存某个响应以及缓存多长时间。

```html
<meta http-equiv="cache-control" content="no-cache">
```



共有以下几种用法：

1. no-cache: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。
2. no-store: 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）
3. public : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果
4. private : 只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）
5. maxage : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。

> [参考链接：HTTP缓存](https://link.segmentfault.com/?enc=g0wxoHT0Oi4trg%2F%2Ban326g%3D%3D.dEwDy5%2FLkodWzR2WjHO05GZuB6PtHxTtOBUB1IDUDaERHCm3hXiEiPVHJzbYOa8d8%2Bw1LuwSX3ne0BZ%2FPWKqZ1KNEXjrYZJH41veJo6QM4d%2B5RhdP27jIuR%2B89KmUlmlPVIMpMymxG96ffRTtVU9tat2pi6tP03mSJqyUn3cINY%3D)

###### 用法2.(禁止百度自动转码)

说明：用于禁止当前页面在移动端浏览时，被百度自动转码。虽然百度的本意是好的，但是转码效果很多时候却不尽人意。所以可以在head中加入例子中的那句话，就可以避免百度自动转码了。
举例：

```html
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

##### expires

说明:用于设定网页的到期时间，过期后网页必须到服务器上重新传输。

```html
<meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" />
```



##### Set-Cookie(cookie设定)

如果网页过期。那么这个网页存在本地的cookies也会被自动删除。

```html
<meta http-equiv="Set-Cookie" content="name, date"> //格式

<meta http-equiv="Set-Cookie" content="User=Lxxyx; path=/; expires=Sunday, 10-Jan-16 10:00:00 GMT"> //具体范例
```



#### 其他类型元数据

Facebook和twitter提供的元数据协议

```html
<meta property="twitter:site" content="@FinancialTimes">
<meta proeprty="fb:pages" content="8860325749">
```



### link标签

#### 作用

* 指明当前文档和外部资源的关系
* 最常用连接到样式表, 网站icon图标(facivon, 移动端上的home屏幕或者app)



#### 属性





### script标签



### style标签



### title标签



### base标签
