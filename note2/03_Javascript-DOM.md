---

---

### DOM介绍

```html
- DOM就是文档对象模型
- DOM描述了处理网页内容的方法和接口
- window是浏览器窗口对象,所有东西都被当做是window的子对象
- 文档对象document是window下的一个属性,代表整个DOM文档对象
- 文档树(dom树) 以HTML为根节点,形成的一颗道理的树状结构.这个树上所有的东西叫做节点.一共有12种节点类型,常用的是4种.
 - 节点分类:
 		元素节点 元素/标签
		属性节点 属性
        文本节点 文本
        注释节点 注释
 - 这些节点我们通过DOM方法去获取或者操作使用,就称作DOM对象       
        

```

对DOM的所有操作都是以==document==对象开始.它是DOM的主'入口点',从它我们可以访问任何节点.

最顶层的树节点可以直接作为document的属性来使用:

\<html> = document.documentElement    

\<body> = document.body 

\<body> = document.head

**可能的问题**

document.body的值可能是null

脚本无法访问在运行时不存在的元素.尤其是如果一个脚本在head标签中,那么脚本是无法访问到document.body的,因为浏览器没有读到它.









### window.onload事件

```JavaScript
- 等待页面资源加载完成事件
- 一般情况下我们都是等待页面加载完成后才去操作DOM元素.如果页面没有加载完成就去获取DOM元素,有可能获取不到.
- 页面加载完成事件 加载完所有外部资源
- 当页面加载完成后 window.onload的回调函数 会自动执行

- 回调函数
	- 你定义 没调用 自动执行
```



```html
<script>
    window.onload = function(){
    	var pNode = document.getElementById('pNode');
	}
</script>    
```



### 事件的3大要素

```JavaScript
事件的3大要素:
事件的承受方 为事件源
事件的类型: 单击 移入 移出 移动 键盘 获得焦点 失去焦点
事件源承受事件后 给出的反馈:回调函数//事件源.事件名称 = 回调函数
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<button id="btn">按钮</button>
<script type="text/javascript">
    window.onload = function () {
		//获取页面元素（事件源）
        //通过id值来访问页面元素  返回的结果是一个对象 我们称之为dom对象
        var btnNode = document.getElementById('btn');
        var num = 0;
    
		//事件源.事件名称 = 回调函数
        btnNode.onclick = function () {
            num++; 
            console.log(num)
        }
    }
</script>
</body>
</html> 
```





### 操作元素通用属性

#### 1.获取DOM对象

#### 2.添加本身具有的属性(对象.属性, 对象[属性])

```html
- 通过id值获取元素的DOM对象(事件源)
document.getElementById('idname')

- 通过DOM对象为元素添加属性(天生固有属性)
1.dom对象.属性
2.dom对象[属性]

<!doctype html>
<html lang = 'en'>
<head>
	<meta charset='utf-8' >
    <title>title</title>
    <style>
        img{width:150px;}
    </style>
</head> 
<body>
	<a href="https://www.baidu.com" id=aNode>百度一下</a>
    <img src='1.jpg' id=imgNode>
    <button id="btn">按钮</button>
    <script>
    	window.onload = function(){
            //通过id获取元素的dom对象
            var aNode=document.getElementById('aNode');
            var btnNode = document.getElementById('btn');
            var imgNode = document.getElementById('imgNode');
            //给按钮绑定事件
            btnNode.onclick = function(){
                //操作a标签的href属性  获取的标签是dom对象,标签属性相当于对象的属性
                aNode.href = 'https://jd.com';
               //aNode['href'] = 'https://jd.com';
                imgNode.src = '2.jpg';
                imgNode[src] = '2.jpg';
            }
        }
    </script>
</body>    
</html>
```



### 实例: 图片来回切换(2种方法)

```html
- 使用DOM实现图片来回切换
 - 标准位
 - 变量取模

- 方法1:标准位

- 使用(标志位), 使得图片可以通过点击button来回切换
- 在没有语义的情况下不会过度关注标志位变量的默认值,而是区分好标志位不同状态对应的逻辑

代码更新:
 var flag = true;// true代表图片1,false代表图片2
<script>
btnNode.onclick = function(){
    if(flag){
        imgNode.src = '2.jpg';
    }else{
        imgNode.src = '1.jpg';
    }
    flag = !flag;
}
</script>


- 方法2:  定义一个变量 使用取模换算
<script>
var num = 0;
btnNode.onclick = function(){
    num++;
    imgNode.src = num%2 + 1 + '.jpg'; //3张图片就除以3取模
}    
</script>
```







### 操作元素特殊属性

> 案例:点击按钮修改多选框 选中

#### 案例:input表单输入之复选框

```html
- 案例,点击按钮,使input多选框来回切换

- 方法1:使用标准位
<body>
 <input type='checkbox' id='checkNode'>
 <button id='btn'>按钮</button>   
 <script>
 	window.onload = function(){
        var btnNode = document.getElementById('btn');
        var checkNode = document.getElementById('checkNode');
        var flag = true; //标志位
        
       btnNode.onclick = function(){
            if(flag){
            	checkNode.checked = false;
        	}else{
            	checkNode.checked = true;
        	}
        	flag = !flag;
       }
    }   
 </script>    
</body>    

- 方法2: 
更新: 只要遇到属性名和属性值都相同的属性,我们统一转换成布尔值操作

btnNode.onclick = function(){
	checkNode.checked = !checkNode. v;
}
```



#### 切换类名

```html
- 类名使用className代替class,class在JS中是保留字

```



```html
<style>
    .p1{backgorund:pink;}
    .p2{background:yellowgreen;}
</style>  
<body>
    <p id='pNode' class="p1">第一个p标签</p>
</body>

<script>
	window.onload = function(){
        var pNode = document.getElementById('pNode');
        pNode.onclick = function(){
            //alert(1); 测试dom方式,如果能运行,证明到这一步是对的
            //通过更换类名来实现p标签背景颜色改变
            //pNode.class = 'p2'; 错误,class为js保留字 在es6当中成为了 类的关键字,所以我们不能通过访问class这个属性 来操作元素的类名.我们需要使用 className
            pNode.className = 'p2';
            //或者 pNode['classNmae'] = 'p2';
            
        }
    }
</script>
```





### 操作元素自定义属性

#### setAttribute(属性名,属性值)

#### getAttribute(属性名)

```Markdown
- 根据属性是否天生就存在元素身上的额情况,我们可以将属性分为1.固有属性(天生属性), 2.自定义属性(自己随便添加).

- 对于固有属性,可以通过 对象.属性名和对象['属性名']来获取或设置

- 对于自定义属性,无法使用以上两种方法,只通过两个固定方法来操作:
 - setAttribute 设置自定义属性 两个参数 参数1,要设置的属性名称; 参数2,要设置的属性值
 - getAttribute 获取自定义属性 一个参数:要读取的属性名称 返回对应的属性值 返回结果为字符串
 
 - 固有属性可以通过自定义属性的2个方法来操作,但一般还是按照对象.属性名和对象['属性名']的方式
 - 使用setAttribute和getAttribute操作class类名,直接使用class来获取或设置.不使用className.
 


```



```html
<style>
    <p id='pNode' class='p1' aa='bb'>这是一个p标签</p>
    <button id="btn">按钮</button>
</style>

<script>
window.onload = function(){
    var pNode = document.setAttribute('aa', 'bb');
}

</script>
```





### 获取元素的其他方式

#### document.getElementByClassName 数组

#### document.getElementByTagName 数组

#### document.querySelector()  #id .className 返回单个DOM对象

#### document.querySelectorAll(#id)

返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 [`NodeList`](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList) 。

NodeList:

`NodeList` 对象是节点的集合，通常是由属性，如[`Node.childNodes`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/childNodes) 和 方法，如[`document.querySelectorAll`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll) 返回的。

