# HTML5+CSS3 视频教程





## css简介

> Cascadig Style Sheets（CSS) 层叠样式表是一门指定文档如何呈现给用户的语言



#### 使用CSS的方式

> 选择器+声明块

##### 内联样式(不推荐)

```html
<p style="color:red; size:15px;">words words words words</p>
```

* 特点：只能作用于一个标签



##### 内部样式

* 位置：\<head>中的\<style>

* ```html
  <style>
      p{color:red;font-size:50px;}
  </style>
  ```

* 缺点：不能跨页面重复使用



##### 外部样式(最推荐)

```html
<link rel="stylesheet" href="">
```

* 优点：使用浏览器缓存机制，加快网页加载速度；多个网页可使用；



#### CSS基本语法

**注释:**  /*注释内容 \*/     

* 形式：选择器+声明块

  > 例如： p{color:red; font-size:16px;}

  * 选择器：通过选择器可以选定页面中的指定元素
  * 声明块：通过声明块来指明要为元素设置的样式
    * 声明块由一个个声明组成
    * 声明是一个名值对结构
    * 一个样式名对应一个样式值，以 **“:(引号)”** 连接，以 **";(分号)"**结束



####  常用选择器

##### 元素选择器

##### id选择器

* 作用：根据元素的id属性值来选定元素，id值不能重复
* 语法：#id属性值{}
* 例子：#red{}

##### 类选择器(class)

* 作用：根据元素的class属性值来选中一组元素 ,class值可以重复
* 语法：.class{}
* 其他：可以为同一元素设置多个class值，中间空格



##### 通配选择器(\*)

* 选中页面中的所有元素



#### 复合选择器

##### 交集选择器

* **作用:** 选中同时符合多个条件的选择器

* **语法:** 选择器1选择器2选择器3选择器n{}

  ```html
  <style>
      div.red{
          color:red;
          font-size:15px;
      }
  </style>
  ```

  

* **注意:** <font color='red'>交集选择器中如果有元素选择器，必须以元素选择器开头</font>



##### 并集选择器(选择器分组)

* **作用** 同时选择多个选择器对应的元素
* **语法**  选择器1,选择器2,选择器3.....{}



#### 关系选择器

##### HTML中元素的几种关系:

* **父元素**
  * 定义: 直接包含子元素的元素叫做父元素
* **子元素**
  * 定义: 直接被父元素包含的元素叫做子元素
* **祖先元素**
  * 直接或间接包含后代元素的叫做祖先元素
  * 一个元素的父元素也是它的祖先元素
* **后代元素**
  * 直接或间接被祖先元素包含的元素叫做后代元素
  * 一个元素的子元素也是它的后代元素
* **兄弟元素**
  * 拥有相同父元素的元素



##### 子元素选择器

* 定义:选中指定父元素的指定子元素
* 语法:  父元素 > 子元素



##### 后代元素选择器

* 定义: 选中指定元素内的指定后代元素
* 语法: 祖先 后代(中间空格)



##### 兄弟元素选择器

语法: 

选择<font color="red">下一个兄弟</font>:  兄弟1+兄弟2

