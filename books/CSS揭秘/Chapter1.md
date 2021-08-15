# 第一章 引言

## 一. web标准





## 二. CSS编码技巧

### 1.尽量减少代码的重复

代码可维护性的最大要素是尽量减少改动时要编辑的地方

* 当某些值相互依赖时，应该把它们的相互关系用代码表达出来: 例如字号和行高的关系.

```css
font-size:20px;
line-height:30px; //no ×
line-height:1.5; //yse √
```



* 推荐使用HSLA而不是RGBA来产生半透明的白色

### 2.代码技巧

#### 2.1代码易维护vs. 代码量少

```css
//左侧不加边框的两种写法,生产中采用第二种.
1.
border-width:10px 10px 10px 0; //no

2.
border:10px;
border-left:0;
```



#### 2.2 currentColor

这个关键字并没有绑定到一个固定的颜色值，而是一直被解析为color

#### 2.3 继承

inherit可以用在任何CSS属性中，而且它总是绑定到父元素的计算值（对伪元素来说，则会取生成该伪元素的宿主元素)

```css
举例:
//1.要把表单元素的字体设定为与页面的其他部分相同，你并不需要重复指定字体属性，只需利用inherit的特性
input,select,button{font:inherit;}

//2.超链接的颜色设定为与页面中其他文本相同
a{color:inherit;}

//3.背景颜色继承
```



#### 2.4 设计领域种字体的差异

字体设计领域广为人知的是，圆形的字形（比如0）与矩形字形相比，需要稍微放大一些，因为我们倾向于把圆形感知得比其实际尺寸更小一些.

一个非常常见的例子是给一个文本容器设置内边距,假如我们给容器的四边指定相同的内边距，则实际效果看起来并不相等.

原因在于，字母的形状在两端都比较整齐，而顶部和底部则往往参差不齐，从而导致你的眼睛把这些参差不齐的空缺部分感知为多出来的内边距。因此，如果我们希望四边的内边距看起来是基本一致的，就需要减少顶部和底部的内边距。