`NodeList` **不是一个数组**，是一个类似数组的对象(*Like Array Object*)。虽然 `NodeList` 不是一个数组，但是可以使用 `forEach()` 来迭代。你还可以使用 [`Array.from()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 将其转换为数组。

不过，有些浏览器较为过时，没有实现 `NodeList.forEach()` 和 `Array.from()`。你可以用 [`Array.prototype.forEach()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 来规避这一问题。

`NodeList`是一个实时集合,如果文档中的节点书发生变化,`NodeList`也会随之变化. 例如`Node.childNodes`是实时的.其他情况下,NodeList是一个静态集合,也就是说随后对文档对象模型的任何改动都不会影响集合的内容. 例如document.querySelectorAll返回一个静态NodeList.

```html
<body>
<p id="p1" class="pItem">11111</p>
<p id="p2" class="pItem">22222</p>
<p id="p3" class="pItem">33333</p>
<p id="p4" class="pItem">44444</p>
<p id="p5" class="pItem">55555</p>
<div id="p6" class="pItem">66666</div>
<div class="box">
    <p>今天晚上吃点啥</p>
</div>
<script>
	window.onload = function(){
        // 1. 通过id获取元素 
        var p6Node = document.getElementById('p6');
        
        // 2. 通过class获取元素 返回一个伪数组,内部包含的是含有这个class的元素集合(nodelist)
        //当我们遇到元素集合时,如果想使用dom对象的方法或属性是不能直接使用的.
        //需要通过 遍历 或 索引取值的方式访问内部的dom对象
        var pItems = document.getElementByClassName('pItem');
        
        // 3. 通过标签名称获取元素 返回一个伪数组对象,内部包含的是这个标签名称的 元素集合.
        //当我们遇到元素集合时,如果想使用dom对象的方法或属性是不能直接使用的.
        //需要通过 遍历 或 索引取值的方式访问内部的dom对象
        var pList = document.getElementsByTagName('p');
        
        //我们通过类名或标签名称去查找元素时(或者所有能获取集合的方式),无论查询结果是一个对象还是一个集合,都是以伪数组对象返回.
        
        
        //推荐方式 querySelector querySelectorAll 直接使用选择器来查询元素
        //querySelector 查找单个元素 返回结果 直接为dom对象 就算选择器的范围是一个集合,只返回第一个  ****
        //querySelectorAll 用来查询元素集合 无论查询结果几个 都是将匹配的dom对象,放在伪数组中       ****
        
        var pNode = document.querySelector('#p2');
        
        var pList = document.querySelectorAll('#p2');
        
        
        //可以将已获取的dom对象,再查询其内部的对象
        var boxNode = document.querySelector('.box');
        var pTask = boxNode.querySelector('p);
    }    
</script>    
</body>
```



#### 获取元素方式-总结

```HTML
querySelector()
querySelectorAll()
getElementsById()
getElementsByTagName()
getElementsByClassName()
getElementsByName()

```





### 修改元素样式

```js
- 通过JS修改的样式,都为行内样式 //选择器权重高
- 设置样式会出现在行内,读取样式也只能读取行内样式(能读非行内样式,但是需要加操作)
- css中所有原本样式名称上带有横杠的,一律使用小驼峰命名法

- 格式:
 对象.style.属性 = '新值';
例: 变量.style.backgroundColor = '新值';
```



### 获取和修改元素内容 innerHTML/innerText

```js
//获取元素内容
- innerText 
	获取元素内容,但只会获取文本,不会获取内部标签
	设置元素内容,如果文本中有标签,会作为文本被渲染,标签不会被解析
	

- innerHTML
	获取元素内部 标签+文本
	设置元素内容,文本中的标签,可以被渲染
	这也是我们向页面中添加元素的方法之一
	

//修改元素内容
- 当设置或读取的内容为纯文本,两种方法没有区别

- innerText
	获取或设置元素的内容  标签不会被渲染或者获取  所有浏览器都认识   只对可见元素有效
- Node.textContent
  Node 接口的 textContent 属性表示一个节点及其后代的文本内容;返回值是一个字符串或null.
	获取或设置元素的内容  标签不会被渲染或者获取  高级浏览器都认识   对隐藏元素也有效 但依然不显示

以上两个属性指的对可见元素是否有效,说的是占位隐藏(display:none; visibility:hidden;)
```



### createDocumentFragment()

```js
//http://www.cnitblog.com/asfman/articles/32614.html
//https://blog.csdn.net/qiao13633426513/article/details/80243058

1.createdocumentfragment()方法创建了一虚拟的节点对象
2.DocumentFragment节点不属于文档树，继承的parentNode属性总是null。
3.当需要添加多个dom元素时，如果先将这些元素添加到DocumentFragment中，再统一将DocumentFragment添加到页面，会减少页面渲染dom的次数，效率会明显提升。
4.如果使用appendChid方法将原dom树中的节点添加到DocumentFragment中时，会删除原来的节点。 


```





### 兼容性封装获取元素文本

```html
- 封装一个函数 既能获取元素的文本也能设置一个元素的文本
- 在设置和获取的时候  能够使用textContent的情况下 优先使用textContent  如果不能使用 再使用innerText


```



```JavaScript
<p id="pNode">今天晚上吃点啥</p>
<button id="btn">按钮</button>


window.onload = function(){
    var pNode = document.getElementById('pNode');
    var btnNode = document.getElementById('btn');
    btnNode.onclick = function(){
        setOrGetContent(pNode);
        setOrGetContent(pNode, '今天吃火锅');
    }
    
    function setOrGetContent(node, content){
        if(arguments.length == 1){
            if(node.textContent){
                return node.textContent;
            }else{
                return node.innerText
            }
        }else if(arguments == 2){
            if(content.textContent){
                node.textContent = content;
            }else{
                node.innerText = content;
            }
        }
    }
}
```





### 排它思想实现文本切换

```html
<body>
<p>哈哈哈1</p>
<p>哈哈哈2</p>
<p>哈哈哈3</p>
<p>哈哈哈4</p>
<p>哈哈哈5</p>
<p>哈哈哈6</p>
    
<script>
   window.onload = function(){
       var pList = document.querySelectorAll('p');
       for(var i=0; i<pList.length; i++){
           pList[i].onclick = function(){
               for(var i=0; i<pList.length; i++){
                   pList[i].innerHTML = '呵呵呵';
               }
             	 this.innerHTML = 'gegege';
           }
           //this在事件回调当中,指向当前触发事件的事件源
           //在使用排它思路,去处理如高亮切换等逻辑 一定是先操作集合后操作当前事件源
       }
   } 
    
</script>    
</body>
```



### this是什么

```html
- 直接调用,this是window
- 以方法形式调用,this是调用方法的对象
- new调用,this是新建的对象
- 通过函数对象的call/apply/bind调用,this是第一个参数

- 回调函数形式
 - this指触发事件的事件源或window
 - vue控制的回调函数,this是组件的实例
 - react控制的生命周期回调,事件监听回调,this是组件对象/undefined

```



## 事件/事件流

```js
https://www.cnblogs.com/starof/p/4066381.html
```



### 一.事件

**事件是文档或者浏览器窗口中发生的，特定的交互瞬间。**

事件是用户或浏览器自身执行的某种动作，如click,load和mouseover都是事件的名字。

事件是javaScript和DOM之间交互的桥梁。

### 二.事件流

**事件流描述的是从页面中接收事件的顺序**

#### 1.事件流感性认知

问题：单击页面元素，什么样的元素能感应到这样一个事件？

答案：单击元素的同时，也单击了元素的容器元素，甚至整个页面。

案例: [3个同心圆](https://www.cnblogs.com/starof/p/4066381.html).



#### 2.事件流

#### 2.1 两种事件流模型

事件传播的顺序对应浏览器的两种事件流模型：捕获型事件流和冒泡型事件流

**冒泡型事件流**：事件的传播是从**最特定**的**事件目标**到最不特定的**事件目标**。即从DOM树的叶子到根。**【推荐】**

**捕获型事件流**：事件的传播是从**最不特定**的**事件目标**到最特定的**事件目标**。即从DOM树的根到叶子。

事件捕获的思想就是不太具体的节点应该更早接收到事件，而最具体的节点最后接收到事件

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="myDiv">Click me!</div>
</body>
</html>

上面这段html代码中，单击了页面中的<div>元素，
在冒泡型事件流中click事件传播顺序为<div>—》<body>—》<html>—》document
在捕获型事件流中click事件传播顺序为document—》<html>—》<body>—》<div>
```



| 冒泡型事件传播                                               | 捕获型事件传播                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://images0.cnblogs.com/blog/315302/201411/010945436598199.png) | ![](https://images0.cnblogs.com/blog/315302/201411/010945579257474.png) |

note:由于老版本浏览器不支持，很少有人使用事件捕获。**建议使用事件冒泡**。



#### 2.2 DOM事件流

DOM标准采用捕获+冒泡。两种事件流都会触发DOM的所有对象，从document对象开始，也在document对象结束

![](https://images2015.cnblogs.com/blog/315302/201606/315302-20160621155328756-279009443.png)

DOM标准规定事件流包括三个阶段：事件捕获阶段、处理目标阶段和事件冒泡阶段。

- 事件捕获阶段：**实际目标**（\<div>）在捕获阶段**不会接收事件**。也就是在捕获阶段，事件从document到\<html>再到\<body>就停止了。上图中为1~3.
- 处于目标阶段：事件在\<div>上发生并处理。**但是事件处理会被看成是冒泡阶段的一部分**。
- 冒泡阶段：事件又传播回文档。



note:

* 尽管“DOM2级事件”标准规范明确规定事件捕获阶段不会涉及事件目标，但是在IE9、Safari、Chrome、Firefox和Opera9.5及更高版本都会在捕获阶段触发事件对象上的事件。结果，就是有两次机会在目标对象上面操作事件。

* 并非所有的事件都会经过冒泡阶段 。所有的事件都要经过捕获阶段和处于目标阶段，但是有些事件会跳过冒泡阶段：如，获得输入焦点的focus事件和失去输入焦点的blur事件。

  两次机会在目标对象上面操作事件例子:

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<style>
    #outer{
        position: absolute;
        width: 400px;
        height: 400px;
        top:0;
        left: 0;
        bottom:0;
        right: 0;
        margin: auto;
        background-color: deeppink;
    }
    #middle{
        position: absolute;
        width: 300px;
        height:300px;
        top:50%;
        left: 50%;
        margin-left: -150px;
        margin-top: -150px;
        background-color: deepskyblue;
    }
    #inner{
        position: absolute;
        width: 100px;
        height:100px;
        top:50%;
        left:50%;
        margin-left: -50px;
        margin-top: -50px;;
        background-color: darkgreen;
        text-align: center;
        line-height: 100px;
        color:white;
    }
    #outer,#middle,#inner{
        border-radius:100%;
    }
</style>
<body>
<div id="outer">
    <div id="middle">
        <div id="inner">
            click me!
        </div>
    </div>
</div>
<script>
    var innerCircle= document.getElementById("inner");
    innerCircle.addEventListener("click", function () {
        alert("innerCircle的click事件在捕获阶段被触发");
    },true);
    innerCircle.addEventListener("click", function () {
        alert("innerCircle的click事件在冒泡阶段被触发");
    },false);
    var middleCircle= document.getElementById("middle");
    middleCircle.addEventListener("click", function () {
        alert("middleCircle的click事件在捕获阶段被触发");
    },true);
    middleCircle.addEventListener("click", function () {
        alert("middleCircle的click事件在冒泡阶段被触发");
    },false);
    var outerCircle= document.getElementById("outer");
    outerCircle.addEventListener("click", function () {
        alert("outerCircle的click事件在捕获阶段被触发");
    },true);
    outerCircle.addEventListener("click", function () {
        alert("outerCircle的click事件在冒泡阶段被触发");
    },false);
</script>
</body>
</html>
```

![](https://images0.cnblogs.com/blog/315302/201411/052135036896502.png)

#### 3.事件流的典型应用事件代理

传统的事件处理中，需要为**每个元素**添加事件处理器。js事件代理则是一种简单有效的技巧，通过它可以把事件处理器添加到**一个父级元素**上，从而避免把事件处理器添加到**多个子级元素**上。

#### 3.1事件代理

件代理的原理用到的就是事件冒泡和目标元素，把事件处理器添加到父元素，等待子元素事件冒泡，并且父元素能够通过target（IE为srcElement）判断是哪个子元素，从而做相应处理.

```html
<body>
<ul id="color-list">
<li>red</li>
<li>orange</li>
<li>yellow</li>
<li>green</li>
<li>blue</li>
<li>indigo</li>
<li>purple</li>
</ul>
<script>
(function(){
    var colorList=document.getElementById("color-list");
    colorList.addEventListener('click',showColor,false);
    function showColor(e)
    {
        e=e||window.event;
        var targetElement=e.target||e.srcElement;
        if(targetElement.nodeName.toLowerCase()==="li"){
        alert(targetElement.innerHTML);
        }
    }
})();
</script>
</body>
```



#### 3.2事件代理的好处

- 将多个事件处理器减少到一个，因为事件处理器要驻留内存，这样就提高了性能。
- DOM更新无需重新绑定事件处理器，因为事件代理对不同子元素可采用不同处理方法。如果新增其他子元素（a,span,div等），直接修改事件代理的事件处理函数即可，不需要重新绑定处理器，不需要再次循环遍历。

#### 3.3事件代理的弊端

代码如下：事件代理同时绑定了li和span，当点击span的时候，li和span都会冒泡

```html
<li><span>li中的span的内容</span></li>

<script>
    $(document).on('click', 'li', function(e){
        alert('li li');
    });

    $(document).on('click', 'span', function(e){
        alert('li span');
    })
</script>
```

解决方法:

1.span的事件处理程序中阻止冒泡

```js
$(document).on('click', 'span', function(e){
  alert('li span');
  e.stopPropagation();
})
```



2.li的事件处理程序中检测target元素

```js
$(document).on('click', 'li', function (e) {
  if (e.target.nodeName == 'SPAN') {
    e.stopPropagation();
    return;
  }
  alert('li li');
});
```



#### 3.4事件代理的有趣应用

点击一个列表,输出对应的索引

```js
let ul=document.querySelector('ul');
let lis=ul.querySelectorAll('ul li');
ul.addEventListener('click',function(e){
  let target=e.target;
  if(target.nodeName.toUpperCase()==='LI'){
    alert([].indexOf.call(lis,target))
  }
})
```



### 三.事件处理程序

事件是用户或浏览器自身执行的某种动作，如click,load和mouseover都是事件的名字。响应某个事件的函数就叫**事件处理程序**（也叫**事件处理函数**、**事件句柄**）。事件处理程序的名字以"on"开头，因此click事件的事件处理程序就是onclick,load事件的事件处理程序就是onload。

为事件指定事件处理程序的方法主要有3种

#### 1.三种事件处理程序

#### 1.1 HTML事件处理程序

**事件直接加在html元素上。**

首先，这种方法已经过时了。因为动作(javascript代码)和内容(html代码)紧密耦合，修改时即要修改html也要修改js。但是写个小demo的时候还是可以使用的。

这种方式也有两种方法，都很简单：

第一种：直接在html中定义事件处理程序及包含的动作

```html
<input type='button' value='click me' onclick='alert('clicked')'/>
```

第二种：html中定义事件处理程序，执行的动作则调用其他地方定义的脚本

```html
<input type='button' value='click me' onclick='showMsg()'/>
<script>
	function showMsg(){
    alert('clicked')
  }
</script>
```

note:

1）通过event变量可以直接访问事件本身，比如onclick="alert(event.type)"会弹出click事件。

2）this值等于事件的目标元素，这里目标元素是input。比如 onclick="alert(this.value)"可以得到input元素的value值。

#### 1.2 DOM0事件处理程序

**把一个函数赋值给一个事件处理程序属性。**

这种方法简单而且跨浏览器，但是只能为一个元素添加一个事件处理函数。

因为这种方法为元素添加多个事件处理函数，则后面的会覆盖前面的。

```html
<input id='myBtn' type='button' value='click me'/>
<script>
	let myBtn=document.querySelector('myBtn');  //1.取得btn对象
  myBtn.onclick=function(){   //2.相当于给myBtn添加了一个onclick的属性  3.把函数赋值给onclick事件处理程序属性
    alert('clicked')
  }
</script>
```

**删除事件处理程序**

```js
myBtn.onclick=null;
```



#### 1.3 DOM2事件处理程序

DOM2级事件处理程序可以为一个元素添加多个事件处理程序。其定义了两个方法用于添加和删除事件处理程序：addEventListener()和removeEventListener()。

**所有的DOM节点都包含这2个方法。**

这两个方法都需要3个参数：事件名，事件处理函数，布尔值。

这个布尔值为true,在捕获阶段处理事件，为false，在冒泡阶段处理事件，**默认为false**。

**添加事件处理程序**：现在为按钮添加两个事件处理函数，一个弹出“hello”,一个弹出“world”。

```html
<input id="myBtn" type="button" value="click me!"/>
<script>
    var myBtn=document.getElementById("myBtn");
    myBtn.addEventListener("click",function(){
        alert("hello");
    },false);
    myBtn.addEventListener("click",function(){
        alert("world");
    },false);
</script>
```

**删除事件处理程序**：通过addEventListener添加的事件处理程序必须通过removeEventListener删除，且参数一致。

**note**:**通过addEventListener添加的匿名函数将无法删除。**下面这段代码将不起作用！

```js
myBtn.removeEventListener("click",function(){
  alert("world");
},false);
```

看似该removeEventListener与上面的addEventListener参数一致，实则第二个参数中匿名函数是完全不同的。

所以为了能删除事件处理程序，代码可以这样写

```html
<input id="myBtn" type="button" value="click me!"/>
<script>
    var myBtn=document.getElementById("myBtn");
    var handler=function(){
        alert("hello");
    }
    myBtn.addEventListener("click",handler,false);
    myBtn.removeEventListener("click",handler,false);
</script>
```



### 四.IE事件处理程序

```js
https://www.cnblogs.com/starof/p/4067121.html
```



### 五.事件对象

**什么是事件对象？在触发DOM上的事件时都会产生一个对象**

#### 1.认识

事件在浏览器中是以对象的形式存在的，即event。触发一个事件，就会产生一个事件对象event，该对象**包含着所有与事件有关的信息**。包括导致事件的元素、事件的类型以及其他与特定事件相关的信息。

例如：鼠标操作产生的event中会包含鼠标位置的信息；键盘操作产生的event中会包含与按下的键有关的信息。

所有浏览器都支持event对象，但支持方式不同，在DOM中event对象必须作为唯一的参数传给事件处理函数，在IE中event是window对象的一个属性。

#### 2.html事件处理程序中的event

这样会创建一个包含局部变量event的函数。可通过event直接访问事件对象。

```html
<input id="btn" type="button" value="click" onclick=" console.log('html事件处理程序'+event.type)"/>
```



#### 3.DOM中的事件对象

DOM0级和DOM2级事件处理程序都会把event作为参数传入

```js
<body>
<input id="btn" type="button" value="click"/>
<script>
    var btn=document.getElementById("btn");
    btn.onclick=function(event){
        console.log("DOM0 & click");
        console.log(event.type);    //click
    }
    btn.addEventListener("click", function (event) {
        console.log("DOM2 & click");
        console.log(event.type);    //click
    },false);
</script>
</body>
```



#### 3.1 DOM中事件对象重要**属性和方法**:

属性:

- type属性，用于获取事件类型
- target属性 用户获取事件目标 事件加在哪个元素上。（更具体target.nodeName）

方法:

- stopPropagation()方法 用于阻止事件冒泡
- preventDefault()方法 阻止事件的默认行为 移动端用的多



#### 4.IE中的事件对象

```js
https://www.cnblogs.com/starof/p/4077532.html
```



### 六.事件对象的公共成员

#### 1.DOM中的event的公共成员

event对象包含与创建它的特定事件有关的属性和方法。触发的事件类型不一样，可用的属性和方法不一样。但是，DOM中所有事件都有以下公共成员。【注意bubbles属性和cancelable属性】

| 属性/方法                  | 类型         | 读写 | 说明                                                         |
| -------------------------- | ------------ | ---- | ------------------------------------------------------------ |
| bubbles                    | Boolean      | 只读 | 表明事件是否冒泡                                             |
| **stopPropagation()**      | Function     | 只读 | 取消事件的进一步捕获或冒泡。如果bubbles为true,则可以使用这个方法 |
| stopImmediatePropagation() | Function     | 只读 | 取消事件的进一步捕获或冒泡**，同时阻止任何事件处理程序被调用**（DOM3级事件中新增） |
| cancelable                 | Boolean      | 只读 | 表明是否可以取消事件的默认行为                               |
| **preventDefault()**       | Function     | 只读 | 取消事件的默认行为。如果cancelable是true，则可以使用这个方法 |
| defaultPrevented           | Boolean      | 只读 | 为true表示已经调用了preventDefault()(DOM3级事件中新增)       |
| **currentTarget**          | Element      | 只读 | 其事件处理程序当前正在处理事件的那个元素（**currentTarget始终===this,即处理事件的元素**） |
| **target**                 | Element      | 只读 | 直接事件目标，**真正触发事件的目标**                         |
| detail                     | Integer      | 只读 | 与事件相关的细节信息                                         |
| **eventPhase**             | Integer      | 只读 | 调用事件处理程序的阶段：1表示捕获阶段，2表示处于目标阶段，3表示冒泡阶段 |
| trusted                    | Boolean      | 只读 | 为true表示事件是由浏览器生成的。为false表示事件是由开发人员通过JavaScript创建的（DOM3级事件中新增） |
| **type**                   | String       | 只读 | 被触发的事件的类型                                           |
| view                       | AbstractView | 只读 | 与事件关联的抽象视图。等同于发生事件的window对象             |



#### 1.1.对比currentTarget和target

在事件处理程序内部，对象this始终等于currentTarget的值，而target则只是包含事件的实际目标。

```html
<body>
<input id="btn" type="button" value="click"/>
<script>
    document.body.onclick=function(event){
        console.log("body中注册的click事件");
        console.log("this===event.currentTarget? "+(this===event.currentTarget)); //true
        console.log("currentTarget===document.body?"+(event.currentTarget===document.body)); //true
        console.log('event.target===document.getElementById("btn")? '+(event.target===document.getElementById("btn"))); //true
    }
</script>
</body>
```



#### 1.2.通过type属性，可以在一个函数中处理多个事件。

原理：通过检测event.type属性，对不同事件进行不同处理。

举例：定义一个handler函数用来处理3种事件：click,mouseover,mouseout。

运行效果：点击按钮，弹出框。鼠标经过按钮，按钮背景色变为粉色；鼠标离开按钮，背景色恢复默认。

```html
<body>
  <input id='btn' type='button' value='click'/>
  <script>
  	let handler=function(event){
      switch(event.type){
        case 'click':
          alert('clicked');
          break;
        case 'mouseover':
          event.target.style.backgroundColor='pink';
          break;
        case 'mouseout':
          event.target.style.backgroundColor='';
      }
    }
    let btn=document.getElementById('btn');
    btn.onclick=handler;
    btn.onmouseover=handler;
    btn.onmouseouter=handler;
  </script>
</body>
```



#### 1.3 stopPropagation()和stopImmediatePropagation()对比

同：stopPropagation()和 stopImmediatePropagation()都可以用来取消事件的进一步捕获或冒泡。

异：二者的区别在于当一个事件有多个事件处理程序时，stopImmediatePropagation()可以阻止之后事件处理程序被调用。

```html
<body>
<input id="btn" type="button" value="click"/>
<script>
    var btn=document.getElementById("btn");
    btn.addEventListener("click",function(event){
        console.log("buttn click listened once");
//    event.stopPropagation();//取消注释查看效果
//    event.stopImmediatePropagation();//取消注释查看效果
    },false);
    btn.addEventListener("click",function(){
        console.log("button click listened twice");
    },false);
    document.body.onclick= function (event) {
        console.log("body clicked");
    }
</script>
</body>
```



#### 1.4 eventPhase

eventPhase值在捕获阶段为1，处于目标阶段为2，冒泡阶段为3。

| 常量                  | 值   |
| --------------------- | ---- |
| Event.CAPTURING_PHASE | 1    |
| Event.AT_TARGET       | 2    |
| Event.BUBBLING_PHASE  | 3    |

可以通过下面代码查看：

```
var btn=document.getElementById("btn");
btn.onclick= function (event) {
console.log(event.CAPTURING_PHASE); //1
console.log(event.AT_TARGET); //2
console.log(event.BUBBLING_PHASE); //3
}
```



#### 2.IE中event公共成员

IE中的event的属性和方法和DOM一样会随着事件类型的不同而不同，但是也有一些是所有对象都有的公共成员，且这些成员大部分有对应的DOM属性或方法。

| 属性/方法    | 类型    | 读/写 | 说明                                                         |
| ------------ | ------- | ----- | ------------------------------------------------------------ |
| cancelBubble | Boolean | 读/写 | 默认为false,但将其设置为true就可以取消事件冒泡（**与DOM中stopPropagation()方法的作用相同**） |
| returnValue  | Boolean | 读/写 | 默认为true，但将其设置为false就可以取消事件的默认行为（**与DOM中的preventDefault()方法的作用相同**） |
| srcElement   | Element | 只读  | 事件的目标（**与DOM中的target属性相同**）                    |
| type         | String  | 只读  | 被触发的事件的类型                                           |



## UI事件

### 一.鼠标事件

#### 1.鼠标事件类型

[DOM0, DOM2, DOM3介绍](https://www.jianshu.com/p/3acdf5f71d5b)

DOM3级事件中定义了9个鼠标事件。

| 鼠标事件名称          | 功能概述                                                     |
| --------------------- | ------------------------------------------------------------ |
| mousedown/mouseup     | 鼠标按钮被按下/释放（左键或者右键）时触发。不能通过键盘触发  |
| click/dbclick         | 单击鼠标**左键**或者按下回车键时触发。这点对确保易访问性很重要，意味着onclick事件处理程序既可以通过键盘也可以通过鼠标执行。/双击鼠标**左键**时触发 |
| mouseover/mouseouter  | 鼠标移入目标元素上方。鼠标移到其后代元素上时会触发/鼠标移出目标元素上方 |
| mouseenter/mouseleave | 鼠标移入元素范围内触发，**该事件不冒泡**，即鼠标移到其后代元素上时不会触发/鼠标移出元素范围时触发，**该事件不冒泡**，即鼠标移到其后代元素时不会触发 |
| mousemove             | 鼠标在元素内部移到时不断触发。不能通过键盘触发               |

**note**:

在一个元素上相继触发mousedown和mouseup事件，才会触发click事件。两次click事件相继触发才会触发dblclick事件。

如果取消 了mousedown或mouseup中的一个，click事件就不会被触发。直接或间接取消了click事件，dblclick事件就不会被触发了。

#### 2.事件顺序

在单个动作触发多个事件时，事件的顺序是固定的。也就是说，会遵循 `mousedown` → `mouseup` → `click` 的顺序调用处理程序。

#### 2.1事件触发的顺序

举例：通过双击按钮，看一下上面触发的事件。

```html
<body>
<input id="btn" type="button" value="click"/>
<script>
    var btn=document.getElementById("btn");
    btn.addEventListener("mousedown",function(event){
        console.log("mousedown");
    },false);
    btn.addEventListener("mouseup",function(){
        console.log("mouseup");
    },false);
    btn.addEventListener("click", function () {
        console.log("click");
    },false);
    btn.addEventListener("dblclick", function () {
        console.log("dblclick");
    },false);
</script>
</body>
```

![双击鼠标,事件触发顺序](https://images0.cnblogs.com/blog/315302/201411/182134449882507.jpg)

#### 2.2 mouseenter和mouseover

与css当中使用hover伪类实现的移入移出相比,JS当中的移入和移出是分开操作的,如果移入修改了某些内容,移出时是不会自动还原的

 区别：

mouseover事件会冒泡，这意味着，鼠标移到其后代元素上时会触发。

mouseenter事件不冒泡，这意味着，鼠标移到其后代元素上时不会触发。

一般情况下mouseover即可，特殊情况才用mousemove，mousemove更耗资源，比如要监控鼠标坐标的变化等

//事件冒泡: 即在子元素上触发的事件会向上传递至父级元素，并触发绑定在父级元素上的相应事件。

在事件触发时，浏览器会产生一个event对象，在这个对象上有一个target属性，指向了触发事件的最底层的DOM，通过target我们可以准确的找到事件触发的元素。

**mouseenter不支持冒泡, mouseover支持冒泡**  mousemover也不支持冒泡

```html
//原文链接：https://blog.csdn.net/weixin_41072247/article/details/79315402
1.鼠标移入父级div,33行与30行分别先后打印 outer outer
2.鼠标移入子级div,33行与30行分别先后打印 inner outer

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>onmouseover&onmouseenter</title>
    <style> 
        #outer{
            position: relative;
            width: 200px;
            height: 200px;
            margin: 100px;
            border: 1px solid #ccc;
        }
        #inner{
            position: absolute;
            left: -50px;
            top: 0;
            width: 100px;
            height: 100px;
            border: 1px solid #ccc;
        }       
    </style>
</head>
<body>
    <div id="outer">    
        <div id="inner"></div>
    </div>
    <script>
        outer.onmouseenter = function(e){
            console.log(e.target.id) // outer
        }
        outer.onmouseover = function(e){
            console.log(e.target.id) // inner
        }
    </script>
</body>
</html>
```

#### 2.3 mouseover和mousemove的区别

一般情况下mouseover即可，特殊情况才用mousemove，mousemove更耗资源，比如要监控鼠标坐标的变化等。

onmousemove

鼠标移动事件, 在绑定了这个事件的元素内, 只要移动,就会持续高频次触发, 一直检测你的移动状态

只要想绑定一个事件, 让它在整个页面当中都可以生效,直接绑定给==document==

#### 3.鼠标左键和右键

```js
<script type="text/javascript">
document.onmousedown=function (ev)
{
    var oEvent=ev||event; //IE浏览器直接使用event或者window.event得到事件本身。
    alert(oEvent.button);// IE下鼠标的 左键是1 ，  右键是2   ff和chrome下 鼠标左键是0  右键是2
};
</script>
```



#### 4.鼠标按钮

与点击相关的事件始终具有 `button` 属性，该属性允许获取确切的鼠标按钮。

通常我们不在 `click` 和 `contextmenu` 事件中使用这一属性，因为前者只在单击鼠标左键时触发，后者只在单击鼠标右键时触发。

不过，在 `mousedown` 和 `mouseup` 事件中则可能需要用到 `event.button`，因为这两个事件在任何按键上都会触发，所以我们可以使用 `button` 属性来区分是左键单击还是右键单击。

`event.button` 的所有可能值如下：

| 鼠标按键状态    | event.button |
| --------------- | ------------ |
| 左键 (主要按键) | 0            |
| 中键 (辅助按键) | 1            |
| 右键 (次要按键) | 2            |



#### 5.组合键

所有的鼠标事件都包含有关按下的组合键的信息。

事件属性：

- `shiftKey`：Shift
- `altKey`：Alt（或对于 Mac 是 Opt）
- `ctrlKey`：Ctrl
- `metaKey`：对于 Mac 是 Cmd

如果在事件期间按下了相应的键，则它们为 `true`。

比如，下面这个按钮仅在 Alt+Shift+click 时才有效：

```html
<button id='button'>Alt+Shift+click on me</button>

<script>
	button.click=function(event){
    if(event.altKey && event.shiftKey){
      alert('hooray')
    }
  }
</script>
```



#### 6. 鼠标坐标

所有的鼠标事件都提供了两种形式的坐标：

1. 相对于窗口的坐标：`clientX` 和 `clientY`。以当前窗口的左上角为参照物，并且同一位置的坐标会随着页面的滚动而改变。
2. 相对于文档的坐标：`pageX` 和 `pageY`。以文档的左上角为参照物，并且同一位置的坐标不随页面的滚动而改变

案例:鼠标移动到输入字段上，可以看到 `clientX/clientY`

```html
<input onmouseover="this.value=event.clientX+':'+event.clientY" value="mouse over me"/>
```



#### 7.防止鼠标按下时的操作

双击鼠标会有副作用，在某些界面中可能会出现干扰：它会选择文本。

比如，双击下面的文本，除了我们的处理程序外，还会选择文本：

比如,  如果按下鼠标左键，并在不松开的情况下移动鼠标，这也常常会造成不必要的选择。

```html
<span ondbclick='alert(dbclick)'>double-click me</span>
```

如何解决?在这种情况下，最合理的方式是防止浏览器对 `mousedown` 进行操作。这样能够阻止刚刚提到的两种选择：

```html
Before...
<b ondblclick="alert('Click!')" onmousedown="return false">
  Double-click me
</b>
...After
```



如何防止复制?如果我们想禁用选择以保护我们页面的内容不被复制粘贴，那么我们可以使用另一个事件：`oncopy`

```html
<div oncopy="alert('copying forbidden!')';return false"
  Dear user,
  The copying is forbidden for you.
  If you know JS or HTML, then you can get everything from the page source though.
</div>   
```



#### 8.[总结](https://zh.javascript.info/mouse-events-basics#zong-jie)

鼠标事件有以下属性：

- 按钮：`button`。
- 组合键（如果被按下则为 `true`）：`altKey`，`ctrlKey`，`shiftKey` 和 `metaKey`（Mac）。
  - 如果你想处理 Ctrl，那么不要忘记 Mac 用户，他们通常使用的是 Cmd，所以最好检查 `if (e.metaKey || e.ctrlKey)`。
- 窗口相对坐标：`clientX/clientY`。
- 文档相对坐标：`pageX/pageY`。

`mousedown` 的默认浏览器操作是文本选择，如果它对界面不利，则应避免它。



#### 9.案例-可选列表

创建一个可以选择元素的列表，例如在文件管理器中。

- 点击列表元素，只选择该元素（添加 `.selected` 类），取消选择其他所有元素。
- 如果点击时，按键 Ctrl（在 Mac 中为 Cmd）是被按下的，则选择会被切换到被点击的元素上，但其他元素不会被改动。

```js
//DOM classList属性
classList 属性返回元素的类名，作为 DOMTokenList 对象。
该属性用于在元素中添加，移除及切换 CSS 类。
classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它。

语法:
element.classList
返回值:
一个 DOMTokenList, 包含元素的类名列表
方法
toggle(class, true|false) 在元素中切换类名 第一个参数为要在元素中移除的类名 第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在
```



```html
event.target 打印的是节点元素及内容
event.target.classList返回元素的类名 可替换 新增 删除


<html>
<head>
</head>
<style>
  .selected{background:greenyellow}
</style>
 <body>
  <p>Click on a list item to select it.</p>
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
  </ul>
  <script>
    let ul = document.querySelector('ul');
    ul.addEventListener('click',function(e){
      if(e.target.tagName!=='LI') return;
      
      if(e.ctrlKey||e.metaKey){
        toggleSelected(e.target)
      }else{
        singleSelected(e.target)
      }
      function toggleSelected(li){
        li.classList.toggle('selected')
      }
      function singleSelected(li){
        let selected = ul.querySelectorAll('.selected');
        for(let ele of selected){
          ele.classList.remove('selected')
        }
        li.classList.add('selected')
      }
     
    },false)
  </script>
</body>
</html>
```







### 二.移动鼠标



### 三.鼠标拖放事件

### 四.指针事件

### 五.键盘事件

### 六.滚动







#### 5. 事件坐标(鼠标的位置)++.

事件坐标,就是事件发生时,鼠标所在的位置

#### 类型

##### clientX && clientY

取值是鼠标相对视口的水平和垂直距离,相对于 ==视口的左上角==(以视口左上角为原点) 最常用 受滚动条影响

##### pageX && pageY

取值鼠标相对于页面的水平和垂直距离, 相对的是==页面的左上角== (以页面左上角为原点) 不受滚动条影响

##### offsetX && offsetY

取值鼠标相对于自身元素的水平距离和垂直距离, 相对的是==元素自身左上角==(以自身元素左上角为原点)



#### 实例

```HTML
- 图片跟随鼠标移动而移动, 使用循环定时器快速切换
<style>
img{
    width: 100px;
    position: absolute;
    left:0;
    top:0;
         }
</style>

<img src="1.jpg">

<script>
	window.onload = function(){
        var imgNode = document.querySelector('img');
        var num = 0;
        setInterval(function(){
            num++;
            imgNode.src = num%2 + 1 + 'jpg';
        }, 50);
        
        document.onmousemove = function(event){
            imgNode.style.left = event.clientX + 'px';
            imgNode.style.top = event.clientY + 'px';
            
        };
    }

</script>

```



#### 二级菜单切换

```html
<ul class="list clearFix">
    <li>男装
        <ul class="item">
            <li>衬衫</li>
            <li>裤子</li>
            <li>鞋</li>
        </ul>
    </li>
    <li>女装
        <ul class="item">
            <li>衬衫</li>
            <li>裤子</li>
            <li>鞋</li>
        </ul>
    </li>
    <li>电器
        <ul class="item">
            <li>衬衫</li>
            <li>裤子</li>
            <li>鞋</li>
        </ul>
    </li>
</ul>

<script>
 window.onload = function(){

        var items = document.querySelectorAll('.item');
        var lists = document.querySelectorAll(('.list>li'));


        for(var i=0; i<lists.length; i++){
           lists[i].index = i;			
            //用for给li添加index属性索引,以实现和二级ul下标对应
		    //
            
            //lists[i].onclick = function(){
            //    console.log(this.index);
            //} 检查一级ul下的li的索引是否和index属性一一对应
           lists[i].onmouseenter = function(){
               items[this.index].style.display = 'block';
               //为什么不用i代替this.index? 
               //循环都执行后才会给每个li绑定事件.当触发事件时,外层循环早已执行完.i的值是循环终止的值.在循环外是i+1. 
           }//循环操作绑定事件回调的时候,在回调内部一定不能使用外部循环的变量,因为它一定是最后一个数
           lists[i].onmouseleave = function(){
               items[this.index].style.display = 'none';
           }
        }

    }
</script>

```



### 八.键盘事件

```JavaScript
- 键盘事件分为onkeyup(键盘抬起)和onkeydown(键盘按下)两种
- 实际开发中,onkeyup用的多一些.因为在一次交互逻辑中,抬起事件只会被触发一次,不会反复调用回调函数.但是onkeydown事件,如果不抬起键盘,会一直触发
- 判断用户输入哪个键
- 通过事件对象上一个叫做keycode的属性,来判断当前的按键
- 高级浏览器中,事件对象会作为回调函数的第一个形参传递过来供我们使用 常见名字event ev e
```



```html
<input type='text'>
<scirpt>
window.onload = function(){
    var inputNode = document.querySelector('input');
    inputNode.onkeyup = function(event){
    //通常判断按键时,直接写一个if,对按键进行判断,然后将后续逻辑写在if里面
    	if(event.keycode === 13){  //enter键的keycode值是13
    		this.value = '';	   //清空事件源input标签的内容
    		//this.value value的值是字符串
    		}
    	}
    }
</scirpt>
```



### 九.光标事件

```JavaScript
- 获得焦点 onfocus
- 失去焦点 onblur
```



```javascript
- 案例: 输入框得到焦点 背景色变pink 文字颜色

window.onload = function(){
    var inputNode = document.querySelector('input');
    
    inputNode.onfocus = fucntion(){
        console.log('获得焦点');
        this.style.backgroundColor = 'pink';
        this.style.color = 'yellow';
    }
}
```



#### 爱好选择器

```html
- if表达式的结果为true和false,可将直接表达式赋值给执行语句 缩减语句

<input type="checkbox" class="checkAllBox">全选/全不选
<br>
<input type="checkbox" class="item">学习
<input type="checkbox" class="item">买东西
<input type="checkbox" class="item">滑雪
<input type="checkbox" class="item">打游戏
<br>
<button class="btn1">全选</button>
<button class="btn2">全不选</button>
<button class="btn3">反选</button>


<script>
    window.onload = function(){
        var checkbox = document.querySelector('.checkAllBox');
        var items = document.querySelectorAll('.item');
        var btn1 = document.querySelector('.btn1');
        var btn2 = document.querySelector('.btn2');
        var btn3 = document.querySeletocr('.btn3');
        
        //全选和全不选
        btn1.onclick = function(){
            checkbox.checked = true;
            for(var i=0; i<items.length; i++){
                items[i].checked = true;
            }
        }
        btn2.onclick = function(){
            checkbox.checked = false;
            for(var i=0; i<items.length; i++){
                items[i].checked = false;
            }
        }
        //反选
        btn3.onclick = function(){
            for(var i=0; i<items.length; i++){
                items[i].checked = !items[i].checked;
            }
            //反选情况2:当反选按钮实现4个全选时,更新上面box状态
            var num = 0;
            for(var i=0; i<items.length; i++){
                if(items[i].checked){
                    num++;
                }
                //if(num === items.length){
                //    checkbox.checked = true;
                //}else{
                //    checkbox.checked = false;
                //} 使用如下语句代替if else判断
                checkbox.checked = num==items.length;
                
            }
            
        }
    }
</script>    
```



```js
# 爱好选择器 使用封装函数实现第三部分全选更新上面box

btn3.onclick = function(){
	for(var i=0; i<items.length; i++){
        items[i].checked = !items[i].checked;
    }
    checkAll();
}

for(var i=0; i<items.length; i++){
    items[i].onclick = function(){
        checkAll();
    }
}

function checkAll(){
    var num = 0;
    for(var i=0; i<items.length; i++){
        if(item[i].checked){
            num++;
        }
        checkAll.checked = num==items.length;
    }
}
```





## 节点

**什么是节点**

文档树所有包含的东西都可以称作节点

**节点的分类**

元素 文本 属性 注释

元素内的文本形成**文本节点**,被标记为==#text== .一个文本节点只包含一个字符串.它没有子项,并且总是树的叶子.

请注意文本节点的特殊字符:

* 换行符 `↵`（在 JavaScript 中为 `\n`）
* 空格: `␣`

空格和换行符都是完全有效的字符,它们形成文本节点并成为DOM一部分.只有两个顶级排除项:

1.==<head>==之前的空格和换行符均被忽略.

2.==</body>==之后不能有空格.如果在其后放置东西,会被自动移动到body内,并处于body的最下方,因为HTML规范要求所有内容必须为于body内.



**注意事项**

按照DOM规范,表格必须具有==<tbody>==. 但HTML文档却忽略了它,浏览器在创建DOM时,自动创建了==<tbody>==.



### 查找元素的其他方式

#### 节点:

换行符会被当做文本节点,当文本连续时中间没有元素分割,换行与否都会当做一个节点

#### 子节点和子元素

##### childNodes(儿子节点)

拿到某个元素子节点:包括元素,文本,注释节点

高级浏览器: 元素, 文本(文本,空格,换行), 注释

低版本浏览器: 元素, 文本(不包括空格和换行), 注释

**实例**

参考下面的案例:

| 节点类型 | nodeName   | nodeType | nodeValue |
| -------- | ---------- | -------- | --------- |
| 文本节点 | #text      | 3        | 文本内容  |
| 元素节点 | 全大写英文 | 1        | null      |
| 注释节点 | #comment   | 8        | 注释内容  |



##### children

拿到的是某个元素的子元素节点

高级浏览器: 元素

低版本浏览器: 元素, 注释



##### 两者实例比较

```HTML
<div class="box">
    hahahaha
    <h2>哈哈哈</h2><p>今天中午吃点啥</p>
    <span>大米饭</span>
    <div>明天我休息了</div>
    <!--今天挺冷的-->
</div>
<script type="text/javascript">
    window.onload = function () {
        var boxNode = document.querySelector('.box');
        console.log(boxNode.childNodes);
        console.log(boxNode.children);

    }


NodeList(10) [text, h2, p, text, span, text, div, text, comment, text]
HTMLCollection(4) [h2, p, span, div]   
```





#### 获取元素的子节点和子元素

> 封装一个筛选所有子元素节点的方法

```html
<div class="box">
    hahahaha
    <h2>哈哈哈</h2><p>今天中午吃点啥</p>
    <span>大米饭</span>
    <div>明天我休息了</div>
    <!--今天挺冷的-->
</div>

<script>
 window.onload = function (){
     var boxNode = document.querySelector('.box');
     
     function allchildElementNodes(node){
         var arr = [];//声明一个数组,作为存储所有子元素节点的容器
         //遍历当前所有的子节点,通过判断nodeType是否为1 来确定是否加入数组
         for(var i=0; i<node.childNodes.length; i++){
             if(node.childNodes){
                 arr.push(node.childNodes[i]);
             }
         }
         return arr;
     }
     var result = allChildElementNodes(boxNode);
     console.log(result);
     
     //获取子元素节点 返回所有子元素节点 低版本浏览器会返回元素和注释节点
     console.log(node.children);
 }   
    
</script>    
```







### 查找元素的其他方式2

#### 查找子元素

firstChild 第一个子节点

firstElementChild 第一个子元素节点  //从父元素的视角进行获取  连标签也会获取

lastChild 最后一个子节点

lastElementChild 最后一个子元素节点

previousSibling 上一个兄弟节点    //从兄弟元素角度进行获取

previousElementSibling 上一个兄弟元素节点

nextSibling 下一个兄弟节点

nextElementSiling 下一个兄弟元素节点

#### 查找父元素

parentNode 获取父节点

parentElementNode 获取父元素节点



**总结**  ???

> 在获取某个元素的父元素时,以上的parentNode和parentElementNode方法, 得到的结果一样
>
> 所有获取元素节点的方式 都是高级浏览器生效 低级浏览器不能使用
>
> 所有获取节点的方式(不分类型的) 都是所有浏览器通用的.
>
> 父节点必须是元素节点



### 封装获取第一个子元素节点的方法

```html
<div class="box">
    hahahaha
    <h2>哈哈哈</h2><p>今天中午吃点啥</p>
    <span>大米饭</span>
    <div>明天我休息了</div>
    <!--今天挺冷的-->
</div>


<script>
    window.onload = function(){ 
        var boxNode = document.querySelector('.box');
        
        function getFirstElementChild(node){
            if(node.firstElementChild){
                return node.firstElementChild;
            }else{
                var result = node.firstElementChild
                while(result!==0 && reuslt.nodeType!==1){
                    result = result.nextSibling;
                }
                return result;
            }
        }
</script>    
```







### 创建节点3种方式

```html
<div class="box">
    <h2>哈哈哈</h2>
</div>

<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        //第一种方式
        document.write('<h1>文本内容会覆盖页面</h1>');
        
        //第二种方式
        boxNode.innerHTML = boxNode.innerHTML + '<h1>文本内容</h1>';
        //简化版
        boxNode.innerHTML += '<h1>文本内容</h1>';
        
        //第三种方式 开发中最常用的 适用于循环结构
        //1.创建节点 createElement 传递的参数为:标签名称 这个方法返回的就是创建好的这个标签的dom对象
        var hNode = document.creatElement('h1');
        //2.操作这个节点
        hNode.innerHTML = '文本内容';
        //3.将这个dom对象放入到元素中
        boxNode.appenChild(hNode);
    }
</script>
```



### 创建元素节点比较

```HTML
createElement 适用于添加可循环的数据

innerHTML  适用于不可循环区域
```





### 创建节点案例

```html
<div class='box'>
</div>

<script>
	windown.onload = function(){
        var boxNode = document.querySelector('.box');
        var arr = ['吃饭','睡觉','滑雪','打鼓','桌游'];
        
        str = '<ul>';
        for(var i=0; i<arr.length; i++){
            str += '<li>'+arr[i]+'<\li>';  
    }
        str += '<\ul>';
        console.log(str);
}
</script>
```







### 节点增删改

> 都是父元素调用

```html
<ul class="list">
        <li>泰坦泰尼克号</li>
        <li>变形金刚</li>
        <li class="test">钢铁侠</li>
        <li>蜘蛛侠</li>
        <li>美国队长</li>
    </ul>
```



#### appendChild

**添加节点** 由父元素调用,传递一个要添加的子元素

```html
- appendChild
<script>
   window.onload = function(){
       var list = document.querySelector('.list');
       var liNode = document.createElement('li');
       liNode.innerHTML = '新加的内容';//内容不限,可以是标签,属性,文本等
       list.appendChild('liNode');
   } 
</script>    
```



#### insertBefore

**插入节点** 由父元素调用,传递两个参数.第一个参数为新增节点,第二个为参照节点.如果参照物为null,则等同于追加元素

```html
- 以类名为test元素为参照节点
父元素.insertBeofre(新增节点, 参照节点)

<script>
	window.onload = function(){
        var testNode = document.querySelector('.test');
        var liNode = document.createElement('li');
        liNode.innerHTML = '替换的内容';
        list.insertBefore(liNode, testNode);
        list.insertBefore(liNode, null);//最后追加节点
    }
</script> 

```



#### replaceChild

**替换节点** 由父元素调用,传递两个参数.第一个参数是替换的节点,第二个参照节点.replaceChild(替换, 参照)

```html
- 替换类名为test的元素

<script>
	window.onload = function(){
        var testNode = document.querySelector('.test');
        var liNode = document.createElement('li');
        liNode.innerHTML = '内容内容内容';
        list.replaceChild(liNode, testNode);
    }

</script>
```



#### removeChild

**删除节点** 由父元素调用,需要填入要删除的子元素

```html
- removeChild() 和 remove()
<script>
	window.onload = function(){
        var testNode = document.querySelector('.test');
        list.removeChild(testNode);
    }
</script>

- 上面的代码可以使用testNode.remove()实现同样效果.但IE里无法使用
```



#### 其他

```js
element.cloneNode(true) 能对一个节点进行深度克隆
```





#### 案例-input与li

```HTML
//1.鼠标移到li标签内容上方,变换背景颜色,包括新增li的.
//2.键盘事件，触发回车之后，把表单的内容动态创建li标签，所有的li标签移入变色

<html>
    <head>
        <meta charset='utf-8'>
        <title>title</title>
    </head>
    <body>
        <input type="text" >
        <ul class="list">
    	<li>七里香</li>
        <li>七里香</li>
        <li>七里香</li>
		</ul>
        <script>
        	window.onload = function(){
                //获取键盘输入,判断输入内容
                var inputNode = document.querySelector('input');
                var ulNode = document.querySelector('.list');
                var liNodes = document.querySelector('.list>li');
                
                inputNode.onkeyup = function(event){
                    //1.判断是否是回车按键
                    if(event === 13){
                        //2.获取输入内容
                        var content = this.value;//2.1 value是input的属性 赋值操作
                        //3.判断输入内容是否为空
                        if(content.trim()){//没考虑到输入前后空格情况
                            //4.将内容添加到ul列表中
                            var newLi = document.createElement('li');
                            newLi.innerHTML = content;
                            ulNode.appendChild('newLi');
                            
                            //z.为新加元素绑定事件
                            newLi.onmouseenter = function(){
                                this.style.background = 'pink';
                            };
                            newLi.onmouseenter = function(){
                                this.style.background = '';
                            };
                        }else{
                            alert('请输入正确信息');
                        }
                        this.value = '';//清空输入内容
                    }
                }; //注意此处分号
                for(var i=0; i<liNodes.length; i++){
                    liNodes[i].onmouseenter = function(){
                        //liNodes[i].style.background = 'pink';
                        this.style.background = 'pink';
                    }
                    liNodes[i].onmouseleave = function(){
                        //liNodes[i].style.background = '';
                        this.style.background = '';
                    }
                }
                //for循环存在两个问题.
                //1.新添加的li标签无法获得背景色,使用console打印只有0,1,2三个数字.必须在新增li标签处添加鼠标移入事件.
                //2.使用liNodes[i]+let可以实现效果,但换成var报错.
            }
        </script>
    </body>
</html>
```





#### 高级浏览器

```JavaScript
var boxNode = document.querySelector('.box');

boxNode.addEventListener('click', fn1);  //绑定1
fn1(){
    console.log('点击1');
}


- DOM2事件 是允许给一个事件类型 指定多个回调函数的,高级浏览器触发的顺序是 从上到下

boxNode.addEventListener('click', function(){ //绑定2
    console.log('点击2');
})



- 解绑
boxNode.removeEventListener('click', fn1); 
```



#### 低级浏览器

```JavaScript
attachEvent 第一个参数:事件类型(字符串传递,且带on) 第二个参数回调函数

boxNode.attachEvent('onclick', fn2);
function fn(){
	console.log('点击1');
}

- 低级浏览器中,如果一个事件类型,指定多个回调函数,触发的顺序由下至上
boxNode.attachEvent('onclick', function(){
	console.log('点击2');
});

- 和高级浏览器相同, 解绑时一定要保证参数和绑定时完全一致 //函數需要放在外面
boxNode.detachEvent('onclick', fn2);

```



### DOM2事件&兼容性绑定

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 200px;
            height: 200px;
            background: pink;
        }
    </style>
</head>
<body>
<div class="box"></div>
</body>


<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        addEvent(boxNode, 'click', function(){
            console.log("点击");
        })
        
        //3个参数:1.要绑定的元素 2.要绑定的事件 3.事件的回调函数
        function addEvent(node, eventName, callback){
            //写兼容性函数时,需要通过判断一个方法时能使用 写函数访问不写函数调用
            if(node.addEventListener){
                node.addEventListener(eventName, callback);
                console.log('高级');
            }else{
                node.attachEvent(on+'eventname', callback);
                console.log('低级');
            }
        }
        
        function removeEvent(eventName, callback){}
    }
</script>
```





















### 定时器

#### setTimeout()  延迟定时器/单次定时器

setTimeout() 是属于 window 的方法, 在指定的毫秒数后调用函数或计算表达式

```js
//语法
setTimeout(code,millisec,param1,param2)
setTimeout(function,milliseconds,param1,param2)

code/function 必须.代码串或表达式
millisenonds 可选.默认为0,执行或调用code/function需要等待的时间,以毫秒计.
param1,param2... 可选. 传给执行函数的其他参数（IE9 及其更早版本不支持该参数）

//返回值
返回一个 ID（数字），可以将这个ID传递给 clearTimeout() 来取消执行

//描述
定时器的id的本质就是通过数值去记录定时器的顺序.如果只有一个定时器,清除定时器也可以用clearTimeout(1),不建议使用
定时器如果不设置时间或者设置时间为0 ,也是异步操作


//清除定时器
要清除定时器, 使用相应的方法, 传入要清楚的定时器id. 定时器id的本质就是通过数值去记录定时器的顺序.但不要使用这种方式去去除,而是要使用定时器id的变量(方法赋值一个变量)
let timer=setTimeout()
clearTimeout(timer)
```



```js
//示例

1. 3秒后弹出'hello'
let myVar;
function myFun(){
	myVar=setTimeout(alertFun,3000);
}
function alertFun(){alert('hello')}

```



#### 循环定时器

##### 参数:

1. 回调函数
2. 间隔时间



##### 定时器清除

循环定时器的清除, 我们大多数情况下都是在循环定时器 ==回调函数的内部==,通过判断进行自动清除的.



##### 实例

```HTML
<button id="btn">按钮</button>

<script>
	window.onload = function(){
        var btnNode = document.querySelector('#btn');
        //btnNode.onclick = function(){
        //    clearInterval(timer);
        //};
        var num = 10;
        var timer = setInterval(function(){//timer回调函数返回值 
            num--;
            if(num === 0){
                clearInterval(timer);
            }
            console.log(num);
        },1000);
    }
</script>
```





##### 实例/阅读协议

```HTML
- 按钮倒计时

<input type="button" disabled value="请阅读（10）秒">
<script>
	window.onload = function(){
        var iptNode = document.querySelector('#btn');
        var num = 10;
        var timer = setInterval(function(){
            num--;
            if(num === 0){
                clearInterval(timer);
                iptNode.disabled = false; // 只要遇到属性名和属性值都相同的属性进行if判断,统一转换成布尔值操作
                iptNode.value = '关闭';
            }else{
                iptNode.value = "请阅读（"+ num +"）秒";
                
            }
        },1000);
    }
</script>
```





### 浏览器滚动条

#### 介绍

需要获取浏览器滚动条的偏移量. 有的浏览器(Chrome)使用html能够获取到值,body为0. 有的浏览器是使用body获取到值,但html为0. 它俩是一个互斥的状态,有且只有一个能够获取到值,另外一个为0. 所以使用兼容方案,==两个值相加==或者使用 ==或运算==.

虽然scroll事件发生在window上,但实际上反映的是页面中相应元素的变化.

#### scrollTop

内容区顶部隐藏的像素数,设置这个属性可以改变元素的滚动位置.. scrollTop和scrollLeft可以确定当前元素滚动的位置,或者用于设置它们的滚动位置.元素未滚动时,这两个属性都等于0. 如果元素在垂直方向上滚动, 则scrollTop会大于0, 表示元素顶部不可见区域的高度.如果元素在水平方向上滚动, 则scrollLeft会大于0, 表示元素左侧不可见区域的宽度. 因为这两个属性是可写的, 所以把它们设置为0,就可以重置元素的滚动位置.

#### scrollTop实例

```html
# 点击按钮 滚动条归0.
<style>
    button{
        margin-top: 300px;
    }
</style>

<button id='btn'>按钮</button>

<script>
	window.onload = function(){
      var btnNode = document.querySelector('#btn');
      btnNode.onclick = function(){
        var sopValue = document.documentElement.scrollTop||document.body.scrollTop;
        if(sopValue != 0){
            sopValue = 0;
        }
      };  
    }
</script>
```





#### 获取滚动条位置

**浏览器1:** document.documentElement.scrollTop

**浏览器2:** document.body.scrollTop



#### 设置滚动条位置

设置滚动条位置,其实就是修改HTML和body的scrollTop值.但是情况和获取相同,不同的浏览器需要分别通过html和body来操作.所以兼容设置的方案就是两个都设置,不会有其他影响.

一个元素的**scrollTop值**是这个**元素内容**顶部到它的**视口可见内容**的顶部的距离.例如如果设置300(没有单位),元素会向视口位置移动300px的距离. 没有负数.



#### 浏览器兼容性设置

document.documentElement.scrollTop || document.body.scrollTop

document.documentElement.scrollTop + document.body.scrollTop

#### 实例

```HTML

<style>
    button{
        margin-top: 300px;
    }
</style>

<button id="btn">按钮</button>

<script>
	window.onload = function(){
        var btnNode = document.querySelector('#btn');
        btnNode.onclick = function(){
            document.documentElement.scrollTop = document.body = 200;
        };
    }
</script>


```



### 滚动条动画实例-回顶部

#### 回到顶部2种方法

时间固定 : 路程越远, 则速度越快, 现在最常用

速度固定: 路程越远,时间越长.



#### 动画时长及帧

> 使用循环定时器,  在帧时长的单位上移动

动画总时长,  

动画帧时长(范围是30-16, 小于16和16效果在肉眼下区别很小)

总帧数= 动画总时长 / 帧时长.

总偏移(就是当前浏览器的scrollTop)

单次偏移 = 总偏移 / 总帧数.



#### 实例

```HTML
# 时间固定的前提下,点击按钮,滚动条返回顶部


<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        height: 2000px;
    }
    #btn{
        position: fixed;
        bottom: 100px;
        right:50px;
    }
</style>

<button id="btn">回到顶部</button>

<script>
	window.onload = function(){
        var btnNode = document.querySelector('#btn');
        var allTime = 2000; //定义总时长
        var itemTime = 20;  //定义动画帧时长
        btnNode.onclick = function(){
            //获取总偏移
            var offset = document.documentElement.scrollTop || document.body.scrollTop;
            //计算单次偏移
            var itemOffset = offset / (allTime / itemTime);//单次偏移=总偏移/(总时长/动画帧时长)
			var timer = setInterval(function(){
                if(offset <= 0){
                   	clearInterval(timer);
                   }
                
                offset -= itemOffset; 
                document.documentElement.scrollTop = document.body.scrollTop = offset;
            }, itemTime);
            
        }
    }
</script>

单次偏移 * 动画帧时长 * 总帧数 = 总偏移

```





### 元素的宽度与位置

```HTML
- clientWidth和clientHeight 可以获取初始包含块的宽度和高度,相当于视口但不是视口

clientWidth: 目标元素的宽度
clientWidth = width+paddingleft+paddingright;

clientHeight:目标元素的高度
clientHeight = height+paddingtop+paddingbottom

offsetWidth: 目标元素的宽度(加边框)
offsetWidth = width+paddingleft+paddingright+borderleft+borderright;

offsetHeight: 目标元素的高度(加边框)
offsetHeight = height+paddingtop+paddingbottom+bordertop+borderbotton

相对于包含块的偏移,就和绝对定位一样.不是相对于视口,目前所学的没有直接获取的
offsetLeft:
offsetTop:


clientLeft: 
clientTop:
内容边界到边界的距离,可以理解为border.但并不是border

遇到xy就要想到鼠标对象

```





### 导航跟随

```HTML
# 滚动条超过一屏的距离后, 导航漂浮.低于一屏的距离,回到原来的位置
# onscroll BOM事件,用于检测浏览器滚动条是否正在被移动
# 视口高度 获取的固定方式: var H = document.documentElement.clientHeight;

 <style>
     *{
         margin: 0;
         padding: 0;
     }
     body{
         height: 2000px;
     }
     .box{
         width: 100%;
         height: 80px;
         background: pink;
     }
</style>

<div class="box"></div>

<script>
	window.onload = function(){
        var H = document.documentElement.clientHeight;//视口高度
        var box = document.querySelector('.box');
        window.onscroll = function(){//用于检测浏览器滚动条,是否正在被移动,无论是什么方式
            var scrollT = document.documentElement.scrollTop||document.body.scrollTop;
            //兼容获取当前浏览器滚动条的偏移
            if(scrollT > H){
                box.style.position = 'fixed';//当前滚动的距离超过一屏, 导航漂浮
            }else{
                box.style.position = 'static';
            }
        }
    }
</script>
```



### 盒子来回移动

```HTML
# 页面上的盒子在浏览器视口宽度范围内来回移动

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 100px;
        height: 100px;
        background: pink;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>

<div class="box"></div>

<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        var startLeft = 0;
        var step = 5;
        setInterval(function(){
            startLeft += step;
            if(startLeft > document.documentElement.clientWidth - boxNode.clientWidth){
                startLeft = document.documentElement.clientWidth - boxNode.clientWidth;
                step = -5; 
                //这个地方第一次的写法是 startLeft -= step; 是不正确的.这样会造成死循环
            }else if(startLeft <= 0){
                startLeft = 0;
                step = 5;
            }
            boxNode.style.left = startLeft;
        },10)
    }
