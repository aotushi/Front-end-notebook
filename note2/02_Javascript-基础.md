## JS 3大组成部分

* ECMAScript  (JS标准)
* DOM  (Document Object Model 文档对象模型)
* BOM  (Browse Object Model      浏览器对象模型)        



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



## JS基本语法

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
  * 标识符可以含有字母,数字,下划线,$,但不能以数字开头. 
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
* 2.let不能在初始化前访问变量 var可以
* 3.var声明的全局变量会添加到window对象中; let或const不能覆盖全局变量只能遮蔽它
* 4.let不能重复声明变量 var可以

常量声明const、类声明class在块级作用域上的特性与let声明是类似的



### 块级作用域

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
2.在同一作用域声明已经存在的标识符会导致语法错误，<u>无论标识符是使用var(全局或函数),还是let(块级作用域)声明的</u>。3.无论是否是严格模式，都不能为const定义的常量再赋值
4.JS中的常量如果是对象，则对象的值可以修改;const声明不允许修改绑定,但允许修改绑定的值





##### 2.3 临时性死区(TMD Temporal Dead Zone)

> 与var不同，let和const声明的变量不会被提升到作用域顶部，如果在声明之前访问这些变量，即使是相对安全的typeof操作符也会触发引用错误
>
> 虽然ECMAScript标准并没有明确提到TDZ，但人们却常用它来描述let和const的不提升效果
>
> JavaScript引擎在扫描代码发现变量声明时，要么将它们提升至作用域顶部（遇到var声明），要么将声明放到TDZ中（遇到let和const声明）。访问TDZ中的变量会触发运行时错误。只有执行过变量声明语句后，变量才会从TDZ中移出，然后方可正常访问。

```js
if (condition) {
  console.log(typeof value); //引用错误
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

typeof是在声明变量value的代码块外执行的，此时value并不在TDZ中。这也就意味着不存在value这个绑定，typeof操作最终返回"undefined"。

#### 3. 循环中的块作用域绑定

```javascript
for (var i=0; i<10; i++) {
  process(item[i]);
}

//这里仍然可以访问变量i
console.log(i); //10
```

在默认拥有块级作用域的其他语言中，这个示例也可以正常运行，并且变量i只在for循环中才能访问到。而在JavaScript中，由于var声明得到了提升，变量i在循环结束后仍可访问。如果换用let声明变量就能得到想要的结果

```javascript
for (let i=0; i<10; i++) {
  process(items[i]);
}

//i在这里不可以访问，抛出一个错误
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



##### 3.1.2 循环中的let声明

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
```

这段循环与之前那段结合了var和IIFE的循环的运行结果相同，但相比之下更为简洁。每次循环的时候let声明都会创建一个新变量i，并将其初始化为i的当前值，所以循环内部创建的每个函数都能得到属于它们自己的i的副本。对于for-in循环和for-of循环来说也是一样的

```javascript
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

Note:

> let声明在循环内部的行为是标准中专门定义的，它不一定与let的不提升特性相关，理解这一点至关重要。事实上，早期的let实现不包含这一行为，它是后来加入的



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



#### 4. 全局块作用域绑定

> 当var被用于全局作用域时，它会创建一个新的全局变量作为全局对象（浏览器环境中的window对象）的属性。这意味着用var很可能会无意中覆盖一个已经存在的全局变量

```javascript
//浏览器中
var RegExp = 'hello';
console.log(window.RegExp); //'hello'   覆盖了原来window上的RegExp

var ncz = 'hi';
console.log(window.ncz); //'hi'
```

>  如果你在全局作用域中使用let或const，会在全局作用域下创建一个新的绑定，但该绑定不会添加为全局对象的属性。换句话说，用let或const不能覆盖全局变量，而只能遮蔽它。

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
- 基本类型可以被改变,不能被替换

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

  

  

  

### 判断数据类型

####   1.typeof

typeof 运算符 可以用来检查一个变量的数据类型 返回的结果是 ==字符串==

```js
- 使用typeof检查一个数值(种类有整数和小数,先暂时这么记)时,会返回一个number
- 使用typeof检查一个字符串,会返回string
- 检查null object array时,返回的都是object. 因为这几个是Ojbect重写的实例,他们有自己的toString方法. 按照原型链的思路会优先使用重写后的toString方法.
```



**类型之间的比较**

```js
null == undefined  //true
undefined == false  //false
undefined == 0 //false


```





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



| 类型      | 结果        |
| --------- | ----------- |
| undefined | 'undefined' |
| Null      | 'object'    |
| Boolean   | 'boolean'   |
| Number    | 'number'    |
| String    | 'string'    |
| Function  | 'function'  |
| BigInt    | 'bigint'    |
| Symbol    | 'symbol'    |
|           |             |



#### 2.Object.prototype.toString

```js
- toString()方法能返回这个对象的类型(字符串形式)
```



##### 2.1 Object.prototype.toString.call原因

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









#### 3.null和undefined使用比较

```HTML
Null
- Number(null)返回0.
- 作为函数参数,表示该参数不是对象
- 对象原型链的终点: Object.prototype.__proto__=null

Undefined
- Number(undefined)返回NaN
- 变量声明未赋值;对象属性未赋值;调用函数时,对应参数没有提供;函数没有返回值;数组越界索引


===============================
null作为函数参数的用法:
function fn(a, b){console.log(a+b);}
// 需要传递参数，但是我们暂时不想传递，或者不需要传递，那么我们可以传一个空对象null
fn() ;//结果是NaN
fn(null,null);//结果: 0
fn(undefined, undefined);//结果: NaN

函数为什么传入参数null?


function sayHello(name='World'){console.log('Hello,'+name+'!');}
sayHello('jim');//Hello,jim!
sayHello(undefined);//Hello, World!
sayHello(null);//Hello, null!
https://stackoverflow.com/questions/32725034/passing-in-null-as-a-parameter-in-es6-does-not-use-the-default-parameter-when-on
```



#### 4.判断变量是否为数组4种方法

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

基本类型
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



#### 其他类型转换为字符串类型

##### 方式一 toString

可以调用<u>被转换类型</u>的**toString()方法**来将其转换成字符串

由于null和undefined中没有toString()方法,所以这种方式不适用于这两种,会报错

```js
a = 10; 

console.log(a,typeof a);   //10 "number"
a = a.toString();
console.log(a, typeof a);  //10 "string"

//多维数组也可以转换成字符串
[1,2,[3,4,[5,6]]].toString()
"1,2,3,4,5,6"


//数组中的undefined,null转换成空值,但直接转换为字符串形式
[1,2,,undefined,null].toString() // "1,2,,,"
String([1,2,,undefined,null])   // "1,2,,,"
```





##### 方式二 String

```js
调用 String()函数,来将其转换为字符串 

原理:  对于有toString()方法的类型,也是在内部调用toString()完成转换

		  对于null和undefined,没有toString()方法,会直接使用String()函数来完成转换

```



```js
a = null;  // null--> 'null'
a = undefined;  // undefined --> 'undefined'

console.log(a, typeof a); // undefined "undefined"

a = 10;
a=String(a);   //注意: 转换的是10,而不是变量a

a = undefined;
console.log(a, typeof a);// undefined "undefined"
```





##### 实例

```HTML
[1,2].toString(); //'1,2'
({}).toString(); //[object Object]
true.toString(); //'true'
null.toString();// Uncaught TypeError: Cannot read property 'toString' of null
undefined.toString();// Uncaught TypeError: Cannot read property 'toString' of null
```



#### 对象身上toString()和valueOf()介绍

> https://segmentfault.com/a/1190000010824347?utm_source=sf-similar-article

toString() 和 valueOf() 是对象的两个方法.

 先说一下两个东西的用途：

​    toString( ):返回对象的字符串表示。

​    valueOf( ):返回对象的字符串、数值或布尔值表示

```js
//null undefined没有这两个方法

//先看看toString()方法的结果
var a = 3;
var b = '3';
var c = true;
var d = {test:'123',example:123}
var e = function(){console.log('example');}
var f = ['test','example'];

a.toString();// "3"
b.toString();// "3"
c.toString();// "true"
d.toString();// "[object Object]"
e.toString();// "function (){console.log('example');}"
f.toString();// "test,example"

//再看看valueOf()方法的结果
var a = 3;
var b = '3';
var c = true;
var d = {test:'123',example:123}
var e = function(){console.log('example');}
var f = ['test','example'];

a.valueOf();// 3
b.valueOf();// "3"
c.valueOf();// true
d.valueOf();// {test:'123',example:123}
e.valueOf();// function(){console.log('example');}
f.valueOf();// ['test','example']
```

toString( )就是将其他东西用字符串表示，比较特殊的地方就是，表示对象的时候，变成"[object Object]",表示数组的时候，就变成数组内容以逗号连接的字符串，相当于Array.join(',')。 而valueOf( )就返回它自身

什么时候调用?