> 介于两个选择器之间，当第二个元素*紧跟在*第一个元素之后，并且两个元素都是属于同一个父[`元素`](https://developer.mozilla.org/zh-CN/docs/Web/API/元素)的子元素，则第二个元素将被选中。

​	

**选择下面所有兄弟: 兄弟1~兄弟2**

> 位置无须紧邻，只须同层级，`A~B` 选择`A`元素之后所有同层级`B`元素。



#### 属性选择器

```HTML
<!---->
<style>
	[属性名]			  <!-- 选择含有指定属性的元素-->
    [属性名=属性值]		<!-- 选择含有属性名和属性值的元素 -->
    [属性名^=属性值]		<!-- 选择含属性值以指定值开头的元素 -->
    [属性名$=属性值]		<!-- 选择含属性值以指定值结尾的元素 -->
    [属性名*=属性值]		<!-- 选择属性值中包含指定值的元素 -->
    [属性名~=属性值]      <!-- 选择包含独立属性值的元素 -- >
    
    
    p[title]{color:red;} <!-- 带有title属性的p元素-->
    [title]{color:red;}
    [title="abc"]{color:red;}
    [title^="abc"]{color:red;}
    [title$="abc"]{color:red}
    [title*="abc"]{color:red}
    
    
</style>

```



#### 伪类选择器

> 不存在的类,来描述一个元素的特殊状态
>
> 伪类一般情况下以":"开头



```html
<style>
	<!-- 
    伪类一般情况下使用":"开头 排序位置是按照所有元素来排列的
    :first-child 第一个子元素
    :last-child  最后一个子元素
    :nth-child() 选中第n个子元素
    	特殊值: n  第n个,n的范围是从0到正无穷
    		   2n或even 选中偶数位的元素
    		   2n+1或odd  选中奇数位的元素 2n+1可以增高提高的值,例如2n+3
    排序位置是按照相同元素来排序的		   
    :first-of-type
    :last-of-type
    :nth-of-type()
    
    
    :not() 否定伪类 将符合条件的元素去除 
    
    
    
    -->
    
    ul>li:first-child{color:red;}  <!-- 不起作用 ul的第一个子元素是span  -->
    ul>li:not(:nth-child(3)){color:red;}
    ul>li:not(:nth-of-type(4)){color:red;}
    
</style>
.......
<div>
    <ul>
        <span>这是一个行内元素</span> <!-- ul中只能包含li标签,这么写不合规范 -->
        <li>这是一个块</li>
        <li>这是一个块</li>
        <li>这是一个块</li>
        <li>这是一个块</li>
        <li>这是一个块</li>
    </ul>
</div>
```



#### 超链接伪类

```html
<style>
    a:visited{} <!-- 显示已访问过的,隐私原因,颜色可更改,字体大小不能更改 -->
    a:link{}    <!-- 正常的还未点击的链接 -->
    a:hover{}   <!-- 鼠标移动到链接上的状态 -->
    a:active{}  <!-- 表示鼠标点击 -->
    
    <!-- visited和link 两个伪类是<a>独有的,hover和active其他元素都可使用 -->
</style>

.....

<div>
    <a href="">链接内容</a>
</div>
```





#### 伪元素

表示页面中的一些特殊的并不真实存在的元素

格式是使用:: 开头

```html
<!-- 
::first-letter{}  首字母
::first-line{}    首行
::slection{}      选中的部分
::before{ content:}         元素的开始位置
::after{  content:}         元素的结束位置
	before和after必须结合content使用 其内容不能被选中因为是css产生的

-->


<style>
    div::before{content:"["}
    div::after{content:"]"}
</style>

```



##### [餐厅练习](https://flukeout.github.io/)

重要











##### 继承

* 介绍

> 样式的继承发生在祖先元素和后代元素之间,但并不是所有的祖先元素都会被继承.例如背景, 布局等就不会被继承.



* 如何判断:

  zeal软件离线文档,mdn



##### 选择器的权重

* 权重排序: 行内(内联)样式>id选择器>类和伪类选择器>元素选择器>通配选择器>继承样式
* 选择器权重相同,后定义覆盖先定义的; 
* 选择器写的越具体优先级越高; 通配符\(\*)没有优先级
* 在样式后加"**!important**",则该样式是最高优先级.但是不建议用



超链接的4个伪类的先后顺序





##### 像素和百分比

###### 长度单位(width,height):

* 像素
  * 不同屏幕的像素大小是不同的,像素越小的屏幕显示效果越清晰
  * 同样的100px在不同的设备下显示效果不一样
* 百分比
  * 将属性值设置为相对于父元素属性的百分比
  * 设备百分比可以使子元素跟随父元素的改变而改变

* em
  * 相对于元素字体大小来计算的
  * 1em=1font-size
* rem
  * 相对于根元素HTML字体大小来计算的
  * 可以理解为rootem



​	

##### 颜色

* 种类: 颜色单词,rgb,rgba,
* rgb
  * red,  green, blue
* rgba
  * 第四位表示不透明度. s半透明,a完全透明,l不透明
* 16进制
  * 范围00-FF  书写格式#AABBCC  按照rgb顺序
  * 两位相同可省略一位. #ABC
* HLS值 HLSA值  工业测试使用居多
  * 色相     0-360
  * 饱和度 0%-100%
  * 亮度     0%-100%



##### 文档流

> 介绍,网页是一个多层的结构,一层摞一层,用户只能看到第一层; 最底下的一层被称为文档流,文档流是网页的基础. 我们所创建的元素默认都是在文档流中排列. 
>
> 对我们来说,文档流有2个状态.在文档流中 脱离文档流



**元素在文档流中的特点**

###### 块元素

* 块元素会在网页中独占一行(自上向下垂直排列)
* 默认宽度是父元素宽度(会把父元素撑满)
* 默认高度是被内容撑开(子元素)

###### 行内元素

* 不会独占一行,只占自身大小
* 行内元素在页面中从左向右水平排列,如果一行不能容纳,则换到第二行继续自左向右排列(书写习惯)
* 行内元素默认宽度和高度都是被内容撑开





##### 盒子模型(box model)

> css将页面中所有元素都设置为一个矩形盒子
>
> 将元素设置成矩形的盒子后, 对页面的布局就变成了将不同的盒子摆放到不同的位置

###### 盒子的基本组成

* 内容区(content)
* 内边距(padding)
* 边框(border)
* 外边距(margin)

###### 内容区(content)

> 元素中所有的子元素和文本内容都在内容区中排列,内容区的大小由width和height两个属性来设置



###### 边框(border)

> 边框属于盒子边缘,边框里是盒子内部,边框外是盒子外部

设置边框, 至少需要3个样式:

​	border-width

​	border-color

​	border-style



**border-width**

* 默认值一般是3-4个像素,具体根据浏览器不同而有差异
* border-width:上 右 下 左(4个值根据顺时针方向分配)
* border-width: 上 右左 下(3个值, 中间值为左右数值)
* border-width: 上下 左右(2个值, 分别为上下和左右数值)
* border-width: 上右下左(1个值, 为上下左右数值)



除了border-width,还有border-xxx-width模式,分别为top, right, bottom, left 单独制定一个边框的宽度.同理,color和style也有.



**border-color**

* 指定边框颜色,规则和border-width一样.
* 可省略不写,默认值自动使用内容style中的color颜色. color可以理解为前景色,background-color为背景色



**border-style**

* 指定边框的样式

  border-style: solid

  border-style: dotted

  border-style: dashed(短横线)

  border-style: double



* 可分别指定4个边的样式,规则和width一样
* 默认值是none  其他两个不写没有问题,style不写则不显示



**border简写属性**

> 通过该属性可以设置边框所有样式,没有顺序要求

```html
border: 10px orange solid;
```



除了border简写属性以外还有4个属性:

* border-top,
* border-right,
* border-bottom,
* border-left



设置3个边框的写法:

```html
border:10px orange solid;
border-right:none;
```







###### 内边距(padding)

* 定义:内容区和边框之间的距离是内边距

* 有4个方向的内边距:

  * padding-top
  * padding-right
  * padding-bottom
  * padding-left

* 内边距的设置会影响盒子的大小

* 背景颜色会延伸到内边距上

* padding简写属性和border-width一样

  ```html
  <html>
      <head>
          <meta charset="utf-8">
          <title></title>
          <style>
              .box1{
                  width:100px;
                  height:100px;
                  background-color:orange;
                  border:10px red solid;
                  padding:100px;
              }
          	
              .box2{             <!-- 在盒子1中新建一个盒子2,高宽100%继承父元素都是100px,此时padding-top设置100px可见其颜色是父元素的背景色 -->
                  width:100%;
                  height:100%;
                  background-color:blue;
              }
          
          </style>
      </head>
      <body>
          <div class="box1">
              <div class="box2">
                  
              </div>
          </div>
      </body>
  </html>
  ```
  





######  外边距(margin)

* 外边距不会影响盒子的大小但是会影响盒子的位置
* 一共有4个方向的外边距:
  * margin-top: 正值(盒子向下移动) 负值(向上移动)
  * margin-right: 默认情况下,不会有任何移动
  * margin-bottom: 正值,下方元素向下移动; 负值,下方元素向上移动
  * margin-left: 正值(盒子向右移动) 负值(向左移动)
* 元素在页面中默认是按照自左向右排列的,如果设置左和上外边距,会移动元素自身;设置下和右外边距,会移动其他元素.
* margin的简写属性,可以设置4个方向的属性值. 和border-width类似.



##### 盒子模型-水平方向的布局(等式)

一般情况下,盒子的右边距一般没有



```html
一个元素在其父元素中,水平布局必须满足以下条件:

margin-left+border+padding-left+content+padding-right+border+margin-right=父元素content(必须成立)


如果相加结果使等式不成立,则称为过渡约束,则等式会自动调整
调整的情况:
1.7个值中没有auto,则浏览器会自动调整margin-right使等式成立(书写习惯从左向右)		
0+0+0+0+0+0+0=content

如果7个值中有3个值可以设置为auto:
width
margin-left
margin-right

	如果某个值为auto,则自动调整这个为auto的值以使等式成立
	(width的值默认是auto,zeal中可以查看其initial value)

	如果将宽度和一个外边距设置为auto,则宽度调整到最大,设置为auto的外边距则为0
	如果将3个值都设置为auto,则外边距都是0,宽度最大

	如果将2个外边距设置为auto,宽度固定,则会将外边距设置为相等的值.经常利用这一点来使一个元素在父元素中水平居中.


	如果子元素的width超过父元素的width,会自动调整margin-right为负值,以使等式成立.
```







##### 盒子模型-垂直方向的布局

默认情况下,父元素的高度由子元素内容撑开.

子元素是在父元素内容区排列,如果子元素宽高超过父元素宽高,子元素会从父元素中溢出



处理溢出,给父元素设置overflow:

```html
overflow:
visible(默认)
hidden(溢出隐藏)
scroll(滚动条 例如浏览全部文本内容)
auto(根据需要设置横向或者纵向的滚动条)

overflow-x 处理水平方向溢出
overflow-y 处理纵向方向溢出

```





##### 盒子模型-外边距折叠(外边距塌陷)

默认情况下, 上. 左外边距会改变盒子的位置,下外边距会改变其他盒子的位置.

**垂直外边距的重叠(折叠)**

垂直相邻方向的外边距会发生重叠现象



**兄弟元素间的折叠** 会取两者之间较大的值(两者都是正值)

​	特殊情况: 1.一正一负, 取和

​                      2.一负一负,取绝对值最大的

​	兄弟元素之间外边距折叠,对开发是有利的,不需要进行处理

**父子元素间的折叠**

嵌套关系块元素的相邻外边距,子元素的margin-top也会传递给父元素 [案例都是固定宽高,父元素没有margin-top]

解决方法:

1. 父元素加padding-top,再从其高度值中减去这个值
2. 父元素加border
   1. border:1px solid 颜色(可以同父元素一致)
   2. 问题:子元素会超出父元素1px
   3. 解决:父元素高度减1px 子元素margin-top减1px
3. 视频课程没有讲到的
   1. 父元素设置overflow
   2. 父元素设置浮动
   3. 子元素设置浮动





##### 行内元素的盒模型

行内元素不支持设置宽度,高度

* 可设置padding,但垂直方向的padding不会影响页面布局(不会挤掉位置 可以盖住 案例中是相邻的块元素没有移动位置,即使span的padding区域已经覆盖到它)

* 可设置border,但垂直方向的border不会影响页面布局

* 可设置margin,但垂直方向的margin不会影响页面布局[<font color="red">水平方向相邻的行内元素,margin的外边距是取两个值之和</font>]

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        body .span {
            background: yellow;
            padding:50px;                /* 这里的不影响页面布局  可以理解为其他元素盒子位置不会变化  例如案例中的div */
            /* border:50px solid;
            margin:50px; */
        }
        
        

        .box1 {
            width: 200px;
            height: 200px;
            background: #bfc;
        }
    </style>
</head>

<body>

    <span class="span">span1</span>
    <span>span1</span>
    <span>span1</span>
    <div class="box1"></div>

</body>

</html>
```







行内元素如何设置宽高(使用display属性转换成块元素)

行内元素,行内块元素,块元素相互转换

```html
display:
block 转换成块元素
inline 行内元素
inline-block 行内块元素
table 表格
none 元素隐藏 不再页面中显示

属性扩充:
visibility:
visible 默认值,元素正常显示
hidden 元素在页面中隐藏,但依然占位置
```



##### 浏览器默认样式

* 定义: 浏览器为元素设置默认样式,会影响页面布局,通常需要去除

* 去除方式:

  * 通配符去除(工作中不适用,一般用作小练习)

    ```html
    *{
    	margin:0;
    	padding:0;
    	list-style:none;
    }
    ```

  * 重置样式表-reset.css

    * 直接去除浏览器默认样式

    * 使用link链接  [reset模板](https://meyerweb.com/eric/tools/css/reset/)

    * ```html
      /* http://meyerweb.com/eric/tools/css/reset/ 
         v2.0 | 20110126
         License: none (public domain)
      */
      
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed, 
      figure, figcaption, footer, header, hgroup, 
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
      	margin: 0;
      	padding: 0;
      	border: 0;
      	font-size: 100%;
      	font: inherit;
      	vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article, aside, details, figcaption, figure, 
      footer, header, hgroup, menu, nav, section {
      	display: block;
      }
      body {
      	line-height: 1;
      }
      ol, ul {
      	list-style: none;
      }
      blockquote, q {
      	quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
      	content: '';
      	content: none;
      }
      table {
      	border-collapse: collapse;
      	border-spacing: 0;
      }
      ```

      

  * 重置样式表-normallize.css

    * 对默认样式进行统一设置, 没有去除

    * 使用link进行链接  [模板地址](https://necolas.github.io/normalize.css/8.0.1/normalize.css)

    * ```html
      /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
      
      /* Document
         ========================================================================== */
      
      /**
       * 1. Correct the line height in all browsers.
       * 2. Prevent adjustments of font size after orientation changes in iOS.
       */
      
      html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
      }
      
      /* Sections
         ========================================================================== */
      
      /**
       * Remove the margin in all browsers.
       */
      
      body {
        margin: 0;
      }
      
      /**
       * Render the `main` element consistently in IE.
       */
      
      main {
        display: block;
      }
      
      /**
       * Correct the font size and margin on `h1` elements within `section` and
       * `article` contexts in Chrome, Firefox, and Safari.
       */
      
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      
      /* Grouping content
         ========================================================================== */
      
      /**
       * 1. Add the correct box sizing in Firefox.
       * 2. Show the overflow in Edge and IE.
       */
      
      hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
      }
      
      /**
       * 1. Correct the inheritance and scaling of font size in all browsers.
       * 2. Correct the odd `em` font sizing in all browsers.
       */
      
      pre {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
      }
      
      /* Text-level semantics
         ========================================================================== */
      
      /**
       * Remove the gray background on active links in IE 10.
       */
      
      a {
        background-color: transparent;
      }
      
      /**
       * 1. Remove the bottom border in Chrome 57-
       * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
       */
      
      abbr[title] {
        border-bottom: none; /* 1 */
        text-decoration: underline; /* 2 */
        text-decoration: underline dotted; /* 2 */
      }
      
      /**
       * Add the correct font weight in Chrome, Edge, and Safari.
       */
      
      b,
      strong {
        font-weight: bolder;
      }
      
      /**
       * 1. Correct the inheritance and scaling of font size in all browsers.
       * 2. Correct the odd `em` font sizing in all browsers.
       */
      
      code,
      kbd,
      samp {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
      }
      
      /**
       * Add the correct font size in all browsers.
       */
      
      small {
        font-size: 80%;
      }
      
      /**
       * Prevent `sub` and `sup` elements from affecting the line height in
       * all browsers.
       */
      
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }
      
      sub {
        bottom: -0.25em;
      }
      
      sup {
        top: -0.5em;
      }
      
      /* Embedded content
         ========================================================================== */
      
      /**
       * Remove the border on images inside links in IE 10.
       */
      
      img {
        border-style: none;
      }
      
      /* Forms
         ========================================================================== */
      
      /**
       * 1. Change the font styles in all browsers.
       * 2. Remove the margin in Firefox and Safari.
       */
      
      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
      }
      
      /**
       * Show the overflow in IE.
       * 1. Show the overflow in Edge.
       */
      
      button,
      input { /* 1 */
        overflow: visible;
      }
      
      /**
       * Remove the inheritance of text transform in Edge, Firefox, and IE.
       * 1. Remove the inheritance of text transform in Firefox.
       */
      
      button,
      select { /* 1 */
        text-transform: none;
      }
      
      /**
       * Correct the inability to style clickable types in iOS and Safari.
       */
      
      button,
      [type="button"],
      [type="reset"],
      [type="submit"] {
        -webkit-appearance: button;
      }
      
      /**
       * Remove the inner border and padding in Firefox.
       */
      
      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }
      
      /**
       * Restore the focus styles unset by the previous rule.
       */
      
      button:-moz-focusring,
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
      }
      
      /**
       * Correct the padding in Firefox.
       */
      
      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }
      
      /**
       * 1. Correct the text wrapping in Edge and IE.
       * 2. Correct the color inheritance from `fieldset` elements in IE.
       * 3. Remove the padding so developers are not caught out when they zero out
       *    `fieldset` elements in all browsers.
       */
      
      legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
      }
      
      /**
       * Add the correct vertical alignment in Chrome, Firefox, and Opera.
       */
      
      progress {
        vertical-align: baseline;
      }
      
      /**
       * Remove the default vertical scrollbar in IE 10+.
       */
      
      textarea {
        overflow: auto;
      }
      
      /**
       * 1. Add the correct box sizing in IE 10.
       * 2. Remove the padding in IE 10.
       */
      
      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
      }
      
      /**
       * Correct the cursor style of increment and decrement buttons in Chrome.
       */
      
      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        height: auto;
      }
      
      /**
       * 1. Correct the odd appearance in Chrome and Safari.
       * 2. Correct the outline style in Safari.
       */
      
      [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
      }
      
      /**
       * Remove the inner padding in Chrome and Safari on macOS.
       */
      
      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      
      /**
       * 1. Correct the inability to style clickable types in iOS and Safari.
       * 2. Change font properties to `inherit` in Safari.
       */
      
      ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
      }
      
      /* Interactive
         ========================================================================== */
      
      /*
       * Add the correct display in Edge, IE 10+, and Firefox.
       */
      
      details {
        display: block;
      }
      
      /*
       * Add the correct display in all browsers.
       */
      
      summary {
        display: list-item;
      }
      
      /* Misc
         ========================================================================== */
      
      /**
       * Add the correct display in IE 10+.
       */
      
      template {
        display: none;
      }
      
      /**
       * Add the correct display in IE 10.
       */
      
      [hidden] {
        display: none;
      }
      ```



##### 京东导航列表

注意事项: 使用外边距,最好用块元素来设置

图像或者文本之间有个默认距离,代码换行造成的

使用padding会造成元素大小改变的前提是当前元素的宽度是固定的,没有auto(宽度默认是auto)的情况下,等式无法成立,元素会溢出

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>京东侧边栏案例</title>
    <link rel="stylesheet" href="./css/reset.css">
    /*<link rel="stylesheet" href="./css/jd.css">*/
    <style>
        body{
            background: #f8f8f8;
        }

        .box{
            width:190px;
            height:470px;
            background:#fefefe;

            margin:100px auto 0;
            overflow:hidden;

        }

        .box1{
            margin:10px 0;
        }

        .list{
            height:25px;       /*开始用的是margin-top,文本内容溢出父元素*/
            line-height:25px;
            padding-left:17px;
        }

        .list:hover{
            background:#D9D9D9;
        }

        .list a{
            font-size:14px;
            color:#333;
            text-decoration: none;
        }

        .list a:hover{
            color:red;

        }
    </style>
</head>
<body>
    <nav class="box">
      <div class="box1">
        <div class="list">
            <a href="##">家用电器</a>
        </div>

        <div class="list">
            <a href="##">手机</a>    /*文本和斜杠之间有间距,这是代码换行造成的.可以将代码合并到一行上解决这个问题*/
            <span>/</span>
            <a href="##">运营商</a>
            <span>/</span>
            <a href="##">数码</a>
        </div>

        <div class="list">
            <a href="##">电脑</a>
            <span>/</span>
            <a href="##">办公</a>
        </div>

        <div class="list">
            <a href="##">家居</a>
            <span>/</span>
            <a href="##">家具</a>
            <span>/</span>
            <a href="##">家装</a>
            <span>/</span>
            <a href="##">厨具</a>
        </div>

        <div class="list">
            <a href="##">男装</a>
            <span>/</span>
            <a href="##">女装</a>
            <span>/</span>
            <a href="##">童装</a>
            <span>/</span>
            <a href="##">内衣</a>
        </div>

        <div class="list">
            <a href="##">美妆</a>
            <span>/</span>
            <a href="##">个护清洁</a>
            <span>/</span>
            <a href="##">宠物</a>
        </div>

        <div class="list">
            <a href="##">女鞋</a>
            <span>/</span>
            <a href="##">箱包</a>
            <span>/</span>
            <a href="##">钟表</a>
            <span>/</span>
            <a href="##">珠宝</a>
        </div>

        <div class="list">
            <a href="##">男鞋</a>
            <span>/</span>
            <a href="##">运动</a>
            <span>/</span>
            <a href="##">户外</a>
        </div>

        <div class="list">
            <a href="##">房产</a>
            <span>/</span>
            <a href="##">汽车</a>
            <span>/</span>
            <a href="##">汽车用品</a>
        </div>

        <div class="list">
            <a href="##">母婴</a>
            <span>/</span>
            <a href="##">玩具乐器</a>
        </div>

        <div class="list">
            <a href="##">食品</a>
            <span>/</span>
            <a href="##">酒类</a>
            <span>/</span>
            <a href="##">生鲜</a>
            <span>/</span>
            <a href="##">特产</a>
        </div>

        <div class="list">
            <a href="##">艺术</a>
            <span>/</span>
            <a href="##">礼品鲜花</a>
            <span>/</span>
            <a href="##">农资绿植</a>
        </div>

        <div class="list">
            <a href="##">医药保健</a>
            <span>/</span>
            <a href="##">计生情趣</a>
        </div>

        <div class="list">
            <a href="##">图书</a>
            <span>/</span>
            <a href="##">文娱</a>
            <span>/</span>
            <a href="##">教育</a>
            <span>/</span>
            <a href="##">电子书</a>
        </div>

        <div class="list">
            <a href="##">机票</a>
            <span>/</span>
            <a href="##">酒店</a>
            <span>/</span>
            <a href="##">旅游</a>
            <span>/</span>
            <a href="##">生活</a>
        </div>

        <div class="list">
            <a href="##">理财</a>
            <span>/</span>
            <a href="##">众筹</a>
            <span>/</span>
            <a href="##">白条</a>
            <span>/</span>
            <a href="##">保险</a>
        </div>

        <div class="list">
            <a href="##">安装</a>
            <span>/</span>
            <a href="##">维修</a>
            <span>/</span>
            <a href="##">清洗</a>
            <span>/</span>
            <a href="##">二手</a>
        </div>

        <div class="list">
            <a href="##">工业品</a>
        </div>
      </div>
    </nav>
    
</body>
</html>
```



