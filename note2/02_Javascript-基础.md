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
  * 标识符可以含有==字母,数字,下划线,$==,但不能以数字开头. 
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

字面量是由语法表达式定义的常量；或，通过由一定字词组成的语词表达式定义的常量

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

**字符串中使用特殊的字符**

> 除了普通字符, 也能在字符串中使用特殊字符.

```js
'one line \n another line'
```

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
| \xXX                             |                                             |
| \uXXX                            |                                             |
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



### let和var的区别

概要

```JavaScript
var和let的区别:
1.let声明的变量有块作用域,var声明的变量没有
2.let不能在初始化前访问变量 var可以
3.var声明的全局变量会添加到window对象中,let声明的不会
4.let不能重复声明变量 var可以
```



### 块级作用域

#### 1.var声明及变量提升（Hoisting）机制

> 在函数作用域或全局作用域中通过关键字var声明的变量，无论实际上是在哪里声明的，都会被当成在当前作用域顶部声明的变量，这就是我们常说的提升（Hoisting）机制。

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

变量value的声明被提升至函数顶部，而初始化操作依旧留在原处执行，这就意味着在else子句中也可以访问到该变量，且由于此时变量尚未初始化，所以其值为undefined. ECMAScript 6引入块级作用域来强化对变量生命周期的控制。

#### 2.块级声明

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

```js
1.都是块级标识符，只在当前代码块内有效，一旦执行到块外汇立即被销毁；
2.在同一作用域声明已经存在的标识符会导致语法错误，无论标识符是使用var(全局或函数),还是let(块级作用域)声明的。

3.无论是否是严格模式，都不能为const定义的常量再赋值
4.JS中的常量如果是对象，则对象的值可以修改
```



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

#### 3.循环中的块作用域绑定

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



#### 5.最佳实践

> 默认使用const，只有确实需要改变变量的值时使用let

### 数据类型(字面量的类型)++

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

* JS中字符串需要用引号引起来, 单双引号皆可, 不能混用,不能跨行使用.  新版使用反斜杠+n换行

* 同类型引号之间不能嵌套 

* JS中使用反斜杠作为转义字符
  
  * \n 换行   document.write()需要使用标签\<br>进行换行
  * \t  制表符(缩进)

#### 模板字符串

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

###   typeof

typeof 运算符 可以用来检查一个变量的数据类型 返回的结果是 ==字符串==

```js
- 使用typeof检查一个数值(种类有整数和小数,先暂时这么记)时,会返回一个number
- 使用typeof检查一个字符串,会返回string
- 检查null object array时,返回的都是object. 因为这几个是Ojbect重写的实例,他们有自己的toString方法. 按照原型链的思路会优先使用重写后的toString方法.
```



类型之间的比较

```js
null == undefined  //正确
undefined == false //错误 undefined换成布尔值是false,讲解说的是比较复杂没有转换类型
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



### Object.prototype.toString

```js
- toString()方法能返回这个对象的类型(字符串形式)
```







#### null和undefined使用比较

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



### 判断变量是否为数组4种方法

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



### Object.prototype.toString.call原因

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







### 基本类型和引用类型

```HTML
基本类型:string, number, boolean, undefined, symbol,bigInt
引用类型:Object, Function, null

两者区别:引用类型可以添加属性和方法,而基本类型不可以

基本类型
基本类型的变量是存放在栈内存（Stack）里的
基本数据类型的值是按值访问的
基本类型的值是不可变的
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

* 如果两个值相等,返回true,否则返回false

* 如果比较的两个值类型不同,它会将其转换为相同的类型,然后再比较

* 通常情况下，两个不同类型的值都会转换成 ==**数值number**==，然后比较

* null == undefined 返回的是true

* 推荐使用全等运算符(===)

  ```html
  字符串和数字的布尔类型转换规则是： Javascript会将undefined，false和0，NaN和空字符串'',空格字符串'  '视为false，其他值视为true
  
  let result = 10;
  result 10 == '10'; //true
  result true == '1'; //true
  result = null == undefined; //true
  ```

  
  
  

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

如果指定的属性在指定的对象或其原型链中，则**`in` 运算符**返回`true`

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





#### 5.3 双问号运算符??

<kbd>??</kbd> 空值合并  注意兼容性

```js
let c = "haha";
c = null; //没值
c = undefined; //没值
c = NaN; //是一个值
//如果c有值就赋值给d,如果c没值就把空值合并后的  
let d = c ?? 'c没有值';
console.log(d);
```

```js
//双问号运算符??，我理解是为了解决或运算符||而设计出来的。
或运算符用法:当左侧的数据为假值(数字 0, 布尔类型的 false，空字符串，undefined, null)时，则执行右侧的语句。
1.双问好运算符可以解决, false和0都是正常的值,或运算符出错的问题.

const getScore=(score)=>{return score ?? 1;};
getScore(0);                         

2.双问好运算符可以与等号结合成一个赋值操作,当左侧为null或undefined时,则将右侧语句的结果赋值给左侧的变量.                 score ??= 1; //1


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





### 7. 运算符优先级

> 参考mdn





### 代码块

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



## 流程控制语句

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













### 条件分支语句

#### switch语句

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



### 循环语句

> 循环语句可以让指定的代码反复执行多次



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









### 循环语句

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





### for循环

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



### break和continue

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





#### JS中如何跳出循环/结束遍历

> https://segmentfault.com/a/1190000020176190
>
> https://juejin.cn/post/6844904032071319565

| 序号 | 方法          | break  | continue     | return       | return true  | return false |
| ---- | ------------- | ------ | ------------ | ------------ | ------------ | ------------ |
| 1    | for循环       | √      | 跳出本次循环 | 不合法       | 不合法       | 不合法       |
| 2    | for...in      | √      | 跳出本次循环 | 不合法       | 不合法       | 不合法       |
| 3    | Array.forEach | 不合法 | 不合法       | 跳出本次循环 | 跳出本次循环 | 跳出本次循环 |
| 4.   | Array.map     | 不合法 | 不合法       | 跳出本次循环 | 跳出本次循环 | 跳出本次循环 |
| 5    | Array.some    | 不合法 | 不合法       | 跳出本次循环 | 成功         | 跳出本次循环 |
| 6    | Array.every   | 不合法 | 不合法       | 成功         | 跳出本次循环 | 成功         |
| 7    | Array.filter  | 不合法 | 不合法       | 跳出本次循环 | 跳出本次循环 | 跳出本次循环 |
| 8    | for...of      |        |              | 跳出循环     |              |              |



<hr/>



## 对象

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
let obj = new Object();
let obj = Object(); // new可以省略
let ojb = {};       //对象字面量
工厂函数

属性名没有任何要求,任何值都可以作为对象的属性名
如果属性名太过特殊,则需要使用一个特殊的方式来设置:
```

#### 对象字面量

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





#### 2.访问器属性

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





### 4.读取对象属性2种方法

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
```



### 5.向对象种添加属性

```js
* 向对象中添加属性
-- 语法:
对象.属性名 = 属性值
对象['属性名'] = 属性值;

//obj.name = '孙悟空';
//obj.age = 19;
//obj.name = 'xxx' 后面的可以把前面相同的属性值的覆盖掉
```





### 6.对象中的方法

####  in/delete

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
	
```



JS中对象的**属性值**可以是任意类型的数据,也可以是一个对象

```JavaScript
let obj = Object();

obj.age = 18;
obj.test = Object();
obj.test.name = '猪八戒';
obj.test.tt = Object();

```

 



#### 方法函数

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



### 7.对象静态方法

```js
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95
```



#### Object.assign()

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



如何保证对象属性的顺序?

#### Object.getOwnPropertyNames()

Object.getOwnPropertyNames()返回直接挂在目标对象上的可枚举、不可枚举属性

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





#### Object.is

判断两个值是否为[同一个值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness).  于相等运算符,全等运算符一起可以来判断操作数是否为同一个对象的实例.

与`==`运算符不通,`Object.is`不会强制转换两边的值.

与`===`运算符不同,`Object.is`会将`-0`和`+0`视为不相等,将`Number.NaN`与`NaN`视为相等.

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



### 8.对象属性枚举for-in

`for...in`语句以任意顺序遍历一个对象的除了[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性.

**数组迭代和for...in的关系**

for...in不应该用于迭代一个关注索引顺序的Array

`for ... in`是为遍历对象属性而构建的，不建议与数组一起使用，数组可以用`Array.prototype.forEach()`和`for ... of`.

处理有`key-value`数据（比如属性用作“键”），需要检查其中的任何键是否为某值的情况时，还是推荐用`for ... in`

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



### 9遍历对象的方法.

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

##### 2.Object.assign

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







## 函数

### 概要

在 JavaScript中，函数是**头等(**first-class**)**对象，因为它们可以像任何其他**对象**一样具有属性和方法。它们与其他对象的区别在于函数可以被调用。简而言之，它们是`Function`对象. 要使用一个函数，你必须将其定义在你希望调用它的作用域内。

### 定义函数的4种方式

函数创建有3种方式: 函数声明,函数表达式,及Function声明.

在函数体中改变了参数中的值. 如果参数是原始数据类型,那么不会影响到全局;如果参数是引用数据类型,例如对象或数组,这种改变对函数外部是可见的.

#### 函数声明

在关键字'function'之后,必须指定函数的名称. 在函数体中,函数必须将一个值返回给调用方.遇到return语句后,该函数会立即停止执行.

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



#### 函数表达式

通常这种方法与变量分配相同.  简言之,函数主题被视为一个表达式,并且该表达式被分配给一个变量.

使用这种语法定义的函数可以是**命名函数或匿名函数**.

函数表达式提供函数名后,可以用于在函数内部代指其本身.

```js
//一般使用const而非let来声明函数表达式的变量

const fn = function fun(n){
  return n<2?1:n*fn(n-1)
}
console.log(fn(3))

//函数表达式提供了函数名
const factorial = function fac(n){return n<2?1:n*fac(n-1)};
console.log(factorial(3))

//函数表达式中的函数名只能在函数体内使用,在函数提外使用函数名会报错.
let y =function x(){};
console.log(x); //x is not defined;
```

当函数作为参数传递给另一个函数时,函数表达式很方便.

#### 箭头函数

```javascript
let sum = (num1, num2) => {return num1 + num2};
```

#### Function构造函数

> 这个构造函数接收任意多个字符串参数，最后一个参数始终会被当成函数体，而之前的参数都是新函数的参数

```js
let sum = new Function('num1', 'num2', 'return num1 + num2'); //不推荐
```

我们不推荐使用这种语法来定义函数，因为这段代码会被解释两次：第一次是将它当作常规ECMAScript 代码，第二次是解释传给构造函数的字符串。这显然会影响性能。不过，把函数想象为对象，把函数名想象为指针是很重要的。而上面这种语法很好地诠释了这些概念。



### 函数参数

#### 形参与实参🔸

**实参**: 调用函数时，传递给函数的值被称为函数的实参（值传递).