```js
//例子一
var example = {test:'123'};
console.log(+example);// NaN

//例子二 同时改写 toString 和 valueOf 方法
var example = {
    toString:function(){
        return '23';
    },
    valueOf:function(){
        return '32';
    }
};
console.log(+example);// 32

//例子三 只改写 toString 方法
var example = {
    toString:function(){
        return '23';
    }
};
console.log(+example);// 23
```

通过例子1和例子2比较, 一元加操作符在操作对象时,会先调用对象的valueOf()方法来转换, 最后在用Number()方法来转换. 

通过例子2和例子3比较, 如果只改写了toString()方法, 证明valueOf()的优先级比toString()高.

alert情况下:

```js
//例子一
var example = {test:'123'};
alert(example);// "[object Object]"

//例子二 同时改写 toString 和 valueOf 方法
var example = {
    toString:function(){
        return '23';
    },
    valueOf:function(){
        return '32';
    }
};
alert(example);// "23"

//例子三 只改写 valueOf 方法
var example = {
    valueOf:function(){
        return '32';
    }
};
alert(example);// "[object Object]"
```

虽然上面结果用双引号了，但是你知道弹窗不会将字符串的双引号表示出来的。

alert它对待对象，就和字符串和对象相加一样，就是调用它的toString( )方法，和valueOf方法无关。

#### 其他类型转换为数值

* 方式:  使用Number()函数将其转换为数值

* 转换的情况:

  * **字符串**: 对于字符串来说,如果字符串是一个合法的数值,则直接转换为对应的数值;
    * 如果是一个**不合法的数值**(例如,'a'),则转换为**NaN**
    * **空串**和**纯空格的字符串**都会转换为**0**
  * **布尔值**
    * true --> 1
    * false --> 0
  * null --> 0
  * undefined --> NaN

* **专门用来对付字符串的两种方式**:

  > parseInt(),parseFloat()在转换空串,纯空格字符串,空值时,布尔值,返回的都是NaN
  
* parseInt()
    * 将一个字符串转换成整数

    * parseInt()在解析一个字符串时,它会**自左向右一位位的解析**,直到获取所有合法整数

    * 案例
    
    * ```
      parseInt('123px'); //--> 123
      parseInt('12px3'); //--> 12
      ```
    
  * parseFloat()
    * 将一个字符串转换成小数
    * parseFloat()在解析一个字符串时,会自左向右一位位解析,直到获取所有合法浮点数
  
* ```js
  let a = '123';
  console.log(a, typeof a); // 123 string
  
  a = Number(a);
  console.log(a, typeof a); // 123 "number"
  
  
  a = true;
  console.log(a, typeof a); //true,boolean
  a = Number(a);
  console.log(a, typeof a); //1,"number"
  
  
  a = null;
  console.log(a, typeof a);//null,"object"
  a = Number(a);
  console.log(a, typeof a);//0, "number"
  
  a = undefined;
  console.log(a, typeof a); //undefined "undefined"
  a = Number(a);
  console.log(a, typeof a); //NaN "number"
  
  使用Number()函数:
  a = '123px'; //'123px' --> 'NaN'
  
  a = ''; // string --> 0 "number"
  
  a = '   '; // string --> 0 "number"
  
  a = false; // false "boolean" --> 0 "number"
  
  a = true; //  true "boolean"  --> 1 "number"
  
  
  parseInt(''); //NaN  空串和含空字符串返回NaN
  parseInt(' '); //NaN
  parseFloat(''); //NaN 空串和含空字符串返回NaN
  
  parseInt(true)--> parseInt('true')-->返回NaN
  ```
  
  



#### 其他类型转换为布尔值

> 调用==Boollean()==函数来将其他类型转换为布尔值



* 数值转布尔值
  * 除了0和NaN,都是true
* 字符串
  * 除了空串`''`,都是true   
* null和undefined 都是false
* {}, [], Infinity求布尔值都为true



​	所有的表示**没有的**都是false, 一般情况下,对象都会转换为true[Boolean(Object);  --> true]

​	总结:

​	转换为布尔值false的6种情况: **0 NaN '' null undefined false** 

```js
6种值转换为布尔值时为false, 其他为true
1. undefined (未定义,找不到值时出现)
2. null(代表空值)
3. false(布尔值false,字符串'false'布尔值为true)
4. 0(数字0,字符串'0'布尔值为true)
5. NaN(w无法计算结果时出现,表示非数值. 但是typeof NaN === 'number'是true)
6.''(单引号)或""(双引号) (空字符串,中间有空格时是true)




let a = Infinity; //true
a = 0; //false
a = NaN; //false
a = ' '; //true
a=''; //false

a = null; //false
a = undefined; //false
a = false; //false

console.log(a, typeof a);

a = Boolean(a);
console.log(a, typeof a);


null==undefined //true
null===undefined //false
```







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

