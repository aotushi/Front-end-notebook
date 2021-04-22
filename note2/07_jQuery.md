## jQuery



### jQuery中的this

```HTML
this指向:在事件的回调函数中,this指向当前事件源的dom对象.
dom对象 ==> jQuery对象: 就是将dom对象传入jQuery核心函数, 则会返回封装后的jQuery对象 $(this)
jQuery对象上的each方法的回调函数中,this指的是当前jquery对象中存储的每一个dom对象

```



### 如何使用

#### 引入jQuery库

```html 
- jQuery引入.我们的代码要在jQuery代码之后引入
<script type="text/javascript" src="js/jquery-1.10.1.js"></script>

-jQuery页面加载完成事件.约等于window.onload
$() //$(function(){}) 向$()函数内传递了一个参数
```



#### 2种js库库文件

* 服务器本地库
* CDN远程库
  * 资源库
  * 减轻服务器负担



### 区别jQuery的不同版本

1版本, 兼容老版IE.文件较大

2版本

3版本





### jQuery两把利器

* ```HTML
  <script type="text/javascript" src="js/jquery-1.10.1.js"></script>
  <script>
  console.log(typeof $); //function
  console.log(typeof jQuery);//function
  console.log($ === jQuery) //true
  console.log($()); //init {} 初始化的对象
  
  </script>
  
  ```

  

* jQuery库向外直接暴露的就是$/jQuery

* 引入jQuery库后,直接使用$即可

  * 当函数用: $(xxx)   //jQuery(xxx)
  * 当对象用: $.xxx()

* jQuery核心对象

  * 简称:jQuery对象
  * 得到jQuery对象: 执行jQuery函数返回的就是jQuery对象
  * 使用jQuery对象: $obj.xxx()



#### 核心函数

简称jQuery函数($/jQuery).   

$和jQuery的关系:  window.jQuery = window.$ = jQuery;

##### 作为一般函数调用: $(param)

* 参数为**函数**: 当DOM加载完成后, 执行此回调函数.// 约等于window.onload
* 参数为**选择器字符串**: 查找所有匹配的标签, 并将它们封装成jQuery对象
* 参数为**DOM对象**: 将dom对象封装成jQuery对象   //常见的是$(this)
* 参数为**HTML标签字符串**(用得少): 创建标签对象并封装成jQuery对象

##### 作为对象使用: $.xxx()

* $.each(): 隐式遍历数组 //不用写循环 $('div').css('background', 'pink'); 所有的div都将匹配这个样式,无需循环.
* $.trim(): 去除两端的空格



```html 
<body>
<p></p>
<button>测试一</button>
<button>测试二</button>
<button id="btn3">测试三</button>
<button>测试四</button>
</body>
```



```js
- 需求1: 点击按钮,显示按钮的文本,显示一个新的输入框.
<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
<script type="text/javascript">
$(function(){
    //参数为选择器字符串:将匹配一个或多个元素封装进jQuery对象之中
    $('#btn').click(function(){
        //alert(this.innerHTML);//this指向:在事件的回调函数中,this指向当前事件源的dom对象.
        alert($(this).html());//参数为dom对象:就是将当前dom对象转换成jQuery对象
        
        $('<input type="text" name="msg3"/><br/>').appendTo('div');
        //参数为标签字符串:创建一个标签且标签为jQuery对象
    });
})
</script>
```



```js
- 需求2: 遍历输出数组中所有元素值

```







#### 核心对象

##### 概要

**==jQuery对象==**是一个包含所有匹配的任意多的dom元素的**伪数组对象**.

即执行jQuery核心函数返回的对象.

jQuery对象内部包含的dom元素对象的伪数组(可能只有一个元素) //例如$('#xx') $('.xxx') $('标签') 即使id选择器

jQuery对象拥有很多操作dom的属性和方法

##### 属性/方法

###### 基本行为

* size()/length: 包含的dom元素个数
* [index]/get(index): 得到对应位置的dom元素
* each(): 遍历包含的所有dom元素
* index(): 得到在所在兄弟元素中的下标//返回当前元素在同级兄弟元素中的索引

实例:

```HTML
<body>
<p></p>
<button>测试一</button>
<button>测试二</button>
<button id="btn3">测试三</button>
<button>测试四</button>
</body>
```

```html 
- 需求1: 统计一共有多少按钮
- 需求2: 取出第2个button的文本
- 需求3: 输出所有button标签的文本
- 需求4: 输出'测试三'按钮是所有按钮中的第几个


//通常我们通过jQuery获取的元素集合,称作jQuery对象.在变量命名的时候, 都会在最前面添加一个$,以加以区分.
<script src="js/jquery-1.10.1.js" type="text/javascript"></script>
<script>
	$(function(){
        var $btn = $('button');
        //需求1
        console.log($btn.length);
        console.log($btn.size());
        
        //需求2
        //dom对象与jQuery对象的互转
        //1. dom对象 ==> jQuery对象: 就是将dom对象传入jQuery核心函数, 则会返回封装后的jQuery对象 $(this)
        //2. jQuery对象 ==> dom对象: 只要是在访问个体的情况下,拿到的都是jQuery对象这个伪数组对象中存储的dom对象.
        //取单个元素,一共有两种情况: 1.索引取值 2.遍历
        
        console.log($btn[1].innerHTML);
        console.log($btn.eq(1).html());
        
        //需求3 输出所有button标签的文本
        $btn.each(function(){
            console.log(this.innerHTML);//jQuery对象上的each方法的回调函数中,this指的是当前jquery对象中存储的每一个dom对象
        })
        
        //需求4 输出'测试三'按钮时所有按钮中的第几个
        index 是返回当前元素在同级兄弟元素中的索引
        console.log($('#btn3').index());
        
        
        
    })
</script>
```







## jQuery选择器

### 1.基本选择器

是什么? 有特定格式的字符串

作用? 用来查找特定页面元素

#### 类型

