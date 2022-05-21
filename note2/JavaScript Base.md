## 标准文档/资源

### JavaScript标准:

* 正式版: Ecma-international.org(Publications and standards >>> standards >>> ECMA262)
  * 建议下载一个PDF版放在PC端 版本建议5.1和10(现在最新为11)

* 最新草稿版: tc39.github.io/ecma262(tc39.es/ecma262)

文档网站

* developer.mozilla.org
* whatwg.org
* w3.org



### TC39 ECMA-262 ECMAScript之间的关系

> https://mp.weixin.qq.com/s/5EzYOIxHkHEmWvdXEGadAA

- `ECMAScript`：指语言标准及语言版本，比如 ES6 表示语言（标准）的第 6 版
- `TC39` 指的是技术委员会（ `Technical Committee` ）第 `39` 号，一个推动 `JavaScript` 发展的委员会。它是 `ECMA` 的一部分， `ECMA` 是 “ `ECMAScript` ” 规范下的 `JavaScript` 语言标准化的机构。



### ECMAScript发展历程

经过漫长的发展， `ECMAScript` 已经经过了多个大版本的迭代

- `ECMAScript 6`（2015 年 6 月）：一大波更新，实现了当年 ES4 的许多设想，并正式改为按年份命名规范版本
- 以后的 ECMAScript 版本（ES2018、ES2019、ES2020 等）都在 6 月正式获准生效

### 标准指定流程

> 从 `ES2016` 开始（新 `TC39` 流程施行以来）， `ES` 版本的概念被大大弱化了，需要关心的是特性提案处于第几阶段，只要进入第 4 阶段就已经算是标准特性了
>
> 你可以来这里：`https://github.com/tc39/proposals` 看到所有正在进行中的 `TC39` 提案



### 使用

如果你想用到上面还没被规范化的提案，可以使用下面的 `babel` 插件：

- babel-presets-stage-0
- babel-presets-stage-1
- babel-presets-stage-2
- babel-presets-stage-3
- babel-presets-stage-4



### 向后兼容

 ES 规范每一版始终完全兼容先前的所有特性，比如 ES6 提出了let、const但并没有干掉var，这是因为如果推出了不兼容的新版本，会造成一些问题：

为了避免这些问题， `ES6` 采用了一种策略叫 `One JavaScript` ：

- 新版本始终完全向后兼容（但偶尔可能会有轻微、不明显的清理）
- 旧特性不删除也不修复，而是引入更好的版本，比如let就是var的改进版
- 如果语言的某些方面有变化，只在新的语法结构内生效，即隐式选用，例如，yield只在generator中才是关键字、模块和类中的所有代码都默认开启严格模式





## 知识体系

![](http://naotu.baidu.com/file/c709489342dc43b9c7e6ca18bbfb58a8?token=5e7f3ab4e6b5866e)



[].map.call($0.querySelectorAll('code'), e => e.innerText).join('/n')



## 编程语言通识

### 语言按语法分类

* 非形式语言
  * 中文, 英文
* 形式语言(乔姆斯基谱系)
  * 0型 无限制文法
  * 1型 上下文相关文法
  * 2型 上下文无关文法
  * 3型 正则文法

### 产生式(BNF)

通过产生式来理解语言,在这里通过其中一种BNF来加深理解.

BNF规则:

* 用尖括号括起来的名称来表示语法结构名
* 语法结构分成基础结构和许可用其他语法结构定义的复杂结构
  * 基础结构称终结符
  * 符合结构称非终结符
* 引号和中间的字符表示终结符
* 可以有括号
* `*`表示重复多次
* `|`表示或
* `+`表示至少一次

```javascript

//a和b 组成

<Program>: = 'a' + | 'b' +
<Program>: = <Program> 'a'+ | <Program> 'b' +
  
//定义加法
<Number> = '0' | '1' | '2' | ... | '9'
<DecimalNumber> = '0' | {{'1'| '2' |...|'9'} <Number>*}; //定义十进制数

//定义加法
<Expression> = <DecimalNumber> | <Expression> '+' <DecimalNumber>

//定义四则运算
<AdditiveExpression> = <DecimalNumber> | <Expression> '+' <DecimalNumber>

//定义乘法表达式
<MultiplicationExpression> = <DecimalNumber> | <MultiplicationExpression> '*' <DecimalNumber>
  
//描述 1+2*3
<AdditiveExpression> = <MultiplicationExpression> | <AdditiveExpression> '+' <MultiplicationExpression> 
  
//
<LogicExpression> = <AdditiveExpresion> |
  									<LogicExpression> '||' <AdditiveExperssion>																							<LogicExpression> '&&' <AdditiveExperssion>	
```













##        职业规划

### 



## 词法结构

> 编程语言的词法结构是一套基本规则,规定了如何使用这门语言编写程序.
>
> 词法结构是一门语言最低级的语法,规定了变量如何命名/注释的定界符/以及如何分割程序的语句等等.

* 区分大小写,空格和换行符
* 注释
* 字面量
* 标识符和保留字
* Unicode
* 可选的分号



### JS程序的文本

JS区分大小写, 意味着它的关键字, 变量, 函数名和其他标识符必须始终保持一致的大小写形式.

JS忽略程序记号(token)之间的空格.很大程度上,也忽略换行符. 可以在程序中随意使用空格和换行,可以按照便于理解的方式对程序进行格式化和缩进.

除了常规空格(`\u0020`), JS也将制表符, 各种ASCII控制符和Unicode间隔识别为空格.

将换行符, 回车符和回车换行识别为行终止符.



#### 回车和换行

> [回车和换行 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2006/04/post_213.html)

**来历**

打字机

回车(carriage return) : 原意是光标回到本行的开头

换行(line feed):光标往下一行,不一定是行首.

**表现**

Unix系统里，每行结尾只有"<换行>"，即"`\n`"；

Windows系统里面，每行结尾是"<回车><换行>"，即"`\r\n`"；

Mac系统里，每行结尾是"<回车>", `r`

一个直接后果是，Unix/Mac系统下的文件在Windows里打开的话，所有文字会变成一行；而Windows里的文件在Unix/Mac下打开的话，在每行的结尾可能会多出一个^M符号。



### 注释

JS支持两种注释: 单行注释,多行注释

单行注释:

 以`//`开头到一行末尾的内容

多行注释:

多行注释位于`/*`和`*/`之间,可以跨行,但不能嵌套.



### 字面量

> 字面量(literal)是一种直接出现在程序中的数据量.

```javascript
12
1.2
'hello world'
'Hi'
true
false
null
```



### 标识符和保留字

#### 标识符

标识符就是一个名字. 在JS中,标识符用于在JS代码中命名常量,变量,属性,函数和类,以及为某些循环提供标记(label).

#### 命名规则

必须以字母, 下划线或美元符号开头, 数字不能作为第一个字符,以便JS区分标识符和数值.



### Unicode

JS程序是使用Unicode字符集编写的,因为在字符串和主时钟可以使用任意Unicode字符.

考虑到可以执行和易于编辑,建议在标识符中只是用ASCII字母和数字.

#### Unicode转移序列

某些计算机硬件和软件无法显示,输入或正确处理全部Unicode字符, 为了编码和支持使用老技术的系统,JS定义了转义序列,从而可以仅使用ASCII字符来表示Unicode字符.

这些Unicode字符以`\u`开头,后跟4位16进制数字或包含在一对花括号内的1~6位十六进制数字.

Unicode转义序列可以出现在JS字符串字面量, 正则表达式字面量和标识符中(不能出现在语言关键字中).

例如:

字符 `é` 的Unicode转义序列是`\u00E9`,以下是3种在变量种使用这个字符的示例:

```javascript
let café = 1; //使用Unicode字符定义一个变量
caf\u0009  // => 1; 使用转义序列访问这个变量
caf\u{E9}  // => 1; 相同转义序列的另一种形式
```

JS转义序列带大括号的版本是ES6新增的,为了更好的支持大于16位的Unicode码点,比如表情符号:

```javascript
console.log('u\{1F600}')
```

注释中的Unicode转义序列会被当做ASCII字符处理,不会被解释为Unicode

#### Unicode归一化

Unicode允许用多种编码方式表示同一个字符.

例如: 字符`é`可以被编码为一个Unicode字符`\u00E9`, 也可以被编码为一个常规ASCII字符'e'后跟一个重音组合标记`u\0301`.  这两种编码在文本编辑器中看起来完全相同,但他们的二进制编码不同,因为JS认为它们不同,这会导致很大的问题:

```javascript
const café = 1; //这个常量名为'caf\u{e9}'
const café = 2; //这个常量名为'cafe\u{301}'

café //1
café //2
```



Unicode标准为所有字符定义了首选编码并规定了归一化例程,用于把文本转换为适合比较的规范形式. JS假定自己解释的源代码已经归一化,它自己不会执行任何归一化.

如果你想在JS程序中使用Unicode字符,应该保证使用自己的编辑器或其他工具对自己的源代码执行Unicode归一化,以防其中包含看起来一样但实际不同的标识符.



### 可选的分号

JS使用分号(`;`)分隔语句.

在JS中,如果两条语句分别写在两行,通常可以省略它们之间的分号.

在程序末尾,如果接下来的记号是右花括号, 也可以省略分号.

**代码风格:**

一种使用分号明确标识语句结束,即便这些分号并非必须

另一种风格是尽可能省略分号,只在少数必要情况下采用.

**换行符 不一定等于 分号**

JS并非在任何时候都把换行符当做分号,而只是在不隐式添加分号就无法解析代码的情况下才这么做.具体来说,JS只在下一个非空格字符无法被解释为当前语句的一部分时才把换行符当做分号.

```javascript
let a
a
=
3
console.log(a)
```

JS将以上代码解析为:

```javascript
let a; a=3; console.log(a)
```

之所以把第一个换行符当做分号,是因为如果没有分号,JS就无法解析代码`let a a`.第二个a本身就是一条独立语句,但JS并没有把第二个换行符当做分号,是因为还可以继续解析更长的语句..

**防御性分号**

注意事项:

通常,如果语句以`(, [, /, +, -`其中任一开头,就有可能被解析为之前语句的一部分.实践中,以`/, +, -`开头的语句极少,但以`(, [`开头的语句不在少数.可以看到有的程序员在所有这种语句前面防御性的添加一个分号,这样即使前面的的语句被修改,删掉了之前末尾的分号,也不会影响当前语句:

```Javascript
let x = 0 //省略分号
;[x, x+1, x+2].forEach(console.log) //防御:保证这条语句的独立
```

3**种例外**

JS在不能把第二行解析为第一行的连续部分时,对换行符的解释有三种例外.

第一种: 涉及return, throw, yield, break, continue,这些语句经常独立存在,但有时后面也跟一个标识符或表达式.如果这几个单词后面有换行符,JS就会把这个换行符解释为分号. 这意味着一定不能在return, break, continue等关键字和它们后面的表达式之间加入换行符.

第二种: 涉及`++` 和 `--`操作符.如果当做后置操作符,那么必须与自己操作的表达式位于同一行.

第三种: 简洁箭头语法定义的函数, 箭头必须跟参数列表在同一行.



 



## JS基本语法



### 编写位置

```html
JS代码可编写在script标签中<script></script>中
script标签同时只能有一个功能,要么引入要么输出

代码执行从上到下



1.script可写在body或head中

2.script可以编写到外部js文件 使用script标签的src属性进行引入调用 

<script src="script.js"></script>


3.script可以编写到标签的指定属性中

<button onclick="alert('内容');">按钮内容</button>"


3.1 在a标签中添加

<a href="javascript:alert('警告框内容')">超链接</a>  只会弹出内容,但链接不再跳转

<a href="javascript:;">超链接</a>  可当做超链接占位符
```



### 语法综述

语言中的标识符一般可以分为两类，<u>一类用于命名语法、符号等抽象概念，另一类用于命名数据（的存储位置）</u>。前者被称为“语法关键字”，后者则被称为“变量”和“常量”。并且由此引入了一个概念：绑定。

从标识符的角度来说，绑定分为语法关键字与语义逻辑的绑定，以及变量与它所存储数据和位置性质的绑定。

其中，语法关键字对语义逻辑的绑定结果，是对<u>作用域</u>的限定；变量对位置性质的绑定结果，则是对<u>变量生存周期</u>的限定。

### 标识符所绑定的语义

<u>所谓声明，即约定数据的生存周期和逻辑的作用域</u>。由于这里的“声明”已经涵盖了逻辑与数据（这相当于“程序”的全部），因此整个编程的过程，其实被解释成了“说明逻辑和数据”的过程：

* 纯粹陈述“数据”的过程，被称为变量和类型声明
* 纯粹陈述“逻辑”的过程，被称为语句（含流程控制子句）
* 陈述“数据与（算法的）逻辑”的关系的过程，被称为表达式

![标识符与其语义关系的基本分类](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/标识符与其语义关系的基本分类.4qzse7tlu4y0.png)

除了“声明”在语义上对绑定内容的限制之外，当一个被声明的标识符（变量、常量或符号等）去绑定一个数据时，事实上还有其他两个方面的语义：数据（受作用域限制）的生存周期及可写性。这三者是JavaScript在：

* 用于显式数据声明的语句let/var/const、函数声明与类声明
* 数种for语句、try...catch语句、赋值语句
* 在函数调用和new运算符等语法中通过形式参数传入值

这些语义中都存在着隐式或显式数据声明的原因：它们有着各自在“作用域、值和可写性”三方面的不同性质。



### 注意事项

* script标签中注释:  单行注释(Ctrl+/) `//`    
*  多行注释(Ctrl+Shift+/)       ` /* */`
* JS中严格区分大小写
* JS会忽略多个空格和换行,可利用空格和换行对代码进行格式化  <kbd>Ctrl</kbd> +<kbd>Alt</kbd>+<kbd>L</kbd>(快速格式化)[例如等号两边的空格,没写就快格]
* JS中的每条语句都应该以分号结尾;如果不写也可以,浏览器会自动添加分号,但是会出现加错的情况



### JS中语句和表达式的区别

```js
语句和表达式的区别在于，
前者主要为了进行某种操作，一般情况下不需要返回值；
后者则是为了得到返回值，一定会返回一个值。凡是 JavaScript 语言中预期为值的地方，都可以使用表达式。比如，赋值语句的等号右边，预期是一个值，因此可以放置各种表达式,使用.或[]引用对象属性的值或数组元素就是表达式.
```





### 字面量和变量(标识符)



#### 变量(标识符)

在应用程序中，使用变量来作为值的符号名。**变量的名字又叫做[标识符](https://developer.mozilla.org/zh-CN/docs/Glossary/Identifier)**，其需要遵守一定的规则。

变量可以用来存储字面量,并且变量中可以存储不同的字面量



**标识符**

代码中用来标识**[变量 (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Variable)、[函数](https://developer.mozilla.org/zh-CN/docs/Glossary/Function)、或[属性 (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/property)**的字符序列。

标识符与字符串不同之处在于字符串是数据，而标识符是代码的一部分。在 JavaScript 中，无法将标识符转换为字符串，但有时可以将字符串解析为标识符。

> 在JS中,所有自主命名的内容,都可以被认为是一个标识符.
>
> 比如, 变量名,函数名,类名

* 标识符命名遵循规范:
  * 标识符可以含有**字母,数字,下划线,$**,但不能以数字开头. 
    * 下划线开头的变量一般是隐藏变量,不需要被别人访问
    * $开头的变量一般是系统用的变量
    * 严格区分大小写
  * 标识符不能是JS中的关键字和保留字,也不建议浏览器中的内置函数(变量)作为标识符
    * 查询文档MDN
  * 标识符需要采用驼峰命名法
    * 小驼峰: 首字母小写,单词开头大写,其余字母小写
    * 大驼峰: 单词首字大写 一般多用于类

**变量赋值发生了什么?**

```js
let a = b;发生了什么?

**值传递**: 相当于一份全新的拷贝, 将这份拷贝放在另一个内存地址里.

**引用传递**: 相当于为这两个变量指定同一个地址,即新变量对旧变量的一个引用.

JS作为弱类型语言(某一个变量被定义类型,该变量可以根据环境变化自动进行转换,不需要经过显性强制转换),它的赋值语句既有值传递,也有引用传递:

对基本类型(string, number, boolean, null, undefined)使用值传递

对引用类型(除基本类型外的其他类型)使用引用传递
```







#### 字面量(Literals)

<u>字面量是由语法表达式定义的常量；或，通过由一定字词组成的语词表达式定义的常量</u>

字面量是常量，其值是固定的，而且在程序脚本运行中不可更改.

**几种常用的字面量**

**1.数组字面量(Array literals)**

> 数组字面值是一个封闭在方括号对([])中的包含有零个或多个表达式的列表，其中每个表达式代表数组的一个元素。当你使用数组字面值创建一个数组时，该数组将会以指定的值作为其元素进行初始化，而其长度被设定为元素的个数。
>
> 数组字面值同时也是数组对象。有关数组对象的详情请参见[数组对象](https://developer.mozilla.org/zh-CN/docs/JavaScript/Guide/Predefined_Core_Objects#Array_Object)一文

**2.布尔字面量(Boolean literals)**

> 布尔类型有两种字面量：`true`和`false`
>
> 不要混淆作为布尔对象的真和假与布尔类型的原始值true和false。布尔对象是原始布尔数据类型的一个包装器

**3.浮点数字面量(Floating-point literals)**

**4.数字字面量(Numberic Integers)**

> JS 数字字面量包括不同进制的整数字面量和10进制的浮点数字面量
>
> 语言规范要求数字字面量不能带符号. 尽管如此,像`-123.4`这样的代码块是合理的, 会被解释为应用到数字字面量`123.4`的一元`-`操作符.

**4.1 整数字面量(Integer literals)**

> 整数和大整数字面量能以10进制,16进制,8进制和2进制书写.

```js
. 10进制整数字面量是没有0开头的一系列数字
. 正数字面量开头以0,或0o表明它是八进制. 八进制整数字面量只包含整数0-7.
. 开头0x(0X)表明一个16进制整数字面量,16进制整数包含数字0-9,字母a-f,A-F.(符号不能改变它的值,所以0xa = 0XA = 10,0xf=0XF=15)
. 开头以0b(0B)开头表明一个二进制整数字面量. 二进制整数字面量只能包含数字0和1.
. 跟随n后缀的整数字面量表明一个大整数字面量. 这个整数字面量能用上面例子中的任何一个. 注意以0开头8进制例如0123n是不被允许的,但是0o123n是可以的.
```



**4.2 浮点数字面量(Floating-pont literals)**

> 浮点字面量含有以下部分:

```js
一个没有符号的十进制整数

一个小数点

一部分(另一个小数) A fraction(another decimal number)

一个指数(An exponent)
```

这个指数部分是一个跟在一个整数后的`e`或`E`, 可以添加`+` 或 `-`来标志.

一个浮点数字面量必须至少有一个数字, 且有一个小数点或 `e`(或 `E`)

语法:

```js
[digits].[digits][(E|e)[(+|-)]digits]
```

案例:

```js
.1e-23
3.1E+12
.1234
3.1415926
```



**5.对象字面量(Ojbect literals)**

> 一个对象字面量是一个空列表或多对属性名和对应的值的列表,封闭在大括号中.

对象属性名字能用任何字符串,包括空字符. 如果属性名不是一个合法的标识符或数字, 它必须用引号引起来(it must be enclosed in quotes)

属性名如果不是合理的标识符不能通过点(.)属性获取,但是可以通过类数组符号('[]')来获取.

**5.1 加强版对象字面量**

> 在ES2015中, 对象字面量是为了支持设置构造函数的原型, 对象`foo:foo`声明的简写,声明方法, 用作`super`调用, 表达式计算属性名称
>
> 总之, 这也使对象字面量和类声明更紧密的结合在一起, 并允许基于对象的设计为相同的设施带来益处.(and allowed object-based design to benefit from some of the same conviniences)

```js
let obj = {
  //__proto__
  __proto__:theProtoObj,
  //Shorthand for 'handler: handler'
  handler,
  //methods
  toString() {
    //Super calls
    return 'd ' + super.toString();
  },
  //Computed (dynamic) property names
  ['prop_' + (() => 42)()]: 42
};
```



**6.RegExp literals**

> 正则字面量是一个斜杠包含的样式.

```js
let re = /ab+c/;
```



**7.字符串字面量(String literals)**

> 字符串字面量是使用双引号或单引号引用的空字符或多个字符.
>
> 字符串必须被相同类型的引用符号限制.

**字符串中使用转义字符**

> 除了普通字符, 也能在字符串中使用特殊字符.

```js
'one line \n another line'
```







#### 使用变量

声明&赋值变量

```js


let a;  //使用let关键字声明变量.  
		//一个变量声明却没有赋值,那么它的值就是undefined

let b,c,d; //可同时声明多个变量 不能重复声明. var可以重复声明一个变量

a=33; //赋值变量 可任意修改   将等号右边的值赋值给左边的变量,变量只有在等号左边的时候才是变量 
a=true; //后写覆盖先写

------------------------
声明常量
const声明的常量只能进行一次赋值,无法修改
const b=33;
------------------------
使用MDN查询兼容性

let是ES6新增的,兼容性较差. 
对于IE来说,let支持度不好.如果需要兼容IE,需要使用var代替,用法和let一样,也可以声明多个变量


```



声明&赋值同时进行

```js
let f = "abc";
let 变量 = 值;
let 变量 = 值, 变量 = 值;
var 变量 = 值;
---------------------------

在全局中:
var a = 10;
var a = 11; //var可以重新声明变量,也相当于window.a = 11;
b = 12; //相当于window.b = 12;

```

变量赋值的实例

```javascript
var a = {n: 1}  
var b = a;  
a.x = a = {n: 2} 
console.log(a.x);   
console.log(b.x);

简化:
var a = {n:1}; //将变量a的值(地址)链接向对象的地址
var b = a;	   //变量a赋值给变量b, 将变量b的值(地址)链接向对象的地址
a.x = {n:2}; a = {n:2}; //第一句的意思是向a代表的对象{n:1}中添加新的属性,那么现在的对象就是{n:1,x:{n:2}}. 第二句的意思是将一个新的对象地址赋值给变量a,此时原变量a覆盖.

console.log(a.x); //此时变量a指向的新对象中没有名为x的属性,所以返回undefined
console.log(b.x); //{n:2}

```



### let,const和var的区别

#### 4点区别

* 1.let声明的变量有块作用域,var声明的变量没有
* 2.var声明的变量会提升,let声明的不会
* 3.var声明的全局变量会添加到window对象中; let或const不能覆盖全局变量只能遮蔽它
* 4.let不能重复声明变量 var可以.(var先声明,let再次声明也不行)

常量声明const、类声明class在块级作用域上的特性与let声明是类似的



### 块级作用域

#### 0. 背景

<u>为了加强对变量生命周期的控制,ES6引入了块作用域</u>

来个例子:

通过var声明的变量存在变量提升的特性:

```javascript
if (condition) {
  var value = 1;
}

console.log(value);
```

因为存在变量提升,代码相当于:

```javascript
var value;
if (condition) {
  value = 1;
}
console.log(value);
```

如果 condition 为 false，结果会是 undefined。

#### 1. var声明及变量提升（Hoisting）机制

在函数作用域或全局作用域中通过关键字var声明的变量，无论实际上是在哪里声明的，都会被当成<u>在当前作用域顶部</u>声明的变量，这就是我们常说的提升（Hoisting）机制。

```javascript
function getValue(condition) {
  if(condition) {
    var value = 'blue';
    //其他代码
    return value;
  } else {
    //此处可访问value，其值为undefined
    return null;
  }
  //此处可访问value， 其值为undefined
}
```

事实上，无论如何变量value都会被创建。在预编译阶段，JavaScript引擎会将上面的getValue函数修改成下面这样

```javascript
function getValue(condition) {
  var value;
  if(condition) {
    value = 'blue';
    //其他代码
    return value;
  } else {
    return null;
  }
}
```

<u>变量value的声明被提升至函数顶部，而初始化操作依旧留在原处执行，这就意味着在else子句中也可以访问到该变量，且由于此时变量尚未初始化，所以其值为undefined.</u>   ECMAScript 6引入块级作用域来强化对变量生命周期的控制。

#### 2. 块级声明

> 块级声明用于声明在指定块的作用域之外无法访问的变量。块级作用域（亦被称为词法作用域）存在于：
>
> · 函数内部
>
> · 块中（字符{和}之间的区域）

很多类C语言都有块级作用域，而ECMAScript 6引入块级作用域就是为了让JavaScript更灵活也更普适。

##### 2.1 let声明

let声明的用法与var相同。

用let代替var来声明变量，就可以把变量的作用域限制在当前代码块中

由于let声明不会被提升，因此开发者通常将let声明语句放在封闭代码块的顶部，以便整个代码块都可以访问

禁止重复声明： 假设作用域中已经存在某个标识符，此时再使用let关键字声明它就会抛出错误

```javascript
function getValue(condition) {
  if (condition) {
    let value = 'blue';
    //其他代码
    return value;
  } else {
    //变量value在此处不存在
    return null;
  }
  //变量value在此处不存在
}
```

变量value改由关键字let进行声明后，不再被提升至函数顶部。执行流离开if块，value立刻被销毁。如果condition的值为false，就永远不会声明并初始化value。

```javascript
var count = 30;

//抛出语法错误
let count = 40;
```

同一作用域中不能用let重复定义已经存在的标识符，所以此处的let声明会抛出错误。但如果当前作用域内嵌另一个作用域，便可在内嵌的作用域中用let声明同名变量，

```javascript
var count = 30;
if(condition) {
  let count = 40; //不会抛出错误
  //更多代码
}
```



##### 2.2 const声明

使用const声明的是常量，其值一旦被设定后不可更改。因此，每个通过const声明的常量必须进行初始化

const声明不允许修改绑定，但允许修改值

```javascript
//有效的常量
const jmaxItems = 30;

//语法错误： 常量未初始化
const name;


const person = {name: 'Nicholas'};
//可以修改对象属性的值
person.name = 'Greg';

//抛出语法错误
person = {
  name: 'Greg'
}
```



##### 2.3 const & let

1.都是块级标识符，只在当前代码块内有效，一旦执行到块外汇立即被销毁；
2.在同一作用域声明已经存在的标识符会导致语法错误，<u>无论标识符是使用var(全局或函数),还是let(块级作用域)声明的</u>。

3.无论是否是严格模式，都不能为const定义的常量再赋值
4.JS中的常量如果是对象，则对象的值可以修改;const声明不允许修改绑定,但允许修改绑定的值





##### 2.4 临时性死区(TMD Temporal Dead Zone)

> 与var不同，let和const声明的变量不会被提升到作用域顶部，如果在声明之前访问这些变量，即使是相对安全的typeof操作符也会触发引用错误
>
> 虽然ECMAScript标准并没有明确提到TDZ，但人们却常用它来描述let和const的不提升效果
>
> JavaScript引擎在扫描代码发现变量声明时，要么将它们提升至作用域顶部（遇到var声明），要么将声明放到TDZ中（遇到let和const声明）。访问TDZ中的变量会触发运行时错误。只有执行过变量声明语句后，变量才会从TDZ中移出，然后方可正常访问。

```js
if (condition) {
  console.log(typeof value); //引用错误 Uncaught ReferenceError: Cannot access 'value' before initialization
  let value = 'blue';
}
```

JavaScript引擎在扫描代码发现变量声明时，要么将它们提升至作用域顶部（遇到var声明），要么将声明放到TDZ中（遇到let和const声明）。访问TDZ中的变量会触发运行时错误。只有执行过变量声明语句后，变量才会从TDZ中移出，然后方可正常访问。

```javascript
console.log(typeof value); //'undefined'
if(condition) {
  let value = 'blue';
}
```

<u>typeof是在声明变量value的代码块外执行的，此时value并不在TDZ中。这也就意味着不存在value这个绑定，typeof操作最终返回"undefined"。</u>

#### 3. 循环中的块作用域绑定

##### 3.0 简介

```javascript
for (var i=0; i<10; i++) {
  process(item[i]);
}

//这里仍然可以访问变量i
console.log(i); //10

```

在默认拥有块级作用域的其他语言中，这个示例也可以正常运行，并且变量i只在for循环中才能访问到。而在JavaScript中，<u>由于var声明得到了提升，变量i在循环结束后仍可访问</u>。如果换用let声明变量就能得到想要的结果

```javascript
for (let i=0; i<10; i++) {
  process(items[i]);
}

//i在这里不可以访问， Uncaught ReferenceError: i is not defined
console.log(i); 

//在这个示例中，变量i只存在于for循环中，一旦循环结束，在其他地方均无法访问该变量。
```



##### 3.1. 循环中的函数

```javascript
var funcs = [];
for (var i=0; i<10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

funcs.forEach(function(func) {
  func();   //输出10次数字10
})

//another version
var func = []
for (var i=0; i<3; i++) {
  func[i] = function() {
    console.log(i);
  }
}
func[0](); //3
```

你预期的结果可能是输出数字0～9，但它却一连串输出了10次数字10。这是因为循环里的每次迭代同时共享着变量i，循环内部创建的函数全都保留了对相同变量的引用。循环结束时变量i的值为10，所以每次调用console.log(i)时就会输出数字10。

**解决**

##### 3.1.1 IIFE(立即调用函数表达式)

使用立即调用函数表达式（IIFE），以强制生成计数器变量的副本

```javascript
var funcs = [];

for (var i=0; i<10; i++) {
  funcs.push((function(value) {
    return function() {
      console.log(value);
    }
  }(i)))
}
```

在循环内部，IIFE表达式为接受的每一个变量i都创建了一个副本并存储为变量value。这个变量的值就是相应迭代创建的函数所使用的值，因此调用每个函数都会像从0到9循环一样得到期望的值。ECMAScript 6中的let和const提供的块级绑定让我们无须再这么折腾。



##### 3.1.2 for循环中的let声明

let声明模仿上述示例中IIFE所做的一切来简化循环过程，每次迭代循环都会创建一个新变量，并以之前迭代中同名变量的值将其初始化。这意味着你彻底删除IIFE之后仍可得到预期中的结果

```javascript
let funcs = [];

for (let i=0; i<10; i++) {
  funcs.push(function() {
    console.log(i);
  })
}

funcs.forEach(function(func) {
  func(); //输出0-9
})
//
let funcs = [];
let obj = {
  a: true,
  b: true,
  c: true
};

for (let key in obj) {
  funcs.push(function() {
    console.log(key);
  })
}

funcs.forEach(function(func) {
  func();  //a b c
})
```

这段循环与之前那段结合了var和IIFE的循环的运行结果相同，但相比之下更为简洁。

<span style="text-decoration: underline wavy blue;">每次循环的时候let声明都会创建一个新变量i，并将其初始化为i的当前值，所以循环内部创建的每个函数都能得到属于它们自己的i的副本。对于for-in循环和for-of循环来说也是一样的</span>

[问题](https://github.com/mqyqingfeng/Blog/issues/82#:~:text=%E5%A6%82%E6%9E%9C%E8%A6%81%E8%BF%BD%E7%A9%B6%E8%BF%99%E4%B8%AA%E9%97%AE%E9%A2%98%EF%BC%8C%E5%B0%B1%E8%A6%81%E6%8A%9B%E5%BC%83%E6%8E%89%E4%B9%8B%E5%89%8D%E6%89%80%E8%AE%B2%E7%9A%84%E8%BF%99%E4%BA%9B%E7%89%B9%E6%80%A7%EF%BC%81%E8%BF%99%E6%98%AF%E5%9B%A0%E4%B8%BA%20let%20%E5%A3%B0%E6%98%8E%E5%9C%A8%E5%BE%AA%E7%8E%AF%E5%86%85%E9%83%A8%E7%9A%84%E8%A1%8C%E4%B8%BA%E6%98%AF%E6%A0%87%E5%87%86%E4%B8%AD%E4%B8%93%E9%97%A8%E5%AE%9A%E4%B9%89%E7%9A%84%EF%BC%8C%E4%B8%8D%E4%B8%80%E5%AE%9A%E5%B0%B1%E4%B8%8E%20let%20%E7%9A%84%E4%B8%8D%E6%8F%90%E5%8D%87%E7%89%B9%E6%80%A7%E6%9C%89%E5%85%B3%EF%BC%8C%E5%85%B6%E5%AE%9E%EF%BC%8C%E5%9C%A8%E6%97%A9%E6%9C%9F%E7%9A%84%20let%20%E5%AE%9E%E7%8E%B0%E4%B8%AD%E5%B0%B1%E4%B8%8D%E5%8C%85%E5%90%AB%E8%BF%99%E4%B8%80%E8%A1%8C%E4%B8%BA%E3%80%82):

* 如果不能重复声明,在循环第二次的时候,应该报错
* 即使因为某种原因重复声明不报错,一遍遍迭代最终值还应该是3
* 有种说法是for循环设置循环变量的那部分是一个单独的作用域

比如:

```javascript
for (let i=0; i<3; i++) {
  let i = 'abc';
  console.log(i);
}
//abc
//abc
//abc


这个例子是对的.如果我们把let改成var呢?
for (var i=0; i<3; i++) {
  var i = 'abc';
  console.log(i);
}
//abc
```

为什么结果就不一样了呢，如果有单独的作用域，结果应该是相同的呀……

如果要追究这个问题，就要抛弃掉之前所讲的这些特性！这是因为 let 声明在循环内部的行为是标准中专门定义的，不一定就与 let 的不提升特性有关，其实，在早期的 let 实现中就不包含这一行为。

我们查看[ ECMAScript 规范第 13.7.4.7 节](http://www.ecma-international.org/ecma-262/6.0/#sec-for-statement-runtime-semantics-labelledevaluation):  还看不懂????

![](https://camo.githubusercontent.com/b1b019f0cf27a4e36b315d9761594077554533a3dfb31812986969f33cc67ed4/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f4553362f6c65742f6c65742d65636d612e706e67)

在 for 循环中使用 let 和 var，底层会使用不同的处理方式。

使用let的时候: 在 `for (let i = 0; i < 3; i++)` 中，即圆括号之内建立一个隐藏的作用域，这就可以解释为什么上面案例打印了3此'abc'.

然后**<span style="color: red">每次迭代循环时都创建一个新变量,并以之前迭代中同名变量的值将其初始化</span>**.如下面案例所示代码和伪代码:

```javascript
var funcs = [];
for (let i=0; i<3; i++) {
  funcs[i] = function() {
    console.log(i);
  }
}

funcs[0](); //0


//伪代码
(let i=0) { funcs[0] = function() {console.log(i)}; }
(let i=1) { funcs[0] = function() {console.log(i)}; }
(let i=2) { funcs[0] = function() {console.log(i)}; }
```

当执行伪代码函数的时候,根据词法作用域就可以找到正确的值,其实你也可以理解为let声明模仿了闭包的做法来简化循环过程.



##### 3.1.3 循环中的const声明

ECMAScript 6标准中没有明确指明不允许在循环中使用const声明，然而，针对不同类型的循环它会表现出不同的行为。

* 普通for循环 
* for-in或for-of循环



对于普通的for循环来说，可以在初始化变量时使用const，但是更改这个变量的值就会抛出错误

在这段代码中，变量i被声明为常量。在循环的第一个迭代中，i是0，迭代执行成功。然后执行i++，因为这条语句试图修改常量，因此抛出错误

```javascript
var funcs = [];

//完成一次迭代后抛出错误
for (const i=0; i<10; i++) {
  funcs.push(functions() {
  	console.log(i);           
  })
}
```

在for-in或for-of循环中使用const时的行为与使用let一致。

> 之所以可以运用在for-in和for-of循环中，是因为每次迭代不会（像前面for循环的例子一样）修改已有绑定，而是会创建一个新绑定。

```javascript
var funcs = [],
    obj = {
      a: true,
      b: true,
      c: true
    };

//不会产生错误
for (const key in obj) {
  funcs.push(function() {
    console.log(key);
  })
}

funcs.forEach(function(func) {
  func(); //输出a b c
})
```



##### 3.2 最佳实践

* 开发中默认使用let而不是var,对于需要写保护的变量使用const
* 另一种做法: 默认使用const, 只有当确实需要改变变量的值的时候才使用let.

#### 4. 全局块作用域绑定

> 当var被用于全局作用域时，它会创建一个新的全局变量作为全局对象（浏览器环境中的window对象）的属性。这意味着用var很可能会无意中覆盖一个已经存在的全局变量

```javascript
//浏览器中
var RegExp = 'hello';
console.log(window.RegExp); //'hello'   覆盖了原来window上的RegExp

var ncz = 'hi';
console.log(window.ncz); //'hi'
```

>  <u>如果你在全局作用域中使用let或const，会在全局作用域下创建一个新的绑定，但该绑定不会添加为全局对象的属性。换句话说，用let或const不能覆盖全局变量，而只能遮蔽它。</u>

```javascript
let RegExp = 'hello';
console.log(RegExp); //'hello'
console.log(window.RegExp === RegExp); //false

const ncz = 'hi';
console.log(ncz); //'hi'
console.log('ncz' in window); //false
```

这里let声明的RegExp创建了一个绑定并遮蔽了全局的RegExp变量。结果是window.RegExp和RegExp不相同，但不会破坏全局作用域。同样，const声明的ncz创建了一个绑定但没有创建为全局对象的属性。如果不想为全局对象创建属性，则使用let和const要安全得多。

Note: 如果希望在全局对象下定义变量，仍然可以使用var。这种情况常见于在浏览器中跨frame或跨window访问代码。



#### 5. 最佳实践

> 默认使用const，只有确实需要改变变量的值时使用let



### 数据类型(字面量的类型)++

计算机程序通过操作值或文本来工作.编程语言中这些可以表示和操作的值被称为'类型',而一门语言支持的类型集也是这门语言最基本的特征.

JS支持面向对象的编程风格.粗略来说,这意味着不用定义全局函数去操作不同类型的值,而是由这些类型本身定义操作值得方法.比如要对数组元素排序,不用把数组传给一个sort()函数,而是可以调用数组的sort()方法.

JS的对象类型是可以修改的,而原始类型是不可修改的. 比如JS程序可以修改对象属性和数组元素的值. 数值,布尔值,符号,null和undefined是不可修改的.

JS 可以自由转换不同类型的值.

> https://juejin.cn/post/6844903854882947080

> 数据类型就是字面量的类型
>
> [JavaScript 数据类型和数据结构 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
>
> 最新的(2021.8.23)ECMAScript标准定义了8数据类型:
>
> 7种原始值(Primitive values): undefined,string,Boolean,Number,bigInt,Symbol, null
>
> 1种属性集合(collections of properties):Object

```HTML
原始数据:
基本类型(基本数值, 基本数据类型)是一种既非对象也无方法的数据.在JS中,共有7种基本类型:string, number, bigint, null, undefined, symbol, boolean.
所有基本类型的值都是不可改变的.注意,基本类型本身和一个赋值为基本类型的变量的区别.变量会被赋予一个新值, 而原值不能像数组,对象以及函数那样被改变.
```



```js

//使用字符串方法不会改变一个字符串
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz
console.log(bar.toUpperCase())  //'BAR'

// 赋值行为可以给基本类型一个新值，而不是改变它
bar = bar.toUpperCase();       // BAZ


//https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive
//函数中的任何操作都不会影响到最初的foo，我们操作的只不过是它的副本。
var foo = 5;//let相同
//定义函数
function addTwo(num){
	num += 2;
}
//定义函数
function addTwo_2(foo){
    foo += 2;
}

//调用第一个函数
addTwo(foo);
console.log(foo);//5

//调用第二个函数
addTwo_2(foo);
console.log(foo);//5
```







#### **字符串(string)**

* JS中字符串需要用引号引起来, 单双引号皆可, 不能混用,不能跨行使用.  新版使用反斜杠和n换行(\\n)

* 同类型引号之间不能嵌套 

* JS中使用反斜杠作为转义字符
  
  * \n 换行   document.write()需要使用标签\<br>进行换行
  * \t  制表符(缩进)

**模板字符串**

  > 以上特性是ES6新特性,老版本浏览器中不要使用
  >
  > 模板字符串外可以加引号,依然可以传值

```js
`'${变量}'` //用于jsonp中函数调用服务端的中文汉字
```



  * 需要使用反单引号
  * 特点:
    * 模板字符串可以换行,空格会被保留
    
    * 模板字符串可以直接引用变量
      * 语法: ${变量} 
      * 范例: s=\` ${变量} 说今天天气好. ${变量} ${变量}${变量}   \`



#### 数值(number)

> JS的主要数值类型Number用于表示<span style="color:blue">整数和近似实数</span>.JS使用IEEE754标准定义的64位浮格式表示数值.这意味着JS可以表示的最大整数是 `±1.797 693 134 862 315 7 * 10<pub>308</pub>`, 最小整数是 `±5 * 10 <pub>-324</pub>`
>
> JS这种数据格式可以准确表示`-9 007 199 254 740 992(-2 <pub>53</pub>)`到 `9 007 199 254 740 992(2<pub>53</pub>)`之间的所有整数(包括首尾值). 
>
> 注意: JS中的某些操作是以32位整数计算的.
>
> 当数值出现在JS程序中时,就叫做数值字面量(numeric literal). JS支持几种形式的数值字面量.任何数值字面量前面都可以加上一个减号变成负值.

**实数,虚数,复数**

> [(3条消息) 实数、虚数和复数_Leon.ENV的博客-CSDN博客_实数和虚数](https://blog.csdn.net/hlzgood/article/details/110660281)

实数: 包括整数,有理数和无理数. 实数是相对于虚数来说的,有虚数后,才把费叙述叫做实数.

虚数: 虚数的平方是负数.

例如,假设有这样的数: 称之为i. 
$$
i * i = -1 \\
i = \sqrt{-1}  \\也就是i是-1的平方根
$$
那么-9的平方根是多少呢?
$$
\sqrt{-9} = \sqrt{(9 * -1)} = \sqrt{9} * \sqrt{-1} = 3 * \sqrt{-1} = 3i \\
故, 负数的平方根等于该数为正时的平方根乘以i:\\
\sqrt{(-x)} = i\sqrt{x}
$$
复数:

复数是实数和虚数的组合：注意：复数是两个数加起来的，一个是实数部分，一个是虚数部分。 但这两部分都可以是 0 ，所以所有实数和虚数都是复数。







##### 整数字面量

在JS程序中,基数为10的整数可以直接写成数字序列.

JS也支持16进制(0x), 二进制(0b), 八进制数(0o)字字符串. //大小写都是支持的

十六进制是数字0到9和字母a(或A)到字母f(或F),a到f表示10到15.

```javascript
ob10101 //21 (1*2**4 + 0*2**3 + 1*2**2 + 0*2**1 + 1*2**0)
0o377 //255
```



##### 浮点字面量

浮点字面量可以包含小数点,对实数使用传统语法.实数值由数值的整数部分,小数点和数值的小数部分组成.

浮点字面量也可以用指数计数法表示,即实数值后面可以跟字母e(或E),跟衣蛾可选的加号或减号,再跟一个整数指数.这种计数法表示的是实数值乘以10的指数次幂.

其语法形式:

```javascript
[digits][.digits](E|e)[(+|-)]digits]
```

例如:
$$
6.02e23    //6.02×10^{23}\\


1.4728223E-23 //1.4728223 × 10^{-32}
$$
数值字面量中的分隔符

可以用下划线将数值字面量分割为容易看清的数字段:

```javascript
let billion = 1_000_000_000 //以下划线作为千分位分隔符
let bytes = 0x89_AB_CD_E //作为字节分隔符
let bits = 0b001_1101_0111 //作为半字节分隔符
let fraction = 0.123_456_789 //也可以用在小数部分
```





##### JS中的算术

> 加减乘除取余 Math对象上的函数

JS中的算术在遇到<span style="background:#ccc">上溢出,下溢出或被零除时</span>不会发生错误.

上溢出: 数值操作的结果超过最大可表示数值(上溢出), 结果是一个特殊的无穷值Infinity.

下溢出: -Infinity.

上溢出和下溢出的数值操作(加减乘除)还是无穷值.

> [除以零 - 维基百科，自由的百科全书 (wikipedia.org)](https://zh.wikipedia.org/wiki/除以零)
>
> 在数学中,被除数的除数(分母)是零或将某数除以零, 是没有意义的.

```javascript

0/2 //0
2/0 //Infinity  被零除

```

例外: 0除以0是没有意义的值,结果是'非数值'(NaN,Not a Number); 无穷除无穷, 负数平方根或者无法转换为数值的非数值作为算术操作符的操作数,结果也是NaN.

非数值在JS中与任何值都不相等,即使自身.不能通过相等/全等来判断,只能是`x !=x, isNaN(x)`来判断

JS 预定义了全局常量Infinity和NaN以对应正无穷和非数值,这些值可以通过Number对象的属性获取:

```javascript
Infinity
Number.POSITIVE_VALUE
1/0 //Infinity
Number.MAX_VALUE * 2 //Infinity
-Infinity
Number.NEGATIVE_INFINITY
-1/0
-Number.MAX_VALUE * 2 //-Infinity

NaN
Number.NaN
0/0 //NaN
Infinity/Infinity //NaN

Number.MIN_VALUE/2  //0 下溢出
-Number.MIN_VALUE/2 //-0 下溢出
-1/Infinity //-0

//ES6定义的数值属性
Number.parseInt()
Number.parseFloat()
Number.isNaN(x) //
Number.isFinite(x) /判断x是数值还是无穷
Number.isInteger(x) //判断x是不是整数
Number.isSafeInteger(x)
Number.MIN_SAFE_INTEGER //-(2**53 -1)
Number.MAX_SAFE_INTEGER //2**53 -1
```



负零值与正零值即使在严格相等的条件下依然相等,这意味着除了作为除数使用,几乎无法区分.

##### 二进制浮点数和舍入错误



##### 通过BigInt表示任意进度整数



##### 日期和时间



* 在JS 中所有的数字包括整数和浮点数都是number类型
* JS中大部分整数可以精确表示,超过一定范围后可能得到一个近似值
  * 再大就会使用科学计数法表示,超过一定范围会返回infinity.
  * 需要较大运算且需要精确结果,不要在JS中算
* 特殊的数值
  * infinity是数值,字面量, 表示无穷(正负).
  * 非法数字 NaN 返回类型是number
* 在JS中进行小数运算,可能得到一个不精确的结果,不要直接在JS中进行对精度要求较高的运算
* 创建特殊进制的数字
  * 二进制 以0b开头 例, 0b1010
  * 八进制 以0o开头 
  * 十六进制 以0x开头
* 大整数(ES2020新增  了解)
  * 大整数以n结尾
  * 使用typeof检查一个大整数时,会返回类型 bigint
  * 大整数只能和大整数进行运算

**数值分隔符:**

数字的可读性随着数字变长而变差，数字分隔符会让长数字更加清晰

在二进制、十六进制、BigInt ,10进制等中都可以使用。

```js
const x = 1000000000000
const y = 1_000_000_000_000
console.log(x === y) // true


```



#### 布尔值(boolean)

* 布尔值进行逻辑判断
* 布尔值只有两个 
  * true 真
  * false 假
* 使用 typeof 检查布尔值 会返回boolean

判断一个值是否是布尔值

```javascript
//https://github.com/jashkenas/underscore/blob/master/underscore.js#L104

function isBoolean(obj) {
  return typeof obj === true || obj === false || toString.call(obj) === '[object Boolean]';
}
```





#### 空值(null)

* 表示空的对象
* 空值只有一个就是null
* 使用typeof检查空值 **会返回object (历史遗留)**

```js
- 出现null的几种情况

1. 在JS的dom元素获取中,如果没有获取到指定的元素对象,结果一般是null
2. Object.prototype.__proto__的值是null  Object.getPrototype(Object.prototype)->null
3. 在正则捕获时, 如果没有捕获到结果,默认是null
4. JSON数据格式不支持undefined,只支持null
 JSON.stringify({a:undefined, b:null})// '{'b':null}'
```





#### 未定义(undefined)

* 表示声明了但没有赋值的变量
* 未定义类型的值只有一个  undefined
* 使用typeof检查未定义值,会返回undefined. 
* 不会主动使用,浏览器自己用.

```js
- 判断一个对象是否定义?

'undefined'===typeof 变量
```





```js
- 出现undefined的情况
1.未初始化变量 变量定义了没有赋值

2.不返回任何结果的函数的调用结果 
函数return没有值 没有return

2.1 函数需要实参,但调用时没有传值,形参是undefined

3.不存在的对象属性或方法
let favotiteMovie = {
    title: 'blade runner'
}
favoriteMovie.actors;//undefined

4.越界索引数组元素
const colors = ['blue', 'white', 'red'];
colors[5];//undefined
colors[-1];//undefined

5.可选链
obj?.someProp返回undefined,前提是obj是undefined或null
undefined?.someProp
null?.someProp
```

  

  

  

### JavaScript中类型判断

> https://github.com/mqyqingfeng/Blog/issues/28

####   1.typeof

> The `typeof` oeprator returns a string indicating the type of the unevaluated operand.

**Syntax**

> typeof operand
>
> typeof (operand)

**Paramenter**

`operand`

An expression representing the object or primitive whose type is to be returned.

一个标识对象或原始值的表达式,其类型将被返回.

**Desc**



```js
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof

typeof可能的共计8种返回值: undefined object string number boolean function + bigint symbol
typeof undefined //'undefined' Chrome中可直接返回         
typeof boolean类型 //'boolean'
typeof number类型 //'number'
typeof bigint类型 //'bigint'
typeof symbol类型// 'symbol'
typeof Function类型//'function'
typeof string类型 //'string'
其他任何对象 //'object'
typeof null //'object'
typeof []   //'object'
typeof {}   //'object'


typeof Number(1) === 'number' //true

typeof undefined === 'undefined'

//对象
  typeof {a:1} === 'object'

  typeof [1,2,4] === 'object'

  //实例
  typeof new Boolean(true) = 'object'
  typeof new Number(1) = 'object'
  typeof new String('ABC') === 'object'

  //函数
  typeof function(){} = 'function'
  typeof class C {} = 'function'
  typeof Math.sin === 'function'

  //JS诞生以来便是如此
  typeof null === 'object'

  //除Function外的所有构造函数的类型都是object
  var str = new String('String');
  var num = new Number(100);

  typeof str; // 返回 'object'
  typeof num; // 返回 'object'
  var func = new Function();
  typeof func; //返回'function'

  //括号有无将决定表达式的类型
  var iData = 99;
  typeof iData + 'Wisen';// 'number Wisen'
  typeof (iData + 'Wisen');//'string'


```



#### 2.Object.prototype.toString

#####  2.0 规范

> https://es5.github.io/#x15.2.4.2

> When the toString method is called, the following steps are taken:
>
> 1.If the  **this** value is **undefined**, return "**[object Undefined]**"
>
> 2.If the **this** value is **null**, return "**[object Null]**"
>
> 3.Let O be the result of calling ToObject passing the **this** value as the argument.
>
> 4.Let *class* be the value of the [[Class]] internal property of O.
>
> 5.Return the String value that is the result of concatenating the three Strings "[**object**,  *class*, and "**]**"

>当调用toString方法, 下面的步骤会被执行
>
>1.如果this值是undefined, 就返回[object Undefined]
>
>2.如果this值是null, 就返回[object Null
>
>3.让O成为ToObject(this)的结果
>
>4.让class成为对象O内部属性[[Class]]的值
>
>5.最后返回由3个字符串"[object" 和 class 和 "]"组成的字符串



##### 2.1 14种识别类型

```javascript
var number = 1;          // [object Number]
var string = '123';      // [object String]
var boolean = true;      // [object Boolean]
var und = undefined;     // [object Undefined]
var nul = null;          // [object Null]
var obj = {a: 1}         // [object Object]
var array = [1, 2, 3];   // [object Array]
var date = new Date();   // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g;          // [object RegExp]
var func = function a(){}; // [object Function]


Object.prototype.toString(Math); //[object Math]
Object.prototype.toString(JSON); //[object JSON]

function func() {
  Object.prototype.toString.call(arguments); //[object Arguments]
}
```

所以我们可以识别至少 14 种类型，当然我们也可以算出来，<u>[[class]] 属性至少有 12 个</u>。 ???? why?





##### 2.2 加call原因

```js
https://www.cnblogs.com/youhong/p/6209054.html

1.用法
console.log(Object.prototype.toString.call(obj) === "[object Object]");

2.无法区分自定义对象类型，自定义类型可以采用instanceof区分
console.log(Object.prototype.toString.call("jerry"));//[object String]
console.log(Object.prototype.toString.call(12));//[object Number]
console.log(Object.prototype.toString.call(true));//[object Boolean]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
console.log(Object.prototype.toString.call(function(){}));//[object Function]
console.log(Object.prototype.toString.call([]));//[object Array]
console.log(Object.prototype.toString.call(new Date));//[object Date]
console.log(Object.prototype.toString.call(/\d/));//[object RegExp]
function Person(){};
console.log(Object.prototype.toString.call(new Person));//[object Object]

new Person instanceof Person //true

3.为什么不直接使用obj.toString方法呢?
  1.undefined/null身上没有toString方法
	2.toString方法返回反映这个对象的字符串
console.log("jerry".toString());//jerry
console.log((1).toString());//1
console.log([1,2].toString());//1,2
console.log(new Date().toString());//Wed Dec 21 2016 20:35:48 GMT+0800 (中国标准时间)
console.log(function(){}.toString());//function (){}
console.log(null.toString());//error
console.log(undefined.toString());//error

4.obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样
toString为Object的原型方法，而Array 、Function等类型作为Object的实例，都重写了toString方法。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法

//验证:删除数组身上的toString方法
let arr = [1,2];
console.log(Array.prototype.hasOwnProperty('toString'));//true
console.log(arr.toString()); //1,2,3
delete Array.prototype.toString;
console.log(Array.prototype.hasOwnProperty('toString')); //false
console.log(arr.toString()); //[object Array]

5.为什么需要加call
5.1 立即调用,gai'bian
```



#### 3 API

>  写个 type 函数帮助我们以后识别各种类型的值

函数需求:

* 如果是基本类型，就使用 typeof，引用类型就使用 toString。
* 此外鉴于 typeof 的结果是小写，我也希望所有的结果都是小写。
* 考虑到实际情况下并不会检测 Math 和 JSON，所以去掉这两个类型的检测。

**第一版**

```javascript
let class2type = {};

//生成class2type的映射出
"Boolean String Number Null Undefined Object Array Function Date Error RegExp".split(" ").map(item => class2type["[object " + item + "]"] = item.toLowerCase());  //第一次看经把它当做一次性赋值的表达式,结果是class2type['[object boolean]', ....]

function type(obj) {
  return typeof obj === 'object' || typeof obj === 'function' ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj;
}
```

但是注意，在 IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]！

**第二版(解决IE兼容性)**

```javascript
let class2type = {};
"Boolean Number String Object Array Function RegExp Date Error".split(' ').map(item => class2type["[object " + item + "]"] = item.toLowerCase());

function type(obj) {
  if (obj == null) { //注意,是两个双等号  非常聪明的方法 啧啧!
    return obj + '';
  }
  
  return typeof obj === 'object' || typeof obj === 'function' ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj;
}
```

**日常封装再使用**

```javascript
//函数
function isFunction(obj) {
  return type(obj) === 'function';
}

//数组
let isArray = Array.isArray || (obj) => type(obj) === 'array';
```

**结语**

我们已经可以判断日期、正则、错误类型啦，但是还有更复杂的判断比如 plainObject、空对象、Window对象、类数组对象等.

这个 type 函数抄的 jQuery，[点击查看 type 源码](https://github.com/jquery/jquery/blob/ac9e3016645078e1e42120822cfb2076151c8cbe/src/core.js#L269)。



#### 4.API2

> 在上篇[《JavaScript专题之类型判断(上)》](https://github.com/mqyqingfeng/Blog/issues/28)中，我们抄袭 jQuery 写了一个 type 函数，可以检测出常见的数据类型，然而在开发中还有更加复杂的判断，比如 plainObject、空对象、Window 对象等，这一篇就让我们接着抄袭 jQuery 去看一下这些类型的判断。

##### plainObject

> plainObject 来自于 jQuery，可以翻译成纯粹的对象，所谓"纯粹的对象"，就是该对象是通过 "{}" 或 "new Object" 创建的，该对象含有零个或者多个键值对。
>
> 之所以要判断是不是 plainObject，是为了跟其他的 JavaScript对象如 null，数组，宿主对象（documents）等作区分，因为这些用 typeof 都会返回object。
>
> jQuery提供了 isPlainObject 方法进行判断，先让我们看看使用的效果：

```javascript
function Person(name) {
  this.name = name;
}

console.log($.isPlainObject({})); //true

console.log($.isPlainObject(new Object)) // true

console.log($.isPlainObject(Object.create(null))); // true

console.log($.isPlainObject(Object.assign({a: 1}, {b: 2}))); // true

console.log($.isPlainObject(new Person('yayu'))); // false

console.log($.isPlainObject(Object.create({}))); // false
```

由此我们可以看到，除了 {} 和 new Object 创建的之外，jQuery 认为一个没有原型的对象也是一个纯粹的对象。

 3.0 版本下的 isPlainObject，我们直接看源码：

```javascript
let type2class = {};

//相当于Object.prtotype.toString
let toString = type2class.toString;

//相当于Object.prototype.hasOwnProperty
let hasOwn = class2type.hasOwnProeprty;

function isPlainObject(obj) {
  let proto, Ctor;
  
  //排序明显不是obj的以及一些宿主对象如Window
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }
  
   /**
     * getPrototypeOf es5 方法，获取 obj 的原型
     * 以 new Object 创建的对象为例的话
     * obj.__proto__ === Object.prototype
     */
  proto = Object.getPrototypeOf(obj);
  
  //没有原型的对象是纯粹的,Object.create(null)就在这里返回true
  if (!proto) {
    return true;
  }
  
  /**
     * 以下判断通过 new Object 方式创建的对象
     * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
     * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
     */
  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
  
  //在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
  return typeof Ctor === 'function' && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
}
```

注意: 我们判断Ctor构造函数是不是Object构造函数,用的是hasOwn.toString.call(Ctor).这个方法可不是Object.prototype.toString.我们可以通过在函数添加打印来查看:

```javascript
console.log(hasOwn.toString.call(Ctor)); //function Object() { [native code] }
console.log(Object.prototype.toString.call(Ctor)); //[object Object]
```





#### 3.null和undefined使用比较

* In JavaScript, `undefined` means a variable has been declared but has not yet been assign a value
* `null` is an assignment value(分配值). It can be assigned to a variable as a representation of no value.
* two distinct types: `undefined` is a type itself(undefined) ,`null`is an object.

```javascript
null == undefined //true

null = 'value' //ReferenceError
undefined = 'value' //'value'
```





#### 4.判断数组的6种方法

详细见数组

* 方法 Object.prototype.toString.call(arr).slice(8, -1)
* 方法 Array.isArray(arr)
* 方法 Array.prototype.isPrototypeOf(obj)
* 原型链 arr.\_\_proto\_\_ === Array.prototype
* 原型链 arr.constructor === Array
* 原型链 arr instanceof Array

#### 5.识别整数

ECMAScript 6添加了**Number.isInteget()**方法来确定一个值是否为JavaScript整数类型。Number.isInteger()方法利用了浮点数与整数的存储方式不同来判断.

**注意:** 如果有些数字看起来像浮点数，却存储为整数，这会让Number.isInteger()方法判断失效而返回true

```javascript
console.log(Number.isInteger(25)); //true
console.log(Number.isInteger(25.0)); //false
console.log(Number.isInteger(25.1)); //false
```

在JavaScript中，只给数字添加小数点不会让整数变为浮点数，此处的25.0确实是25，所以会按照整数的形式存储.



### 基本类型和引用类型

```HTML
基本类型:string, number, boolean, undefined, symbol,bigInt
引用类型:Object, Function, null

两者区别:引用类型可以添加属性和方法,而基本类型不可以

基本类型 (位置 访问 可变 比较)
基本类型的变量是存放在栈内存（Stack）里的
基本数据类型的值是按值访问的
基本类型的值是不可变的  //例如字符串中的某一项不能像对象一样赋值改变
基本类型的比较是它们的值的比较

引用类型
引用类型的值是保存在堆内存（Heap）中的对象（Object）
引用类型的值是按引用访问的
引用类型的值是可变的
引用类型的比较是引用的比较
```



### 类型转换

> 将其他的数据类型转换为 字符串(string), 数值(number)或布尔值(boolean)



#### 原始值转布尔值

我们使用 **Boolean 函数**将类型转换成布尔类型，在 JavaScript 中，只有 **6 种值**可以被转换成 false，其他都会被转换成 true。

```javascript
console.log(Boolean()); //false

console.log(Boolean(false)); //false

console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(+0)); //false
console.log(Boolean(-0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('')); //false
```

#### 原始值转数字

使用Number函数将类型转换为数字类型,如果参数无法转换为数字,则返回NaN.

在看例子之前，我们先看 [ES5 规范 15.7.1.1](http://es5.github.io/#x15.7.1.1) 中关于 Number 的介绍:

> Returns a Number value (not a Number object) computed by [ToNumber](http://es5.github.io/#x9.3)(*value*) if *value* was supplied, else returns **+0**.

根据规范，如果 Number 函数不传参数，返回 +0，如果有参数，调用 `ToNumber(value)`

注意这个 `ToNumber` 表示的是一个底层规范实现上的方法，并没有直接暴露出来。

而 `ToNumber` 则直接给了一个[对应的结果表](http://es5.github.io/#x9.3)。表如下：

**内部规范方法 `ToNumber(value)` 结果对应表格:**

| 参数类型  | 结果                                                         |
| --------- | ------------------------------------------------------------ |
| Undefined | NaN                                                          |
| Null      | +0                                                           |
| Boolean   | 如果参数是true,返回1.参数为false,返回0                       |
| Number    | 返回与之相等的值                                             |
| String    | 如果通过 Number 转换函数传入一个字符串，它会试图将其转换成一个整数或浮点数，而且会忽略所有前导的 0<br/><br/>如果有一个字符不是数字，结果都会返回 NaN，<br/><br/>鉴于这种严格的判断，我们一般还会使用更加灵活的 parseInt 和 parseFloat 进行转换。 |



```javascript
console.log(Number()); //+0

console.log(Number(undefined)); //NaN
console.log(Number(null)); //+0

console.log(Number(false)); //+0
console.log(Number(true)); //1

console.log(Number('123')); //123
console.log(Number('-123')); //-123
console.log(Number('1.2')); //1.2
console.log(Number('000123')); //123
console.log(Number('-000123')); //-123

console.log(Number('0x11')); //17

console.log(Number('')); //0
console.log(Number(' ')); //0

console.log(Number("123 123")) // NaN
console.log(Number("foo")) // NaN
console.log(Number("100a")) // NaN
```

parseInt 只解析整数，parseFloat 则可以解析整数和浮点数，如果字符串前缀是 "0x" 或者"0X"，parseInt 将其解释为十六进制数，parseInt 和 parseFloat 都会跳过任意数量的前导空格，尽可能解析更多数值字符，并忽略后面的内容。如果第一个非空格字符是非法的数字直接量，将最终返回 NaN：

```javascript
console.log(parseInt("3 abc")) // 3
console.log(parseFloat("3.14 abc")) // 3.14
console.log(parseInt("-12.34")) // -12
console.log(parseInt("0xFF")) // 255
console.log(parseFloat(".1")) // 0.1
console.log(parseInt("0.1")) // 0
```



#### 原始值转字符

我们使用 `String` 函数将类型转换成字符串类型，依然先看 [规范15.5.1.1](http://es5.github.io/#x15.5.1.1)中有关 `String` 函数的介绍：

> Returns a String value (not a String object) computed by [ToString](http://es5.github.io/#x9.8)(*value*). If *value* is not supplied, the empty String `""` is returned.

如果 `String` 函数不传参数，返回空字符串，如果有参数，调用 `ToString(value)`，而 `ToString` 也给了一个对应的结果表。

表格如下：

| 参数类型  | 结果                                                  |
| --------- | ----------------------------------------------------- |
| Undefined | 'undefined'                                           |
| Null      | 'null'                                                |
| Boolean   | 如果参数是true,返回'true',如果参数是false,返回'false' |
| Number    | 参看以下示例                                          |
| String    | 返回与之前相等的值                                    |



```javascript
console.log(String()) // 空字符串

console.log(String(undefined)) // undefined
console.log(String(null)) // null

console.log(String(false)) // false
console.log(String(true)) // true

console.log(String(0)) // 0
console.log(String(-0)) // 0
console.log(String(1)) // 1
console.log(String(-1)) //-1
console.log(String(NaN)) // NaN
console.log(String(Infinity)) // Infinity
console.log(String(-Infinity)) // -Infinity
```



#### 原始值转对象

原始值到对象的转换非常简单，原始值通过调用 String()、Number() 或者 Boolean() 构造函数，转换为它们各自的包装对象。

null 和 undefined 属于例外，当将它们用在期望是一个对象的地方都会造成一个类型错误 (TypeError) 异常，而不会执行正常的转换。

```javascript
let a = 1;
console.log(typeof a); //number
let b = new Number(a);
console.log(typeof b); //object
```



#### 对象转布尔值

对象到布尔值的转换非常简单：所有对象(包括数组和函数)都转换为 true。对于包装对象也是这样

```javascript
console.log(Boolean(new Boolean(false))); //true
```



#### 对象转字符串和数字

<u>对象到字符串和对象到数字的转换都是通过调用待转换对象的一个方法来完成的</u>。而 JavaScript 对象有两个不同的方法来执行转换，一个是 `toString`，一个是 `valueOf`。注意这个跟上面所说的 `ToString` 和 `ToNumber` 是不同的，这两个方法是真实暴露出来的方法。

所有的对象除了 null 和 undefined 之外的任何值都具有 `toString` 方法，通常情况下，它和使用 String 方法返回的结果一致。`toString` 方法的作用在于返回一个反映这个对象的字符串，然而这才是情况复杂的开始。

当调用对象的 toString 方法时，其实调用的是 Object.prototype 上的 toString 方法

* 数组的 toString 方法将每个数组元素转换成一个字符串，并在元素之间添加逗号后合并成结果字符串。
* 函数的 toString 方法返回源代码字符串。
* 日期的 toString 方法返回一个可读的日期和时间字符串。
* RegExp 的 toString 方法返回一个表示正则表达式直接量的字符串。

另一个转换对象的函数是 valueOf，表示对象的原始值。默认的 valueOf 方法返回这个对象本身，数组、函数、正则简单的继承了这个默认方法，也会返回对象本身。日期是一个例外，它会返回它的一个内容表示: 1970 年 1 月 1 日以来的毫秒数。

```javascript
let date = new Date(2017,4,2);
console.log(date.valueOf()) //14952960000000
```



了解了 toString 方法和 valueOf 方法，我们分析下从对象到字符串是如何转换的。看规范 [ES5 9.8](http://es5.github.io/#x9.8)，其实就是 ToString 方法的对应表，只是这次我们加上 Object 的转换规则：

| 参数类型 | 结果                                                         |
| -------- | ------------------------------------------------------------ |
| Object   | 1. primValue = ToPrimitive(input, String)<br />2. 返回ToString(primValue) |

 所谓的 ToPrimitive 方法，其实就是输入一个值，然后返回一个一定是基本类型的值。

我们总结一下，当我们用 String 方法转化一个值的时候，如果是基本类型，就参照 “原始值转字符” 这一节的对应表，如果不是基本类型，我们会将调用一个 ToPrimitive 方法，将其转为基本类型，然后再参照“原始值转字符” 这一节的对应表进行转换。

其实，从对象到数字的转换也是一样：

| 参数类型 | 结果                                                         |
| -------- | ------------------------------------------------------------ |
| Object   | 1. primValue = ToPrimitive(input, Number)<br />2. 返回ToNumber(primValue) |

虽然转换成基本值都会使用 ToPrimitive 方法，但传参有不同，最后的处理也有不同，转字符串调用的是 `ToString`，转数字调用 `ToNumber`。



##### ToPrimitive

让我们看规范 9.1，函数语法表示如下：

> ToPrimitive(input, [, PreferredType])

第一个参数是 input，表示要处理的输入值。

第二个参数是 PreferredType，非必填，表示希望转换成的类型，有两个值可以选，Number 或者 String。

当不传入 PreferredType 时，如果 input 是日期类型，相当于传入 String，否则，都相当于传入 Number。

如果传入的 input 是 Undefined、Null、Boolean、Number、String 类型，直接返回该值。

<u>如果是 ToPrimitive(obj, Number)，处理步骤如下：</u>

1. 如果 obj 为 基本类型，直接返回
2. 否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
3. 否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。
4. 否则，JavaScript 抛出一个类型错误异常。

<u>如果是 ToPrimitive(obj, String)，处理步骤如下：</u>

1. 如果 obj为 基本类型，直接返回
2. 否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。
3. 否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
4. 否则，JavaScript 抛出一个类型错误异常。



##### 对象转字符串

所以总结下，对象转字符串(就是 Number() 函数)可以概括为：

* 如果对象具有 toString 方法，则调用这个方法。如果他返回一个原始值，JavaScript 将这个值转换为字符串，并返回这个字符串结果。
* 如果对象没有 toString 方法，或者这个方法并不返回一个原始值，那么 JavaScript 会调用 valueOf 方法。如果存在这个方法，则 JavaScript 调用它。如果返回值是原始值，JavaScript 将这个值转换为字符串，并返回这个字符串的结果。
* 否则，JavaScript 无法从 toString 或者 valueOf 获得一个原始值，这时它将抛出一个类型错误异常。

##### 对象转数字

对象转数字的过程中，JavaScript 做了同样的事情，只是它会首先尝试 valueOf 方法

1. 如果对象具有 valueOf 方法，且返回一个原始值，则 JavaScript 将这个原始值转换为数字并返回这个数字
2. 否则，如果对象具有 toString 方法，且返回一个原始值，则 JavaScript 将其转换并返回。
3. 否则，JavaScript 抛出一个类型错误异常。

举个例子

```javascript
console.log(Number({})); //NaN
console.log(Number({a: 1})); //NaN

console.log(Number([])); //0
console.log(Number([0])); //0
console.log(Number([1, 2, 3])) // NaN
console.log(Number(function(){var a = 1;})) // NaN
console.log(Number(/\d+/g)) // NaN
console.log(Number(new Date(2010, 0, 1))) // 1262275200000
console.log(Number(new Error('a'))) // NaN
```

当我们 `Number([])` 的时候，先调用 `[]` 的 `valueOf` 方法，此时返回 `[]`，因为返回了一个对象而不是原始值，所以又调用了 `toString` 方法，此时返回一个空字符串，接下来调用 `ToNumber` 这个规范上的方法，参照对应表，转换为 `0`, 所以最后的结果为 `0`。

而当我们 `Number([1, 2, 3])` 的时候，先调用 `[1, 2, 3]` 的 `valueOf` 方法，此时返回 `[1, 2, 3]`，再调用 `toString` 方法，此时返回 `1,2,3`，接下来调用 `ToNumber`，参照对应表，因为无法转换为数字，所以最后的结果为 `NaN`。



#### 数组类型转换

> https://juejin.cn/post/6950664413317693470
>
> 数组调用`toString()`会隐含调用`Array.join()`方法

使用数组实现`a==1&&a==2&&a==3`效果

```javascript
let a = [1,2,3];
a.join = a.shift;
console.log(a==1&&a==2&&a==3); //true
```



#### JSON.stringify()

JSON.stringify() 方法可以将一个 JavaScript 值转换为一个 JSON 字符串，实现上也是调用了 toString 方法，也算是一种类型转换的方法。下面讲一讲JSON.stringify 的注意要点：

1.处理基本类型,与使用 toString基本相同,结果都是字符串.除了undefined.

```javascript
console.log(JSON.stringify(null)) // null
console.log(JSON.stringify(undefined)) // undefined，注意这个undefined不是字符串的undefined
console.log(JSON.stringify(true)) // true
console.log(JSON.stringify(42)) // 42
console.log(JSON.stringify("42")) // "42"
```

2.布尔值,数字,字符串的包装对象在序列化过程中会自动转换成对应的原始值

```javascript
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); 
// "[1,"false",false]"
```

3.undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）

```javascript
JSON.stringify({x: undefined, y: Object, z: Symbol("")}); 
// "{}"

JSON.stringify([undefined, Object, Symbol("")]);          
// "[null,null,null]" 
```

4.JSON.stringify 有第二个参数 replacer，它可以是数组或者函数，用来指定对象序列化过程中哪些属性应该被处理，哪些应该被排除。

```javascript
function replacer(key, value) {
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

let foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
let jsonString = JSON.stringify(foo, replacer);

console.log(jsonString);
//{"week":45,"month":7}
```

```javascript
var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
console.log(JSON.stringify(foo, ['week', 'month']));
// {"week":45,"month":7}
```

5.如果一个被序列化的对象拥有 toJSON 方法，那么该 toJSON 方法就会覆盖该对象默认的序列化行为：不是那个对象被序列化，而是调用 toJSON 方法后的返回值会被序列化，例如：

```javascript
let obj = {
  foo: 'foo',
  toJSON: function() {
    return 'bar';
  }
};

JSON.stringify(obj); //'"bar"'
JSON.stringify({x: obj}); //'{"x": "bar"}'
```



#### 一元操作符

当 + 运算符作为一元操作符的时候，查看 [ES5规范1.4.6](http://es5.github.io/#x11.4.6)，会调用 `ToNumber` 处理该值，相当于 `Number('1')`，最终结果返回数字 `1`。

```javascript
console.log(+[]); 
console.log(+['1']); 
console.log(+['1','2','3']);
console.log(+{});
```

既然是调用 `ToNumber` 方法，回想[《JavaScript 深入之头疼的类型转换(上)》](https://github.com/mqyqingfeng/Blog/issues/159)中的内容，当输入的值是对象的时候，先调用 `ToPrimitive(input, Number)` 方法，执行的步骤是：

1. 如果 `obj` 为基本类型，直接返回
2. 否则，调用 `valueOf` 方法，如果返回一个原始值，则 `JavaScript` 将其返回。
3. 否则，调用 `toString` 方法，如果返回一个原始值，则`JavaScript` 将其返回。
4. 否则，`JavaScript` 抛出一个类型错误异常。

以 `+[]` 为例，`[]` 调用 `valueOf` 方法，返回一个空数组，因为不是原始值，调用 `toString` 方法，返回 `""`。

得到返回值后，然后再调用 `ToNumber` 方法，`""` 对应的返回值是 `0`，所以最终返回 `0`。



#### 二元操作符

##### 规范:

> 规范地址：http://es5.github.io/#x11.6.1
>
> 当计算 value1 + value2时：
>
> 1. lprim = ToPrimitive(value1)
> 2. rprim = ToPrimitive(value2)
> 3. 如果 lprim 是字符串或者 rprim 是字符串，那么返回 ToString(lprim) 和 ToString(rprim)的拼接结果
> 4. 返回 ToNumber(lprim) 和 ToNumber(rprim)的运算结果



##### Null 与 数字

```javascript
console.log(null + 1);
```

按照以上规范的步骤进行分析:

1.lprim = ToPrimitive(null) 因为null是基本类型,直接返回,所以lprim = null

2.rprim = ToPrimitive(1) 因为1是基本类型,直接返回. 所以rprim = 1

3.lprim 和 rprim都不是字符串

4.返回ToPrimitive(null) 和 ToPrimitive(1)的运算结果

接下来：

`ToNumber(null)` 的结果为0，(回想上篇 Number(null))，`ToNumber(1)` 的结果为 1

所以，`null + 1` 相当于 `0 + 1`，最终的结果为数字 `1`。



##### 数组与数组

```javascript
console.log([] + []);
```

按照规范:

1.lprim = ToPrimitive([]), []是数组, 相当于调用ToPrimitive([], Number), 先调用valueOf方法,返回对象本身,因为不是原始值,调用toString方法,返回空字符串''.

2.rprim类似

3.lprim 和 rpim都是字符串,执行拼接操作

所以, [] + [] 相当于 '' + '', 最终结果是空字符串''.



##### 数组与对象

```javascript
console.log([] + {});
console.log({} + []);
```

按照规范:

1.lprim = ToPrimitive([]), lprim = ''

2.rprim = ToPrimitive({}), 相当于调用ToPrimitive({}, Number).  先调用valuefOf()方法,返回对象本身,,因为不是原始值,调用toString方法, 返回'[object Object].

3.lprim 和 rpim都是字符串, 执行拼接操作

所以, `[] + {}` 相当于 `'' + [object Object]`, 最终的结果是'[object Object]'.

下面的案例, 按照示例推出结果

```javascript
console.log(1 + true);
console.log({} + {});
console.log(new Date(2017, 04, 21) + 1);
```

结果是

```javascript
console.log(1 + true); // 2
console.log({} + {}); //'[object Object][object Object]'
console.log(new Date(2017, 04, 21) + 1); //"Sun May 21 2017 00:00:00 GMT+0800 (CST)1"
```



##### 注意:

以上的运算都是在 `console.log` 中进行，如果你直接在 `Chrome` 或者 `Firebug` 开发工具中的命令行直接输入，你也许会惊讶的看到一些结果的不同，比如：

```javascript
> {} + []
<. 0
```

我们刚才才说过 `{} + []` 的结果是 `"[object Object]"` 呐，这怎么变成了 `0` 了？

不急，我们尝试着加一个括号：

```javascript
> ({} + [])
< "[object Object]"
```

结果又变成了正确的值，这是为什么呢？

其实，在不加括号的时候，`{}` 被当成了一个独立的空代码块，所以 `{} + []` 变成了 `+[]`，结果就变成了 0

同样的问题还出现在 `{} + {}` 上，而且火狐和谷歌的结果还不一样：

```javascript
> {} + {}
//火狐: NaN
//Chrome: "[object Object][object Object]"
```

如果 `{}` 被当成一个独立的代码块，那么这句话相当于 `+{}`，相当于 `Number({})`，结果自然是 `NaN`，可是 `Chrome` 却在这里返回了正确的值。

那为什么这里就返回了正确的值呢？我也不知道，欢迎解答~   ????



#### 相等 ==

##### 规范

`"=="` 用于比较两个值是否相等，当要比较的两个值类型不一样的时候，就会发生类型的转换。

关于使用"=="进行比较的时候，具体步骤可以查看[规范11.9.5](http://es5.github.io/#x11.9.3)：

当执行x == y 时：

* 如果x与y是同一类型:

  * x是Undefined, 返回true
  * x 是 Null, 返回true
  * x 是数字

    * x 是NaN, 返回false
  * y 是NaN, 返回false
    * x 与 y相等, 返回true
  * x 是+0, y是-0, 返回true
    * x是-0, y是+0, 返回true
  * 返回false
  * x 是字符串, 完全相等返回true, 否则返回false
  * x是布尔值, x和y都是true或false, 返回true, 否则返回false
  * x和y指向同一个对象, 返回true, 否则返回false
* x 是null并且y 是undefined, 返回true
* x 是undefined,并且y 是null, 返回true
* x 是数字, y是字符串, 判断x == ToNumber(y)
* x 是布尔值, 判断ToNumber(x) == y
* y 是布尔值, 判断 x == ToNumber(y)
* x 是字符串或者数字, y是对象, 判断 x == ToPrimitive(y)
* x 是对象, y是字符串或者数字, 判断ToPrimitive(x) == y
* 返回false

##### 1. null 和 undefined

```javascript
console.log(null == undefined);
```

看规范第2, 3步:

> * 如果x是null并且y是undefined, 返回true
> * 如果y是null并且x是undefined, 返回true

所以结果自然是true

这时候，我们可以回想在[《JavaScript专题之类型判断(上)》](https://github.com/mqyqingfeng/Blog/issues/28)中见过的一段 `demo`，就是编写判断对象的类型 `type` 函数时，如果输入值是 `undefined`，就返回字符串 `undefined`，如果是 `null`，就返回字符串 `null`。

如果是你，你会怎么写呢？

下面是JQuery的写法:

```javascript
function type(obj) {
  if (obj == null) {
    return obj + '';
  }
  ...
}
```

##### 2. 字符串与数字

```javascript
console.log('1' == 1);
```

规范中第4, 5步: 都是转换成数字后再进行比较

##### 3. 布尔值与其他类型

```javascript
console.log(true == '2');
```

看规范6, 7步,当一方出现布尔值的时候，就会对这一方的值进行ToNumber处理，也就是说true会被转化成1.

所以, 当一方是布尔值的时候, 会对布尔值进行转换.一般很少使用相等,而是如下写法:

```javascript
//不建议
if (a == true) {}

//建议
if (a) {}

//更好
if (!!a) {}
```

##### 4. 对象与非对象

```javascript
console.log(42 == ['42']);
```

规范第8, 9步, 对象会使用 `ToPrimitive`, 



##### 5. 其他

```javascript
console.log(false == undefined);
```

`false == undefined` 相当于 `0 == undefined` 不符合上面的情形，执行最后一步 返回 `false`



```javascript
console.log(false == []);
```

`false == []` 相当于 `0 == []` 相当于 `0 == ''`, 相当于`0 ==0`, 结果返回true

```javascript
console.log([] == ![]);
```

`[] == ![]` 相当于`[] == false` 相当于`[] == 0` 相当于`'' = 0` 相当于`0 == 0`, 返回true



```javascript
console.log(false == '0'); 
console.log(false == 0);
console.log(false == '')


console.log('' == 0)
console.log('' == [])

console.log([] == 0)

console.log('' == [null])
console.log(0 == '\n');
console.log([] == 0);
```



#### 类型转换之花式字母表示法

先看下效果:

```javascript
//下面这一句打印什么
[+[][0] + []][0][1]
```

打印结果是:

```javascript
> [+[][0] + []][0][1]
<. 'a'
```

打印一句话:

```javascript
[[][0] + []][0][5]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][8]+[[[] == []][0] + []][0][2]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][6]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]]+[]][0][23]+[[][0] + []][0][3]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][8]+[+[1 + [[][0] + []][0][3] +309][0] + []][0][7]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][6]+[[][0] + []][0][0]
```

打印结果是:

```javascript
< 'I love you'
```

让我们开始解密:

第一个效果:

```javascript
[][0]
```

因为空数组不存在第一个元素, 所以结果是undefined

第二个效果:

```javascript
undefined + []
```

undefined + [] 相当于 undefined + "" 结果为"undefined"字符串。

第三个效果：

通过下标就可以取到对应的字母

```javascript
['undefined'][0][0]
```

这时候我们就获得了"u"字母，通过改变下标，我们可以获取u、n、d、e、f、i 共6个字母

##### NaN

第一个效果:

```javascript
+undefined
```

相当于Number(undefined), 结果是NaN.

第二个效果:

```javascript
NaN + []
```

相当于NaN + '', 结果为NaN的字符串形式

第三个效果:

```javascript
['NaN'][0][1]
```

通过这种方式我们可以去到'a'



##### false

第一个效果

```javascript
[] == []
```

结果是false

第二个效果

```javascript
//通过value + [] 转换成字符串
false + []
```

第三个效果:

```javascript
//通过[value][0][n] 取字母
```



##### true

```javascript
+[] == +[]
```

相当于比较 "" == ""，结果自然为 true

通过以上 4 种方法取到的字母依然有限，我们需要一些其他的方法来获得更多的字母。

##### Infinity

注意：在前面我们已经取到了字母 e。

```javascript
+("1e309")
```

转成数字后，相当于 1 乘以 10 的 309 次方，大于 JavaScript 最大的数，所以结果会是 Infinity，剩下的步骤与上面的相同，以后就不赘述了。

我们可以从中取出 t 和 y

##### function

注意：到此为止，我们已经获得了 u n d e f i t r f a l s t y，从中我们可以拼成"find"字符串。

```javascript
[]['find']
```

会显示数组的find函数，结果为：

```javascript
function find() { [native code]}
```

通过这种方法,我们可以取出c o v.

不过注意：通过这种方式取字母 v 会有兼容性问题！！！ ????



##### 神奇的constructor

注意，我们已经有了 17 个字母了，我们现在可以拼出"constructor"!

constructor 可是一个神奇的属性，因为通过它，我们可以获得各种类型的值对象的构造函数！

```javascript
0['constructor'] //function Number() {[native code]}

''['constructor'] //function String() {[native code]}

...
```

通过以上方式，我们可以取 m、g

也许我们会疑问，`""` 如何表示呢？

```javascript
[] + [] === '' //true
```



##### name

有了 m，我们现在可以拼出 name，可是 name 有什么用呢？

```javascript
'to' + ''['constructor']['name'] //'toString'
```

我们最终的目的是拼出万能的"toString"字符串



##### 万能的toString

我们之所以拼出 toString，是因为利用 toString 这个方法可以表示出 26个 字母!

这时候，就要隆重介绍下这个平时看起来不起眼，但是在这里确实最终主角的 toString 方法！

以下引自 W3C school：

作用:

> toString() 方法可把一个 Number 对象转换为一个字符串，并返回结果。

用法:

> NumberObject.toString(radix)

参数解释:

radix: 标识数字的基数, 是2 ~ 36之间的整数. 若省略该参数, 则使用基数10. 但注意, 如果该参数是10以外的其他值, 则ECMAScript标准允许返回任意值.

举个例子:

 ```javascript
 let number = new Number(10);
 number.toString(16);
 ```

就是将10用16进制进行标识, 上面的例子打印的结果是'a'.

注意, radix 的最大可以标识36.

```javascript
let number = new Number(35);
number.toString(36);
```

打印的字母是'z'. 用这种方法我们可以标识剩下的所有字母

但是我们怎么利用这个 toString 方法呢？准确的说，我们该怎么生成一个 number 对象呢？还要拼出 new Number 吗？

其实都不用！这个时候，就彰显出了 JavaScript 隐式类型转换的优秀之处:

```javascript
35['toString'](36) //'z'
```

注意：到了这个时候，我们也不得不使用()了！

到此为止，我们已经可以表示出所有的字母了，有的很轻松的就表示出来，有的则有些麻烦，而且显示也很长，比如字母 p：

```javascript
25[[[+[] == +[]][0] + []][0][0]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][6] + [[] + []][0][[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][3]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][6]+[[][0] + []][0][1]+[[[] == []][0] + []][0][3]+[[+[] == +[]][0] + []][0][0]+[[+[] == +[]][0] + []][0][1]+[[][0] + []][0][0]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][3]+[[+[] == +[]][0] + []][0][0]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][6]+[[+[] == +[]][0] + []][0][1]][[[][0] + []][0][1]+[+[][0] + []][0][1]+[0[[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][3]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][6]+[[][0] + []][0][1]+[[[] == []][0] + []][0][3]+[[+[] == +[]][0] + []][0][0]+[[+[] == +[]][0] + []][0][1]+[[][0] + []][0][0]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][3]+[[+[] == +[]][0] + []][0][0]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][6]+[[+[] == +[]][0] + []][0][1]]+[]][0][11]+[[][0] + []][0][3]]](27)
```



### 数据类型-可迭代对象(iterable object)

> [Iterable object（可迭代对象） (javascript.info)](https://zh.javascript.info/iterable)

**可迭代（Iterable）** 对象是数组的泛化。这个概念是说任何对象都可以被定制为可在 `for..of` 循环中使用的对象。













## 运算符(操作符)



### 1.算术运算符

算术运算符以数值（字面量或变量）作为其操作数，并返回一个单个数值。标准算术运算符是加法（+），减法（-），乘法（*）和除法（/）。

```js
加法 +   减法 -   乘法 *   除法 /

ES6新增 幂运算(平方) **   0.5次幂可以进行平方根的计算. 不支持老版本浏览器

取模 % : 取除法的余数 10%2取余数0 


//示例
数字相加 
true+1 //Boolean+Number 2

字符串链接
Number+String
5+'foo' //'5foo'
```

#### 除法(/)

除法运算符的结果是操作数的商 ，左操作数是被除数，右操作数是除数。

```js

//示例
1 / 2      // 在 JavaScript 中返回 0.5
1 / 2      // 在 Java 中返回 0
// （不需要数字是明确的浮点数）

1.0 / 2.0  // 在 JavaScript 或 Java 中都返回 0.5

2.0 / 0    // 在 JavaScript 中返回 Infinity
2.0 / 0.0  // 同样返回 Infinity
2.0 / -0.0 // 在 JavaScript 中返回 -Infinity
```



#### 乘法(\*)

```js
//示例
2 * 2 // 4
-2 * 2 // -4
Infinity * 0 // NaN
Infinity * Infinity // Infinity
"foo" * 2 // NaN
```



#### 求余(%)

求余运算符返回第一个操作数对第二个操作数的模，即 `var1` 对 `var2` 取模，其中 `var1` 和 `var2` 是变量。取模功能就是 `var1` 除以 `var2` 的整型余数。

```js
//语法
运算符: var1%var2

//示例
12%5 //2
-1%2 //-1
NaN%2 //NaN
1%2 //1
2%3 //2
-4%2 //0
5.5%2 //1.5
```





#### 自增和自减

```javascript
--自增
 -自增分为前++(++a) 和 后++(a++)
 -无论是++a 还是 a++,调用后都会使原变量立刻增加1
 -不同的是 ++a和a++ 的值不同:
	a++的值是变量自增前的值,变量的旧值(原值)
	++a的值是变量自增后的值,变量的新值


--自减
 -自减分为前--(--a)和后--(a--)
 -都会使原变量立刻减小1
 -不同的是两者值不同
	a--,是原值,自减前的值
	--a,是新值,自减后的值
```



```JavaScript
let a = 5;
let result = a++ + a++ + a; //5 + 7 + 7


a = 10;
a++;
console.log(a); //11

a = 10;
a = a++;
console.log(a); //10

let b = 10;
b--;
console.log(b); //9
console.log(b--); //10

```





#### 一元运算符

> 只需要一个 **操作数** 进行运算.  typeof 就是一元运算符

#### 一元正号(+)

```js
//特点
1.一元正号运算符位于其操作数前面，计算其操作数的数值
2.会尝试将其转换成一个数值。 尽管一元负号也能转换非数值类型，但是一元正号是转换其他对象到数值的最快方法，也是最推荐的做法，因为它不会对数值执行任何多余操作。
3.可将字符串转换成整数和浮点数形式，也可以转换非字符串值 true，false 和 null。
4.小数和十六进制格式字符串也可以转换成数值。
5.负数形式字符串也可以转换成数值（对于十六进制不适用）。如果它不能解析一个值，则计算结果为 NaN。
```



```js
//使用

+3 //3
+'3' //3
+true //1
+false //0
+null //0
+function(val){return val}; //NaN
```



#### 一元负号(-)

一元负号运算符位于操作数前面，并转换操作数的符号

```js
//语法

运算符: -x

//示例
var x = 3;
y = -x; //y=-3 x=3
```



#### 位移运算符

```js
位移运算符: >>> <<<
右移零位: 将非number类型强制转换为number

let number = 3;
转换成2进制,然后移动相应位置,空缺补零.
//0000 0011
//  0000 00 

console.log(num>>>2) //0
console.log(num>>>1) //1
```







### 2.赋值运算符(=)

赋值元素符会将右边的操作数的值分配给左边的操作数，并将其值修改为右边操作数相等的值

```javascript
= 可以用来将符号右侧的值 赋值 给符号左边的变量
================
+=  a += x 等价于 a = a + x
-=  a -= x 等价于 a = a - x
*=  a *= x 等价于 a = a * x
/=  a /= x 等价于 a = a / x
%=  a %= x 等价于 a = a % x
**= a **=x 等价于 a = a ** x


哪些运算符会导致 变量 发生变化?
1.赋值运算符
2.自增和自减
```



### 3.逻辑运算符

> ! (逻辑)非
>
> && (逻辑)与
>
> || (逻辑)或



#### 逻辑非(!)

> 可以用来对一个布尔值进行**取反**操作   true 变 false  false 变 true



对 非布尔值 进行<u>逻辑非</u>运算,会先将其转换为布尔值 然后再取反

利用这个特点,可以对一个<u>非布尔值</u>取两次反,来将其转换为对应的布尔值

原理和Boolean()函数一样,但是更简便(隐式类型转换)

```javascript
let a = false;
a = !a;
console.log(a, typeof a); // true true


let b = 10;
b = !b;
console.log(b, typeof b); //false, "boolean"

b=!!b;
console.log(b,typeof b); // true, "boolean"
```





#### 逻辑与(&&)

> &&用来对两个值进行 与 运算
>
> 当两个值同时为true时,才会返回true, 否则返回false
>
> 与是找false的  因为有一个false,&&的结果就是false
>
> 与运算是短路的与, 如果第一个值是false,则不会看第二个值

```JavaScript
let result = true && true; // true

result = false && true; // false
result = true && false; // false
result = false && false; // false


true && alert('你猜我出来吗?'); // 第一个值是true,会查看第二个值
false && alert('你猜我出来吗?'); //不会弹出 第一个值是false,不会看第二个值
```





#### 逻辑或(||)

>||用来对两个值进行 或 运算
>
>当两个值有一个是true,就返回true, 都是false才返回false
>
>==或是找true的==
>
>或运算是短路的或,如果第一个值是true,则不会看第二个值

```JavaScript
result = true || true; //true
result = true || false; //true
result = false || true; // true
result = false || false; //false

false || alert('你猜我出来吗?'); //第一个值是false,会查看第二个值
true || alert('你猜我出来吗'); // 不会弹出. 第一个值是true,不会查看第二个
```







#### 非布尔值的逻辑运算

当对非布尔值进行逻辑运算,它会先将其转换为布尔值.然后进行逻辑运算,最终**返回原值.**

- **与运算**
  - 第一个值是false,直接返回第一个
  - 第一个值是true,返回第二个

```JavaScript
let result = 1 && 2; //返回2

result = 0 && 1; //返回0

result = 0 && NaN; //返回0
result = NaN && 0; //返回NaN
```



- **或运算**
  - 第一个值是true,直接返回第一个
  - 第一个值是false,返回第二个

```JavaScript
let result = 1 || 2; //返回1
result = 0 || 2; //返回2
result = null || 'hello'; //返回'hello'

result = null || undefined; //返回undefined
```



#### 逻辑运算符的赋值操作

**空值合并操作符: ** ??

在当左侧操作数为 undefined 或 null 时，该操作符会将右侧操作数赋值给左侧变量

```js
const name = null ?? '前端';
console.log(name); //前端

空值合并操作符和逻辑操作符结合使用:
a ||= b; // 等同于 a || (a = b);

a &&= b; // 等同于 a && (a = b);

a ??= b; // 等同于 a ?? (a = b);
```





### 3.1 逻辑赋值操作符

#### 3.1.1 ?? 空值合并操作符

在当左侧操作数为 undefined 或 null 时，该操作符会将右侧操作数赋值给左侧变量

```js

```





### 4.关系运算符(比较运算符)

比较运算符比较二个操作数并返回基于比较结果的`Boolean`值。

#### 相等运算符(==)

相等操作符比较两个值是否相等，在比较前将两个被比较的值转换为相同类型。在转换后（等式的一边或两边都可能被转换），最终的比较方式等同于全等操作符 === 的比较方式。 相等操作符满足交换律。

**规则**

相等运算符（`==`和`!=`）使用[抽象相等比较算法](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)比较两个操作数。

* 如果两个操作数都是对象，则仅当两个操作数都引用同一个对象时才返回`true`。
* 如果两个操作数是不同类型的，就会尝试在比较之前将它们转换为相同类型：
  * 当数字与字符串进行比较时，会尝试将字符串转换为数字值
  * 如果操作数之一是`Boolean`，则将布尔操作数转换为1或0. `true`转换为1, `false`转换为0.
  * 如果操作数之一是对象，另一个是数字或字符串，会尝试使用对象的`valueOf()`和`toString()`方法将对象转换为原始值。
* 如果操作数具有相同的类型
  - `String`：`true`仅当两个操作数具有相同顺序的相同字符时才返回。
  - `Number`：`true`仅当两个操作数具有相同的值时才返回。`+0`并被`-0`视为相同的值。如果任一操作数为`NaN`，则返回`false`。
  - `Boolean`：`true`仅当操作数为两个`true`或两个`false`时才返回`true`
* `null == undefined` 返回值是`true`

```html
字符串和数字的布尔类型转换规则是： Javascript会将undefined，false和0，NaN和空字符串'',空格字符串'  '视为false，其他值视为true


'' == false //true
0 == false //true
0 == undefined //false
'' == undefined //false
undefined == undefined; //true
null == null; //true
NaN == NaN; //false


null == undefined  //true
undefined == false  //false
undefined == 0 //false
```



**为什么undefined == false返回false**

> [来源](https://stackoverflow.com/questions/19277458/why-does-undefined-equals-false-return-false/19277873)

ECMA文档定义没有直接指出原因,但从下面这句话可以看出原因:
`"the comparison x == y, where x and y are values, produces true or false."`

同时,null的定义如下:

`NUll or nil means 'no value' or 'not applicable'`

在Javascript中, `undefined`也是同样的设置,它没有任何值.然而, `false`有一个值.  `Null`和`undefined`不应该提供任何值,同样的, 它也没有能转换成抽象相等比较的值, 所以这个结果总是`false`. 

这也是`null == undefined` 返回`true`的原因(它们两个都没有任何值,此点没有相应解释). 应该注意`null===undefined`返回`false`, 因为这是两种类型.

**相等操作符对于不同类型的值,如图**

| 被比较值 B |           |           |         |                       |                               |                                 |                                 |
| :--------- | --------- | --------- | ------- | --------------------- | ----------------------------- | ------------------------------- | ------------------------------- |
|            |           | Undefined | Null    | Number                | String                        | Boolean                         | Object                          |
| 被比较值 A | Undefined | `true`    | `true`  | `false`               | `false`                       | `false`                         | `IsFalsy(B)`                    |
|            | Null      | `true`    | `true`  | `false`               | `false`                       | `false`                         | `IsFalsy(B)`                    |
|            | Number    | `false`   | `false` | `A === B`             | `A === ToNumber(B)`           | `A=== ToNumber(B)`              | `A== ToPrimitive(B)`            |
|            | String    | `false`   | `false` | `ToNumber(A) === B`   | `A === B`                     | `ToNumber(A) === ToNumber(B)`   | `ToPrimitive(B) == A`           |
|            | Boolean   | `false`   | `false` | `ToNumber(A) === B`   | `ToNumber(A) === ToNumber(B)` | `A === B`                       | `ToNumber(A) == ToPrimitive(B)` |
|            | Object    | `false`   | `false` | `ToPrimitive(A) == B` | `ToPrimitive(A) == B`         | `ToPrimitive(A) == ToNumber(B)` | `A === B`                       |





#### 全等运算符(===)

**判断规则: **

* 全等操作符比较两个值是否相等，两个被比较的值在比较前都不进行隐式转换。

* 如果两个被比较的值具有不同的类型，这两个值是不全等的。

* 如果两个被比较的值类型相同，值也相同，并且都不是 number 类型时，两个值全等。*
* 如果两个值都是 number 类型，当两个都不是 NaN，并且数值相同，或是两个值分别为 +0 和 -0 时，两个值被认为是全等的。

在日常中使用全等操作符几乎总是正确的选择。对于除了数值之外的值，全等操作符使用明确的语义进行比较：一个值只与自身全等。

对于数值，全等操作符使用略加修改的语义来处理两个特殊情况：

第一个情况是，浮点数 0 是不分正负的。区分 +0 和 -0 在解决一些特定的数学问题时是必要的，但是大部分情况下我们并不用关心。全等操作符认为这两个值是全等的。

第二个情况是，浮点数包含了 NaN 值，用来表示某些定义不明确的数学问题的解，例如：正无穷加负无穷。全等操作符认为 NaN 与其他任何值都不全等，包括它自己。（**等式 `(x !== x)` 成立的唯一情况是 x 的值为 NaN）**





#### 不相等运算符(!=)

* 推荐使用不全等运算符

* 如果两个值不相等返回true,相等返回false
* 会做自动的类型转换





#### 不全等运算符(!==)

* 不全等
* 如果两个不全等返回true,相等返回false
* 不会做自动的类型转换



#### in

如果指定的属性在指定的对象或其原型链中，则**`in` 运算符**返回`true`. in运算符也会检索对象的原型，**只有当对象原型为null时使用这个方法才比较稳妥**。

```js
//语法
prop in object
 prop:一个字符串类型或者 symbol 类型的属性名或者数组索引（非symbol类型将会强制转为字符串）
 object:检查它（或其原型链）是否包含具有指定名称的属性的对象
 
//示例
数组中必须使用索引号,而不是数组元素的值
let arr = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in arr; //true
6 in arr; //false
'bay' in arr //false
'length' in arr //true

内置对象
'PI' in Math //true

对象
let myObj = {make: "Honda", model: "Accord", year: 1998};
'make' in myObj; //true
```



对被删除的属性使用in,返回false

```js
var mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
"make" in mycar;  // 返回false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // 返回false
```

属性的值赋值为[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，而没有删除它，则 `in` 运算仍然会返回`true`

```js
var mycar = {make: "Honda", model: "Accord", year: 1998};
mycar.make = undefined;
"make" in mycar;  // 返回true

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // 返回true
```

继承属性

如果一个属性是从原型链上继承来的，`in` 运算符也会返回 `true`

```js
"toString" in {}; // 返回true

String方法是是谁身上的，无论是Object还是Function，都是返回的false.
```





#### instanceof

instanceof运算符判断一个对象是否为另一个对象的实例

the `instanceof` operator tests to see if <u>the `prototype` of a constructor</u> appears anywhere in <u>the prototype chain</u> of <u>an object</u>. The return value is a boolean value.

**Syntax**

```javascript
object instanceof constructor
```

**Desc**

the `instanceof` operator tests the presence of `constructor.prototype` in `objdct`'s prototype chain.

> Note that the value of an `instanceof` test can change based on changes to the `prototype` property of constructors.
>
> It can also be changed by changing an object's prototype using `Object.setPrototypeOf`.  
>
> It is also possible using the non-standard `__proto__` property.

```javascript
function Fn() {};
function Fn2() {};

let a = new Fn();
let b = new Fn();

a instanceof Fn;
Object.setPrototypeOf(a, Fn2);
a instanceof Fn; //false
```



**`instanceof` and mulptiple context(e.g. frames or windows)**





**Examples**

<u>Using instanceof with String</u>

```javascript
let literalString = 'This is a literal string';
let stringObject = new String('String created with constructor');

literalString instanceof String; //false
stringObject instanceof String; //true

literalString instanceof Object; //false
stringObject instanceof Object; //true

stringObject instanceof Date; //false
```

<u>Using instanceof with Date</u>

```javascript
let myDate = new Date();

myDate instanceof Date; //true
myDate instanceof Object; //true
myDate instanceof String; //false
```

<u>Object created using Object.create()</u>

```javascript
function Shape() {}
function Rectangle() {
  Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle();

rect instanceof Object; //true
rect instanceof Shape; //true
rect instanceof Rectangle; //true
rcct instanceof String; //false

let literalObject = {};
let nullObject = Object.create(null);
nullObject.name = 'My object';

literalObject instanceof Object; //true
({}) instanceof Object; //true
nullObject instanceof Object; //false  prototype is end of prototype chain(null)
```



**重写instanceof** //0306

```javascript
//https://juejin.cn/post/7033275515880341512#:~:text=%F0%9F%A6%89%20%E5%85%B6%E4%BB%96-,Instanceof,-%E8%80%83%E5%AF%9F%E9%A2%91%E7%8E%87%3A%20(%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90)


function instance_of(Case, Constructor) {
  //基本数据类型返回false
  //兼容一下函数对象
  if (typeof(Case) !== 'object' && typeof(Case) !== 'function' || Case === 'null') {
    return false;
  }
  let CaseProto = Object.getPrototypeOf(Case);
  while(true) {
    if (CaseProto == null) return false;
    //找到相同的原型
    if (CaseProto === Constructor.prototype) return true;
    CaseProto = Object.getPrototypeOf(CaseProto);
  }
}
```



```javascript
function instanceOf(proto, Ctor) {
  
  while(proto !== null) {
    if (proto !== Ctor.prototype) {
      proto = Object.getPrototypeOf(proto);
    } else {
      return true;
    }
  }
  return false;
}
```





#### 小于运算符(<)

##### Desc

the operands are compared using the  [Abstract Relational Comparison](https://tc39.es/ecma262/#sec-abstract-relational-comparison) algorithm, which is roughly summarized below:

* First, objects are converted to primitive using <span style="text-decoration: underline  double blue">**Symbol.ToPrimitive**</span> with the hint parameter be 'number'.
* If both values are strings, they are compared as strings, based on the values of the Unicode code points the contain.
* Otherwise JavaScript attempts to convert non-numeric types to numeric values:
  * Boolean values `true` and `false` are converted to 1 and 0 respectively.
  * `null` is converted to 0.
  * `undefined` is converted to `NaN`
  * Strings are converted based on the values they contain, and are converted as `NaN` if they do not contain numeric values.
* If either values is `NaN`, the opeator returns `false`.
* Otherwise the values are compared as numeric values.

#### 大于运算符(>)

#### 小于等于运算符(<=)

#### 大于等于运算符(>=)





##### 非数值类型比较运算

* **非数值类型值**进行比较运算时, 会将其转换为==**数值**== 再比较

* 如果比较运算符的两端都是字符串,则不会将字符串转换为数值

  * 会逐位的比较字符的Unicode编码
  * 利用这个特点,可以对文字按照英文字母顺序排序,对于中文意义不大(是按照偏旁排序)

* 注意: 如果比较的是两个字符串类型的数字时,比较的也是编码,有可能会出现错误的比较结果.

```JavaScript
- undefined转换为数值是NaN
- null转换为数值为0
- 任何值和NaN做关系运算都是false
- +[0]转换为数值是0

let result = true < 5; //true
result = true > 5; //false

result true > null; // true 转换为1 > 0


result = true > undefined; //false  undefined转换为数字时NaN

任何值和NaN做关系运算都是false
result = NaN <= NaN; //false

result = true > '0'; //true  1 > 0

result = 'b' < 'a'; //false
result = 'blskdjf' < 'a'; //false  如果第一位b的Unicode编码大于a的,那么就不会比较以后的.


```



### 4.1 JS相等性判断及实例应用

####   如何判断两个参数相等

> https://github.com/mqyqingfeng/Blog/issues/41

见04_Javascript-高级中的'如何判断两个参数相等'

  

  

#### JavaScript中的相等性判断

看到好的文章就情不自禁的抄写一遍...

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#%E4%B8%A5%E6%A0%BC%E7%9B%B8%E7%AD%89

ES2015中有四种相等算法:

* 抽象(非严格)相等比较(==)
* 严格相等比较(===): 用于`Array.prototype.indexOf`, `Array.prototype.lastIndexOf`,和 `case-matching`.(也就是Switch语句)
* [同值零](https://262.ecma-international.org/6.0/#sec-samevaluezero): 用于`$TypedArray%` 和 `ArrayBuffer` 构造函数,以及`Map`和`Set`操作,  并将用于 ES2016/ES7 中的`String.prototype.includes`
* [同值](https://262.ecma-international.org/6.0/#sec-samevalue): 用于所有其他地方.

<u>Note: SameValueZero differs froms SameValue only in its treatment of `+0` and `-0`.</u>

JavaScript提供3种不同的值比较操作:

* 严格相等比较(也被称作'strict equality', 'identity', 'triple equals'), 使用`===`
* 抽象相等比较('loose equality', 'double equals'), 使用`==`
* `Object.is` (ECMAScript2015/ES6新特性)

简而言之，在比较两件事情时，双等号将执行类型转换; 三等号将进行相同的比较，而不进行类型转换 (如果类型不同, 只是总会返回 false ); 而Object.is的行为方式与三等号相同，但是对于NaN和-0和+0进行特殊处理，所以最后两个不相同，而Object.is（NaN，NaN）将为 `true`



##### 同值相等

同值相等解决了最后一个用例：确定两个值是否在任何情况下功能上是相同的。（这个用例演示了[里氏替换原则](http://zh.wikipedia.org/zh-cn/里氏替换原则)的实例。）当试图对不可变（immutable）属性修改时发生出现的情况：

```javascript
// 向 Nmuber 构造函数添加一个不可变的属性 NEGATIVE_ZERO
Object.defineProperty(Number, "NEGATIVE_ZERO",
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v)
{
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

`Object.defineProperty` 在试图修改不可变属性时，如果这个属性确实被修改了则会抛出异常，反之什么都不会发生。例如如果 v 是 -0 ，那么没有发生任何变化，所以也不会抛出任何异常。但如果 v 是 +0 ，则会抛出异常。不可变属性和新设定的值使用 same-value 相等比较。

同值相等由 [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 方法提供。



##### 零值相等

与同值相等类似，不过会认为 +0 与 -0 相等。



##### javascript中的判等

| x                   | y                   | `==`    | `===`   | `Object.is` |
| :------------------ | :------------------ | :------ | :------ | :---------- |
| `undefined`         | `undefined`         | `true`  | `true`  | `true`      |
| `null`              | `null`              | `true`  | `true`  | `true`      |
| `true`              | `true`              | `true`  | `true`  | `true`      |
| `false`             | `false`             | `true`  | `true`  | `true`      |
| `"foo"`             | `"foo"`             | `true`  | `true`  | `true`      |
| `0`                 | `0`                 | `true`  | `true`  | `true`      |
| `+0`                | `-0`                | `true`  | `true`  | `false`     |
| `0`                 | `false`             | `true`  | `false` | `false`     |
| `""`                | `false`             | `true`  | `false` | `false`     |
| `""`                | `0`                 | `true`  | `false` | `false`     |
| `"0"`               | `0`                 | `true`  | `false` | `false`     |
| `"17"`              | `17`                | `true`  | `false` | `false`     |
| `[1,2]`             | `"1,2"`             | `true`  | `false` | `false`     |
| `new String("foo")` | `"foo"`             | `true`  | `false` | `false`     |
| `null`              | `undefined`         | `true`  | `false` | `false`     |
| `null`              | `false`             | `false` | `false` | `false`     |
| `undefined`         | `false`             | `false` | `false` | `false`     |
| `{ foo: "bar" }`    | `{ foo: "bar" }`    | `false` | `false` | `false`     |
| `new String("foo")` | `new String("foo")` | `false` | `false` | `false`     |
| `0`                 | `null`              | `false` | `false` | `false`     |
| `0`                 | `NaN`               | `false` | `false` | `false`     |
| `"foo"`             | `NaN`               | `false` | `false` | `false`     |
| `NaN`               | `NaN`               | `false` | `false` | `true`      |



##### 使用实践

总的来说，除了对待[`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)的方式，[`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)唯一让人感兴趣的，是当你需要一些元编程方案时，它对待0的特殊方式，特别是关于属性描述器，即你的工作需要去镜像[`Object.defineProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)的一些特性时。

如果你的工作不需要这些，那你应该避免使用[`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)，使用[`===`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)来代替。

即使你需要比较两个[`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)使其结果为`true`，总的来说编写使用[`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) 检查的特例函数(用旧版本ECMAScript的[`isNaN方法`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN))也会比想出一些计算方法让[`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)不影响不同符号的0的比较更容易些。

这里是一个会区别对待-0和+0的内置方法和操作符不完全列表：



<u>一元负(`-`)</u>

对`0一元负操作得到``-0`。但表达式的抽象化可能在你没有意识到得情况下导致-0延续传播。例如当考虑下例时:

```javascript
let stoppingForce = Obj.mas * -obj.velocity;
```



<u>Math.atan2, Math.ceil, Math.pow, Math.round</u>

即使传入的参数中没有-0，这些方法的返回值都有可能是-0。例如当用 [`Math.pow`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)计算`-Infinity`的任何负奇指数的幂都会得到`-0`



<u>Math.floor, Math.max, Math.min, Math.sin, Math.square, Math.tan</u>

当传入参数中有-0时，这些方法也可能返回-0。例如， `Math.min(-0, +0)` 得出 `-0`。



<u>`~`, `<<`, `>>`</u>    //20220307

这些操作符内部都使用了ToInt32算法。因为内部32位整数类型只有一个0（没有符号区别），-0的符号在反操作后并不会保留下来。例如`Object.is(~~(-0), -0)`和`Object.is(-0 << 2 >> 2, -0)` `都会得到false`.

在未考虑0的符号的情况下依赖于[`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)`是危险的。当然，如果本意就是区分-0和+0的话，`[`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)`能按照期望完成工作。`







### 5.条件运算符(三元, 三目)

#### 5.1 三元运算符

* 语法: ==条件表达式 ? 语句1 : 语句2==

* 执行流程:

  * 条件运算符在执行的时候,它会先对 条件表达式 进行求值判断
    * 如果判断结果为true,  则执行语句1
    * 如果判断结果为false, 则执行语句2 

* ```JavaScript
  false ? alert('语句1') : alert('语句2');
  
  let a = 115;
  let b = 30;
  let c = 500;
  
  //获取a和b中的较大值
  
  let max = a > b ? a : b;
  console.log(max);
  
  //获取a,b,c中的最大值
  
  let max = a > b ? a : b;
  max = max > c ? max : c;
  console.log(max);
  ```



#### 5.2 可选链?

> 调用一个属性或方法,如果有就调用,没有就返回undefined  避免报错.  注意兼容性

```JavaScript
let b = null;
b = b.toString();
console.log(b, typeof b); // 报错

let b = null;
b = b?.toString();
console.log(b, typeof b); // undefined;
```



```js
//想要使用某个结构比较深的属性，同时又无法确定所有的父级一定存在时，我们需要进行一连串的判断
例如:
const student={
    score:{math:98,},
};
获取最内层的math属性值时:
if(student&&student.score){
    console.log(student.score.math)
}

//可选链运算符会在链路上遇到 null 或者 undefined 时，直接返回 undefined，而不会抛出错误异常

1.获取深层次属性
console.log(student?.score?.math)
            
2.执行一个可选的方法
// getScore 是一个可选参数，要么是 undefined，要么是一个函数            
const student = ({getScore}:{getScore?:()=>void})=>{
    useEffect(()=>{
        getScore?.();
    },[]);
    return <div></div>;
};    
2.1 执行dom元素方法
document.querySelector 会返回两种类型，当 dom 元素真实存在时会返回该元素，否则返回 null。
const dom = document.querySelector('.score');
if(dom){dom.getBoundingClientRect()};
使用可选链操作符,直接调用:
document.querySelector('.score')?.getBoundingClientRect();

3.获取数组中的值
arr?.[1]; //若 arr 存在时，则正常获取 arr[1]中的值
                             
const student = {
    score:{
        math:[98,97,()=>{return 99;}]
    }
}
student?.score?.math?.[2]?.();
                             
4.无法进行赋值操作
可选链运算符只能执行获取操作，是无法进行赋值操作的。


```





#### 5.3 空值合并运算符??

```javascript
a ?? b
//如果 a 是已定义的，则结果为 a，既不是 null 也不是 undefined 的表达式称为“已定义的（defined）
//如果 a 不是已定义的，则结果为 b。
```

如果第一个参数不是 `null/undefined`，则 `??` 返回第一个参数。否则，返回第二个参数。

```javascript
//重写

let result = (a!==null && a!== undefined) ? a : b;
```

**使用场景**

* 为可能是未定义的变量提供一个默认值

```javascript
let user;
console.log(user ?? 'Anonymous'); //Anonymous
            
let user = 'John';
console.log(user ?? 'Anonymous'); //John
```



* 从一系列值中选择出第一个非`null/undefined`的值

```javascript
//用这些变量之一显示用户名，如果这些变量的值都是未定义的，则显示 “Anonymous”。

let firstName = null,
    lastName = null,
    nickName = 'John';

console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); //John
```



**与或运算符区别**

或运算符 `||` 可以以与 `??` 运算符相同的方式使用, 例如，在上面的代码中，我们可以用 `||` 替换掉 `??`，也可以获得相同的结果.

重要区别:

- `||` 返回第一个 **真** 值。 (除了 `null undefined false 0 ''`之外的值)
- `??` 返回第一个 **已定义的** 值。 (除了`undefined, null`之外的值)



**优先级**

`??` 运算符的优先级相当低：在 [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table) 中为 `5`。因此，`??` 在 `=` 和 `?` 之前计算，但在大多数其他运算符（例如，`+` 和 `*`）之后计算。

如果我们需要在还有其他运算符的表达式中使用 `??` 进行取值，需要考虑加括号



**?? 与 && 或 || 一起使用**

出于安全原因，JavaScript 禁止将 `??` 运算符与 `&&` 和 `||` 运算符一起使用，除非使用括号明确指定了优先级。

```javascript
//下面的代码会触发一个语法错误：
let x = 1 && 2 ?? 3; // Syntax error

//这个限制无疑是值得商榷的，但它被添加到语言规范中是为了避免人们从 || 切换到 ?? 时的编程错误。
let x = (1 && 2) ?? 3; // 正常工作了
```





### 6. 运算符使用-隐式类型转换

> 隐式类型转换
> 如果非数值进行运算时,JS会将其转换为数字然后再运算(除了字符串的加法)
> 利用这个特性,可以为任意值==\-0, *1== 来将其转换为数字.原理和Number()一样.



#### 隐式 转换为数值(+,-,\*)

一元运算符将其他类型转换为数值共有3种方法: +a, a-0, a*1,

```javascript
let a = 10 - true;// 10 - 1

a = true + false;// 1 + 0
a = 10 - '5'; // 10 - 5

a = 10 - null;// 10 - 0
a = 10 - undefined; // 10 - NaN a的值是Nan

隐式类型转换
let a = '2';

console.log(a, typeof a); // 2 string
//a = a + 0;
a = a * 1;
console.log(a, typeof a); // 2 "number"




转换为数值的4种方法:
let a = '10';

a = Number(a);
a = a - 0;
a = a * 1;
a = +a;



=====总结======
隐式类型转换:

转换为数字:
一元运算符:  +a
算术运算符:  a-0,a*1

转换为字符:
任意值+'';

转换为布尔值:
非布尔值: !!非布尔值


=======================
let a = '10';
let b = '5';
若要按照数值 临时 比较运算,且不影响a的数据类型,
   	+a > b; //非数值比较运算,会先转换为数值,再进行比较
```



#### 隐式 转换为字符串(+'')

对字符串进行加法运算时,它会将两个字符串拼接成一个字符串
任何值与字符串做加法运算时,都会被转换为字符串,然后和字符串进行拼串  

利用这个特点,可以为**任意值**加上一个 ==空串== 来将其转换成字符串然后拼串,其原理和String()是一样的,但是更加简洁



```js
let b = 'hello' + 'world';//'helloworld'

b = 'hello' + 123; // 'hello123'

b = NaN + 'abc'; // 'NaNabc'


隐士类型转换
let c = true;
c = c + '';//隐式类型转换
console.log(c, typeof c); // true string
```



### 7.位运算符(Bitwise operators)  //todo

#### 概述

> 位运算符将它的操作数视为32位的二进制串（0和1组成）而非十进制八进制或十六进制数。例如：十进制数字9用二进制表示为1001，位运算符就是在这个二进制表示上执行运算，但是返回结果是标准的JavaScript数值。

javascript位运算符表格一览

| Operator                                                     | Usage     | Description                                                  |
| ------------------------------------------------------------ | --------- | ------------------------------------------------------------ |
| 按位与 AND                                                   | a & b     | 在a,b的位表示中,每一个对应的位都为1则返回1,否则返回0         |
| 按位或 OR                                                    | a \| b    | 在a,b的位标识中,每一个对应的位,只要有一个为1则返回1,否则返回0 |
| 按位异或 XOR                                                 | a ^ b     | 在a,b的位表示中，每一个对应的位，两个不相同则返回1，相同则返回0. |
| 按位非[ NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT) | `~ a`     | 反转被操作数的位。                                           |
| 左移[ shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift) | `a << b`  | 将a的二进制串向左移动b位,右边移入0.                          |
| 算术右移                                                     | `a >> b`  | 把a的二进制表示向右移动b位，丢弃被移出的所有位.(译注:算术右移左边空出的位是根据最高位是0和1来进行填充的) |
| 无符号右移(左边空出位用0填充)                                | `a >>> b` | 把a的二进制表示向右移动b位，丢弃被移出的所有位，并把左边空出的位都填充为0 |
|                                                              |           |                                                              |

位运算 NOT 是三步的处理过程：

- 操作数被转换为32bit整數，以位序列（0和1组成）表示.若超過32bits，則取低位32bit，如下所示：

  ```javascript
  Before: 11100110111110100000000000000110000000000001
  After:              10100000000000000110000000000001
  ```

- 第一个操作数的每一位都与第二个操作数的对应位组对: 第一位对应第一位,第二位对应第二位,以此类推.

- 运算符被应用到每一对"位"上, 最终的运算结果由每一对“位”的运算结果组合起来.

例如,十进制数9的二进制表示是1001,十进制数15的二进制表示是1111.因此,当位运算符应用到这两个值时,结果如下:

简单的理解，对任一数值 x 进行按位非操作的结果为 **-(x + 1)**

| 表达式  | 结果 | 二进制描述                       |
| ------- | ---- | -------------------------------- |
| 15 & 9  | 9    | 1111 & 1001                      |
| 15 \| 9 | 15   | 1111 & 1001                      |
| 15 ^ 9  | 6    | 1111 ^ 1001   => 0110            |
| ~ 15    | -16  | ~00000...1111 ===> 1111.....0000 |
|         |      |                                  |

#### 0. 计算机中如何表示数字

数字以一系列高低电信号的形式保存在计算机硬件中,因此他们被认为是基数为2的数(基数为2的数称为二进制数).

由于在计算机中所有信息的都是由二进制位(binary digit)或位(bit)表示,因此二进制数计算的'原子'单位是单个数位.有两种取值:高或低,开或关,真或假,1或0.

在64位<u>双字(doubleword/DW)</u>中,从右向左依次将位编号位0,1,2,3...,RISC-V中的双字为64位宽,因此可以表示2的64次方种不同的组合模式.这些组合自然可以表示从0到2的64次方减1(18 446 774 073 709 551 615)之间的数.
$$
00000000\quad00000000\quad00000000\quad00000000\quad00000000\quad00000000\quad00000000\quad00000000_2=0_{10}\\

00000000\quad00000000\quad00000000\quad00000000\quad00000000\quad00000000\quad00000000\quad00000001_2=1_{10}\\
00000000\quad00000000\quad00000000\quad00000000\quad00000000\quad00000000\quad00000000\quad00000010_2=2_{10}\\
...\\
11111111\quad11111111\quad 11111111\quad 11111111\quad 11111111 \quad11111111\quad 11111111 \quad11111101_2 = 18\;446\;744\;073\;709\;551\;613_{10}\\

11111111\quad11111111\quad 11111111\quad 11111111\quad 11111111 \quad11111111\quad 11111111 \quad11111110_2 = 18\;446\;744\;073\;709\;551\;614_{10}\\

11111111\quad11111111\quad 11111111\quad 11111111\quad 11111111 \quad11111111\quad 11111111 \quad11111111_2 = 18\;446\;744\;073\;709\;551\;615_{10}\\
$$
位(bit),音译'比特',表示二进制位.位是计算机内部数据存储的最小单位,一个二进制位只可以表示0或1两种状态中的一种,两个二进制位有4种状态,三个二进制位可表示8种状态.

字节(Byte),字节是通过网络传输信息(或硬盘,内存存储存储信息),计算机种数据处理的基本单位.规定一个字节由8个二进制位构成,即1个字节等于8个比特.(1Byte = 8bit).通常1个字节可以存入一个ASCII码,2个字节可以存放一个汉字国标码. 一个ascii码就是一个字节,因为ascii码的二进制范围是00000000到11111111,十进制范围是0到255.

字(word),是计算机进行数据处理时,一次存取,加工和传送的数据长度称为字.

* 1个字等于两个字节等于16位

* 一个字通常由1个或多个字节构成.计算机的字长决定了其cpu一次操作处理实际位数的多少.计算机的字长越长,性能越好.

双字(D)

* 1个双字等于2个字等于32位
* 1个双字是4个字节



**原码表示**

计算机程序可以计算正数和负数,因此需要一种表示方法了区分正数和负数.最显然的一个方法是增加一个符号位来表示,这种表示方法称为**原码表示**(sing and magnitude).因为存在符号位位置不明确及需要额外的步骤来设置符号,导致被放弃.

**补码**(two's complement)

简化硬件表示法:前导0表示正数,前导1表示负数.
$$
00000000\quad00000000\quad 00000000\quad 00000000\quad 00000000 \quad00000000\quad 00000000 \quad00000000_2 = 0_{10}\\

00000000\quad00000000\quad 00000000\quad 00000000\quad 00000000 \quad00000000\quad 00000000 \quad00000001_2 = 1_{10}\\

00000000\quad00000000\quad 00000000\quad 00000000\quad 00000000 \quad00000000\quad 00000000 \quad00000010_2 = 2_{10}\\

...\\

01111111\;11111111\;11111111\;11111111\;11111111\;11111111\;11111111 \;11111101_2 = 9\;223\;372\;036\;854\;775\;805_{10}\\

01111111\;11111111\;11111111\;11111111\;11111111\;11111111\;11111111 \;11111110_2 = 9\;223\;372\;036\;854\;775\;806_{10}\\

01111111\;11111111\;11111111\;11111111\;11111111\;11111111\;11111111 \;11111111_2 = 9\;223\;372\;036\;854\;775\;807_{10}\\
...\\
10000000\;00000000\;00000000\;00000000\;00000000\;00000000\;00000000\;00000000_2 = -9\;223\;372\;036\;854\;775\;808_{10}\\

10000000\;00000000\;00000000\;00000000\;00000000\;00000000\;00000000\;00000001_2 = -9\;223\;372\;036\;854\;775\;807_{10}\\

10000000\;00000000\;00000000\;00000000\;00000000\;00000000\;00000000\;00000010_2 = -9\;223\;372\;036\;854\;775\;806_{10}\\

...\\

11111111\;11111111\;11111111\;11111111\;11111111\;11111111\;11111111 \;11111101_2 = -3_{10}\\

11111111\;11111111\;11111111\;11111111\;11111111\;11111111\;11111111 \;11111110_2 = -2_{10}\\

11111111\;11111111\;11111111\;11111111\;11111111\;11111111\;11111111 \;11111111_2 = -1_{10}\\
$$
从0到`9 223 372 036 854 775 807`(2<sup>63</sup> - 1)的正数与之前的表示相同.位模式1000...000<sub>2</sub>表示最小负数-9 223 372 036 854 775 808<sub>10</sub>(-2<sup>63</sup>). 而后是一组递增的负数: 从-9 223 372 036 854 775 807<sub>10</sub>(1000...000<sub>2</sub>)到-1(111...111<sub>2</sub>).

二进制补码有一个负数没有相应的正数: -9 223 372 036 854 775 808<sub>10</sub>.

二进制补码的优点:  所有负数的最高有效位都为1.因此硬件只需要检测这一位就可以查看是正数还是负数(数字0被认为是正数).这个为通常称为**符号位(sign bit)**. 通过符号位,可以用每位数值乘以2的幂之和来表示正负数的64位数:

符号位乘以-2<sup>63</sup>,然后其余位分别乘以他们各自基值的正值.
$$
(x_{63} × -2^{63}) + (x_{62} * 2^{62}) + (x_{61} * 2^{61}) + ... + (x_1 * 2^1) + (x_0 * 2^0)
$$


例题: 二进制转换为十进制

下面这个64位二进制补码的十进制是多少?

11111111 11111111 11111111 11111111 11111111 11111111 11111111 11111100<sub>2</sub>

答案:

(1\*-2<sup>63</sup>) + (1\*2<sup>62</sup>) + (1\*2<sup>61</sup>) + ... + (1\*2<sup>2</sup>) + (0\*2<sup>1</sup>) + (0*2<sup>0</sup>)

= -2<sup>63</sup> + 2<sup>62</sup> + 2<sup>61</sup> + ... + 2<sup>2</sup> + 0 + 0

= -9 223 372 036 854 775 808<sub>10</sub> + 9 223 372 036 854 775 804<sub>10</sub>

= -4<sub>10</sub>



二进制补码的两种快捷方式

<u>对二进制补码求相反数的快速方法</u>

把每个0都转为1以及每个1都转为0,然后对结果加1. 这个捷径基于以下观察: 一个数与其取反表达式的和一定是111...111<sub>2</sub>,它表示负1. 由于x+<span style="text-decoration: overline">x</span> = -1.,因此x+<span style="text-decoration: overline">x</span>+1 = 0或x+1 = -<span style="text-decoration: overline">x</span>.(用符号来表示<span style="text-decoration: overline">x</span>按位取反)



<u>将一个用n位表示的二进制数转换位一个用多于n位表示的数</u>

先取位数更少的数的最高位(符号位),并将其复制来填充位数更多的数的新位.原来的非符号位被复制到新双字的右侧部分.这个方式通常被称为符号扩展(sign extension)

实例,将16位二进制数2<sub>10</sub>和-2<sub>10</sub>转换成64位二进制数

数字2的16位二进制数
00000000 00000010<sub>2</sub> = 2<sub>10</sub>

通过把最高有效位(0)复制48份放到双字的左侧,将其转换位64位数.把原来的值放到右侧:

00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000010<sub>2</sub> = 2<sub>10</sub>

使用前面的快捷方式对16位二进制数2求反,因此:

11111111 11111101<sub>2</sub> + 1<sub>2</sub> = 11111111 11111110<sub>2</sub>

将负数转换成64位意味着要将符号位复制48次并放到左侧:

11111111 11111111 11111111 11111111 11111111 11111111 11111111 11111110<sub>2</sub> = -2<sub>10</sub>

该方式之所以有效是因为在正数二进制补码的左侧实际上是无限个0,而负数的二进制补码在左边是无限个1. 二进制位模式隐藏了前面的位以适应硬件的宽度,符号扩展只是恢复了一些.



**计算机中为什么需要补码和反码**

> https://demonlee.tech/archives/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%B8%AD%E8%BF%90%E7%AE%97%E4%B8%BA%E4%BD%95%E9%9C%80%E8%A6%81%E5%8F%8D%E7%A0%81%E5%92%8C%E8%A1%A5%E7%A0%81



二进制位运算符

> 二进制运算符将他们的操作数作为32个二进制位(0或1)的集合,并蒋方舟标准的JS数值.

#### 二进制位与(AND) `&`

> 按位与运算符(&)在两个操作数对应的二进制位都为1时,该位的结果值才为1, 否则为0

##### 语法

```javascript
a & b
```

##### 描述

操作数被转换为32位整数，并由一系列位（0和1）表示。 超过32位的数字将丢弃其最高有效位。 例如，以下大于32位的整数将被转换为32位整数：

```javascript
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

第一个操作数中的每个位都与第二个操作数中的相应位配对：第一位到第一位，第二位到第二位，依此类推。

将运算符应用于每对位，然后按位构造结果。

```javascript
.    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
```

将任何数字`x`与`0`进行按位与运算将得出`0`。

##### 实例

<u>如何判断一个数字是不是2的n次方幂</u>

方案1: 按位与操作符

通过二进制的方法来判断.规律: 只要num是2的次方幂,最高位必然是1,其余为0.num-1则最高位必然是0, 其余位为1.

```javascript
8的二进制 1000 8-1 的二进制 0111    按位与运算      1000&0111 => 0000   所以8是2的n次方幂
9的二进制 1001 9-1 的二进制 1000    按位与运算      1001&1000 => 1000   所以9不是2的次方幂。
24的二进制 11000  24-1的二进制 10111 按位与运算     11000&10111 => 10000  所以24不是2的次方幂。
```

通过num.toString(2)来获取num的二进制

```javascript
//代码实现

function check(num) {
  return (num > 0 ) &&((num & (num-1)) === 0)
}

function check(num) {
  return /^10$/.test(num.toString(2))
}

function check(num) {
  return Number.isInteger(Math.log2(num))
}
```







#### 按位非运算符

按位非(~)运算符,反转操作数的位.

注意位运算符“非”将所有的32位取反，而值的最高位(最左边的一位)为1则表示负数(2-补码表示法)。

对非数值变量取反,得到的一定是负1,因为实际上等于对0取反.

```javascript
二进制相反数是该二进制每位反转,然后+1;
15的反码是~15, 那么~15 + 1 = -15,所以 ~15 = -15 - 1;

~x 相当于 -(x+1)
~~x 相当于-(-(x+1) + 1) x+1-1
```

对一个非数值变量取反操作,得到的一定是-1,因为实际上等于对0做取反操作

```javascript
~null //-1
~NaN //-1
~'xx' //-1
~{} //-1
~function func() {} //-1
```



`~1`的步骤:

* 将十进制数字1转换为32位的二进制: `0000 0000 ... 0000 0001`    
* 按位取反 `1111 1111 ... 1111 1110`.这个就是结果,但我们需要将它再取反,获得容易计算的二进制数.
* 最高位数字1表示负数,0表示正数. 将除了符号位之外的其他数字取反. `1000 0000 ... 0000 0001`
* 末位加1取其补码(**二进制负数等于反码+1**)  `1000 000 ... 000 0010`
* 转换为十进制 `-2`



> 来源: https://www.cnblogs.com/moqiutao/p/6275483.html
>
> * 按位取反的运算规则是所有的计算机语言都是这样的。这样做的主要原因是为了为了统一减法和加法，在计算机中，减法会变成加一个负数，而负数会以补码的形式存储。而这样主要是因为补码和数字的十进制数有这么转换关系，负数：**`补码(x) = -x - 1`**，正数：**`补码(x) = x`**
> * 因为补码是针对负数存在的，那么只要数据类型有**`无符号数`**，就没有这样的烦恼了，比如C语言有无符号整型，就能对无符号整型直接按位取反。
> * 如果没有无符号类型，而且也只是想要按位取反，而不是附带补码的按位取反，需要另外的方法。让全1的数据和当前数据做按位抑或就行了。比如，你有一个32位的数据a，需要对它做按位取反，那么这样就行了：**`0xFFFF ^ a`**
>
> https://juejin.cn/post/6844903717611782157
>
> * 二进制的负数就是取该二进制数的补码,然后+1  (补码就是按位取反后的数)
> * 二进制数, 最高位为0表示正数,最高位为1表示负数.
> * `~`按位非操作其实就是取补码的过程,也就是上述求该值负数的逆过程,所以可以简单的理解为该值取负值后减1。
>
> 



**应用**

**1. indexOf()**

```javascript
//判断数组或字符串是否存在某个元素
if (str.indexOf(query) !== -1) {}
if (str.indexOf(query) >= 0) {}

if (~str.indexOf(query))
不存在返回-1,~-1 = 0 ,大于-1的值,0,1,2,3 ... 按位非的值1,2,3,4...都大于0
```



**2. ~~value**

对于浮点数,~~value可以代替parseInt(value),而且前者效率更高些

```javascript
parseInt(-2.99); //-2
~~(-2.99); //-2
```



```javascript
console.log('~null: ', ~null);       // => -1
console.log('~undefined: ', ~undefined);  // => -1
console.log('~0: ', ~0);          // => -1
console.log('~{}: ', ~{});         // => -1
console.log('~[]: ', ~[]);         // => -1
console.log('~(1/0): ', ~(1/0));      // => -1
console.log('~false: ', ~false);      // => -1
console.log('~true: ', ~true);       // => -2
console.log('~1.2543: ', ~1.2543);     // => -2
console.log('~4.9: ', ~4.9);       // => -5
console.log('~(-2.999): ', ~(-2.999));   // => 1



console.log('~~null: ', ~~null);       // => 0
console.log('~~undefined: ', ~~undefined);  // => 0
console.log('~~0: ', ~~0);          // => 0
console.log('~~{}: ', ~~{});         // => 0
console.log('~~[]: ', ~~[]);         // => 0
console.log('~~(1/0): ', ~~(1/0));      // => 0
console.log('~~false: ', ~~false);      // => 0
console.log('~~true: ', ~~true);       // => 1
console.log('~~1.2543: ', ~~1.2543);     // => 1
console.log('~~4.9: ', ~~4.9);       // => 4
console.log('~~(-2.999): ', ~~(-2.999));   // => -2
```



#### 2.位移运算符

在二进制基础上对数字进行移动操作



##### 2.1 `<<` 按位左移运算符

> Bitwise left shift operator



##### 2.2 `>>` 按位右移运算符

> Bitwise right shift opearotr



##### 2.3 `>>>` 按位无符号右移运算符

**Define**

> Bitwise unsigned right shift oprator
>
> the unsigned right shift operator(>>>) (zero-fill right shift) shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left. The sign bit becomes 0, so the result is always non-negative. Unlike the other bitwise operators, zero-fill right shift returns an unsigned 32-bit integer.

无符号右移操作符（>>>）（零填充右移）将第一个操作数向右移动指定的位数。向右移出的多余的位被丢弃,再从从左边移入0。符号位变为0，所以结果总是非负的。与其他位操作符不同，零填充右移返回一个无符号的32位整数。

**Desc**

> this operator shifts first operand the specified number of bits to the right.
>
> 这个操作符向右移动第一个操作数具体位数
>
> Excess bits <u>shifted off(移出)</u> to the right are discarded.
>
> 向右移出多余的比特(位)被丢弃
>
> Zero bits are <u>shifted in(移入)</u> from the left.
>
> 0位从左边被移入
>
> The sign bit becomes `0`, so the result always non-negative.
>
> 符号位成为0, 所以结果总是非负的.
>
> Unlike the other bitwise operators, zero-fill right shift returns an unsigned 32-bit integer.
>
> 和其他位操作符不同, `0填充右移`返回一个 无符号 的32位整数





对非负整数,零填充右移符号和符号传播右移得到一样的结果.例如

```javascript
9(base 10): 00000000000000000000000000001001 (base 2)
9>>>2(base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

对负数来说,两者结果不同

```javascript 
-9    (base 10):   11111111111111111111111111110111 (base 2)
-9>>>2(base 10):   00111111111111111111111111111101 (base 2)

//如何快速得出右移后的十进制数
1.取反加1 11....11
2.计算 1*(-2的31次方) + 1*(2的30次方) + ... + 1*(2的1次方) + 1*(2的0次方) = 1073741821 = 9>>>2

-1>>>0 这里JS会把符号位替换成0,所以结果并不是-1,而是-2的32次方+1

```

**注意**

* 取整,但不可对负数取整.

* JS做位运算时,小数部分会忽略

* 非数值运算会变成0

```javascript
1.01 >>> 2
1.01(10)        00000000000000000000000000000001 //? 这里写错了,应该是仍然存在小数位吧,但在应用右移操作符时应该会被忽略
1.01(10) >>> 2  00000000000000000000000000000000 //转换成十进制为0

-2 >>> 0
2        00000000000000000000000000000010
-2       11111111111111111111111111111110  //进制转负数需要取反且加1
-2 >>> 0 11111111111111111111111111111110  //结果是将二进制转换成10进制  




1>>>0  //1
1.5>>>0 //1
-1>>>0 //4294967295
null>>>0 //0
undefined>>>0 //0
'sldkfj'>>>0 //0
```



**Other**

1.1 JS中为什么浮点数也能参与位运算,在java,go,c中是不允许的?

在JS中Number类型不区分整型,浮点型的.为了不丢失精度,JS中的Number类型实际上是一个基于IEEE754标准的双精度64位浮点数.

JS需要位运算时,会将操作数转成32位比特序列,也就是补码.再按照64位浮点数存储.

1.2 JS中非数值类型如何进行位运算?

* 对于非数值类型,会首先将操作数转成一个整型(就是0),然后再进行计算.实际上这是一个伪命题,实质上是对非数值操作数的整型表达式进行的位运算.
* JS中的整型在内存中是一个64位双精度浮点型,但JS在进行位运算时,会将操作数转成带符号位的32位比特序列,也就是补码(????).运算结束后,再按照64位存储.这里肯定会存在精度丢失的问题,JS如何处理呢?超过32位的部分直接截断.



### 8. 字符串运算符





### 8. 运算符优先级

> 参考mdn





## 代码块

JS中使用{}创建代码块 代码块用来为代码进行 分组 统一代码块中代码为一组代码, 要么都执行,要么都不执行



```JavaScript
//  使用let声明的变量具有 块作用域
//	代码块内部的变量不能被外部访问
//  使用var声明的变量不具有 块作用域, 但是具有 函数作用域 相当于window.变量 = 值   *****
//  代码块,例如大括号,if之后的大括号,for之后的大括号,但是不能包括函数之后的大括号  ****

<script>
    {
    let a = 10;
    let b = 11;
    var c = 13;
}    
    console.log(a); //报错
	console.log(c); //返回13
</script>
    
```



## 语句

### Control flow

> JS代码默认是从上到下执行的,可以通过 流程控制语句 来改变程序的执行顺序
>
> 1.条件判断语句
>
> 2.条件分支语句



#### if语句(条件判断语句)

语法: 

```JavaScript
if(条件表达式){
    语句...
}
========================  
if(!isNaN(i)){
    语句...
}
```

执行流程:

* if语句在执行时,先对条件表达式进行 求值判断.
  * 如果为true, 则执行if后的语句
  * 如果为false, 则不执行
* if语句会控制紧随其后的那条语句, 如果希望可以控制多条语句,可以将语句放入一个代码块
* 如果if的条件表达式不是一个布尔值,它会将其先转换为布尔值然后判断



if语句条件判断:

> https://dorey.github.io/JavaScript-Equality-Table/

A standard IF statement. If(*value*) {/*- green -*/} else { /*- white -*/ }

Note: This row does not match up with any of the rows in the other table.

| value                               | result | statement                                 |
| ----------------------------------- | ------ | ----------------------------------------- |
| true                                | √      | if (true) { /* executes */ }              |
| false                               |        | if (false) { /* does not execute */ }     |
| 1                                   | √      | if (1) { /* executes */ }                 |
| 0                                   |        | if (0) { /* does not execute */ }         |
| -1                                  | √      | if (-1) { /* executes */ }                |
| "true"                              | √      | if ("true") { /* executes */ }            |
| "false"                             | √      | if ("false") { /* executes */ }           |
| "1"                                 | √      | if ("1") { /* executes */ }               |
| "0"                                 | √      | if ("0") { /* executes */ }               |
| "-1"                                | √      | if ("-1") { /* executes */ }              |
| ""                                  |        | if ("") { /* does not execute */ }        |
| null                                |        | if (null) { /* does not execute */ }      |
| undefined                           |        | if (undefined) { /* does not execute */ } |
| Infinity                            | √      | if (Infinity) { /* executes */ }          |
| -Infinity                           | √      | if (-Infinity) { /* executes */ }         |
| []                                  | √      | if ([]) { /* executes */ }                |
| {}                                  | √      | if ({}) { /* executes */ }                |
| [[]]                                | √      | if ([[]]) { /* executes */ }              |
| [0]                                 | √      | if ([0]) { /* executes */ }               |
| [1]                                 | √      | if ([1]) { /* executes */ }               |
| <span style="color:red;">NaN</span> |        | if (NaN) { /* does not execute */ }       |



#### if语句2

##### if-else语句

语法:

```JavaScript
if(条件表达式){
    语句...
}else{
    语句...
}
```

执行流程:

if-else语句在执行时,会先对条件表达式进行求值判断,
* 如果为true, 则执行if后的条件表达式
* 如果为false, 则执行else后的条件表达式





#####  if-else if-else语句

语法:

```JavaScript
if(条件表达式){
    语句...
}else if(条件表达式){
    语句...
}else if(条件表达式){
    语句...
}else if(条件表达式){
    语句...
}else{
    语句...
}
```

执行流程
* if-else if-else在执行时,自上向下依次对if后的条件表达式进行求值判断,
  * 如果结果为true,则执行当前if后的语句,执行完毕语句结束.
  * 如果结果为false,则继续向下判断,直到找到true为止,
  * 如果没有true,则执行else后的语句.
* ==if-else if-else中只会有一个代码块会执行,一旦符合条件其余代码块都不会执行==

案例

```JavaScript
//练习1:编写一个程序，获取一个用户输入的整数。然后通过程序显示这个数是奇数还是偶数。

<script>
    let num = +prompt('请输入一个整数');   //注意,prompt函数如果不填写值会直接返回一个字符串
	if(num > 0){
        if (num % 2 === 0){
        	alert('偶数');
    	}else{
        	alert('奇数');
    	}
    }else{
        alert('非法数值,请重新输入');
    }
    
</script>   

```





#### switch语句(条件分支语句)

语法:

```JavaScript
switch (条件表达式) {
        case 表达式:
        	语句...;
        	break;
        case 表达式:
        	语句...;
        	break;
        case 表达式:
        	语句...;
        	break;
        default:
        	语句...;
        	break;
        }

===================================
switch (num) {
    case 1:
        alert('a');
        break;
    case 2:
        alert('b');
        break;
    case 3:
        alert('c');
        break;
    case 'b':
    case 'c':
    case 'd':
        alert('输错了');
        break;   // b,c,d共用c的内容.
}
```



执行流程
* switch-case在执行时，会自上向下依次将switch后的条件表达式和case后的表达式进行全等比较,
* 如果比较结果为true, 则自当前case处开始向下执行代码(执行完一个case后会接着执行),
* 如果比较结果为false,则继续向下比较直到找到true为止,
* 如果所有的比较结果都是false,则自default处开始向下执行代码.所以如果default代码在首部,需要加break,故无论哪个位置,加上.

* 注意:
  * switch-case条件满足时,自当前case处开始向下执行代码
  * 只要代码在case的后边,即使代码在其他的case后边也会执行
  * 如果不希望执行,可以在case后边添加break关键字,break关键字可以立刻结束switch语句
  * switch-case和if-else的功能基本是一致,甚至可以相互替代,但是日常使用中,if的使用频率会高一些.





#### break

> the break statement terminates the current loop, switch or [label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) statement and transfers programe control to the statement following the terminated statement.(将程序控制权转移到终止语句之后的语句)





**Syntax**

> break [label]

label <span style="border:1px solid black; border-radius:25px;">  optional  </span>

> Identifier associated with the label of the statement. If the statement is not a loop or switch, this is required.

**Desc**

* the break statement includes an optional label that allows the program to break out of a labeled statement(脱离带标签的语句)
* the break statement needs to be nested within the referenced label(需要嵌套在引用的标签中). The labeled statement can be any block statement(标记的语句可以是任何块语句); it does not have to be preceded by a loop statement(它前面不必是一个循环语句).
* A break statement, with or without a following label, cannot be used within the body of a function that is itself nested within the current loop, switch, or label statement that the break statement intended to break out of.(无论是否有后面的label, break语句都不能在函数的主体中使用,因为该函数本身嵌套在当前的循环,switch或label语句中,而break语句是为了脱离这些语句)

**examples**

<u>break in while loop</u>

```javascript
function testBreak(x) {
  let i = 0;
  
  while(i<6) {
    if (i==3) {
      break;
    }
    i += 1;
  }
  return i * x;
}
```

<u>break in switch statements</u>

```javascript 
const foold = 'sushi';

switch(food) {
  case 'sushi':
   console.log('sxxx');
   break;
  case 'pizza':
    console.log('xxx');
    break;
  default:
    console.log('xxx');
    break;
}
```

<u>break in labeled blocks</u>

```javascript
outer_block: {
  inner_block: {
    console.log('1');
    break outer_block;
    console.log(':-('')');
  }
  console.log('2');
}
```

<u>break in labeled blocks that throw</u>



<u>break within functions</u>

```javascript
function testBreak(x) {
  let i = 0;
  
  while(i < 6) {
    if (i===3) {
      (function() {
        break;
      })();
    }
    i += 1;
  }
  return i * x;
}
testBreak(1); //SyntaxError: Illegal break statement

block_1: {
  console.log('1');
  (function() {
    break block_1; //SyntaxError: Undefined label 'block_1';
  })();
}
```





概要

```JavaScript
- break
* break可以用来结束 switch和循环语句,不能用在if语句中,除非是if外有循环语句
* break一旦执行,循环会立即结束
* break会离它最近的循环起作用

- continue
* continue用来跳过当次循环
```

break案例

```JavaScript
for(i=0; i<5; i++){
    console.log('外层循环: ',i);
    for(j=0; j<5; j++){
        if(j==2){
            break;            //break不能用在if语句中,但是可以用在for循环里.
        }
        console.log('\t内层循环: ',j);
    }
}
```







#### continue

continue案例

```JavaScript
for(let i=0; i<5; i++){
    console.log('外层循环: ',i)
    for(let j=0; j<5; j++){
        if(j==2){
            continue;
        }
        console.log('\t内层循环: ',j)
    }
}
```





### Iterators



#### while循环

语法:

```JavaScript
while(条件表达式){
    语句...
}
```



执行流程
* while语句在执行时,先对条件表达式进行求值判断
* 如果判断结果为false,则语句结束
* 如果结果为true,则只带代码块(循环体)中的代码
  * 执行完毕继续对条件表达式进行求值判断,以此类推



条件表达式恒为true的循环,是死循环,会一直执行

```js
// 初始化表达式,初始化一个变量
let i = 0;

//条件表达式, 设置循环运行的条件
while(i < 5){
    //执行语句
    //更新表达式,对初始化变量进行修改
    i++;
}
```









#### do-while循环

语法:

```JavaScript
do{
    语句...
}while(条件表达式)
```

执行流程:

* do-while在执行时,它会先执行do后的循环体,
  * 执行完毕对对while后的条件表达式进行求值判断
    * 如果为false,则语句直接结束
    * 如果为true, 则继续执行循环体,以此类推

* while是先判断后执行,do-while是先执行后判断, 可以确保循环体至少执行一次



案例:

```JavaScript
let money = 1000;
let count = 0;
while(money < 5000){
    money *= 1.05;
    count++;
}
alert('count');


============================
let money = 1000;
let count = 0;

do{
    money *= 1.05;
    count++;
}while(money < 5000);

alert(count);
```





#### for循环

#### 语法:

```JavaScript
for(1初始化表达式; 2条件表达式; 4更新表达式){
    3语句...
}
```

#### **执行流程:**

1. 先执行初始化表达式,初始化一个变量(只会执行一次)

2. 执行条件表达式进行求值判断

   2.1 若结果为false, 语句结束

3. 若结果为true, 执行循环体

4. 执行 更新表达式, 对变量进行更新

5. 重复2.

其他

3个表达式都可以省略, 如果都不写, 则循环变成死循环, 慎用

```js
for(;;){
    alert(123);  //关掉后会弹出窗口,一直运行
}
```



#### for循环案例

##### 求100以内所有的奇数之和

```js
let num = 0; //创建一个变量,用来存储结果
for(let i=0; i<100; i++){   //获取100以内所有的整数
    if(i % 2 !== 0){        // 判断i是否是奇数
        num += i;			// 所有奇数 相加
    }
}
console.log(num);
====================================================
let result = 0;
for(let i=1; i<100; i+=2){   //通过更新表达式,获取奇数.
    result += i;
}
console.log(result);
```



##### 求100以内所有7的倍数之和,以及个数

```js
let num = 0;
let count = 0;
for(let i=0; i<100; i+=7){
  num += i;
  count++;
}


for(let i=0;i<100;i++){
  if(i%7===0){
    num += i;
    count++;
  }
}

console.log(num,count);
```



##### 水仙花数

水仙花数.  水仙花数是指一个 n 位数（n≥3 ），它的每个位上的数字的 n 次幂之和等于它本身（例如：1\*\*3 + 5\*\*3 + 3\*\*3 = 153）编写代码，求 1000 以内所有的水仙花数！

```js
//获取1000以内所有的3位数
for(let i=100; i<1000; i++){
    //获得3位数的百位数,十位数和个位数. 没有思路就使用案例法,例如123求百位,是123除以100得1.
    let hundred1 = parseInt(i / 100);
    let sec2 = parseInt( (i - hundred1*100) / 10 ) ;
    let thr3 = i % 10;
    
    if(hundred**3 + sec2**3 +thr3**3 === i){
        console.log(i);
    }
}
```



**质数**

获取用户输入的任何整数,判断其是否为质数.(质数也叫素数,一个数如果只能被1和它本身整除，那么这个数就是质数。1不是质数也不是合数。)   ==重点==

```js
/* n是不是质数？
             - 要看n是不是质数，就是看n有没有除1和n以外的其他因数
               如果有，n就不是质数
               如果没有，n就是质数
 
             - 获取所有可能整除n的数（除了1和n）
               2 3 4 5 6 ... n-1
*/


let i = +prompt('请输入一个整数');   //创建一个变量表示数字
let flag = true;    //定义一个变量来记录i的状态,模式i是质数
for(let j=2; j<i; j++){  //获取所有可能整数i的数(除了1和i本身)
    if(i % j ===0){      //i能被j整数,说明i一定不是质数
        flag = false;   // 进入判断证明i不是质数,修改flag为false
        break;
    }
}
if(flag){					//判断 i 是否为质数
        alert(`${i}是质数`);
    }else{
        alert(`${i}不是质数`);
}


 
 
 ================================================================
 https://blog.csdn.net/yeyue1992/article/details/81348722
 
 方法1: 因子一定有2个
 let num = +prompt('请输入一个整数');
 let count = 0;
 for(i=1; i<num; i++){
     if(num%i === 0){
         count++;
     }
 }
 if(count === 2){
     console.log(`${num}是质数`);
 }else{
     console.log(`${num}不是质数`);
 }

100以内的质数
let count = 0;
for(let i=1;i<100;i++) {
  for(let j=1;j<=i;j++) {
    if(i%j===0){
      count++;
    };
  }
  if(count===2){
    console.log(i);
  }
  count = 0;
}
 
 
 方法2,因子和=num+1
let num = +prompt('请输入一个整数');
let sum = 0;
for(i=1; i<=num; i++){
    if(num%i === 0){
        sum +=i;
    }      
}
if(sum === num+1){
    console.log(`${num}是质数`);
}else{
    console.log(`${num}不是质数`);
}
```



##### 判断数组中某元素出现的次数

```js
let arr = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bruce', 'Alice'];
let newArr = [];
for(let i=0; i<arr.length; i++){
    let temp = arr[i];
    let count = 0;
    for(let j=0; j<arr.length; j++){
        if(arr[j]===temp){
            count++;
            arr[j]=-1;
        }
    }
    if(temp!==-1){
        newArr.push(temp+':'+count)
    }
}

console.log(newArr) sd
```







#### 嵌套for循环

> 嵌套循环时, 外循环每执行一次,内循环就执行一个完整的周期



```js
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
    
for(i=0; i<5; i++){        //外循环 对应的是高度
    for(j=0; j<5; j++){    //内循环 对应的是宽度
        document.write('*');
    }
    document.write('<br>');
}

* * * * *
* * * * 
* * *
* * 
* 
    
for(i=0; i<5; i++){
    for(j=0; j<5-i; j++){
        document.write('*');
    }
    document.write('<br>');
}

* 
* *
* * * 
* * * * 
* * * * *
    
for(i=0; i<5; i++){
    for(j=0; j<i+1; j++){
        document.write('*');
    }
    document.write('<br>');
}

```



练习:在浏览器窗口中打印99乘法表

```js
<script>
    for(let i=1; i<10; i++){     //创建一个外循环,控制图形的高度
        for(let j=1; j<i+1; j++){ //j<=i; 创建一个内循环,控制图形的宽度
            document.write(`${j}×${i}`+'='+i*j);  //开始的时候,j和i的位置谁先谁后没有想.j是管宽度的，i是管高度的
            // document.write(`${j}*${i}`+'='+Number(i)*Number(j); 这是开始的写法 完全没有必要使用Number()
        }
		document.write('<br>');
    }
</script>
```





求100以内所有的质数

```JavaScript

for(i=2; i<100; i++){   //获取100以内所有的数
    let flag = true;    //创建一个变量记录i的状态,默认i是质数
    for(j=2; j<i; j++){ //获取所有可能整除i的数
        if(i % j === 0){ //判断i能否被j整除
            flag = false;  //进入判断说明i一定不是质数
            			// 将flag修改为false
        }
    }
     if(flag){console.log(i);} //如果i是质数则打印i
}

======================
    将let flag = true; 放到外层循环的外面,程序还会实现效果吗?
    打印结果只会有2和3
	4进入判断,非质数,flag的值变为false,再次循环的时候无论是否为质数,flag的值都是false了.
 
    
    
//扩展 设计数据
例如设计flag数据,注意3项: 数据类型,名称, 位置
流程:界面变化->要有对应的数据
```



#### for...in

##### Define

> The statement iterators over all [enumerable properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) of an object that are keyed by strings(ignoring ones keyd by Symbols), including inherited enumerable properties.
>
> for...in语句迭代对象所有可枚举的以字符串为键的属性(忽略Symbol为键的属性), 包括继承的可枚举属性.

##### Syntax

```javascript
for (variable in object) {
  //statement
}
```

`variable` 每次迭代分配的不同的属性名

`object`  不含有Symbol属性且迭代可枚举属性的对象

##### Description

* `for...in`循环只能迭代可枚举非Symbol属性
* 被内建构造函数创建的对象,例如`Array`, `Object`会从`Object.prototype`和`String.prototype`继承非枚举的属性,例如字符串的`Indexof`方法或者对象的`toString()`方法.
* 循环将会迭代对象自己和从原型链继承的所有的可枚举属性
* **此循环以无序的方式迭代对象的属性**
  * 如果在一次迭代中更改一个属性并随后会访问它,那么它在循环中的值会是改变之后的值；
  * 在被访问之前删除的属性不会被获取到；
  * 迭代时添加的属性可能被访问到或忽略掉
* 通常，最好在迭代时不要添加，更改或者移除属性，除非是当前正在访问的属性
* 不能保证一个添加的属性是否会被访问，一个被修改的属性（除了当前属性）是否会在修改之前或之后被访问，或者一个被删除的属性是否会在删除之前被访问。
* **数组迭代和for...in**
  * `for...in`不应该用在迭代一个注重索引顺序的数组上
  * 数组索引只是具有整数名称的可枚举属性，在一般方面与对象属性相同
  * 不能保证`for...in`以特定方式返回索引
  * `for...in`循环语句将返回所有可枚举属性，包括非整数名属性和继承的属性
  * 因为迭代顺序是与实现有关，迭代一个数组可能不按照构成顺序访问数组。所以当迭代访问顺序重要的数组时最好用有数字索引的 for循环（或`Array.prototype.forEach()`, `for...of`循环）。
* **只迭代自身的属性**
  * 如果你只考虑对象自身的属性,不包括原型上的,使用`getOwnPropertyNames()` 或执行`hasOwnProperty()`检查 (`propertyIsEnumerable()`也能使用)
  * 可选的,如果你了解没有任何外部代码干扰, 可以使用检查方法来扩展内建的属性




##### Why use

考虑到`for...in`是用来迭代对象属性,不推荐用在数组上.那么其作用是什么?

* 它最长用作来debug, 是一种检查对象属性的简单方式( 用在控制台或其他地方输出  )
* 尽管存储数据数组经常更实用, 但处理数据首选键值对的情况下,可能存在这种情况,你想检查这些键中是否有某个特定的值.



##### Examples

迭代对象所有可枚举非symbol属性

```javascript
let obj = {a: 1, b: 2, c: 3};
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`)
}
```

迭代自身的属性(搭配`hasOwnProperty()`)  推荐总是使用'hasOwnProperty'

```javascript
let triangle = {a: 1, b: 2, c: 3};

function ColoredTriange() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

let obj = new ColoredTriangel();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`)
  }
}
```



使用构造函数返回的对象实例,迭代时会迭代原型上的属性,非构造函数生成的对象不会迭代

```javascript
//如果Object.create(null)  字面量形式是构造函数的语法糖
Object.prototype.pro = 'val';
let obj = Object.create(null);
obj.a = 'a';
for (let i in obj) {
  console.log(i); //'a'
}
```



#### for...of

##### Define

`for...of`语句创建一个循环来迭代可迭代对象,包括内建`String`, `Array`, 类数组对象(例如, `arguments` 或 `NodeList`), `TypedArray`, `Map`, `Set` 和用户定义的迭代. 它调用了一个自定义迭代钩子来为对象每个不同的属性的值执行语句.

##### Syntax

```javascript
for (variable of iterable) {
  statement
}

//变量没有被声明也可以正常迭代,没有报错
```

`varibale` 每一次迭代中被声明成变量的每个不同属性的值. 变量可以被`const`, `let`, 或 `var`声明.

`iterable`  被迭代的对象(有迭代的属性)

##### Example

迭代数组

```javascript
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
```

如果在块内重新声明了变量, 则使用`let`代替`const`

```javascript
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
```

迭代字符串

```javascript
const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}
```

迭代类型数组

```javascript
const iterable = new Unit8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
```

迭代Map集合

```javascript
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
  console.log(entry);
}

//"['a', 1]"
//"['b', 2]"
//"['c', 3]"

for (const [key, value] of iterable) {
  console.log(value);
}
```

迭代Set集合

```javascript
const iterable = new Set([1,1,2,2,3,3]);

for (const value of iterable) {
  console.log(value);
}
```

迭代arguments对象

可以迭代arguments对象来检查所有传入JS函数中的参数

```javascript
(function() {
  for (const arguments of arguments) {
    console.log(arguments);
  }
})(1,2,3)
```

迭代DOM集合

迭代DOM集合例如NodeList: 以下的案例为一个段落直接的后代段落添加一个red类

```javascript
const articleParagraphs = document.querySelectorAll('article > p');

for (const paragraph of articleParagraphs) {
  paragraph.classList.add('red');
}
```

**关闭迭代器**

在`for...of`循环中, 突然的迭代中止可以由`break`, `throw` 或 `return`引起. 在这些情况下,迭代器被关闭.

```javascript
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}
for (const o of foo()) {
  console.log(o);
  break; //close iterator, execution continues outside of the loop
}
console.log('done');

// 1
//'done'
```

迭代生成器

```javascript
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while(true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (const n of fibonacci()) {
  console.log(n);
  if (n >= 1000) {
    break;
  }
}
```

不能复用生成器

生成器不能重复使用,即使`for...of`循环提前中止, 例如使用`break`关键字. 在上面一个循环中,生成器关闭, 试图再次迭代,也不能产生任何进一步的任何结果

```javascript
const gen = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

for (const o of gen) {
  console.log(o);
  break;//closes iterator
}

for (const o of gen) {
  console.log(o); //Never called
}
```

迭代其他可迭代对象

你也可以迭代一个明确实现了迭代协议的对象

```javascript
const iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return {value: this.i++, done: false};
        }
        return {value: undefined, done: true};
      }
    }
  }
};


for (const value of iterable) {
  console.log(value);
}

```

**Difference between `for...of` and `for...in`**

* `for...in`语句迭代一个对象的可枚举属性
* `for...of`语句迭代可迭代对象定义的要迭代的值 (The `for...of` statement iterates over values that the [iterable object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables) defines to be iterated over.)

以下的案例展示了两者在数组上的不同

```javascript
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3,5,7];
iterable.foo = 'hello';

for (const i in iterable) {
  console.log(i); //logs: '0', '1', '2', 'foo', 'arrCustom', 'objCustom'
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); //logs: '0', '1', '2', 'foo'
  }
}

for (const i of iterable) {
  console.log(i); //logs 3, 5, 7
}
```





### 优化console.time()

概要

```JavaScript
* console.time()可以开启一个计时器
* console.timeEnd()关闭计时器. 括号里的内容要么没有要么相同
```





优化-案例质数

```JavaScript
console.time();
for(let i=2; i<100000; i++){
    let flag = true;
    for(let j=2; j<=i**5; j++){ //第二次优化  当质数的因数开始重复的时候,后面就没有新的因数了.需要将j<i改为j<i**5,运行发现出现4,9这样的非因数.
        if(i % j === 0){
            flag = false;
            break;      // 第一次优化
        }
    }
    if(flag){
        console.log(i); //打印是重复性工作,计时时可以省略
    }
}

console.timeEnd();
```





### JS中如何跳出循环/结束遍历

> https://segmentfault.com/a/1190000020176190
>
> https://juejin.cn/post/6844904032071319565

下表是JS中常用的实现循环遍历的方法的跳出/结束遍历的办法

break, continue都是在for循环中使用的语句

return只能在函数内部使用



```javascript
//Array.prototype.forEach

let arr = [1,2,3,4,5]
let arr2 = []
arr.forEach(item => {
  if (item == 2) {
    //break Uncaught SyntaxError: illegal break statement
    //continue; //Uncaught SyntaxError: illegal continue statement: no surrouding iteration stateemnt
    //return; //[1,3,4,5] 只能跳出本次循环
    //return true; //[1,3,4,5] 只能跳出本次循环
    //return false; //[1,3,4,5] 只能跳出本次循环
  }
	arr2.push(item)
})
```



| 序号 | 方法          | break  | continue     | return       | return true  | return false | throw |
| ---- | ------------- | ------ | ------------ | ------------ | ------------ | ------------ | ----- |
| 1    | for循环       | √      | 跳出本次循环 | 不合法       | 不合法       | 不合法       |       |
| 2    | for...in      | √      | 跳出本次循环 | 不合法       | 不合法       | 不合法       |       |
| 3    | Array.forEach | 不合法 | 不合法       | 跳出本次循环 | 跳出本次循环 | 跳出本次循环 |       |
| 4.   | Array.map     | 不合法 | 不合法       | 跳出本次循环 | 跳出本次循环 | 跳出本次循环 |       |
| 5    | Array.some    | 不合法 | 不合法       | 跳出本次循环 | 成功         | 跳出本次循环 |       |
| 6    | Array.every   | 不合法 | 不合法       | 成功         | 跳出本次循环 | 成功         |       |
| 7    | Array.filter  | 不合法 | 不合法       | 跳出本次循环 | 跳出本次循环 | 跳出本次循环 |       |
| 8    | for...of      | √      | √            | √            |              |              | √     |



**其他问题**

* `for...of`循环单独使用return会报错: `Uncaught SyntaxError: Illegal return statement`
  * 测试环境: Chrome浏览器

​	

```javascript
for (let [key, value] of Object.entries({a: 1, b: 2})) {
  if (key === 'a') return 'a'; //报错
}

//解决: 添加到函数中
(() => {
  for (let [key, value] of Object.entries({a: 1, b: 2})) {
    if (key === 'a') return 'a'; //打印'a'
  }
})()
```



### 可枚举性enumerable !!!!

#### 概述

* 可枚举属性是指那些内部 “可枚举” 标志设置为 `true` 的属性，对于通过直接的赋值和属性初始化的属性，该标识值默认为即为 `true`，对于通过 [Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 等定义的属性，该标识值默认为 `false`。

* 可枚举的属性可以通过 [for...in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环进行遍历（除非该属性名是一个 [Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)）。

* 属性的所有权是通过判断该属性是否直接属于某个对象决定的，而不是通过原型链继承的。

一个对象的所有的属性可以一次性的获取到。有一些内置的方法可以用于判断、迭代/枚举以及获取对象的一个或一组属性，下表对这些方法进行了列举。

#### Detection

|                              | Own object                                                   | Own object and prototype chain   | Prototype chain only             |
| ---------------------------- | ------------------------------------------------------------ | -------------------------------- | -------------------------------- |
| Enumerable                   | propertyIsEnumerable<br />hasOwnProperty                     | Not available without extra code | Not available without extra code |
| Nonenumerable                | hasOwnProperty<br /><br />filtered to exclude enumerable using<br />propertyIsEnumerable | Not available without extra code | Not available without extra code |
| Enumerable and Nonenumerable | hasOwnProperty                                               | in                               | Not available without extra code |

#### Retrieval(检索/取回)

|                              | Own object                                                   | Own object and property chain    | Property chain only              |
| ---------------------------- | ------------------------------------------------------------ | -------------------------------- | -------------------------------- |
| Enumerable                   | Object.keys<br />getOwnPropertyNames<br />getOwnPropertySymbols | Not available without extra code | Not available without extra code |
| Nonenumerable                | getOwnPropertyNames,<br />getOwnPropertySymbols => filtered to exclude enumerable using<br />propertyIsEnumerable | Not available without extra code | Not available without extra code |
| Enumerable and Nonenumerable | getOwnPropertyNames<br />getOwnPropertySymbols               | Not available without extra code | Not available without extra code |



#### Iteration

|                              | Own object                                                   | Own object and property chain    | Property chain only              |
| ---------------------------- | ------------------------------------------------------------ | -------------------------------- | -------------------------------- |
| Enumerable                   | Object.keys<br />getOwnPropertyNames<br />getOwnPropertySymbols | for...in<br />(ecluding symbols) | Not available without extra code |
| Nonenumerable                | getOwnPropertyNames<br />getOwnPropertySymbols => filtered to exclude enumerable using<br />propertyIsEnumerable | Not available without extra code | Not available without extra code |
| Enumerable and Nonenumerable | getOwnPropertyNames<br />getOwnPropertySymbols               | Not available without extra code | Not available without extra code |



#### Obtaining properties by enumerability/ownership

按可枚举/所有权获取属性

> Note that this is not the most efficient algorithm for all cases, but useful for a quick demonstration

<u>1. detection can occur by</u>

`SimplePropertyRetriver.theGetMethodYouWant(obj).indexOf(prop) > -1`



<u>2. Iteration can occur by</u>

`SimplePropertyRetriver.theGetMethodYouWant(obj).forEach(function(vlaue, prop) {})`;

(or use `filter()`, `map()`, etc)

```javascript
var SimplePropertyRetriver = {
  getOwnEnumerable: function(obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // or could use for...in filtered with hasOwnProperty or just this: return Object.keys(obj)
  },
  getOwnNonenumerables: function(obj) {
    return this._getPropertyNames(obj, true, false, this._notEnumerable);
  },
  getOwnEnumerablesAndNonenumerables: function(obj) {
    return this._getPropertyNames(obj, true, false, this._enumerableAndNonenumerable);
    //or jsut use: Object.getOwnPropertyNames(obj)
  },
  getPropertyEnumerables: function(obj) {
    return this.getPropertyNames(obj, false, true, this._Enumerable);
  },
  getPropertyNonenumerables: function(obj) {
    return this._getPropertyNames(obj, false, true, this._notEnumerabl)
  },
  getPropertyEnumerablesAndNonenumerables: function(obj) {
    return this._getPropertyNmaes(obj, false, true, this._enumerableAndNotEnumerable);
  },
  //private static property checker callbacks
  _enumerable: function(obj, prop) {
    return obj.propertyIsEnumerable(prop);
  },
  _notEnumerable: function(obj, prop) {
    return !obj.propertyIsEnumerable(prop);
  },
  _enumerableAndNotEnumerable: function(obj, prop) {
    return true;
  },
  //Inspired by http://stackoverflow.com/a/8024294/271577
  _getPropertyNames: function getAllPropertyNames(obj, iterateSelefBool, iteratePrototypeBool, includPropCB) {
    var props = [];
    do {
      if (iterateSelfBool) {
        Object.getOwnPropertyNames(obj).forEach(prop => {
          if (props.indexOf(prop) === -1 && includePropCb(obj, prop)) {
            props.push(prop);
          }
        })
      }
      if (!iteratePrototypeBool) {
        break;
      }
      iterateSelfBool = true;
    } while (obj = Object.getPropertyOf(obj));
    return props;
  }
}
```



#### detection table

| Enumerable                         | Nonenumerable | Symbols keys | Inherited Enumerable | Inherited Nonenumerable | Inherited Symbols keys |       |
| :--------------------------------- | :------------ | :----------- | :------------------- | :---------------------- | :--------------------- | ----- |
| `in`                               | true          | true         | true                 | true                    | true                   | true  |
| `for..in`                          | true          | false        | false                | true                    | false                  | false |
| `obj.hasOwnProperty`               | true          | true         | true                 | false                   | false                  | false |
| `obj.propertyIsEnumerable`         | true          | false        | true                 | false                   | false                  | false |
| `Object.keys`                      | true          | false        | false                | false                   | false                  | false |
| `Object.getOwnPropertyNames`       | true          | true         | false                | false                   | false                  | false |
| `Object.getOwnPropertyDescriptors` | true          | true         | true                 | false                   | false                  | false |
| `Reflect.ownKeys()`                | true          | true         | true                 | false                   | false                  | false |



### 可枚举性和可迭代对象🌈

JavaScript数据遍历循环的两个属性: 可枚举属性和可迭代对象

<span style="color:blue">基本上，在 JavaScript 中，所有可迭代对象都是可枚举对象，但并非所有可枚举对象都是可迭代对象。</span>

可迭代的内置类型包括 Array、String、Set 和 Map 对象不可迭代，因为它没有指定 @iterator 方法。



#### 可枚举属性

可枚举属性总是出现在for...in循环中.

可枚举对象:

* 通过赋值运算符将属性赋值给对象,内部可枚举标志(enumerable)默认为true
* 通过`Object.defineProperty添加的属性,其可枚举属性默认为false



#### 可迭代对象

如果一个对象定义了它的迭代行为(设置@iterator接口),那么它是可迭代的.



#### 循环loop 迭代iterate 遍历traversal 递归recursion

循环: 在满足条件的情况下，重复执行同一段代码。比如，while语句。

迭代（iterate），指的是按照某种顺序逐个访问列表中的每一项。比如，for语句。

遍历（traversal），指的是按照一定的规则访问树形结构中的每个节点，而且每个节点都只访问一次。

递归（recursion），指的是一个函数不断调用自身的行为。比如，以编程方式输出著名的斐波纳契数列。



## 作用域

### 背景

储存变量当中的值，并且能在之后对这个值进行访问或修改。事实上，正是这种储存和访问变量的值的能力将状态带给了程序。

但是将变量引入程序会引起几个很有意思的问题:

* 变量储存在哪里?
* 程序需要时如何找到他们

存储和查找变量的规则,可以被称为作用域.

### 编译过程

#### 编译原理

传统编译语言流程中, 源代码在执行前会经历3个过程:

* <span style="color:blue">分词/词法分析(Tokenizing/Lexing)</span>
  * 将字符串分解成对编程语言有意义的代码块(代码块又被称为词法单元token.)
  * 分词(tokenizing) 和 词法分析(Lexing)的区别: 词法单元的识别是通过有状态还是无..
* <span style="color:blue">解析/语法分析(Parsing)</span>
  * 将词法单元转换成抽象语法树(AST)
* <span style="color:blue">代码生成</span>
  * 将AST转换为可执行代码的过程

比起那些编译过程只有三个步骤的语言的编译器，JavaScript引擎要复杂得多。(执行前短时间编译对要求更高??)

* JS不会有大量的（像其他语言编译器那么多的）时间用来进行优化，因为与其他语言不同，JavaScript的编译过程不是发生在构建之前的。
* JS中,大部分情况下编译发生在代码执行前的几微秒（甚至更短！）的时间内

#### 处理过程

**实例**

以`var a = 2`为例:

* 首先, 编译器会将这段程序分解成词法单元，然后将词法单元解析成一个树结构。
* 遇到`var a`，<span style="color:blue;">编译器会询问作用域</span>是否在同作用域集合中存在同名变量
  * 是 编译器会忽略该声明，继续进行编译；
  * 否 它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为a
* 编译器为引擎生成运行所需的代码,用来处理a=2这个赋值操作.  <span style="color:blue;">引擎运行时会首先询问作用域</span>，在当前的作用域集合中是否存在一个叫作`a`的变量。
  * 是, 引擎就会使用这个变量；
  * 否, 引擎会继续查找该变量
    * 找到, 就会将2赋值给它; 
    * 没找到, 引擎就会举手示意并抛出一个异常！

**编译器具体处理**

> 编译器在编译过程的第二步中生成了代码，引擎执行它时，会通过查找变量a来判断它是否已声明过。查找的过程由作用域进行协助，但是引擎执行怎样的查找?

查找变量的两种查询方式:

* LHS查询  “<span style="color:blue">赋值操作的目标是谁（LHS）</span> 一般出现在赋值操作的左侧
* RHS查询  <span style="color:blue">“谁是赋值操作的源头（RHS）”</span>  一般出现在赋值操作的右侧



**小结:**

变量的赋值操作会执行两个动作:

首先编译器会在当前作用域中<span style="color:blue;">**声明一个变量**</span>（如果之前没有声明过）;

然后在运行时引擎会在作用域中<span style="color:blue;">**查找该变量**</span>，如果能够找到就会对它**赋值**。

**查询的异常处理**

在变量还没有声明（在任何作用域中都无法找到该变量）的情况下，这两种查询的行为是不一样的。具体表现如下:

* RHS查询遍寻不到所需的变量,引擎会抛出`ReferenceError`异常
* LHS查询遍寻不到所需变量,

  * 非严格模式: 全局作用域会创建一个具有该名称的变量,并返还给引擎(非'严格模式'下)
  * 严格模式: 抛出同RHS查询失败时类似的`ReferenceError`异常
* RHS查询找到一个变量,但对变量进行不合理操作(例如,对函数类型进行调用,引用null/undefined值中的属性), 引擎抛出`TypeError`.

> `ReferenceError` 同作用域判别失败相关
>
> `TypeError` 代表作用域判别成功了，但是对结果的操作是非法或不合理的。



### 作用域分类

#### 编程语言中的分类

作用域共有两种主要的工作模型。

* 词法作用域: 最为普遍的，被大多数编程语言所采用的。
* 动态作用域，仍有一些编程语言在使用（比如Bash脚本、Perl中的一些模式等）

#### 词法作用域:

<span style="color:blue;">词法作用域就是定义在词法阶段的作用域</span>。换句话说，词法作用域是由你在写代码时将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域不变（大部分情况下是这样的）。

#### 词法作用域查找规则:

* 查找是从所处的最内部开始,逐级向上/外.遇到第一个匹配的标识符停止
* 多层嵌套作用域中可以定义同名标识符,存在'遮蔽效应'(内部遮蔽了外部的)
* 指回查找一级标识符.如果代码中引用了foo.bar.baz，词法作用域查找只会试图查找foo标识符，找到这个变量后，<span style="color:blue">对象属性访问规则</span>会分别接管对bar和baz属性的访问。

#### 欺骗词法:

> 具体查阅<你不知道的JavaScript>

JavaScript中有两种机制来实现这个目的.欺骗词法作用域会导致性能下降。

* eval()
* with

#### JS中的作用域有:

* 全局作用域
* 函数作用域
* 块作用域



### 全局作用域



### 函数作用域

#### 概述

> 函数作用域的含义是指，属于这个函数的全部变量都可以在整个函数的范围内使用及复用（事实上在嵌套的作用域中也可以使用）

* 函数的作用域由函数的定义位置决定,和函数的调用位置无关

* 函数作用域在函数调用时创建，在调用结束时销毁  
* 函数每次调用都会产生一个新的函数作用域，函数作用域与函数作用域之间相互独立
* 在函数作用域中声明的变量是 局部变量,只能在函数内部访问，无法被外部访问

* 在函数内部，使用var声明的变量和使用function开头的函数也会被提升

* 如果在函数内部声明变量时，省略var或let，则变量默认会成为全局变量(不希望出现的情况)



#### 设计优劣

* 充分利用JavaScript变量可以根据需要改变值类型的“动态”特性。 (???? 哪里有应用?
* 不细心处理变量,带来意想不到的问题.(????



#### 基于作用域隐藏变量和函数

> 在任意代码片段外部添加包装函数，可以将内部的变量和函数定义“隐藏”起来，外部作用域无法访问包装函数内部的任何内容。

**原因**

大都是从<span style="color:blue">最小特权原则(最小授权 / 最小暴露)</span>中引申出来的。这个原则是指在软件设计中，应该最小限度地暴露必要内容，而将其他内容都“隐藏”起来，比如某个模块或对象的API设计。

**隐藏作用域优点**

* 避免暴漏过多的变量或函数，实现私有化
* 避免同名标识符之间的冲突, 冲突会导致变量的值被意外覆盖。

**避免标识符冲突的实例**

<u>1. 全局命名空间中的第三方库</u>

这些库通常会在全局作用域中声明一个变量，通常是一个对象。这个对象被用作库的命名空间，所有需要暴露给外界的功能都会成为这个对象（命名空间）的属性，而不是将自己的标识符暴露在顶级的词法作用域中。

<u>2.模块管理</u>

使用任意模块管理器，任何库都无需将标识符加入到全局作用域中，而是通过依赖管理器的机制将库的标识符显式地导入到另外一个特定的作用域中



**使用函数隐藏作用域存在的问题**

具名函数本身就会污染所在作用域,没有函数名又该如何运行?

解决: 立即执行函数表达式

匿名函数表达式的缺点:

回答: 具体查看本笔记中 函数 >匿名和具名函数 > 缺点



**最佳实践**

推荐始终给匿名函数表达式添加函数名称, 编程具名函数表达式(行内函数表达式)

```javascript
setTimeout(function timeoutHandle() {
  console.log('...')
}, 1000)
```



**IIFE  立即执行函数表达式** 实践

优势:

1.不会污染所在作用域,不用通过函数名调用运行

用法:

1.两种使用形式

2.当做函数调用并传递参数

3.倒置代码运行顺序,将需要的函数放在第二位,在IIFE执行后当做参数传递进去



**原笔记内容**

- 在函数内定义的变量不能在函数之外的任何地方访问 || 一个函数可以访问定义在其范围内的任何变量和函数
- 定义在全局域中的函数可以访问所有定义在全局域中的变量。
- 在一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量

### 块作用域

块作用域是一个用来对之前的最小授权原则进行扩展的工具，将代码从在函数中隐藏信息扩展为在块中隐藏信息。

#### **JS中的块作用域**

JS中的块作用域有`with, try...catch, let, const`:

<u>with</u>

用with从对象中创建出的作用域仅在with声明中而非外部作用域中有效。

<u>try...catch</u>

其中声明的变量仅在catch内部有效

<u>let</u>

let关键字可以将变量绑定到所在的任意作用域中（通常是{ .. }内部）。换句话说，let为其声明的变量<span style="color:blue;">隐式地劫持了所在的块作用域</span>

优点:

let进行的声明不会再块作用域中进行提升.声明的代码被运行之前,声明并不存在.

#### 块作用域的作用

<u>1.垃圾收集</u> 

和闭包及回收内存垃圾的回收机制相关.

<span style="color:blue;">为变量显式声明块作用域，并对变量进行本地绑定是非常有用的工具</span>

考虑以下函数:

```javascript
function process(data) {
  //...
}

var someReallyBigData = {};
process(someReallyBigData);

var btn = document.getElementById('my button');
btn.addEventListener('click', function click(evt) {
  console.log('button clicked');
})
```

click函数的点击回调并不需要someReallyBigData变量。理论上这意味着当process(..)执行后，在内存中占用大量空间的数据结构就可以被垃圾回收了。但是，<span style="color:red;">由于click函数形成了一个覆盖整个作用域的闭包</span>，JavaScript引擎极有可能依然保存着这个结构（取决于具体实现）。

> ???? 这里的闭包是怎么实现的呢? 内部函数并没有引用外部函数的变量, 也许是需要解绑导致的吗?

块作用域可以打消这种顾虑，可以让引擎清楚地知道没有必要继续保存someReallyBigData了：

```javascript
function process(data) {
  //...
}
{ //在这个块中定义的内容完事可以销毁
	var someReallyBigData = {};
	process(someReallyBigData);
}
var btn = document.getElementById('my button');
btn.addEventListener('click', function click(evt) {
  console.log('button clicked');
})
```

<u>2.let循环</u>

```javascript
for (let i=0; i<10; i++) {
  console.log(i);
}
cosole.log(i); //ReferenceError
```

<span style="color:blue">for循环头部的let不仅将i绑定到了for循环的块中，事实上它将其重新绑定到了循环的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值。</span>

下面通过另一种方式来说明每次迭代时进行重新绑定的行为：

```javascript
{
  let j;
  for (j=0; j<10; j++) {
    let i=j; //每个迭代重新绑定
    console.log(i);
  }
}
```

<u>3.const声明</u>

可以用来创建块作用域变量，但其值是固定的（常量）。之后任何试图修改值的操作都会引起错误。



#### 函数作用域实例

```javascript
function fn2(){
    console.log(c);   //显示undefined  表明var c有在函数内部有变量提升
    tt();			  //显示'tt' 表明函数tt() 在函数fn2()中提升
    var c = 10;
    function tt(){console.log('tt');}
}    
   

=========================================================
    
function fn3(){
    c = 10;    //变量c变成全局变量 相当于window.c = 10;
}    
fn3();       // 为什么在这里,需要调用函数fn3才能访问变量c  理解:调用函数就是让函数内的代码运行
console.log('c =', c);  //
```





### 变量提升和函数提升

```javascript
# 变量的提升
 - 在JS中所有使用var声明的变量，会在所有的代码执行前被声明
	也就是说我们可以在一个变量声明前就对其进行使用
    变量的提升只会提前声明，而不会提前赋值
 - 不使用var声明的变量不会被提升，所以不能在声明前使用


# 函数的提升
 - 在JS中所有以function开头的函数，会在所有的代码执行前被创建
	所以我们可以在函数声明前就对其进行调用
 - 使用函数表达式所定义的函数不会被提升，所以无法在声明前进行调用


# JS的代码如何执行？
 1. 预解析代码
 	- 找到代码中所有使用var声明的变量，以function开头的函数
	- 对var声明的变量进行提前声明但不赋值，对于function开头的函数进行创建
 2. 逐行执行代码
 
 
 script标签下,使用var开头的变量都是window的属性,使用function开头的函数都是window的方法

=====================debug调试模式下========================
var a = 10;       //window的属性
var b = 20;
c = 30;

function fn() {    //是全局对象window的方法,被创建
   alert('fn');
}

var fn2 = function () {  //是全局对象window的方法,但未定义.因为是var开头
      alert('fn2');
};
```



案例

```javascript
var a = 10;
a = 10;   // 声明变量时，可以省略var和let，相当于windwo.a = 10; 但声明关键字必须写
===============================
console.log(a);
var a = 10;   //a此时是undefined，只会提前声明但不会提前赋值。去掉var，会显示a没有定义报错
================================
var a = 10； 
// 相当于var a； 优先执行
// a = 10;

====================================
    
fn();  //函数会被执行
fn2(); //报错  'fn2 is not a function...'
    
function fn(){              //function开头 函数提升，会被创建
    console.log('我是函数fn');
}    

var fn2 = function(){       //var开头，并非function开头
    console.log('fn2()');
}
```



案例2

```javascript
# 判断执行顺序
console.log(a);
var a = 1;
console.log(a);
var a = 2;
console.log(a);
function a(){alert(3)}
console.log(a);
a = function(){alert(4);}
console.log(a);

======================================
    
# 执行顺序及结果
var a;
function a(){alert(3);}

f a(){alert(3);}
1
2
2
f (){alert(4);}

```

案例3

```js
- 1116添加 1112题目

var a = 10;
function test(){
	a=100;
	console.log(a);
    console.log(this.a);
    var a;
    console.log(a);
}
test();//100 10 100

简化:

function test(){
    var a;
    a = 100;
    console.log(a);
    console.log(this.a);
    console.log(a);
}
var a;
a = 10;

test();//预解析, 变量提升.  函数内的局部变量a,被赋值100.以函数形式调用的时候,this指的是window.
```



### 作用域链

概要

```JavaScript
# 作用域链
* 当我们访问一个变量时,JS会先先在当前的作用域中寻找
  如果有,则直接使用
  如果没有,则去上一层作用域中寻找:如果有,则使用;如果没有,则继续去上一层寻找,依次向上类推
  直到找到全局作用域,如果依然没有找到,则报错: 'xxx is not defined'
	
```

案例

```JavaScript
let a = 10;
function fn(){
    console.log(a);  //10
}
fn();
==========================================
let a = 10;
function fn(){
    a = 20;           //全局只有a一个变量,在函数内部更改a的值后,同样是全局修改.
    console.log(a);  //20
}
fn();
console.log(a); //20 
==========================================

let a = 10;
function fn(){
    let a = 20;  
    console.log(a); // 20
}
fn();
console.log(a); // 10
=========================================
var a = 10;
function fn(){
    console.log(a); // undefined
    var a = 20;//var变量声明使得变量提升,预解析,但是没有赋值.调用变量的时候是已经声明,但没赋值,故返回undefined

}
fn();
console.log(a); // 10
=========================================================
let a = 10;
function fn(){
    console.log(a); // 报错 跟let声明的特点有关,虽然let也会使变量提升,但是无法访问.
    let a = 20;

}
fn();
console.log(a);
========================================================
let a = 10;
function fn(a){     //形参相当于函数中声明了对应的变量
    a = 20;
    console.log(a); // 20
}
fn();
console.log(a); // 10

=====================重要============================
let a = 10;
function fn(a){
    console.log(a); // undefined
    a = 20;
    console.log(a); // 20
}
fn();
console.log(a); // 10
===================================

let a = 10;
function fn(a){
    console.log(a); // 33
    a = 20;
    console.log(a); // 20
}
fn(33);
console.log(a); // 10
```





## 对象

### 描述

> 对象是一种复合值,它汇聚多个值(原始值或其他对象)并允许我们按名字存储和获取这些值.
>
> 对象是一个属性的无序集合,每个属性都有名字和值.属性名通常是字符串(也可以是符号),因此可以说是对象把字符串映射为值.
>
> 除了维持自己的属性之外,JS对象也可以从其他对象继承属性,这个其他对象被称为其'原型'.
>
> JS对象是动态的,即可以动态添加和删除属性.不过,也可以用对象来模拟静态类型语言中的静态对象和'结构体'.
>
> 对象属性有一个名字和值,属性名可以是任意字符串,包括空字符串(或任意符号),但对象不能包括两个同名的属性.值可以是任意JS值,或者是设置函数或获取函数(或两个函数同时存在).

在JavaScript中，几乎所有的对象都是`Object`类型的实例，它们都会从`Object.prototype`继承属性和方法，虽然大部分属性都会被覆盖（shadowed）或者说被重写了（overridden）。 

除此之外，`Object` 还可以被故意的创建，但是这个对象并不是一个“真正的对象”（例如：通过 `Object.create(null)`），或者通过一些手段改变对象，使其不再是一个“真正的对象”（比如说: `Object.setPrototypeOf`）。



对象的相关操作包括创建对象, 以及设置, 查询, 删除, 测试和枚举它们的值.

### 语法

```javascript
new Object()
new Object(value) //value 任意值
```



### 对象的类别

ECMAScript 6规范清晰定义了每一个类别的对象

* **普通(Ordinary)对象** 具有JavaScript对象所有的默认内部行为。
* **特异(Exotic)对象** 具有某些与默认行为不符的内部行为
* **标准(Standard)对象** ECMAScript 6规范中定义的对象，例如，Array、Date等。标准对象既可以是普通对象，也可以是特异对象。
* **内建对象** 脚本开始执行时存在于JavaScript执行环境中的对象，所有标准对象都是内建对象。



```
# 对象分类

* 内建对象
 - 由ES标准所定义的对象.例如string, number, boolean, Math, Date

* 宿主对象
 - 由JS的运行环境所提供的对象 //浏览器
 - BOM, DOM(window, document, alert, ....)

* 自定义对象
 - 由我们自己定义的对象
```



#### 类数组对象

##### 定义

> 拥有一个length属性和若干索引属性的对象



##### 与数组的比较

* 在读写,长度,遍历上与数组相同
* 无法直接调用数组方法, 可以借助Function.call方法间接调用

```javascript
let arrayLike = {
  0: 'name',
  1: 'age',
  2: 'sex',
  length: 3
};

Array.prototype.join.call(arrayLike, '&');
Array.prototype.slice.call(arrayLike, 0); //['name', 'age', 'sex'] slice可以将类数组转换成数组

Array.prototype.map.call(arrayLike, function(item) {
  return item.toUpperCase();
});
//['NAME', 'AGE', 'SEX']
```



##### 类数组转换成数组的 6 种方法

* [].slice.call(arrayLike)

* [].splice.call(arrayLike, 0)

* [].concat.apply([], arrayLike)

* Array.from(arrayLike)

* [...arrayLike]

* for循环+push

  



### 对象3种创建方式

对象创建可以通过对象字面量, new关键字和`Object.create()`函数来创建.



<u>**概述**</u>

* `new Object()`   //`Object()`行为等同于`new Object()`
* `Object.create()`
* 字面量



#### 对象字面量创建

<u>定义及规范</u>

创建JS对象最简单的方式. 对象字面量最简单的形式是包含一对花括号中的一组逗号分隔的"名: 值"对. 

<span style="color: blue">属性名是JS标识符或字符串字面量(允许空字符串).</span>

<span style="color: blue">属性值是任何JS表达式,这个表达式值(可以是原始值或对象值)会变成属性的值</span>



<u>特点</u>

* 对象字面量最后一个属性后面的**逗号**是合法的,有些编程风格指南鼓励添加这些逗号,以便将来在对象字面量末尾再增加新属性不会导致语法错误.
* 对象字面量是一个表达式,每次求值都会创建并初始化一个新的/不一样的对象.
  * 字面量每次被求值得时候,它的每个属性的值也会被求值.这意味着同一个对象字面量如果出现在循环体中,或出现在被重复调用的函数体内,可以创建很多新对象,且这些新对象属性的值可能不同.



#### new操作符创建

<u>概述</u>

new操作符用于创建和初始化一个新对象. new关键字后面必须跟一个函数调用.以这种方式使用的函数被称为'构造函数(constructor)', 目的是初始化新创建的对象.

JS为内置的类型提供了构造函数:

```javascript
let o = new Object(); //创建一个空对象, 与{}相同
let a = new Array(); //创建一个空数组, 与[]相同
let d = new Date(); //创建一个表示当前时间的日期对象
let r = new Map(); //创建一个映射对象, 用于存储键/值映射
```



`Object` 构造函数为给定的参数创建一个包装类对象（object wrapper），具体有以下情况：

* 如果给定值是 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 或 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，将会创建并返回一个<u>空对象</u>
* 如果传进去的是一个基本类型的值，则会构造其<u>包装类型的对象</u>
* 如果给定值是一个已经存在的对象，则会返回这个已经存在的值（相同地址）。

当以非构造函数形式被调用时， `Object` 和 `new Object()`表现一致。



#### Object.create()创建

**原型**

介绍此种创建方式前, 首先需要了解JS中的原型知识:

几个每一个JS对象都有一个另一个与之关联的对象.这另一个对象被称为原型(prototype),第一个对象从这个原型继承属性.

通过对象字面量创建的所有对象都有相同的原型对象, 在JS代码中可以通过`Object.prototype`引用这个原型对象.使用new关键字和构造函数调用创建的对象, 使用构造函数prototype属性的值作为它们的原型.换句话说,使用`new Object()`创建的对象继承自`Object.prototype`, 与通过`{}`创建的对象一样.

几乎所有对象都有原型,但是只有少数对象具有prototype属性,正是这些有prototype属性的对象为所有其他对象定义了原型.

Object.prototype是为数不多没有原型的对象,因为它不继承任何属性.

**Object.create**

用于创建一个新对象,使用其第一个参数作为新对象的原型.

传入null可以创建一个没有原型的新对象.这样创建的对象不会继承任何东西.

如果想创建一个普通的空对象(类似`{}` 或 `new Object()`返回的对象), 传入`Object.prototype`:

```javascript
let o = Object.create(Object.prototype)
```

Object.create()的一个用途是防止对象被某个第三方库意外修改. 这种情况下不要直接把对象传给库函数,而要传入一个继承自它的对象. 如果函数读取这个对象的属性,可以读到继承的值. 而如果它设置这个对象的属性, 则修改不会影响原始对象.



### 查询和设置属性



#### 属性操作(访问/设置)

左边应该是一个表达式,其值为一个对象.

* `.`操作符  被称为'属性访问'.  右边必须是一个命名属性的简单标识符, 需要满足标识符的命名规范
* `[]`操作符 被称为'键访问'.   方括号中的值必须是一个表达式,其结果为包含目的属性名的字符串.可以接受任意UTF-8/Unicode字符串作为属性名
  * 更准确说法: 该表达式必须求值为一个字符串或一个可以转换为字符串或符号的值.


```javascript
let author = book.author;  //取得book的author属性
let name = author.name; //取得author的'name'属性
let title = book['main title']; //取得book的'main title'属性
```

要创建或设置属性,与查询属性一样,,使用点或方括号,但它们会放在赋值表达式的左边.

```javascript
book.edition = 8
```



属性名的类型

* **字符串** 如果你使用string（字面量）以外的其他值作为属性名，那它首先会被转换为一个字符串。

可计算属性名

* 通过<u>表达式</u>来计算属性名,来获取相应的属性名.

* 可计算属性名最常用的场景可能是ES6的符号（Symbol）

```javascript
let obj = {
  [Symbol.Something] : 'hello world'
}
```



#### 属性设置中的继承

为对象o的属性x赋值,有三种情况:

1. 如果o有一个名为x的自有(非继承)属性,赋值行为会修改已有x属性的值
2. 如果o没有名为x的属性, 则会在对象o上创建一个名为x的属性
3. 如果o之前继承了x,现在这个<span style="color:red">继承的属性</span>会被新赋值的同名属性<span style="color:red">覆盖.</span>

属性赋值查询原型链只为确定是否允许赋值. 如果o继承了一个名为x的只读属性,则不允许赋值.注意: 如果允许赋值,则只会在原始对象上创建或设置属性,而不会修改原型链中的对象.

<span style="color:red">查询属性时会用到原型链, 设置属性时不影响原型链是重要的JS特性</span>



#### 访问不存在的属性

**类型**

属性访问表达式并不能总是会返回或设置值. 在null 或 undefined上设置属性也会导致TypeError.

<span style="color:blue">查询不存在的属性不是错误</span>. 如果在o的自有属性和继承属性中都没有找到属性x, 则属性访问表达式`o.x`的求值结果为 `undefined`. 

<span style="color:blue">查询不存在的对象的属性则是错误</span>.因为null或undefined没有属性,查询这两个值得属性是错误.

##### 如何避免 3种

```javascript
//简单却麻烦写法
let surname = undefined
if (book) {
  if (book.author) {
    surname = book.author.surname
  }
}

//取得surname,null或undefined的简洁惯用技术
surname = book && book.author && book.author.surname

//ES2020 可选链操作符 ?.
let surname = book?.author?.suranme
```



##### **属性设置失败的情况**  ????

在对象o上设置属性p在以下情况会失败:

* o有一个只读自有属性p: 不能设置只读属性
* o有一个只读继承属性p: 不能用同名自有属性隐藏只读继承属性
* o没有自有属性p,o没有继承通过设置方法定义的属性p,o的extensible特性是false. 因为p在o上不存在,如果没有要调用的设置方法,那么p必须要添加到o上. 但如果o不可扩展(extensibl为false),则不能再它上面定义新属性.





#### 读取对象的属性发生了什么?

在语句规范中, `obj.a`在obj上实际上是实现了[[Get]]操作(有点像函数调用: `[[Get]]()` ).

* 对象默认的内置`[[Get]]`操作, 首先在对象中查找是否有名称相同的属性,如果有就返回属性的值.
* 如果没有找到名称相同的属性,`[[Get]]`算法会从原型链上查找属性.
* 如果找不到, 返回值undefined



#### 赋值对象的属性发生了什么??

如果已经存在这个属性，[[Put]]算法大致会检查下面这些内容。

1．属性是否是访问属性(getter) ？如果是并且存在setter就调用setter。

2．属性的数据描述符中writable是否是false？如果是，在非严格模式下静默失败，在严格模式下抛出TypeError异常。

3．如果都不是，将该值设置为属性的值。

如果属性不存在,  第五章.(你不知道的JS)



#### 属性和方法的区别

如果访问的对象属性是一个函数, 把对象内部引用的函数称为“方法”似乎有点不妥。

严格来说，函数永远不会“属于”一个对象.

> 来自 本文件中的this->隐式绑定

* 因为JavaScript是基于函数作用域的(ES6中增加了块作用域),<span style="color:blue">JavaScript中的对象没有作用域的概念.</span>

* <span style="color:blue">对象属性函数的作用域是全局对象</span>,你可以在其内部中访问全局变量,但是不能访问到对象中的属性, <span style="color:blue">也就是说属性函数的作用域链上并不包含这个对象</span>, 如果要访问对象中的属性,只能在函数里使用this.'属性'来访问,并且对函数的调用方式是obj.fn()



#### 重复的对象字面量属性

ECMAScript 5严格模式中加入了对象字面量重复属性的校验，当同时存在多个同名属性时会抛出错误。

但是在ECMAScript6中重复属性检查被移除了，无论是在严格模式还是非严格模式下，代码不再检查重复属性，**对于每一组重复属性，都会选取最后一个取值**.

```javascript
//ES6
'use strict'
let person = {
  name: 'Nicholas',
  name: 'Greg'
};
console.log(person.name); //'Greg'
```





### 删除属性

#### 概述

delete操作符用于从对象中移除属性.它唯一的操作数应该是一个属性访问表达式. 它并不操作属性的值,而是操作属性本身.

delete操作符只删除自有属性,不删除继承属性(要删除继承属性,必须从定义属性的原型对象上删除.这样做会影响继承该原型的所有对象)

#### 返回值

如果delete操作成功或没有影响(如删除不存在的属性),则delete表达式求值为true. 

对非属性访问表达式(无意义地)使用delete,同样也会求值为true:

```javascript
let o = {x : 1}
delete o.x //true 删除属性x
delete o.x //true 什么也不做仍然返回true
delete o.toStrin //true 什么也不做(toString不是自有属性)
delete 1 // true. 无意义,仍然返回true
```

#### 其他情况

##### configurable

delete不会删除configurable属性为false的属性.

<u>那些属性是不可配置的呢?</u>

* 通过变量声明或函数声明创建的全局对象的属性
* 某些内置对象的属性

获取这些对象属性的configurable的值,可通过`Object.getOwnPropertyDescriptor()`来获取, 其值为布尔值.

##### 严格模式与非严格模式

* 在严格模式下,删除不可配置的属性会导致TypeError. 在非严格模式下,delete直接求值为false
* 在非严格模式下删除全局对象可配置的属性时,可省略对全局对象的引用,只在delete操作符后面加上属性名
* 在严格模式下,如果操作数是一个像x这样的非限定标识符,delete会抛出SyntaxError, 即必须写出完整的属性访问表达式.

### 测试属性

检查对象是否有一个给定名字的属性,

* 直接查询

* in操作符
* hasOwnProperty()
* propertyIsEnumerable()

in**操作符**

in操作符要求左边是一个属性名,右边是一个对象. 如果对象包含相应名字的自有属性或继承属性,将返回true.

**hasOwnProperty()**

用于测试对象是否有给定名字的属性, 对继承的属性它返回false

**propertyIsEnumerable()**

细化了hasOwnproperty()方法. 如果传入的属性是自有属性且这个属性的enumerable特性为true, 这个方法返回true.

某些内置属性是不可枚举的,使用常规JS代码创建的属性都是可枚举的,除非使用Object.defineProperty创建不可枚举的属性.

**最简单的方式**

* in
* 属性查询`obj.a !== undefined`

```javascript
let o = {x:1}
o.x !== undefined //true o有属性x
o.y !== undefined //false o没有属性y
o.toString !== undefined //true  o继承了toString属性
```



两者的区别:

in可以区分不存在的属性和存在但仍被设置为undefined的属性.

```javascript
let o = {x:undefined}
o.x !== undefined //false 
o.y !== undefined //false 属性y不存在
'x' in o //true
'y' in o //false
delete o.x
'x' in o //false

```



#### 判断属性存在与否

例如,如何区分访问对象属性的值为undefined时,其是否是显式声明的undefined还是不存在?

可以在不访问属性值的情况下判断对象中是否存在这个属性：

* `in`操作符: 检查属性名是否在对象及其[[Prototype]]原型链中
* `hasOwnProperty`只会检查属性是否在对象中,不检查原型链
  * `Object.create(null)` 没有原型,无法使用`has...`
  * 强制解决: `Object.prototype.hasOwnProperty.call(obj, 'a')`





### 枚举属性

#### 5种方式

遍历或获取对象的所有属性,有 5 种方式:

* for...in
* Object.keys()
* Object.getOwnPropertyNames()
* Object.getOwnPropertySymbols()
* Reflect.ownkeys()

##### for...in

> for...in循环对指定对象的每个可枚举(自有或继承)属性都会运行一次循环体. 根据书中所指,这里的继承是指Object.create()继承了自己写的一个对象.
>
> 对象继承的内置方法是不可枚举的

```javascript
let o = {x:1, y:2, z:3}
o.propertyIsEnumerable('toString') //false  toString不可枚举(也不是自有属性)
for (let p in o) {
  console.log(p);  //打印x,y,z, 但没有toString
}
```

为防止for...in枚举继承的属性,可以在循环体内加一个显示测试

```javascript
for (let p in o) {
  if (!o.hasOwnProperty(p)) continue //跳过继承属性
}

for (let p in o) {
  if (typeof o[p] === 'function') continue //跳过所有方法
}
```



除了使用for...in循环,有时候可以先获取对象所有属性名的数组,然后再通过for/of循环遍历数组. 有4个函数可以获取属性名数组:

##### Object.keys()

返回对象可枚举自有属性的数组. 不包含不可枚举属性, 继承属性或名字是符号的属性.



##### Object.getOwnPropertyNames()

与Object.keys()类似, 但也返回不可枚举自有属性名的数组, 只要他们的名字是字符串.

##### Object.getOwnPropertySymbols()

返回名字是符号的自有属性,无论是否可枚举.

Reflect.wonkeys()

返回所有属性名,包括可枚举和不可枚举属性,以及字符串属性和符号属性.

#### 属性枚举顺序

> ES6正式定义了枚举对象自有属性的顺序. 
>
> Object.keys(), Object.getOwnPropertyNames(), Object.getOwnPropertySymbols(), Reflect.ownKeys()及JSON.stringify()等相关方法都按照下面的顺序列出属性, 另外也受限于它们要列出不可枚举属性还是列出字符串属性或符号属性.

1. 先列出名字非负整数的字符串属性, 按照数值顺序从最小到最大. 这条规则意味着数组和类数组对象的属性会按照顺序被枚举
2. 在列出类数组索引的所有属性之后,再列出所有剩下的字符串名字(包括看来器想负数或浮点数的名字)的属性. 这些属性按照它们添加到对象的先后顺序列出. 对于在对象字面量中定义的属性,按照它们在字面量中出现的顺序列出.
3. 最后, 名字为符号对象的属性按照它们添加到对象的先后顺序列出.



for...in循环的枚举顺序并不像上述枚举函数那么严格,但实现通常会按照上面描述的顺序枚举自有属性, 然后再沿原型链上溯,以同样的顺序枚举每个原型对象的属性. 不过要注意, 如果已经有同名属性被枚举过了,甚至如果有一个同名属性是不可枚举的, 那么这个属性就不会枚举了.







#### ES5和ES6属性枚举的区别

>  ECMAScript 5中未定义对象属性的枚举顺序，由JavaScript引擎厂商自行决定。然而，ECMAScript6严格规定了对象的自有属性被枚举时的返回顺序，这会影响到Object.getOwnPropertyNames()方法
>
>  Reflect.ownKeys返回属性的方式，
>
>  Object.assign()方法处理属性的顺序.



#### 自有属性枚举顺序规则

* 所有数字键按升序排序
* 所有字符串键按照他们被加入对象的顺序排序
* 所有Symbol键按照他们被加入对象的顺序排序

 ```javascript
let obj = {
  a: 1,
  0: 1,
  c: 1,
  2: 1,
  b: 1,
  1: 1
};

obj.d = 1;

console.log(Object.getOwnPropertyNames(obj).join('')); '012acbd'
 ```

**注意**

对于for-in循环，由于并非所有厂商都遵循相同的实现方式，因此<span style="text-decoration:underline wavy">仍未指定一个明确的枚举顺序</span>；而<span style="text-decoration:underline double red;">Object.keys()方法和JSON.stringify()方法都指明与for-in使用相同的枚举顺序，因此它们的枚举顺序目前也不明晰。</span>

#### for...in枚举

`for...in`语句以任意顺序遍历一个对象的除了[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性.

**数组迭代和for...in的关系**

for...in不应该用于迭代一个关注索引顺序的Array

`for ... in`是为遍历对象属性而构建的，不建议与数组一起使用，数组可以用`Array.prototype.forEach()`和`for ... of`处理有`key-value`数据（比如属性用作“键”），需要检查其中的任何键是否为某值的情况时，还是推荐用`for ... in`

**仅迭代自身的属性?**

如果你只要考虑对象本身的属性，而不是它的原型，那么使用 [`Object.getOwnPropertyNames()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) 或执行 [`Object.prototype.hasOwnProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 来确定某属性是否是对象本身的属性（也能使用[`propertyIsEnumerable`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)）



```js
//作用
for-in 来枚举对象中的属性及原型上的属性
//语法:
	for(let 变量 in 对象){
		语句...
	}
    
//for...in无法对symbol私有属性遍历
let sys = Symbol();
const obj = {
  name:'jack',
  [symbol]:'objSymbol'
}
for(let i in obj){
  console.log(i); //只能打印name属性
}
	
//示例 for...in遍历自身及原型上的属性
let obj ={a:1, b:2, c:3};
function addObj(){
	this.d = 4;
}
addObj.prototype = obj;
let newObj = new addObj;
for(let i in newObj){
  console.log(i);  //d a b c
};
 
//示例 hasOwnProperty+for...in
let obj = {a:1,b:2,c:3};
function addObj(){
  this.d = 4;
}
addObj.prototype = obj;
let newObj = new addObj;
for(let i in newObj){
  if(newObj.hasOwnProperty(i)){
    console.log(i); //d
  }
}
```



#### 遍历对象循环方式的比较

> 枚举 enumerable  可数的,可列举的,可枚举的
>
> 遍历 traverse
>
> 迭代 iterator

```js
for循环 for..in    for..of  object.keys()

forEach 是数组的一个方法，主要页是用来遍历数组的，效率最高，但是不可以使用continue和break
for循环是js当中最简单的遍历方法  主要是针对数组进行遍历的，效率不高，但是可以使用continue和break
for..in 循环主要是用来遍历对象的（遍历对象的可枚举属性的） 效率最低，原因是因为不但要遍历自身的属性还要遍历原型的

for..of 是es6里面新加的一种遍历方法（前提必须是可迭代对象），效率没有forEach高（比其它的要高），也可以使用continue和break，for..of只能针对可迭代对象

遍历对象最快的方法也是使用forEach 是把对象属性转化为数组然后进行遍历
Object.keys(searchParams) 是把一个对象转化为数组，这个数组当中存储的是这个对象所有的属性
```



### 扩展对象

在JS程序中,把一个对象的属性复制到另一个对象上是很常见的,使用下面的代码很容易实现:

```javascript
let target = {x: 1}, source = {y:2, z:3}

for (let key of Object.keys(source)) {
  target[key] = source[key]
}

target //{x:1, y:2, z:3}
```

因为这是个常见操作,各个JS框架纷纷定义了辅助函数,一般定义为extend()函数. 在ES6中,这个能力以Object.assign()的形式进入核心JS语言.

#### Object.assign

**使用概述**

object.assign接受两个或多个对象作为参数. 它会修改并返回第一个参数,第一个参数是目标对象,但不会修改第二个及后续参数,那些事来源对象. 对于每个来源对象,它会把该对象的<span style="color:red">可枚举自有属性(包括名字为符号的属性)</span>复制到目标对象. 它按照参数列表顺序逐个处理来源对象,第一个来源对象的属性会覆盖目标对象的同名属性,而第二个来源对象(如果有)的属性会覆盖第一个来源对象的同名属性.

Object.assign以普通的属性获取和设置方式复制属性. 因此如果一个来源对象有获取方法或目标对象有设置方法, 则他们会在复制期间被调用, 但这些方法本身不会被复制.

**使用原因**

将属性从一个对象分配到另一个对象的一个原因是, 如果有一个默认对象为很多属性定义了默认值,并且如果该对象中不存在同名属性,可以将这些默认属性复制到另一个对象中.

但是像下面这样简单的使用Object.assign不会达到目的:

```javascript
Object.assign(o, defaults) //用default覆盖o的所有属性
```

此时,需要一个新对象,先把默认值复制到新对象中,然后再使用o的属性覆盖那些默认值:

```javascript
o = Object.assign({}, default, o)
```

同时,ES6中新增了扩展操作符也可以表达这种对象复制和覆盖操作:

```javascript
o = {...defaults, ...o}
```

为了避免额外的对象创建和复制, 也可以重写Object.assign(), 只复制那些不存在的属性:

```javascript
// 与Object.assign类似,但不覆盖已经存在的属性
// (同时也不处理符号属性)

function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) { //这里跟Object.assign不同
        target[key] = source[key]
      }
    }
  }
  return target
}
```





### 序列化对象

**对象序列化(serialization)**是把对象的状态转换为字符串的过程,之后可以从中恢复对象的状态.

函数JSON.stringify() 和 JSON.parse() 用于序列化和恢复JS对象. 这两个函数使用JSON数据交换格式. JSON表示JavaScript Object Notation(JavaScript 对象表示法), 其语法与JavaScript对象和数组字面量非常相似.

```JavaScript
let o = {x:1, y:{z:[false, null, '']}} //定义一个对象
let s = JSON.stringify(o); //s == '{"X":1, "y":{"z": [false, null, ""]}}'
let p = JSON.parse(s);     //p == {x:1, y:{z:[false, null, '']}}
```

#### JSON语法概述

**概述**

JSON语法是JS语法的子集,不能表示所有的JS的值. 可以序列化和恢复的值包括<span style="color:blue">对象/数组/字符串/有限数值/true/false/null</span>.

<span style="color:red">NaN/Infinity/-Infinity</span>会被序列化成null. 

日期对象会被序列化成ISO格式的日期字符串(参见Date.toJSON()函数),但JSON.parse()会保持其字符串形式,不会恢复原始的日期对象.

<span style="color:red">函数/RegExp/Error对象/undefined值</span>不能被序列化或修复.

JSON.stringify只序列化对象的可枚举自有属性. 如果属性值无法序列化,则该属性会从输出的字符串中删除.

JSON.stringify()和JSON.parse()都接收可选的第二个参数,用于自定义序列化及恢复操作.











#### 6. 方法定义

> 对象属性也可以是一个[函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)、[getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)、[setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)方法。

```javascript
var o = {
  property: function([parameters]) {},
  get property() {},
  set property(value) {}
}

//ES2015引入简短写法, 'function'关键字可以省略

//shorthand method names(ES6)
let o = {
  property([parameters]) {},
  get property() {},
  set property(value) {}
}
```

ECMAScript 2015 提供了一种简明地定义以生成器函数作为值的属性的方法。

```javascript
var o = {
  * generator() {
    //
  }
}

//ES5中可以这样写(需要注意的是 ES5 没有生成器)
var o = {
  generatorMehtod: function *() {
    //
  }
}
```



#### 7. 计算属性名

见15.可计算属性名

#### 8. 扩展属性

ECMAScript 提案（第3阶段）的[剩余/扩展属性](https://github.com/tc39/proposal-object-rest-spread)将[扩展](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)属性添加到对象文字。它将自己提供的对象的枚举属性复制到一个新的对象上。

使用比[`Object.assign()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)更短的语法，可以轻松克隆（不包括原型）或合并对象。

```javascript
```

**注意**:  `Object.assign()`会触发`setter`,而展开操作符不会.



#### 9. 变更原型

定义属性为`__proto__: 值` 或 `"__proto__": 值 `<span style="color: red;">不会创建</span>一个名称为`__proto__`的属性. 相反, 如果提供的值是一个对象或`null`, 会更改创建对象的`[[prototype]]`的值. (<span style="color:red; font-weight: bold;">如果这个值不是一个对象或`null`,这个对象不会发生变化</span>)

```javascript
let obj1 = {};
console.log(Object.getPrototypeOf(obj1) === Object.prototype); //true

let obj2 = {__proto__: null};
console.log(Object.getPrototypeOf(obj2) === null); //true

let protoObj = {};
let obj3 = {'__proto__': protoObj};
console.log(Object.getPrototypeOf(obj3) === protoObj);//true

let obj4 = {__proto__ : 'not an object or null'};
console.log(Object.getPrototypeOf(obj4) === Object.prototype); //true
console.log(!obj4.hasOwnProperty('__proto__')); //true
```

对象中只允许一次原型变更,多次变更会报语法错误.

不用冒号的属性定义不会原型变更.

> Property definitions that do not use 'colon' notation are not prototype mutations. They are property definitions that behave identically to similar definitions using any other name.

不使用冒号标记的属性定义,不会变更对象的原型;而是和其他具有不同名字的属性一样是普通属性定义.

```javascript
let __proto__ = 'variable';

let obj1 = {__proto__};
console.log(Object.getPropertyOf(obj1) === Object.prototype); //true
console.log(obj1.hasOwnProperty('__proto__')); //true
console.log(obj1.__proto__ === 'variable'); //true

let obj2 = {__proto__() {return 'hello'}};
console.log(obj2.__proto__() === 'hello'); //true

let obj3 = { ['__prot' + 'o__']: 17};
console.log(obj3.__proto__ === 17); //true
```



#### 10. 对象字面量表示法与JSON

对象字面量表示法和**J**ava**S**cript **O**bject **N**otation是不同的. 不同点有:

- JSON 只允许`"property": value` syntax形式的属性定义。属性名必须用双引号括起来。且属性定义不允许使用简便写法。
- JSON中，属性的值仅允许字符串，数字，数组，`true`，`false`，`null`或其他（JSON）对象。 
- JSON中，不允许将值设置为函数。
-  [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 等对象，经[`JSON.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)处理后，会变成字符串。
- [`JSON.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) 不会处理计算的属性名，会当做错误抛出。



### 创建实例对象的 8 种模式

#### 1.工厂模式

缺点: 对象无法识别,因为所有的实例都指向一个原型

```javascript
function createPerson(name) {
  let o = new Object();
  o.name = name;
  o.getName = function() {
    console.log(this.name);
  };
  return o;
}

let person1 = createPerson('kevin');
```



#### 2.构造函数模式

优点: 实例可以识别为一个特定的类型

缺点: 每次创建实例时，每个方法都要被创建一次



```JavaScript
function Person(name) {
    this.name = name;
    this.getName = function () {
        console.log(this.name);
    };
}

var person1 = new Person('kevin');
```



##### 2.1 构造函数模式优化

优点: 解决了每个方法都要被重新创建的问题

缺点: 不是封装

```javascript
function Person(name) {
  this.name = name;
  this.getName = getName;
}
function getName() {
  console.log(this.name);
}

let person1 = new Person('kevin');
```



#### 3.原型模式

优点：方法不会重新创建

缺点：1. 所有的属性和方法都共享 2. 不能初始化参数

```javascript
function Person() {}

Person.prototype.name = 'kevin';
Person.prototype.getName = function() {
  console.log(this.name);
}

let person1 = new Person();
```



##### 3.1 原型模式优化

优点：封装性好了一点

缺点：重写了原型，丢失了constructor属性

```javascript
function Person() {}

Person.prototype = {
  name: 'kevin',
  getName: function() {
    console.log(this.name);
  }
};

let person1 = new Person();
```



##### 3.2 原型模式优化二

优点：实例可以通过constructor属性找到所属构造函数

缺点：原型模式该有的缺点还是有

```javascript
function Person() {}

Person.prototype = {
  constructor: Person,
  name: 'kevin',
  getName: function() {
    console.log(this.name);
  }
};

let person1 = new Person();
```



#### 4.组合模式

构造函数模式与原型模式双剑合璧。

优点：该共享的共享，该私有的私有，使用最广泛的方式

缺点：有的人就是希望全部都写在一起，即更好的封装性

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  getName: function() {
    console.log(this.name);
  }
};

let person1 = new Person();
```



#### 5.动态原型模式

```javascript
function Person(name) {
  this.name = name;
  if (typeof this.getName !== 'function') {
    Person.prototype.getName = function() {
      console.log(this.name);
    }
  }
}

let person1 = new Person();
```

注意：使用动态原型模式时，不能用对象字面量重写原型

解释下为什么：

```javascript
function Person(name) {
  this.name = name;
  if (typeof this.getName !== 'function') {
    Person.prototype = {
      constrcutor: Person,
      getName: function() {
        console.log(this.name);
      }
    }
  }
}

let person1 = new Person('kevin');
let person2 = new Person('daisy');

//报错 并没有该方法
person1.getName();

//注释掉上面的代码,这句是可以执行的
person2.getName();
```

为了解释这个问题，假设开始执行`var person1 = new Person('kevin')`。

如果对 new 和 apply 的底层执行过程不是很熟悉，可以阅读底部相关链接中的文章。

我们回顾下 new 的实现步骤：

1. 首先新建一个对象
2. 然后将对象的原型指向 Person.prototype
3. 然后 Person.apply(obj)
4. 返回这个对象

注意这个时候，回顾下 apply 的实现步骤，会执行 obj.Person 方法，这个时候就会执行 if 语句里的内容，<u>注意构造函数的 prototype 属性指向了实例的原型，使用字面量方式直接覆盖 Person.prototype，并不会更改实例的原型的值，person1 依然是指向了以前的原型，而不是 Person.prototype。</u>而之前的原型是没有 getName 方法的，所以就报错了！((划线部分: 关于原型链以前的理解是有问题的. 我以为新建实例对象的原型会一直指向构造函数原型, 无论构造函数原型如何变化. 这是错误的, 因为实例原型只有过一次被赋值的行为, 再执行构造函数内部代码并更改函数原型并不会再影响实例原型啊,  背诵原型图后想当然以为这个关系是实时的一直存在的.))

如果你就是想用字面量方式写代码，可以尝试下这种：

```javascript
function Person(name) {
  this.name = name;
  if (typeof this.getName !== 'function') {
    Person.prototype = {
      getName: function() {
        console.log(this.name);
      }
    }
    return new Person(name);
  }
}


let person1 = new Person('kevin');
let person2 = new Person('daisy');

person1.getName(); //kevin
person2.getName(); //daisy
```



#### 6.寄生构造函数模式

```javascript
function Person(name) {
  let o = new Object();
  o.name = name;
  o.getName = function() {
    console.log(this.name);
  }
  return o;
}

let person1 = new Person('kevin');
console.log(person1 instanceof Person); //false
console.log(person1 instanceof Object); //true
```

寄生构造函数模式，我个人认为应该这样读：

<u>寄生-构造函数-模式，也就是说寄生在构造函数的一种方法。</u>

也就是说打着构造函数的幌子挂羊头卖狗肉，你看创建的实例使用 instanceof 都无法指向构造函数！

这样方法可以在特殊情况下使用。比如我们想<span style="text-decoration: underline wavy;">创建一个具有额外方法的特殊数组，但是又不想直接修改Array构造函数</span>，我们可以这样写：

```javascript
function specialArray() {
  let values = new Array();
  
  for (let i=0, len=arguments.length; i<len; i++) {
    values.push(arguments[i]);
  }
  
  values.toPipedString = function() {
    return this.join('|');
  }
  return values;
}

let colors = new SpecialArray('red', 'blue', 'green');
let colors2 = SpecialArray('red2', 'blues', 'green2');

console.log(colors);
console.log(colors.toPipedString()); // red|blue|green

console.log(colors2);
console.log(colors2.toPipedString()); // red2|blue2|green2

```

你会发现，其实所谓的寄生构造函数模式就是比工厂模式在创建对象的时候，多使用了一个new，实际上两者的结果是一样的。

但是作者可能是希望能像使用普通 Array 一样使用 SpecialArray，虽然把 SpecialArray 当成函数也一样能用，但是这并不是作者的本意，也变得不优雅。????

<u>在可以使用其他模式的情况下，不要使用这种模式。</u>

但是值得一提的是，上面例子中的循环：

```javascript
for (let i=0, len=arguments.length; i<len; i++) {
  values.push(arguments[i]);
}
```

可以替换成:

```javascript
values.push.apply(values, arguments);
[].push.apply(values, arguments);
```



#### 7.稳妥构造函数模式

```javascript
function Person(name) {
  let o = new Object();
  o.sayName = function() {
    console.log(name);
  };
  return o;
}

let person1 = person('kevin');

person1.sayName(); //'kevin'

person1.name = 'daisy';
person1.sayName(); //kevin

console.log(person1.name); //daisy
```

所谓**稳妥对象，指的是没有公共属性，而且其方法也不引用 this 的对象。**

与寄生构造函数模式有两点不同：

1. 新创建的实例方法不引用 this
2. 不使用 new 操作符调用构造函数

稳妥对象最适合在一些安全的环境中。

稳妥构造函数模式也跟工厂模式一样，无法识别对象所属类型。



### 对象的属性+不变性

> 在JS中,对象属性分为两类: 数据属性和访问器属性. 

在创建普通属性时属性描述符会使用默认值，我们也可以使用Object.defineProperty(..)来添加一个新属性或者修改一个已有属性（如果它是configurable）并对特性进行设置。



#### 1. 数据属性

> 数据属性包含的是一个数据的位置,在这可以对数据值进行读写.

##### 1.1 数据属性的4个属性描述符

<span style="color:blue;">**configurable** 可配置</span>

* 只要属性是可配置的，就可以使用defineProperty(..)方法来修改属性描述符;

* 把configurable修改成false是单向操作，无法撤销！

* 即便属性是`configurable:false`，我们还是可以把writable的状态由true改为false，但是无法由false改为true。

* 除了<span style="color:blue">无法修改</span>，configurable:false还会<span style="color:blue">禁止删除</span>这个属性：

如果对象的某个属性是某个对象/函数的最后一个引用者，对这个属性执行delete操作之后，这个未引用的对象/函数就可以被垃圾回收。但是，不要把delete看作一个释放内存的工具（就像C/C++中那样），它就是一个删除对象属性的操作，仅此而已。





<span style="color:blue;">**enumerable** 可枚举</span>

这个描述符控制的是属性是否会出现在对象的属性枚举中，比如说for..in循环

* 设置成false，这个属性就不会出现在枚举中，可以正常访问它。

* 设置成true就会让它出现在枚举中。



<span style="color:blue;">**writable **可写</span>

writable决定是否可以修改属性的值。

如果其值为 false, 那么更新对应的属性值,不会发生变化;如果在严格模式下重写会报错.

可以把`writable:false`看作是属性不可改变，相当于你定义了一个空操作setter。严格来说，如果要和`writable:false`一致的话，你的setter被调用时应当抛出一个`TypeError`错误。

```javascript
'use strict'

let myObject = {};

Object.defineProperty(myObject, 'a', {
  value: 2,
  writable: false,
  enumerable: true,
  configurable: true
})

myObject.a = 3; //TypeEror
```



<span style="color:blue;">**value **值</span>

包含该属性的数据值. 默认为undefined.



##### 1.2 修改数据属性的默认特性

修改属性的默认特性用到方法`Object.defineProperty()`方法, 它有3个参数: 属性所在的对象, 属性名, 一个描述符对象.

```js
Object.defineProperty(person, 'name', {
  writable: false,
  value: 'newmack',
  configurable: false,
  enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

//执行到这里会报错, 因为configurable设置为false,后面就不能对该属性的4个特性进行修改 Uncaught ReferenceError: person is not defined
Object.defineProperty(person, 'name', {configurable: true});

//person.name = 'lucy'; 由于writable为false,代码执行到这里会报错  Uncaught ReferenceError: person is not defined
//delete person.name    由于configurable为false, 代码执行到这里会报错. 
//enumerable为false的属性, 不能通过for-in循环返回
```





#### 2. 访问器属性 getter/setter

##### 概述

> 除了对象的**数据属性**(即有一个名字和普通的值)之外, JS还支持为对象定义**访问器属性**(accessor property), 这种属性不是一个值,而是一个或两个访问器方法: 一个获取方法(getter), 一个设置方法(setter).
>
> 访问器属性不能直接定义，要通过Object.defineProperty()这个方法来定义。

当程序<u>读取一个访问器属性</u>的值时,JS会调用获取方法(不传参数). 这个方法的返回值就是属性访问表达式的值. 

当程序<u>设置一个访问器属性</u>的值时,JS会调用设置方法,传入赋值语句右边的值. 设置方法的返回值会被忽略.

如果一个属性既有获取方法也有设置方法,则该属性是一个<span style="color:blue">可读写属性. </span>

如果只有一个获取方法,那它就是<span style="color:blue">只读属性</span>.

如果只有一个设置方法,那它就是<span style="color:blue">只写属性</span>(这种属性通过数据属性是无法实现的),读取这种属性始终会得到undefined.



对象默认的[[Put]]和[[Get]]操作分别可以控制属性值的设置和获取。

在ES5中可以使用getter和setter部分改写默认操作，但是只能应用在单个属性上，无法应用在整个对象上。

getter是一个隐藏函数，会在获取属性值时调用。

setter也是一个隐藏函数，会在设置属性值时调用。

**访问描述符**: 定义了getter、setter或者两者都有的一个属性. JS会忽略其value和writable,取而代之的是关心set和get,configurable,enumerable.

**数据描述符**: 和上面相对,没有定义getter, setter

如何定义getter/setter



**定义**

访问器属性可以通过对象字面量的一个扩展语法来定义(获取方法/设置方法是在ES5中引入的):

```javascript
let o = {
  //一个普通的数据属性
  dataProp: vaule,
  
  //通过一对函数定义的一个访问器属性
  get accessorProp() { return this.dataProp },
  set accessorProp(value) { this.dataProp = vaule }
}
```

访问器属性是通过一个或两个方法来定义的,方法名就是属性名.除了前缀是get和set之外,这两个方法看起来就想用ES6简写语法定义的普通方法一样(在ES6中,也可以使用计算的属性名来定义获取方法和设置方法. )

访问器属性的复杂操作

```Javascript
let p = {
  //x y 是常规的可读写属性
  x: 1.0,
  y: 1.0,
  
  //r是由获取和设置方法定义的可读写访问器属性
  get r() { return Math.hypot(this.x, this.y)},
  set r(value) {
    let oldvalue = Math.hypot(this.x, this.y)
    let ratio = newvalue / oldvalue
    this.x *= ratio
    this.y *= ratio
  },
  
  //theta是一个定义了获取方法的只读访问器属性
  get theta() { return Math.atan2(this.y, this.x )}
}

p.r
p.theta //
```





**继承**

和数据属性一样, 访问器属性也是可以继承的.因此可以把上面定义的p对象作为其他对象的原型.



**实例**

<u>通过获取方法返回随机数</u>

```javascript
//给出一个0-255之间的随机数

const random = {
  get octet() { return Math.floor(Math.random()*256)},
  get uint16() { return Math.floor(Math.random()*65536); },
  get int16() { return Math.floor(Math.random()*65536) - 32768; }
}
```



##### 2.1访问器属性4特性

**configurable**

>  默认为false. 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性

**enumerable**

表示能否通过for-in循环返回属性,默认为false

**Get**

在读取属性时调用的函数,默认值为undefined

**Set**

在写入属性时调用的函数,默认值为undefined

```js
//访问器属性不包含数值,它包含的是一对getter和setter函数. 访问器属性不能像数据一样直接定义,它必须使用Object.defindeProperty()方法来定义

let book = {
  _year = '2017', //下划线表示是内部属性,只能通过对象的方法来读写
  editor: 1
}

Object.defineProperty(book, 'year', {
  get: function () {
    return this._year;
  },
  //若只指定get方法,不指定set方法,那就默认该属性是只读的.
  set: function (newYear) {
    if(newYear !== this._year) {
      this._year = newYear;
      this.editor++;
    }
  }
})

//打印出属性year的特性描述
console.log(Object.definePropertyDescriptor(book, 'year'));
Object {enumearble: false, configurable: false, get:function, set:function}
//关于configurable这个特性，因为访问器属性里面这个特性默认值为false，如果程序后面需要对该属性进行delete操作等，那就在定义访问器属性时，将这个特性设置为true，不然这个会导致后面一些报错的问题。
```



##### 2.2 `for...in`与`enumerable`

`enumerable`属性和`for...in`循环

* `enumerable`值为`true`, 属性会出现在`for...in`循环中
* `enumerable`值为`false`, 属性不会出现在`for...in`循环中
* 无论`enumerable`值为什么, `in`操作符都正常使用

> 注意:
>
> 数组上应用for..in循环有时会产生出人意料的结果，因为这种枚举不仅会包含所有数值索引，还会包含所有可枚举属性



**区分属性是否可枚举的方法**

* `for...in`
* `Object.prototype.propertyIsEnumerable('a')`

`propertyIsEnumerable(..)`会检查给定的属性名是否直接存在于对象中（而不是在原型链上）并且满足`enumerable:true`。



`in`和`hasOwnProperty(..)`的区别在于是否查找[[Prototype]]链，

`Object.keys(..)`和`Object.getOwnPropertyNames(..)`都只会查找对象直接包含的属性。

##### 2.3 如何获取操作符'in'使用的属性列表

（目前）并没有内置的方法可以获取in操作符使用的属性列表.

不过你可以递归遍历某个对象的整条[[Prototype]]链并保存每一层中使用Object.keys(..)得到的属性列表——只包含可枚举属性。

```javascript
let obj = {};
let res = [Object.keys(obj)];

while(true) {
  let proto = Object.getPrototypeOf(obj);
  if (proto === null) return
  
  res.concat(Object.keys(proto))
  obj = proto
}


//Object.prototype中的属性是不可枚举的

Object.getOwnPropertyDescriptor(Object.prototype, 'constructor')

configurable: true
enumerable: false
value: ƒ Object()
assign: ƒ assign()
create: ƒ create()
defineProperties: ƒ defineProperties()
defineProperty: ƒ defineProperty()
entries: ƒ entries()
freeze: ƒ freeze()
fromEntries: ƒ fromEntries()
getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()
getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()
getOwnPropertyNames: ƒ getOwnPropertyNames()
getOwnPropertySymbols: ƒ getOwnPropertySymbols()
getPrototypeOf: ƒ getPrototypeOf()
hasOwn: ƒ hasOwn()
is: ƒ is()
isExtensible: ƒ isExtensible()
isFrozen: ƒ isFrozen()
isSealed: ƒ isSealed()
keys: ƒ keys()
length: 1
name: "Object"
preventExtensions: ƒ preventExtensions()
prototype: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
seal: ƒ seal()
setPrototypeOf: ƒ setPrototypeOf()
values: ƒ values()
arguments: (...)
caller: (...)
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[0]
writable: true
[[Prototype]]: Object
```





#### 3. 不变性

这里的不变性是浅不变性,只会影响目标对象和它的直接属性。如果目标对象引用了其他对象（数组、对象、函数，等），其他对象的内容不受影响，仍然是可变的.



##### 1.对象常量

结合writable:false和configurable:false就可以创建一个真正的常量属性（不可修改、重定义或者删除）

```javascript
let myObj = {};

Object.defineProperty(myObj, 'FAVORITE NUMBER', {
  value: 42,
  writable: false,
  configurable: false
})
```



##### 2.禁止扩展

如果你想禁止一个对象添加新属性并且保留已有属性，可以使用Object.preventExtensions(..)

在非严格模式下，创建属性b会静默失败。在严格模式下，将会抛出TypeError错误。

```javascript
let myObj = {a:2};

Object.perventExtensions(myObj);

myObj.b = 3;
myObj.b; //undefined
```

```javascript
'use strict'
let obj = {a:2}

Object.preventExtensions(obj);

obj.b = 3;
//Uncaught TypeError: Cannot add property b, object is not extensible
```



##### 3.密封

Object.seal(..)会创建一个“密封”的对象，这个方法实际上会在一个现有对象上调用Object.preventExtensions(..)并把所有现有属性标记为configurable:false。

密封之后不仅不能添加新属性，也不能重新配置或者删除任何现有属性（虽然可以修改属性的值）



##### 4.冻结

Object.freeze(..)会创建一个冻结对象，这个方法实际上会在一个现有对象上调用Object.seal(..)并把所有“数据访问”属性标记为writable:false，这样就无法修改它们的值。

这个方法是你可以应用在对象上的级别最高的不可变性，它会禁止对于对象本身及其任意直接属性的修改（不过就像我们之前说过的，这个对象引用的其他对象是不受影响的）。



##### 深度冻结对象的方法

首先在这个对象上调用Object.freeze(..)，然后遍历它引用的所有对象并在这些对象上调用Object.freeze(..)。但是一定要小心，因为这样做有可能会在无意中冻结其他（共享）对象





### Object的属性

#### Object.prototype.constructor

> 返回创建实例对象的`Object`构造函数的引用. 注意, 此属性的值是对函数本身的引用,而不是一个包含函数名称的字符串. 
>
> 对原始类型来说, 如`1`,`true`和`"test"`, 该值只可读. ????

```javascript
console.log(1['constructor']); //f Number() { [native code] }
true['constructor'] = 1
console.log(true['constructor']); //f Boolean() { [native code] }


let obj = {};
obj.constructor = 2;
console.log(obj.constructor); //2
```



**Des**

* all objects (with the execption of objects created with `Object.create(null)` )will have a `constructor` property.
* Objects created without the explicit use of a constructor function (such as object- and array-literals) will have a `constructor` property that points to the Fundamental Object type for that object.

```javascript
let o = {};
o.constructor === Object //true

let o = new Object;
o.constructor === Object //true

let a = [];
a.constructor === Array; //true

let a = new Array;
a.constructor === Array; //true

let n = new Number(3);
n.constructor === Number //true
```



**Examples**

<u>Displaying the constructor of an object</u>



<u>Changing the constructor of an object</u>

One can assign the `constructor` property for any value except `null` and `undefined` since those don't have a corresponding constructor function (like `String`, `Number`, `Boolean` etc,), but values which are primitives won't keep the change (with no exception thrown).

This is due to the same mechanism, which allows one to set any property on primitive values (except `null` and `undefined`) with no effect.

Namely whenever one uses such a primitive as an object an instance of the corresponding constructor is created and discarded right after the statement was executed.

```javascript
let val = null;
val.constructor = 1; //TypeError: val is null

val = 'abc';
val.constructor = Number; //
val.constructor === String //true

val.foo = 'bar'; //an implicit instance of String ('abc') was created and assigned the prop foo

val.foo === undefined; //true, since a new instance of String('abc') was created for this comparison, which doesn't have the foo property.
```

So basically one can change the value of the `constructor` property for anything, except the primitives mentioned above, <span style="color:red;">**note that changing the `constructor` property does not affect the instanceof operator**</span>:

```javascript
let a = [];
a.constructor = String;
a.constructor === String; //true

a instanceof String; //false
a instanceof Array; //true

a = new Foo();
a.constructor = 'bar';
a.constructor === 'bar'; //true


//etc.
```



```javascript
//标红那句话不理解.

// 对象 instanceof 函数

//1. instanceOf 的作用: 一个构造函数的原型是否出现在一个对象原型链上的任意位置

//2.a.constructor = String; 也就是说实例a的隐式原型的值为构造函数的显式原型: a.constructor.prototype

//3.instanceof操作符获取原型使用的是 Object.getPrototypeOf(instance); (具体用的那种方法需要查, 从其方法实现中的代码获取的getPrototypeOf)
	Object.getPrototypeOf(a); //数组的原型

//4. 所以更改构造函数原型不会影响instanceof操作符
```



If the object is sealed/frozen then the change has no effect and no exception is thrown:

```javascript
let a = Object.seal({});

a.constructor = Number;
a.constructor === Number; //false

```



<u>Changing the constructor of a function</u>





### 对象原型方法

ECMAScript其中一个设计目标是：不再创建新的全局函数，也不在Object.prototype上创建新的方法。

从ECMAScript 5开始，避免创建新的全局方法和在Object.prototype上创建新的方法。 当开发者想向标准添加新方法时，他们会找一个适当的现有对象。

而在ECMAScript 6中，为了使某些任务更易完成，在全局Object对象上引入了一些新方法。

#### 实例方法





####   in

```Markdown
in 
	如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。参数prop是指属性名或者数组索引
	语法: '属性名' in 对象   //注意加引号,是字符串.不加引号会被认为是一个变量
	如果对象中有这个属性名,返回true.如果没有返回false
	
	
delete
	用来删除对象中的指定属性,无论有没有这个属性,返回true 
	语法: 
  delete obj.username
  delete obj['a-b']   
	
hasOwnproperty
hasOwnProperty() 检查属性是否存在于对象自身中
```







JS中对象的**属性值**可以是任意类型的数据,也可以是一个对象

```JavaScript
let obj = Object();

obj.age = 18;
obj.test = Object();
obj.test.name = '猪八戒';
obj.test.tt = Object();

```

 

#### delete

**define**

> the delete operator removes a property from an object; if no more references to the same proeprty are held, it is eventually released automatically.(如果没有对同一属性更多的引用, 它最终将自动被释放)

**syntax**

> delete expression

Where expression should evaluate to property references. e.g.:

```javascript
delete obj.property
delete obj['property']
```

**return value**

`true` for all cases except when the proeprty is  an [`own`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)(Object.hasOwnProperty()) [`non-configurable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_delete) property, in which case, `false` is returned in non-strict mode.

**example**

#### toJSON()

Object.prototype并非定义toJSON()方法,但JSON.stringify()方法会从要序列化的对象上寻找toJSON()方法. 如果要序列化的对象上存在这个方法就会调用它,然后序列化该方法的返回值, 而不是原始对象.

Date类定义了自己的toJSON()方法,返回一个表示日期的序列化字符串.

```javascript
let point = {
  x: 1,
  y: 2,
  toString: function() {return `${this.x}, ${this.y}`},
  toJSON: function() { return this.toString() }
}
```



#### 3. Object.prototype.toString()

**Define**

> the method returns a string representing the object.

**Syntax**

```javascript
toString()
```

**Return value**



**Desc**

Every object has a `toString()` method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected(或当以预期字符串方式引用对象时).

By default, the `toString()` method is inherited by every object descended from `Object`. If this method is not overridden in a custom object, `toString()` return `[object type]`, where `type` is the object type. 

The following code illustrates this:

```javascript
const o = new Object();
o.toString(); //[object Object]
```

很多类都会重新定义自己的toString方法.例如,在把数组转换为字符串时,可以得到数组元素的一个列表,每个元素也都会转换为字符串; 把函数转换为字符串时,可以得到函数饿源代码.



Note:

> Starting in JavaScript 1.8.5, 'toString()' called on null returns '[object null]', and undefined returns '[object undefined]', as defined in the 5th Edition of ECMAScript and subsequent Errata.

**Parameters**

For Numbers and BigInts `toString()` takes an optional parameter `radix` the value of radix must be minimun 2 and maximum 36.

By using `radix` you can also convert base 10 numbers(like 1,2,3,4,5,....) to another base numbers, in example blow we are conveting base 10 number to a base 2 (binary) number.

```javascript
let base10Int = 10;
console.log(base10Int.toString(2)); //1010
```

and same for big integers

```javascript
let bigNum = BigInt(20);
console.log(bigNum.toString()); //10100
```



**Examples**

<u>1.Overriding the default toString method</u>

You can create a function to be called in place of the default `toString()` method. The `toString()` method takes no arguments and should return a string. The `toString()` method you create can be any value you want, but it will be most useful if it carries information about the object.

The following code defines the 'Dog' object type and creates 'theDog', an object of type 'Dog':

```javascript
function Dog(name, breed , color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Gabby' , 'Lab', 'chocolate', 'female');
```

If you call the 'toString()' method on this custom object, it returns the default value inherited from `Object`:

```javascript
theDog.toString() //'[object Object]'
```

The following code create and assigns 'dogToString()' to override the default 'toString()' method. This function generates a string containing the 'name breed color and sex'of the object, in the form 'property =value'.

```javascript
Dog.prototype.toString = function dogToString() {
  const ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
  return ret;
}
```

With the preceding code in place, any time `toString()` is used in a `Dog` context, JavaScript automatically calls the `dogToString()` function, which returns the following string:

```javascript
"Dog Gabby is a female chocolate Lab"
```



<u>2.Using toString() to detect object class</u>

`toString()` can be used with every object and (by default) allows you to get its class.

To use the `Object.prototype.toString()` with every object, you need to call [`Function.prototype.call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) or [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) on it, passing the object you want to inspect as the first parameter (called `thisArg`).

```javascript
cosnt toString = Object.prototype.toString;

toString.call(new Date);    // [object Date]
toString.call(new String);  // [object String]
toString.call(Math);        // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined);   // [object Undefined]
toString.call(null);        // [object Null]
```

Using `toString()` in this way is unreliable; objects can change the behavior of `Object.prototype.toString()` by defining a [`Symbol.toStringTag`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property, leading to unexpected results. For example:

```javascript
const myDate = new Date();
Object.prototype.toString.call(myDate);     // [object Date]

myDate[Symbol.toStringTag] = 'myDate';
Object.prototype.toString.call(myDate);     // [object myDate]

Date.prototype[Symbol.toStringTag] = 'prototype polluted';
Object.prototype.toString.call(new Date()); // [object prototype polluted]
```

Note:

```javascript
toString.call(true); //[object Boolean]

'toString' in window' //true
```



#### 4. Object.prototype.valueOf()

**Define**

> this method returns the **primite value** of the specified object

与toString()类似,通常在对象转换为某些非字符串原始值(通常是数值)时被调用.内置的一些类定义了自己的valueOf()方法: Date类的valueOf()可以将日期转换为数值,这样就让日期对象可以通过`< 和 >`操作符进行比较.

**Syntax**

> valueOf()

**Return value**

the primitive value of the specified object.

A [(unary) plus sign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) can sometimes be used as a shorthand for valueOf. e.g. in `+new Number()`.

**Desc**

<u>JavaScript calls the `valueOf` method to convert an object to a primitive value.</u> You rarely need to invoke the `valueOf` method yourself, JavaScript **automatically invoke it** when encountering  an object where a primitive value is expected.

By default, the `valueOf` method is inherited by every object descended from `Object`. Every built-in core object overrides this method to return an appopriate value. **If an object has no primitive value, `valueOf` returns the object iteself.**

<u>You can use `valueOf` within your own code to convert a built-in object into a primitive value.</u> When you create a custom object, you can override `Object.prototype.valueOf()` to call a custom method instead of the default  `Object` method.

Overriding valueOf for custom objects

You can create a function to be called in place of the default `valueOf` method. Your function must take no arguments.

Suppose you have an object type `MyNumberType` and you want to create a `valueOf` method for it. The following code assigns a user-defined function to the object's `valueOf` method.

```javascript
MyNumberType.prototype.valueOf = function() {return customPrimitiveValue;};
```

With the preceding code in place(使用上述代码), any time an object of type `MyNumberType` is used in a context where ti is to be represented as a primitive value,(只要在上下文中使用`MyNumberType`类型的对象,该对象将表示为私有值), JavaScript automatically calls the function defined in the preceding code.

An object's `valueOf` method is usually invoked by JavaScript, but you can invoke it yourself as follows:

```javascript
myNumberType.valueOf()
```

Note:

> Objects in string contexts convert via the 'toString()' method, which is different from 'String' objects converting to string primitive using 'valueOf'. All objects hava a string convertion, if only "[object type]". But many objects do not convert to number, boolean or function.

**Examples**

Using valueOf on custom types

```javascript
function MyNumberType(n) {
  this.number = n;
}
MyNumberType.prototype.valueOf = function() {
  return this.number;
};

let myObj = new MyNumberType(4);
myObj + 3 ;//7
```

Using uary plus

```javascript
+"5" // 5 (string to number)
+"" // 0 (string to number)
+"1 + 2" // NaN (doesn't evaluate)
+new Date() // same as (new Date()).getTime()
+"foo" // NaN (string to number)
+{} // NaN
+[] // 0 (toString() returns an empty string list)
+[1] // 1
+[1,2] // NaN
+new Set([1]) // NaN
+BigInt(1) // Uncaught TypeError: Cannot convert a BigInt value to a number
+undefined // NaN
+null // 0
+true // 1
+false // 0
```





#### Object.prototype.hasOwnProperty()

##### define

> the method returns a boolean indicating whether the object has the specified property as its own property(as opposed to inheriting it)
>
> Note: `Object.hasOwn()` is recommended over `hasOwnProperty()`, in browsers where it it supported.

##### Syntax

> hasOwnProperty(prop)

##### Parameters

`prop`

* The `String` name or `Symbol` of the property to test

##### Return values

> returns `true` if the object has the specified property as own property, `false` otherwise.

##### Desc

* the method returns `true` if the specified property is a direct property of the object --even if the value is `null` or `undefined`.
* the method returns `false` if the property is inherited, or has not been declared at all.
* Unlike the `in` operator, this method does not check for the specified property in the object's prototype chain.
* the method can be called on most JS objects, because most objects descend from `Object`, and hence inherit its methods.
* the method will not be available in objects where it is reimplemented, or on objects created using `Object.create(null)`(as these don't inherit from `Object.prototype`).



#### Object.prototype.toLocalString()

##### 概述

这个方法返回对象的本地化字符串表示.Object定义的默认toLocalString()方法本身没有实现任何本地化,而是简单调用toString()并返回该值. Date和Number类定义了自己的toLocalString()方法, 尝试根据本地管理格式化数值/日期和时间.







### 对象自身方法

#### Object.is

当你想在JavaScript中比较两个值时，多使用全等运算符（===），从而避免在比较时触发强制类型转换的行为。

判断两个值是否为[同一个值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness).  于相等运算符,全等运算符一起可以来判断操作数是否为同一个对象的实例.

与`==`运算符不同,`Object.is`不会强制转换两边的值.

与`===`运算符不同,`Object.is`会将`-0`和`+0`视为不相等,将`Number.NaN`与`NaN`视为相等.

`+0  `和 `-0`在JavaScript引擎中被表示为两个完全不同的实体

ECMAScript 6引入了Object.is()方法来弥补全等运算符的不准确运算。这个方法接受两个参数，如果这两个参数类型相同且具有相同的值，则返回true。

```js
Object.is(value1,value2)

返回值:布尔值

//判断条件:



//示例
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

Object.is(0, -0);            // false 
Object.is(0, +0);            // true
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
Object.is(NaN,NaN);          //true
```

**Object.is与`===`比较**

```javascript
//不同
1.它适用于 NaN：Object.is(NaN，NaN) === true
2.Object.is(0，-0) === false，从技术上讲这是对的，因为在内部，数字的符号位可能会不同，即使其他所有位均为零。

//相同
在所有其他情况下，Object.is(a，b) 与 a === b 相同
```



#### Object.create()

**Define**

> the method creates a new object, using an exist object as the prototype of the newly created object.

**Syntax**

> Object.create(proto)
>
> Object.create(proto, propertiesObject)

**Parameters**

`proto`

* The object which should be the prototype of the newly-created object.

`propertiesObject` optional

* If specified and not undefined, an object whose enumerable own properties(that is , those properties defined upon itself and not enumerable properties along its prototype chain)specify property descriptors to be added to the newly-created object, with the corresponding property names. (如果被指定且不是未定义的, 一个对象的可枚举自身属性(即那些定义在自身的属性, 而不是沿着其原型链的可枚举属性)指定要添加到新创建的对象中的属性描述符,以及相应的属性名.)
* These properties correspond to the second argument of Object.defineProperties().(该对象的属性类型参数Object.defineProperties()的第二个参数)

**Return value**

> A new object with the specified prototype object and properties.

**Exceptions**

The `proto` parameter has to be either(要么是)

* null
* an Object excluding <u>[primitive wrapper objects](https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript)</u>(原始包装对象)

<u>If `proto` is neither of these a TypeError is thrown.</u>

**Custom and Null objects**

> A new object created from a completely custom object (especially one created from the null object, which is basically a custom object with NO members) can behave in unexpected way.
>
> This is especially true when debugging, since common object-property converting/detecting utility functions may generate errors, or lose information(especially if using silent error-traps(静默错误陷阱) that ignore errors).
>
> For example, here are two objects

```javascript
let oco = Object.create({});
let ocn = Object.create(null);

console.log(oco); //{}
console.log(ocn); //{}

oco.p = 1;
ocn.p = 0;

console.log(oco); //{p:1}
console.log(ocn); //{p:0}

'oco is: ' + oco //'oco is: [object Object]'
'ocn is: ' + ocn //throws error: cannot convert object to primitive value.

alert(oco); //shows [object Object]
alert(ocn); //throws error: cannot convert object to primitive value

oco.toString(); //[object Object]
ocn.toString(); //throws error: ocn.toString is not a function

oco.valueOf(); //{}
ocn.valueOf(); //throws error: ocn.valueOf is not a function

oco.hasOwnProperty('p'); //true
ocn.hasOwnProperty('p'); //throws error: ocn.hasOwnProperty is not a function
```



As said, these differences can make debugging(调试) even simple -seeming problems quickly go astray(迷途的).

a simple common debugging function

```javascript
// display top-level property name: value pairs of given object

function ShowProperties(obj) {
  for (let prop in obj) {
    console.log(prop + ': ' + obj[prop] + '\n');
  }
}
```

Not such simple result: (especially if silent error-trapping has hidden the error message)

```javascript
ob = {}; ob.po = oco; ob.pn = ocn;
ShowProperties(ob); //display top-level properties
 - po: [object Object]
 - Error: cannot convert object to primitive value
 
Note that only first property gets show.

//but if the same object is created in a different order  at least in some implementations

ob = {}; ob.pn = ocn; ob.po = oco;
ShowProperties(ob);
-Error: cannot convert object to primitive value

Note that neigher property gets shown.
```

Note that such a different order may arise statically via disparate fixed codings such as here, but also dynamically via whatever the order any such property-adding code-branches actually get executed at runtime as depends on inputs and/or random-variables.[请注意，这种不同的顺序可能通过不同的固定编码（如此处）静态出现，但也可以通过任何此类添加属性的代码分支在运行时实际执行的顺序动态出现，这取决于输入和/或随机变量。]

Then again, the actual iteration order is not guaranteed no matter what the order members are added.

Be aware of , also, that using Object entries() on an object created via Object.create() will rsult in an empty array being returned.

```javascript
let obj = Object.create({a: 1, b: 2});
console.log(Object.entries(obj)); //[]
```

Some NON-solutions

Adding the missing object-method directly from the standard-object does NOT work.

```javascript
ocn = Object.create(null);

ocn.toString = Object.toString;

> ocn.toString //shows 'toString() {[native code]}'
> ocn.toString == Object.toString //true

>ocn.toString() //error: Function.prototypetoString requires that 'this' be a Function
```

Adding the missing object-method directly to new object's 'protptype' does not work either, since the new object does not hava a real prototype (which is really the cause of ALL these problems) and one cannot be directly added:

```javascript
let ocn = Object.create(null);

ocn.prototype.toString = Object.toString; //Error: cannot set property 'toString' of undefined

ocn.prototype = {};
ocn.prototype.toString = Object.toString;

> ocn.toString() //error: ocn.toString is not a function
```

Adding the missing object-method by calling 'Object.setPropertyOf()' with the name of the standard-object itself as the second argument does not work either.

```javascript
ocn = Object.create(null);
Object.setPropertyOf(ocn, Object);//wrong; sets new object's prototype to the Object() function

> ocn.toString() //error: Function.prototype.toString requires that 'this' be a function
```

In addition to all the string-related functions shown above, this also adds:

```javascript
ocn.valueOf(); //{}
ocn.hasOwnProperty('x'); //'false'
ocn.constructor // 'Object() {[native code]}'

// ... and all the rest of the properties and methods of Object.prototype
```



Some OK solutions

* generic method
* generic prototype

adding the missing object-method directly from the standard-object does NOT work. However, adding the **generic method** directly, DOES:

```javascript
ocn = Object.create(null);

ocn.toString = toString;

> ocn.toString() //'[object Object]'
> 'ocn is: ' + ocn; //'ocn is: [object Object]'

ob = {}; ob.pn = ocn; ob.po = oco;

> ShowProeprties(ob);
 - po: [object Object]
 - pn: [object Object]
```

However, setting the **generic prototype** as the new object's prototype works even better.

```javascript
ocn = Object.create(null);
Object.setPropertyOf(ocn, Object.prototype);
```



**Example**

1.组合式继承

```javascript
//Shape superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

//superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.log('Shape moved');
}

//Rectangle  - subclass
function Rectangle() {
  Shape.call(this); //call super constructor
}

//subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle();

console.log('Is rect an instance of Rectangle ?', rect instanceof Rectangle) //true
console.log('Is rect an instance of Shape?', rect instanceof Shape); //true
rect.move(1, 1); //outputs, 'Shape moved'
```

2.Using propertiesObject argument with Object.create()

* by default properties ARE NOT writable, enumerable or configurable:

```javascript
let o;

//create an object with null property
o = Object.create(null);

o = {};
// is equal to :
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  foo: {
    wiritable: true,
    configurable: true,
    value: 'hello'
  },
  bar: {
    configurable: false,
    get: function() {return 10},
    set: function(value) {
      console.log('Setting `o.bar` to', value);
    }
  }
})



function Constructor() {}
o = new Constructor();
//is equivalent to:
o = Object.create(Constructor.prototype);
// Of course, if there is autual initialization code in the constructor function, the Object.create() cannot reflect it.

//Create a new object whose prototype is a new, empty object and add a single property 'p' ,with value 42.
o = Object.create({}, {p: {value: 42}});
// by default properties ARE NOT writable, enumerable or configurable:
o.p = 24;
> o.p //42
o.q = 12;
for (let prop in o) {
  console.log(prop);
}
//'q'

delete o.p;  //false


//to specify an ES3 property
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
// is not equivalent to: o2 = Object.create({p: 42}) this will create an object with prototype
```

**Polyfill**

```javascript
if (typeof Object.create !== 'function') {
  Object.create = function (proto, propertiesObject) {
    throw new TypeError('object prototype may only be an object: ' + proto);
  } else if (proto = null) {
    throw new Error ("this browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    
    if (typeof propertiesObject !== 'undefined') throw new Error("this browser's implementation of Object.create is a shim and doesn't support a second argument.")
  }
  
  function F() {}
  F.prototype = proto;
  return new F();
  
}
```

**如何实现Object.create()方法**

```javascript
//https://juejin.cn/post/7033275515880341512#:~:text=%E5%8F%82%E8%80%83%E4%BB%A3%E7%A0%81-,%E5%AE%9E%E7%8E%B0object.create,-function%20newCreate(proto


function newCreate(proto, propertiesObject) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw TypeError('object prototype may only be an Object')
  }
  
  function F() {};
  F.prototype = proto;
  let obj = new F();
  
  if (propertiesObject !== undefined) {
    Object.keys(propertiesObject).forEach(key => {
      let value = propertiesObject[key];
      if (typeof value !== 'object' || value === null) {
        throw TypeError('Object prototype ....')
      } else {
        Object.defineProperty(obj, key, value);
      }
    })
  }
  return obj;
}
```







#### Object.assign()

**介绍**

> 用于将所有可枚举属性的值从一个或多个源对象分配到目标对象. 它将返回目标对象.

**语法**

```javascript
Object.assign(target, ...sources);
```

**参数**

`target`  目标对象

`sources` 源对象

**返回值**

目标对象

**描述**

* 源对象中的属性会覆盖目标对象中有相同属性的键(key).同样,后面源对象的属性也会覆盖前面相同的属性.
* 此方法只拷贝源对象自身可枚举<span style="color: blue;"><sup>enumerable</sup></span>的属性到目标对象.
* 方法在源对象上使用`[[Get]]`,在目标对象上使用`[[Set]]`,所以它会调用[getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) 和 [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set). 
* 所以,这个方法分配属性,而不仅仅是复制或定义新的属性
* 如果合并的源对象中包含getters,那么合并新属性到原型上是不适合的.(Therefore it assign properties, versus copying or defining new properties.)
* <span style="span:hover{color:red;}">为了将属性定义(包括其可枚举性)复制到原型, 应使用`Object.getOwnPropertyDescriptor()` 代替`Object.defineProperty()`.</span>
* `String` 和 `Symbol` 属性会被拷贝.
* 为了预防错误,,例如,一个属性是不可写的,会出现一个类型错误,如果在报错之前添加了任意属性那么`target`对象会改变.

> Note:
>
> Object.assign() does not throw on `null` or `undefined` source
>
> 不会抛出`null`或`undefined`源



**Polyfill**

这个Polyfill不支持symbol属性,由于ES5中本来就不存在symbols

```javascript
if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict'
      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object')
      }
      
      let to = Object(target);
      
      for (let i=1; i<arguments.length; i++) {
        let nextSource = arguments[i];
        
        if (nextSource !== null && nextSource !== undefined) { //why? 使用 或 不行吗
          for (let nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) { //nextSource.hasOwnProperty
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      
      return to;
    },
    writable: true,
    configurable: true
  })
}
```



**实例**

<u>Cloning an object</u>

```javascript
const obj = {a: 1};
const copy = Object.assign({}, obj);
console.log(copy); //{a: 1}
```



<u>Warning for Deep Clone</u>

For [deep cloning](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy), we need to use alternatives, because `Object.assign()` copies property values.

If the source value is a reference to an object, it only copies the reference value.

```javascript
function test() {
  'use strict';

  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
  console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}

  // Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
}

test();
```



<u>Merging object</u>

```javascript
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

<u>Merging objects with same properties</u>

the properties are overwritten by other objects that have the same properties later in the parameters order.

```javascript
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

<u>Copying symbol-typed properties</u>

```javascript
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

<u>Properties on the prototype chain and non-enumerable properties cannot be copied</u>

```javascript
const obj = Object.create({foo: 1}, {
  bar: {
    value: 2 //bar is a non-enumerable property
  },
  baz: {
    value: 3,
    enumerable: true //baz is an own enumerable property
  }
});

const copy = Object.assign({}, obj);
console.log(copy); //{baz: 3}
```

<u>Primitives will be wrapper to objects</u>

> <span style="color:red;">Note, only string wrappers can have own enumerable properties.</span>

```javascript
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

<u>Exceptions will interrupt the ongoing copying task </u>

```javascript
const target = Object.defineProperty({}, 'foo', {
  value: 1,
  writable: true
});

Object.assign(target, {bar: 2}, {foo2: 3, foo: 3}, {baz: 4});
//TypeError: 'foo' is read-only
//the exception is thrown when assigning target.foo

console.log(target.bar);  // 2, the first source was copied successfully.
console.log(target.foo2); // 3, the first property of the second source was copied successfully.
console.log(target.foo);  // 1, exception is thrown here.
console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
console.log(target.baz);  // undefined, the third source will not be copied either.
```

<u>Copying accessors</u> ????

```javascript
const obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

let copy = Object.assign({}, obj);
console.log(copy); //{foo:1, bar: 2} //the value of copy.bar is obj.bar's getter's return value.

//this is an assign function that copies full descriptors
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {})
    
    //by default, Object.assign copies enumerable Symbols, too
    Object.getOwnPropertySymbol(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}


```















**ES5实现ES6Object.assign()功能**

混合（Mixin）是JavaScript中实现对象组合最流行的一种模式。在一个mixin方法中，一个对象接收来自另一个对象的属性和方法

```javascript
function mixin(receiver, supplier) {
  Object.keys(supplier).forEach(key => receiver[key] = supplier[key]);
}
```

mixin()函数遍历supplier的自有属性并复制到receiver中（<u>此处的复制行为是浅复制，当属性值为对象时只复制对象的引用</u>）。这样一来，receiver不通过继承就可以获得新属性，请参考这段代码：

```javascript
function EventTarget() { }
EventTarget.prototype = {
    constructor: EventTarget,
    emit: function() {},
    on: function() {}
  };

let myObject = {};
mixin(myObject, EventTarget.prototype);

myObject.emit('somethingChanged');
```

在这段代码中，myObject接收EventTarget.prototype对象的所有行为，从而使myObject可以分别通过emit()方法发布事件或通过on()方法订阅事件。

这种混合模式非常流行，因而ECMAScript 6添加了Object.assign()方法来实现相同的功能，这个方法接受一个接收对象和任意数量的源对象，最终返回接收对象。<u>mixin()方法使用赋值操作符（assignment operator）=来复制相关属性，却不能复制访问器属性到接收对象中</u>，因此最终添加的方法弃用mixin而改用assign作为方法名。

任何使用mixin()方法的地方都可以直接使用Object.assign()方法来替换

```javascript
function EventTarget() {}
EventTarget.prototype = {
  constructor: EventTarget,
  emit: function() {},
  on: function() {}
}

let myObject = {};
Object.assign(myObject, EventTarget.prototype);
myObject.emit('somethingChanged');
```

Object.assign()方法可以接受任意数量的源对象，并按指定的顺序将属性复制到接收对象中。所以如果多个源对象具有同名属性，则排位靠后的源对象会覆盖排位靠前的





**Object.assign()** 方法用于**将所有可枚举属性的值**从一个或多个源对象分配到目标对象。它将返回目标对象. 同时它也可以实现**浅拷贝**.因为 `Object.assign()`拷贝的是（可枚举）属性值。

```js
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const target = {a:1,b:2};
const source = {b:3,c:3};

const returnTarget = Object.assign(target,source);

console.log(target);//{ a: 1, b: 4, c: 5 }
console.log(returnTarget);//{ a: 1, b: 4, c: 5 }

//浅拷贝测试
target['e']=5;
console.log(returnTarget.e) //5
```



**访问器属性**

Object.assign()方法不能将提供者的访问器属性复制到接收对象中。由于Object.assign()方法执行了赋值操作，因此<u>提供者的访问器属性最终会转变为接收对象中的一个数据属性.</u>

```javascript
let receiver = {},
    supplier = {
      get name() {
        return 'file.js'
      }
    };

Object.assign(receiver, supplier);

let descriptor = Object.getOwnPropertyDescriptor(receiver, 'name');

console.log(descriptor.value); //'file.js'
console.log(descriptor.get); //undefined
```





#### Object.keys

返回一个由一个给定对象的**自身可枚举属性**组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致.

**不保证对象属性的顺序**,mdn上没有直接说明,只是说明和手动遍历相同.因为迭代的顺序是依赖于浏览器实现的，结论是不保证.

```js
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']
```



```js
//对象中的属性排序,新对象
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
let arr = Object.keys(anObj);
let newObj = {};
for(let i=0;i<arr.length;i++){
  newObj[arr[i]]=anObj[arr[i]]
}
console.log(newObj); //{ '2': 'b', '7': 'c', '100': 'a' }
```





#### Object.values()

> 这个方法返回一个参数对象自身可枚举属性值组成的数组，数组元素顺序和for...in循环相同。(唯一的不同是for...in循环也枚举原型链上的属性)
>
> 描述：
>
> return an array whose elements are the enumerable property values found on the object. the ordering of the properties is the same as that given by looping over the property values of the object manaually.

```javascript
const obj = {
  a: 'something',
  b: 42,
  c: false
};

console.log(Object.values(obj)); //['something', 42, false]

//Array-like object
const arrayLikeObj = {0: 'a', 1: 'b', 2: 'c'};
console.log(Object.values(arrayLikeObj)); //['a', 'b', 'c']

//Array-like object with random key ordering
const arrayLikeObj2 = {100: 'a', 2: 'b', 7: 'c'};
console.log(Object.values(arrayLikeObj2)); //['b', 'c', 'a']

//getFoo is property which isn't enumerable    enumerable默认为false
const my_obj = Object.create({}, {getFoo: {value: function() {return this.foo;}}});
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); //['bar']
```



#### Object.entries()

##### Define

> the method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs. 
>
> This is the same as iterating with a `for...in` loop, excep that a `for...in` loop enumerates properties in the prototype chain as well.
>
> The order of the array returned by `Object.entries()` is the same as that provided by a `for...in` loop. If there is a need for defferent ordering, then the array should be sorted first, like `Object.entries(obj).sort((a, b) => b[0].localCompare(a[0]))`.

##### Syntax

> Object.entries(obj)

##### Parameters

`obj` 

* The object whose own enumerable <u>string-keyed</u><sup>字符串键控</sup> property `[key, value]` pairs are to be returned.

##### Return value

​	An array of the given object's own enumerable string-keyed property `[key, value]` pairs.

##### Desc

* the method returns an array whose elements are arrays corresponding to the enumerable string-keyed property `[key, value]` pairs found directly upon `object`.
* the ordering of the proeprties is the same as that given by looping over the property values of the object manually.

##### Polyfill

​	to add compatible `Object.entries()`support in older enviroments that do not natively support it, you can use any of the following:

- a demonstration implementation of `Object.entries` in the [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) (if you don't need any support for IE);
- a polyfill in the [es-shims/Object.entries](https://github.com/es-shims/Object.entries) repositories;
- or, you can use the simple, ready-to-deploy polyfill listed below:

```javascript
if (!Object.entries) {
  Object.entries = function(obj) {
    let ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); //preallocate the Array
    while(i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    
    return resArray;
  }
}
```

For the above polyfill code snippet, if you need support for IE<9, then you will also need an `Object.keys()` polyfill (such as the one found on the [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) page).



##### Examples ????

```javascript
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable ????
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

Converting an Object to a Map

the `new Map()` constructor accepts an iterable of entries. With `Object.entries`, you can easily convert from `Object` to `Map`:

```javascript
const obj = {foo: 'bar', baz: 42};
const map = new Map(Object.entries(obj));

console.log(map); //Map(2) {'foo' => 'bar', 'baz' => 42}
```

Iterating througn an Object

Using `Array Destructuring`, you can iterate through objects easily:

```javascript
const obj = {foo: 'bar', baz: 42};
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`))
```





#### Object.getPrototypeOf()

##### Define

> the method returns the prototype(i.e the value of the internal [[Prototype]] property) of the specified object

##### Syntax

> Object.getPrototype(bj)

##### Parameters

`obj`

* the object whose prototype is to be returned

##### return value

* the prototype of the given object. 
* <u>If there are no inherited properties, `null` is returned.</u>

##### examples

Using getPrototypeOf

```javascript
let proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(bj) === proto; //true
```

Non-object coercion(强制转换)

In ES5, it will throw a TypeError exception if the obj parameter isn't an object.

In ES2015, the parameter will be coerced to an Object.

```javascript
Object.getPrototypeOf('foo');
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf('foo');
// String.prototype                  (ES2015 code)
```



#### Object.setPrototypeOf() (未完成)

##### Define

> the method sets the prototype of a specified object to another object or null.

##### Warning

> Changing the [[Prototype]] of an object is, by the nature of [how modern JavaScript engines optimize property accesses](https://mathiasbynens.be/notes/prototypes), currently a very slow operation in every browser and JavaScript engine. In addition, the effects of altering inheritance are subtle and far-flung, and are not limited to the time spent in the `Object.setPrototypeOf()` statement, but may extend to any code that ahs access to any object whose `[[Protootype]]` has been altered.
>
> Because this feature is a part of the language, it is still the burden on engine developers to implement that feature performantly(ideally). Until engine developers address this issue, if u are concerned about performance, u should avoid setting the `[[Prototype]]` of an object. Instead, create a new object with the secired `[[Prototype]]` using `Object.create(null)`.

##### Syntax

> Object.setPrototypeOf(obj, prototype)

##### Parameters

`obj`

* the object which is to have its prototype set.

`prototype`

* the object's new prototype(an object or null).

##### return value

* the specified object

##### Desc

* Throws a TypeError exception if the object whose `[[Prototype]]` is to be modified is non-extensible according to `Object.isExtensible()`.
* Does nothing if the `prototype` parameter isn't an object or `null`(i.e., number , string, boolean, or undefined). Otherwise, this method changes the `[[Prototype]]` of `obj` to the new value.
* `Object.setPrototypeOf()` is in the ECMAScript 2015 specification. It is generally considered the proper way to set the prototype of an object, vs. the more controversial `Object.prototype.__proto__` property.





#### Object.prototype.isPrototypeOf()



#### Object.getOwnPropertyDescriptor()

##### Define

>the method returns an object describing the configuration of a specific property on a given object(that is, one directly present on an object and not in the object's prototype chain).
>
>The object returned is mutable but mutating it has no effect on the original property's configuration.

##### Syntax

> Object.getOwnPropertyDescriptor(obj, prop);

##### Parameter

`obj`

* the object in which to look for the proeprty

`prop`

* the name or `Symbol` of the proeprty whose description is to be retrieved(检索).

##### Desc

* this method permits examinition(检查) of the precise description of a property.
* A property in JavaScript consists of either a string-valued(字符串值) name or a Symbol and a property descriptor.
* Futher information about property descriptor types and their attributes can be found in `Object.defineProperty()`
* A property descriptor is a record with some of the following attributes:
  * `value`  
    * the value associated with the property(data descriptors only)
  * `writable` 
    *  `true` if and only if the value associated with the property may be changed(data descriptors only)
  * `get` 
    * A function which serves as a getter for the property, or `undefined` if there is no getter(accessor descriptor only)
  * `set`
    * A function which serves as a setter for the property, or `undefined` if there is no setter(accessor descriptor only)
  * `configurable`
    * `true` if and only if the type of this proeprty descriptor may be changed and if the property any be deleted from the corresponding object.
  * `enumerable`
    * `true` if and only if the property shows up during enumeration of the properties on the corresponding object.

##### Examples

Using Object.getOwnPropertyDescriptor

```javascript
let o, d;
o = {get foo() {return 17;}};
d = Object.getOwnPropertyDescripor(o, 'foo');
//d 
{
  configurable: true,
  enumerable: true,
  get: /*this getter function*/,
  set: undefined
}

o = {bar: 42};
d = Object.getOwnPropertyDescriptor(o, 'bar');
{
  value: 42,
  writable: true,
  configurable: true,
  enumerable: true
}

o = {[Symbol.for('baz')]: 73};
d = Object.getOwnPropertyDescriptor(o, Symbol.for('baz'));
{
  configurable: true,
  enumerable: true,
  value: 73,
  writable: true
}

o = {};
Object.defineProperty(o, 'qux', {
  value: 8675309,
  writable: false,
  enumerable: false
});
d = Object.getOwnPropertyDescriptor(o, 'qux');
{
  value: 8675309
  writable: false,
  enumerable: false,
  configurable: false
}
```

Non-object coercion(强制转换)

> In ES5, if the first argument to this method is not an object(a primitive), then it will cause a `TypeError`. In ES2015, a non-object first argument will be coerced to an object at first.

```javascript
Object.getOwnPropertyDescriptor('foo', 0);
//TypeError: 'foo' is not an object //ES5 code

Object.getOwnPropertyDescriptor('foo', 0);
{
  configurable: false,
  enumerable: true,
  value: 'f',
  writable: false
}
```



#### Object.getOwnPropertyDescriptors()

##### Define

>the method returns all own property descriptors of a given object

##### Syntax

> Object.getOwnPropertyDescriptors(obj);

##### Parameter

`obj`

* the object for which to get all own property descriptors

##### return value

* An object containing all own property descriptors of an object. 
* Might be <u>an empty object</u>, if there are no properties.

##### Desc

* the method permits examiniation of the precise description of all own properties of an object.
* A property in JavaScript consists of either a string-valued name or a `Symbol` and a property descriptor.
* Futher information about property descriptor types and their attributes can be found in `Object.defineProperty()`
* A proeprty descriptor is a record with some of the following attributes:
  * `value`
    * the value associated with the property(data descriptor only)
  * `writable`
    * `true` if and only if the values associated with property may be changed(data descriptors only)
  * `get`
    * A function which serves as a getter for the property, or `undefined` if there is no getter(accessor descriptors only)
  * `set`
    * A function which serves as a stter for the property, or `undefined` if there is no setter(accessor descriptor only).
  * `configurable`
    * `true` if and only if the type of this proeprty descriptor may be changed and if the property may be deleted from the corresponding object.
  * `enumerable`
    * `true` if and only if this property shows up during enumeration of the properties on the corresponding object.



##### example

<u>Creating a shallow(浅的) clone</u>   ????

Whereas the `Object.assign()` method will only copy enumerable and own properties from a source object to a target object, u are able to use this method and `Object.create()` for a shallow copy between two unknown objects:

```javascript
Object.create(
	Object.getPrototype(obj),
  Object.getOwnPropertyDescriptors(obj)
)
```

<u>Creating a subclass</u> ????

A typical way of creating a subclass is to define the subclass, set its prototype to an instance of the superclass, and then define properties on that instance.

This can get awkward(笨拙的) especially for getters and setters. Instead, u can use this code to set the prototype.

```javascript
function superclass() {}
superclass.prototype = {};

function subclass() {}
subclass.prototype = Object.create(
	superclass.prototype,
  {
    // define the subclass constructor, methods, and the properties here
  }
)
```





#### Object.getOwnPropertyNames()

Object.getOwnPropertyNames()返回<u>直接挂在目标对象上的</u>可枚举、不可枚举属性. 但为了和ES5保持一致,不包括Symbol属性.

```js
https://juejin.cn/post/6844903796062191624

//保证对象属性顺序的迭代方式
js内部的ownPropertyKeys方法,定义了对象属性遍历的顺序.
基于内部ownPropertyKeys方法实现的方法有Object.hasOwnPropertyNames()和Reflect.ownKeys(),这两种都保证对象属性的顺序.
Reflect.ownKeys()返回的结果等价于Object.hasOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))包括直接挂在目标对象上的可枚举、不可枚举、Symbols的属性组成的数组。但是要考虑兼容性（ES6提出，ie不支持)

Object.getOwnPropertyNames()返回直接挂在目标对象上的可枚举、不可枚举属性组成的，在ES5提出，兼容性更好，支持IE9+：


//为Object.keys()添加顺序
Object.keys.sort()
```



#### Object.getOwnPropertySymbols()

##### Define

> the method returns an array of all symbol properties found directly upon a given object.

##### Syntax

> Object.getOwnPropertySymbol(obj)

##### Parameters

`obj`

* the object whose symbol properties are to be returned

##### return value

* an array of all symbol properties found directly upon the given object

##### Desc

* Similar to `Object.getOwnPropertyNames()`, u can get all symbol properties of a given object as an array of symbols.
* Note that `Object.getOwnPropertyNames()` itself does not contain the symbol properties of an object and only the string properties.
* As all objects have no own symbols properties initially, `Object.getOwnPropertySymbols()` returns an empty array unless u have set symbol properties on ur object.

##### example

```javascript

//xxx
```



#### Object.defineProperty()

**define**

> the static method defines a new property directly on an object, or modifies an existing property on an object, and return the object.

**syntax**

> Object.definePorperty(object, prop, descriptor)

`object`

* the object on which to define the property

`prop`

* the name or Symbol of the property to be defined or modefied

`descriptor`

* the descriptor for the property being defined or modefied.

**return value**

the object that was passed to the function



**Desc**

this method allows a precise addition to or modification of a property on an object.

<u>Normal property addition through assignment(赋值) creates properties</u> which show up during property enumeration(for...in or Object.keys() method), whose values may be changed, and which may be deleted.

this method allows these extra details to be changed from their defaults.

<span style="text-decoration: underline wavy">By default, values added using `Object.defineProperty()` are <u>immutable(不可改变的)</u> and not enumerable.</span>

Property descriptors present in objects come in two main flavors:  data descriptors and accessor descriptor.

* A data descriptor is a property that has a value, which may or may not be writable
* An accessor descriptor is a property described by a getter-setter pair of functions.
* A descriptor must be one of these two flavors; it cannot be both.

Both data and accessor descriptors are objects. they share the following optional keys(note: the defaults mentioned here are in the case of defining properties using 'Object.defineProperty()'):

* `configurable`
  * true if the type of this proeprty descriptor may be changed and if the property may be deleted from the correspongding object.
  * default to false
* `enumerable`
  * true if and only if this property shows up during enumeration of the properties on the correspongding object.
  * default to false

**A data descriptor** also has the following optional keys:

* `value`
  * default to false
  * the value associated with the property. can be any valid JavaScript value (number, object, function, etc)

* `writable`
  * default to false
  * true if the value associated with the property may be changed with an <u>assignment operator(赋值运算符)</u>.

**A accessor descriptor** also has the following optional keys:

* `get`
  * A function which serves as a getter for the property, or undefined if there is no getter.
  * when the property is accessed, this function is called without arguments and with this set to the object through which the property is accessed(this may not be the object on which the property is defined due to inheritance). the return value will be used as the value of the property.(这个长句不明白. 当访问该属性时, 会调用这个函数,没有参数,但会传入this对象(由于继承关系,this并不一定是该属性的对象). 返回值会被用作属性的值.
  * default to undefined
* `set`
  * A function which serves as a setter for the property, or undefined if there is no setter.
  * when the property is assigned, this function is called with one argument(the value being assigned to the property) and with this set to the object through which the property is assigned.
  * default to undefined

If a descriptor has <u>neither of</u> `value` ,`writable`, `get` and `set` keys, ti is treated as a data descriptor. If a descriptor has both [`value` or `writable`] and [`get` or `set` ]keys, an exception is thrown.

Bear in mind that these attributes <u>are not necessarily(不一定是)</u> the descriptor's own properties. Inherited properties will be considered as well. In order to ensure these defaults are preserved, you might freeze the `Object` upfront, specify all options explicityly, or point to null with `Object.create(null)`. 



**修改属性**

Writable属性

当writable属性设为false时,该属性被称为'不可写的'. 它不能被重新赋值.

```javascript
let o = {};
Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(o.a); //37
o.a = 25; //No error thrown(it would throw in strict mode, even if the value had been the same)
console.log(o.a); //37


//strict mode
(function() {
  'use strict'
  let o = {};
  Object.defineProperty(o, 'a', {
    value: 3,
    writable: false
  });
  
  o.a = 3; //throws TypeError: 'b' is read-only
  return o.b;
})();
```



Enumerable属性

`enumerable`定义了对象的属性是否可以在`for...in`循环和`Object.keys()`中被枚举.

```javascript
```



Configurable属性

`configurable`特性标识对象的属性是否可以被删除,以及除`value`和`writable`特性外的其他特性是否可以被修改.



添加多个属性和默认值

使用点运算符和 `Object.defineProperty()` 为对象的属性赋值时，数据描述符中的属性默认值是不同的

```javascript
let o = {};
o.a = 1;
//等同于
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
})


Object.defineProperty(o, 'a', {value: 1});
//等同于
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
})
```



继承属性

如果访问者的属性是被继承的，它的 `get` 和 `set` 方法会在子对象的属性被访问或者修改时被调用。如果这些方法用一个变量存值，该值会被所有对象共享。

```javascript
function myclass() {}

let value;
Object.defineProperty(myclass.prototype, 'x', {
  get() {
    return value;
  },
  set(x) {
    value = x;
  }
})
let a = new myclass();
let b = new myclass();

a.x = 1;
console.log(b.x); //1
```

可以通过将值存储在另一个属性中解决.在get和set方法中,this指向某个被访问和修改属性的对象.

```javascript
function myclass() {}

Object.defineProperty(myclass.prototype, 'x', {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  }
});

let a = new myclass();
let b = new myclass();

a.x = 1;
console.log(b.x);//undefined
```

不像访问者属性,值属性始终在对象自身上设置,而不是一个原型.然而,如果一个不可写的属性被继承,它仍然可以防止修改对象的属性.

```javascript
function myclass() {}

myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, 'y', {
  writable: false,
  value: 1
});

let a = new myclass();
a.x = 2;
console.log(a.x); // 2
console.log(myclass.prototype.x); // 1
a.y = 2; // Ignored, throws in strict mode
console.log(a.y); // 1
console.log(myclass.prototype.y); // 1

```



**实例**

> https://juejin.cn/post/6950664413317693470

使用defineProperty实现`a==1&&b==2&&c==3`为true

```javascript
var val = 0;
Object.defineProperty(window, 'a', {
  get() {
    return ++val;
  }
});
console.log(....); //true
```













#### Object.defineProperties()

**define**

> the method defines new or modifies existing properties directly on an object, returning the object.

**syntax**

> Object.defineProperties(obj, props);

`obj` 

* the object on which to define or modify properties

`props` 

> An Object whose keys represent the names of properties to be defined or modified and whose values are objects describing those properties. Each value in 'props' must be either a data descriptor or an accessor descriptor; it cannot be both.

Data descriptors and access descriptors may <u>optionally</u> contain the following keys:

`configurable`

* true <u>if and only if</u> (当且仅当) the type of this property descriptor may be changed <u>and if</u>(并且) the proeprty may be deleted from the corresponding object.  

* Default to false.

`enumerable`

* true if and only if this property shows up during enumeration of the properties on the corresponding object.
* default to false

A data descriptor also has the following <u>optional</u> keys:

`value`

* the value associated with the property. Can be any valid JavaScript value(number, object,function,etc).
* default to undefined

`writable`

* true if and only if the value associated with the property may be changed with an [<u>assignment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)</u>(赋值运算符).
* default to false

An access descriptor also has the following <u>optional</u> keys:

`get`

* A function which <u>serves as(作为)</u> a getter for the property, or undefined if there is no getter.
* the function's return value will be used as the value of the property.
* default to undefined

`set`

* A function which serves as a setter for the property, or undefined if there is no setter.
* the function will receive as ites only argument the new value being assigned to the property
* default to undefined

If a descriptor has neither of `value`, `writable`, `get` and `set` keys, it is treated as a data descriptor.

If a descriptor has both `value` or `writable` and `get` or `set` keys, an exception is thrown.

**return value**

the object that was passed to the function

**Example**

Using Object.defineProperties

```javascript
let obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'hello',
    writabel: false
  }
})
```





#### Object.hasOwn():pencil2:

##### Define

> the static method return `true` if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns `false`
>
> Note: `Object.hasOwn()` is intended as a replacement for `Object.hasOwnProperty()`

##### **Syntax**

> Object.hasOwn(instance, prop);

##### **Parameters**

`instance`

* the JavaScript object instace to test.

`prop`

* the `String` name or `Symbol` of the property to test.

##### **Desc**

* the `Object.hasOwn()` method returns `true` if the specified property is a direct property of the object -even if the property values is `null` or `undefined`.
* the method returns `false` if the property is inherited, <u>or has not been declared at all.</u>  ????
* Unlike the `in` operator, this method <u>does not check for the specified property in the object's prototype chain.</u>
* It is recommended over `Object.hasOwnProperty()` because it works for objects created using `Object.create(null)` and with objects that have overridden the inherited `hasOwnProperty()` method.
* While it is possible to workaround these problems by calling `Object.prototype.hasOwnProperty()` on an external object, `Object.hasOwn()` is more intuitive(直观的).

##### **example**

<u>Using hasOwn to test for a property's existence</u>

> The following code shows how to determine whether the `example` oject contains a proeprty named `prop`

```javascript
let example = {};
Object.hasOwn(example, 'prop');   // false = 'prop' has not been defined

example.prop = 'exists';
Object.hasOwn(example, 'prop');   // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, 'prop');   // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, 'prop');   // true - own property exists with value of undefined
example.hasOwnProperty('prop')
```





<u>Direct  vs. inherited properties</u>

> the following example differentiates between direct properties and properties inherited through the prototype chain.

```javascript
let example = {}
example.prop = 'exists';

// `hasOwn` will only return true for direct properties:
Object.hasOwn(example, 'prop');             // returns true
Object.hasOwn(example, 'toString');         // returns false
Object.hasOwn(example, 'hasOwnProperty');   // returns false

// The `in` operator will return true for direct or inherited properties:
'prop' in example;                          // returns true
'toString' in example;                      // returns true
'hasOwnProperty' in example;                // returns true
```





<u>Iterating over the properties of an object</u>

> To iterate over the enumerable properties of an object, 

```javascript
let example = { foo: true, bar: true };
for (let name of Object.keys(example)) {
  // ...
}
```

but if you need to use `for...in`, u can use `Object.hasOwn()` to skip the inherited properties:

```javascript
let example = { foo: true, bar: true };
for (let name in example) {
  if (Object.hasOwn(example, name)) {
    // ...
  }
}
```





<u>Checking if an Array index exists</u>

> the elements of an `Array` are defined as direct properties, so you can use `hasOwn()` method to check whether a particular index exists

```javascript
let fruits = ['Apple', 'Banana','Watermelon', 'Orange'];
Object.hasOwn(fruits, 3);   // true ('Orange')
Object.hasOwn(fruits, 4);   // false - not defined
```



<u>Problematic cases for hasOwnProperty</u>

> the section demonstrate that `hasOwn()` is immune to the problems that affect `hasOwnProperty`.
>
> Firstly, it can be used with objects that have reimplemented `hasOwnProperty()`

```javascript
let foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'xxx'
};

if (Object.hasOwn(foo, 'bar')) {
  console.log(foo.bar); //
}
```

It can also be used to test objects created using `Object.create(null)`. These do not inherit from `Object.prototype`, and so `hasOwnProperty()` is inaccessible.

```javascript
let foo = Object.create(null);
foo.prop = 'exists';

if (Object.hasOwn(foo, 'prop')) {
  console.log(foo.prop);
}
```



#### Object.prototype.toString()

**Syntax**

```javascript
toString()
```



**Return value**

A string representing the object

**Desc**

An object's toString() method is most commonly invoked when that object undergoes...

* explicit(明确的) [type conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion) to a string(for example, String(myObject))
* implicit(含蓄的)  [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) into a string(for example, myObject + 'hello world')

> Note: This assumes the object does not have a custom implementation of <span style="color:red;">**`Symbol.toPrimitive`**</span>. If it does, that method will take priority and be called instaed of `toString()`

While not as common, the method can be invoked directly(for example, myObject.toString())

By default toString() returns "[object Type]", where Type is the object type.

```javascript
const o = new Object().toString(); //o is "[object Object]"

//Symbol.toPrimitive
let obj = {
  toString() {return 1},
  [Symbol.toPrimitive]() {return 2}
};
obj + '1' //'21'
String(obj); //'2'
```

This method is inherited by every object descended from Object, but can be overridden by either the author or built-in descendant objects (for example, `Number.prototype.toString()`)



**Parameters**

* Be default `toString()` takes no parameters.
* however,objects that inherit from `Object` may override it with their own implementation that do take parameters. For example, the `toString()` methods implemented by `Number` and `BigInt` take an optional `radix`  parameter.

**Examples**

<u>Overriding the default toString method.</u>

* the `toString()` function you create must return a primitive.
* If it returns an object and the method is called implicitly<sup>含蓄的暗中的</sup>(i.e. during type conversion or coercion), then its result will be ignored 
  * and the value of a related method  <span style="color: red;"> **`valueOf()`**</span>, will be used instead, 
  * or a `TypeError` will be thrown if none of these methods return a primitive.

```javascript
//varify the upside conclusion
let obj = {
  toString() {return {} },
  valueOf() {return 1}
};
String(obj); //'1'
obj + 'a'; //'1a'
```



<u>Using toString() to detect object class</u>

`toString()` can be used with every object and (by default) allows you to get its class.

* To use the base `Object.prototype.toString()` with an object that has had it overridden, you need to call [`Function.prototype.call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) or [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) on it, passing the object you want to inspect as the first parameter (called `thisArg`).

```javascript
const toString = Object.prototype.toString;

toString.call(new Date); //[object Date]
toString.call(new String); //[object String]
toString.call(Math); //[object Math]

//since JavaScript 1.8.5
toString.call(undefined) //[object Undefined]
toString.call(null); //[object Null]
```



* Using `toString()` in this way is unreliable; objects can change the behavior of `Object.prototype.toString()`by defining a <span style="color: red;">**`Symbol.toStringTag`** </span>property, leading to unexpected results.

```javascript
const myDate = new Date();
Object.prototype.toString.call(myDate); //[object Date]

myDate[Symbol.toSTringTag] = 'myDate';
Object.prototype.toString.call(myDate); //[object myDate]

Date.prototype[Symbol.toStringTag] = 'prototype polluted';
Object.prototype.toString.call(new Date()); //[object prototype polluted]
```



**应用**

使用toString方法实现`a==1&&a==2&&a==3`结果为true

> https://juejin.cn/post/6950664413317693470
>
> 还有数组,Object.defineProperty方法

```javascript
let a = {
  i: 1,
  toString() {
    return a.i;
  }
}

a==1&&a==2&&a==3
//true
```





### 对象的引用和复制

#### 1.引用类型和原始类型引用复制的区别

> 原始类型(数字,字符串,布尔值,symbol,bigInt)是以'整体值'的形式被复制的, 对象是'通过引用'被存储和复制的.
>
> 赋值了对象的变量存储的不是对象本身,而是该对象'在内存中的地址', 也就是对象的引用.
>
> 当一个对象变量被复制(引用被复制), 该对象并没有被复制.
>
> 我们可以通过任何一个变量来访问对象并修改它的内容,修改对另一个变量是可见的.



#### 2.通过引用来比较

**当两个对象为同一个对象时,两者才相等**

```js
let a = {};
let b = a; //复制引用

console.log(a == b); //true
console.log(a === b); //true

```

**两个独立的对象不相等,即使都为空的条件下**

```js
let a = {},
    b = {};

console.log(a == b); //false 
console.log(a === b); //false

let a = Object.create(null),
    b = Object.create(null);

console.log(a == b); //false
```

**数值比较**

对于类似 `obj1 > obj2` 的比较，或者跟一个原始类型值的比较 `obj == 5`，对象都会被转换为原始值。



#### 3.克隆与合并

如果想要复制一个对象, 创建一个独立的拷贝,克隆.(假设对象的所有属性都是原始类型)

克隆对象需要面对的问题:

* 区分浅拷贝和深拷贝

* 对待循环引用的处理

* 函数的处理: 是采用toString还是其他



#### 4.浅拷贝对象



##### 1. for循环复制

创建一个新对象，并通过遍历现有属性的结构，在原始类型值的层面，将其复制到新对象，以复制已有对象的结构。

```js
let user = {
  name: 'John',
  age: 30
};

let clone = {};

for(let k in user) {
  clone[key] = user[key];
}

// 现在 clone 是带有相同内容的完全独立的对象
clone.name = "Pete"; // 改变了其中的数据

alert( user.name ); // 原来的对象中的 name 属性依然是 John
```

##### 2. Object.assign

> 它会遍历一个或多个源对象的所有可枚举(enumerable)的自有键(owned key)并把它们复制(适用`=`操作符赋值)到目标对象, 最后返回目标对象.



用 `Object.assign` 代替 `for..in` 循环来进行简单克隆

```js
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user); 
```

##### 3. 数组中的浅拷贝

* slice
* concat
* 扩展运算符

深层克隆

对象属性为其他对象的引用,如何处理? 如果使用上面的克隆循环的方式, 属性对象会以引用形式被拷贝.

```js
let user = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50
  }
}

let clone = Object.assign({}, user);
clone.sizes === user.sizes //true
```

为了解决此问题，我们应该使用会检查每个 `user[key]` 的值的克隆循环，如果值是一个对象，那么也要复制它的结构。这就叫“深拷贝”。

可以使用递归或者使用现成的实例,例如lodash库中的_.cloneDeep(obj).

```js
//深拷贝

1.JSON.parse(JSON.stringify(obj))

2.
```





##### 总结

```js
对象通过引用被赋值和拷贝。换句话说，一个变量存储的不是“对象的值”，而是一个对值的“引用”（内存地址）。因此，拷贝此类变量或将其作为函数参数传递时，所拷贝的是引用，而不是对象本身。

所有通过被拷贝的引用的操作（如添加、删除属性）都作用在同一个对象上。

为了创建“真正的拷贝”（一个克隆），我们可以使用 Object.assign 来做所谓的“浅拷贝”（嵌套对象被通过引用进行拷贝）或者使用“深拷贝”函数，例如 _.cloneDeep(obj)。
```



#### 5.深拷贝

> 几种深拷贝方式

##### 5.1 JSON方式

适用于JSON安全对象（可以被序列化为一个JSON字符串并且可以根据这个字符串解析出一个结构和值完全一样的对象）

适用于JSON安全对象（可以被序列化为一个JSON字符串并且可以根据这个字符串解析出一个结构和值完全一样的对象）

```js
function deepClone(target) {
	return JSON.parse(JSON.stringify(obj));
}
```



##### 5.2 普通方法

```js
//09 文档中
直接进行赋值操作,字符串,数组,对象及对象的方法

例如,对象的方法
target.fn = proObj.fn.bind(target);
```



##### 5.3 递归



### 对象字面量扩展语法

#### ES6-属性初始值简写

在ECMAScript 5及更早版本中，对象字面量只是简单的<u>键值对集合</u>，这意味着初始化属性值时会有一些重复.

```javascript
//ES5
function createPerson(name, age) {
  return {
    name: name,
    age: age
  };
}
```

在ECMAScript 6中，通过使用属性初始化的简写语法，可以消除这种属性名称与局部变量之间的重复书写。**当一个对象的属性与本地变量同名时，不必再写冒号和值，简单地只写属性名即可。**

```javascript
//ES6
function createPerson(name, age) {
  return {
    name,
    age
  }
}
```

对象字面量里只有一个属性的名称时，JavaScript引擎会在可访问作用域中查找其同名变量；如果找到，则该变量的值被赋给对象字面量里的同名属性。



#### ES6-对象方法简写

在ECMAScript 6中，语法更简洁，消除了冒号和function关键字

简写方法的属性名可以是对象字面量允许的任何形式.除了常规的JS标识符外,也可以使用字符串字面量和计算的属性名,包括符号属性名.

```javascript
//ES5
let person = {
  name: 'Nicholas',
  sayName: function() {
    console.log(this.name);
  }
};

//ES6
let person = {
  name: 'Nicholas',
  sayName() {
    console.log(this.name);
  }
}

//属性名称
const METHOD_NAME = 'm'
const symbol = Symbol()
let weirdMethods = {
  'method with Spaces'(x) { return x+1 },
  [METHOD_NAME](x) {return x + 2},
  [symbol](x) {return x + 3}
}
```

通过对象方法简写语法，在person对象中创建一个sayName()方法，该属性被赋值为一个匿名函数表达式，它拥有在ECMAScript 5中定义的对象方法所具有的全部特性。<span style="text-decoration:underline double red;">二者唯一的区别是，简写方法可以使用super关键字.</span>

为了让对象可迭代(以便在for/of循环中使用), 必须使用符号Symbol.iterator为它定义一个方法.



#### 可计算属性名

##### ES5可计算属性名

在ECMAScript 5及早期版本的对象实例中，如果想要通过计算得到属性名，就需要**用方括号代替点记法**。有些包括某些字符的字符串字面量作为标识符会出错，其和变量放在方括号中都是被允许的。

```javascript
//ES5
let person = {},
    lastName = 'last name';

person['first name'] = 'Nicholas';
person['lastName'] = 'Zakas';

console.log(person['first name']); //'Nicholas'
console.log(person[lastName]); //'Zakas'
```

在对象字面量中，可以直接使用字符串字面量作为属性名称

```javascript
let person = {
  'first name': 'Nicholas'
};
console.log(person['first name']); //'Nicholas'
```

这种模式适用于属性名提前已知或可被字符串字面量表示的情况。然而，如果属性名称"firstname"被包含在一个变量中（就像之前示例中的那样），或者需要通过计算才能得到该变量的值，那么在ECMAScript 5中是无法为一个对象字面量定义该属性的。

##### ES6可计算属性名

<u>而在ECMAScript 6中，可在对象字面量中使用可计算属性名称，其语法与引用对象实例的可计算属性名称相同，也是使用方括号</u>

```javascript
let lastName = 'last Name';
let person = {
  'first name': 'Nicholas',
  [lastName]: 'Zakas'
};

console.log(person['first name']); //'Nicholas'
console.log(person[lastName]); //'Zakas'
```

在对象字面量中使用方括号表示的该属性名称是可计算的，它的内容将被求值并被最终转化为一个字符串，因而同样可以**使用表达式作为属性的可计算名称**

```javascript
let suffix = ' name';
let person = {
  ['first' + suffix]: 'Nicholas',
  ['last' + suffix]: 'Zakas'
};

console.log(person['first name']); //
console.log(person['last name']); //
```

任何可用于对象实例括号记法的属性名，也可以作为字面量中的计算属性名。



##### 数组支持`[]`访问形式

* 可以给数组添加命名属性
* 添加了命名属性（无论是通过．语法还是[]语法），数组的length值并未发生变化。
* 如果你试图向数组添加一个属性，但是属性名“看起来”像一个数字，那它会变成一个数值下标
* 用对象来存储**键/值对**，只用数组来存储**数值下标/值对**。

##### 符号作为属性名

在ES6及之后, 属性名可以是字符串和符号. 如果把符号赋值给一个变量或常量,那么可以使用计算属性语法将符号作为属性名.

```javascript
const extension = Symbol('my extension symbol')
let o = {
  [extension]: {
    //这个对象中存储扩展数据
  }
}

o[extension].x = 0
```

**特点**

* 创建新符号需要调用Symbol()工厂函数(符号是原始值,不是对象,因此Symbol()不是构造函数,不能使用new调用).
* Symbol返回值不等于任何其他符号或其他值.
* 可以给Symbol()传一个字符串,在把符号转换为字符串时会用到这个字符串. 这个字符串的作用仅限于辅助调试,使用相同字符串参数创建的两个符号依旧是不同的符号.
* 使用符号不是为了安全,是为了对象定义安全的扩展机制
  * 从第三方代码得到一个对象,需要给该对象添加一个属性,但不希望自己的属性和原有任何属性起冲突,那么可以使用符号作为属性名.也不担心第三方修改意外修改以符号命名的属性.
  * 当然,第三方可以通过Object.getOwnPropertySymbols()找到你使用的符号,然后修改或删除你的属性.这也是符号不安全的原因之一.



#### 扩展操作符

在ES2018及之后,可以在对象字面量中使用'扩展操作符'(...)把已有对象的属性复制到新对象中.

只有在对象字面量中,三个点才回产生把一个对象的属性复制到另一个对象中的插值行为.

扩展操作符只扩展对象的自有属性,不扩展任何继承属性.

注意: 扩展操作符可能给JS解释器带来巨大工作量.如果对象有n个属性,把这个属性扩展到另一个对象可能是一种`O(n)`操作. 这意味着,如果在循环或递归函数中通过...向一个大对象不断追加属性,则很可能是在写一个抵消的`O(n**2)`算法.随着n越来越大,这个算法可能成为性能瓶颈.



### 16. ES6对象原型新功能

#### 0. 实例化后更改对象的原型

**ES5**

正常情况下，无论是通过**构造函数或Object.create()**方法创建对象，其原型是在对象被创建时指定的。对象原型在实例化之后保持不变，直到ECMAScript 5都是JavaScript编程最重要的设定之一，虽然在ECMAScript 5中添加了Object.getPrototypeOf()方法来返回任意指定对象的原型，但仍缺少对象在实例化后改变原型的标准方法。

**ES6**

ECMAScript 6的Object.setPrototypeOf()方法来改变这一现状，通过这个方法可以改变任意指定对象的原型，它接受两个参数：被改变原型的对象及替代第一个参数原型的对象

```javascript
let person = {
  getGreeting() {
    return 'hello';
  }
};

let dog = {
  getGreeting() {
    return 'woof';
  }
}

//以person对象为原型
let friedn = Object.create(person);
console.log(friend.getGreeting()); //'hello'
console.log(Object.getPrototypeOf(friend) === person); //true

//将原型设置为dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()); //'woof'
console.log(Object.getPrototypeOf(friend) === dog); //true
```



**[[prototype]]**

对象原型的真实值被储存在内部专用属性[[Prototype]]中，

调用Object.getPrototypeOf()方法返回储存在其中的值，调用Object.setPrototypeOf()方法改变其中的值。



#### 1. 简化原型访问的Super引用

ECMAScript 6引入了Super引用的特性，<u>使用它可以更便捷地访问对象原型</u>

如果你想重写对象实例的方法，又需要调用与它同名的原型方法，在ES5和ES6中的实现方法:

```javascript
//ES5
let person = {
  getGreeting() {
    return 'hello';
  }
};

let dog = {
  getGreeting() {
    return 'woof';
  }
}

let friend = {
  getGreeting() {
    return Object.getPrototypeOf(this).getGreeting.call(this) + ', hi';
  }
};

//将原型设置为person
Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting()); //'hello, hi'
console.log(Object.getPrototypeOf(friend) === person); //true


//将原型设置为dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()); //'hello, woof'
console.log(Object.getPrototypeOf(friend) === dog); //true

//Object.getPrototypeOf()方法可以确保调用正确的原型，并向输出字符串叠加另一个字符串
//后面的.call(this)可以确保正确设置原型方法中的this值
```

要准确记得如何使用Object.getPrototypeOf()方法和.call(this)方法来调用原型上的方法实在有些复杂，所以ECMAScript 6引入了super关键字. 简单来说，Super引用相当于指向对象原型的指针，实际上也就是**Object.getPrototypeOf(this)**的值。

```javascript
//ES6
let friend = {
  getGreeting() {
    //与ES5中的Object.getPrototypeOf(this).getGreeting.call(this)相同
    return super.getGreeting() + ', hi';
  }
};

```

调用super.getGreeting()方法相当于在当前上下文中调用Object.getPrototypeOf(this).getGreeting.call(this)。同样，可以通过Super引用调用对象原型上所有其他的方法。当然，<span style="text-decoration: underline wavy blue">必须要在使用简写方法的对象中使用Super引用，但如果在其他方法声明中使用会导致语法错误</span>

```javascript
let friend = {
  getGreeting: function() {
    //语法错误
    return super.getGreeting() + ', hi';
  }
};
```

在这个示例中用匿名function定义一个属性，由于在当前上下文中Super引用是非法的，因此当调用super.getGreeting()方法时会抛出语法错误。????

Super引用在多重继承的情况下非常有用，因为在这种情况下，使用Object.getPrototypeOf()方法将会出现问题。????!!!!

```javascript
let person = {
  getGreeting() {
    return 'hello';
  }
};

//以person为原型对象
let friend = {
  getGreeting() {
    return Object.getPrototypeOf(this).getGreeting.call(this) + '. hi';
  }
};

Object.setPrototypeOf(friend, person);

//原型是friend
let relative = Object.create(friend);

console.log(person.getGreeting()); // 'hello'
console.log(friend.getGreeting()); // 'hello, hi'
console.log(relative.getGreeting()); //error  ????!!!!
```

this是relative, relative的原型是friend对象，当执行relative的getGreeting方法时，会调用friend的getGreeting()方法，而此时的this值为relative，Object.getPrototypeOf(this)又会返回friend对象。所以就会进入递归调用直到触发栈溢出报错。

在ECMAScript 5中很难解决这个问题，但在ECMAScript 6中，使用Super引用便可以迎刃而解：

```javascript
let person = {
  getGreeting() {
    return 'hello';
  }
};

//以person为原型对象
let friend = {
  getGreeting() {
    return super.getGreeting.call(this) + '. hi';
  }
};

Object.setPrototypeOf(friend, person);

//原型是friend
let relative = Object.create(friend);

console.log(person.getGreeting()); // 'hello'
console.log(friend.getGreeting()); // 'hello, hi'
console.log(relative.getGreeting()); // 'hello, hi'
```

Super引用不是动态变化的，它总是指向正确的对象，在这个示例中，无论有多少其他方法继承了getGreeting方法，super.getGreeting()始终指向person.getGreeting()方法。





#### 1. super 和[[HomeObject]]

**[[HomeObject]]**

在ECMAScript 6以前从未正式定义“方法”的概念，方法仅仅是一个具有功能而非数据的对象属性。而<u>在ECMAScript 6中正式将方法定义为一个函数，它会有一个内部的**[[HomeObject]]属性**来容纳这个方法从属的对象。</u>

```javascript
let person = {
  //方法
  getGreeting() {
    return 'Hello';
  }
};

//不是方法
function shareGreeting() {
  return 'Hi';
}
```

由于直接把函数赋值给了person对象，因而getGreeting()方法的[[HomeObject]]属性值为person。而创建shareGreeting()函数时，由于未将其赋值给一个对象，因而该方法没有明确定义[[HomeObject]]属性。在大多数情况下这点小差别无关紧要，但是当使用Super引用时就变得非常重要了。

**Super**

可以使用super关键字调用对象原型上的方法，此时的this绑定会被自动设置为当前作用域的this值。

<span style="text-decoration:underline wavy blue">Super的所有引用都通过[[HomeObject]]属性来确定后续的运行过程。第一步是在[[HomeObject]]属性上调用Object.getPrototypeOf()方法来检索原型的引用；然后搜寻原型找到同名函数；最后，设置this绑定并且调用相应的方法。</span>

```javascript
let person = {
  getGreeting() {
    return 'Hello';
  }
};

//以person对象为原型
let friend = {
  getGreeting() {
    return super.getGreeting() + ', hi';
  }
};

Object.setPropertyOf(frined, person);

console.log(friend.getGreeting()); //'Hello, hi'
```

friend.getGreeting()方法的[[HomeObject]]属性值是friend，friend的原型是person，所以**super.getGreeting()等价于person.getGreeting.call(this)**。





### 17. 实际使用

#### 比较两个对象中的属性是否相同数量是否相等

```js
//Object.keys()或Object.assign()
function (obj1, obj2) {
  if (
  	Object.keys({...obj1, ...obj2}).length === Object.keys(obj1)
  		&&
    Object.keys({...obj1, ...obj2}).length === Object.keys(obj2)
  ) {
    return '两个对象的属性名数量相等值相同'
  }
}


//Set
使用集合代替扩展运算符


//
```



#### 12.2 两个对象的属性是否相等

```js
//
function compareObj(obj1, obj2) {
  //比较两个对象的长度
  let obj1Len = Object.keys(obj1).length;
  let obj2Len = Object.keys(obj2).length;
  if (obj1Len === obj2Len) {  //对象属性都是原始数据类型
    return Object.keys(obj1).every(item => obj2.hasOwnProperty(item) && obj1[item] === obj2[item]);
  }
}


```



```js
//https://www.geeksforgeeks.org/how-to-check-two-objects-have-same-data-using-javascript/
<script>
	const obj1 = {
		name: 'Ram',
		age: 21,
		hobbies: ['Cricket', 'Swimming']
	};

	const obj2 = {
		name: 'Ram',
		age: 21,
		hobbies: ['Cricket', 'Swimming']
	};
	const haveSameData = function(obj1, obj2) {
		const obj1Length = Object.keys(obj1).length;
		const obj2Length = Object.keys(obj2).length;

		if(obj1Length === obj2Length) {
			return Object.keys(obj1).every(
				key => obj2.hasOwnProperty(key)
				&& obj2[key] === obj1[key]);
		}
		return false;
	}
	document.write(haveSameData(obj1, obj2));
</script>
```

```js
//https://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects

```



#### 0. 对象转换为数组

```javascript
//es5
//对象的key的集合或者value的集合 简单
let arr = [];
for (let i in object) {
  arr.push(object[i]);
}

//key-value形式的数组
let arr = [];
for (let i in obj) {
  let o = {};
  o[i] = obj[i];
  arr.push(o);
}

//es6 Object.keys()

//es7
//Object.values 和 Object.entries，作为遍历一个对象的补充手段，供 for...of 循环使用

//Object.entries 方法的另一个用处是，将对象转为真正的 Map 结构
const obj = { foo: 'bar', baz: 42 };  
const map = new Map(Object.entries(obj));  
map
```



#### 1. 比较两个对象相同属性的值是否不同

```javascript
let obj1 = {a: 1, b: 2, c: 3},
    obj2 = {b: 1, a: 1, c: 3};

for (const [key, value] of Object.entries(obj1)) {
  if (obj2[key] !== value) return false  
}

//报错信息: Uncaught SyntaxError: Illegal return statement
//return只能在函数中使用
```



#### 2. 去重数组中的对象

```javascript
let arr = [{a: 1, b: 2}, {a: 1, b: 2}, {b:1, a: 2}, {c: 3, d: 4}];

//条件: keys长度是否相同, a[key]等于b的value
//先判断属性值为基本类型

let result = arr.reduce((acc, cur) => {
  
 let selectVal = acc.some(item => {
   
   let lenIsSame = Object.keys({...item, ...cur}).length === Object.keys(cur).length,
       valIsSame = Object.entries(item).every(([key, value]) => cur[key] === value);
   
   return lenIsSame && valIsSame;
 });
  
 if (!selectVal) {
   acc.push(cur);
 }
  
 return acc;
}, [arr[0]])
```



#### 3. 判断两个对象相等

> 见运算符>>>关系运算符>>>全等运算符中的 自定义函数

## 函数

### 概要

在 JavaScript中，函数实际上是对象。每个函数都是Function类型的实例，而Function 也有属性和方法，跟其他引用类型一样。因为函数是对象，所以函数名就是指向函数对象的**[指针](https://www.zhihu.com/question/265576824)**，而且不一定与函数本身紧密绑定。

> 指针
>
> JavaScript中没有指针，引用的工作机制也不尽相同。在JavaScript中变量不可能成为指向另一个变量的引用。
> JavaScript引用指向的是值。如果一个值有10个引用，这些引用指向的都是同一个值，*他们相互之间没有引用/指向关系*。
> ———《你不知道的JavaScript 中卷》2.5 值和引用，第1版28页。

### 函数定义的方式及比较

函数创建有 3 种方式: 函数声明,函数表达式(箭头函数), Function声明.

#### 1. 方式

##### 1.1 函数声明

在关键字'function'之后,必须指定函数的名称. 在函数体中,函数必须将一个值返回给调用方.遇到return语句后,该函数会立即停止执行. 函数定义最后没有加分号.

- 原始数据作为值传递给函数,如果函数改变了这个参数,不会影响到全局或调用函数.
- 引用数据作为值传递给函数,如果函数改变了这个对象的属性,这种外边对函数外部是可见的.

```js
function fn(n){
  return n;
}

let obj = {};
function fn(obj){
  obj.newpro = 'typora'
}
fn(obj)
console.log(obj.newpro, obj['newpro'])
```



##### 1.2 函数表达式

如果 function 是声明中的第一个词，那么就是一个函数声明，否则就是一个函数表达式。

使用这种语法定义的函数可以是**具名函数表达式或匿名函数表达式**. 具名函数表达式又叫行内函数表达式.

两种形式:

```javascript
//匿名函数(anonymous function)
let fn = function() {};
//命名函数
let fn = function functionName() {};
```



函数表达式提供函数名后,可以用于在函数内部代指其本身.(函数声明也可以)

```js
//一般使用const而非let来声明函数表达式的变量

const fn = function fun(n){
  return n<2?1:n*fn(n-1)
};
console.log(fn(3))

//函数表达式提供了函数名
const factorial = function fac(n){return n<2?1:n*fac(n-1)};
console.log(factorial(3))

//函数表达式中的函数名只能在函数体内使用,在函数提外使用函数名会报错.
let y =function x(){console.log(x)};
console.log(x); 
//ƒ x(){console.log(x)}
//Uncaught ReferenceError: x is not defined
```



在判断语句中的定义(函数声明和函数表达式)!!

```javascript
//不要这么做
if (condition) {
  function sayHi() { console.log('Hi!');}
} else {
  function sayHi() { console.log('Hi!');}
}
//这段代码看起来很正常,事实上，这种写法在ECAMScript 中不是有效的语法。JavaScript 引擎会尝试将其纠正为适当的声明。问题在于浏览器纠正这个问题的方式并不一致。
//多数浏览器会忽略condition 直接返回第二个声明。Firefox 会在condition 为true 时返回第一个声明。这种写法很危险，不要使用。

//不过把上面的函数声明换成函数表达式就没问题了:
let sayHi;
if (condition) {
	sayHi = function() {
		console.log("Hi!");
	};
} else {
	sayHi = function() {
		console.log("Yo!");
	};
}
```





```javascript

```



##### 1.3 箭头函数(arrow function)

```javascript
let sum = (num1, num2) => {return num1 + num2};
```

##### 1.4 Function构造函数

使用Function 构造函数. 这个构造函数接收任意多个字符串参数，最后一个参数始终会被当成函数体，而之前的参数都是新函数的参数

```js
let sum = new Function('num1', 'num2', 'return num1 + num2'); //不推荐
```

我们不推荐使用这种语法来定义函数，<span style="color:red;">**因为这段代码会被解释两次**</span>(???)：第一次是将它当作常规ECMAScript 代码，第二次是解释传给构造函数的字符串。这显然会影响性能。不过，把函数想象为对象，把函数名想象为指针是很重要的。而上面这种语法很好地诠释了这些概念。

ECMAScript 6增强了Function构造函数的功能，支持在创建函数时定义默认参数和不定参数. 对于Function构造函数，新增的默认参数和不定参数这两个特性使其具备了与声明式创建函数相同的能力。

```javascript
let add = new Function('first', 'second = first', 'return first + second');
let add = new Function('...args', 'return args[0]');
```



#### 2. 比较(函数声明和函数表达式)

> 如果 function 是声明中的第一个词，那么就是一个函数声明，否则就是一个函数表达式。

* JS引擎对函数声明和函数表达式生成函数定义时机不同: 代码执行前(函数声明提升);代码执行到
* 因为执行时机不同,函数声明可提前调用;函数表达式则不能.
* 除了函数什么时候定义之外,这两种语法等价

JavaScript 引擎在加载数据时对它们是区别对待的。JavaScript 引擎在任何代码执行之前，会先读取函数声明，并在执行上下文中生成函数定义。而函数表达式必须等到代码执行到它那一行，才会在执行上下文中生成函数定义。

```javascript
//正常运行
console.log(sum(10, 10));
function sum(num1, num2) { return num1 + num2;}
```

以上代码可以正常运行，因为函数声明会在任何代码执行之前先被读取并添加到执行上下文。这个过程叫作**函数声明提升（function declaration hoisting).**在执行代码时，JavaScript 引擎会先执行一遍扫描，把发现的函数声明提升到源代码树的顶部。因此即使函数定义出现在调用它们的代码之后，引擎也会把函数声明提升到顶部。

如果把前面代码中的函数声明改为等价的函数表达式，那么执行的时候就会出错：

```javascript
//报错
console.log(sum(10, 10));
let sum = function(num1, num2) { return num1 + num2; }
```

上面的代码之所以会出错，是因为这个函数定义包含在一个变量初始化语句中，而不是函数声明中。这意味着代码如果没有执行到加粗的那一行，那么执行上下文中就没有函数的定义，所以上面的代码会出错。这并不是因为使用let 而导致的，使用var 关键字也会碰到同样的问题：

```javascript
//报错
console.log(sum(10, 10));
var sum = function(num1, num2) { return num1 + num2; }
```



#### 3. 函数声明的形式- 块级函数

在ECMAScript 3和早期版本中，在代码块中声明一个块级函数严格来说是一个语法错误,但是每个浏览器对这个特性的支持都稍有不同，所以最好不要使用这个特性（最好的选择是使用函数表达式）。

为了遏制这种相互不兼容的行为，ECMAScript 5的严格模式中引入了一个错误提示，当在代码块内部声明函数时程序会抛出错误：

```javascript
'use strict'
if (true) {
  //在ES5中抛出语法错误,在Es6中不报错
  function doSomething() {
    //空函数
  }
}
```

<u>在ECMAScript 6中，会将doSomething()函数视作一个块级声明，从而可以在定义该函数的代码块内访问和调用它。</u>

```javascript
'use strict'
if (true) {
  console.log(typeof doSomething); //'function'
  
  function doSomething() {
    //函数体
  }
  
  doSomething();
}

console.log(typeof doSomething); //'undefined'
```

**在定义函数的代码块内，块级函数会被提升至顶部**，所以typeof doSomething的值为"function"，这也佐证了，即使你在函数定义的位置前调用它，还是能返回正确结果；但是一旦if语句代码块结束执行，doSomething()函数将不再存在。

##### 块级函数的使用场景

块级函数与let函数表达式类似，一旦执行过程流出了代码块，函数定义立即被移除。二者的区别是，在该代码块中，块级函数会被提升至块的顶部，而用let定义的函数表达式不会被提升

```javascript
'use strict'
if (true) {
  console.log(typeof doSomething); //'function'
  
  let doSomething = function () {
    //函数体
  };
  
  doSomething();
}

console.log(typeof doSomething);
```

在这段代码中，当执行到typeof doSomething时，由于此时尚未执行let声明语句，doSomething()还在当前块作用域的临时死区中，因此程序被迫中断执行。

##### ES6非严格模式下的块级函数

在ECMAScript 6中，即使处于非严格模式下，也可以声明块级函数，但其行为与严格模式下稍有不同。<span style="text-decoration-line:underline; text-decoration-style:dashed;text-decoration-color:red;">这些函数不再提升至代码块的顶部，而是提升至外围函数或全局作用域的顶部。</span>

```javascript
//ES6中的行为

if (true) {
  console.log(typeof doSomething); //'function'
  
  function doSomething() {
    //函数体
  }
  
  doSomething();
}

console.log(typeof doSomething); //'function'
```

在这个示例中，doSomething()函数被提升至全局作用域，所以在if代码块外也可以访问到。ECMAScript 6将这个行为标准化了，移除了之前存在于各浏览器间不兼容的行为，所以所有ECMAScript 6的运行时环境都将执行这一标准。

### new介绍

> the `new` operator lets developers create an instance of a user-defined object type or one of the built-in object types that has a constructor function.



#### Syntax

> new constructor [ ([arguments])]

#### Parameters

`constructor`

A class or function that specifies the type of the object instance

`arguments`

A list of values that the `constructor` will be called with

#### Desc

**the `new` keyword does the following things:**

1.create <span style="color:blue">a blank, plain JavaScript object</span>

2.Adds a property to the new object(`__proto`__) that links to the constructor function's prototype object.

3.Binds the newly created object instance as the `this` context(i.e. all references to `this` in the constructor function now refer to the object created in the first step)

4.Returns `this` if the function doesn't return an object



**when the code `new Foo(...)` is executed, the following things happen:**

1.A new object is created, inherited from `Foo.prototype`

2.the constructor function `Foo` is called with the specified arguments, and with `this` bound to the newly created object. `new Foo` is equivalent to `new Foo()`. i.e. if no argument list is specified, `Foo` is called without arguments.

3.the object(not null, false, 3.1415 or other primitive types) returned by the constructor function becomes the result of the whole `new` expression. If the constructor function doesn't explicitly return an object, the object created in step 1 is used instead (normally constructors don't return a value, but they can choose to do s<u>o if they want to override the normal object createion process</u>) 没太明白,中文版翻译可以理解







### 函数名

因为函数名就是指向函数的指针，所以它们跟其他包含对象指针的变量具有相同的行为。这意味着
一个函数可以有多个名称.

* 使用不带括号的函数名会访问函数指针，而不会执行函数
* 把函数名称 设置为null之后，就切断了它与函数之间的关联
* ECMAScript 6 的所有函数对象都会暴露一个只读的name 属性，其中包含关于函数的信息。
  * 多数情况下，这个属性中保存的就是一个函数标识符，或者说是一个字符串化的变量名
  * 即使函数没有名称，也会如实显示成空字符串。
  * 如果它是使用Function 构造函数创建的，则会标识成"anonymous
  * 如果函数是一个获取函数、设置函数，或者使用bind()实例化，那么标识符前面会加上一个前缀

```javascript
function sum(num1, num2) {
	return num1 + num2;
}
console.log(sum(10, 10)); // 20
let anotherSum = sum;
console.log(anotherSum(10, 10)); // 20
sum = null;
console.log(anotherSum(10, 10)); // 20

//函数的name属性
function foo() {}
let bar = function() {};
let baz = () => {};
console.log(foo.name); //foo
console.log(bar.name); //bar
console.log(baz.name); //baz
console.log((() => {}).name); //(空字符串)
console.log((new Function()).name); //anonymous

//设置函数,获取函数,bind方法绑定的函数的name值
function foo() {}
console.log(foo.bind(null).name); //bound foo

let dog = {
  years: 1,
  get age() {
    return this.years;
  },
  set age(newAge) {
    this.years = newAge;
  }
};

let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, 'age');
console.log(propertyDescriptor.get.name); // get age
console.log(propertyDescriptor.set.name); // set age
```

### 匿名和具名函数

#### 匿名函数表达式

函数表达式可以是匿名的，而函数声明则不可以省略函数名——在JavaScript的语法中这是非法的。

```javascript
setTimeout(function() {
  console.log('xxx');
}, 1000)
```

#### 匿名函数表达式缺点

匿名函数表达式有几个缺点需要考虑:

* 在栈追踪中不会显示出有意义的函数名,调试困难
* 在递归或事件触发后事件监听器需要解绑自身时需要引用自己, 只能使用已经过期的arguments.callee引用
* 匿名函数省略了对于代码可读性/可理解性很重要的函数名



#### 具名函数表达式(行内函数表达式)

XX

#### 最佳实践

给函数表达式指定一个函数名



### 函数参数

ECMAScript 函数既不关心传入的参数个数，也不关心这些参数的数据类型。调用时传入参数数量不要求于定义时参数数值一致.因为ECMAScript 函数的参数在内部表现为一个数组, 在function关键字定义(非箭头)函数时,可以在函数内部访问arguments对象.

**ECMAScript 中函数的参数就是局部变量**。

#### 形参与实参🔸

**实参**: 调用函数时，传递给函数的值被称为函数的实参（值传递).

**形参**: 调用函数时，传递给函数的值对应位置的函数参数名叫作形参.



```js
# 形参(形式参数)
定义函数时,可以在函数的()中定义数量不等的形参
形参就相当于在函数中声明了对应的变量,但是没有实际的值. //返回的是undefined
function fn(a, b){
    console.log('a =', a);  //undefined
    console.log('b =', b);  //undefined
}



## 实参(实际参数)
在调用函数时,可以向函数中传递数量不等的实参,
实参会赋值给对应的形参
在JS中不会检查实参的类型和数量
 - 可传递任意类型的实参
 - 可以传递任意数量的实参
 - 如果数量一样,则实参和形参一一对应
 - 如果实参少,则没有对应的实参的形参是undefined
 - 如果实参多,则多余的实参不会被使用
```



#### 函数参数的传递方式(按值)🔸:

**ECMAScript 中所有函数的参数都是按值传递的**。这意味着函数外的值会被复制到函数内部的参数
中，就像从一个变量复制到另一个变量一样。

如果是原始值，那么就跟原始值变量的复制一样，

如果是引用值，那么就跟引用值变量的复制一样。传递的是对象的引用.   ????

> 在按值传递参数时，值会被复制到一个局部变量（即一个命名参数，或者用ECMAScript 的话说，就是arguments 对象中的一个槽位）。
>
> 在按引用传递参数时，值在内存中的位置会被保存在一个局部变量，这意味着对本地变量的修改会反映到函数外部。（这在ECMAScript 中是不可能的。）
>
> ---Javascript高级程序设计 4.1.3 传递参数

```js
//证明对象在函数的参数传递中是按值传递的代码
function setName(obj) {
    obj.name = "Nicholas";   //obj地址没有改变
    obj = new Object();      //obj地址改变
    obj.name = "Greg";
}

var person = new Object(); 
setName(person);
alert(person.name); // "Nicholas"
var person = new Object();
setName(person);
alert(person.name); // "Nicholas"

如果对象在函数的参数传递中是按引用传递的，那么当解析器执行到：obj = new Object()这段代码的时候，person原先指向的那个对象将被删除，即obj和person都将指向新建的obj对象，而新建的obj对象的name属性时“Greg”,则弹出的应该是“Greg”，而结果却不是，说明： 对象在函数的参数传递中是按值传递！

假设person地址是0x100, obj的地址因为接收的person也会相同.0x100地址上对象新增name属性,值为'Nicholas'.
当obj被赋值为新对象的时候,地址更改为0x200. 0x200地址上的对象有name属性,值为'Greg'.
当打印person.name时,打印的结果是地址0x100上的name值

//资料来源: https://www.cnblogs.com/superdg003/p/5946727.html 
```



> 以上的内容不好理解不用看,以下内容来自JavaScript深入之参数按值传递 https://github.com/mqyqingfeng/Blog/issues/10



##### 几种传递方式

**按值传递** 

```javascript
var value = 1;
function foo(v) {
  v = 2;
  console.log(v); //2
}

foo(value);
console.log(value); //1
```



**引用传递?**

拷贝虽然很好理解，但是当值是一个复杂的数据结构的时候，拷贝就会产生性能上的问题。

所以还有另一种传递方式叫做按引用传递。

所谓按引用传递，就是传递对象的引用，函数内部对参数的任何改变都会影响该对象的值，因为两者引用的是同一个对象。

```javascript
var obj = {
  value: 1
};

function foo(o) {
  o.value = 2;
  console.log(o.value); //2
}

foo(obj);
console.log(obj.value); //2
```

那以上这种传值方式到底是不是按引用传递呢?

**共享传递**

案例

```javascript
var obj = 1;

function foo(o) {
  o = 2;
  console.log(o); //2
}

foo(obj); 
console.log(obj); //1
```

<span style="color:red">如果JavaScript采用的是引用传递,外层的值也会被修改,以上案例中却没有被修改,所以不是引用传递.</span>

其实还有第三种传递方式, 共享传递.

<span style="text-decoration: underline wavy">共享传递是指, 在传递对象的时候, 传递对象的引用的副本.</span>

注意: 按引用传递是传递对象的引用, 而<u>按共享传递是传递对象的引用的副本</u>.

所以修改o.value,可以通过引用找到原值,但是直接修改o,并不会修改原值.

**结论**

* <span style="color: red">参数如果是基本类型是按值传递,如果是引用类型按共享传递</span>
*  按值传递拷贝了原值，按共享传递拷贝了引用，都是拷贝值，所以可以理解成都是按值传递。
* 但是因为拷贝副本也是一种值的拷贝,所以在高程中也直接认为是按值传递.









#### ES6-默认参数

在ECMAScript5.1 及以前，实现默认参数的一种常用方式就是检测某个参数是否等于undefined，如果是则意味着没有传这个参数，那就给它赋一个值; ES6支持显式定义默认参数.

在使用默认参数时，arguments 对象的值不反映参数的默认值，只反映传给函数的参数。

跟ES5 严格模式一样，修改命名参数也不会影响arguments 对象，它始终以调用函数时传入的值为准.

默认参数值并不限于原始值或对象类型，也可以使用调用函数返回的值

<u>函数的默认参数只有在函数被调用时才会求值，不会在函数定义时求值. 且计算默认值的函数只有在调用函数但未传相应参数时才会被调用</u>。

```js
//未使用默认参数
function multiplay(a,b){
	b=(typeof b!=='undefined'?b:1);
  return a*b;
}
multiplay(5)

//使用默认参数
function multiplay(a,b=1){
  return a*b;
}
multiply(5)

//arguments对象始终以传入的值为准
function makeKing(name = 'Henry') {
  name = 'Louis';
  return `King ${arguments[0]}`;
}
makeKing(); //King undefined
makeKing('Louis'); //King 

//默认参数值使用函数返回值
let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
let ordinality = 0;
function getNumerals() {
  //每次调用后递增
  return romanNumerals[ordinary++];
}
function makeKing(name='Henry', numerals = getNumerals()) {
  return `King ${name} ${numerals}`;
}
console.log(makeKing()); // 'King Henry I'
console.log(makeKing('Louis', 'XVI')); // 'King Louis XVI'
console.log(makeKing()); // 'King Henry II'
console.log(makeKing()); // 'King Henry III'
```



**使用对象做函数默认值与Python比较**

```javascript
function make_list(v, the_list = []) {
  return this_list.push(v)
}

make_list(12) //12

make_list(47) //47

make_list('oh no') //'oh no'
```

```python
def make_list(v, the_list=[]):
	the_list.append(v)
	retur the_list
	
	
make_list(12) //[12]

make_list(47) //[12, 47]

make_list('oh no') ///[12, 47, 'oh no']

//solution

def make_list(v, the_list=[]):
  if the_list is Node:
    the_list = []
  the_list.append(v)
  return the_list
```









**默认参数表达式**

默认参数除了原始值,还可以是非原始值.例如函数.

```javascript
function getValue() {
  return 5;
}

function add(first, second = getValue()) {
  return first + second;
}

console.log(add(1, 2)); //3
console.log(add(1)); //6
```

初次解析函数声明时不会调用getValue()方法，只有当调用add()函数且不传入第二个参数时才会调用。

注意，当使用函数调用结果作为默认参数值时，如果忘记写小括号，例如，second= getValue，则最终传入的是对函数的引用，而不是函数调用的结果。

正因为默认参数是在函数调用时求值，所以可以使用先定义的参数作为后定义参数的默认值

```javascript
function add(first, second = first) {
  return first + second;
}

console.log(add(1, 1)); //2
console.log(add(1)); //2
```





**默认参数作用域与暂时性死区**!

因为在求值默认参数时可以定义对象，也可以动态调用函数，所以函数参数肯定是在某个作用域中
求值的。给多个参数定义默认值实际上跟使用let 关键字顺序声明变量一样.

因为参数是按顺序初始化的，所以后定义默认值的参数可以引用先定义的参数

参数初始化顺序遵循“暂时性死区”规则，即前面定义的参数不能引用后面定义的

参数也存在于自己的作用域中，它们不能引用函数体的作用域

```javascript
function makeKing(name = 'Henry', numerals = 'VIII') {
	return `King ${name} ${numerals}`;
}
console.log(makeKing()); // King Henry VIII
//这里的默认参数会按照定义它们的顺序依次被初始化。可以依照如下示例想象一下这个过程：
function makeKing() {
  let name = 'Henry';
  let numerals = 'VIII';
  return `King ${name} ${numerals}`;
}

//因为参数是按顺序初始化的，所以后定义默认值的参数可以引用先定义的参数
function makeKing(name = 'Henry', numerals = name) {
	return `King ${name} ${numerals}`;
}
console.log(makeKing()); // King Henry Henry

//参数初始化顺序遵循“暂时性死区”规则，即前面定义的参数不能引用后面定义的
// 调用时不传第一个参数会报错
function makeKing(name = numerals, numerals = 'VIII') {
	return `King ${name} ${numerals}`;
}

//参数也存在于自己的作用域中，它们不能引用函数体的作用域
// 调用时不传第二个参数会报错
function makeKing(name = 'Henry', numerals = defaultNumeral) {
	let defaultNumeral = 'VIII';
	return `King ${name} ${numerals}`;
}
```

函数参数有自己的作用域和临时死区，其与函数体的作用域是各自独立的，也就是说参数的默认值不可访问函数体内声明的变量。



#### ES6-剩余参数

就是下面的参数收集



#### ES6-参数扩展与收集

**扩展参数**

在给函数传参时，有时候可能不需要传一个数组，而是要分别传入数组的元素.

```javascript
//假设有如下函数定义，它会将所有传入的参数累加起来：
let values = [1,2,3,4];
function sum() {
  let sum = 0;
  for (let i=0; i<arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
//es5中 想把定义在这个函数这面的数组拆分，那么就得求助于apply()方法
console.log(sum().apply(null, values));

//es6 扩展操作符
console.log(sum(...values));
```

arguments 对象只是消费扩展操作符的一种方式。在普通函数和箭头函数中，也可以将扩展操作符用于命名参数，当然同时也可以使用默认参数.

```javascript
function getProduct(a, b, c = 1) {
	return a * b * c;
}
let getSum = (a, b, c = 0) => {
	return a + b + c;
}
console.log(getProduct(...[1,2])); // 2
console.log(getProduct(...[1,2,3])); // 6
console.log(getProduct(...[1,2,3,4])); // 6

console.log(getSum(...[0,1])); // 1
console.log(getSum(...[0,1,2])); // 3
console.log(getSum(...[0,1,2,3])); // 3
```



**收集参数**

在函数定义时，可以使用扩展操作符把不同长度的独立参数组合为一个数组(Array的实例)

收集参数的前面如果还有命名参数，则只会收集其余的参数；如果没有则会得到空数组。因为收集
参数的结果可变，所以只能把它作为最后一个参数：

使用收集参数并不影响arguments 对象，它仍然反映调用时传给函数的参数

```javascript
//位置 只能放在最后
function getProduct(...values, lastValue) {} //不可以

//不影响arguments对象
getSum(1,2,3);
function getSum(...values) {
  console.log(arguments.length); //3
  console.log(arguments); //[1,2,3]
  console.log(values); //[1,2,3]
}
```

参数收集(剩余参数, 不定参数)的使用限制:

* 每个函数最多只能声明一个不定参数,而且一定要放在所有参数的末尾;
* 不定参数不能用于对象字面量setter之中

```javascript
//抛出语法错误.当不定参在对象字面量setter中使用
let obj = {
  set name(...value) {
    //
  }
}

//之所以存在这条限制，是因为对象字面量setter的参数有且只能有一个。而在不定参数的定义中，参数的数量可以无限多，所以在当前上下文中不允许使用不定参数。
```



### 函数内部

在ECMAScript 5 中，函数内部存在两个特殊的对象：arguments 和this。ECMAScript 6 又新增
了new.target 属性。

#### arguments

**define**

> `arguments` is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

**Properties**

`arguments.callee`

> Reference to the currently executing function that the arguments belong to.
>
> Forbidden in strict mode

arguments 对象的callee 属性，是一个指向arguments 对象所在函数的指针。阶乘函数要正确执行就必须保证函数名是factorial，从而导致了紧密耦合。使用arguments.callee 就可以让函数逻辑与函数名解耦.

```javascript
//使用callee属性解决阶乘函数的耦合

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
    //return num * factorial(num - 1);
  }
}
//用arguments.callee 代替了之前硬编码的factorial。这意味着无论函数叫什么名称，都可以引用正确的函数
let trueFactorial = factorial;
factorial = function() { return 0; }
console.log(trueFactorial(5)); //120
console.log(factorial(5)); //0
```

`arguments.length`

> the number of arguments that were passed to the function

`arguments[@@iterator]`

> Returns a new Array iterator object that contains the values for each index in `arguments`



**arguments.callee实例**

> [实现一个函数 where，它返回它被调用的时候所在的函数的名字](https://www.zhihu.com/question/37904806/answer/488668791)

写一个函数,实现调用这个函数的函数的名称  ????????

```javascript
//非严格模式下
function where() {
  return arguments.callee.caller.name;
}
```

```javascript
//严格模式下
const where = () => {
  let reg = /\s+at\s(\S+)\s\(/g
  let str = new Error().stack.toString();
  let res = reg.exec(str) && reg.exec(str)
  return res && res[1];
}
```



**类数组对象转换成数组的 5 种方法**

```javascript
[].slice.call(arguments)
[].splice.call(arguments, 0);
[].concat.apply([], arguments);
Array.from(arguments)
[...arguments]
for循环
```





**desc**

* 'Array-Like' means that `arguments` has a `length` property and properties indexed from zero, but it doesn't hava `Array`'s built-in methods like `forEach()` or `map()`.
* the `arguments` object is a local variable available within all non-arrow functions.
* u can refer to a function's arguments inside that function by using its `arguments` object
* it has entries(条目) for each argument the function was called with, with the first entry's index at 0.
* each arguments can also be set or reassigned
* the arguments object is not an `Array`. It is similar, but lacks all `Array` properties except `length`.
* <u>**converted to a real Array**</u>
  * [].slice.call(arguments)
  * [].splice.call(arguments, 0)
  * [].concat.apply([], arguments)
  * Array.from(arguments)
  * [...arguments]
* the `typeof` opetator returns `'object'` when used with `arguments`





`arguments`变量只是 *”***类数组对象**“，并不是一个数组。称其为类数组对象是说它有一个<u>索引编号和`length`属性</u>。它并不拥有全部的Array对象的操作方法。

arguments 对象是一个类数组对象（但不是Array 的实例）:

* 使用中括号语法访问传入的实参,而不必定义形参
* 访问arguments.length,确定传入参数个数
* arguments对象可以跟命名参数一起使用
* arguments对象的值始终与对应的命名参数同步,但内存地址是不同的.
* arguments 对象的长度是根据传入的参数个数，而非定义函数时给出的命名参数个数确定的
* 如果只传了1个参数,然后为arguments[1]赋值,这个值并不会反映到第二个命名参数.
* ES5严格模式下,为arguments[n]赋值不会改变传入实参的值;重写arguments对象会导致语法错误
* ES6中,如果一个函数使用了默认参数值,则无论是否显式定义严格模式,arguments对象的行为与ES5严格模式下一致(参数变化但arguments不变)
* 箭头函数中不能访问arguments,但可以在包装函数中将其传给箭头函数

```JavaScript
//在浏览器中的表现形式
function fn() {
	console.log(arguments)
}
fn(1,2,3); //Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//与命名参数一起使用
function doAdd(num1, num2) {
  if (arguments.length === 1) {
    console.log(num1 + 10);
  } else if (arguments.length === 2) {
    console.log(argments[0] + num2);
  }
}

//始终与命名参数同步
function doAdd(num1 ,num2) {
  arguments[1] = 10; //修改arguments[1]也会修改num2 的值
  console.log(arguments[0] + num2);
}

//arguments.length由传参个数确定,而非形参个数
doAdd(10, 10) //2
function doAdd(num1, num2, num3) {
	console.log(arguments.length)
}

//实参只有一个的话,arguments[1]的赋值不会改变第二个;形参有俩实参传1个,则第二个为undefined

//严格模式下,arguments中括号语法不会改变实参的值;
function sum(num1, num2) {
  'use strict'
  arguments[1] = 2;
  return num1 + num2;
}
sum(10, 10); //20


//ES5严格模式下或ES6存在默认参数下,参数变化但arguments对象不会变
function fn(a, b = 1) {
  a = 3;
  b = 4;
  console.log(a === arguments[0]); //false
  console.log(b === arguments[1]); //false
}

//严格模式下,重写arguments会导致语法错误
function sum(num1, num2) {
  'use strict'
  arguments = {};
}

//Uncaught SyntaxError: Unexpected eval or arguments in strict mode
```





#### this

**定义**

* this是<span style="color:red">函数调用时</span>创建执行上下文的一个属性,会在函数执行的过程中用到.

* this是在运行时进行绑定的,并不是在编写时绑定,它的上下文取决于函数调用时的各种条件.

* this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。this就是这个记录的一个属性，会在函数执行的过程中用到。

##### 使用原因

来个例子:

```javascript
function identify() {
  return this.name.toUpperCase();
}

function speak() {
  let greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

let me = {
  name: 'Kyle'
};

let you = {
  name: 'Reader'
};

identify.call(me); //KYLE
identify.call(you); //READER

speak.call(me); //Hello, I'm KYLE
speak.call(you); //Hello, I'm READER
```

这段代码可以在不同的上下文对象（me和you）中重复使用函数identify()和speak()，不用针对每个对象编写不同版本的函数。如果不使用this，那就需要给identify()和speak()显式传入一个上下文对象。

```javascript
function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  let greeting = "Hello, I'm " + identify(context);
  console.log(greeting);
}
```

**所以综上所述,使用this的原因有:**

* 显式传递上下文对象会让代码越来越混乱

* 调用函数时不用显示传递上下文对象, this隐式传递一个对象引用,API简洁且易于复用

  



##### 调用位置

调用位置就是函数在代码中被调用的位置（而不是声明的位置）。

因为某些编程模式可能会隐藏真正的调用位置。最重要的是要分析调用栈（就是为了到达当前执行位置所调用的所有函数）。我们关心的调用位置就在当前正在执行的函数的前一个调用中。

查看调用栈的方法

1. 把调用栈想象成一个函数调用链，就像我们在前面代码段的注释中所写的一样。但是这种方法非常麻烦并且容易出错。
2. 浏览器内置的开发者工具
   1. 函数第一行代码 设置断点
   2. 第一行前插入 debugger; 语句

调用栈中第二个元素，这就是真正的调用位置。 如下图所示:

![屏幕截图-2022-04-09-163810](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/屏幕截图-2022-04-09-163810.72ky3op08200.webp)



##### this绑定规则

> 来源: 你不知道的JavaScript(上卷)

函数的执行过程中调用位置如何决定this的绑定对象。

* 默认绑定,
* 隐式绑定,
* 显示绑定,
* new绑定



###### 1.默认绑定

最常用的函数调用类型：独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。

```JavaScript
function foo() {
  console.log(this.a);
}

var a = 2;
foo(); //2
```

通过分析调用位置来看看foo()是如何调用的。在代码中，foo()直接使用不带任何修饰的函数引用进行调用的，因此只能使用默认绑定，无法应用其他规则。

注意事项:

如果使用严格模式(strict mode), 则不能将全局对象用于默认绑定, this会被绑定到undefined.

<u>虽然<span style="color:red;">this的绑定规则完全取决于调用位置</span>,但是只有foo()运行在非strict mode下时,默认绑定才能绑定到全局对象; 在严格模式下调用foo()则不影响默认绑定.</u>

```JavaScript
function foo() {
  'use strict'
  console.log(this.a);
}

var a = 2;
foo(); 
//VM53:3 Uncaught TypeError: Cannot read properties of undefined (reading 'a')
//  at foo (<anonymous>:3:20)
//  at <anonymous>:7:1
```



###### 2.隐式绑定

调用位置是否有上下文对象,或者说是否被某个对象**拥有或包含**,不过这种说法可能会造成一些误导.

```JavaScript
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo(); //2
```

<span style="text-decoration:underline wavy blue">无论是直接在obj中定义还是先定义函数再添加为引用属性,这个函数严格来说都不属于obj对象.</span>

因为JavaScript是基于函数作用域的(ES6中增加了块作用域),JavaScript中的对象没有作用域的概念.

比如全局代码:

```JavaScript
var num = 9;
var obj = {
  a:2,
  fn:function(){}
}
```

函数fn的作用域是全局对象,你可以在fn中访问num,但是不能访问到a, 也就是说函数fn的作用域链上并不包含obj对象, 如果要访问a,只能在fn里使用this.a来访问,并且对函数fn的调用方式是obj.fn()

Note:

* 当函数引用有上下文对象时,隐式绑定规则会把函数调用中的this绑定到这个上下文对象.
* 对象属性引用连中只有上一层或者说最后一层在调用位置中起作用.

```JavaScript
function foo() {
  console.log(this.a);
}

var obj2 = {
  a:42,
  foo:foo
};

var obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.foo(); //42
```



**隐式丢失**

一个最常见的this绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把this绑定到全局对象或者undefined上，取决于是否是严格模式。

隐式丢失的几种情况:

* 将<u>对象.方法</u>赋值给变量,调用这个变量
* 参数传递.将函数通过参数传递进函数.
* 把函数传入语言内置的函数

<u>将对象.方法赋值给变量</u>

```javascript
function foo() {
  console.log(this.a);
}

var obj = {
  a:2,
  foo:foo
};

var bar = obj.foo;

var a = 'oops, global!';

bar(); //'oops, global!'
```

虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身，因此此时的bar()其实是一个不带任何修饰的函数调用，因此应用了默认绑定。



<u>传入回调函数</u>; 也会存在调用回调函数的函数修改this的情况

```javascript
function foo() {
  console.log(this.a);
}

function doFoo(fn) {
  fn();
}

var obj = {
  a:2,
  foo:foo
};

var a = 'oops, global!';

doFoo(obj.foo); //'oops, global!'
```

<span style="background: #ccc">参数传递其实就是一种**隐式赋值**</span>，因此我们传入函数时也会被隐式赋值，所以结果和上一个例子一样。

<u>把函数传入语言内置的函数.</u>

```javascript
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var a = 'oops, global!';

setTimeout(obj.foo, 100); //'oops, global!'
```

javascript内置的setTimeout()函数实现和下面的伪代码类似:

```javascript
function setTimeout(fn, delay) {
  //等待delay毫秒
  fn();
}
```

问题:

无论是哪种情况，this的改变都是意想不到的，实际上你无法控制回调函数的执行方式，因此就<u>没有办法控制调用位置以得到期望的绑定</u>。之后我们会介绍如何通过<u>固定this</u>来修复这个问题。



###### 3.显示绑定

分析隐式绑定时，我们必须在一个对象内部包含一个指向函数的属性，并通过这个属性间接引用函数，从而把this间接（隐式）绑定到这个对象上。

那么如果我们不想在对象内部包含函数引用，而想在某个对象上强制调用函数，该怎么做呢？

显示绑定: 使用call()/apply()

```javascript
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2
};

foo.call(obj); //2


function foo() {
  console.log(this.a);
}

var obj = {
  a:2
};

foo.call(obj);
```

通过foo.call(), 我们可以在调用foo时强制把它的this绑定到obj上.

如果你传入了一个原始值（字符串类型、布尔类型或者数字类型）来当作this的绑定对象，这个原始值会被转换成它的对象形式（也就是new String(..)、new Boolean(..)或者newNumber(..)）。这通常被称为**“装箱”**。(**拆箱**: 将对象转化成基本数据类型)



Note:

显示绑定仍然无法解决之前提出的问题. 但是有几种方法可以解决. ???? 什么问题?

> 来源: 微信读书中书友想法
>
> 使用场景很普遍,但就是没有考虑到.
>
> 虽然call和apply可以在任意地方调用,但是它是直接进行调用送的.设想,如果在某个第三方库中,其异步的回调函数需要改变this,如果这个时候使用call/apply会立即调用并更改this,异步在不知道完成与否的情况下,异步回调直接运行了.

**1.硬绑定**

显示绑定的一个变种

我们创建了函数bar()，并在它的内部手动调用了foo.call(obj)，因此强制把foo的this绑定到了obj。无论之后如何调用函数bar，它总会手动在obj上调用foo。这种绑定是一种显式的强制绑定，因此我们称之为硬绑定。

```javascript
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2
};

var bar = function() {
  foo.call(obj);
};

bar(); //2
setTimeout(bar, 100); //2
```

硬绑定应用场景:

1.创建一个包裹函数,负责接收参数并返回值.

```javascript
function foo(sth) {
  console.log(this.a, sth);
  return this.a + sth;
}

let obj = {
  a: 2
};

let bar = function() {
  return foo.apply(obj, arguments);
};

let b = bar(3);//2 3
console.log(b); //5
```

2.创建一个可以重复使用的辅助函数

```javascript
function foo(sth) {
  console.log(this.a , sth);
  return this.a + sth;
}

//简单的绑定函数
function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
  };
}

let obj = {
  a: 2
};

let bar = bind(foo, obj);

let b = bar(3); //2 3
console.log(b); //5
```

由于硬绑定是一种非常常用的模式，所以ES5提供了内置的方法Function.prototype.bind.

bind(..)会返回一个硬编码的新函数，它会把你指定的参数设置为this的上下文并调用原始函数。



**2.API调用的'上下文'**

第三方库的许多函数，以及JavaScript语言和宿主环境中许多新的内置函数，都提供了一个可选的参数，通常被称为“上下文”（context），其作用和bind(..)一样，确保你的回调函数使用指定的this。

这些函数实际上就是<span style="color:red">通过call(..)或者apply(..)实现了显式绑定</span>，这样你可以少写一些代码。

举个例子:

```javascript
function foo(el) {
  console.log(el, this.id);
}


var obj = {
  id: 'awesome'
}

//调用foo()时把this绑定到obj
[1,2,3].forEach(foo, obj);
```



```javascript
//来个例子

Array.prototype.forEach = function() {
  //check the type and lengths
  
  let arr = this;
  let callback = [].shift.call(arguments);
  let thisArg = arguments[0] || globalThis;
  for (let i=0,len=arr.length; i<len; i++) {
    callback.call(thisArg, arr[i], i, arr)
  }
}
```





###### 4.new绑定



使用new来调用函数,或者说发生构造函数调用时,会自动执行下面的操作:

1. 内存中新建一个对象
2. 将新建对象的隐式原型[[prototype]]指针赋值为构造函数的原型prototype
3. 这个新对象会绑定到函数调用的this
4. 如果函数返回非空对象,则返回;否则,返回新建对象.

```javascript
//构造函数篇 模拟实现new操作符

function newOp() {
  let obj = {};
  let Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  let result = Constructor.apply(obj, arguments);
  return typeof result === 'object' ? result : obj;
}
```



##### 绑定优先级

1.隐式绑定和显示绑定哪个优先级高?

显示绑定>隐式绑定

```javascript
function foo() {
  console.log(this.a);
}

let obj1 = {
  a: 2,
  foo: foo
};

let obj2 = {
  a: 3,
  foo: foo
};

obj1.foo(); //2
obj2.foo(); //3

obj1.foo.call(obj2); //3
obj2.foo.call(obj1); //2
```

2.new绑定和隐式绑定

new绑定 > 隐式绑定

```javascript
function foo(sth) {
  this.a = sth;
}

let obj1 = {
  foo: foo
};

let obj2 = {};


obj.foo(2);
console.log(obj1.a); //2

obj1.foo.call(obj2, 3);
console.log(obj2.a); //3

let bar = new obj1.foo(4);
console.log(obj1.a);//
console.log(bar.a);//4
```

可以看到new绑定比隐式绑定优先级高. new绑定和隐式绑定在同一个地方上

3.new绑定和显示绑定

new绑定 > 显示绑定

因为new和call/apply无法一起使用,因此无法通过new foo.call(obj1)来直接进行测试.但是可以使用硬绑定来测试它俩的优先级.

硬绑定: Function.prototype.bind()会创建一个新的包装函数,这个函数会忽略它当前的this绑定(无论绑定的对象是什么),并把我们提供的对象绑定到this上.

来个例子: 

```javascript
function foo(sth) {
  this.a = sth;
}

let obj1 = {};

let bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); //2

let baz = new bar(3);
console.log(obj1.a); //2
console.log(baz.a); //3
```

bar被硬绑定到obj1上,但是new bar(3)并没有像我们预计的把obj1.a修改为3.相反, new修改了硬绑定(到obj1的)调用bar()中的this.





##### 判断this

1. 函数是否在new中调用(new绑定)? 如果是, this绑定到新创建的对象
2. 函数是否通过call, apply(显示绑定)或者硬绑定调用? 如果是的话, this绑定的是指定的对象.
3. 函数在某个上下文对象中调用(隐式绑定), this绑定的是那个上下文对象
4. 如果都不是的话,使用默认绑定,但在严格模式下,会绑定到undefined,否则绑定到全局对象.



##### **this的不同指向**

* 以`函数`形式调用,非严格模式下指向`window`,严格模式为`undefined`
* 以`方法`形式调用,this指向调用方法的`对象`
* 以`构造函数`形式调用,this指向`实例`
* 以`call/apply`形式调用, this是它们的`第一个参数`
* 以`箭头函数`形式调用,this由`外层作用域`决定
* 在`DOM事件`中,this指向当前触发事件的`事件源`



##### **改变this指向的几种方式**

* 箭头函数
* 函数内部赋值`_this=this`
* 使用`apply call bind`
* 构造函数



##### this绑定例外 !!!

<u>1.可以忽略的this</u>

> 如果把null或undefined作为this的绑定对象传入call, apply, bind, 这些值在调用时会被忽略,实际应用的默认绑定规则.

<span style="color:blue">什么情况下传入null?</span>

一种常见的做法是使用apply()来展开一个数组,并当做参数传入一个函数.类似地, bind()可以对参数进行柯里化,这种方法有时很有用:

```javascript
function foo(a, b) {
  console.log('a: ' + a +', b:' + b);
}

//把数组展开成参数
foo.apply(null, [2,3]); //a:2, b:3

//使用bind()进行柯里化
var bar = foo.bind(null, 2);
bar(3); //a:2, b:3
```

这两种方法都需要传入一个参数当作this的绑定对象。如果函数并不关心this的话，你仍然需要传入一个占位值，这时null可能是一个不错的选择，就像代码所示的那样。

注意: ES6中使用扩展运算符来代替apply来展开数组.

<span style="color:blue">存在的问题及解决方法:</span>

如果某个函数确实使用了this（比如第三方库中的一个函数），那默认绑定规则会把this绑定到全局对象（在浏览器中这个对象是window），这将导致不可预计的后果（比如修改全局对象）。

更安全的this-- 空集

一种“更安全”的做法是传入一个特殊的对象，把this绑定到这个对象不会对你的程序产生任何副作用。在这里可以使用空对象.

```javascript
let ∅ = Object.create(null);
```

无论你叫它什么，在JavaScript中创建一个空对象最简单的方法都是Object.create(null)（详细介绍请看第5章）。Object.create(null)和{}很像，但是并不会创建Object.prototype这个委托，所以它比{}“更空”.

```javascript
function foo(a, b) {
  console.log('a: ' + a +', b:' + b);
}

//DMZ对象
let ∅ = Object.create(null);

//把数组展开成参数
foo.apply(∅, [2,3]); //a:2, b:3

//使用bind()进行柯里化
var bar = foo.bind(null, 2);
bar(3); //a:2, b:3
```



<u>2.间接引用</u>

另一个需要注意的是，你有可能（有意或者无意地）创建一个函数的“间接引用”，在这种情况下，调用这个函数会应用默认绑定规则。

间接引用最容易在赋值时发生:

```javascript
function foo() {
  console.log(this.a);
}

let a = 2;
let o = {a:3, foo:foo};
let p = {a:4};

o.foo(); //3
(p.foo = o.foo)(); //2
```

赋值表达式p.foo = o.foo的返回值是目标函数的引用，因此调用位置是foo()而不是p.foo()或者o.foo()。根据我们之前说过的，这里会应用默认绑定。

Note:

对于默认绑定来说，决定this绑定对象的并不是调用位置是否处于严格模式，而是函数体是否处于严格模式。

如果函数体处于严格模式，this会被绑定到undefined，否则this会被绑定到全局对象。

<u>3. 硬绑定存在的问题及解决</u> ????!!!!

硬绑定这种方式可以把this强制绑定到指定的对象（除了使用new时），防止函数调用应用默认绑定规则。问题在于，硬绑定会大大降低函数的灵活性，使用硬绑定之后就无法使用隐式绑定或者显式绑定来修改this。

如果可以给默认绑定指定一个全局对象和undefined以外的值，那就可以实现和硬绑定相同的效果，同时保留隐式绑定或者显式绑定修改this的能力。

可以通过一种被称为软绑定的方法来实现我们想要的效果：

```javascript
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj) {
    let fn = this;
    
    //捕获所有curried函数
    let curried = [].slice.call(arguments, 1);
    let bound = function() {
      return fn.apply(!this||this===(window||global) ? obj : this, curried.concat.apply(curried, arguments));
    };
    
    bound.prototype = Object.create(fn.prototype);
    
    return bound;
  }
}
```

除了软绑定之外，softBind(..)的其他原理和ES5内置的bind(..)类似。

* 它会对指定的函数进行封装，首先检查调用时的this，如果this绑定到全局对象或者undefined，那就把指定的默认对象obj绑定到this，否则不会修改this。
* 此外，这段代码还支持可选的柯里化.

测试softBind

> 这个地方的设置还是非常优秀的应该说.
>
> 开始虽然每一句都是明白,但不能理解具体实现的功能.尤其是三元表达式哪里,其实是忽略了一个事实: this的值去取决于调用的位置. 再加上三个例子,更好的理解.

```javascript
function foo() {
  console.log('name: ' + this.name)
}

let obj = {name: 'obj'},
    obj2 = {name: 'obj2'},
    obj3 = {name: 'obj3'};

let fooOBJ = foo.softBind(obj);

fooOBJ(); //name: obj

obj2.foo = foo.softBind(obj);
obj2.foo(); //name: obj2

fooOBJ.call(obj3); //name: obj3
```



##### 箭头函数的this

箭头函数并不是使用function关键字定义的,而是使用被称为'胖箭头'的操作符`=>`定义的. 箭头函数不使用this的四种标准规则,而是根据外层(函数或全局)作用域来决定this.





##### **实例**

以函数形式调用

```javascript
var a = 1000,
    obj = {
      a: 1,
      b: this.a + 1
    };

function fun() {
  let obj = {
    a: 1,
    c: this.a + 2
  }
  return obj.c;
}

console.log(fun()); //
console.log(obj.b); //

```

```JavaScript
var x= 0;
var foo = {
    x:1,
    bar:{
        x:2,
        baz: function () {
            console. log(this.x)
        }
    }
}
var a = foo. bar. baz;
foo.bar.baz(); //2
a();  //0
简化:
foo = {x:1, bar:{}}
bar = {x:2, baz:f}
baz : f

先执行的是foo.bar.baz(); 即调用baz对应的函数
之后调用的a(),以函数形式调用,相当于window.a

```



以对象方法形式调用

```javascript
var a = 1;
var obj = {
  a: 2,
  b: function() {
    return this.a;
  }
}
var t = obj.b;
console.log(t());//
```





#### caller

ECMAScript 5 也会给函数对象上添加一个属性：caller。这个属性引用的是调用当前函数的函数，或者如果是在全局作用域中调用的则为null。

```javascript
function outer() {
	inner();
}
function inner() {
	console.log(inner.caller);
}
outer();
//以上代码会显示outer()函数的源代码。这是因为ourter()调用了inner()，inner.caller指向outer()。如果要降低耦合度，则可以通过arguments.callee.caller 来引用同样的值：

function inner() {
  console.log(arguments.callee.caller); //降低耦合度
}


```

<u>在严格模式下访问arguments.callee 会报错</u>。ECMAScript 5 也定义了arguments.caller，但在严格模式下访问它会报错，在非严格模式下则始终是undefined。这是为了分清arguments.caller和函数的caller 而故意为之的。而作为对这门语言的安全防护，这些改动也让第三方代码无法检测同一上下文中运行的其他代码。严格模式下还有一个限制，就是不能给函数的caller 属性赋值，否则会导致错误。

**实践**

> 既不是标准,也不会称为标准.  不要在生产环境中使用



#### new.target

**概述!!!**

JavaScript函数有两个不同的内部方法：**[[Call]]和[[Construct]]**。

* 当通过new关键字调用函数时，执行的是[[Construct]]函数，它负责创建一个通常被称作实例的新对象，然后再执行函数体，将this绑定到实例上；具有[[Construct]]方法的函数被统称为构造函数。

* 如果不通过new关键字调用函数，则执行[[Call]]函数，从而直接执行代码中的函数体。
* 不是所有函数都有[[construct]]方法,因此不是所有函数都可以通过new来调用.例如箭头函数



**ES5 ES6判断函数是否通过new调用**

在ECMAScript 5中，如果想确定一个函数是否通过new关键字被调用（或者说，判断该函数是否作为构造函数被调用），最流行的方式是使用instanceof

```javascript
function Person(name) {
  if (this instanceof Person) {
    this.name = name; //如果通过new关键字调用;
  } else {
    throw new Error('必须通过new关键字来调用Person');
  }
}

let person = new Person('Nicholas');
let person = Person('Nicholas'); //抛出错误
```

由于[[Construct]]方法会创建一个Person的新实例，并将this绑定到新实例上，通常来讲这样做是正确的，但这个方法也不完全可靠，因为有一种不依赖new关键字的方法也可以将this绑定到Person的实例上

```javascript
function Person(name) {
  if (this instanceof Person) {
    this.name = name; 
  } else {
    throw new Error('必须通过new关键字来调用Person');
  }
}

let person = new Person('Nicholas');
let notAPerson = Person.call(person, 'Michael'); //有效
```

调用Person.call()时将变量person传入作为第一个参数，相当于在Person函数里将this设为了person实例。<u>对于函数本身，无法区分是通过Person.call()（或者是Person.apply()）还是new关键字调用得到的Person的实例。</u>

**用途**

* **为了解决判断函数是否通过new关键字调用的问题**

为了解决判断函数是否通过new关键字调用的问题，ECMAScript 6引入了new.target这个**元属性**. <u>元属性是指非对象的属性，其可以提供非对象目标的补充信息（例如new）</u>

当调用函数的[[Construct]]方法时，n<u>ew.target被赋值为new操作符的目标，通常是新创建对象实例，也就是函数体内this的构造函数;</u>(????)    如果调用[[Call]]方法，则new.target的值为undefined。



```javascript
function King() {
  if (!new.target) {
    throw 'King must be instantiated using "new" '
  }
  console.log('King instantiated using "new" ');
}
new King(); // King instantiated using "new"
King(); // Error: King must be instantiated using "new"


function Person(name) {
  if (typeof new.target !== 'undefined') {
    this.name = name;
  } else {
    throw new Error('必须通过new关键字来调用函数');
  }
}
let person = new Person('Nicholas');
let notAPerson = Person.call(person, 'Michael'); //抛出错误
```

* **检查new.target是否被某个特定构造函数所调用**

```javascript
function Person(name) {
  if (typeof new.target === Person) {
    this.name = naem;
  } else {
    throw new Error('必须通过new关键字来调用Person')
  }
}

function anotherPerson(name) {
  Person.call(this, name);
}

let person = new Person('Nicholas'); 
let anotherPerson = new anotherPerson('Nicholas'); //抛出错误
```

真正的调用Person.call(this, name)没有使用new关键字，因此new.target的值为undefined会抛出错误。

**注意:**  在函数外使用new.target是一个语法错误。



### 函数调用

定义一个函数并不会自动的执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。**调用**函数才会以给定的参数真正执行这些动作.

函数一定要处于调用它们的域中,因为函数的声明可以被提升,所以可以在声明之前调用.函数提升只适用于函数声明,而不适应于函数表达式.

如果一个函数中没有使用return语句，则它默认返回`undefined`。要想返回一个特定的值，则函数必须使用 `return` 语句来指定一个要返回的值。(使用[new](https://developer.mozilla.org/zh-cn/docs/JavaScript/Reference/Operators/new)关键字调用一个[构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)除外)

```JavaScript
//it's work;
cosole.log(square(5))
function square(n){return n*n};


console.log(square); //square is hoisted with an initial value undefined;
console.log(square(5)); //Uncaught TypeError: square is not a function
const square = function(n){return n*n};
```



### 函数属性与方法

ECMAScript 中的函数是对象，因此有属性和方法。**每个函数都有两个属性：length和prototype**。其中，length 属性保存函数定义的命名参数的个数,剩余参数的加入不会影响length属性的值.

#### **属性-length**

```javascript
function sayName(name) {
	console.log(name);
}
function sum(num1, num2) {
	return num1 + num2;
}
function sayHi() {
	console.log("hi");
}
console.log(sayName.length); // 1
console.log(sum.length); // 2
console.log(sayHi.length); // 0

function sayName(name, ...obj) {
  //
}
console.log(sayName.length); //1
```



#### 属性-name

> 辨别函数就是一项具有挑战性的任务. 此外, 匿名函数表达式的广泛使用更是加大了调试的难度，开发者们经常要追踪难以解读的栈记录。为了解决这些问题，ECMAScript 6中为所有函数新增了name属性.



* 函数声明的name: 函数名称
* 匿名函数表达式的name: 变量名称
* 非匿名函数表达式的name: 函数名称权重大于变量
* 对象中的方法的name: 方法名称
* 对象中setter和getter方法的name: 'get 函数名称' 'set 函数名称'
* 通过bind()函数创建的函数的name: 'bound 函数名称'
* 通过Function构造函数创建的函数的name: 'anonymous'

```javascript
//函数声明 函数表达式
function doSomething() {
  //
}
let doAnotherThing = function() {};

console.log(doSomething.name); //doSomething
console.log(doAnotherThing.name); //doAnotherThing

//非匿名函数表达式
let doAnotherThing = function doSomething() {};
console.log(doAnotherThing.name); //doSomething

//对象方法中的name值
let person = {
  get firstName() { return 'Nicholas'},
  sayName() {console.log(this.name)}
};
console.log(person.firstName.name); //'get firstName'
console.log(person.sayName.name); //sayName

//通过bind()函数创建的函数
let doSomething = function() {};
console.log(doSomething.bind().name); //'bound doSomething'

//通过Function创建的函数
console.log((new Function()).name); //'anonymous'

//箭头函数的name
console.log((() => {}).name); //''
```

**切记**，函数name属性的值不一定引用同名变量，它只是协助调试用的额外信息，所以<u>不能使用name属性的值来获取对于函数的引用</u>。



#### **属性-prototype**

prototype 是保存引用类型所有实例方法的地方，这意味着toString()、valueOf()等方法实际上都保存在prototype 上，进而由所有实例共享。<u>在ECMAScript 5中，prototype 属性是不可枚举的，因此使用for-in 循环不会返回这个属性</u>。





#### **Function.prototype.call()**

**define**

> the method calls a function with a given `this` value and arguments provided individually

**syntax**

```javascript
call()
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1,...,argN)
```

`thisArg` optional

* the value to use as `this` when calling `func`
* In certain cases, `thisArg` may not be the actual value seen by the method.
  * if the method is a function in [non-strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), null and undefined will be replaced with the global object, and primitive values will be converted to objects.

`arg1, ..., argN` optional

* arguments for the function

**return value**

* the result of calling the function with the specified `this` value and arguments

**desc**

* the `call()` allows for a function/method belonging to one object to be assigned and called for a different object.
* `call()` provides a new value of `this` to the function/emthod.
* With `call()` , u can write a method once and then inherit it in another object, without having to rewrite the method for the new object.





**call()方法中this值参数**

如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

```javascript
- call方法的第一个参数,如果参数为空或null或undefined, 则默认传参全局对象.
var obj={};
var f=function(){return this};
console.log(f()===window);//log: true
console.log(f.call(obj)===obj);//log: true
console.log(f.call(null) === window); //true
console.log(f.call(undefined) === window); //true

- 如果call传参不是以上的类型,则转换成相应的包装对象,然后传入方法.例如,5转成number实例.
var f=function(){return this};
f.call(5);//log:Number {5}
```

**call()方法实例**

```javascript
//示例 mdn
1.使用call方法调用父构造函数
function Product(name,price){
  this.name = name;
  this.price = price;
}

function Food(name,price){
  Product.call(this,name,price);
  this.category = 'food';
}
function Toy(name,price){
  Product.call(this, name, price);
  this.category = 'toy';
}

let cheese = new Food('feta',5);
let fun = new Toy('robot',40);

console.log(cheese.name, cheese.price)

//使用call方法调用匿名函数
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for(let i=0;i<animals.length;i++){
  (function(i){
    this.print=function(){
      console.log('#'+i+''+this.species+':'+this.name)
    }
  }).call(animals[i],i)
}

//使用 call 方法调用函数并且指定上下文的 'this'
function greet(){
  let reply = [this.animal, 'typically sleep between',this.sleepDuration].join('');
  console.log(reply);
}
let obj = {animal:'cats', sleepDuration:'12 and 16 hours'};
greet.call(obj); // cats typically sleep between 12 and 16 hours

//使用 call 方法调用函数并且不指定第一个参数（argument）
let sData = 'wisen';
function display(){
	console.log('sData value is %s', this.sData);//%s 相当于%string  相当于占位符作用
}
display.call(); //sData value is 

//在严格模式下，this 的值将会是 undefined
'use strict'
let sData = 'wisen';
function display(){
	console.log('sData value is %s', this.sData);   //%s 相当于%string  相当于占位符作用
}
display.call(); //can't read the property of 'sData' of undefined 
```

**实现call()方法**

> 想法: 不用管细枝末节,实现主要功能,再对参数进行判断

```javascript
Function.prototype.myCall = function() {
  let thisArg = arguments[0] || globalThis;
  thisArg.tempFn = this;
  if (arguments.length === 0) {
    return thisArg.tempFn(...[...arguments])
  }
  let result = thisArg.tempFn(...[...arguments].slice(1));  //Array.from(arguments).splice(1)
  delete thisArg.tempFn;
  return result;
}

//添加Symbol()避免变量重复
Function.prototype.myCall = function() {
  let thisArg = arguments[0] || globalThis;
  let tempFn = Symbol();
  thisArg[tempFn] =  this;
  const result = arguments.length > 1 ? thisArg[tempFn](...[...arguments].slice(1)) : thisArg[tempFn]();
  delete thisArg[tempFn];
  return result;
}

//https://juejin.cn/post/7033275515880341512#heading-44
Function.prototype.myCall = function(thisArg) {
  thisArg = thisArg || globalThis;
  thisArg.func = this;
  const args = [];
  for (let i=1; i<arguments.length; i++){
    args.push('arguments[' + i + ']');
  }
  const result = eval('thisArg.func(' + args + ')');
  delete thisArg.func;
  return result;
}


Function.prototype.myCall = function() {
  let obj = [].shift.call(arguments) || globalThis;
  obj.tempFn = this
  
  let res = obj.tempFn(...[...arguments]);
  delete obj.tempFn;
  return res;
}
```



```javascript
//推荐使用ES6的扩展运算符来代替arguments   听别人说的,还没验证


Function.prototype.myCall = function(...items) {
  //items = JSON.parse(JSON.stringify(items));
  let obj = items.shift()||globalThis;
  let tmepFn = Symbol();
  obj[tempFn] = this;
  
  let res = obj[tempFn](...items);
  delete obj[tempFn];
  
  return res;
}
```



**注意事项2**

当打印添加临时属性的对象时,其结果会包含删除的临时属性,但展开后是没有删除属性的.

同时Chrome会有提示信息: "the value was evaluated upon first expanding. It may have changed since then"

英文提示即是原因,手动展开的过程其实做了<span style="color:blue">预计算</span>.

参考链接:

[CSDN](https://blog.csdn.net/yexudengzhidao/article/details/114657002)

[stackoverflow](https://stackoverflow.com/questions/23429203/weird-behavior-with-objects-console-log)

```javascript


let obj = {};
console.log(obj);
console.log(obj.a);
obj.a = 1;
```

打印结果为:

为什么obj里明明有值,打印obj.a却是undefined

![](https://img-blog.csdnimg.cn/20210311131318444.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleHVkZW5nemhpZGFv,size_16,color_FFFFFF,t_70)







**注意事项**2 ????

```javascript
如果这么写:
let getType = Object.prototype.toString.call;

问题:
1.getType的类型是什么  function 
2.getType可以通过加小括号来调用吗? 报错,显示getType不是一个函数

原因:
getType.name; //call

```





#### **Function.prototype.apply()**

**define**

> the method calls a function with a given `this` value, and `arguments` provided as an array(or an <u>array-like object</u>)

**syntax**

```javascript
apply(thisArg)
apply(thisArg, argsArray)
```

**parameters**

`thisArg`

* the value of `this` provided for the call to `func`
* Note that `this` may not be the actual value seen by the method: 
  * if the method is a function in non-strict mode code, `null` and `undefined` will be replaced with the global object, and primitive values will be boxed(原始值会被包装). 

`argsArray` optional

* an array-like object, specifying the arguments with which `func` should be called, or `null` or `undefined` if no arguments should be provided to the function.
* Starting with ECMAScript 5 these arguments can be <u>a generic array-like object</u> instaed of an array.

**return value**

* the result of calling the function with the specified `this` value and arguments

**desc**

* when the first arguments is undefined or null a similar outcome can be achieved using the array spread syntax.
* u can assign a different `this` object when calling an existing function. `this` refers to the current object(the calling object). With `apply`, u can write a method once, and then inherit it in another object, without having to rewrite the tmethod for the new object.
* With `apply`, u can also use an <u>array literal</u>. for example, `func.apply(this, ['eat', 'bananas'])`, `func.apply(this, new Array('eat', 'banans'))`
* U can also use `arguments` for the `argsArray` parameter. `arguments` is a local variable of a function. It can be used for all unspecified arguments of the called object. Thus, u don't know the arguments of the called object when u use the `apply` method.  U can use `arguments` to pass all the arguments to the called object.
* Since ECMAScript 5th Edition, u can also use any kind of object which is array-like. In practice, this means it's going to have a `length` property, and integer('index') properties in the range(0...length-1).



**examples**

Using apply to append an array to other

> U can use `push` to append an element to an array. If u pass an array to `push`, it will actually add that array as a single element.
>
> `concat` does have the desired behavior in this case, but it does not append to the existing array, it instead creates and returns a new array.
>
> So what now? a loop? surely not?

```javascript
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements)
```

Using apply and built-in functions  ????

> clever usage of `apply` allows u to use built-in functions for some tasks that would probably have otherwise been written by looping over the array values
>
> 通过巧妙地使用 apply，您可以将内置函数用于某些任务，否则这些任务可能是通过循环遍历数组值来编写的。

```javascript
// min/max number in an array
const numbers = [5,6,2,3,7];

let max = Math.max.apply(null, numbers);//this about equal to Math.max(numbers[0],...)
//or Math.max(5,6,...)

let min = Math.min.apply(null, numbers);

//vs. simple loop based algorithm
max = -Infinity, min = +Infinity;

for (let i=0; i<numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
```

But beware: by using `apply` this way, you run the risk of exceeding <u>the JavaScript engine's argument length limit.</u>

The consequences of applying a function with too many arguments(that is, more that tens of thousands of arguments) varies across engines.(应用具有太多参数（即，超过数万个参数）的函数的后果因引擎而异。) The JavaScriptCore engine has hard-coded [arguments limit of 65536.](https://bugs.webkit.org/show_bug.cgi?id=80797)

This is because the limit(and indeed, even the nature of any <u>excessively-large-stack</u> behavior) is unspecified(未规定的). Some engines will throw an exception. More perniciously(更有害的是), others will arbitrarily(任意的) limit the number of arguments actually passed to the applied function. To illustrate this latter case: if such an engine had a limit of four arguments(actual limits are of course significantly higher), it would be as if the arguments `5,6,3,2` had been passed to `apply` in the examples above, <u>rather than(而不是)</u> the full array.

If your value array might grow into the tens of thousands, use a hybrid(混合的) strategy: apply your function to chunks of the array at a time: 将数组切块后循环传入目标方法

```javascript
function minOfArray(arr) {
  let min = Infinity;
  let QUANTUM  =32768;
  
  for (let i=0; i<arr.length; i+=QUANTUM) {
    let submin = Math.min.apply(null, arr.slice(i, Math.min(i+QUANTUM, len)));
    min = Math.min(submin, min)
  }
  return min;
}

let min = minOfArray([5,6,2,3,7]);
```



Using apply to chain constructors

> U can use `apply` to chain `[constructors]`(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) for an object.

In the following example we will create a global `Function` method called `construct`, which will enable u to use an array-like object with a constructor instead of an arguments list.(使用能够在构造器中使用一个类数组对象而非参数列表)

```javascript
//使用Object.create()
Function.prototype.construct = function(aArgs) {
  let oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNews;
}
//使用Object.__proto__
Function.prototype.construct = function(aArgs) {
  let oNew = {};
  oNew.__proto__ = this.prototype;
  this.apply(oNew, aArgs);
  return oNew;
}

//使用闭包
Function.prototype.construct = function(aArgs) {
  let fConstructor = this,
      fNewConstr = function() {
        fConstructor.apply(this, aArgs);
      }
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
}

//使用Function构造器
Function.prototype.construct = function(aArgs) {
  let fNewConstr = new Function('');
  fNewConstr.prototype = this.prototype;
  let oNew = new fNewConstr();
  this.apply(oNew, aArgs);
  return oNew;
}
```

```javascript
function MyConstructor(arguments) {
  for (let nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

let myArray = [4, 'hello world', false];
let myInstance = new MyConstructor(myArray); //fix MyConstructor.construct is not a function

console.log(myInstance.property1); //'hello world'
console.log(myInstance instanceof MyConstructor); //'true'
console.log(myInstance.constructor); //MyConstructor
```



**实现apply方法**

```javascript
Function.prototype.apply = function(obj) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.apply this is not a function');
  }
  let fn = obj || globalThis;
  let tempFn = Symbol();
  fn[tempFn] = this
  let res = fn.tempFn(...Array.prototype.slice.call(arguments, 1));
  delete fn.tempFn;
  return res;
  
}
```

```javascript
//https://github.com/mqyqingfeng/Blog/issues/11
Function.prototype.apply = function(obj, arr) {
  obj = Object(obj) || globalThis;
  let fn = obj;
  let tempFn = Symbol();
  fn[tempFn] = this;
  let args = [];
  for (let i=1; i<arr.length; i++) {
    args.push('arguments[' + i + ']');
  }
  return eval('fn[tempFn](' + args +')');
}

Function.prototype.myApply = function(obj, arr) {
  obj = obj || globalThis;
  obj.tempFn = this;
  let result;
  if (!arr) {
  	result = eval('obj.tempFn()')
  } else {
    let args = [];
    for (let i=0; i<arr.length; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('obj[tempFn](' + args + ')');
  }
  
  delete obj.tempFn;
  return result;
}



Function.prototype.apply = function(obj, arr) {
  obj = toObject(obj);
  let tempFn = Symbol();
  obj[tempFn] = this;
  let result = obj.tempFn(...arr);
  delete obj.tempFn;
  return result;
  
}

//解决基本类型数据应被转换成对象
function toObject(val) {
  const type = typeof val;
  //let result = val;
  switch (type) {
    case 'string':
    case 'number':
    case 'boolean':
      val = Object(val);
      break;
    default:
      val = obj || globalThis;
  }
  return val;
}
```



#### **call()和apply()总结**

> While the syntax of this function is almost identical to that of [`call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), the fundamental difference is that `call()` accepts an **argument list**, while `apply()` accepts a **single array of arguments**.

```javascript
call() 
 - 当我们调用函数call()方法时,函数会立即执行就好像我们直接调用了函数
 - call()方法的第一个参数会自动成为函数中的this
 - call()的实参是从第二个参数一个一个传递
 

apply()
 - apply()的作用和call()方法是一样的,都可以指定函数的this
 - apply()的实参是直接传递一个数组作用于第二个参数
 - 使用apply()方法传递需要使用数组


- 使用场景:
 - es5,原型继承. 父类.call(this,属性1,属性2);
 - 第一个参数传入null或undefined时, this指向的是window.
 - 如果想直接传arguments对象或者一个数组，那就用apply()；否则，就用call()。如果不用	 给被调用的函数传参，则使用哪个方法都一样。


# this到底是谁?
 1.以函数形式调用,this是window;严格模式下this指向undefined
 2.以方法形式调用,this就是调用方法的对象
 3.以构造函数形式调用,this是新建的对象
 4.以call和apply调用,this是他们的第一个参数
```



#### **bind()**

**define**

> 创建一个新函数,在bind()被调用时,这个新函数的`this`被指定位`bind()`的第一个参数,而其余参数将作为新函数的参数,供调用时使用.

**syntax**

```javascript
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

**parameter**

`thisArg`

* 调用绑定函数时作为`this`参数传递给目标函数的值.如果使用`new`运算符构造绑定函数,则忽略该值.
* 当使用`bind`在`setTimeout`中创建一个函数(作为回调提供)时,作为`thisArg`传递的任何原始值都将转换为`object`.
* 如果`bind`函数的参数列表为空,或者`thisArg`是`null`或`undefined`,执行作用域的`this`将被视为新函数的`thisArg`.

`arg1,arg2,...`

* 当目标函数被调用时,被预置入绑定函数的参数列表中的参数.

**return value**

* 返回一个原函数的拷贝,并拥有指定`this`值和初始参数.

**desc**

* `bind()`函数会创建一个新的绑定函数(bound function, BF). 绑定函数是一个exotic function object(怪异函数对象, ECMAScript 2015中的术语),它包装了原函数对象. 调用绑定函数通常会导致包装函数.
* 绑定函数具有以下内部属性
  * [[BoundTargetFunction]] - 包装函数对象
  * [[BoundThis]] - 调用包装函数时始终作为this值传递的值
  * [[BoundArguments]] - 列表.在对包装函数做任何调用都会优先用列表元素填充参数列表
  * [[Call]] - 执行与此对象关联的代码.通过函数调用表达式调用. 内部方法的参数是一个this值和一个包含通过调用表达式传递给函数的参数列表
* 当调用绑定函数时,它调用[[BoundTargetFunction]]上的内部方法[[Call]],就像这样Call(boundThis, args). 其中boundThis时[[BoundThis]], args是[[BoundArguments]]加上通过函数调用传入的参数列表.
* 绑定函数也可以使用`new`运算构造,它会表现为目标函数已经被构建完毕了似的.提供的this值会被忽略,但前置参数让会提供给模拟函数.

**examples**

```javascript
this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

偏函数

`bind()` 的另一个最简单的用法是使一个函数拥有预设的初始参数。只要将这些参数（如果有的话）作为 `bind()` 的参数写在 `this` 后面。当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面。

```javascript
function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
    return arg1 + arg2
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var result1 = addArguments(1, 2); // 3

// 创建一个函数，它拥有预设参数列表。
var leadingThirtysevenList = list.bind(null, 37);

// 创建一个函数，它拥有预设的第一个参数
var addThirtySeven = addArguments.bind(null, 37);

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]

var result2 = addThirtySeven(5);
// 37 + 5 = 42

var result3 = addThirtySeven(5, 10);
// 37 + 5 = 42 ，第二个参数被忽略
```

配合setTimeout

在默认情况下，使用 [`window.setTimeout()`](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout) 时，`this` 关键字会指向 [`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window) （或 `global`）对象。当类的方法中需要 `this` 指向类的实例时，你可能需要显式地把 `this` 绑定到回调函数，就不会丢失该实例的引用。

```javascript
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#%E9%85%8D%E5%90%88_settimeout
```

作为构造函数使用的绑定函数

Warning: 这部分演示了 JavaScript 的能力并且记录了 `bind()` 的超前用法。以下展示的方法并不是最佳的解决方案，且可能不应该用在任何生产环境中。

```javascript
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#%E4%BD%9C%E4%B8%BA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8%E7%9A%84%E7%BB%91%E5%AE%9A%E5%87%BD%E6%95%B0
```

快捷调用

在你想要为一个需要特定的 **`this`** 值的函数创建一个捷径（shortcut）的时候，`bind()` 也很好用。

你可以用 [`Array.prototype.slice`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 来将一个类似于数组的对象（array-like object）转换成一个真正的数组，就拿它来举例子吧。你可以简单地这样写：

```javascript
let slice = Array.prototype.slice;
//...
slice.apply(arguments);
```

用 `bind()`可以使这个过程变得简单。在下面这段代码里面，`slice` 是 [`Function.prototype` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) 的 [`apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法的绑定函数，并且将 `Array.prototype` 的 [`slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 方法作为 **`this`** 的值。这意味着我们压根儿用不着上面那个 `apply()`调用了

```javascript
// 与前一段代码的 "slice" 效果相同
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

**实现bind()方法**

> [js 手动实现bind方法，超详细思路分析！ - 听风是风 - 博客园 (cnblogs.com)](https://www.cnblogs.com/echolun/p/12178655.html)   这个人写的真好!!!
>
> [JavaScript深入之bind的模拟实现 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903476623835149)



```javascript
//2 edition
Function.prototype.myBind = function(cxt) {
  let fn = this;
  let argsOut = [].slice.call(arguments, 1);
  return function () {
    let argsInner = [].slice.call(arguments);
    fn.apply(this, argsOut.concat(argsInner));
  }
}
```

```javascript
//3 edition 实现构造函数效果
//一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

Function.prototype.myBind = function(cxt) {
  let fn = this;
  let argsOut = [].slice.call(arguments, 1);
  
  let bound = function() {
    let argsInner = [].slice.call(arguments);
    //当作为构造函数使用时,this指向实例,fn指向调用绑定方法的函数.因为下面的'bound.prototype = this.prototype', 已经修改了bound.prototype为调用方法的函数的原型.此时结果为true,当结果为true时,也就是外部使用了new操作符,这时需要将内部的传递的this更改为实例本身.
    return fn.apply(this instanceof fn ? this : cxt, argsOut.concat(argsInner));
  }
  //修改返回函数的prototype为调用绑定方法函数的prototype,实例就可以继承函数的原型中的值
  bound.prototype = this.prototype;
  return bound;
}
```



```javascript
//4 edition
//避免实例通过原型链更改函数原型上的属性,使用空函数中转
Function.prototype.myBind = function(cxt) {
  let fn = this;
  let argsOut = [].slice.call(arguments, 1);
  let bound = function() {
    let argsInner = [].slice.call(arguments);
    fn.apply(this instanceof fn ? this : cxt, argsOut.concat(argsInner));
  }
  bound.prototype = this.prototype;
  return bound
}


function func() {
	console.log('this', this)
}
let obj = {a:1, b:2}

let res = new func.myBind(obj)
//直接调用会报错: 
//点运算符优先级高于new运算符,
Uncaught TypeError: Right-hand side of 'instanceof' is not callable

let res = func.myBind(obj)
let result = new res()
//
```



```javascript
//lastest edition

Function.prototype.myBind = function(cxt) {
  if (typeof this !== "function") {
  	throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
  let fn = this;
  let argsOut = [].slice.call(arguments, 1);
  let fNOP = function() {};
  let fbound = function() {
    let argsInner = [].slice.call(arguments);
    return fn.apply(this instanceof fNOP ? this : cxt, argsOut.concat(argsInner));
  }
  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();
  return fbound;
}
```



**new和bind一起使用的问题/疑惑**

new调用和bind一起使用,会出现问题

```javascript
function func() {
  console.log('this', this)
}

new func.bind()
//Uncaught TypeError: func.bind is not a constructor  应该是对参数类型进行的判断
// typeof

new (func.bind()) //没报错 正常执行

let res = new func.myBind()
res()
//Uncaught TypeError: Right-hand side of 'instanceof' is not callable
// instanceof 左边的this打印的值是window



new func.myBind() //返回的是bound函数
new (func.myBind())() //返回的是Bound类对象
```





#### 方法-[[call]]/[[constructor]]



#### **继承的方法-toLocaleString()/toString()/valueOf()**

对函数而言，继承的方法toLocaleString()和toString()始终返回函数的代码。返回代码的具体格式因浏览器而异。因此不能在重要功能中依赖这些方法返回的值，而只应在调试中使用它们。

继承的方法valueOf()返回函数本身.

```javascript
//valueOf()
function fn() {}
console.log(fn.valueOf());
```





### 闭包

你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。它自身也形成了一个闭包。一个闭包是一个可以自己拥有独立的环境与变量的表达式（通常是函数). 嵌套函数可以”继承“容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。

由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行时间长。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了

可以总结如下:

* 允许函数嵌套

- 内部函数只可以在外部函数中访问
- 内部函数形成了一个闭包：它可以访问外部函数的所有参数和变量及外部函数能访问的所有变量和函数，但是外部函数却不能使用它的参数和变量。



#### 概要

```JavaScript
- 闭包就是能访问到外部函数变量的内部函数
- 闭包可以用来将一些不愿意被别人访问的变量隐藏起来 //闭包的作用就是藏东西,暴露的东西使用返回值返回,缺点就是内存占用,可忽略
- 闭包构成要素:
 1. 必须有函数的嵌套
 2. 内部函数要引用外部函数的变量
 3. 必须将内部函数作为返回值返回  //不正确
 
 
- 闭包的生命周期
 闭包在外部函数调用时创建,调用一次产生一个
 相同对象调用,形成闭包.
 闭包在内部函数被垃圾回收时销毁.
```



```js
//https://www.zhihu.com/question/460940032

function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
 
  return [increment, log];
}

const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log(); // 0


在①处调用 createIncrement 时，②处的 message 实际上已经创建出来了，那就相当于是字符串不变量了
把函数log写成:
function log(){
  console.log(`Count is ${count}`)
}
```

![](https://pic1.zhimg.com/80/v2-c518a99960e698edba1c3dca36e11804_720w.jpg?source=1940ef5c)







#### 保存变量

一个闭包必须保存它可见作用域中所有参数和变量。因为每一次调用传入的参数都可能不同，每一次对外部函数的调用实际上重新创建了一遍这个闭包。只有当返回的嵌套函数没有再被引用时，内存才会被释放.



#### 多层嵌套函数

函数可以被多层嵌套。例如，函数A可以包含函数B，函数B可以再包含函数C。B和C都形成了闭包，所以B可以访问A，C可以访问B和A。因此，闭包可以包含多个作用域；他们递归式的包含了所有包含它的函数作用域。这个称之为**作用域链**

```js
function A(x){
  function B(y){
    function C(z){
      console.log(x+y+z)
    }
    C(3);
  }
  B(2);
}
A(1)
```

#### 命名冲突🔸

如果一个闭包的函数定义了一个和外部函数的某个变量名称相同的变量，那么这个闭包将无法引用外部函数的这个变量.

当同一个闭包作用域下两个参数或者变量同名时，就会产生命名冲突。更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。

```js
function outside(){
  var x = 5;
  return function inside(x){
    return x*2;
  }
}
outside()(10); //20

//解析:
命名冲突发生在return x上，inside的参数x和outside变量x发生了冲突。这里的作用链域是{inside, outside, 全局对象}。因此inside的x具有最高优先权，返回了20（inside的x）而不是10（outside的x）
```





#### 案例

```JavaScript
创建一个函数,函数每次调用时,都显示它执行的叠加次数

function outer(){
    let times = 0;
    function inner(){
        times++;
        alert(times);
    }
    return inner;  //返回值是内部函数,而不是调用内部函数
}

let result = outer()
result();//outer()(); outer()()执行的是内部函数,故每次均为1;result()执行的是闭包函数,叠加

result = null; //内部函数会被垃圾回收
```



### 函数返回值

```javascript
* 返回值是函数的执行结果
* 在函数中可以使用 return 来设置函数的返回值
* 返回值可以是任意的数据类型
* 如果return后不跟任何值
	- 或不写return 则相当于return undefined
* return 执行函数立即结束
	- return后的所有代码都不会执行

# 语法
	return 值; //


function fn(){return 10;}
fn();  //在编辑器中运行不会返回任何结果,在Chrome开发者工具中有自动的返回值     
let a = fn(); //定义一个变量来接收函数的返回值
console.log('a =', a); //a = 10;
=====================================================================
# 函数的返回值是一个函数

function fn(){
      return function(){console.log('aaa');}
  }    
  let result = fn();
  result(); //第一种方式  打印值是aaa,返回值是undefined(浏览器自动返回的)
  fn()();   //第二种方式 相当于result()
```



```javascript
function fn(){
      return {};    // 如果是return {};   则a = undefined;
      return;       // 如果是return;      则a = undefined;
      console.log('hello');  //return后的代码不会被执行,是死代码.
  }
  let a = fn();
  console.log('a =', a); // 
  
================================================================
  function fn2(){
      console.log('函数开始执行');
      for(i=0; i<5; i++){
          if(i === 2){
              break;  //结束for循环 
              continue; //跳过i为2的情况
              return;   // 当i为2结束函数
          }
          console.log(i);
      }
      console.log('函数执行结束了');
  }

====================================================================
function fn1(){
    alert(1);
}    
alert(fn1());
问:代码的运行结果,第一次输出的是: 1 ,第二次输出的是: undefined
第一次是调用函数,执行语句,返回1.  返回值是函数的执行结果,没有使用return,相当于return undefined
====================================================================
var x = 1; 
function fn(n){
    n = n+1
}; 
y = fn(x);
求y的值是:undefined
函数没有返回值
```





### 递归函数

#### 定义

> 程序调用自身时的变成技巧称为递归(recursion)

#### 实现方法

一个函数可以指向并调用自身.调用自身的函数我们称之为**递归函数**. 有三种方法可以达到这个目的:

* 函数名
* arguments.callee
* 作用域下的一个指向该函数的变量名

```js
let foo = function bar(){
  //statement
}

//在函数体内以下语句是等价的
bar()
arguments.callee() //ES5禁止在严格模式下使用此属性
foo()
```

某种意义上说，递归近似于循环。两者都重复执行相同的代码，并且两者都需要一个终止条件（避免无限循环或者无限递归）

```js
//循环
let x= 0;
while(x<10){
  x++;
}
//递归
function loop(x){
  if(x>=10) return {console.log(x)};
  return loop(x+1)
}

loop(0)
```

#### 递归中的解耦

```javascript
//阶乘 非严格模式下-arguments.callee
//在严格模式下运行的代码是不能访问arguments.callee
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);//非严格模式下使用
  }
}

//阶乘 严格模式下(非严格模式下也可以用)-命名函数表达式
const factorial = (function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
});
```



#### 使用

##### 阶乘

以阶乘为例

```javascript
function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1)
}
```

示意图(图片来自 [wwww.penjee.com](https://github.com/mqyqingfeng/Blog/issues/wwww.penjee.com))：

![](https://camo.githubusercontent.com/e7f3e971eebd1f8c6e0bd15be013506e516443ed7caeb27dc29c983bf5b1a2e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f726563757273696f6e2f666163746f7269616c2e676966)

##### 斐波那契数列

> 一对兔子从出生后的第3个月起，每月可生出一对小兔子。
> 编写函数，求第n个月时，兔子的对数。
>
> 斐波那契数列:1 1 2 3 5 8 13 21.....
>
> 简化: 某一项数是前两项数之和

在[《JavaScript专题之函数记忆》](https://github.com/mqyqingfeng/Blog/issues/46)中讲到过的斐波那契数列也使用了递归：

```javascript
function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
```



#### 递归条件

从这两个例子中，我们可以看出：

构成递归需具备边界条件、递归前进段和递归返回段，当边界条件不满足时，递归前进，当边界条件满足时，递归返回。阶乘中的 `n == 1` 和 斐波那契数列中的 `n < 2` 都是边界条件。

总结一下递归的特点：

1. 子问题须与原始问题为同样的事，且更为简单；
2. 不能无限制地调用本身，须有个出口，化简为非递归状况处理。



#### 执行上下文栈

在[《JavaScript深入之执行上下文栈》](https://github.com/mqyqingfeng/Blog/issues/4)中，我们知道：

当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。

试着对阶乘函数分析执行的过程，我们会发现，JavaScript 会不停的创建执行上下文压入执行上下文栈，对于内存而言，维护这么多的执行上下文也是一笔不小的开销呐！那么，我们该如何优化呢？

答案就是尾调用。

#### 尾调用

尾调用，是指函数内部的最后一个动作是函数调用。该调用的返回值，直接返回给函数。

举个例子:

```javascript
function f(x) {
  return g(x);
}
```

非尾调用:

```javascript
function f(x) {
  return g(x) + 1;
}
```

并不是尾调用，因为 g(x) 的返回值还需要跟 1 进行计算后，f(x)才会返回值。

两者又有什么区别呢？答案就是执行上下文栈的变化不一样。

为了模拟执行上下文栈的行为，让我们定义执行上下文栈是一个数组：

```
    ECStack = [];
```

我们模拟下第一个尾调用函数执行时的执行上下文栈变化：

```
// 伪代码
ECStack.push(<f> functionContext);

ECStack.pop();

ECStack.push(<g> functionContext);

ECStack.pop();
```

我们再来模拟一下第二个非尾调用函数执行时的执行上下文栈变化：

```
ECStack.push(<f> functionContext);

ECStack.push(<g> functionContext);

ECStack.pop();

ECStack.pop();
```

也就说尾调用函数执行时，虽然也调用了一个函数，但是因为原来的的函数执行完毕，执行上下文会被弹出，执行上下文栈中相当于只多压入了一个执行上下文。然而非尾调用函数，就会创建多个执行上下文压入执行上下文栈。

<u>函数调用自身，称为递归。如果尾调用自身，就称为尾递归。</u>

所以我们只用把阶乘函数改造成一个尾递归形式，就可以避免创建那么多的执行上下文。但是我们该怎么做呢？



#### 阶乘函数优化 ????

我们需要做的就是把所有用到的内部变量改写成函数的参数，以阶乘函数为例：

```javascript
function factorial(n, res) {
  if (n == 1) return res;
  return factorial(n-1, n*res);
}
```

然而这个很奇怪呐……我们计算 4 的阶乘，结果函数要传入 4 和 1，我就不能只传入一个 4 吗？

这个时候就要用到我们在[《JavaScript专题之偏函数》](https://github.com/mqyqingfeng/Blog/issues/43)中编写的 partial 函数了：

```
var newFactorial = partial(factorial, _, 1)

newFactorial(4) // 24
```



#### 应用

如果你看过 [JavaScript 专题系列](https://github.com/mqyqingfeng/Blog)的文章，你会发现递归有着很多的应用。

作为专题系列的第十八篇，我们来盘点下之前的文章中都有哪些涉及到了递归：

1.[《JavaScript 专题之数组扁平化》](https://github.com/mqyqingfeng/Blog/issues/36)：

```javascript
function flatter(arr) {
  return arr.reduce((prev, crx) => {
    return prev.concat(Array.isArray(crx) ? flatter(crx) : crx)
  },[])
}
```

2.[《JavaScript 专题之深浅拷贝》](https://github.com/mqyqingfeng/Blog/issues/32)：

```javascript
let deepCopy = function(obj) {
  if (typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
```

3.[JavaScript 专题之从零实现 jQuery 的 extend](https://github.com/mqyqingfeng/Blog/issues/33)：

```javascript
```

4.[《JavaScript 专题之如何判断两个对象相等》](https://github.com/mqyqingfeng/Blog/issues/41)：

```javascript
```

5.[《JavaScript 专题之函数柯里化》](https://github.com/mqyqingfeng/Blog/issues/42)：

```javascript
```







### 立即调用的匿名函数(IIEF)

#### 概述

立即调用的匿名函数又被称作立即调用的函数表达式（IIFE，Immediately Invoked Function Expression）。它类似于函数声明，但由于被包含在括号中，所以会被解释为函数表达式。紧跟在第一组括号后面的第二组括号会立即调用前面的函数表达式。

使用IIFE 可以模拟块级作用域，即在一个函数表达式内部声明变量，然后立即调用这个函数。这样位于函数体作用域的变量就像是在块级作用域中一样。ECMAScript 5 尚未支持块级作用域，使用IIFE模拟块级作用域是相当普遍的。

在ECMAScript 5.1 及以前，为了防止变量定义外泄，IIFE 是个非常有效的方式。这样也不会导致闭包相关的内存问题，因为不存在对这个匿名函数的引用。为此，只要函数执行完毕，其作用域链就可以被销毁。

在ECMAScript 6 以后，IIFE 就没有那么必要了，因为块级作用域中的变量无须IIFE 就可以实现同样的隔离。下面展示了两种不同的块级作用域形式

#### 优点

优势:

1.不会污染所在作用域,不用通过函数名调用运行

#### 用法:

1.两种使用形式

2.当做函数调用并传递参数

3.倒置代码运行顺序,将需要的函数放在第二位,在IIFE执行后当做参数传递进去



```JavaScript
* 立即执行函数,在函数定义完毕后立即调用,只会调用一次
* 语法:
	(function(){语句...})() //调用括号放在里外都可以
  (function(){console.log(语句);}())
                

```



```javascript
//当做函数调用并传递参数: 基本使用
var a = 2;
(function IIFE(global) {
  var a = 3;
  console.log(a); //3
  console.log(global.a); //2
})(window);

console.log(a); //2
```



```javascript
//当做函数调用并传递参数: 解决undefined标识符的默认值被错误覆盖导致的异常

undefined = true;  //不要这么做
(function IIFE(undefined) {
  var a;
  if (a === undefined) {
    console.log('xxx');
  }
})();
```



```javascript
//倒置代码运行顺序
var a = 2;
(function IIFE(def) {
  def(window);
})(
	function def(global) {
    var a = 3;
    console.log(a); //3
    console.log(global.a); //2
  }
)
```



```JavaScript
var a = b = 10;   //等价于 var a = 10; b = 10;
　　(function(){
　　var a=b=20
　　})();
console.log(b);
代码简化:
var a = 10;
b =10;
(function(){
　　var a=20;
    b=20;
　　})();
console.log(b);//b的值开始是10,后来被立即执行函数输出的20覆盖.

var a = b = 10;
(function(){
    var b = 20;
})();
console.log(b); //10 函数作用域,函数内部声明的变量是局部变量,只能再内部访问

```





### 箭头函数

ECMAScript 6 新增了使用胖箭头（=>）语法定义函数表达式的能力。很大程度上，箭头函数实例化的函数对象与正式的函数表达式创建的函数对象行为是相同的。**任何可以使用函数表达式的地方，都可以使用箭头函数**：

#### 1. 与传统函数的差异

* **没有`this`, `super`, `arguments`, `new.target`绑定.** 箭头函数中的这些值由外围最近一层非箭头函数决定
* **不能通过`new`关键字来调用.** 箭头函数没有`[[constructor]]`方法,所以不能用作构造函数,如果通过new关键字调用箭头函数,抛出错误
* **没有原型**. 由于不可以通过new关键字调用箭头函数，因而没有构建原型的需求，所以箭头函数不存在prototype这个属性。
* **不可以改变`this`的绑定**. 函数内部的this值不可被改变，在函数的生命周期内始终保持一致。
* this值取决于外部非箭头函数的this值,且不能通过`call()`, `apply()`, `bind()`方法来改变this的值.
* **不支持`arguments`对象**. 箭头函数没有arguments绑定，所以你必须通过命名参数和不定参数这两种形式访问函数的参数。
* **不支持重复的命名参数**. 无论在严格还是非严格模式下，箭头函数都不支持重复的命名参数；而在传统函数的规定中，只有在严格模式下才不能有重复的命名参数。
* 箭头函数同样也有一个name属性,这与其他函数的规则不同.  空字符串



```javascript
//访问箭头函数的参数 替代普通函数arguments方法
let nums = (...nums) => nums;

//利用箭头函数简化立即执行函数(自执行函数)
(() => {
  console.log(1);
})()
//但是注意,使用以下这种写法会报错:
(()=>{
  console.log(1);
}())
```



#### 2. 差异的原因

> this绑定是JavaScript程序中一个常见的错误来源，在函数内很容易就对this的值失去控制，其经常导致程序出现意想不到的行为，箭头函数消除了这方面的烦恼；
>
> 其次，如果限制箭头函数的this值，简化代码执行的过程，则JavaScript引擎可以更轻松地优化这些操作，而常规函数往往同时会作为构造函数使用或者以其他方式对其进行修改。
>
> 在箭头函数内，其余的差异主要是减少错误以及理清模糊不清的地方。这样一来，JavaScript引擎就可以更好地优化箭头函数的执行过程。



#### 3. 语法

* 当箭头函数只有一个参数时，可以直接写参数名，箭头紧随其后，箭头右侧的表达式被求值后便立即返回。即使没有显式的返回语句，这个箭头函数也可以返回传入的第一个参数，不需要更多的语法铺垫。
* 如果要传入两个或两个以上的参数，要在参数的两侧添加一对小括号
* 如果函数没有参数，也要在声明的时候写一组没有内容的小括号
* 如果你希望为函数编写由多个表达式组成的更传统的函数体，那么需要用花括号包裹函数体，并显式地定义一个返回值
* 如果想创建一个空函数，需要写一对没有内容的花括号
* <span style="text-decoration-line:underline; text-decoration-color:red; text-decoration-style:double;"> 如果想在箭头函数外返回一个对象字面量，则需要将该字面量包裹在小括号里</span>

```javascript
//箭头函数简洁的语法非常适合嵌入函数的场景
let ints = [1, 2, 3];
console.log(ints.map(function(i) { return i + 1; })); // [2, 3, 4]
console.log(ints.map((i) => { return i + 1 })); // [2, 3, 4]

//如果只有一个参数，那也可以不用括号。只有没有参数，或者多个参数的情况下，才需要使用括号
// 以下两种写法都有效
let double = (x) => { return 2 * x; };
let triple = x => { return 3 * x; };
// 没有参数需要括号
let getRandom = () => { return Math.random(); };
// 多个参数需要括号
let sum = (a, b) => { return a + b; };
// 无效的写法：
let multiply = a, b => { return a * b; };

//箭头函数也可以不用大括号:使用大括号就说明包含“函数体”，可以在一个函数中包含多条语句，跟常规的函数一样。如果不使用大括号，那么箭头后面就只能有一行代码.省略大括号会隐式返回这行代码的值
// 以下两种写法都有效，而且返回相应的值
let double = (x) => { return 2 * x; };
let triple = (x) => 3 * x;
// 可以赋值
let value = {};
let setName = (x) => x.name = "Matt";
setName(value);
console.log(value.name); // "Matt"
// 无效的写法：
let multiply = (a, b) => return a * b;



//箭头函数不能使用arguments、super 和new.target，也不能用作构造函数。此外，箭头函数也没有prototype 属性。

//虽然箭头函数中没有arguments对象,但是可以在包装函数中把它提供非箭头函数 ??
function foo() {
  let bar = () => {
    console.log(arguments[0]); //5
  };
  bar();
}
foo(5);
```

#### 4. 箭头函数的this

箭头函数中没有this绑定，必须通过查找作用域链来决定其值,取决于该函数外部非箭头函数的this值。如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this；否则，this的值会被设置为undefined。且不能通过call()、apply()或bind()方法来改变this的值。

```javascript
//1st version
let pageHandler = {
  id: '123456',
  init: function() {
    document.addEventListener('click', function(event) {
      this.doSomething(event.type); //抛出错误
    }, false)
  },
  
  doSomething: function(type) {
    console.log('Handling' + type + 'for' + this.id);
  }
}

//2ed version
let pageHandler = {
  id: '123456',

  init: function() {
    document.addEventListener('click', (function(event) {
      this.doSomething(event.type);
    }).bind(this), false);
  },

  doSomething: function(type) {
    console.log('Handing' + type + 'for' + this.id);
  }
}
调用bind(this)后事实上创建了一个新函数，它的this被绑定到当前的this，也就是PageHandler。为了避免创建一个额外的函数，我们可以通过一个更好的方式来修正这段代码：使用箭头函数。

//3rd
let pageHandler = {
  id: '123456',
  
  init: function() {
    document.addEventListener('click', event => this.doSomething(event.type), false);
  },
  
  doSomething: function(type) {
    console.log('Handling' + type + ' for ' + this.id);
  }
}
```



箭头函数缺少正常函数所拥有的prototype属性，它的设计初衷是“即用即弃”，所以不能用它来定义新的类型。如果尝试通过new关键字调用一个箭头函数，会导致程序抛出错误，

```javascript
let MyType = () => {},
    object = new MyType(); //错误,不可以通过new关键字调用箭头函数
```





#### 5. 案例

```JavaScript


//箭头函数-数组排序
arr = [3, 1, 2, 4, 5, 7, 8, 9, 6];
arr.sort((a,b) => a - b); 从小到大,升序排列

//箭头函数-返回值是个对象 格式需要加括号
fn = () => {name:'孙悟空'};
alert(fn()); //返回值是undefined  原因:对象是大括号,返回值也有大括号,浏览器无法分清.

更新:
fn = () => ({name:'孙悟空'});
alert(fn()); //[object Object]



//箭头函数- this是谁
fn=()=>alert(this); 
fn(); 
//[object window] 以函数形式调用,this是window
//fn的外层作用域是全局,全局作用域的this是谁?是window.所以fn的this也是window.箭头函数没有权利设置自己的this,完全看外层作用域是谁,外层作用域是谁,this是谁.

fn=()=>alert(this);
let ojb= {
    name:'孙悟空',
    tt:fn
}
obj.tt();  //this是谁? 以方法的形式调用,应是obj.但是


fn=()=>alert(this);
let obj={
    name:'孙悟空',
    tt:fn,
    sayHello:function(){
        function inner(){ 
            alert(this); //this是谁?看inner的this是谁,看inner的调用方式:函数, 故window.
        }
        inner();
    }
}
obj.sayHello();


let obj = {
    name:'孙悟空',
    tt:fn,
    say.Hello(){
        let inner = () => alert(this);//inner的外层作用域是say.Hello,say.Hello这个函数的this是谁,是obj,那么箭头函数的this的就是obj
        inner();
    }
}
obj.sayHello();
```



```js
var foo = 'aaa';
var obj = {
  foo:'bbb',
  get:function () {
    var foo = 'ccc';
    var that = this;
    return function () {
      return that.foo
    }
  }
}


console.log(obj.get()())

var b = obj.get;
console.log(b()())

//函数的arguments参数
function fn(a,b) {
     return (...rest) => {
        console.log(argumnets)  //argumnets访问的是外层作用域的
    }
}

fn(1, 2)(3,4)
```

#### 6. 使用

**箭头函数与数组**

诸如sort()、map()及reduce()这些可以接受回调函数的数组方法，都可以通过箭头函数语法简化编码过程并减少编码量

```js
let result = values.sort(function(a, b) {
  return a - b;
})

let result = values.sort((a, b) => a - b);

```

**箭头函数没有arguments绑定**

箭头函数没有自己的arguments对象，且未来无论函数在哪个上下文中执行，**箭头函数始终可以访问外围函数的arguments对象**

```javascript
function createArrowFunctionReturningFirstArg() {
  return () => arguments[0];
}

let arrowFunction = createArrowFunctionReturningFirstArg(5);

console.log(arrowFunction()); //5
```



**箭头函数辨识方法**

使用typeof和instanceof操作符调用箭头函数与调用其他函数并无二致。

```javascript
let comparator = (a, b) => a - b;

console.log(typeof comparator); //'function'
console.log(comparator instanceof Function); //true
```

仍然可以在箭头函数上调用call()、apply()及bind()方法，但与其他函数不同的是，箭头函数的this值不会受这些方法的影响

```javascript
let sum = (num1, num2) => num1 + num2;

console.log(sum.call(null, 1, 2)); //3
console.log(sum.apply(null, [1, 2])); //3

let boundSum = sum.bind(null, 1, 2);
console.log(boundSum()); //3
```

通过call()方法和apply()方法调用sum()函数并传递参数；通过bind()方法创建boundSum()函数，并传入参数1和2。这些参数都不需要直接传入。

包括回调函数在内所有使用匿名函数表达式的地方都适合用箭头函数来改写。



### 预定义函数

#### eval()

`eval()`方法会对一串字符串形式的JavaScript代码字符求值

#### isFinite()

#### isNaN()

#### parseFloat()

#### parseInt()

**parseInt(string, radix)**  解析一个字符串并返回指定基数的十进制整数， `radix` 是2-36之间的整数，表示被解析字符串的基数。

**语法**

```js
parseInt(string, radix);

string 
要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用  ToString 抽象操作)。字符串开头的空白符将会被忽略。

radix 可选
从 2 到 36，表示字符串的基数。例如指定 16 表示被解析值是十六进制数。请注意，10不是默认值.

```



**返回值**

整数或NaN

```js
返回NaN的情况
1. radix小于2或大于36
2. 第一个非空字符串不能转换为数字

```



**案例**

```js
['1','2','3'].map(parseInt)

//[1,undefined,undefined]
```









### 垃圾回收(GC garbage collection)

概要

```javascript
垃圾回收（GC）
JS中拥有自动的垃圾回收机制，垃圾对象会被JS引擎自动回收，
我们不需要手动处理，我们只需要将不再使用变量的值设置为null即可


let a = {};
b = a;
a = null;
b = null;
```



### 工厂函数

概要-工厂方法

```javascript
1.它是一个函数。
2.它用来创建对象。
3.它像工厂一样，“生产”出来的函数都是“标准件”（拥有同样的属性）

使用工厂方法来创建对象  //创建大量的对象

工厂方法不推荐使用,用构造函数来代替.代码复杂度上升后,无法区分各个函数的区别.

工厂方法创建的对象没有类型,构造函数创建的对象有类型 //?

对象的属性重复的话很繁琐，可将经常变化的属性代码存储，所以延伸到了能存储代码的函数，再通过参数传递那些变化的属性。
```



#### 方法1-return 字面量对象

概要

```JavaScript
function creatPerson(name, age, gender){
    return{
        name: name,
        age: age,
        gender: gender
    };
}

let per1 = creatPerson('孙悟空', '18', '男');
let per2 = creatPerson('猪八戒', '28', '男');

console.log(per1);  //{name: "孙悟空", age: 18, gender: "男"}
console.log(per2); 
```



#### 方法2-return 变量对象

```javascript
 
=======================另一种写法===============================

function creatPerson(name, age, gender){
    let obj = {} ;  //新建一个对象  new Object()
    obj.name = name;		// 向对象中添加属性
    obj.age = age;
    obj.gender = gender;
    
    return obj; //返回新对象
}

```



### 构造函数(constructor)|类|实例

#### 概念

```javascript
- 构造函数就是专门创建 对象 的函数
- 构造函数的定义方式和普通函数的没有区别,调用方式有区别
- 唯一的不同点,构造函数的需要**首字母大写**   //大驼峰命名法 非强制,也可以小写,只要有new

- 一个函数如果直接调用,那么它就是一个普通函数
- 一个函数如果使用new来调用,那么它就是一个构造函数  // new 函数名称()

```



#### new操作符调用构造函数时具体做了什么

> 1.在内存中新建一个对象
>
> 2.将新对象内部的[[prototype]]的指针赋值为构造函数的prototype属性
>
> 3.更新构造函数内的this(Constructor.apply(obj))为这个对象, 并执行构造函数内部的代码,
>
> 4.返回值: 如果构造函数返回非空对象,则返回该对象; 否则,返回刚创建的新对象.

```js
var obj = {};
obj.__proto__ = Foo.prototype;
Foo.call(obj)
```



#### 模拟实现new操作符效果

```javascript
//https://juejin.cn/post/6844903986479251464#heading-39
//https://juejin.cn/post/7033275515880341512#heading-35

function newOperator(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw new Error('newOperator function the first param must be a function');
  }
  let obj = Object.create(ctor.prototype);
  let res = ctor.apply(obj, args);
  // let res = ctor.call(obj, [].slice.call(arguments, 1));
  
  let isObject = typeof res === 'object' && res !== null;
  let isFunction = typeof res === 'function';  //????  是不是引用类型
  
  return isObject || isFunction ? res : obj;
}

function createObject(ctor) {
  let obj = Object.create(null);
  Object.setPropertyOf(obj, ctor.prototype);
  
  const res = ctor.apply(obj, [].slice.call(arguments, 1));
  
  return typeof(res) === 'object' ? ret : obj;
}
```



```javascript
//https://github.com/mqyqingfeng/Blog/issues/13

function newOperator() {
  let obj = {};
  Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype; 
  //let obj = Object.create(Constructor.prototype);
  let result = Constructor.apply(obj, arguments);
  return typeof result === 'object' ? result : obj;
}
```





#### 构造函数显示return的情况

```js
1.return一个对象(返回复杂数据类型),那么this就指向这个返回的对象;
2.return返回的不是一个对象(返回基本类型),this仍然指向实例.
```





#### 类与实例

```JavaScript
# 其他
- 一个构造函数也称为是一个类,通过该构造函数所创建的对象称为该类实例
- 通过同一个构造函数所创建的对象称为 一类对象

let per = new Person(); //一个Person类,  per是Person类的实例    
let per2 = new Person(); //per和per2是同一类对象
```



#### instanceof

```JavaScript
# 计算机判断某个对象是否是某个类的实例

- instanceof 检查某个对象是否是某个类的实例(实例化对象)    
* 语法:
	对象 instanceof 类
	per instanceof Person  //true  不加括号
```



#### 普通与构造函数返回值

```JavaScript
普通函数返回值
function Person(){} //注意函数内部没有return
let per = Person();
console.log(per); // undefined

构造函数返回值
function Person(){}  //注意函数内部没有return
let per = new Person();
console.log(per); // Person {} 

构造函数将新的对象设置为函数中的this,就是Person{} 就是per
故:
function Person(){
    console.log(this);
}
let per = new Person(); //返回值就是Person {} 


```






#### 构造函数返回值-更新

```HTML
0.构造函数可以有返回值也可以没有
1.没有返回值,则返回实例化对象.
2.若有返回值则检查其返回值是否为引用类型. 如果是非引用类型(string, number, boolean, null, undefined),则与无返回值相同,实际上返回的是实例化对象.
 2.1 例如: function f(){return true;} new f()//new f
3.若返回值是引用类型,则实际返回值是这个引用类型.
 3.1 例如: function f(){return {a:1}}; new f()//new f
```



#### 构造函数括号加不加

```HTML
https://blog.csdn.net/yihanzhi/article/details/80050716

用new创造的构造函数之后的括号用不用加?

1.加不加效果相同
 function Parent(){this.num = 1;}
 console.log(new Parent()); //{num:1}
 console.log(new Parent); //{num:1}

2.加不加效果不同
 function Parent(){this.num = 1;}
 console.log(new Parent().num);//1
 console.log(new Parent.num); //报错

结果分析: new Parent.num的执行优先级是: 先执行Parent.num,此时返回结果为undefined;后执行new, 因为new后面必须跟构造函数,所以new undefined会报错.

new Parent().num的执行顺序是: new Parent(),括号的优先级大于点号,所以相当于(new Parent()).num,所以结果为1.

new的构造函数后跟括号优先级会提升.
```



#### 构造函数执行流程

```JavaScript
# 构造函数的执行流程

1.构造函数执行首先会创建一个新的对象
2.将新的对象设置为函数中的this, 可以通过this在构造函数内部访问到新建的对象
3.执行函数中的代码
4.将新的对象作为返回值返回 //通过上面的返回值可以确认




- 向新建的对象里添加属性
function Person(){}
let per = new Person();

per.name = '孙悟空';
per.age = '18';

如果按照上面这种添加方式,那么构造函数的设置是没有意义的.只能在构造函数里面添加才有意义,所以在构造函数中怎么访问这个对象呢? 通过this.

function Person(){
    this.name = '孙悟空';
    this. age = '18';
}
let per = new Person();

- 函数更新,使用参数传递变量
function Person(name, age){
    this.name = name;
    this.age = age;
}

let per = new Person(name, age);
```



**案例**

```javascript
function Person(name, age){   //声明构造函数Person
    this.name = name;		  //为新对象添加属性和属性值 
    this.age = age;
    console.log(this); //这个打印的对象本身 从程序运行上来看打印了2次,分别是{name:'孙悟空', age:18}和猪八戒
}

let per = new Person('孙悟空', 18);
let per2 = new Person('猪八戒', 28);

console.log(per);
console.log(per2);

console.log(per.name);         //孙悟空
console.log(per.name = '朝天阙'); //朝天阙



====================instanceof==========================
* 用来检查某个对象是否是某个类的实例.返回的是布尔值
* 语法
	对象 instanceof 类
	
	per instanceof Person   per是新建的对象

```



### 尾调用优化

ECMAScript 6关于函数最有趣的变化可能是尾调用系统的引擎优化. <u>尾调用指的是函数作为另一个函数的最后一条语句被调用:</u>

```javascript
function doSomething() {
  return doSomething(); //尾调用
}
```

在ECMAScript 5的引擎中，尾调用的实现与其他函数调用的实现类似：创建一个新的**栈帧（stackframe）**，将其推入调用栈来表示函数调用。也就是说，在循环调用中，每一个未用完的栈帧都会被保存在内存中，当调用栈变得过大时会造成程序问题。

#### ES6中的尾调用优化

ECMAScript 6缩减了严格模式下尾调用栈的大小（非严格模式下不受影响），如果满足以下条件，尾调用不再创建新的栈帧，而是清除并重用当前栈帧：

* 尾调用不访问当前栈帧的变量（也就是说函数不是一个闭包）
* 在函数内部，尾调用是最后一条语句
* 尾调用的结果作为函数值返回

```javascript
//以下这段示例代码满足上述的三个条件，可以被JavaScript引擎自动优化：
'use strict'
function doSomething() {
  //优化后
  return doSomethingElse();
}
```

在这个函数中，尾调用doSomethingElse()的结果立即返回，不调用任何局部作用域变量。如果做一个小改动，不返回最终结果，那么引擎就无法优化当前函数：

```javascript
'use strict'
function doSomething() {
  //无法优化 无返回
  doSomethingElse();
}
```

同样地，如果你定义了一个函数，在尾调用返回后执行其他操作，则函数也无法得到优化：

```javascript
'use strict'
function doSomething() {
  //无法优化 尾调用不在尾部
  let result = doSomethingElse();
  return result;
}
```

由于没有立即返回doSomethingElse()函数的值，因此此例中的代码无法被优化。

可能最难避免的情况是闭包的使用，它可以访问作用域中所有变量，因而导致尾调用优化失效

```javascript
'use strict'
function doSomething() {
  var num = 1,
      func = () => num;
  
  //无法优化,该函数是一个闭包
  return func();
}
```



#### 如何利用尾调用优化

实际上，尾调用的优化发生在引擎背后，除非你尝试优化一个函数，否则无须思考此类问题。<span style="text-decoration: underline wavy blue">递归函数是其最主要的应用场景，此时尾调用优化的效果最显著</span>。请看下面这个阶乘函数：

```javascript
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    //无法优化,必须在返回后执行乘法操作
    return n * factorial(n - 1);
  }
}
```

由于在递归调用前执行了乘法操作，因而当前版本的阶乘函数无法被引擎优化。如果n是一个非常大的数，则调用栈的尺寸就会不断增长并存在最终导致栈溢出的潜在风险。

优化这个函数，首先要确保乘法不会在函数调用后执行，你可以通过默认参数来将乘法操作移出return语句，结果函数可以携带着临时结果进入到下一个迭代中。以下这段新代码具有相同的行为，但可以被ECMAScript 6引擎优化：

```javascript
function factorial(n, p = 1) {
  if (n <= 1) {
    return 1 * p;
  } else {
    let result = n * p;
    
    //优化后
    return factorial(n - 1, result);
  }
}
```

当你写递归函数的时候，记得使用尾递归优化的特性，如果递归函数的计算量足够大，则尾递归优化可以大幅提升程序的性能。



### 函数使用实例

#### 获取函数的调用次数

指向自身

* 变量(词法标识符)
  * 如果要从函数内部引用它自身,只使用this是不够的.一般来说你需要通过一个指向函数对象的词法标识符(变量)来引用它.
* arguments.callee
  * 已经被弃用和批判
  * 引用当前正在运行的函数对象
  * 唯一一种可以从匿名函数内部引用自身的方法
  * 更好的方式是避免使用匿名函数,至少在需要自引用时使用具名函数(表达式)



实例

获取函数的调用次数

1.词法作用域

```javascript
function foo(num) {
  console.log('foo: ' + num);
  
  data.count++;
}

let data = { count: 0};

let i;
for(i=0;i<10;i++) {
  if (i>5) {
    foo(i);
  }
}

//foo被调用了多少次
console.log(data.count);
```

2.变量

```javascript
function foo(num) {
  console.log('foo: ' + num);
  
  foo.count++;
}

foo.count = 0;
let i;
for(i=0;i<10;i++) {
  if(i>5) {
    foo(i);
  }
}

//foo被调用的次数
console.log(foo.count);
```

3.arguments.callee

```javascript
//好像无法输出匿名函数的调用次数

setTimeout((num) => {
  arguments.callee
}, 100)
```

4.this

```javascript
function foo(num) {
  console.log('foo: ' + num);
  
  this.count++;
}

foo.count = 0;
let i;
for(i=0;i<10;i++) {
  if(i>5) {
    foo.call(foo, i)
  }
}

//foo被调用的次数
console.log(count);
```





### 函数变种 ?

> 暂时先用这个名字,表示函数使用的各种的变形

#### Function composition(函数组合)  //未完成

> [JavaScript function composition: What’s the big deal? (jrsinclair.com)](https://jrsinclair.com/articles/2022/javascript-function-composition-whats-the-big-deal/)

##### 概述

> Function composition  is where we take two functions , and combines them into one.
>
> That is our new function calls one function, takes the result, and passes it into another function.

```javascript
//we cal our function c2, short for 'compose two functions together'

const c2 = (funcA, funcB) => x => funcA(funcB(x));
```



##### 案例

Markdown标签转换

```javascript

//[link text goes here](http://example.com/example-url)

//![alt text goes here](/link/to/image/location.png)   

//we take a string and replace the pattern with appropriate HTML

const imagify = str = str.replace(
	/!\[([^\]"<]*)\]\(([^)<"]*)\)/g,
  '<img src="$2" alt="$1">'
)

const linkify = str = str.replace(
	/\[([^\]"<]*)\]\(([^)<"]*)\)/g,
  '<a href="$2" rel="noopener nowfollow">$1</a>'
)

const linkifyAndImagify = c2(linkify, imagify)

const linkifyAndImagify = str => linkify(imagify(str))

//For example,we counld define a bullet operator()
```







## 数组

> 数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。JavaScript 数组的长度和元素类型都是非固定的。因为数组的长度可随时改变，并且其数据在内存中也可以不连续，所以 JavaScript 数组不一定是密集型的，这取决于它的使用方式。
>
> 一般来说，数组的这些特性会给使用带来方便，但如果这些特性不适用于你的特定使用场景的话，可以考虑使用类型数组 [`TypedArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)。
>
> 只能用整数作为数组元素的索引，而不能用字符串。后者称为 [关联数组](https://en.wikipedia.org/wiki/Associative_array)。使用非整数并通过 [方括号](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#对象和属性) 或 [点号](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors) 来访问或设置数组元素时，所操作的并不是数组列表中的元素，而是数组对象的 [属性集合](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#属性) 上的变量。数组对象的属性和数组元素列表是分开存储的，并且数组的遍历和修改操作也不能作用于这些命名属性。



### 数组

#### 特点

* 数组是值得有序集合,其中的值叫做*元素*,每个元素有一个数值表示的位置,叫做*索引*.
* JS数组是无类型限制的,即数组中的元素可以是任意类型
* JS数组是基于零且使用32位数值索引的,第一个元素的索引是0,最大可能的索引是 `4 294 967 294 (2**32 - 2)`,即数组最大包含`4 294 967 295(2**32`个元素. 
* JS数组是动态的,按需增大或缩小,无需再大小变化时重新为它们分配内存空间
* JS数组可以是稀疏的,即元素不一定具有连续的索引,中间也可能有间隙.
* 每个JS数组都有一个length属性. 
  * 对稀疏数组, length大于所有元素的最高索引
  * 对非稀疏数组, length属性保存数组中元素的个数
* ES6新增定型数组(typed array).具有固定的长度和固定的元素类型.其具有极高性能,支持对二进制数据的字节级访问. ????







#### 疑问

为什么JS数组索引最大是`4 294 967 294`, 而不是`4 294 967 295`?

> [Why is a JavaScript Array index at most 4294967294 but not 4294967295? - Stack Overflow](https://stackoverflow.com/questions/12766422/why-is-a-javascript-array-index-at-most-4294967294-but-not-4294967295)
>
> 数组长度是32位整数.所以数组长度可以从`0`到`Math.pow(2, 32) - 1` ,也就是`4 294 967 295`  ???
>
> 数组长度`n`表明其范围是从`0`到`n-1`. 所以JS数组最大的索引是`(Math.pow(2, 32)-1) - 1)` 或 `Math.pow(2, 32) - 2`, 也就是`4 294 967 294`.
>
> 所以JS数组可以包含最大`4 294 967 295`个元素,而不是`2 294 967 296`个元素.

```js
# 数组Array    //A大写,是一个类,首字母需要大写
 * 数组也是一个对象    //对象主要是用来存储对象的
 * 数组用来存储有序的数据   //Object对象中存储的数据是无序的
 * 数组中存储的数据成为 元素(element)
 * 数组中每一个元素都有一个唯一的序号,这个序号被称为 索引(index)
 * 索引是一组从0开始的整数
 * 使用typeof检查数组时,返回的是 'object'

```



#### 1. 空位empty和undefined的区别

> https://juejin.cn/post/6844904025993773063#heading-14

**介绍**

使用数组字面量初始化数组时，可以使用一串逗号来创建空位（hole）。ECMAScript 会将逗号之间相应索引位置的值当成空位，ES6 规范重新定义了该如何处理这些空位。

**ES5和ES6的不同表现**

**ES5 对空位的处理，就非常不一致，大多数情况下会忽略空位。**

* `forEach()`, `filter()`, `reduce()`, `every()` 和 `some()` 都会跳过空位。

* `map()` 会跳过空位，但会保留这个值。

* `join()` 和 `toString()` 会将空位视为 `undefined`，而 `undefined` 和 `null` 会被处理成空字符串。




**ES6 则是明确将空位转为`undefined`**，

* `entries()`、`keys()`、`values()`、`find()`和 `findIndex()` 会将空位处理成 `undefined`。

* `for...of` 循环会遍历空位。

* `fill()` 会将空位视为正常的数组位置。

* `copyWithin()` 会连空位一起拷贝。

* 扩展运算符（`...`）也会将空位转为 `undefined`。

* `Array.from` 方法会将数组的空位，转为 `undefined`。



```javascript
//ES5 的方法则会忽略这个空位，但具体的行为也会因方法而异：

const options = [1,,,,5];
// map()会跳过空位置
console.log(options.map(() => 6)); // [6, undefined, undefined, undefined, 6]
// join()视空位置为空字符串
console.log(options.join('-')); // "1----5"


//ES6
const a = Array.from([,,,]); // 使用ES6 的Array.from()创建的包含3 个空位的数组
for (const val of a) {
  alert(val === undefined);
}
// true
// true
// true
alert(Array.of(...[,,,])); // [undefined, undefined, undefined]
for (const [index, value] of options.entries()) {
  alert(value);
}
// 1
// undefined
// undefined
// undefined
// 5


//其他
const options = [1,,,,5];
for (const option of options) {
  console.log(option === undefined);
}
// false
// true
// true
// true
// false
```

**实践使用**

注意 由于行为不一致和存在性能隐患，因此实践中要避免使用数组空位。<u>如果确实需要空位，则可以显式地用undefined 值代替。</u>



#### 2. 字符串索引和数值索引比较

```markdown
https://www.cnblogs.com/goloving/p/9180588.html
```

**结论**

1. **Javascript数组下标值的范围为0到2的32次方**
2. **对于任意给定的数字下标值，如果不在此范围内，js会将它转换为一个字符串，并将该下标对应的值作为该数组对象的一个属性值而不是数组元素，例如array[-1] = "yes" 其实就相当于给array对象添加了一个名为-1的属性，属性值为yes。**

```js
let arr = [];
arr['a'] = 'ahh';
arr['b'] = 'banner';
arr['c'] = 'cyx';
console.log(arr.length); //0
```



#### 3. 值为null或undefined

如果数组值为null或undefined, 那么调用toLocaleString(),join(),toString(),<del>valueOf()</del>方法时, 返回的结果中以空字符串表示.

```javascript
let arr = [null, undefined, 1];

//浏览器环境下
console.log(arr.toLocaleString()); //',,1'
console.log(arr.join('')); //'1'
console.log(arr.join()); //',,1'
console.log(arr.toString()); //',,1'
console.log(arr.valueOf()); //[null, undefined, 1]
```



#### 4. 稀疏数组和密集数组

> https://www.cnblogs.com/goloving/p/8686780.html

1.定义
稀疏数组:数组中的元素之间可以有空隙empty,
密集数组:每个元素都有值,即使是undefiend.
2.创建

```javascript
//2.1创建稀疏数组:数组元素实际只有2个，但是长度确实3.当你遍历这个数组的时候,不同的方法会有差异.
let arr = new Array(3);
arr[0]=0;
arr[2]=2; //中间一项是empty,这个arr数组是稀疏数组.

2.2创建密集数组:有真实元素了，虽然元素的值是undefined，但是你可以遍历到这些数组元素
let arr = Array.apply(null,Array(3)); //等同于let arr = Array(undefined,undefined,undefined);
```







### 创建数组 4 种方式

> 在ECMAScript 6以前,创建数组有两种方式: 调用Array构造函数;数组字面量语法. 
>
> 这两种方法均需列举数组中的元素,功能受限.如果将一个类数组对象(具有数值型索引和length属性的对象)转换为数组,可选方法有限.
>
> 为了解决以上问题,ES6新增了Array.of()和Array.from()两个方法



**方式列举**

* 数组字面量
* Array()构造函数
* 工厂方法 Array.of() Array.from()
* 对可迭代对象使用`...`扩展操作符



#### Array构造函数

##### 3种调用方式:

* 不传参调用: 创建一个没有元素的空数组
* 传入一个整数,创建一个指定长度的空数组
* 传入两个或多个数字,或传入一个非数值元素, 创建一个包含以上元素的数组



##### 1.1 Array构造函数的缺点

```JavaScript
//如果给Array构造函数传入一个数值型的值，那么数组的length属性会被设为该值；如果传入多个值，此时无论这些值是不是数值型的，都会变为数组的元素。这个特性令人感到困惑，你不可能总是注意传入数据的类型，所以存在一定的风险。


解决: Array.of()
```



#### 数组字面量表示法

* 数组字面量是在中括号中包含以逗号分隔的元素列表
* 字面量中的值不需要是常量,可以是任意表达式
* 可以包含对象字面量或其他数组字面量
* 数组字面量中连续包含多个逗号,且逗号之间没有值,则这个数组就是稀疏的.省略了值得数组元素不存在,但是按索引查询时又会返回undefined.
* 数组字面量语法允许末尾出现逗号.因为`[,,]`的长度是2不是3.

```js
let colors = ["red", "blue", "green"]; // 创建一个包含3 个元素的数组
let names = []; // 创建一个空数组
let values = [1,2,]; // 创建一个包含2 个元素的数组
```

注意 与对象一样，在使用数组字面量表示法创建数组不会调用Array 构造函数。



#### 扩展操作符

* 可以使用扩展操作符`...`在一个数组中包含另一个数组的元素
* 扩展操作符是创建数组(浅)副本的一种方式
* 扩展操作符适用于任何可迭代对象(可迭代对象可使用for/of循环遍历).字符串是可迭代对象.

```javascript
let a = [1,2,3]
let b = [0,...a,4] //[0,1,2,3,4]

```









#### Array.of()

Array 构造函数还有两个ES6 新增的用于创建数组的静态方法：from()和of()。from()用于将类数组结构转换为数组实例，而of()用于将一组参数转换为数组实例。

**背景**

解决Array()构造函数无法创建一个只包含数值元素的数组



```javascript
function createArray(arrayCreator, value) {
  return arrayCreator(value);
}

let items = createArray(Array.of, value);
```





#### Array.from()

> JavaScript不支持直接将非数组对象转换为真实数组，arguments就是一种类数组对象，如果要把它当作数组使用则必须先转换该对象的类型
>
> Array.from()方法可以接受**可迭代对象或类数组对象**作为第一个参数，最终返回一个新的数组.可迭代对象包 
>
> 注意: Array.from()方法也是通过this来确定返回数组的类型的。(?)

**特点**

* 该方法可接收一个可迭代对象或类数组对象,并返回包含该元素对象元素的新数组
* 如果传入可迭代对象 / arguments对象, Array.from(iterable) 与`[...iterable]`一样.
* 创建数组副本的一种方式

**参数**

```javascript
Array.from(arrayLike[, mapFn[, thisArg]]
```

`arrayLike` 想要转换成数组的伪数组对象或可迭代对象

`mapFn` **可选**

* 如果指定了该参数，新数组中的每个元素会执行该回调函数

`thisArg` **可选**

* 执行回调函数 `mapFn` 时 `this` 对象

##### **返回值**

一个新的[`数组`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)实例

##### **描述**

`Array.from()` 可以通过以下方式来创建数组对象

* 伪数组对象（拥有一个 `length` 属性和若干索引属性的任意对象）
* [可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)（可以获取对象中的元素,如 Map和 Set 等）
* `Array.from()` 方法有一个可选参数 `mapFn`，让你可以在最后生成的数组上再执行一次 [`map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法后再返回。也就是说` Array.from(obj, mapFn, thisArg) `就相当于` Array.from(obj).map(mapFn, thisArg),` 除非创建的不是可用的中间数组。 这对一些数组的子类`,`如 [typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) 来说很重要, 因为中间数组的值在调用 map() 时需要是适当的类型。
* `from()` 的 `length` 属性为 1 ，即 `Array.from.length === 1`。

##### **实例**

可迭代对象

```javascript
Array.from(Array(1000).keys())

Array(1000).keys() 返回一个可迭代对象

```



string生成数组

```javascript
Array.from('string');
//['s', 't', 'r', 'i', 'n', 'g']
```

从Set生成数组

```javascript
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

从Map生成数组

```javascript
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

数组去重合并

```javascript
function combine(){
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}

var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));                     // [1, 2, 3]
```







##### ES5和ES6 在转换组数上的比较

1.ES5 将类数组对象转换为数组: 将函数中的arguments对象转换为数组

```JavaScript
//第一种方法 for循环+push
function makeArray(arrayLike) {
  let result = [];
  for (let i=0; i<arraryLike.length; i++) {
    result.push(arrayLike[i]);
  }
  
  return result;
}

function doSomething() {
  let args = markArray(arguments);
  
  //使用args
}



//第二种方法 slice()方法
//slice()方法 只需数值型索引和length属性就能够正确运行，所以任何类数组对象都能被转换为数组
function makeArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
  // return [].slice.call(arrayLike)
}

function doSomething() {
  let args = makeArray(arguments);
  
  //使用args
}
```

2.ES6 将类数组对象转换为数组

```JavaScript
function doSomething() {
  let args = Array.from(arguments);
  
  //使用args
}

//Array.from()方法调用会基于arguments对象中的元素创建一个新数组，args是Array的一个实例，包含arguments对象中同位置的相同值。
```



##### Array.from() 映射转换

> 如果想要进一步转化数组，可以提供一个映射函数作为Array.from()的第二个参数，这个函数用来将类数组对象中的每一个值转换成其他形式，最后将这些结果储存在结果数组的相应索引中

```JavaScript
function translate() {
  return Array.from(arguments, value => value + 1);
}

let numbers = translate(1,2,3);
console.log(numbers); //2,3,4
```



> 如果用映射函数处理对象，也可以给Array.from()方法传入第三个参数来表示映射函数的this值

```javascript
let helper = {
  diff: 1,
  add(value) {
    return value + this.diff;
  }
};

function translate() {
  return Array.from(arguments, helper.add, helper);
}
```

> 用Array.from()转换可迭代对象
>
> Array.from()方法可以处理类数组对象和可迭代对象，也就是说该方法能够将所有含有Symbol.iterator属性的对象转换为数组

```javascript
let numbers = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

let numbers2 = Array.from(numbers, value => value + 1);

console.log(numbers2) //2,3,4
```

> 注意： 如果一个对象既是类数组又是可迭代的，那么Array.from()方法会根据迭代器来决定转换哪个值。

##### 使用

参数

```javascript
arrayLike 类数组或可迭代对象
mapFn 可选 映射函数被数组中每一个元素调用
thisArg 可选 当执行映射函数时候使用这个值
```



`Array.from()` 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

```javascript
//语法
Array.from(arrayLike[,mapFn[,thisArg]])
arrayLike 要转换成数组的伪数组对象或可迭代对象
mapFn 如果指定了该参数，新数组中的每个元素会执行该回调函数
thisArg 可选参数，执行回调函数 mapFn 时 this 对象

//返回值
一个新的数组

//描述
Array.from() 可以通过以下方式来创建数组对象：
 - 伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
 - 可迭代对象（可以获取对象中的元素,如 Map和 Set 等）
```



Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 Unicode 字符,可以避免 JavaScript 将大于`\uFFFF`的 Unicode 字符，算作两个字符的 bug。

```javascript
function countSymbols(string) {
  return Array.from(string).length;
}

countSymbols('\uD842\uDFB7'); //1
```





### 创建数组方式的区别

```javascript
let a = Array();
let b = new Array();
let c = [];
```

#### new Array() 和 [] 的区别

* 语法上唯一的区别是new Array()可以直接设置数组的长度
* 用new 关键字去内存开辟一个存储地址比较耗资源,耗内存.但不同文章的测试结果也有差异.



### 判断数组的7种方式

**概览**

* [].\_\_proto\_\_ === Array.prototype
* [] instanceof Array
* [].constructor === Array
* Array.prototype.isPrototypeOf([])
* Object.getPrototypeOf([]) === Array.prototype
* Object.prototype.toString.call([]).slice(8, -1)
* Array.isArray([])

#### 原型链方法

**instanceof**

```javascript
arr instanceof Array
```

**\_\_proto\_\_**

```javascript
arr.__proto === Array.prototype;

Array.prototype.isPrototypeOf(arr);

Object.getPrototypeOf(arr) === Array.prototype;

[].constructor === Array;
```



#### 数组和对象方法

**Array.isArray()**

```javascript
Array.isArray([]);
```

**Object.prototype.toString()**

```javascript
Object.prototype.toString.call([]) === '[object Array]'

Object.prototype.toString.call([]).slice(8, -1);
```



```js
1.instacneof

function isArray(obj){
    return obj instanceof Array;
}
instanceof操作符的问题在于，它假定只有一个全局执行环境。如果网页中包含多个框架，那实际上就存在2个以上不同的全局执行环境，从而存在2个以上不同版本的Array构造函数
如果你从一个框架向另一个框架传人一个数组，那么传人的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数。

为解决这个问题，ES5 新增了Array.isArray()方法


2.对象的constuctor属性
var arr = [1,2,3,1]
alert(arr.constuctor===Array) //true

arr.__proto__ == Array.prototype
arr.__proto__.constructor == Array

第1种和第2种方法貌似无懈可击，但是实际上还是有些漏洞的，当你在多个frame中来回穿梭的时候，这两种方法就亚历山大了。

由于每个iframe都有一套自己的执行环境，跨frame实例化的对象彼此是不共享原型链的，因此导致上述检测代码失效!
    

3.Object.prototype.toString.call(obj)
function isArray(obj){
    return Object.prototype.toString.call(obj)==='[object Array]'
}

4.Array.isArray()
ECMAScript5将Array.isArray()正式引入JavaScript，目的就是准确地检测一个值是否为数组。在IE8之前的版本是不支持的。
function (obj) {
    return Array.isArray(obj)
}


```



数组操作

### 读写数组元素

* 使用`[]`操作访问数组元素: 方括号左侧是数组的引用,方括号内是一个具有非负整数值得表达式.

* 只要使用小于`2**32 - 1`的非负整数作为属性名,数组就会自动为你维护length的属性的值.

* JS会将数值索引转换为字符串,然后再将这个字符串作为属性名.

* 明确区分数组索引和对象属性名: 所有索引都是属性名,但只有介于`0`和`2**32 - 2`之间的整数属性名才是索引.

* 在数组上可以以任意名字创建属性.如果这个属性是数组索引,数组自动按需更新其length属性

* 使用负数或非整数值来索引数组,其数值会变成字符串,会被当做属性名.

* 查询任何对象中不存在的属性都不会导致错误,只会返回undefined.



### 二维数组|非连续数组

```JavaScript
# 二维数组 //了解
* 数组中的元素还是数组,这种数组就被称为二维数组.依次类推三维, 四维数组

arr = [[1, 2, 3], [4, 5, 6]];
console.log(arr[0][1]); //  打印二维数组中索引为0的元素的索引为1的元素


# 数组形式
arr2 = new Array(5); //长度为5的空数组
arr2 = [5]; //数组的元素是5

空数组
arr2 =new Array()

arr2 = [,,];
arr2.fill(2); fill数组填充方法
console.log(arr2);//[2,2]

* 非连续数组
arr[0] = 10;
arr[1] = 11;
arr[2] = 12;
arr[6] = 15;    
arr[10] = 14;

数组的长度,最大索引10+1,是11个元素.但有好几个是空的,日常中比较少见.,意义不大
```





### 数组4方法

> ECMAScript 给数组提供几个方法，让它看起来像是另外一种数据结构
>
> 数组对象可以像栈一样,也就是一种限制插入和删除项的数据结构.
>
> 栈是一种后进先出的结构(LIFO, Last-In-First-Out), 也就是最近添加的项会被先删除. 数据项的插入(push,称为推入)和删除(称为弹出,pop)只在栈的一个地方发生,栈顶. 
>
> ECMAScript 数组提供了push()和pop()方法，以实现类似栈的行为。



#### push()

**定义**

`**push()**` 方法将<u>一个或多个元素</u>添加到数组的末尾，并返回该数组的**新长度**

**返回值**

新的`length`属性

**描述**

`push` 方法具有通用性。该方法和 [`call()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [`apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 一起使用时，可应用在类似数组的对象上。`push` 方法根据 `length` 属性来决定从哪里开始插入给定的值。如果 `length` 不能被转成一个数值，则插入的元素索引为 0，包括 `length` 不存在时。当 `length` 不存在时，将会创建它。

唯一的原生类数组（array-like）对象是 [`Strings`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)，尽管如此，它们并不适用该方法，因为字符串是不可改变的。

**实例**

向数组中添加元素

```javascript
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
```

合并两个数组

```javascript
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables.push(...moreVegs);

//另一种写法
Array.prototype.push.apply(vegetables, moreVegs);
[].push.apply(vegetables, moreVegs)
console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

//也可以使用concat()方法
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']
let result = vegetables.concat(moreVegs);
console.log(result); // ['parsnip', 'potato', 'celery', 'beetroot']
```

用类数组方式使用对象([Using an object in an array-like fashion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push#using_an_object_in_an_array-like_fashion))

`push`是通用的,`Array.prototype.push`也能在对象上使用.

我们无需创建一个数组来存储对象集合,反而,我们可以用对象集合存储它自己,在`Array.prototype.push`上使用`call`来调用, ,让方法认为在处理数组. 

```javascript
let obj = {
  length: 0,
  addElem: function addElem(elem) {
    // obj.length is automatically incremented
    // every time an element is added.
    [].push.call(this, elem);
  }
};

obj.addElem({});
obj.addElem({});

console.log(obj.length); //2
```



**实现**

```javascript
//https://juejin.cn/post/6844903986479251464#heading-39

Array.prototype.push = function(...items) {
  let O = Object(this)
  let len = O.length >>> 0
  let argCount = items.length >>> 0
  // 2** 53-1 为JS能表示的最大的数
  if (len+argCount > 2**53-1) {
    throw new TypeError('The number of array is over the max value restricted!')
  }
  
  for (let i=0; i<argCount; i++) {
    O[len+i] = items[i]
  }
  
  let newLength = len + argCount
  O.length = newLength
  
  return newLength
}
```



#### pop()

**定义**

`**pop()**`方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

**返回值**

从数组中删除的元素(当数组为空时返回[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined))。

**描述**

`pop` 方法有意具有通用性。该方法和 [`call()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [`apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 一起使用时，可应用在类似数组的对象上。`pop`方法根据 `length`属性来确定最后一个元素的位置。如果不包含`length`属性或`length`属性不能被转成一个数值，会将`length`置为0，并返回`undefined`。

如果你在一个空数组上调用 pop()，它返回  [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。



#### unshift()

**定义**

**`unshift()`** 方法将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度**(该方法修改原有数组**)**。

**Syntax**

```javascript
unshift(element0)
unshift(element0, element1, ...,elementN)
```

**Return value**

this new length property of the object upon which the method was called.



**描述**

`unshift` 方法会在调用它的<u>类数组对象</u>的开始位置插入给定的参数。 (数组, arguments对象)

`unshift` 特意被设计成具有通用性；这个方法能够通过 [`call`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [`apply`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法作用于类数组对象上。不过对于没有 length 属性的对象，调用该方法可能没有任何意义。

注意, 如果传入多个参数，它们会被以块的形式插入到对象的开始位置，它们的顺序和被作为参数传入时的顺序一致。 于是，传入多个参数调用一次 `unshift` ，和传入一个参数调用多次 `unshift` (例如，循环调用)，它们将得到不同的结果.

**实例**

```javascript
let arr = [4,5,6];
arr.unshift(1,2,3);
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr = [4,5,6]; // 重置数组
arr.unshift(1);
arr.unshift(2);
arr.unshift(3);
console.log(arr); // [3, 2, 1, 4, 5, 6]
```



**实现**

```javascript
// https://juejin.cn/post/6844903986479251464#heading-39

//自己的
Array.prototype.pop = function() {
  let O = Object(this)
  let len = O.length >>> 0
   
  let deleteItem = O[len - 1]
  
  O.length = len - 1;
  
  return deleteItem;
}

//完善的
Array.prototype.pop = function() {
  let O = Object(this)
  let len = O.length >>> 0
  
  if (len === 0) {
		O.length = 0 //???
    return undefind
  }
  
  len--
  let value = O[len]
  delete O[len]
  O.length = len
  return value
}
```



#### shift()

**定义**

`shift()` 方法从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。

**返回值**

从数组中删除的元素; 如果数组为空则返回[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 。

**描述**

`shift` 方法移除索引为 0 的元素(即第一个元素)，并返回被移除的元素，其他元素的索引值随之减 1。如果 [`length`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length) 属性的值为 0 (长度为 0)，则返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

`shift` 方法并不局限于数组：这个方法能够通过 [`call`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [`apply`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法作用于类似数组的对象上。

**实例**

```javascript
//shift() 方法经常用于while loop的环境中.。下例中每个循环将要从一个数组中移除下一项元素，直至它成为空数组。

var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```



### 遍历数组的多种方法

#### 1. 遍历数组方法列举(8种,不全)

1. 普通for循环

```javascript
for (let i = 0; i < arr.length; i++) {
  
}
```

简要说明: 最简单的一种，也是使用频率最高的一种，虽然性能不弱，但仍有优化空间

2. 优化版for循环

```javascript
for (let i = 0, len = arr.length; i < len; i++) {
  
}
```

简要说明: 使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显。

**这种方法基本上是所有循环遍历方法中性能最高的一种**

3. 弱化版for循环

```javascript
for (let i = 0; arr[i] !== null; i++) {
  
}
```

这种方法其实严格上也属于for循环，只不过是没有使用length判断，而使用变量本身判断

**实际上，这种方法的性能要远远小于普通for循环**

4. forEach循环

```javascript
arr.forEach((item,index,arr) => {});
```

数组自带的foreach循环，使用频率较高，实际上性能比普通for循环弱

5. forEach变种

```javascript
Array.prototype.forEach.call(arr, (item,index,arr) => {})
```

由于foreach是Array型自带的，对于一些非这种类型的，无法直接使用(如NodeList)，所以才有了这个变种，使用这个变种可以让类似的数组拥有foreach功能。

实际性能要比普通foreach弱

6. for...in循环

```javascript
for(let i in arr) {
  
}
```

众多循环中效率最低

7. for...of循环

```javascript
for(let value of arr) {
  
}
```

es6里的，性能要好于forin，但仍然比不上普通for循环

8. map循环

```javascript
arr.map((item,index,arr) => {})
```



#### 2. 遍历数组方法性能比较图

以下截图中的数据是，在chrome (支持es6)中运行了100次后得出的结论(每次运行10次,一共10个循环，得到的分析结果)

![遍历数组](https://dailc.github.io/jsfoundation-perfanalysis/staticresource/performanceAnalysis/demo_js_performanceAnalysis_jsarrayGoThrough_1.png)

#### 3. 各方法详解

##### for循环顺序

```js
for(let i=0; i<arr.length; i++){}

for(let i=arr.length;i>0;i--){}
```



##### forEach

**介绍**

- forEach()是数组对象的方法,可以用来对数组进行遍历,它需要一个函数作为参数. //没有返回值
- 传递给数组的函数会调用多次,数组中有几个元素就调用几次
- 每次调用时,会将元素的信息以参数的形式传递进函数
- forEach()不能遍历对象,可以使用for-in

**返回值**

forEach() 被调用时，不会改变原数组，也就是调用它的数组
forEach返回值是undefined,没有返回值.

**实例**

```js
forEach的回调函数有三个参数:
第一个: item 当前遍历的元素
第二个: index 当前遍历的元素的索引
第三个: array 当前正在遍历的元素
    
数组.forEach(function(item, index, array){ //顺序很重要
    console.log(item, index, array); 
})
```



##### for...of

`for…of` 是在 ES6（ECMAScript 6）中实现标准化的。它会对一个可迭代的对象（例如 `array`、`map`、`set`、`string` 等）创建一个循环

```js
const arr = [3, 5, 7];
const str = 'hello';
for (const i of arr) {
   console.log(i); // 输出 3, 5, 7
}
for (const i of str) {
   console.log(i); // 输出 'h', 'e', 'l', 'l', 'o'
}



使用for/of获取数组索引，可以这样写
for(const[i,v] of arr.entries()) {
  console.log(i,v);
}
```



##### for...in

**`for...in`语句**以任意顺序遍历一个对象的除[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性，包括继承的可枚举属性.

`for…in` 语句除返回数字索引外，还将返回用户定义的属性的名称。 

因此，在遍历数组时最好使用带有数字索引的传统 `for` 循环, `for...of`。 

```js
// for…in 循环遍历对象的属性，而 for…of 循环遍历可迭代对象的值。
let arr = [1,2,3];
for(let i in arr){
  console.log(i); //'0','1','2'
}

//数组具有一个可枚举的方法，也会被for-in遍历到
let arr = [1,2,3];
arr.name = 'test';
for (let i in arr) {
  console.log(i + ":" + arr[i])
}
//0:1
//1:2
//2:3
//name: 'test'
```



#### 4. 如何停止遍历数组???

##### 1. forEach()中无法return/break,

**for循环, for-in, for...of**能正确响应break、continue和return语句，但forEach不行。 

具体查看 `语句 > JS中如何跳出循环/结束遍历`中的内容

```js
//跳出for循环使用break, 但在数组中用forEach循环如果要退出使用break会报错,使用return只能跳出本次循环

//原因:

根据forEach的实现,回调函数只是执行而不使用返回值,函数中的return可以终止下面的语句执行,相当于跳出了本次循环.

//如何终端forEach
0. 使用for循环
1. 使用some/every
2. 使用try&catch
```





##### 2. map循环如何跳出?

```js
//前提: map无法跳出, 所以es6中才会添加for-of语法

//原因: map是个迭代,不是循环

//解决方法:
1. try-catch  使用throw抛出错误.
2. 使用for-of循环
3. 使用some/every更合理
```



### 数组其他方法

#### 破坏性方法和非破坏性方法

| 非破坏性方法名称           | 返回值                                                       |
| -------------------------- | ------------------------------------------------------------ |
| Array.prototype.toString() | 字符串                                                       |
| Array.prototype.slice()    | 对数组进行截取,返回截取的数组                                |
| Array.prototype.concat()   | 连接2个或多个数组,并返回结果                                 |
| Array.prototype.indexOf()  | 查询元素第一次出现在数组的位置并返回,没有返回-1              |
| Array.prototype.join()     | 将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN_docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)）的所有元素连接成一个字符串并返回这个字符串 |
| Array.prototype.some()     | 检测数组中是否有元素符合指定条件                             |
| Array.prototype.every()    | 检测数组元素是否都符合条件                                   |
| Array.prototype.filter()   | 返回符合检测条件的元素并返回符合条件的所有元素组成的数组     |
| Array.prototype.map()      | 通过指定函数处理每个元素,并解放者处理后的数组                |
| Array.prototype.valueOf()  | 返回数组对象的原始值                                         |



| 破坏性方法                | 返回值                                       |
| ------------------------- | -------------------------------------------- |
| Array.prototype.splice()  | 用于插入,删除或替换数组的元素                |
| Array.prototype.push()    | 向数组末尾添加1个或多个元素,返回数组新的长度 |
| Array.prototype.pop()     | 删除并返回数组最后一个元素                   |
| Array.prototype.unshift() | 向数组开头添加1个或多个元素,返回数组新的长度 |
| Array.prototype.shift()   | 删除并返回数组的第一个元素                   |
| Array.prototype.reverse() | 反转数组的元素顺序                           |
| Array.prototype.sort()    | 对数组元素进行排序                           |



#### Array.prototype.toString

`**toString()**` 返回一个字符串，表示指定的数组及其元素

```js
Array.prototype.toString()

//描述
-Array对象覆盖了Object的 toString 方法。对于数组对象，toString 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素。
-当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法
```



#### Array.prototype.forEach

**syntax**

```javascript
forEach(callback, thisArg)
```



**方法重写**

```javascript
Array.prototype.myForEach = function(callback) {
  let _arr = this,
      thisArg = arguments[1] || globalThis;
  
  //判断this是否合法
  if (this === null || this === undefined) {
    return new TypeError("cannot read property of 'myForEach' of null");
  }
  
  //判断callback是否合法
  if (Object.prototype.toString.call(callback).slice(8, -1) !== 'Function') {
    return new TypeError(callback + 'is not a function');
  }
  
  
  for (let i=0; i<_arr.length; i++) {
    callback.call(thisArg, _arr[i], i, _arr);
  }
}
```



#### Array.prototype.slice-截取

**定义**

`**slice()**` 方法返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，不包括`end`）。原始数组不会被改变。

**Syntax**

```javascript
slice()
slice(start)
slice(start, end)
```



**参数**

`begin` 可选

* 提取起始处的索引（从 `0` 开始），从该索引开始提取原数组元素。

* 如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取

* 如果省略 `begin`，则 `slice` 从索引 `0` 开始。

* 如果 `begin` 超出原数组的索引范围，则会返回空数组。

`end`  可选

* 提取终止处的索引（从 `0` 开始），在该索引处结束提取原数组元素
* 如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取
* 如果 `end` 被省略，则 `slice` 会一直提取到原数组末尾。包括最后一个
* 如果 `end` 大于数组的长度，`slice` 也会一直提取到原数组末尾.

**返回值**

一个含有被提取元素的新数组

**描述**

`slice` 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：

* 如果该元素是个对象引用 （不是实际的对象），`slice` 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
* 对于字符串、数字及布尔值来说（不是 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)、[`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 或者 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 对象），`slice` 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。

<u>如果向两个数组任一中添加了新元素，则另一个不会受到影响。</u>

```javascript
let obj = {a: 'a', b: 'b'},
    arr = [1, obj, {c: 'c'}];

let result = arr.slice();

obj['a'] = 'aa';
console.log(result);  //[1, {a: 'aa', b: 'b'}, {c: 'c'}]
```



**实例**

1.复制数组

```JavaScript
//复制整个数组的方法
	arr.slice()
	arr.slice('')  //非数字类型参数下相当于没传递参数
	arr.slice(0)
```

类数组转换为真数组

```javascript
//es5
let arrLike = {0:0, 1:1, 2:2, length: 3};
let arr = Array.prototype.slice.call(arrLike);
let result = [].slice.call(arrLike);

//es6
Array.of(arguments)
```



**代码实现**

```js
Array.prototype.mySlice = function(start, end) {
  let arr = this;
  let newArr = [];
  
  start = start || 0;
  end = end || arr.length;
  start = start < 0 ? 0 : start;
  end = end + arr.length < 0 ? 0 : end + length;
  if (end > arr.length) end = arr.length;
  
  if (start > arr.length || end === 0) {
    return newArr;
  }
  
  for (let i=start; i<end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
```





#### Array.prototype.splice-删除 替换 新增

**定义**

**`splice()`** 方法通过**删除或替换**现有元素或者**原地添加**新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

**参数**

```javascript
array.splice(start[, deleteCount[, item1[, items[, ...]]]])
```

`start`

* 指定修改的开始位置（从0计数）。
* 如果超出了数组的长度，则从数组末尾开始添加内容；
* 如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于`array.length-n`）；
* 如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

`deleteCount` 可选

* 整数，表示要移除的数组元素的个数。
* 如果 `deleteCount` 大于 `start` 之后的元素的总数，则从 `start` 后面的元素都将被删除（含第 `start` 位）。
* 如果 `deleteCount` 被省略了，或者它的值大于等于`array.length - start`(也就是说，如果它大于或者等于`start`之后的所有元素的数量)，那么`start`之后数组的所有元素都会被删除。
* 如果 `deleteCount` 是 0 或者负数，则不移除元素。返回空数组.

`item1, item2,...`

* 要添加进数组的元素,从`start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素

**返回值**

由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

**实例**

```javascript
1.从第2位开始删除1个元素,插入'drum'
let myFish = ['angel',"clown", "mandarin", "sturgeon"]
myFish.splice(2,1,'drum')

2.从倒数第2位开始删除1个元素
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);
// 运算后的 myFish: ["angel", "clown", "sturgeon"]
// 被删除的元素: ["mandarin"]

```



**代码实现** ????

```js
// https://juejin.cn/post/6844903986479251464#heading-39


```



#### Array.prototype.concat()

**定义**

**`concat()`** 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组

**参数**

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

`valueN` 可选

数组和/或值，将被合并到一个新的数组中。如果省略了所有 `valueN` 参数，则 `concat` 会返回调用此方法的现存数组的一个<u>浅拷贝</u>。

**返回值**

新的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 实例

**描述**

* `concat`方法创建一个新的数组，它由被调用的对象中的元素组成，每个参数的顺序依次是该参数的元素（如果参数是数组）或参数本身（如果参数不是数组）。它不会递归到嵌套数组参数中。
* `concat`方法不会改变`this`或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。 原始数组的元素将复制到新数组中:
  * 对象引用（而不是实际对象）：`concat`将对象引用复制到新数组中。 原始数组和新数组都引用相同的对象。
  * 数据类型如字符串，数字和布尔（不是[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)，[`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 和 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 对象）：`concat`将字符串和数字的值复制到新数组中
  * 对于新数组的任何操作（仅当元素不是对象引用时）都不会对原始数组产生影响，反之亦然。

**实例**

连接3个数组

```javascript
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]


let arr = [1,2,3];
let res = arr.concat(4,5,[6,7],8,{a: 9});
console.log(res); //[1,2,3,4,5,6,7,8,{a:9}]
```

连接对象

```javascript
//合并对象
let obj ={a:2}
let arr=[1,2,3]
let result = arr.concat(obj);
console.log(result);//[1,2,3,{a:2}]
```

浅拷贝验证

```javascript
let arr=[1,2,3,{a:4}];
let result=arr.concat();
arr[3].a=5;
console.log(arr, result);
//[1, 2, 3,{a:5}] [1, 2, 3,{a:5}]
```



**代码实现**

```js
//代码实现

Array.prototype.concat=function(){
  let length = arguments.length;
  let result = this;
  if(length===0){
    return result;
  }else{
    for(let i=0;i<length;i++){
      if(Array.isArray(arguments[i])){
        result.push(...arguments[i])
      }else{
        result.push(arguments[i])
      }
    }
    return result;
  }
}
```





  



#### Array.prototype.indexOf()

**定义**

`indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1

**参数**

```javascript
arr.indexOf(searchElement[, fromIndex])
```

`searchElement`

* 要查找的元素

`fromIndex` 可选

* 开始查找的位置。包括查找的位置
* 如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1
* 如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消或者通过(length+负值)得出
* 如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组

**返回值**

首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1.

**描述**

* `indexOf` 使用[strict equality (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#using_the_equality_operators) (无论是 ===, 还是 triple-equals操作符都基于同样的方法)进行判断 `searchElement与`数组中包含的元素之间的关系
* 和`includes`类似, `+0`和`-0`是被认为是相等的, 但是`NaN`与`NaN`相反, `indexOf`认为不相等, `includes`认为相等



**重写**

```javascript
Array.prototype.myIndexOf = function(searchItem, fromIndex) {
  if (this.length === 0 || fromIndex >= this.length) {
    return -1;
  }
  if (!searchItem) {
    return new Error('need offer an initial value')
  }
  
  if (fromIndex < 0) {
    fromIndex = fromIndex+this.length < 0 ? 0 : fromIndex+this.length;
  }
  
  for (let i=0; i<this.length; i++) {
    if (searchItem === this[i]) {
      return i;
    }
  }
  return -1;
}
```



**实例**

数组去重

```javascript
let arr = [1,2,3,1,1,4,3,2,5,6,7];
let newArr = [];
arr.forEach(item => {
  if (newArr.indexOf(item) === -1) {
    newArr.push(item);
  }
});
```

找出元素出现的所有位置

```javascript
let arr = [1,2,3,1,1,4,3,2,5,6,7];
let indexArr = [];

function searchIndex(ele, arr) {
  for (let i=0; i<arr.length;) {
    let index = arr.indexOf(ele, i);
    if (index === -1) return;
    indexArr.push(index);
    i = index + 1;
  }
  return indexArr;
}

searchIndex(1, arr)

//另一种方法
let indices = [],
    array = ['a', 'b', 'c', 'd', 'a', 'd'],
    ele = 'a';

let idx = array.indexOf(ele);
while(idx !== -1) {
	indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
```



**代码实现**

```js
Array.prototype.indexOf=function(item,index){
  let start;
  let flag=false;
  let length = this.length;
  if(!start){
    start=0;
  }else if(start>length){
    start=length;
  }else if(start<0){
    start=length+start;
  }
  
  for(let i=start;i<length;i++){
    if(arr[i]===item){
      flag = true;
      return i;
    }
  }
  if(!flag){
    return -1;
  }
}
```



#### Array.prototype.lastIndexOf()

**定义**

`lastIndexOf()` 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 `fromIndex` 处开始。

**参数**

```javascript
arr.lastIndexOf(searchElement[, fromIndex])
```

`searchElement`

* 被查找的元素

`fromIndex` 可选

* 从此位置开始逆向查找。
* 默认为数组的长度减 1(`arr.length - 1`)，即整个数组都被查找。
* 如果该值大于或等于数组的长度，则整个数组会被查找。
* 如果为负值，将其视为从数组末尾向前的偏移。
* 即使该值为负，数组仍然会被从后向前查找。
* 如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。

**重写**

```javascript
Array.prototype.lastIndexOf = function(searchItem, fromIndex = this.length -1) {
  if (this.length === 0) {
    return new Error("the array's length must greater than 0")
  }
  if (fromIndex < 0 && Math.abs(fromIndex) > this.length) {
    return -1;
  }
  if (fromIndex < 0 && Math.abs(fromIndex) <= this.length) {
    fromIndex = this.length + fromIndex;
  }
  if (fromIndex >= this.length) {
    fromIndex = this.length;
  }
  for (let i=fromIndex; i>=0; i--) {
    if (searchItem === this[i]) {
      return i;
    }
  }
  return -1;
}
```



**返回值**

数组中该元素最后一次出现的索引，如未找到返回-1。

**描述**

`lastIndexOf` 使用[严格相等](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)（strict equality，即 ===）比较 `searchElement` 和数组中的元素

**实例**

用 `lastIndexOf` 查找到一个元素在数组中所有的索引（下标），并使用 [`push`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 将所有添加到另一个数组中。

```javascript
let arr = [1,2,3,4,5,1,2,1,3,1,5,2,4,4,1],
    indexArr = [];

function searchIndex(arr, ele) {
  let idx = arr.lastIndexOf(ele);
  while(idx !== -1) {
    indexArr.push(idx);
    if (idx === 0) return;
    idx = arr.lastIndexOf(ele, idx - 1);
  }
}


//另外的方法
let idx = arr.lastIndexOf(ele);
while(idx !== -1) {
  indexArr.push(idx);
  idx = (idx > 0 ? arr.lastIndexOf(ele, idx - 1) : -1);
}

```

数组中有且只有一个且只取第一个此类元素

```javascript
function getNoRepeatParament(s) {
  let arr = s.toLowerCase().split('');
  for (let value of arr) {
    if (arr.indexOf(value) === arr.lastIndexOf(value)) return s[arr.indexOf(value)]
  }
}
```

获取数组中的只出现一次的元素

```javascript

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 1, 2, 3, 4];

let filterArr = arr.filter((item, index) => arr.indexOf(item) === arr.lastIndexOf(value));


```



#### Array.prototype.join()

**定义**

`**join()**` 方法将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN_docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该元素字符串而不使用分隔符。

toString()与join()实现同样的效果

**参数**

```javascript
arr.join([separator])
```

`separator` 可选

* 指定一个字符来分隔数组的每个元素。
* 如果需要，将分隔符转换为字符串。
* 如果缺省该值，数组元素用逗号（`,`）分隔。
* 如果`separator`是空字符串(`""`)，则所有元素之间都没有任何字符。

**返回值**

一个所有数组元素连接的字符串。如果 `arr.length` 为0，则返回空字符串

**描述**

* 所有的数组元素被转换成字符串，再用一个分隔符将这些字符串连接起来。
* 如果一个元素为 `undefined` 或 `null`，它会被转换为空字符串。

**实例**

连接类数组对象

```javascript
Array.prototype.join.call(arguments)
[].join.call(arguments)
```

**代码实现**

```js
//手写代码
当数组调用toString(),String()方法的时候,底层代码也调用了join(),所以使用转换字符换方法重写函数会出现死循环.

Array.prototype.join=function(sep){
  if(!sep){
    sep=','
  }
  let arr = this;
  let newStr = '';
  for(let i=0;i<arr.length;i++){
    newStr += arr[i]+ (arr[i]===arr[length-1]?'':sep)
  }
  return newStr
}
let arr = [1,2,3]
let result = arr.join()
```



  

#### Array.prototype.reverse()

**定义**

`reverse()` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

**参数**

```javascript
arr.reverse()
```

**返回值**

颠倒后的数组。

**描述**

* `reverse` 方法颠倒数组中元素的位置，改变了数组，并返回该数组的引用
* reverse方法是特意类化的；此方法可被 [called](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [applied](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)于类似数组对象。
* 对象如果不包含反映一系列连续的、基于零的数值属性中的最后一个长度的属性，则该对象可能不会以任何有意义的方式运行。

**重写**

```javascript
Array.prototype.myReverse = function() {
  let temp;
  
  //偶数
  if (this.length % 2 === 0) {
    for (let i=0; i<this.length/2; i++) {
      temp = this[i];
      this[i] = this[this.length-1-i];
      this[this.length-1-i] = temp;
      temp = null;
    }
  }
  
  
  //奇数
  if (this.length % 2 !== 0) {
    for (let i=0; i<=Math.ceil(this.length / 2); i++) {
    	if (Math.ceil(this.length/2) === i) {
        this[i] = this[i]
      }
      
      temp = this[i];
      this[i] = this[this.length-1-i];
      this[this.length-1-i] = temp;
      temp = null;
    }
  }
  
  return this;
}
```



**实例**

颠倒类数组中的元素

```javascript
const a = {0: 1, 1: 2, 2: 3, length: 3};

console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); //same syntax for using apply()
[].reverse.call(a)

console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}
```



####   Array.prototype.sort()

**定义**

`sort()`方法用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。**默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的.** 

可以用来对一个数组进行排序,它是一个**破坏性的方法**..调用后,原数组的顺序就会被改变.

可以通过传递一个 回调函数 来自定义排序规则

**参数**

```javascript
arr.sort([compareFunction])
```

`compareFunction` 可选

* 用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的<u>Unicode位点</u>进行排序。([字符编码笔记:ASCII, Unicode和UTF-8](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html))
* `firstEl` 第一个用于比较的元素。
* `secondEl` 第二个用于比较的元素

**返回值**

排序后的数组。请注意，数组已原地排序，并且不进行复制。

**描述**

* If `compareFunction` is not supplied, all non-undefined array elements are sorted by convertng them to strings and comparing strings in UTF-16 codeunits order.
  * For example: 'banana' coms before 'cherry'. In a numeric sort, 9 coms before 80. but because numbers are converted to strings, '80' comes before '9' in the Unicode order.
  * <u>all undefined elements are sorted to the end of the array.</u>

* 如果指明了 `compareFunction` ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：
  * 如果 `compareFunction(a, b)` 小于 0 ，那么 a 会被排列到 b 之前；
  * 如果 `compareFunction(a, b)` 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
  * 如果 `compareFunction(a, b)` 大于 0 ， b 会被排列到 a 之前。
  * `compareFunction(a, b)` 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

```javascript
//比较函数格式:
function compare(a, b) {
  if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
    return -1;
  }
  if (a > b ) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

要比较数字而非字符串，比较函数可以简单的以 a 减 b，如下的函数将会将数组升序排列

```javascript
- 如果希望 升序 排列(从小到大),传:
function(a, b){
  return a - b;  //记忆方法: 26个字符从a到z是从小到大, a - b理解为从小到大,是升序. b -a是从大到小
}

- 如果希望降序排列(从大到小),传:
function(a, b){
  return b - a;
}

- 乱序排列
function(a, b){ //参数a与b写不写都一样了
  return Math.random() - Math.random
}
() => Math.random() - 0.5;

//没有传递参数的写法
[1,3,2,5,4].sort(() => -1); //[4, 5, 2, 3, 1]
[1,3,2,5,4].sort(() => 1); //[1,3,2,5,4]
[1,3,2,5,4].sort(() => 0); //[1,3,2,5,4]
```

**为什么升序是a - b????**  

```javascript
//https://blog.csdn.net/weixin_42207975/article/details/107538527
// 是结果推原因, 怎么说呢, 总是记不住.
let arr = [1, 22, 15, 32, 4, 5];
arr.sort((a, b) => a - b); //升序排列 [1, 4, 5, 15, 22, 32]
arr.sort((a, b) => b - a); //降序排列 [...]

```

回调函数的格式为（a,b）=> { return xxx }，ab为数组中任意两个数:

* 当返回值大于0, a放在b的后面
* 当返回值小于0, a放在b的前面
* 当返回值等于0, 位置不变

```javascript
当a > b时:
a - b > 0, 排序结果: b, a  (升序)
b - a < 0, 排序结果: a, b  (降序)

当b > a时候:
a - b < 0, 排序结果是: a, b (升序)
b - a > 0, 排序结果是: b, a (降序)

当 a=b 时，

a - b = b - a =0 , 排序结果 ===> 保持不变
```

`结论`: 无论a>b还是b>a，return a-b 总能得到升序的结果，而 return b-a 总能得到降序的结果. 另外，return a-b / return b - a 只是一种在理解的基础上简便的写法。复杂的写法就是使用上面的'比较函数的格式'.



**重写**

> https://juejin.cn/post/6844903986479251464#heading-33    本篇文章重要 精读  看不懂

```javascript
//插入排序 v1.0
const insertSort = (arr, start=0, end) => {
  end = end || arr.length;
  for (let i=start; i<end; i++) {
    for (let j=i; j>start&&arr[j-1]>arr[j]; j--) {
      let temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
    }
  }
  return arr;
}

//插入排序v2.0 优化插入
//实际上交换元素会有相当大的性能消耗，我们完全可以用变量覆盖的方式来完成   ???? 这个我不明白
const insertSort = (arr, start = 0, end) => {
  end = end || arr.length;
  for (let i=start; i<arr.length; i++) {
    let e = arr[i];
    let j;
    for (j=i; j>start&&arr[j-1]>e; j--) {
      arr[j-1] = arr[j];
    }
    arr[j] = e;
  }
  return arr;
}


//
```



实现数组的sort方法  看不懂????

> [(建议精读)原生JS灵魂之问(中)，检验自己是否真的熟悉JavaScript？ - 掘金 (juejin.cn)](https://juejin.cn/post/6844903986479251464#heading-33)

**实例**

使用映射改善排序 !!!!

> `compareFunction` 可能需要对元素做多次映射以实现排序，尤其当 `compareFunction` 较为复杂，且元素较多的时候，某些 `compareFunction` 可能会导致很高的负载。使用 map 辅助排序将会是一个好主意。基本思想是首先将数组中的每个元素比较的实际值取出来，排序后再将数组恢复。

```js
let arr = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
// 对需要排序的数字和位置的临时存储
let mappedObj = arr.map((item,index)=>{
  return {index:index,value:item.toLowerCase()};
})
// 按照多个值排序数组
mappedObj.sort((a,b)=>{
  return +(a.value>b.value)||+(a.value===b.value)-1;
})
// 根据索引得到排序的结果
let result = mappedObj.map((item)=>{
  return list[item.index]
})
```

排序稳定性

> 自 ES10（EcmaScript 2019）起，[规范](https://tc39.es/ecma262/#sec-array.prototype.sort) 要求 `Array.prototype.sort` 为稳定排序。

也就是说,当有相同排序条件时,按排序之前的位置来排序

```javascript
const students = [
  { name: "Alex",   grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
];


students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);

[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Alex",   grade: 15 }, // grade 相同时维持原先的顺序 (稳定排序)
  { name: "Devlin", grade: 15 }, // grade 相同时维持原先的顺序 (稳定排序)
];
```





#### Array.prototype.map()

**定义**

map()方法返回一个由原数组中每个元素调用一个指定方法后的返回值组成的新数组, 可以改变原数组



**参数**

```javascript
let new_array = arr.map(function callback(currentValue[,index[, array]])) {
  //
}[, thisArg]
```

`callback` 

* 生成新数组元素的函数，使用三个参数：
  * `currentValue` `callback` 数组中正在处理的当前元素。
  * `index`**可选**  `callback` 数组中正在处理的当前元素的索引
  * `array` **可选** `map` 方法调用的数组。
* `thisArg` 可选
  * 执行 `callback` 函数时值被用作`this`

**返回值**

一个由原数组每个元素执行回调函数的结果组成的新数组。

**描述**

* `map` 方法会给原数组中的每个元素都按顺序调用一次  `callback` 函数。
* `callback` 每次执行后的返回值（包括 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)）组合起来形成一个新数组。
*  `callback` 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 `delete` 删除的索引则不会被调用。
* 如果 `thisArg` 参数提供给`map`，则会被用作回调函数的`this`值。否则[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)会被用作回调函数的`this`值。
* `map `不修改调用它的原数组本身（当然可以在 `callback` 执行时改变原数组）!!!!
* `map` 方法处理数组元素的范围是在 `callback` 方法第一次调用之前就已经确定了。调用`map`方法之后追加的数组元素不会被`callback`访问。
* 如果存在的数组元素改变了，那么传给`callback`的值是`map`访问该元素时的值。在`map`函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。
* 根据规范中定义的算法，如果被map调用的数组是离散的，新数组将也是离散的保持相同的索引为空。

**实现**

依照 [ecma262 草案](https://link.juejin.cn/?target=https%3A%2F%2Ftc39.es%2Fecma262%2F%23sec-array.prototype.map)，实现的map的规范如下:

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/3/16e311d99e860405~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



```javascript
//根据草案实现
//https://juejin.cn/post/6844903938890661896#comment
//https://juejin.cn/post/6844903986479251464#heading-39
Array.prototype.map = function(callback, thisArg) {
  
  // 处理数组类型异常
  
  // 处理回调类型异常
  
  //先转换为对象
  let O = Object(this)
  let T = thisArg || undefined
  
  let len = O.length >>> 0
  let A = new Array(len)
  for (let k=0; k<len; k++) {
    //如果使用hasOwnProperty 它只查找私有属性
    if (k in O) {
      let kValue = O[k]
      let mappedValue = callback.call(T,kValue,k,O)
      A[k] = mappedValue
    }
  }
  return A
}


//注意  
//length >>> 0 字面意思右移零位,这里的作用是保证len为数字且为整数.

//为什么使用in查找而不使用hasOwnProperty查找:    in使用原型链查找, 能有效处理稀疏数组的情况  这个地方我是存疑的,如果k不存在于数组O身上,那么在原型上也找不到. 例如 0 in [] 返回的是false
```



```javascript
//V8源码实现  

function ArrayMap(f, receiver) {
  CHECK_OBJECT_COERCIBLE(this, 'Array.prototype.map')
  
  // Pull out the length so that modification to the length in the loop will not affect the looping and side effects are visible
  
  var array = TO_OBJECT(this)
  let length = TO_LENGTH(array.length)
  if (!IS_CALLABLE(f)) throw $make_type_error(kCalledNonCallable, f);
  
  for (var i=0; i<length; i++) {
    if (i in array) {
      var element = array[i]
      %CreateDataProperty(result, i, %_Call(f, receiver, element, i, array))
    }
  }
  
  return result
}
```



```javascript
//简略版

Array.prototype.myMap = function(callback) {
  let arr = this,
      thisArg = arguments[1],
      resArr = [];
  
  // verify this
  if (Object.prototype.toString.call(this).slice(8, -1) !== 'Array') {
    throw new TypeError('the Object type must be an Array');
  }
  // verify callback
  if (arguments.length === 0) {
    throw new TypeError('undefined is not a function');
  }
  
  for (let i=0; i<arr.length; i++) {
    resArr.push(callback.call(thisArg, arr[i], i, arr));
  }
  return resArr;
}
```



**实例**

[使用 map 重新格式化数组中的对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map#使用_map_重新格式化数组中的对象)

```javascript
var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(function(obj) {
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});

// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}],
```

使用技巧

```javascript
["1", "2", "3"].map(parseInt); //[1, NaN, NaN]

["1", "2", "3"].map(parseInt('1', 0));  //十进制 1
["1", "2", "3"].map(parseInt('2', 1));  //基数超范围 NaN
["1", "2", "3"].map(parseInt('3', 2));  //NaN


//解决方案
function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
['1', '2', '3'].map( str => parseInt(str) );

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
// For comparison, if we use parseInt() on the array above:
['1.1', '2.2e2', '3e300'].map( str => parseInt(str) ); // [1, 2, 3]
```

[Mapping 含 undefined的数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map#mapping_含_undefined的数组)

```javascript
let numbers = [1,2,3,4];
let filterNumbers = numbers.map((num, index) => {
  if (index < 3) return num;
});

console.log(filterNumbers); //[1,2,3,undefined]
```



#### Array.prototype.filter()

**定义**

`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素.不会改变原数组，它返回过滤后的新数组.

**参数**

```javascript
let newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

`callback` 

* 用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。它接受以下三个参数：
  * `element`  数组中当前正在处理的元素。
  * `index`  **可选** 正在处理的元素在数组中的索引
  * `array` **可选** 调用了 `filter` 的数组本身

`thisArg` 

* 执行 `callback` 时，用于 `this` 的值。

**返回值**

一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

**描述**

* `filter` 为数组中的每个元素调用一次 `callback` 函数，并利用所有使得 `callback` 返回 true 或[等价于 true 的值](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)的元素创建一个新数组。
* `callback` 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 `callback` 测试的元素会被跳过，不会被包含在新数组中。
* 如果为 `filter` 提供一个 `thisArg` 参数，则它会被作为 `callback` 被调用时的 `this` 值。否则，`callback` 的 `this` 值在非严格模式下将是全局对象，严格模式下为 `undefined`。
* `filter` 遍历的元素范围在第一次调用 `callback` 之前就已经确定了。在调用 `filter` 之后被添加到数组中的元素不会被 `filter` 遍历到。
* 如果已经存在的元素被改变了，则他们传入 `callback` 的值是 `filter` 遍历到它们那一刻的值。被删除或<u>从来未被赋值的元素</u>不会被遍历到。(null, undefined会被当做元素输出, 空位不会)



**重写**

```javascript
Array.prototype.myFilter = function(callback) {
  let _arr = this,
      thisArg = arguments[1] || window,
      result = [];
  
  for (let i=0; i<_arr.length; i++) {
    if (callback.call(thisArg, _arr[i], i, _arr)) {
      result.push(_arr[i])
    }
  }
  return result;
}
```



**实例**

[过滤 JSON 中的无效条目](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#过滤_json_中的无效条目)

```javascript
//使用 filter() 创建具有非零 id 的元素的 json

var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterById(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5
```



#### Array.prototype.reduce()

**定义**

`reduce()` 方法对数组中的每个元素执行一个由您提供的**reducer**函数(升序执行)，将其结果汇总为单个返回值。

**参数**

```javascript
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

Accumulator(acc) 累计器
Current Value(cur)当前值
Current Index(idx)当前索引
Source Array(src)源数组
```

reducer函数的返回值分配给累计器,该返回值在数组的每个迭代中被记住,并最后成为最终的单个结果值.

`callback` 

执行数组中每个值 (如果没有提供 `initialValue则第一个值除外`)的函数，包含四个参数：

* `accumulator` 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或`initialValue`（见于下方）。
* `currentValue` 数组中正在处理的元素
* `index` **可选** 数组中正在处理的当前元素的索引。 如果提供了`initialValue`，则起始索引号为0，否则从索引1起始。
* `array` **可选** 调用`reduce()`的数组

`initialValue`  **可选**

* 作为第一次调用 `callback`函数时的第一个参数的值。 
* 如果没有提供初始值，则将使用数组中的第一个元素。 
* 在空数组上调用 没有初始值的reduce 将报错。

```javascript
[].reduce(() => {})
//Uncaught TyperError: Reduce of empty array with no initial value 

[].reduce(() => {}, 0) //0
```



**返回值**

函数累计处理的结果

**描述**

* `reduce`为数组中的每一个元素依次执行`callback`函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：
* 回调函数第一次执行时，`accumulator` 和`currentValue`的取值有两种情况：
  * 如果提供了`initialValue`，`accumulator`取值为`initialValue`，`currentValue`取数组中的第一个值；`currentIndex`为`currentValue`的索引值.
  * 如果没有提供 `initialValue`，那么`accumulator`取数组中的第一个值，`currentValue`取数组中的第二个值。
  * 如果没有提供`initialValue`，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供`initialValue`，从索引0开始。
* 如果数组为空且没有提供`initialValue`，会抛出[`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 。
* 如果数组仅有一个元素（无论位置如何）并且没有提供`initialValue`， 或者有提供`initialValue`但是数组为空，那么此唯一值将被返回并且`callback`不会被执行。

提供初始值通常更安全，正如下面的例子，如果没有提供`initialValue`，则可能有四种输出： !!!!

```javascript
var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() 没有初始值
[ { x: 2 }, { x: 22 }, { x: 42 } ].reduce( maxCallback ); // NaN
[ { x: 2 }, { x: 22 }            ].reduce( maxCallback ); // 22
[ { x: 2 }                       ].reduce( maxCallback ); // { x: 2 }
[                                ].reduce( maxCallback ); // TypeError

// map/reduce; 这是更好的方案，即使传入空数组或更大数组也可正常执行
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );
```

**方法重写**

`reduce` 可以理解为「归一」，意为海纳百川，万剑归一



ECMA-262 规范文档实现如下:

> https://tc39.es/ecma262/#sec-array.prototype.reduce

<img src="https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/image.7aj30gv837c0.webp" alt="image" style="zoom: 150%;" />

```javascript
//https://juejin.cn/post/6844903938890661896#heading-3

Array.prototype.reduce = function(callback, initialValue) {
  // 异常处理
  
  let O = Object(this)
  let len = O.length >>> 0
  let k = 0, accumulator
  
  // 新增
  if (initialValue) {
    accumulator = initialValue
  } else {
    // step 4.
    if (len === 0) {
      throw new TypeError('reduce of empty array with no intial value')
    }
    
    // step 8.
    let kPresent = false  //没有找到关于Pk的解释
    while(!kPresent && (k < len)) {
      kPresent = k in O
      if (kPresent) {
        accumulator = O[k]
      }
      k++
    }
  }
  
  while(k < len) {
    if (k in O) {
      let kValue = O[k]
      accumulator = callback.call(undefined, accumulator, kValue, k, O)
    }
    k++
  }
  
  return accumulator
}
```



```javascript
Array.prototype.myReduce = function (callback) {
  let _arr = this,
      accumulator = argument[1],
      i = 0;
  //判断是否存在参数
  if (arguments.length === 0) {
    throw new TypeError('undefined is not a function');
  }
  //判断是否传入初始值
  if (accumulator === undefined) {
    accumulator = _arr[i];
    i++;
  }
  
  for (;i<_arr.length; i++) {
    accumulator = callback(accumulator, _arr[i], i, _arr);
  }
  
  return accumulator;
}
```





**实例**

1.计算数组中元素出现的次数

```js
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice','Bruce', 'Alice'];
let nameNum = names.reduce((prev,current,index)=>{
  if(current in prev){
    prev[current]++;  //pre[current] = pre[current] + 1;
  }else{
    prev[current]=1;
  }
  return prev;
},{})
console.log(nameNum); //{ Alice: 3, Bob: 1, Tiff: 1, Bruce: 2 }
```



2.数组去重

```js
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((prev,current)=>{
    if(!prev.includes(current)){
        return prev.concat(current)  //push也可以
    }else{ //else没有必要
        return prev;
    }
},[])

//简化
arr.reduce((prev, crt) => !prev.includes(crt) ? prev.concat(crt) : prev [])
```



3. 二维数组转换成一维数组

```js
let arr = [[0, 1], [2, 3], [4, 5]]
let newArr = arr.reduce((prev,current)=>{
    return prev.concat(current)
},[]);

console.log(newArr)
```



4.多维数组转换成一维数组

```js
let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
let newArr = function(arr){
    return arr.reduce((prev,current)=>{
        return prev.concat(Array.isArray(current)?newArr(current):current);
    },[])
}
```



5.对象里的属性求和

```js
var result = [
    {
        subject: 'math',
        score: 10
    },
    {
        subject: 'chinese',
        score: 20
    },
    {
        subject: 'english',
        score: 30
    }
];

let sum = result.reduce((prev, current) => {
    return prev+current.score
},0)

console.log(sum)
```



6.数组转换成对象

```js
//数组1
let arr = ['1', '2', '3', '4', '1', '2', '4'];
let obj = arr.reduce((prev,current,index)=>{
  return Object.assign(prev,{[index]:current});
},{});

console.log(obj);
{
  '0': '1',
  '1': '2',
  '2': '3',
  '3': '4',
  '4': '1',
  '5': '2',
  '6': '4'
}

//数组2
将它转化为一个根据id值作为key，将数组每项作为value的对象
const userList = [
  {
    id: 1,
    username: 'john',
    sex: 1,
    email: 'john@163.com'
  },
  {
    id: 2,
    username: 'jerry',
    sex: 1,
    email: 'jerry@163.com'
  },
  {
    id: 3,
    username: 'nancy',
    sex: 0,
    email: ''
  }
];

let obj = userList.reduce((prev,current)=>{
  return {...prev,[current.id]:current}
},{})
console.log(obj)
```

7.按属性对object分类

```js
var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];
  
function groupBy(objArray, property) {
    return objArray.reduce((acc, current) => {
        let key = current[property];
        if (!acc[key]) {
            acc[key]=[]
        }
        acc[key].push(current);
        return acc;
    },{})
}

let a = groupBy(people, 'age')
console.log(a)

//这个地方如果使用三元表达式的话,要比函数体的形式麻烦很多
function groupBy(arr, key) {
  return arr.reduce((acc, crt) => acc[crt[key]]?
                    {...acc, crt[key]:acc[crt[key]].concat(crt)}:
                    {...acc, crt[key]:[crt]}
                    ,{})
}
//上面对象键要求是字符串,JS中的已使用的字符会造成解释器混乱报错


{
  '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
  '21': [ { name: 'Alice', age: 21 } ]
}

//20211203
function classifyObj(arr, property) {
  return arr.reduce((acc, cur) => {
    if (cur[property] in acc) {
      acc[property] = acc[property].concat(cur);
    } else {
      acc[property] = [].concat(cur[property]);
    }
    
    returrn acc;
  }, {})
}
```

8.[使用扩展运算符和initialValue绑定包含在对象数组中的数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#使用扩展运算符和initialvalue绑定包含在对象数组中的数组)

```javascript
var friends = [
  {
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, 
  {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, 
  {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }
];

//输出结果
// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

let result1 = frineds.reduce((acc, cur) => {
  return acc.concat(cur.books)
}, ['Alphabet'])

let result2 = friends.reduce((acc, cur) => {
  //acc.push(...cur.books)
  //return acc
  return [...acc, ...cur.books]
}, ['Alphabet'])
```

9.数组去重

```javascript
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let myOrderedArray = myArray.reduce((acc, cur) => {
  if (!acc.includes(cur)) {  //(acc.indexOf(cur) === -1)
    acc.push(cur)
  }
  return acc;
}, []);

//其他方法
let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current) => {
    if(init.length === 0 || init[init.length-1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]


```

9.按顺序运行Promise !!!!????

```javascript
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
  .then(console.log);   // 1200
```

10.使用reduce实现map ????!!!!

```javascript
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce((mapperdArray, currentValue, index, array) => {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array)
      return mapeedArray;
    }, [])
  }
}


[1,2,,3].mapUsingReduce((cur, idx, arr) => cur + index + array.length)
//[5,7,,10]
```



#### Array.prototype.some

**定义**

`**some()**` 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。

如果用一个空数组进行测试，在任何情况下它返回的都是`false`。

```javascript
[].some(()=>{})  //false
```

**参数**

```javascript
arr.some(callback(element[, index[, array]])[, thisArg])
```

`callback` 

* 用来测试每个元素的函数，接受三个参数：
  * `element` 数组中正在处理的元素
  * `idx` **可选** 数组中正在处理的元素的索引值
  * `array` **可选** 调用`some()`的当前数组

`thisArg` **可选**

* 执行 `callback` 时使用的 `this` 值

我们来看下this的几种情况:

```javascript
//thisArg存在, callback参数中即使没有传递也可以访问 当然是没有call
[1].some(function () {console.log(this), [1,2,3]) //[1,2,3]

//
```



**返回值**

* 数组中有至少一个元素通过回调函数的测试就会返回**`true`**；所有元素都没有通过回调函数的测试返回值才会为false。
* 如果是空数组,返回false

**描述**

* `some()` 为数组中的每一个元素执行一次 `callback` 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，`some()` 将会立即返回 `true`。否则，`some()` 返回 `false`。
* `callback` 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。
* 如果一个`thisArg`参数提供给some()，它将被用作调用的 `callback`的 `this` 值。否则， 它的 `this` value将是 `undefined`。
* `some()` 被调用时不会改变数组
* `some()` 遍历的元素的范围在第一次调用 `callback`. 前就已经确定了。
* 在调用 `some()` 后被添加到数组中的值不会被 `callback` 访问到。
* 如果数组中存在且还未被访问到的元素被 `callback` 改变了，则其传递给 `callback` 的值是 `some()` 访问到它那一刻的值。已经被删除的元素不会被访问到

**重写**

```javascript
Array.prototype.mySome = function(callback) {
  let _arr = this,
      thisArg = arguments[1] || window,
      flag = false;
  
  for (let i=0; i<_arr.length; i++) {
    if (callback.call(thisArg, _arr[i], i, _arr)) {
      return true
    }
  }
  return flag;
}
```



**实例**

1.判断数组中是否存在某个值

```javascript
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvaliability(arr, val) {
  return arr.some((item) => item === val)
}
```

2.将任意值转换为布尔类型

```javascript
let TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
 	'use strict'
  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }
  return TRUTHY_VALUES.some(item => t === value)
}
getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true
```





#### every

**定义**

`every()` 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

若收到一个空数组，此方法在一切情况下都会返回 `true`

```javascript
[].every(()=>{})  //true
```

**参数**

```javascript
arr.every(callback(element[, index[, array]])[, thisArg])
```

`callback` 用来测试每个元素的函数，它可以接收三个参数

* `element` 用于测试的当前值
* `index` **可选** 用于测试的当前值的索引
* `array` **可选** 调用 `every` 的当前数组

`thisArg` **可选**

* 执行 `callback` 时使用的 `this` 值

我们来看一下传递的这个this值

```javascript
//箭头函数形式+非严格模式下 这个值是window
[].every(() => console.log(this), 1); //在Chrome中打印的是window对象

[].every(function() {console.log(this)}, 1); // Number {1} 包装类
```





**返回值**

* 如果回调函数的每一次返回都为 [truthy](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 值，返回 `**true**` ，否则返回 `**false**`
* 如果是<span style="color:blue;">**空数组**</span>调用, 函数即使有内容也返回`true`



**描述**

* `every` 方法为数组中的每个元素执行一次 `callback` 函数，直到它找到一个会使 `callback` 返回 [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) 的元素。如果发现了一个这样的元素，`every` 方法将会立即返回 `false`。否则，`callback` 为每一个元素返回 `true`，`every` 就会返回 `true`。`callback` 只会为那些已经被赋值的索引调用。不会为那些被删除或从未被赋值的索引调用。
* 如果为 `every` 提供一个 `thisArg` 参数，则该参数为调用 `callback` 时的 `this` 值。如果省略该参数，则 `callback` 被调用时的 `this` 值，在非严格模式下为全局对象，在严格模式下传入 `undefined`。
* `every` 遍历的元素范围在第一次调用 `callback` 之前就已确定了。在调用 `every` 之后添加到数组中的元素不会被 `callback` 访问到。如果数组中存在的元素被更改，则他们传入 `callback` 的值是 `every` 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。
* `every` 和数学中的"所有"类似，当所有的元素都符合条件才会返回`true`。正因如此，若传入一个空数组，无论如何都会返回 `true`。（这种情况属于[无条件正确](http://en.wikipedia.org/wiki/Vacuous_truth)：正因为一个[空集合](https://en.wikipedia.org/wiki/Empty_set#Properties)没有元素，所以它其中的所有元素都符合给定的条件。)!!!!????

**重写**

```javascript
Array.prototype.myEvery = function(callback) {
  let _arr = this,
      thisArg = arguments[1] || window,
      flag = true;
  
  for (let i=0; i<_arr.length; i++) {
    if (!callback(thisArg, _arr[i], i, _arr)) {
      return false;
    }
  }
  
  return flag;
}
```



**实例**

**Polyfill**

```javascript
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every

```



#### ES6-find()/findIndex()

##### 概况

在ECMAScript 5以前的版本中，由于没有内建的数组搜索方法，因此想在数组中查找元素会比较麻烦，于是ECMAScript 5正式添加了indexOf()和lastIndexOf()两个方法，可以用它们在数组中查找特定的值。

这两种方法仍有局限之处，即每次只能查找一个值，如果想在一系列数字中查找第一个偶数，则必须自己编写代码来实现。于是ECMAScript 6引入了find()方法和findIndex()方法来解决这个问题。

##### 参数

find()方法和findIndex()方法都接受<u>两个参数：一个是回调函数；另一个是可选参数，用于指定回调函数中this的值。</u>

执行回调函数时，传入的参数分别为：数组中的某个元素和该元素在数组中的索引及数组本身，与传入map()和forEach()方法的参数相同。

##### 返回值

如果给定的值满足定义的标准，回调函数应返回true，一旦回调函数返回true，find()方法和findIndex()方法都会立即停止搜索数组剩余的部分。



find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined

```js
const array1 = [1,2,3,4,5];
const found = array1.find(item=>item>3);
console.log(found); //4

```



findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

**重写**

```javascript
Array.prototype.myFind = function(callback) {
  let _arr = this,
      thisArg = arguments[1] || globalThis;
  
  for (let i=0; i<_arr.length; i++){
    if (callback.call(thisArg, _arr[i], i, _arr)) {
      return _arr[i]
    }
  }
  return undefined;
}
```







#### ES6-fill()

**定义**

`**fill()**` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

**参数**

```javascript
arr.fill(value[, start[, end]])
```

`value` 用来填充数组元素的值

`start` **可选**  起始索引，默认值为0。

`end`   **可选**      终止索引，默认值为 `this.length`

**返回值**

修改后的数组

**描述**

* **`fill`** 方法接受三个参数 `value`, `start` 以及 `end`. `start` 和 `end` 参数是可选的, 其默认值分别为 `0` 和 `this` 对象的 `length `属性值。
* 如果 `start` 是个负数, 则开始索引会被自动计算成为 `length+start`, 其中 `length` 是 `this` 对象的 `length `属性值。如果 `end` 是个负数, 则结束索引会被自动计算成为 `length+end`。
* **`fill`** 方法故意被设计成通用方法, 该方法不要求 `this` 是数组对象
* **`fill`** 方法是个可变方法, 它会改变调用它的 `this` 对象本身, 然后返回它, 而并不是返回一个副本
* 当一个对象被传递给 **`fill`**方法的时候, 填充数组的是这个对象的引用



**实例**

```javascript
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.  !!!!
var arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果fill的参数为引用类型，会导致都执行都一个引用类型
// 如 arr[0] === arr[1] 为true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

**Polyfill**

```javascript
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
```



#### ES6-copyWith()

copyWithin()方法与fill()方法相似，其也可以同时改变数组中的多个元素。fill()方法是将数组元素赋值为一个指定的值，而copyWithin()方法则是从数组中复制元素的值。调用copyWithin()方法时需要传入两个参数：一个是该方法开始填充值的索引位置，另一个是开始复制值的索引位置。

```javascript
//复制数组前两个元素到后两个元素
let numbers = [1,2,3,4];
//从数组e索引2开始黏贴值 从数组的索引0开始复制值

number.copyWith(2, 0);

console.log(numbers.toString()); //1,2,1,2
```

这段代码从numbers的索引2开始粘贴值，所以索引2和3将被重写。给copyWithin()传入第二个参数0表示，从索引0开始复制值并持续到没有更多可复制的值。

默认情况下，copyWithin()会一直复制直到数组末尾的值，但是你可以提供可选的第三个参数来限制被重写元素的数量。第三个参数是不包含结束索引，用于指定停止复制值的位置。在代码中它是这样的：

```javascript
let numbers = [1,2,3,4];

//从数组的索引2开始粘贴值
//从数组的索引0开始复制值
//当位于索引1时停止复制值

numbers.copyWith(2,0,1);

console.log(numbers.toString()); //1,2,1,4
```



#### ES6-includes()

**定义**

`**includes()**` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。

**参数**

```javascript
arr.includes(valuefToFind[, fromIndex])
```

`valueToFind` 需要查找的元素值

* 使用 `includes()`比较字符串和字符时是区分大小写的

`fromIndex` **可选**

* 从`fromIndex` 索引处开始查找 `valueToFind`。
* 如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜 （即使从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）。默认为 0。

**返回值**

* 返回一个布尔值 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 。
* 如果在数组中（或 `fromIndex` 指定的范围中）找到了 `valueToFind`，则返回 `true`，否则返回 `false`。
* 0 的值将全部视为相等，与符号无关（即 -0 与 0 和 +0 相等），但 `false` 不被认为与 0 相等; `NaN`与自身返回的是true.
* 技术上来讲，`includes()` 使用 <a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#%E9%9B%B6%E5%80%BC%E7%9B%B8%E7%AD%89'>`零值相等`</a> 算法来确定是否找到给定的元素

> 零值相等: 和同值相等类似,不过会人为`+0`和`-0`相等
>
> 同值相等: 由`Object.is`方法提供



**实例**

```javascript
NaN == NaN; //false
Object.is(NaN, NaN); //true

0 == -0 //true
Object.is(0, -0); //false

0 == undefined //false
0 == null //false


[NaN].includes(NaN); //true
[NaN].indexOf(NaN); //-1

[-0].includes(0); //true
[-0].indexOf(0); //0
```



#### ES6-flat()

**定义**

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

**参数**

```javascript
var newArray = arr.flat([depth])
```

`depth` **可选**

* 指定要提取嵌套数组的结构深度，默认值为 1
* 使用 Infinity，可展开任意深度的嵌套数组

**返回值**

* 一个包含将数组与子数组中所有元素的新数组

* `flat()` 方法会移除数组中的空项

**实例**

[扁平化嵌套数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#扁平化嵌套数组)

```javascript
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

[扁平化与数组空项](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#扁平化与数组空项)

```javascript
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

替代方案

[使用 `reduce` 与 `concat`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#使用_reduce_与_concat)

```javascript
var arr = [1, 2, [3, 4]]

// 展开一层数组
arr.flat();
// 等效于
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// 使用扩展运算符 ...
const flattened = arr => [].concat(...arr)
```

[reduce + concat + isArray + recursivity](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#reduce_concat_isarray_recursivity)

```javascript
// 使用 reduce、concat 和递归展开无限多层嵌套的数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

function flatDepth(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.is(cur)) {
      return acc.concat(flatDepth(cur))
    } else {
      return acc.concat(...cur)
    }
  }, [])
}


//MDN

```

##### **方法实现**

> https://juejin.cn/post/6844904025993773063#heading-14
>
> 写的非常好,读起来很流畅,思路清晰. 抄一遍

Array.prototype.flat()特点:

* 用于将数组'拉平',变为一维数组.该方法返回一个新数组,对原数据没有影响
* 不传参时,默认'拉平'一层; 可以传入一个整数,标识想要'拉平'的层数.
* 传入`<=0`的整数数组将返回原数组,不'拉平'
* `Infinity`关键字作为参数时,无论多少层嵌套,都会转为一维数组.
* 如果原数组有空位, 此方法会跳过空位

1.实现思路（简洁顺畅，要的就是这个感觉）

在数组中找到是数组类型的元素,然后将它们展开.

* 第一个要解决的就是遍历数组元素
* 第二个要解决的是判断元素是否为数组
* 第三个要解决的将数组的元素展开一层

2.遍历数组的方案

包括不限于下面几种:

* for循环
* for...of 
* for...in
* forEach()
* entries()
* values()
* keys()
* reduce()
* map()

3.判断元素是否为数组的方案 <span style="color:red;">**7**</span> 种

* [] instanceof Array
* [].\_\_proto\_\_ === Array.prototype
* [].constructor === Array
* Array.prototype.isPrototypeOf([])
* Object.getPrototypeOf([]) === Array.prototype
* Object.prototype.toString.call([]).slice(8, -1)
* Array.isArray([])

说明:

* `instanceof` 操作符是假定只有一种全局环境,如果网页中包含多个框架,多个全局环境,如果你从一个框架向另一个框架传入一个数组,那么传入的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数.(所以在这种情况下不准确)
* typeof 操作符对数组类型返回object

4.将数组元素展开一层的方法

* 扩展运算符 + concat
* concat+apply
* toString + split

扩展运算符+concat

concat()方法用来合并两个或多个数组,在拼接过程中加上扩展运算符会展开一层数组.

concat+apply

主要是利用apply在绑定作用域时,传入的第二个参数是一个数组或类数组对象,其中的数组元素将作为单独的参数传给函数. 也就是在调用apply函数的过程中,会将传入的数组一个个传入到要执行的函数中,相当对数组进行了一层展开.

toString+split

如果数组中的元素都是数字的话,是可行的.但是不推荐,因为操作字符串是危险的.

```javascript
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];

//1 其实这里加不加扩展运算符都是可以 都会展开最外一层
[].concat(...arr)

//2
[].concat.apply([], arr)

//3
arr.toString().split(',')
arr.toString().split(',').map(v => parseInt(v));
```

准备工作都已经完成,第一版flat方法实现:

```javascript
//concat + 递归

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];

function flat(arr) {
  let res = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      res = res.concat(arguments.callee(item)); //递归
      //或使用扩展运算符
      //res.push(...arguments.callee(item))
    } else {
      res.push(item);
    }
  });
  return res;
}
```



```javascript
//用reduce实现flat函数

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]

const flat = arr => {
  return arr.reduce((acc, crt) => {
    return acc.concat(Array.isArray(crt) ? flat(crt) : crt)
  }, [])
};

// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
```



```javascript
//用栈的思想实现flat函数

function flat(arr) {
  let res = [];
  let stack = [].concat(arr); //将数组元素拷贝至栈,直接赋值会改变原数组
  //如果栈不为空,则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      stack.push(...val); //如果是数组再次入栈,并且展开了一层
    } else {
      res.unshift(val); //如果不是数组就将其取出来放入结果数组
    }
  }
  return res;
}
```



```javascript
//通过传入整数参数控制拉平层数 !!!!
function flat(arr, num=1) {
 return num > 0
  ? arr.reduce((pre, cur) => {
   pre.concat(Array.isArray(cur) ? flat(cur, num-1) : cur)
 }, [])
  : arr.slice();
}
```



```javascript
//使用Generator 实现 flat

function* flat(arr,num) {
  if (num === undefined) num = 1;
  for (const item of arr) {
    if (Array.isArray(item) && num > 0) {
      yield* flat(item, num-1);
    } else {
      yield item;
    }
  }
}

// 调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象。
// 也就是遍历器对象（Iterator Object）。所以我们要用一次扩展运算符得到结果
[...flat(arr, Infinity)]    
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];

作者：弹铁蛋同学
链接：https://juejin.cn/post/6844904025993773063
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```



```javascript
//在原型链上重写 flat 函数
Array.prototype.flat = function(num=1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = this.concat(); 
  while(num > 0) {
    if (arr.some(x => Array.isArray(x))) {
      arr = [].concat.apply([], arr);
    } else {
      break; //数组中没有数组元素并且不管num是否依旧大于0, 停止循环
    }
    num--;
  }
  return arr;
}
```



```javascript
//考虑数组空位的情况
// flat 函数执行是会跳过空位的。ES5 大多数数组方法对空位的处理都会选择跳过空位包括：forEach(), filter(), reduce(), every() 和 some() 都会跳过空位。

//reduce+递归
function flat(num=1) {
  if (!Number(num) || Num(num)<0) {
    return this;
  }
  let arr = [].concat(this);
  return num > 0
  	? arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? cur.flat(--num): cur),[])
  	: arr.slice();
}
const arr = [1,[3,4],,,];
arr.flat(); //[1,3,4]


//forEach+递归
function flat(num=1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = [];
  this.forEach(item => {
    if (Array.isArray(item)) {
      arr = arr.concat(item.flat(--num));
    } else {
      arr.push(item);
    }
  });
  return arr;
};


```

扩展阅读: **由于空位的处理规则非常不统一，所以建议避免出现空位。** 见数组中的相关知识点.

```javascript
//concat + 递归

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];

function myFlat(arr) {
  if (!Array.isArray(arr)) {
    return alert('参数需要是一个数组');
  }
  
  let newArr = [];
  arr.forEach(v => {
    if (Array.isArray(v)) {
      newArr = newArr.concat(myFlat(v));
    } else {
      newArr.push(v);
    }
  })
  
  return newArr;
}
```







#### ES6-keys()

**定义**

 `**keys()** `方法返回一个包含数组中每个索引键的`**Array Iterator**`对象

**参数**

```javascript
arr.keys()
```

**返回值**

一个新的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 迭代器对象

**实例**!!!!

[索引迭代器会包含那些没有对应元素的索引](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys#索引迭代器会包含那些没有对应元素的索引)

```javascript
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

**其他**

这里要注意是的是和对象Object.keys()方法的比较,对象的方法返回的是一个数组.



#### ES6-values()

**定义**

**`values()`** 方法返回一个新的 **`Array Iterator`** 对象，该对象包含数组每个索引的值

**参数**

```javascript
arr.values()
```

**返回值**

一个新的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 迭代对象

**描述**

* **Array.prototype.values** 是 **Array.prototype[Symbol.iterator]** 的默认实现。
* 一次性：数组迭代器是一次性的，或者说临时对象

**实例**

[使用 `for...of` 循环进行迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values#使用_for...of_循环进行迭代)

```javascript
let arr = ['w', 'y', 'k', 'o', 'p'];
let eArr = arr.values();

for (let letter of eArr) {
  console.log(letter);
} //"w" "y "k" "o" "p"
```

[使用 `.next()` 迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values#使用_.next_迭代)

```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();
iterator.next();               // Object { value: "a", done: false }
iterator.next().value;         // "b"
iterator.next()["value"];      // "c"
iterator.next();               // Object { value: "d", done: false }
iterator.next();               // Object { value: "e", done: false }
iterator.next();               // Object { value: undefined, done: true }
iterator.next().value;         // undefined
```

一次性：数组迭代器是一次性的，或者说临时对象

```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];
 var iterator = arr.values();
 for (let letter of iterator) {
 console.log(letter);
} //"a" "b" "c" "d"
for (let letter of iterator) {
console.log(letter);
} // undefined
```



#### ES6-entries()

**定义**

`entries()` 方法返回一个新的**Array Iterator**对象，该对象包含数组中每个索引的键/值对

**参数**

```javascript
arr.entries()
```

**返回值**

一个新的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 迭代器对象。[Array Iterator](https://www.ecma-international.org/ecma-262/6.0/#sec-createarrayiterator)是对象，它的原型（__proto__:Array Iterator）上有一个[next](https://www.ecma-international.org/ecma-262/6.0/#sec-%arrayiteratorprototype%.next)方法，可用用于遍历迭代器取得原数组的[key,value]。



**实例**

1.Array.iterator

```javascript
var arr = ["a", "b", "c"];
var iterator = arr.entries();
console.log(iterator);

/*Array Iterator {}
         __proto__:Array Iterator
         next:ƒ next()
         Symbol(Symbol.toStringTag):"Array Iterator"
         __proto__:Object
*/
```

2.iterator.next()

```javascript
var arr = ["a", "b", "c"];
var iterator = arr.entries();
console.log(iterator.next());

/*{value: Array(2), done: false}
          done:false
          value:(2) [0, "a"]
           __proto__: Object
*/
// iterator.next()返回一个对象，对于有元素的数组，
// 是next{ value: Array(2), done: false }；
// next.done 用于指示迭代器是否完成：在每次迭代时进行更新而且都是false，
// 直到迭代器结束done才是true。
// next.value是一个["key","value"]的数组，是返回的迭代器中的元素值。
```

3.iterator.next方法运行

```javascript
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
```

4.二维数组按行排序

```javascript
var arr = [[1, 34], [456, 2, 3, 44, 234], [4567, 1, 4, 5, 6], [34, 78, 23, 1]]


//entries
function sortArr(arr) {
    var goNext = true;
    var entries = arr.entries();
    while (goNext) {
        var result = entries.next();
        if (result.done !== true) {
            result.value[1].sort((a, b) => a - b);
            goNext = true;
        } else {
            goNext = false;
        }
    }
    return arr;
}

sortArr(arr);

/*(4) [Array(2), Array(5), Array(5), Array(4)]
    0:(2) [1, 34]
    1:(5) [2, 3, 44, 234, 456]
    2:(5) [1, 4, 5, 6, 4567]
    3:(4) [1, 23, 34, 78]
    length:4
    __proto__:Array(0)
*/



//reduce
let result = arr.reduce((acc, cur) => {
  acc.push(cur.sort((a, b) => a - b))
  return acc;
 }, [])
```

5.使用for...of循环

```javascript
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

for (let e of iterator) {
    console.log(e);
}

// [0, "a"]
// [1, "b"]
// [2, "c"]
```







### 数组方法在字符串上使用

!!!!

>  [来源](https://github.com/getify/You-Dont-Know-JS): 通过“借用”数组的方法可以很方便的处理字符串。可以“借用”数组的非变更方法，但不能“借用”数组的可变更方法.

```javascript
Array.prototype.非破坏性方法.call('任意字符串', parameter)
[].非破坏性方法.call('任意字符串', parameter)
```



```js
//https://www.jianshu.com/p/0362b6cd90d6

let a = 'foo';
//数组的非变更方法,就是不改变原有数组的方法
let b = Array.prototype.join.call(a,'-'); //'f-o-o'
let c = Array.prototype.map.call(a,i=>i.toUpperCase()).join(); //'FOO'
let c = Array.prototype.slice.call(a);//['f','o','o']

//数组的可变更方法,就是会改变原有数组的方法
let e = Array.prototype.reverse.call(a);
//chrome: Uncaught TypeError: Cannot assign to read only property '0' of object '[object String]'


```



### 数组的一些实例



#### 创建一个包含1 … N的数组

```javascript
//https://www.codenong.com/3746725/

//循环方法  写法繁琐
let arr = [];
for (let i=0; i<=n; i++) {
  arr.push(i);
}

//ES6
Array.from( Array(num).keys() )

[...Array(num).keys()]

Array.from({length: num}, (v, k) => k + 1);

[...Array(10).keys()].map(x => ++x) ???
Array(N).fill().map(i => i+1)
```



#### 获取元素

```JavaScript
# 获取数组中的元素
	
- 数组[索引]
- 获取数组中没有的元素,不会报错,会返回undefined
```



#### 判断数组是否包含某个值

**in** 

只能判断键是否存在于数组及prototype chain中

```js
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in

//作用
如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。
//语法
prop in object
 prop: 一个字符串类型或者 symbol 类型的属性名或者数组索引（非symbol类型将会强制转为字符串）
 objectname: 检查它（或其原型链）是否包含具有指定名称的属性的对象。

//案例
let trees = new Array('redwood', 'bay', 'cedar', 'oak');
1 in trees //返回true
2 in trees //返回true
'bay' in trees //false

//数组空位
0 in [undefined, undefined]; //true
0 in [,,,]; //false
```



```javascript
for循环
indexOf/lastIndexOf
includes
find/findIndex
some/every
concat
filter
reduce
```





#### 向数组中添加元素

```JavaScript
* 向数组中添加元素
	数组[索引] = 值
arr[0] = 10;
arr[1] = 11;
arr[2] = 12;
arr[6] = 15;   
```



#### 删除元素

```JavaScript
# 删除数组中的元素,但是位置还在

- delete 数组[索引]
```





#### 判断两个数组是相等

```js
//https://segmentfault.com/a/1190000016574183
//https://juejin.cn/post/6860071737196429319
//https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript


//1.如果两个数组均为字符串或数字类型,元素顺序无需一致. 使用sort排序/every/遍历来判断
a.length === b.length && a.sort().toString() === b.sort().toString()
a.length === b.length && a.every(item => b.includes(item));

//1.简单方案 适用于大多数情况.除了null !== undefined,它们转换成JSON都代表null并被认为相等.
function (a1, a2) {
  //数组中必须没有对象或未定义行为?? 
  return JSON.stringify(a1) === JSON.stringify(a2);
}

使用JSON来stringify对象的话,ES6规定了属性的迭代顺序,所以可以对相同对象使用

//2.

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  
  for (let i=0; i<a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
```



#### 合并两个数组的方法

**1.concat**

```js
var a = [1,2,3];
var b = [4,5,6];
var c = a.concat(b);//c=[1,2,3,4,5,6];
```

这里有一个问题，concat方法连接a、b两个数组后，a、b两个数组的数据不变，同时会返回一个新的数组。这样当我们需要进行多次的数组合并时，会造成很大的内存浪费，所以这个方法肯定不是最好的。



**2.for循环**

> 这样的写法可以解决第一种方案中对内存的浪费，但是会有另一个问题：丑

```js
for(var i in b){
  a.push(b[i]);
}
```

**3.apply**

```js
a.push.apply(a,b);
```

调用a.push这个函数实例的apply方法，同时把，b当作参数传入，这样a.push这个方法就会遍历b数组的所有元素，达到合并的效果。上面的操作就等同于：`a.push(4,5,6);`



**4.扩展运算符**

```js
var a = [1,2,3];
var b = [4,5,6];
var newA = [...a,...b]
```



#### 伪数组转换为真数组的3种方法

```js
1.slice方法
let realArr = Array.prototype.slice.call(arr);
2.ES6的扩展运算符
let realArr = [...arr];
3.ES6方法From,任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换
let realArr = Array.from(arr);
```



#### 查询字符串中字母出现的次数

```js
//方法1
var str = 'aalskdjfslkdjsdkjfsldkjfzz';
var arr = str.split('');
arr.sort();
for(let i=0; i<arr.length; i++){
    var fir = arr.indexOf(arr[i]);
    var las = arr.lastIndexOf(arr[i]) + 1;
    if(arr[i] != arr[i+1]){
        var arrNew = arr.slice(fir, las);
        console.log(arrNew);
}
    
//方法2 
关系数组: 就是将字符串作为数组索引的一种使用数组的方式
var str = 'aalskdjfslkdjsdkjfsldkjfzz';    
var arr = [];
for(var i=0; i<str.length; i++){
    arr[str[i]] = arr[str[i]] + 1 || 1;
}
console.log(arr); //[a: 2, l: 3, s: 4, k: 4, d: 4, …]

    
//方法3: reduce 在reduce实例中
var str = 'aalskdjfslkdjsdkjfsldkjfzz';  
let result = str.split('').reduce((acc, cur, idx) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  
  return acc;
}, {})
```



#### 数组去重的 ? 种方法

* **双for循环**
  * splice
  * 新数组
* **for循环**
  * indexOf
  * includes
* **reduce**
  * includes+(push/concat)
* **filter**
  * indexOf
  * sort
* **sort()**
  * 排序后去重
  * 快慢指针

* Object键值对
* **ES6**
  * Set
  * Map






双for循环+splice

```JavaScript
# 去除数组中重复的数字

let arr = [1,2,3,1,1,4,3,2,5,6,7];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
            arr.splice(j,1);
            j--;
        }
        
    }
}


for (let i=0; i<arr.length; i++) {
  for (let j=i-1; j>0; j--) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      i--;
    }
  }
}

//其他写法 这种写法效率肯定是低的
for (let i=0; i<arr.length; i++) {
  for (let j=i+1; j<arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(i, 1);
      i--;
      //break;
    }
  }
}
```



```javascript
//https://juejin.cn/post/6844903482093387783
//如果 array[i] 的值跟 res[j] 的值相等，就跳出循环，如果都不等于，说明元素是唯一的，这时候 j 的值就会等于 res 的长度，根据这个特点进行判断，将值添加进 res。

function unique(array) {
  let res = [];
  for (let i=0; i<array.length; i++) {
    for (let j=0; j<res.length; j++) {
      if (arr[i] === res[j]) {
        break;
      }
    }
    //如果array[i]是唯一的,那么执行完循环,j等于res.length
    if (j === res.length) {
      res.push(arr[i]);
    }
  }
}

//以上代码是存在问题的, 原代码是使用的var声明的变量,所以比较 j 和 res.length 的时候不会报错,let则会.
//如果使用let声明变量, j就需要添加在内层for循环之中,而且判断条件应该更改

function unique(arr) {
  let res = [];
  for (let i=0,len=arr.length;i<len;i++) {
    for (let j=0,len=res.length; j<=len; j++) {
      if (arr[i] === res[j]) {
        break;
      }
      
      if (res.length === j) {
        res.push(arr[i])
      }
    }
  }
  return res;
}

//不用函数的时候同样
let res = [];
for (let i=0,len=arr.length;i<len; i++) {
  for (let j=0,len=res.length;j<=len;j++) {
    if (arr[i] === res[j]) {
      break;
    }
    
    if (res.length === j) {
      res.push(arr[i]);
    }
  }
}
console.log(res);
```



双for循环+新数组

```javascript
let res = [];
let j = 0;
for (let i=0; i<arr.length; i++) {
  for (; j<res.length; j++) {
    if (arr[i] === res[j]) {
      break;
    }
  }
  
  if (j === res.length) {
    res.push(arr[i]);
  }
}

//以上代码是错误的. 原因很简单,j为0的时候,res.length也为0,内循环中代码不会执行.所以执行所有的外循环,if判断永远为true, 所以res的里面的值和arr里面的一样.  哎,惭愧...
```





for+indexOf / for+includes

```javascript
function unique(arr) {
  let uniqueArr = [];
  for (let i=0; i<arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}


function unique(arr) {
  let uniqueArr = [];
  for (let i=0; i<arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i])
    }
  }
  return uniqueArr;
}
```





reduce+includes/indexOf + concat/push

```javascript
//reduce方法
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((prev,current)=>{
  if(!prev.includes(current)){   //写繁琐了,没有必要
    return prev.push(current)
  }else{
    return prev;
  }
},[])

let arr=[1,2,2,4,null,null].reduce(prev,current)=>{
  return prev.includes(current)?prev:prev.concat(current)
         //!prev.includes(current)&&prev.push(current)
,[]}
```



filter+indexOf方法

```javascript
//filter方法
let arr = [1,2,2,4,null,null].filter((item,index,arr)=>arr.indexOf(item)===index)

//存在的问题: 
1.arr.indexOf(NaN)的结果是-1,所以会忽略NaN这个值.
2.对象不去重

//排序后
arr.concat().sort().filter((item,idx,arr) => !idx || item !==arr[idx-1]);
```



filter+sort()

```javascript
//https://juejin.cn/post/6844903482093387783#:~:text=%E5%8F%AF%E4%BB%A5%E6%9F%A5%E7%9C%8B%20Github%E3%80%82-,filter,-ES5%20%E6%8F%90%E4%BE%9B%E4%BA%86

//ES6
arr.concat().sort().filter((item, idx, arr) => !idx || item !== arr[idx - 1])
```

sort排序后去重

先将要去重的数组使用 sort 方法排序后，相同的值就会被排在一起，然后我们就可以只判断当前元素与上一个元素是否相同，相同就说明重复，不相同就添加进 res.

* 对一个已经排好序的的数组去重,这种方法效率肯定是高于indexOf
* sort()排序有漏洞, 并不适用于特殊类型的排序. !!!!???

```javascript
//冴羽博客 https://github.com/mqyqingfeng/Blog/issues/27

function unique(arr) {
  let res = [];
  let sortedArr = arr.concat().sort();
  let seen;
  
  for (let i=0; i<sortedArr.length; i++) {
    //如果第一个元素或相邻的元素不相同
    if (!i || seen !== sortedArr[i]) {
    	res.push(sortedArr[i]) ;
    }
    seen = sortedArr[i];
  }
  return res;
}
```

API1(sort排序+indexOf)

根据一个参数isSorted判断传入的数组是否已经排序,如果为true,我们就判断相邻元素是否相同;如果为false,就使用indexOf判断.

```javascript
function unique(arr, isSorted) {
  let res = [];
  let seen = []; //原版中seen声明成数组,但是本案例中声明成数组并没有被使用到. 应该是下面的API1优化中需要使用的,这里才顺手这么写的.
  
  for (let i=0; i<arr.length; i++) {
    let value = arr[i];
    if (isSorted) {
      if (!0 || seen !== value) {
        res.push(value);
      }
      seen = value;
    } else if (res.indexOf(value) === -1) {
      res.push(value);
    }
  } 
  return res;
}
```

API1优化 !!!!

新需求: 字母的大小写视为一致，比如'a'和'A'，保留一个就可以了！

虽然我们可以先处理数组中的所有数据，比如将所有的字母转成小写，然后再传入unique函数，但是有没有方法可以省掉处理数组的这一遍循环，直接就在去重的循环中做呢? impressive!!!

```javascript
function unique(arr, isSorted, iteratee) {
  let res = [];
  let seen = [];
  
  for (let i=0; i<arr.length; i++) {
    let value = arr[i];
    computed = iteratee ? iteratee(value, i, arr) : value;
    
    if (isSorted) {
      if (!i || seen !== computed) {
        res.push(value)
      }
      seen = computed;
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed);
        res.push(value);
      }
    } else if (res.indexOf(value) === -1) {
      res.push(value);
    }
  }
}

console.log(unique(arr, false, (item) => {
  return typeof item === 'string' ? item.toLowerCase() : item;
}));//[1, 'a', 2]
```

在这一版也是最后一版的实现中，函数传递三个参数：

array：表示要去重的数组，必填

isSorted：表示函数传入的数组是否已排过序，如果为 true，将会采用更快的方法进行去重

iteratee：传入一个函数，可以对每个元素进行重新的计算，然后根据处理的结果进行去重

至此，我们已经仿照着 underscore 的思路写了一个 unique 函数，具体可以查看 [Github](https://github.com/jashkenas/underscore/blob/master/underscore.js#L1722)

```javascript
//https://github.com/jashkenas/underscore/blob/master/underscore.js#L1722

function uniq(arr, isSorted, iteratee, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  if (iteratee!= null) iteratee = cb(iteratee, context);
  let result = [];
  let seen = [];
  for (let i=0,length=getLength(arr); i<length; i++) {
    let value = arr[i],
        computed = iteratee ? iteratee(value, i, arr) : value;
    
    if (isSorted && !iteratee) {
      if (!i || seen !== computed) {
        result.push(value);
      }
      seen = computed;
    } else if (iteratee) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!contains(result, value)) {
      result.push(value);
    }
  }
  return result;
}
```





sort()排序+快慢指针 不好理解.

```javascript
//https://juejin.cn/post/6844904202162929671

function unique(arr) {
  arr.sort((a, b) => a - b);
  let left = 0,
      right = 1;
  
  while(right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      arr[left + 1] = arr[right];
      left++;
      right++;
    }
  }
  return arr.slice(0, left+1);
}

//https://juejin.cn/post/7033275515880341512
function unique2(arr) {
  arr.sort((a, b) => a - b);
  let slow = 1,
      fast = 1;
  
  while(fast < arr.length) {
    if (arr[fast - 1] !== arr[fast]) {
      arr[slow++] = arr[fast];
    }
    ++fast;
  }
  arr.length = slow;
  return arr;
}
```













Object键值对

> 存在的问题: 键值对方法不能去重正则表达式

这种方法是利用一个空的 Object 对象，我们把数组的值存成 Object 的 key 值，比如 Object[value1] = true，在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的。示例代码如下：

```javascript
let obj = {};
arr.filter((item,idx,arr) => obj.hasOwnProperty(item) ? false : (obj[item] = item));
```

因为 1 和 '1' 是不同的，但是这种方法会判断为同一个值，这是因为对象的键值只能是字符串，所以我们可以使用 `typeof item + item` 拼成字符串作为 key 值来避免这个问题

```javascript
//对象的可计算属性方括号 可以放表达式  :))))

arr.filter((item,idx,arr) => obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true));

```

上面的方法依然存在问题,无法正确区分出两个对象,使用JSON.stringify()将对象序列化

```javascript
arr.filter(v => obj.hasOwnProperty(v) ? false : (obj[typeof v + JSON.stringify(v)] = true));
//test
```

依然存在的问题: 考虑到 `JSON.stringify` 任何一个正则表达式的结果都是 `{}`，所以这个方法并不适用于处理正则表达式去重。(引用[勘误](https://github.com/mqyqingfeng/Blog/issues/212) )

```javascript
console.log(JSON.stringify(/a/)); //{}
console.log(JSON.stringify(/b/)); //{}
```

改进: Map键值对

> 使用Map映射是否会解决呢?

```javascript
let map = new Map();
let arr = [1,2,3,'1',/a/, {a:1},/a/, ];

let res = arr.filter((item,idx,arr) => map.has(item) ? false : map.set(item, true));

//优化
let res = arr.filter((item,idx,arr) => !map.has(item) && map.set(item, true));
```





ES6-Set去重

```javascript
function unique() {
  return Array.from(new Set([].concat.apply([], arguments)));
}

function unique(arr) {
  return Array.from(new Set(arr));
}

//简化
function unique(arr) {
  return [...new Set(arr)];
}

//再简化
let unique = (arr) => [...new Set(arr)];
```



ES6-Map方法

```javascript
function unique(arr) {
  let map = new Map(),
      newArr = [];
  for (let i=0; i<arr.length; i++){
    if (!map.get(arr[i])) {
      map.set(arr[i], true);
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


function unique2(arr) {  //太聪明了真是. 来自JS专题之数组去重
  let map = new Map();
  return arr.filter((item) => !map.has(item) && map.set(item, 1));
}
```



#### 数组去重的方法存在的问题

> https://github.com/mqyqingfeng/Blog/issues/27

**特殊类型的比较**

```javascript
let str1 = '1';
let str2 = new String('1');

str1 == str2; //true
str1 === str2; //false

null == null; //true
null === null; //true

undefined == undefined //true
undefined === undefined; //true

NaN == NaN; //false
NaN === NaN; //false

/a/ == /a/; //false
/a/ === /a/; //false

{} == {}; //false
{} === {}; //false
```



对于这样一个数组使用以上的去重方法:

```javascript
var array = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN];
```

```javascript
var str1 = '1';
var str2 = new String('1');

console.log(str1 == str2); // true
console.log(str1 === str2); // false

console.log(null == null); // true
console.log(null === null); // true

console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(/a/ == /a/); // false
console.log(/a/ === /a/); // false

console.log({} == {}); // false
console.log({} === {}); // false
```



我们重点关注下对象和 NaN 的去重情况：

| 方法                                                         | 结果                                                         | 说明                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------------- |
| for循环(双for+新数组)                                        | [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN] | 对象和 NaN 不去重                       |
| indexOf(作者用的是新数组+for循环+indexOf方法)                | [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN] | 对象和 NaN 不去重                       |
| sort<br />结论是数字1不去重,没有勘误.不知道是哪个数字1,是包装类的吗? | [/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined] | 对象和 NaN 不去重 <br />数字 1 也不去重 |
| filter+indexOf                                               | [1, "1", null, undefined, String, String, /a/, /a/]          | 对象不去重 NaN 会被忽略掉               |
| filter+sort                                                  | [/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined] | 对象和 NaN 不去重 数字 1 不去重         |
| 优化后的键值对方法                                           | [1, "1", null, undefined, String, /a/, NaN]                  | 全部去重                                |
| Set                                                          | [1, "1", null, undefined, String, String, /a/, /a/, NaN]     | 对象不去重 NaN 去重                     |

这里再次声明一下，键值对方法不能去重正则表达式。

想了解为什么会出现以上的结果，看两个 demo 便能明白：

```javascript
//demo1
let arr = [1,2,NaN];
arr.indexOf(NaN); //-1
```

<span style="color: blue;">indexOf 底层还是使用 === 进行判断，因为 NaN === NaN的结果为 false，所以使用 indexOf 查找不到 NaN 元素</span>

```javascript
//demo2
function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique([NaN, NaN])); //[NaN]
```

<span style="color: blue;">Set 认为尽管 NaN === NaN 为 false，但是这两个元素是重复的。</span>



#### 数组扁平化 !!!!

> [面试官连环追问：数组拍平（扁平化） flat 方法实现 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904025993773063#heading-14)
>
> [2021年前端各大公司都考了那些手写题(附带代码) - 掘金 (juejin.cn)](https://juejin.cn/post/7033275515880341512)



* toString + split

* flat
* replace + split
* replace + JSON.parse
* 普通递归
* 利用reduce函数迭代
* 扩展运算符

```javascript
//toString + split
let arr = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]
let str = arr.toString().split(',')
```



```javascript
//flat

let res = arr.flat(Infinity)
```



```javascript
//replace + split
let str = JSON.stringify(arr)
let res = str.replace(/(\[|\])/g, '').split(',')
```



```javascript
//replace + JSON.parse
let str = JSON.stringify(arr)
let res = str.replace(/(\[|\])/g, '')
res = '[' + res + ']'
res = JSON.parse(res)
```



```javascript
//普通递归
let res = []
let fn = function(arr) {
  for (let i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i])
    }
    else {
      res.push(arr[i])
    }
  }
}
```



```javascript
//利用reduce函数迭代
function flatten(arr) {
  return arr.reduce((pre, crt) => {
    return pre.concat(Array.isArray(crt) ? flatten(crt) : crt)
  }, [])
}
```



```javascript
//扩展运算符

while(arr.some(Array.isArray)) {
  arr = [].concat(...arr)
}
```





#### 排序-数组排序|冒泡排序

```JavaScript
# 编写代码，对arr进行排序

# 嵌套for循环就是冒泡排序,也是最慢的排序方式

===========================第1版=============================
let arr = [3,1,4,6,5,2,9,7,8,0];

for(let j=0; j<arr.length; j++){
    for(let i=0; i<arr.length; i++){   //值大小比较,最后是倒数第二和倒数第一的比较,长度减1
        if(arr[i] > arr[i+1]){
            arr.splice(i,2,arr[i+1],arr[i]);
        }
	}
}
console.log(arr);

=========================第2版-老师版======================
let arr = [3,1,4,6,5,2,9,7,8,0];

for(let j=0; j<arr.length-1; j++){  
    //解释说是当把1排出来后,后面8个数的位置是正确的,那么0的位置肯定也是正确的.所以负1次结果和负2次结果一致
    for(let i=0; i<arr.length-1; i++){   
        //console.log(arr[i],arr[i+1]) 打印结果,最后一组是0和undefined.故循环长度减1
        if(arr[i] > arr[i+1]){
            //arr.splice(arr[i],2,arr[i+1],arr[i]);
            let tem = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
	}
}
console.log(arr);

```



#### 排序-数组快速排序问题

```JavaScript
  快速排序（quickSort）
  - 定义函数，实现快速排序
  
  - 原理：
  [3,1,2,5,8,9,0,7,6]
  1.从数组中获取到一个基准值:3
  2.创建两个数组left和right
  3.将数组中的其他值和基准值进行比较
  	如果比3小，则将值放入到left中
  	如果比3大，则将值放入到right中
  	[1,2,0] 3 [5,8,9,7,6]
  4.重复对left和right在进行排序
  5.最后将结果拼为一个数组
```

  

```JavaScript
let arr = [3,1,2,5,8,9,0,7,6];

//let str=arr[0];      
//let left=[], right=[];
//非常严重的错误, 这俩是设置在函数内部的,因为形参和数组名字相同导致没有考虑位置,
function fn(nums){
    let str=nums[0]; //获取基准值
	let left=[], right=[];
    if(nums.length<2){ //设置基准条件
        return nums;   //数组的长度小 不需要继续排序
    }
    for(let i=1; i<nums.length; i++){ //遍历数组nums,将所有值和基准值进行比较
    if(nums[i] > str){
        right.push(nums[i]); //小于基准值,放到left中
    }else{
        left.push(nums[i]);
    }
}
//return left.concat(str+right.concat());
    return fn(left).concat(str,fn(right));
}

fn(arr);
```



#### 排序-数组快速排序(更新)



```JavaScript
上面快速排序方法存在的问题:
 
如果目标数组是一个从0开始的有序数组的且元素多,所以排序的时候只会使用right函数,函数调用次数过多,崩溃.(教学案例数组的长度是10000)

解决方案: 函数内的基准值采用随机数
```



```JavaScript
let arr = [];
for(let i=1; i<10000; i++){
    arr.push(i);
}

function fn(nums){
     if(nums.length<2){  //写错了没执行 内存溢出
            return nums;
        }
    
	let str = Math.floor(Math.random()*nums.length);  
    //nums.lenght/2 也可以用这种.
    let basic = nums[str];
	let left=[], right=[];
  
	for(i=0; i<nums.length; i++){
    	//if(basic === nums[i]){
        //	continue;
    	//}
        if(str === i){
            continue;
        }
        
    	if(nums[i] < basic){
        	left.push(nums[i]);
    	}else{
        	right.push(nums[i]);
    	}
	}
	return fn(left).concat(basic, fn(right));
}

fn(arr);
```





#### 排序-快排|冒泡|sort比较

```JavaScript
快速排序, 冒泡排序, sort排序用时比较
```



```JavaScript
let arr1 = [], arr2 = [], arr3 = [];
for(let i=0; i<100000; i++){
    let num = Math.round(Math.random()*100000);
    arr1.push(num);
    arr2.push(num);
    arr3.push(num);
}
================冒泡排序========================

let arr = [1, 3, 4, 7, 9, 2, 0, 8, 5, 6];
function bubble(arr){
    for(let j=0; j<arr.length-1; j++){
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                let temp;
                temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                //arr.splice(i,2,arr[i],arr[i+1]); 另一种写法
            }
        }
    }
console.log(arr);
}
bubble(arr);
===================sort排序===============================

console.time('sort');   //系统自带 时间最短
arr1.sort(function(a, b){
    return a - b;
})
console.timeEnd('sort');


console.time('快排');  //用时其次,大概10倍sort
sortArr(arr2);
console.timeEnd('快排');

console.time('冒泡');  //用时很大
bubble(arr3);
console.timeEnd('冒泡');

```



#### 求数组的最大值和最小值

JavaScript提供了Math.max()函数返回一组数中的最大值,但是注意:

* 如果有任一参数不能被转换为数值, 则结果NaN
* 如果没有参数, 结果为`-Infinity`(负无穷大)

**方法list**

* for循环
* reduce
* 排序
* eval
* apply
* ES6扩展运算符

```javascript
let arr = [1,2,3,4,5,6,'99'];

//for循环
let result = arr[0];
for (let i of arr) {
  if (arr[i] > result) result = arr[i];
}
console.log(result);

//reduce
arr.reduce((acc, cur, idx) => acc > cur ? acc : cur, 0)

//排序
let maxNum = arr.sort((a, b) => a - b)[length - 1]

//eval
eval("Math.max(" + arr + ")") //将一个数组转换成参数传进 Math.max 函数
//apply方法
Math.max.apply(null, arr);

//ES6扩展运算符
let maxNum = Math.max(...arr);


```



### 数组中高阶函数

#### 介绍

> `一个函数`就可以接收另一个函数作为参数或者返回值为一个函数，`这种函数`就称之为高阶函数。

#### 数组中的高阶函数

* map
* reduce
* filter
* sort

#### 实现以上高阶函数

具体见每个方法中的实现



### 定型数组

> 略  <深入理解ES6>



## 对象Math

### 简介

**`Math`** 是一个内置对象，它拥有一些数学常数属性和数学函数方法。`Math` 不是一个函数对象

#### 简介

```JavaScript
Math
- 是一个工具类,无法用来创建对象
- Math里边包含了一些数学运算相关的常量和方法
```



### 方法

```JavaScript
Math.PI 圆周率
Math.abs() 求一个绝对值
Math.ceil() 向上取整
Math.floor() 向下取整
Math.round() 四舍五入取整  //以上三个和parseInt等类似

Math.max() 求最大值
Math.min() 求最小值
Math.pow(x,y) 求x的y次幂
Math.sqrt() 求一个数的平方根
Math.random()生成一个0-1之间的随机数(小数) 不包括0也不包括1

```



### Math用法

#### 0. 生成制定(x-y)之间的随机数

```js
//生成一个指定范围的随机数
0-x之间的随机数
	Math.round(Math.random()*x)

x-y之间的随机数
	Math.round(Math.random()*(y-x) + x)
	Math.round(Math.random()*(y-x)) + x

  Math.ceil(Math.random()*(y-x))+x

//Math.min()和Math.max()用于确定一组数组中最小和最大值

```

#### 1. 使用时间戳和随机数生成一个不重复的字符串

```javascript
//https://xpoet.cn/2018/11/%E5%88%A9%E7%94%A8%E6%97%B6%E9%97%B4%E6%88%B3%E5%92%8C%E9%9A%8F%E6%9C%BA%E6%95%B0%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E4%B8%8D%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2/

export const getUUID = (randomLength) => {
  return Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36);
}
```





## Date

### 0. 定义

创建一个 JavaScript `Date` 实例，该实例呈现时间中的某个时刻。`Date` 对象则基于 [Unix Time Stamp](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16)，即自1970年1月1日（UTC）起经过的毫秒数。

### 1. 参数

#### 基本形式

```javascript
new Date()
new Date(value)
new Date(dateString);
new Date(year, monthIndex[, day[, hours[, minutes[, seconds[, milliseconds]]]]]);
```

创建一个新`Date`对象的唯一方法是通过[`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符，例如：`let now = new Date();`若将它作为常规函数调用（即不加 [`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符），将返回一个字符串，而非 `Date` 对象

`Date()` 构造函数有**四种基本形式**

* 没有参数 新创建的Date对象表示实例化时刻的日期和时间
* Unix时间戳
  * `value` 一个 Unix 时间戳（[Unix Time Stamp](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16)），它是一个整数值，表示自1970年1月1日00:00:00 UTC（the Unix epoch）以来的毫秒数，忽略了闰秒。请注意大多数 Unix 时间戳功能仅精确到最接近的秒。
* 时间戳字符串
  * `dateString` 表示日期的字符串值。该字符串应该能被 [`Date.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) 正确方法识别
  * 由于浏览器之间的差异与不一致性，强烈不推荐使用`Date`构造函数来解析日期字符串 (或使用与其等价的`Date.parse`)
* 分别提供日期与时间的每一个成员  当至少提供了年份与月份时，这一形式的 `Date() `返回的 `Date `对象中的每一个成员都来自下列参数。没有提供的成员将使用最小可能值（对日期为`1`，其他为`0`）。
  * `year` 表示年份的整数值。 0到99会被映射至1900年至1999年，其它值代表实际年份。参见 [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#two_digit_years_map_to_1900_-_1999)。
  * `monthIndex` 表示月份的整数值，从 0（1月）到 11（12月）
  * `date` **可选** 表示一个月中的第几天的整数值，从1开始。默认值为1
  * `hours` **可选** 表示一天中的小时数的整数值 (24小时制)。默认值为0（午夜）
  * `minutes` **可选** 表示一个完整时间（如 01:10:00）中的分钟部分的整数值。默认值为0
  * `seconds` **可选** 表示一个完整时间（如 01:10:00）中的秒部分的整数值。默认值为0
  * `milliseconds` **可选** 表示一个完整时间的毫秒部分的整数值。默认值为0

#### 注意事项

* 当Date作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为 13 或者分钟数为 70），相邻的数值会被调整。比如 new Date(2013, 13, 1)等于new Date(2014, 1, 1)
* 当Date作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。如果需要使用世界协调时 UTC，使用 `new Date(Date.UTC(...))` 和相同参数

### 2.属性

**Date.length**

`Date.length` 的值是 7。这是该构造函数可接受的参数个数



### 3.方法

**Date.now()**

返回自 1970-1-1 00:00:00  UTC（世界标准时间）至今所经过的毫秒数 <span style="color:blue;">数值格式</span>

**Date.parse()**

解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数

**Date.UTC()**

接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。

**Date.prototype.getFullYear()**

**`getFullYear()`** 方法根据本地时间返回指定日期的年份



**Date.prototype.getMonth**()

根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）



**Date.prototype.getDate()**

根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从1--31）

```javascript
new Date().getDate();
```



**Date.prototype.getDay()**

**`getDay()`** 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天

```javascript
new Date().getDay(); //
```





### 4.实例

#### 计算经过的时间

```javascript
// 使用 Date 对象
var start = Date.now();

// 调用一个消耗一定时间的方法：
doSomethingForALongTime();
var end = Date.now();
var elapsed = end - start; // 以毫秒计的运行时长


// 使用内建的创建方法
var start = new Date();

// 调用一个消耗一定时间的方法：
doSomethingForALongTime();
var end = new Date();
var elapsed = end.getTime() - start.getTime(); // 运行时间的毫秒值
```



#### Date混合使用

```JavaScript
- 显示当前年月日时间信息(使用模板字符串)

let d = new Date();
alert(`$(d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`);
```



### 5. 库

#### moment.js

> https://momentjs.com/



## 包装类??

```JavaScript
- JS中有3个包装类: String() Number() Boolean()
- 他们可以将一个基本数据类型包装为一个对象
 String()可以包装字符串对象
 Number()可以包装数值对象
 Boolean()可以包装布尔值对象
 -但是我们千万不能用它

- 当我们调用一个基本数据类型的属性或方法时,
  浏览器会临时使用包装类将基本数据类型转换为对象,
  然后调用对象的属性或方法,操作完毕临时对象即销毁


let s = new String('hello');
let s1 = new String('hello');
console.log(s === s1); //false  这是两个对象,内存地址不同

let bool = new Boolean(false);
if(bool){
    console.log('执行');// bool是个对象,只要是对象就是true
}

let str = 'hello';//自动装箱,自动拆箱
str.name = '孙悟空';
alert(str.name);  
//str是没有name属性的,但是运行却没有报错
//str是基本数据类型,临时把字符串转换成对象,然后调用属性的属性和方法,加完属性就销毁了.alert输出的是另一个对象的属性,然后销毁.
```



原始值在某种情况下被转换成它的对象形式(new String(), new Number(), new Boolean()),这通常称为"装箱".

把基本数据类型转换为对应的引用类型的操作称为"装箱"

把引用类型转换为基本的数据类型称为"拆箱"



### 深拷贝处理包装类

在深拷贝方案中,可以使用它自身的构造函数来实现拷贝.例如:

```javascript
let ctor = target.constructor;
cloneTarget = new ctor(target)
```

存在的问题:

布尔对象`new Boolean(new Boolean(false))`的结果是`Boolean {true}`

解决方法:

```javascript
//布尔,数值和字符串使用valueOf方法

new Object(Boolean.prototype.valueOf.call(target));
```

=======
## 布尔值(Boolean)

> The `Boolean` object is an object wrapper for a boolean value



### **Desc**

* the value passed as the first parament is converted to a boolean value, if necessary.
* If the value is omitted or is `0`, `-0`, `false`, `NaN`, `undefined`, or the empty string (`''`), the object has an initial value of `false`
* All other values, includes any object, an empty array(`[]`), or the string `'false'`, craete an object with an initial value of `true`
* Do not confuse(混淆) the primitive `Boolean` values `true` and `false` with the `true` and `false` values of the `Boolean` object.
* Any object of the value is not `undefined` or `null`, including a `Boolean` object whose value is `false`evaluates to `true` when passed to a **conditional statement(条件声明)**.

```javascript
let x= new Boolean(false);
if (x) {
  //this code is executed
}
```

* this behavior does not apply to `Boolean` primitive. 

```javascript
let x = false;
if (x) {
  // this code is not execute
}
```

* Do not use a `Boolean` object to convert a non-boolean value to a boolean value. To perform this task, instead, use `Boolean` as a function, or a `double NOT operator`:

```javascript
let x = Boolean(expression); //use this..
var x = !!(expression); //... or this
var x = new Boolean(expression); //don't use this
```

* If U specify any object, including a `Boolean` object whose value is `false`, as the initial value of `Boolean` object, the new `Boolean` object has a value of `true`.

```javascript
var myFalse = new Boolean(false); //initial value of false
var g = Boolean(myFalse); //initial value of true
var myString = new String('Hello'); //string object
var s = Boolean(myString); //initial value of true


//如何解决这个问题呢?  使用valueOf()方法

var myFalse = new Boolean(false);
var g = Boolean(myFalse.valueOf()); //false
var g = new Boolean(myFalse.valueOf()); //Boolean {false}

ES6之后不推荐使用(new 基本类型())的语法 好像两种没什么不同
new Object(基本类型.prototype.valueOf.call(myFalse));
new Object(基本类型.prototype.valueOf(myFalse));
```

* Do not use a `Boolean` object in place of a `Boolean` primitive

* When using `==` to loosely compare an object to a boolean primitive, it's important to have a clear understanding of what's actually being compared. Consider the following example:

```javascript
if ([]) {console.log('[] is truthy')} //logs '[] is truthy'
if ([] == false) { console.log('[] == false')}; // logs '[] == false'
```

the reason for `[]==false` even though `[]` is truthy is: the comparison `[] == false` compares the value of `[]` to `false`. And to get the value of `[]`, the JavaScript engine first calls `[].toString()`. That results in `''`, and that is what's actually compared to `false`. In other words, `[] == false` is equivalent to `'' == false`. And `''` is falsy-- and so that's what explains the behavior in the example.





### Constructor

`Boolean`

create a new `Boolean` object



### Instance methods

#### Boolean.prototype.toString()

**Desc**

> returns a string of either `true` or `false` depending upon the value of the object. Overrides the `Object.prototype.toString()` method.



#### Boolean.prototype.valueOf()

**Desc**

> returns the primitive value of the `Boolean` object. Overrides the `Object.prototype.valueOf()` method.



### Examples

<u>Creating `Boolean` objects with an initial value of `false`</u>

```javascript
var bNnParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);
```



<u>Createing `Boolean` objects with an initial value of `true`</u>

```javascript
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
bar bfalseString = new Boolean('false');
bar sSuLin = new Boolean('Su Lin');
var aArrayProto = new Boolean([]);
var bObjeProto = new Boolean({});
```



>>>>>>> test




## 字符串

```lskjdf
?? 未解决

let num = '  ';
num.length = 1;
console.log(num); //'   '   基本类型的值不能改变
```



### 语法

#### 声明方式

* 字符串字面量
* String函数  使用 `String` 函数将其他值生成或转换成字符串



#### 模板字面量

从 ECMAScript 2015 开始，字符串字面量也可以称为[模板字面量](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)：

```javascript
`hello world` `hello! world!` `hello ${who}`
```



#### 转义字符

除了普通的可打印字符以外，一些有特殊功能的字符可以通过转义字符的形式放入字符串中

??? 为什么在浏览器控制台中输出`a\nb`不会换行，换成console.log和alert才可以

以下列表展示可以在JS字符串中使用的特殊字符:

| 自身character                    | 含义                                        |
| -------------------------------- | ------------------------------------------- |
| \0                               | 零字节  console.log('stri\0ng') //'stri ng' |
| \b                               | 退格符                                      |
| \f                               | 换页符                                      |
| \n                               | 换行符                                      |
| \r  Carriage return              | 回车                                        |
| \t                               | tab(制表符)                                 |
| \v Vertical tab                  | 垂直标签                                    |
| \\'   Apostrophe or single quote | 撇号或单引号                                |
| \\" double quote                 | 双引号                                      |
| \\\   Backslash character        | 反斜杠字符                                  |
| \XXX                             |                                             |
| \xXX                             | Latin-1字符（x小写)                         |
| \uXXX                            | Unicode码                                   |
| \u{XXXXX}                        |                                             |

**转义字符Escaping characters**

> 对于表格中没有的字符, 前置的反斜杠将会被忽略. 但是这种用法不推荐且应该避免.

你能在一个字符串内部通过前置反斜杠插入一个引号. 这称为转移引号(this is known as escaping the quotation mark)

```js
let quote = "he read \"the cremation of sam mcgee\" by r.w. service.";
console.log(quote);

//he read "the cremation of sam mcgee" by r.w. service.
```

你能通过在换行符之前使用反斜杠来转义换行(line breaks)

```js
let str = 'this string \
is broken \
across multiple \
lines.'

console.log(str);
//this string is broken across multiple lines.
```







#### JS中处理转义字符

> https://segmentfault.com/q/1010000024547184





#### 长字符串的2种实现方式

两种方法:

* 使用 + 运算符将多个字符串连接起来
* 每行末尾使用反斜杠字符（“\”）

```javascript
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";

//确保反斜杠后面没有空格或任何除换行符之外的字符或缩进; 否则反斜杠将不会工作。 
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```



### 描述



#### 基本字符串和字符串对象的区别

<u>字符串字面量 (通过单引号或双引号定义) 和 直接调用 String 方法(没有通过 new 生成字符串对象实例)的字符串都是基本字符串。</u>

<u>JavaScript会自动将基本字符串转换为字符串对象</u>，只有将基本字符串转化为字符串对象之后才可以使用字符串对象的方法。

当基本字符串需要调用一个字符串对象才有的方法或者查询值的时候(基本字符串是没有这些方法的)，JavaScript 会自动将基本字符串转化为字符串对象并且调用相应的方法或者执行查询。

```javascript
let s_prim = 'foo';
let s_obj = new String(s_prim);

console.log(typeof s_prim); //'string'
console.log(typeof s_ojb); //'object'
```

当使用 [`eval`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)时，基本字符串和字符串对象也会产生不同的结果。`eval` 会将基本字符串作为源代码处理; 而字符串对象则被看作对象处理, 返回对象。

```javasript
let s1 = '2 + 2';
let s2 = new String('2 + 2');

console.log(eval(s1)); //4
console.log(eval(s2)); //'2+2'
```



利用 [`valueOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf) 方法，我们可以将字符串对象转换为其对应的基本字符串

```javascript
console.log()
```

#### [字符串是不可变的](https://zh.javascript.info/string#zi-fu-chuan-shi-bu-ke-bian-de)

在 JavaScript 中，字符串不可更改

 ```javascript
 let str = 'hello';
 
 str.length = 0;
 console.log(str); //'hello'
 
 str[0] = 'a';
 console.log(str); //'hello'
 ```

通常的解决方法是创建一个新的字符串，并将其分配给 `str` 而不是以前的字符串

```javascript
let str = 'Hi';

str = 'h' + str[1];  // 替换字符串

alert( str ); // hi
```









### 编码格式

在ECMAScript 6出现以前，JavaScript字符串一直基于16位字符编码（UTF-16）进行构建。每16位的序列是一个编码单元（code unit），代表一个字符. length、charAt()等字符串属性和方法都是基于这种编码单元构造的。在过去16位足以包含任何字符，直到Unicode引入扩展字符集，Unicode的目标是为全世界每一个字符提供全球唯一的标识符。如果我们把字符长度限制在16位，码位数量将不足以表示如此多的字符。

UTF-16中，前2<sup>16</sup>个码位均以16位的编码单元表示，这个范围被称作基本多文种平面（BMP，Basic Multilingual Plane）。超出这个范围的码位则要归属于某个辅助平面（supplementaryplane），其中的码位仅用16位就无法表示了。为此，UTF-16引入了代理对（surrogate pair），其规定用两个16位编码单元表示一个码位。

字符串里的字符有两种，一种是由一个编码单元16位表示的BMP字符，另一种是由两个编码单元32位表示的辅助平面字符。

```javascript
let text = '𠮷';
console.log(text.length); //2
console.log(/^.$/.test(text)); //false
console.log(text.charAt(0)); //''
console.log(text.charAt(1)); //''
console.log(text.charCodeAt(0)); //55362
console.log(text.charCodeAt(1)); //57271

//Unicode字符“[插图]”是通过代理对来表示的，因此，这个示例中的JavaScript字符串操作将其视为两个16位字符。
```



```JavaScript
字符串在计算机底层实际上就是一个字符数组
let str = 'Hello'; --> ['H', 'e', 'l', 'l', 'o'];

因为字符串是不可变数据类型,所以数组的破坏性方法无法使用.
```



### 属性





### 方法

#### Unicode支持

##### codePointAt()

ECMAScript 6新增加了<u>完全支持UTF-16</u>的codePointAt()方法，这个方法接受编码<u>单元的位置而非字符位置作为参数</u>，返回与字符串中给定位置对应的码位，即一个整数值。

```javascript
let text = '𠮷a';

console.log(text.charCodeAt(0)); //55362
console.log(text.charCodeAt(1)); //57271
console.log(text.charCodeAt(2)); //97

console.log(text.codePointAt(0)); //134071
console.log(text.codePointAt(1)); //57271
console.log(text.codePointAt(2)); //97
```

**对于BMP字符集中的字符，codePointAt()方法的返回值与charCodeAt()方法的相同，而对于非BMP字符集来说返回值则不同。**字符串text中的第一个字符是非BMP的，包含两个编码单元，所以它的length属性值为3。charCodeAt()方法返回的只是位置0处的第一个编码单元，而codePointAt()方法则返回完整的码位，即使这个码位包含多个编码单元。对于位置1（第一个字符的第二个编码单元）和位置2（字符“a”），二者的返回值相同。

要检测一个字符占用的编码单元数量，最简单的方法是调用字符的codePointAt()方法，可以写这样的一个函数来检测：

```javascript
function is32Bit(c) {
  return c.codePointAt(0) > 0XFFFF;  //0xffff是65535
}

console.log(is32Bit('𠮷')); //true
console.log(is32Bit('a')); //false
```



##### String.fromCodePoint()

ECMAScript通常会面向同一个操作提供正反两种方法。你可以使用codePointAt()方法在字符串中检索一个字符的码位，也可以使用String.fromCodePoint()方法根据指定的码位生成一个字符。

```javascript
console.log(String.fromCodePoint(134071)); //𠮷
```



##### normalize()

Unicode的另一个有趣之处是，如果我们要对不同字符进行排序或比较操作，会存在一种可能，它们是等效的。有两种方式可以定义这种关系。首先，规范的等效是指无论从哪个角度来看，两个序列的码位都是没有区别的；第二个关系是兼容性，两个互相兼容的码位序列看起来不同，但是在特定的情况下可以被互相交换使用。

但如果你曾经开发过一款国际化的应用，那么normalize()方法就有用得多了。

所以，代表相同文本的两个字符串可能包含着不同的码位序列。举个例子，字符“æ”和含两个字符的字符串“ae”可以互换使用，但是严格来讲它们不是等效的，除非通过某些方法把这种等效关系标准化。

ECMAScript 6为字符串添加了一个normalize()方法，它可以提供Unicode的标准化形式。这个方法接受一个可选的字符串参数，指明应用以下的某种Unicode标准化形式：

· 以标准等价方式分解，然后以标准等价方式重组（"NFC"），默认选项。

· 以标准等价方式分解（"NFD"）。

· 以兼容等价方式分解（"NFKC"）。

· 以兼容等价方式分解，然后以标准等价方式重组（"NFKD"）。

对于这4种形式之间差异的解读不在本书的范围之内，你只需牢记**，在对比字符串之前，一定先把它们标准化为同一种形式。**举个例子：

```javascript
let normalized = values.map(function(text) {
  return text.normalize();
})

normalized.sort(function(first, second) {
  if (first < second) {
    return -1;
  } else if (first === second) {
    return 0;
  } else {
    return 1;
  }
})
```

以上这段代码将values数组中的所有字符串都转换成同一种标准形式，因此该数组可以被正确地排序。<u>如果你想对原始数组进行排序，则可以在比较函数中添加normalize()方法</u>，就像这样：

```javascript
values.sort(function(first, second) {
  let firstNormalized = first.nromalize(),
      secondNormalized = second.normalize();
  
  if (firstNormalized < secondNormalized) {
    return -1;
  } else if (firstNormalized === secondNormalized) {
    return 0;
  } else {
    return 1;
  }
})
```

切记在进行排序和比较操作前，将被操作字符串按照同一标准进行标准化。这里的示例都采用默认的NFC形式，你也可以明确指定其他形式：

```javascript
values.sort(function(first, second) {
  let firstNormalized = first.nromalize('NFD'),
      secondNormalized = second.normalize('NFD');
  
  if (firstNormalized < secondNormalized) {
    return -1;
  } else if (firstNormalized === secondNormalized) {
    return 0;
  } else {
    return 1;
  }
})
```



#### 子串识别

##### includes()

##### startsWith()

##### endsWith()

自JavaScript首次被使用以来，开发者们就开始使用indexOf()方法来在一段字符串中检测另一段子字符串，而在ECMAScript 6中，提供了以下3个类似的方法可以达到相同效果：

* includes()方法，如果在字符串中检测到指定文本则返回true，否则返回false
* startsWith()方法，如果在字符串的起始部分检测到指定文本则返回true，否则返回false
* endsWith()方法，如果在字符串的结束部分检测到指定文本则返回true，否则返回false。

以上的3个方法都接受两个参数：

第一个参数指定要搜索的文本；

第二个参数是可选的，指定一个开始搜索的位置的索引值。

如果指定了第二个参数，则includes()方法和startsWith()方法会从这个索引值的位置开始匹配，endsWith()方法则从字符串长度减去这个索引值的位置开始匹配；如果不指定第二个参数，includes()方法和startsWith()方法会从字符串起始处开始匹配，endsWith()方法从字符串末尾处开始匹配。实际上，指定第二个参数会大大减少字符串被搜索的范围。

##### ES6方法和ES5比较

尽管这3个方法执行后返回的都是布尔值，也极大地简化了子串匹配的方法，但是如果你需要在一个字符串中寻找另一个子字符串的实际位置，还需使用indexOf()方法或lastIndexOf()方法。

对于startsWith()、endsWith()及includes()这3个方法，如果你没有按照要求传入一个字符串，而是传入一个正则表达式，则会触发一个错误产生；而对于indexOf()和???





#### concat()

**定义**

**`concat()`** 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回

**参数**

```javascript
str.concat(str2,[, ...strN])
```

`str2 [, ...strN]`  需要连接到str的字符串

**返回值**

一个新的字符串，包含参数所提供的连接字符串

**描述**

* `concat` 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。 `concat` 方法并不影响原字符串。

* 如果参数不是字符串类型，它们在连接之前将会被转换成字符串
* 强烈建议使用[赋值操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)（`+`, `+=`）代替 `concat` 方法. `concat`存在性能问题.

```HTML
"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"
```



#### includes()

**定义**

**`includes()`** 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。

**参数**

```javascript
str.includes(searchString[, fromIndex])
```

`searchString` 要搜索的字符串

`fromIndex` **可选** 

* 从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 `0`

**描述**

* 区分大小写



#### indexOf()

**定义**

`indexOf()` 方法返回调用它的 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 对象中第一次出现的指定值的索引，从 `fromIndex` 处进行搜索。如果未找到该值，则返回 -1。

**参数**

```javascript
str.indexOf(searchValue[, fromIndex]);
```

`searchValue` 要被查找的字符串值

* 如果没有提供确切地提供字符串，[searchValue 会被强制设置为 `"undefined"`](https://tc39.github.io/ecma262/#sec-tostring)， 然后在当前字符串中查找这个值。
* 举个例子：`'undefined'.indexOf()` 将会返回0，因为 `undefined` 在位置0处被找到，但是 `'undefine'.indexOf()` 将会返回 -1 ，因为字符串 `'undefined'` 未被找到。

`fromIndex` **可选** 

* 数字表示开始查找的位置。可以是任意整数，默认值为 `0`
* 如果 `fromIndex` 的值小于 `0`，或者大于 `str.length` ，那么查找分别从 `0` 和`str.length` 开始。（译者注： `fromIndex` 的值小于 `0`，等同于为空情况； `fromIndex` 的值大于或等于 `str.length` ，那么结果会直接返回 `-1` 。）

**返回值**

* 查找的字符串 `searchValue` 的第一次出现的索引，如果没有找到，则返回 `-1`

* 若被查找的字符串 `searchValue` 是一个<u>空字符串</u>，将会产生“奇怪”的结果。如果 `fromIndex` 值为空，或者 `fromIndex` 值小于被查找的字符串的长度，返回值和以下的 `fromIndex` 值一样
* 如果 `fromIndex` 值大于等于字符串的长度，将会直接返回字符串的长度（`str.length`）

```javascript
'hello world'.indexOf('') // 返回 0
'hello world'.indexOf('', 0) // 返回 0
'hello world'.indexOf('', 3) // 返回 3
'hello world'.indexOf('', 8) // 返回 8
"Blue Whale".indexOf("", -1)       // 返回 0

'hello world'.indexOf('', 11) // 返回 11
'hello world'.indexOf('', 13) // 返回 11
'hello world'.indexOf('', 22) // 返回 11
```

**描述**

* `indexOf` 方法是区分大小写的

```javascript
"Blue Whale".indexOf("blue")      // 返回 -1
```

**实例**

[使用 `indexOf` 统计一个字符串中某个字母出现的次数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#使用_indexof_统计一个字符串中某个字母出现的次数)

```javascript
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while(pos !== -1) {
  count++;
  pos = str.indexOf('e', pos+1)
}
```







#### lastIndexOf()

**定义**

 **`lastIndexOf()`** 方法返回调用[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 `fromIndex`处从后向前搜索。如果没找到这个特定值则返回-1 。

**参数**

```javascript
str.lastIndexOf(searchValue[, fromIndex])
```

`searchValue` 一个字符串，表示被查找的值。

* 如果`searchValue`是空字符串，则返回`fromIndex`

`fromIndex` **可选**

* 待匹配字符串searchValue的开头一位字符从 str的第fromIndex位开始向左回向查找。
* `fromIndex`默认值是 `+Infinity`。
* 如果 `fromIndex >= str.length` ，则会搜索整个字符串。
* 如果 `fromIndex < 0` ，则等同于 `fromIndex == 0`。

**返回值**

返回指定值最后一次出现的索引(该索引仍是以从左至右0开始记数的)，如果没找到则返回-1。

**描述**

* `'abab'.lastIndexOf('ab', 2)` 将返回 2 而不是 0, 因为fromIndex只限制待匹配字符串的开头
* `lastIndexOf` 方法区分大小写

```javascript
'canal'.lastIndexOf('a');     // returns 3 （没有指明fromIndex则从末尾l处开始反向检索到的第一个a出现在l的后面，即index为3的位置）
'canal'.lastIndexOf('a', 2);  // returns 1（指明fromIndex为2则从n处反向向回检索到其后面就是a，即index为1的位置）
'canal'.lastIndexOf('a', 0);  // returns -1(指明fromIndex为0则从c处向左回向检索a发现没有，故返回-1)
'canal'.lastIndexOf('x');     // returns -1
'canal'.lastIndexOf('c', -5); // returns 0（指明fromIndex为-5则视同0，从c处向左回向查找发现自己就是，故返回0）
'canal'.lastIndexOf('c', 0);  // returns 0（指明fromIndex为0则从c处向左回向查找c发现自己就是，故返回自己的索引0）
'canal'.lastIndexOf('');      // returns 5
'canal'.lastIndexOf('', 2);   // returns 2


"blue Whale, Killer Whale".lastIndexOf("blue"); // returns 0

"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1
```



#### match()

**定义**

 **`match()`** 方法检索返回一个字符串匹配正则表达式的结果

**参数**

```javascript
str.match(regexp)
```

`regexp` 一个[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)对象。

* 如果传入一个非正则表达式对象，则会隐式地使用 `new RegExp(obj)` 将其转换为一个 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 。
* 如果你没有给出任何参数并直接使用match() 方法 ，你将会得到一 个包含空字符串的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) ：[""] 。

**返回值**

* 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
* 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（`Array`）。 在这种情况下，返回的项目将具有如下所述的其他属性。
  * `groups`: 一个捕获组数组 或 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)（如果没有定义命名捕获组）
  * `index`: 匹配的结果的开始位置
  * `input`: 搜索的字符串

一个[`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)，其内容取决于global（`g`）标志的存在与否，如果未找到匹配则为[`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)

```javascript
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found); //['T', 'I']


const regex = /[A-Z]/;
const found = paragraph.match(regex);
console.log(found); 

//['T', index: 0, input: 'The quick brown fox jumps over the lazy dog. It barked.', groups: undefined]
```



**描述**

* 如果正则表达式不包含 `g `标志，`str.match()` 将返回与 [`RegExp.exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)相同的结果

**实例**

使用 `match` 查找 "`Chapter`" 紧跟着 1 个或多个数值字符，再紧跟着一个小数点和数值字符 0 次或多次。正则表达式包含 `i` 标志，因此大小写会被忽略 ????

```javascript
let str = 'For more information, see Chapter 3.4.5.1',
    re = /see (Chapter \d+(\.\d)*)/i,
    found = str.match(re);

console.log(found)
            
            
// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' 是整个匹配。
// 'Chapter 3.4.5.1' 被'(chapter \d+(\.\d)*)'捕获。
// '.1' 是被'(\.\d)'捕获的最后一个值。
// 'index' 属性(22) 是整个匹配从零开始的索引。
// 'input' 属性是被解析的原始字符串。
```

[`match` 使用全局（global）和忽略大小写（ignore case）标志](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match#example_using_global_and_ignore_case_flags_with_match)

```javascript
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

[`使用match()，不传参数`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match#使用match，不传参数)

```javascript
var str = "Nothing will come of nothing.";

str.match();   // returns [""]
```

[一个非正则表达式对象作为参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match#一个非正则表达式对象作为参数)

当参数是一个字符串或一个数字，它会使用new RegExp(obj)来隐式转换成一个 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)。如果它是一个有正号的正数，RegExp() 方法将忽略正号。

```javascript
var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";


str1.match("number");   // "number" 是字符串。返回["number"]
str1.match(NaN);        // NaN的类型是number。返回["NaN"]
str1.match(Infinity);   // Infinity的类型是number。返回["Infinity"]
str1.match(+Infinity);  // 返回["Infinity"]
str1.match(-Infinity);  // 返回["-Infinity"]
str2.match(65);         // 返回["65"]
str2.match(+65);        // 有正号的number。返回["65"]
str3.match(null);       // 返回["null"]
```



#### matchAll()

**定义**

**`matchAll()`** 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器

```javascript
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];
console.log(array)

// Array [Array ["test1", "e", "st1", "1"], Array ["test2", "e", "st2", "2"]]
```

**参数**

`regexp`  正则表达式对象

* 如果所传参数不是一个正则表达式对象，则会隐式地使用 `new RegExp(obj)` 将其转换为一个 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/RegExp) 。

* `RegExp`必须是设置了全局模式`g`的形式，否则会抛出异常`TypeError`。

**返回值**

一个迭代器（不可重用，结果耗尽需要再次调用方法，获取一个新的迭代器）

**实例**

在 `matchAll` 出现之前，通过在循环中调用 `regexp.exec()` 来获取所有匹配项信息（regexp 需使用 `/g` 标志）

```javascript
const regexp = RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`);
  // expected output: "Found football start=6 end=14."
  // expected output: "Found foosball start=16 end=24."
}
```

如果使用 `matchAll` ，就可以不必使用 while 循环加 exec 方式（且正则表达式需使用 `/g` 标志）。使用 `matchAll` 会得到一个迭代器的返回值，配合 `for...of`, [array spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), 或者 [`Array.from()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 可以更方便实现功能：

```javascript
const regexp = RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
}
// expected output: "Found football start=6 end=14."
// expected output: "Found foosball start=16 end=24."

// matches iterator is exhausted after the for..of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), m => m[0]);
// Array [ "football", "foosball" ]
```

如果没有 `/g` 标志，`matchAll` 会抛出异常。

```javascript
const regexp = RegExp('[a-c]','');
const str = 'abc';
Array.from(str.matchAll(regexp), m => m[0]);
// TypeError: String.prototype.matchAll called with a non-global RegExp argument
```

`matchAll` 内部做了一个 regexp 的复制，所以不像 [regexp.exec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), `lastIndex` 在字符串扫描时不会改变。????

```javascript
const regexp = RegExp('[a-c]','g');
regexp.lastIndex = 1;
const str = 'abc';
Array.from(str.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`);
// Array [ "1 b", "1 c" ]
```

`matchAll` 的另外一个亮点是更好地获取捕获组。因为当使用 `match()` 和 `/g` 标志方式获取匹配信息时，捕获组会被忽略：

```javascript
let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```





#### repeat()

**定义**

ECMAScript 6还为字符串增添了一个repeat()方法，其接受一个number类型的参数，表示该字符串的重复次数，返回值是当前字符串重复一定次数后的新字符串

**参数**

```javascript
str.repeat(count)
```

`count`  介于 `0` 和 [`+Infinity`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY) 之间的整数。表示在新构造的字符串中重复了多少遍原字符串

**返回值**

包含指定字符串的指定数量副本的新字符串

**描述**

* [`RangeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Negative_repetition_count): 重复次数不能为负数。
* [`RangeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Resulting_string_too_large): 重复次数必须小于 infinity，且长度不会大于最长的字符串。

**实例**

```javascript
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
"abc".repeat(1/0)    // RangeError: repeat count must be positive and less than inifinity

({toString : () => "abc", repeat : String.prototype.repeat}).repeat(2)
//"abcabc",repeat是一个通用方法,也就是它的调用者可以不是一个字符串对象.
```

使用场景.例如其在操作文本时非常有用，比如在代码格式化工具中创建缩进级别，

```javascript
//缩进指定数量的空格
let indent = ' '.repeat(4),
    indentLevel = 0;

//当需要增加缩进时
let newIndent = indent.repeat(++indentLevel);
```



#### replace()

**定义**

**`replace()`** 方法返回一个由替换值（`replacement`）替换部分或所有的模式（`pattern`）匹配项后的新字符串。模式可以是一个字符串或者一个[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。**如果`pattern`是字符串，则仅替换第一个匹配项。**

原字符串不会改变

**参数**

```javascript
str.replace(regexp|substr, newSubStr|function)
```

`regexp(pattern)` 

* 一个[`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉

`substr(pattern)`

* 一个将被 `newSubStr` 替换的 [`字符串`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。

`newSubStr(replacement)`

* 用于替换掉第一个参数在原字符串中的匹配部分的[`字符串`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)。该字符串中可以内插一些特殊的变量名。参考下面的[使用字符串作为参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#使用字符串作为参数)。

`function(replacement)`

* 一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。参考下面的[指定一个函数作为参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#指定一个函数作为参数)。

**描述**

* 该方法并不改变调用它的字符串本身，而只是返回一个新的替换后的字符串。

* 在进行全局的搜索替换时，正则表达式需包含 `g` 标志

**使用字符串作为参数**

| 变量名    | 代表的值                                                     |
| --------- | ------------------------------------------------------------ |
| $$        | 插入一个'$'                                                  |
| $&        | 插入整个匹配项                                               |
| $`        | 插入当前匹配的字串左边的内容                                 |
| $'        | 插入当前匹配的子串右边的内容                                 |
| $n        | 假如第一个参数是 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从1开始。如果不存在第 n个分组，那么将会把匹配到到内容替换为字面量。比如不存在第3个分组，就会用“$3”替换匹配到的内容 |
| $\<Name\> | 这里*`Name`* 是一个分组名称。如果在正则表达式中并不存在分组（或者没有匹配），这个变量将被处理为空字符串。只有在支持命名分组捕获的浏览器中才能使用 |

```javascript
let str = 'hello world';

str.replace('o', '$$'); //'hell$ world'
str.replace('o', '$&'); //'hello world' ????
str.replace('o', '$`'); //'hellhell world'
str.replace('o', "$'"); //'hell world world'
```

**指定一个函数作为参数**

你可以指定一个函数作为第二个参数。在这种情况下，当匹配执行后，该函数就会执行。 函数的返回值作为替换字符串。 (注意：上面提到的特殊替换参数在这里不能被使用。) 另外要注意的是，如果第一个参数是正则表达式，并且其为全局匹配模式，那么这个方法将被多次调用，每次匹配都会被调用

函数参数:

| 变量名            | 代表的值                                                     |
| ----------------- | ------------------------------------------------------------ |
| `match`           | 匹配的子串。（对应于上述的$&。）                             |
| `p1,p2, ...`      | 假如replace()方法的第一个参数是一个[`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）例如，如果是用 `/(\a+)(\b+)/` 这个来匹配，`p1` 就是匹配的 `\a+`，`p2` 就是匹配的 `\b+`。 |
| `offset`          | 匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 `'abcd'`，匹配到的子字符串是 `'bc'`，那么这个参数将会是 1） |
| `string`          | 被匹配的原字符串。                                           |
| NamedCaptureGroup | 命名捕获组匹配的对象                                         |

精确的参数个数依赖于 `replace()` 的第一个参数是否是一个正则表达式（[`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)）对象，以及这个正则表达式中指定了多少个括号子串，如果这个正则表达式里使用了命名捕获， 还会添加一个命名捕获的对象)

**实例**  ????

[交换字符串中的两个单词](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#交换字符串中的两个单词)

```javascript
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
// Smith, John
console.log(newstr);
```



#### replaceAll()



#### search()

**定义**

**`search()`** 方法执行正则表达式和 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 对象之间的一个搜索匹配

**参数**

```javascript
str.search(regexp)
```

`regexp`  一个[`正则表达式（regular expression）`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)对象

* 如果传入一个非正则表达式对象 `regexp`，则会使用 `new RegExp(regexp)` 隐式地将其转换为正则表达式对象。

**返回值**

如果匹配成功，则 `search()` 返回正则表达式在字符串中首次匹配项的<u>索引</u>;否则，返回 `-1`

**描述**

* 当你想要知道字符串中是否存在某个模式（pattern）时可使用 `search()`，类似于正则表达式的 [`test()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 方法。
* 当要了解更多匹配信息时，可使用 [`match()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)（但会更慢一些），该方法类似于正则表达式的 [`exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 方法。

**实例**

```javascript
let str = 'hello world';

str.search('o'); //4
str.search(/o/); //4
```











#### slice()

**定义**

**`slice()`** 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串

**参数**

```javascript
str.slice(beginIndex[, endIndex])
```

`beginIndex` 从该索引（以 0 为基数）处开始提取原字符串中的字符

* 如果值为负数，会被当做 `strLength + beginIndex` 看待，这里的`strLength` 是字符串的长度

`endIndex`  **可选**

* 在该索引（以 0 为基数）处结束提取字符串。
* 如果省略该参数，`slice()` 会一直提取到字符串末尾。
* 如果该参数为负数，则被看作是 strLength + endIndex
* 新字符串包括`beginIndex`但不包括 `endIndex`

**返回值**

返回一个从原字符串中提取出来的新字符串

**描述**

* `slice` 不会修改原字符串（只会返回一个包含了原字符串中部分字符的新字符串

**实例**

slice()传入负值索引

```javascript
var str = 'The morning is upon us.';
str.slice(-3);     // 返回 'us.'
str.slice(-3, -1); // 返回 'us'
str.slice(0, -1);  // 返回 'The morning is upon us'
```

复制字符串

```HTML
- 复制字符串
str.slice();
str.slice(0);
```



#### split()????

**定义**

`**split()** `方法使用指定的分隔符字符串将一个[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 

**描述**

如果使用<u>空字符串(“)作为分隔符</u>，则字符串不是在每个用户感知的字符(图形素集群)之间，也不是在每个Unicode字符(代码点)之间，而是在每个UTF-16代码单元之间。这会摧毁代理对。还请参见[how do you get a string to a character array in javascript](https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript/34717402#34717402)

**参数**

```javascript
str.split([separator[, limit]])
```

`separator`  **可选**  描述拆分应发生位置的模式,可以是简单的字符或者正则表达式

* 最简单的情况是分隔符是<u>单个字符</u>,被用来分割限定的字符串.例如,包含制表符分隔值 （TSV） 的字符串可以通过将制表符作为分隔符传递来解析
* 如果分隔符<u>包含多个字符</u>,则必须找到整个字符序列才能拆分
* 如果分隔符<u>被省略或者字符串中没有</u>,则返回数组包含一个由整个字符串构成的元素
* 如果分隔符出现在字符串的<u>开始(或结尾)</u>,则返回的数组的相应位置是空字符串
* 如果分隔符是一个<u>空字符串</u>, 字符串将转换为其每个 UTF-16"字符"的数组

> 如果使用空字符串(“)作为分隔符，则字符串不是在每个用户感知的字符(图形素集群)之间，也不是在每个Unicode字符(代码点)之间，而是在每个UTF-16代码单元之间。这会摧毁代理对

`limit`  **可选** 一个非负整数，指定对要包含在数组中的子字符串数的限制。

* 如果提供,在分隔符出现的位置分割字符串,但在限制条目已放入数组时停止.
* 如果在达到指定限制之前先到达字符串的末尾，它可能包含少于限制的条目。
* 新数组中不返回剩下的文本
* 如果限制是0, 则返回一个空数组



**返回值**

返回源字符串以分隔符出现位置分隔而成的一个 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 

**描述**

* 找到分隔符后，将其从字符串中删除，并将子字符串作为数组返回.
* 如果分隔符是包含捕获括号的正则表达式，则每次分隔符匹配时，捕获括号的结果（包括任何未定义的结果）将被拼接到输出数组中。但是，并不是所有浏览器都支持此功能。
* 如果分隔符是一个数组,那么这个数组会被强制转换成字符串且用作分隔符

**实例**

实例1

```javascript
let str = 'hello world';

console.log(str.split(' ')); ['hello', 'world']
console.log(str.split()); ['hello world']
console.log(str.split('h')); //['', 'ello world', '']

let str = 'hello world';
console.log(str.split('o', 0)); //[]
console.log(str.split('o', 2)); //['hell', 'w']
console.log(str.split('o', 5)); //['hell', 'w', 'rld']

```

没有分隔符+空字符串

```javascript
let str = '';
console.log(str.split()); //['']
```

移除字符串中的空格

```javascript
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)

console.log(nameList); //
```

[靠正则来分割使结果中包含分隔块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split#example_capturing_parentheses)

如果 `separator` 包含捕获括号（capturing parentheses），则其匹配结果将会包含在返回的数组中

```javascript
var myString = "Hello 1 word. Sentence number 2.";
var splits = myString.split(/(\d)/);

console.log(splits);

//[ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

[使用一个数组来作为分隔符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split#使用一个数组来作为分隔符)

```javascript
```



#### startsWith()

**定义**

`startsWith()` 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 `true` 或 `false`

**参数**

```javascript
str.startsWith(searchString[, position])
```

`searchString` 要搜索的字符串

`position` **可选** 

* 在 `str` 中搜索 `searchString` 的开始位置，默认值为 0

**返回值**

如果在字符串的开头找到了给定的字符则返回**`true`**；否则返回**`false`**

**描述**

这个方法能够让你确定一个字符串是否以另一个字符串开头。这个方法区分大小写

**实例**

```javascript
var str = "To be, or not to be, that is the question.";

alert(str.startsWith("To be"));         // true
alert(str.startsWith("not to be"));     // false
alert(str.startsWith("not to be", 10)); // true
```

#### endsWith()

**定义**

`endsWith()`方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 `true` 或 `false`。

**参数**

```javascript
str.endsWith(searchString[, length])
```

`searchString`  要搜索的字符串

`length` **可选** 

* 作为 `str` 的长度。默认值为 `str.length`

**返回值**

如果传入的子字符串在搜索字符串的末尾则返回**`true`**；否则将返回 **`false`**

**描述**

* 大小写敏感

**实例**

```javascript
var str = "To be, or not to be, that is the question.";

alert( str.endsWith("question.") );  // true
alert( str.endsWith("to be") );      // false
alert( str.endsWith("to be", 19) );  // true
alert(str.endsWith('to be', 18)); //false
```



#### substring()

**定义**

返回一个字符串在开始索引到结束索引之间的一个子集,或从开始索引直到字符串末尾的一个子集.

**参数**

```javascript
str.substring(indexStart[, indexEnd])
```

`indexStart` 

* 需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母

`indexEnd` **可选**

* 一个 0 到字符串长度之间的整数，以该数字为索引的字符<span style="text-decoration: underline wavy blue">不包含在截取的字符串内</span>

**描述**

* 提取从`indexStart`到`indexEnd`(不包括)之间的字符.
* 如果省略`indexEnd`, 则提取到字符串末尾
* 如果任一参数小于0或者为NaN, 则被当做0
* 如果任一参数大于字符串长度, 则被当做字符串的长度
* 如果`indexStart`大于`indexEnd`, 则提取结果就像是两个参数调换了一样

**实例**

```javascript
let str = 'mozilla';

//输出'moz'
console.log(str.substring(0,3));
console.log(str.substring(3,0));
console.log(str.substring(3,-3));
console.log(str.substring(3,NaN));
console.log(str.substring(-2, 3));
console.log(str.substring(NaN, 3));

//输出'lla'
console.log(str.substring(4));
console.log(str.substring(4, str.length))
console.log(str.substring(4, 7));
console.log(str.substring(7, 4));

//输出''
console.log(str.substring(4,4)); //''

//输出'mozilla'
console.log(str.substring(0));
console.log(str.substring(0, 7));
```



#### toString()

**定义**

`**toString()**` 方法返回指定对象的字符串形式

**参数**

```javascript
str.toString()
```

**返回值**

一个表示调用对象的字符串

**描述**

* `String` 对象覆盖了[`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 对象的 `toString` 方法；并没有继承 [`Object.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)。
* 对于 `String` 对象，`toString` 方法返回该对象的字符串形式，和 [`String.prototype.valueOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf) 方法返回值一样。

**实例**

输出一个字符串对象（String object）的字符串值

```javascript
var x = new String("Hello world");

console.log(x); //  String {'Hello world'}
alert(x.toString())      // 输出 "Hello world"
```



#### trim()

**定义**

**`trim()`** 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）

**描述**

* `trim()` 方法返回一个从两头去掉空白字符的字符串，并不影响原字符串本身

**Polyfill**

如果 `trim()` 不存在，可以在所有代码前执行下面代码

```javascript
if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\sFEFF\xA0]+$/g, '');
  }
}
```

#### trimEnd()/trimRight()

#### trimStart()/trimLeft()

#### valueOf()

**定义**

**`valueOf()`** 方法返回 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 对象的原始值

**描述**

* 此方法通常由JavaScript在内部调用，而不是在代码中显式调用

**实例**

```javascript
var x = new String('Hello world');
console.log(x.valueOf()); // Displays 'Hello world'
```



#### String.prototype.localeCompare

##### Define

> the method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.

##### Syntax

> referenceStr.localeCompare(compareString[, lcoales[, options]])

##### Parameters

`compareString`

* the string against which the `referenceStr` is compared.

`locales and options`

* these arguments customize the behavior of the function and let application specify the language whose formatting conventions should be used. In implementations which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation-dependent.



##### Return value

* A negative number if the referenceStr occurs before compareString;
* positive if the referenceStr occurs after compareString
* 0 if they are equivalent.



### 模板字面量

#### 基础语法

模板字面量最简单的用法，看起来好像只是用反撇号（`）替换了单、双引号。

#### 多行字符串

由于JavaScript长期以来一直存在一个语法bug，在一个新行最前方添加反斜杠（\）可以承接上一行的代码，因此确实可以利用这个bug来创造多行字符串：

```javascript
let msg = 'Multiline \
					string';
console.log(msg); //Multiline   string
```

当把字符串message打印到控制台时其并未按照跨行方式显示，<u>因为反斜杠在此处代表行的延续</u>，而非真正代表新的一行。

<u>如果想输出为新的一行，需要手动加入换行符</u>：

```javascript
let msg = 'Multiline\n\string';
let msg2 = 'Mutiline \n\ string'

console.log(msg);
```

在ECMAScript 6之前的版本中，通常都依靠数组或字符串拼接的方法来创建多行字符串，例如： ????

```javascript
let msg = [ 'Multiline ','string'].join('\n');

let msg = 'Multiline \n' + 'string';
```



#### 简化多行字符串

ECMAScript 6的模板字面量的语法简单，其极大地简化了多行字符串的创建过程。如果你需要在字符串中添加新的一行，只需在代码中直接换行，此处的换行将同步出现在结果中。

注意:

* 转换为字符串后,换行符当做一个字符长度.
* 一个空格当做一个字符长度

```javascript
let msg = `multiline
string`;

console.log(msg); 
console.log(msg.length); 16

let msg2 = `multiline
  string`;
console.log(msg2.length); //18 字符串长度+换行符长度(1)+空格长度
```

在反撇号中的所有空白符都属于字符串的一部分，所以千万要小心缩进。

```javascript
let msg = `multiline
					string`;

console.log(msg.length); //31
```

如果你一定要通过适当的缩进来对齐文本，则可以考虑在多行模板字面量的第一行留白，并在后面的几行中缩进

```javascript
let html = `
<div>
	<h1>Title</h1>
</div>`.trim();
```

在这段代码中，模板字面量的第一行没有任何文字，第二行才有内容。HTML标签缩进正确，且可以通过调用trim()方法移除最初的空行。

也可以在模板字面量中显式地使用\n来指明应当插入新行的位置：

```javascript
let msg = `multiline\nstring`;

console.log(msg);//'multiline
								 //string'

console.log(msg.length); //16
```

#### 字符串占位符

占位符由一个左侧的${和右侧的}符号组成，中间可以包含:

* 变量
* 任意的JavaScript表达式
* 运算式
* 函数调用
* 模板字面量
* 其他

模板字面量可以访问作用域中所有可访问的变量，无论在严格模式还是非严格模式下，尝试嵌入一个未定义的变量总是会抛出错误。

```javascript
let count = 10,
    price = 0.25,
    message = `${count} items cost $${(count * price).toFixed(2)}.`;

console.log(message); //10 items cost $2.50
```

模板字面量本身也是JavaScript表达式，<u>所以你可以在一个模板字面量里嵌入另外一个</u>

```javascript
let name = 'Nicholas',
    msg = `Hello, ${
			`my name is ${name}`
		}.`;

console.log(msg); //Hello, my name is Nicholas
```

嵌套模板字面量

```javascript
let arr = [{value:1}, {value:2}];
let message = `
  <ul>
    ${
      arr.map(item => {
        return `
        <li>${item.value}</li>    
        `
          })
    }
  </ul>
`

console.log(message);
<ul>
  <li>1</li>
,
  <li>2</li>
</ul>
```

打印结果中出现逗号是因为, 当占位符大括号中的值不是字符串时,会将其转换为字符串.比如数组[1,2,3]将被转换为1,2,3, 逗号就这样产生了. 要解决也很简单,使用join()方法.

```javascript
let arr = [{value:1}, {value:2}];
let message = `
  <ul>
    ${
      arr.map(item => {
        return `
        <li>${item.value}</li>    
        `
          }).join('')
    }
  </ul>
`;
console.log(message);
```





#### 标签模板!! / 模板字面量标签函数

模板字符串可以紧跟在一个函数名后面,该函数将被调用来处理这个模板字符串.

标签指的是在模板字面量第一个反撇号（`）前方标注的<u>函数名的字符串</u>. 每个函数名都可以执行模板字面量上的转换并返回最终的字符串值。

**标签函数**

> 标签函数本身是一个常规函数,通过前缀到模板字面量来应用自定义行为.
>
> 标签函数接收的参数依次是: 原始字符串数组和对每个表达式求值的结果.
>
> 函数的返回值是对模板字面量求值得到的字符串.

举个例子:

```javascript
let a = 6,
    b = 9;

function tag(literals, ...expressions) {
  console.log(literals, expressions);
}

let res = tag`${a} + ${b} = ${a+b}`;

//['', ' + ', '=', '']
//[6,9]
```

对于有n个插值的模板字面量,传给标签函数的表达式参数的个数始终是n,而传给标签函数的第一个参数所包含的字符串个数则始终是n+1.

因此,如果你想把这些字符串和对表达式求值的结果拼接起来作为默认返回的字符串,可以这样做:

```javascript
let a = 6,
    b = 9;

function tag(literals, ...experssions) {
  return literals[0] + expressions.map((e, i) => `${e}${literals[i+1]}`).join('');
}  //literals[0] 可以省略

function tag(literals, ...values) {
	return literals.reduce((acc, crt, idx) => {
    let value = values[idx - 1];
    return acc + value + crt;
  })
}

let untaggleRes = `${a} + ${b} = ${a + b}`;
let taggleRes = tag`${a} + ${b} = ${a + b}`;

console.log(untaggleRes);
console.log(taggleRes); //
```





举个例子:

```javascript
let x= 'HI', y = 'kevin';
var res = msg`${x}, I am ${y}`;
console.log(res);
```

我们可以自定义msg函数来处理返回的字符串:

```javascript
//literals 文字
//注意这个例子中 literals 的第一个元素和最后一个元素都是空字符串
function msg(literals, value1, value2) {
  console.log(literals);//['', ', I am ', '', raw: Array(3)]
  console.log(value1); //HI
  console.log(value2); //kevin
}
```

利用这些参数将其拼合回去:

```javascript
function msg(literals, ...values) {
  let result = '';
  for (let i=0; i<values.length; i++) {
    result += literals[i];
    result += values[i];
  }
  result += literals[literals.length - 1];
  return result;
}
```

也可以这样写:

```javascript
let x= 'HI', y = 'kevin';
var res = msg`${x}, I am ${y}`;
function msg(literals, ...values) {
  return literals.reduce((acc, crt, idx) => {
    let value = values[idx - 1];
    return acc + value + crt;
  })
}
```



#### 模板字符串使用案例

##### oneline

出于可读性或者其他原因，我希望书写的时候是换行的，但是最终输出的字符是在一行，这就需要借助模板标签来实现了，我们尝试写一个这样的函数：

```javascript
let message = `
	Hi,
	Daisy!
	I am
	Kevin.
`;
```



```javascript
//第一版
//在控制台中打印输出结果: '\n\tHi,\n\tDaisy!\n\tI am\n\tKevin.\n'
function onLine(literals, ...expressions) {
  let result = literals.reduce((acc, crt, i) => {
    let expression = expressions[i - 1];
    return acc + experssion + crt;
  });
  
  result = result.replace(/(\s+)/g, ' ');
  result = result.trim();
  
  return result;
}
```

实现原理很简单，拼合回去然后将多个空白符如换行符、空格等替换成一个空格。

使用如下:

```javascript
let message = oneLine `
    Hi,
    Daisy!
    I am
    Kevin.
`;
console.log(message); // Hi, Daisy! I am Kevin.
```

存在的问题,如果字符间就包括多个空格呢？举个例子：

```javascript
let message = oneLine`
  Preserve eg sentences.  Double
  spaces within input lines.
`;
```

如果使用这种匹配方式，`sentences.` 与 `Double` 之间的两个空格也会被替换成一个空格。

我们可以再优化一下，我们想要的效果是将每行前面的多个空格替换成一个空格，其实应该匹配的是换行符以及换行符后面的多个空格，然后将其替换成一个空格，我们可以将正则改成：

```javascript
result = result.replace(/(\n\s*)/g, ' ');
```

最终代码如下:

```javascript
//onLine第二版
function onLine(literals, ...values) {
  let result = literals.reduce((acc, crt, i) => {
    let value = vlaues[i - 1];
    return acc + value + crt;
  });
  
  result = result.replace(/(\n\s*)/g, ' ');
  result = result.trim();
  
  return result;
}
```



##### stripIndents

假设有这样一段 HTML：

```
let html = `
	<span>1<span>
	<span>2<span>
		<span>3<span>
`;
```

为了保持可读性，我希望最终输入的样式为：

```
<span>1<span>
<span>2<span>
<span>3<span>
```

其实就是匹配每行前面的空格，然后将其替换为空字符串。

```javascript
//stripIndents第一版

function stripIndents(literals, ...values) {
  let result = literals.reduce((acc, crt, i) => {
    value = values[i - 1];
    return acc + value + crt;
  });
  
  result = result.replace(/\n[^\S\n]*/g, '\n');
  result = result.trim();
  
  return result;
}
```

正则表达式解析:

`\S` 表示匹配一个非空白字符

`[^\S\n]` 表示匹配`非空白字符`和`换行符`之外的字符，其实也就是空白字符去除换行符

`\n[^\S\n]*` 表示匹配换行符以及换行符后的多个不包含换行符的空白字符

`replace(/\n[^\S\n]*/g, '\n')` 表示将一个换行符以及换行符后的多个不包含换行符的空白字符替换成一个换行符，其实也就是将换行符后面的空白字符消掉的意思

其实吧，不用写的这么麻烦，我们还可以这样写：

```javascript
result = result.replace(/^[\S\n]+/gm, '');
```

m 标志用于指定多行输入字符串时应该被视为多个行，而且如果使用 m 标志，^ 和 $ 匹配的开始或结束是输入字符串中的每一行，而不是整个字符串的开始或结束。

[^\S\n] 表示匹配空白字符去除换行符

^[^\S\n]+ 表示匹配以`去除换行符的空白字符`为开头的一个或者多个字符

result.replace(/^\[^\S\n]+/gm, '') 表示将每行开头一个或多个`去除换行符的空白字符`替换成空字符串，也同样达到了目的。

最终代码如下:

```javascript
stripIndents 第二版
function stripIndents(literals, ...values) {
  let result = literals.reduce((acc, crt, i) => {
    let value = values[i - 1];
    return acc + value + crt;
  });
  
  result = result.replace(/^[^\S\n]+/gm, '');
  result = result.trim();
  
  return result;
}
```



##### stripIndent

这次的 stripIndent 相比上面一节的标题少了一个字母 s，而我们想要实现的功能是：

```
let html = `
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	<ul>
`;
```

[![string](https://camo.githubusercontent.com/7ee386fa1cfce6724c62cc46379edb4251bfafed2717c11eee8c62a82af251c0/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f4553362f737472696e672f737472696e67352e706e67)](https://camo.githubusercontent.com/7ee386fa1cfce6724c62cc46379edb4251bfafed2717c11eee8c62a82af251c0/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f4553362f737472696e672f737472696e67352e706e67)

其实也就是去除第一行的换行以及每一行的部分缩进。

这个实现就稍微麻烦了一点，因为我们要计算出每一行到底要去除多少个空白字符。

实现的思路如下：

1. 使用 match 函数，匹配每一行的空白字符，得到一个包含每一行空白字符的数组
2. 数组遍历比较，得到最小的空白字符长度
3. 构建一个正则表达式，然后每一行都替换掉最小长度的空白字符

实现的代码如下：

```javascript
let html = `
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	<ul>
`;

function stripIndent(literals, ...values) {
  let result = literals.reduce((acc, crt, i) => {
    let value = values[i-1];
    returna acc + value + crt;
  });
  
  const match = result.match(/^[^\S\n]*(?=\S)/gm);
  console.log(match); //Array[] [ "    ", "        ", "        ", "        ", "    " ]
  
  
  const indent = match && Math.min(...match.map(el => el.length));
  console.log(indent); //4
  
  if (indent) {
    const regexp = new RegExp(`^.{${indent}}`, 'gm');
    console.log(regexp); //  /^.{4}/gm
    
    result = result.replace(regexp, '');
  }
  
  result = result.trim();
  
  return result;
}

```

精简的代码如下：

```javascript
function stripIndent(literals, ...values) {
  let result = literals.reduce((acc, crt, i) => {
    let value = values[i - 1];
    return acc + value + crt;
  });
  
  const match = result.match(/^[^\S\n]*(?=\S)/gm);
  const indent = match && Math.min(...match.map(el => el.length));
  
  if (indent) {
    const regexp = new RegExp(`^.{${indent}}`, 'gm');
    result = result.replace(regexp, '');
    
    result = result.trim();
    
    return result;
  }
}
```



##### includeArrays

前面我们讲到为了避免 ${} 表达式中返回一个数组，自动转换会导致多个逗号的问题，需要每次都将数组最后再 join('') 一下，再看一遍例子：

```javascript
let arr = [{value: 1}, {value: 2}];
let message = `
	<ul>
		${arr.map((item) => {
			return `
				<li>${item.value}</li>
			`
		}).join('')}
	</ul>
`;
console.log(message);
```

利用标签模板，我们可以轻松的解决这个问题：

```javascript
function includeArrays(literals, ...values) {
  let result = literals.reduce((acc, crt, i) => {
    let value = values[i-1];
    
    if (Array.isArray(value)) {
      value = value.join('');
    }
    
    return acc + value + crt;
  });
  
  result = result.trim();
  return result;
}
```









#### 模板字面量中使用原始值

模板标签同样可以访问原生字符串信息，也就是说通过模板标签可以访问到字符转义被转换成等价字符前的原生字符串。最简单的例子是使用内建的**String.raw()**标签：

```javascript
let msg1 = `Multiline\nstring`,
    msg2 = String.raw`Multiline\nstring`;

console.log(msg1); //'Multiline
									 //string'

console.log(msg2); //Multiline\\nstring
```

在这段代码中，变量message1中的\n被解释为一个新行，而变量message2获取的是\n的原生形式"\\\n"（反斜杠与n字符），必要的时候可以像这样来检索原生的字符串信息。

原生字符串信息同样被传入模板标签，标签函数的第一个参数是一个数组，它有一个额外的属性raw，是一个包含每一个字面值的原生等价信息的数组。举个例子，literals[0]总有一个等价的literals.raw[0]，包含着它的原生字符串信息。了解之后，可以使用以下代码模仿String.raw()

```javascript
function raw(literals, ...substitutions) {
  let result = '';
  //根据substitutions的数量来确定循环的执行次数
  for (let i=0; i<substitutions.length; i++) {
    //使用原生值
    result += literals.raw[i];
    result += substitutions[i];
  }
  
  //合并最后一个literals
  result += literals.raw[literals.length - 1];
  return result;
}

let msg = raw`Multiline\nstring`;

console.log(msg); //'Multiline\\nstring'
console.log(msg.length); //27
```



### 实例



#### 从字符串中<u>通过位置</u>获取单个字符

要获取在 具体 位置的一个字符，可以使用方括号 `[position]` 或者调用 [str.charAt(pos)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) 方法

```javascript
let str = `Hello`;

// 第一个字符
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// 最后一个字符
alert( str[str.length - 1] ); // o
```

方括号是获取字符的一种现代化方法，而 `charAt` 是历史原因才存在的。

它们之间的唯一区别是，如果没有找到字符，`[]` 返回 `undefined`，而 `charAt` 返回一个空字符串

```javascript
let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // ''（空字符串）
```



#### 字符串比较

在 JavaScript 中，你只需要使用[比较操作符(>/</>=/<=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

```javascript
let a = 'a',
    b = 'b';

if (a < b) {
  //
} else {
  //
}
```

使用从字符串实例继承而来的 [`localeCompare`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) 方法也能达到同样的效果



## 数字Number

### 0. 介绍

JavaScript 的 **`Number`** 对象是经过封装的能让你处理数字值的对象。`Number` 对象由 `Number()` 构造器创建。

### 1. 分类

* JavaScript 中的常规数字以 64 位的格式 [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754-2008_revision) 存储，也被称为“双精度浮点数”。
* BigInt 数字，用于表示任意长度的整数。有时会需要它们，因为常规数字不能超过 `253` 或小于 `-253`

### 2. 语法

**包装类实现**

```javascript
new Number(value);
let a = new Number('123'); //a === 123 is false  a打印结果: Number {123}
let b= Number('123'); //b === 123 is true
a instanceof Number //true
b instanceof Number //false
```

**科学计数法**

在 JavaScript 中，我们通过在数字后附加字母 “e”，并指定零的数量来缩短数字

`"e"` 把数字乘以 `1` 后面跟着给定数量的 0 的数字

`e` 后面的负数表示除以 1 后面跟着给定数量的 0 的数字

```javascript
let billion = 1e9; //10亿,数字1后面跟9个0

1e3 = 1* 1000
1e-3 = 1 / 1000(= 0.001)  //-3 除以 1 后面跟着 3 个 0 的数字
```



**不同进制表示法**

二进制和八进制数字支持使用 `0b` 和 `0o` 前缀

[十六进制](https://en.wikipedia.org/wiki/Hexadecimal) 数字在 JavaScript 中被广泛用于表示颜色，编码字符以及其他许多东西。所以自然地，有一种较短的写方法：`0x`，然后是数字。



### 3. 描述

* 如果参数无法被转换为数字，则返回 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)
* 在非构造器上下文中 (如：没有 [`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符)，`Number` 能被用来执行类型转换

### 4. 方法

#### toString(base)

方法 `num.toString(base)` 返回在给定 `base` 进制数字系统中 `num` 的字符串表示形式

`base` 的范围可以从 `2` 到 `36`。默认情况下是 `10`

常见的用例如下：

- **base=16** 用于十六进制颜色，字符编码等，数字可以是 `0..9` 或 `A..F`。
- **base=2** 主要用于调试按位操作，数字可以是 `0` 或 `1`。
- **base=36** 是最大进制，数字可以是 `0..9` 或 `A..Z`。所有拉丁字母都被用于了表示数字。对于 `36` 进制来说，一个有趣且有用的例子是，当我们需要将一个较长的数字标识符转换成较短的时候，例如做一个短的 URL。可以简单地使用基数为 `36` 的数字系统表示：

```javascript
123456..toString(36); // 2n9c
(123456).toString(36)
```

注意: 如果我们放置一个点：`123456.toString(36)`，那么就会出现一个 error，因为 JavaScript 语法隐含了第一个点之后的部分为小数部分。如果我们再放一个点，那么 JavaScript 就知道小数部分为空，现在使用该方法。

也可以写成 `(123456).toString(36)`。

**其他方法**

* Number.isNaN()
* Number.isFinite()
* Number.isInteger()
* Number.parseFloat()
* Number.parseInt()

#### isFinite() 

**定义**

该全局 **`isFinite()`** 函数用来判断被传入的参数值是否为一个有限数值（finite number）。在必要情况下，参数会首先转为一个数值

**参数**

```javascript
isFinite(testValue)
```

**描述**

* isFinite 是全局的方法，不与任何对象有关系
* 你可以用这个方法来判定一个数字是否是有限数字。`isFinite` 方法检测它参数的数值。如果参数是 `NaN`，正无穷大或者负无穷大，会返回`false`，其他返回 `true`

* 和全局的 [`isFinite()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isFinite) 函数不同，`Number.isFinite()`方法不会强制将一个非数值的参数转换成数值，这就意味着，只有数值类型的值，且是有穷的（finite），才返回 `true`   !!!!
* isFinite(value)` 将其参数转换为数字，如果是常规数字，则返回 `true`，而不是 `NaN/Infinity/-Infinity
* 有时 `isFinite` 被用于验证字符串值是否为常规数字.
* 

```javascript
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false

isFinite(0);         // true
isFinite(null);      // true, 在更强壮的Number.isFinite(null)中将会得到false


isFinite("0");       // true, 在更强壮的Number.isFinite('0')中将会得到false


Number.isFinite('1') ;//false
isFinite('1'); //true

alert( isFinite("str") ); // false，因为是一个特殊的值：NaN
alert( isFinite(Infinity) ); // false，因为是一个特殊的值：Infinity

Number.isFinite(''); //false
isFinite(''); //true

Number.isFinite(' '); //false
isFinite(' '); //true
```



#### parseInt()

**定义**

**parseInt(string, radix)**  解析一个字符串并返回指定基数的**十进制整数**， `radix` 是2-36之间的整数，表示被解析字符串的基数。

**参数**

```javascript
parseInt(string, radix);
```

`string`   要被解析的值。

* 如果参数不是一个字符串，则将其转换为字符串(使用  `ToString `抽象操作)。字符串开头的空白符将会被忽略。

`radix` **可选**

* 从 `2` 到 `36`，表示字符串的基数。例如指定 16 表示被解析值是十六进制数。请注意，10不是默认值.

**返回值**

* 从给定的字符串中解析出的一个整数

* `NaN`  (当基数小于2或者大于36,或第一个非空格字符串不能转换为数字)

**描述**

* `parseInt`函数将其第一个参数转换为一个字符串，对该字符串进行解析，然后返回一个整数或`NaN`
* 如果 `parseInt `遇到的字符不是指定 `radix `参数中的数字，它将忽略该字符以及所有后续字符，并返回到该点为止已解析的整数值。 `parseInt` 将数字截断为整数值。 允许前导和尾随空格
* 由于某些数字在其字符串表示形式中使用e字符（例如 `6.022×23` 表示` 6.022e23` ），因此当对非常大或非常小的数字使用数字时，使用 `parseInt` 截断数字将产生意外结果
* `parseInt` 可以理解两个符号。`+` 表示正数，`-` 表示负数（从ECMAScript 1开始）。它是在去掉空格后作为解析的初始步骤进行的。如果没有找到符号，算法将进入下一步；否则，它将删除符号，并对字符串的其余部分进行数字解析。
* 如果 `radix` 是 `undefined`、`0`或未指定的，JavaScript会假定以下情况：
  * 如果输入的 `string`以 "`0x`"或 "`0x`"（一个0，后面是小写或大写的X）开头，那么radix被假定为16，字符串的其余部分被当做十六进制数去解析
  * 如果输入的 `string`以 "`0`"（0）开头， `radix`被假定为`8`（八进制）或`10`（十进制）。具体选择哪一个radix取决于实现。ECMAScript 5 澄清了应该使用 10 (十进制)，但不是所有的浏览器都支持。**因此，在使用 `parseInt` 时，一定要指定一个 radix**。
  * 如果输入的 `string` 以任何其他值开头， `radix` 是 `10` (十进制)
* 如果第一个字符不能转换为数字，`parseInt`会返回 `NaN`
* 要将一个数字转换为特定的 `radix` 中的字符串字段，请使用 `thatNumber.toString(radix)`函数
* 警告: `parseInt`将 [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)转换为[`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)，并在这个过程中失去了精度。这是因为拖尾的非数字值，包括 "n"，会被丢弃。

**实例**





#### parseFloat()

**定义**

**`parseFloat()`** 函数解析一个参数（必要时先转换为字符串）并返回一个浮点数

**参数**

```javascript
parseFloat(string)
```

`string`  需要被解析成为浮点数的值

**返回值**

给定值被解析成**浮点数**。如果给定值不能被转换成数值，则会返回 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)。

**描述**

* `parseFloat`是个全局函数,不属于任何对象
* 如果 `parseFloat` 在解析过程中遇到了正号（`+`）、负号（`-` U+002D HYPHEN-MINUS）、数字（`0`-`9`）、小数点（`.`）、或者科学记数法中的指数（e 或 E）以外的字符，则它会忽略该字符以及之后的所有字符，返回当前已经解析到的浮点数
* 第二个小数点的出现也会使解析停止（在这之前的字符都会被解析）
* 参数首位和末位的空白符会被忽略。
* 如果参数字符串的第一个字符不能被解析成为数字,`则` `parseFloat` 返回 `NaN`。
* `parseFloat` 也可以解析并返回 [`Infinity`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity)。
* `parseFloat`解析 [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 为 [`Numbers`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number), 丢失精度。因为末位 `n` 字符被丢弃。

考虑使用 [`Number(*value*)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 进行更严谨的解析，只要参数带有无效字符就会被转换为 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 

`parseFloat` 也可以转换一个已经定义了 `toString` 或者 `valueOf` 方法的对象，它返回的值和在调用该方法的结果上调用 `parseFloat` 值相同



**实例**

下面的例子都返回**3.14**

```javascript
parseFloat('3.0'); //3 结果是数字

parseFloat(3.14);
parseFloat('3.14');
parseFloat('  3.14  ');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14some non-digit characters');
parseFloat({ toString: function() { return "3.14" } });
```

大整数的返回值

均返回 `900719925474099300`，当整数太大以至于不能被转换时将失去精度

```javascript
parseFloat(900719925474099267n);
parseFloat('900719925474099267n');
```



### 5. 舍入

* Math.floor 向下舍入：`3.1` 变成 `3`，`-1.1` 变成 `-2`
* Math.ceil 向上舍入：`3.1` 变成 `4`，`-1.1` 变成 `-1`
* Math.round 向最近的整数舍入：`3.1` 变成 `3`，`3.6` 变成 `4`，`-1.1` 变成 `-1`
* 舍入到具体的小数点多少位?
  * 乘除法
  * toFixed()  函数 [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 将数字舍入到小数点后 `n` 位，并以字符串形式返回结果. 会向上或向下舍入到最接近的值，类似于 `Math.round`; 如果小数部分比所需要的短，则在结尾添加零

```javascript
//要将数字舍入到小数点后两位

//1.乘除法
let num = 1.23456;
Math.floor(num * 100) / 100; // 1.23456 -> 123.456 -> 123 -> 1.23

//2.toFixed(n)
let num = 12.34;
num.toFixed(1); //'12.3'

let num = 12.36;
num.toFixed(1); //'12.4'

let num = 12.34;
num.toFixed(5); //'12.34000'
```

### 6. 不精确的计算

#### 0. 问题

在内部，数字是以 64 位格式 [IEEE-754](http://en.wikipedia.org/wiki/IEEE_754-1985) 表示的，所以正好有 64 位可以存储一个数字：其中 52 位被用于存储这些数字，其中 11 位用于存储小数点的位置（对于整数，它们为零），而 1 位用于符号.

1.如果一个数字太大，则会溢出 64 位存储，并可能会导致无穷大

```javascript
console.log(1e500); //Infinity
```

2.使用二进制数字系统无法 **精确** 存储 *0.1* 或 *0.2*，就像没有办法将三分之一存储为十进制小数一样

```javascript
alert( 0.1 + 0.2 ); // 0.30000000000000004
```

<u>IEEE-754 数字格式通过将数字舍入到最接近的可能数字来解决此问题</u>。这些舍入规则通常不允许我们看到“极小的精度损失”，但是它确实存在

```javascript
alert( 0.1.toFixed(20) ); // 0.10000000000000000555
```

<u>当我们对两个数字进行求和时，它们的“精度损失”会叠加起来。</u>这就是为什么 `0.1 + 0.2` 不等于 `0.3`. 许多其他编程语言也存在同样的问题。

#### 1. 解决

最可靠的方法是借助方法 [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 对结果进行舍入.如果需要显示 `¥ 0.30`，这实际上很方便。对于其他情况，我们可以使用一元加号将其强制转换为一个数字：

```javascript
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30

let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3
```

乘/除法可以减少误差，但不能完全消除误差

```javascript
alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001
```

#### 2. 实例

**数字**

```javascript
// Hello！我是一个会自我增加的数字！
alert( 9999999999999999 ); // 显示 10000000000000000


9999999999999999..toString(2).length //54
```

出现了同样的问题：精度损失。有 64 位来表示该数字，其中 52 位可用于存储数字，但这还不够。所以最不重要的数字就消失了。JavaScript 不会在此类事件中触发 error。它会尽最大努力使数字符合所需的格式，但不幸的是，这种格式不够大到满足需求。

```javascript
Object.is(0, -0); //false

0 === -0; //true
```

数字内部表示的另一个有趣结果是存在两个零：`0` 和 `-0`。

这是因为在存储时，使用一位来存储符号，因此对于包括零在内的任何数字，可以设置这一位或者不设置。在大多数情况下，这种区别并不明显，因为运算符将它们视为相同的值。



**6.35.toFixed(1) == 6.3**

为什么 `6.35` 被舍入为 `6.3` 而不是 `6.4`?

在内部，`6.35` 的小数部分是一个无限的二进制。在这种情况下，它的存储会造成精度损失。

```javascript
6.35.toFixed(20); // 6.34999999999999964473
```

精度损失可能会导致数字的增加和减小。在这种特殊的情况下，数字变小了一点，这就是它向下舍入的原因

那么 `1.35` 会怎样呢？

```javascript
1.35.toFixed(20); // 1.35000000000000008882
```

在这里，精度损失使得这个数字稍微大了一些，因此其向上舍入.

**如何以正确的方式进行舍入,解决`6.35`的问题?**

`63.5` 完全没有精度损失。这是因为小数部分 `0.5` 实际上是 `1/2`。以 2 的整数次幂为分母的小数在二进制数字系统中可以被精确地表示，现在我们可以对它进行舍入

```javascript
(6.35 * 10).toFixed(20); //63.50000000000000000000


Math.round(6.35 * 10) / 10; // 6.35 -> 63.5 -> 64(rounded) -> 6.4
```

 

### 7. 实例

[重复，直到输入的是一个数字](https://zh.javascript.info/number#zhong-fu-zhi-dao-shu-ru-de-shi-yi-ge-shu-zi)

> 创建一个函数 `readNumber`，它提示输入一个数字，直到访问者输入一个有效的数字为止。
>
> 结果值必须以数字形式返回。
>
> 访问者也可以通过输入空行或点击“取消”来停止该过程。在这种情况下，函数应该返回 `null`。

```javascript
function readNumber() {
  let num;
  do {
    num = prompt('enter a number', 0);
  } while(!isFinite(num))
  if (num === null || num === '' || num === ' ') return null;
  
  return +num;
}

alert(`Read: ${readNumber()}`);


function readNumber() {
  let num = prompt('输入数字');
  
}
```





### 8. 其他(笔记记得乱七八糟,需重记)

> [前端应该知道的JavaScript浮点数和大数的原理 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/66949640)

#### 1. IEEE 754标准

**背景**

计算机中如何存储整数和小数?

> 计算机内部信息都是由二进制方式表示的,但由于**某些浮点数没办法用二进制准确的表示出来**，也就带来了一系列精度问题。当然这也**不是JS独有的问题**。

计算机中如何将小数转换成二进制?

十进制小数转换成二进制小数采用**乘2取整, 顺序排列**

* 用2乘十进制小数,可以得到积,将积的整数部分取出,再用2乘余下的小数 部分，又得到一个积，再将积的整数部分取出，如此进行，直到积中的小数部分为零，或者达到所要求的精度为止。
* 把取出的整数部分按顺序排列起来，先取的整数作为二进制小数的高位有效位，后取的整数作为低位有效位。

```javascript
//digital 0.68

0.68 * 2 = 1.36 //1
0.36 * 2 = 0.72 //0
0.72 * 2 = 1.44 //1
0.44 * 2 = 0.88 //0
0.88 * 2 = 1.76 //1
0.76 * 2 = 1.52 //1
0.52 * 2 = 1.04 //1
0.04 * 2 = 0.08 //0
0.08 * 2 = 0.16 //0
0.16 * 2 = 0.32 //0
0.32 * 2 = 0.64 //0
0.64 * 2 = 1.28 //1
0.28 * 2 = 0.56 //0
0.56 * 2 = 1.12 //1
0.12 * 2 = 0.24 //0
0.24 * 2 = 0.48 //0
0.48 * 2 = 0.96 //0
0.96 * 2 = 1.92 //1
0.92 * 2 = 1.84 //1
0.84 * 2 = 1.68 //1
0.68 * 2 = 1.36 //1
0.36 * 2 = 0.72 //0
0.72 * 2 = 1.44 //1
0.44 * 2 = 0.88 //0
0.88 * 2 = 1.76 //1
0.76 * 2 = 1.52 //1
0.52 * 2 = 1.04 //1
0.04 * 2 = 0.08 //0
0.08 * 2 = 0.16 //0
0.16 * 2 = 0.32 //0
0.32 * 2 = 0.64 //0
0.64 * 2 = 1.28 //1
0.28 * 2 = 0.56 //0
0.56 * 2 = 1.12 //1
0.12 * 2 = 0.24 //0
0.24 * 2 = 0.48 //0
0.48 * 2 = 0.96 //0
0.96 * 2 = 1.92 //1
0.92 * 2 = 1.84 //1
0.84 * 2 = 1.68 //1
0.68 * 2 = 1.36 //1
0.36 * 2 = 0.72 //0
0.72 * 2 = 1.44 //1
0.44 * 2 = 0.88 //0
0.88 * 2 = 1.76 //1
0.76 * 2 = 1.52 //1---
0.52 * 2 = 1.04 //1
0.04 * 2 = 0.08 //0
0.08 * 2 = 0.16 //0
0.16 * 2 = 0.32 //0
0.32 * 2 = 0.64 //0
0.64 * 2 = 1.28 //1
0.28 * 2 = 0.56 //0
0.56 * 2 = 1.12 //1
0.12 * 2 = 0.24 //0
```



```javascript
//如果将0.1转换成二进制后,发现无法精确标识0.1
0.1的二进制表示是：0.000110011......0011...... (0011无限循环)
```



**标准内容**

IEEE 754 标准是IEEE二进位浮点数算术标准(IEEE Standard for Floating-Point Arithmetic)的标准编号。IEEE 754 标准规定了计算机程序设计环境中的二进制和十进制的浮点数自述的交换、算术格式以及方法。

根据IEEE754标准,任意一个二进制浮点数都可以表示成以下形式:
$$
V = (-1)^S×2^E×M
$$

公式解析:

* S为数符,它表示浮点数的正负(0正1负);
* M为有效位(尾数);
* E为阶码,用移码表示,阶码的真值都被加上一个常数(偏移量);

尾数部分M通常都是规格化表示,即非0的尾数其第一位总是1,而这一位也称隐藏位.因为存储时这一位是会被省略的.比如保存1.0011时候,只保存0011,等读取的时候才把第一位的1加上去.

常用的浮点格式有:

单精度

> 32位浮点数,最高的1位是符号位S,后面的8位是指数E,剩下的23位为尾数(有效数字)M.

其真值为 ????
$$
(-1)^{b_{31}}×(1.b_{22}b_{21}b_{20}...b_{0})_2×2^{({b_{30}b_{29}...b_{23}})_2-127}
$$


![](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/v2-0dc93bca2609242e7019399b5f896d59_1440w.45jtwy5z5w80.webp)



双精度

> 64位浮点数,最高1位是符号位S,后面的11位是指数E,剩下的52位是尾数(有效数字)M.

其真值位: ????
$$
(-1)^{sign}×(1.b_{51}b_{50}...b_{0})_2×2^{e-1023}
$$


![](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/v2-48240f0e1e0dd33ec89100cbe2d30707_1440w.597k4ikq3uw0.webp)

**双精度浮点数**

JavaScript中的Number是以双精度浮点数的形式计算的,双精度浮点数总共有8个字节(byte),每字节有8比特(bit-位),即8bit/byte,所以总共占64位.

根据IEEE-754的标准,双精度浮点数中的占位分为3个部分:

![](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/v2-2f3a24983e41196d4b4a73708638a790_1440w.6nzn3p49v740.webp)

JavaScript中只有一种数字类型number,而number使用的是IEEE754双精度浮点格式.依据上述规则,如何存储0.1和0.2.

> 0.1转二进制: 0.000110011001...(1100循环)
>
> 转位科学计数法: 1.10011001...(1100循环)*2^-4   ????
>
> 数据是无限循环的,但是可供使用的尾数位却是有限的,只有52位可以使用,53位及以后会被舍去

所以0.1+0.2计算结果转换位十进制数字是0.30000000000000004. 0.1和0.2在计算机中的二进制存储会让它们本身损失掉一定的精度，而它们在计算机中的二进制存储转换成十进制时已经不是真正的0.1和0.2了，相加的结果也就自然不是0.3了

既然0.1在计算机中的存储已经有了舍入误差，那为什么num=0.1能得到0.1呢？

在控制台中使用[toPrecision](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)看一下0.1在不同精度下的返回

```javascript
0.1.toPrecision(16) //0.1000000000000000
0.1.toPrecision(17) //'0.10000000000000001'
0.1.toPrecision(20) //
0.1.toPrecision(30) //
0.1.toPrecision(64) //0.1000000000000000055511151231257827021181583404541015625000000000
```

可以看出来其实0.1是截断了一部分精度后得到的结果，那么这个问题就可以转化为：双精度浮点数是按什么规则来截断的呢？



**如果一个 IEEE 754 的双精度浮点数被转成至少含17位有效数字的十进制数字字符串，当这个字符串转回双精度浮点数时，必须要跟原来的数相同；换句话说，如果一个双精度的浮点数转为十进制的数字时，只要它转回来的双精度浮点数不变，精度取最短的那个就行。**

拿0.1来举例子，0.1和0.10000000000000001转成双精度浮点数的存储是一样的，所以取最短的0.1就行了。

**为什么1.005.toFixed(2)=1.00而不是1.01**

因为在第一个问题中已经说了，一个十进制数字转为双精度浮点数然后再取出来时，跟原十进制数字可能会有误差，试一下1.005取20个精度

```javascript
1.005.toPrecision(20) //'1.004999999999..8934'
```

很明显1.005只是一个被截断后的数字，它的双精度浮点数代表的20位精度的数字是1.0049999999999998934，所以进行保留2位的四舍五入时，2位后的数字会被全部舍去

为什么会有Number.MAX_VALUE和Number.MAX_SAFE_INTEGER这两个常量同时存在？

控制台打印:

```javascript
Number.MAX_SAFE_INTEGER  /9007199254740991

Number.MAX_VALUE //1.7976931348623157e+308

Math.pow(2,53) - 1 //907199254740091
```

为什么最大安全数是2<sup>53</sup>-1? 前面提到Javascript浮点存储是52位尾数位,但是因为科学计数法小数点左侧的1会在存储时省去,所以52位尾数+省去的1位=53个可表示的位数.
$$
2^{53} - 1 = 9\;007\;199\;254\;740\;991
$$


那为什么2<sup>53</sup>-1是最大安全整数呢?比它大会怎样?   ????

```javascript
Math.pow(2,53) //9 007 199 254 740 992
Math.pow(2,53) + 1; //9 007 199 254 740 992
Math.pow(2,53) + 2; //9 007 199 254 740 994 ??
```

以2^53来说明一下为什么2^53-1是最大安全整数，安全在哪里

> 2^53 转二进制 =====> 100000000000000000000000000000000000000000000000000000(53个0)
> 转为科学计数法 =====>
> 1.00000000000000000000000000000000000000000000000000000(53个0)*2^53
> 存入计算机 =====> 尾数位只有52位所以截掉末尾的0只能存52个0
> 2^53+1 转二进制 =====>
> 100000000000000000000000000000000000000000000000000001(52个0)
> 转为科学计数法 =====>
> 1.00000000000000000000000000000000000000000000000000001(52个0)
> 存入计算机 =====> 尾数位只有52位所以截掉末尾的1只能存52个0

可以看出来，2^53和2^53+1在计算机中的存储尾数和指数都相同，所以两个不同的数在计算机中的存储是一样的，这样就非常的不安全了。

所以2^53-1是JavaScript里面的最大安全整数。至于Number.MAX_VALUE，就是把尾数位和指数位都设为1再转为十进制就好了。

**如何解决数字精度问题**

> [JavaScript 浮点数运算的精度问题 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/191395766)

1.类库

* 使用[bignumber](https://link.zhihu.com/?target=http%3A//mikemcl.github.io/bignumber.js/%23valueOf)这个库来解决
* Math.js
* decimal.js
* big.js

2.其他

* 整数, 使用String类型来取值或者传值,否则会丧失精度
* 浮点数
  * toFixed() 对结果进行四舍五入



#### 2.浮点数取整的几种方式

* Math.ceil() 向上取整
* Math.floor() 向下取整
* Math.random() 四舍五入取整
* parseInt() 剔除小数部分







## 解构

### 0.对象解构

#### 解构

将对象解构应用到了变量的声明中

```javascript
let node = {
  type: 'Identifier',
  name: 'foo'
};

let {type, name} = node;

console.log(type); //'Identifier'
console.log(name); //'foo'
```

#### 初始化程序

如果使用var、let或const解构声明变量，则必须要提供初始化程序（也就是等号右侧的值）

如果不使用解构功能，则var和let声明不强制要求提供初始化程序，但是对于cosnt声明，无论如何必须提供初始化程序.

```javascript
var {type, name}; //语法错误
let {type, name}; //语法错误
const {type, name}; //语法错误
```

#### 解构赋值

到目前为止，我们已经将对象解构应用到了变量的声明中。然而，我们同样可以在给变量赋值时使用解构语法。举个例子，你可能在定义变量之后想要修改它们的值，就像这样：

```javascript
let node = {
  type: 'Identifier',
  name: 'foo'
},
    type = 'Literal',
    name = 5;

//使用解构语法为多个变量赋值
({type, name} = node);

console.log(type); //'Identifier'
console.log(name); //'foo'
```

在这个示例中，声明变量type和name时初始化了一个值，在后面几行中，通过解构赋值的方法，从node对象读取相应的值重新为这两个变量赋值。请注意，<span style="text-decoration:underline double red">一定要用一对小括号包裹解构赋值语句，JavaScript引擎将一对开放的花括号视为一个代码块，而语法规定，代码块语句不允许出现在赋值语句左侧，添加小括号后可以将块语句转化为一个表达式，从而实现整个解构赋值的过程。</span>

**解构赋值表达式的值与表达式右侧（也就是=右侧）的值相等**，如此一来，在任何可以使用值的地方你都可以使用解构赋值表达式。想象一下给函数传递参数值的过程：

```javascript
let node = {
  type: 'Identifier',
  name: 'foo'
},
    type = 'Literal',
    name = 5;

function outputInfo(value) {
  console.log(value === node); //true
}

outputInfo({type, name} = node); //变量从作用域中查找

console.log(type);//'Identifier'
console.log(name);//'foo'
```

解构赋值表达式（也就是=右侧的表达式）如果为null或undefined会导致程序抛出错误。也就是说，<u>任何尝试读取null或undefined的属性的行为都会触发运行时错误</u>。



#### 默认值

使用解构赋值表达式时，如果指定的局部变量名称在对象中不存在，那么这个局部变量会被赋值为undefined

```javascript
let node = {
  type: 'Identifier',
  name: 'foo'
};

let {type, name, value} = node;

console.log(value); //undefined
```

当指定的属性不存在时，可以随意定义一个默认值，在属性名称后添加一个等号（=）和相应的默认值即可：

```javascript
let node = {
  type: 'Identifier',
  name: 'foo'
};

let {type, name, value = true} = node;

console.log(value); //true
```

为变量value设置了默认值true，只有当node上没有该属性或者该属性值为undefined时该值才生效.



#### 为非同名局部变量赋值

如果希望使用不同命名的局部变量来存储对象属性的值，ECMAScript 6中的一个扩展语法可以满足你的需求，这个语法与完整的对象字面量属性初始化程序的很像

```javascript
let node = {
  type: 'Identifier',
  name: 'foo'
};

let {type: localType, name: localName} = node;

console.log(localType); //'Identifier'
console.log(lcoalName); //'foo'
```

type: localType语法的含义是读取名为type的属性并将其值存储在变量localType中，这种语法实际上与传统对象字面量的语法相悖，原来的语法名称在冒号左边，值在右边；现在值在冒号右边，而对象的属性名在左边。

当使用其他变量名进行赋值时也可以添加默认值，只需在变量名后添加等号和默认值即可：

```javascript
let node = {
  type: 'Identifier'
};

let {type: localType, name:lcoalName = 'bar'} = node;

console.log(localType); //'Identifier'
console.log(localName); //'bar'
```



#### 嵌套解构对象

解构嵌套对象仍然与对象字面量的语法相似，可以将对象拆解以获取你想要的信息：

```javascript
let node = {
  type: 'Identifier',
  name: 'foo',
  loc: {
    start: {
      line: 1,
      colum: 1
    },
    end: {
      line: 1,
      cloumn: 4
    }
  }
};

let {loc: { start }} = node;
```

在上面的解构示例中，<span style="text-decoration:underline double red;">所有冒号前的标识符都代表在对象中的检索位置，其右侧为被赋值的变量名；如果冒号后是花括号，则意味着要赋予的最终值嵌套在对象内部更深的层级中。</span>

更进一步，也可以使用一个与对象属性名不同的局部变量名：

```javascript
let node = {
  type: 'Identifier',
  name: 'foo',
  loc: {
    start: {
      line: 1,
      column: 1
    },
    end: {
      line: 1,
      column: 4
    }
  }
};

//提取node.loc.start

let {loc: {start: localStart}} = node;

console.log(localStart); //1
console.log(localStart); //1
```

**语法警示**

在使用嵌套解构功能时请注意，你很可能无意中创建了一个无效表达式。内空花括号在对象解构的语法中是合法的，然而这条语句却什么都不会做：

```javascript
//未声明任何变量
let {loc: {}} = node;
```



### 1. 数组解构

#### 解构

数组解构使用的是数组字面量，且解构操作全部在数组内完成，而不是像对象字面量语法一样使用对象的命名属性.

```javascript
let colors = ['red', 'green', 'blue'];

let [firstColor, secondColor] = colors;

console.log(firstColor);  //'red'
console.log(secondColor); //'green'
```

<u>在数组解构语法中，我们通过值在数组中的位置进行选取，且可以将其存储在任意变量中，未显式声明的元素都会直接被忽略。</u>切记，在这个过程中，数组本身不会发生任何变化。

在解构模式中，也可以直接省略元素，只为感兴趣的元素提供变量名。举个例子，如果你只想取数组中的第3个值，则不需要提供第一个和第二个元素的变量名称：

```javascript
let colors = ['red', 'green', 'blue'];
let [,, thirdColor] = colors;

console.log(thirdColor); //'blue'
```

当通过var、let或const声明数组解构的绑定时，必须要提供一个初始化程序，这一条规定与对象解构的规定类似。

#### 解构赋值

数组解构也可用于赋值上下文，但不需要用小括号包裹表达式，这一点与对象解构的约定不同。

```javascript
let colors = ['red', 'green', 'blue'],
    firstColor = 'black',
    secondColor = 'purple';

[firstColor, secondColor] = colors;

console.log(firstColor); //'red'
console.log(secondColor); //'green'
```

数组解构语法还有一个独特的用例：交换两个变量的值。如果要在ECMAScript 5中交换两个变量的值，则须引入第三个临时变量：

```javascript
//ES5
let a = 1,
    b = 2,
    temp;

temp = a;
a = b;
b = temp;

//ES6
let a = 1,
    b = 2;
[a, b] = [b, a];
```

**注意**

如果右侧数组解构赋值表达式的值为null或undefined，则会导致程序抛出错误，这一特性与对象解构赋值很相似。



#### 默认值

可以在数组解构赋值表达式中为数组中的任意位置添加默认值，当指定位置的属性不存在或其值为undefined时使用默认值

```javascript
let colors = ['red'];
let [ firstColor, secondColor = 'green'] = colors;

console.log(firstColor); //'red'
console.log(secondColor); //'green'
```



#### 嵌套数组解构

嵌套数组解构与嵌套对象解构的语法类似，在原有的数组模式中插入另一个数组模式，即可将解构过程深入到下一个层级

```javascript
let colors = ['red', ['green', 'lightgreen'], 'blue'];

let [firstColor, [secondColor]] = colors;

console.log(firstColor); //'red'
console.log(secondColor); //'green'
```



#### 不定元素

在数组解构语法中有一个和函数不定参数相似的概念：不定元素。在数组中，可以通过...语法将数组中的其余元素赋值给一个特定的变量.

在被解构的数组中，不定元素必须为最后一个条目，在后面继续添加逗号会导致程序抛出语法错误

```javascript
let colors = ['red', 'green', 'blue'];

let [firstColor, ...restColors ] = colors;

console.log(firstColor); //'red'
console.log(restColors); //['green', 'blue']
```

**使用**

* 不定元素语法有助于从数组中提取特定元素并保证其余元素可用
* 数组复制

```javascript
//ES5实现数组复制功能-concat
let colors = ['red', 'green', 'blue'];
let clonedColors = colors.concat();

console.log(clonedColors); //['red', 'green', 'blue']

//ES6的数组复制
let colors = ['red', 'green', 'blue'];
let [...clonedColors] = colors;

console.log()


```

比较这个方法与concat()方法的可读性，二者孰优孰劣是一个见仁见智的问题



### 2. 混合解构

可以混合使用对象解构和数组解构来创建更多复杂的表达式，如此一来，可以从任何混杂着对象和数组的数据解构中提取你想要的信息

```javascript
let node = {
  type: 'Identifier',
  name: 'foo',
  loc: {
    start: {
      line: 1,
      column: 1
    },
    end: {
      line: 1,
      column: 4
      }
  },
  range: [0, 3]
};

let {
  loc: {start},
  range: [startIndex]
} = node;

console.log(start.line); //1
console.log(start.column); //1
console.log(startIndex); //0
```

解构模式中的loc:和range:仅代表它们在node对象中所处的位置（也就是该对象的属性）。当你使用混合解构的语法时，则可以从node提取任意想要的信息。这种方法极为有效，<u>尤其是当你从JSON配置中提取信息时，不再需要遍历整个结构了。</u>



### 3. 解构参数

#### 0. 基本使用

当定义一个接受大量可选参数的JavaScript函数时，我们通常会创建一个可选对象，将额外的参数定义为这个对象的属性

```javascript
//options的属性标识其他参数
function setCookie(name, value, options) {
  options = options || {};
  
  let secure = options.secure,
      path = options.path,
      domain = options.domain,
      expires = options.expires;
  
  //设置cookie代码
}

//第三个参数映射到options中
setCookie('type', 'js', {
  secure: true,
  expires: 6000
})
```

> 许多JavaScript库中都有类似的setCookie()函数，而在示例函数中，name和value是必需参数，而secure、path、domain和expires则不然，这些参数相对而言没有优先级顺序，将它们列为额外的命名参数也不合适，此时为options对象设置同名的命名属性是一个很好的选择。
>
> 现在的问题是，仅查看函数的声明部分，无法辨识函数的预期参数，必须通过阅读函数体才可以确定所有参数的情况。

如果将options定义为解构参数，则可以更清晰地了解函数预期传入的参数。解构参数需要使用对象或数组解构模式代替命名参数

```javascript
function setCookie(name, value, {secure, path, domain, expires}) {
  //函数体
}

setCookie('type', 'js', {
  type: true,
  expires: 6000
})
```

这个函数与之前示例中的函数具有相似的特性，只是现在使用<u>解构语法代替了第3个参数来提取必要的信息</u>，其他参数保持不变，但是对于调用setCookie()函数的使用者而言，解构参数变得更清晰了

**解构参数可以使用默认值、混合对象和数组的解构模式及非同名变量存储提取出来的信息。**



#### 1. 必须传值的解构参数

解构参数有一个奇怪的地方，默认情况下，如果调用函数时不提供被解构的参数会导致程序抛出错误

```javascript
//调用上一个示例中的setCookit()函数，如果不传递第3个参数，会报错
setCookie('type', 'js');
```

缺失的第3个参数，其值为undefined，而解构参数只是将解构声明应用在函数参数的一个简写方法，其会导致程序抛出错误。

<u>如果解构赋值表达式的右值为null或undefined，则程序会报错</u>，同理，若调用setCookie()函数时不传入第3个参数，也会导致程序抛出错误。

如果解构参数是必需的，大可忽略掉这些问题；但如果希望将解构参数定义为可选的，那么就必须为其**提供默认值**来解决这个问题：

```javascript
function setCookie(name, value, {secure, path, domain, expires} = {}) {
  //...
}  
```



#### 2. 解构参数的默认值

可以为解构参数指定默认值，就像在解构赋值语句中做的那样，只需在参数后添加等号并且指定一个默认值即可

```javascript
function setCookie(name, value, {
  secure = false,
  path = '/',
  domain = 'exmaple.com',
  expires = new Date(Date.now() + 3600000000)
}) {
  //...
}
```

 在这段代码中，解构参数的每一个属性都有默认值，从而无须再逐一检查每一个属性是否都有默认值。

然而，这种方法也有很多缺点：

* 首先，函数声明变得比以前复杂了；

* 其次，<u>如果解构参数是可选的，那么仍然要给它添加一个空对象作为参数</u>，否则像setCookie（"type"，"js"）这样的调用会导致程序抛出错误。

这里建议对于对象类型的解构参数，为其赋予相同解构的默认参数：

```javascript
function setCookie(name, value, {
  secure = false,
  path = '/',
  domain = 'example.com',
  expires = new Date(Date.now() + 3600000000)
} = {
  secure = false,
  path = '/',
  domain = 'example.com',
  expires = new Date(Date.now() + 3600000000)
}) {
  //...
}
```

现在函数变得更加完整了，第一个对象字面量是解构参数，第二个为默认值。但是这会造成非常多的**代码冗余**，你可以将默认值提取到一个**独立对象**中，并且使用该对象作为解构和默认参数的一部分，从而消除这些冗余

```javascript
const setCookieDefaults = {
  secure: false,
  path: '/',
  domain: 'example.com',
  expires: new Date(Date.now() + 3600000000)
};

function setCookie(name, value, {
  secure = setCookieDefaults.secure,
  path = setCookieDefaults.path,
  domain = setCookieDefaults.domain,
  expires = setCookieDefaults.expires
} = setCookieDefaults) {
  //...
}
```

在这段代码中，默认值已经被放到setCookieDefaults对象中，除了作为默认参数值外，在解构参数中可以直接使用这个对象来为每一个绑定设置默认参数。使用解构参数后，不得不面对处理默认参数的复杂逻辑，但它也有好的一面，如果要改变默认值，可以立即在setCookieDefaults中修改，<u>改变的数据将自动同步到所有出现过的地方。</u>





### 字符串与正则相关方法

#### str.search()

```javascript 
- 可以去字符串中搜索指定的内容
- 该方法可以传递一个正则表达式
- 可以检查字符串中是否含有符合正则表达式的内容

- 返回值
- 返回第一个符合条件的内容的索引
- 如果没有,返回-1


let str = 'Hello13764567901Atguigu';
let result = str.search(/1[3-9][0-9]{9}/);
console.log(result);// 返回值是5


```



#### str.split()

```javascript
- 用来将一个字符串拆分成一个数组
- 可以根据正则表达式去拆字符串

let str = '孙悟空abc猪八戒adc沙和尚';
result = str.split(/a[bd]c/); //["孙悟空", "猪八戒", "沙和尚"]


```



#### str.replace()

```javascript
- 用来使用新的内容替换字符串中的旧内容
- str.replace(新内容, 旧内容);
- 参数:
	1.被替换的内容(支持正则表达式)
	2.新的内容
- 注意:
默认情况下,replace()只会替换第一个符合条件的内容,如果希望替换所有的内容,则需要使用全局匹配模式 g

str = '孙悟空abc猪八戒Adc沙和尚';
// result = str.replace('孙悟空','牛魔王');
result = str.replace(/a[bd]c/g,'哈哈');
result = str.replace(/a[bd]c/ig,'哈哈'); 



```



#### str.match()

```javascript
- 可以将字符串中符合正则表达式中的内容提取出来
- 它会将匹配到的结果保存到一个数组中返回
链接: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match

str = 'dasdhasjdks13567890456gjkslafjwieoruqiowrtqi13675689042fjaskfgj13890979681aksfjkaf'
result = str.match(/1[3-9][0-9]{9}/g);
// alert(result[0]);
// alert(result[1]);
```











## JSON

### 1.介绍

**`JSON`**对象包含两个方法: 用于解析 [JavaScript Object Notation](http://json.org/) ([JSON](https://developer.mozilla.org/zh-CN/docs/Glossary/JSON)) 的 `parse()` 方法，以及将对象/值转换为 JSON字符串的 `stringify()` 方法。除了这两个方法, JSON这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。

**JSON** 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 。它基于 JavaScript 语法，但与之不同：**JavaScript不是JSON，JSON也不是JavaScript**。



### 2. JSON VS Javascript

| JS类型     | JSON的不同点                                                 |
| ---------- | ------------------------------------------------------------ |
| 对象  数组 | 属性名称必须是双引号括起来的字符串; 最后一个属性后不能有逗号 |
| 数值       | 禁止出现前导零 （ JSON.stringify 方法自动忽略前导零，而在 JSON.parse 方法中将会抛出 SyntaxError）；如果有小数点, 则后面至少跟着一位数字。 |
| 字符串     | 只有有限的一些字符可能会被转义；禁止某些控制字符； Unicode 行分隔符 （[U+2028](https://unicode-table.com/cn/2028/)）和段分隔符 （[U+2029](https://unicode-table.com/cn/2029/)）被允许 ; 字符串必须用双引号括起来。 |



### 3. 方法

#### 1 JSON.parse()

> 解析JSON字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性, 在返回之前进行某些修改。

**语法**

```js
JSON.parse(text[, reviver])

//参数
text 要被解析成 JavaScript 值的字符串，关于JSON的语法格式
reviver 可选 转换器, 如果传入该参数(函数)，可以用来修改解析生成的原始值，调用时机在 parse 函数返回之前。
```



**返回值**

```js
对象
如果传入的字符串不符合JSON规范，　则抛出SyntaxError错误
```



**示例**

```js
JSON.parse('{}'); //{}
JSON.parse('true'); //true
JSON.parse('"foo"'); //"foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');   
```



**reviver函数**

> 如果指定了 `reviver` 函数，则解析出的 JavaScript 值（解析值）会经过一次转换后才将被最终返回（返回值）
>
> 更具体点讲就是：解析值本身以及它所包含的所有属性，会按照一定的顺序（从最最里层的属性开始，一级级往外，最终到达顶层，也就是解析值本身）分别的去调用 `reviver` 函数，在调用过程中，当前属性所属的对象会作为 `this` 值，当前属性名和属性值会分别作为第一个和第二个参数传入 `reviver` 中。如果 `reviver` 返回 `undefined`，则当前属性会从所属对象中删除，如果返回了其他值，则返回的值会成为当前属性新的属性值。
>
> 当遍历到最顶层的值（解析值）时，传入 `reviver` 函数的参数会是空字符串 `""`（因为此时已经没有真正的属性）和当前的解析值（有可能已经被修改过了），当前的 `this` 值会是 `{"": 修改过的解析值}`，在编写 `reviver` 函数时，要注意到这个特例。（这个函数的遍历顺序依照：从最内层开始，按照层级顺序，依次向外遍历）

```js
JSON.parse('{"p": 5}', function(k,v) {
  if(k === '') return v; // 如果到了最顶层，则直接返回属性值，
  return v*2;						// 否则将属性值变为原来的 2 倍。
})											// { p: 10 }

JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', function (k, v) {
    console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
                    // 最后一个属性名会是个空字符串。
    return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```







#### 2 JSON.stringify()

**定义**

`JSON.stringify()` 方法将一个 JavaScript <u>对象或值</u>转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性。

**语法**

```js
JSON.stringify(value[, replacer[, space]])
```

`value` 将要序列化成 一个 JSON 字符串的值

`replacer` **可选**

* 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；
* 如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；
* 如果该参数为 <u>null 或者未提供</u>，则对象所有的属性都会被序列化。

`space` **可选**

* 指定缩进用的空白字符串，用于美化输出（pretty-print）；
* 如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；
* 如果该参数为字符串（当字符串长度超过10个字母，取其前10个字母），该字符串将被作为空格；
* 如果该参数没有提供（或者为 null），将没有空格。

**描述**

`JSON.stringify()`将值转换为相应的JSON格式：

- 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
- 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
- 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
- <u>`undefined`</u>、<u>任意的函数</u>以及 <u>symbol 值</u>，
  - 出现在非数组对象的属性值中时, 在序列化过程中会被忽略(属性和属性值都会被忽略)
  - 出现在数组中时,被转换成 `null`
  - 函数、undefined 被单独转换时，会返回 undefined.(Symbol()也返回undeinfed,但一般都是放在对象中用作属性键)

- 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
- 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 `replacer` 参数中强制指定包含了它们。
- Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。(Date.now()数值格式)
- NaN 和 Infinity 格式的数值及 null 都会被当做 null。
- 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。



**实例**

```js
JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify({x: undefined, y: Object, z: Symbol("")});
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);
// '[null,null,null]'

JSON.stringify({[Symbol("foo")]: "foo"});
// '{}'

JSON.stringify({[Symbol.for("foo")]: "foo"}, [Symbol.for("foo")]);
// '{}'

JSON.stringify(
  {[Symbol.for("foo")]: "foo"},
  function (k, v) {
    if (typeof k === "symbol"){
      return "a symbol";
    }
  }
);


// undefined

// 不可枚举的属性默认会被忽略：
JSON.stringify(
  Object.create(
    null,
    {
      x: { value: 'x', enumerable: false },
      y: { value: 'y', enumerable: true }
    }
  )
);

// "{"y":"y"}"
```

**replace函数**

replacer 参数可以是<u>一个函数或者一个数组</u>。作为函数，它有两个参数，键（key）和值（value），它们都会被序列化。

在开始时, `replacer` 函数会被传入一个空字符串作为 `key` 值，代表着要被 `stringify` 的这个对象。随后每个对象或数组上的属性会被依次传入。 

函数应当返回JSON字符串中的value, 如下所示:

- 如果返回一个 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number), 转换成相应的字符串作为属性值被添加入 JSON 字符串。
- 如果返回一个 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String), 该字符串作为属性值被添加入 JSON 字符串。
- 如果返回一个 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean), "true" 或者 "false" 作为属性值被添加入 JSON 字符串。
- 如果返回任何其他对象，该对象递归地序列化成 JSON 字符串，对每个属性调用 replacer 方法。除非该对象是一个函数，这种情况将不会被序列化成 JSON 字符串。
- 如果返回 undefined，该属性值不会在 JSON 字符串中输出。

**注意:** 不能用 replacer 方法，从数组中移除值（values），如若返回 undefined 或者一个函数，将会被 null 取代。

replacer是一个函数

```javascript
function replacer(key, value) {
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

let foo = {foundation: 'Mozilla', model: 'box', week: 45, transprot: 'cart', month: 7};

let jsonString = JSON.stringify(foo, replacer);

//'{"week": 45, "month": 7}'
```

如果 `replacer` 是一个数组，数组的值代表将被序列化成 JSON 字符串的属性名

```javascript
JSON.stringify(foo, ['week', 'month']);
//'{"week":45,"month":7}', 只保留 “week” 和 “month” 属性值。
```



**space参数**

* `space `参数用来控制结果字符串里面的间距。
* 如果是一个数字, 则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多10个空格）；
* 如果是一个字符串，则<u>每一级别</u>会比上一级别多缩进该字符串（或该字符串的前10个字符）。

```javascript
JSON.stringify({a:2}, null, ' '); //'{\n "a": 2\n}'
```

使用制表符(\t)来缩进

```javascript
JSON.stringify({ uno: 1, dos : 2 }, null, '\t')
// '{            \
//     "uno": 1, \
//     "dos": 2  \
// }'
```

**toJSON()方法**

如果一个被序列化的对象拥有 `toJSON` 方法，那么该 `toJSON` 方法就会覆盖该对象默认的序列化行为：不是该对象被序列化，而是<u>调用 `toJSON` 方法后的返回值会被序列化</u>

```javascript
let obj = {
  foo: 'foo',
  toJSON: function() {
    return 'bar';
  }
};

JSON.stringify(obj); //'{"bar"}'
JSON.stringify({x: obj}); //'{"x":"bar"}'
```





**bug**

```js
//一个组件为了保留一份 JSON 对象，使用 JSON.stringify 将其转换成字符串, 后面使用 JSON.parse 方法之后，发现数据有所变化
let obj = {
  name: 'Gopal',
  age: Infinity
}
let originObj = JSON.stringify(obj)
console.log(originObj) // {"name":"Gopal","age":null}
```

```js
//解决方法
方法1: 直接赋值, 重新给age属性赋值
方法2:
function censor(key, value) {
  if(key === 'Infinity') {
    return "Infinity"
  }
  return value;
}

let b = JSON.stringify(a ,censor);
let c = JSON.parse(
	b,
  function (key, value) {
    return value === "Infinity" ? Infinity : value;
  }
)
```



### 4. JSON.stringify()实例

#### 1. 调试对象

使用 JSON.stringify()先将对象转换为字符串

```javascript

//Initialize a User object
const user = {
"name" : "蔡生",
"age" : 26
}
console.log(user);
// [object Object]


console.log(JSON.stringify(user));
//"{"name": "蔡生", "age": 26}"
```

#### 2. 存储localStorage对象

存储用户创建的一个对象，并且，即使在浏览器被关闭后仍能恢复该对象。

```javascript
// 创建一个示例数据
var session = {
    'screens' : [],
    'state' : true
};
session.screens.push({"name":"screenA", "width":450, "height":250});
session.screens.push({"name":"screenB", "width":650, "height":350});
session.screens.push({"name":"screenC", "width":750, "height":120});
session.screens.push({"name":"screenD", "width":250, "height":60});
session.screens.push({"name":"screenE", "width":390, "height":120});
session.screens.push({"name":"screenF", "width":1240, "height":650});

// 使用 JSON.stringify 转换为 JSON 字符串
// 然后使用 localStorage 保存在 session 名称里
localStorage.setItem('session', JSON.stringify(session));

// 然后是如何转换通过 JSON.stringify 生成的字符串，该字符串以 JSON 格式保存在 localStorage 里
var restoredSession = JSON.parse(localStorage.getItem('session'));

// 现在 restoredSession 包含了保存在 localStorage 里的对象
console.log(restoredSession);
```

#### 3. 数组去重

对数组中的对象进行去重

```javascript
function unique(arr) {
  let unique = {};
  arr.forEach(item => unique[JSON.stringify(item)]) = item;
  arr = Object.keys(unique).map(u => JSON.parse(u));
  
  return arr;
}
```

以上这种方案存在问题, {x:1,y:2}与{y:2,x:1}通过 JSON.stringify 字符串化值不同，但显然他们是重复的对象。

```javascript
function unique2(arr) {
  let unique = {};
  arr.forEach(item => {
    let newData = {};
    Object.keys(item).sort().forEach(key => newData[key] = item[key]);
    unique[JSON.stringify(newData)] = item;
  })
  return arr = Object.keys(unique).map(item => JSON.prase(item));
}
```

#### 3.1 数组中对象属性排序 !!!!????

```javascript
//https://mp.weixin.qq.com/s?__biz=MzAxODE4MTEzMA==&mid=2650078414&idx=1&sn=f8564c1bfea10a3aa9c19ed08eeed830&chksm=83da61abb4ade8bd3aecc2e501d6eb7a27c078af3255ea57aae6ed413534e5844d8544077046&scene=21#wechat_redirect


JSON.stringify(obj, Object.keys(obj).sort())
JSON.stringify(obj, ['a', 'b', 'c'])
JSON.stringify(Object.keys(obj).sort().reduce((acc, cur) => acc[cur] = obj[k], {}) )
```

#### 3.2 完整的数组中对象去重(未完成!!!!)

```javascript
//第一种
function unique(arr) {
	let unique = {};
  arr.forEach(item => unique[JSON.stringify(item, Object.keys(item).sort())] = item)
  return arr = Object.keys(unique).map(item => JSON.parse(item))
}


//第二种
function unique(arr) {
  let unique = {};
  arr.forEach(item => unique[orderedJsonStringify(item)] = item);
  return arr = Object.keys(unique).map(item => JSON.parse(item))
}

function orderedJsonStringify(item) {
  return JSON.stringify(Object.keys(item).sort().reduce((acc, cur) => acc[cur] = item[cur]))
}


```





#### 4. replacer函数的使用 ????

还是上面这道题，我们可以在第二个参数上解决对象属性的顺序问题，给它加上一个数组['name','author']

```javascript

function unique(arr) {
  let unique = {};
  arr.forEach(item => unique[JSON.stringify(item, ['name', 'author'])] = item )
  return arr = Object.keys(unique).map(item => JSON.parse(item));
}
```



#### 5. 实现深拷贝 ????

```javascript
function deeppClone(data) {
  return JSON.parse(JSON.stringify(data))
}
```



#### 6. 判断数组是否包含某对象,或者判断对象是否相等

```javascript
//判断数组中是否包含某对象
let data = [
    {name:'echo'},
    {name:'前端开发博客'},
    {name:'蔡生'},
    ],
    val = {name:'蔡生'};
JSON.stringify(data).indexOf(JSON.stringify(val)) !== -1;//true

//判断两数组/对象是否相等
let a = [1,2,3],
    b = [1,2,3];
JSON.stringify(a) === JSON.stringify(b);//true
```







### 5. 实例

#### 1.删除json中的转义字符右斜杠 ??

```js
JSON.stringify(data).toString.replace(new RegExp("\\\\\"","gm"),"\""))

data.replaceAll('\\','');
```

#### 2 判断对象/数组是否相等

```js
let a = [1,2,3],
    b = [1,2,3];
JSON.stringify(a) === JSON.stringify(b);// true  

//Object.is()
//toString()  隐患: 数字1和字符串1会被认为相等
```



#### 3 localStorage/sessionStorage存储对象

>  localStorage/sessionStorage 只可以存储字符串，当我们想存储对象的时候，需要使用 JSON.stringify 转换成字符串，获取的时候再 JSON.parse

```js
// 存
function setLocalStorage(key,val) {
    window.localStorage.setItem(key, JSON.stringify(val));
};
// 取
function getLocalStorage(key) {
    let val = JSON.parse(window.localStorage.getItem(key));
    return val;
};
```



#### 4 实现对象深拷贝

```js
无法实现对含有方法的对象的拷贝
```



#### 5 路由(浏览器地址)传参

因为浏览器传参只能通过字符串进行，所以也是需要用到 JSON.stringify



#### 6. 存储函数

> https://mp.weixin.qq.com/s/1Sbr_GGm5k-L0oq4_cfQ3w





## 正则表达式

### 0.学习资源

| 序号 | 名称                                                         | 地址                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | LEARN REGEX THE EASY WAY                                     | [github](https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md) |
| 2    | MDN                                                          | MDN                                                          |
| 3    | https://github.com/cdoco/common-regex                        |                                                              |
| 4    | https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/regular-expression-language-quick-reference?redirectedfrom=MSDN#Anchor_0 |                                                              |
| 5    | JavaScript正则表达式迷你书                                   | https://github.com/qdlaoyao/js-regex-mini-book               |

> [Regular expressions - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
>
> [Deprecated and obsolete features - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp_properties)

### 0.概要

正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 的 [`exec`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 和 [`test`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 方法, 以及 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 的 [`match`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)、[`matchAll`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)、[`replace`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)、`replaceAll`, [`search`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) 和 [`split`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 方法。



### 1. 创建方式

#### 1.1 literal

当正则表达式保持不变时，使用此方法可获得更好的性能

```javascript
let re = /ab+c/;
```

#### 1.2 constructor

如果正则表达式将会改变，或者它将会从用户输入等来源中动态地产生，就需要使用构造函数来创建正则表达式。

```javascript
let re = new RegExp('ab+c');
let re2  = new RegExp(/ab+c/)
```

### 2.构造函数中的标志参数(flags)

从 ECMAScript 6 开始，当第一个参数为正则表达式而第二个标志参数存在时，`new RegExp(/ab+c/, 'i')` 不再抛出 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) （`"从另一个RegExp构造一个RegExp时无法提供标志"`）的异常，取而代之，将使用这些参数创建一个新的正则表达式。

当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 `\`）



| 标志 | 描述                                                      |
| :--- | :-------------------------------------------------------- |
| `g`  | 全局搜索。                                                |
| `i`  | 不区分大小写搜索。                                        |
| `m`  | 多行搜索。                                                |
| `s`  | 允许 `.` 匹配换行符。                                     |
| `u`  | 使用unicode码的模式进行匹配。                             |
| `y`  | 执行“粘性(`sticky`)”搜索,匹配从目标字符串的当前位置开始。 |



### 3. 编写正则表达式模式

#### 3.1 使用简单模式

简单模式是由你想直接找到的字符构成。比如，`/abc/` 这个模式就能且仅能匹配 "abc" 字符按照顺序同时出现的情况。

```javascript
let re = /abc/;
let result = re.exec("Hi, do you know your abc's?");
console.log(result);
//['abc', index: 21, input: "Hi, do you know your abc's?", groups: undefined]

let result0 = re.exec("Hi, do you know your abc's? and your abcs");
console.log(result0);
//['abc', index: 21, input: "Hi, do you know your abc's? and your abcs", groups: undefined]

let resul2 = re.exec( "Grab crab" );
console.log(result2);
//null
```

#### 3.2 使用特殊字符

当你需要匹配一个不确定的字符串时，比如寻找一个或多个 "b"，或者寻找空格，可以在模式中使用特殊字符。

| Characters / constructs                                      | Corresponding article                                        | Desc                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| `\`, `.`, `\cX`, `\d`, `\D`, `\f`, `\n`, `\r`, `\s`, `\S`, `\t`, `\v`, `\w`, `\W`, `\0`, `\xhh`, `\uhhhh`, `\uhhhhh`, `[\b]` | 字符集<br />[Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes) | 区分不同类型的字符，例如区分字母和数字。                     |
| `^`, `$`, `x(?=y)`, `x(?!y)`, `(?<=y)x`, `(?<!y)x`, `\b`, `\B` | 断言   [Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions) | 表示一个匹配在某些条件下发生。断言包含先行断言、后行断言和条件表达式 |
| `(x)`, `(?:x)`, `(?<Name>x)`, `x|y`, `[xyz]`, `[^xyz]`, `\*Number*` | 组合范围   [Groups and ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) | 表示表达式字符的分组和范围。                                 |
| `*`, `+`, `?`, `x{*n*}`, `x{*n*,}`, `x{*n*,*m*}`             | 量词   [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers) | 表示匹配的字符或表达式的数量。                               |
| `\p{*UnicodeProperty*}`, `\P{*UnicodeProperty*}`             | Unicode转义  [Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) | 基于 unicode 字符属性区分字符。例如大写和小写字母、数学符号和标点。 |



##### 3.2.1 字符集

1.语法

| 字符 | 含义                                                         |
| ---- | ------------------------------------------------------------ |
| `\`  | 1. 在非特殊字符之前的反斜杠表示下一个字符是特殊字符，不能按照字面理解<br />2. 在特殊字符之前的反斜杠表示下一个字符不是特殊字符，应该按照字面理解.请参阅 "转义（Escaping）" 部分<br />3. 如果你想将字符串传递给 RegExp 构造函数，不要忘记在字符串字面量中反斜杠是转义字符。所以为了在模式中添加一个反斜杠，你需要在字符串字面量中转义它。<br />`/[a-z]\s/i` 和 `new RegExp("[a-z]\\s", "i")` 创建了相同的正则表达式：一个用于搜索后面紧跟着空白字符（`\s` 可看后文）并且在 a-z 范围内的任意字符的表达式。<br />为了通过字符串字面量给 RegExp 构造函数创建包含反斜杠的表达式，你需要在字符串级别和正则表达式级别都对它进行转义。例如 `/[a-z]:\\/i` 和 `new RegExp("[a-z]:\\\\","i")` 会创建相同的表达式，即匹配类似 "C:\" 字符串。 |



| 字符串类                                               | 含义                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| `.`                                                    | 1.匹配出终止符(line terminators)之外的任意单字符<br />2. 在字符集中, 点号匹配一个字符点而不是原先的特殊意义.<br />3. 注意,'m' multiline标志不会改变点符号的行为,所以可以在多行中匹配一个模式, 可以使用 `[^]`字符集,匹配任何字符包括新行<br />4. ES2018添加`s` 'dotAll'标志, 允许点号也能匹配终止符. |
| `\d`                                                   | 1. 匹配任何阿拉伯数字<br />2. 相当于[0-9]. 例如, `/\d/`or /[0-9]/在套件数字'B2 is the suite number'中匹配'2' |
| `\D`                                                   | 1. 匹配任何非阿拉伯数字字符.<br />2. 相当于\[^0-9].  例如: `/\D/` 或 /\[^0-9]/ 在'B2 is the suite number' 匹配 'B' |
| `\w`                                                   | 1. 匹配基本拉丁字母表中任何字母数字字符,包括下划线.<br />2. 相当于`[A-Za-z0-9_]`  例如: `/\w/`匹配'apple'中的'a', '$5.28'中的'5', '3D'中的'3', "Émanuel"中的'm' |
| `\W`                                                   | 1. 匹配基本拉丁字母表中任何非字母的字符<br />2. 相当于`[^A-Za-z0-9_]` 例如, `/\W/`或者`/[^A-Za-z0-9_]/` 匹配"50%"中的'%', "Émanuel"中的"É" |
| `\s`                                                   | 1. 匹配一个空格字符,包括空格, 缩进, 换页(form feed), 换行(line feed), 和其他Unicode 空格.<br />2. 相当于`[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`<br />3. 例如, `/\s\w*/`匹配"foo bar"中的'bar' |
| `\S`                                                   | 1. 匹配一个字符而非空格<br />2. 相当于 `[^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`<br />3. 例如, `/\S\w*/`匹配"foo bar"中的'foo' |
| `\t`                                                   | 匹配一个水平制表符(a horizontal tab)                         |
| `\r`                                                   | 匹配一个回车符(a carriage return)                            |
| `\n`                                                   | 匹配一个换行符(a linefeed)                                   |
| `\v`                                                   | 匹配一个垂直制表符(a vertical tab)                           |
| `\f`                                                   | 匹配一个换页符(a form-feed)                                  |
| `[\b]`                                                 | 匹配一个退格(a backspace).                                   |
| `\0`                                                   | 匹配一个NULL字符. 不要在之后添加其他数字, 因为`\0`是一个八进制转义序列 |
| `\cX`    ????                                          | 1. 当X是处于A到Z之间的字符的时候，匹配字符串中的一个控制符<br />2. 例如, `/\cM\cJ/`匹配'\r\n' |
| `\xhh`  ????                                           | 1. 用代码 `hh`(两个16进制数字)匹配字符                       |
| `\uhhhh`  ????                                         | 匹配值为hhh（四个十六进制数字）的UTF-16编码单元。            |
| \`u{hhhh}` or `\u{hhhhh}  ????                         | (只有当u标志被设置时。)匹配Unicode值为U+hhhh或U+hhhhh（十六进制数字）的字符。 |
| `\p{*UnicodeProperty}`, `\P{*UnicodeProperty*}`   ???? | 根据Unicode字符的属性来匹配一个字符（例如，只匹配emoji字符，或日语片假名字符，或中文/日文汉字/汉字字符，等等）。 |
| `\`                                                    | 表示以下字符应被特别处理，或被 "转义"。<br />1. 对于通常按字面意思处理的字符，表示下一个字符是特殊的，不能按字面意思解释。<br />2. 对于通常被特殊处理的字符，表示下一个字符不特殊，应按字面意思解释<br />3. 从字面上匹配这个字符, 可以用它本身来转义. 换句话说, 用`/\\/`来搜索`\` |



2.实例

寻找一系列数字

```javascript
let randomData = '015 354 8787 687351 3512 8735';
let regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));

//['8787', '3512', '8735']
```

循环以'A'开头的单词

```javascript
var aliceExcerpt = "I’m sure I’m not Ada,’ she said, ‘for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all.";

var regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```



3从Unicode字符中找单词

```javascript
var nonEnglishText = "Приключения Алисы в Стране чудес";
var regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
[ 'Приключения', 'Алисы', 'в', 'Стране', 'чудес' ]
```



##### 3.2.2 断言

断言包括边界，它表示行和词的开头和结尾，以及以某种方式表示可能存在匹配的其他模式（包括前看、后看和条件表达式）。

边界类型断言

| Characters | Meaning                                                      |
| ---------- | ------------------------------------------------------------ |
| `^`        | 1. 匹配输入的开头。<br />2. 如果多行标志被设置为 "true"，也会在换行符之后立即匹配。例如，/^A/不匹配 "an A "中的 "A"，但匹配 "An A "的第一个 "A"。<br />3. 当 '`^`' 作为第一个字符出现在一个字符集合模式`[^]`时，它将会有不同的含义 |
| `$`        | 匹配输入的结束。如果多行标志被设置为 true，那么也匹配换行符前的位置 |
| `\b`       | 1. 匹配一个词的边界。这是指一个单词字符后面或前面没有另一个单词字符的位置，如一个字母和一个空格之间。<br />2. 请注意，一个匹配的词的边界不包括在匹配中。换句话说，一个匹配的单词边界的长度为零。 |



其他断言

| Characters | Meaning                                      |
| ---------- | -------------------------------------------- |
| `x(?=y)`   | 先行断言: 只有当'x'后跟'y'才匹配'x'          |
| `x(?!y)`   | 非先行断言: 只有当'x'后面不跟着'y'才匹配'x'  |
| `(?<=y)x`  | 后行断言: 只有'x'前面是'y'时,匹配'x'         |
| `(?<!y)x`  | 非后行断言: 只有'x'前面不是'y'时候,才匹配'x' |



案例

使用`^`操作符匹配输入的开始

```javascript
let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

let fruitsStartsWithA = fruits.filter(fruit => /^A/.test(fruit));
console.log(fruitsStartsWithA); //[ 'Apple', 'Avocado' ]

let fruitsStartsWithNotA = fruits.filter(furit => /^[^A]/.test(fruit));
console.log(fruitsStartsWithNotA); //[ 'Watermelon', 'Orange', 'Strawberry' ]
```

匹配一个单词边界

```javascript
let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
let enEdSelection = fruitsWithDescription.filter(descr => /(en|ed)\b/.test(descr));

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

前行断言

```javascript
console.log('First test'.match(regex)); // [ 'First' ]
console.log('First peach'.match(regex)); // null
console.log('This is a First test in a year.'.match(regex)); // [ 'First' ]
console.log('This is a First peach in a month.'.match(regex)); // null
```

非前行断言

```javascript
console.log(/\d+(?!\.))/g.exec('3.141'); //['141', index: 2, input: '3.141']
```

断言和范围中'?!'组合使用的不同含义 ????

```javascript
let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";

// Different meaning of '?!' combination usage in Assertions /x(?!y)/ and  Ranges /[^?!]/
let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

let selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
```

后行断言

```javascript
let oranges = ['ripe orange A ', 'green orange B', 'ripe orange C',];

let ripe_oranges = oranges.filter( fruit => fruit.match(/(?<=ripe )orange/));
console.log(ripe_oranges); // [ 'ripe orange A ', 'ripe orange C' ]
```



##### 3.2.3 组合范围(Groups and ranges)

组和范围表示表达式字符的组和范围。

| Characters          | Meaning                                                      |
| ------------------- | ------------------------------------------------------------ |
| `x|y`               | 匹配'x'或'y'                                                 |
| `[xyz]`   `[a-c]`   | 一个字符集。匹配任何一个括号中的字符。你可以通过使用连字符来指定一个字符范围，但是如果连字符作为第一个或最后一个字符出现在方括号中，它将被视为一个字面的连字符，作为一个普通字符包含在字符类中。 |
| `[^a-c]` `[^xyz]`   | 一个被否定或补充的字符类。也就是说，它匹配任何不在方括号内的东西。你可以通过使用连字符来指定一个字符范围，但如果连字符作为第一个或最后一个字符出现在方括号中，它将被视为一个字面的连字符，作为一个正常字符包含在字符类中。 |
| `(x)`               | 捕获组。匹配x并记住匹配的内容。例如，/(foo)/匹配并记住 "foo bar "中的 "foo"。<br/><br/>一个正则表达式可以有多个捕获组。在结果中，与捕获组的匹配通常在一个数组中，其成员的顺序与捕获组中的左括号相同。这通常只是捕获组本身的顺序。当捕获组被嵌套时，这就变得很重要。使用结果元素的索引（[1], ..., [n]）或从预定义的正则表达式对象的属性（$1, ..., $9）访问匹配。<br/><br/>捕获组有一个性能损失。如果你不需要调用匹配的子串，最好选择非捕获式的括号（见下文） |
| `\n`     ????       | 其中 "n "是一个正整数。对正则表达式中与第n个括号相匹配的最后一个子串的反向引用（算上左括号）。<br />(Where "n" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). |
| `\k<Name>`   ????   | `A back reference to the last substring matching the **Named capture group** specified by `<Name>`.`<br /> 1. self version: 最后一个子字符串匹配的被`<Name>`规定的命名捕获组的反向引用<br />2. deepL version: 对与<Name>所指定的Named capture group相匹配的最后一个子串的反向引用。<br />3. 例如, |
| `(?<Name>x)`   ???? | 匹配 "x"，并将其存储在返回的匹配物的组属性中，其名称由<Name>指定。<br />( Matches "x" and stores it on the groups property of the returned matches under the name specified by` <Name>`) |
| `(?:x)`             | 匹配'x'但是不记住这个匹配.  匹配的子串不能从结果数组的元素（[1], ..., [n]）或预定义的RegExp对象的属性（$1, ..., $9）中再次调用。 |

实例

计算元音字母

```javascript
var aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels = /[aeiouy]/g;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 25
```

使用组

```javascript
???
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
```

使用命名组

```javascript
???
```

##### 3.2.4 量词

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers





### 正则表达式字符匹配攻略

> <span style="color:red;">正则表达式是匹配模式，要么匹配字符，要么匹配位置</span>



### 1.两种模糊匹配

模糊匹配, 有两个方向上的'模糊': **横向模糊,纵向模糊**.



#### 1.1 横向模糊匹配

横向模糊指的是，一个正则可匹配的字符串的长度不是固定的，可以是多种情况的。

<span style="color:blue;">**实现的方法是:使用量词**</span>. 譬如 {m, n},表示连续出现最少m次, 最多n次.

比如正则 `/ab{2, 5}c/` 表示匹配这样一个字符串: 第一个字符是'a', 接下来是2到5个字符'b',最后的字符是'c'.

![](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/image.7l0aruii0zs0.webp)





#### 1.2 纵向模糊匹配

纵向模糊指的是，一个正则匹配的字符串，具体到某一位字符时，它可以不是某个确定的字符，可以有多种可能。

<span style="color:blue;">**其实现方式是使用字符组**</span>. 譬如[abc], 表示该字符可以是字符'a','b','c'中的任何一个.

比如 `/a[123]b/`可以匹配如下三种字符串: 'a1b', 'a2b', 'a3b'.

其可视化形式如下:

![](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/image.644lgood1500.webp)





### 2.字符组

注意,虽然叫字符组(字符类),但只是其中一个字符.

例如`[abc]`,表示匹配一个字符,它可以是'a', 'b', 'c'之一.

#### 2.1 范围表示法

如果字符组里的字符特别多怎么办? 可以使用范围表示法.

比如`[123456abcdefGHIJKLM]`, 可以写成 `[1-6a-fG-M]`. 用<span style="color:blue;">连字符 `-`</span>来省略和简写.

因为连字符有特殊用途,那么要匹配`'a', '-', 'z'`这三者中的任意一个字符,如何做?

可以写成如下形式: `[-az]`, `[az-]`, `[a\-z]`. 要么放在开头,要么结尾,要么转义.



#### 2.2 排除字符组

纵向模糊匹配,有一种情形是,某位字符可以是任何东西,但就不能是'a', 'b','c'.

此时就是排除字符组(反义字符组)的概念. 字符组的第一位放<span style="color:blue;">`^`(脱字符)</span>,表示求反的概念.

当然,也有相应的范围表示法.

`[^abc]`, 表示是一个除'a', 'b','c'之外的任何字符.

`[^a-h]`, 表示是一个除a-h字母之外的字符



#### 2.3 常见的简写形式

有了字符组的概念后,看一下系统自带的简写形式:

| 字符组 | 具体含义                                                     |
| ------ | ------------------------------------------------------------ |
| `\d`   | 表示`[0-9]`. 表示是一位数字.<br/>记忆方式: 其英文是digit(数字) |
| `\D`   | 表示`[^0-9]`. 表示除数字外的任意字符.                        |
| `\w`   | 表示`[0-9a-zA-Z_]`. 表示数字,大小写字母和下划线.<br/>记忆方式: w是word 的简写,也成单词字符. |
| `\W`   | 表示`[^0-9a-zA-Z_]` 非单词字符                               |
| `\s`   | 表示`[\t\v\n\r\f]`. 表示空白符, 包括空格, 水平制表符,垂直制表符,换行符,回车符.<br/>记忆方式: s是space的首字母,空白符的单词是white space |
| `\S`   | 表示`[^\t\v\n\r\f]`. 非空白符                                |
| `.`    | 表示`[^\n\r\u2028\u2029]`. 通配符,表示几乎任意字符. 换行符, 回车符, 行分隔符和段分隔符除外.<br/>记忆方式: 想想省略号`...`中的每个点,可以理解成占位符,表示任何类似的东西. |

**如果要匹配任何字符?**

可以使用`[\d\D]` , `[\w\W]`, `[\s\S]` 和 `[^]`中的任何一个.

以上各字符组对应的可视化形式是:

![](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/image.5r0usaitgzk0.webp)



### 3.量词

<u>量词也称重复</u>。掌握 {m,n} 的准确含义后，只需要记住一些简写形式。

#### 3.1 简写形式

| 量词   | 具体含义                                                     |
| ------ | ------------------------------------------------------------ |
| `{m,}` | 表示至少出现m次                                              |
| `{m}`  | 等价于`{m, m}`, 表示出现m次                                  |
| `?`    | 等价于`{0,1}`, 表示出现或不出现.<br/>记忆方式: 问号的意思表示, 有吗? |
| `+`    | 等价于`{1, }`,表示至少出现1次.<br/>记忆方式: 加号是追加的意思,得先有一个,然后才考虑追加. |
| `*`    | 等价于`{0, }`,表示出现任意次,有可能不出现. <br/>记忆方式: 看看天上的星星,可能一颗没有,可有零散几颗,可能数也数不过来.(太牛逼的类比了) |

#### 3.2 贪婪匹配和惰性匹配

贪婪匹配,它会尽可能多的匹配. 惰性匹配,就是尽可能少的匹配.

通过在量词后面加个问号实现惰性匹配.

例子:

```javascript
//贪婪匹配
let regex = /\d{2,5}/g;
let str = '123 1234 12345 123456';
console.log(str.match(regex));
//["123", "1234", "12345", "12345"]
```

其中正则`/\d{2,5}/`, 表示数字连续出现2到5次.会匹配2位,3位,4位,5位连续数字.因为是贪婪的,会尽可能多的匹配. 给6个,要5个.给3个,要3个.

```javascript
//惰性匹配
let regex = /\d{2,5}?/g;
let str = '123 1234 12345 123456';
console.log(str.match(regex));
//["12", "12", "34", "12", "34", "12", "34", "56"]
```



惰性匹配情形如下:

| 惰性量词 | 贪婪量词 |
| -------- | -------- |
| {m, n}?  | {m,n}    |
| {m,}?    | {m,}     |
| ??       | ?        |
| +?       | +        |
| *?       | *        |

记忆方式:  对惰性匹配的记忆方式是：量词后面加个问号，问一问你知足了吗，你很贪婪吗？

以上惰性量词对应的可视化形式:

![JavaScript正则表达式迷你书（1](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/JavaScript正则表达式迷你书（1.62fudpt38h40.webp)



### 4.多选分支

<u>一个模式可以实现横向和纵向模糊匹配. 而多选分支可以支持多个子模式任选其一.</u>

具体形式如下: `(p1|p2|p3)`, 其中p1, p2, p3是子模式, 用<span style="color: blue;">`|`(管道符)</span>分隔, 表示其中任何之一.

例如要匹配字符串"good"和"nice", 可以使用`/good|nice/`

可视化形式如下:

![多选分支](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/多选分支.1uc2akq0j9sw.webp)

```javascript
let regex = /good|nice/g;
let str = 'good idea, nice try';
console.log(str.match(regex));
//['good', 'nice']
```

<u>分支结构也是**惰性**的，即当前面的匹配上了，后面的就不再尝试了</u>

注意: 比如用`/good|goodbye/`, 匹配'goodbye'字符串时, 结果是'good'

```javascript
var regex = /good|goodbye/g;
var string = "goodbye";
console.log( string.match(regex) );
// => ["good"]
```

而把正则改成 /goodbye|good/，结果是：

```javascript
var regex = /goodbye|good/g;
var string = "goodbye";
console.log( string.match(regex) );
// => ["goodbye"]
```



### 5.案例

匹配字符,无非就是字符组,量词和分支解构的组合使用罢了.

#### 5.1 匹配16进制颜色值

要求匹配:

```javascript
#ffbad
#Fc01DF
#FFF
#ffE
```

分析:

表示一个 16 进制字符，可以用字符组 [0-9a-fA-F]。
其中字符可以出现 3 或 6 次，需要是用量词和分支结构。
使用分支结构时，需要注意顺序。

正则如下:

```javascript
let regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
let str = '#ffbbad #Fc01DF #FFF #ffE';
console.log(str.match(regex));

//["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]
```

其可视化形式如下:

![匹配16进制颜色](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/匹配16进制颜色.4qyibes37im0.webp)



#### 5.2 匹配时间

以24小时制为例

要求匹配:

```javascript
23:59
02:07
```

分析:

共 4 位数字，第一位数字可以为 [0-2]。
当第 1 位为 "2" 时，第 2 位可以为 [0-3]，其他情况时，第 2 位为 [0-9]。
第 3 位数字为 [0-5]，第4位为 [0-9]。

正则如下：

```javascript
let regex = /^([2][0-3]|[01][0-9]):[0-5][0-9]$/;
console.log( regex.test("23:59") );
console.log( regex.test("02:07") );
// => true
// => true
```

**Note:** 正则中使用了`^` 和 `$`, 分别表示字符串开头和结尾.

如果也要求匹配"7:9", 也就是说时分前面的'0'可以省略.

此时的正则变成:

```javascript
var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
console.log( regex.test("23:59") );
console.log( regex.test("02:07") );
console.log( regex.test("7:9") );
// => true
// => true
// => true
```

其可视化形式:

![24小时正则](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/24小时正则.rx4x9ghj25c.webp)



#### 5.3 匹配日期

比如 `yyyy-mm-dd` 格式为例

要求匹配:

```javascript
2017-06-10
```

分析:

年，四位数字即可，可用 [0-9]{4}。
月，共 12 个月，分两种情况 "01"、"02"、…、"09" 和 "10"、"11"、"12"，可用 (0[1-9]|1[0-2])。
日，最大 31 天，可用` (0[1-9]|[12][0-9]|3[01])`

正则规则如下:

```javascript
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
console.log( regex.test("2017-06-10") );
// => true
```

可视化形式:

![正则匹配日期](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/正则匹配日期.4udvtxbdqqy0.webp)

#### 5.4 window操作系统文件路径

要求匹配:

```javascript
F:\study\javascript\regex\regular expression.pdf
F:\study\javascript\regex\
F:\study\javascript
F:\
```

分析:

整体模式是:

> 盘符:\文件夹\文件夹\文件夹\

其中匹配 "F:\"，需要使用<span style="color:blue; font-weight: bold;">` [a-zA-Z]:\\`</span>，其中盘符不区分大小写，注意 \ 字符需要转义。

文件名或者文件夹名，不能包含一些特殊字符，此时我们需要排除字符组<span style="color:blue; font-weight: bold;"> `[^\\:*<>|"?\r\n/] `</span>来表示合法字符.

另外它们的名字不能为空名，至少有一个字符，也就是要使用量词 `+`。因此匹配 `文件夹\`，可用<span style="color:blue; font-weight:bold;">`[^\\:*<>|"?\r\n/]+\\`</span>.

另外 文件夹\，可以出现任意次。也就是 (<span style="color: blue; font-weight: bold;">`[^\\:*<>|"?\r\n/]+\\)*`</span>。其中括号表示其内部正则是一个整体.

路径的最后一部分可以是 文件夹，没有 \，因此需要添加<span style="color:blue; font-weight: bold;">` ([^\\:*<>|"?\r\n/]+)?`</span>

最后拼接成了一个看起来比较复杂的正则：

```javascript
let regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
let str= 'F:\study\javascript\regex\regular expression.pdf';

console.log( regex.test("F:\\study\\javascript\\regex\\regular expression.pdf") );
console.log( regex.test("F:\\study\\javascript\\regex\\") );
console.log( regex.test("F:\\study\\javascript") );
console.log( regex.test("F:\\") );
// => true
// => true
// => true
// => true
```

其中，在JavaScript 中字符串要表示字符 \ 时，也需要转义。

可视化形式:

![正则文件路径](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/正则文件路径.5eyx9w1q2p40.webp)



#### 5.5 匹配id

要求从

```javascript 
<div id="container" class="main"></div>
```

提取出 <span style="color: red;">id="container"</span>

开始的正则是:

```javascript
var regex = /id=".*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);
// => id="container" class="main"
```

其可视化形式是:

![匹配id正则](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/匹配id正则.3p1eje2gj5q0.webp)

因为 . 是通配符，本身就匹配双引号的，而量词 * 又是贪婪的，当遇到 container 后面双引号时，是不会停下来，会继续匹配，直到遇到最后一个双引号为止。

解决之道,使用惰性匹配:

```javascript
var regex = /id=".*?"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);
// => id="container"
```

当然，这样也会有个问题。<u>效率比较低</u>，因为其匹配原理会涉及到“回溯”这个概念（这里也只是顺便提一下，第四章会详细说明）。可以优化如下:

```javascript
var regex = /id="[^"]*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);
// => id="container"
```



### 正则表达式位置匹配攻略



### 1.什么是位置

> 位置(锚)是相邻字符之间的位置. 比如,下图箭头所指的地方:

![锚](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/锚.3cwiopgx95e0.webp)



### 2.如何匹配位置

在ES5中, 共有6个锚:

<span style="color:red; font-weight:bold;"> ^ $ \b \B (?=p)  (?!p)</span>

相应的可视化形式:

![锚的可视化](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/锚的可视化.48azfnceyk60.webp)

#### 2.1 ^ 和 $

<span style="color:red; font-weight:bold;">^(脱字符)</span>匹配开头,在多行匹配中匹配行开头

<span style="color:red; font-weight:bold;">$(美元符号)</span>匹配结尾, 在多行匹配中匹配行结尾

比如我们把字符串的开头和结尾用 "#" 替换（<span style="color:blue; font-weight:bold;">位置可以替换成字符的！</span>）：

```javascript
let res = 'hello'.replace(/^|$/g, '#');  //管道符是惰性匹配
cosnole.log(res); // '#hello#'
```

多行匹配模式（即有修饰符 m）时，二者是行的概念，这一点需要我们注意：

```javascript
let res = 'I\nlove\njavascript'.replace(/^|$/gm, '#');
console.log(res);
/*
#I#
#love#
#javascript#
*/
```

#### 2.2 \b 和 \B

<span style="color:red; font-weight:bold;">\b</span> 是单词边界,具体就是`\w`与`\W`之间的位置,也包括`\w` 与 `^`之间的位置, 和`\w`与`$`之间的位置.

比如考察文件名 "[JS] Lesson_01.mp4" 中的 \b，如下：

```javascript
let res = '[JS] Lesson_01.mp4'.replace(/\b/g, '#');
console.log(res);
//'[#JS#] #Lesson_01#.#mp4#'
```

解析:

`\w`是字符组`[0-9a-zA-Z_]`的简写形式,即`\w`是字母数字或者下划线的中任何一个字
符。

而 `\W` 是排除字符组` [^0-9a-zA-Z_] `的简写形式，即 `\W` 是 `\w` 以外的任何一个字符。

此时我们可以看看 "[#JS#] #Lesson_01#.#mp4#" 中的每一个井号:

* 第 1 个，两边字符是 "[" 与 "J"，是 \W 与 \w 之间的位置。
* 第 2 个，两边字符是 "S" 与 "]"，也就是 \w 与 \W 之间的位置。
* 第 3 个，两边字符是空格与 "L"，也就是 \W 与 \w 之间的位置。
* 第 4 个，两边字符是 "1" 与 "."，也就是 \w 与 \W 之间的位置。
* 第 5 个，两边字符是 "." 与 "m"，也就是 \W 与 \w之间的位置。
* 第 6 个，位于结尾，前面的字符 "4" 是 \w，即 \w 与 $ 之间的位置。



<span style="color:red;font-weight:bold;">\B</span> 是`\b`的反面的意思,非单词边界.例如在字符串中所有位置中，扣掉 `\b`，剩下的都是 `\B `的,就是`\w` 与 `\w`、 `\W` 与 `\W`、`^ `与 `\W`，`\W` 与 `$` 之间的位置。

比如上面的例子,把所有的`\B`替换成 `#`:

```javascript
let res = '[JS] Lesson_01.mp4'.replace(/\B/g, '#');
console.log(res); //#[J#S]# L#e#s#s#o#n#_#0#1.m#p#4
```



#### 2.3 (?=p) 和 (?!p)

`(?=p)`, 其实p是一个子模式, 即p前面的位置,或者说,该位置后面的字符要匹配p.

比如`(?=l)`, 表示'l'字符前面的位置,例如:

```javascript
let res = 'hello'.replace(/(?=l)/g, '#');
console.log(res); //'he#l#lo'
```

`(?!p)`就是`(?=p)`的反面意思. 比如:

```javascript
let res = 'hello'.replace(/?!l)/g, '#');
console.log(res); //'#h#ell#o#'
```

二者的学名分别是 positive lookhead 和 negative lookhead.

中文翻译分别是正向先行断言和负向先行断言.

ES5之后的版本会支持 positive lookbehind 和 negative lookbehind

具体是指 `(?<=p)` he `(?<!p)`

这四者是个位置.比如`(?=p)`就是与`^`一样好理解,就是p前面的那个位置.



### 3.位置的特性

> 对于位置的理解,我们可以理解成空字符`''`.

比如 "hello" 字符串等价于如下的形式：

```javas
"hello" == "" + "h" + "" + "e" + "" + "l" + "" + "l" + "" + "o" + "";
```

也等价于:

```javascript
'hello' == '' + '' + 'hello'
```

因此把 `/^hello$/` 写成 `/^^hello$$/`, 是没有任何问题的

```javascript
let res = /^^hello$$/.test('hello');
console.log(res); //true
```

甚至可以写成更复杂的:

```javascript
let res = /(?=he)^^he(?=\w)llo$\b\b$/.test('hello');
console.log(res); //true
```

也就是说<span style="color:blue;"><u>字符之间的位置,可以写成多个.</u></span>

> TIP: 把位置理解成空字符, 是对位置非常有效的理解方式.



### 4.应用实例

#### 4.1 不匹配任何东西的正则

easy: `/.^/`

因为此正则要求只有一个字符,但该字符后面是开头,而这样的字符串是不存在的.



#### 4.2 数字千分位分隔符表示法

比如把 "12345678"，变成 "12,345,678"。
可见是需要把相应的位置替换成 ","。
思路是什么呢？

##### 4.2.1 弄出最后一个逗号

使用`/?=\d{3}$/`可以实现

```javascript
let res = '12345678'.replace(/(?=\d{3}$)/g, ',');
console.log(res); //12345,678
```

其中，(?=\d{3}$) 匹配 \d{3}$ 前面的位置。而 \d{3}$ 匹配的是目标字符串最后那 3 位数字。

##### 4.2.2 弄出所有的逗号

因为逗号出现的位置，要求后面 3 个数字一组，也就是 \d{3} 至少出现一次。
此时可以使用量词 +：

```javascript
let res = '12345678'.replace(/(?=(\d{3})+$)/g, ',');
console.log(res); //"12,345,678"
```

##### 4.2.3 匹配其余案例

存在的问题:

```javascript
var result = "123456789".replace(/(?=(\d{3})+$)/g, ',')
console.log(result);
// => ",123,456,789"
```

因为上面的正则，仅仅表示把从结尾向前数，一但是 3 的倍数，就把其前面的位置替换成逗号。因此才会出
现这个问题。
怎么解决呢？我们要求匹配的到这个位置不能是开头。
我们知道匹配开头可以使用 ^，但要求这个位置不是开头怎么办？

easy，(?!^)，你想到了吗？测试如下：

```javascript
var regex = /(?!^)(?=(\d{3})+$)/g;
var result = "12345678".replace(regex, ',')
console.log(result);
// => "12,345,678"

result = "123456789".replace(regex, ',');
console.log(result);
// => "123,456,789"
```

##### 4.2.4 支持其他形式

如果要把 "12345678 123456789" 替换成 "12,345,678 123,456,789"。
此时我们需要修改正则，把里面的开头 ^ 和结尾 $，修改成 \b：

```javascript
let res = '12345768 123456789'.replace(/(?!\b)(?=(\d{3})+\b)/g, ',');
console.log(res); //


```

其中 (?!\b) 怎么理解呢？
要求当前是一个位置，但不是 \b 前面的位置，其实 (?!\b) 说的就是 \B。

其可视化形式是:

![千分位正则](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/千分位正则.1p1541t3f128.webp)

##### 4.2.5 格式化

千分符表示法一个常见的应用就是货币格式化

比如把下面的字符串:

```javascript
1888
```

格式化成:

```javascript
$ 1888.00
```

实现如下:

```javascript
function format(num) {
  return num.toFixed(2).replace(/\B(?=(d{3})+\b)/g, ',').replace(/^/, '$$');
}//在浏览器

console.log(format(1888)); //'$ 1,888.00'
```

















### 速查表

|                | 字面量                                                       |
| -------------- | ------------------------------------------------------------ |
| 模式           | 说明                                                         |
| 字母,数字      | 匹配字面量本身. 比如/f/, 匹配字符'f'                         |
| \0             | 匹配NUL字符                                                  |
| \t             | 匹配水平制表符                                               |
| \v             | 匹配垂直制表符                                               |
| \n             | 匹配换行符                                                   |
| \r             | 匹配回车符                                                   |
| \f             | 匹配换页符                                                   |
| \xnn           | 匹配拉丁字符. 比如 \x0A 等价于 \n                            |
| \uxxxx         | 匹配Unicode字符. 比如 \u2028 匹配行终止字符, \u2029匹配断终止符 |
| \cX            | 匹配 Ctrl + X  比如\cI 匹配 Ctrl + I                         |
| [\b]           | 匹配Backspace键                                              |
|                |                                                              |
|                | 字符串                                                       |
| 模式           | 说明                                                         |
| [abc]          | 匹配'a', 'b', 'c'其中任何一个字符                            |
| [a-d1-4]       | 匹配'a','b','c','d','1','2','3','4'其中任何一个字符          |
| [^abc]         | 匹配除了'a', 'b','c'之外的任何一个字符                       |
| [^a-d1-4]      | 匹配除了 "a"、"b"、"c"、"d"、"1"、"2"、"3"、"4" 之外的任何一个字符 |
| .              | 通配符，匹配除了少数字符（\n）之外的任意字符。               |
| \d             | 匹配数字，等价于 [0-9]。                                     |
| \D             | 匹配非数字，等价于 \[^0-9]                                   |
| \w             | 匹配单词字符，等价于 [a-zA-Z0-9_]                            |
| \W             | 匹配非单词字符，等价于\[^a-zA-Z0-9_]                         |
| \s             | 匹配空白符，等价于 [ \t\v\n\r\f]                             |
| \S             | 匹配非空白符，等价于 \[^ \t\v\n\r\f]                         |
|                |                                                              |
|                | 量词                                                         |
| 模式           | 说明                                                         |
| {n, m}         | 连续出现n到m次. 贪婪模式                                     |
| {n,}           | 至少连续出现n次. 贪婪模式                                    |
| {n}            | 连续出现n次. 贪婪模式                                        |
| ?              | 等价于{0,1}. 贪婪模式                                        |
| +              | 等价于{1,}. 贪婪模式                                         |
| *              | 等价于{0,}. 贪婪模式                                         |
| {n,m}?         | 连续出现n到m次. 惰性模式                                     |
| {n,}?          | 至少连续出现n次. 惰性模式                                    |
| {n}?           | 连续出现n次. 惰性模式                                        |
| ??             | 等价于{0, 1}? 惰性模式                                       |
| +?             | 等价于{1,}? 惰性模式                                         |
| *?             | 等价于{0,}? 惰性模式                                         |
|                |                                                              |
|                | 位置                                                         |
| ^              | 匹配开头的位置,当正则有修饰符 m 时,  表示匹配行开头的位置    |
| $              | 匹配结尾的位置, 当正则有修饰符 m 时, 表示匹配行结尾位置      |
| \b             | 匹配单词边界，即，\w 与 \W、^ 与 \w、\w 与 $ 之间的位置。    |
| \B             | 匹配非单词边界，即，\w 与 \w、\W 与 \W、^ 与 \W，\W 与 $ 之间的位置。 |
| (?=abc)        | 匹配 "abc" 前面的位置，即此位置后面匹配 "abc"。              |
| (?!abc)        | 匹配非 "abc" 前面的位置，即此位置后面不匹配 "abc"。          |
|                |                                                              |
|                | 括号的作用                                                   |
| 模式           | 说明                                                         |
| (ab)           | 捕获型分组。把 "ab" 当成一个整体，比如 (ab)+ 表示 "ab" 至少连续出现一次。 |
| (?:ab)         | 非捕获型分组。与 (ab) 的区别是，它不捕获数据                 |
| (goodnice)     | 捕获型分支结构。匹配 "good" 或 "nice"。                      |
| (?:goodnice)   | 非捕获型分支结构。与 (good\|nice) 的区别是，它不捕获数据。   |
| \num           | 反向引用。比如 \2，表示引用的是第二个括号里的捕获的数据。    |
|                |                                                              |
|                | 修饰符                                                       |
| 符号           | 说明                                                         |
| g              | 全局匹配，找到所有满足匹配的子串。                           |
| i              | 匹配过程中，忽略英文字母大小写。                             |
| m              | 多行匹配，把 ^ 和 $ 变成行开头和行结尾。                     |
|                |                                                              |
|                | String相关实例方法                                           |
| 属性           | 方法作用说明                                                 |
| search         | 返回正则匹配到的第一个子串在目标字符串中的下标位置。         |
| split          | 以正则匹配到的子串，对目标字符串进行切分。返回一个数组。     |
| match          | 对目标字符串执行正则匹配操作，返回的匹配结果数组中包含具体的匹配信息。 |
| replace        | 对目标字符串进行替换操作。正则是其第一个参数。返回替换后的字符串。 |
|                |                                                              |
|                | replace第二个参数中的特殊字符                                |
| 字符           | 说明                                                         |
| $1,$2,....,$99 | 匹配第 1-99 个分组里捕获的文本                               |
| $&             | 匹配到的子串文本                                             |
| $`             | 匹配到的子串的左边文本                                       |
| $'             | 匹配到的子串的右边文本                                       |
| $$             | 美元符号(需要确认具体意思...)                                |
|                |                                                              |
|                | RegExp相关实例方法                                           |
| 属性           | 方法作用说明                                                 |
| test           | 判断目标字符串中是否有满足正则匹配的子串。返回布尔值。       |
| exec           | 比 match 更强大的正则匹配操作。返回结果与 match 一致。       |
|                |                                                              |
|                | RegExp静态属性                                               |
| 属性           | 方法作用说明                                                 |
| $1,...,$9      | 最近一次第 1-9 个分组捕获的数据。                            |
| input          | 最近一次目标字符串，可以简写成 $_ 。                         |
| lastMatch      | 最近一次匹配的文本，可以简写成 $& 。                         |
| lastParen      | 最近一次捕获的文本，可以简写成 $+ 。                         |
| leftContext    | 目标字符串中 lastMatch 之前的文本，可以简写成 $` 。          |
| rightContext   | 目标字符串中 lastMatch 之后的文本，可以简写成 $' 。          |