##### 网易新闻图片列表

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>网易新闻列表</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/wangyi.css">
    <style>
    	
                body {
            background: #f8f8f8;
        }

        a {
            text-decoration: none;
            color: #404040;

        }

        .news_wrapper {
            width: 300px;
            height: 357px;
            /*原先是358 加边框1px后 总高度为维持不变减掉1px*/
            background: pink;
            margin: 100px auto 0;
            border-top: 1px solid #ddd;

        }

        .head_title {
            height: 41px;
            /* line-height:41px; */



        }

        .head_title a {
            display: inline-block;
            /*重要 没有转换显示模式前,边框在news_wrapper的外部*/
            border-top: 1px solid red;
            height: 41px;
            line-height: 41px;
            margin-top: -1px;
        }

        .head_img {
            height: 150px;
        }

        .head_img h3 {
            font-size: 16px;
            font-weight: 700;
            color: #fff;
            margin-top: -28px;
            margin-left: 38px;

        }

        .news_list {
            font-size: 14px;
            color: #666666;
            margin-top: 2px;
            overflow: hidden;

        }

        .news_list li {
            margin-top: 18px;
            padding-left: 14px;
            background: url(../img/list-img_24.png) no-repeat 3px center;
        }
        
    </style>
</head>

<body>
    <div class="news_wrapper">

        <h3 class="head_title">
            <a href="##">汽车精选</a>
        </h3>
        <div class="head_img">
            <a href="##">
                <img src="./img/汽车.webp" alt="5g汽车">
                <h3>瑞典试运行5G自动驾驶汽车</h3>
            </a>
        </div>


        <ul class="news_list">

            <li>
                <a href="##">心疼车主 近900万劳斯莱斯被大众车追尾</a>
            </li>


            <li>
                <a href="##">特斯拉跌幅收窄3%以内 Q3交付139300辆</a>
            </li>


            <li>
                <a href="##">奥迪中国总裁预测2030年中国豪华车总销量</a>
            </li>


            <li>
                <a href="##">
                    理想汽车:9月交付3504辆 3季度交付8660辆
                </a>
            </li>


        </ul>
    </div>