```HTML
- #id: id选择器
- element: 元素选择器
- .class 属性选择器
- * 任意标签
- selector, selector2, selectorN: 并集选择器
- selector1selector2selectorN: 交集选择器
```



#### 实例

```HTML
   1. 选择id为div1的元素
   $('#div1').css('background','pink');
   2. 选择所有的div元素
   jquery当中  对于操作元素的方法 都内置隐试遍历     隐试遍历都是用来执行统一操作的
   $('div').css('background','pink');
   3. 选择所有class属性为box的元素
   $('.box').css('background','pink');
   4. 选择所有的div和span元素
   $('div,span').css('background','pink')
   5. 选择所有class属性为box的div元素
   $('div.box').css('background','pink');
```



### 2.层次选择器

> 查找子元素, 后代元素, 兄弟元素的选择器



#### 类型

```HTML
1. ancestor descendant 后代选择器
2. parent>child 子元素选择器
3. prev+next 相邻兄弟选择器 匹配所有紧接在prev元素后的next元素(可能只有1个).
4. prev~siblings 通用兄弟选择器 匹配prev元素之后所有的同层级的兄弟元素
   prev~ //prev~*  匹配之后所有的兄弟元素
   prev~targetElement 匹配之后类型为targetElement的兄弟元素
```



#### 实例

```HTML
<ul>
  <li>AAAAA</li>
  <li class="box">CCCCC</li>
  <li title="hello"><span>BBBBB</span></li>
  <li title="hello"><span>DDDD</span></li>
  <span>EEEEE</span>
  <li><span>aaaa</span></li>
</ul>

需求:
   1. 选中ul下所有的的span
   2. 选中ul下所有的子元素span
   3. 选中class为box的下一个li
   4. 选中ul下的class为box的元素后面的所有兄弟元素


<script src="js/jquery-1.10.1.js" type="text/javascript"></script>
<script>
	$('ul span').css('background', 'pink');
    $('ul>span').css('background', 'pink');
    $('.box+li').css('background', 'pink');
    $('.box~*').css('background', 'pink');
</script>
```



### 3.过滤选择器

> 在原有选择器匹配的元素中上进一步进行过滤的筛选器

#### 实例

```HTML
<ul>
  <li>AAAAA</li>
  <li class="box">CCCCC</li>
  <li title="hello"><span>BBBBB</span></li>
  <li title="hello"><span>DDDD</span></li>
  <span>EEEEE</span>
  <li><span>aaaa</span></li>
</ul>

1. 选择第一个div      :first  是这个选择器的整体
2. 选择最后一个class为box的元素
3. 选择所有class属性不为box的div
4. 选择第二个和第三个li元素    eq选择器 根据给定索引值 选择当前集合内对应的元素
5. 选择内容为BBBBB的li    内容选择器    是包含指定内容就算
6. 选择隐藏的li   可见性选择器
7. 选择有title属性的li元素
8. 选择所有属性title为hello的li元素
9. 选择所有有title属性 且title属性不为hello的li元素


<script src="js/jquery-1.10.1.js" type="text/javascript"></script>
<script type="text/javascript">
    $('div:first').css('background', 'pink');
    
    $('.box:last').css('background', 'pink');
    
    $('div:not(.box)').css('background', 'pink');
    
    //$('li:eq(1)').css('background', 'pink'); eq(索引值)根据给定的索引值选择对应元素
    //$('li:eq(2)').css('background', 'pink');
    //$('li:eq(1),li:eq(2)').css('background', 'pink');
    //lt小于给定索引值 gt大于给定索引值 jQuery选择器执行顺序,从左向右依次执行,每次都是用上一次筛选过后的集合,执行下一个选择器.
    $('li:gt(0):lt(2)').css('background', 'pink'); 这是选择了第2个和第3个li,由于jQuery执行顺序的原因,索引小于的索引值是目标的上一位.
    $('li:lt(2):gt(0)').css('background', 'pink');
    
    $('li:contains(BB)').css('background', 'pink'); 选择内容为BB的li.是包含指定的内容就算是
    
    $('li:hidden').show(1000); //可见性选择器
    
    $('li[title]').css('background', 'pink');
    
    $('li[title = hello]').css('background', 'pink');
    
    $('li[title][title != hello]').css('background', 'pink');
    $('li[title]:not([title = hello])').css('background', 'pink');
    
</script>    
```



### 4.表单选择器

> 表单 表单对象属性

#### 表单+表单对象属性

```HTML
- 表单
:input
:checkbox

- 表单对象属性
:disabled
:checked
:selected
```







#### 实例

```HTML
input 标签选择器 获取所有input标签
:input 表单元素选择器 获取所有表单元素:input 文本域 下拉框 按钮

<form>
  用户名: <input type="text"/><br>
  密 码: <input type="password"/><br>
  爱 好:
  <input type="checkbox" value="篮球"/>篮球
  <input type="checkbox"   />足球
  <input type="checkbox" checked="checked"  />羽毛球 <br>
  性 别:
  <input type="radio" name="sex" value='male'/>男
  <input type="radio" name="sex" value='female'/>女<br>
  邮 箱: <input type="text" name="email" disabled="disabled"/><br>
  所在地:
  <select>
    <option value="1" >北京</option>
    <option value="2" selected="selected">天津</option>
    <option value="3" >河北</option>
  </select><br>
  <input type="submit" value="提交"/>
</form>

<script src="js/jquery-1.10.1.js" type="text/javascript"></script>
<script type="text/javascript">
    需求:
   1. 选择不可用的文本输入框
   2. 显示选择爱好 的个数
   3. 显示选择的城市名称
   
   $(':text:disabled').css('background','pink');
   console.log($('input:checkbox:checked').length); //*** :checkbox也是一个选择器 可以省略input
   console.log($('select option:selected').html());
   console.log($(':input').length) //10个 加上下拉框
</script>    
```







### 工具方法

#### 种类