<iframe height="265" style="width: 100%;" scrolling="no" title="css揭秘-圆形字形与矩形字形的内边距差异" src="https://codepen.io/westover/embed/vYxQavp?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/westover/pen/vYxQavp'>css揭秘-圆形字形与矩形字形的内边距差异</a> by xxl
  (<a href='https://codepen.io/westover'>@westover</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>





#### 2.5 响应式网页设计

比较常见的实践是用多种分辨率来测试一个网站，然后添加越来越多的媒体查询（Media Query）规则来修补网站在这些分辨率下出现的问题。然而对于今后的CSS改动来说，每个媒体查询都会增加成本，而这种成本是不应轻易上升的

媒体查询的断点不应该由具体的设备来决定，而应该根据设计自身来决定。这不仅是因为我们的网站需要面向的设备太多了（尤其是考虑到未来的设备时），还因为一个网站在桌面端可能会以任意尺寸的窗口来显示。

下面还有一些建议，可能会帮你避免不必要的媒体查询

1.使用**百分比**代替固定长度. 退而求其次,也应该尝试使用与视口相关的单位（vw、vh、vmin和vmax），它们的值解析为视口宽度或高度的百分比

2.较大分辨率下得到固定宽度时, 使用**max-width**而非width. 因为它可以适应较小的分辨率,而无需媒体查询.

3.为替换元素(例如,img,video,iframe,object等)设置一个**max-width:100%;**

4.假如背景图片需要完整地铺满一个容器，不管容器的尺寸如何变化，**background-size: cover**这个属性都可以做到。但是，我们也要时刻牢记——带宽并不是无限的，因此在移动网页中通过CSS把一张大图缩小显示往往是不太明智的

5.当图片（或其他元素）以**行列式进行布局**时，让视口的宽度来决定列的数量。弹性盒布局（即Flexbox）或者display: inline-block加上常规的文本折行行为，都可以实现这一点

6.在使用**多列文本**时，指定column-width（列宽）而不是指定column-count（列数），这样它就可以在较小的屏幕上自动显示为单列布局。



#### 2.6 合理简写

在使用展开式属性的写法时，通常会遇到这样的问题：展开式写法并不会帮助你清空所有相关的其他属性，从而可能会干扰你想要达到的效果。

```css
background:url(tr.png) no-repeat top right /2em 2em,
					 url(br.png) no-repeat bottom right /2em 2em,
					 url(bl.png) no-repeat bottom left /2em 2em;

//简写
background:url(tr.png) top right,
					 url(br.png) bottom right,
					 url(bl.png) bottom left;
background-size:2em 2em;
background-repeat:no-repeat;
```



#### 2.7 预处理器

Stylus(http://stylus-lang.com)

Sass(http://sass-lang.com)

LESS(http://lesscss.org)





## 第二章 背景与边框

### 一.半透明边框

在其他属性（比如边框）中使用半透明颜色并没有想像中那么容易。

假设我们想给一个容器设置一层白色背景和一道半透明白色边框,body的背景会从它的半透明边框透上来。我们最开始的尝试可能是这样的.

```css
border: 10px solid hsla(0,0%,100%,.5);
background: white;
```

解决: 通过background-clip属性来调整,初始值是border-box，意味着背景会被元素的border box（边框的外沿框）裁切掉. 如果不希望背景侵入边框所在的范围，我们要做的就是把它的值设为padding-box.

```css
border: 10px solid hsla(0,0%,100%,.5);
background: white;
background-clip: padding-box;
```

<iframe height="265" style="width: 100%;" scrolling="no" title="半透明边框" src="https://codepen.io/westover/embed/mdWoNOw?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/westover/pen/mdWoNOw'>半透明边框</a> by xxl
  (<a href='https://codepen.io/westover'>@westover</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>







### 二.多重边框

#### 1.box-shadow

作用: 1.生成投影; 2.生成边框

box-shadow还接受第四个参数（称作“扩张半径”），通过指定正值或负值，可以让投影面积加大或者减小。一个正值的扩张半径加上两个为零的偏移量以及为零的模糊值，得到的“投影”其实就像一道实线边框

```css
background: lightblue;
box-shadow: 0 0 0 10px #655;
```

<iframe height="265" style="width: 100%;" scrolling="no" title="box-shadow" src="https://codepen.io/westover/embed/KKWEOrL?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/westover/pen/KKWEOrL'>box-shadow</a> by xxl
  (<a href='https://codepen.io/westover'>@westover</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

以上可以使用border实现同样的边框效果, box-shadow的好处在于，它支持逗号分隔语法，我们可以创建任意数量的投影.在上面的示例中再加上一道[插图]deeppink颜色的“边框”.

box-shadow是层层叠加的，第一层投影位于最顶层，依次类推。因此,想在外圈再加一道5px的外框，那就需要指定扩张半径的值为15px（10px+5px).



**注意事项**

* 不会影响布局，而且也不会受到box-sizing属性的影响。不过，你还是可以通过内边距或外边距（这取决于投影是内嵌和还是外扩的）来额外模拟出边框所需要占据的空间
* 上述方法所创建出的假“边框”出现在元素的外圈。它们并不会响应鼠标事件，比如悬停或点击.上述方法所创建出的假“边框”出现在元素的外圈。它们并不会响应鼠标事件，比如悬停或点击. 



#### 2.outline

在某些情况下，你可能只需要两层边框，那就可以先设置一层常规边框，再加上outline（描边）属性来产生外层的边框

**好处**

1. box-shadow方案只能模拟实线边框（假设我们需要产生虚线边框效果，box-shadow就没辙了)
2. 通过outline-offset属性来控制它跟元素边缘之间的间距，这个属性甚至可以接受负值

<iframe height="265" style="width: 100%;" scrolling="no" title="outline-offset" src="https://codepen.io/westover/embed/rNybBVL?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/westover/pen/rNybBVL'>outline-offset</a> by xxl
  (<a href='https://codepen.io/westover'>@westover</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

使用outline实现上面box-shadow效果

```css
background: lightblue;
border: 10px solid #655;
outline: 5px solid deeppink;
```



**注意事项**

* 它只适用于双层“边框”的场景，因为outline并不能接受用逗号分隔的多个值
* 边框不一定会贴合border-radius属性产生的圆角，因此如果元素是圆角的，它的描边可能还是直角的. 未来可能修复.
* 如果你想使用这个方法，请切记：最好在不同浏览器中完整地测试最终效果