</body>

</html>
```



##### 盒子的大小

默认情况下,盒子可见框的大小默认由内容区,边框和内边距组成

* border-sizing: 用来设置盒子尺寸的计算方式

可选值:

content-box  默认值,宽度和高度用来设置内容区的大小

border-box  宽度和高度用来设置整个盒子可见框的大小.width和height指的是内容区,内边距和边框的大小



##### 轮廓和圆角,元素阴影效果

* **outline**: 设置元素的轮廓线,用法和border一样,和边框不同的是,轮廓不会影响可见框的大小. 
  * 同属性值下的border和outline,border会移动元素位置,outline不会

border-shadow 元素的阴影效果 不会影响页面的布局

**border-shadow:水平偏移量 垂直偏移量 模糊半径 阴影颜色**





* 圆角border-radius

设置圆角,设置圆角半径大小

4个单属性值:

border-top-left-radius: x方向的值 y方向的值

border-top-right-radius

border-bottom-right-radius

border-bottom-left-radius

1个复合属性值

border-raidus

可以分别指定4个角的圆角

border-radius:

左上 右上 右下 左下(4个值)

左上 右上/左下 右下(3个值)

左上/右下 右上/左下(2个值)



border-radius: x/y  指定4个角x轴水平方向的值和y轴垂直方向的值



使用border-radius设置成圆形

border-raidus:50%;

​	



#### 浮动

```html
float:none/left/right  none是默认值
```



* 简介:元素设置浮动后,会从文档流中脱离,不再占用文档流的位置.所以元素下边还在文档流中的元素会自动向上移动,通过浮动可以制作一些水平方向的布局.

* 特点

  * 完全脱离文档流
  * 设置浮动后,浮动元素会向父元素的左侧或者右侧移动
  * 浮动元素默认不会从父元素中移出
  * 浮动元素向左/向右移动,不会超过前边的其他浮动元素
  * 如果浮动元素上边是一个没有浮动的块元素,则浮动元素无法上移
  * 浮动元素不会超过它上边浮动的兄弟元素,最多就是一样高

  

  



##### 浮动的其他特点

* 浮动不会盖住文字,文字会自动环绕在浮动的周围
* 元素设置浮动后,会从文档流中脱离,元素的特点也会发生变化



脱文档流的特点:

* 块元素浮动
  * 块元素不会再独占一行
  * 脱离文档流后,块元素宽,高默认由内容撑开
* 行内元素
  * 脱离文档流后,特点块元素一样
* 脱离文档流后,不需要再区分块元素和行内元素





##### 浮动的问题(高度塌陷与开启BFC)

**高度塌陷**:

在浮动布局中,父元素的高度默认是由子元素撑开的.当子元素浮动后,其会完全脱离文档流,子元素从文档流脱离后,将会无法撑起父元素高度,导致父元素高度丢失.

父元素高度丢失后,其下方的元素会自动上移,导致页面布局混乱.



**BFC**

BFC(Block Formatting Content)块级格式化环境

开启BFC,该元素会变成一个独立布局,是一个css隐含属性



**BFC特点**:

* 开启BFC,元素不会被浮动元素覆盖(不一定非得是父元素,兄弟元素都可以)

* 开启BFC元素,子元素和父元素的外边距不重叠

* 开启BFC,元素可以包含浮动的子元素

  ```html
  <style>
      .box1{
          width:200px;
          height:200px;
          background:#bfc;
          float:left;
      }
      
      .box2{
          width:200px;
          height:200px;
          background:orange;
          overflow:hidden;  
          /*使box2开启BFC后,不会被box1这个浮动元素覆盖,会移动到其右边
            如果下方还有一个块级元素box3,是否会和box2一行?
            不会. box2还是块级元素.
          */
      }
  </style>
  ==================================================================================================
  <body>
      <div class="box1"></div>
      <div class="box2"></div>
  </body>
  ```

  







**如何开启BFC**

* 设置元素浮动(不推荐)
* 将元素设置为行内块元素(不推荐)
* 使用overflow,设置一个非visible的值.推荐hidden
* ......(其他若干种方式可通过[mdn](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)或者离线zeal查看)







##### clear属性

可以通过clear属性来清楚浮动元素对当前元素的影响

**可选值**

left 清楚左侧浮动元素对当前元素的影响

right 右侧

both 清楚两侧中最大影响的那侧



**原理:**

设置清楚浮动后,浏览器会自动为元素添加一个上外边距,以使其位置不受其他元素的影响(浏览器开发者工具中是不显示)



##### 使用after伪类解决高度塌陷

如果子元素浮动,父元素可以使用伪类after来解决高度塌陷问题

```html
fathertag::after{   /*复杂版的clearFix */
	content:"";
	display:block;
	clear:both;
}