```HTML
1. $.each() 遍历数组或对象中的数据
2. $.trim() 去除字符串两边的空格 返回值就是处理好的内容
3. $.type(obj) 得到数据的类型
4. $.isArray(obj) 判断是否是数组
5. $.isFunction(obj) 判断是否是函数
6. $.parseJSON(json) 解析JSON字符串 转换为js对象/数组

jQuery中有两个each方法: 一个在jQuery对象上,一个在工具对象上.
$().each() 用来遍历jQuery对象的
$.each() 通用遍历方法,拿来遍历数组和对象, 它们是each方法里的参数

$.each(arr, function(index, item){
	console.log(index, item);
})
```



#### 实例

```HTML
- 检测当前的值是否是一个函数
console.log($.isFunction($));//true
console.log($.isFunction($()));//false 返回的是对象

var json = '{"username":"jack", "age" : 12}';
var jsonArr = '[{"username":"jack", "age" : 12},{"username":"Tom", "age" : 13}]';

console.log($.parseJSON(json));
console.log($.parseJSON(jsonArr));
```









## css操作

> jQuery中的css不受只能读取行间样式的限制  只要是这个元素身上的 都可以读到.
>
> jQuery中, 数值单位不写的话,默认使用px
>
> jQuery中读写合一的方法: css(参数1, 参数2)     innerHTML      html()
>
> jQuery中css样式允许传入对象.



#### 实例

```HTML
<head>
  <meta charset="UTF-8">
  <title>11_css</title>
  <style>
    .test{
      color: pink;
    }
  </style>
</head>
<body>
<p class="test">尚硅谷的后裔</p>
<p style="color: green;">太阳的后裔</p>

    
//1. 得到第一个p标签的颜色
//2. 设置所有p标签的文本颜色为pink
//3. 设置第2个p的字体颜色(#ff0011),背景(blue),宽(300px), 高(30px)     
    
<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
<script type="text/javascript">
        
	console.log($('p:first').css('color')); //只有一个参数是读取,2个参数为写入
   $('p').css('color', pink);
   $('p:last').css({
       'color': '#ff0011',
       'background': 'blue',
       'width': '300px',
       'height': '30'//px可以省略. 属性名可以不加引号
   }) 
    
    
    
```







### 属性

选择器只能找元素 不能找属性

```HTML
1.操作任意属性
attr()    //attribute缩写
removeattr()
prop()    //property缩写

attr() 用于操作属性值可自己定义的属性
prop() 用于操作属性值固定的属性 其实指的就是布尔值属性

2.操作任意属性
addClass()
removeClass()

3.操作HTML代码/文本/值
html()
val()
```



#### jQuery方法读写合一

```HTML
jQuery当中的读写合一(操作元素的方法)
单参数的方法: 传值为写, 不传值为读
双参数的方法: 传两个值为写, 传一个值为读

jQuery中的方法内置隐式遍历,在我们设置内容的时候,不需要自己写遍历的语句.
但当是一个读取操作时, 如果用隐式遍历的话,读只是读第一个,写是写全部.


```



#### 隐式遍历缺点

```HTML
1.读只读第一个,写实全写
2.隐式遍历是没有遍历过程的,所以如果你的逻辑需要判断等在需要遍历过程中操作,就不能使用,需要使用each()解决.
```







#### 实例

```HTML
<div id="div1" class="box" title="one">class为box的div1</div>
<div id="div2" class="box" title="two">class为box的div2</div>
<div id="div3">div3</div>
<span class="box">class为box的span</span>
<br/>
<ul>
  <li>AAAAA</li>
  <li title="hello" class="box2">BBBBB</li>
  <li class="box">CCCCC</li>
  <li title="hello">DDDDDD</li>
  <li title="two"><span>BBBBB</span></li>
</ul>

<input type="text" name="username" value="guiguClass"/>
<br>
<input type="checkbox" >
<input type="checkbox">
<br>
<button>选中</button>
<button>不选中</button>

<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
<script type="text/javascript">
    
//1. 读取第一个div的title属性
 $('div:first').attr('title'); //只读取了第一个
    
//2. 给所有的div设置name属性(value为atguigu)    
$('div').attr('name', 'atguigu')    

//3. 移除所有div的title属性
$('div').removeAttr('title')
$('div').removeAttr('title', '') //保存属性名,但没有属性值和等于号
    
//4. 给所有的div设置class='guiguClass'   
$('div').attr('class', 'guiguClass')
    
//5.给所有的div添加class='abc'
$('div').attr('class', 'guiguClass abc')    复杂写法
$('div').addClass('class', 'abc')       简化写法

//6.移除所有div的guiguClass的class
$('div').removeClass('guiguClass')
    
//7.得到最后一个li的标签体文本
$('li:last').html()
//隐式遍历只能读取第一个
$('li').html() //   会输出第一个 
    
//8.设置第一个li的标签体为"<h1>mmmmmmmmm</h1>"   
$('li:first').html('<h1>mmmmmmmmm</h1>')
    
//9.得到输入框中的value值
$(':text').val()

//10.将输入框的值设置为atguigu
$(':text').val('atguigu')
    
//11.点击'全选'按钮实现全选
$('button:first').click(function(){
    $(':checkbox').prop('checked', true);
})   

//点击'全不选'按钮实现全不选
$('button:last').click(function(){
    $(':checkbox').prop('checked', false);
    console.log($(':checkbox').prop('checked'));//输出false
})
```











### 获取/设置标签的位置

```HTML
- 获取/设置标签的位置数据 offset和position

offset()方法 返回的是一个对象,包含left和top两个属性,是元素相对于页面左上角的坐标
position()方法 返回的是一个对象, 包含left和top两个属性, 是元素相对于包含块左上角的坐标

以上两个方法,返回的对象中的两个属性的值,都是不带单位的数字,但都是以像素记
两个方法只对可见元素有效, display:none.
```



#### 实例

```HTML
- 设置元素距离页面左上角的位置

$('#btn2').click(function () {
        $('.div2').offset({
            left:200,
            top:100
        })
    })

- 获取元素距离页面和包含块左上角的位置值
$('element').offset()
$('element').position()

```









### 元素的滚动