</script>
```





### 拖拽基础

```HTML

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 100px;
        height: 100px;
        background: pink;
        position: absolute;
        left: 0;
        top: 0;

    }
</style>
<div class="box"></div>
<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        boxNode.onmousedown = functio(event){
            //鼠标坐标使用event.clientX的原因? 打印event就是鼠标事件
            //获取鼠标开始坐标
            var startX = event.clientX;
            var startY = event.clientY;
            //获取元素坐标
            var eleX = boxNode.offsetLeft;
            var eleY = boxNode.offsetTop;
            boxNode.onmousemove = function(event){
                //获取鼠标结束坐标
                var endX = event.clientX;
                var endY = event.clientY;
                //获取鼠标移动距离差
                var disX = endX - startX;
                var disY = endY - startY;
                
                //更新目标元素的坐标:原始坐标+移动距离
                boxNode.style.left = eleX + disX + 'px';
                boxNode.style.top = eleY + disY + 'px';
            };
            boxNode.onmouseup = function(){
                boxNode.onmousemove = boxNode.onmouseup = null; //鼠标按键抬起所有动作结束.注销函数.否则点击和移动事件不会结束.
            };
        };
       
    }
</script>

```





### 拖拽问题的解决

```HTML
# 鼠标移动过快,元素跟不上.
鼠标会脱离元素, 因为先移动鼠标,然后获取鼠标坐标,然后经过计算,最终设置元素.这个过程中页面渲染是需要时间的,元素没有第一时间跟随鼠标移动,鼠标就脱离出来了.脱离之后, 鼠标不再事件源身上,代码失效.

