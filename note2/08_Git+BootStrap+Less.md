## BootStrap

## 介绍

一个前端 UI 框架，由 twitter 公司开发，2013 年 7 月发布 1.0 版本

* 官方网址 <https://getbootstrap.com/>
* 中文站 <https://www.bootcss.com/> 

## 作用

快速开发响应式网页. 不适合针对设计稿， 适合仿站。

## 学习目标

1. 掌握 bootstrap 使用方法
2. 掌握 bootstrap 编程思想

## 版本选择

​	[    ] 2.x

​	[ √ ] 3.x

​	[    ] 4.x

## 注意

- <span style="color:red">不需要记住所有类名</span>
- <span style="color:red">多复制看效果</span>

## 配置



#### 示例文件

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```



#### 链接配置

> 上面是css
>
> 下面首先是jQuery放在上面,再JS.

```css
<!-- header中的link -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

<script src="https://cdn.bootcdn.net/ajax/libs/holder/2.9.7/holder.js"></script> 


<!-- /body前的script外链 -->
<!--关于 end-->
<!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
<!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>


```







### vscode代码片段功能设置

```HTML
- jQuery代码片段设置

1.找jQuery资源链接 
 - bootcdn.cn cdn国内平台 
 - 搜索jQuery,复制链接
2.vscode配置
 - 设置-用户代码片段
 - 弹出的输入框中,点击'新建全局代码片段...'
 - 自定义输入代码快捷标识的名称
 - name.code-snippets编辑 
  - 反注释掉Print的内容, 
  - 将prefix内容更换为自定义名称,
  - 将body更换为完整的链接内容,
  - scope设置简写的文件生效类型
```



### CDN

```
- content delivery network

bootstrap免费cdn加载服务网站
https://www.bootcdn.cn/
```





## 功能

### 容器

.container                  

.container-fluid

### <span style="color:red">栅格系统</span>

栅格系统是 bootstrap 中非常重要的一个知识点，核心思想有以下几点

宽度控制都用栅格系统类

1. 将元素的宽度 12 等分

2. 将屏幕大小定义 4 种尺寸

   * xs   （extra small） 屏幕尺寸 < 768px
   * sm  （small）          屏幕尺寸 >= 768px
   * md （middle）       屏幕尺寸 >= 992px
   * lg    （large）           屏幕尺寸 >= 1200px

3. 列偏移

   ```HTML
   <div class="col-lg-4 col-lg-offset-4"></div>  //占据4份,左侧偏移4份  元素居中
   ```

   

4. 列嵌套

   ```HTML
   
   ```

   

### 排版

#### 内联文本标签

* s    中横线
* u   下划线
* b    加粗
* i     斜体

#### 对齐方式

* text-left  左对齐
* text-center 居中对齐
* text-right 向右对齐

#### 代码

* code 高亮显示代码
* kbd  高亮显示按键内容
* pre   原样输出内容

### 表格

* table-striped 隔行换色

* table-bordered 边框
* table-hover  悬浮换色
* table-condensed  紧凑型
* table-responsive  响应式表格

### 按钮

#### 情景

* btn-primary  首选
* btn-success  成功
* btn-warning  警告
* btn-danger   错误 / 危险
* btn-info         提醒

#### 尺寸

* btn-lg      超大
* btn-md   中等
* btn-sm    小型
* btn-xs      超小型

### 图片

* img-responsive 响应式显示 
* img-circle           圆形显示
* img-rounded     圆角显示
* img-thumbnail  缩略图形式显示

### 辅助类

* 文字颜色

  * text-primary
  * text-info
  * ...

* 背景颜色

  * bg-primary
  * bg-info
  * ...

* 浮动

  * pull-left
  * pull-right
  * center-block
  * clearfix

### 响应式类

* visible-*
* hidden-*



### 注意事项

1. bootstrap手风琴效果, 必须要使用jQuery1.xx版本才可以







## 插件

scrollspy 滚动监听插件

```html
<style>
    /**  2. 增加相对定位   */
    body {
        position: relative;
    }
    #navbar{
        background:#aab;
        position:fixed;
        left:100px;
        top:50px;
    }
</style>

<!-- 1. 增加属性  --> //spy间谍 1.在父元素上设置spy和target属性
<body data-spy="scroll" data-target="#navbar">
    <!-- 3. 配置导航结构 一定要在 ul 外层嵌套一层结构  -->
    <div id="navbar">
        <ul class="nav nav-tabs" role="tablist">
        	<li><a href="#AAAA">家电</a></li>
	        <li><a href="#BBBB">电子设备</a></li>
	        <li><a href="#CCCC">日常用品</a></li>
	        <li><a href="#DDDD">运动</a></li>
        </ul>
    </div>

    <ul class="list-unstyled">
    	<li id="AAAA"><img src="holder.js/100px500?text=家电" alt=""></li>
    	<li id="BBBB"><img src="holder.js/100px500?bg=#aef&text=电子设备" alt=""></li>
    	<li id="CCCC"><img src="holder.js/100px500?bg=#eea&text=日常用品" alt=""></li>
    	<li id="DDDD"><img src="holder.js/100px500?bg=#aab&text=运动" alt=""></li>
    </ul>
