### 浏览器处理文件的基本步骤

1. 浏览器载入HTML文件
2. 将HTML文件转化成一个DOM(Document Ojbect Model),DOM是文件在计算机内存中的表现形式
3. 浏览器拉取该HTML相关大部分内容，例如图片，视频和CSS样式.
4. 浏览器拉取到CSS后进行解析.
   1. 根据选择器不同类型分到不同的'桶'中
   2. 将不算同的(基于选择器规则)规则应用在对应的DOM节点中
   3. 添加节点依赖的样式
5. 上述规则应用到渲染树后,渲染树会依照出现的结构进行布局.
6. 着色: 网站展示在屏幕上.

![](https://mdn.mozillademos.org/files/11781/rendering.svg)



### 关于DOM

一个DOM有一个树形结构，标记语言中的每一个元素、属性以及每一段文字都对应着结构树中的一个节点（Node/DOM或DOM node）。节点由节点本身和其他DOM节点的关系定义，有些节点有父节点，有些节点有兄弟节点（同级节点）。





### 块级盒子和内联盒子

在 CSS 中我们广泛地使用两种“盒子” —— **块级****盒子** (**block box**) 和 **内联盒子** (**inline box**)**。**这两种盒子会在**页面流**（page flow）和**元素之间的关系**方面表现出不同的行为:

#### **块级盒子行为**

* 盒子在内联方向上扩展并占据父元素在该方向上的所有空间.绝大数情况下以为着和父元素一样宽
* 每个盒子都会换行
* width和height起作用
* 内边距,外边距和边框有效,会将其他元素从当前盒子周围推开

#### **行内盒子行为**

* 盒子不会产生换行
* width和height不起作用
* 垂直方向的内边距,外边距和边框会被应用,但是不会把其他处于inline状态的盒子推开
* 水平方向的内边距,外边距和边框会被应用且会把其他处于inline状态的盒子推开



### 内部和外部显示类型

css的box模型有一个外部显示类型，来决定盒子是块级还是内联。

同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的。默认情况下是按照 **[正常文档流](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)** 布局，也意味着它们和其他块元素以及内联元素一样

块级和内联布局是web上默认的行为 —— 正如上面所述， 它有时候被称为 *正常文档流*， 因为如果没有其他说明，我们的盒子布局默认是块级或者内联



**更改内部显示类型**

可以通过使用类似 `flex` 的 `display` 属性值来更改内部显示类型

如果设置 `display: flex`，在一个元素上，外部显示类型是 `block`，但是内部显示类型修改为 `flex`。 该盒子的所有直接子元素都会成为flex元素



### 盒模型

完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。

模型定义了盒的每个部分 —— margin, border, padding, and content .

有标准盒模型的和替代（IE）盒模型之分.



#### 盒模型各部分

CSS中组成一个块级盒子需要

- **Content box**: 这个区域是用来显示内容，大小可以通过设置 [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height).
- **Padding box**: 包围在内容区域外部的空白区域； 大小通过 [`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) 相关属性设置。
- **Border box**: 边框盒包裹内容和内边距。大小通过 [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 相关属性设置。
- **Margin box**: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 [`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 相关属性设置。



#### 标准盒模型

在标准模型中，如果你给盒设置 `width` 和 `height`，实际设置的是 *content box*。 padding 和 border 再加上设置的宽高一起决定整个盒子的大小

margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到margin

#### IE盒模型

width=width-border-padding

height=height-border-padding



默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 `box-sizing: border-box` 来实现