```



**为什么undefined == false返回false**

> [来源](https://stackoverflow.com/questions/19277458/why-does-undefined-equals-false-return-false/19277873)

ECMA文档定义没有直接指出原因,但从下面这句话可以看出原因:
`"the comparison x == y, where x and y are values, produces true or false."`

同时,null的定义如下:

`NUll or nil means 'no value' or 'not applicable'`

在Javascript中, `undefined`也是同样的设置,它没有任何值.然而, `false`有一个值.  `Null`和`undefined`不应该提供任何值,同样的, 它也没有能转换成抽象相等比较的值, 所以这个结果总是`false`. 

这也是`null == undefined` 返回`true`的原因(它们两个都没有任何值). 应该注意`null===undefined`返回`false`, 因为这是两种类型.







#### 全等运算符(===)

* 如果两个值全等,返回true,否则返回false

* 全等不会进行自动的类型转换,如果比较的两个值类型不同,直接返回false

* null和undefined相等,但是不全等

* NaN不和任何值相等,包括它自己

  * 可以通过 isNaN()函数来检查一个值是否是NaN,返回的是布尔值

* ```javascript
  let result = 10;
  result = 10 === 10; //true
  result = 10 === '10'; //false
  result = true === '1'; //false
  result = null === undeined; //false
  
  result = NaN == 1; //false
  result = NaN === NaN; //false
  
  a = NaN;
  console.log(isNaN(a)); //返回的是true
  
  ```

  





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

#### 小于运算符(<)

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



### 7.位运算符(Bitwise operators)

> 位运算符将它的操作数视为32位元的二进制串（0和1组成）而非十进制八进制或十六进制数。例如：十进制数字9用二进制表示为1001，位运算符就是在这个二进制表示上执行运算，但是返回结果是标准的JavaScript数值。

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



#### 1. 按位非运算符

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

> Bitwise unsigned right shift opearot
>
> the unsigned right shift operator(>>>) (zero-fill right shift) shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left. The sign bit becomes 0, so the result is always non-negative. Unlike the other bitwise operators, zero-fill right shift returns an unsigned 32-bit integer.

无符号右移操作符（>>>）（零填充右移）将第一个操作数向右移动指定的位数。向右移出的多余的位被丢弃,再从从左边移入0。符号位变为0，所以结果总是非负的。与其他位操作符不同，零填充右移返回一个无符号的32位整数。

**Desc**

对非负整数,零填充右移符号和符号传播右移得到一样的结果.例如

```javascript
9(base 10): 00000000000000000000000000001001 (base 2)
9>>>2(base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

对负数来说,两者结果不同

```javascript 
-9(base 10): 11111111111111111111111111110111 (base 2)
-9>>>2(base 10): 00111111111111111111111111111101 (base 2)

//如何快速得出右移后的十进制数
1.取反加1 11....11
2.计算 1*(-2的31次方) + 1*(2的30次方) + ... + 1*(2的1次方) + 1*(2的0次方) = 1073741821 = 9>>>2

-1>>>0 这里JS会把符号位替换成0,所以结果并不是-1,而是-2的32次方+1

```

**Example**

取整,但不可对负数取整.

JS做位运算时,小数部分怎么处理?

```javascript
console.log(6.83>>>0) //6
```

其他

非数值运算会变成0

```javascript
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





#### break和continue

概要

```JavaScript
- break
* break可以用来结束 switch和循环语句,不能用在if语句中
* break一旦执行,循环会立即结束
* break会离它最近的循环起作用

- continue
* continue用来跳过当次循环
```





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

无序遍历对象的可枚举属性。语句针对每个唯一的属性

##### Syntax

```javascript
for (variable in object) {
  //statement
}
```

`variable` 每个迭代中对象里声明的不同属性名

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

##### Difference between `for...of` and `for...in`

* `for...in`语句迭代一个对象的可枚举属性
* `for...of`语句迭代可迭代对象定义的要迭代的值上迭代 (The `for...of` statement iterates over values that the [iterable object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables) defines to be iterated over.)

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



<hr/>



## 对象

### 0. 对象的类别

ECMAScript 6规范清晰定义了每一个类别的对象

* **普通(Ordinary)对象** 具有JavaScript对象所有的默认内部行为。
* **特异(Exotic)对象** 具有某些与默认行为不符的内部行为
* **标准(Standard)对象** ECMAScript 6规范中定义的对象，例如，Array、Date等。标准对象既可以是普通对象，也可以是特异对象。
* **内建对象** 脚本开始执行时存在于JavaScript执行环境中的对象，所有标准对象都是内建对象。



### 1.基本认识

```js
* 对象是一种新的数据类型
* 之前了解的数据类型是一个个独立的值,它们不适合表示一些更复杂的数据
* 对象就相当于一个容器,在对象中可以存放多种不同类型的数据
* 对象是一种复合数据类型
* 使用typeof检查一个对象时,会返回object
* 对象中可以存储不同类型的数据
	- 对象中存储的数据被称为属性(property)
```





### 2.创建对象3种方法

```js
* 创建对象(3种方法)
let obj = new Object(); //new字可以省略,当以非构造函数形式调用,Object行为等同于new Object()
let ojb = {};       //对象字面量 构造函数的语法糖
let obj = Object.create(null); 

工厂函数

属性名没有任何要求,任何值都可以作为对象的属性名
如果属性名太过特殊,则需要使用一个特殊的方式来设置:
```

#### 1.定义

使用**字面量**创建对象,可以在创建对象的同时向对象中添加属性. 使用**大括号{}**创建一个对象, 以在对象中指定需要的属性, 属性名和属性值以 **冒号** 连接,以 **逗号** 结尾, 最后一个属性最好不要写逗号

```JavaScript
let obj = {         //左边的花括号表示字面量的开始
    name:'孙悟空',
    age:18,
    gender:'男'
};
```



### 3.对象的属性

> 在JS中,对象属性分为两类: 数据属性和访问器属性. 

#### 1. 数据属性

> 数据属性包含的是一个数据的位置,在这可以对数据值进行读写.

#### 1.1.数据属性包含的4个特性

##### 1.1.1 configurable

默认值为true. 表示是否能通过delete删除属性从而重新定义属性; 能否修改属性的特性; 或能否把属性修改为访问器属性.

##### 1.1.2 enumerable

表示是否通过for-in循环返回属性

##### 1.1.3 writable

表示能否修改属性的值

##### 1.1.4 value

包含该属性的数据值. 默认为undefined.



```js
//实例 创建一个Person对象,打印name属性的默认值

let person = {
  name: 'mack',
  cell: '1234'
}

//Object.getOwnPropertyDescriptor()方法可获取指定属性的描述

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

//{value: "mack", writable: true, enumerable: true, configurable: true}
```



#### 1.2 修改数据属性的默认特性

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





#### 2.访问器属性 getter/setter

> 这个属性不包含数据值，包含的是一对get和set方法，在读写访问器属性时，就是通过这两个方法来进行操作处理的。
>
> 访问器属性不能直接定义，要通过Object.defineProperty()这个方法来定义。



#### 2.1访问器属性包含的4个特性

##### 2.1.1 configurable

>  默认为false. 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性

##### 2.1.2 enumerable

表示能否通过for-in循环返回属性,默认为false

##### 2.1.3 Get

在读取属性时调用的函数,默认值为undefined

##### 2.1.4 Set

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





### 4.读取/添加对象属性

```js
对象.属性名
对象['属性名']
使用中括号语法的条件:1.对象属性名不符合命名规范;2.如果使用变量的值作为属性名

var obj={
	'a-b':'c', //名字不合法 必须使用obj['a-b']来读取
	username:'zzz',
	age:33
}

var xx = 'username'
obj.xx 错误
obj[xx] 最终极端的obj['username']===obj.username


//向对象中添加属性
-- 语法:
对象.属性名 = 属性值
对象['属性名'] = 属性值;
```



### 5.重复的对象字面量属性

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





### 6.对象中的方法

####  1. in/delete/hasOwnPorperty

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



#### 2. 方法函数

```JavaScript
* 对象的属性可以是一个函数
* 当一个对象的属性是函数时,我们就称这个函数是当前对象的方法. 调用函数,称为调用对象的方法

* 函数和方法只是称呼上的不同,没有什么太本质的区别
```



```JavaScript
let obj = {};

obj.name = '孙悟空';
obj.age = 18;
obj.sayHello = function(){     //没有设置函数名称
    alert('大家好，我是孙悟空');
};

console.log(obj.sayHello); // 打印效果 是一个匿名函数

ƒ (){ 
    alert('大家好，我是孙悟空');
}

obj.sayHello(); //运行alert函数



```



#### 3. toString()

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

1.overriding the default toString method

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



2.Using toString() to detect object class

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



#### 4. valueOf()

**Define**

> this method returns the primite value of the specified object

**Syntax**

> valueOf()

**Return value**

the primitive value of the specified object.

A [(unary) plus sign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) can sometimes be used as a shorthand for valueOf. e.g. in `+new Number()`.

**Desc**

<u>JavaScript calls the `valueOf` method to convert an object to a primitive value.</u> You rarely need to invoke the `valueOf` method yourself, JavaScript automatically invoke it when encountering  an object where a primitive value is expected.

By default, the `valueOf` method is inherited by every object descended from `Object`. Every built-in core object overrides this method to return an appopriate value. If an object has no primitive value, `valueOf` returns the object iteself.

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



### 7.对象静态方法

> ECMAScript其中一个设计目标是：不再创建新的全局函数，也不在Object.prototype上创建新的方法。
>
> 从ECMAScript 5开始，避免创建新的全局方法和在Object.prototype上创建新的方法。 当开发者想向标准添加新方法时，他们会找一个适当的现有对象。
>
> 而在ECMAScript 6中，为了使某些任务更易完成，在全局Object对象上引入了一些新方法。



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

Object.is与`===`比较

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









如何保证对象属性的顺序?

#### Object.getOwnPropertyNames()

Object.getOwnPropertyNames()返回直接挂在目标对象上的可枚举、不可枚举属性. 但为了和ES5保持一致,不包括Symbol属性.

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





### 8.对象属性枚举for-in

#### 0. ES5和ES6属性枚举的区别

>  ECMAScript 5中未定义对象属性的枚举顺序，由JavaScript引擎厂商自行决定。然而，ECMAScript6严格规定了对象的自有属性被枚举时的返回顺序，这会影响到Object.getOwnPropertyNames()方法
>
> Reflect.ownKeys返回属性的方式，
>
> Object.assign()方法处理属性的顺序.



#### 1. 自有属性枚举顺序规则

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

对于for-in循环，由于并非所有厂商都遵循相同的实现方式，因此仍未指定一个明确的枚举顺序；而<span style="text-decoration:underline double red;">Object.keys()方法和JSON.stringify()方法都指明与for-in使用相同的枚举顺序，因此它们的枚举顺序目前也不明晰。</span>

#### 2. for...in枚举

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



### 9.遍历对象的循环方式

```js
for循环 for..in    for..of  object.keys()

forEach 是数组的一个方法，主要页是用来遍历数组的，效率最高，但是不可以使用continue和break
for循环是js当中最简单的遍历方法  主要是针对数组进行遍历的，效率不高，但是可以使用continue和break
for..in 循环主要是用来遍历对象的（遍历对象的可枚举属性的） 效率最低，原因是因为不但要遍历自身的属性还要遍历原型的

for..of 是es6里面新加的一种遍历方法（前提必须是可迭代对象），效率没有forEach高（比其它的要高），也可以使用continue和break，for..of只能针对可迭代对象

遍历对象最快的方法也是使用forEach 是把对象属性转化为数组然后进行遍历
Object.keys(searchParams) 是把一个对象转化为数组，这个数组当中存储的是这个对象所有的属性
```



### 10.对象类型介绍

```javascript
# 对象分类

* 内建对象
 - 由ES标准所定义的对象.例如string, number, boolean, Math, Date

* 宿主对象
 - 由JS的运行环境所提供的对象 //浏览器
 - BOM, DOM(window, document, alert, ....)

* 自定义对象
 - 由我们自己定义的对象
```



### 11.对象的引用和复制

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

用 `Object.assign` 代替 `for..in` 循环来进行简单克隆

```js
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user); 
```



#### 3.深层克隆

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





#### 4.总结

```js
对象通过引用被赋值和拷贝。换句话说，一个变量存储的不是“对象的值”，而是一个对值的“引用”（内存地址）。因此，拷贝此类变量或将其作为函数参数传递时，所拷贝的是引用，而不是对象本身。

所有通过被拷贝的引用的操作（如添加、删除属性）都作用在同一个对象上。

为了创建“真正的拷贝”（一个克隆），我们可以使用 Object.assign 来做所谓的“浅拷贝”（嵌套对象被通过引用进行拷贝）或者使用“深拷贝”函数，例如 _.cloneDeep(obj)。
```



#### 5.深拷贝

> 几种深拷贝方式

#### 5.1 JSON方式

```js
function deepClone(target) {
	return JSON.parse(JSON.stringify(obj));
}
```



#### 5.2 普通方法

```js
//09 文档中
直接进行赋值操作,字符串,数组,对象及对象的方法

