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

### 什么是CSS

使用 CSS 就可以完全控制浏览器如何显示 HTML 元素，从而充分展示你喜欢的设计样式

#### CSS用来干什么?

一份**文档**是由标记语言组织起来的文本文件 —— [HTML](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML) 是最常见的标记语言, 但你可能也听说过其他可标记语言，如 [SVG](https://developer.mozilla.org/zh-CN/docs/Glossary/SVG) 或 [XML](https://developer.mozilla.org/zh-CN/docs/Glossary/XML)。

CSS 可以用于给文档添加样式 



### CSS语法

CSS 规则集（rule-set）由选择器和声明块组成：

![](https://www.w3school.com.cn/i/css/selector.gif)

#### 具体规则:

* 选择器指向需要设置样式的HTML元素
* 声明块包含一条或多条用分号分隔的声明
* 每条声明都包含一个CSS属性名和值,以冒号分隔
  * 属性: 可读的标识符,指示想要改变的样式特征
  * 值: 如何更改这些样式特性.大多数值是相对简单的关键字或数值，但也有一些可能的值以函数的形式出现
* 多条CSS声明用分号分隔,声明块用花括号括起来



#### 函数

大多数值是相对简单的关键字或数值，但也有一些可能的值以函数的形式出现.例如calc()函数, rotate()函数.



#### @规则

 `@rules` (pronounced "at-rules"). 这是一些特殊的规则，为 CSS提供了一些关于如何表现的指导。[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule)



#### 注释

CSS中的注释以`\*`开头，以`*/`结尾。

以与HTML相同的方式，浏览器往往忽略CSS中的大部分空白；许多空白只是为了提高可读性。



#### 速记属性

一些属性，如 [`font`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font), [`background`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background), [`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding), [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border), and [`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 等属性称为速记属性--这是因为它们允许您在一行中设置多个属性值，从而节省时间并使代码更整洁。



### CSS如何运行

> [CSS如何运行 - 学习 Web 开发 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works)

当浏览器展示一个文件的时候，它必须兼顾文件的内容和文件的样式信息，下面我们会了解到它处理文件的标准的流程。

1. 浏览器<span style="color:blue">载入HTML文件</span>（比如从网络上获取）。
2. 将HTML文件转化成一个<span style="color:blue">DOM（Document Object Model）</span>，DOM是文件在计算机内存中的表现形式，下一节将更加详细的解释DOM。
3. 接下来，浏览器会<span style="color:blue">拉取</span>该HTML相关的大部分资源，比如嵌入到页面的图片、视频和CSS样式。JavaScript则会稍后进行处理，简单起见，同时此节主讲CSS，所以这里对如何加载JavaScript不会展开叙述。
4. 浏览器拉取到CSS之后会进行<span style="color:blue">解析</span>，根据选择器的不同类型（比如element、class、id等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id选择器等）应用在对应的DOM的节点中，并添加节点依赖的样式（这个中间步骤称为渲染树）。
5. 上述的规则应用于渲染树之后，渲染树会依照应该出现的结构进行<span style="color:blue">布局</span>
6. 网页<span style="color:blue">展示</span>在屏幕上（这一步被称为着色）

结合下面的图示更形象：

![](https://mdn.mozillademos.org/files/11781/rendering.svg)





### CSS构建基础

层叠和继承

CSS选择器

盒模型

背景与边框

处理不同的文本方向

溢出的内容

值和单位

在CSS中调整大小

图片,媒体和表单元素

样式化表格

调试CSS

组织CSS



### 层叠和继承

#### 冲突的规则

CSS 代表**层叠样式表 (Cascading Style Sheets)**

CSS发生冲突遵循的规则有:

##### 层叠

Stylesheets **cascade（样式表层叠）**

* 顺序: 当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

##### 优先级

浏览器是根据优先级来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则

##### 继承

一些设置在父元素上的css属性是可以被子元素继承的，有些则不能

* 定义:后代元素可以继承父元素设置的**<font color="red">文本的属性</font>**<sup>都有哪些呢?</sup>
* 继承的权重为0,优先继承离自己最近的父辈元素. 即使祖先元素使用 **!important**
* **不能继承**: <font color="red">父辈元素的width, height, 背景图,背景色等其他</font>

哪些属性属于默认继承很大程度上是由常识决定的。??(需要总结)



#### 控制继承

CSS 为控制继承提供了四个特殊的通用属性值。每个css属性都接收这些值。

##### [`inherit`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inherit)

设置该属性会使子元素属性和父元素相同。实际上，就是 "开启继承".

**`inherit`** 关键字使得元素获取其父元素的[计算值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/computed_value)。它可以应用于任何 CSS 属性，包括 CSS 简写 [`all`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/all)。

对于[继承](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance#inherited_properties)属性，inherit 关键字只是增强了属性的默认行为，通常只在覆盖原有的值的时候使用。

继承始终来自文档树中的父元素，即使父元素不是包含块。





##### [`initial`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial)

**`initial`** CSS关键字将属性的初始（或默认）值应用于元素。

不应将初始值与浏览器样式表指定的值混淆。它可以应用于任何CSS属性。这包括CSS简写[all](https://developer.mozilla.org/zh-CN/docs/Web/CSS/all)，initial可用于将所有CSS属性恢复到其初始状态。

在继承的属性上，初始值可能是意外的。你应该考虑使用 [`inherit`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inherit), [`unset`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/unset)，或[`revert` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/revert) 关键字代替。(此句晦涩, 以下为原文,)

> On [inherited properties](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#inherited_properties), the initial value may be unexpected. You should consider using the [`inherit`](https://developer.mozilla.org/en-US/docs/Web/CSS/inherit), [`unset`](https://developer.mozilla.org/en-US/docs/Web/CSS/unset), [`revert`](https://developer.mozilla.org/en-US/docs/Web/CSS/revert), or [`revert-layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/revert-layer) keywords instead.







##### [`unset`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/unset)

CSS 关键字 **`unset`** 可以分为两种情况，如果这个属性本来有从父级继承的值（这个属性默认可以继承，且父级有定义），则将该属性重新设置为继承的值，如果没有继承父级样式，则将该属性重新设置为初始值。

换句话说，在第一种情况下（继承属性）它的行为类似于[`inherit`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inherit) ，在第二种情况下（非继承属性）类似于[`initial`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial)。它可以应用于任何 CSS 属性，包括 CSS 简写属性 [`all`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/all) 。







##### [`revert`](https://developer.mozilla.org/en-US/docs/Web/CSS/revert)

只有很少的浏览器支持











#### 重设所有属性值

CSS 的 shorthand 属性 `all` 可以用于同时将这些继承值中的一个应用于（几乎）所有属性。

它的值可以是其中任意一个 (`inherit`, `initial`, `unset`, or `revert`)。

这是一种撤销对样式所做更改的简便方法，以便回到之前已知的起点。

```css
all: unset;
```

**案例**

<iframe width="100%" height="700" src="https://mdn.github.io/css-examples/learn/cascade/all.html" loading="lazy"></iframe>



#### 层叠的 3 个影响因素

重要程度从大到小分别是:

* 重要程度
* 优先级
* 资源顺序

##### 资源顺序

如果你有超过一条规则，而且都是相同的权重，那么最后面的规则会应用。可以理解为后面的规则覆盖前面的规则，直到最后一个开始设置样式。

##### 优先级

> [优先级 - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)

优先级就是分配给指定的 CSS 声明的一个权重，它由 匹配的选择器中的 每一种选择器类型的 数值 决定。



一些规则在最后出现，但是却应用了前面的规则。这是因为前面的有更高的**优先级**

虽然考虑的是选择器，以及应用在选中对象上的规则，但不会覆盖所有规则，只有相同的属性。

最佳实践: 一种常见的做法是给基本元素定义通用样式，然后给不同的元素创建对应的类。



##### 浏览器如何计算优先级

<span style="color:blue">一个选择器的优先级可以说是由四个部分相加 (分量)，可以认为是个十百千 — 四位数的四个位数：</span>

1. **千位**： 如果声明在 [`style`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-style) 的属性（内联样式）则该位得一分。这样的声明没有选择器，所以它得分总是1000。
2. **百位**： 选择器中包含<u>ID选择器</u>则该位得一分。
3. **十位**： 选择器中包含<u>类选择器、属性选择器、伪类</u>则该位得一分。
4. **个位**：选择器中包含<u>元素、伪元素选择器</u>则该位得一分。

**注**: <span style="color:blue">通用选择器 (`*`)，组合符 (`+`, `>`, `~`, ' ')，和否定伪类 (`:not`) 不会影响优先级。</span>

在进行计算时不允许进行进位，例如，20 个类选择器仅仅意味着 20 个十位，而不能视为 两个百位，也就是说，无论多少个类选择器的权重叠加，都不会超过一个 ID 选择器。



`:not` 否定伪类在优先级计算中不会被看作是伪类。事实上，在计算选择器数量时还是会把其中的选择器当做普通选择器进行计数。

有如下 CSS 样式声明：

```
div.outer p {
  color: orange;
}

div:not(.outer) p {
  color: blueviolet;
}
```

将其应用于以下的 HTML 时：

```
<div class="outer">
  <p>This is in the outer div.</p>
  <div class="inner">
    <p>This text is in the inner div.</p> //颜色变成blueviolet
  </div>
</div>
```

会在屏幕上出现以下结果：



##### !important

有一个特殊的 CSS 可以用来覆盖所有上面所有优先级计算，不过需要很小心的使用 — `!important`。用于修改特定属性的值， 能够覆盖普通规则的层叠。

最佳实践: **强烈建议除了非常情况不要使用它。**当你不能编辑核心的CSS模块，不能用任何其他方式覆盖，而你又真的想要覆盖一个样式时。覆盖 `!important` 唯一的办法就是另一个 `!important` 具有 相同*优先级* 而且顺序靠后，或者更高优先级。

经验:

- **一定**要优先考虑使用样式规则的优先级来解决问题而不是 `!important`
- **只有**在需要覆盖全站或外部 CSS 的特定页面中使用 `!important`
- **永远不要**在你的插件中使用 `!important`
- **永远不要**在全站范围的 CSS 代码中使用 `!important`





**案例**: 

| 选择器                                    | 千位 | 百位 | 十位 | 个位 | 优先级 |
| :---------------------------------------- | :--- | :--- | :--- | :--- | :----- |
| `h1`                                      | 0    | 0    | 0    | 1    | 0001   |
| `h1 + p::first-letter`                    | 0    | 0    | 0    | 3    | 0003   |
| `li > a[href*="en-US"] > .inline-warning` | 0    | 0    | 2    | 2    | 0022   |
| `#identifier`                             | 0    | 1    | 0    | 0    | 0100   |
| 内联样式                                  | 1    | 0    | 0    | 0    | 1000   |

**选择器优先级图表**

![](https://justcode.ikeepstudying.com/wp-content/uploads/2016/07/css_weight.png)





#### CSS位置影响

> 晦涩难理解

相互冲突的声明将按以下顺序适用，后一种声明将覆盖前一种声明：

1. 用户代理样式表中的声明(例如，浏览器的默认样式，在没有设置其他样式时使用)。
2. 用户样式表中的常规声明(由用户设置的自定义样式)。
3. 作者样式表中的常规声明(这些是我们web开发人员设置的样式)。
4. 作者样式表中的`!important`声明
5. 用户样式表中的`!important` 声明



### CSS选择器

CSS选择器是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式。

选择器所选择的元素，叫做“选择器的对象”。

#### 选择器列表/分组

多个使用相同样式的CSS选择器，那么这些单独的选择器可以被混编为一个“选择器列表”，使用<span style="color:blue">逗号分隔</span>

<span style="color:blue">如果任何一个选择器无效 (存在语法错误)，那么整条规则都会被忽略。</span>

```css
h1,h2,h3,h4,h5,h6 {
  color: green;
  }
```



#### 继承及问题

根据 CSS，子元素从父元素继承属性。但是它并不总是按此方式工作。看看下面这条规则：

```css
body {
     font-family: Verdana, sans-serif;
     }
```

所有 body 的子元素都应该显示 Verdana 字体，子元素的子元素也一样。并且在大部分的现代浏览器中，也确实是这样的。

但是在那个浏览器大战的血腥年代里，这种情况就未必会发生，那时候对标准的支持并不是企业的优先选择。比方说，Netscape 4 就不支持继承，它不仅忽略继承，而且也忽略应用于 body 元素的规则。IE/Windows 直到 IE6 还存在相关的问题，在表格内的字体样式会被忽略。我们又该如何是好呢？

##### 解决

友善对待Netscape 4

基本不重要, 这种问题现在基本上没有










#### CSS选择器3种使用方式

##### 外部CSS

* 使用外部样式表
* 在 head 部分的 \<link> 元素内包含对外部样式表文件的引用

**案例**

```css
<link rel="stylesheet" type="text/css" href="mystyle.css" >
```

##### 内部CSS

内部样式是在 head 部分的 \<style> 元素中进行定义

##### 行内CSS

* 行内样式（也称内联样式）可用于为单个元素应用唯一的样式
* 行内样式通过将内容与呈现混合在一起,耦合性搞,难以维护



### 选择器的种类

#### 类型,类和ID选择器

##### 类型选择器

有时也叫做“标签名选择器*”*或者是”元素选择器“，因为它在文档中选择了一个HTML标签/元素的缘故

##### 全局选择器

全局选择器，是由一个星号（`*`）代指的，它选中了文档中的所有内容（或者是父元素中的所有内容，比如，它紧随在其他元素以及邻代运算符之后的时候）

使用全局选择器,让选择器更易读

```html
article :first-child {} //用作<article>元素选择器的一个后代选择器

article:first-child {}  //选择了作为其他元素的第一子元素的<article>元素
  
//解决
  
article *:first-child {} //选中<article>元素的任何第一子元素：
```

##### 类选择器

类选择器以一个句点（`.`）开头，会选择文档中应用了这个类的所有项.

指向特定元素的类

使用附加了类的欲选元素的选择器做到这点，其间没有空格

命名规范: 

* 不能以数字开头, 可以用字母, 下划线开头,+数字+下划线+中划线+字母;
* 建议使用驼峰命名法(小驼峰): 第一个单词首字母小写, 第二个单词首字母大写

```html
span.highLight {}
```

多个类被指向一个元素

你能对一个元素应用多个类，然后分别指向它们，或者仅仅在选择器中存在所有这些类的时候选择这一元素。???(难以理解)

##### ID选择器

ID选择器开头为`#`而非句点，不过基本上和类选择器是同种用法。

在一篇文档中，一个ID只会用到一次。

它能选中设定了`id`的元素，你能在ID前面加上类型选择器，只指向元素和ID都匹配的类。



#### 属性选择器

> [属性选择器 - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)

CSS **属性选择器**通过已经存在的属性名或属性值匹配元素。

##### 存否和值选择器

这些选择器允许基于一个元素自身是否存在（例如`href`）或者基于各式不同的按属性值的匹配，来选取元素。

| 选择器          | 示例                            | 描述                                                         |
| :-------------- | :------------------------------ | :----------------------------------------------------------- |
| `[attr]`        | `a[title]`                      | 匹配带有一个名为*attr*的属性的元素——方括号里的值。           |
| `[attr=value]`  | `a[href="https://example.com"]` | 匹配带有一个名为*attr*的属性的元素，其值正为*value*——引号中的字符串。 |
| `[attr~=value]` | `p[class~="special"]`           | 表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value。 |
| `[attr|=value]` | `div[lang|="zh"]`               | 表示带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀（"`-`"为连字符，Unicode 编码为 U+002D）开头。典型的应用场景是用来匹配语言简写代码（如 zh-CN，zh-TW 可以用 zh 作为 value）。 |

使用案例:



##### 子字符串匹配选择器

| 选择器                                           | 示例                | 描述                                                         |
| :----------------------------------------------- | :------------------ | :----------------------------------------------------------- |
| `[attr^=value]`                                  | `li[class^="box-"]` | 匹配带有一个名为*attr*的属性的元素，其值开头为*value*子字符串。 |
| `[attr$=value]`                                  | `li[class$="-box"]` | 匹配带有一个名为*attr*的属性的元素，其值结尾为*value*子字符串 |
| `[attr*=value]`                                  | `li[class*="box"]`  | 匹配带有一个名为*attr*的属性的元素，其值的字符串中的任何地方，至少出现了一次*value*子字符串。 |
| [*attr* *operator* *value* i]                    |                     | 在属性选择器的右方括号前添加一个用空格隔开的字母 `i`（或 `I`），可以在匹配属性值时忽略大小写（支持 ASCII 字符范围之内的字母）。 |
| `[*attr* *operator* *value* s]` Experimental阶段 |                     | 在属性选择器的右方括号前添加一个用空格隔开的字母 `s`（或 `S`），可以在匹配属性值时区分大小写（支持 ASCII 字符范围之内的字母）。 |



使用案例:



##### 大小写敏感

如果你想在大小写不敏感的情况下，匹配属性值的话，<span style="color:blue">你可以在闭合括号(中括号)之前，使用`i`值</span>。这个标记告诉浏览器，要以大小写不敏感的方式匹配ASCII字符。没有了这个标记的话，值会按照文档语言对大小写的处理方式，进行匹配——HTML中是大小写敏感的。

有一个更加新的`s`值，它会强制在上下文的匹配正常为大小写不敏感的时候，强行要求匹配时大小写敏感。不过，在浏览器中它不太受支持，而且在上下文为HTML时也没啥用。

使用案例:

```css
li[class^='a' i] {
  color: red;
}
```





#### 伪类与伪元素

##### 什么是伪类?

<span style="text-decoration:underline red ">伪类是选择器的一种，它用于选择处于特定状态的元素</span>，比如当它们是这一类型的第一个元素时，或者是当鼠标指针悬浮在元素上面的时候。

##### 语法

```css
:pseudo-class-name
```



##### 简单伪类

[`:first-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child)伪类选择器

表示在一组兄弟元素中的第一个元素



[`:last-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child) 

代表父元素的最后一个子元素



[`:only-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child)

匹配没有任何兄弟元素的元素

等效的选择器还可以写成 `:first-child:last-child`或者`:nth-child(1):nth-last-child(1)`,当然，前者的权重会低一点。





[`:invalid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid)

表示任意内容未通过验证的 [`<input>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) 或其他 [`<form>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form) 元素 



```css
/*可选定任意无效的<input> */

input:invalid {
  background-color: pink;
}
```



注意:

[单选钮（Radio buttons）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid#单选钮（radio_buttons）)

若一组单选钮被设定为必须选定一个，在该组中没有按钮被选中的情况，:invalid 伪类被应用到该组中的所有按钮。（单选钮组按照 name 属性共享相同值。）

[Gecko 默认](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid#gecko_默认)

默认情况下，Gecko 不应用 :invalid 伪类设置的样式。但是，Gecko 可以使用 [`:-moz-ui-invalid` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid) 伪类的样式（使用 [`box-shadow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 属性设置红色发光边框）来达到类似的效果，它可以被应用在:invalid 伪类的子集中。



##### 用户行为伪类

**用户行为伪类**，有时叫做**动态伪类**，表现得就像是一个类在用户和元素交互的时候加到了元素上一样。案例包括：

- `:hover`——只会在用户将指针挪到元素上的时候才会激活，一般就是链接元素。
- `:focus`——只会在用户使用键盘控制，选定元素的时候激活。





##### 伪元素

表现得是像你往标记文本中加入全新的HTML元素一样，而不是向现有的元素上应用类。伪元素开头为双冒号`::`



**语法**

```css
::pseudo-element-name

//一些早期的伪元素曾使用单冒号的语法,现代的浏览器为了保持后向兼容，支持早期的带有单双冒号语法的伪元素。
```



**案例**

如果你想选中一段的第一行，你可以把它用一个`<span>`元素包起来，然后使用元素选择器；不过，如果包起来的单词/字符数目长于或者短于父元素的宽度，这样做会失败。由于我们一般不会知道一行能放下多少单词/字符——因为屏幕宽度或者字体大小改变的时候这也会变——通过改变HTML的方式来可预测地这么做是不可能的。

`::first-line`伪元素选择器会值得信赖地做到这件事——即使单词/字符的数目改变，它也只会选中第一行。



##### 伪类和伪元素结合



**案例**

第一段的第一行加粗，你需要把`:first-child`和`::first-line`选择器放到一起。

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```



##### 生成带有`::before 和 ::after`内容

有一组特别的伪元素，它们和[`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)属性一同使用，使用CSS将内容插入到你的文档中中

伪元素的更推荐的用法是插入一个图标，例如下面的示例加入的一个小箭头，作为一个视觉性的提示，而且我们并不希望屏幕阅读器读出它。

```css
.box::after {
    content: " ➥"
}
```

`::before`和`::after`伪元素与`content`属性的共同使用，在CSS中被叫做“生成内容”，而且你会见到这种技术被用于完成各种任务。

案例1

<iframe width="100%" height="400" src="https://mdn.github.io/css-examples/learn/selectors/after-icon.html" loading="lazy"></iframe>

案例2

用 `::before`伪元素加入了个空字符串。我们把它设为了`display: block`，以让它可以用 width 和 height 进行样式化。然后我们可以用 CSS 像任何元素那样样式化。你可以摆弄 CSS，改变它的外观和行为。

<iframe width="100%" height="500" src="https://mdn.github.io/css-examples/learn/selectors/before-styled.html" loading="lazy"></iframe>





[CSS Arrow Please](http://www.cssarrowplease.com/)网站就是一个著名的示例，它帮你用CSS生成一个箭头。



##### 伪类和伪元素列表

[伪类](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#伪类)

| 选择器                                                       | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`:active`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active) | 在用户激活（例如点击）元素的时候匹配。                       |
| [`:any-link`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:any-link) | 匹配一个链接的`:link`和`:visited`状态。                      |
| [`:blank`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:blank) | 匹配空输入值的[`<input>`元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)。 |
| [`:checked`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked) | 匹配处于选中状态的单选或者复选框。                           |
| [`:current` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) | 匹配正在展示的元素，或者其上级元素。                         |
| [`:default`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:default) | 匹配一组相似的元素中默认的一个或者更多的UI元素。             |
| [`:dir`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:dir) | 基于其方向性（HTML`dir`属性或者CSS`direction`属性的值）匹配一个元素。 |
| [`:disabled`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:disabled) | 匹配处于关闭状态的用户界面元素                               |
| [`:empty`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty) | 匹配除了可能存在的空格外，没有子元素的元素。                 |
| [`:enabled`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:enabled) | 匹配处于开启状态的用户界面元素。                             |
| [`:first`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first) | 匹配[分页媒体](https://developer.mozilla.org/en-US/docs/Web/CSS/Paged_Media)的第一页。 |
| [`:first-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child) | 匹配兄弟元素中的第一个元素。                                 |
| [`:first-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type) | 匹配兄弟元素中第一个某种类型的元素。                         |
| [`:focus`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus) | 当一个元素有焦点的时候匹配。                                 |
| [`:focus-visible`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-visible) | 当元素有焦点，且焦点对用户可见的时候匹配。                   |
| [`:focus-within`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-within) | 匹配有焦点的元素，以及子代元素有焦点的元素。                 |
| [`:future` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:future) | 匹配当前元素之后的元素。                                     |
| [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) | 当用户悬浮到一个元素之上的时候匹配。                         |
| [`:indeterminate`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:indeterminate) | 匹配未定态值的UI元素，通常为[复选框](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)。 |
| [`:in-range`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:in-range) | 用一个区间匹配元素，当值处于区间之内时匹配。                 |
| [`:invalid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid) | 匹配诸如`<input>`的位于不可用状态的元素。                    |
| [`:lang`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:lang) | 基于语言（HTML[lang](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/lang)属性的值）匹配元素。 |
| [`:last-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child) | 匹配兄弟元素中最末的那个元素。                               |
| [`:last-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-of-type) | 匹配兄弟元素中最后一个某种类型的元素。                       |
| [`:left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:left) | 在[分页媒体 (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Pages)中，匹配左手边的页。 |
| [`:link`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:link) | 匹配未曾访问的链接。                                         |
| [`:local-link` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:local-link) | 匹配指向和当前文档同一网站页面的链接。                       |
| [`:is()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is) | 匹配传入的选择器列表中的任何选择器。                         |
| [`:not`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not) | 匹配作为值传入自身的选择器未匹配的物件。                     |
| [`:nth-child(an+b)`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child) | 匹配一列兄弟元素中的元素——兄弟元素按照an+b形式的式子进行匹配（比如2n+1匹配元素1、3、5、7等。即所有的奇数个）。 |
| [`:nth-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type) | 匹配某种类型的一列兄弟元素（比如，`<p>`元素）——兄弟元素按照an+b形式的式子进行匹配（比如2n+1匹配元素1、3、5、7等。即所有的奇数个）。 |
| [`:nth-last-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-child) | 匹配一列兄弟元素，从后往前倒数。兄弟元素按照an+b形式的式子进行匹配（比如2n+1匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。 |
| [`:nth-last-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-of-type) | 匹配某种类型的一列兄弟元素（比如，`<p>`元素），从后往前倒数。兄弟元素按照an+b形式的式子进行匹配（比如2n+1匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。 |
| [`:only-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child) | 匹配没有兄弟元素的元素。                                     |
| [`:only-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type) | 匹配兄弟元素中某类型仅有的元素。                             |
| [`:optional`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:optional) | 匹配不是必填的form元素。                                     |
| [`:out-of-range`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:out-of-range) | 按区间匹配元素，当值不在区间内的的时候匹配。                 |
| [`:past` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:past) | 匹配当前元素之前的元素。                                     |
| [`:placeholder-shown`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:placeholder-shown) | 匹配显示占位文字的input元素。                                |
| [`:playing` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:playing) | 匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“播放”的元素。 |
| [`:paused` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:paused) | 匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“暂停”的元素。 |
| [`:read-only`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-only) | 匹配用户不可更改的元素。                                     |
| [`:read-write`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-write) | 匹配用户可更改的元素。                                       |
| [`:required`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:required) | 匹配必填的form元素。                                         |
| [`:right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:right) | 在[分页媒体 (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Pages)中，匹配右手边的页。 |
| [`:root`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root) | 匹配文档的根元素。                                           |
| [`:scope`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope) | 匹配任何为参考点元素的的元素。                               |
| [`:valid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:valid) | 匹配诸如`<input>`元素的处于可用状态的元素。                  |
| [`:target`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target) | 匹配当前URL目标的元素（例如如果它有一个匹配当前[URL分段](https://en.wikipedia.org/wiki/Fragment_identifier)的元素）。 |
| [`:visited`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited) | 匹配已访问链接。                                             |

[伪元素](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#伪元素)

| 选择器                                                       | 描述                                                 |
| :----------------------------------------------------------- | :--------------------------------------------------- |
| [`::after`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after) | 匹配出现在原有元素的实际内容之后的一个可样式化元素。 |
| [`::before`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before) | 匹配出现在原有元素的实际内容之前的一个可样式化元素。 |
| [`::first-letter`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter) | 匹配元素的第一个字母。                               |
| [`::first-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line) | 匹配包含此伪元素的元素的第一行。                     |
| [`::grammar-error`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::grammar-error) | 匹配文档中包含了浏览器标记的语法错误的那部分。       |
| [`::selection`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection) | 匹配文档中被选择的那部分。                           |
| [`::spelling-error`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::spelling-error) | 匹配文档中包含了浏览器标记的拼写错误的那部分。       |







**实例(未完成)**

在众多网站上按钮在不同状态下效果不一，用以增强用户体验.

根据用户的行为不同，按钮效果可以分为：默认状态、悬浮状态、点击时状态、焦点状态和点击后状态，可以按照CSS3的动态伪选择器，在不同状态下给按钮赋予不同的样式风格.

<iframe height="300" style="width: 100%;" scrolling="no" title="动态伪类选择器-未完成" src="https://codepen.io/westover/embed/preview/gOWOPmJ?defaultTab=css%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/gOWOPmJ">
  动态伪类选择器-未完成</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>









2. 目标伪类选择器

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









3.语言伪类选择器

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





4. UI元素状态选择器

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





5. 结构伪类选择器

伪类可以将一段并不存在的HTML当作独立元素来定位，或是找到无法使用其他简单选择器就能定位到的切实存在的元素。因此CSS3给伪类选择器引入一种“结构伪类选择器”。这种选择器可以根据元素在文档树中的某些特性（如相对位置）定位到它们。也就是说，**通过文档树结构的相互关系来匹配特定的元素**，从而减少HTML文档对ID或类名的定义，帮助你保持代码干净和整洁。



**文档树**

文档树（Document Tree）是HTML页面的层级结构。它由元素、属性和文本组成，它们都是一个节点（Node），就像公司的组织结构图一样.

**用法**

| 选择器                | 功能描述                                                     |
| --------------------- | ------------------------------------------------------------ |
| E:root                | 选择匹配元素E所在文档的根元素.在HTML文档中,根元素始终是html,<br/>此时该选择器与html类型选择器匹配的内容相同. |
| E:empty               | 选择没有子元素的元素,且该元素不包括任何文本节点<br/>常用来处理动态输出内容,例如高亮用户搜索出来的结果为空时. |
| E:first-child         | 作为父元素第一个子元素的元素. 与E:nth-child(1)等同           |
| E:last-child          | 作为父元素E的最后一个子元素的元素. 与E:nth-last-child(1)等同. |
| E F:nth-child(n)      | 选择父元素E的第n个子元素F. <br/>其中,n的值可以是整数(1,2,3),关键字(odd,event),公式(2n+1, -n+5).<br/>n的起始值为1,不是0. |
| E F:nth-last-child(n) | 选择父元素E的倒数第n个子元素F.<br/>此选择器与`E F:nth-child(n)`刚好相反,但使用方法都一样.<br/>其中:nth-last-child(1)始终匹配的是最后一个元素,与:last-child等同. |
| E:nth-of-type(n)      | 选择父元素内具有指定类型的第n个E元素                         |
| E:nth-last-of-type(n) | 选择父元素内具有指定类型的倒数第n个E元素                     |
| E:first-of-type       | 选择父元素内具有指定类型的第一个E元素,与E:nth-of-type(1)等同 |
| E:last-of-type        | 选择父元素内具有指定类型的倒数第1个E元素, 与E:nth-last-of-type(1)等同. |
| E:only-child          | 选择父元素只包含一个子元素,且该子元素匹配E元素               |
| E:only-of-type        | 选择父元素只包含一个同类型的子元素,且该子元素匹配E元素       |
|                       |                                                              |



**实例**

<iframe height="300" style="width: 100%;" scrolling="no" title="结构伪类选择器-demo" src="https://codepen.io/westover/embed/ExmVQmw?defaultTab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/ExmVQmw">
  结构伪类选择器-demo</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>







**浏览器兼容性**

CSS3结构伪类选择器在主流浏览器下运行都非常的完美，只是在IE 9以下版本的浏览器中无法正常运行



**结构伪类选择器中的n指什么**

```js
//在结构伪类选择器中，有4 个伪类选择器接受参数n
:nth-child(n)
:nth-of-child(n)
:nth-of-type(n)
:nth-last-of-type(n)
n的起始值始终是1，而不是0。换句话说，当参数n的值为0时，选择器将选择不到任何匹配的元素。

表达式中,n从0开始计算
```

n的值为:

1.具体数值

2.表达式n*length

3.n+length

4.-n+length

5.n*length+b

6.odd/even



**实例2-zebra斑马线表格**

给数据量大的表格设计背景色,传统方法是奇偶行不同背景色,但存在潜在的不便,例如动态插入行.

<iframe height="300" style="width: 100%;" scrolling="no" title="结构伪类选择器-zebra表格" src="https://codepen.io/westover/embed/JjNYvXY?defaultTab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/JjNYvXY">
  结构伪类选择器-zebra表格</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>









6. 否定伪类选择器

否定选择器“:not()”是CSS3的新选择器，类似jQuery中的“:not()”选择器，主要用来定位不匹配该选择器的元素

**语法**

| 选择器   | 功能描述                   |
| -------- | -------------------------- |
| E:not(F) | 匹配所有除元素F之外的E元素 |





##### 伪元素选择器案例

伪元素可用于定位文档中包含的文本，但无法在文档树中定位。伪类一般反映无法在CSS中轻松或可靠地检测到的某个元素属性或状态；另一方面，伪元素表示DOM外部的某种文档结构

CSS3中对伪元素进行了一定的调整，在以前的基础上增加一个冒号

对于IE 6～8，仅支持单冒号表示法，而现代浏览器同时支持这两种表示法。另外一个区别是，双冒号与单冒号在CSS3中主要用来区分伪类和伪元素。到目前来说，这两种方式都是被浏览器接受的。



::first-letter

“::first-letter”用来选择文本块的第一个字母，除非在同一行中包含一些其他元素。“::first-letter”通常用于给文本元素添加排版细节，例如下沉字母或首字母，下面的代码是如何使用“::first-letter”创建首字下沉。



**实例**

<iframe height="300" style="width: 100%;" scrolling="no" title="::first-letter -首字下沉" src="https://codepen.io/westover/embed/vYmNjjW?defaultTab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/vYmNjjW">
  ::first-letter -首字下沉</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>







::first-line

“::first-line”的使用和“::first-letter”类似，也常用于文本排版方面，只不过“::firstline”用来匹配元素的第一行文本，可以应用一些特殊的样式，给文本添加一些细微的区别。“::first-line”将匹配block、inline-block、table-caption、table-cell等级别元素的第一行





::before ::after

“:before”和“:after”，或许不会陌生，因为清除浮动就使用这两个伪类

“::before”和“::after”不是指存在于标记中的内容，而是可以插入额外内容的位置。尽管生成的内容不会成为DOM的一部分，但它同样可以设置样式

要伪元素生成内容,还需要配合content属性. 例如，假设在页面上所有外部链接之后的括号中附加它们所指向的URL，无须将URL硬编码到标记中，可以结合使用一个属性选择器和“::after”伪元素。

```css
a[href^=http]::after {
  content: "("attr(href)")"
}

//html显示
内容(url的地址)
```



::selection

“::selection”是用来匹配突出显示的文本。浏览器默认情况下，选择网站文本是深蓝的背景，白色的字体

浏览器对“::selection”支持并不完美，在整个IE 系列中仅有IE 9支持，Firefox也需要加上其私有属性“-moz”

注意:

伪元素::selection仅接受两个属性，一个是background，另一个是color。

**实例**

<iframe height="300" style="width: 100%;" scrolling="no" title="::selection demo" src="https://codepen.io/westover/embed/rNmOKPY?defaultTab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/rNmOKPY">
  ::selection demo</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



#### 关系选择器



##### 后代选择器

后代选择器——典型用单个空格（` `）字符——组合两个选择器



##### 子代关系选择器

子代关系选择器是个大于号（`>`），只会在选择器选中<u>直接子元素</u>的时候匹配.继承关系上更远的后代则不会匹配。



##### 相邻兄弟选择器

邻接兄弟选择器（`+`）用来选中恰好处于另一个在继承关系上同级的元素同级的元素





##### 通用兄弟选择器

如果你想选中一个元素的兄弟元素，即使它们不直接相邻，你还是可以使用通用兄弟关系选择器（`~`）

案例:

选中所有的`<p>`元素后*任何地方*的`<img>`元素

```css
p~img
```



#### 选择器使用遇到的问题

##### 伪类选择器`:first-child`, `:last-child`失效

>   使用`:first-child`伪类时一定要保证前面没有兄弟节点，把h1去掉就可以；或者使用div包住article，然后css：`div.article:first-child`
>
>   或者使用`first-of-type`





### 盒模型



#### 块级盒子和内联盒子

**块级**盒子 (**block box**) 和 **内联盒子** (**inline box**)**。**这两种盒子会在**页面流**（page flow）和**元素之间的关系**方面表现出不同的行为:

一个被定义成块级的（block）盒子会表现出以下行为:

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性可以发挥作用
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”



如果一个盒子对外显示为 `inline`，那么他的行为如下:

- 盒子不会产生换行。
-  [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。



#### 内部和外部显示类型

css的box模型有一个外部显示类型，来决定盒子是块级还是内联。

同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的。默认情况下是按照 **[正常文档流](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)** 布局，也意味着它们和其他块元素以及内联元素一样(如上所述).

但是，我们可以通过使用类似 `flex` 的 `display` 属性值来更改内部显示类型。 如果设置 `display: flex`，在一个元素上，外部显示类型是 `block`，但是内部显示类型修改为 `flex`。 该盒子的所有直接子元素都会成为flex元素，会根据 [弹性盒子（Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) [）](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)规则进行布局



#### 什么是盒模型

完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。模型定义了盒的每个部分 —— margin, border, padding, and content —— 合在一起就可以创建我们在页面上看到的内容.

#### 分类

标准盒模型

替代(IE)盒模型



#### 盒模型组成部分

CSS中组成一个块级盒子需要:

- **Content box**: 这个区域是用来显示内容，大小可以通过设置 [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height).
- **Padding box**: 包围在内容区域外部的空白区域； 大小通过 [`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) 相关属性设置。
- **Border box**: 边框盒包裹内容和内边距。大小通过 [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 相关属性设置。
- **Margin box**: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 [`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 相关属性设置。

如图所示:

![](https://mdn.mozillademos.org/files/16558/box-model.png)

#### 标准盒模型

在标准模型中，如果你给盒设置 `width` 和 `height`，实际设置的是 *content box*。 padding 和 border 再加上设置的宽高一起决定整个盒子的大小。

margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到margin。

盒子宽度 = width

#### 替代(IE)盒模型

盒子宽度(高度) = width + padding\*2 + border\*2



#### 盒模型的切换

默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 `box-sizing: border-box` 来实现。 

如果你希望所有元素都使用替代模式，而且确实很常用，设置 `box-sizing` 在 `<html>` 元素上，然后设置所有元素继承该属性

Internet Explorer默认使用替代盒模型，没有可用的机制来切换。（译者注：IE8+ 支持使用`box-sizing` 进行切换 

```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}
```

如果想要深入理解，请看 [the CSS Tricks article on box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)。 ?? 没太明白.



外边距/内边距/边框

#### 外边距margin

`**margin**` 属性为给定元素设置所有四个（上下左右）方向的外边距属性。也就是 [`margin-top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top)，[`margin-right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-right)，[`margin-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom)，和 [`margin-left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-left) 四个外边距属性设置的[简写](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties)



##### 语法

`margin` 属性接受 1~4 个值。每个值可以是 [`<length>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)，[`<percentage>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/percentage)，或 `auto`。

**[`length`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)**

以固定值为外边距。

[`percentage`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/percentage)

相对于[包含块](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block)的*宽度*，以百分比值为外边距。

`auto`

让浏览器自己选择一个合适的外边距。有时，在一些特殊情况下，该值可以使元素居中



##### <u>水平居中</u>

在现代浏览器中实现水平居中

```css
display: flex;
justify-content: center;
```

在 IE8-9 这样的不支持弹性盒布局的旧式浏览器中,以上代码不生效

```css
margin: 0 auto;
```





##### 外边距折叠

如果你有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。

块的[上外边距 (margin-top)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top)和[下外边距 (margin-bottom)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom)有时合并 (折叠) 为单个边距，其大小为单个边距的最大值 (或如果它们相等，则仅为其中一个)，这种行为称为**边距折叠**。

注意有设定[float](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)和[position=absolute](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position#absolute)的元素不会产生外边距重叠行为



##### 外边距重叠的 3 种情况

<u>**同一层相邻元素之间**</u>

相邻的两个元素之间的外边距重叠，除非后一个元素加上[clear-fix 清除浮动](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear)

```html
<style>
p:nth-child(1){
  margin-bottom: 13px;
}
p:nth-child(2){
  margin-top: 87px;
}
</style>

<p>下边界范围会...</p>
<p>...会跟这个元素的上边界范围重叠。</p>
```





<u>**空的块级元素**</u>

当一个块元素上边界`margin-top` 直接贴到元素下边界`margin-bottom`时也会发生边界折叠。

这种情况会发生在一个块元素完全没有设定边框`border`、内边距`padding`、高度`height`、最小高度`min-height` 、最大高度`max-height` 、内容设定为 inline 或是加上[clear-fix](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear)的时候.

```html
<style>
p {
  margin: 0;
}
div {
  margin-top: 13px;
  margin-bottom: 87px;
}
</style>

<p>上边界范围是 87 ...</p>
<div></div>
<p>... 上边界范围是 87</p>
```

<iframe src="https://codesandbox.io/embed/marginfolding-zrrf96?autoresize=1&fontsize=12&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="marginFolding"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



> 问题??
>
> 按照如图所示的代码,在浏览器中, div的上下margin分别为设置的大小,p的margin也并没有改变





**<u>没有内容将父元素和后代元素分开</u>** !!!!

 如果没有边框[`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)，内边距[`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)，行内内容，也没有创建[块级格式上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)或[清除浮动](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear)来分开一个块级元素的上边界[`margin-top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top) 与其内一个或多个后代块级元素的上边界[`margin-top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top)；

或没有边框，内边距，行内内容，高度[`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height)，最小高度[`min-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-height)或 最大高度[`max-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-height) 来分开一个块级元素的下边界[`margin-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom)与其内的一个或多个后代后代块元素的下边界[`margin-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom).

则就会出现父块元素和其内后代块元素外边界重叠，重叠部分最终会溢出到父级块元素外面。

```html
<style type="text/css">
    section    {
        margin-top: 13px;
        margin-bottom: 87px;
    }

    header {
        margin-top: 87px;
    }

    footer {
        margin-bottom: 13px;
    }
</style>

<section>
    <header>上边界重叠 87</header>
    <main></main>
    <footer>下边界重叠 87 不能再高了</footer>
</section>
```



以上这些内容都是发生在 Block-Level 的元素，设定 floating 和 absolutely positioned 的元素完全不用担心边界重叠的问题。



#### 边框

边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。

可以使用[`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)属性一次设置所有四个边框的宽度、颜色和样式





#### 内边距

内边距位于边框和内容区域之间。与外边距不同，您不能有负数量的内边距，所以值必须是0或正的值。

应用于元素的任何背景都将显示在内边距后面，内边距通常用于将内容推离边框。



我们可以使用[`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)简写属性控制元素所有边，或者每边单独使用等价的普通属性：



#### 盒子模型和内联盒子

盒子模型的部分属性也可以应用于内联盒子，例如由`<span>`元素创建的那些内联盒子。

案例: 

我们在一个段落中使用了`<span>`，并对其应用了宽度、高度、边距、边框和内边距。

* 宽度和高度被忽略了。
* 外边距、内边距和边框是生效的，但它们不会改变其他内容与内联盒子的关系，因此内边距和边框会与段落中的其他单词重叠。



<iframe src="https://codesandbox.io/embed/css-inline-box-czd0th?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="css/inline-box"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



#### 使用display: inline-block

display有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用:您不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。

一个元素使用 `display: inline-block`，实现我们需要的块级的部分效果：

- 设置`width` 和`height` 属性会生效。
- `padding`, `margin`, 以及`border` 会推开其他元素。

但是，它不会跳转到新行，如果显式添加`width` 和`height` 属性，它只会变得比其内容更大。



使用场景:

当您想要通过添加内边距使链接具有更大的命中区域时，这是很有用的。`<a>`是像`<span`>一样的内联元素；你可以使用`display: inline-block`来设置内边距，让用户更容易点击链接。





### 元素的显示模式

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









### 处理不同方向的文本!!



### 溢出的内容

#### 概要

CSS中万物皆盒，因此我们可以通过给[`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width)和[`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height)（或者 [`inline-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inline-size) 和 [`block-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/block-size)）赋值的方式来约束盒子的尺寸。



#### overflow属性

[`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)属性是你控制一个元素溢出的方式，它告诉浏览器你想怎样处理溢出。`overflow`的默认值为`visible`，这就是我们的内容溢出的时候，我们在默认情况下看到它们的原因。

可以使用[`overflow-y`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-y)属性，设置`overflow-y: scroll`来仅在`y`轴方向滚动。用[`overflow-x`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-x)，以在x轴方向上滚动，尽管这不是处理长英文词的好办法

#### text-overflow

**`text-overflow`** [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 属性用于确定如何提示用户存在隐藏的溢出内容。其形式可以是裁剪、显示一个省略号（“`…`”）或显示一个自定义字符串。

`text-overflow` 属性只对那些在块级元素溢出的内容有效，但是必须要与块级元素*内联*（inline）方向一致（举个反例：文本无法在盒子的下方溢出）。

##### 语法

```css
text-overflow: xxx;
```

- 关键字之一：`clip`、`ellipsis`、`fade`
- 函数 `fade()`：传入 [``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length) 或 [``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/percentage) 来控制淡出距离
- 一个字符串 `<string>`。



##### 参数

clip

默认值。这个关键字会在[内容区域](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)的极限处截断文本，因此可能会在单词的中间发生截断

如果你的目标浏览器支持 `text-overflow: ''`，为了能在两个单词过渡处截断，你可以使用一个空字符串值（`''`）作为 `text-overflow` 属性的值。



ellipsis

这个关键字会用一个省略号（`'…'`、`U+2026 HORIZONTAL ELLIPSIS`）来表示被截断的文本。



`<string>` 测试阶段

用来表示被截断的文本。字符串内容将被添加在[内容区域](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)中，所以会减少显示出的文本。



`<fade>(<length> | <percentage> )`  测试阶段

这个函数将会截断行内溢出文本并在完全透明的行边缘添加一个淡出特效。 参数决定淡出特效的距离。[``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/percentage) 以行宽而定。小于 `0` 的值视为 0。大于行宽的值视为行宽。



### CSS值和单位????

CSS中使用的每个属性都允许拥有一个或一组值，查看MDN上的任何属性页将帮助您理解对任何特定属性有效的值。



#### 什么是CSS的值 

在CSS规范和MDN的属性页上，您将能够发现值的存在，因为它们将被尖括号包围，如`<color>`或`<length>`。(这里应该是省略的写法)

经常遇到的一些值和单位类型

#### 数字, 长度和百分比

##### 长度

CSS中有两种类型的长度——相对长度和绝对长度

绝对长度单位

以下都是**绝对**长度单位——它们与其他任何东西都没有关系，通常被认为总是相同的大小。

| 单位 | 名称         | 等价换算            |
| :--- | :----------- | :------------------ |
| `cm` | 厘米         | 1cm = 96px/2.54     |
| `mm` | 毫米         | 1mm = 1/10th of 1cm |
| `Q`  | 四分之一毫米 | 1Q = 1/40th of 1cm  |
| `in` | 英寸         | 1in = 2.54cm = 96px |
| `pc` | 十二点活字   | 1pc = 1/6th of 1in  |
| `pt` | 点           | 1pt = 1/72th of 1in |
| `px` | 像素         | 1px = 1/96th of 1in |

这些值中的大多数在用于打印时比用于屏幕输出时更有用。例如，我们通常不会在屏幕上使用cm。惟一一个您经常使用的值，估计就是px(像素)。

相对长度单位

相对长度单位相对于其他一些东西，比如父元素的字体大小，或者视图端口的大小。使用相对单位的好处是，经过一些仔细的规划，您可以使文本或其他元素的大小与页面上的其他内容相对应。下表列出了web开发中一些最有用的单位。

| 单位   | 相对于                                                       |
| :----- | :----------------------------------------------------------- |
| `em`   | 在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width |
| `ex`   | 字符“x”的高度                                                |
| `ch`   | 数字“0”的宽度                                                |
| `rem`  | 根元素的字体大小                                             |
| `lh`   | 元素的line-height                                            |
| `vw`   | 视窗宽度的1%                                                 |
| `vh`   | 视窗高度的1%                                                 |
| `vmin` | 视窗较小尺寸的1%                                             |
| `vmax` | 视图大尺寸的1%                                               |



#### 颜色

现代计算机的标准颜色系统是24位的，它允许通过不同的红、绿、蓝通道的组合显示大约1670万种不同的颜色，每个通道有256个不同的值(256 x 256 x 256 = 16,777,216)。让我们来看看在CSS中指定颜色的一些方法。

##### 颜色关键词

您可以在页面上看到 `<color>`值的[完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

##### 十六进制RGB值

每个十六进制值由一个散列/磅符号(#)和六个十六进制数字组成，每个十六进制数字都可以取0到f(代表15)之间的16个值中的一个——所以是0123456789abcdef。

每对值表示一个通道—红色、绿色和蓝色—并允许我们为每个通道指定256个可用值中的任意一个(16 x 16 = 256)。



##### 函数RGB和RGBA的值

RGB值是一个函数—RGB()—它有三个参数，表示颜色的红色、绿色和蓝色通道值，与十六进制值的方法非常相似。RGB的不同之处在于，每个通道不是由两个十六进制数字表示的，而是由一个介于0到255之间的十进制数字表示的

RGBA颜色——它们的工作方式与RGB颜色完全相同，因此您可以使用任何RGB值，但是有第四个值表示颜色的alpha通道，它控制不透明度。如果将这个值设置为`0`，它将使颜色完全透明，而设置为`1`将使颜色完全不透明。



**注意**: 在颜色上设置alpha通道与使用我们前面看到的[`opacity`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity)属性有一个关键区别。当你使用不透明度时，你让元素和它里面的所有东西都不透明，而使用RGBA颜色只让你指定的颜色不透明



##### HSL 和 HSLA的值

与RGB相比，HSL颜色模型的支持稍差一些(在旧版本的IE中不支持)，它是在设计师们感兴趣之后实现的。`hsl()` 函数接受色调、饱和度和亮度值作为参数，而不是红色、绿色和蓝色值，这些值的不同方式组合，可以区分1670万种颜色：

- **色调**： 颜色的底色。这个值在0和360之间，表示色轮周围的角度。
- **饱和度**： 颜色有多饱和？ 它的值为0 - 100%，其中0为无颜色(它将显示为灰色阴影)，100%为全色饱和度
- **亮度**：颜色有多亮？ 它从0 - 100%中获取一个值，其中0表示没有光(它将完全显示为黑色)，100%表示完全亮(它将完全显示为白色)



最佳实践:

为了一致性，通常最好是你的整个项目使用相同的一个颜色模型



#### 颜色4种表现方式

##### 关键词

**rgb**

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



#### 图片

`<image>` 数据类型用于图像为有效值的任何地方。它可以是一个通过 `url()`函数指向的实际图像文件，也可以是一个渐变

```css
.image {
  background-image: url(star.png);
}

.gradient {
  background-image: linear-gradient(90deg, rgba(119,0,255,1) 39%, rgba(0,212,255,1) 100%);
}
```



#### 位置

`<position>` 数据类型表示一组2D坐标，用于定位一个元素，如背景图像(通过 `background-position`)。它可以使用关键字(如 `top`, `left`, `bottom`, `right`, 以及`center` )将元素与2D框的特定边界对齐，以及表示框的顶部和左侧边缘偏移量的长度。

一个典型的位置值由两个值组成——第一个值水平地设置位置，第二个值垂直地设置位置。如果只指定一个轴的值，另一个轴将默认为 `center`。







#### 字符串和标识符

在上面的示例中，我们看到关键字被用作值的地方(例如`<color>`关键字，如 `red`, `black`, `rebeccapurple`, and `goldenrod`)。这些关键字被更准确地描述为标识符，一个CSS可以理解的特殊值。因此它们没有使用引号括起来——它们不被当作字符串。

在某些地方可以使用CSS中的字符串，例如 [在指定生成的内容时](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#Generating_content_with_before_and_after)。  伪元素??







#### 函数

已经在颜色部分看到了函数的作用——`rgb()`、`hsl()`等。用于从文件返回图像的值——`url()`——也是一个函数

行为更类似于传统编程语言的值是`calc()`函数。这个函数使您能够在CSS中进行简单的计算。



例如，下面我们使用`calc()`使框宽为20% + 100px。20%是根据父容器.wrapper的宽度来计算的，因此如果宽度改变，它也会改变。

```css
.wrapper {
  width: 400px;
}

.box {
  width: calc(20% + 100px);
}
    
```



### 在CSS中调整大小

#### 原始尺寸/固有尺寸

在受CSS设置影响之前，HTML元素有其原始的尺寸。一个直观的例子就是图像。一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。

一个空的[`<div>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div)是没有尺寸的.边框宽度扩展到整个容器宽度，因为它是块级元素，而块级元素的行为就是这样的。它没有高度，或者说高度为0，因为内部没有内容。

#### 设置具体的尺寸

当给元素指定尺寸（然后其内容需要适合该尺寸）时，我们将其称为**外部尺寸**。

正如我们在[上一课](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Overflowing_content)有关溢出的内容中所发现的，如果内容的数量超出了元素可容纳的空间，则设置的高度会导致内容溢出。

<iframe width="100%" height="600" src="https://mdn.github.io/css-examples/learn/sizing/height.html" loading="lazy" __idm_id__="20201473"></iframe>



##### 使用百分数

当使用百分数时，你需要清楚，它是**什么**东西的百分数。对于一个处于另外一个容器当中的盒子，如果你给予了子盒子一个百分数作为宽度，那么它指的是父容器宽度的百分数。

这是因为百分数是以包含盒子的块为根据解析的。如果我们的`<div>`没有被指定百分数的值，那么它会占据100%的可用空间，因为它是块级别的元素。如果我们给了它一个百分数作为宽度，那么这就是它原来情况下可以占据空间的百分数。

<iframe width="100%" height="600" src="https://mdn.github.io/css-examples/learn/sizing/percent-width.html" loading="lazy"></iframe>



##### min-和max-尺寸

让CSS给定一个元素的最大或最小尺寸。如果你有一个包含了变化容量的内容的盒子，而且你总是想让它**至少**有个确定的高度，你应该给它设置一个[`min-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-height)属性。盒子就会一直保持大于这个最小高度,但是如果有比这个盒子在最小高度状态下所能容纳的更多内容，那么盒子就会变大。

在以下的示例中，你可以看到两个盒子，两个都有150像素的确定高度，左边的盒子有150像素高，右边的盒子有需要更多空间才能装下的内容，所以它变得比150像素高。

```html
.box {
  border: 5px solid darkblue;
  min-height: 150px;
  width: 200px;
}


<div class="wrapper">
  <div class="box"></div>
  <div class="box">These boxes both have a min-height set, this box has content in it which will need more space than the assigned height, and so it grows from the minimum.</div>
</div>
```



[`max-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-width)的常见用法为，在没有足够空间以原有宽度展示图像时，让图像缩小，同时确保它们不会比这一宽度大。

如果你使用了`max-width: 100%`，那么图像可以变得比原始尺寸更小，但是不会大于原始尺寸的100%。

这个技术是用来让图片**可响应**的，所以在更小的设备上浏览的时候，它们会合适地缩放。你无论怎样都不应该用这个技术先载入大原始尺寸的图片，再对它们在浏览器中进行缩放。图像应该合适地调整尺寸，以使它们不会比预计中展示时所需要的最大尺寸大。





#### 视口单位

视口，即你在浏览器中看到的部分页面，也是有尺寸的。在CSS中，我们有与视口尺寸相关的度量单位，即意为视口宽度的`vw`单位，以及意为视口高度的 `vh`单位。

`1vh`等于视口高度的1%，`1vw`则为视口宽度的1%.你可以用这些单位约束盒子的大小，还有文字的大小。

**如果你改变了`vh`和`vw`的对应值，盒子和字体的大小也会改变**



### 图像,媒体和表单元素

图像和视频被描述为**[替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)**。 这意味着CSS不能影响这些元素的内部布局-仅影响它们在页面上于其他元素中的位置

某些替换元素（例如图像和视频）也被描述为具有宽高比。 这意味着它在水平（x）和垂直（y）尺寸上均具有大小，并且默认情况下将使用文件的固有尺寸进行显示。



#### 调整图像大小

如果你把一张图片放在一个盒子里，它的原始长和宽都比盒子的小或大，它要么比盒子显得小，要么从盒子里面溢出出去。你需要决定怎么处理溢出。

在下面的示例中，我们有两个盒子，大小均为 200 像素：

- 一个包含了一张小于 200 像素的图像，它比盒子小，所以不会拉伸以充满盒子。
- 另一张图像大于 200 像素，从盒子里面溢出。

<iframe width="100%" height="1000" src="https://mdn.github.io/css-examples/learn/images/size.html" loading="lazy"></iframe>

**尝试向上面的示例中的`<img>`元素加入`max-width: 100%`，你会看到，小的图像不变，而大的变小了，能够放在盒子里。**

一个常用的技术是将一张图片的[`max-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-width)设为100%。这将会允许图片尺寸上小于但不大于盒子。这个技术也会对其他替换元素（例如`<video>`，或者`<iframe>`）起作用。

可以对容器内的图像作其他选择. 例如，你可能想把一张图像调整到能够完全盖住一个盒子的大小。

[`object-fit`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)属性可以在这里帮助你(需要搭配width+height使用)。当使用`object-fit`时，替换元素可以以多种方式被调整到合乎盒子的大小。

下面，我们已经使用了值`cover`，缩小了图像，维持了图像的比例，所以图像可以整齐地充满盒子，同时由于比例保持不变，图像的一部分将会被盒子裁切掉。

<iframe width="100%" height="1000" src="https://mdn.github.io/css-examples/learn/images/object-fit.html" loading="lazy"></iframe>







#### 布局中的替换元素

在替换元素使用各式 CSS 布局技巧时，你可能深切地体会到他们的展现略微与其他元素不同，例如，在一个 flex 或者 grid 布局中，元素默认会把拉伸到充满整块区域。图像不会拉伸，而是会被对齐到网格区域或者弹性容器的起始处。

你可以看到这在下面的示例中发生了，下面的示例有个两列两行的网格容器，里面有四个物件。所有的`<div>`元素有自己的背景色，拉伸到了充满行和列的地步。但是，图像并没有被拉伸。

<iframe width="100%" height="1000" src="https://mdn.github.io/css-examples/learn/images/layout.html" loading="lazy"></iframe>



只要记住替换元素在成为网格或者弹性布局的一部分时，有不同的默认行为，这很必要，避免了他们被布局奇怪地拉伸。

为了强制图像拉伸，以充满其所在的网格单元，你必须仿照下面做点事情：

```css
img {
  width: 100%;
  height: 100%;
}
```

这将会无条件地拉伸图像，所以很可能不会是你想要的。

#### form元素

用CSS格式化表单元素是一个需要技巧的工作，[HTML Forms module](https://developer.mozilla.org/zh-CN/docs/Learn/Forms) 包含了详细的格式化表单元素的指导





#### xxx

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



### 样式化表格



### 调试CSS

#### 如何使用浏览器开发者工具



### 组织CSS!!

#### CSS整洁技巧

##### 1.将CSS格式化可读形式

CSS 不会管你使用哪种方式来进行格式化, 将每个属性值对放在新的一行会更好读。



##### 2.为你的CSS添加注释

* 在你的样式表里面的逻辑段落之间，加入一块注释
* 使用了一个不存在于代码里面的字符串，你可以从段落到段落间跳转，只需要搜索一下，例如是`||`。

* 为了对旧浏览器保持兼容，你用某种特殊方法使用了一种 CSS 属性，示例：

<div class="code-example"><pre class="brush: css notranslate"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token comment">/* fallback for older browsers that don't support gradients */</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #ff0000<span class="token punctuation">,</span> #aa0000<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><button type="button" class="icon copy-icon"><span class="visually-hidden">Copy to Clipboard</span></button><span class="copy-icon-message visually-hidden" role="alert" style="top: 52px;"></span></div>



##### 3.在你的样式表里加入逻辑段落

在样式表里面先给一般的东西加上样式是个好想法。这也就是除了你想特定对某个元素做点什么以外，所有将会广泛生效的样式。例如:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul`和`ol`
- `table`属性
- 链接



在这段之后，我们可以定义一些**实用类**，例如一个用来移除默认列表样式的类，我们打算将其展示为灵活样式或者其他样式。

```css
/* || UTILITIES */

.nobullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

...
```

然后我们可以加上在整个站点都会用到的所有东西，这可能是像基础页面布局、抬头或者导航栏样式之类的东西。

```css
/* || SITEWIDE */

.main-nav { ... }

.logo { ... }
```

最后我们可以在 CSS 里面加上**特指的东西**，将它们分成上下文、页面甚至它们使用的组件。

```css
/* || STORE PAGES */

.product-listing { ... }

.product-box { ... }
```



##### 4.避免太过特定的选择器

如果你创建了很特定的选择器，你经常会发现，你需要在你的 CSS 中复用一块代码，以将同样的规则应用到其他元素上。

没写解决方案,只是说这么写会比较繁琐



##### 5.将大样式表分成几个小的样式表

尤其在你对站点的不同部分设置了很不同的样式的时候，你会想要有个包含了所有普适规则的样式表，还有包含了某些段落所需要的特定规则的更小的样式表。



这可以让你更容易保持 CSS 的组织性，也意味着如果有多人在写 CSS，你会更少遇到有两个人需要同时编写相同的样式表的情况，防止在源代码的控制上产生冲突。



#### 其他工具

CSS 本身没有什么内置的组织方式，所以你需要自己完成建立编写 CSS 时维持统一性和规则的工作。Web 社区也已经开发了多种工具和方法，帮助你管理大些的 CSS 项目

##### CSS方法论

不必需要自己制定编写 CSS 的规则，你可以选择接纳一个已经已经由社群设计、经由诸多项目检验的方法，并从中获益。这些方法论都是有着结构化的编写和组织 CSS 途径的 CSS 代码指南。

**OOCSS** ??

你会遇到的大多数方式都有一部分归功于面向对象的 CSS（OOCSS）的概念，这是一种因[Nicole Sullivan 的努力](https://github.com/stubbornella/oocss/wiki)而流行的方式。OOCSS 的基本理念是将你的 CSS 分解成可复用的对象，于是你可以在你的站点上任何需要的地方使用。OOCSS 的标准示例是在[The Media Object](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Media_objects)中所描述的排布。





**BEM**

BEM 即为块级元素修饰字符（Block Element Modifier）。在 BEM 中，一个块，例如一个按钮、菜单或者标志，就是独立的实体。一个元素就像一个列表项或者标题一样，被绑定到它所在的块。修饰字符是标记到一个块或者元素的标识，能够改变样式或者行为。

你能认出使用 BEM 的代码，因为代码中在 CSS 的类里使用了多余的一个下划线和连字符。例如看看这个来自关于[BEM 命名常规](http://getbem.com/naming/)的页面里面的 HTML 所应用的类：

```css
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```



##### CSS构建体系

另一种组织 CSS 的方法是利用一些对于前端开发者可用的工具，它们让你可以稍微更程式化地编写 CSS。有很多工具，我们将它们分成**预处理工具**和**后处理工具**。预处理工具以你的原文件为基础运行，将它们转化为样式表；后处理工具使用你已完成的样式表，然后对它做点手脚——也许是优化它以使它加载得更快。





## 样式化文本

掌握了 CSS 语言的基础之后，对于您来说，下一个需要关心的 CSS 主题就是为文本添加样式



### 前提

在开始这一模块之前，您应当像 [HTML 介绍](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML) 模块中所探讨的，已经熟悉了基本的 HTML，以及像 [CSS 介绍](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps) 中所详述的，对自己的 CSS 基础感觉还满意。



### 导引

* [基本的文本以及字体样式](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals)
* [样式化列表](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text/Styling_lists)
* [样式化链接](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text/Styling_links)
* [网络字体](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text/Web_fonts)



### 基本文本及字体样式

用于样式文本的 CSS 属性通常可以分为两类，我们将在本文中分别观察。

- **字体样式**: 作用于字体的属性，会直接应用到文本中，比如使用哪种字体，字体的大小是怎样的，字体是粗体还是斜体，等等。
- **文本布局风格**: 作用于文本的间距以及其他布局功能的属性，比如，允许操纵行与字之间的空间，以及在内容框中，文本如何对齐。



> 注意: 包含在元素中的文本是作为一个单一的实体。你不能将文字其中一部分选中或添加样式，如果你要这么做，那么你必须要用适合的元素来包装它们，比如 ( [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span) 或者 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/strong)), 或者使用伪元素，像[::first-letter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter) (选中元素文本的第一个字母), [::first-line](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line) (选中元素文本的第一行), 或者 [::selection](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection) (当前光标双击选中的文本)



#### 字体

##### 颜色

[`color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color) 属性设置选中元素的前景内容的颜色 (通常指文本，不过也包含一些其他东西，或者是使用 [`text-decoration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration) 属性放置在文本下方或上方的线 (underline overline)

`color` 也可以接受任何合法的 [CSS 颜色单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#colors),



##### 字体种类

文本上设置一个不同的字体，你可以使用 [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) 属性.

这个允许你为浏览器指定一个字体 (或者一个字体的列表)，然后浏览器可以将这种字体应用到选中的元素上。

浏览器只会把在当前机器上可用的字体应用到当前正在访问的网站上；

如果字体不可用，那么就会用浏览器默认的字体代替 [default font](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals#默认字体)

<u>网页安全字体</u>

字体可用性，只有某几个字体通常可以应用到所有系统，因此可以毫无顾忌地使用。这些都是所谓的 **网页安全字体**。

实际的 Web 安全字体列表将随着操作系统的发展而改变，但是可以认为下面的字体是网页安全的，至少对于现在来说

下面有表格

> **注意**: 在各种资源中，[cssfontstack.com](http://www.cssfontstack.com/) 网站维护了一个可用在 Windows 和 Mac 操作系统上使用的网页安全字体的列表，这可以帮助决策网站的安全性。



<u>默认字体</u>

CSS 定义了 5 个常用的字体名称: `serif, ``sans-serif, ``monospace`, `cursive,`和 `fantasy. `

当使用这些通用名称时，使用的字体完全取决于每个浏览器，而且它们所运行的每个操作系统也会有所不同。

| 名称         | 定义                                                         | 示例                |
| :----------- | :----------------------------------------------------------- | :------------------ |
| `serif`      | 有衬线的字体（衬线一词是指字体笔画尾端的小装饰，存在于某些印刷体字体中） | My big red elephant |
| `sans-serif` | 没有衬线的字体。                                             | My big red elephant |
| `monospace`  | 每个字符具有相同宽度的字体，通常用于代码列表。               | My big red elephant |
| `cursive`    | 用于模拟笔迹的字体，具有流动的连接笔画。                     | My big red elephant |
| `fantasy`    | 用来装饰的字体                                               | My big red elephant |



<u>字体栈</u>

由于你无法保证你想在你的网页上使用的字体的可用性 (甚至一个网络字体可能由于某些原因而出错), 你可以提供一个**字体栈** (**font stack**)，这样的话，浏览器就有多种字体可以选择了。只需包含一个`font-family属性`，其值由几个用逗号分离的字体名称组成。

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

在字体栈的最后提供一个合适的通用的字体名称是个不错的办法，这样的话，即使列出的字体都无法使用，浏览器至少可以提供一个还算合适的选择。



#### 字体大小

字体大小 (通过 [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 属性设置) 可以取大多数这些单位的值 (以及其他，比如百分比 [percentages](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#percentages))，然而你在调整字体大小时，最常用的单位是：

* px
  *  将像素的值赋予给你的文本。这是一个绝对单位， 它导致了在任何情况下，页面上的文本所计算出来的像素值都是一样的。
* em
  * 1em 等于我们设计的当前元素的父元素上设置的字体大小
* rem
  * 1`rem` 等于 HTML 中的根元素的字体大小， (i.e. [`<html>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html)) ，而不是父元素.
  *  `rem` 不支持 Internet Explorer 8 和以下的版本

元素的 `font-size` 属性是从该元素的父元素继承的。





#### 字体样式,字体粗细,文本转换和文本装饰

CSS 提供了 4 种常用的属性来改变文本的样子：

##### font-style

用来打开和关闭文本 italic (斜体)

##### font-weight

设置文字的粗体大小

##### text-transform

允许你设置要转换的字体

- `none`: 防止任何转型。
- `uppercase`: 将所有文本转为大写。
- `lowercase`: 将所有文本转为小写。
- `capitalize`: 转换所有单词让其首字母大写。
- `full-width`: 将所有字形转换成全角，即固定宽度的正方形，类似于等宽字体，允许拉丁字符和亚洲语言字形（如中文，日文，韩文）对齐。



##### text-decoration

设置/取消字体上的文本装饰 (你将主要使用此方法在设置链接时取消设置链接上的默认下划线。) 可用值为

- `none`: 取消已经存在的任何文本装饰。
- `underline`: 文本下划线.
- `overline`: 文本上划线
- `line-through`: 穿过文本的线 strikethrough over the text.

 [`text-decoration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration) 可以一次接受多个值



#### 文字阴影

 [`text-shadow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow) 属性.最多需要 4 个值

```css
text-shadow: 4px 4px 5px red;
```

4 个属性如下：

1. 阴影与原始文本的水平偏移，可以使用大多数的 CSS 单位 [length and size units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#length_and_size), 但是 px 是比较合适的。这个值必须指定。
2. 阴影与原始文本的垂直偏移;效果基本上就像水平偏移，除了它向上/向下移动阴影，而不是左/右。这个值必须指定。
3. 模糊半径 - 更高的值意味着阴影分散得更广泛。如果不包含此值，则默认为 0，这意味着没有模糊。可以使用大多数的 CSS 单位 [length and size units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#length_and_size).
4. 阴影的基础颜色，可以使用大多数的 CSS 颜色单位 [CSS color unit](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#colors). 如果没有指定，默认为 `black`.



##### 多种阴影

以通过包含以逗号分隔的多个阴影值，将多个阴影应用于同一文本

```css
text-shadow: -1px -1px 1px #aaa,
             0px 4px 1px rgba(0,0,0,0.5),
             4px 4px 5px rgba(0,0,0,0.7),
             0px 0px 7px rgba(0,0,0,0.4);
```



#### 文本布局

##### 文本对齐

 [`text-align`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align) 属性用来控制文本如何和它所在的内容盒子对齐



##### 行高

 [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height) 属性设置文本每行之间的高，可以接受大多数单位 [length and size units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#length_and_size)，不过也可以设置一个无单位的值，作为乘数，无单位的值乘以 [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 来获得 `line-height`。

推荐的行高大约是 1.5–2 (双倍间距。) 



##### 字母和单词间距

[`letter-spacing`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing) 和 [`word-spacing`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-spacing) 属性允许你设置你的文本中的字母与字母之间的间距、或是单词与单词之间的间距。



#### 其他Font属性/文本布局样式



#### Font简写

这些是按照以下顺序来写的： [`font-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style), [`font-variant`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant), [`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight), [`font-stretch`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-stretch), [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size), [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height), and [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family).

只有 `font-size` 和 `font-family` 是一定要指定的。

[`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 和 [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height) 属性之间必须放一个正斜杠。

```css
font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
```



### 样式化列表 ??

[List 列表](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) 大体上和其他文本一样，但是仍有一些你需要知道的特殊 CSS 属性，和一些可供参考的最佳实践

使用[浏览器开发者工具](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools)查看那些列表元素，你会注意到若干个默认的样式预设值：

-  [`ul`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul) 和  [`ol`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol) 元素设置[`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)的顶部和底部：16px(1em) 0;和 padding-left: 40px(2.5em); （在这里注意的是浏览器默认字体大小为 16px）。
- [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/li) 默认是没有设置间距的。
- [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl) 元素设置 margin 的顶部和底部：16px(1em) ，无内边距设定。
- [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dd) 元素设置为： [`margin-left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-left) `40px` (`2.5em`)。
- 在参考中提到的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 元素设置 margin 的顶部和底部：16px(1em)，和其他的列表类型相同。



### 样式化链接??

#### 链接状态

每一个状态都可以用对应的 [伪类](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#pseudo-classes) 来应用样式：

- **Link (没有访问过的)**: 这是链接的默认状态，当它没有处在其他状态的时候，它可以使用[`:link`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:link) 伪类来应用样式。
- **Visited**: 这个链接已经被访问过了 (存在于浏览器的历史纪录), 它可以使用 [`:visited`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited) 伪类来应用样式。
- **Hover**: 当用户的鼠标光标刚好停留在这个链接，它可以使用 [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 伪类来应用样式。
- **Focus**: 一个链接当它被选中的时候 (比如通过键盘的 Tab 移动到这个链接的时候，或者使用编程的方法来选中这个链接 [`HTMLElement.focus()` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)) 它可以使用 [`:focus`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus) 伪类来应用样式。
- **Active**: 一个链接当它被激活



#### 默认的样式

当你观察默认样式的时候，你也许会注意到一些东西：

- 链接具有下划线。
- 未访问过的 (Unvisited) 的链接是蓝色的。
- 访问过的 (Visited) 的链接是紫色的。
- 悬停 (Hover) 在一个链接的时候鼠标的光标会变成一个小手的图标。
- 选中 (Focus) 链接的时候，链接周围会有一个轮廓，你应该可以按 tab 来选中这个页面的链接 (在 Mac 上，你可能需要使用*Full Keyboard Access: All controls* 选项，然后再按下 Ctrl + F7 ，这样就可以起作用)
- 激活 (Active) 链接的时候会变成红色 (当你点击链接时，请尝试按住鼠标按钮。)



#### 更改链接样式

```css
a {

}


a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}
```

这几个规则的顺序是有意义的，因为链接的样式是建立在另一个样式之上的

要记住这个顺序，你可以尝试这样帮助记忆：**L**o**V**e **F**ears **HA**te.



#### 在链接中包含图标

常见的做法是在链接中包含图标，使链接提供更多关于链接指向的内容的信息。例子，比如，我们会使用[icons8.com 上的这个优秀的范例](https://icons8.com/web-app/741/external-link)。

```css
a[href*="http"] {
  background: url('https://mdn.mozillademos.org/files/12982/external-link-52.png') no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```



#### [样式化链接为按钮](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text/Styling_links#样式化链接为按钮)

`li`标签元素转换为行内元素或行内块元素后,会出现缝隙问题.

解决方案有多重: 

* 所有`<li>`标签处于一行, 不推荐,
* 父元素`<ul>`设置字体为0, `<li>`重新设置字体大小
* 给`<li>`元素设置负边距
* 其他

<iframe src="https://codesandbox.io/embed/css-stylingbuttonbythetagofa-uoirm9?fontsize=12&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="css/stylingButtonBytheTagOf&#039;a&#039;"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>





### Web字体

* 使用 [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)属性来控制。您需要提供一个或多个字体种类名称，浏览器会在列表中搜寻，直到找到它所运行的系统上可用的字体。

* Web 字体是一种 CSS 特性，允许您指定在访问时随您的网站一起下载的字体文件，这意味着任何支持 Web 字体的浏览器都可以使用您指定的字体

#### web-safe字体

只有少数几种字体可以保证兼容所有流行的操作系统——这就是所谓的 [Web-safe 字体](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts)。您可以使用字体堆栈来指定可选择的字体，后面是 Web-safe 的替代选项，然后是默认的系统字体

实际的 Web 安全字体列表将随着操作系统的发展而改变，但是可以认为下面的字体是网页安全的，至少对于现在来说 (它们中的许多都非常流行，这要感谢微软在 90 年代末和 21 世纪初期的倡议*[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)* )：



| 字体名称        | 泛型       | 注意                                                         |
| :-------------- | :--------- | :----------------------------------------------------------- |
| Arial           | sans-serif | 通常认为最佳做法还是添加 Helvetica 作为 Arial 的首选替代品，尽管它们的字体面几乎相同，但 Helvetica 被认为具有更好的形状，即使 Arial 更广泛地可用。 |
| Courier New     | monospace  | 某些操作系统有一个 Courier New 字体的替代（可能较旧的）版本叫 Courier。使用 Courier New 作为 Courier 的首选替代方案，被认为是最佳做法。 |
| Georgia         | serif      |                                                              |
| Times New Roman | serif      | 某些操作系统有一个 Times New Roman 字体的替代（可能较旧的）版本叫 Times。使用 Times 作为 Times New Roman 的首选替代方案，被认为是最佳做法。 |
| Trebuchet MS    | sans-serif | 您应该小心使用这种字体——它在移动操作系统上并不广泛。         |
| Verdana         | sans-serif |                                                              |



#### 使用和注意

Web 字体是一种 CSS 特性，允许您指定在访问时随您的网站一起下载的字体文件

##### 基本使用

下载

[`@font-face`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face)块，它指定要下载的字体文件

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.ttf");
}
```

使用

使用 @font-face 中指定的字体种类名称来将你的定制字体应用到你喜欢的任何东西上

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```



##### 注意事项

* 浏览器支持不同的字体格式，因此您需要多种字体格式以获得良好的跨浏览器支持
* 字体一般都不能自由使用。您必须为他们付费，或者遵循其他许可条件，比如在代码中 (或者在您的站点上) 提供字体创建者。

#### web字体示例

##### 查找字体

字体是由字体铸造厂创建的，并且存储在不同的文件格式中。通常有三种类型的网站可以获得字体：

- 免费的字体经销商：这是一个可以下载免费字体的网站.比如： [Font Squirre](https://www.fontsquirrel.com/)，[dafont](http://www.dafont.com/) 和 [Everything Fonts](https://everythingfonts.com/)。
- 收费的字体经销商：这是一个收费则字体可用的网站，例如[fonts.com](http://www.fonts.com/)或[myfonts.com](http://www.myfonts.com/)。您也可以直接从字体铸造厂中购买字体，例如[Linotype](https://www.linotype.com/)，[Monotype](http://www.monotype.com/) 或 [Exljbris](http://www.exljbris.com/)。
- 在线字体服务：这是一个存储和为你提供字体的网站，它使整个过程更容易。更多细节见[使用在线字体服务](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text/Web_fonts#使用在线字体服务)。

##### 生成所需代码

**步骤介绍**

1.前往[Font Squirrel](https://www.fontsquirrel.com/) 并选择两种字体,选择华丽标题字体和朴实段落字体,格式不重要

​	1.1 解压字体包中会含有多个字体. 这里只使用一个单一字体

2.生成所需代码

​	2.1 确保满足任何许可证的要求,如果您打算在一个商业或web项目中使用

​    2.2 前往Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)

​	2.3 使用上传字体按钮上传你的两个字体

​	2.4 勾选复选框，“是的，我上传的字体符合网络嵌入的合法条件。

​	2.5 点击下载你的套件（kit）

在生成器完成处理之后，您应该得到一个 ZIP 文件，将它保存在与 HTML 和 CSS 相同的目录中。

3.查看下载后的文件

​	3.1 每个字体的多个版本(跨浏览器支持需要使用多种字体)

​	3.2  每个字体的一个演示 HTML 文件在你的浏览器中加载，看看在不同的使用环境下字体会是什么样子。

​	3.3 一个 `stylesheet.css` 文件，它包含了你需要的生成好的 @font-face 代码

4.使用

1. 将解压缩的目录重命名为简易的目录，比如`fonts`
2. 打开 `stylesheet.css` 文件，把包含在你的网页中的 `@font-face`块复制到你的 `web-font-start.css` 文件—— 你需要把它们放在最上面，在你的 CSS 之前，因为字体需要导入才能在你的网站上使用。
3. 每个`url()`函数指向一个我们想要导入到我们的 CSS 中的字体文件——我们需要确保文件的路径是正确的，因此，在每个路径的开头添加`fonts/` （必要时进行调整）。
4. 现在，您可以在字体栈中使用这些字体，就像任何 web 安全或默认的系统字体一样。



##### 关于@font-face

```css
@font-face {
  font-family: 'ciclefina';
  src: url('fonts/cicle_fina-webfont.eot');
  src: url('fonts/cicle_fina-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/cicle_fina-webfont.woff2') format('woff2'),
         url('fonts/cicle_fina-webfont.woff') format('woff'),
         url('fonts/cicle_fina-webfont.ttf') format('truetype'),
         url('fonts/cicle_fina-webfont.svg#ciclefina') format('svg');
  font-weight: normal;
  font-style: normal;
}
```



* font-family 指定了您想要引用的字体的名称
* src 
  * 要导入到您的 CSS(`url`部分) 的字体文件的路径，以及每种字体文件的格式 (`format`部分)
  * 后面的部分不是必要的，但是声明它是很有用的，因为它允许浏览器更快地找到可以使用的字体。
  * 可以列出多个声明，用逗号分隔——浏览器会搜索并使用它能找到的第一个
  * 最好是把新的、更好的格式比如 WOFF2 放在前面，把偏老的，不是那么好的格式像 TTF 这样的放在后面。
* font-weight/font-style
  * 指定字体的粗细，以及它是否斜体。如果您正在导入相同字体的多个粗细，您可以指定它们的粗细/样式，然后使用不同的[`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)/[`font-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)来选择它们之间的不同值，而不必调用字体种类不同名称的所有不同成员。



#### 使用在线字体服务

##### 介绍

在线字体服务通常会为你存储和服务字体，这样你就不用担心写`@font-face`代码了，通常只需要在你的网站上插入一两行代码就可以让一切都运行。例子包括[Typekit](https://typekit.com/) 和[Cloud.typography](http://www.typography.com/cloud/welcome/)。大多数这些服务都是基于订阅的，除了[Google Fonts](https://www.google.com/fonts)，这是一个有用的免费服务，特别是对于快速的测试工作和编写演示。



##### 使用

1. 前往 [Google Fonts](https://www.google.com/fonts).
2. 使用左边的过滤器来显示你想要选择的字体类型，并选择一些你喜欢的字体。
3. 要选择字体种类，点击
4. 选择右上角的'selected families',选择相应的link标签或者import方法
5. 将选择的内容复制到网页上.刷新网页即可看到设置的字体



#### 其他

##### word-break

 属性 `word-break` 指定了怎样在单词内断行。

##### 语法

```css
/* Keyword values */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: break-word; /* deprecated */

/* Global values */
word-break: inherit;
word-break: initial;
word-break: unset;
```



##### 参数

normal

使用默认的断行规则。

break-all

对于 non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。

keep-all

CJK 文本不断行。Non-CJK 文本表现同 `normal`。



##### writing-mode





## CSS布局(待完成)









## 2222



### 背景与边框

#### 背景颜色

[`background-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color)属性定义了CSS中任何元素的背景颜色。属性接受任何有效的`<color>值`。背景色扩展到元素的内容和内边距的下面



#### 背景图片

[`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)属性允许在元素的背景中显示图像

默认情况下，大图不会缩小以适应方框，而小图则是平铺以填充方框。

**如果除了背景图像外，还指定了背景颜色，则图像将显示在颜色的顶部。**

##### 控制背景平铺

[`background-repeat`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)属性用于控制图像的平铺行为。可用的值是:

- `no-repeat` — 不重复。
- `repeat-x` —水平重复。
- `repeat-y` —垂直重复。
- `repeat` — 在两个方向重复



##### 调整背景图像的大小

可以使用 [`background-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)属性，来调整图像的大小以适应背景

* 它可以设置长度或百分比值

* 也可以使用关键字:

  - `cover` —浏览器将使图像足够大，使它完全覆盖了盒子区，同时仍然保持其高宽比。在这种情况下，有些图像可能会跳出盒子外

  - `contain` — 浏览器将使图像的大小适合盒子内。在这种情况下，如果图像的长宽比与盒子的长宽比不同，则可能在图像的任何一边或顶部和底部出现间隙。



##### 背景图像定位

[`background-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)属性允许您选择背景图像显示在其应用到的盒子中的位置。它使用的坐标系中，框的左上角是(0,0)，框沿着水平(x)和垂直(y)轴定位。**注意：**默认的背景位置值是(0,0)。

`background-position`是[`background-position-x`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-x)和[`background-position-y`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-y)的简写，它们允许您分别设置不同的坐标轴的值。

值:

* 可以使用像`top`和`right`这样的关键字

* 使用 [长度值](https://developer.mozilla.org/en-US/docs/Web/CSS/length), and [百分比](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)

* 混合使用关键字，长度值以及百分比
* 可以使用4-value语法来指示到盒子的某些边的距离



```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```



#### 渐变背景(待补充)!!

当渐变用于背景时，也可以使用像图像一样的[`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)属性设置

您可以在MDN的`<gradient>`数据类型页面上，了解更多关于渐变的不同类型，以及使用它们可以做的事情。



#### 多个背景图像!!!@

可以有多个背景图像——在单个属性值中指定多个`background-image`值，用逗号分隔每个值。





#### 背景附加!!





#### background缩写 !!



[background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)



#### 背景的可访问性!!





#### 边框!!

border



##### 圆角 !!

通过使用[`border-radius`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)属性和与方框的每个角相关的长边来实现方框的圆角。可以使用两个长度或百分比作为值，第一个值定义水平半径，第二个值定义垂直半径。







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
  *  italic 倾斜 normal 正常

  

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

下拉框选择"选择选中的切片





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

* 层级概述: 
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
>rel="stylesheet"
>href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
>/>
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









## CSS最佳实践

### MaintainableCSS

> [MaintainableCSS - 一种哲学，教你如何编写模块化，可扩展性，可维护性的CSS。 (owenyang0.github.io)](http://owenyang0.github.io/maintainablecss-cn/index.html)



### css规范

百度FEX前端团队和腾讯AlloyTeam前端团队的CSS代码规范。

> [styleguide/css.md at master · fex-team/styleguide (github.com)](https://github.com/fex-team/styleguide/blob/master/css.md)
>
> [Code Guide by @AlloyTeam](http://alloyteam.github.io/CodeGuide/)





### 实例问题

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













### 十. 常见的CSS问题

#### 基础

1.[如何应用CSS到DOM中](../html&css/如何应用CSS到DOM中.md)

2.



#### 盒子和布局

1.[如何调整CSS盒模型大小](../html&css/如何调整盒模型大小.md)



