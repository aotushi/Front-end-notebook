## BOM

### 简介

浏览器对象模型(browser object module), 简称BOM,表示由浏览器提供的用于处理文档(document)之外的所有内容的其它对象.



### 分类

#### 1.事件



#### onscroll

> 当页面滚动条发生任何改变的时候,都会被触发

window.onscroll =function (){}



#### onresize

> 窗口改变事件

window.onersize = function(){}



#### 2.对象

#### window.history

> 可以操作页面的前进后退

前进: window.history.forword()

后退:window.history.back()

跳转任意页面: window.history.go(); 

window.history.go(0) 跳转到当前页面

window.history.go(-1) 代表向后一页

window.history.go(1)  代表向前一页



#### location

> 获取改变地址栏

获取 window.location.href

更改 window.location.href = 'https://www.baidu.com'



#### navigator

> 获取浏览器对象信息

window.navigator.appVersion 浏览器版本





#### screen

> 屏幕对象

window.screen.width  设备窗口横向分辨率像素























































