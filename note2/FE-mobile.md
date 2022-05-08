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

> https://www.cnblogs.com/houxianzhou/p/14604922.html

#### 0. css(css pixel, px) 像素

> 适用于web编程， 在CSS中以px为后缀，是一个长度单位

在 CSS 规范中，长度单位可以分为两类，绝对单位以及相对单位

px是一个相对单位，相对的是设备像素（device pixel）

一般情况，页面缩放比为1，1个CSS像素等于1个设备独立像素

`CSS`像素又具有两个方面的相对性：

- 在同一个设备上，每1个 CSS 像素所代表的设备像素是可以变化的（比如调整屏幕的分辨率）
- 在不同的设备之间，每1个 CSS 像素所代表的设备像素是可以变化的（比如两个不同型号的手机）

在页面进行缩放操作也会 引起`css`中`px`的变化，假设页面放大一倍，原来的 1px 的东西变成 2px，在实际宽度不变的情况下1px 变得跟原来的 2px 的长度（长宽）一样了（元素会占据更多的设备像素）

假设原来需要 320px 才能填满的宽度现在只需要 160px

px会受到下面的因素的影响而变化：

- 每英寸像素（PPI）
- 设备像素比（DPR）



#### 1.设备像素（device pixel）

**设备像素：又名物理像素**(physical pixel)。指的是设备能控制显示的最小物理单位，不一定是一个小正方形区块，也没有标准的宽高，只是用于显示丰富色彩的一个“点”而已

可以参考公园里的景观变色彩灯，一个彩灯(物理像素)由红、蓝、绿小灯组成，三盏小灯不同的亮度混合出各种色彩

从屏幕在工厂生产出的那天起，它上面设备像素点就固定不变了，单位为`pt`

![](https://mmbiz.qpic.cn/mmbiz_png/gH31uF9VIibRcRiczR54yJAzIMHicu30E1HhFYuugVde3iaSHW43XF1xDaoKBwwsQhVfgu362RNXCTfgsBpnmQ9Evw/640?wx_fmt=png)



#### 3.设备独立像素

设备独立像素简称 DIP （device-independent pixel），又称：**屏幕密度无关像素**。表示*与设备无关的逻辑像素*，<span style="color:blue">代表可以通过程序控制使用的虚拟像素</span>。

出现的原因?

更高分辨率的屏幕诞生.理论上来讲，在白色手机(分辨率320\*480)上相同大小的图片和文字，在黑色手机(分辨率640\*960)上会被缩小一倍，因为它的分辨率提高了一倍。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/37001e1c48e14b6c8606024183a1151b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

乔布斯在`iPhone4`的发布会上首次提出了`Retina Display`(视网膜屏幕)的概念，它正是解决了上面的问题. 在`iPhone4`使用的视网膜屏幕中，<span style="color:blue;">把`2x2`个像素当`1`个像素使用</span>，这样让屏幕看起来更精致，但是元素的大小却不会改变。

如果黑色手机使用了视网膜屏幕的技术，那么显示结果应该是下面的情况，比如列表的宽度为`300`个像素，那么在一条水平线上，白色手机会用`300`个物理像素去渲染它，而黑色手机实际上会用`600`个物理像素去渲染它。



我们必须<span style="color:blue">用一种单位</span>来同时告诉不同分辨率的手机，要显示的目标(对象)在界面上显示元素的大小是多少，这个单位就是设备独立像素(`Device Independent Pixels`)简称`DIP`或`DP`。

上面我们说，列表的宽度为`300`个像素，实际上我们可以说：列表的宽度为`300`个设备独立像素。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0dd7c1f817e4bbabe5590651ed97eb6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)



Chrome开发工具,模拟手机型号,每种型号上面会显示一个尺寸，比如`iPhone X`显示的尺寸是`375x812`，实际`iPhone X`的分辨率会比这高很多，这里显示的就是设备独立像素。



##### 获取

在`javaScript`中可以通过`window.screen.width/ window.screen.height` 查看





#### 4.设备像素比(dpr)

设备像素比dpr(device pixel ratio), 单一方向上【设备像素】除以【设备独立像素】的比值，用于描述整个渲染环境在硬件设备上的缩放程度。


$$
dpr = \frac{设备像素}{设备独立像素}
$$


获取:

在`web`中，浏览器为我们提供了`window.devicePixelRatio`来帮助我们获取`dpr`。

在`css`中，可以使用媒体查询`min-device-pixel-ratio`，区分`dpr`：