> 通过scrollTop获取页面滚动条的坐标时,有些浏览器是html有效,有些是body有效.但这两个结果一定是互斥的,一个有值, 另一个一定是0. 故可以使用加号 或 ||(或)来适配.
>
> 1.8版本上的jQuery,可以直接使用document.



```HTML
- 读取/设置滚动条的Y坐标
- scrollTop() 

- 读取页面滚动条的Y坐标(兼容Chrome和IE)
- $(document.body).scrollTop() + $(document.documentElement).scrollTop()
- $('body').scrollTop() || $('html').scrollTop();


```



#### onscrollTop实例

```HTML
- 获取div和页面滚动条的坐标

- 单参数,要么不写要么正值,没有负值,没有单位.

<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
<script type="text/javascript">
$('btn1').click(function(){
    console.log($('.box').scrollTop());
    //浏览器适配
    console.log($('html').scrollTop() + $('body').scrollTop());
    console.log($('html'.scrollTop() || $('body').scrollTop());
    //1.8版本上的jQuery写法
    console.log($(document).scrollTop());            
})
    
    
- 设置元素或页面的滚动条滚动到指定位置
$('#btn2').click(function(){
    //scrollTop() 直接传入数值,即可操作元素或页面的滚动条位置.不要带单位,不要为负值.
    $('.box').scrollTop(200);
    
    //浏览器兼容
    //$('html').scrollTop(200) + $('body').scrollTop(200);
    //$('html').scrollTop(200) || $('body').scrollTop(200);
    $('html, body').scrollTop(200);
    
    //jQuery1.8版本上
    $(document).scrollTop(200);
})    
```





### 元素的尺寸

```HTML
<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
<script type="text/javascript">
    $(function(){
        var $div = $('div');
        //width(),height()获取元素的width和height
        console.log($div.width(), $div.height());
        
        //获取元素内部尺寸
        //innerWidth(), innerHeight()获取元素的width+padding, height+padding 内部尺寸
        console.log($div.innerWidth(), $div.innerHeight());
        
        //获取元素外部尺寸
        //outerWidth(), outerHeight()获取元素的width/height+padding+border的值
        console.log($div.outerWidth(), $div.outerHeight());
        
        //外部尺寸方法,允许传入一个布尔值参数.默认为false.若设置为true,则在原有基础上再加上margin值.
        console.log($div.outerWidth(true), $div.outerHeight(true));
    })
```



### 筛选+过滤

> 在jQuery对象中的元素对象数组中过滤出一部分元素来
>
> 过滤选择器: 是在元素查询阶段,对匹配的结果进行筛选
>
> 过滤选择方法: 是在已经获取了jQuery对象之后,要对这个对象进行少选和过滤. 这个时候已经没有办法使用选择器了.

```HTML
first()
last()
eq( index | -index)
filter(selector)  能够再次使用选择器,对现有jQuery对象进行筛选
not(selector)
has(selector)

find() 找出正在处理的元素的后代元素
```



```html 
<ul>
  <li>AAAAA</li>
  <li title="hello" class="box2">BBBBB</li>
  <li class="box">CCCCC</li>
  <li title="hello" class="item">DDDDDD</li>
  <li title="two"><span class="test">BBBBB</span></li>
</ul>
<li>eeeee</li>
<li>EEEEE</li>
<br>

<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
<script type="text/javascript">
    
var $liNodes = $('ul>li');
//ul下li标签第一个
$liNodes.first().css('background','pink');
 

//ul下li标签的最后一个
$liNodes.last().css('background','pink');    
    
//ul下li标签的第二个
$liNodes.eq(1).css('background','pink');  //eq(index)使用频次大于first,last等方法
    
//ul下li标签中title属性为hello的
$liNodes.filter('[title=hello]').css('background','pink');
    
//ul下li标签中title属性不为hello的
//filter 根据传入的选择器,筛选已有的jQuery对象    
$liNodes.filter('[title != hello]').css('background','pink');
$liNodes.filter(':first').css('background','pink');    
    
//ul下li标签中有span子标签的
$liNodes.has('span').css('background','pink');   
    
//li标签下的span
$liNodes.find('span').css('background','pink');      
```







### 筛选:孩子-父母-兄弟标签

```HTML
在已经匹配出的元素集合中根据选择器查找孩子/父母/兄弟标签
1.children() 子标签中找
2.find() 后代标签中找
3.parent() 父标签 //parent().parent()
4.prevAll() 前面所有的兄弟标签  元素存储顺序为倒叙
5.nextAll() 后面所有的兄弟标签
6.siblings() 前后所有的兄弟标签

prevAll(), nextAll() 是可以使用选择器的.
```



#### 实例

```HTML
<div>
  <ul>
    <span>span文本1</span>
    <li>AAAAA</li>
    <li title="hello" class="box2">BBBBB</li>
    <li class="box" id='cc'>CCCCC</li>
    <li title="hello">DDDDDD</li>
    <li title="two"><span>span文本2</span></li>
    <span>span文本3</span>
  </ul>
  <span>span文本444</span><br>
  <li>eeeee</li>
  <li>EEEEE</li>
  <br>
</div>


<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
<script type="text/javascript">
    var $ul = $('ul');
    //ul标签的第2个span子标签
    $ul.children('span:eq(1)').css('background','pink');
    //ul标签的第2个span后代标签
    $ul.find('span:eq(1)').css('background','pink');
    //ul标签的父标签
    $ul.parent().css('background','pink');
    //id为cc的li标签的前面的所有li标签
    $('#cc').prevAll('li').css('background','pink');
    
    //id为cc的li标签的所有兄弟li标签
    $('#cc').siblings('li').css('background','pink');
```





### 文档增删改