**形参**: 调用函数时，传递给函数的值对应位置的函数参数名叫作形参.

如果**<font color="yellowgreen">实参是一个包含原始值</font>**(数字，字符串，布尔值)的变量，则就算函数在内部改变了对应形参的值，返回后，该实参变量的值也不会改变。

如果**<font color="yellowgreen">实参是一个对象引用</font>**，则对应形参会和该实参指向同一个对象。假如函数在内部改变了对应形参的值，返回后，实参指向的对象的值也会改变. 如

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

```js
函数参数都是传递,只是因为不同的内存分配机制带来了不同的访问机制.
原始数据类型值都存放在栈内存中,引用数据类型值都存放在堆内存中,但不可以直接操作存在堆内存中的对象,因此在栈内存中存放了对象的地址.
当传参的时候也就是直接把栈内存的值复制了一份,只是复制的值对原始值来说直接就是原始值,但对对象来说就是其引用.
```



js高级程序中写到,函数的参数都是按值传递的“.

1.按值传递,分为两类:基本类型值的传递和函数参数的传递. 函数参数的传递又有基本类型值的参数传递和引用类型值的参数传递. 

引用类型值的传递实际上传递的是对象的引用(引用=内存中的地址=值),而非传递的对象本身. 因为执行的操作是复制保存操作.

2.按引用传递: 传递的是完整的对象本身.

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



#### 默认参数

从ECMAScript 6开始，有两个新的类型的参数：默认参数，剩余参数

在JavaScript中，函数参数的默认值是`undefined`.  使用默认参数，在函数体的检查就不再需要了

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
```



#### 剩余参数

[剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)语法允许将不确定数量的参数表示为数组



#### 隐藏参数-arguments

数的实际参数会被保存在一个类似数组的arguments对象中.

在函数内，你可以按如下方式找出传入的参数：第一个传来的参数会是`arguments[0]`。参数的数量由`arguments.length`表示. `arguments`变量只是 *”***类数组对象**“，并不是一个数组。称其为类数组对象是说它有一个索引编号和`length`属性。尽管如此，它并不拥有全部的Array对象的操作方法。

```JavaScript
- 除了this,函数中还有一个隐含参数:arguments
- arguments是一个类数组对象(伪数组)

- 它具有length属性,同时也可以通过 索引 来操作元素,可以遍历,不能使用数组的方法,它的类型不是数组Array

- arguments是用来存储实参的对象,所有的实参都存储在arguments对象
- 通过arguments,我们不定义形参就可以直接使用实参
```



```JavaScript
//案例

function fn(){
    alert(arguments);
    alert(arguments.length); //0
    alert(arguments instanceof Array); // fasel 伪数组 可以求长度,遍历,获取某个元素.但是数组的方法无法使用.
}
fn(); //和this类似,是存在可以被输出的. 输出的结果是[object Arguments]
==============================================================

//定义一个函数,求任意数量数字的和
      
  function fn(){
      let sum = 0; //定义变量,存储结果
      for(let i=0; i<arguments.length; i++){ //遍历arguments中的值
          sum += arguments[i];
      }
      return sum;
  }

  console.log(fn(1,2,3));
```



#### 隐藏参数-this

```javascript
我们希望根据调用对象的不同，fn()函数打印的结果也不同

this是JS中的关键字，函数运行时自动生成的一个内部对象，只能在函数内部使用。
在 函数 执行时，浏览器每次都会传递进一个隐含的参数,这个参数叫 this

this永远指向最后调用它的那个对象。




=======================1102日更新==============================
# this到底是谁?
 0.函数体中,简单调用该函数(非显示/隐式绑定下),严格模式下this绑定undefined,否则绑定到全局对象window/global
 1.以函数形式调用,this是window
 2.以方法形式调用,this就是调用方法的对象
 3.以构造函数形式调用,this是新建的实例化对象(对象)
 4.以call和apply调用,this是他们的第一个参数
 5.箭头函数的this, 由外层作用域决定
 6.this在dom事件(回调函数)中,指向当前触发事件的事件源

//如何改变this指向
1.ES6箭头函数
2.函数内部的_this=this
3.使用apply call bind
4.构造函数
```

案例

```javascript
var name = '我是全局中的name';

function fn(){
    console.log(this.name);
    //console.log(this); 看看这个隐含参数this的值是什么 谁调用打印的就是谁.例如fn()调用打印的是window
}

let obj = {
    name: 'swk',
    sayHello: fn   //sayHello === fn  使用全等判断返回true
};
let obj2 = {
    name: 'zbj',
    sayHello: fn
};

console.log(fn === obj.sayHello); //true

fn(); //以函数形式调用 this.name是'我是全局中的name'
obj.sayHello(); //以方法形式调用, 'swk'
obj2.sayHello();//以方法形式调用, 'zbj'
```

案例2

```JavaScript
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

案例3

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

 **this指向实例**

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
console.log(thing.foo); //bar

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



#### 函数调用1-递归

函数可以被递归，就是说函数可以调用其本身

```js
//阶乘
function factorial(n){
  if(n===0||n===1) return 1;
  return factorial(n-1)*n;
}

factorial(5); 120
```



#### 函数调用2-其他方式🔸

常见的一些情形是某些地方需要动态调用函数，或者函数的实参数量是变化的，或者调用函数的上下文需要指定为在运行时确定的特定对象。显然，函数本身就是对象，因此这些对象也有方法（参考[`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) ）。作为此中情形之一，[`apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)方法可以实现这些目的



#### call()/apply()方法调用

```JavaScript
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


# this到底是谁?
 1.以函数形式调用,this是window
 2.以方法形式调用,this就是调用方法的对象
 3.以构造函数形式调用,this是新建的对象
 4.以call和apply调用,this是他们的第一个参数
```



```js
- call方法的参数,应该是对象obj.如果参数为空或null或undefined, 则默认传参全局对象.

var obj={};
var f=function(){return this};
console.log(f()===window);//log: true
console.log(f.call(obj)===obj);//log: true

- 如果call传参不是以上的类型,则转换成相应的包装对象,然后传入方法.例如,5转成number实例.
var f=function(){return this};
f.call(5);//log:Number {5}
```



```js
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
    console.log('sData value is %s', this.sData);   //%s 相当于%string  相当于占位符作用
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



#### Function.prototype.call()

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数

```js
//语法
function.call(thisArg,arg1,arg2,...)

thisArg
可选的。在 function 函数运行时使用的 this 值.
请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
              
arg1,arg2...
指定的参数列表

//返回值
使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined 
              

//描述
call() 允许为不同的对象分配和调用属于一个对象的函数/方法
call() 提供新的 this 值给当前调用的函数/方法。你可以使用 call 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）
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





### 立即执行函数(IIEF)/匿名函数

#### 匿名函数

没有函数名的函数被称为匿名函数 function之后直接跟括号

```JavaScript
* 匿名函数可以用一个变量来保存
	let fn = function(){console.log('aaa')};  //这是一个赋值语句,注意有分号 
* 匿名函数的调用
	fn();
	

* 匿名函数的打印效果:
	console.log(fn);
'
	ƒ (){console.log('aaa')}  //可以看出没有函数名
'
```



#### 立即执行函数

```JavaScript
* 立即执行函数,在函数定义完毕后立即调用,只会调用一次
* 语法:
	(function(){语句...})() //调用括号放在里外都可以
    (function(){console.log(语句);}())
                
* 其他
 (fucntion(){
  	console.log('我是一个匿名函数');
  }());
(function(){语句...}());
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

#### 概要

```JavaScript
- 语法:
形参 => 返回值
(参数1, 参数2) => 返回值
形参 => {
    语句..
    return 值;
}

箭头函数,主要是用来设置回调函数的
箭头函数,主要是设置简单的函数
箭头函数有多个返回值时,需要使用return
箭头函数,只有一行表达式,表示自带return
```



#### 箭头函数-this

```JavaScript
this:
根据函数的调用方式不同,this的值也不同:
1.以函数方式调用时,this是window
2.以方法形式调用时,this就是调用方法的对象
3.以构造函数形式调用时,this就是新创建的对象
4.以call和apply形式调用,this是它们的第一个参数
5.箭头函数this, 由外层作用域决定

function fn(){
    alert(this); //window
}
fn();

let obj = {
    name:'孙悟空',
    sayHello:function(){
        alert(this); //obj
    }
};
obj.say.Hello();
```



#### 不适用场景

> 箭头函数不能使用arguments、super 和new.target，也不能用作构造函数。此外，箭头函数也没有prototype 属性。



#### 案例

```JavaScript
let fn = a => a + 10;  //a就是形参
fn(a, b) => a + b;
fn(a, b){   		//多个形参
    console.log('hello'); 
    return a + b;    //当有多个返回值,需要使用return
}


箭头函数-数组排序
arr = [3, 1, 2, 4, 5, 7, 8, 9, 6];
arr.sort((a,b) => a - b); 从小到大,升序排列

箭头函数-返回值是个对象 格式需要加括号
fn = () => {name:'孙悟空'};
alert(fn()); //返回值是undefined  原因:对象是大括号,返回值也有大括号,浏览器无法分清.

