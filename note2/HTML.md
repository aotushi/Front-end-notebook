## html

> 结构、表现、行为

###  0.资源

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




