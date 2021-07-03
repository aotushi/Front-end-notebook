## html

> 结构、表现、行为

###  0.简介

### 1.基本标签

#### 1.1 标签的种类

* 单标签(自结束标签)
* 双标签(有开始有结束)

#### 1.2 标签的关系

* 嵌套关系(包含关系,祖先和后代的关系)
* 并列关系(同级关系,兄弟之间的关系)

### 2.常用标签

```html
<!DOCTYPE html>   <!-- 文档声明类型 -->
<html> <!-- 网页的根标签 -->
    <head> <!-- 头部标签，关于网页的配置信息 -->
        <meta charset='utf-8'>  <!-- 编码设置 -->
        <meta name="description" content="">
        <meta name="keywords" content="">
        <title></title> <!-- 标题标签 出现位置在浏览器选项卡窗口中，是重要的SEO标签 -->
    </head>
    <body>  <!-- 主体标签 所有显示的内容都被包含 -->
        <h1></h1> <!--标题标签，从1-6级标题-->
        <p></p>   <!-- 段落标签 -->
        <br>      <!-- 换行标签 -->
        <hr>      <!-- 水平线标签 -->
        <font></font>  <!-- 文本标签 -->
        <img src="" width=**px height=**px  title="鼠标悬停文字" alt="图片无法显示说明文字">
    </body>
</html>
```



\<br/>换行符标签的高度由什么决定?

通过line-height来控制. 或转换成div设置高度

p标签里的br需要两个才起作用.:一个换行,一个高度

父元素font-size设置为0后,换行符高度也为0;

















#####  在SEO中的发挥作用的标签

> SEO, Search Engine Optimization搜索引擎优化

* title
* meta description
* 图片alt描述
* 锚文本

> meta keywords， 关键词标签对SEO作用微乎其微





### 3.体育新闻

### 4.图片标签

``` html
<img src="" width="" height="" title="" alt="" border=“”>
```

* 宽度和高度，单独设置一项，另一项会自动缩放
* title (**提示文本**) 是鼠标悬停图片上时显示的文字
* alt (**替换文本**) 是图片无法显示时的说明文字，对SEO友好
* border是图片的边框，单位是px

### 5.路径

>  含义：网页和其他文件的位置关系



#### 5.1 相对路径

> 含义：相对于某个基准目录的位置

1. 同级相对路径 
   * 含义：网页和其他文件处于同一个目录下
   * 写法：
     * 直接写目标文件名称
     * 可以写" ./文件名称 "  (./ 表示当前目录)
2. 下一级相对路径
   * 含义：其他文件在下一级的目录中(鼠标双击动作)
   * 写法：
     * 目录名称/……/目录名称/目标文件
       * 示例：`<img src=a/a1/target.jpg>`
3. 上一级相对路径
   * 含义：网页在上一级目录下，有几层就写几个`../`(鼠标单击返回动作)
   * 示例：`<img src="../../target.jpg">`





#### 5.2 绝对路径

>  含义：某个文件或目录在硬盘上真正的位置



### 6. 超链接

\<a>标签

* 属性：**href|target(_self _blank)|**
* 超链接大小由内容决定

背景色(bgcolor)/背景图(background)

* 不占用位置
* 排列方式：平铺和裁剪(相对于浏览器窗口来说，图片小则平铺，图片大则裁剪)

**img标签与背景图的区别**

* 标签与属性
* img是标签,标签是占位置，背景图是属性,属性是不占位置
* 背景图图片的尺寸与标签的尺寸无关

#### 6.1 锚点链接&空连接.

#### **空连接**

格式:

```html
<a href="##"></a>
```

注意：使用一个#号，返回当前页面的顶部，通常写2个

#### 锚点链接

格式(没有先后要求)：

```html
<标签 id="属性值(id值)">内容</标签>
…………
…………
…………
<a href="#id">链接内容</a>
```

如何工作：

​	从\<a>标签处跳转到带有id属性的标签处



### 7.列表list

#### 7.1列表的种类(\<li>的符号不占位置)

**1.无序列表**

格式：

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

特点：

* 无序
* 被\<ul>管理
* \<ul>只能包含\<li>
* \<li>可包含其他标签

**2.有序列表**

格式:

```html
<ol>
    <li></li>
    <li></li>
    <li></li>
</ol>
```

特点：
* 有序
* 被\<ol>管理
* \<ol>中只能包含\<li>
* \<li>中可以包含其他标签

**3.自定义列表**

格式

```html
<dl>
    <dt>主题内容</dt>
    <dd>列表项1</dd>
    <dd>列表项2</dd>
    <dd>列表项3</dd>
</dl>
```

特点
* 列表项围绕主题
* dl管理dt，dd
* dl只能包含dd，dd标签可以包含其他标签



### 8.表格table

格式

```html
<table width="220" height="220" align="center" border="1" cellspacing="0">
<!--
align 文本水平位置 默认left，有right、center、left3个值
border是边框，数值代表边框宽度
cellspacing 单元格间间距，数值为0，则table单元格宽度是2个border值
-->
    <caption>表格主题内容</caption>
    <tr>                <!--行标签 -->
    	<th>行标题</th>  <!--行标题 默认在单元格中加粗居中 -->
        <th>行标题</th>
        <th>行标题</th>
        <th>行标题</th>
    </tr>
     <tr>
    	<td>单元格</td>  <!-- 单元格 -->
        <td collspan="2" align="center">单元格</td>
        <td>单元格</td>
        <!-- <td>单元格</td>-->
    </tr>
    
    <!--
		跨列合并 colspan 横向合并
		跨行合并 rowspan 竖向合并

	-->
    
    
    <tr>
    	<td>单元格</td>
        <td>单元格</td>
        <td>单元格</td>
        <td>单元格</td>
    </tr>
    <tr>
    	<td>单元格</td>
        <td>单元格</td>
        <td>单元格</td>
        <td>单元格</td>
    </tr>
</table>
```



### 9.表单input

#### 9.1含义

> 目的是用来获取用户的信息

格式：

```html
<input type="" >
```

示例：

```html
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <label for="txt">姓名:</label>  <!-- label for属性 和表单的id属性关联 实现焦点获取 就是鼠标点击文字也可以选中输入框 -->
		<input type="text"  id="txt"/> 
		<br>
		<br>
		<label for="pwd">密码:</label>
		<input type="text"  id="pwd"/>
		<br>
		<br>
        
        <!--	
			input中的type属性有：
							text输入框，
							password密码，
							radio单选按钮(name checked搭配使用)， 圆形
							checkbox多选框(checked搭配使用)      方形

			input中的name属性，name是组的概念，将多个单选的name属性设置相同的属性值，实现单选效果
			input中的checked属性是默认选中，有3种书写方式
			checked;
			checked="";
			checked="checked";

			

			select 下拉菜单
				标签
				option下拉项 属性selected 和checked一样，有3种书写方式
				optgroup 下拉组 使用label属性来表明组标题
				
			


		-->
		
		
		性别：
		<input type="radio" id="man" name="xingbie" />
		<label for="man">男</label>
		<input type="radio" id="woman" name="xingbie" checked="checked" />
		<label for="woman">女</label>
		<input type="radio"  id="third"  name="xingbie"/>
		<label for="third" >第三性</label>
		
		<br>
		<br>
		
		学历：
		<input type="radio" name="xl" id="senior"  />
		<label for="senior">高中</label>
		
		<input type="radio" name="xl" id="junior" checked="checked"  />
		<label for="junior">初中</label>
		
		<input type="radio" name="xl" id="small"  />
		<label for="small">小学</label>
		
		<br>
		<br>
		
		您的兴趣爱好:
		
		<input type="checkbox" name="" id="smoke"  />
		<label for="smoke">抽烟</label>
		
		<input type="checkbox" name="" id="drink"  checked="checked" />
		<label for="drink">喝酒</label>
		
		<input type="checkbox" name="" id="hair"  />
		<label for="hair">烫头</label>
		
		<br>
		<br>
		
		您的国籍是：
		<select >
			<option>中国</option>
			<option >德国</option>
			<option >英国</option>
			<option >美国</option>
			<option >尼日利亚</option>
		</select>
		
		<br>
		<br>
		
		
		您的国籍是：
		<select>
			<optgroup label="国家1">
				<option>中国</option>
				<option >德国</option>
				<option >英国</option>
				<option >美国</option>
				<option >日本</option>
				
			</optgroup>
			
			<optgroup label="国家2">
				<option>中国</option>
				<option >德国</option>
				<option >英国</option>
				<option >美国</option>
				<option selected="selected" >日本</option>
				
			</optgroup>
			
			
		</select>
    </body>
</html>
```



#### 9.2 label

> 表示用户界面中某个元素的说明

```HTML
<div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese">
</div>

1.将一个<label>标签和一个<input>元素匹配在一起,需要给<input>一个id属性,<label>需要一个for属性,其值和<input>的id值一样.
    
2.也可以将input直接放在label里,此时不需要for和id属性,因为关联已隐含存在    
```



  

#### 文本域

```
<textarea>  <!--没有css辅助  文本框大小不可控-->
文本内容
</textarea>
```



#### 9.3 提交按钮input

3种按钮格式：

```html
<input type="button" value="按钮文字">
<input type="submit" value="提交按钮文字">
<input type="reset"  value="重置按钮文字">
```

button按钮形式：

```html
<button type="button"> <!-- submit reset  submit是默认值  -->
    按钮文字
</button>
```



### 10. 提交表单form

格式：

```html
<form action="提交地址" method=“post">  
                         提交内容        
</form>
```

标签form

* 属性：action 提交地址； method提交方式(get/post)







### 11. 常用标签

```html
标签语义:大部分标签都有一定的语义，其作用是给搜索引擎抓取用的

左侧的标签仅有显示效果，右侧的标签不但有效果，更强调语义

<b>加粗</b>   <strong>加粗</strong>
<i>倾斜</i>   <em>倾斜</em>
<u>下划线</u>  <ins>下划线</ins>
<s>删除线</s>  <del>删除线</del>
```





### 12. 特殊字符(字符实体)

注意：实体名称对大小写敏感