```HTML
- 添加/替换元素
 - 内部插入: appendTo append prependTo prepend 插入的是子元素
 - 外部插入: before() after() 插入的是同级元素


append(content)
向当前匹配的所有元素内部的最后插入指定内容

prepend(content)
向当前匹配的所有元素内部的最前面插入指定内容

before(content)
将指定内容插入到当前所有匹配元素的前面

after(content)
将指定内容插入到当前所有匹配元素的后面替换节点

replaceWith(content)
用指定内容替换所有匹配的标签删除节点

删除元素
- empty() 删除所有匹配元素的子元素  清空节点,将当前元素内部的所有子元素删除
- remove() 删除所有匹配的元素      是直接删除当前元素
```







### jQuery练习题

#### 多Tab点击切换

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>02_多Tab点击切换</title>

  <style>
    * {
      margin: 0;
      padding: 0;
    }

    #tab li {
      float: left;
      list-style: none;
      width: 80px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      text-align: center;
    }

    #container {
      position: relative;
    }

    #content1, #content2, #content3 {
      width: 300px;
      height: 100px;
      padding: 30px;
      position: absolute;
      top: 40px;
      left: 0;
    }

    #tab1, #content1 {
      background-color: #ffcc00;
    }

    #tab2, #content2 {
      background-color: #ff00cc;
    }

    #tab3, #content3 {
      background-color: #00ccff;
    }
  </style>
</head>
<body>
<h2>多Tab点击切换</h2>
<ul id="tab">
  <li id="tab1" value="1">10元套餐</li>
  <li id="tab2" value="2">30元套餐</li>
  <li id="tab3" value="3">50元包月</li>
</ul>
<div id="container">
  <div id="content1">
    10元套餐详情：<br/>&nbsp;每月套餐内拨打100分钟，超出部分2毛/分钟
  </div>
  <div id="content2" style="display: none">
    30元套餐详情：<br/>&nbsp;每月套餐内拨打300分钟，超出部分1.5毛/分钟
  </div>
  <div id="content3" style="display: none">
    50元包月详情：<br/>&nbsp;每月无限量随心打
  </div>
</div>
<script src="jquery-1.10.1.js"></script>
<script>
$(function(){
    //获取按钮和显示区域集合
    var $list = $('#tab li');
    var $divs = $('#container div');
    var currentIndex = 0;
    $list.click(function(){
        
        var targetIndex = $(this).index();
        
        if(currentIndex === targetIndex){
            return;//当点击自己的时候 直接返回不执行
        }
        $divs.eq(currentIndex).hide();
        $divs.eq(targetIndex).show();
        
        currentIndex = targetIndex;//默认显示元素的索引的更新
        
    })    
   
}) 
    
    
//另一种解法    
 $list.click(function(){
        $divs.eq($(this).index()).show().siblings().hide();
    })    
    
```



#### 爱好选择器

```HTML
<form>
  你爱好的运动是？<input type="checkbox" id="checkedAllBox"/>全选/全不选

  <br/>
  <input type="checkbox" name="items" value="足球"/>足球
  <input type="checkbox" name="items" value="篮球"/>篮球
  <input type="checkbox" name="items" value="羽毛球"/>羽毛球
  <input type="checkbox" name="items" value="乒乓球"/>乒乓球
  <br/>
  <input type="button" id="checkedAllBtn" value="全　选"/>
  <input type="button" id="checkedNoBtn" value="全不选"/>
  <input type="button" id="checkedRevBtn" value="反　选"/>
  <input type="button" id="sendBtn" value="提　交"/>
</form>

