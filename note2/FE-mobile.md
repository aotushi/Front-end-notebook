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

是用 CSS pixels 单位表示的浏览器窗口 viewport 宽度，包括垂直滚动条(如果渲染的话)。

**Window.outerWidth**

包括了浏览器外边框的窗口宽度



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

**布局视口 (layout viewport)**: `innerHeight` 和 `innerWidth` 所组成的区域,但浏览器的框架不被认为是 viewport 的一部分。

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

​	移动端视口共包括三种：布局视口、视觉视口和理想视口



#### 1. 布局视口

布局视口(`layout viewport`)：当我们以百分比来指定一个元素的大小时，它的计算值是由这个<span style="color:blue">元素的包含块</span>计算而来的。当这个元素是最顶级的元素时，它就是基于布局视口来计算的。

所以，布局视口是网页布局的基准窗口，在`PC`浏览器上，布局视口就等于当前浏览器的窗口大小（不包括`borders` 、`margins`、滚动条）。

获取:

```javascript
document.documentElement.clientWidth / clientHeight
```



 <img src="https://s1.ax1x.com/2020/06/28/NRoBg1.png" style="zoom: 50%;" />


#### 2. 视觉视口
视觉视口(`visual viewport`)：用户通过屏幕真实看到的区域。

视觉视口默认等于当前浏览器的窗口大小（包括滚动条宽度）。

当用户对浏览器进行缩放时，不会改变布局视口的大小，所以页面布局是不变的，但是缩放会改变视觉视口的大小。

<u>例如：</u>

用户将浏览器窗口放大了`200%`，这时浏览器窗口中的`CSS像素`会随着视觉视口的放大而放大，这时一个`CSS`像素会跨越更多的物理像素。

所以，布局视口会限制你的`CSS`布局而视觉视口决定用户具体能看到什么。

<u>获取:</u>

```javascript
window.innerwidth / innerHeight
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bacccff7697542f799ad99cd078de44c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)





#### 3. 理想视口标准

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c8562b88a6a4e6fb23c672b64cdcd40~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)



上面在介绍`CSS像素时`曾经提到`页面的缩放系数 = CSS像素 / 设备独立像素`，实际上说`页面的缩放系数 = 理想视口宽度 / 视觉视口宽度`更为准确。

所以，当页面缩放比例为`100%`时，`CSS像素 = 设备独立像素`，`理想视口 = 视觉视口`。

**获取**

```javascript
screen.width / height
```




 



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