[更多w3school实体标签](https://www.w3school.com.cn/html/html_entities.asp)

| 显示结果 |  描述  | 实体名称 |
| :------: | :----: | :------: |
|    <     | 小于号 |  \&lt;   |
|    >     | 大于号 |  \&gt;   |
|   空格   |  空格  |  \&nbsp  |





## CSS

### 零. 介绍

```js
https://developer.mozilla.org/zh-CN/docs/Web/CSS
```





### 一. 位置：

head标签中的script

### 二. css样式：

**标签选择器**



### 三. css中的颜色

#### 1. 颜色4种表现方式

##### 关键词



**rgb**

文档: [CSS Color Module Level 4 (csswg.org)](https://drafts.csswg.org/css-color/#rgb-functions)

```css
//语法
rgb() = rgb( <percentage>{3} [ / <alpha-value> ]? ) | rgb( <number>{3} [ / <alpha-value> ]? )
<alpha-value> = <number> | <percentage>
```





**rgba**



**16进制**





#### 2.盒子的3种基本属性

width height background背景色

* 盒子：在网页中，每个标签都是由一个矩形的图形展示的，所以我们认为网页是由一个个盒子组成的。
* 盒子指的是html标签
* div是一个没有语义的盒子



#### 3.颜色介绍

**互补色**: 色环是我们认识颜色关系的好工具。它是一个近色相邻、异色相离的圆环。 当两个颜色恰好在色环的两端时，这两个颜色就互为补色。 两个互为补色的颜色会在混合后变成灰色。 然而，补色搭配能形成强烈的视觉对比效果。

```html
红色（#FF0000）和蓝绿色 (#00FFFF)
绿色（#00FF00）和品红色（#FF00FF）
蓝色（#0000FF）和黄色（#FFFF00）
```



**三原色**

电脑显示器和各类屏幕都是基于颜色叠加的模型：将红（R）、绿（G）、蓝（B）三原色的色光以不同的比例相加，就可以产生各种色彩光。 这在现代色彩理论中叫作三原色光模式（RGB Color Model）。 红色（R）、绿色（G）和蓝色（B）叫作三原色。 如果把两种原色相加，就可以产生二次色：蓝绿（G+B）、品红（R+B）和黄色（R+G）



**三次色**

三次色是由原色和二次色相加产生的颜色， 例如，在 RGB 颜色模型中，红色（原色）和黄色（二次色）相加产生橙色（三次色）。 将这六种颜色中相邻的颜色相加，便产生了十二色色环。

设计里面有很多种颜色搭配方法。 涉及到三次色的一种配色方法是分裂补色搭配法。 选定主色之后，在色环上选择与它的补色相邻的两种颜色与之搭配。 此种搭配既有对比，又不失和谐。

```html
橙色	#FF7F00
蓝绿色	#00FFFF
树莓红	#FF007F
```



#### 4.调整颜色的色相

颜色具有多种特性，包括色相、饱和度和亮度。 CSS3 引入了 `hsl()` 做为颜色的描述方式。

**色相**是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。 以颜色光谱为例，光谱左边从红色开始，移动到中间的绿色，一直到右边的蓝色，色相值就是沿着这条线的取值。 在 `hsl()` 里面，色相用色环来代替光谱，色相值就是色环里面的颜色对应的从 0 到 360 度的角度值。

**饱和度**是指色彩的纯度，也就是**颜色里灰色的占比**。 饱和度越高则灰色占比越少，色彩也就越纯；反之则完全是灰色。 饱和度的取值范围是表示灰色所占百分比的 0 至 100。

**亮度**决定颜色的明暗程度，也就是颜色里白色或者黑色的占比。 其中，100% 的亮度表示纯白色， 0% 的亮度则表示纯黑色；而 50% 的亮度就表示在色相中选取的颜色。

```html
颜色	HSL
红	hsl(0, 100%, 50%)
黄	hsl(60, 100%, 50%)
绿	hsl(120, 100%, 50%)
蓝绿	hsl(180, 100%, 50%)
蓝	hsl(240, 100%, 50%)
品红	hsl(300, 100%, 50%)
```





### 四. 元素的显示模式

按[新的 HTML 规范](https://www.zhihu.com/question/34952563/answer/60672228)，已经不按 inline 和 block 来区分元素类型了.

待补充...

#### 1. 块级元素

* 特点：可以设置宽高；独占一行；没有设置宽度时，会继承父元素的width。
* 块元素：**div h1-h6 p hr ol ul li dl dd dt form **

#### 2. 行内元素

* 特点: 无法设置宽高,转换成块元素或行内块元素宽高可起作用. ; 一行可有多个行内元素;  盒子间有1个或多个空格,会出现一个默认等宽的间距 (宽高默认由图片的原始大小决定; 基线对齐).  

* `span` 等行内元素是可以设置内边距 `padding` 的，只不过元素本身无法把父元素撑开，看上去就是设置的 `padding` 上下边距不起效了，而 `margin` 就只能设置 `span` 的左右边距。

  如果要给 `span` 设置边距，一般的方法就是给它设置一个 `display: inline-block;` ，把它变成行内块级元素就可以了

* 行内元素: **a b del  em i  ins span  strong s u  **

```css
多个span元素转换为inline-block后,会有一个左右间距. 可以span不换行解决这个问题.或者通过父元素添加font-size:0;
span等行内元素是可以设置内边距 padding 的，只不过元素本身无法把父元素撑开，看上去就是设置的 padding 上下边距不起效了，而 margin 就只能设置 span 的左右边距。

如果要给 span 设置边距，一般的方法就是给它设置一个 display: inline-block; ，把它变成行内块级元素就可以了

```



#### 3. 行内块

* 特点: 可以设置宽高; 一行可有多个行内块元素;  盒子间有1个或多个空格,会出现一个默认等宽的间距; (宽高默认由图片的原始大小决定;)

* 行内块元素: **img  input等**

#### 4.显示模式的转换

1.其他模式元素转换为行内块元素

​		display: inline-block

2.其他模式元素转换为块元素

​		display: block



### 五. 案例问题

#### 1.两个行内块元素无法对齐

```html
网址出处:https://www.cnblogs.com/qfly/p/8085125.html
例如,两个转换为行内块的span,一个有文字,一个没有文字,在网页中发现两个盒子无法对齐.

原因:文本基线不一致的原因.没有文字的span的基线已经变成了底部的margin底边缘,后面盒子有文字,所以该盒子的基线就是文字的基线,二值基线对齐形成这个效果.

可以通过改变对齐方式来解决vertical-align:middle;
```



#### 2.行内块元素overflow:hidden带来的塌陷问题

```js
https://stackoverflow.com/questions/32078950/why-baseline-of-inline-block-element-with-overflowhidden-is-set-to-its-bott#

https://blog.csdn.net/w390058785/article/details/80567583

https://www.cnblogs.com/wgwyanfs/p/6985261.html

https://www.cnblogs.com/AliceX-J/p/5731755.html
```



因为实现隐藏功能的时候，隐藏部分的内容的vertical-align变成了baseline;对齐了，这样也导致行内块元素高度被撑高了。而后续的行内块元素跟行内元素，是接在了隐藏部分的vertical-align的高度上了。只要改回后续行内块元素跟行内元素的vertical-align值就可以了。

解决方法:

1.重新设置所有行内元素的对齐方式为vertical-align:top或者bottom; (vertical-align属性针对行内元素和表格属性元素使用,在块元素中不起作用)

2.设置所有行内元素的overflow不为visible

3.设置flex布局

失败版本:

```js
https://codepen.io/westover/pen/ExWLpqM
```



#### 3. 行内块和行内元素横向布局的问题

* 说明: 为什么不用行内块元素横向布局代替浮动

* **行内块元素横向布局的问题:**    由于行内块元素是和文本的基线对齐,也可以说是底对齐. 给行内块元素设置<font color="red">**垂直方向**</font>的内外边距时会影响周围的元素.[从案例上来看,就是content区域已经无法底部对齐  对齐的是它的border(实际上是padding或者margin和另外的行内块元素的border或者说是内容区域对齐)]





* **行内元素横向布局的问题**:     由于行内元素是包裹文本的,文本在每行是沿着基线对齐,此时行内元素垂直方向的内外边距是不起作用的.

  `span` 等行内元素是可以设置内边距 `padding` 的，只不过元素本身无法把父元素撑开，看上去就是设置的 `padding` 上下边距不起效了，而 `margin` 就只能设置 `span` 的左右边距。

  如果要给 `span` 设置边距，一般的方法就是给它设置一个 `display: inline-block;` ，把它变成行内块级元素就可以了

![](https://www.w3h5.com/zb_users/upload/2019/04/201904141555172075784072.png)

















#### 在页面上隐藏元素的方法

```Markdown
#  占位
visibility:hidden;
marign-left:-100%;
opacity:0;
transform: scale(0);


# 不占位
display:none;
width:0;height:0;overflow:hidden;

# 仅对块内文本元素
text-indent:-9999px;   //首行缩进
font-size:0;
```



行内块元素当有内容时,它位置会降低/下移

```js
https://stackoverflow.com/questions/13390220/why-does-an-inline-block-div-get-positioned-lower-when-it-has-content/

http://jsfiddle.net/ye0fbg4n/
```











## 六. CSS选择器

| 选择器                                    | 选择器名称       | 功能描述                                                     | 功能描述 | 权重 |
| ----------------------------------------- | :--------------- | :----------------------------------------------------------- | -------- | ---- |
| *                                         | 通配符选择器     | 选择文档中所有HTML元素                                       |          |      |
| E                                         | 标签选择器       | 选择指定类型的HTML元素                                       |          |      |
| .class                                    | 类选择器         | 选择指定class属性值为'class'的任意类型的任意多个元素         |          |      |
| #id                                       | id选择器         | 选择指定ID属性值为'id'的任意类型元素                         |          |      |
| selector1,selectorN                       | 并集选择器       | 给所有选择器选中的标签设置属性                               |          |      |
| selector1selectorN                        | 交集选择器       | 给所有选择器选中的标签中, <br/>相交的那部分标签设置属性      |          |      |
| F S                                       | 后代选择器       | 匹配F元素内部的S元素                                         |          |      |
| F>S                                       | 子元素选择器     | 选择F元素内部子元素的S元素                                   |          |      |
| E+F                                       | 相邻兄弟选择器   | 选择匹配的F元素,且紧位于E元素之后                            |          |      |
| E~F                                       | 通用兄弟选择器   | 选择匹配的F元素,且位于E元素后所有的同级F元素                 |          |      |
|                                           | 属性选择器       |                                                              |          |      |
|                                           | 伪元素选择器     |                                                              |          |      |
| E:link E:visited E:hover E:active E:focus | 动态伪类选择器   |                                                              |          |      |
| E:target                                  | 目标伪类选择器   |                                                              |          | 3    |
| E:lang                                    | 语言伪类选择器   | 表示选择匹配E的所有元素,且匹配元素指定了lang属性,其值为language |          |      |
| E:checked<br/>E:enabled<br/>E:disabled    | UI状态伪类选择器 |                                                              |          |      |
|                                           | 结构伪类选择器   |                                                              |          |      |
|                                           | 否定伪类选择器   |                                                              |          |      |



### 标签选择器

格式:

```html
<!-- 标签名{属性名:属性值; 属性名:属性值; .... -->

<style>
    h2{
        color:red;
        font-size:10px;
    }
</style>
```



### 类选择器

* 定义类名称: 以点开头+类名称{属性名:属性值; 属性名:属性值; .....}

* 调用类名称: 用标签中的class属性来关联类名称

* 命名规范: 

  * 不能以数字开头, 可以用字母, 下划线开头,+数字+下划线+中划线+字母;
  * 建议使用驼峰命名法(小驼峰): 第一个单词首字母小写, 第二个单词首字母大写

* 格式:

  ```html
  <style>
      .yellowGreen{
          color:yellowgreen;
      }
  </style>
  
  .....
  
  
  <p class="yellowGreen">
      内容
  </p>
  ```

* 案例(google图标)+多类名调用

  ```html
  <html>
      <head>
          <title>20-30汉字</title>
          <meta charset="utf-8">
          <meta name="keywords" content="不重要可忽略">
          <meta name="description" content="140">
          <style>
          	.blue{
  				font-size: 150px;
  				color: #1B6FEF;
  			}
  			.red{
  				font-size: 150px;
  				color: #DB4732;
  			}
  			.yellow{
  				font-size: 150px;
  				color: #FFD669;
  			}
  			.green{
  				font-size: 150px;
  				color: #009A57;
  			}
              .font150{
                  font-size:150px;
                  font-weight:700;
                  font-family:"宋体";
              }
              
          </style>
      </head>
      <body>
          <span class="blue font150">G</span>
          <span class="red font150">o</span>
          <span class="yellow font150">o</span>
          <span class="blue font150">g</span>
          <span class="green font150">l</span>
          <span class="red font150">e</span>
          
      </body>
  </html>
  ```

##### 多类名调用:

* 含义: 标签中的class可以调用多个类名,类名之间用空格隔开



**代码冗余**:

> 在程序中,一个代码片段多次重复出现时,会造成程序降低执行效率





### id选择器

* 定义id选择器: 以#开头+id名称
* 调用id选择器: 用标签中的id属性值等于id名称
* 注意事项:  id选择器的名称一个页面只能出现一次,(虽然出现相同的浏览器也能解析,但是从语法上来说是错误的.)



### 并集选择器

<a href="#bingji">本页链接</a>



### 交集选择器

<a href="#jiaoji">本页链接</a>

### 关系选择器

#### 后代选择器

#### 子元素选择器

#### 相邻兄弟选择器

#### 通用兄弟选择器

### 属性选择器

### 伪类选择器

#### 动态伪类选择器

动态伪类并不存在于HTML中，只有当用户和网站交互的时候才能体现出来。动态伪类包含两种，第一种是在链接中常看到的锚点伪类，另一种为用户行为伪类

注意: 锚点伪类的设置必须遵守一个“爱恨原则”LoVe/HAte，也就是“link-visited-hover-active”

| 选择器    | 类型               | 功能描述                                                     |
| --------- | ------------------ | ------------------------------------------------------------ |
| E:link    | 链接伪类选择器     | 选择匹配的E元素,且匹配元素被定义了超链接并未被访问过.常用于链接锚点上. |
| E:visited | 链接伪类选择器     | 选择匹配的E元素,且匹配元素被定义了超链接并已被访问过.常用于链接锚点上. |
| E:hover   | 用户行为伪类选择器 | 选择匹配的E元素,且用户鼠标在停留在元素E上.IE6及以下仅支持a:hover |
| E:active  | 用户行为伪类选择器 | 选择匹配的E元素,且匹配的元素被激活.常用于锚点于按钮上.       |
| E:focus   | 用户行为伪类选择器 | 选择匹配的E元素,且匹配的元素获得焦点                         |

**实例(未完成)**

在众多网站上按钮在不同状态下效果不一，用以增强用户体验.

根据用户的行为不同，按钮效果可以分为：默认状态、悬浮状态、点击时状态、焦点状态和点击后状态，可以按照CSS3的动态伪选择器，在不同状态下给按钮赋予不同的样式风格.

<iframe height="300" style="width: 100%;" scrolling="no" title="动态伪类选择器-未完成" src="https://codepen.io/westover/embed/preview/gOWOPmJ?defaultTab=css%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/gOWOPmJ">
  动态伪类选择器-未完成</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>







#### 目标伪类选择器

目标伪类选择器“:target”是众多实用的CSS3特性中的一个，用来匹配文档（页面）的URI[插图]中某个标志符的目标元素

URI中的标志符通常会包含一个井号（#），后面带有一个标志符名称，例如“#contact”“:target”就是用来匹配ID为“contact”的元素的。

**语法**

| 选择器   | 功能描述                                    |
| -------- | ------------------------------------------- |
| E:target | 选择匹配E的所有元素,且匹配元素被相关url指向 |

**实例**

> 页面中有三个区块，默认状态只显示三个区块的标题，点击其中一个标题时，其对应的内容就会显示；点击另一个标题时，对应区块内容将显示，而前一块内容将隐藏

<iframe height="300" style="width: 100%;" scrolling="no" title="目标伪类选择器" src="https://codepen.io/westover/embed/preview/WNjNxYB?defaultTab=css%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/WNjNxYB">
  目标伪类选择器</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>
</iframe>



**更多的应用场景**

| 效果                                       | 地址                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| 高亮显示区块                               |                                                              |
| 从相互层叠的盒容器或图片中突出显示其中一项 | http://www.red-team-design.com/get-to-know-your-css3-target-pseudo-class |
| tabs效果                                   |                                                              |
| 幻灯片效果                                 |                                                              |
| 相册效果                                   | 失效                                                         |



**实例-突出显示一项**

<iframe height="300" style="width: 100%;" scrolling="no" title="目标伪类选择器" src="https://codepen.io/westover/embed/preview/qBmBqqG?defaultTab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/qBmBqqG">
  目标伪类选择器</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


**实例-幻灯片 ++**

第二个和第四个没有效果.

<iframe height="700" style="width: 100%;" scrolling="no" title="目标伪类选择器-幻灯片(未完成)" src="https://codepen.io/westover/embed/MWmYXyv?defaultTab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/MWmYXyv">
  目标伪类选择器-幻灯片(未完成)</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


**实例-tab效果**

<iframe height="300" style="width: 100%;" scrolling="no" title="目标伪类选择器-tab" src="https://codepen.io/westover/embed/xxdwRwX?defaultTab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/xxdwRwX">
  目标伪类选择器-tab</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>
</iframe>





#### 语言伪类选择器

使用语言伪类选择器来匹配使用语言的元素是非常有用的，特别是用于多语言版本的网站，其作用更是明显。可以使用他来根据不同语言版本设置页面的字体风格。



**语法**

语言伪类选择器是根据元素的语言编码匹配元素。这种语言信息必须包含在文档中，或者与文档关联，不能从CSS指定。为文档指定语言，有两种方法可以表示:

```css
//h5
<!doctype html>
<html lang='en-US'>

//第二种方法
<body lang='fr'>
```

语言伪类选择器允许为不同的语言定义特殊的规则，这在多语言版本的网站用起来是特别的方便。



**实例**

```css
语言伪类选择器，就是根据元素的 lang属性，来匹配使用指定语言的元素。可以根据不同语言版本，设置不同的字体风格、定义不同的引号标记,不同的背景图片等

<p lang="en"><q>Quote in English</q></p>
<p lang="zh-cn"><q>中文的引号</q></p>

//英文版本的引文效果
:lang(en) {
  font-family: Arial;
  quotes: '"' '"';
}
//中文版本下的字体效果和引文效果
:lang(zh-cn) {
  font-family: 宋体;
  quotes: '<<' '>>'
}
```





#### UI元素状态选择器

是CSS3选择器模块组中的一部分，主要用于form表单元素上，以提高网页的人机交互、操作逻辑以及页面的整体美观，使表单页面更具个性与品位，而且使用户操作页面表单更便利和简单



**UI 元素状态伪类选择器语法**

UI元素的状态一般包括：启用、禁用、选中、未选中、获得焦点、失去焦点、锁定和待机等

在HTML元素中有可用和不可用状态，例如表单中的文本输入框；HTML元素中还有选中和未选中状态，例如表单中的复选按钮和单选按钮。这几种状态都是CSS3选择器中常用的状态伪类选择器



| 选择器     | 类型                 | 功能描述                             |
| ---------- | -------------------- | ------------------------------------ |
| E:checked  | 选中状态伪类选择器   | 匹配选中的复选按钮或单选按钮表单元素 |
| E:enabled  | 启用状态伪类选择器   | 匹配所有启用的表单元素               |
| E:disabled | 不可用状态伪类选择器 | 匹配所有禁用的表单元素               |



**实例**

```css
//表单元素获得焦点效果
textarea:focus,
input[type='text']:focus,
input[type='password']:focus {
  border-color: rgba(82,168,236,.8);
  outline: 0;
  outline: thin dotted \9;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.75), 0 0 8px rgba(82,168,236,.6);
}

//表单下拉选择框,文件控件,单选按钮,复选按钮得到焦点效果
select:focus,
input[type='file']:focus,
input[type='radio']:focus,
input[type='checkbox']:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color; // 用的很少,不同浏览器解析不同的颜色.
  outline-color: -2px;
}

//禁用的input select textarea表单元素效果
input[disabled],  //等效于input:diasbled;
select[disabled],  //等效于input:diasbled;
textarea[disabled] { //等效于input:diasbled;
  cursor: not-allowed;
  background-color: #eee;
  border-color: #ddd;
}

//禁用的单选按钮和复选按钮效果
input[type='radio'][disabled], //等效于 input[type='radio']:disabled
input[type='checkbox'][disabled] { //等效于 input[type='checkbox']:disabled
  background-color: #ddd;
}

//表单警告状态下效果 自己定义的类型 class='control-group warning'
.control-group.warning .checkbox,
.control-group.warning .radio,
.control-group.warning  input,
.control-group.warning select,
.control-group.warning textarea {
  color: #c09853;
  border-color: #c09853;
}

//表单警告状态下获得焦点效果
.control-group.warning .checkbox:focus,
.control-group.warning .radio:focus,
.control-group.warning input:focus,
.control-group.warning select:focus,
.control-group.warning textarea:focus {
  border-color: #a47e3c;
  box-shadow: 0 0 6px #dbc59e;
}

//表单错误状态与成功下效果
.control-group.error .checkbox
.control-group.success .checkbox
```



注意: 表单元素得到焦点和禁用两种状态使用方法，在使用UI状态选择器时特别注意，HTML结构中要存在这种状态，例如禁用的输入框，需要在HTML的对应元素上添加禁用属性.

```html
<input class="input-xlarge disabled" id="disabledInput" type='text' placeholder='Disabled input here'>
```





#### 结构伪类选择器





#### 否定伪类选择器





#### 伪元素选择器







### 八. css选择器3种书写位置

#### 1.内嵌式

* 含义:内嵌式: 将css代码嵌入到html文件中,书写比较方便,代码耦合度相对较低,维护较方便,在工作中偶尔使用,老刘在讲知识点时,为了方便,直观使用
* 位置: head标签中的style标签内

#### 2.行内式

* 含义:将css代码掺杂在html标签中,书写很方便,代码耦合度极高,维护困难,造成代码冗余,权重高,在工作中偶尔使用
* 位置: html代码标签内

#### 3.外链式

* 含义:将css代码单独写在css文件中,书写相对繁琐,代码耦合度极低,维护很方便,在工作中经常使用

* 位置:   

  ```html
  <link rel="stylesheet" href="">
  ```

  

### 九. css的层叠性

* 含义: 当给一个标签设置多个选择器(和属性)时,不同的属性可以叠加实现.  相同的属性,当**权重**相同时,后定义的会覆盖(层叠)先定义的, 当**权重**不同时, 权重高的发挥作用.
* 权重顺序:  标签选择器<类选择器<id选择器<行内样式<!important

* \<link>标签的位置决定了css文件代码的位置  与其他比较时候,类似一个\<style>标签



#### 块元素和text-align

块元素的默认宽度:  在不设置默认宽度时,跟随父元素宽度

**text-align:center**

* 作用标签: 能让标签内的文本, 行内元素, 行内块元素水平居中
* 单纯给行内元素,行内块元素设置text-align,无意义.

#### 后代选择器

* 格式: 祖先元素 子孙元素{属性:属性值;......} (选择器 选择器{}),中间以空格间隔,1个或多个



#### 选择器权重比较

![](https://justcode.ikeepstudying.com/wp-content/uploads/2016/07/css_weight.png)

  * | 权重值\权重类型 | 继承 | 标签 | 类/伪类 |  id  | 行内 | \!important |
    | --------------- | :--: | :--: | :-----: | :--: | :--: | :---------: |
    | 权重值          |  0   |  1   |   10    | 100  | 1000 |    无穷     |

  * 权重值可相加计算 

  * 继承的权重为0

  * 案例










#### css继承性(inherit)

* 定义:后代元素可以继承父元素设置的**<font color="red">文本的属性</font>**

* 继承的权重为0,优先继承离自己最近的父辈元素. 即使祖先元素使用 **!important**

* **不能继承**: <font color="red">父辈元素的width, height, 背景图,背景色等其他</font>

* 案例

  ```html
  案例
  ```



##### h标签和a标签的继承

* h1-h6标签浏览器默认继承一定比例. 其中h1的font-size为2em, 也就是2个继承的font-size的大小, h2是1.5em
* h和a标签默认分别自带字号和颜色属0性,会覆盖(层叠)继承的属性





##### 文本线属性(text-decoration)

* 属性值: 
  * overline 上划线
  * line-through 中划线
  * underline 下划线
  * none 没有线



##### 鼠标样式属性(cursor)







#### 状态伪类

##### a标签的4种状态伪类

* 顺序: `:link{} :visited{} :hover{} :active{} ` 简记: **lvha**

* ```html
  :link 未访问状态
  :visited 显示已经点击过的链接
  :hover 鼠标移入状态
  :active 显示鼠标按下时超链接的状态
  
  
  hover和active, 其他元素也有这个属性
  ```
  
* 四个状态同时存在,需要安装 **lvha**的排列顺序 (love hate)

* 处于隐私的考虑,访问后的链接只能改变**颜色**,不能改变颜色

* 多个\<a>,相同的选择器. 则点击1个以后,其他3个也会改变颜色(选择器中有颜色设置)

* 排序错误类型:

  * 排序错误类型1： link hover active visited   点击后只有visited设置的一种颜色
  * 排序错误类型2:    link active visited hover   点击后只有visited设置的一种颜色

* 伪类权重值和类权重值相同,都可以按照10计算.
  
  * 案例：`a:link{属性：属性值}`  权重值=标签选择器+伪类选择器=11
  
    

##### 默认2种状态

* 常用link

* hover

* 案例:

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title></title>
  		<style type="text/css">
  			/* 
  				常用两个状态
  			 */
  			.one{
  				color: red;
  				font-size: 80px;
  			}
  			.one:hover{
  				color:yellowgreen;
  			}
  		</style>
  	</head>
  	<body>
  		<a href="##" class="one">充气气球</a>
  	</body>
  </html>
  ```

  

#### 行高(line-height)

> 定义: 是设置文本在元素中垂直方向的位置.   是给文本设置的 给父级元素设置需要注意是否可以继承(1015)?

特点: 当元素没有设置高度, 高度随着行高的变化而变化,文本始终保持垂直居中于当前元素.

默认行高都是大于字体大小,例如下面的行高出现52px.解决方式是line_height:1,1表示行高为字体大小的一倍.



**文本垂直居中**: 行高等于盒子的高度

* 行高单位: px em 倍数(乘以当前font-size的数值)
* 这个元素是块元素?  不一定,也可以行内元素和行内块元素转换成的块元素

案例:

```HTML
<!DOCTYPE html>
<html>
    
    <head>
        <style>
            .box{
                background:pink;
                font-size:40px;   <!-- 这个设置下,div的高度是52px -->
            }
            
            
            .box{
                background:pink;
                font-size:40px;
                height:50px;
                line-height:50px; <!-- 这个设置下文本垂直居中于盒子 div高度是50px -->
            }
            
        </style>
    </head>
    <body>
        <div class="box">文本</div>
    </body>
</html>
```







#### 行间距

> 定义: 多行文本,行与行的间距. 是基线到基线的距离

文本的4条线:从上到下是, **顶线,中线,基线,底线**

* 案例:

```HTML
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			/* 
			行间距:多行文本行与行之间的间距,是基线到基线之间的距离
			文本四条线: 顶线 中线  基线 底线
			行高的单位:px, em,倍数
			 */
			p{
				background: pink;
				font-size: 40px;
				/* line-height: 80px; */
				/* 
				
				 */
				line-height: 1.5; /* 由此可以推导出整个p段落的高度,是浏览器显示的 行数乘以行高 */
			}
		</style>
	</head>
	<body>
        <!-- 行高 -->
		<p>
			段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落
		</p>
	</body>
</html>
```





#### 导航案例



```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="keywords" content="">
        <meta name="descritption" content="">
        <style>
        
            .box{
                background:pink;
                text-align:center;
            }
            
            .box a{
                display:inline-block;
                width:100px;
                height:30px;
                background:orange;
                text-decoration:none;
                
                /* 垂直居中
                   行高等于盒子的高度,实现垂直居中
                */
                line-height:30px;
                /* 
                text-align:center;
                文本水平居中可以省略,从父元素继承了这个特性
                */
                
            }
            
            .box a:hover{
                background:yellowgreen;
                text-decoration:underline;
            }
        
        </style>
    </head>
    <body>
        <div class="box">
            <a href="##">导航</a>
            <a href="##">导航</a>
            <a href="##">导航</a>
            <a href="##">导航</a>
            <a href="##">导航</a>
        </div>
    </body>
</html>
```



#### 复合属性-font

`font` 属性可以用来作为 [`font-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style), [`font-variant`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant), [`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight), [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size), [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height) 和 [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) 属性的简写，或将元素的字体设置为系统字体





* 格式:

  *  **font: italic weight size/line-height family**
  *   italic 倾斜 normal 正常

  

* 注意:
  * 最少写2个, **字号和字体**
  * 当复合属性, 单属性同时存在,先写复合属性,再写单属性. 因为存在层叠(覆盖)规模



font:12px/1.5; 和 font: 12px/15px的区别:

1.5是行高（line-height），这里的单位是em，不是px了。1.5表示是12px的1.5倍，即font: 12px;line-height: 1.5。也可以理解font-size:12px;line-height:1.5em(1.5*12px)，即字符高度的1.5倍



#### 复合属性-border

格式:

```html
border-width
border-style: solid实线 dashed虚线 dotted点状线
border-color

复合属性:
border: 边框的粗细 边框的样式 边框的颜色
border: width style color 
border: 默认3px 必须写 默认黑色


单个边框:
border-top:
border-right:
border-bottom:
border-left:
```



案例:

盒子边框相同样式,但下边框没有

有两种实线方式,一种是同样的样式写3次;另一种是使用符合属性和none

```html
<style>
    border:width style color;
    border-bottom:none;
</style>
```







#### Photoshop简单实用

> 主要使用切片和格式两种功能



左侧工具栏-切片工具, 选中特定区域, 双击切片,手动调整尺寸

保存/导出 ,存储为web格式

保存: 预设-存储

下拉框选择"选择选中的切片"



#### 从ps中获取css代码(1013)





#### 盒子模型



### 十. 常见的CSS问题

#### 基础

1.[如何应用CSS到DOM中](../html&css/如何应用CSS到DOM中.md)

2.



#### 盒子和布局

1.[如何调整CSS盒模型大小](../html&css/如何调整盒模型大小.md)







## 0928

##### 新浪导航

案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            background:#fcfcfc;
            border-top:3px solid #ff8500;
            border-bottom:1px solid #edeef0;
            font-size:14px;
            padding-left:170px;



        }

        .box a{
            display:inline-block;
            padding:0 16px;
            height:41px;
            line-height:41px;
            text-decoration:none;
           

        }

        .box a:hover{
            background:#edeef0;
            color:#ff8400;
        }
    </style>
</head>
<body>
    <div class="box">
        <a href="##">酒店</a>
        <a href="##">标准件</a>
        <a href="##">超大床房</a>
        <a href="##">超级vip总统套房</a>
        <a href="##">超级vip总统套房超级vip总统套房</a>
    </div>
</body>
</html>
```





##### 现象

盒子字号(默认16px)与内容文本字号大小不一致,因为文本基线要对齐的原因,子元素的background-color会与盒子的边框有个间距.

**解决**:  父元素设置font-size  ,之后子元素继承.  字体大小一致,基线对齐.



##### 内边距pdding需要减宽度的情况

* 自动减:  块元素在不设定固定宽度时, 默认宽度和父元素(父元素设置与否都一样)一样.此时设置水平方向的padding,不需要手动减宽度,元素会自动从content的区域减去,自动计算.
* 手动减:  块元素设置固定宽度,宽度和父元素一致.设置水平padding时,发生溢出现象. 需要从content中减掉padding的数值. (可以设置溢出隐藏)



##### 外边距margin

定义: 设置盒子之间的间距, 移动盒子

margin单属性和复合属性,和padding一致

```js
写法: margin-
```









##### 上下外边距合并

定义: 垂直排列的2个并列块元素,分别给上下盒子设置下,上外边距,此时形成外边距合并.两个值相同时,间距就是该值;两个值不同时,间距就是较大的那个值.

行内块元素的相邻左右外边距会相加不重合

<iframe height="350" style="width: 100%;" scrolling="no" title="外边距合并" src="https://codepen.io/westover/embed/VwpqjQp?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/westover/pen/VwpqjQp'>外边距合并</a> by xxl
  (<a href='https://codepen.io/westover'>@westover</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>









##### 外边距塌陷(重叠)

* 定义: **嵌套**关系的两个块元素,第一个子元素设置**向上的外边距(margin-top)**, 父元素会跟着掉下来,形成边距塌陷. (第二个块元素不会出现塌陷)

* 解决方案:

  * 给父元素设置**上边框**(0px不起作用,)
  * 给父元素设置**overflow**属性
  * 给父元素设置浮动
  * 给子元素设置浮动

* 案例:

  ```HTML
  <style>
      .box{
          width:200px;
          height:200px;
          background:pink;
          /*
          border-top:1px solid transparent;
          overflow:hidden;
          
          */
          
      }
      .box .phone{
          width:50px;
          height:100px;
          background:blue;
          margin-top:50px;
          margin-left:30px;
      }
  
  </style>
  
  
  
  <body>
      <div class="box">
          <div class="phone">手机1</div>
          <div class="phone">手机1</div>
      </div>
  </body>
  ```


##### overflow

定义: 当元素溢出元素框时使用此属性

属性值

```html
//overflow的值不是visible时候,会开启bfc,让父元素成为块级格式化上下文.
hidden  溢出隐藏
scroll  添加滚动条
auto    根据是否溢出,自动添加滚动条
```



说明: <font color="red">父元素固定宽高</font>,子元素内容多,会溢出

没有空格的英文和数字,此类型文本不会换行(视作一个词,一个数).没有空格的文字,会自动换行.

```js
word-break:break-all  强制换行
white-space:nowrap 强制不换行
```



### 块级格式化上下文BFC

```js
1.定义: 是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

2.如何开启?
https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
https://blog.csdn.net/QUSUPAO/article/details/109387695
    
3.脱离文档流是不是指该元素从dom树中脱离？
不是，用浏览器的审查元素就可以看到脱离文档流的元素（例如被float了）依然会出现在dom树里

4.总结:
脱离文档流，也就是将元素从普通的布局排版中拿走，其他盒子在定位的时候，会当做脱离文档流的元素不存在而进行定位。需要注意的是，使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在周围。而对于使用absolute 
positioning脱离文档流的元素，其他盒子与其他盒子内的文本都会无视它。

链接：https://www.zhihu.com/question/24529373/answer/29135021
```









##### 并集选择器 <span name="bingji">.</span>

* 格式: 

  > 元素,元素,类名,元素.....{}   中间以逗号分隔



##### 清除标签的默认样式(css初始化)  reset

* 定义: 标签都会有一些默认样式需要清除,再根据设计稿进行设置

* 方法

  * 通配符
  * 使用到的元素统一使用**并集选择器**

* 案例:

  ```html
  <style>
      <!-- 通配符选择器 -->
      *{
          margin:0;
          padding:0;
      }
      <-- 某些元素使用并集选择器  工作中推荐使用这种方式-->
      body,h1,h2,h3,h4,h5,h6,p,ul,ol{
          margin:0;
          padding:0;
          
      }
      
      
      
  </style>
  ```

  



##### 块元素的默认宽度(更新)

* 旧定义: 当块元素没有设置宽度时,宽度和父元素一样

* 新定义: 当块元素没有设置宽度时,其宽度(**content+padding+border+margin**)和父元素(**父元素content区域**)一样

* 案例:

  ```html
  <style>
      *{
          margin:0px;
          padding:0px;
          
      
      }
      
      .box{
          width:1000px;
          height:300px;
          padding-left:100px;
          border-left:100px;
          margin-left:100px;
          background:pink;
          
      }
      
      .box1{                    <!--类名为box的div是类名为box1的div的父元素 -->
          height:200px;
          background:blue;
      }
  
  </style>
  ```

  





##### 块元素水平居中

定义:

> 给<font color="red">**自身**</font>设置水平方向的<font color="red">**外边距**</font>为auto   <font color="red">前提</font>是块元素有固定宽度

案例

```html
<style type="text/css">
			/* 
			块元素水平居中: 给自身设置水平方向的外边距为auto
			 */
			.box{
				width: 800px;
				height: 500px;
				background: pink;
				text-align: center;
				margin: 0 auto;
			}
			.one{
				width: 100px;
				height: 100px;
				background: blue;
				margin: 0 auto;
			}
</style>




<body>
    <div class="box">
        <b>我是加粗</b>
        <i>我是倾斜</i>
        <img src="">
        <div class="one"></div>
    </div>
</body>
```



* 问题

  块元素垂直居中能否实现?

  不能. 页面是无限向下的设置,文档流是从上到下.



##### 宠物列表练习

* 案例

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  
      <style>
          *{
              margin:0;
              padding:0;
              list-style:none; /* 去除列表标头样式*/
  
          }
  
          body{
              background:#333;
          }
  
          .box{
              width:240px;
              /* height:338px; */
              margin:50px auto 0;
              background:url(./img/bg.gif);
              padding:10px;
  
  
          }
  
          .box h3{
              border-left:4px solid #c9e143;
              padding-left:5px;
              height:23px;
              /* line-height: 23px; */
              color:#ffffff;
              font: 700 22px/23px "黑体";
              margin-bottom:5px;
                             
          }
  
          .box .list{
              background:#fff;
  
          }
  
          .box .list li a{
              display:block;   /* a标签也可以设置inline-block, 设置成块元素后使用父元素(块级元素li) 宽度*/
              text-decoration:none;
              height:30px;
              border-bottom:1px dashed #666666;
              font-size:12px;
              line-height: 30px;
  
              background: url(./img/tb.gif) no-repeat 6px center;
              margin:0 10px;
              padding-left:19px;
  
  
          }
  
  
      </style>
  </head>
  <body>
      <div class="box">
          <h3>爱宠知识</h3>
          <ul class="list">
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
  
  
              <!-- <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li>
              <li>
                  <a href="##">养狗比养猫对健康更有利</a>
              </li> -->
          </ul>
      </div>
  
      
  </body>
  </html>
  ```

  



#### 0929

##### 案例(新浪博客)

```html
<!DOCTYPE html>
<html>  /*如果是lang="zh" 则字体表现会有差异*/
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			*{
				margin: 0;
				padding: 0;
				list-style: none;
			}
			img{
				display: block;
			}
			.box{
				width: 238px;
				height: 212px;
				border:1px solid #d9e0ee;
				border-top: 3px solid #ff8500;
				margin: 100px auto 0;
			}
			.box h2{
				height: 35px;
				border-bottom: 1px solid #e3e6ed;
				line-height: 35px;
				font-size: 16px;
				background: pink;
				/* 第二种 */
				/* padding-left: 12px; */
				/* 第三种 */
				/* text-indent: 12px; */
				/* 第五种 */
			/* 	border-left:12px solid transparent; */
			/* 第四种 */
				/* margin-left: 12px; */
			}
			.box h2 a{
				font-family: "Microsoft YaHei","微软雅黑","SimHei","黑体";
				text-decoration: none;
				color:#000;
				font-weight: 400;
				background: yellow;
				/* 第一种 */
				margin-left: 12px;
			}
			.box h2 a:hover{
				color:#ff8500;
			}
			.box .banner{
				width: 180px;
				height: 108px;
				background: pink;
				margin: 7px auto 0;
			}
			.box .banner a{
				display: block;
				height: 108px;
				background: yellow;
				text-decoration: none;
			}
			.box .banner a span{
				display: block;
				height: 21px;
				line-height: 21px;
				text-align: center;
				color:#fff;
				background: #000;
				font-size: 12px;
			}
			/* 鼠标移入a, span是继承了a的默认状态和鼠标移入状态,
			但是span人为设置的color:#fff,此时权重高于继承的 */
			/* .box .banner a:hover{
				color:#ff8500;
			}	 */
			
			/* 鼠标移入a时,让后代的span.......... */
			.box .banner a:hover span{
					color:#ff8500;
			}
			/* .box .banner a:hover i{
					color:yellowgreen;
			} */
			.box .list {
				margin-top: 9px;  /*根据第一行行高,通过ps划出行高形,直接测量可得出 但具体数值应该是10px*/
			}
			.box .list li{
				font-size: 12px;  /*从出处查询的*/
				height: 24px;     /*测量行高,从基线到基线(从底线到底线一样)*/
				line-height: 24px;
				/* background: pink; */
				background:pink url(img/dian.png) no-repeat 9px center;
				padding-left: 19px;
			}
			.box .list li a{
				color:#666;
				text-decoration: none;
				font-family: "宋体";
				/* background: greenyellow; */
			}
			.box .list li a:hover{
				text-decoration: underline;
				color:#ff8500;
			}
		</style>
	</head>
	<body>
		<div class="box">
			<h2>
				<a href="##">图片博客</a>
			</h2>
			<div class="banner">
				<a href="##">
					<img src="img/banner.jpg" >
					<span>张掖七彩丹霞令人惊叹</span>
				</a>
			</div>
			<ul class="list">
				<li>
					<a href="##">高考15分爸爸教四岁女儿学数学</a>
				</li>
				<li>
					<a href="##">优秀应届毕业生都去了什么行业？</a>/*这个地方的?和后边的空格是一体的,无法复现.但是要注意*/
				</li>
			</ul>
		</div>
	</body>
</html>
```











##### img图片默认留白

* 案例: 图片加边框后,下方与边框有一个留白.这是由于图片是行内块元素，底部需要和文本基线对齐，会在底部有留白的像素，根据字号的不同，留白的像素也不同。（也就是父元素和子元素的字号差异造成的.）

  * 1106更新: 图片之间横向留白. 原因:代码换行. 解决和下面2种方法相同.

* 解决:
  * 父元素font-size设置0 [设置范围窄 不常用   案例是包含img的div使用了字号属性]
  * img转换为块元素   [初始化操作时候需要先设置 ]
  
* 其他

  > 如果图片和span同一行,两者都为行内块元素.那么如何对齐?  
  >
  > 给图片设置vertical-align:middle, span也会受vertical-align影响,垂直方向居中显示.





### 浮动

* 定义:  浮动在布局中就是做**横向布局**的.浮动也是一个float属性. 之前介绍过的3种显示模式被称为标准流. 浮动是一个脱离标准流的过程, 按照标签的顺序默认在父元素的(左上)依次横向排列.
* 浮动元素可以设置宽高,如果不设置宽高,靠内容撑开.例如p元素,如果文本内容多,宽度可以撑开到和父元素一样而继续换行.



##### 浮动横向布局

```html
float:left;
float:right;
```

* 左浮动
  * 浮动元素按照标签顺序从左向右依次在包含块的左上方排列
* 右浮动
  * 浮动元素按照标签顺序从右向左依次在包含块的右上方排列



##### 浮动注意事项

> 当元素设置浮动后,不再具备之前的显示模式,设置宽高可以起作用
>
> **<font color="red">注意:浮动没有自适应水平垂直居中</font>**



例如: 行内元素也可以设置浮动,浮动后没有内容也可以显示设定的宽高+背景色. 例如span元素



##### 浮动特性

* 浮动没有自适应居中,

* 可以给浮动的**<font color="red">父元素</font>**设置固定宽度,利用父元素`margin:0 auto`进行自适应居中

* 浮动元素在父元素宽度范围内放不下时,会像文本一样换行[]









##### 浮动布局造成的影响(高度塌陷及解决)

**高度塌陷**  浮动元素由于是脱离标准流状态,父元素在不设置固定高度时,会造成高度塌陷(高度0), 原因是父元素认为子元素没有占位置

**解决高度塌陷**:  

* 父元素设定固定高度

* 父元素开启BFC: 父元素设置`overflow:hidden`  或 父元素设置浮动

* 额外标签(空盒子标签)  在父元素最后设置一个块元素空盒子,并设置clear属性结束之前的浮动元素,并让浮动元素占据位置

  ```html
  .lastBox{
  	clear:both;   
  }
  ```

* 父元素调用clearFix类名(内部使用的是伪元素)

  ```html
  .clearFix::after{
  	content:"";  /*相当于在父元素最后添加一个空盒子 after元素默认是一个行内元素 所以需要display转换成块元素 */
  	display:block;
  	clear:both;
  }
  ```








##### 浮动案例-导航条

```html
<html>
    <head>
        <title></title>
        <meta charset="utf-8">
        <meta name="keywords" content="">
        <meta name="content"  content="">
        <style>
            *{
                margin:0;
                padding:0;
                list-style:none;
            }
        	
            .box{
                background:pink;
            }
            
            .box ul{
                width:550px;    /* 设定宽度后,就可以使用margin的自适应*/
                overflow:hidden; /* 清除子元素li的浮动效果*/
                margin:0 auto;
            }
            
            .box ul li{
                float:left;
                width:100px;
                height:30px;
                margin-left:10px;
                
            }
            
            .box ul li a{
                display:block;       /* 转换成块元素 覆盖块元素li宽高   */
                
                height:30px;
                line-height:30px;   /* height=line-height  文本垂直居中 */
                text-decoration:none;
                text-align:center; /* 块元素中的文本居中 */
                margin:0 auto;   /* 左右方向自适应居中  前提是有固定宽度 再前提是block*/
                
                background:yellowgreen;
            }
            
            .box ul li a:hover{
                background:yellow;
                text-decoration:underline;
            }
            
            .clearFix{
                content:"";
                display:block;
                clear:both;
            }
            
        </style>
    </head>
    <body>
        <div class="box">
            <ul class="clearFix">
                <li>
                	<a href="##">导航</a>
                </li>
                <li>
                	<a href="##">导航</a>
                </li>
                <li>
                	<a href="##">导航</a>
                </li>
                <li>
                	<a href="##">导航</a>
                </li>
                <li>
                	<a href="##">导航</a>
                </li>
            </ul>
            
            
        </div>      
    </body>
</html>
```





##### 京东坚果导航案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>

	<style>
		* {
			margin: 0;
			padding: 0;
			list-style: none;
		}

		body {
			background: #f4f4f4;
		}

		.box {
			width: 290px;
			height: 340px;
			background: white;
			margin: 100px auto 0;
		}


		.box h3 {
			overflow: hidden;
			/* 解决a这个块元素加margin后,产生的高度塌陷问题 */
		}

		.box h3 a {
			display: block;   /*使用inline-block后 高度发生变化*/
			background: pink;

			/* height:31px;
			line-height:31px; */

			width: 100px;

			margin: 13px 0 0 19px;  /* ps中测量字体到边的距离是17px.字体是24px,撑开的盒子是31px,在没有设置行高情况下,文本默认垂直居中盒子.但分配上可便宜行事,31-24=7,故上3下4或相反. */
		}


		.box h3 a span {
			float: left;
			font-size: 24px;
		}
		.box h3 a .circle {
			float: left;
			border: 1px solid red;  /*ps量尺寸是16*16,但还有1个边框的宽度,所以宽高都是15 */
			width: 15px;
			height: 15px;
			border-radius: 50%;

			line-height: 15px;
			text-align: center;
			color: red;
			font-size: 12px;
			margin: 7px 0 0 10px;  /* 同样是居中于文本盒子,所以外边距测量的开始应该是文本盒子的外边距 */
		}

		.box .list1 {
			margin-top: 11px;
		}

		.box .list1 li {
			float: left;

		}

		.box .list1 li a {
			display: block;
			text-decoration: none;
			width: 62px;  /*宽高使用ps测量出来 */
			height: 20px;
			background: #f6f6f6;
			line-height: 20px;
			text-align: center;
			font-size: 12px;
			color: #999999;
			margin-right: 8px;
			border-radius: 10px;
		}

		.box .list2 li {
			height: 70px; /*最大图片的高度 重要的是宽度量不量  li本身占满一行 如果改宽度会增加成本*/
			background: yellow;
			padding: 0 15px;
			margin-bottom: 10px;
		}

		.box .list2 {
			margin-top: 15px;
		}

		.box .list2 li a {
			display: block;
			height: 70px;
			/* margin:0 10px; */

			background: yellowgreen;
		}




		.box .list2 li a .top {
			float: left;
			width: 28px;  /* 宽高由图片测量而来 如果没有指定宽高则都为0 会被下面的浮动元素覆盖 */
			height: 41px;

			background: url(./top_03.png) no-repeat 0 0;
			/* 位置为什么不适用坐标进行定位?  浮动之后不起作用 */

			margin-top: 15px;

		}

		.box .list2 li a img {
			float: left;
			height: 70px;
			margin: 0 10px 0 12px;
		}

		.box .list2 li a {
			text-decoration: none;

			height: 70px;

		}

		.box .list2 li a p {
			float: left;
			width: 133px;
			/*浮动之前,块元素p使用父元素a的宽度260px 又因为p之前两个子元素浮动的关系,会产生文本环绕的效果,从图片右边空白区域出现文字.浮动后,特性就是在父元素宽度范围内放不下且自身没有设置宽度时,像文本一样换行.  p元素不浮动里面的文本内容会出现文本环绕效果 p元素浮动且没有设置宽度,p元素的宽度靠内容撑开.如果内容多会跳出父元素直到根元素大小?!*/

			color: #333333;
			font-size: 14px;
			margin-top: 12px;

			/* margin:0 auto; */
			/* 自身水平居中为什么不使用margin外边距水平居中呢,p的宽度也设定了.    文本在p元素内部是填充的,有多少内容占多少宽度. 我们所讲的使用外边距实现自身水平居中是元素相对于父元素(标签相对于父标签) */
			/*垂直居中  为什么不能使用height=line-height呢?   如果是一行文本的话可以实现垂直居中.两行及多行无法实现*/


		}





		.clearFix:after {
			content: "";
			display: block;
			clear: both;
		}
	</style>
</head>

<body>
	<div class="box">
		<h3>
			<a href="##" class="clearFix">
				<span>排行榜</span>
				<div class="circle">></div>
			</a>
		</h3>

		<ul class="list1 clearFix">
			<li style="margin-left:9px;">
				<a href="##">吸顶灯</a>
			</li>
			<li>
				<a href="##">吸顶灯</a>
			</li>
			<li>
				<a href="##">吸顶灯</a>
			</li>
			<li>
				<a href="##">吸顶灯</a>
			</li>
		</ul>

		<ul class="list2">
			<li>
				<a href="##">
					<div class="top"></div>
					<img src="./jianguo.webp" alt="坚果">
					<p>好吃好吃好吃好吃好吃好吃好吃好吃好吃</p>


				</a>
			</li>

			<li>
				<a href="##">
					<div class="top"></div>
					<img src="./jianguo.webp" alt="坚果">
					<p>好吃好吃好吃好吃好吃好吃好吃好吃好吃</p>


				</a>
			</li>

			<li>
				<a href="##">
					<div class="top"></div>
					<img src="./jianguo.webp" alt="坚果">
					<p>好吃好吃好吃好吃好吃好吃好吃好吃好吃</p>


				</a>
			</li>
		</ul>
	</div>
</body>

</html>
```











#### 0930  尚品汇网站首页案例







#### 1009尚品汇











### 定位(position)

**定位**: 也是一个position属性,当元素设置定位后,是脱离标准流的状态,可以将元素设置在网页中的一个具体坐标位置,不会影响周围的元素

### **1.相对定位**(relative position):

* 起始点 自身在标准流中的位置; 
* 偏移量 水平方向是left right,垂直方向是top bottom. 4个值都出现时,left和top优先
* 又叫'占位定位', 使用偏移量后,原先的位置依然保留,为空.





### 2.绝对定位(absolute position)

* 绝对定位是一个完全脱离标准流的状态.
* 默认起始点,窗口的4个角.left top right bottom.说法上一般用body替代窗口(不重要)
* <font color="red">绝对定位的起始点,会去找最近的有定位属性(相对,绝对)的父元素.</font>



### 3.定位结合使用:子绝父相+子绝父绝.

* 相对定位或绝对定位一般都是不单独使用

* 子绝父相: 子元素绝对定位的起始点会去找离自己最近设置相对定位的父元素.

  



### 4.定位层级(z-index)

* 取值范围是整数(负整数,正整数,0),默认值是0
* 当层级相同时,后写的标签会压在先写的标签上面
* 当层级不同时,谁的层级高,谁在上面
* 当层级是负数时,低于标准流

*  层级概述: 
  * 当父元素的层级相同时,后写的元素(包括子元素)会压在先写的元素(包括子元素)的上面,此时子元素的层级高于其他元素的父元素(的层级没有作用;)
  * 当父元素的层级不同时,层级高的包括子元素会压在层级低的子元素的上面 ;
  * 当父元素不设置层级时,给子元素设置层级能决定自身的高低



### 5.定位的使用

#### 1.水平垂直居中

1.定位水平居中:

```html
left:50%;   /*父元素宽度的百分比的一半 */
margin-left: 自身宽度一半的负值
```



2.定位垂直居中:

```html
top:50%;     /*父元素高度的百分比的一半 */
margin-top:自身高度一半的负值   margin也能用百分比,但百分比是继承自父元素的比值
```



3.水平垂直居中

```js
left:50%;
top:50%;
margin-left:-自身宽度一半;
margin-top:-自身宽度一半;
```





### 透明的用法(opacity+rgba)

**opacity**

* 取值范围是0~1之间的小数
* 默认值是1
* 缺点,元素里的内容也会变的透明模糊



**background:rgba(0,0,0,x)**

* a代表alpha,表示透明度,取值范围0~1,0.5是半透明
* rgba(0,0,0,0)表示透明











##### 案例-小米轮播图



##### 固定定位

> position:fixed 

使用固定定位后,丧失以前的元素属性

参考点:永远是浏览器窗口,不会随网页的滚动而滚动



###### **案例-固定定位**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			*{
				margin:0;
				padding:0;
				list-style:none;
			}
			.box{
				width:1200px;
				height:456px;
				margin:50px auto;
				background:yellow;
				position:relative;
			}
			.man{
				width: 360px;
				height: 800px;
				background: url(man.png) no-repeat 0 0;
				position: absolute;
				left:-360px;
				top:0;
			}
			.woman{
				width: 360px;
				height: 800px;
				background: url(woman.png) no-repeat 0 0;
				position: absolute;
				right:-360px;
				top:0;
			}
			.qiuLeft{
				width:360px;
				height:570px;
				background:url(qiuLeft.png) no-repeat 0 0;
				position:fixed;
				left:50%;   /* 定位水平居中的书写方式:left+margin */
				bottom:0;
				margin-left:-960px;
			}
			.qiuRight{
				width:360px;
				height:570px;
				background:url(qiuRight.png) no-repeat 0 0;
				position:fixed;
				left:50%;
				bottom:0;
				margin-left:600px;/*无法使用右外边距 因为固定宽度的元素使用右外边距不起作用. 如果要使margin-right起作用,需要取消宽度*/
			}
				
		</style>
	</head>
	<body>
		<div class="box">
			<div class="man">
				
			</div>
			<div class="woman">
				
			</div>
			
			
		</div>
		<div class="qiuLeft">
			
		</div>
		<div class="qiuRight">
			
		</div>
	</body>
</html>

```











##### css精灵图 sprite

> 精灵图，是背景图技术。如今网速条件下，下载一张大图和小图的时间差异小，但服务器请求链接数是有限的。所以讲若干小图拼成一张大图，一次性进行下载，然后通过background移动图片的位置，实现网页小图的显示，减小服务器的压力。



**制作**： 我们在一个页面上设置了盒子的宽高(一般是图片的宽高），想要将一个表情显示在盒子内，**我们是不能移动盒子的位置的，我们只能改变图片的位置。**

###### **案例-精灵图**（小米轮播图精灵版）

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			*{
				margin:0;
				padding:0;
				list-style:none;
			}
			img{
				display:block;
			}
			.box{
				width:1226px;
				height: 460px;
				margin:50px auto 0;
				background:pink;
				position:relative;
			}
			.left-nav{
				width:234px;
				height:460px;
				background:rgba(0,0,0,.5);
				position:absolute;
				left:0;
				top:0;
			}
			.box span{
				width:41px;
				height:69px;
				background:url(icon-slides.png) no-repeat -85px 0;
				position:absolute;
				left:234px;
				top:50%;
				margin-top:-35px;
			}
			.box  .rightBtn{
				background-position-x:-127px;  /*样式层叠  精灵图的位置是盒子区域内，移动图片来选择相应的区域*/
				left:auto;  /*单纯设置right等于0，元素并不能移动到右侧。必须同时使用left：auto*/
				right:0;
			}
			.box .leftBtn:hover{
				background-position-x:0;
			}
			.box .rightBtn:hover{
				background-position-x:-42px;  
			}
			.box .listBom{
				position:absolute;
				right:34px;
				bottom:26px;
				
				
			}
			.box .listBom li{
				float:left;
				width:6px;
				height:6px;
				border-radius:50%;
				background:#965956;
				border:2px solid #B98D8A;
				margin-left:8px;
				/*
				border: 2px solid #fff;
				 色饱和度 
				border-color: hsla(0, 0%, 100%, .3);
				background: rgba(0, 0, 0, .4);
				
				*/
				
			}
			.box .listBom  .current{
				/* background:white; */
				background: hsla(0, 0%, 100%, .4);
				border-color: rgba(0, 0, 0, .4);
			}
			.box .listBom li:hover{
				/* background:white; */
				background: hsla(0, 0%, 100%, .4);
				border-color: rgba(0, 0, 0, .4);
			}
			
		</style>
	</head>
	<body>
		<div class="box">
			<ul> /*轮播图 故使用列表*/
				<li>
					<a href="##">
						<img src="banner.webp" >
					</a>
				</li>
			</ul>
			<div class="left-nav">
				
			</div>
			<span class="leftBtn"></span>
			<span class="rightBtn"></span>
			<ol class="listBom">/* 无序列表  在HTML结构中的位置，前提是祖先元素有relative定位，但同时从结构上来说.box最合适，易于理解*/
				<li class="current"></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ol>
		</div>
	</body>
</html>

```









##### 图标字体（icon font）

* 优点：
  * 自由的放大缩小，且不会模糊
  * 文件比图片小，加载快
  * 可以任意的改变颜色
* 缺点 ：
  * 只能被渲染成单色或者css3的渐变色。阿里iconfont可以使用symbol引用，但是浏览器支持较少。



* **使用方法**(依照阿里图标字体使用方法)：
	
    * **Unicode方法**

      ```html
      1.拷贝项目下面生成的@font-face
      @font-face {
        font-family: 'iconfont';
        src: url('iconfont.eot');
        src: url('iconfont.eot?#iefix') format('embedded-opentype'),
            url('iconfont.woff2') format('woff2'),
            url('iconfont.woff') format('woff'),
            url('iconfont.ttf') format('truetype'),
          url('iconfont.svg#iconfont') format('svg');
      }
      2.定义使用iconfont的样式
        <html>
            .iconfont {
              font-family: "iconfont" !important; /*避免覆盖需要提权； 一般是放在style的开始*/
              font-size: 16px;
              font-style: normal;
              -webkit-font-smoothing: antialiased; /* 字体抗锯齿渲染 */
              -moz-osx-font-smoothing: grayscale;
            }
	  
        </html>
	  
        3.挑选相应图标并获取字体编码，应用于页面
        <span class="iconfont">&#x33;</span>
      ```

        * **font-class引用**  主要使用这种方便

        ```html
        目的：解决Unicode书写不直观，语义不明确的问题
        步骤：
        1.引入项目下生成的fontclass代码：
        <link rel="stylesheet" type="text/css" href="./iconfont.css">
	  
        2.挑选相应图标并获取类名，应用于页面
        <span class="iconfont icon-xxx"></span>
        ```

        * **Symbol引用**  不做推荐，浏览器支持较少
	
* 字体格式：

  * woff： web open font format
  * otf: open type fonts
  * ttf: true teyp fonts

* 查找字体：

  * 阿里云矢量字体图库（iconfont.cn)
  * 如何下载：注册-选中-购物车-download





### 案例-尚品汇

##### 尚品汇header

##### icon

* 存储/访问位置

  * 存储位置: 网站根目录
  * 访问位置: 域名.com/favicon.ico

* 在线制作工具(比特虫)

* 书写格式

  \<link rel="" href="">

##### html5

> 简介: 新增语义标签,标签属性和api(application programming interface[接口])

* H5新增语义标签

```html
<body>
    <header>头部</header>
    <nav>导航</nav>
    <section> /*div */
    	<aside>侧边栏</aside>
        <article>文章</article>
    </section>
    <footer>底部</footer>
</body>
```



* H5新增标签属性


表单属性:

```html
禁用属性 
disabled 用法和checked一样
表示设置为:置灰状态 无法点击

非空验证
required  用法和checked一样

自动获取焦点
autofocus  用法和checked一样

自动补全
autocomplete
off 默认值
on  要配合name属性使用.name是组名,根据不同的组名,来显示已经提交的数据(记录在浏览器缓存中)

```



表单类型:

```html
<!-- 邮箱标签 -->
<input type="email">

<!-- 网址标签 -->
<input type="url">

<!-- 数字标签 -->
<input type="number">

<!-- 本地时间 -->
<input type="datetime-local">

<!-- 月标签 -->
<input type="month">

<!-- 日标签 -->
<input type="date">

<!-- 周标签 -->
<input type="week">

<!-- 颜色标签 -->
<input type="color">

<!-- 滑块标签 -->
<input type="range">

```

音频

```html
单个音频:
<audio src="路径" controls="controls" loop="loop" autoplay="autoplay" ></audio>

/*
controls 控制面板
loop  循环
autoplay 自动播放 浏览器兼容性差不支持多
*/

多个音频:
<audio controls="controls" loop="loop" autoplay="autoplay">
	<source src="路径.mp3">
    <source src="路径.ogg">
    <source src="路径.其他">
</audio>
```





视频(用法和audio一致)







## css3

### 一.选择器

### 1.交集选择器 <span name="jiaoji">.</span>

> 交集选择器,相交的部分就是看要设置属性值的标签

格式:

```html
选择器1选择器2...{
	属性:属性值;
}
```

注意:

* 选择器之间没有任何连接符合没有空格
* 选择器可以是标签名称,也可以是id,class名称

### 2.关系选择器

#### 2.1子元素选择器

概述: 当使用  `>` 选择符分隔两个元素时,它只会匹配那些作为第一个元素的**直接后代(**子元素)的元素

语法: 元素1>元素2{样式声明}

示例: 

```html
span{background:white;}
div>span{
background:lightblue;
}
```



当应用如何网页时:

```html
<div>
    <span>
        Span 1. In the div.
    	<span>Span 2. In the span that's in the div.</span>	
    </span>
</div>
<span>Span 3. Not in a div at all</span>
```



网页效果:

<span style="background:lightblue;">Span 1. In the div.</span> Span 2. In the span that's in the div.
Span 3. Not in a div at all.



#### 2.2相邻兄弟选择器

> 概要: 相邻兄弟选择器(`+`) 介于两个选择器之间,当第二个元素 **紧跟** 在第一个元素之后,并且两个元素都是属于同一个`父元素` 的子元素,则第二个元素将被选中.



语法:

```html
former_element+target_element {style properties }
```



示例:

```html
li:first-of-type + li{
color:red;
}

<ul>
    <li>One</li>
    <li>Two!</li>
    <li>Three</li>
</ul>
```



结果:

* One
* <font color="red">Two!</font>
* Threee



#### 2.3通用兄弟选择器

> 概述: 兄弟选择符，位置无须紧邻，只须同层级，`A~B` 选择`A`元素之后所有同层级`B`元素。



语法:

```html
former_element ~ target_element { style properties }
```





#### 2.4属性选择器

```html
<!---->
<style>
	[属性名]			  <!-- 选择含有指定属性的元素-->
    [属性名=属性值]		<!-- 选择含有属性名和属性值的元素 -->
    [属性名^=属性值]		<!-- 选择含属性值以指定值开头的元素 -->
    [属性名$=属性值]		<!-- 选择含属性值以指定值结尾的元素 -->
    [属性名*=属性值]		<!-- 选择属性值中包含指定值的元素 -->
    [属性名~=属性值]      <!-- 选择包含独立属性值的元素 --  >
    [class ~= 'box']{color:red;} <!--class属性值包含独立单词是box的  -->
        
    
</style>
<style type="text/css">
			/* 
			属性选择器
			 */
			/* 属性名是class的 */
			/* .list li[class]{
				color:red;
			} */
			
			/* class属性值等于box的 */
			/* .list li[class="box"]{
				color:red;
			} */
			
			/* class属性值以box结束的 */
			/* .list li[class $="box"]{
				color:red;
			} */
			
			/* class属性值以box开始的 */
			/* .list li[class ^="box"]{
				color:red;
			} */
			
			/* class属性值包含box的*/
			/* .list li[class *="box"]{
				color:red;
			} */
			
			/* class属性值包含独立单词是box的 */
			.list li[class ~="box"]{
				color:red;
			}
			
			.list li[title]{
				color:blue;
			}
		</style>
```





### 3.伪类选择器

> 概要: 不存在的类,来描述一个元素的特殊状态. 伪类一般情况下以":"开头



| 类型 | 选择器 | 示例    | 示例说明                                    | css  |
| ---- | ------ | ------- | ------------------------------------------- | ---- |
| 伪类 | :root  | :root   | 选择文档的根元素                            | 3    |
| 伪类 | :empty | p:empty | 选择每个没有任何子级的p元素（包括文本节点） | 3    |



##### :root选择器

```css
//:root选择器用匹配文档的根元素,可以定义全局变量供多个属性使用.

var()函数,用域插入自定义属性值,例如一个属性值在多出被使用
calc() 函数用于动态计算长度值。

:root{
    --windowW:1000px;
    --widowH:1000px;
}
.box{
    width:var(--windowW);
    height:cala(var(--windowH)-100px);
}
```



```html
=========第一种: 受其他元素的影响========

第一个儿子元素   元素:first-child{}
最后一个儿子元素  元素:last-child{}
第编号个儿子元素  元素:nth-child(){}
					odd 奇数
					even 偶数
					表达式 2n+1 n是从0开始的整数

倒数第某个元素  元素:nth-last-child(x){}
唯一的元素       元素:only-child{}


========第二种: 不受其他元素的影响========
第一个儿子元素  元素:first-of-type{}  /* 后面若有其他元素包含的目标元素,也算是第一个儿子元素 */
最后一个儿子元素 元素:last-of-type{}
第编号个儿子元素  元素:nth-of-type(){}
					odd 奇数
					even 偶数
					表达式 2n+1 n是从0开始的整数/2n等其他可以选择相应的表达式
倒数第编号个儿子元素 元素:nth-last-of-type(){}
唯一元素选择器      元素:only-of-type{}


============
空内容元素
元素:empty{}
```







#### 伪类选择器-案例

携程导航案例

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			*{
				margin: 0;
				padding: 0;
				list-style: none;
			}
			body{
				padding: 10px;
			}
			nav ul {
				border-radius: 10px;
			}
			nav ul li{
				float:left;
				width:33.33%;
			}
			nav ul li a{
				display: block;
				height: 39px;
				background: orange;
				text-decoration: none;
				text-align: center;
				line-height: 39px;
				color:#fff;
				border-right: 1px solid #fff;
				border-bottom: 1px solid #fff;
			}
			/* nav ul li:first-of-type a{
				height: 79px;
				line-height: 79px;
				border-radius: 10px 0 0 10px;  第二种用法
			} */
			
			nav ul li a:only-child{
				height: 79px;
				line-height: 79px;
				border-radius: 10px 0 0 10px;/*圆角也是给a加,给ul加不显示.*/
			}
			nav ul li:nth-child(3) a:nth-last-child(2){
				border-radius: 0 10px 0 0;
			}
			nav ul li:nth-child(3) a:last-of-type{
				border-radius: 0 0px 10px 0;
			}
			nav:last-of-type{
			   margin-top: 10px;	
			}
			nav:last-of-type a{
				background: lightgreen;  /*加背景色要给a添加,因为a浮动覆盖了ul的*/
			}
			.clearFix::after{
				content: "";
				display: block;
				clear: both;
			}
		</style>
	</head>
	<body>
		<nav>
			<ul class="clearFix">
				<li>
					<a href="##">酒店</a>
				</li>
				<li>
					<a href="##">汉庭酒店</a>
					<a href="##">如家酒店</a>
				</li>
				<li>
					<a href="##">7天酒店</a>
					<a href="##">速8酒店</a>
				</li>
			</ul>
		</nav>
		<nav>
			<ul class="clearFix">
				<li>
					<a href="##">酒店</a>
				</li>
				<li>
					<a href="##">汉庭酒店</a>
					<a href="##">如家酒店</a>
				</li>
				<li>
					<a href="##">7天酒店</a>
					<a href="##">速8酒店</a>
				</li>
			</ul>
		</nav>
	</body>
</html>


```



### 4.伪元素选择器

> 概述: 
>
> 伪元素:在盒子的内部,有一前一后两个盒子被称为伪元素, 伪元素默认是 ==<font color="red">**行内显示模式**</font>== 
>
> 文本用伪元素显示不合适      伪元素中的文本内容不会被搜索引擎抓取
>
> clear属性只能在块元素身上生效 1103讲解



```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			.box{
				width: 300px;
				height: 300px;
				background: pink;
				overflow: hidden;
				position: relative;
			}
			.box::before{
				content:"before"; /* 必写项content */
				width:100px;
				height: 100px;
				background: yellow;
				/* display: block;
				margin: 10px auto 0; */
				float:left;
			}
			.box::after{
				content:"after";
				width: 100px;
				height: 100px;
				background: green;
				position: absolute;
				left:0;
				right:0;
				bottom:0;
				top:0;
				margin: auto;
			}
		</style>
	</head>
	<body>
		<div class="box">
			<i>box</i>
			
		</div>
		
	</body>
</html>
```









### 二.border实现三角形

#### 模拟三角形

border四个边公平划分效果图:

![border-display](https://pic1.zhimg.com/80/051f92f55023deb4542e6745c88edb03_720w.jpg?source=1940ef5c)

当我们把上, 左,右三条边隐藏掉(颜色设为transparent),效果如下:

```css
border-color:transparent transparent rgb(0,0,0) transparent;
border-width:10px 10px 10px 10px;
```



![border-bottom](https://pic2.zhimg.com/80/a9c9de26d2d5c18f5844fc7e360bbd67_720w.jpg?source=1940ef5c)

**零. 三角形实现原理**:

这个border-bottom呈**梯形状**, 上面这条边的长度等于div的宽度.所以**当div的宽度为0的时候,border-bottom就能呈现出三角形状态.边框的width也能理解为三角形的高度**.

当设置直角三角形的时候,除了**显示边框的width属性**(三角形的高度)需要大于0,也需要**宽度大于0**,要不然不会显示. 宽度就是对应其左右两侧的宽度,一侧为0,一侧设置大于0的数值.或者是为0的边框数值省略不写也是可以的.



**一.三角形实现:** 

1.宽度width为0,高度height为0. 

1.1 有一条横竖边设为: border-方向: 长度 solid 颜色;其他三个边设为: border-方向: 长度 solid transparent;

1.2 有两个横竖边的设置, 设置top或bottom.如果右边是直角,设置右边width为0; 如果左边是直角,设置左边width为0.

```css
//https://www.zhihu.com/question/35180018/answer/61554144
//https://www.cnblogs.com/chengxs/p/11406278.html

```

**二.实现**

2.1 triangle up

![triangle-up](https://www.mwcxs.top/static/upload/pics/2019/3/29UWmsYL8T8oUqP3A5RBQc7Wf4.png)

```css
等腰三角形 
#triangle-up{
	width:0;
  height:0;
  border-left:50px solid transparent;
  border-right:50px solid transparent;
  border-bottom:100px solid red;
}

或 直角等腰三角形 每条边的宽度都相等
#triangle-up{
  width:0;
  height:0;
  border:50px solid transparent;
  border-bottom-color:red;
}
```



2.2 triangle-left

![triangle-left](https://www.mwcxs.top/static/upload/pics/2019/3/29alsovh624Mb0bNQCzy5PqStS.png)

```css
#triangle-left{
    width:0;
    height:0;
    border-top:50px solid transparent;
    border-bottom:50px solid transparent;
    border-right:100px solid red;
}
//直角等腰三角形
#triangle-left{
  width:0;
  height:0;
  border:50px solid transparent;
  border-right-color:red;
}
```



2.3 trangle-top-left

![triangle-top-left](https://www.mwcxs.top/static/upload/pics/2019/3/290aJgMTaALP0v3rkk7F-89ouQ.png)

```css
#triangle-top-left{
    width:0;
    height:0;
    border-right:50px solid transparent;
    border-top:50px solid red;
}