例如,对象的方法
target.fn = proObj.fn.bind(target);
```



#### 5.3 递归

### 12. 对象使用的实例

#### 12.1 比较两个对象中的属性是否相同数量是否相等

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



### 13. ES6-属性初始值简写

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



### 14. ES6-对象方法简写

在ECMAScript 6中，语法更简洁，消除了冒号和function关键字

```javascript
//ES5
let person = {
  name: 'Nicholas',
  sayName() {
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
```

通过对象方法简写语法，在person对象中创建一个sayName()方法，该属性被赋值为一个匿名函数表达式，它拥有在ECMAScript 5中定义的对象方法所具有的全部特性。<span style="text-decoration:underline double red;">二者唯一的区别是，简写方法可以使用super关键字.</span>



### 15. 可计算属性名

#### ES5可计算属性名

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

#### ES6可计算属性名

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





## 函数

### 概要

在 JavaScript中，函数实际上是对象。每个函数都是Function类型的实例，而Function 也有属性和方法，跟其他引用类型一样。因为函数是对象，所以函数名就是指向函数对象的**[指针](https://www.zhihu.com/question/265576824)**，而且不一定与函数本身紧密绑定。

> 指针
>
> JavaScript中没有指针，引用的工作机制也不尽相同。在JavaScript中变量不可能成为指向另一个变量的引用。
> JavaScript引用指向的是值。如果一个值有10个引用，这些引用指向的都是同一个值，*他们相互之间没有引用/指向关系*。
> ———《你不知道的JavaScript 中卷》2.5 值和引用，第1版28页。

### 函数定义的方式及比较

函数创建有4种方式: 函数声明,函数表达式,及Function声明.

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

使用这种语法定义的函数可以是**命名函数或匿名函数**.函数表达式与函数声明几乎是等价的.函数定义最后有分号;当函数作为参数传递给另一个函数时,函数表达式很方便.

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



#### 函数参数的传递方式🔸:

**ECMAScript 中所有函数的参数都是按值传递的**。这意味着函数外的值会被复制到函数内部的参数
中，就像从一个变量复制到另一个变量一样。

如果是原始值，那么就跟原始值变量的复制一样，

如果是引用值，那么就跟引用值变量的复制一样。传递的是对象的引用.

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





**desc**

* 'Array-Like' means that `arguments` has a `length` property and properties indexed from zero, but it doesn't hava `Array`'s built-in methods like `forEach()` or `map()`.
* the `arguments` object is a local variable available within all non-arrow functions.
* u can refer to a function's arguments inside that function by using its `arguments` object
* it has entries(条目) for each argument the function was called with, with the first entry's index at 0.
* each arguments can also be set or reassigned
* the arguments object is not an `Array`. It is similar, but lacks all `Array` properties except `length`.
* <u>converted to a real Array</u>
  * [].slice.call(arguments)
  * Array.from(arguments)
  * [...arguments]
* the `typeof` opetator returns `'object'` when used with `arguments`





`arguments`变量只是 *”***类数组对象**“，并不是一个数组。称其为类数组对象是说它有一个<u>索引编号和`length`属性</u>。它并不拥有全部的Array对象的操作方法。

arguments 对象是一个类数组对象（但不是Array 的实例）:

* 使用中括号语法访问传入的实参,而不必定义形参
* 访问arguments.length,确定传入参数个数
* arguments对象可以跟命名参数一起使用
* arguments对象的值始终与对应的命名参数同步,但内存地址时不同的.
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

<u>this是在执行上下文创建时确定的一个在执行过程中不可更改的变量.</u>

> 所谓**执行上下文**，就是JavaScript引擎在执行一段代码之前将代码内部会用到的一些**变量**、**函数**、**this**提前声明然后保存在变量对象中的过程。这个'代码片段'包括：**全局代码**(script标签内部的代码)、**函数内部代码**、**eval内部代码**。而我们所熟知的作用域链也会在保存在这里，以一个类数组的形式存储在对应函数的[[Scopes]]属性中。
>
> this只在函数调用阶段确定，也就是执行上下文创建的阶段进行赋值，保存在变量对象中。这个特性也导致了this的多变性:🙂即当函数在不同的调用方式下都可能会导致this的值不同
>
> 来源: https://juejin.cn/post/6844903488304971789

**this的不同指向**

* 以`函数`形式调用,非严格模式下指向`window`,严格模式为`undefined`
* 以`方法`形式调用,this指向调用方法的`对象`
* 以`构造函数`形式调用,this指向`实例`
* 以`call/apply`形式调用, this是它们的`第一个参数`
* 以`箭头函数`形式调用,this由`外层作用域`决定
* 在`DOM事件`中,this指向当前触发事件的`事件源`



**改变this指向的几种方式**

* 箭头函数
* 函数内部赋值`_this=this`
* 使用`apply call bind`
* 构造函数



**箭头函数中的this详解**



**实例**

以函数形式调用

```javascript
let a = 1000,
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

console.log(func()); //
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



以构造函数形式调用

```js
来源: https://segmentfault.com/a/1190000002640298

- prototype this
 - 以构造函数形式调用时,this指向新建的实例化对象.
=====================================================
function Thing(){
    console.log(this.foo);
}
Thing.prototype.foo = 'bar';

var thing = new Thing();
console.log(thing.foo);
//'bar'
=======================================================
构造函数创建多个实例,实例会共享prototype值. 实例
function Thing(){}
Thing.prototype.foo = 'bar';
Thing.prototype.logFoo = function(){
    console.log(this.foo);
}
Thing.prototype.setFoo = function(newFoo){
    this.foo = newFoo;
}

var thing1 = new Thing();
var thing2 = new Thing();

thing1.logFoo();//bar
thing2.logFoo();//bar

thing1.setFoo('foo');
thing1.logFoo();//foo 为thing1添加了新属性  {foo: "foo"}
thing2.logFoo();//bar

=======================================================
函数创建的实例会共享函数的prototype属性的值.如果给这个函数的prototype赋值一个Array,所有的实例都会共享这个Array.除非你在这个实例里重写了这个Array,这种情况下,函数的prototype的Array就会被隐藏掉.
function Thing(){}
Thing.prototype.things = [];
var thing1 = new Thing();
var thing2 = new Thing();
thing1.things.push('foo');
console.log(thing2.things);//['foo']

=======================================================
多个函数链接
function Thing1(){}
Thing1.prototype.foo = 'bar';
function Thing2(){}
Thing2.prototype = new Thing1();

var thing = new Thing2();
console.log(thing.foo); //bar

=========================================================
原型链
functtion Thing1(){}
Thing1.prototype.foo = 'bar';
function.Thing2(){
    this.foo = 'foo';
}
Thing2.prototype = new Thing1();
function Thing3(){}
Thing3.prototype = new Thing2();

var thing = new Thing3();
console.log(thing.foo);//foo

==========================================================

function Thing1(){}    
Thing1.prototype.foo = 'bar';
Thing1.prototype.logFoo = function(){
    console.log(this.foo);
}
function Thing2(){
    this.foo = 'foo';
}
Thing2.prototype = new Thing1();

var thing = new Thing2();
thing.logFoo();//foo


======================================================
嵌套函数
function Thing(){}
Thing.prototype.foo = 'bar';
Thing.prototype.logFoo = function(){
    var info = 'attempting to log this.foo:';
    function doIt(){
        console.log(info, this.foo);
    }
    doIt();
}

var thing = new Thing();
thing.logFoo();//undefined 

====================================================
function Thing(){}    
Thing.prototype.foo = 'bar';
Thing.prototype.logFoo = function(){
    console.log(this.foo);
};
function doIt(method){
    method();
}

var thing = new Thing();
thing.logFoo();//bar
doIt(thing.logFoo);//undefined

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

在严格模式下访问arguments.callee 会报错。ECMAScript 5 也定义了arguments.caller，但在严格模式下访问它会报错，在非严格模式下则始终是undefined。这是为了分清rguments.caller和函数的caller 而故意为之的。而作为对这门语言的安全防护，这些改动也让第三方代码无法检测同一上下文中运行的其他代码。严格模式下还有一个限制，就是不能给函数的caller 属性赋值，否则会导致错误。

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





#### **方法-call()**

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
  const result = arguments.length > 0 ? thisArg[tempFn](...[...arguments].slice(1)) : thisArg[tempFn]();
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
```



#### **方法-apply()**

**define**

> the method calls a function with a given `this` value, and `arguments` provided as an array(or an array-like object)

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
  for (let i=0; i<arr.length; i++) {
    args.push('arguments[' + i + ']');
  }
  return eval('fn[tempFn](' + args +')');
}

Function.prototype.apply = function(obj, arr) {
  obj = toObject(obj);
  let tempFn = Symbol();
  obj[tempFn] = this;
  let result = obj.tempFn(...arr);
  delete obj.tempFn;
  return result;
  
}
function toObject(val) {
  const type = typeof val;
  let result = val;
  switch (type) {
    case 'string':
    case 'number':
    case 'boolean':
      result = Object(val);
      break;
    default:
      result = obj || globalThis;
  }
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

> 创建一个新韩淑,在bind()被调用时,这个新函数的`this`被指定位`bind()`的第一个参数,而其余参数将作为新函数的参数,供调用时使用.

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
Function.prototype.bind = function(obj) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
  }
  let fn = this;
  let argsOut = Array.prototype.slice.call(arguments, 1);
  return bound = function() {
    let argsInner = Array.prototype.slice.call(arguments);
    fn.apply(this instanceof fn ? this : obj, argsOut.concat(argsInner));
  }
  let F = function() {};
  F.prototype = this.prototype;
  bound.prototype = new F();
  
  return bound;
}
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



