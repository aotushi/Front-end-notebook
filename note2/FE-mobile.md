移动端开发

## 相关概念
​		在学习移动端之前，我们先来学习一些基础的概念和专有名词，这些知识会在以后的面试、工作沟通中经常用到。

### 屏幕相关

#### 	1.屏幕大小
​			指屏幕对角线长度，单位是英寸(inch)。常见的尺寸有： 3.5寸、4.0寸、5.0寸、5.5寸、6.0寸等等。

​			**<span style="color:red">备注：1英寸(inch) = 2.54厘米(cm)</span>**

![](https://s1.ax1x.com/2020/06/27/NyZQbQ.png)


#### 	2.屏幕分辨率
​			是指屏幕在：横向、纵向上的**物理像素点**总数。一般表示用 n * m 表示。

​			例如：iPhone6 的屏幕分辨率为：<span style="color:red">**750 * 1334**</span>

- ​	注意点:	
  - <span style="color:red">**屏幕分辨率是一个固定值，无法修改！！**</span>
  - 屏幕分辨率、显示分辨率是两个概念，系统设置中可以修改的是：显示分辨率。
  - 屏幕分辨率 >= 显示分辨率。

**常见手机分辨率**

|                        型号                         |           分辨率（物理像素点总和）            |
| :-------------------------------------------------: | :-------------------------------------------: |
|                   iPhone 3G / 3GS                   |                   320 * 480                   |
|                    iPhone 4 / 4s                    |                   640 * 960                   |
|                    iPhone 5 / 5s                    |                  640 * 1136                   |
| <span style='color:red'>**iPhone 6 / 7 / 8**</span> | **<span style='color:red'>750 * 1334</span>** |
|                 iPhone 6p / 7p / 8p                 |                  1242 x 2208                  |
|                      iPhone X                       |                  1125 * 2436                  |
|                      华为 P30                       |                  1080 * 2340                  |
|                     华为Mate40                      |                  2772 x 1344                  |
|                       小米10                        |                  2340 x 1080                  |
|                       小米11                        |                  3200 x 1440                  |

#### 	3.屏幕密度

​        又称：屏幕像素密度，是指屏幕上每英寸里包含的物理像素点个数，单位是 ppi （pixels per inch），其实这里还有另一个单位 dpi（dots per inch），两个值的计算方式都一样，只是使用的场景不同。 ppi主要用来衡量屏幕，dpi 用来衡量打印机、投影仪等。

<img src="https://s1.ax1x.com/2020/06/27/NyZ1Ej.png" style="zoom: 25%;" />



### 像素相关

#### 1.物理像素

​		**物理像素又名：设备像素**，是一个长度单位，单位是px，1个物理像素就是屏幕上的一个物理成像点，就是屏幕中一个微小的发光物理元器件（可简单理解为超级微小的灯泡），是屏幕能显示的最小粒度。屏幕的物理像素点数（分辨率）是手机屏幕的一个重要参数，<span style="color:red">**由屏幕制造商决定，屏幕生产后无法修改。**</span>例如 iPhone6 横向上拥有的物理像素为750、纵向上拥有的物理像素为1334 ，我们也可以用：750* 1334表示。

物理像素图示：

 <img src="https://s1.ax1x.com/2020/06/27/NyZr5R.jpg" style="zoom:150%;" />

#### 2. css 像素

​		**css像素又名： 逻辑像素**，css像素是一个抽象的长度单位，单位也是px，它是为 Web 开发者创造的，用来精确的度量Web 页面上的内容大小。我们在编写css、js、less中所使用的都是css像素；

> 思考：我代码中4px*4px的盒子（css像素），到了屏幕上到底对应几个物理像素（发光的小灯泡）呢？要探讨这个对应关系，就要学习接下来的新概念：设备独立像素。

#### 3.设备独立像素

设备独立像素简称 DIP 或 DP（device-independent pixel），又称：**屏幕密度无关像素**。

> 引言： 在没出现【高清屏】的年代，1个css像素对应1个物理像素，但自从【高清屏】问世，二者就不再是1对1的关系了。苹果公司在2010年推出了一种新的显示标准：**在屏幕尺寸不变的前提下**，把更多的物理像素点**压缩**至一块屏幕里，这样分辨率就会更高，显示效果就会更佳细腻。苹果将这种屏幕称为：**Retina 屏幕（又名：视网膜屏幕）**，与此同时推出了配备这种屏幕的划时代数码产品——iPhone4。

<img src="https://user-gold-cdn.xitu.io/2020/6/28/172fb94cfb4331fb?w=488&h=367&f=webp&s=10234" style="zoom:80%;" /> 

我们来看一个场景：

​	程序员写了：width = 2px，height = 2px 的盒子，若1个css像素直接对应1个物理像素，由于iPhone3G/S 与iPhone4屏幕尺寸相同，但iPhone4的屏幕能容纳下更多的物理像素点，所以iPhone4的物理像素点比iPhone3G/S小很多，那么理论上这个盒子在iPhone4屏幕上也就会比iPhone3G/S屏幕上小很多，而事实是iPhone3G/S 和 iPhone4下这个盒子是一样大的！！！，只不过 iPhone4更加细腻、清晰。如何做到的呢？这就要靠设备独立像素。<img src="https://s1.ax1x.com/2020/06/28/NRIXX6.jpg" style="zoom: 50%;" />

**对比：iPhone3G/S 与 iPhone4的成像效果：**

 <img src="https://s1.ax1x.com/2020/06/28/NRIEo4.png" style="zoom:80%;" />

<span style="color:#ee0b41">设备独立像素的出现，使得即使在【**高清屏**】上元素也可以拥有正常的尺寸，让代码不受到设备的影响，它是设备厂商根据屏幕特性设置的，无法更改。</span>

**设备独立像素 与 css像素关系**

-  在标准情况下（无缩放）：1css像素 = 1设备独立像素 

**设备独立像素 与 物理像素关系**

- 普通屏幕下 1 个设备独立像素 对应 1 个物理像素
- 高清屏幕下 1 个设备独立像素 对应 N 个物理像素

#### 4.像素比

> 设备像素比,用于描述整个渲染环境在硬件设备上的缩放程度。在程序中可以通过window对象上的devicePixelRatio属性来得到这个值。它是只读的，但不是常量，对浏览器的一些特殊操作会改变这个值。
>
> 

​	像素比（dpr）: 单一方向上，【物理像素】和【设备独立像素】的比值。即：**dpr = 物理像素 / 设备独立像素**

```javascript
使用js获取dpr：window.devicePixelRatio
```

几款手机的屏幕像素参数，[点击这里查看更多](https://uiiiuiii.com/screen/)

|                        型号                         |           分辨率（物理像素点总和）            |            设备独立像素(dip或dp)             |             像素比(dpr)              |
| :-------------------------------------------------: | :-------------------------------------------: | :------------------------------------------: | :----------------------------------: |
|                     IPhone 3GS                      |                   320 * 480                   |                  320 * 480                   |                  1                   |
|                    IPhone 4 / 4s                    |                   640 * 960                   |                  320 * 480                   |                  2                   |
|                    IPhone 5 / 5s                    |                  640 * 1136                   |                  320 * 568                   |                  2                   |
| <span style='color:red'>**IPhone 6 / 7 / 8**</span> | **<span style='color:red'>750 * 1334</span>** | **<span style='color:red'>375 * 667</span>** | **<span style='color:red'>2</span>** |
|                 IPhone 6p / 7p / 8p                 |                  1242 x 2208                  |                  414 * 736                   |                  3                   |
|                      IPhone X                       |                  1125 * 2436                  |                  375 * 812                   |                  3                   |
|                       华为P10                       |                  1080 x 1920                  |                  360 x 640                   |                  3                   |





**描述一下你的屏幕：**

​	现在以iPhone6为例，我们描述一下屏幕（横向上）:

1. 物理像素：750px
2. 设备独立像素：375px
3. css像素：375px

### 图片高清显示

#### 位图像素

位图和矢量图

- 位图，又称点阵图像或栅格图像，是由n个的像素点组成的。放大后会失真。(常见有：png、jpeg、jpg、gif)

  一般使用：PhotoShop等软件进行编辑

- 矢量图，又称为面向对象图像或绘图图像，在数学上定义为一系列由线连接的点，放大后不会失真。（常见：svg）

  一般使用：Adobe Illustrator，Sketch等软件进行编辑

位图像素也是一个长度单位，位图像素可以理解为位图中的一个“小格子”，是位图的最小单元。

<img src="http://yanxuan.nosdn.127.net/e3806cdf0166598c91224acbc390971b.png" />



> <span style="color:red">注意：1个位图像素对应1个物理像素，图片才能得到完美清晰的展示。</span>
>
> 具体编码时借助媒体查询：@media screen and (-webkit-min-device-pixel-ratio:x)



#### media显示图片

> 在不同dpr下的设备显示分辨率不同的图片



```css
//1.浏览器适配
//2.媒体查询的坑:会逐个全部匹配,所以顺序有要求:要是查询min,从小到大;查询max,从大到小写css.
//3.现状:现在使用media的项目少,一般是使用链接显示图片.

//查询min,像素比从小到大排列.
@media screen and (-webkit-min-device-pixel-ratio:2){
    .log{
        content:url(../imgs/logo@2x.png);
    }
}
@media screen and (-webkit-min-device-pixel-ratio:3){
    .log{
        content:url(../imgs/logo@2x.png);
    }
}
```



### 视口相关

#### pc端视口

​        在pc端，视口的默认宽度和**浏览器窗口**的宽度一致。在 css 标准文档中，视口也被称为：<u>初始包含块</u>，它是所有 css 百分比宽度推算的根源，在pc端可通过如下几种方式获取宽度：

```js
console.log('最干净的显示区域',document.documentElement.clientWidth);//常用
console.log('最干净的显示区域+滚动条',window.innerWidth);
console.log('最干净的显示区域+滚动条+浏览器边框',window.outerWidth);
console.log('与浏览器无关，当前设备显示分辨率横向的值',screen.width);
```

#### 移动端视口

​	在移动端,浏览器厂商面临着一个比较大的问题,他们如何将数以万计甚至可以说是数以亿计的pc端网页完整的呈现在移动端设备上，并且不会出现<s>横向滚动条呢</s>？那就要引出移动端的三个概念：

**1.布局视口、2.视觉视口、3. 理想视口**

##### 1. 布局视口

> 为什么用? 布局视口大于视觉视口.  布局视口deveice-width赋值给视觉视口

​	用于解决[早期的页面](http://www.shindoo.com/index.asp)在手机上显示的问题，早期的时候我们这样做：pc端网页宽度一般都为：960px ~ 1024px 这个范围，就算超出了该范围，960px ~ 1024px这个区域也依然是版心的位置，浏览器厂商针对移动端设备设计了一个容器，先用这个容器去承装pc端的网页，这容器的宽度一般是**<span style='color:red'>980px</span>**，不同的设备可能有所差异，但相差并不大；随后将这个容器**等比例压缩**到与手机等宽，这样就可以保证没有滚动条且能完整呈现页面，但是这样做依然有问题：网页内容被压缩的太小，严重影响用户体验。

移动端和pc端获取的方式一样,但是含义不一样.移动端获取的布局视口一般是固定的.

移动端获取布局视口方式：```document.documentElement.clientWidth ``` 

 <span style='color:red'>**注意：布局视口经过压缩后，横向的宽度用css像素表达就不再是375px了，而是980px，因为布局视口是被压缩，而不是截取。**</span> 注意:px是抽象的长度单位

 <img src="https://s1.ax1x.com/2020/06/28/NRoBg1.png" style="zoom: 50%;" />


##### 2.视觉视口
​	视觉视口就是用户可见的区域，**它的绝对宽度永远和设备屏幕一样宽**，但是这个宽度里所包含的css像素值是变化的，例如：一般手机会将980个css像素放入视觉视口中，而ipad Pro会将1024个css像素放入视觉视口中。

移动端获取视觉视口方式：```window.innerWidth```，不过在Android2、Opera mini 、UC8 中无法正确获取。（一般不通过代码看视觉视口）+和布局视口一般是一样的.

 <img src="https://s1.ax1x.com/2020/06/28/NR7QO0.png" style="zoom: 50%;" />

**描述一下你的屏幕：**

现在以iPhone6为例，我们描述一下屏幕（横向上）:

1. 物理像素：750px
2. 设备独立像素：375px
3. <span style='color:red'>**css像素：980px**</span>

##### 3.理想视口标准

与屏幕（**设备独立像素**dip）等宽的**布局视口**，称之为理想视口，所以也可以说理想视口是一种标准：让布局视口宽度 与 屏幕等宽（设备独立像素宽度），靠meta标签实现。

理想视口的特点：

> * 布局视口和屏幕(视觉视口)等宽，以iPhone6为例，符合理想视口标准之后：设备独立像素：375px，**布局视口宽度：375px。**
> * 用户不需要缩放、滚动就能看到网站的全部内容。
> * 要为移动端设备单独设计一个移动端网站。

设置理想视口的具体方法：
```html
<meta name="viewport" content="width=device-width" />
width //代表布局视口
device-width//代表设备独立像素dip
```

**【总结】：** 

不写```meta```标签（不符合理想视口标准）：

>   1. 描述屏幕：物理像素：750px 、设备独立像素：375px、css像素：980px。
>   2. 优点：元素在不同设备上，呈现效果几乎一样，因都是通过布局容器等比缩小的，例如200宽的盒子：200/980
>   3. 缺点：元素太小，页面文字不清楚，用户体验不好。

写```meta```标签（符合理想视口标准）：

>  1. 描述屏幕：物理像素：750px 、设备独立像素：375px、<span style='color:red'>css像素：375px</span>。
>
>  2. 优点：页面清晰展现，内容不再小到难以观察，用户体验较好。
>
>  3. 缺点：同一个元素，在不同屏幕（设备）上，呈现效果不一样，例如375宽的盒子： 375/375 和 375/414 (不是等比显示)
>
>  4. 如何解决：做适配。

### <span style='color:blue'>缩放</span>

#### <span style='color:blue'>PC 端缩放</span>
放大时
- 视口变小
- 元素的 css 像素值不变，但一个css像素所占面积变大了。

缩小时
- 视口变大
- 元素的 css 像素值不变，但一个css像素所占面积变小了。



```js
//pc端,resize监测视口(初始包含块)的变化
//移动端, 布局视口
window.onresize=()=>{
    console.log(document.documentElement.clientWidth)
}
```



#### 移动端缩放
放大时
- 布局视口不变
- 视觉视口变小

缩小时
- 布局视口不变
- 视觉视口变大

<span style="color:#ee0b41">注意：移动端缩放不会影响页面布局，因为缩放的时候，布局视口大小没有变化</span>

## viewport

meta-viewport 标签是苹果公司在 2007 年引进的，用于移动端布局视口的控制。

使用示例：

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

viewport 相关选项

1. width  布局视口的宽度  //开启理想视口
2. initial-scale  【系统】初始缩放比例  //开启理想视口
3. maximum-scale 允许【用户】缩放的最大比例
4. minimum-scale  允许【用户】缩放的最小比例
5. user-scalable  是否允许用户缩放
6. viewport-fit 设置为cover值可以解决刘海屏的留白问题 

#### 1. width 

<span style="color:#ee0b41">width值可以是 device-width，也可以是具体值，但有些安卓手机是不支持具体值，IOS全系列都支持。</span>

#### 2. initial-scale  

1. initial-scale 为页面初始化时的显示比例。  

2. initial-scale = 屏幕宽度(设备独立像素)  /  布局视口宽度。

3. 只写initial-scale = 1.0 也可以实现完美视口，但为了良好的兼容性，width=device-width, initial-scale=1.0一般一起写。


#### 3. maximum-scale 

1. 设置允许用户最大缩放比例，苹果浏览器 safari 不认识该属性

2. maximum-scale = 屏幕宽度(设备独立像素) / 视觉视口宽度值


#### 4. minimum-scale

1. 设置允许用户最小缩放比例。

2. minimum-scale = 屏幕宽度(设备独立像素) / 视觉视口宽度值

#### 5. user-scalable

  user-scalable的值是no和

​	是否允许用户通过手指缩放页面。苹果浏览器 safari 不认识该属性

#### 6.viewport-fit

​	值设置为 cover 可以解决『刘海屏』的留白问题

 <img src="https://user-gold-cdn.xitu.io/2020/6/29/172fcf06533e7d14?w=898&h=596&f=png&s=221794" style="zoom:50%;" />



## 适配

**一、为什么要做适配？**
			由于移动端设备的屏幕尺寸大小不一，会出现：同一个元素，在两个不同的手机上显示效果不一样（比例不同）。要想让同一个元素在不同设备上，显示效果一样，就需要适配，**无论采用何种适配方式，中心原则永远是：**<span style="color:#ee0b41">**等比**</span>！。

主流的适配方式有三种：

* viewport 适配
* rem 适配（主流方式，几乎完美适配）
* vw适配

### 1.viewport 适配

- 方法：拿到设计稿之后，设置**布局视口**宽度为设计稿宽度，然后直接按照设计稿给宽高进行布局即可。
- 优点：不用复杂的计算，直接使用图稿上标注的px值
- 缺点：
  - 不能使用完整的meta标签，会导致在某些安卓手机上有兼容性问题。
  - 不希望适配的东西，例如边框，也强制参与了适配

```css
<meta name="viewport" content="width=375">
```



### <span style="color:#ee0b41">2.rem适配</span>

#### em 和 rem

em 和 rem 都是 css 中的长度单位。而且两个都是相对长度单位，不过两个有点区别

* em 相对的是父级元素的字体大小
* rem 相对的是根元素的字体大小

rem适配的原理：编写样式时统一使用rem为单位，在不同设备上动态调整根字体大小

#### 具体方案

##### 方案一

![rem适配方案1.png](https://i.loli.net/2021/01/05/ziclxkXCKmEVnaM.png)

淘宝、百度的移动端页面用的此方案

1. 设置完美视口
2. <span style="color:#ee0b41">通过js设置根字体大小 = **( 当前设备横向独立像素值 *100) / 设计稿宽度**</span>
3. <span style="color:#ee0b41">编写样式时，直接以rem为单位，值为：**设计值 / 100** </span>  例如345/100*110.4px = 380.88px
4. 增加 JS 代码进行实时适配

优势：编写样式时直接挪动小数点即可。

```js
//扩展知识
fucntion log(){
    console.log(1);
    console.log(2);
    console.log(3);
}
setTimeout(()=>{
    log()
},1000)
//简写形式: setTimeout(log,1000)  setTimeout(log(), 1000)

======================================
    
//获取手机横向的设备独立像素dip
const dip=document.documentElement.clientWidth;
//计算根根字体大小(100是我们指定的,375是设计稿宽度)
const rootFontSize=(dip*100)/375;
//设置根字体
document.documentElement.style.fontSize=rootFontSize+'px';


//页面JS脚本中-设置实时刷新页面布局
<script type='text/javascript'>
    function adapter(){ //适配器函数
        const dip=document.documentElement.clientWidth;
        const rootfontSize=(dip*100)/375;
    	document.documentElement.style.fontSize=rootFontSize+'px';
    }
    window.onresize=adapter;
</script>

less写法:
@font:100rem;
*{margin:0;padding:0}
#demo{
	width:690/@font;
	height:300/@font;
	background-color:#ddd;
    //border:1px solid black; 边框不参与适配 都是固定的1px
	border:0.01rem solid black; 边框参与适配 有大有小 1/100
}
```













##### 方法二

![rem适配方案2.png](https://i.loli.net/2021/01/05/PnVTJDEoRyYHAqO.png)

搜狐、唯品会的移动端页面用的此方案

1. 设置完美视口
2. <span style="color:#ee0b41">通过js设置根字体大小  = **当前设备横向独立像素值 / 10** </span>
4. <span style="color:#ee0b41">编写样式时，直接以rem为单位，值为：**设计值 / (设计稿宽度 / 10)**</span>   例如345px/(375px/10)\*rem(41.4px)
5. 增加 JS 代码进行实时适配

### 3.vw适配(百分比)

vw和vh是两个相对单位

- 1vw = 等于布局视口宽度的1%
- 1vh = 等于布局视口高度的1%

不过vw和vh有一定的兼容性问题：详见：[caniuse.com网站查询适配](https://www.caniuse.com/#search=vw)







### 4.(1物理像素边框)

高清屏幕下 1px 对应更多的物理像素，所以 1 像素边框看起来比较粗，解决方法如下

```css
@media screen and (-webkit-min-device-pixel-ratio:2){
    #demo{
        border: 0.5px solid black;
    }
}
@media screen and (-webkit-min-device-pixel-ratio:3){
    #demo{
        border: 0.333px solid black;
    }
}

或

@media screen and (-webkit-min-device-pixel-ratio:2){
    #demo2::after{
        transform:scaleY(0.5);
    }
}
@media screen and (-webkit-min-device-pixel-ratio:3){
    #demo2::after{
        transform:scaleY(0.333);
    }
}
```

## 移动端事件

### 事件类型

移动端事件列表

* touchstart   元素上触摸开始时触发
* touchmove   元素上触摸移动时触发
* touchend   手指从元素上离开时触发
* touchcancel   触摸被打断时触发

这几个事件最早出现于IOS safari中，为了向开发人员转达一些特殊的信息。

### 应用场景

- touchstart 事件可用于元素触摸的交互，比如页面跳转，标签页切换

- touchmove 事件可用于页面的滑动特效，网页游戏，画板

- touchend 事件主要跟 touchmove 事件结合使用

- touchcancel 使用率不高


注意：

- touchmove 事件触发后，即使手指离开了元素，touchmove 事件也会持续触发
- 触发 touchmove 与 touchend 事件，一定要先触发 touchstart 
- <span style="color:#ee0b41">事件的作用在于实现移动端的界面交互</span>

### 点击穿透

<span style="color:#ee0b41">        touch 事件结束后会默认触发元素的 click 事件</span>，如没有设置完美视口，则事件触发的时间间隔为 300ms 左右，如设置完美视口则时间间隔为 30ms 左右（备注：具体的时间也看设备的特性）。

​       如果 touch 事件隐藏了元素，则 click 动作将作用到新的元素上，触发新元素的 click 事件或页面跳转，此现象称为点击穿透

```
1.使用默认阻止事件 event.preventDefault()
2.点击穿透的对象使用touch事件代替click事件
3.延时(需要大于touch和click事件之间的时间差)使用pointerEvent属性no/auto;
4.延时(需要大于时间差)再调用事件函数.
```



#### 解决方法一

阻止默认行为

```js
//阻止默认行为
node.addEventListener('touchstart', function(e){
    console.log('hello')
	e.preventDefault(); 
})
```

#### 解决方法二

使背后元素不具备click特性，用touchXxxx代替click

```js
banner_img.addEventListener('touchstart',()=>{
    location.href = 'http://www.baidu.com'
    //window.location.href="https://www.baidu.com"
})
```

#### 解决方案三

让背后的元素暂时失去click事件，300毫秒左右再复原

```css
#anode{
  pointer-events: none; //老属性,表示这个元素不能响应任何事件.
}
```

```js
btn.addEventListener('touchstart',(event)=>{
    shade.style.display =  'none'
    setTimeout(()=>{
        anode.style.pointerEvents = 'auto'; //500毫秒之后,取消事件冻结
    },500)
})
```

#### 解决方案四

让隐藏的元素延迟300毫秒左右再隐藏

```js
btn.addEventListener('touchstart',(event)=>{
    setTimeout(()=>{
    	shade.style.display =  'none'
    },300)
})
```





### 其他

#### 真机调试

```
内网穿透工具:
utools
ngrok
```



# 一、vue脚手架rem适配

1. 初始化vue脚手架

   ```
   vue create hello-world
   ```

2. 安装依赖：

   ```js
   yarn add postcss-loader postcss-px2rem
   ```

3. 根目录下建立：vue.config.js ，内容如下：

   ```js
   var px2rem = require('postcss-px2rem');
   
   module.exports = {
     css: {
       loaderOptions: {
         postcss: {
            plugins:[px2rem({remUnit: 375/10})] //375是设计稿宽度
         }
       }
     }
   }
   ```

4. src目录下建立rem.js，内容如下(给不同设备设置根字体大小)：

   ```js
   function adapter (){
   	const dp = document.documentElement.clientWidth
   	const rootFontSize = dp/10
   	document.documentElement.style.fontSize = rootFontSize + 'px'
   }
   adapter()
   window.onresize = adapter
   ```



# 二、react脚手架rem适配

1. 初始化react脚手架

   ```
   create-react-app hello_react
   ```

2. 安装依赖

   ```
   yarn add postcss-px2rem customize-cra react-app-rewired
   ```

3. 根目录下建立：config-overrides.js ，内容如下：

   ```js
   const { override,addPostcssPlugins } = require('customize-cra');
   
   module.exports = override(
       //此处375是设计稿宽度
   	addPostcssPlugins([require("postcss-px2rem")({ remUnit: 375/10 })])
   );
   ```

4. 更改package.json中的启动命令，如下：

   ```json
   "scripts": {
       "start": "react-app-rewired start",
       "build": "react-app-rewired build",
       "test": "react-app-rewired test",
       "eject": "react-app-rewired eject"
    },
   ```

5. src目录下建立rem.js，内容如下(给不同设备设置根字体大小)：

   ```js
   function adapter (){
   	const dp = document.documentElement.clientWidth
   	const rootFontSize = dp/10
   	document.documentElement.style.fontSize = rootFontSize + 'px'
   }
   adapter()
   window.onresize = adapter
   ```