```





##### clearFix

这个样式可以同时解决高度塌陷和外边距重叠的问题

```html
clearFix::before,
clearFix::after{
	content:"";
	display:block;
	clear:both;
}
```







#### 定位(position)

> 定位是一种更高级的布局手段,通过定位可以将元素摆放到页面的任何位置



```html
position可选值

static  默认静止 没有开启定位
relative 相对定位
absolute 绝对定位
fixed 固定定位
sticky  粘滞定位


========================================


position:relative
top:20px;
left:20px;
```



**偏移量(offset):**

* top  
* bottom   垂直方向的定位由top,bottom控制,通常只用一个
* right
* left           水平方向的定位由right,left控制,通常只用一个



##### **相对定位-特点:**

* 开启定位后,如果不设置偏移量,<font color="red">元素</font>不会发生变化[不仅仅是位置]
* 相对定位,是参照元素在文档流中的位置定位的
* 相对定位会提高元素的层级(使用偏移量后,可以覆盖文档流中原先下面的元素  原先位置是留空的)
* 相对定位不会使元素脱离文档流(下方元素不会向上移动)
* 相对定位不会改变元素的性质(块元素还是块元素)



##### **绝对定位-特点**

* 开启绝对定位后,如果不设置偏移量,元素的位置不会发生变化
* 开启绝对定位后,元素会从文档流中脱离(下方元素自动向上移动)
* 开启后,会改变元素的性质(块元素宽高被内容撑开   行内元素变成块元素)
* 绝对定位使元素提高一个层级(会覆盖文档流中原先下面的元素)
* 绝对定位是相对于其包含块定位的
  * 包含块(containing block) 正常情况下,包含块就是离当前元素最近的祖先块元素.
  * 绝对定位的包含块 离它最近的开启了定位的祖先元素.如果所有的祖先元素都没有开启定位,则根元素(HTML)就是它的包含块.
  * 默认起始点是浏览器的窗口位置(根据left,top,bottom,right的大小来定位)





##### 固定定位-特点

* 固定定位也是一种绝对定位
* 唯一不同的是,固定定位永远参照浏览器的视口进行定位
* 固定定位不会随着网页滚动而滚动



##### 粘滞定位-特点

* 和相对定位基本一样
* 可以在元素到达某个位置时固定





##### 绝对定位(73)

开启绝对定位后,水平方向的布局公式需要添加left和right两个值

> **left+margin-left+border-left+padding-left+content+padding-right+border-right+margin-left+right=父元素content**



当发生过度约束(等式不成立),

​	如果9个值中没有auto,自动调整right的值

​	如果9个值中有auto, 自动调整auto

可以设置auto值的元素:width margin left right

因为left,right的默认值是auto,如果不知道left,right的值,等式不满足时,会自动调整这两个值



垂直方向的布局

公式和上面的类似,left,right更换为bottom和top

绝对定位元素如何垂直居中

width固定  top:0 bottom:0 margin-top:auto; margin-bottom:auto;



元素水平垂直居中

```html
position:absolute;
margin:auto;