# 消除文字图片等内容可以被拖拽的浏览器默认行为
1.dom0级事件 阻止默认行为就是在时间回调函数的结尾添加 return false;
 - 低版本id中,文字的拖拽不算做默认行为范畴,只能通过开启全局捕获的方式进行
 - 开启全局捕获之后,就是将后续所有的事件,都聚焦在这个元素身上.相当于无论点击那里都是在点击这个元素.切记,全局捕获有开启就一定有释放.



<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        boxNode.onmousedown = functio(event){
            //开启全局捕获.因为高版本浏览器不认识这个方法,所以先访问.如果存在则结果为真,再调用.
            boxNode.setCapture && boxNode.setCapture();
            
            //鼠标坐标使用event.clientX的原因? 打印event就是鼠标事件
            //获取鼠标开始坐标
            var event = event || window.event;
            var startX = event.clientX;
            var startY = event.clientY;
            //获取元素坐标
            var eleX = boxNode.offsetLeft;
            var eleY = boxNode.offsetTop;
            document.onmousemove = function(event){
                var event = event || window.event;
                //获取鼠标结束坐标
                var endX = event.clientX;
                var endY = event.clientY;
                //获取鼠标移动距离差  
                var disX = endX - startX;
                var disY = endY - startY;
                
                //更新目标元素的坐标:原始坐标+移动距离  这个地方理解起来有困难.前提是鼠标在元素上位置是固定的.画图需要一条辅助线来理解
                boxNode.style.left = eleX + disX + 'px';
                boxNode.style.top = eleY + disY + 'px';
            };
            document.onmouseup = function(){
                boxNode.onmousemove = boxNode.onmouseup = null; //鼠标按键抬起所有动作结束.注销函数.否则点击和移动事件不会结束.
                //释放全局捕获
                boxNode.releaseCapture && boxNode.releaseCapture();
            };
        };
       return false;//阻止默认行为
    }