等同于:
#triangle-top-left{
    width:0;
    height:0;
    border-right:50px solid transparent;
    border-top:50px solid transparent;
    border-bottom:0 solid transparent;
    border-left:0 solid transparent;
}
```



2.4 triangle-bottom-left

![triangle-bottom-left](https://www.mwcxs.top/static/upload/pics/2019/3/29FH81Y4G7Uo9bPbr2NBZHJEla.png)

```css
#triangle-bottom-left{
    width:0;
    height:0;
    border-bottom:50px solid red;
    border-right:50px solid red;
}
```



<hr/>





### 三.圆角

#### 1.圆角属性

```html
圆角单属性 
				 数值
				 百分比: 宽和高的百分比
				
			    左上 
				border-top-left-radius: 100px; 
			
				右下 
				border-bottom-right-radius: 100px;

				左下                    宽度  高度 
				border-bottom-left-radius: 50px 20px;
				
				
圆角复合属性 
				一个值: 左上 右上 右下 左下(顺时针)
				border-radius: 100px; 
				两个值:  左上右下   右上左下
				border-radius:10px 20px ; 
				三个值:     左上  右上左下  右下
				border-radius: 10px 20px 30px; 
				四个值: 左上 右上 右下 左下 
				border-radius: 10px 20px 30px 40px; 
				         宽度/高度  
				border-radius: 10px/50px; 
				                            宽度/高度 
				border-radius: 10px 10px 10px 10px/ 50px 50px 50px 5