</body>
```



## 附录

### 屏幕阅读器

屏幕阅读器专门为一些有功能障碍的人设计,  <https://www.youtube.com/watch?v=dEbl5jvLKGQ>

### 前端产品分类

* JS 类库
  * jquery
  * zepto
  * holder.js
  * Lodash 
  * Underscore
* MVC 框架
  * vue
  * react
  * angular
* UI 框架
  * bootstrap 响应式
  * 妹子 UI 
  * MUI 移动端
  * we UI
  * frozenui

### CDN

content devilery  network   内容分发

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
      integrity="sha384Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
      crossorigin="anonymous"></script>
```

* integrity    校验

* crossorigin  跨域请求状态设置

### GitHub Page

GitHub 为每一个开发提供一个仓库，允许用户使用浏览器访问

1. 注册 GitHub 账号
2. 创建一个仓库
3. 名字是   username.github.io
4. 点击初始化的 readme.md
5. 创建一个文件  index.html  (服务器默认打开的文件)
6. 写入内容 ( 网页内容 )
7. 等待一会儿就可以访问  username.github.io   👌啦

### 在线拖拽

<https://www.bootcss.com/p/layoutit/>





## less

### 语法

#### 变量

##### 基本声明

```
@name: value;
@base-color: 200;
```

##### 名称要求:

* 变量名称要求: 字母, 数字, 下划线, 中横线, 
* 首字母可以为数字, 可以为纯数字
* 区分大小写
* 变量值随意



##### 动态特征

> 将一个变量de值作为选择器

```css
@header-selector: #header;

@{header-selector}{
	height:100px;
    background:#90a;
}
```



##### 字符串拼接

```css
@combine-selector: ~'@{header-selector}, @{footer-selector}';
```





#### 运算

#### 注释







#### 嵌套

> less支持嵌套书写形式

1.普通嵌套

```css
#app{
    #header{
        .logo{} //子孙元素
        >.search{} //子元素
        +div{} //后边紧挨着的元素
        &:hover{}//伪类
    }
}
```



2.媒体查询

```css
ul{
    width:700px;
    margin:50px auto;
    
    @media screen and(min-width:700px) and (max-width:800px){
        background:red;
    }
    
    @media screen and (min-width: 800px) and (max-width: 900px) {
        background: yellow;
    }
}
```



3.变量作用域

> 变量只能再当前代码段和下层代码段中使用





#### 混合mixin

> 混合类似自定义函数, 可减少css代码重复书写



##### 1.普通混合

```css
.center-position {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}

#box1{
    .center-position();
}

#box2{
    .center-position();
}
```



##### 2.不带输出混合

```css
.center-position() {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}
```





##### 3.参数混合

> 两个混合, 混合名称相同, 但是参数不同,那就是两个不同的混合. 根据参数的个数来决定执行哪个混合.

```css
.box(@width, @height, @bg) {
    width: @width;
    height: @height;
    background: @bg;
}
```



##### 参数默认值

> 注意: 具有默认值的参数一定要靠后声明, 否则会有语法错误.

```css
.box2(@width,@height:100px, @bg:#090) {
    width: @width;
    height: @height;
    background: @bg;
}
```



**调用时的两种形式**:

1.按顺序传参

```css
.box2(100px, 100px, #000);
```



2.按参数名传参

```css
.box2(@bg:#090, @width: 100px, @height:200px);
```





##### 条件混合

```css
.arrow(@size:10px, @color: #908, @direction) when (@direction=bottom) {
    width:0px;
    height:0px;
    border-style:solid;
    border-width: @size;
    border-color: @color transparent transparent transparent ;
}

when()是当满足条件时候运行函数
```





#### 导入





#### 函数

> less提供了内置函数来处理, 档地址 <https://less.bootcss.com/functions/>，函数和混合的区分

混合相当于自定义函数

函数相当于内置函数



##### 数学函数

* percentage 将小数转换为百分比
* floor
* cell



##### 颜色操作

* lighten
* darken
* fadein  提高透明度
* fadeout 降低透明度





#### Map

> Map相当于JS的对象,可以把一些列数据保存在map中

```HTML

```





## 自定义栅格系统

```less
//列的实现

.make-col(){
    .col(@index){
        @s: ~'@{s}, .col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}';
        col(@s, @index+1);
    }
    
    .col(@selector, @index+1) when(@index <= @column-length){
        @selector: ~'@{s}, .col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}';
        
     .col(@selector, @index+1);
    }
    
    .col(@selector, @index)when(@index > @column-length){
        @{selector}{
            float:left;
            padding: 0 gutter-width/2;
            position:relative;
            min-height:1px;
        }
    }
    
    .col(1);
}

.make-col();


.make-col-width(@type){
    .col(@index)when(@index<=@column-length){
        @selector: ~'.col-@{type}-@{index}';
        
        @{selector}{
            width: percentage(@index/@column-length);
        }
        
        .col(@index+1);
    }
    
    .col(1);
}

.make-col-width(xs);
```