</script>
```





### 拖拽边界值测试

#### 边界值判断2种逻辑

范围限定类: 大于最大值等于最大值, 小于最小值等于最小值

首尾相接类: 大于最大值等于最小值, 小于最小值等于最大值  例如轮播图



```html
# 让元素在视口范围活动,如果移动到视口边界,则禁止继续向边界外侧移动.
# 为什么不能直接使用鼠标移动后元素的offsetLeft和offsetTop, 再加上这两个值的初始值. 错误. *******

- 因为鼠标移动之后,offsetLeft是设置出来的,是无法获取的.
- 1.offsetLeft 返回元素上边界到它的包含元素的上边界的偏移量,以像素为单位.
- 2.什么叫偏移量, 就是指绝对位置.
- 3.无论鼠标移动元素到哪里, 绝对位置不会变.
- 4.如何获取视觉位置 this.getBoundingClientRect().top


<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        boxNode.onmousedown = function(event){
            boxNode.setCapture && boxNode.setCapture();
            var event = event||window.event;
            var startX = event.clientX;
            var startY = event.clientY;
            var eleX = boxNode.offsetLeft;
            var eleY = boxNode.offsetTop;
            
            boxNode.onmousemove = function(event){
                var endX = event.clientX;
                var endY = event.clientY;
                var disX = endX - startX;
                var disY = endY - startY;
                
                var lastX = disX + eleX;
                var lastY = disY + eleY;
                if(lastX > document.documentElement.clientWidth - boxNode.clientWidth){
                    lastX = document.documentElement.clientWidth - boxNode.clientWidth;
                }else if(lastX <= 0){ //实现吸附效果,将最小值改为10.将最大值减去10;
                    lastX = 0;
                }
                if(lastY > document.documentElement.clientHeight - boxNode.clientHeight){
                    lastY = document.documentElement.clientHeight - boxNode.clientHeight;
                }else if(lastY <= 0){
                    lastY = 0;
                }
                
                boxNode.style.left = lastX + 'px';
                boxNode.style.top + lastY + 'px';
            }
        	boxNode.onmouseup = function(){
                boxNode.onmousemove = boxNode.onmouseup = null;
                boxNode.releaseCapture && boxNode.releaseCapture();//释放全局捕获
            }
            return false;//阻止默认行为
        }//阻止默认行为和释放全局捕获的位置不一样
        
    }