```





### 四.盒子模型





### 五.文字阴影

文字阴影属性text-shadow



语法:

```html
text-shadow: 水平偏移 垂直偏移 模糊程度(羽化) 颜色
可以设置 '多组', 以英文逗号隔开
```



案例-文字凹凸效果

```html
h1{
	font-size:100px;
	text-align:center;
	color:#ccc;
	text-shadow: -1px -1px 0px #000, 1px 1px 0px #fff;   /*凹 效果*/
}

h1:nth-of-type(2){
	text-shadow: -1px -1px 0px #fff, 1px 1px 0px #000;  /*凸 效果*/
}


<h1>0922web前端高薪就业!!!</h1>
<h1>0922web前端高薪就业!!!</h1>
```





#### 文字边框(测试属性)

* 语法 `text-stroke: text-stroke-width text-stroke-color`

* 说明: 文字描边(宽度,颜色)的属性

* 写法:

  

  * | 内核类型              | 前缀     | 写法                |
    | :-------------------- | -------- | :------------------ |
    | Webkit(Chrome/Safari) | -webkit- | -webkit-text-stroke |
    | Gecko(Firefox)        | -moz-    |                     |
    | Presto(Opera)         | -o-      |                     |
    | Trident(IE)           | -ms-     |                     |
    | W3C                   |          | text-stroke         |





#### 文字裁剪(测试属性)

```html
		<style type="text/css">
			h1{
				font-size: 100px;
				text-align: center;
				background: url(mm.jpg) 0 -368px;
				/*测试属性  文字裁剪属性 */
                background-clip:text;
				-webkit-background-clip: text;
				color:transparent;
			}
		</style>