left:0;
right:0;
top:0;
bottom:0;
```





#### 元素的层级z-index

对开启了定位的元素,可以通过z-index属性指定元素层级

z-index需要一个整数,值越大层级越高越优先显示

层级一样,优先显示后面的元素

祖先元素层级再高,也不会盖住后代元素







#### 京东轮播图(不熟)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>京东轮播图</title>
    <link rel="stylesheet" href="./css/reset.css">
    <style>
        .box-list {
            width: 590px;
            height: 470px;
            margin: 100px auto 0;
            position: relative;     /*重要 */
        }


        .box-list li {
            position: absolute;
        }

        .pointer {
            position: absolute;   /*绝对定位后, 并提高层级*/
            z-index: 999;      
            bottom: 20px;
            left: 40px;
        }

        .box-list .pointer a {
            float: left;           /*设置浮动后,可以取消display属性. 行内元素浮动之后可以设置宽高*/
            /* display:block; */
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.6);
            background-clip: content-box;   /* */
            margin-left: 4px;
            border-radius: 50%;          /*方形变圆形*/
            border: 2px solid transparent;  
            background-clip: content-box;  /*背景色如果不使用这个属性,当边框使用transparent后,会显示出来.使用后,背景色只是在内容区才显示*/

        }

        .pointer a:hover {
            background: #fff;
            /* border:1px solid rgba(255,255,255,0.8) */
            border: 2px solid rgba(255, 0, 0, 0.6);
            /* outline:2px solid  rgba(255,0,0,0.6);
            box-shadow:0 0 2px red; */
        }
    </style>
</head>

<body>

    <ul class="box-list">
        <li><a href="##"><img src="./img/jd/1.webp"></a></li>
        <li><a href="##"><img src="./img/jd/2.webp"></a></li>
        <li><a href="##"><img src="./img/jd/7.webp"></a></li>
        <li><a href="##"><img src="./img/jd/4.webp"></a></li>
        <li><a href="##"><img src="./img/jd/5.webp"></a></li>
        <li><a href="##"><img src="./img/jd/6.jpg"></a></li>
        <li><a href="##"><img src="./img/jd/3.webp"></a></li>
        
        <div class="pointer">
            <a href="##"></a>
            <a href="##"></a>
            <a href="##"></a>
            <a href="##"></a>
            <a href="##"></a>
            <a href="##"></a>
            <a href="##"></a>
        </div>
    </ul>


</body>

</html>
```