#### 求任意数阶乘

```JavaScript
- 定义一个函数,用来求任意数的阶乘

- 阶乘: 
5! = 5* 4* 3 * 2 * 1; //5 * 4!
4! = 4 * 3 * 2 *1;   // 4 * 3!
3! = 3 * 2 * 1;	    //  3 * 2!
2! = 2* 1;


============使用函数+for循环====================    
  
        
  function jiecheng(nums){
          let sum = 1;  
          for(i=1; i<=nums; i++){
              sum *= i;
          }
      return sum;
  }
  
  jiecheng();
  
=================使用阶乘=========================
    
function fn(i){
    if(i === 1){  //基线条件 设置递归停止的条件
        return 1;
    }
    
    return i * fn(i-1); //递归条件,设置如何对问题进行拆分
}

fn(i);
```



####   斐波那契数列/兔子问题

```JavaScript
一对兔子从出生后的第3个月起，每月可生出一对小兔子。
编写函数，求第n个月时，兔子的对数。

斐波那契数列:1 1 2 3 5 8 13 21.....

简化: 某一项数是前两项数之和
```





```JavaScript
function rabbit(i){
    if(i<=2){     //设置基准线
        return 1;
    }
    return rabbit(i-2)+rabbit(i-1);  //设置递归条件
}
rabbit(i);
```





### 立即调用的匿名函数(IIEF)

立即调用的匿名函数又被称作立即调用的函数表达式（IIFE，Immediately Invoked Function Expression）。它类似于函数声明，但由于被包含在括号中，所以会被解释为函数表达式。紧跟在第一组括号后面的第二组括号会立即调用前面的函数表达式。

使用IIFE 可以模拟块级作用域，即在一个函数表达式内部声明变量，然后立即调用这个函数。这样位于函数体作用域的变量就像是在块级作用域中一样。ECMAScript 5 尚未支持块级作用域，使用IIFE模拟块级作用域是相当普遍的。

在ECMAScript 5.1 及以前，为了防止变量定义外泄，IIFE 是个非常有效的方式。这样也不会导致闭包相关的内存问题，因为不存在对这个匿名函数的引用。为此，只要函数执行完毕，其作用域链就可以被销毁。

在ECMAScript 6 以后，IIFE 就没有那么必要了，因为块级作用域中的变量无须IIFE 就可以实现同样的隔离。下面展示了两种不同的块级作用域形式

```JavaScript
* 立即执行函数,在函数定义完毕后立即调用,只会调用一次
* 语法:
	(function(){语句...})() //调用括号放在里外都可以
  (function(){console.log(语句);}())
                

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

### 作用域(scope)

```javascript 
* 作用域就是指 变量的作用范围

* JS中有两种作用域：
	- 全局作用域
	- 局部作用域
		* 块作用域
		* 函数作用域

* 全局作用域
	- 全局作用域在网页打开时创建，在网页关闭时销毁
	- 所有直接写在script标签中的内容都位于全局作用域
		* 全局作用域中的所有变量，被称为全局变量，可以在页面的任意位置被访问
		* 全局作用域中的所有函数，被称为全局函数，可以在页面的任意位置被调用
	- 在JS中有一个全局对象(global object)叫做window，
		* 在全局作用域中所有使用var声明的变量都会作为window对象的 属性 保存
		* 在全局作用域中使用function定义的函数会作为window对象的 方法 保存
			* 函数实际上就相当于window对象的方法


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









### 函数作用域

- 在函数内定义的变量不能在函数之外的任何地方访问 || 一个函数可以访问定义在其范围内的任何变量和函数
- 定义在全局域中的函数可以访问所有定义在全局域中的变量。
- 在一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量

概要

```JavaScript
# 函数的作用域由函数的定义位置决定,和函数的调用位置无关

* 函数作用域在函数调用时创建，在调用结束时销毁  
* 函数每次调用都会产生一个新的函数作用域，函数作用域与函数作用域之间相互独立
* 在函数作用域中声明的变量是 局部变量
 - 局部变量只能在函数内部访问，无法被外部访问
* 在函数内部，使用var声明的变量和使用function开头的函数也会被提升
 - 函数作用域其实就是一个小的全局作用域
* 如果在函数内部声明变量时，省略var或let，则变量默认会成为全局变量(不希望出现的情况)


#  函数重新执行完,所有东西包括变量都会被销毁.
```



案例