```css
@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {}
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



具体描述如下：

| 设备像素比 | 设备像素         | CSS像素 |
| ---------- | ---------------- | ------- |
| 1:1        | 1*1  1个设备像素 | 1       |
| 2:1        | 2*2  4个设备像素 | 1       |
| 3:1        | 3*3 9个设备像素  | 1       |

例外:

`iPhone 6、7、8 Plus`的实际物理像素是`1080 x 1920`，

在Chrome开发者工具中它的设备独立像素是`414 x 736`，设备像素比为`3`，

设备独立像素和设备像素比的乘积并不等于`1080 x 1920`，而是等于`1242 x 2208`。

实际上，手机会自动把`1242 x 2208`个像素点塞进`1080 * 1920`个物理像素点来渲染，我们不用关心这个过程，而`1242 x 2208`被称为屏幕的`设计像素`。我们开发过程中也是以这个`设计像素`为准。



安卓和苹果手机上设备独立像素的应用:

从苹果提出视网膜屏幕开始，才出现设备像素比这个概念.

由于`Android`屏幕尺寸非常多、分辨率高低跨度非常大，不像苹果只有它自己的几款固定设备、尺寸。所以，为了保证各种设备的显示效果，`Android`按照设备的像素密度将设备分成了几个区间：

由于各个设备的尺寸、分辨率上的差异，设备独立像素也不会完全相等，所以各种`Android`设备仍然不能做到在展示上完全相等。		











​							

#### 总结

* 无缩放情况下，1个CSS像素等于1个设备独立像素
* 设备像素由屏幕生产之后就不发生改变，而设备独立像素是一个虚拟单位会发生改变
* PC端中，1个设备独立像素 = 1个设备像素 （在100%，未缩放的情况下）
* 在移动端中，标准屏幕（160ppi）下 1个设备独立像素 = 1个设备像素
* 设备像素比（dpr） = 设备像素 / 设备独立像素
* 每英寸像素（ppi），值越大，图像越清晰



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



## 视口(viewport)

> [Viewport - 术语表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport#了解更多)
> https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts
>
> https://juejin.cn/post/6844903734347055118



### 概述

> 在电脑图形学里面，视口代表了一个可看见的多边形区域（通常来说是矩形）。在浏览器范畴里，它代表的是浏览器中网站可见内容的部分。视口外的内容在被滚动进来前都是不可见的。
>
> 但不包括浏览器的 UI， 菜单栏等——<u>即指你正在浏览的文档的那一部分</u>

简单理解，视口（viewport）是用户在**网页**上的可见区域。

Viewport 的大小取决于屏幕的大小：

* 在尺寸较大的设备中，应用显示区域不一定是全屏的，viewport 是浏览器窗口的大小。
* 在大多数移动设备中，浏览器是全屏的，viewport 是整个屏幕的大小。
* 在全屏模式下，viewport 是设备屏幕的范围，浏览器窗口小于或等于视口的大小（全屏模式快捷键`F11`,）

**概括地说，viewport 基本上是当前文档的可见部分。**



### Viewport大小是可变的

**document.documentElement.clientWidth**

用CSS像素表示的文档内部宽度，包括padding(不包括borders，margins，垂直滚动条)。这就是视口的宽度.

**Window.innerWidth**

是用 CSS pixels 单位表示的浏览器窗口 viewport 宽度，包括<span style="background: #ccc">垂直滚动条</span>(如果渲染的话)。

**Window.outerWidth**

包括了浏览器<span style="background: #ccc">外边框的窗口宽度</span>



Viewport的宽度并不总是窗口的宽度，可以在Chrome通过查询window和document的高度宽度：

```javascript
document.documentElement.clientWidth /* 1920 */
window.innerWidth /* 1920 */
window.outerWidth /* 1920 */

document.documentElement.clientHeight /* 937 */
window.innerHeight /* 937 */
window.outerHeight /* 1040 */
```

<span style="color:blue">在实测中，`innerWidth` 和 `outerWidth` 是相同的，但是 `outerHeight` 比 `innerHeight` 高</span>。这是因为 `outerHeight` 的测量包括浏览器框架在内，包括了地址栏和书签栏总共 ? 的高度，而浏览器没有左右边框.

`innerHeight` 和 `innerWidth` 所组成的区域通常被认为是**布局视口 (layout viewport)**。浏览器的框架不被认为是 viewport 的一部分。

当缩放时，  Chrome 对 `innerWidth` 和 `clientWidth` 给出了新的 CSS 像素大小。对 `outerWidth` 和 `outerHeight` 的返回值有差异: Chrome 返回了默认的像素值; Firefox 返回了缩放后的 CSS 像素值.



#### 布局视口 视觉视口

Web 浏览器包含两个 viewport，布局视口 (layout viewport) 和视觉视口 (visual viewport)。

**布局视口 (layout viewport)**: <span style="background: #ccc">`innerHeight` 和 `innerWidth` 所组成的区域</span>,但浏览器的框架不被认为是 viewport 的一部分。

**视觉视口(visual viewport)**:  指浏览器里页面的当前可视部分，且是可以改变的。视觉视口是屏幕的可视部分，不包括屏幕键盘，缩放外的区域。视觉视口要么跟布局视口相同，要么更小

当使用触屏双指缩放，当动态键盘在手机上弹出的时候，或者之前隐藏的地址栏变得可见的时候，visual viewport 缩小了，但是 layout viewport 却保持不变。





### pc端视口

​        在pc端，视口的默认宽度和**浏览器窗口**的宽度一致。在 css 标准文档中，视口也被称为：<u>初始包含块</u>，它是所有 css 百分比宽度推算的根源，在pc端可通过如下几种方式获取宽度：

```js
console.log('最干净的显示区域',document.documentElement.clientWidth);//常用
console.log('最干净的显示区域+滚动条',window.innerWidth);
console.log('最干净的显示区域+滚动条+浏览器边框',window.outerWidth);
console.log('与浏览器无关，当前设备显示分辨率横向的值',screen.width);
```

### 移动端视口

移动端浏览器通常宽度是 240px~640px，而大多数为 PC 端设计的网站宽度至少为 800px，如果仍以浏览器窗口作为视口的话，网站内容在手机上看起来会非常窄。

因此，引入了<u>布局视口、视觉视口和理想视口</u>三个概念，使得移动端中的视口与浏览器宽度不再相关联。



#### 1. 布局视口

一般移动设备的浏览器都默认设置了一个 viewport 元标签，定义一个虚拟的布局视口（layout viewport），用于解决早期的页面在手机上显示的问题。iOS, Android 基本都将这个视口分辨率设置为 980px，所以 PC 上的网页基本能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页。




`在PC端上，布局视口宽度默认等于浏览器窗口的宽度。`而在移动端上，由于要使为PC端浏览器设计的网站能够完全显示在移动端的小屏幕里，此时的布局视口会远大于移动设备的屏幕，就会出现滚动条。

DOM获取:

默认的布局视口宽度为980px.

```javascript
document.documentElement.clientWidth / clientHeight
```

设置

如果显式设置布局视口,可以使用HTML中的meta标签

```javascript
<meta name='viewport' content="width=400"
```

布局视口使移动端浏览器屏幕宽度与视口完全独立开来. CSS将根据它来进行计算,并被它约束.

 <img src="https://s1.ax1x.com/2020/06/28/NRoBg1.png" style="zoom: 50%;" />


#### 2. 视觉视口
视觉视口(`visual viewport`)：用户通过屏幕真实看到的区域。

视觉视口默认等于当前浏览器的窗口大小<span style="background: #ccc">（包括滚动条宽度）</span>。

用户可以通过缩放操作视觉视口,同时不会影响布局视口.

<u>例如：</u>

用户将浏览器窗口放大了`200%`，这时浏览器窗口中的`CSS像素`会随着视觉视口的放大而放大，这时一个`CSS`像素会跨越更多的物理像素。

所以，布局视口会限制你的`CSS`布局而视觉视口决定用户具体能看到什么。

视觉视口和缩放比例的关系为:

> 当前的缩放值 = 理想视口宽度 / 视觉视口宽度

<u>获取:</u>

```javascript
window.innerwidth / innerHeight
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bacccff7697542f799ad99cd078de44c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)