<h1>
    文字文字文字文字文字文字
</h1>
```









### 六.盒子阴影

box-shadow属性可以设置一个或多个下拉阴影的框. 

可以通过逗号分隔每个 `box-shadow` 元素的属性来添加多个 box-shadow。

语法

```html
box-shadow:h-shadow v-shadow blur spread color inset
```



| 值       | 描述                                          |
| -------- | --------------------------------------------- |
| h-shadow | 必须 水平阴影的位置 可负值           正值向右 |
| v-shadow | 必须 垂直阴影的位置 可负值           正值向下 |
| blur     | 可选 模糊距离                                 |
| spread   | 可选 阴影尺寸 扩张半径                        |
| color    | 可选 阴影的颜色                               |
| inset    | 可选 将外部阴影(outset)改为内部阴影           |



案例(立体球)

```html
<style>
    .box{
        width:300px;
        height:300px;
        border-radius:50%;
        margin:100px auto;
        box-shadow: -23px -10px 25px inset;
    }
</style>
```



```js
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```





### 七.背景background

background负责给盒子设置背景图片和背景颜色,是一个复合属性. 它可以被分解成如下几个设置项:

| 值                    | 说明                                             | css  |
| --------------------- | ------------------------------------------------ | ---- |
| background-color      | 指定要使用的背景颜色                             | 1    |
| background-position   | 设置背景图像的起始位置                           | 1    |
| background-size       | 指定背景图片的大小                               | 3    |
| background-repeat     | 指定如何重复背景图像                             | 1    |
| background-origin     | 指定背景图像的定位区域                           | 3    |
| background-clip       | 指定背景图像的绘画区域                           | 3    |
| background-attachment | 设置背景图像是否固定或者随着页面的其余部分滚动。 | 1    |
| background-image      | 指定要使用的一个或多个背景图像                   | 1    |
|                       |                                                  |      |



#### 0.背景起始位置position

background-position属性设置背景图像的起始位置

| 默认值 | 继承 | 版本 | JS语法                                      |
| ------ | ---- | ---- | ------------------------------------------- |
| 0% 0%  | no   | CSS1 | object..style.backgroundPosition = 'center' |

**属性值**

| 值                                                           | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| left top<br/>left center<br/>left bottom<br/>right top<br/>right center<br/>right bottom<br/>center top<br/>center center<br/>center bottom | 如果仅指定一个关键字，其他值将会是"center"                   |
| x%       y%                                                  | 第一个值是水平位置，第二个值是垂直。<br/>左上角是0％0％。右下角是100％100％。<br/>如果仅指定了一个值，其他值将是50％。 。<br/>默认值为：0％0％ |
| xpos ypos                                                    | 第一个值是水平位置，第二个值是垂直。<br/>左上角是0。单位可以是像素（0px0px）或任何其他 [CSS单位](https://www.runoob.com/try/css-units.html)。<br/>如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions |
| inherit                                                      | 指定background-position属性设置应该从父元素继承              |



#### 1.背景图像的尺寸size

设置背景图片大小,图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸.

注意：没有被背景图片覆盖的背景区域仍然会显示用[`background-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color)属性设置的背景颜色。此外，如果背景图片设置了透明或者半透明属性，衬在背景图片后面的背景色也会显示出来

| 默认值 | 继承性 | 版本 | JS语法                                  |
| ------ | ------ | ---- | --------------------------------------- |
| auto   | no     | CSS3 | object.style.backgroundSize='60px 80px' |



**语法**