<script src="jquery-1.10.1.js"></script>
<script type="text/javascript">
    /*
   功能说明:
   1. 点击'全选': 选中所有爱好
   2. 点击'全不选': 所有爱好都不勾选
   3. 点击'反选': 改变所有爱好的勾选状态
   4. 点击'全选/全不选': 选中所有爱好, 或者全不选中
   5. 点击某个爱好时, 必要时更新'全选/全不选'的选中状态
   6. 点击'提交': 提示所有勾选的爱好
   */
    $(function(){
        //全选全不选复选框
        var $checkedAllBox = $('#checkedAllBox');
        //爱好集合
        var items = $(':checkbox[name=items]');
        
        //1.1. 点击'全选': 选中所有爱好
        var $checkedAllBtn = $('#checkedAllBtn');
        $checkedAllBtn.click(function(){
            $items.prop('checked', true);
            $checkedAllBox.prop('checked', true);
        });
        
        //2. 点击'全不选': 所有爱好都不勾选
        var $checkedNoBtn = $('#checkedNoBtn');
        $checkedNoBtn.click(function(){
            $items.prop('checked', false);
            $checkedAllBox.prop('checked', false);
        });
        
        //3. 点击'反选': 改变所有爱好的勾选状态
        var $checkedRevBtn = $('#checkedRevBtn');
        $checkedRevBtn.click(function(){
            $items.each(function(){
                this.checked = !this.checked;
            })
        });
        
        //4. 点击'全选/全不选': 选中所有爱好, 或者全不选中
        $checkedAllBox.click(function(){
            $items.prop('checked', this.checked); //this指向当前的事件对象
        });
        
        //5. 点击某个爱好时, 必要时更新'全选/全不选'的选中状态
        var checkedNum = $items.filter(':checked').length;
        if(checkedNum === $items.length){
            $checkedAllBox.prop('checked', true);
        }else{
            $checkedAllBox.prop('checked', false);
        }
        //5. 简化的2种写法
        //不选中的个数为0 也为选中状态
        $checkedAllBox.prop('checked', $items.filter(':not(:checked)').length === 0);
        //
        $checkedAllBox.prop('checked',$items.filter(':checked').length === $items.length);
        //6. 点击'提交': 提示所有勾选的爱好
        $('#sendBtn').click(function () {
          $items.filter(':checked').each(function () {
              alert(this.value);
          })
      })
    
    
    
</script>    
```







## 1123



### 事件添加删除记录

```html
<table id="employeeTable">
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Salary</th>
    <th>&nbsp;</th>
  </tr>
  <tr>
    <td>Tom</td>
    <td>tom@tom.com</td>
    <td>5000</td>
    <td><a href="deleteEmp?id=001">Delete</a></td>
  </tr>
  <tr>
    <td>Jerry</td>
    <td>jerry@sohu.com</td>
    <td>8000</td>
    <td><a href="deleteEmp?id=002">Delete</a></td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>bob@tom.com</td>
    <td>10000</td>
    <td><a href="deleteEmp?id=003">Delete</a></td>
  </tr>

</table>

<div id="formDiv">

  <h4>添加新员工</h4>

  <table>
    <tr>
      <td class="word">name:</td>
      <td class="inp">
        <input type="text" name="empName" id="empName"/>
      </td>
    </tr>
    <tr>
      <td class="word">email:</td>
      <td class="inp">
        <input type="text" name="email" id="email"/>
      </td>
    </tr>
    <tr>
      <td class="word">salary:</td>
      <td class="inp">
        <input type="text" name="salary" id="salary"/>
      </td>
    </tr>
    <tr>
      <td colspan="2" align="center">
        <button id="addEmpButton" value="abc">
          Submit
        </button>
      </td>
    </tr>
  </table>
</div>
```



```HTML
- append和appendTo的区别
- first()的使用对象
- 回调函数写不写调用括号



<script src="jquery-1.10.1.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
  /*
   功能说明:
   1. 点击'Submit', 根据输入的信息在表单中生成一行员工信息
   2. 点击Delete链接, 提示删除当前行信息, 点击确定后删除信息
   技术要点:
   1. DOM查询
   2. 绑定事件监听
   3. DOM增删改
   4. 取消事件的默认行为
   */
    
    
$(function(){
    var $empName = $('#empName');
    var $email = $('#email');
    var $salaty = $('#salary');
    $('#addEmpButton').click(function(){
        var empName = $empName.val();
        var email = $email.val();
        var salary = $salary.val();
        if(empName && email && salary){
            $('<tr></tr>')
            .append('<td>'+empName+'</td>')
            .append('<td>'+email+'</td>')
            .append('<td>'+salary+'</td>')
            .appendTo('#employeeTable tbody').find('a').click(clickA);
        }else{
            alert('请不要输入空信息');
        }
        $empName.val('');
        $email.val('');
        $salary.val('');
    })
    
    $('a').click(clickA);
    function clickA(event){
        event.preventDefault(); //dom0级事件阻止默认属性  点击a会跳转
        var $tr = $(this).parent().parent();
        var name = $tr.children(':first').html();
        if(confirm('你确认删除'+name+'的信息吗')){
            $tr.remove();
        }
    }
})    
```





### 事件绑定与解绑

#### 元素绑定监听(两种方法)

```HTML
- jQuery当中事件方法,都是用dom2级事件绑定

事件绑定(2种)
* eventName(function(){})
  绑定对应事件名的监听.
* on(eventName, function(){})
  通用的绑定事件监听.
* 优缺点:
  eventName:编码方便,但只能加一个监听,且有的事件监听不支持.
  on: 编码不方便,可以添加多个监听,且更通用.
事件解绑
 off(eventName)



$('element').click(function(){console.log('点击1')})
$('element').click(function(){console.log('点击2')})

- on 通用事件绑定方法.jQuery并不是将所有的事件,都单独封装成了方法.如果要绑定这些未封装的方法,只能通过on绑定.
- on方法允许将多个事件监听,指定同一个回调函数

$('element').on('click mouseenter', function(){ console.log('点击') })
==============================================================================



- hover事件绑定
 - hover能够接受两个参数,参数为函数.参数1:移入的回调函数;参数2:移出的回调函数
 - hover的底层,是通过mouseenter, mouseleave实现的.如何验证?冒泡--
 - 如果只传入一个回调函数, 移入和移出都走这一个回调函数.

$('element').hover(function(){console.log('移入')}, function(){console.log('移出')})




```



#### 元素解绑

```HTML
- off() 解绑事件.如果不传递任何参数的情况, 默认是解除所有事件
- off允许传入参数,参数的类型为字符串,内容为事件名称.允许传递多个名称,以空格分隔.

off('mouseenter mouseleave');
```



### 事件委托delegate/on

```HTML
jQuery事件委托API

- 设置事件委托: $(parentSelector).delegate(childrenSelector, eventName, callback);
- 移出事件委托: $(parentSelector).undelegate(eventName);

delegate由父元素调用,3个参数: 参数1:子元素选择器; 参数2:事件名称; 参数3:回调函数
delegate的回调函数中,this的指向,就是当前触发事件的子元素本身.


- 设置事件委托: $(parentSelector).on(eventName, childrenSelector, callback);
- 移除事件委托: $(parentSelector).off();
on方法: 参数1:事件名称; 事件2:子元素选择器; 事件3:回调函数
```



### 淡入淡出fade

```HTML
淡入淡出: 不断改变元素的透明度来实现的 //time为毫秒数,可选.
1.fadeIn(time) 带动画的显示
2.fadeOut(tiem) 带动画隐藏
3.fadeToggle(time) 带动画切换显示/隐藏
```



### 滑动slide

```HTML
slideDown(): 带动画的展开
slideUp(): 带动画的收缩
slideToggle(): 带动画的切换展开/收缩
```





### 显示与隐藏show/hide/toggle

```HTML
显示隐藏,默认没有动画. show和hide两个方法, 如果不传递时间,默认没有过度效果
show() (不)带动画的显示
hide() (不)带动画的隐藏
toggle() (不)带动画的显示/隐藏
```





### jQuery练习题-轮播图

```HTML
<head>
	<meta charset="UTF-8">
	<title>焦点轮播图</title>
	<style type="text/css">
		/*去除内边距,没有链接下划线*/
		* {
			margin: 0;
			padding: 0;
			text-decoration: none;
		}
		/*让<body有20px的内边距*/
		body {
			padding: 20px;
		}
		/*最外围的div*/
		#container {
			width: 600px;
			height: 400px;
			overflow: hidden;
			position: relative;/*相对定位*/
			margin: 0 auto;
		}
		/*包含所有图片的<div>*/

		#list {
			width: 4200px; /*7张图片的宽: 7*600 */
			height: 400px;
			position: absolute; /*绝对定位*/
			z-index: 1;

		}
		/*所有的图片<img>*/
		#list img {
			float: left;/*浮在左侧*/
		}
		/*包含所有圆点按钮的<div>*/
		#pointsDiv {
			position: absolute;
			height: 10px;
			width: 100px;
			z-index: 2;
			bottom: 20px;
			left: 250px;
		}
		/*所有的圆点<span>*/

		#pointsDiv span {
			cursor: pointer;
			float: left;
			border: 1px solid #fff;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background: #333;
			margin-right: 5px;
		}
		/*第一个<span>*/

		#pointsDiv .on {
			background: orangered;
		}
		/*切换图标<a>*/

		.arrow {
			cursor: pointer;
			display: none;
			line-height: 39px;
			text-align: center;
			font-size: 36px;
			font-weight: bold;
			width: 40px;
			height: 40px;
			position: absolute;
			z-index: 2;
			top: 180px;
			background-color: RGBA(0, 0, 0, 0.3);
			color: #fff;
		}
		/*鼠标移到切换图标上时*/
		.arrow:hover {
			background-color: RGBA(0, 0, 0, 0.7);
		}
		/*鼠标移到整个div区域时*/
		#container:hover .arrow {
			display: block;/*显示*/
		}
		/*上一个切换图标的左外边距*/
		#prev {
			left: 20px;
		}
		/*下一个切换图标的右外边距*/
		#next {
			right: 20px;
		}
	</style>