</script>
```





## 1109

### 拖拽九宫格碰撞

```js
## 浏览器在每个元素上都getBoudingClientRect()方法 返回一个DOMrect对象,包含6个属性:left, top, right, bottom, height和width. 这些元素给出了元素在页面中相对于视口的位置.


<style>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 100px;
        height: 100px;
        background: pink;
        position: absolute;
        left: 0;
        top: 0;

    }
    img{
        width: 150px;
        height: 140px;
        position: absolute;
        left:0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
</style>

<div class='box'>文本内容</div>
<img src="1.jpg" alt="">
<scripot>
	window.onload = function(){
    	var boxNode = document.querySelector('.box');
    	var imgNode = document.querySelector('img');
    	
    	boxNode.onmousedown = function(event){
    		var event = event||window.event;
            boxNode.setCapture && boxNode.setCapture();
    		var startX = event.clientX;
    		var startY = event.clientY;
    		var eleX = boxNode.offsetLeft;
    		var eleY = boxNode.offsetTop;
            
            
            boxNode.onmousemove = function(event){
    		var event = event||window.event;
    		var endX = event.clientX;
    		var endY = event.clientY;
    		var disX = endX - startX;
    		var disY = endY -startY;
    		
    		var lastX = eleX + disX;
    		var lastY = eleX + disY;
    		
            if(lastX > document.documentElement.clientWidth - boxNode.clientWidth){
                lastX = document.documentElement.clientWidth - boxNode.clientWidth;
            }else if(lastX <= 0){
                lastX = 0;
            }
            if(lastY > document.documentElement.clientHeight - boxNode.clientHeight){
                lastY = document.documentElement.clientHeight - boxNode.clientHeight;
            }else if(lastY <= 0){
                lastY = 0;
            }
            
            boxNode.style.left = lastX + 'px';
    		boxNode.style.top = lastY + 'px';
            
            var boxNodeL = boxNode.offsetLeft + boxNode.clientWidth;
            var imgNodeL = imgNode.getBoundingClientRect().left;
            
            var boxNodeT = boxNode.offsetTop + boxNode.clientTop;
            var imgNodeT = imgNode.getBoundingClientRect().top;
            
            var boxNodeR = boxNode.offsetLeft;
            var imgNodeR = imgNode.getBoundingClientRect().left + imgNode.clientWidth;
            
            var boxNodeB = boxNode.offsetTop;
            var imgNodeB = imgNode.getBoundingClientRect().top + imgNode.clientHeight;
            
            //将所有不相邻的条件集中,通过或运算,全部写在if中,如果都不满足,则说明一定为真
            if(boxNodeL<imgNodeL||boxNodeT<imgNodeT||boxNodeR>imgNodeR||boxNodeB>imgNodeB){
                //如果有任意一个条件为true, 则原图不变
                imgNode.src = '1.jpg';
            }else{
                imgNode.src = '2.jpg';
            }
    		
    }
    	boxNode.onmouseup = function(){
            boxNode.onmousemove = boxNode.onmouseup = null;
            boxNode.releaseCapture && boxNode.releaseCapture();
            
        }
            return false;
    }
    
    
    	
    }
</scripot>
```



### 禁用浏览器滚动条

如果给body或html其中的某个设置overflow属性,都是将overflow属性设置给了document, 作用于整个页面.如果同时给html和body设置overflow属性,则html设置的属性作用于document, body的作用于自身. 背景background同样作用.

页面当中,其实一共有两个浏览器的滚动条(document和body), 所以通常写页面时,都会讲html和body共同禁止.

```HTML
html, body{
	height:100%;
	overflow:hidden;
}
```







### 自定义滚动条布局-PC



```HTML
<style>
    *{
        margin:0;
        padding:0;
    }
    html,body{
        height:100%;
        overflow:hidden;
    }
    .wrap{
        width:100%;
        height:100%;
        background:pink;
    }
    .scrollWrap{
        width:20px;
        height:100%;
        background:deeppink;
        position:fixed;
        right:0;
        top:0;
    }
    .scrollIn{
        width:10px;
        height:100px;
        background:yellowgreen;
        position:absolute;
        left:2px;
        top:0;
    }
</style>


<body>
    <!--自定义滚动条结构 滑槽 -->
    <div class='scrollWrap'>
        <!-- 滑块 -->
        <div class='scrollIn'></div>
    </div>
</body>
```



### 自定义滚动条-滑块移动

#### 自定义滚动条的万能比例:

滚动条高度/屏幕的高度 = 屏幕的高度/内容的高度 = 滚动条的滚动距离/内容的滚动距离

滚动条高度/滑槽的高度 = 屏幕的高度/内容的高度 = 滚动条的滚动距离/内容的滚动距离 屏幕高度与滑槽高度是相等的

```HTML
<style>
    *{
        margin:0;
        padding:0;
    }
    html,body{
        height:100%;
        overflow:hidden;
    }
    .wrap{
        width:100%;
        height:100%;
        background:pink;
    }
    .scrollWrap{
        width:20px;
        height:100%;
        background:deeppink;
        position:fixed;
        right:0;
        top:0;
    }
    .scrollIn{
        width:10px;
        height:100px;
        background:yellowgreen;
        position:absolute;
        left:2px;
        top:0;
    }
    .content{
        width:100%;
        position:absolute;
        left:0;
        top:0;
    }
</style>


<body>
<div class="wrap">
    <!--内容区-->
    <div class="content">
        <ul class="list"></ul>
    </div>
    <!--自定义滚动条结构     滑槽-->
    <div class="scrollWrap">
        <!--滑块-->
        <div class="scrollIn"></div>
    </div>
</div>
</body>


<script>
    window.onload = function(){
        var scrollIn = document.querySelector('.scrollIn');
        var list = document.querySelector('.list');
        var content = document.querySelector('.content');

        for(let i=0; i<300; i++){
            var liNode = document.createElement('li');
            liNode.innerHTML = i;
            list.appendChild(liNode);
        }

        // 滑块的高度/屏幕的高度 = 屏幕的高度/内容的高度 = 滚动条的滚动距离/内容的滚动距离
        // 比例 = 屏幕的高度 /内容的高度
        var scale = document.documentElement.clientHeight / list.offsetHeight;
        // 设置滑块高度 屏幕高度*scale
        scrollIn.style.height = document.documentElement.clientHeight * scale + 'px';
        scrollIn.onmousedown = function(event){
            //鼠标起始位置
            var startY = event.clientY;
            var eleY = scrollIn.offsetTop;

            document.onmousemove = function(event){
                var endY = event.clientY;
                var disY = endY - startY;

                //滑块最终的位置
                var lastY = eleY + disY;

                //滑块范围限定
                if(lastY < 0){
                    lastY = 0
                }else if(lastY > document.documentElement.clientHeight - scrollIn.clientHeight){
                    lastY = document.documentElement.clientHeight - scrollIn.clientHeight;
                }

                //设置给滑块
                scrollIn.style.top = lastY + 'px';
                //让内容区跟随滚动 滑块的滚动距离/scale
                var contentY =lastY / scale;
                content.style.top = - contentY + 'px'; //注意负值
            }
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            }
        }


    }