更新:
fn = () => ({name:'孙悟空'});
alert(fn()); //[object Object]



箭头函数- this是谁
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


```



```js
//函数的参数
function fn(a,b) {
     return (...rest) => {
        console.log(argumnets)  //argumnets访问的是外层作用域的
    }
}

fn(1, 2)(3,4)



// function fn1(a, b) {
//     return function (c, d) {
//         console.log(arguments)
//     }
// }

// fn1(1,2)(2,3)
```



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
> 5.返回这个新对象(如果构造函数返回非空对象,则返回该对象; 否则返回刚创建的方法)

```js
var obj = {};
obj.__proto__ = Foo.prototype;
Foo.call(obj)
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





## 数组

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



#### 1.数组空元素empty和undefined的区别

使用数组字面量初始化数组时，可以使用一串逗号来创建空位（hole）。ECMAScript 会将逗号之间相应索引位置的值当成空位，ES6 规范重新定义了该如何处理这些空位。

ES6 之前的方法则会忽略这个空位，但具体的行为也会因方法而异

注意: 

注意 由于行为不一致和存在性能隐患，因此实践中要避免使用数组空位。如果确实需要空位，则可以显式地用undefined 值代替。

```js


    const options = [1,,,,5];
    for (const option of options) {
    console.log(option === undefined);
    }
    // false
    // true
    // true
    // true
    // false
    
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

ES6 之前的方法则会忽略这个空位，但具体的行为也会因方法而异：

    const options = [1,,,,5];
    // map()会跳过空位置
    console.log(options.map(() => 6)); // [6, undefined, undefined, undefined, 6]
    // join()视空位置为空字符串
    console.log(options.join('-')); // "1----5"
```



#### 2.数组字符串索引和数值索引比较

```markdown
https://www.cnblogs.com/goloving/p/9180588.html
```

**结论**

1. **Javascript数组下标值的范围为0到2的32次方**
2. **对于任意给定的数字下标值，如果不在此范围内，js会将它转换为一个字符串，并将该下标对应的值作为该数组对象的一个属性值而不是数组元素，例如array[-1] = "yes" 其实就相当于给array对象添加了一个名为-1的属性，属性值为yes。**
3. **对于任意给定的数字下标值，如果不在此范围内，js会将它转换为一个字符串，并将该下标对应的值作为该数组对象的一个属性值而不是数组元素，例如array[-1] = "yes" 其实就相当于给array对象添加了一个名为-1的属性，属性值为yes。**

```js
let arr = [];
arr['a'] = 'ahh';
arr['b'] = 'banner';
arr['c'] = 'cyx';
console.log(arr.length); //0
```



#### 3. 值为null或undefined

```js
如果数组值为null或undefined, 那么调用toLocaleString(),join(),toString(),valueOf()方法时, 返回的结果中以空字符串表示.
```







### 创建数组的方式

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

#### 1.1 Array构造函数的缺点

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



#### 3.ES6Array的静态方法

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
> Array.from()方法可以接受**可迭代对象或类数组对象**作为第一个参数，最终返回一个新的数组
>
> 注意: Array.from()方法也是通过this来确定返回数组的类型的。(?)





##### 3.2.1 ES5和ES6 在转换组数上的比较

1.ES5 将类数组对象转换为数组

```JavaScript
//第一种方法
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

//第二种方法 调用数组原生的slice()方法可以将非数组对象转换为数组
//slice()对象只需数值型索引和length属性就能够正确运行，所以任何类数组对象都能被转换为数组
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







```JavaScript
# 如何创建数组 //使用类来创建对象
const arr = new Array(); //使用const之后,不能改变的是变量arr,而其中的属性是可以更改的.函数同理

let arr = Array();
let arr = new Array();
let arr = [];  //let arr = [元素1, 元素2, 元素3, ...];

数组中的元素可以是任意的数据类型.数组长度可以任意修改 一般我们在使用数组时,同一个数组只放同一类型的数据

# 数组中的数据存储的也是数据的内存地址
let arr = new Array(4); //创建长度为4的数组,值为空
console.log(arr, arr.length); //empty*4  4

var a = [,,]; 每一项的值是undefined
function getArr(...args){} //...三点运算符 函数形参中的rest运算符 允许将一个不定数量的参数表示为一个数组.
```



### 创建数组方式的区别

```js
let a = Array();
let b = new Array();
let c = [];

各自创建了一个length=0的JS数组.
//new Array();
new只是一个语法糖。new Array()创建了一个对象，新建的对象a.__proto__ == Array.prototype。这是标准的一个由Class到实例的创建步骤.
//Array();
Array()和new Array()完全一致
//[]也被称为literal syntax，它同样会创建一个空数组。得到的结果和new Array()，以及Array全部一样。

//使用区别:
1.从性能上来讲，new Array() 在初始化大数组的时候，性能更加优异，在之前大数组创建的文章中已经提到了这个内容。当初始化一个空数组时候，两者性能几乎没有差异。因此优先使用Array()或者new Array()

2.虽然使用new，会增加多一层的对象包裹，而使得内存冗余。但使用new后更加符合了对象化继承的概念

```





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



### 数组操作

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



#### 获取数组长度|length

```JavaScript
# 获取数组的长度
	
数组.length
length的值实际就是数组的最大索引+1

数组length属性是可以修改的 //字符串长度不能被修改
    arr.length = 8; //假如数组长度为6,但是认为加长到8.所以多的是空元素
	arr.length = 4; //删除数组中最后两个元素.再改回长度6的话,显示的空元素
```



#### 数组最后添加元素

```JavaScript
# 向数组的最后添加元素
    
数组[数组.length] = 值;
```



#### 访问数组最后一位

```JavaScript
# 访问数组最后一位
   
arr[arr.length-1] //可以理解最后一位是负1,倒数第二位是负2....
```



#### 判断两个数组是相等

```js
//https://segmentfault.com/a/1190000016574183
//https://juejin.cn/post/6860071737196429319
//https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript


//1.如果两个数组均为字符串或数字类型,元素顺序无需一致. 使用sort排序/every/遍历来判断
a.length === b.length && a.sort().toString() === b.sort.toString()
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





### 数组4方法

> ECMAScript 给数组提供几个方法，让它看起来像是另外一种数据结构
>
> 数组对象可以像栈一样,也就是一种限制插入和删除项的数据结构.
>
> 栈是一种后进先出的结构(LIFO, Last-In-First-Out), 也就是最近添加的项会被先删除. 数据项的插入(push,称为推入)和删除(称为弹出,pop)只在栈的一个地方发生,栈顶. 
>
> ECMAScript 数组提供了push()和pop()方法，以实现类似栈的行为。



#### push()

```JavaScript
push()
 - 该方法用来向数组的末尾添加一个或多个元素,并返回数组新的长度
 - 破坏性方法,会改变原有数组的内容
```



```JavaScript
let arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧'];
result = arr.splice(1,0);// result返回的是一个空数组

result = arr.push( arr.splice(1,0) ); // 5
console.log(arr); //['孙悟空', '猪八戒', '沙和尚', '唐僧',Array()];
```



#### unshift()

```JavaScript
unshift()
 - 该方法用来向数组的开头添加一个或多个元素,并返回数组新的长度
```



#### pop()

```JavaScript
pop()
 - 用来删除并返回数组的最后一个元素  调用一次删除一个
```



#### shift()

```JavaScript
shift()
 - 用来删除并返回数组的第一个元素  调用一次删除一个
```



### 遍历数组的5种方法

```js
//https://blog.fundebug.com/2019/03/11/4-ways-to-loop-array-inj-javascript/
for/of是遍历数组最可靠的方式，它比for循环简洁，并且没有for/in和forEach()那么多奇怪的特例。for/of的缺点是我们取索引值不方便，而且不能这样链式调用forEach(). forEach()。

使用for/of获取数组索引，可以这样写
for(const[i,v] of arr.entries()) {
  console.log(i,v);
}
```



```js
//https://www.cnblogs.com/goloving/p/8686780.html
1.定义
稀疏数组:数组中的元素之间可以有空隙empty,
密集数组:每个元素都有值,即使是undefiend.
2.创建
2.1创建稀疏数组:数组元素实际只有2个，但是长度确实3.当你遍历这个数组的时候,不同的方法会有差异.
let arr = new Array(3);
arr[0]=0;
arr[2]=2;  //中间一项是empty,这个arr数组是稀疏数组.

2.2创建密集数组:有真实元素了，虽然元素的值是undefined，但是你可以遍历到这些数组元素
let arr = Array.apply(null,Array(3)); //等同于let arr = Array(undefined,undefined,undefined);





//https://juejin.cn/post/6930973929452339213
for循环倒叙是最快的.

const million=1000000;
const arr = Array(million);  //产生的是empty元素,值未undefined

//这是稀疏数组，应该为其指定内容，否则不同方式的循环对其的处理方式会不同
//const arr = [...Array(million)]  打印arr值,数组元素均为undefined.

console.time();
for(let i=arr.length;i>0;i--){}  //-1.5ms
for(let i=0;i<arr.length;i++){}  //-1.6ms
arr.forEach(v=>v)                //-2.1ms
for(const v of arr){}            //11.7ms
console.timeEnd();
```



#### for循环正序

```js
for(let i=0; i<arr.length; i++){}
```



#### for循环倒叙

```js
for(let i=arr.length;i>0;i--){}
```



#### forEach

- forEach()是数组对象的方法,可以用来对数组进行遍历,它需要一个函数作为参数. //没有返回值
- 传递给数组的函数会调用多次,数组中有几个元素就调用几次
- 每次调用时,会将元素的信息以参数的形式传递进函数

forEach() 被调用时，不会改变原数组，也就是调用它的数组
forEach返回值是undefined,没有返回值.

forEach()不能遍历对象,可以使用for-in