#### 3. 理想视口标准

理想视口的值其实就是<span style="color:blue">屏幕分辨率的值</span>,对应的像素叫做设备独立像素(dip).dip和设备像素无关,一个dip在任意像素密度的屏幕上都占据相同的空间.



![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c8562b88a6a4e6fb23c672b64cdcd40~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

如上图，我们在描述设备独立像素时曾使用过这张图，在浏览器调试移动端时页面上给定的像素大小就是理想视口大小，它的单位正是设备独立像素。

上面在介绍`CSS像素时`曾经提到`页面的缩放系数 = CSS像素 / 设备独立像素`，实际上说`页面的缩放系数 = 理想视口宽度 / 视觉视口宽度`更为准确。????

所以，当页面缩放比例为`100%`时，`CSS像素 = 设备独立像素`，`理想视口 = 视觉视口`。

移动设备一般具有固定的DPR,即在缩放100%时, 用多少个物理像素显示一个逻辑像素,在CSS中就是用多少个物理像素来显示一个CSS像素.

> 理想视口宽度 = 移动设备横向分辨率 / DPR

**获取**

我们可以通过调用`screen.width / height ` 来获取理想视口大小 //获取方式和设备独立像素相同.

```javascript
screen.width / height
```



**视口的设置**

移动设备的默认布局视口往往大于理想视口,会出现横向滚动条.使用meta标签将页面的布局视口设置为理想视口.

meta-viewport 标签是苹果公司在 2007 年引进的，用于移动端布局视口的控制,对PC端是无效的.



我们可以借助`<meta>`元素的`viewport`来帮助我们设置视口、缩放等，从而让移动端得到更好的展示效果。

```html
<meta name="viewport" 
      content="width=device-width; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;"
```



### 视口设置viewport

对于各种不同形状，不同设备像素比移动设备，其浏览器的视口（窗口中显示网页信息的区域）不一定与渲染页面大小相同。移动设备的视口的默认值为 980px，一般情况下都要比这些设备的屏幕尺寸要大。

为了在移动端让页面获得更好的显示效果，我们必须让布局视口、视觉视口都尽可能等于理想视口。

如果开发者想让移动端浏览器使用屏幕宽度作为视口替换默认的 980px 宽度视口，则可以在 HTML 的头部添加以下标签：

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

> 用来设置页面的布局视口宽度,属性值不带单位,默认单位为像素.其默认值在不同的浏览器中不同,但大多数为980.

<span style="color:#ee0b41">width值可以是 device-width，也可以是具体值，但有些安卓手机是不支持具体值，IOS全系列都支持。</span>

在w3schools.com中的解释是:

> `width=device-width` part sets <span style="background: #ccc" >the width of the page</span> to follow <span style="background: #ccc">the screen-width of the device</span>(which will vary depending on the device)
>
> 这里的 'the width of the page' 应该指的就是布局视口的宽度
>
> 'the screen-width of the device'指的是设备独立像素

width能决定布局视口的宽度,实际上并不是唯一决定性因素,设置initial-scale也能影响到布局视口,因为<span style="color: red">布局视口取得是`width`和`视觉视口宽度`的最大值.</span>

例如: 若手机的理想视口宽度为400px, 设置`width=device-width`, `initial-scale=2`,此时`视觉视口宽度=理想视口宽度 / initial-scale` 即200px.布局视口取两者最大值即device-width 400px.

若设置`width=device-width,initial-scale=0.5`,此时视觉视口 = 理想视口宽度 / initial-scale即800px,布局视口宽度取两者最大值即800px.





#### 2. initial-scale  

> mdn
>
> Possible: a positive number between 0.0 and 10.0
>
> des: defines the ratio between the <span style="background: #ccc">device width</span>(device-width in portrait mode or device-height in landscape mode) and <span style="background: #ccc">the viewport size</span>.

根据上面的device-width的解释,其值为设备屏幕宽度,也就是设备独立像素,其值的获取方式是`screen.width`

1. initial-scale 为页面初始化时的显示比例。  

2. initial-scale = 屏幕宽度(设备独立像素)  /  布局视口宽度。(理想视口宽度 / 视觉视口宽度

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





<span style="color:red">以下的内容没有看懂,保留不删除:</span>

> 理想视口是一种标准：让布局视口宽度 与 屏幕等宽（设备独立像素宽度），靠meta标签实现。
>
> 与屏幕（**设备独立像素**dip）等宽的**布局视口**，称之为理想视口
>
> 理想视口的特点：

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
>2. 优点：页面清晰展现，内容不再小到难以观察，用户体验较好。
>  3. 缺点：同一个元素，在不同屏幕（设备）上，呈现效果不一样，例如375宽的盒子： 375/375 和 375/414 (不是等比显示)
>4. 如何解决：做适配。



**其他注意事项**

* viewport标签只针对移动端浏览器有效,对PC端是无效的
* 当缩放比例为100%, dip宽度=CSS像素宽度=理想视口宽度=布局视口宽度
* 单独设置`initial-scale`或`width`都会有兼容问题,所以设置布局视口为理想视口的最佳方法是同时设置这两个属性
* 即使设置了`user-scalable=no` 在Android Chrome浏览器中也可以强制启动手动缩放







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



## 移动端适配方案

WEB端开发

在写`CSS`时，我们用到最多的单位是`px`，即`CSS像素`，当页面缩放比例为`100%`时，一个`CSS像素`等于一个设备独立像素。

但是`CSS像素`是很容易被改变的，当用户对浏览器进行了放大，`CSS像素`会被放大，这时一个`CSS像素`会跨越更多的物理像素。

`页面的缩放系数 = CSS像素 / 设备独立像素`。




移动端开发

在`iOS`、`Android`和`React Native`开发中样式单位其实都使用的是设备独立像素。

`iOS`的尺寸单位为`pt`，`Android`的尺寸单位为`dp`，`React Native`中没有指定明确的单位，它们其实都是设备独立像素`dp`。





**一、为什么要做适配？**
由于移动端设备的屏幕尺寸大小不一，会出现：同一个元素，在两个不同的手机上显示效果不一样（比例不同）。要想让同一个元素在不同设备上，显示效果一样，就需要适配，**无论采用何种适配方式，中心原则永远是：**<span style="color:#ee0b41">**等比**</span>！。

主流的适配方式有三种：

* 媒体查询

* viewport 适配
* rem 适配（主流方式，几乎完美适配）
* vw适配



### 0.媒体查询

#### 概述

> 通过CSS的@media媒体查询设置不同的style.通过媒体查询,可以根据不同的屏幕设置不同样式,实现不同屏幕适配.

link元素中的CSS媒体查询,不同屏幕加载不同样式文件

```html
<link rel='stylesheet' media="(max-width: 500px)" href="mobile.css"/>
<link rel='stylesheet' media="(min-width: 980px)" href="pc.css" />
```

CSS样式表中的媒体查询:

```html
@media only screen and (max-width: 414px){
	html{ font-size: 64px;}
}
@media only screen and (max-width: 375px) {
	html{ font-size:58px}
}
@media only screen and (max-width:360px) {
	html{ font-size: 56px}
}
@media only screen and (max-width: 320px) {
	html{ font-size: 50px;}
}
```





### 1.viewport 适配

- 方法：拿到设计稿之后，设置**布局视口**宽度为设计稿宽度，然后直接按照设计稿给宽高进行布局即可。
- 优点：不用复杂的计算，直接使用图稿上标注的px值
- 缺点：
  - 不能使用完整的meta标签，会导致在某些安卓手机上有兼容性问题。
  - 不希望适配的东西，例如边框，也强制参与了适配

```css
<meta name="viewport" content="width=375">
```



### 2. 淘宝flexible

> [使用Flexible实现手淘H5页面的终端适配 · Issue #17 · amfe/article (github.com)](https://github.com/amfe/article/issues/17)
>
> [amfe/lib-flexible: 可伸缩布局方案 (github.com)](https://github.com/amfe/lib-flexible)

#### 一些基本概念

##### 视窗viewport

viewport是严格等于浏览器的窗口.在桌面浏览器中,viewport就是浏览器窗口的宽度高度.但在移动设备上有点复杂.

移动端的viewport太窄,为了更好为CSS布局服务,提供了两个viewport: 

* 虚拟的viewportvisualviewport

* 布局的viewportlayoutviewport

虚拟视口和布局视口的相关资料:

* George Cummins在Stack Overflow上[对这两个基本概念做了详细的解释](http://stackoverflow.com/questions/6333927/difference-between-visual-viewport-and-layout-viewport)。

* 可以阅读[PPK写的相关教程](http://www.w3cplus.com/css/viewports.html)。

##### 设备像素比

简称dpr,其定义了物理像素和设备独立像素的对应关系.它的值可以按以下公式得到:

> 设备像素比 = 物理像素 / 设备独立像素

这个地方的理解: 是几个物理像素代表1个设备独立像素.



##### 前端实现

使用手淘`lib-flexible`的库, 这个库是制作H5适配的开源库,可以[点击这里](https://github.com/amfe/lib-flexible/archive/master.zip)下载相关文件，获取需要的JavaScript和CSS文件.也可以使用阿里的CDN:

```javascript 
<script src="http://g.tbcdn.cn/mtb/lib-flexible/{{version}}/??flexible_css.js,flexible.js"></script>
```

将代码中的`{{version}}`换成对应的版本号`0.3.4`.

<u>使用方法:</u>

[`lib-flexible`](https://github.com/amfe/lib-flexible)库的使用方法非常的简单，只需要在Web页面的`<head></head>`中添加对应的`flexible_css.js,flexible.js`文件：

第一种方法是将文件下载到你的项目中，然后通过相对路径添加:

```
<script src="build/flexible_css.debug.js"></script>
<script src="build/flexible.debug.js"></script>
```

或者直接加载阿里CDN的文件：

```
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
```

另外强烈建议对JS做**内联处理**，在所有资源加载之前执行这个JS。执行这个JS后，会在`<html>`元素上增加一个`data-dpr`属性，以及一个`font-size`样式。JS会根据不同的设备添加不同的`data-dpr`值，比如说`2`或者`3`，同时会给`html`加上对应的`font-size`的值，比如说`75px`。

如此一来，页面中的元素，都可以通过`rem`单位来设置。他们会根据`html`元素的`font-size`值做相应的计算，从而实现屏幕的适配效果。



flexible的实质:

`flexible`实际上就是能过JS来动态改写`meta`标签，代码类似这样：

```javascript
var metaEl = doc.createElement('meta')
var scale = isRetina ? 0.5 : 1;
metaEl.setAttribute('name', 'viewport')
metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
if (docEl.firstElementChild) {
    document.documentElement.firstElementChild.appendChild(metaEl);
} else {
    var wrap = doc.createElement('div');
    wrap.appendChild(metaEl);
    documen.write(wrap.innerHTML);
}
```

事实上他做了这几样事情：

- 动态改写`<meta>`标签
- 给`<html>`元素添加`data-dpr`属性，并且动态改写`data-dpr`的值
- 给`<html>`元素添加`font-size`属性，并且动态改写`font-size`的值

案例:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta content="yes" name="apple-mobile-web-app-capable">
        <meta content="yes" name="apple-touch-fullscreen">
        <meta content="telephone=no,email=no" name="format-detection">
        <script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
        <link rel="apple-touch-icon" href="favicon.png">
        <link rel="Shortcut Icon" href="favicon.png" type="image/x-icon">
        <title>再来一波</title>
    </head>
    <body>
        <!-- 页面结构写在这里 -->
    </body>
</html>
```



<u>把视觉稿中的px转换成rem</u>

**手淘设计师常选择iPhone6作为基准设计尺寸，交付给前端的设计尺寸是按`750px \* 1334px`为准(高度会随着内容多少而改变)。前端开发人员通过一套适配规则自动适配到其他的尺寸。**

目前Flexible会将视觉稿分成**`100份`**（主要为了以后能更好的兼容`vh`和`vw`），而每一份被称为一个单位`a`。同时`1rem`单位被认定为`10a`。针对我们这份视觉稿可以计算出：

```shell
1a = 7.5px
1rem = 75px
```

那么我们这个示例的稿子就分成了`10a`，也就是整个宽度为`10rem`，`<html>`对应的`font-size`为`75px`：

这样一来，对于视觉稿上的元素尺寸换算，只需要原始的`px值`除以`rem基准值`即可。例如此例视觉稿中的图片，其尺寸是`176px * 176px`,转换成为`2.346667rem * 2.346667rem`。

(根据下面的计算公式可知,x = (设计值*10)/设计稿宽度 * 1rem,



引入flexible后, 在页面上统一使用rem来布局.它的核心代码:

```javascript
//set 1rem = viewWith / 10

function setRemUnit() {
  let rem = docEl.clientWidth / 10
  docEl.style.fontSize = rem + 'px'
}

setRemUnit();


//reset rem unit on page resize

window.addEventListener('resize', setRemUnit)
window.addEventListener('pageshow', function(e) {
  if (e.persisted) {
    setRemUnit()
  }
})
```



* 将html节点的font-size设置为页面`clientWidth`(布局视口)的1/10, 1rem等于页面布局视口的1/10, 这就意味着后面使用的rem都是按照页面比例来进行计算的.

* 以iPhone6为例,布局视口为375px, 及1rem=37.5px, 这时UI给定的一个元素的宽为75px(设备独立像素),我们只需要将他设置为75 / 37.5 = 2rem.

* 当然,每个布局都要计算非常繁琐,我们可以借助`PostCSS`的`px2rem`插件来帮助我们完成这个过程.

下面的代码可以保证页面在大小变化时,布局可以自适应.当触发window的resize和pageshow事件之后自动调整html的fontSize大小.

**<span style="color:red">重要</span>**

> 我一直觉得很难理解,各个教程就都是直说UI元素大小/rem基准值就得出结果.并没有说因为什么

其实就是一个比例关系:
$$
\frac{设计值}{设计稿宽度} = \frac{x}{dip}\\
\\
故: \frac{设计值}{设计稿宽度} = \frac{x}{10rem}\\
\\
故: x = \frac{设计值}{设计稿宽度}*10rem
\\
故: x = \frac{设计值}{设计稿*1/10}*1rem
$$


```html
假设设计稿宽度为640px, ui设计稿中某元素是240px*120px
根据前面所说,布局视口(因为在meta中设置过,其值已为设备独立像素)宽度的百分之一的10倍为rem值,然后将根元素字体大小的值设置为rem.

240/640 == x/10rem 

以上公式可以简化为:
240/64 = x/1rem
3.75=x/1rem
3.75*1rem = x



10rem代表当下这个设备的布局视口宽度. 

所以这个等式的含义是: UI元素所占设计稿的比例 等于 元素在其他机型上的宽度占当前机型的理想视口宽度的比例
```



当viewport单位得到众多浏览器的兼容,上面这种方案已经被官方抛弃:

> lib-flexible这个过渡方案已经可以放弃使用,不管是现在还是以前的版本,都存有一定的问题. 建议大家开始使用viewport来替代此方案



### <span style="color:#ee0b41">2.1.rem适配</span>

**em 和 rem**

em 和 rem 都是 css 中的长度单位。而且两个都是相对长度单位，不过两个有点区别

* em 相对的是父级元素的字体大小
* rem 相对的是根元素的字体大小

rem适配的原理：编写样式时统一使用rem为单位，在不同设备上动态调整根字体大小

#### 具体方案

##### 方案一

![rem适配方案1.png](https://i.loli.net/2021/01/05/ziclxkXCKmEVnaM.png)

##### 方案介绍

淘宝、百度的移动端页面用的此方案

1. 设置完美视口
2. <span style="color:#ee0b41">通过js设置根字体大小 = **( 当前设备横向独立像素值 *100) / 设计稿宽度**</span>
3. <span style="color:#ee0b41">编写样式时，直接以rem为单位，值为：**设计值 / 100** </span>  例如345/100*110.4px = 380.88px
4. 增加 JS 代码进行实时适配



##### 公式详解

来让我们细化一下公式:

```html
还是相同占比的问题:

设计值/设计稿宽度  = x/dip

设计值/设计稿宽度*100 = x/dip*100

```


$$
\frac{设计值}{设计稿宽度} = \frac{x}{dip} \\
\\
\frac{dip*100}{设计稿宽度} = \frac{x*100}{设计值} \\
\\
规定:1rem=\frac{dip*100}{设计稿宽度}
\\
故: 1rem = \frac{x*100}{设计值} = \frac{dip*100}{设计稿宽度}
\\
故: x = \frac{设计值}{100}*1rem
$$


##### 代码实例

优势：编写样式时直接挪动小数点即可。

```html

//页面JS脚本中-设置实时刷新页面布局
<script type='text/javascript'>
    function adapter(){ //适配器函数
  			//获取手机横向的设备独立像素dip
        const dip=document.documentElement.clientWidth;
  			//计算根根字体大小(100是我们指定的,375是设计稿宽度)
        const rootfontSize=(dip*100)/375;
  			//设置根字体
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



```javascript
function adapter() {
  let rem = document.documentElement.clientWidth / 10
  
  document.style.fontSize = rem + 'px'
   
}

window.onresize = adapter()
```





### 3.vw适配(百分比)

`vh、vw`方案即将视觉视口宽度 `window.innerWidth `和视觉视口高度 `window.innerHeight` 等分为 100 份. 上面的flexible就是模仿这种方案,因为早些时候vw还没有得到很好的兼容.

#### 单位

vw和vh是两个相对单位

- 1vw = 等于布局视口宽度的1%
- 1vh = 等于布局视口高度的1%

vmin: vw和vh中的较小值

vmax: vw和vh中的较大值

如果视觉视口为375px,那么1vw=3.75px, 这时UI给定的一个元素的宽为75px(设备独立像素),我们只需要将它设位置75/3.75 = 20vw.

#### 如何快速换算比例关系?

> 使用`PostCSS`的 `postcss-px-to-viewport` 插件帮我们完成这个过程。写代码时，我们只需要根据`UI`给的设计图写`px`单位即可

#### 问题

- `px`转换成`vw`不一定能完全整除，因此有一定的像素差。
- 比如当容器使用`vw`，`margin`采用`px`时，很容易造成整体宽度超过`100vw`，从而影响布局效果。当然我们也是可以避免的，例如使用`padding`代替`margin`，结合`calc()`函数使用等等...





#### 如何使用

如果视觉视口为375px,那么1vw=37.5px. UI给定一个元素是75px(设备独立像素),我们只需要将它设置为`75/3.75 = 20vw`.

这里的比例关系不用我们自己换算,可以使用`PostCSS`的`postcss-px-to-viewport`插件帮我们完成这个过程.写代码时,我们只需要根据UI给的设置图写px单位即可.

#### 问题

* px转vw不一定能完全整除,因为有一定的像素差
* 当容器使用vw,margin采用px时,很容易造成整体宽度超过100vw,从而影响整体布局效果.当然可以通过使用padding代替margin,结果calc()函数使用等.

不过vw和vh有一定的兼容性问题：详见：[caniuse.com网站查询适配](https://www.caniuse.com/#search=vw)













## 适配问题及解决

> [关于移动端适配，你必须要知道的 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903845617729549#heading-21)

### 1px问题

为了适配各种屏幕，我们写代码时一般使用设备独立像素来对页面进行布局。

而在设备像素比大于`1`的屏幕上，我们写的`1px`实际上是被多个物理像素渲染，这就会出现`1px`在有些屏幕上看起来很粗的现象。



#### border-image

基于`media`查询判断不同的设备像素比给定不同的`border-image`：

```css
.border_1px{
  border-bottom: 1px solid #000;
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
  .border_1px{
    border-bottom: none;
    border-width: 0 0 1px 0;
    border-image: url(../img/1pxline.png) 0 0 2 0 stretch;
  }
}
```



#### background-image

和`border-image`类似，准备一张符合条件的边框背景图，模拟在背景上。

```css
.border_1px{
  border-bottom: 1px solid #000;
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
  .border_1px{
    background: url(../img/1pxline.png) repeat-x left bottom;
    background-size: 100% 1px;
  }
}
```

上面两种都需要单独准备图片，而且圆角不是很好处理，但是可以应对大部分场景。



#### 伪类 + transform

基于`media`查询判断不同的设备像素比对线条进行缩放：

```css
.border_1px:before{
  content: '';
  position: absolute;
  top: 0;
  height: 1px;
  width: 100%;
  background-color: #000;
  transform-origin: 50% 0%;
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
  .border_1px:before{
    transform: scaleY(0.5);
  }
}
@media only screen and (-webkit-min-device-pixel-ratio:3){
  .border_1px:before{
    transform: scaleY(0.33);
  }
}
```

这种方式可以满足各种场景，如果需要满足圆角，只需要给伪类也加上`border-radius`即可。



#### svg

上面我们`border-image`和`background-image`都可以模拟`1px`边框，但是使用的都是位图，还需要外部引入。

借助`PostCSS`的`postcss-write-svg`我们能直接使用`border-image`和`background-image`创建`svg`的`1px`边框：

```css
@svg border_1px { 
  height: 2px; 
  @rect { 
    fill: var(--color, black); 
    width: 100%; 
    height: 50%; 
    } 
  } 
.example { border: 1px solid transparent; border-image: svg(border_1px param(--color #00b1ff)) 2 2 stretch; }
```

编译后

```css 
.example { border: 1px solid transparent; border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='2px'%3E%3Crect fill='%2300b1ff' width='100%25' height='50%25'/%3E%3C/svg%3E") 2 2 stretch; }
```

上面的方案是大漠在他的文章中推荐使用的，基本可以满足所有场景，而且不需要外部引入，这是我个人比较喜欢的一种方案。

#### 设置viewport

通过设置缩放，让`CSS`像素等于真正的物理像素。

例如：当设备像素比为`3`时，我们将页面缩放`1/3`倍，这时`1px`等于一个真正的屏幕像素。

```javascript
const scale = 1 / window.devicePixelRatio;
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        window.document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale);
```

实际上，上面这种方案是早先`flexible`采用的方案。

当然，这样做是要付出代价的，这意味着你页面上所有的布局都要按照物理像素来写。这显然是不现实的，这时，我们可以借助`flexible`或`vw、vh`来帮助我们进行适配。????





### 适配iPhoneX

iPhoneX和其他具有边缘屏幕的手机

![331ae1667fbd495892819ea0a3750ad6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp (1304×685) (byteimg.com)](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/331ae1667fbd495892819ea0a3750ad6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

这些手机和普通手机在外观上无外乎做了三个改动：圆角（`corners`）、刘海（`sensor housing`）和小黑条（`Home Indicator`）。为了适配这些手机，安全区域这个概念变诞生了：安全区域就是一个不受上面三个效果的可视窗口范围。

为了保证页面的显示效果，我们必须把页面限制在安全范围内，但是不影响整体效果。

#### viewport-fit

`viewport-fit`是专门为了适配`iPhoneX`而诞生的一个属性，它用于限制网页如何在安全区域内进行展示.

它的值是:

`contain`: 可视窗口完全包含网页内容

`cover`：网页内容完全覆盖可视窗口

默认情况下或者设置为`auto`和`contain`效果相同

#### env / constant

我们需要将顶部和底部合理的摆放在安全区域内，`iOS11`新增了两个`CSS`函数`env、constant`，用于设定安全区域与边界的距离。

函数内部可以是四个常量：

- `safe-area-inset-left`：安全区域距离左边边界距离
- `safe-area-inset-right`：安全区域距离右边边界距离
- `safe-area-inset-top`：安全区域距离顶部边界距离
- `safe-area-inset-bottom`：安全区域距离底部边界距离

注意：我们必须指定`viweport-fit`后才能使用这两个函数

```javascript
<meta name="viewport" content="viewport-fit=cover"
```

`constant`在`iOS < 11.2`的版本中生效，`env`在`iOS >= 11.2`的版本中生效，这意味着我们往往要同时设置他们，将页面限制在安全区域内：

```css
body {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```

当使用底部固定导航栏时，我们要为他们设置`padding`值：

```css
{
  padding-bottom: constant(safe-area-inset-bottom)
  padding-bottom: env(safe-area-inset-bottom)
}
```



### 横屏适配

很多视口我们要对横屏和竖屏显示不同的布局，所以我们需要检测在不同的场景下给定不同的样式：

#### JS检测横屏

`window.orientation`获取屏幕旋转方向

```javascript
window.addEventListener('resize', () => {
  if (window.orientation === 180 || window.orientation === 0) {
    //正常方向或屏幕旋转180度
    console.log('竖屏')
  };
  
  if (window.orientation === 90 || window.orientation === -90) {
    // // 屏幕顺时钟旋转90度或屏幕逆时针旋转90度
    console.log('横屏')
  }
})
```

#### CSS检测横屏

```css
@media screen and (orientation: portrait) {
  /*竖屏...*/
} 
@media screen and (orientation: landscape) {
  /*横屏...*/
}
```



### 图片模糊问题

#### 产生原因

我们平时使用的图片大多数都属于位图（`png、jpg...`），位图由一个个像素点构成的，每个像素都具有特定的位置和颜色值.

理论上，位图的每个像素对应在屏幕上使用一个物理像素来渲染，才能达到最佳的显示效果。

而在`dpr > 1`的屏幕上，位图的一个像素可能由多个物理像素来渲染，然而这些物理像素点并不能被准确的分配上对应位图像素的颜色，只能取近似值，所以相同的图片在`dpr > 1`的屏幕上就会模糊:

#### 解决方案

为了保证图片质量，我们应该尽可能让一个屏幕像素来渲染一个图片像素，所以，针对不同`DPR`的屏幕，我们需要展示不同分辨率的图片。

如：在`dpr=2`的屏幕上展示两倍图`(@2x)`，在`dpr=3`的屏幕上展示三倍图`(@3x)`。

##### media查询

使用`media`查询判断不同的设备像素比来显示不同精度的图片：

只适用于背景图. ???

```css
.avatar{
  background-image: url(conardLi_1x.png);
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
  .avatar{
    background-image: url(conardLi_2x.png);
  }
}
@media only screen and (-webkit-min-device-pixel-ratio:3){
  .avatar{
    background-image: url(conardLi_3x.png);
  }
}
```



##### image-set

> 只适用于背景图

```css
.avatar {
    background-image: -webkit-image-set( "conardLi_1x.png" 1x, "conardLi_2x.png" 2x );
}
```



##### srcset

使用`img`标签的`srcset`属性，浏览器会自动根据像素密度匹配最佳显示图片：

```css
<img src="conardLi_1x.png"
     srcset=" conardLi_2x.png 2x, conardLi_3x.png 3x">
```



##### JS拼接图片URL

使用`window.devicePixelRatio`获取设备像素比，遍历所有图片，替换图片地址：

```javascript
const dpr = window.devicePixelRatio;
const images =  document.querySelectorAll('img');
images.forEach((img)=>{
  img.src.replace(".", `@${dpr}x.`);
})

```



##### 使用svg

`SVG `的全称是可缩放矢量图（`Scalable Vector Graphics`）。不同于位图的基于像素，`SVG` 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。

除了我们手动在代码中绘制`svg`，我们还可以像使用位图一样使用`svg`图片：

```html
<img src="conardLi.svg">

<img src="data:image/svg+xml;base64,[data]">

.avatar {
  background: url(conardLi.svg);
}
```

- [99designs.com/blog/tips/p…](https://link.juejin.cn/?target=https%3A%2F%2F99designs.com%2Fblog%2Ftips%2Fppi-vs-dpi-whats-the-difference%2F)
- [www.w3cplus.com/css/vw-for-…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.w3cplus.com%2Fcss%2Fvw-for-layout.html)
- [aotu.io/notes/2017/…](https://link.juejin.cn/?target=https%3A%2F%2Faotu.io%2Fnotes%2F2017%2F11%2F27%2Fiphonex%2Findex.html)



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

> [(4条消息) vue和react脚手架rem适配配置_張三同学的博客-CSDN博客_react rem适配](https://blog.csdn.net/weixin_46535880/article/details/123971379)

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

4. `src/utils/` 目录下创建 `rem.js 或 adapter.js` (响应式判断设备大小，设置不同的根字体大小)，内容如下

   ```js
   function adapter (){
   	const dp = document.documentElement.clientWidth
   	const rootFontSize = dp/10
   	document.documentElement.style.fontSize = rootFontSize + 'px'
   }
   adapter()
   window.onresize = adapter
   ```

5. 在 `scr/index.js` 入口文件中直接引入执行 `rem.js 或 adapter.js`

   ```javascript
   import '@/utils/rem.js'
   //or
   import '@/utils/adapter.js'
   ```

6. 在项目中的写法

   ```vue
   直接按照设计稿中的虚拟像素写, px2rem会将px转换为rem值.
   
   remUnit代表1rem的值是多少
   
   remUnit: 37.5 代表 1rem = 37.5px; 所以当你一个75px值时，它会自动转成 (75px/37.5)rem,
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