#### 字体

* 字体相关样式:
  * color 字体颜色(前景色)
  * font-size 字体大小
    * 单位: em 相当于当前元素的一个font-size; rem相当于根元素的一个font-size
  * font-family 字体格式   更多字体类型请看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)(ctrl+左键访问)
  * 字体格式分类(指示字体类别,浏览器会自动使用该类别下的字体,可同时指定多个字体类,使用逗号分隔,字体生效优先使用第一个,按顺序)
    * serif   衬线字体     例如l,衬线字体就是多了个头,多了个脚
    * sans-serif 非衬线字体   衬线字体的反面,没有多余部分
    * monospace  等宽字体   字体宽度相等
    * .......
* **@font-face**
  * 可以将服务器中的字体直接提供给用户使用
  * 格式 `@font-face{font-family:字体名称; src:url(地址)}`
  * 问题: 加载问题;版权问题;格式问题(避免客户端没有相关字体,需要提供多种字体,繁琐);





#### 图标字体(iconfont)

> 图标设置为字体,使用@font-face引用字体,通过使用字体形式来使用图标



图标字体网站推荐-**font awesome** (建议使用英文网站,更新快于中文网站)

**使用步骤**:

1.下载

2.解压

3.将css,webfonts两个文件夹复制到项目中

4.引入    将all.css引入到网页中(link)