```js
forEach的回调函数有三个参数:
第一个: item 当前遍历的元素
第二个: index 当前遍历的元素的索引
第三个: array 当前正在遍历的元素
    
数组.forEach(function(item, index, array){ //顺序很重要
    console.log(item, index, array); 
})    
    
arr = ['孙悟空', '沙和尚', '猪八戒'];     

  arr.forEach(function(a, b, c){
      console.log(a); //孙悟空 沙和尚 猪八戒
  })

  arr.forEach(function(a,b,c){
      console.log(b); //0 1 2 3 
  })

  arr.forEach(function(a,b,c){
      console.log(c); //当前遍历的数组  有几个就显示几 次数组
  })

  arr.forEach(function(item,index){
      console.log(item, index); // 打印的是0'孙悟空' 1'沙和尚' 2'猪八戒'
  })
```



#### for...of

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

```



#### for...in

`for…in` 会在对象的所有可枚举属性上迭代指定的变量.对于每个不同的属性，`for…in` 语句除返回数字索引外，还将返回用户定义的属性的名称。 因此，在遍历数组时最好使用带有数字索引的传统 `for` 循环。 因为 `for…in` 语句还会迭代除数组元素之外的用户定义属性，就算我们修改了数组对象（例如添加自定义属性或方法），依然如此

```js
// for…in 循环遍历对象的属性，而 for…of 循环遍历可迭代对象的值。
let arr = [1,2,3];
for(let i in arr){
  console.log(i); //'0','1','2'
}
```



#### for await ...of

**`for await...of` 语句**创建一个循环，该循环遍历异步可迭代对象以及同步可迭代对象，包括: 内置的 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String), [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)，类似数组对象 (例如 [`arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 或 [`NodeList`](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList))，[`TypedArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map), [`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 和用户定义的异步/同步迭代器。

类似于 [`await`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 运算符一样，该语句只能在一个[async function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function#异步函数) 内部使用

```JavaScript
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of


```



### 遍历数组的问题

#### 1. forEach()中无法return/break,

```js
//跳出for循环使用break, 但在数组中用forEach循环如果要退出使用break会报错,使用return也不能跳出.

//原因:


//解决方法:
0. 使用for循环
1. 使用some/every
2. 使用try&catch
```



#### 2. map循环如何跳出?

```js
//前提: map无法跳出, 所以es6中才会添加for-of语法

//原因: map是个迭代,不是循环

//解决方法:
1. try-catch  使用throw抛出错误.
2. 使用for-of循环
3. 使用some/every更合理
```



### 数组方法1

```js
1.实现浅拷贝方法
slice() concat()


```



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



#### slice-截取

Array.prototype.slice()

slice()对象只需数值型索引和length属性就能够正确运行，所以任何类数组对象都能被转换为数组

`slice` 会提取原数组中索引从 `begin` 到 `end` 的所有元素（包含 `begin`，但不包含 `end`）

`slice()` 方法,不会改变原始数组,返回一个新的数组对象. 这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，不包括`end`）



```JavaScript
//语法
arr.slice([begin,[,end]])
-begin 可选参数: 提取起始处的索引（从 0 开始），从该索引开始提取原数组元素
如果省略该参数,则slice从索引0开始.
如果该参数为负数,则表示从原数组的倒数第几个元素开始提取.例如slice(-2),提取原数组中的倒数第2个到最后1个元素(包含最后一个)
如果该参数超出数组索引范围,则返回空数组.

-end 可选参数:提取终止处的索引（从 0 开始），在该索引处结束提取原数组元素
如果省略该参数,则 slice 会一直提取到原数组末尾
如果该参数为负数, 则它表示在原数组中的倒数第几个元素结束抽取
如果end大于数组长度,slice会提取到原数组末尾.

//描述
slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：
-如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
-对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组
- 如果向两个数组任一中添加了新元素，则另一个不会受到影响.

- 复制整个数组的方法
	arr.slice()
	arr.slice('')
	arr.slice(0)
```



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

//拓展
slice()方法可将伪数组转换为真数组,用法如下:
let arr = Array.prototype.slice.call(obj); //此处obj就是伪数组
let arr = [].slice.call(obj);

ES6中使用Array.of()来代替Array.prototype.slice.call(arguments),将arguments对象转换为数组.



//Function.prototype.call.bind
//https://www.cnblogs.com/gaoht/p/10978751.html
在JavaScript中，有时候需要在一个不同的对象上重用一个函数，而不是在定义它的对象或者原型中。通过使用call()，applay（）和bind()，我们可以很方便地从不同的对象借用方法，而不需要继承它们 – 这是一个在专业JavaScript开发者的工具箱中很有用的工具


```





#### splice-删除或替换

**`splice()`** 方法通过**删除或替换**现有元素或者**原地添加**新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

```JavaScript
//语法
arr.splice(start[,deleteCount[,item1[,item2[,...]]]])

start
 指定修改的开始位置（从0计数）
 
deleteCount 可选
整数,表示要移除的数组元素的个数
 -如果deleteCount大于start之后的元素的总数,则从start后面的元素都将被删除(含start位).
 -如果deleteCount被省略了,或者它的值大于等于arr.length-start(如果它大于或者等于start之后的所有元素的数量),那么start之后的数组的所有元素都会被删除.
 -如果deleteCount是0或者负数,则不移除元素.这种情况下,应该至少添加一个新元素.

item1,item2... 可选
要添加进数组的元素,从start的位置开始.如果不指定,则splice()将只删除数组.

//返回值
由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

//描述
如果添加进数组的元素个数不等于被删除的元素个数，数组的长度会发生相应的改变。

```



```js
//代码实现  https://blog.csdn.net/weixin_43523913/article/details/106021147
https://blog.csdn.net/lunahaijiao/article/details/112645946


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
}
```







```JavaScript
//示例

1.从第2位开始删除1个元素,插入'drum'
let myFish = ['angel',"clown", "mandarin", "sturgeon"]
myFish.splice(2,1,'drum')

2.从倒数第2位开始删除1个元素
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);
// 运算后的 myFish: ["angel", "clown", "sturgeon"]
// 被删除的元素: ["mandarin"]

3.从第 2 位开始删除所有元素
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// 运算后的 myFish: ["angel", "clown"]
// 被删除的元素: ["mandarin", "sturgeon"]
```



#### concat()

**`concat()`** 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组

```JavaScript
//语法
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

//valueN可选
数组和/或值，将被合并到一个新的数组中。如果省略了所有 valueN 参数，则 concat 会返回调用此方法的现存数组的一个浅拷贝
-concat()方法对需要拷贝的对象的每个元素进行拷贝时，若该元素为基础类型，则对该元素进行的是深拷贝（如array1[1]属性）；若该元素是引用类型，则对该元素进行的是浅拷贝（如array2[1].name属性）


//描述
concat方法创建一个新的数组，它由被调用的对象中的元素组成，每个参数的顺序依次是该参数的元素（如果参数是数组）或参数本身（如果参数不是数组）。它不会递归到嵌套数组参数中。

concat方法不会改变this或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。 原始数组的元素将复制到新数组中
 - 对象引用（而不是实际对象）：concat将对象引用复制到新数组中。 原始数组和新数组都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。 这包括也是数组的数组参数的元素。
 - 数据类型如字符串，数字和布尔（不是String，Number 和 Boolean 对象）：concat将字符串和数字的值复制到新数组中
 
注意：数组/值在连接时保持不变。此外，对于新数组的任何操作（仅当元素不是对象引用时）都不会对原始数组产生影响，反之亦然。
```



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





```JavaScript
//连接两个数组
var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];
alpha.concat(numeric);
// result in ['a', 'b', 'c', 1, 2, 3]

//将值连接到数组
var alpha = ['a', 'b', 'c'];
var alphaNumeric = alpha.concat(1, [2, 3]);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

//合并嵌套数组
var num1 = [[1]];
var num2 = [2, [3]];
var num3=[5,[6]];

var nums = num1.concat(num2);

console.log(nums);
// results is [[1], 2, [3]]

var nums2=num1.concat(4,num3);
console.log(nums2)
// results is [[1], 4, 5,[6]]

// modify the first element of num1
num1[0].push(4);

console.log(nums);
// results is [[1, 4], 2, [3]]


//合并对象
let obj ={a:2}
let arr=[1,2,3]
let result = arr.concat(obj);
console.log(result);//[1,2,3,{a:2}]

//浅拷贝 conat()实现的浅拷贝:基本类型是深拷贝,引用类型是浅拷贝(数组中的元素是对象才起作用)
let arr=[1,2,3,{a:4}];
let result=arr.concat();
arr[3].a=5;
console.log(arr, result);
//[1, 2, 3,{a:5}] [1, 2, 3,{a:5}]
```



  



#### indexOf()

`indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1

```JavaScript
//语法
arr.indexOf(searchElement[, fromIndex])
searchElement: 要查询的元素
fromIndex: 
  查询的起始位置,默认为0,表示查询整个数组.
  如果参数中提供的索引值是一个负值，则将视为从数组末尾的偏移.例如,如果是-1,从最后一位开始搜索
  
返回值:
	如果找到了,返回其第一次出现的位置
	如果没找到,返回-1

//描述
indexOf 使用strict equality (无论是 ===, 还是 triple-equals操作符都基于同样的方法)进行判断 searchElement与数组中包含的元素之间的关系
```



```js
//手动实现

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





```JavaScript
//示例
1.找出指定元素所在的位置
let indices=[];
let array=['a', 'b', 'a', 'c', 'a', 'd'];
let element='a';
let idx = array.indexOf(element);
while(idx!==-1){
  indices.push(idx);
  array.indexOf(element,idx+1)
}
console.log(indices)

2.数组去重
let arr = [1,2,3,1,1,4,3,2,5,6,7];
let newArr = [];
arr.forEach((item,index)=>{
  if(newArr.indexOf(item)===-1){
    newArr.push(arr[index])
  }
})
console.log(newArr)
```



#### lastIndexOf()

```JavaScript
- 返回指定元素在数组中最后一次出现的索引位置, 如果没有则返回-1
- 是从后向前找,包括寻找的开始位置.
- 参数: 
	第一个参数: 寻找的元素;
	第二个元素: 开始寻找的位置