</head>

<body>

	<div id="container">
		<div id="list" style="left: -600px;">
			<img src="img/5.jpg" alt="5" />
			<img src="img/1.jpg" alt="1" />
			<img src="img/2.jpg" alt="2" />
			<img src="img/3.jpg" alt="3" />
			<img src="img/4.jpg" alt="4" />
			<img src="img/5.jpg" alt="5" />
			<img src="img/1.jpg" alt="1" />
		</div>
		<div id="pointsDiv">
			<span index="1" class="on"></span>
			<span index="2"></span>
			<span index="3"></span>
			<span index="4"></span>
			<span index="5"></span>
		</div>
		<a href="javascript:;" id="prev" class="arrow">&lt;</a>
		<a href="javascript:;" id="next" class="arrow">&gt;</a>
	</div>
```



```html
<script src="./js/jquery.1.10.2.js"></script>
<script type="text/javascript">
/*
		 功能说明:
			 1. 点击向右(左)的图标, 平滑切换到下(上)一页
			 2. 无限循环切换
			 3. 每隔3s自动滑动到下一页
			 4. 鼠标进入停止自动翻页, 移出开启自动翻页
			 5. 切换页面时, 下面的圆点也同步更新
			 6. 点击圆点图标切换到对应的页
		 */
$(function () {
    var $prev = $('#prev');
    var $next = $('#next');
    var $list = $('#list');
    var $points = $('#pointsDiv span');
    var $container = $('#container');

    var time = 300;
    var itemTime = 30;
    var imgNum = $points.length;

    var PAGE_WIDTH = 600;
    var index = 0;

    var isMoving = false;

    $prev.click(function () { nextPage(false) });
    $next.click(function () { nextPage(true) });

    $points.click(function () {
        var targetIndex = $(this).index(); //this指的谁?
        nextPage(targetIndex);
    });

    var autoTimer = setInterval(function () {
        nextPage(true);
    }, 300);

    $container.hover(function () {
        clearInterval(autoTimer);
    }, function () {
        autoTimer = setInterval(function () {
            nextPage(true);
        }, 300);
    });



    function nextPage(next) {
        if(isMoving){
            return;
        }
        isMoving = true;
        if (typeof next === 'boolean') {
            var offset = next ? -PAGE_WIDTH : PAGE_WIDTH;
        } else {
            var offset = -(next - index) * PAGE_WIDTH;
        }

        var left = $list.position().left;
        var targetIndex = offset + left;
        var itemOffset = offset / (time / itemTime);

        var timer = setInterval(function () {
            left += itemOffset;
            if (left === targetIndex) {
                clearInterval(timer);
                isMoving = false;

                //首尾相接
                if (left === 0) {
                    left = -imgNum * PAGE_WIDTH;
                } else if (left === -(imgNum + 1) * PAGE_WIDTH) {
                    left = -PAGE_WIDTH;
                }
            }
            $list.css('left', left);
        }, itemTime);
        upDate(next);
    }
    function upDate(next) {
        if (typeof next === 'boolean') {
            var targetIndex = next ? index + 1 : index - 1;
        } else {
            var targetIndex = next;
        }



        if (targetIndex < 0) {
            targetIndex = imgNum - 1;
        } else if (targetIndex > imgNum - 1) {
            targetIndex = 0;
        }

        $points.eq(index).removeClass('on');
        $points.eq(targetIndex).addClass('on');

        index = targetIndex;
    }
})
```



### 自定义动画

```HTML
jQuery动画本质: 在指定事件内不断改变元素的样式值来实现

1.animate() 自定义动画效果的动画
2.stop() 停止动画
```



```HTML
- 逐渐扩大


 - 宽度扩大
 - 高度扩大
 - 先宽度再高度变大
<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
<script type="text/javascript">
$(function(){
	$('#btn').click(function(){
        $('div').animate({
            'width': '300';//单位默认像素,可以使用百分比
            'height': '300px'
        },1000).animate({
            'height':'300';
        }1000)
    })
})
    
- 向右移动(左)
    'left': += '300'
    
- 停止动画
$('#btn').click(function(){
    //stop(参数1, 参数2) 参数1:是否清空队列 参数2:动画是否执行完整
    $('div').stop(false, false);//立即停止当前动画,在当前位置执行下一个动画,不会清空动画队列
    $('div').stop(true, true); //立即停止动画,元素移动到本次动画结束位置,清空动画队列
    $('div').stop(true, false);//立即停止当前动画, 元素保持在当前位置不变.清空动画队列
    $('div').stop(false, true);//立即停止当前动画, 元素移动到本次动画的结尾,不清空动画队列.
})  
```





### 插件扩展

```HTML
- 扩展jQuery的工具方法
$.extend(object)
- 扩展jQuery对象的方法
$.fn.extend(object)
```



```js
- my_jquery_plugin.js