</script>
```



### 滚轮事件

mousewheel 既能使用dom0绑定,也能使用dom2绑定. Chrome/IE支持. 使用event.wheelDelta, 滚动向上输出120. 向下输出-120

DOMMouseScroll 只能使用dom2绑定. Firefox支持. 使用event.detail. 滚轮向上输出-3, 向下输出3.



```HTML
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 100px;
        height: 100px;
        margin-top: 150px;
        background: pink;
    }
</style>

<script>
	window.onload = function(){
        var box = document.querySelector('.box');
        var flag = true;//true代表向上, false代表向下
        document.addEventListener('mousewheel', fun); //chrome/IE 支持
        document.addEventListener('DOMMouseScroll', fun); //Firefox支持
        //虽然绑定事件时,需要根据不同的浏览器绑定不同的事件,不过我们在事件回调函数中处理的逻辑相同.所以,将事件的回调函数单独定义成有名函数,同时指定给两个事件.
        //滚轮事件是可以给元素使用的,只是实际应用场景不多.大多数情况下,都是在整个页面当中操作
        
        function fun(event){
            if(event.wheelDelta){//ie/chrome浏览器  负值向下 正值向上
                if(event.wheelDelta < 0){
                    flag = false;//向下
                }else{
                    flag = true;//向上
                }
            }else if(evnet.detail){
                if(event.detail > 0){
                    flag = false; //向下
                }else{
                    flag = true; //向上
                }
            }
            //通过flag赋值,统一上下方向
            
            if(flag){
                box.style.height = box.offsetHeight - 10 + 'px';
            }else{
                box.style.height = box.offsetheight + 10 + 'px';
            }
        }
        
    }