```





#### join()

> 字符串分隔符

`**join()**` 方法将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN_docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

```JavaScript
//语法
arr.join([separator])
separator 可选
指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号（,）分隔。如果separator是空字符串("")，则所有元素之间都没有任何字符

//返回值
一个所有数组元素连接的字符串。如果 arr.length 为0，则返回空字符串。

//描述
- 有的数组元素被转换成字符串，再用一个分隔符将这些字符串连接起来
- 如果一个元素为 undefined 或 null，它会被转换为空字符串   //不是用的String(null)吗? 'null'
```



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





```JavaScript
//示例

1.连接类数组对象
function f(a,b,c){
  let s = Array.prototype.join.call(arguments);
  console.log(s); //'1,a,true'
}
f(1,'a',true)
```



  

#### reverse()

`**reverse()**` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

```JavaScript
//语法
arr.reverse()

//描述
reverse方法是特意类化的；此方法可被 called 或 applied于类似数组对象。对象如果不包含反映一系列连续的、基于零的数值属性中的最后一个长度的属性，则该对象可能不会以任何有意义的方式运行
```



```JavaScript
//示例

1.颠倒数组中的元素
const a = [1,2,3];
a.reverse();
console.log(a) //[3,2,1]

2.颠倒类数组中的元素 必须有length属性
const a = {0: 1, 1: 2, 2: 3, length: 3};
Array.prototype.reverse.call(a); //same syntax for using apply()
console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}

```





####   sort()

用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的**UTF-16**代码单元值序列时构建的. 

可以用来对一个数组进行排序,它是一个**破坏性的方法**..调用后,原数组的顺序就会被改变.

可以通过传递一个 回调函数 来自定义排序规则

```JavaScript
//语法
arr.sort([copareFunction]) //[]标识可选
返回值:排序后的数组。请注意，数组已原地排序，并且不进行复制


当指明了compareFunction,那么数组会按照调用该函数的返回值排序.即a和b是两个将要被比较的元素:
- 如果compareFunction(a,b)小于0,那么a会被排到b前面.
- 如果compareFunction(a,b)等于0,那么a和b的位置不变.(备注:标准和浏览器都不保证,具体看mdn)
- 如果compareFunction(a,b)大于0,那么a在b之后.
比较函数格式:
function compare(a,b){
  if(a<b){
    return -1;
  }
  if(a>b){
    return 1;
  }
  return 0;
}

要比较数字而非字符串，比较函数可以简单的以 a 减 b
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

示例:

```JavaScript
//arr = ['c', 'd', 'a', 'b', 'e']; 字符串排序方式
arr = [3, 1, 2, 5, 6, 7, 9, 8, 10, 4];
arr.sort(function (a, b) {
     return a - b;
}); 
console.log(arr);

arr.sort((a,b)=>{
  if(a>b){
    return 1;
  }else if(a<b){
    return -1;
  }else{
    return 0;
  }
})



```

使用映射map改善排序

基本思想是首先将数组中的每个元素比较的实际值取出来，排序后再将数组恢复.降低复杂数据的负载.

```js
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let arr = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
// 对需要排序的数字和位置的临时存储
let mappedObj = arr.map((item,index)=>{
  return {index:index,value:item.toLowerCase()};
})
// 按照多个值排序数组
mappedObj.sort((a,b)=>{
  return +(a.value>b.value)||+(a.value===b.value)-1
})
// 根据索引得到排序的结果
let result = mappedObj.map((item)=>{
  return list[item.index]
})
```





#### map()

map()方法返回一个由原数组中每个元素调用一个指定方法后的返回值组成的新数组, 不修改原数组.

```js
//语法
const new_array = arr.map(function callback(currentValue[,index[,array]]){
  //return element for new_array
},[,thisArg])

callback 生成新数组元素的函数，使用三个参数：
currentValue
callback 数组中正在处理的当前元素
index可选
callback 数组中正在处理的当前元素的索引
array可选
map 方法调用的数组。
thisArg可选
执行 callback 函数时值被用作this

//描述
map 方法会给原数组中的每个元素都按顺序调用一次  callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用

因为map生成一个新数组，当你不打算使用返回的新数组却使用map是违背设计初衷的，请用forEach或者for-of替代
如果 thisArg 参数提供给map，则会被用作回调函数的this值。否则undefined会被用作回调函数的this值。

map 方法处理数组元素的范围是在 callback 方法第一次调用之前就已经确定了。调用map方法之后追加的数组元素不会被callback访问。如果存在的数组元素改变了，那么传给callback的值是map访问该元素时的值。在map函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到

//注意问题:
1.支持return返回值 但是不会中断map函数执行,和forEach一样.
2.retrn的就是更改的项,返回到新数组中.

//实例
实现数组绑定&符,变成字符串形式
arr.map(item=>'&a='+ item)
```



```js
//示例

1.求数组中每个元素的平方根
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]

2.使用 map 重新格式化数组中的对象
var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}],

let result = kvArray.map((item,index)=>{
  return {[item.key],item.value}
})
```



```js
//注意
1.map给回调函数传的不是一个值,可能是2/3个值
let map = Array.prototype.map;
let a = map.call('Hello World', function(e) { return e.charCodeAt(0)});
//a的值是 [72,101,108,108,111,32,87,111,114,108,100]



3.[1,2,3,4,5].map(console.log); //等于 [1,2,3,4,5].map((val, index, array) => console.log(val, index, array) );
```



```js
//当一个函数传入map(),对每一个迭代器来说, 3个参数传入函数: currentValue, currentIndex, array.
//parseInt传入两个参数: string和radix. 如果radix基数是falesy,那么将默认是10.  第三个参数将忽略

2.求['1','2','3'].map(parseInt)的结果
可等于, ['1','2','3'].map(parseInt(string, radix));
可等于, ['1','2','3'].map(function(string,radix){return parseInt(string,radix)});   

First iteration: val='1' index=0 array=['1','2','3']
parseInt('1', 0, ['1','2','3']); => 1
parseInt('2', 1, ['1','2','3']); => 1进制中不存在2 返回NaN
parseInt('3', 2, ['1','2','3']); => 2进制中不存在3 返回NaN

```





#### filter()

`**filter()**` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素.不会改变原数组，它返回过滤后的新数组

```js
//语法
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

参数
callback
用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留

//描述
filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组


```



```js
//示例
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const filterItems = (query)=>{
  return fruits.filter(item=>{
    return item.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); //['apple','grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```







#### reduce()

`reduce()` 方法对数组中的每个元素执行一个由您提供的**reducer**函数(升序执行)，将其结果汇总为单个返回值。

```js
-语法:
arr.reduce((accumulator, currentValue,currentIndex,arr)=>{}, initialValue)

arr:当前数组
accumulator:第一次执行回调时为给定的初始值initialValue,或者是上一次执行回调时的返回值(若没有传入initialValue,则第一次的preValue值是数组中的第一个元素的值)
currentValue: 表示当前正在处理的元素
currentIndex 表示当前正在处理的数组元素的索引,若传入了initialValue,则为0,否则为1.
array 当前操作的数组(就是arr)
initialValue 表示初始值.一般是做数学运算时设置为0.若为筛选值可以不传.

//描述
回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：
 如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；
 如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。
```

```js
//实例解析initialValue参数
// 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
let arr = [1,2,3,4];
let sum = arr.reduce((prev,current,index,arr)=>{
    console.log(prev,current,index);
    return prev+current;
})
//console.log(arr,sum)

打印结果:
1 2 1
3 3 2
6 4 3
[1,2,3,4] 10

上面的例子index是从1开始的，第一次的prev的值是数组的第一个值。数组长度是4，但是reduce函数循环3次。

var  arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
}，0) //注意这里设置了初始值
//console.log(arr, sum);

打印结果:
0 1 0
1 2 1
3 3 2
6 4 3
[1,2,3,4] 10
这个例子index是从0开始的，第一次的prev的值是我们设置的初始值0，数组长度是4，reduce函数循环4次。
```



##### reduce案例

##### 1.计算数组中元素出现的次数

```js
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice','Bruce', 'Alice'];
let nameNum = names.reduce((prev,current,index)=>{
    if(current in prev){
        prev[current]++;
    }else{
        prev[current]=1;
    }
    return prev;
},{})
console.log(nameNum); //[ Alice: 3, Bob: 1, Tiff: 1, Bruce: 2 ] ??

如果数组是数字类型或数字型字符串,reduce的初始值是数组的话会有一个empty item.需要使用对象解决.
let arr = [1,2,3,4,1,2,3];
let obj = arr.reduce((prev,current)=>{
  if(prev.includes(current)){
    prev[current]++;
  }else{
    prev[current]=1;
  }
  return prev;
},[]); //[ <1 empty item>, 2, 2, 1, 1 ]

```



##### 2.数组去重

```js
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((prev,current)=>{
    if(!prev.includes(current)){
        return prev.concat(current)
    }else{
        return prev;
    }
},[])

//其他方法
手写代码md中
```



##### 3. 二维数组转换成一维数组

```js
let arr = [[0, 1], [2, 3], [4, 5]]
let newArr = arr.reduce((prev,current)=>{
    return prev.concat(current)
},[]);

console.log(newArr)
```



##### 4.多维数组转换成一维数组

```js
let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
let newArr = function(arr){
    return arr.reduce((prev,current)=>{
        return prev.concat(Array.isArray(current)?newArr(current):current);
    },[])
}

console.log(newArr(arr))
```



##### 5.对象里的属性求和

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



##### 6.其他

```js
let persons = [
{id:'001',name:'tom',age:16},
{id:'002',name:'老刘',age:17},
{id:'003',name:'超哥',age:18},
{id:'004',name:'强强',age:19},
]

let arr = [1,2,3,4,5,6,7,8,9,10]

//进行累加
const result=arr.reduce((preValue, current)=>{
    return preValue+current;
},0)

//条件求和 所有偶数和
const result=arr.reduce((preValue, current)=>{
    preValue+(current%2===0?current:0)
},0)

//筛选最值
cont result=arr.reduce((preValue, current)=>{
    return Math.max(preValue, current);
})
```



