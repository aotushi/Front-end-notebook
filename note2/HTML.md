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