```javascript
function fn(){
    let b = 20;
    console.log('函数内部: b =', b);
    
    function tt(){
        let c = 30;    //函数fn无法访问变量c
        console.log('函数内部的函数: b =', b);   //函数tt可以访问上一级函数fn里的变量
    }
    tt();
}

fn();


========================================================
    
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


=========================立即执行函数中的案例=========================
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

//
let a = 10;
function fn(){
    console.log(a);
}
function fn2(){
    let a = 20;
    fn();      // 函数是在全局中定义的
}
fn2(); //调用函数fn2后，打印的值是10
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
> 3.构造函数内部的this被赋值为这个新的对象(this指向新对象)
>
> 4.给新对象添加属性方法(执行构造函数内部的代码)
>
> 5.如果构造函数返回非空对象,则返回该对象; 否则,返回刚创建的新对象.

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

ECMAScript 6关于函数最有趣的变化可能是尾调用系统的引擎优化. 尾调用指的是函数作为另一个函数的最后一条语句被调用:

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

实际上，尾调用的优化发生在引擎背后，除非你尝试优化一个函数，否则无须思考此类问题。递归函数是其最主要的应用场景，此时尾调用优化的效果最显著。请看下面这个阶乘函数：

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



## 数组

> 数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。JavaScript 数组的长度和元素类型都是非固定的。因为数组的长度可随时改变，并且其数据在内存中也可以不连续，所以 JavaScript 数组不一定是密集型的，这取决于它的使用方式。
>
> 一般来说，数组的这些特性会给使用带来方便，但如果这些特性不适用于你的特定使用场景的话，可以考虑使用类型数组 [`TypedArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)。
>
> 只能用整数作为数组元素的索引，而不能用字符串。后者称为 [关联数组](https://en.wikipedia.org/wiki/Associative_array)。使用非整数并通过 [方括号](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#对象和属性) 或 [点号](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors) 来访问或设置数组元素时，所操作的并不是数组列表中的元素，而是数组对象的 [属性集合](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#属性) 上的变量。数组对象的属性和数组元素列表是分开存储的，并且数组的遍历和修改操作也不能作用于这些命名属性。



### 数组简介

```js
# 数组Array    //A大写,是一个类,首字母需要大写
 * 数组也是一个对象    //对象主要是用来存储对象的
 * 数组用来存储有序的数据   //Object对象中存储的数据是无序的
 * 数组中存储的数据成为 元素(element)
 * 数组中每一个元素都有一个唯一的序号,这个序号被称为 索引(index)
 * 索引是一组从0开始的整数
 * 使用typeof检查数组时,返回的是 'object'

```



#### 1. 空元素empty和undefined的区别

**介绍**

使用数组字面量初始化数组时，可以使用一串逗号来创建空位（hole）。ECMAScript 会将逗号之间相应索引位置的值当成空位，ES6 规范重新定义了该如何处理这些空位。

**ES5和ES6的不同表现**

ES6 之前的方法则会忽略这个空位，但具体的行为也会因方法而异.

ES6 则是明确将空位转为`undefined`，包括`Array.from`、`Array.of`,  扩展运算符、`copyWithin()`、`fill()`、`entries()`、`keys()`、`values()`、`find()`和`findIndex()`

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







### 创建数组3种方式

> 在ECMAScript 6以前,创建数组有两种方式: 调用Array构造函数;数组字面量语法. 
>
> 这两种方法均需列举数组中的元素,功能受限.如果将一个类数组对象(具有数值型索引和length属性的对象)转换为数组,可选方法有限.
>
> 为了解决以上问题,ES6新增了Array.of()和Array.from()两个方法

#### 1.Array构造函数

```js
let colors = new Array();
```

如果知道数组中元素的数量，那么可以给构造函数传入一个数值，然后length 属性就会被自动创建并设置为这个值.

创建数组时可以给构造函数传一个值, 如果这个值是**数值**，则会创建一个长度为指定数值的数组；而如果这个值是**其他类型的**，则会创建一个只包含该特定值的数组

```js
let colors = new Array(3);   //创建一个包含3 个元素的数组
let names = new Array('Greg'); //创建一个只包含一个元素，即字符串"Greg"的数组
```

##### 1.1 Array构造函数的缺点

```JavaScript
//如果给Array构造函数传入一个数值型的值，那么数组的length属性会被设为该值；如果传入多个值，此时无论这些值是不是数值型的，都会变为数组的元素。这个特性令人感到困惑，你不可能总是注意传入数据的类型，所以存在一定的风险。


解决: Array.of()
```



#### 2.数组字面量表示法

数组字面量是在中括号中包含以逗号分隔的元素列表，如下面的例子所示

```js
let colors = ["red", "blue", "green"]; // 创建一个包含3 个元素的数组
let names = []; // 创建一个空数组
let values = [1,2,]; // 创建一个包含2 个元素的数组
```

注意 与对象一样，在使用数组字面量表示法创建数组不会调用Array 构造函数。



#### 3.ES6Array构造函数方法

Array 构造函数还有两个ES6 新增的用于创建数组的静态方法：from()和of()。from()用于将类数组结构转换为数组实例，而of()用于将一组参数转换为数组实例。



##### 3.1 Array.of()

> 作用:
>
> 1.解决Array构造函数生成数组传入参数的不统一问题(单一数值型参数为数组长度,多个值为数组元素)
>
> 2.如果需要给一个函数传入Array的构造函数, 建议传入Array.of()来确保行为一致
>
> 操作:
>
> 要用Array.of()方法创建数组，只需传入你希望在数组中包含的值
>
> 注意:
>
> Array.of()方法不通过Symbol.species属性（见第9章 <深入理解ES6>）确定返回值的类型，它使用当前构造函数（也就是of()方法中的this值）来确定正确的返回数据的类型。

```javascript
//相同的调用,构造函数与of表现

//如果给Array构造函数传入一个数值型的值，那么数组的length属性会被设为该值；如果传入多个值，此时无论这些值是不是数值型的，都会变为数组的元素。这个特性令人感到困惑，你不可能总是注意传入数据的类型，所以存在一定的风险。
let items1 = new Array(2);
consol.log(items1.length); //2
console.log(items[0]); //undefined

items = new Array("2");
console.log(items1.length); //1
console.log(itesms1[0]); //'2'

items1 = new Array(1,2);
console.log(items1.length); //2
console.log(items1[0]); //2


let items2 = Array.of(2);
console.log(items2.length); //1
console.log(items2[0]) //2
```



```javascript
function createArray(arrayCreator, value) {
  return arrayCreator(value);
}

let items = createArray(Array.of, value);
```





##### 3.2 Array.from()

> JavaScript不支持直接将非数组对象转换为真实数组，arguments就是一种类数组对象，如果要把它当作数组使用则必须先转换该对象的类型
>
> Array.from()方法可以接受**可迭代对象或类数组对象**作为第一个参数，最终返回一个新的数组.可迭代对象包括ES6新增的Set,Map类型
>
> 注意: Array.from()方法也是通过this来确定返回数组的类型的。(?)

**参数**

```javascript
Array.from(arrayLike[, mapFn[, thisArg]]
```

`arrayLike` 想要转换成数组的伪数组对象或可迭代对象

`mapFn` **可选**

* 如果指定了该参数，新数组中的每个元素会执行该回调函数

`thisArg` **可选**

* 执行回调函数 `mapFn` 时 `this` 对象

**返回值**

一个新的[`数组`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)实例

**描述**

`Array.from()` 可以通过以下方式来创建数组对象

* 伪数组对象（拥有一个 `length` 属性和若干索引属性的任意对象）
* [可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)（可以获取对象中的元素,如 Map和 Set 等）
* `Array.from()` 方法有一个可选参数 `mapFn`，让你可以在最后生成的数组上再执行一次 [`map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法后再返回。也就是说` Array.from(obj, mapFn, thisArg) `就相当于` Array.from(obj).map(mapFn, thisArg),` 除非创建的不是可用的中间数组。 这对一些数组的子类`,`如 [typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) 来说很重要, 因为中间数组的值在调用 map() 时需要是适当的类型。
* `from()` 的 `length` 属性为 1 ，即 `Array.from.length === 1`。

**实例**

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







##### 3.2.1 ES5和ES6 在转换组数上的比较

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



##### 3.2.2 Array.from() 映射转换

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

##### 3.2.3 使用

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

我们无需创建一个数组来存储对象集合,反而,我们可以用对象集合存储它自己,在`Array.prototype.push`上使用`call`来调用, ,让方法认为在处理数组. ????

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

**描述**

`unshift` 方法会在调用它的类数组对象的开始位置插入给定的参数。

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



#### 4. 遍历数组的问题

##### 1. forEach()中无法return/break,

for循环和for-in, for...of能正确响应break、continue和return语句，但forEach不行。 

```js
//跳出for循环使用break, 但在数组中用forEach循环如果要退出使用break会报错,使用return也不能跳出.

//原因:


//解决方法:
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



#### toString

`**toString()**` 返回一个字符串，表示指定的数组及其元素

```js
Array.prototype.toString()

//描述
-Array对象覆盖了Object的 toString 方法。对于数组对象，toString 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素。
-当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法
```



#### forEach

**syntax**

```javascript
forEach(callback, thisArg)
```



**方法重写**

```javascript
Array.prototype.myForEach = function(callback) {
  //判断this是否合法
  if (this === null || this === undefined) {
    return new TypeError("cannot read property of 'myForEach' of null");
  }
  
  //判断callback是否合法
  if (Object.prototype.toString.call(callback).slice(8, -1) !== 'Function') {
    return new TypeError(callback + 'is not a function');
  }
  
  let _arr = this,
      thisArg = arguments[1] || window;
  for (let i=0; i<_arr.length; i++) {
    callback.call(thisArg, __arr[i], i, __arr);
  }
}
```



#### slice-截取

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
//代码实现
Array.prototype.slice = function(start,end){
  let result = new Array();
  let start = start || 0;
  let end = end || this.length;
  for(let i=start;i<end;i++){
    result.push(this[i])
  }
  return result;
}
```





#### splice-删除 替换 新增

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



**代码实现**

```js
//代码实现  https://blog.csdn.net/weixin_43523913/article/details/106021147
//https://blog.csdn.net/lunahaijiao/article/details/112645946


Array.prototype.splice = function (start, deleteCount) {
  // 参数个数
  let argLen = arguments.length;
  // 数组
  let array = Object(this);
  // 数组的长度
  let len = array.length;
  // 添加元素的个数
  let addCount = argLen > 2 ? argLen - 2 : 0;

  // 计算有效的start
  let startIndex = computeSpliceStartIndex(start, len);
  // 计算有效的deleteCount
  let delCount = computeSpliceDeleteCount(startIndex, deleteCount, len);
  // 记录删除的数组元素
  let deletedElements = new Array(delCount);

  // 将删除的元素记录到deleteArray
  recordDeleteElements(startIndex, delCount, array, deletedElements)

  // 移动数组元素
  moveElements(startIndex, delCount, array, addCount)

  let i = startIndex
  let argumentsIndex = 2

  // 插入新元素
  while (argumentsIndex < argLen) {
    array[i+1]=arguments[argumentsIndex++]
  }

  array.length = len - delCount + addCount

  return deletedElements;
}

// 计算真实的start
function computeSpliceStartIndex(start, len) {
  // 处理负值,如果负值的绝对值大于数组的长度,则表示开始位置为第0位
  if (start < 0){
    start += len;
    return start < 0 ? 0 : start;
  }
  // 处理超出边界问题
  return start > len - 1 ? len - 1 : start;
}

// 计算真实的deleteCount
function computedSpliceDeleteCount(startIndex, deleteCount, len) {
  // 超出边界问题
  if (deleteCount > len - startIndex) deleteCount = len - startIndex;
  // 负值问题
  if (deleteCount < 0) deleteCount = 0;
  return deleteCount;
}

// 记录删除元素,用于返回结果数组
function moveElements(startIndex, delCount, array, addCount) {
  for (let i = 0; i < delCount; i++){
    deletedElements[i] = array[startIndex + i];
  }
}

// 移动数组元素,便于插入新元素
function moveElements(startIndex, delCount, array, addCount) {
  let realAddCount = addCount - delCount;
  if (realAddCount) {
    // 向后移动
    for (let i = array.length - 1; i >= startIndex + delCount; i--){
      array[i+realAddCount]=array[i]
    }
  } else if (realAddCount < 0) {
    // 向前移动
    for (let i = startIndex + delCount; i <= array.length - 1; i++){
      if (i + Math.abs(realAddCount) > array.length - 1) {
        // 删除冗余元素
        delete array[i];
        continue;
      }
      array[i]=array[i+Math.abs(realAddCount)]
    }
  }

```



#### concat()

**定义**

**`concat()`** 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组

**参数**

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

`valueN` 可选

数组和/或值，将被合并到一个新的数组中。如果省略了所有 `valueN` 参数，则 `concat` 会返回调用此方法的现存数组的一个浅拷贝。

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





  



#### indexOf()

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



#### lastIndexOf()

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



#### join()

**定义**

`**join()**` 方法将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN_docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该元素字符串而不使用分隔符。

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



  

#### reverse()

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



####   sort()

**定义**

`sort()`方法用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。**默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的.** 

可以用来对一个数组进行排序,它是一个**破坏性的方法**..调用后,原数组的顺序就会被改变.

可以通过传递一个 回调函数 来自定义排序规则

**参数**

```javascript
arr.sort([compareFunction])
```

`compareFunction` 可选

* 用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
* `firstEl` 第一个用于比较的元素。
* `secondEl` 第二个用于比较的元素

**返回值**

排序后的数组。请注意，数组已原地排序，并且不进行复制。

**描述**

* 如果没有指明 `compareFunction` ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序。
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
  return a - b;
}

- 如果希望降序排列(从大到小),传:
function(a, b){
  return b - a;
}

- 乱序排列
function(a, b){ //参数a与b写不写都一样了
  return Math.random() - Math.random
}
```

**为什么升序是a - b????**

```javascript
//https://blog.csdn.net/weixin_42207975/article/details/107538527

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

> https://juejin.cn/post/6844903986479251464#heading-33    本篇文章重要 精读

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





#### map()

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

**重写**

```javascript
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



#### filter()

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



#### reduce()

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

`callback` 

执行数组中每个值 (如果没有提供 `initialValue则第一个值除外`)的函数，包含四个参数：

* `accumulator` 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或`initialValue`（见于下方）。
* `currentValue` 数组中正在处理的元素
* `index` **可选** 数组中正在处理的当前元素的索引。 如果提供了`initialValue`，则起始索引号为0，否则从索引1起始。
* `array` **可选** 调用`reduce()`的数组

`initialValue`  **可选**

* 作为第一次调用 `callback`函数时的第一个参数的值。 
* 如果没有提供初始值，则将使用数组中的第一个元素。 
* 在没有初始值的空数组上调用 reduce 将报错。

**返回值**

函数累计处理的结果

**描述**

* `reduce`为数组中的每一个元素依次执行`callback`函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：
* 回调函数第一次执行时，`accumulator` 和`currentValue`的取值有两种情况：
  * 如果提供了`initialValue`，`accumulator`取值为`initialValue`，`currentValue`取数组中的第一个值；
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

```javascript
Array.prototype.myReduce = function (callback) {
  let _arr = this,
      accumulator = argument[1],
      i = 0;
  //判断是否传入初始值
  if (accumentlator === undefined) {
    //没有初始值的空数组调用reduce应该报错
    if (_arr.length === 0) {
      throw new Error('initVal and Array.length > 0 need one');
    }
    
    //初始值赋值给
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



#### some

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

**返回值**

数组中有至少一个元素通过回调函数的测试就会返回**`true`**；所有元素都没有通过回调函数的测试返回值才会为false。

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

**返回值**

如果回调函数的每一次返回都为 [truthy](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 值，返回 `**true**` ，否则返回 `**false**`

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
Array.prototype.非破坏性方法.call('string', parameter)
[].非破坏性方法.call('string', parameter)
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



### 数组操作



#### 创建一个包含1 … N的数组

```javascript
//https://www.codenong.com/3746725/

//循环方法  写法繁琐
let arr = [];
for (let i=0; i<=n; i++) {
  arr.push(i);
}

//ES6
Array.from(Array(num).keys())

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



#### 判断是否存在数组中 in

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
```



#### 数组去重的8种方法

* 双for循环+splice
* for+indexOf/includes
* reduce+includes+(push/concat)
* filter+indexOf
* sort()+快慢指针
* [...new Set()]
* Array.from(new Set())
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
console.log(arr);
```



for+indexOf / for+includes

```javascript
function unique(arr) {
  let uniqueArr = [];
  for (let i=0; i<arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) !== -1) {
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





reduce+includes+push / reduce+includes+concat

```javascript
//reduce方法
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((prev,current)=>{
  if(!prev.includes(current)){
    return prev.push(current)
  }else{
    return prev;
  }
},[])

let arr=[1,2,2,4,null,null].reduce(prev,current)=>{
  return prev.includes(current)?prev:prev.concat(current)
,[]}
```



filter+indexOf方法

```javascript
//filter方法
let arr = [1,2,2,4,null,null].filter((item,index,arr)=>arr.indexOf(item)===index)

```



sort()排序+快慢指针

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
  
  while(right < arr.length) {
    if (arr[fast - 1] !== arr[fast]) {
      arr[slow++] = arr[fast];
    }
    ++fast;
  }
  arr.length = slow;
  return arr;
}
```



Set去重

```javascript
function unique(arr) {
  const result = new Set(arr);
  return [...result]; //使用扩展运算符将Set结构转换为数组
}
```



Array.from() + Set

```javascript
//mdn https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
funtion combine() {
  let arr = [].contact.apply([], arguments);
  return Array.from(new Set(arr));
}

let m = [1,2,2], n = [2,3,3];
console.log(combine(m, n)); //[1,2,3]
```



Map方法

```javascript
function unique(arr) {
  let map = new Map(),
      uniqueArr = new Array();
  for (let i=0; i<arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], true)
    } else {
      map.set(arr[i], false);
      uniqueArr.push(arr[i])
    }
  }
  return uniqueArr;
}
```



#### 数组扁平化

> [面试官连环追问：数组拍平（扁平化） flat 方法实现 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904025993773063#heading-14)
>
> [2021年前端各大公司都考了那些手写题(附带代码) - 掘金 (juejin.cn)](https://juejin.cn/post/7033275515880341512)









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
let msg = 'Multiline \n\
string';

console.log(msg); //multiline
									//string
```

在ECMAScript 6之前的版本中，通常都依靠数组或字符串拼接的方法来创建多行字符串，例如： ????

```javascript
let msg = [
  'Multiline ',
  'string'
].join('\n');

let msg = 'Multiline \n' +
    'string';
```



#### 简化多行字符串

ECMAScript 6的模板字面量的语法简单，其极大地简化了多行字符串的创建过程。如果你需要在字符串中添加新的一行，只需在代码中直接换行，此处的换行将同步出现在结果中。

```javascript
let msg = `multiline
string`;

console.log(msg); // 'multiline
									// string'
console.log(msg.length); 16
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

在一个模板字面量中，你可以把任何合法的JavaScript表达式嵌入到占位符中并将其作为字符串的一部分输出到结果中。

占位符由一个左侧的${和右侧的}符号组成，中间可以包含任意的JavaScript表达式。举个占位符最简单的例子，你可以直接将一个本地变量嵌入到输出的字符串中.

[插图]模板字面量可以访问作用域中所有可访问的变量，无论在严格模式还是非严格模式下，尝试嵌入一个未定义的变量总是会抛出错误。

可以嵌入除变量外的其他内容，如运算式、函数调用，等等。就像这样：

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

#### 标签模板!!

模板字面量真正的威力来自于标签模板，每个模板标签都可以执行模板字面量上的转换并返回最终的字符串值。标签指的是在模板字面量第一个反撇号（`）前方标注的字符串.

```javascript
let msg = tag`Hello world`;  //在这个例子中的模板标签是tag
```

标签可以是一个函数，调用时传入加工过的模板字面量各部分数据，但必须结合每个部分来创建结果。**第一个参数是一个数组，包含JavaScript解释过后的字面量字符串，它之后的所有参数都是每一个占位符的解释值。**

标签函数通常使用不定参数特性来定义占位符，从而简化数据处理的过程，就像这样：

```javascript
function tag(literals, ...substitutions) {
  //返回一个字符串
}
```

```javascript
let count = 10,
    price = .25,
    msg = passthru`${count} items cost $${(count * price).toFixed(2)}.`;
```

如果你有一个名为passthru()的函数，那么作为一个模板字面量标签，它会接受3个参数：首先是一个literals数组，包含以下元素：

* 第一个占位符前的空字符串（""）
* 第一、二个占位符之间的字符串（" items cost $"）
* 第二个占位符后的字符串（"."）

下一个参数是变量count的解释值，传参为10，它也成为了substitutions数组里的第一个元素；最后一个参数是(count * price).toFixed(2)的解释值，传参为"2.50"，它是substitutions数组里的第二个元素。

注意，literals里的第一个元素是一个空字符串，这确保了literals[0]总是字符串的始端，就像literals[literals.length - 1]总是字符串的结尾一样。substitutions的数量总比literals少一个，这也意味着表达式substitutions.length === literals.length - 1的结果总为true。

通过这种模式，我们可以将literals和substitutions两个数组交织在一起重组结果字符串。先取出literals中的首个元素，再取出substitution中的首个元素，然后交替继续取出每一个元素，直到字符串拼接完成。于是可以通过从两个数组中交替取值的方式模拟模板字面量的默认行为，就像这样：

```javascript
function passthru(literal, ...substitution) {
  let result = '';
  //根据substitution的数量来确定循环的执行次数
  for (let i=0; i<substitution; i++) {
    result += literals[i];
    result += substitution[i];
  }
  
  //合并最后一个literal
  result += literals[literals.length - 1];
  
  return result;
}

let count = 10,
    price = 25,
    message = passthru`${count} items cost $${(count * price).toFixed(2)}.`;

console.log(message); //10 items cost $2.50.
```

这个示例定义了一个passthru标签，模拟模板字面量的默认行为，展示了一次转换过程。此处的小窍门是使用substitutions.length来为循环计数，使用literals.length常常会越界。这段代码可以正常运行，在ECMAScript 6中已经详尽地定义了literals和substitutions二者间的关系。

数组substitutions里包含的值不一定是字符串，就像之前的示例一样，如果一个表达式求值后得到一个数值，那么传入的就是这个数值。至于这些值怎么在结果中输出，就是标签（Tag）的职责了。

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
isFinite(2e64);      // true, 在更强壮的Number.isFinite(null)中将会得到false


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





### 8. 其他

> [前端应该知道的JavaScript浮点数和大数的原理 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/66949640)

#### 1. IEEE 754标准

**背景**

计算机中如何存储整数和小数?

> 计算机内部信息都是由二进制方式表示的,但由于**某些浮点数没办法用二进制准确的表示出来**，也就带来了一系列精度问题。当然这也**不是JS独有的问题**。

计算机中如何将小数转换成二进制?

* 整数部分 除2取余数，若商不为0则继续对它除2，当商为0时则将所有余数逆序排列；
* 小数部分 乘2取整数部分，若小数不为0则继续乘2，直至小数部分为0将取出的整数位正序排列。若小数部分无法为零，根据有效位数要求取得相应数值，位数后一位0舍1入进行取舍）

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
0.1toPrecision(16) //0.1000000000000000
0.1toPrecision(17) //'0.10000000000000001'
0.1toPrecision(20) //
0.1toPrecision(30) //
0.1toPrecision(64) //0.1000000000000000055511151231257827021181583404541015625000000000
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
Number.MAX_SAFE)INTEGER  /9007199254740991

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







## 原型和原型链

> [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2#) 

### 构造函数创建对象

```javascript
function Person() {
  
}

let person = new Person();
person.name = 'Kevin';
console.log(person.name); //Kevin
```

在这个例子中，Person 就是一个构造函数，我们使用 new 创建了一个实例对象 person。

### prototype

构造函数与原型

* 每个函数都有一个 prototype 属性，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的**实例**的原型对象
 * 如果函数作为普通函数调用,则原型对象没有用;
 * 如果函数作为构造函数调用, 那么它所创建的对象都会由一个隐含的属性(__proto__)也指向该原型对象
 * 原型对象就相当于是一个公共区域,可以被类及该类的所有实例访问 //类-构造函数 实例-函数创建的对象

**什么是原型呢？**

可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

### \_\_proto\_\_

实例与原型

这是每一个JavaScript对象(除了 null )都具有的一个属性，叫\_\_proto\_\_，这个属性会指向该对象的原型

```javascript
//可以在火狐或者谷歌中输入
function Person() {}

let person = new Person;
console.log(person.__proto__ == Person.prototype); //true
```

### constructor

原型是否有属性指向构造函数或实例呢？

指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，每个原型都有一个 constructor 属性指向关联的构造函数。

```javascript
function Person() {}

console.log(Person.prototype.constructor === Person); //true
```



### 实例与原型

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层(Object.prototype)为止。



### 原型的原型

原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它

```javascript
let obj = new Object();
obj.name = 'Kevin';
console.log(obj.name); //Kevin
```

原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 __proto__ 指向构造函数的 prototype ，所以我们再更新下关系图：

![prototyype](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/prototype4.3l1xwglbz600.png)

### 原型链

Object.prototype的原型为null

```javascript
console.log(Object.prototype.__proto__ === null); //true
```

null代表什么？

> null 表示“没有对象”，即该处不应该有值。

所以 Object.prototype.__proto__ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思

![原型链](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype5.png)

图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。

#### 原型链概述

- 当我们要获取一个对象的属性时,浏览器会先在对象自身中寻找
- 如果有则直接使用,如果没有则去对象的原型中寻找
- 找到了则使用,没有则去原型的原型里去寻找.以此类推, 直到找到Object的原型,如果依然没有找到则返回undefined
- Object的原型是所有对象的原型,它的原型没有原型

#### 使用

- 可以将对象中公有的属性(方法)统一存储在原型对象中. 这样只需要设置一次,即可让所有的实例都具有该属性(方法)
- 以后在创建构造函数时,
 对象中独有的属性, 在构造函数内通过this.xxx的形式来设置
  对象中公有的属性, 在构造函数外,通过原型来设置,xxx.prototype.xxx

### 补充

#### constructor

```javascript
//例子
function Person() {}

let person = new Person;
console.log(person.constructor === Person); //true
```

当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性

```javascript
person.constructor === Person.prototype.constructor; //true
```



#### \_\_proto\_\_

绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.\_\_proto\_\_ 时，可以理解成返回了 Object.getPrototypeOf(obj)





#### 真的是继承吗？

> 继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。

\_\_proto\_\_特性

* 只能在对象字面量中指定一次\_\_proto\_\_, 如果指定两个则会抛出错误.这是唯一具有该限制的对象字面量属性
* 可计算形式["__proto__"]的行为类似于普通属性，不会设置或返回当前对象的原型。与对象字面量属性相关的所有规则均适用于此形式，应用不可计算的形式则会抛出异常。

ECMAScript 6引擎中，Object.prototype.\_\_proto\_\_被定义为一个访问器属性，其get方法会调用Object.getPrototypeOf()方法，其set方法会调用Object.setPrototypeOf()方法。因此，使用\_\_proto\_\_和使用Object.getPrototypeOf()方法或Object.setPrototypeOf()方法的区别在于，**\_\_proto\_\_可以直接设置对象字面量的原型**。

```javascript
let person = {
  getGreeting() {
    return 'Hello';
  }
};

let dog = {
  getGreeting() {
    return 'Woof';
  }
};

//原型是person
let friend = {
  __proto__: person
};

console.log(friend.getGreeting()); //'Hello'
console.log(Object.getPrototypeOf(friend) === person); //true
console.log(friend.__proto__ === person); //true

//将原型设置为dog
friend.__proto__ = dog;
console.log(friend.getGreeting()); //'Woof'
console.log(friend.__proto__ === dog); //true
console.log(Object.getPrototypeOf(friend) === dog); //true
```

此示例没有通过调用Object.create()方法来创建friend对象，而是创建一个标准对象字面量，并将一个值赋给\_\_proto\_\_属性。<u>换句话说，当使用Object.create()方法创建对象时，必须为所有其他对象属性指定完整的属性描述符。 ????</u>



#### 构造函数中的对象创建方法(函数)

```JavaScript
目的: 构造函数/类的实例 使用 方法.可以在构造函数中创建方法


## 向类(构造函数)中的实例(对象)添加一个方法(对象的属性是函数)
function Person(name, age){
    this.name = name;
    this.age = age;
    //给新的对象添加一个方法
    this.sayHello = function(){
        alert('hello, 大家好,我是'+this.name);
    }
}

let p = new Person('孙悟空', 18);
let p2 = new Person('猪八戒', 18);
p.sayHello();
p2.sayHello();

===========================================================================

## 上面写法的问题: ??
- 将对象的方法直接定义在构造函数中 
 - 意味着构造函数每执行一次,就会创建一个新的函数对象.
  //怎么判断是否是同一个对象,使用全等判断
  //判断两个函数是否为同一个
  //console.log(p.sayHello === p2.sayHello); //返回false 
 - 也就是说每一个对象都有他自己的sayHello函数
- 每一个函数的代码和功能是一致的,重复创建非常浪费内存空间

==============================================================================
## 如何改进? 
让sayHello这个共享函数放在构造函数外边

function Person(name, age){
    this.name = name;
    this.age = age;
    //给新的对象添加一个方法
    this.sayHello = fn; //函数直接赋值
    
}
function fn(){
        alert('hello, 大家好,我是'+this.name);
}

let p = new Person('孙悟空', 18);
let p2 = new Person('猪八戒', 18);
p.sayHello();
p2.sayHello();    
console.log(p.sayHello === p2.sayHello); //现在只有一个函数,故相等    

=================================================================================
 上面的解决方法不完美:

1.函数直接定义在全局中,影响命名空间; //
2.函数定义在外面,每一次都要赋值; //最好的方法是函数只创建一次,值只赋值一次

```