##### 7.数组转换成对象

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

##### 8.按属性对object分类

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
```



##### reduce()使用中的注意点

**1.打印值**

```js
let arr = ["equipFileId", "taskId", "appNo", "consId", "equipId", "fileId", "fileName", "filePath", "photoTime", "chgDesc", "renderer"]


let result = arr.reduce((equip_pre, equip_key) => {
  console.log('equip_pre', equip_pre);
  if (equip_key === 'renderer') {
    return equip_pre;
  }
  return equip_pre;
}, {})
```





#### some

```js
//功能:只要数组中有一个和条件一样,返回true,否则false

//参数:  参考filter方法
arr.some((item)=>{
    return item===x;
})
```



#### every

```js
//用来检测数组所有元素是否都符合指定条件.如果全部满足,返回true,有一个不满足返回false

arr.every((item)=>{
     
})
```



#### find()

find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined

```js
const array1 = [1,2,3,4,5];
const found = array1.find(item=>item>3);
console.log(found); //4

```



#### findIndex()

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```



### 数组其他方法

#### Array.prototype.copyWidthin()

`copyWithin() `方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度

```js
```



#### Array.prototype.fill()



#### Array.from()

`Array.from()` 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

```js
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

```js
//示例
从String生成数组
Array.from('foo');
//['f','o','o']

从Set生成数组
const set = new Set(['foo','bar','baz','foo']);
Array.from(set);
//['foo','bar','baz']

从Map生成数组

从类数组对象(arguments)生成数组
function fn(){
  return Array.from(arguments);
}
fn(1,2,3); //[1,2,3]

在Array.from中使用箭头函数
Array.from([1,2,3],x=>x+x);  //等同于 Array.from(arrLike).map(x=>x+x)
//[2,4,6]

数组去重合并
let m =[1,2,3]; let n = [2,3,4];
function combine(){
  let arr = [].concat.apply([],arguments);
  return Array.from(new Set(arr));
}
console.log(combine(m,n))

其他
Array.from({legnth:2},()=>'jack');
//['jack','jack']


Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 Unicode 字符，可以避免 JavaScript 将大于\uFFFF的 Unicode 字符，算作两个字符的 bug。
```





#### Array.prototype.xxx.call()

>  [来源](https://github.com/getify/You-Dont-Know-JS): 通过“借用”数组的方法可以很方便的处理字符串。可以“借用”数组的非变更方法，但不能“借用”数组的可变更方法.

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



### 数组练习

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
    
========================方法2===============================    
关系数组: 就是将字符串作为数组索引的一种使用数组的方式
var str = 'aalskdjfslkdjsdkjfsldkjfzz';    
var arr = [];
for(var i=0; i<str.length; i++){
    arr[str[i]] = arr[str[i]] + 1 || 1;
}
console.log(arr); //[a: 2, l: 3, s: 4, k: 4, d: 4, …]
    
```



#### 数组去重3种方法

嵌套循环+indexOf

```JavaScript
# 去除数组中重复的数字


==========================第1版=========================
let arr = [1,2,3,1,1,4,3,2,5,6,7];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
            arr.splice(j,1);   //这个地方写成了arr.splice(arr[j]);
        }
    }
}

console.log(arr);

存在的问题: 由于splice删除j位后,j+1位自动上移变成j位,所以会少检查一位.

==========================第1-2版==========================
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


========================第2版====indexOf()=====================
let arr = [1,2,3,1,1,4,3,2,5,6,7];
let arr2 = [];

for(let i=0; i<arr.length; i++){
    if(arr2.indexOf(arr[i]) === -1){
        arr2.push(arr[i]);
    }
}
console.log(arr2);


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


//filter方法
let arr = [1,2,2,4,null,null].filter((item,index,arr)=>arr.indexOf(item)===index)

//set方法
let arr=[...new Set([1,2,2,4,null,null])]
```



#### 数组排序|冒泡排序

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





### 回调函数