</script>
```



#### 阻止浏览器默认行为

`return false`阻止的是dom0所触发的默认行为

dom2通过event下面的event.preventDefault()





### 自定义滚动条滚轮控制滑块

```HTML
<style>
    *{
        margin: 0;
        padding: 0;
    }
    html,body{
        height: 100%;
        overflow: hidden;
    }
    .wrap{
        width: 100%;
        height: 100%;
        background: pink;
    }
    .scrollWrap{
        width: 20px;
        height: 100%;
        background: deeppink;
        position: fixed;
        right:0;
        top: 0;
    }
    .scrollIn{
        width: 16px;
        /*height: 100px;*/
        background: yellowgreen;
        position: absolute;
        left:2px;
        top:0;
    }
    .content{
        width: 100%;
        position: absolute;
        left:0;
        top:0;
    }
</style>

<div class='wrap'>
    <div class='content'>
        <ul class='list'></ul>
    </div>
    
    <div class='scrollWrap'>
        <div class='scrollIn'></div>
    </div>
</div>


<script>
	window.onload = function(){
        var scrollIn = document.querySelector('.scrollIn');
        var list = document.querySelector('.list');
        var content = document.querySelector('.content');
        
        //创建内容
        for(let i=1; i<300; i++){
            var liNode = document.createElement('li');
            liNode.innerHTML = i;
            list.appendChild(liNode);
        }
        
        //公式: 滑块的高度/屏幕的高度 = 屏幕的高度/内容的高度 = 滚动条的滚动距离/内容的滚动距离
        var scale = document.documentElement.clientHeight / content.offsetHeight;
        //求滑块高度
        scrollIn.style.height = document.documentElement.clientHeight * scale + 'px';
        
        scrollIn.onmousedown = function(event){
            //鼠标起始位置
            var startY = event.clientY;
            //元素距离包含块元素的距离
            var eleY = srcollIn.offsetTop;
            
            document.onmousemove = function(event){
                var endY = event.clientY;
                var disY = endY - startY;
                //滑块最终的位置
                var lastY = disY + eleY;
                
                //滑块范围限定
                if(lastY < 0){
                    lastY = 0;
                }else(lastY > document.documentElement.clientHeight - scrollIn.clientHeight){
                    lastY = document.documentElement.clientHeight - scrollIn.clientHeight;
                }
                
                //设置滑块滑动的距离
                scrollIn.style.top = lastY + 'px';
                //内容的滚动距离 滚动条的滚动距离/scale
                var contentY = lastY / scale;
                content.style.top = -contentY + 'px';
            };
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            };
        }
        
        //滚轮相关逻辑
        document.addEventListener('mousewheel', fun);
        document.addEventListener('DOMMouseScroll', fun);
        var flag = true;
        function fun(event){
            if(event.wheelDelta){
                //ie chrome
                if(event.wheelDelta < 0){
                    flag = false;
                }else{
                    flag = true;
                }
            }else if(event.detail){
                if(event.detail > 0){
                    flag = false;
                }else{
                    flag = true;
                }
            }
            if(flag){
                var scrollT = scrollIn.offsetTop - 10;
                if(scrollT < 0){
                    scrollT = 0;
                }
                scrollIn.style.top = scrollT + 'px';
                content.style.top = -scrollT / scale +'px';
                
            }else{
                var scrollT = scrollIn.offsetTop - 10;
                if(scrollT > document.documentElement.clientHeight - scrollIn.clientHeight){
                    scrollT = document.documentElement.clientHeight - scrollIn.clientHeight;
                }
                scrollIn.style.top = scrollT + 'px';
                content.style.top = -scrollT / scale + 'px';
            }
            
        }
    }
</script>
```



### 自定义滚动条优化

```js
document.addEventListener('mousewheel', fun);
document.addEventListener('DOMMouseScroll', fun);

var flag = true;
function fun(event){
	if(event.wheelDelta){
		if(event.wheelDelta > 0){
            flag = true;
        }else{
            flag = false;
        }
	}else if(event.detail){
        if(event.detail > 0){
            flag = false;
        }else{
            flag = true;
        }
    }
    
    if(flag){
        var scrollT = scrollIn.offsetTop - 10;
        if(scrollT < 0){
            scrollT = 0;
        }
        scrollIn.style.top = scrollT + 'px';
        content.style.top = -scrollT / scale + 'px';
    }else{
        var scrollT = scrollIn.offsetTop + 10;
        if(scrollT > document.documentElement.clientHeight - scrollIn.clientHeight){
            scrollT = document.documentElement.clientHeight -scrollIn.clientHeight;
        }
        scrollIn.style.top = scrollT + 'px';
        content.style.top = -scrollT / scale + 'px';
    }
}
```





```js
document.addEventListener('mousewheel', fun);
document.addEventListener('DOMMouseScroll', fun);

var flag = true;
var step = 10;
function fun(event){
	if(event.wheelDelta){
		if(event.wheelDelta > 0){
            step = 10;
        }else{
            step = -10;
        }
	}else if(event.detail){
        if(event.detail > 0){
            step = -10;
        }else{
            step = 10;
        }
    }
    
    if(flag){
        
        if(scrollT < 0){
            scrollT = 0;
        }
    }else{ 
        if(scrollT > document.documentElement.clientHeight - scrollIn.clientHeight){
            scrollT = document.documentElement.clientHeight -scrollIn.clientHeight;
        }
       
    }
     var scrollT = scrollIn.offsetTop + 10;
     scrollIn.style.top = scrollT + 'px';
     content.style.top = -scrollT / scale + 'px';
}
```



## 1110

### 轮播图

#### HTML部分

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset = 'utf-8'>
        <title>title</title>
    </head>
    <body>
        <div class='container'>
            <ul class='list'>
                <li><img src='img/1.jpg' alt=''></li>
                <li><img src='img/2.jpg' alt=''></li>
                <li><img src='img/3.jpg' alt=''></li>
                <li><img src='img/4.jpg' alt=''></li>
                <li><img src='img/5.jpg' alt=''></li>
            </ul>
        </div>
    </body>
</html>
```



#### JavaScript部分

```js

```



















