```js
//单张图片的背景大小可以使用以下三种方法中的一种来规定(container cover 设置宽度高度)
background-size: length|percentage|cover|contain;

//
```

| 值         | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| length     | 设置图像的高度和宽度<br/>第一个值设置宽度，第二个值设置高度<br/>如果只设置一个值，则第二个值会被设置为 "auto" |
| percentage | 以父元素(背景区)的百分比来设置背景图像的宽度和高度<br/>第一个值设置宽度，第二个值设置高度<br/>如果只设置一个值，则第二个值会被设置为 "auto" |
| cover      | 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域<br/>背景图像的某些部分也许无法显示在背景定位区域中 |
| container  | 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域   |

**属性值**

`length`

指定背景图片大小，不能为负值

`percentage`

指定背景图片相对背景区（background positioning area）的百分比。背景区由[`background-origin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin)设置，默认为盒模型的内容区与内边距，也可设置为只有内容区，或者还包括边框。如果[`attachment`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment) 为`fixed`，背景区为浏览器可视区（即视口），不包括滚动条。不能为负值。

`auto`

以背景图片的比例缩放背景图片

`cover`

缩放背景图片以完全覆盖背景区，可能背景图片部分看不见

`container`

缩放背景图片以完全装入背景区，可能背景区部分空白







#### 1.背景裁剪属性

> 概述: **指定对象的背景图像向外裁剪的区域。**



```html
background-clip:
border-box(默认值 从边框开始可见) 背景图属性在这里只有引用地址 不要使用no-repeat
padding-box(从内边距开始可见)
content-box(仅内容区域可见)

```



案例-京东小圆点

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			*{
				margin: 0;
				padding: 0;
				list-style: none;
			}
			.box{
				width: 1000px;
				height: 600px;
				background: url(mm.jpg) no-repeat;
				position: relative;
			}
			.box ol {
				position: absolute;
				right:30px;
				bottom: 30px;
			}
			.box ol li{
				float:left;
				width: 50px;
				height: 50px;
				background: red;
				margin-right: 5px;
				border-radius: 50%;
				border: 10px solid transparent;  /*如果没有这个边框条件,直接在伪类中添加,会出现元素活动的情况.因为添加了个边框*/
				background-clip: padding-box;
			}
			.box ol li:hover{
				border: 10px solid rgba(0,0,255,.3);
				/**/
			}
		</style>
	</head>
	<body>
		<div class="box">
			<ol>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ol>
		</div>
	</body>
</html>

```







#### 2.背景定位区域

```html
语法:
background-origin: border-box| padding-box | content-box

默认值是padding-box

padding-box：
从padding区域（含padding）开始显示背景图像。

border-box：
从border区域（含border）开始显示背景图像。

content-box：
从content区域开始显示背景图像。


如果背景图像的 background-attachment 属性为 "fixed"，则该属性没有效果。
```







#### 4.滚动背景和固定背景

说明:

```html
background-attachment: scroll|fixed

scroll(默认值)滚动背景 背景图起始点在盒子内部,当盒子位置改变时,背景图随盒子位置改变而改变 
fixed 固定背景  背景图起点永远是浏览器窗口


搭配background-size:cover使用
```



案例:(qq背景)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			*{
				margin: 0;
				padding: 0;
			}
			body{
				height: 10000px;
			}
			div:nth-of-type(1){
				height: 956px;
				background: url(img/01.jpg) no-repeat center 0;
			}
			div:nth-of-type(2){
				height: 321px;
				background: url(img/02.png) no-repeat center 0;
			}
			div:nth-of-type(3){
				height: 321px;
				background: url(img/02.png) no-repeat center 0;
			}
			div:nth-of-type(4){
				height: 321px;
				background: url(img/02.png) no-repeat center 0;
			}
			section:nth-of-type(1){
				height: 768px;
				background: url(img/03.jpg) no-repeat center 0 ;
				background-attachment: fixed;
				background-size: cover;   /*原始图片尺寸大于浏览器窗口,使用bg-size属性可以将图片等比例缩放到当前浏览器窗口*/
			}
			section:nth-of-type(2){
				height: 768px;
				background: url(img/04.jpg) no-repeat center 0 ;
				background-attachment: fixed;
				background-size: cover;
			}
			section:nth-of-type(3){
				height: 768px;
				background: url(img/05.jpg) no-repeat center 0 ;
				background-attachment: fixed;
				background-size: cover;
			}
		</style>
	</head>
	<body>
		<div></div>
		<div></div>
		<section></section>
		<div></div>
		<section></section>
		<div></div>
		<section></section>
	</body>
</html>

```





#### 5.多重背景

> 说明: 背景图可以引用多组,使用英文逗号隔开. 按照引用的先后,在表现形式上从上到下排列的.



语法例子:

```html
background:url(1.png) no-repeat 0 0, url(2.png) no-repeat 0 0, url(3.png) no-repeat 0 0;

1.png在最上面,2.png其次,3.png最下面.
```



#### 6.背景图像创建纹理

`background` 属性支持使用 `url()` 函数作为属性值，这让我们可以通过链接的方式引入纹理或样式的图片。 图片链接的地址应写在括号内，一般会用引号包起来。

```css
background:url(https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png)
```



#### 7. 使用

```css
//语法
background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;

//引入斜杠的原因:消除歧义
请设想一下50% 50%这样的值，它到底是background-size还是background-position呢？当你在使用展开式属性时，CSS解析器明白你的意图；而当你使用简写属性时，解析器需要在没有属性名提示的情况下弄清楚50% 50%到底指什么。这就是需要引入斜杠的原因。

```



### 八.filter属性

> filter属性定义了元素的可视属性. (例如模糊和饱和度). IE浏览器不支持



css语法:

```html
filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();
```



[函数值表格](https://www.w3cschool.cn/cssref/css3-pr-filter.html):

| filter       | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| none         | 默认值,没有效果                                              |
| blur(px)     | 给图像设置高斯模糊, 所以值越大越模糊；默认是0,不接受百分比值。 |
| grayscale(%) | 将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0； |



 案例(图像模糊和网页黑色前景)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			body{
				/* 过滤器 
				grayscale 黑白网页
				*/
				filter: grayscale(100%);
			}
			.box{
				width: 300px;
				height: 300px;
				border: 1px solid #000;
				position: relative;
				overflow: hidden;
			}
			.box img{
				display: block;
				width: 300px;
				height: 300px;
				/* 过滤器属性 
				   blur 模糊属性
				*/
				filter: blur(0px) ;
				
			}
			.box h1{
				width: 150px;
				height: 50px;
				position: absolute;
				left:0;
				right:0;
				top:0;
				bottom:0;
				margin: auto;
				color:red;
			}
			.cover{
				/* width: 100%;
				height: 100%; */
				background: rgba(0,0,0,.5);
				position: absolute;
				left:0;
				top:0;
				right:0;
				bottom:0;
				margin: auto;  /* 居中写法 */
			}
		</style>
	</head>

		<div class="box">
			<img src="img/timg.jfif" >
			<h1>付费观看</h1>
		</div>
		
	</body>
</html>

定位元素覆盖父元素的两种写法
```

```html
.cover{
				/* width: 100%;
				height: 100%; */
				background: rgba(0,0,0,.5);
				position: absolute;
				left:0;
				top:0;
				right:0;
				bottom:0;
				margin: auto;  /* 居中写法 */
			}

一种是width和height采用100%,
第二种是除了定位带的两个方位,再补全剩余两个,加margin:auto;
```



### 九.渐变

HTML 元素的背景色并不局限于单色。 CSS 还为我们提供了颜色渐变。 可通过 `background` 里的 `linear-gradient()` 实现线性渐变

语法:

```js
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);

第一个参数指定了颜色过渡的方向——它的值是角度，90deg 表示垂直渐变（从左到右），45deg 表示沿对角线渐变（从左下方到右上方）。
其他参数指定了渐变颜色的顺序

```



#### 1.线性渐变

> 说明: 线性渐变,沿着一条轴线从某个颜色过渡到某个颜色,渐变最少需要两个颜色
>
> 沿着某条直线朝一个方向产生渐变效果。



```html
渐变的方向:
to bottom 由上至下(默认值)
to left  由右至左
to right 由左至右
to top   由下至上

to left top 向左上(top left没顺序要求)
to left top 向左上
to right top 向右上
to left bottom 向左下
to right bottom 向右下



写法:

关键字
background-image:linear-gardient(to bottom,red,yellow,blue);
background-image:linear-gardient(to left top,red,yellow,blue);


数值角度: 单位deg
background-image:linear-gardient(90edge,red,yellow,blue);
0deg 效果是从下到上依次是red,yellow,blue
90deg 效果是从左到右依次是red,yellow,blue


颜色加数值的写法(正方形的div盒子,宽高各是300px):
background-image:linear-gardient(to right,red 50px,yellow 150px, blue 200px);
background-iamge:linear-gardient(to right,red 0,red 50px,yellow 150px,blue 200px,blue 300px);
从0px-50px是red,从50px-150px是red到yellow之间的渐变,从150px-200px是yellow到blue之间的渐变,从200px-300px是blue.


从0%-20%是red,从20%-50%是red到yellow的渐变, 从50%-80%是yellow到blue的渐变,从80%-100%是blue
background-image:linear-gardient(to right,red 20%, yellow 50%, blue 80%);

用渐变模拟一半红一半蓝色
background-image:linear-gardient(to right,red 50%,blue 50%);
```







#### 1.重复性渐变

background-image:repeating-linear-gardient(to right,red 30px, yellow 80px, blue 150px);

将渐变进行平铺

`repeating-linear-gradient()` 函数和 `linear-gradient()` 很像，主要区别是前者会重复指定的渐变。 `repeating-linear-gradient()` 有很多参数，为了便于理解，本关只用到角度值和色标。

```css
background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
```







#### 3.径向渐变

> 是从圆心到半径之间某个颜色过渡到某个颜色,默认半径是从圆心到最远角的距离
>
> 从一个**中心点**开始沿着**四周**产生渐变效果。



```html
语法:
background-image:radial-gardient(图形 最远角/最近角(最远边/最近边) at圆心(半径水平位置,半径垂直位置),颜色 数值,颜色 数值,颜色 数值);

图形:正方形只能设置成圆形 设置椭圆ellipse 不起作用
长方形: 默认是椭圆,可以设置成圆circle

圆心:
at 半径水平位置 半径垂直位置
(视频中说的是前提设置了closest-side,然后假设圆心位置在左上角,那么水平和垂直位置分别是到最近边x方向,y方向的距离)

半径距离:
farthest-corner
closest-corner
farthest-side
closest-side

```







#### 4.重复径向渐变

> 将径向渐变进行平铺 
>
> background-image:repeating-radial-gardient()



### 十.过渡

> 概述: 在设定的时间内,某个属性从一个值过渡到另一个值就是过渡
>
> 过渡有来有回(都有时间过渡)   要将过渡写在属性默认状态下
>
> 过渡有来无回 (返回原来的状态没有时间)    过渡一般写在:hover属性下



#### 过渡的属性:

```html
** 只有属性值有数值变化的才能有过渡效果
延伸1103
- 设置过渡一定要给对应的样式设置初始值吗?
 - 通过过渡来操作元素样式时,是否需要设置初始值,是由这个样式的默认值是否能参与过渡来决定.
 - width默认值auto 不能参与过渡
 - 渐变不能参与过渡,因为渐变的本质是绘制了一张背景图

默认值:
transition:all 0 ease 0;


单属性:

过渡的属性
transition-property:width,height,blur(),bgcolor,opacity,;
transition属性不支持display

过渡的时间:
transition-duration:1s; 单位:秒/毫秒(ms)  换算:1s=1000ms;
请始终设置过渡的时间,否则默认为0.

过渡的方式:
transiton-timing-function:cubic-bezier(0,-0.53,1,1.74);
linear： 线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0) 
ease： 平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0) 
ease-in： 由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0) 
ease-out： 由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0) 
ease-in-out： 由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0) 

贝赛尔曲线:
https://cubic-bezier.com/#0,-0.53,1,1.74


过渡的延时时间:
transition-delay:500ms;  可以用.5s代替


==============================
复合属性
transition: 过渡的属性 过渡的时间 过渡的方式 过渡的延时时间
复合属性分别设置多个过渡属性时,要分组写,组之间用逗号隔开
transition:width 1s linear,height 1s ease;

使用all来代替所有的过渡属性
transition:all 1s linear;
transition-property:width,height;
```

#### 过渡的属性(visibility代替display)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
			div {
			  border: 1px solid #eee;
			}
			div > ul {
			  visibility: hidden;
			  opacity: 0;
			  transition: visibility 0s, opacity 0.5s linear;
			}
			div:hover > ul {
			  visibility: visible;
			  opacity: 1;
			}
		</style>
	</head>
	<body>
		<div>
		  <ul>
		    <li>Item 1</li>
		    <li>Item 2</li>
		    <li>Item 3</li>
		  </ul>
		</div>
	</body>
</html>
```





#### 过渡案例(小米图)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title></title>
	<style type="text/css">
		*{
			margin:0;
			padding:0;
			list-style:none;
		}
		body{
			background:#f8f8f8;
		}
		img{
			display:block;
		}
		
		.box{
			width:700px;
			height:300px;
			margin:100px auto;
			background:pink;
		}
		.box ul li{
			width:220px;
			height:300px;
			float:left;
			margin-right:10px;
			position:relative;
			overflow:hidden; 
			/* transition: all 1s ease; */
			/* 开始的时候,是在目标span中添加的display:none,当鼠标移动到a上的时候,让span变成block,然后其bottom变为0即可. 但过渡效果实现不了.因为transition过渡属性只支持有数值变化的属性.  */
		}
		.box ul li a{
			text-decoration: none;
			color:#333;
			display:block;
			width:100%;
			height:100%;
			text-align:center;
			
		}
		.box ul li a h3{
			transition:all .5s ease;
		}
		.box ul li a span:nth-of-type(1){
			display:block;   /*案例中用的是p 如果用span需转换成块元素才能添加外边距*/
			margin-top:15px;
		}
		.box ul li a span:last-child{
			position:absolute;
			width:220px;
			height:40px;
			line-height:40px;
			font-size:24px;
			color:#fff;
			background:orange;
			left:0;
			bottom:-40px;
			transition:all .5s ease;
			display:none;
		}
		.box ul li a:hover span:last-child{
			bottom:0;
			display:block;
		}
		.box ul li a:hover h3{
			text-shadow:1px 1px 2px green;
		}
		.box ul li:hover{
			box-shadow:1px -30px 25px yellowgreen;
			/* transform:translate(0,10px); */
			top:-10px;
		}
	</style>
</head>
<body>
	<div class="box">
		<ul>
			<li>
				<a href="##">
					<img src="5.jpg" >
					<h3>小米耳麦</h3>
					<span>10:15开始抢购</span>
					<span>图片说明</span>
				</a>
			</li>
			
			<li>
				<a href="##">
					<img src="5.jpg" >
					<h3>小米耳麦</h3>
					<span>10:15开始抢购</span>
					<span>图片说明</span>
				</a>
			</li>
			
			<li>
				<a href="##">
					<img src="5.jpg" >
					<h3>小米耳麦</h3>
					<span>10:15开始抢购</span>
					<span>图片说明</span>
				</a>
			</li>
		</ul>
	</div>
</body>
</html>
```





### 十一. transform

transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜

```css
语法: transform:none|transform-functions;
```

#### 1.位移

根据 ==当前位置==进行位移,类似相对定位,  位移后原先位置还保留

语法:

```html
transition:translate(水平位置,垂直位置)

可以使用px,也可以使用%. 百分比是相对于自身的百分比!!!!

translate只能适用于块级显示模式元素,对行内元素无效,但可以搭配定位来进行适用.
```



##### 1.1 位移案例(京东侧边栏)

<iframe height="300" style="width: 100%;" scrolling="no" title="css-位移" src="https://codepen.io/westover/embed/rNyqZLw?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/westover/pen/rNyqZLw'>css-位移</a> by xxl
  (<a href='https://codepen.io/westover'>@westover</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>





#### 2. 旋转

概述: 图片沿Z轴旋转.顺时针是正值, 逆时针是负值.

transform:rotate( x deg)





##### 旋转轴

> 概述:
>
> transform: rotateX();  
>
> 沿着X轴旋转,从屏幕的右侧方向看, 正值是顺时针, 负值是逆时针
>
> transform: rotateY();
>
> 沿着Y轴旋转,从屏幕下方方向看, 正值是顺时针, 负值是逆时针
>
> transform:rotateZ();默认值
>
> rotateZ或者rotate沿着z轴旋转,向右转是顺时针,向左转是逆时针 正值是顺时针, 负值是逆时针





##### 旋转中心点设置

> transform-origin: 水平位置 垂直位置.
>
> 属性值可以采用关键词和px
>
> 水平: left center right
>
> 垂直: top center bottom
>
> transform-origin:right top;
>
> transform-origin:top;
>
> transform-origin:100px 10px;
>
> Z轴的旋转中心点是由x和y轴确定的
> X轴的旋转中心点是由y轴确定的
> Y轴的旋转中心点是由X轴确定的
>
> 若:
>
> transform-origin:right top;
>
> transform:rotateY(180deg);
>
> 则目标元素只会沿着右侧边旋转180度



##### 位移和旋转的位置

> 当位移和旋转同时存在时,要先写位移后写旋转

例如: `transform:translate(100px 100px) rotate(90deg) `;





##### 案例-音乐盒

```html
<!DOCTYPE html>/*用伪元素来代替标签非常方便*/
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			*{
				margin: 0;
				padding: 0;
			}
			body{
				height: 3000px;
			}
			.box{
				width: 300px;
				height: 300px;
				/* background: pink; */
				margin: 100px auto;
				position: relative;
			}
			.box::before{
				content: "";
				width: 100%;
				height: 100%;
				border: 1px solid #000;
				background: url(img/musicb.jpg) no-repeat 0 0 ;
				position: absolute;
				left:0;
				top:0;
				border-radius: 50%;
				transition: all .5s;
			}
			.box::after{
				content: "";
				width: 100%;
				height: 100%;
				border: 1px solid #000;
				background: url(img/musict.jpg) no-repeat 0 0 ;
				position: absolute;
				left:0;
				top:0;
				border-radius: 50%;
				transition: all .5s;
				transform-origin: bottom;
			}
			.box:hover::after{
				transform: rotateX(-180deg);
			}
			.box:hover::before{
				transform: rotate(360deg);
			}
		</style>
	</head>
	<body>
		<div class="box">
			
		</div>
	</body>
</html>


第二种是用图片方法
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
			*{
				margin:0;
				padding:0;
				list-style:none;
			}
			.box{
				width:300px;
				height:300px;
				background:pink;
				margin:100px auto;
				position:relative;
			}
			.box img:first-child {
				width:300px;
				height:300px;
				border:1px solid #333;
				border-radius:50%;
				transition:all .5s ease;
			}
			.box img:last-child{
				width:300px;
				height:300px;
				border-radius:50%;
				border:1px solid #333;
				position:absolute;
				left:0;
				top:0;
				transition:all .5s ease;
				transform-origin:bottom;
				
			}
			.box:hover img:last-child{
				
				transform:rotateX(-180deg);
			}
			.box:hover img:first-child{
				transform: rotate(360deg);
			}
		</style>
	</head>
	<body>
		<div class="box">
			
				<img src="img/musicb.jpg" >
			
				<img src="img/musict.jpg" >
		
		</div>
	</body>
</html>
```





#### 3.缩放

CSS 属性 `transform` 里面的 `scale()` 函数可以用来改变元素的显示比例

transform:scale(宽度系数 高度系数)

transform:scale(宽度和高度的系数);





#### 4.景深透视效果

> 概述:  景深透视属性: 实现近大远小的效果   取值范围是800px-1500px之间



语法:

```html
perspective:1000px;
需要给目标元素的父元素设置
```





#####  3D空间

```html
开启3D空间 需要给目标元素的父元素设置

transform-style:preserve-3d;
```



#### 5. 动画



##### 动画属性animation

动画是使元素从一种样式逐渐变化为另一种样式的效果。请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。0% 是动画的开始，100% 是动画的完成。

```html
动画复合属性: 
 animation: 名称 持续时间 速度曲线(默认ease) 延迟时间(默认是0) 迭代次数(默认是1) 方向(默认normal)
动画单属性:

动画名称:
animation-name:

动画持续时间
animation-duration

速度曲线(和过渡方式一样)
animation-timing-function

动画延时时间
animation-delay
定义动画开始前等待的时间，以秒或毫秒计。默认值为0;允许负值，-2s 使动画马上开始，但跳过 2 秒进入动画。

动画次数
animation-iteration-count
默认值是1 infinite是无限次

动画的方向
animation-direction
reverse 反向   逆时针
alternate 有来有去 需要2次  
alternate-reverse 先去后来  

指定了在动画结束时元素的样式
animation-fill-mode:forwars


在所有选择器之外定位关键帧区间
@keyframes 规则是创建动画。
@keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。
定义关键帧区
@keyframes name(动画名称对应animation-name){

	from{
		transform:rotate(0deg);      /*动画的开始*/
} 
	to{
		transform:rotate(360deg);     /*动画的结束*/
}	

可以将关键帧区间分成若干份,用百分比表示:
@keyframes name{

				0%{
					transform: rotate(45deg);
					background: yellow;
				}
				20%{
					transform: translate(3000px,3000px);
					background: #000;
				}
				40%{
					opacity: 0;
					
				}
				60%{
					height: 800px;
					transform: rotate(45000deg);
				}
				80%{
					font-size: 200px;
				}
				100%{
					width: 100px;
					height: 100px;
					
				}
}
```





##### 案例-太阳与海

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
			body{
				background:lightblue;
				/* position:relative; 绝对定位默认起始点 无需给body设置了*/
			}
			.sun{
				position:absolute;
				left:50px;
				top:30px;
				width:100px;
				height:100px;
				background:#fff;
				border-radius:50%;
				
				
			}
			.sun::before{
				content:"";
				position:absolute;
				left:0;
				top:0;
				width:100%;
				height:100%;
				background:rgba(255,255,255,.5);
				border-radius:50%;
				
				animation: sun 1s  infinite alternate;
			}
			
			.sun::after{
				content:"";
				position:absolute;
				left:0;
				top:0;
				width:100%;
				height:100%;
				background:rgba(255,255,255,.5);
				border-radius:50%;
				
				animation: sun 1s ease .5s infinite alternate;
			}
			
			@keyframes sun{
				from{
					transform:scale(1);
					opacity:1;
				}
				to{
					transform:scale(1.5);
					opacity:0;
				}
			}
			
			.sea1{
				width:100%;
				height:235px;
				background:url(./1.png) no-repeat center 0;
				position:absolute;
				left:0;
				bottom:0;
				
				opacity:.8;
				animation:sea 1s infinite alternate;
				
			}
			
			.sea2{
				width:100%;
				height:211px;
				background:url(./2.png) no-repeat center 0;
				position:absolute;
				left:0;
				bottom:0;
				
				opacity:.9;
				animation:sea 1s .5s infinite alternate;
				
			}
			@keyframes sea{
				form{
					bottom:0;
				}
				to{
					bottom:-30px;
				}
			}
		</style>
	</head>
	<body>
		<div class="sun"></div>
		<div class="sea1"></div>
		<div class="sea2"></div>
	</body>
</html>
```



##### 动画库Animation.css

> 概述:
>
> github地址:https://github.com/animate-css
>
> 如何使用: link导入 元素中添加类名(animated 目标类名)



如何使用:

>下载: (老师讲的是百度搜了个[网址](https://www.dowebok.com/demo/2014/98/)让后下载的css)
>
>链接: 
>
>```html
><link
>    rel="stylesheet"
>    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
>  />
>```
>
>调用(不要忘记前缀animate_animated  不同版本的调用前缀不同 下面是最新的):
>
>```html
><h1 class="animate__animated animate__bounce">An animated element</h1>
>```





#### 2D3D综合案例-柯南图

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
			* {
				margin: 0;
				padding: 0;

			}

			body {
				background: #ccc;

			}

			.box {
				width: 400px;
				height: 250px;
				margin: 100px auto;
				perspective:1000px;
			}
			.box a{
				display:block;
				width:100%;
				height:100%;
				background:url(./07.jpg) no-repeat 0 0;
				/* transform:rotateX(80deg); */
				position:relative;
				transform-style:preserve-3d;
				transition:all 1s;
			}
			.box a::before{
				content:"";  /*刚开始是在content中添加的文字*/
				position:absolute;
				left:0;
				bottom:0;
				width:100%;
				height:40px;
							
				background:url(./07.jpg)  no-repeat 0 bottom; /*背景图和背景色是相互冲突的 注意*/
				/* background:rgba(0,0,0,.3); */
				transform-origin:bottom;
				transform:rotateX(90deg);
				
			}
			.box a span{
				position:absolute;
				left:0;
				bottom:-40px;
				width:100%;
				height:40px;
				/* line-height:40px; */
				text-align:center;
				font:bold 24px/40px "Microsoft yahei";
				background:rgba(0,0,0,.3);
				color:#fff;
				transform-origin:top;
				transform:rotateX(-90deg);
				
			}
			
			
			.box a::after{
				content:"";
				position:absolute;
				left:0;
				top:0;
				width:100%;
				height:100%;
				background:rgba(0,0,0,.3);
				transition:all 1s;
				box-shadow:0 0 50px 30px rgba(0,0,0,.3);
				
				transform:translateZ(-200px) translateY(200px) rotateX(90deg) scale(.7);
			}
			.box:hover a::after{
				transform:translateZ(-100px) translateY(200px) rotateX(0deg) scale(1);
				}
			
			
			.box:hover a{
				transform:rotateX(80deg);}
		</style>
	</head>
	<body>
		<div class="box">
			<a href="##">
				<span>真相只有一个</span>
			</a>
		</div>
	</body>
</html>

```



## 响应式

##### 左侧固定右侧自适应

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			/* 
			左侧固定,右侧自适应
			 */
			*{
				margin: 0;
				padding: 0;
			}
			.box{
				height: 600px;
				background: #ccc;
			}
			.left{
				width:200px;
				height: 600px;
				background: yellow;
				float:left;
				margin-left:-100% ;  /*首先是左右元素换顺序,再使用left元素向左外边距移动,当外边距为-200px也就是自身宽度时,left元素移动到right元素的右侧进200px的宽度,left元素是在right元素上面的.. */
			}
			.right{
				width:100%;
				height: 600px;
				background: yellowgreen;
				float:left;
			
			}
			.content{
				padding-left: 200px;
				
			}
		</style>
	</head>
	<body>
		<div class="box">
			<div class="right">
				<!-- 块元素特性:当不设置固定宽度时,宽度和父元素一样,自身设置padding,border,margin后,从content的区域自动计算 -->
				<div class="content">右侧哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
			</div>
			<div class="left">左侧</div>
		</div>
	</body>
</html>
```

##### 双飞翼布局

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			/* 
			双飞翼布局
			 */
			* {
				margin: 0;
				padding: 0;
			}

			.box {
				height: 600px;
				background: #ccc;
			}

			.left {
				width: 200px;
				height: 600px;
				background: yellow;
				float: left;
				margin-left: -100%;
			}

			.center {
				width: 100%;
				height: 600px;
				background: red;
				float: left;
			}

			.right {
				width: 200px;
				height: 600px;
				background: yellowgreen;
				float: left;
				margin-left: -200px;
			}
			.content{
				padding: 0 200px;  /*参考上面案例写法*/
                /* margin */
			}
		</style>
	</head>
	<body>
		<div class="box">
			<div class="center">   /*center和left位置互换,参考第一次的布局写法 */

				<div class="content">中间哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈中间</div>
			</div>
			<div class="left">左侧</div>
			<div class="right">右侧</div>
		</div>
	</body>
</html>

```





##### 圣杯布局

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			/* 
			圣杯布局
			 */
			* {
				margin: 0;
				padding: 0;
			}

			.box {
				/* 最小宽度 */
				min-width: 800px;
				/* 最大宽度 */
				/* max-width: 900px; */
				height: 600px;
				background: #ccc;
				margin: 0 200px;     /*基本和双飞翼布局一致.   布局的第一步   */
			}

			.left {
				width: 200px;
				height: 600px;
				background: yellow;
				float: left;
				margin-left: -100%;
				position: relative;  /*布局的第二步   将左右margin区域覆盖*/
				left:-200px;
			}

			.center {
				width: 100%;
				height: 600px;
				background: red;
				float: left;
			}

			.right {
				width: 200px;
				height: 600px;
				background: yellowgreen;
				float: left;
				margin-left: -200px;
				position: relative;
				right:-200px;
			}
			
		</style>
	</head>
	<body>
		<div class="box">
			<div class="center">

				中间哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈中间
			</div>
			<div class="left">左侧</div>
			<div class="right">右侧</div>
		</div>
	</body>
</html>

```

#### 

##### 其他 - 伪等高布局

```HTML
- 使用padding-bottom增加元素的高度
- 使用margin-bottom负值,减小元素宽度
- 父元素overflow:hidden;


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .clearFix{
            *zoom: 1;
        }
        .clearFix:after{
            content: '';
            display: block;
            clear: both;
        }
        .box{
            width: 500px;
            border: 3px solid #000;
            overflow: hidden;
        }
        .left{
            width: 200px;
            float: left;
            background: pink;
        }
        .right{
            width: 300px;
            float: left;
            background: yellowgreen;
        }
        .box>div{
            padding-bottom: 1000px;
            margin-bottom: -1000px;
        }
    </style>
</head>
<body>
    <div class="box clearFix">
        <div class="left">
            left <br>
            left <br>
            left <br>
            left <br>
            left <br>
            left <br>
            left <br>
        </div>
        <div class="right">
            right<br>
            right<br>
            right<br>
            right<br>
            right<br>
            right<br>
            right<br>
            right<br>
            right<br>
            right<br>
            right<br>
        </div>
    </div>
</body>
</html>
```



##### 其他-商品列表布局

```HTML
需求:盒子宽度1000px,每个商品盒子宽度300px,右外边距50px.如何使用css将4个盒子放在一行
方案:给商品盒子添加一个父元素盒子,宽度为1050px.父元素使用overflow:hidden隐藏多余透明.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .clearFix{
            *zoom: 1;
        }
        .clearFix::after{
            content: '';
            display: block;
            clear: both;
        }
        .wrap{
            width: 1000px;
            border: 1px solid #000;
            margin: 0 auto;
            /*overflow: hidden;*/
        }
        .hideBox{
            width: 1050px;
        }
        .item{
            width: 300px;
            height: 200px;
            margin-right: 50px;
            float: left;
            background: pink;
            margin-bottom: 30px;
        }
        /* .m_r_0{
            margin-right: 0;
        } */
    </style>
</head>
<body>
    <div class="wrap clearFix">
        <div class="hideBox">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
    <div style="float:left">111</div>
</body>
</html>
```



### 响应式布局5种方案

#### 方案1： 百分比布局

> 利用对属性设置百分比来适配不同屏幕，注意这里的百分比是相对于父元素的；
> 能设置的属性有 width ,heigth,padding,margin ,其他属性比如border,font-size 不能用百分比设置的
>
> 一句话介绍：响应式布局可以让网页同时适配不同分辨率和不同手机端，让客户有更好的体验

```js
.wrapper . left{
	width:50%;
}
.wrapper . right{
	width:50%;
}
.tabBox{
	margin-top:20px;
}
```



#### 方案2：使用媒体查询（css3 @media查询）

> 利用媒体查询设置不同分辨率下的css 样式，来适配不同屏幕，进行自适应布局

媒体查询相对于百分比布局，可以对布局进行更细致的调整，但需要在每个分辨率下面都写一套 css 样式；分辨率拆分可视项目具体情况而定。 

注意：IE6、7、8 不支持媒体查询。

```html
定义条件关键字
@media

定义一个条件:
定义最小宽度:  >=
@media (min-width){}

定义最大宽度: <= 
@media (max-width){}

and 条件连接关键字,左右最少一个空格,否则报错
screen 彩屏设备
    
例子:
在800px和1200px之间
@media screen and (min-width:800px) and (max-width:1200px)

orientation  横竖屏
    值:
landscape  横屏  宽度大于高度
portrait  竖屏   高度大于宽度
    
@media (orientation:ladscape){}        
            
                
外链式媒体查询
 在目标.css中添加符合媒体查询条件时的css样式   
	<link rel="stylesheet" type="text/css" href="ipad.css" media="(min-width:800px) and (max-width:1000px)"/>
		<link rel="stylesheet" type="text/css" href="phone.css" media="(max-width:768px)"/>
		
	</head>
	<body>
		<div class="one"></div>
	</body>
		        
 ipad.css
-----------------------------------------
 .one{
	width: 500px;
	height: 500px;
	background: pink;
}
        
    
```



#### 方案3：rem响应式布局

> 当前页面中元素的rem 单位的样式值都是针对于html 元素的font-size 的值进行动态计算的，所以有两种方法可以达到适配不同屏幕：
> 第一种利用媒体查询，在不同分辨率下给 html 的 font-size 赋值。
> 第二种利用 js 动态计算赋值，详细代码如下图.
>
> 缺点就是打开页面时候，元素大小会有一个变化过程。



#### 方案4：vw响应式布局

> 根据 PSD 文件宽度或高度作为标准，元素单位 px 转换为 vw 或 vh，比如font-size: 12px，PSD 文件宽度 375，转换公式 12 * 100 / 375，则样式改为font-size: 3.2vw，下面是我经常使用的工具，有利于提高转换效率。



#### 方案5：flex弹性布局

> 利用 flex 属性来适配不同屏幕





### 弹性布局flex

#### 介绍

> Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。设为Flex布局以后，子元素的块级特性会消失;行内元素也可以设置flex布局;webkit内核的浏览器,必须加上`-webkit`前缀.

```css
//行内元素设置flex布局
.box{
    display:inline-flex;
}
//webkit内核的浏览器,必须加上-webkit前缀.
.box{
    display:-webkit-flex;
    display:flex;
}
```



#### 基本概念

采用flex布局的元素,成为flex容器(container). 它的所有子元素自动成为容器成员,称为flex项目(弹性元素)

容器默认存在水平的主轴(main axis)和垂直的侧轴(cross axis).弹性元素默认沿主轴排列.

![flex布局](https://www.runoob.com/wp-content/uploads/2015/07/3791e575c48b3698be6a94ae1dbff79d.png)



#### 容器的6属性

```markdown
flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content
```



##### flex-direction

```js
flex-direction属性决定主轴的方向（即项目的排列方向）

flex-direction:row|row-reverse|column|column-reverse
row 默认值.     主轴是水平方向,左边开始,右边结束. 侧轴是垂直方向,上边开始,下边结束
row-reverse    主轴是水平方向,右边开始,左边结束. 侧轴是垂直方向,上边开始,下边结束

column         主轴是垂直方向,上边开始,下边结束. 侧轴是水平方向,左边开始,右边结束   
column-reverse 主轴是垂直方向,下边开始,上边结束. 侧轴是水平方向,左边开始,右边结束 
```



##### flex-wrap

```js
flex-wrap属性定义，如果一条轴线排不下，如何换行

flex-wrap:nowrap|wrap|wrap-reverse

nowrap(默认):不换行
wrap:换行，第一行在上方
wrap-reverse: 换行，第一行在下方
```



##### flex-flow

```js
flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

.box{
    flex-flow:<flex-direction><flex-wrap>
}
```



##### justify-content

```js
定义了项目在主轴上的对齐方式

justify-content: flex-start|flex-end|center|space-between|space-around

它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
```

![justify-content](https://www.runoob.com/wp-content/uploads/2015/07/c55dfe8e3422458b50e985552ef13ba5.png)

##### align-items

```js
定义了项目在交叉轴上如何对齐

align-items: flex-start | flex-end | center | baseline | stretch

它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下

flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```

![align-items](https://www.runoob.com/wp-content/uploads/2015/07/2b0c39c7e7a80d5a784c8c2ca63cde17.png)

##### align-content

```js
定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

align-content: flex-start | flex-end | center | space-between | space-around | stretch

该属性可能取6个值。

flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。
```

![](https://www.runoob.com/wp-content/uploads/2015/07/f10918ccb8a13247c9d47715a2bd2c33.png)

#### 弹性元素的6属性

```js
order
flex-grow
flex-shrink
flex-basis
flex
align-self
```

##### order

```js
定义项目的排列顺序。数值越小，排列越靠前，默认为0

.item{
    order:<integer>  
}
```

![](https://www.runoob.com/wp-content/uploads/2015/07/59e399c72daafcfcc20ede36bf32f266.png)



##### flex-grow

```css
//定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
//如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
.item{
    flex-grow:<number> /*default 0*/
}

```

![](https://www.runoob.com/wp-content/uploads/2015/07/f41c08bb35962ed79e7686f735d6cd78.png)



##### flex-shrink

```css
//定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
//如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。  负值对该属性无效。
.item{
    flex-shrink:<number> /*default 1 */
}
```

![](https://www.runoob.com/wp-content/uploads/2015/07/240d3e960043a729bb3ff5e34987904f.jpg)



##### flex-basis

```css
//属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
//它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

.item {
  flex-basis: <length> | auto; /* default auto */
}
```



##### flex

```css
//属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
//该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```



##### align-self

```css
//属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}


```

![](https://www.runoob.com/wp-content/uploads/2015/07/55b19171b8b6b9487d717bf2ecbba6de.png)





### 1017



#### 案例-开房流程

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			* {
				margin: 0;
				padding: 0;
				list-style: none;
			}

			body {
				background: #eee;
			}

			.box {

				width: 90%;
				height: 20px;
				/* background: pink; */
				margin: 200px auto;
				position: relative;
			}
			/* 线 */
			.box::after{
				content: "";
				width: 100%;
				height: 1px;
				background:dimgray;
				position: absolute;
				left:0;
				top:50%;
				z-index: -1;
			}
			.box ul li {
				width: 18px;
				height: 18px;
				border: 2px solid red;
				border-radius: 50%;
				background-image: radial-gradient(red 0%, red 50%, #fff 50%, #fff 100%);
				position: relative;
			}

			.box ul li span {
			    position: absolute;
				/* left: -15px;
				top: -20px; */
				color: gray;
				font-size: 12px;
				/* width: 80px; */
				white-space: nowrap;
				
				/* 对行内元素不起作用   需要将行内元素转成块显示模式或者行内块,  或者使用绝对定位丧失元素原有属性*/
				transform: translate(-15px,-20px);
			}

			.box ul {
				display: flex;					 /* 给弹性元素的父元素弹性空间设置 */
				justify-content: space-between;  /* 给弹性元素的父元素弹性空间设置 */
			}
		</style>
	</head>
	<body>
		<div class="box">
			<ul>
				<li>
					<span>预约入住</span>
				</li>
				<li>
					<span>拎包入住</span>
				</li>
				<li>
					<span>开房进行中...</span>
				</li>
				<li>
					<span>付款退房</span>
				</li>
			</ul>
		</div>
	</body>
</html>

```





#### Less简介

> 是一个预处理文件,在css语法基础之上,新增加变量,函数,支持数学运算,报错......
>
> 进行编译后,生成css文件



```html
less写法:
.one{
	width:200px+100;
	height:200px;
	background:pink;
	& p{                   /* 嵌套元素关系可以直接在less中嵌套写    &代表父级标签 可以省略可以不省略 */
		color:red;
		span{
			font-size:12px;
			}
		}
	&.two{color:blue;}	
	}


less使用:
单行注释: Ctrl+/
多行注释: Ctrl+shift+/

拼写错误不会报错
```







#### 移动端适配

> 浏览器默认字号16px
>
> 从20年开始,浏览器可识别的最小字号是1px .但因为安装了不同版本的关系,有的Chrome等浏览器会将小于等于12px的数字显示为12px.
>
> DPR 设备像素比 device pixel ratio



##### 字体单位

```html
em 
1em=1font-size

rem
1rem=html根标签一个字号的大小


```



##### 视口(viewport)

> 概述:
>
> 视口:显示窗口,设备的屏幕,pc的浏览器窗口等
>
> 移动设在出厂默认视口宽度是980px
>
> 苹果公司提出将视口大小设置成和屏幕的大小一致



使用:

> ```html
> <meta name="viewport" content=" width=device-width , initial-scale=1.0 ">
> ```
>
> 
>
> 快捷键: meta:vp tab键



vw单位

```html
1vw=当前屏幕宽度的1%
100vw=当前屏幕宽度的100%

在750px屏幕下
1vw=7.5px
100vw=750px

1px=1vw/7.5=0.13333vw
60px=0.13333vw*60=8vw

在375px屏幕下
100vw=375px
1vw=3.75px
1/3.75=1px
1px=0.2666vw


2倍图设计稿
```





##### vw单位结合less结合rem

> 浏览器不同版本最小字体设置不一样
>
> 所以使用根元素使用0.13333vw 会导致有些浏览器使用最小字体12px
>
> 需要欺骗浏览器
>
>  



```html
接上面(750px宽的psd图设计稿):

html{font-size:0.13333vw}

<body>
    .div{
    	width:60rem(60*0.13333vw);
    }
</body>


因为0.13333vw不足12px,有的浏览器默认最小及以下的值为12px.
所以,div的width值会变成60*12px为720px.
故需要对浏览器进行欺骗:




/*
在375px屏幕下
1vw=3.75px
1px=1vw/3.75=0.2666vw
故,
0.1333vw=0.5px
故,需要将rem扩大.
10倍 5px  小于12px
20倍 10px 小于12px
30倍 15px 大于12px
40倍 20px 大于12px

因为还有比375px小的屏幕,所以根元素的font-size采用了40倍的数值.
故,1rem=0.1333vw*40
故,body中使用rem单位的尺寸需要除掉40.
*/

故,标准要求写法:
html{font-size:5.3332vw}  0.1333vw*40

less中:
body{
	.div{
		width:60/40rem;  /* less中可进行数学运算 */
		}
}
```





### css基础优化策略

> https://www.cnblogs.com/yangchin9/p/12516477.html



#### 1.渲染优先级

```js
!import>行内样式(1000)>id选择器(100)>类选择器(10)>标签选择器(1)>继承>通配符>类兰奇默认属性
```

#### 2.继承性

```js
1.继承得到的样式的优先级是最低的。
2.在存在多个继承样式时，层级关系距离当前元素最近的父级元素的继承样式，具有相对最高的优先级
```

![](https://img2020.cnblogs.com/blog/1460021/202003/1460021-20200318110539539-996176893.jpg)



#### 3.层叠性

层叠性是指 `CSS` 样式在针对同一元素配置同一属性时（也就是有多个样式），依据层叠规则（权重）来处理冲突，选择应用权重高的 `CSS` 选择器所指定的属性，一般也被描述为权重高的覆盖权重低的，因此也称作层叠。

#### 4.CSS选择器执行顺序

渲染引擎解析 `CSS` 选择器时是从右往左解析，这样做是为了减少无效匹配次数，从而匹配快、性能更优。()

我们在书写 `CSS Selector` 时，从右向左的 `Selector Term` 匹配节点越少越好。

```js
浏览器 CSS 匹配核心算法的规则是以从右向左方式匹配节点的。

避免：div ui .item{……}
推荐：.item{……}
```



#### 5.css书写顺序

需要注意的是：浏览器并不是一获取到 `CSS` 样式就立马开始解析，而是根据 `CSS` 样式的书写顺序将之按照 DOM 树的结构分布渲染样式，然后开始遍历每个树结点的 `CSS` 样式进行解析，此时的 `CSS` 样式的遍历顺序完全是按照之前的书写顺序。

在解析过程中，一旦浏览器发现某个元素的定位变化影响布局，则需要倒回去重新渲染。

```js
例如：
width: 50px;
height: 50px;
font-size: 14px;
position: absolute;
当浏览器解析到 position 的时候突然发现该元素是绝对定位元素需要脱离文档流，而之前却是按照普通元素进行解析的，所以不得不重新渲染。
改进，这样就能让渲染引擎更高效的工作：
position: absolute;
width: 50px;
height: 50px;
font-size: 14px;
```

**css建议书写顺序**：

```js
1.定位属性
position  display  float  left  top  right  bottom   overflow  clear   z-index
2.自身属性
width  height  padding  border  margin   background
3.文字样式
font-family   font-size   font-style   font-weight   font-varient   color
4.文本属性
text-align   vertical-align   text-wrap   text-transform   text-indent    text-decoration   letter-spacing    word-spacing    white-space   text-overflow
5.CSS3 中新增属性
content   box-shadow   border-radius  transform
```



#### 6.优化策略

优化策略

1. 使用 id 选择器非常的高效

```
/* Bad  */
p#id1 {color:red;}

/* Good  */
#id1 {color:red;}
```

2. 避免深层次的 node

```
/* Bad  */
div > div > div > p {color:red;}
/* Good  */
p-class{color:red;}
```

3. 不要使用 attribute selector

```
如：p[att1=”val1”]，这样的匹配非常慢。更不要这样写：p[id="id1"]，这样将 id selector 退化成 attribute selector。

/* Bad  */
p[id="jartto"]{color:red;}
p[class="blog"]{color:red;}
/* Good  */
#jartto{color:red;}
.blog{color:red;}
```

4. 将浏览器前缀置于前面，将标准样式属性置于最后

```
.foo {
  -moz-border-radius: 5px;
  border-radius: 5px;
}
```

5. 遵守 CSSLint 规则

```
font-faces        　　　　  　　　不能使用超过5个web字体
import        　　　　　　　 　　  禁止使用@import
regex-selectors        　　　　  禁止使用属性选择器中的正则表达式选择器
universal-selector    　　 　　  禁止使用通用选择器*
unqualified-attributes    　　　禁止使用不规范的属性选择器
zero-units            　　 　　　0后面不要加单位
overqualified-elements    　　　使用相邻选择器时，不要使用不必要的选择器
shorthand        　　　　　　　　 简写样式属性
duplicate-background-images    相同的url在样式表中不超过一次
```

6. 减少 CSS 文档体积

```
移除空的 CSS 规则（Remove empty rules）。
值为 0 不需要单位。
使用缩写。
属性值为浮动小数 0.xx，可以省略小数点之前的 0。
不给 h1-h6 元素定义过多的样式。
```

7. CSS Will Change

```
WillChange 属性，允许作者提前告知浏览器的默认样式，使用一个专用的属性来通知浏览器留意接下来的变化，从而优化和分配内存。
```

8. 不要使用 @import

```
使用 @import 引入 CSS 会影响浏览器的并行下载。
使用 @import 引用的 CSS 文件只有在引用它的那个 CSS 文件被下载、解析之后，浏览器才会知道还有另外一个 CSS 需要下载，这时才去下载，然后下载后开始解析、构建 Render Tree 等一系列操作。
多个 @import 会导致下载顺序紊乱。在 IE 中，@import 会引发资源文件的下载顺序被打乱，即排列在 @import 后面的 JS 文件先于 @import 下载，并且打乱甚至破坏 @import 自身的并行下载。
```

 

9. 避免过分回流/重排（Reflow）

```
使用这些属性时浏览器会重新计算布局位置与大小。
常见的重排元素：
width
height
padding
margin
display
border-width
border
top
position
font-size
float
text-align
overflow-y
font-weight
overflow
left
font-family
line-height
vertical-align
right
clear
white-space
bottom
min-height
```

10. 减少昂贵属性

```
当页面发生重绘时，它们会降低浏览器的渲染性能。所以在编写 CSS 时，我们应该尽量减少使用昂贵属性，如：
box-shadow。
border-radius。
filter。
:nth-child。
```

11. 依赖继承（如果某些属性可以继承，那么自然没有必要在写一遍。）

12. 高效利用 computedStyle



### div水平垂直居中的5种方法

> https://juejin.cn/post/6844903821529841671

#### 1.flex布局实现(元素已知宽度)

```js
//内部div要有宽度

CSS 代码:
<style>        
    .box{            
        width: 300px;            
        height: 300px;           
        background-color: #ccc;            
        display: flex;            
        display: -webkit-flex;s            
        justify-content: center;       
        align-items: center;        
    }        
    .box .a{            
        width: 100px;            
        height: 100px;            
        background-color: blue;        
    }    
</style>
HTML 代码：
<div class="box">        
    <div class="a"></div>    
</div>
```



#### 2.position+margin(元素已知宽度)

```js
//position定位下:子元素absolute,top,left各50%,margin-top,margin-left为负的自身宽度的一半
父元素设置：position:relative;
子元素设置：position:absolute; left：50%；top:50%;margin:-50px 0 0 -50px;

CSS代码：
<style>        
    .box{            
        width: 300px;            
        height: 300px;            
        background-color: red;            
        position: relative;        
    }        
    .box .a{            
        width: 100px;            
        height: 100px;            
        background-color: blue;            
        position: absolute;            
        left: 50%;            
        top: 50%;            
        margin: -50px 0 0 -50px;        
    }    
    </style>

HTML 代码：
<div class="box">        
    <div class="a">love</div>    
</div>
```





#### 3.position+transform(元素未知宽度)

```js
//元素未知宽度,将上面例子中的 margin: -50px 0 0 -50px;替换为：transform: translate(-50%,-50%);
CSS 代码：
<style>        
    .box{            
        width: 300px;            
        height: 300px;            
        background-color: red;            
        position: relative;        
    }        
    .box .a{            
        background-color: blue;            
        position: absolute;            
        top: 50%;            
        left: 50%;            
        transform: translate(-50%, -50%);        
    }    
</style>
```



#### 4.position(元素已知宽度)+left right top bottom+margin

```js
//如果子元素不设置宽度和高度，将会铺满整个父级（应用：模态框）

CSS 代码：
<style>        
    .box{            
        width: 300px;            
        height: 300px;           
        background-color: red;            
        position: relative;        
    }        
    .box .a{            
        width: 100px;            
        height: 100px;            
        background-color: blue;            
        position: absolute;            
        top: 0;            
        bottom: 0;            
        left: 0;            
        right: 0;            
        margin: auto;        
    }    
</style>
HTML 代码：
 <div class="box">        
    <div class="a">love</div>    
</div>
```



#### 5.table-cell布局实现

```js
//table 实现垂直居中，子集元素可以是块元素，也可以不是块元素

CSS：
<style>        
    .box{            
        width: 300px;            
        height: 300px;            
        background-color: red;            
        display: table-cell;            
        vertical-align: middle;                    
    }        
    .box .a{            
        margin-left: 100px;            
        width: 100px;            
        height: 100px;            
        background-color: blue;        
    }    
</style>

<div class="box">         
    <div class="a">love</div>    
</div>
```







### 文字,图片水平垂直居中(table-cell布局)

```js
display：table-cell 会使元素表现的类似一个表格中的单元格td，利用这个特性可以实现文字的垂直居中效果。同时它也会破坏一些 CSS 属性，使用 table-cell 时最好不要与 float 以及 position: absolute 一起使用，设置了 table-cell 的元素对高度和宽度高度敏感，对margin值无反应，可以响 padding 的设置，表现几乎类似一个 td 元素。

```



#### 1.文字水平垂直居中

```js
CSS 代码：
<style>        
    .box{            
        width: 300px;            
        height: 300px;            
        background-color: red;            
        display: table-cell;            
        text-align: center;/*使元素水平居中 */            
        vertical-align: middle;/*使元素垂直居中 */        
    }    
</style>

HTML 代码：
<div class="box">love</div>


//给父级设置 display : table，子集设置 display：tablecell ，子集会充满全屏
CSS 代码：
<style>        
    .box{            
        width: 300px;            
        height: 300px;            
        background-color: red;            
        display: table;        
    }        
    .box .a{            
        display: table-cell;            
        vertical-align: middle;            
        text-align: center;            
        background-color: blue;        
    }    
</style>

HTML ：
<div class="box">        
    <div class="a">love</div>    
</div>
```



#### 2. 已知宽度图片水平垂直居中

```js
//中间的图片会随着外层容器的大小而自动水平垂直居中，其实原理和文字水平垂直居中一模一样

<style>        
    .box{            
        width: 300px;            
        height: 300px;            
        background-color: skyblue;            
        display: table-cell;            
        text-align: center;            
        vertical-align: middle;        
    }        
    img{            
        /* 设置成块元素后，text-align：center 就会失效 */            
        width: 100px;            
        height: 100px;        
    }    
</style>

HTML：
<div class="box">    
    <img src="1.jpg" alt="">
</div>
```



#### 2.1 未知宽高图片垂直居中

```js
//https://www.cnblogs.com/starof/p/4745577.html
1.
为父元素设定一个伪元素：：after,其高度为父元素的高度，display:inline-block,将其设定为vertical-align:middle即可撑开line box，同时line box的baseline为父元素高度一半的位置。然后设定子元素vertical-align:middle，即可实现居中。

2.容器设置display:table，img外嵌套一层<span>或者<a>标签，设置display:table-cell，再用vertical-align:middle搞定。
```







#### 3.元素两端垂直对齐

 ```js
CSS 代码：
<style>        
    *{            
        padding: 0;            
        margin: 0;        
    }        
    .box{            
        display: table;            
        width: 90%;            
        margin: 10px  auto;            
        padding: 10px;             
        border: 1px solid green;            
        height: 100px;        
    }        
    .left,.right{            
        display: table-cell;                        
        width: 20%;            
        border: 1px solid red;                 
    }        
    .center{            
        /* padding-top: 10px; */            
        height: 100px;            
        background-color: green;        
    }    
</style>

HTML：
<div class="box">        
    <div class="left">            
        <p>我是左边</p>        
    </div>        
    <div class="center">            
        <p>我是中间</p>       
    </div>        
    <div class="right">            
        <p>我是右边</p>        
    </div>    
</div>

 ```