![](https://pic2.zhimg.com/0ef3106510e2e1630eb49744362999f8_r.jpg?source=1940ef5c)

编程分为两类：系统编程（system programming）和应用编程（application programming）。所谓系统编程，简单来说，就是编写**库**；而应用编程就是利用写好的各种库来编写具某种功用的程序，也就是**应用**。在抽象层的图示里，库位于应用的底下

当程序跑起来时，一般情况下，应用程序（application program）会时常通过API调用库里所预先备好的函数。但是有些库函数（library function）却要求应用先传给它一个函数，好在合适的时候调用，以完成目标任务。这个被传入的、后又被调用的函数就称为**回调函数**（callback function）

```js
https://www.zhihu.com/question/19801131/answer/27459821
```



#### 实例

```js
- 简单理解: 函数b是以参数形式传给函数a的,那么函数b就叫做回调函数.

function a(callback){
	callback();
	console.log('父函数');
}

function b(){
	setTimeout("console.log('子函数')", 3000); //延时操作
}

a(b); 
//输出结果先后顺序是:父函数 子函数
//父函数不用等回调函数执行完,可以接着执行自己的代码


- 匿名函数形式,没有变量灵活性不高
function a(a, callback){
    alert(a);
    if(typeof callback == 'function'){
        callback();
    }
}

a("回调函数", function(){alert('回调函数执行')})
```



#### 实例2

```js
- call()方法 回调函数

function Thing(name){
	this.name = name;
    //this是谁? 实参赋值,this是Joe
}

Thing.prototype.doSomething = function(callback){
    callback.call(this);
    //this是谁?  
    //构造函数创建的对象是 Thing{name:'Joe', doSomething:ƒ}
}

function foo(){
    alert(this.name); //'Joe'
}

var t = new Thing('Joe');
t.doSomething(foo);  
//Thing.prototype.doSomething = t.doSomething = t.__proto__.doSomething

- 更新:传参数
function(name){
    this.name = name;
}
Thing.prototype.doSomething = fucntion(callback, salutation){
    callback.call(this,salutation);
}

function foo(salutation){
    alert(salutation + "" + this.name);
}

var t = new Thing('Joe');
t.doSomething(foo, 'Hi');

```



















### 构造函数2-原型

> 对象中除了属性 还有方法  



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



#### 原型

```JavaScript
原型prototype
 - 每一个函数都有一个属性叫做prototype
 - 这个属性指向的是一个对象,这个对象就是 原型对象
 - 如果函数作为普通函数调用,则原型对象没有用
 - 如果函数作为构造函数调用, 那么它所创建的对象都会由一个隐含的属性(__proto__)也指向该原型对象
 - 原型对象就相当于是一个公共区域,可以被类及该类的所有实例访问 //类-构造函数 实例-函数创建的对象

function Myclass(){}
console.log(Myclass.prototype);//打印结果是一个对象 {constructor: ƒ}

let mc = new Myclass();//mc.__proto__  隐含的属性 不希望访问.下划线开头的都是隐含属性
let mc2 = new Myclass();

console.log(mc.__proto__ === Myclass.prototype); //返回true 所有被类创建的对象


=============使用原型prototype更新此前构造函数==============================

function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello=function(){
        alert('hello, 大家好,我是'+this.name); 
}//已知this就是Person类,怎么倒推. 

let p = new Person('孙悟空', 18);
let p2 = new Person('猪八戒', 18);
p.sayHello(); //大家好,我是孙悟空
p2.sayHello();//大家好,我是猪八戒
console.log(p.sayHello === p2.sayHello); //true 现在只有一个函数,故相等    
```



#### 原型链

```JavaScript
- 原型链   // 作用域链 
- 当我们要获取一个对象的属性时,浏览器会先在对象自身中寻找
- 如果有则直接使用,如果没有则去对象的原型中寻找
- 找到了则使用,没有则去原型的原型里去寻找.
以此类推, 直到找到Object的原型,如果依然没有找到则返回undefined
- Object的原型是所有对象的原型,它的原型没有原型

- 可以将对象中公有的属性(方法)统一存储在原型对象中
- 这样只需要设置一次,即可让所有的实例都具有该属性(方法)

- 结论:
以后在创建构造函数时,
 对象中独有的属性, 在构造函数内通过this.xxx的形式来设置
 对象中公有的属性, 在构造函数外,通过原型来设置,xxx.prototype.xxx
```



#### in | hasOwnProperty

```JavaScript
- 使用in检查一个属性时,无论属性在原型中还是在对象本身,都会返回true

- hasOwnProperty() 检查属性是否存在于对象自身中

- Object的原型是所有原型的原型(最简单的结构下
                    

function Myclass(){}
Myclass.prototype.age = 18;

let mc = new Myclass();
mc.name = '孙悟空';

//使用in检查一个属性是否存在对象中

console.log('age' in mc); //true  为什么是字符串?不加引号就是变量,无意义.对象的属性名可以这么操作. 对象['属性名']|对象.属性名  . 设置let agent = 'age',是新建了一个字符串,和原属性无关


//in无法满足具体查询需求,使用hasOwnProperty
console.log(mc.hasOwnProperty('age')); //false

//hasOwnProperty这个属性是哪里冒出来的?

console.log(mc.hasOwnProperty('hasOwnProperty')); //false,查询这个属性是否是mc的
console.log(mc.__proto__.hasOwnProperty('hasOwnProperty')); //false,也不是mc原型的
console.log(mc.__proto__.__proto__.hasOwnProperty('hasOwnProperty'));//true,原型的原型里有

console.log(mc.hello) //undefined 没有找到返回undefined.  作用域链没有找到是报错
console.log(mc.__proto__); //{age:18, construction:f}

在这里mc.__proto__.__proto__就是Object.__proto__,两者相同

//Object的原型是所有对象的原型
console.log(mc instanceof Myclass); // true

console.log(mc instanceof Object); //true    ?不是中间隔着一层?


掌握以上可以去看mdn文档
例如:Array.prototype.xxx
```









#### 显式原型|隐式原型

```JavaScript
function Myclass(){}

let mc = new Myclass();

//Myclass.prototype  //显式原型
//mc.__proto__	  // 隐式原型 隐藏属性尽量别用

显示原型一定是通过类去访问的.显式原型是给类的实例去使用的
Object.prototype
Myclass.prototype

隐式原型是通过实例对象来访问的,隐式原型是给实例自己用的

实例的隐式原型指向类的显式原型

实际工作中不要使用更改隐式原型
```



### 对象Math

**`Math`** 是一个内置对象，它拥有一些数学常数属性和数学函数方法。`Math` 不是一个函数对象

#### 简介

```JavaScript
Math
- 是一个工具类,无法用来创建对象
- Math里边包含了一些数学运算相关的常量和方法
```



#### 方法

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



#### Math用法

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



### 递归函数

```JavaScript
递归,就是函数自己调用自己
- 递归的作用和循环十分类似,基本上是一样的

递归能做的事,循环也可以做,反之亦然

- for循环编写相对麻烦,但性能较好
- 递归编写简单一些好理解,但性能较差

递归流程:

- 设置基线条件,就是递归停止的条件
- 设置递归条件

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



#### 数组快速排序问题

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



#### 数组快速排序(更新)



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





#### 快排|冒泡|sort比较

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



### Date

```JavaScript
在JS中所有的和时间相关的信息都通过Date对象来表示
```



```JavaScript
//创建一个Date对象
//如果直接使用new Date()则会表示当前时间的对象

let dt = new Date();

//可以通过传递时间字符串来指定要创建的时间
//格式: 月/日/四位年 时:分:秒

dt = new Date('12/20/2020 14:33:22');


```



#### Date的方法

```JavaScript
let dt = new Date();

- 获取当前日期是周几
getDay() 获取当前日期是周几
返回值 0-6
0 表示周日
1 表示周一 ...

- 如何打印今天是周几?
let dd = dt.getDay();
let dayArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
console.log(dayArr(dd));


- 获取当前对象是几月
getMonth()
返回值 0-11
0 表示1月
1 表示2月
依次类推


- 获取今天的日期是几号 
getDate()

- 获取当前日期对象的年份
getFullYear()

- getTime()
 获取当前日期的时间戳
 时间戳指自1970年1月1日0时0分0秒,到当前时间所经历的毫秒数
 时间在计算机底层都是以时间戳形式存储
 
 - 使用时间戳来计算程序的执行时间
let begin = new Date().getTime();
函数
let end = new Date().getTime();
console.log(end - begin) ;
 
 - Date.now()  //类方法,静态方法
 获取当前的时间戳
```



#### Date混合使用

```JavaScript
- 显示当前年月日时间信息(使用模板字符串)

let d = new Date();
alert(`$(d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`);
```





### 包装类??

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



### 字符串方法



```JavaScript
字符串在计算机底层实际上就是一个字符数组
let str = 'Hello'; --> ['H', 'e', 'l', 'l', 'o'];

因为字符串是不可变数据类型,所以数组的破坏性方法无法使用.
```

#### str.charAt()

> 根据索引获取指定的字符, 返回获得的字符结果.

```HTML
let str = 'hello';

str.charAt();//log: h
str.charAt(0);//log: h
str.charAt('');//log: h
str.charAt(null);//log:h
str.charAt(false);//log:h
str.charAt(true);//log: e
str.charAt(9);//log:没有返回值
```



#### str.charCodeAt()

> 根据索引获取指定字符的字符编码 需要变量接收

```HTML
let str = 'hello';

str.charCodeAt();//log: 104 就是h的编码
str.charCodeAt('h');//log:104 
str.charCodeAt('hello')//log:104
str.charCodeAt(10);//log:NaN
```



#### String.fromCharCode()

> 根据字符编码返回字符 需要变量接收

```HTML
String.fromCharCode(222);//
```



#### str.concat()

> 连接字符串, 返回新字符串, 不改变原字符串
>
> 多个字符串以逗号分隔(相当于使用连接符'+',但更繁琐)
>
> 该方法可以接受多个参数
>
> 如果参数不是字符串,会将其先转换为字符串,然后再拼接

```HTML
let str = 'Hello'; 
str.concat('world');//'hello world'

'a'.concat('b');//'ab'

''.concat(1, 2, '3');//'123'

''.concat(); //''
''.concat(''); //''

''.concat({});// '[object Object]'
首先,''.concat({})就相当于''+{},是字符串拼接,其他类型会转换成字符串,会调用toString()方法,将其他类型转换为字符串,再和原始字符串进行拼接.

String({});//'[object Object]'

''.concat([]); //'' 输出空值 

```



#### indexOf()

> 查询一个字符在字符串中第一次出现的位置, 如果未找到该值,返回-1
>
> 字符串中的字符被从左向右索引.第一个字符的索引是0,最后一个字符的索引是str.length-1
>
> indexOf区分大小写



```html 
# 语法: str.indexOf(searchValue, fromIndex)

searchValue: 要被查找的字符值.
fromIndex: 可选.规定字符串中开始检索的位置.它的合法取值范围是0到str.length-1.如果省略该参数,将从字符串首字符开始检索.默认值是0.


如果没有提供确切的提供查找字符, searchValue会被强制设置为'undefined',然后在当前字符串中查找这个值.
例子: 'undefined'.indexOf(),返回值是0,因为undefined在位置0处被找到.
但是, 'undefine'.indexOf()将会返回-1, 因为字符串'undefined'未被找到.

如果fromIndex的值小于0,或者大于str.length,那么查找分别从0和str.length开始.fromIndex的值小于0, 等同于为空的情况. fromIndex的值大于或等于str.length,那么结果会直接返回-1.



- 返回值
 查找的字符串searchValue第一次出现的索引,如果没有找到,则返回-1.
 若被查找的字符串searchValue是一个空字符串,fromIndex值为空或小于被查找字符串长度,返回值如下:
'hello world'.indexOf('');// 返回0
'hello world'.indexOf('', 0);//返回0
'hello world'.indexOf('', 3);//返回3
'hello world'.indexOf('', 8);//返回8

 若fromIndex的值等于或大于被查找字符串的长度,返回值就是字符串的长度.
'hello world'.indexOf('', 11) // returns 11
'hello world'.indexOf('', 13) // returns 11
'hello world'.indexOf('', 22) // returns 11
```

#### indexOf实例

```HTML
- 检测目标字符(串)是否存在被检查的字符串中

'blue whale'.indexOf('blue') !== -1; //true
'bule whale'.indexOf('blue') !== -1; //false

- 使用IndexOf统计一个字符串中某个字母出现的次数
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos =str.indexOf('e');

while(pos !== -1){
	count++;
	pos = str.indexOf('e', pos+1);
}
console.log(count); //4
```



#### lastIndexOf()

> 查询一个字符在字符串中最后一次出现的位置. 如果没有找到则返回-1.
>
> 区分大小写.
>
> 语法: str.lastIndexOf(searchValue, fromIndex)

```
语法: str.lastIndexOf(searchValue, fromIndex)

searchValue 一个字符串,表示被查找的值. 如果searchValue是空字符串,则返回fromIndex.//????? 字符串的长度.

fromIndex 可选. 待匹配字符串searchValue的开头一位字符从str的第fromIndex位开始向左回向查找.
fromIndex默认值是+Infinity.
如果fromIndex>=str.length,则会搜索整个字符串.
如果fromIndex<0, 则等同于fromIndex==0.
```



#### lastIndexOf()实例

```HTML
'abadefgacm'.lastIndexOf('ab', 7);// 返回0. 两个条件,字符串'ab',从第7位回向查找.
```



#### str.slice()

> 截取字符串的一部分,并返回一个新的字符串, 不改动原字符串.

```HTML
- 语法
str.slice(beginIndex, endIndex);
str.slice(截取开始位置, 截取结束位置)//提取的新字符串包括beginIndex,不包括endIndex

beginIndex 从该索引(以0为基数)处提取字符串中的字符.如果值为负数,会被当做strLength+beginIndex.
endIndex 可选.在该索引处结束提取字符串.如果省略该参数,slice()会一直提取到字符串末尾.如果该字符串为负数,则被看做是strLength+endIndex.
如果endIndex不是一个数字,返回空字符串.
如果startIndex是负的,endIndex也应是负值.否则会返回空字符串.
如果endIndex是明确的,startIndex和endIndex应都是正值或负值,且endIndex应比startIndex大,否则返回空字符串.

'string'.slice(-3, -2);//i
'string'.slice(-4, -4);//'' empty string

```



##### str.slice()实例

```HTML
- 复制字符串
str.slice();
str.slice(0);
```



#### str.substr()

> 返回一个字符串从指定位置开始到指定数量的字符.
>
> 未被严格废弃,使用substring()代替.

```HTML
- 语法
str.substr(start, length);
start: 开始提取字符的位置.如果为负值,则被看做strLength+start.
start为正值,且大于或等于字符串长度,则substr()返回一个空字符串.
start为负值且abs(start)大于字符串长度,则substr使用0作为开始提取的索引.负的start参数不被Microsoft JScript所支持.
length: 可选.提取的字符数. 如果length为0或负值,则返回一个空字符串.如果忽略length,则substr提取字符,直到字符串末尾.
```

##### str.substr()实例

```HTML
'string'.substr();//'string'
'string'.substr('');//'string'
'string'.substr(0);//'string'
'string'.substr(-2);//'ng'
'string'.substr(-13);//'string'
'string'.substr();//
```



#### str.substring()

> 返回一个字符串在开始索引到结束索引之间的一个子集,或从开始索引直到字符串末尾的一个子集.

```HTML
str.substring(indexStart, indexEnd)
indexStart 开始索引
indexEnd 可选.结束索引,一个0到字符串长度之间的整数,不包括结束索引.

如果indexStart等于indexEnd, 返回一个空字符串
如果省略indexEnd, substring提取字符移植到字符串末尾.
如果任一参数小于0或者NaN, 则被当做0.
如果任一参数大于stringName.length, 则被当做stringName.length
如果indexStart大于indexEnd, 则substring的执行效果像两个参数调换了一样.
```



##### str.substring()实例

```HTML
var str = 'Mozilla';
//输出'Moz'
str.substring(0, 3);
str.substring(3, 0);
str.substring(3, -3);
str.substring(3, NaN);
str.substring(-2, 3);
str.substring(NaN, 3);

//输出'lla'
str.substring(4, 7);
str.substring(7, 4);

//输出''
str.substring(4, 4);

//输出Mozilla
str.substring(0, 6);

//输出Mozilla
str.substring(0, 7);
str.substring(0, 10);
```



##### str.substring()实例2  !!

```js
- 使用length打印字符串
var str = 'Mozilla';
str.substring(0, str.length);//'Mozilla'

- 替换一个字符串的子字符串
function replaceString(oldS, newS, fullS){
	for(var i=0; i<fullS.length; i++){
        if(fullS.substring(i, i+oldS.length) == oldS){
            fullS = fulls.substring(0, i) + newS + fullS.substring(i+oldS.length, fullS.length);
        }
    }
    return fullS.split(oldS).join(newS);
}
```





#### str.split()

> split()方法将一个字符串拆分成多个有序的子字符串列表,将这些子字符串放进一个数组并返回.

```HTML
- 语法
split()
split(separator)
split(separator, limit)

separator(可选,可以是字符串或正则表达式)
limit(一个整数,限定返回的分割片段数量)

split(); //省略或不出现分隔符,返回的数组包含一个由整个字符串组成的元素;
split(''); //分隔符为空字符串,原字符中每个字符都会变成数组中的一个元素(包括逗号)
'string'.split(','); //如果分隔符不存在原字符串中,那么就按照省略分隔符来操作
```

```js
分隔符注意事项:
如果使用空字符串(“)作为分隔符，则字符串不是在每个用户感知的字符(图形素集群)之间，也不是在每个Unicode字符(代码点)之间，而是在每个UTF-16代码单元之间。
https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402
```





##### str.split()实例

```js
//移出字符串中的空格
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
let re = /\s*(?:;|$)\s*/;    //非捕获括号 (?:;|$) 匹配分号或最后一项
let nameList = names.split(re);
console.log(namelist); 
//[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]


[1,2,[' ',3],4].toString().split('')
//["1", ",", "2", ",", " ", ",", "3", ",", "4"]

[1,2,[' ',3],4].toString().split()
//["1,2, ,3,4"]

[1,2,[' ',3],4].toString().split(',')
//["1", "2", " ", "3", "4"]
```



#### str.toUpperCase()

> 将一个字符/字符串转换为大写



#### str.toLowerCase()

> 将一个字符/字符串转换为小写





#### str.trim()

> 去除字符串前后的空格



#### str.trimEnd()

> 新方法 不兼容. 去除后边的空格



#### str.trimStart()

> 去除前边的字符串 新方法不兼容



#### str.startsWith()

> startsWith() 方法用于检测字符串是否以指定的子字符串开始。
>
> 如果是以指定的子字符串开头返回 true，否则 false。
>
> startsWith() 方法对大小写敏感。
>
> **注意:** IE 11 及更早版本不支持 startsWith() 方法 。



#### str.endsWith()

> endsWith() 方法用于测试字符串是否以指定的后缀结束。





## 正则表达式

### 0.教程

| 序号 | 名称                     | 来源                                                         |
| ---- | ------------------------ | ------------------------------------------------------------ |
| 1    | LEARN REGEX THE EASY WAY | [github](https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md) |
| 2    | MDN                      | MDN                                                          |



### 1.概要

正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 的 [`exec`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 和 [`test`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 方法, 以及 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 的 [`match`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)、[`matchAll`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)、[`replace`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)、replaceAll, [`search`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) 和 [`split`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 方法。



### 2.格式

```javascript 
//创建一个正则表达式的对象
//创建对象: new RegExp('正则', '匹配模式')
//test()是正则表达式的方法,用来检查一个字符串是否符合正则表达式,有true,无false

let re = RegExp('a', 'i'); //a表示找字符串中是否有a i表示ignore 忽略大小写
let str = 'Abcbc';

re.test(str);

# 简写方式
//正则表达式的字面量
let re = new RegExp('a', 'i');
//正则的字面量表达式: /正则/匹配模式  优点方便缺点写完写死
等价于 re = /a/i;
```

### 3.正则语法

```JavaScript
| 在正则表达式中表示或
[]中的内容表示或
 [a-z] 任意的小写字母
 [A-Z] 任意的大写字母
 [A-Za-z] 任意字母
 [0-9] 任意数字
 
[^] 在中括号里表示除了内容之外 
 
 
量词
? 0-1次,相当于{0,1}
+ 至少一次,相当于{1,}
* 任意次, 相当于{0,} 
{m} 正好出现m次
{m,n} m-n次
{m,} m次以上
          
圆括号()



^ 表示字符的开头
& 表示字符的结束
 如果一个正则表达式以^开头,以&结束,则要求字符串和正则表达式完全匹配
. (点号)表示任意字符,除了换行(1119添加)
 在正则表达式中,使用反斜杠\作为转义字符
 
\. --> .
\w 任意的单词字符,相当于[A-Za-z0-9_] 大小写字母数字和下划线
\W 非单词字符, 相当于[^A-Za-z0-9_]
\d 任意数字 [0-9]
\D 非数字[^0-9]
\b 单词边界  有单词边界表示这是一个独立的单词
\B 非单词边界
\s 空格
\S 非空格

let str = 'hello child';
let check = /\bchild\b/;
alert(check.test(str));
```



#### 3.1 圆括号

正则表达式中的圆括号的作用是对字符进行分组，并保存匹配的文本

**用法**1 对字符或元字符进行分组，这样在圆括号内就可以对字符组合使用限定符

```js
/(A/d){2}/.test()   //false
/(A/d){2}/.test('A2A2') //true
```

**用法2** 表示可选择性

```js
1.从两个直接量中选择一个
/gr(a|e)y/ 匹配gray和grey,还可以使用gr[ae]y,效率更高

2.从多个直接量中选择
/^(Doctor|Dr\.?)$/ 匹配Doctor,Dr,Dr.三种情况

3.捕获圆括号

4.非捕获圆括号


```











### 正则的一些固定格式

```js
//空行
^\s*(?=\r?$)\n

只能输入英文和数字
/[^A-Za-z0-9]/g
校验不可输入汉字
/[\u4e00-\u9fa5]/g
只能输入数字和点
  /[^0-9.]/g
校验只能输入数字、- 和点
/[^0-9.-]/g
```





#### 练习

```javascript
- 创建一个正则表达式,来检查一个字符串是否时手机号
找规律:
 第一位,1开头
 第二位,3-9任意一个数字
 第三位,0-9任意9位
 
/^1[3-9][0-9]{9}$/ 

let str = '13065551561';
let phonecheck = /^1[3-9][0-9]{9}$/;
alert(phonecheck.test(phonecheck));
```



```JavaScript
编写一个正则表达式,检查一个字符串是否时合法的电子邮件地址

aaaa@aaa.com.cn
简化规则:
任意单词字符一位以上 . 任意单词字符一位以上(有没有都可以) @ 任意字母数字一位以上 .任意字母2-5位(1-2次)

 \w+(\.\w+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]{2-5}){1,2}