$.extend({
	min:function(a, b){
        return a>b?b:a;
    },
    max:function(a, b){
        return a>b?a:b;
    },
    leftTrim:function(){//移除字符串左边的空格: 字符串方法+正则
        return str.replace(/^\s+/, '');
    },
    rightTrim:function(){
        return str.replace(/\s+$/, '');
    }
})

//给jQuery对象添加3个功能方法
- checkAll() 全选
- uncheckAll() 全不选
- reverseCheck() 反选

$.fn.extend({
	checkAll:function(){
		this.prop('checked', true);
	},
	uncheckAll:function(){
		this.prop('checked', false);
	},
	reverseCheck:function(){
		this.each(function(){
			this.checked = !this.checked;
		})
	}
})
```





```html
- html文件
<script type="text/javascript" src="js/my_jQuery_plugin.js"></script>
<script type="text/javascript">
$(function(){
    //调用扩展
    console.log($.min(9, 11));
    
    //jQuery对象调用方法
    $('#btn1').click(function(){
        $(':checkbox').checkAll();
    })
})    
```





### 多库共存

```HTML
- 如果有2个库都有$, 就存在冲突.后面会覆盖前面.
- 将jQuery后引入,保证jQuery能够正常使用,然后调用noConflict方法,让jQuery释放对$的使用权.
- 在这个方法执行后,我们使用jquery就只能使用全称了.

```



```html
-myLib.js
(function(){
    w.$ = function(){
        alert('我是myLib');
    }
})(window)

- html
<script type="text/javascript" src="js/myLib.js"></script>
<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
<script type="text/javascript">
    jQuery.noConflict();
    $();//输出的是'我是myLib'
    console.log(jQuery);
        //ƒ ( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		//return new jQuery.fn.init( selector, context, rootjQuery );
	}
</script>    

```



### onload与ready

```HTML
区别:window.onload与$(document).ready()
- window.onload
 - 包括页面的图片加载完后才会回调
 - 只能有一个监听回调

- $(document).ready()
 - 等同于: $(functoin(){})
 - 页面加载完就回调(早)
 - 可以有多个监听回调
document.ready 当dom渲染完成后就会执行
window.onload 需要等待所有外部资源加载完成后才执行(HTML css js 图片等,并且页面渲染完成)

完整写法:
jQuery(document).ready(function(){})
```





### 实例-todolist

```HTML
<script type="text/javascript" src="jquery-1.11.1.min.js"></script>
<script type="text/javascript">
    $(function(){
        var dataJson = [
                    {
                        'content':'吃饭'
                    },
                    {
                        'content':'睡觉'
                    },
                    {
                        'content':'滑雪'
                    },
                    {
                        'content':'打鼓'
                    }
                ];
        //获取ul元素
        var $todoMain = $('.todo-main');
        //获取全选全不选复选框
        var $checkAll = $('#checkAll');
        //数据绑定
        bindData();
        function bindData(data){
            for(var i=0; i<data.length; i++){
                $todoMain.append('<li class="todoItem" style="background: rgb(255, 255, 255);">' +
							'<label><input type="checkbox"><span>'+data[i].content+'</span></label>' +
							'<button class="btn btn-danger" style="display: none;">删除</button></li>')
            }
            //更新任务总数
            allTodo();
        }
        //任务总数
        function allTodo(){
            $('#allTodos').html($todoMain.children().length)
        }
        
        //更新已完成任务数    就是获取当前所有任务列表当中被选中的复选框的长度 来作为文本
        function allCompletedTodos(){
            $('#allCompletedTodos').html($todoMan.find(':checkbox:checked').length)
        }
        
        //所有复选框绑定单击事件 事件委托
        $todoMain.delegate('.todoItem input:checkbox', 'click', function(){
            //更新已完成任务数
            allCompletedTodos();
            //全选:任务总数=当前选中的复选框个数.
            $checkAll.prop('checked', $todoMain.find(':checkbox:checked').length === $todoMain.children().length);
        });
        //给全选全不选复选框 绑定单击事件
        $checkAll.click(function(){
            $todoMain.find(':checkbox').prop('checked', this.checked);
            
            //更新已完成任务
            allCompletedTodos();
        });
        
        //给li绑定移入移出事件  事件委托
        $todoMain.delegate('.todoItem', 'mouseenter' function(){
            $(this).css('background','#ccc');
            $(this).children('button').show();
        });
        $todoMain.delegate('.todoItem', 'mouseleave', function(){
            $(this).css('background','#fff');
            $(this).children('button').hide();
        });
        
        //删除按钮逻辑 事件委托
        $todoMain.delegate('.todoItem button', 'click', function(){
            $(this).parent().remove();
            
            //更新任务总数
            allTodos();
            //更新已完成任务数
            allCompletedTodos();
            
            //当任务列表当中部分任务完成 部分任务未完成的情况下我们将所有未完成的删除之后  任务列表 将会处于全选状态 所以我们需要更新全选按钮的checked属性
            $checkAll.prop('checked', $todoMain.childred().length !== 0 && $todoMain.find(':checkbox:checked').length === $todoMain.children().length);
        })
        
        //清空已完成任务按钮
        $('#removeAllCompleted').click(function(){
            $todoMain.find(':checkbox:checked').parent().parent().remove();
            
            //更新任务总数
            allTodos();
            //更新已完成任务数
            allCompletedTodos();
            $checkAll.prop('checked', false);//当删除已完成任务后,全选框            $checkAll.prop('checked', false);//当删除已完成任务后,全选框
            $checkAll.prop('checked', false);//当删除已完成任务后,全选框一定是空的.分两种情况:1是只删除了一部分,肯定是false;另一种是全部删除,没有的话就是没有全选.
        })
    })
```



























