5.使用(**问题**,如何通过@font-face引入)

​	5.1 直接通过类名使用(优点:可以改变大小,颜色, 使用字体属性)

```html
使用link引入

class="fas/fab 相应图标名称"    /*fas和fab是2种免费的种类前缀 */

<i class="fas fa-stroopwafel"></i>
<span class="fas fa-stroopwafel"></span>
```

​	5.2 使用通过伪元素使用图标字体

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./qianduan/css/reset.css">
    <link rel="stylesheet" href="./qianduan/fonts/css/all.css">   /* 引入图标字体*/
    <style>
        ul {
            width: 200px;
            margin: 100px auto 0;
        }

        li::before {
            content: '\f0ac';
            font-family: "Font Awesome 5 Free";
            /* font-family: 'Font Awesome 5 Brands'; */
            font-weight: 900;
        }
    </style>

</head>

<body>
    <i class="fas fa-home fa-fw" style="font-size:40px;color:red; "></i>
    <ul>
        <li>锄禾日当午1</li>
        <li>锄禾日当午2</li>
        <li>锄禾日当午3</li>
        <li>锄禾日当午4</li>
        <li>锄禾日当午5</li>
    </ul>
</body>

</html>
```





#### 使用阿里图标字体



```html
类名统一使用iconfont

```





#### 行高

> 行高line-height,文字占有的实际高度.



* 可以通过line-height设置行高  
* 行高可以指定一个大小(px,em)
* 行高可以指定一个整数(当前字体的倍数)
* 行高经常用来设置文字的行间距
* 行间距=行高-字体大小



**字体框**

字体框就是字体存在的格子,设置font-size实际上就是设置字体框的高度.

行高会在字体框上下平均分配



单行文本在元素中垂直居中:line-height=height





#### 字体

```html
字体简写属性:
font:italic bold font-size/line-height font-family
font:font-size font-family  /*字体风格 加粗 行高可省略不写,采用默认值.但是最少有字号和字体族两种 */
```





#### 文本水平和垂直对齐

* 水平对齐text-align

  * text-align可选值
    * left 默认值
    * right
    * center
    * justify  两端对齐

* 元素的垂直对齐vertical-align 

  * 可选值
    * baseline 默认值 基线对齐
    * top 顶部
    * bottom 底部
    * middle 居中对齐(实际并不是严格居中)

* 图片留白问题

  * > 图片的最下边和父元素之间有一条缝隙.
    >
    > 因为图片的最下边是它的基线

  * 解决: 给图片设置垂直对齐的方式

  * > vertical-align:bottom/middle  都可以



#### 文本其他样式

**文本修饰线text-decoration**

* 可选值
  * none     默认值 无效果
  * underline   下划线
  * line-through  删除线(中划线)
  * overline  上划线
* 新属性 IE浏览器支持不友好



**文本省略号**

* 省略号效果(固定宽度下)

  * ```html
    white-space:nowrap;     
    overflow:hidden;
    text-overflow:ellipsis;
    ```

  

  

**white-space 设置网页如何处理空白**

* 可选值:
  * normal 正常
  * nowrap 不换行
  * pre  保留空白







#### 京东顶部导航条



#### 背景





**background-position 图片的位置**

可选值(水平+垂直):

* 方位词: center top left right bottom
  * 需要同时指定2个方位词.如果只写1个,则默认第二个相同
* 数值或者百分数
  * 





**background-clip 设置背景的范围**

可选值:

* border-box   默认值 背景会出现在边框下
* padding-box 背景不会出现在边框下,只会出现在内容区和内边距内
* content-box  背景只会出现在内容区





**background-origin 背景图片偏移量的计算原点**

可选值:

* padding-box 默认值  background-position从内边距开始计算
* content-box 从内容区开始计算
* border-box  从边框开始计算



**background-size背景图片的尺寸**

可选值:

* cover 图片比例不变铺满元素| contain 图片比例不变 在元素内完整显示
* width height
  * 100% 100%  (图片比例会发生变化)
  * 100% auto 
  * 1个值就是2个都是一样的



**background-attachment 背景图片是否跟随元素移动**

可选值:

* fixed 固定
* scroll 滚动 默认值



**background简写属性**

<span style="background-color:pink">**background:color image repeat position size origin clip attachment**</span>

* size要在position之后,使用斜杠隔开
* origin要在clip之前