```



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









### JSON

### 1.介绍

> **`JSON`**对象包含两个方法: 用于解析 [JavaScript Object Notation](http://json.org/) ([JSON](https://developer.mozilla.org/zh-CN/docs/Glossary/JSON)) 的 `parse()` 方法，以及将对象/值转换为 JSON字符串的 `stringify()` 方法。除了这两个方法, JSON这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。
>
> **JSON** 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 。它基于 JavaScript 语法，但与之不同：**JavaScript不是JSON，JSON也不是JavaScript**。



### 2. JSON VS Javascript

| JS类型     | JSON不同点                                                   |
| ---------- | ------------------------------------------------------------ |
| 对象  数组 | 属性名称必须是双引号括起来的字符串; 最后一个属性后不能有逗号 |
| 数值       | 禁止出现前导零 （ JSON.stringify 方法自动忽略前导零，而在 JSON.parse 方法中将会抛出 SyntaxError）；如果有小数点, 则后面至少跟着一位数字。 |
| 字符串     | 只有有限的一些字符可能会被转义；禁止某些控制字符； Unicode 行分隔符 （[U+2028](https://unicode-table.com/cn/2028/)）和段分隔符 （[U+2029](https://unicode-table.com/cn/2029/)）被允许 ; 字符串必须用双引号括起来。 |



### 3.方法

#### 3.1 JSON.parse()

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







#### 3.2 JSON.stringify()

> `**JSON.stringify()**` 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性。

**语法**

```js
JSON.stringify(value[,replacer[,space]])

//
value  将要序列化成 一个 JSON 字符串的值。
replacer 可选
	如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
  
space 可选
指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串（当字符串长度超过10个字母，取其前10个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格。
```



**描述**

`JSON.stringify()`将值转换为相应的JSON格式：

- 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
- 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
- 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
- `undefined`、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 `null`（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如`JSON.stringify(function(){})` or `JSON.stringify(undefined)`.
- 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
- 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 `replacer` 参数中强制指定包含了它们。
- Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。
- NaN 和 Infinity 格式的数值及 null 都会被当做 null。
- 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。



**实例**

```js
JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'
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







### 4 使用场景

#### 4.1.删除json中的转义字符右斜杠 ??

```js
JSON.stringify(data).toString.replace(new RegExp("\\\\\"","gm"),"\""))

data.replaceAll('\\','');
```

#### 4.2 判断对象/数组是否相等

```js
let a = [1,2,3],
    b = [1,2,3];
JSON.stringify(a) === JSON.stringify(b);// true  

//Object.is()
//toString()  隐患: 数字1和字符串1会被认为相等
```



#### 4.3 localStorage/sessionStorage存储对象

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



#### 4.4 实现对象深拷贝

```js
无法实现对含有方法的对象的拷贝
```



#### 4.5 路由(浏览器地址)传参

因为浏览器传参只能通过字符串进行，所以也是需要用到 JSON.stringify



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









