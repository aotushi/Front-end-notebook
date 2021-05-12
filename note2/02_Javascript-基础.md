### JS 3大组成部分

* ECMAScript  (JS标准)
* DOM  (Document Object Model 文档对象模型)
* BOM  (Browse Object Model      浏览器对象模型)         //

### 输出语句

```js
alert('');        //用来向浏览器弹出一个警告框

console.log(''); //用来向控制台输出一个日志

document.write(''); //用来向网页中写入一个内容

=========================
括号里的引号加不加要判断,结束后的分号
```



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



### JS基本语法

* script标签中注释:  单行注释(Ctrl+/) `//`    
*  多行注释(Ctrl+Shift+/)       ` /* */`
* JS中严格区分大小写
* JS会忽略多个空格和换行,可利用空格和换行对代码进行格式化  <kbd>Ctrl</kbd> +<kbd>Alt</kbd>+<kbd>L</kbd>(快速格式化)[例如等号两边的空格,没写就快格]
* JS中的每条语句都应该以分号结尾;如果不写也可以,浏览器会自动添加分号,但是会出现加错的情况



### 字面量和变量

#### 字面量

字面量就是值,在JS中字面量可以直接使用.例如1,3,5,'hello', true,null

开发者不建议直接使用字面量(不好维护)

​	2342342.log+<kbd>tab</kbd>   会生成console.log(2342342);



#### 变量

变量可以用来存储字面量,并且变量中可以存储不同的字面量

let a = b;发生了什么?

**值传递**: 相当于一份全新的拷贝, 将这份拷贝放在另一个内存地址里.

**引用传递**: 相当于为这两个变量指定同一个地址,即新变量对旧变量的一个引用.

JS作为弱类型语言(某一个变量被定义类型,该变量可以根据环境变化自动进行转换,不需要经过显性强制转换),它的赋值语句既有值传递,也有引用传递:

对基本类型(string, number, boolean, null, undefined)使用值传递

对引用类型(除基本类型外的其他类型)使用引用传递





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
3.var声明的全局变量会添加到window对象中
4.let不能重复声明变量 var可以
```



### 标识符(identifier)

> 在JS中,所有自主命名的内容,都可以被认为是一个标识符.
>
> 比如, 变量名,函数名,类名

* 遵循规范:
  * 标识符可以含有==字母,数字,下划线,$==,但不能以数字开头. 
    * 下划线开头的变量一般是隐藏变量,不需要被别人访问
    * $开头的变量一般是系统用的变量
    * 严格区分大小写
  * 标识符不能是JS中的关键字和保留字,也不建议浏览器中的内置函数(变量)作为标识符
    * 查询文档MDN
  * 标识符需要采用驼峰命名法
    * 小驼峰: 首字母小写,单词开头大写,其余字母小写
    * 大驼峰: 单词首字大写 一般多用于类



### 数据类型(字面量的类型)++

> 数据类型就是字面量的类型
>
> [JavaScript 数据类型和数据结构 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
>
> 最新的ECMAScript标准定义了==9种==数据类型:
>
> 6种数据类型(原始类型Primitive): undefined,string,Boolean,Number,bigInt,Symbol
>
> 2种结构类型:Object, function
>
> 1种结构根类型: null

```HTML
原始数据:
基本类型(基本数值, 基本数据类型)是一种既非对象也无方法的数据.在JS中,共有6种基本类型:string, number, bigint, null, undefined, symbol(字面量).
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
//定义个函数
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

#### 布尔值(boolean)

* 布尔值进行逻辑判断
* 布尔值只有两个 
  * true 真
  * false 假
* 使用 typeof 检查布尔值 会返回boolean



#### 空值(null)

* 空值(null) 
  * 表示空的对象
  * 空值只有一个就是null
  * 使用typeof检查空值 **会返回object (历史遗留)**
  
* ```HTML
  - 出现null的几种情况
  
  1. 在JS的dom元素获取中,如果没有获取到指定的元素对象,结果一般是null
  2. Object.prototype.__proto__的值是null
  3. 在正则捕获时, 如果没有捕获到结果,默认是null
  ```



#### 未定义(undefined)

* 表示声明了但没有赋值的变量

* 未定义类型的值只有一个  undefined

* 使用typeof检查未定义值,会返回undefined. 

* ```HTML
  - 判断一个对象是否定义?
  
  'undefined'===typeof 变量
  ```

* 不会主动使用,浏览器自己用.



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



### 变量是否为数组

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

第1种和第2种方法貌似无懈可击，但是实际上还是有些漏洞的，当你在多个frame中来回穿梭的时候，这两种方法就亚历山大了。

由于每个iframe都有一套自己的执行环境，跨frame实例化的对象彼此是不共享原型链的，因此导致上述检测代码失效!
    

3.Object.prototype.toString
function isArray(obj){
    return Object.prototype.toString.call(obj)==='[object Array]'
}

4.Array.isArray()
ECMAScript5将Array.isArray()正式引入JavaScript，目的就是准确地检测一个值是否为数组。在IE8之前的版本是不支持的。
function (obj) {
    return Array.isArray(obj)
}


```





### 基本类型和引用类型

```HTML
基本类型:string, number, boolean, null, undefined, symbol
引用类型:Object, Array, Function,( RegExp, Date)

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

##### 方式一

可以调用<u>被转换类型</u>的**to==S==tring()方法**来将其转换成字符串

由于null和undefined中没有toString()方法,所以这种方式不适用于这两种,会报错

```js
a = 10; 

console.log(a,typeof a);   //10 "number"
a = a.toString();
console.log(a, typeof a);  //10 "string"

//多维数组也可以转换成字符串
[1,2,[3,4,[5,6]]].toString()
"1,2,3,4,5,6"
```





##### 方式二

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







#### 运算符(操作符)

> 运算符可以对一个或多个值进行运算

##### 算术运算符:

```js
加法 +   减法 -   乘法 *   除法 /

ES6新增 幂运算(平方) **   0.5次幂可以进行平方根的计算. 不支持老版本浏览器

取模 % : 取除法的余数 10%2取余数0 
```



##### 隐式类型转换

> 隐式类型转换
> 如果非数值进行运算时,JS会将其转换为数字然后再运算(除了字符串的加法)
> 	利用这个特性,可以为任意值==\-0, *1== 来将其转换为数字.原理和Number()一样.



###### 隐式 转换为数值

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
```



###### 隐式 转换为字符串

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





#### 一元运算符

> 只需要一个 **操作数** 进行运算.  typeof 就是一元运算符

```javascript
+
一元的+,就是正号,正号不会对 数值 产生任何影响

-
一元的-,就是负号, 负号对数值进行负号位取反

如果对 非数值 进行正负运算时,它会将其转换为数值然后再运算
	利用这个特点,可以通过对<任意类型的值>使用 + 运算符将其转换为数值
	原理和Number()一样,但是更加简便
	
a = true;
console.log(a, typeof a); //true  "boolean"

a = +a;
console.log(a, typeof a); //1 "number"


=============================================
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





#### 打印变量

```javascript
let a = 10;

console.log('a =',+a); // a = 10
console.log('a =', a);

模板运算符
console.log(`a = ${a} `);


console.log('a++ =',a++);

```







#### 赋值运算符(=)

> 可以将符号 右侧 的值赋值给符号 左侧 的值

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



#### 逻辑运算符

> ! (逻辑)非
>
> && (逻辑)与
>
> || (逻辑)或



##### 逻辑非(!)

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





##### 逻辑与(&&)

> &&用来对两个值进行 与 运算
>
> 当两个值同时为true时,才会返回true, 否则返回false
>
> ==与是找false的==   因为有一个false,&&的结果就是false
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





##### 逻辑或(||)

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

```js
score = score || 1;
age = age && 24;

可以简写成:
score ||= 1; //等同于 score = score || 1
age &&= 24;  // 等同于 age = age && 24
```







#### 关系运算符

> 比较两个数值之间的关系是否成立,成立返回true,不成立返回false
>
> `>`    检测左侧值是否大于右侧值
>
> `<`   检查左侧值是否小于右侧值
>
> ``>=``    检查左侧值是否大于等于右侧值
>
> `<= `    检查左侧值是否小于等于右侧值

```JavaScript
let result = 10 > 5; //true
result 10 >= 10; //true

```



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



#### 可选链运算符?

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



####   双问号运算符

```js
//双问号运算符??，我理解是为了解决或运算符||而设计出来的。
或运算符用法:当左侧的数据为假值(数字 0, 布尔类型的 false，空字符串，undefined, null)时，则执行右侧的语句。
1.双问好运算符可以解决, false和0都是正常的值,或运算符出错的问题.

const getScore=(score)=>{return score ?? 1;};
getScore(0);                         

2.双问好运算符可以与等号结合成一个赋值操作,当左侧为null或undefined时,则将右侧语句的结果赋值给左侧的变量.                 score ??= 1; //1


```

<hr/>



### 关系运算符

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



  

### 条件运算符(三元, 三目)

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

  



### 运算符优先级

> 和数学一样,JS中的运算符也有优先级
>
> JS中有一个优先级的表格, 所有的运算符的优先级可以在表格中查询
>
> ​	表格中位置越靠上的优先级越高,优先级越高越先计算,  优先级一样,自左向右运算
>
> ​	优先级表格不需要记忆,如果遇到拿不准的,使用()改变优先级
>
> [查询网址](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)



运算符介绍

* <kbd>?</kbd> 可选链

  > 调用一个属性或方法,如果有就调用,没有就返回undefined  避免报错.  注意兼容性

  ```JavaScript
  let b = null;
  b = b.toString();
  console.log(b, typeof b); // 报错
  
  let b = null;
  b = b?.toString();
  console.log(b, typeof b); // undefined;
  ```

  

* <kbd>??</kbd> 空值合并  注意兼容性

* ```Javascript
  let c = "haha";
  c = null; //没值
  c = undefined; //没值
  c = NaN; //是一个值
  //如果c有值就赋值给d,如果c没值就把空值合并后的  
  let d = c ?? 'c没有值';
  console.log(d);
  ```

  

### 代码块

> JS中使用{}创建代码块
>
> 代码块用来为代码进行 分组
>
> 统一代码块中代码为一组代码, 要么都执行,要么都不执行



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



### 流程控制语句

> JS代码默认是从上到下执行的,可以通过 流程控制语句 来改变程序的执行顺序
>
> 1.条件判断语句
>
> 2.条件分支语句



#### if语句(条件判断语句)

* 语法: 

  ```JavaScript
  if(条件表达式){
      语句...
  }
  ========================  
  if(!isNaN(i)){
      语句...
  }
  ```

* 执行流程:

  * if语句在执行时,先对条件表达式进行 求值判断.
    * 如果为true, 则执行if后的语句
    * 如果为false, 则不执行
  * if语句会控制紧随其后的那条语句, 如果希望可以控制多条语句,可以将语句放入一个代码块
  * 如果if的条件表达式不是一个布尔值,它会将其先转换为布尔值然后判断





#### if语句2

##### if-else语句

* 语法:

  ```JavaScript
  if(条件表达式){
      语句...
  }else{
      语句...
  }
  ```

* 执行流程:
  * if-else语句在执行时,会先对条件表达式进行求值判断,
    * 如果为true, 则执行if后的条件表达式
    * 如果为false, 则执行else后的条件表达式





#####  if-else if-else语句

* 语法:

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

* 执行流程
  * if-else if-else在执行时,自上向下依次对if后的条件表达式进行求值判断,
    * 如果结果为true,则执行当前if后的语句,执行完毕语句结束.
    * 如果结果为false,则继续向下判断,直到找到true为止,
    * 如果没有true,则执行else后的语句.
  * ==if-else if-else中只会有一个代码块会执行,一旦符合条件其余代码块都不会执行==

* 案例

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

* 语法:

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

  

* 执行流程
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

* 语法:

  ```JavaScript
  while(条件表达式){
      语句...
  }
  ```

  

* 执行流程
  * while语句在执行时,先对条件表达式进行求值判断
  * 如果判断结果为false,则语句结束
  * 如果结果为true,则只带代码块(循环体)中的代码
    * 执行完毕继续对条件表达式进行求值判断,以此类推



* 条件表达式恒为true的循环,是死循环,会一直执行



* ```JavaScript
  // 初始化表达式,初始化一个变量
  let i = 0;
  
  //条件表达式, 设置循环运行的条件
  while(i < 5){
      //执行语句
      //更新表达式,对初始化变量进行修改
      i++;
  }
  ```

  

## 1024





### 循环语句

#### do-while循环

* 语法:

  ```JavaScript
  do{
      语句...
  }while(条件表达式)
  ```

* 执行流程:

  * do-while在执行时,它会先执行do后的循环体,
    * 执行完毕对对while后的条件表达式进行求值判断
      * 如果为false,则语句直接结束
      * 如果为true, 则继续执行循环体,以此类推

* while是先判断后执行,do-while是先执行后判断, 可以确保循环体至少执行一次

* 案例:

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

求100以内所有的奇数之和

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



求100以内所有7的倍数之和,以及个数

```js
let num = 0;
let count = 0;
for(let i=0; i<100; i+=7){
  num += i;
  count++;
}
console.log(num,count);
```



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



判断数组中某元素出现的次数

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

console.log(newArr)
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
* break可以用来结束 switch和循环语句
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



<hr/>



### 对象



```js
* 对象是一种新的数据类型
* 之前学习的数据类型是一个个独立的值,它们不适合表示一些更复杂的数据
* 对象就相当于一个容器,在对象中可以存放多种不同类型的数据
* 对象是一种复合数据类型
* 使用typeof检查一个对象时,会返回object
* 对象中可以存储不同类型的数据
	- 对象中存储的数据被称为属性(property)
```



### 创建对象3种方法

```js
* 创建对象(3种方法)
let obj = new Object();
let obj = Object(); // new可以省略
let ojb = {};
工厂函数

属性名没有任何要求,任何值都可以作为对象的属性名
如果属性名太过特殊,则需要使用一个特殊的方式来设置:
```



### 读取对象属性2种方法

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



### 向对象种添加属性

```js
* 向对象中添加属性
-- 语法:
对象.属性名 = 属性值
对象['属性名'] = 属性值;

//obj.name = '孙悟空';
//obj.age = 19;
//obj.name = 'xxx' 后面的可以把前面相同的属性值的覆盖掉
```





### 对象中的方法

```Markdown
in 
	可以用来检查对象是否含有某个属性
	语法: '属性名' in 对象   //注意加引号,是字符串.不加引号会被认为是一个变量
	如果对象中有这个属性名,返回true.如果没有返回false
	
delete
	用来删除对象中的指定属性
	语法: delete 对象.属性名
	
```



JS中对象的**属性值**可以是任意类型的数据,也可以是一个对象

```JavaScript
let obj = Object();

obj.age = 18;
obj.test = Object();
obj.test.name = '猪八戒';
obj.test.tt = Object();

```

打印看效果
  ```
### 可变类型

* 对象属于可变类型,对象中所存储的属性是可以被修改的  //不可变类型,5种数据类型是不可变的

* 修改一个对象时,如果有其他的变量也指向该对象,则其他的变量也会被影响到

  ```JavaScript
  let obj = Object(); //变量obj指向对象的内存地址
  obj.name = '孙悟空'; //给对象添加了属性和属性值
  let obj2 = obj;		//变量obj2也指向了对象的内存地址
  obj2.name = '猪八戒'; //更改obj2指向对象的属性值
  
  console.log(obj.name);  // '猪八戒'
  console.log(obj2.name); // '猪八戒'
  
  
  ====================================================
  修改对象的形式(赋值和递增递减)
  a.b = xxx
  a.b++
  ```

  



```JavaScript
修改变量时,由于变量与其他变量是相互独立的,修改一个绝对不会影响其他变量
let a = 10;  // 变量a指向10的内存地址
let b = a;   // 变量b指向10的内存地址
a++;		//  变量a指向11的内存地址

console.log('a =', a);  //11
console.log('b =', b);  //10

=========================================
修改变量的形式(赋值和递增递减)
x = y
x++
x += yy
```





```JavaScript
# 比较两个对象是否相等(全等),比较的是两个对象的 内存地址 是否相同

let obj = Object();   //修改变量,变量obj指向对象的内存地址
obj.name = '孙悟空';	//为对象添加属性和属性值
let obj2 = obj;		  //将变量obj2指向对象的内存地址
obj = Object();		  //修改变量,将变量obj指向新的对象的内存地址
obj.name = '猪八戒';	//修改对象 为变量obj对应的对象添加属性和属性值

console.log('obj =', obj);  // obj={name:'猪八戒'}
console.log('obj2 =', obj2);//obj2={name:'孙悟空'}

------------------
let obj3 = Object();
obj3.name = '沙和尚';
let obj4 = Object();   //变量obj4对应的地址是一个新的内存地址
obj4.name = '沙和尚';

console.log(obj3 == obj4);  //false
console.log(obj3 === obj4); // false
```



### 对象字面量

使用**字面量**创建对象,可以在创建对象的同时向对象中添加属性

使用**大括号{}**创建一个对象

可以在对象中指定需要的属性

属性名和属性值以 **冒号** 连接,以 **逗号** 结尾, 最后一个属性最好不要写逗号

```JavaScript
let obj = {         //左边的花括号表示字面量的开始
    name:'孙悟空',
    age:18,
    gender:'男'
};
```



**注意**:

```Markdown
- 大括号后的分号带不带?
代码块之后不需要带

```



### 对象属性枚举for-in

```Markdown
* 获取对象中的属性

* for-in
for-in 来枚举对象中的属性
语法:
	for(let 变量 in 对象){
		语句...
	}
	
for-in会执行多次,对象中有几个属性名就执行几次.每次执行都会将一个属性名赋值给变量

for(let n in obj){
console.log(n, obj.n); //返回的是undefined,n是变量,obj中也没有为n的属性
}

for(let n in obj){
	console.log(n, obj[n])
}
```



```JavaScript
for(let n in obj){
    console.log(obj.n); // 错误.因为这种写法是找obj中属性名为n的属性值
    console.log(obj[n]); //如何理解这句话? 因为console.log(n)打印的是属性名.故通过obj[]可以打印出属性值
}
```



### 遍历对象的方法

```js
for循环 for..in    for..of  object.keys()

forEach 是数组的一个方法，主要页是用来遍历数组的，效率最高，但是不可以使用continue和break
for循环是js当中最简单的遍历方法  主要是针对数组进行遍历的，效率不高，但是可以使用continue和break
for..in 循环主要是用来遍历对象的（遍历对象的可枚举属性的） 效率最低，原因是因为不但要遍历自身的属性还要遍历原型的

for..of 是es6里面新加的一种遍历方法（前提必须是可迭代对象），效率没有forEach高（比其它的要高），也可以使用continue和break，for..of只能针对可迭代对象

遍历对象最快的方法也是使用forEach 是把对象属性转化为数组然后进行遍历
Object.keys(searchParams) 是把一个对象转化为数组，这个数组当中存储的是这个对象所有的属性
```





### 函数

#### 概要

```Markdown
函数也是一个对象,也是用来存储数据的  // 例如console.log(),和对象的a.b的属性值 函数是对象但是typeof返回'function'
和普通对象不同,函数中可以用来存储代码 //
而且可以在需要时对其中的代码进行调用
 
## 定义函数的2种方式
* 函数声明
* 函数表达式
```

#### 函数声明3种方式

##### 使用函数的构造函数

##### 使用函数表达式

通常这种方法与变量分配相同.  简言之,函数主题被视为一个表达式,并且该表达式被分配给一个变量.使用这种语法定义的函数可以是命名函数或匿名函数.

没有名称的函数被称为匿名函数.匿名函数是自调用的,这意味着它会自动调用自身.这种行为也称为立即调用的函数表达式(IIFE).

```js
let b = function(){}
```



##### 使用函数声明

在关键字'function'之后,必须指定函数的名称. 在函数体中,函数必须将一个值返回给调用方.遇到return语句后,该函数会立即停止执行.

```js
function fn(){}
```



##### Function

function Function(){}



#### 函数声明&调用(?)

```JavaScript
## 函数声明
语法:
	function 函数名(){
        语句...
    }   //函数是代码块,所以大括号之外没有分号
或        
    function 函数名([形参1,形参2,.....]){}   //中括号都表示是可选的
    
    
## 调用函数

* 调用函数就是让函数中存储的代码执行  //要理解这句话.如果直接使用函数名相当于引用了整个函数块(自己理解)
* 语法
        函数对象();    //函数对象不一定是函数名称
        
        
## 
使用typeof检查一个函数时,会返回 'function'
        typeof fn   //不是fn() 是函数对象 并非是 执行函数语句
        
---------------------------------------------------------        
function fn(){
    console.log('aaa');
}   
console.log(fn); //打印整个函数

打印效果:
'ƒ fn(){
    console.log('aaa');
}'
```



#### 函数表达式

```JavaScript
## 语法

let 变量 = function(){   //没有函数名称
    语句...
};   				//注意分号,因为这是一个表达式
    
一般多用const来代替let,因为函数一经定义,较少修改
    
const 变量 = function(){
    语句...
};

```



#### 立即执行函数(IIEF)/匿名函数

##### 匿名函数

```JavaScript
## 匿名函数
* 没有函数名的函数被称为匿名函数 function之后直接跟括号
	function(){console.log('aaa')};
* 匿名函数可以用一个变量来保存
	let fn = function(){console.log('aaa')};  //这是一个赋值语句,注意有分号 
* 如何调用上面这个匿名函数
	fn();
	

* 匿名函数的打印效果:
	console.log(fn);
'
	ƒ (){console.log('aaa')}  //可以看出没有函数名
'
```



##### 立即执行函数

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







#### 函数参数

JS中传递数据的方式:

1.按值传递,分为两类:基本类型值的传递和函数参数的传递. 函数参数的传递又有基本类型值的参数传递和引用类型值的参数传递. 引用类型值的传递实际上传递的是对象的引用(引用=内存中的地址),而非传递的对象本身.

2.按引用传递: 传递的是完整的对象本身.

```js
function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
}

var person = new Object();
setName(person);
alert(person.name); // "Nicholas"
var person = new Object();
setName(person);
alert(person.name); // "Nicholas"

如果对象在函数的参数传递中是按引用传递的，那么当解析器执行到：
obj = new Object();
这段代码的时候，person原先指向的那个对象将被删除，即obj和person都
将指向新建的obj对象，而新建的obj对象的name属性时“Greg”,则弹出的应该是“Greg”，而结果却不是，说明： 对象在函数的参数传递中是按值传递！
```



```JavaScript
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







#### 函数返回值(?)

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





* 案例

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





#### 方法(method)



```JavaScript
* 对象的属性可以是一个函数
* 当一个对象的属性是函数时,我们就称这个函数是当前对象的方法
  调用函数,称为调用对象的方法

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





#### 作用域(scope)

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




var c = 44;
console.log('c =', c); //等价于 console.log(window.c);  这个特性不好 

let d = 'haha';
console.log(window.d); //返回undefined


function fn2(){
    alert('haha');
}
fn2();// 调用函数， 等价于window.fn2();
```





#### 变量提升和函数提升

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



#### debug

概要

```JavaScript
chrome
webstrome

```





#### 函数作用域(??)

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


# 1106更新: 函数重新执行完,所有东西包括变量都会被销毁.
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
```





## 1027

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



### 作用域 | 函数

概要

```javascript
# 函数的作用域由函数的定义位置决定，和函数的调用位置无关

```



案例

```javascript
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



### 参数

```JavaScript
function fn(a){
    console.log('a =', a);
}

let str = 'hello';
fn(str); //等价于fn('hello'),因为变量str是作为值使用的


function fn(a){
    console.log('a =', a);  //hello
    a = 'hi';               //改的是变量a,给变量a重新赋值. 跟str没有关系
    console.log('a =', a); //hi
}

let str = 'hello';
fn(str); 
console.log('a =', a);  //hello

======================================================================
function fn(a){
    console.log('a =', a);  //hello
    a = 'hi';               //改的是变量a,给变量a重新赋值. 跟str没有关系
    console.log('a =', a); //hi
}

let a = 'hello';
fn(a); 
console.log('a =', a);  //hello


===============================================================
function fn(a){
    console.log('a =', a);  //孙悟空
    a.name = '猪八戒';       //改的是对象的值,联系到可变类型.变量指向的是同一个对象,一个变量更改了对象,另一个也受影响
    console.log('a =', a); //猪八戒
}

let a = {name:'孙悟空'};
fn(a); 
console.log('a =', a);  //猪八戒
```







### 对象|this

概要

```javascript
我们希望根据调用对象的不同，fn()函数打印的结果也不同

在 函数 执行时，浏览器每次都会传递进一个隐含的参数
这个参数叫 this

根据函数调用的方式不同，this的值也不同：   //函数定义的时候看不出来this是谁
	1.当以函数形式调用时，this就是window //1和2可以合并，因为函数可以被称为window的方法
    2.当以方法形式调用时，this就时调用方法的对象
    3.以构造函数形式调用时,this就是新建对象




=======================1102日更新==============================
# this到底是谁?
 0.函数体中,简单调用该函数(非显示/隐式绑定下),严格模式下this绑定undefined,否则绑定到全局对象window/global
 1.以函数形式调用,this是window
 2.以方法形式调用,this就是调用方法的对象
 3.以构造函数形式调用,this是新建的实例化对象(对象)
 4.以call和apply调用,this是他们的第一个参数
 5.箭头函数的this, 由外层作用域决定

 6.this在dom事件(回调函数)中,指向当前触发事件的事件源
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







### this到底是什么

```HTML
- https://juejin.cn/post/6844903680446038023

1.查看函数在哪被调用。
2.点左侧有没有对象？如果有，它就是 “this” 的引用。如果没有，继续第 3 步。
3.该函数是不是用 “call”、“apply” 或者 “bind” 调用的？如果是，它会显式地指明 “this” 的引用。如果不是，继续第 4 步。
4.该函数是不是用 “new” 调用的？如果是，“this” 指向的就是 JavaScript 解释器新创建的对象。如果不是，继续第 5 步。
5.是否在“严格模式”下？如果是，“this” 就是 undefined，如果不是，继续第 6 步。
6.JavaScript 很奇怪，“this” 会指向 “window” 对象。


```







### this指向实例

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



### 创建对象(工厂函数方法)

概要-工厂方法

```javascript
1.它是一个函数。
2，它用来创建对象。
3，它像工厂一样，“生产”出来的函数都是“标准件”（拥有同样的属性）

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

1.创建一个新的对象

2.将构造函数的this指向这个新的对象

3.为这个对象添加属性,方法等

4.最终返回一个新的对象

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



### 对象类型介绍

**介绍**

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



### 数组

#### 数组简介

```js
# 数组Array    //A大写,是一个类,首字母需要大写
 * 数组也是一个对象    //对象主要是用来存储对象的
 * 数组用来存储有序的数据   //Object对象中存储的数据是无序的
 * 数组中存储的数据成为 元素(element)
 * 数组中每一个元素都有一个唯一的序号,这个序号被称为 索引(index)
 * 索引是一组从0开始的整数
 * 使用typeof检查数组时,返回的是 'object'

```



#### 创建数组

```JavaScript
# 如何创建数组 //使用类来创建对象
const arr = new Array(); //使用const之后,不能改变的是变量arr,而其中的属性是可以更改的.函数同理

let arr = new Array();
let arr = [];  //let arr = [元素1, 元素2, 元素3, ...];

           
和对象设置类似:
创建对象(3种方法)
let obj = new Object();
let obj = Object(); // new可以省略
let ojb = {};           
           



数组中的元素可以是任意的数据类型.数组长度可以任意修改 一般我们在使用数组时,同一个数组只放同一类型的数据

# 数组中的数据存储的也是数据的内存地址


var a = [,,]; 每一项的值是undefined
function getArr(...args){} //...三点运算符 将伪数组转换为真数组
```





#### 二维数组|非连续数组

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



### 数组4方法

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



### 遍历数组方法

```JavaScript
遍历数组,就是将数组中的元素一个个取出来
- 如果数组中有对象{}, 对象是没有迭代接口的,所以无法遍历获取的到.

遍历数组(for for-in for-of forEach)
```



```JavaScript
let arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧', '白骨精', '蜘蛛精'];

============================方法1----for循环---建议使用====================
    for(i=0; i<arr.length; i++){
        console.log(arr[i]);
    }


---------------------------方法2----属性枚举for-in------------------
	for(let i in arr){
        console.log(arr[i]);   //对应的是索引 了解,老IE浏览器不兼容
    }


---------------------------方法3----遍历数组for-of------------------

	for(let i of arr){
        console.log(i);       //对应的是元素也就是值
    }
```



#### 遍历数组forEach | 回调函数

```JavaScript
- forEach()是数组对象的方法,可以用来对数组进行遍历,它需要一个函数作为参数. //没有返回值
- 传递给数组的函数会调用多次,数组中有几个元素就调用几次
- 每次调用时,会将元素的信息以参数的形式传递进函数

forEach() 被调用时，不会改变原数组，也就是调用它的数组
forEach返回值是undefined,没有返回值.

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

  arr.forEach(function(b){
      console.log(b); //0 1 2 3 
  })

  arr.forEach(function(c){
      console.log(c); //当前遍历的数组  有几个就显示几 次数组
  })

  arr.forEach(function(item,index){
      console.log(item, index); // 打印的是0'孙悟空' 1'沙和尚' 2'猪八戒'
  })
```

 



### 数组方法1

#### slice-截取

```JavaScript
- 截取数组,该方法不会影响到原数组,而是将结果保存到一个新数组中返回
- 参数:
	第一个参数, 截取起始位置的索引(包含起始位置)
	第二个参数, 截取结束位置索引(不包含结束位置)
	如果省略第二个参数,则会一直截取到最后
	
 如果使用负索引,则表示倒数第几个
	 负1 表示倒数第一; 负2表示倒数第二, 以此类推

- 复制整个数组的方法
	arr.slice()
	arr.slice('')
	arr.slice(0)
```



```JavaScript
let arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧'];
let result = arr.slice(0,2); //'孙悟空', '猪八戒'
result = arr.slice(1,2); // '猪八戒'
result = arr.slice(1); //  ["猪八戒", "沙和尚", "唐僧"]
result = arr.slice(1, -1) //["猪八戒", "沙和尚"]


arr原数组不会被改变
```



#### slice-浅复制

```JavaScript
只复制对象本身,不复制对象的属性,元素
通过slice可以对一个数组进行浅复制

深复制,全部复制,但是性能比较差
```



```JavaScript
===============重要====================

let arr = ['孙悟空', '猪八戒', '沙和尚'];

let arr2 = arr.slice();//arr.slice(0)同样效果   使用slice方法浅复制

//浅复制后, arr2与arr是两个对象,但内部的内容相同.
console.log(arr === arr2); //false

//arr2与arr指向的是相同的属性
console.log(arr[1] === arr2[1]); //true


浅复制:
let arr = ['孙悟空', '猪八戒', '沙和尚'];
function fn(array){
    array = array.slice(0);
    array.push('唐僧');
    return array; //忘记返回了
}

fn(arr);

let result = fn(arr);
console.log(result); //['孙悟空', '猪八戒', '沙和尚', '唐僧'];
console.log(arr);  //['孙悟空', '猪八戒', '沙和尚', '唐僧'];

console.log(result === arr); //false 浅复制 通过slice方法只复制了属性的对象和元素


- 对象的赋值比较 在函数内将对象赋值给变量再返回 
let arr = {name:'孙悟空', age:18}
let arr2 = arr;
console.log(arr2 === arr); //true

function copyObj(arr){
    let arr3 =arr;
    return arr3;
}
let arr3 = copyObj(arr);
console.log(arr3);
console.log(arr3 === arr); //true

let arr = ['孙悟空', '猪八戒', '沙和尚'];
function fn(array){
    let array2 = array.slice(0);
    return array; 
}


```





#### splice-删除添加替换

```JavaScript
- 该方法用来删除,添加,替换数组中的元素, 该方法是一个破坏性方法 //delete删除后依然占位置 用于对象
- 调用后直接影响原数组

- 参数:
	第一个,删除的起始位置
	第二个,删除的数量
	第三个,要添加的元素

- 返回值:
	返回被删除的元素
    
```



```JavaScript
let arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧'];
let result = arr.splice(1,2); // ["猪八戒", "沙和尚"]
result = arr.splice(1,2, '白骨精', '蜘蛛精'); 
//arr ["孙悟空", "白骨精", "蜘蛛精", "唐僧"]
//result ["猪八戒", "沙和尚"]

result = arr.splice(1,2, '白骨精');
//arr ["孙悟空", "白骨精", "唐僧"]
//result ["猪八戒", "沙和尚"]

result = arr.splice(1,2, "白骨精", "蜘蛛精", "玉兔精");
//arr ["孙悟空", "白骨精", "蜘蛛精", "玉兔精", "唐僧"]
//result ["猪八戒", "沙和尚"]

let arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧'];
result = arr.splice(1,0);// result返回的是一个空数组

result = arr.push( arr.splice(1,0) ); // 5
console.log(arr); 
//['孙悟空', '猪八戒', '沙和尚', '唐僧',Array()];
//['孙悟空', '猪八戒', '沙和尚', '唐僧',[]];



```

 

### 数组方法2

#### concat()

```JavaScript
- 可以用来连接两个或多个数组

- 不会影响到原数组,而是将元素添加到一个新数组中返回
```



```JavaScript
let arr = ['孙悟空', '猪八戒'];
let arr2 = ['白骨精', '蜘蛛精'];
let arr3 = ['张飞', '沙和尚'];

let result = arr.concat(arr2); //["孙悟空", "猪八戒", "沙和尚", "白骨精", "蜘蛛精"]
result = arr.concat(arr2,arr3);//["孙悟空", "猪八戒", "白骨精", "蜘蛛精", "张飞", "沙和尚"]

result = arr.concat(arr2, arr3, 'a');////["孙悟空", "猪八戒", "白骨精", "蜘蛛精", "张飞", "沙和尚", 'a']


# concat()方法为空,不添加任何数组
let arr4 = arr.concat(); //['孙悟空', '猪八戒'];
```



  



#### indexOf()

```JavaScript
- 返回元素在数组中第一次出现的位置
- 参数:
	第一个参数: 要查询的元素,包括这个元素自身
    第二个元素: 查询的起始位置,默认为0

- 返回值:
	如果找到了,返回其第一次出现的位置
	如果没找到,返回-1
```



```JavaScript
arr = ['孙悟空', '猪八戒', '猪八戒', '猪八戒'];
result = arr.indexOf('猪八戒'); //1
result = arr.indexOf('猪八戒', 2); //2
result = arr.indexOf('猪老九'); // -1
```



##### indexOf()-数组去重

```JavaScript
let arr = [1,2,3,1,1,4,3,2,5,6,7];
let newArr = [];
for(i=0; i<arr.length; i++){
    if(newArr.indexOf(arr[i]) === -1){   //太聪明了! // lastIndexOf 
        newArr.push(arr[i]);
    }
}
console.log(newArr);
```





#### lastIndexOf()

```JavaScript
- 返回指定元素在数组中最后一次出现的索引位置, 如果没有则返回-1
- 是从后向前找,包括寻找的开始位置.
- 参数: 
	第一个参数: 寻找的元素;
	第二个元素: 开始寻找的位置

```



```JavaScript
let arr = ['孙悟空', '猪八戒', '猪八戒', '猪八戒'];

result = arr.lastIndexOf('猪八戒'); //3
result = arr.lastIndexOf('猪八戒', 2); //返回的是1

console.log(result);
```



#### join()

```JavaScript
- 将一个数组连接为一个字符串,并返回
- 参数:
	- 可以指定一个分隔符作为参数
	- 如果不指定,默认使用逗号作为分隔符

-使用 空串 则没有分隔符
-使用 空值 则使用默认的逗号

- 非破坏性方法
```



```JavaScript
arr = ['a', 'b', 'c'];
result = arr.join('-'); //a-b-c
result = arr.join('@-@'); //a@-@b@-@c
result = arr.join('');  //abc
result = arr.join(); //a,b,c
console.log(arr); //不改变
```



  

#### reverse()

```JavaScript
- 反转数组,它是一个破坏性的方法
- 调用后原数组会受到影响
```



```JavaScript
arr = ['孙悟空', '猪八戒', '沙和尚']; 
arr.reverse();
console.log(arr); //["沙和尚", "猪八戒", "孙悟空"]
arr = ['a', 'b', 'c', 'd', 'e'];  
arr.reverse(); // ["e", "d", "c", "b", "a"]



```

####   sort() <

```JavaScript
- 用来对一个数组进行排序,它是一个破坏性的方法
- 调用后,原数组的顺序就会被改变

- 它默认的排序顺序是按照Unicode编码进行排序, 即使是数字排序. 
- 可以通过传递一个 回调函数 来自定义排序规则

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



```JavaScript
//arr = ['c', 'd', 'a', 'b', 'e']; 字符串排序方式
arr = [3, 1, 2, 5, 6, 7, 9, 8, 10, 4];
arr.sort(function (a, b) {
     return a - b;
}); 
console.log(arr);





```



#### map()

```js
map方法是创建一个新数组,其结果是数组中每个元素调用一次提供的函数后的返回值.

const newarr=arr.map((item,index,arr)=>{})

//实例
实现数组绑定&符,变成字符串形式
arr.map(item=>'&a='+ item)
```





#### filter()

```
filter 不会改变原数组，它返回过滤后的新数组。
一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组


```



#### reduce()

```
-语法:
reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。


arr.reduce((preValue, current,index,arr)=>{}, initialValue)
arr:当前数组
preValue:第一次执行回调时为给定的初始值initialValue,或者是上一次执行回调时的返回值(若没有传入initialValue,则第一次的     preValue值是数组中的第一个元素的值)
current: 表示当前正在处理的元素
index 表示当前正在处理的数组元素的索引,若传入了initialValue,则为0,否则为1.
array 当前操作的数组(就是arr)
initialValue 表示初始值.一般是做数学运算时设置为0.若为筛选值可以不传.


//initialValue注意事项
如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
```

```js
//实例解析initialValue参数
// 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
let arr = [1,2,3,4];
let sum = arr.reduce((prev,current,index,arr)=>{
    console.log(prev,current,index);
    return prev+current;
})
console.log(arr,sum)

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
console.log(arr, sum);

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
console.log(nameNum)
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

console.log(newArr[arr])
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
console.log(found); //4 5

```



#### findIndex()

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```



### toString 数组转换成字符串





### 数组练习

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
    
var arr = [];
for(var i=0; i<str.length; i++){
    arr[str[i]] = arr[str[i]] + 1 || 1;
}
console.log(arr);
    
```



#### 数组去重2种方法

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















### 函数参数arguments

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
    alert(arguments instanceof Array); // 伪数组 可以求长度,遍历,获取某个元素.但是数组的方法无法使用.
}
fn(); //和this类似,是存在可以被输出的. 输出的结果是[object Arguments]
==============================================================
function fn(){
    alert(arguments.length)
}
fn('hello'); // 1
fn('hello', true, 123); //3

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





  

###   函数方法call()和apply()

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

function Myclass(){
    
}
console.log(Myclass.prototype);

let mc = new Myclass();
let mc2 = new Myclass();

//向Myclass的原型中添加name属性
Myclass.prototype.name = '原型中的name';

mc.name = '孙悟空';

console.log(mc.name); //'孙悟空
console.log(mc2.name);//'原型中的name'


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



##### lastIndexOf()实例

```HTML
'abadefgacm'.lastIndexOf('ab', 7);// 返回0. 两个条件,字符串'ab',从第7位回向查找.
```



##### str.slice()

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



##### str.substr()

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



##### str.substring()

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





##### str.split()

> 将一个字符串拆分成一个数组

```HTML
- 语法
str.split(sepatator, limit);
separator: 指定每个拆分应发生的点的字符串.separator可以是一个字符串或正则表达式.
```



##### str.split()实例

```HTML
let str = 'Hello';
str.split();//['Hello']  空值就没有分隔符
str.split('');//['H', 'e', 'l', 'l', 'o']  //空字符串就是默认逗号
```



##### str.toUpperCase()

> 将一个字符/字符串转换为大写



##### str.toLowerCase()

> 将一个字符/字符串转换为小写





##### str.trim()

> 去除字符串前后的空格



##### str.trimEnd()

> 新方法 不兼容. 去除后边的空格



##### str.trimStart()

> 去除前边的字符串 新方法不兼容



##### str.startsWith()

> startsWith() 方法用于检测字符串是否以指定的子字符串开始。
>
> 如果是以指定的子字符串开头返回 true，否则 false。
>
> startsWith() 方法对大小写敏感。
>
> **注意:** IE 11 及更早版本不支持 startsWith() 方法 。



##### str.endsWith()

> endsWith() 方法用于测试字符串是否以指定的后缀结束。



#### padStart

```js
//作用: 可以让某个字符补全位数

'哈哈'.padStart(6,'0')
输出: '000哈哈'
```





### 正则表达式

#### 概要

* 含义:

  > 正则表达式用来标书一个字符串的规则
  >
  > 程序可以根据这个规则来检查一个字符串是否符合规则
  >
  > 或者将符合规则的内容从字符串中提取出来
  >
  > 使用typeof 检查一个正则表达式会返回'object'



#### 格式

* 概要

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

  



#### 语法:

* 概要

  ```JavaScript
  | 在正则表达式中表示或
  []中的内容表示或
   [a-z] 任意的小写字母
   [A-Z] 任意的大写字母
   [A-Za-z] 任意字母
   [0-9] 任意数字
   
  [^] 在中括号里表示除了内容之外 
   
   
  量词
  {m} 正好出现m次
  {m,n} m-n次
  {m,} m次以上
  + 至少一次,相当于{1,}
  ? 0-1次,相当于{0,1}
  * 任意次, 相当于{0,}           
  let re = [^a];
  
  ```
  
  



## 1031

### 单词

> notation 表示法



### 正则语法

```JavaScript
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



### 固定格式

```js
//空行
^\s*(?=\r?$)\n

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

```JavaScript
JavaScript Object Notation
- JS对象表示法
- JSON实际就是一个字符串,它有一个特殊的字符(格式类似于JS对象)
- 使用JSON格式表示的数据,可以转换为任何语言中的对象,从而达到数据交换的目的
- JSON无法保存对象里的方法.可以使用递归实现深拷贝


- JSON的格式
 1.JSON的格式和JS对象基本是一样的
  不同点在于JSON的属性名,必须加双引号
  字符串也必须使用双引号,不能使用单引号

2.JSON中支持的数据类型
 -1 字符串(string)
 -2 数值(number)
 -3 布尔值(boolean)
 -4 空值(null)
 -5 对象(object)
 -6 数组(array)

3.JSON的形式2种
JSON对象{}
JSON数组[]


转换方法:
1.将JS对象转换为JSON字符串
JSON.stringify(JS对象)
- 将一个js对象转换为一个JSON字符串

2.将JSON字符串转换为JS对象
JSON.parse(json串)
- 将一个JSON字符串转换为js对象


```



#### stringify() | parse()

```javascript
let jsonObj = '{"name":"孙悟空", "age":18, "a":true, "b":null}';
let jsonArr = '[1, 2, 3]';
=================================================
obj = {
    name:'孙悟空',
    age:18,
    brother:[
        {
            name:'猪八戒',
            age:28
        },
        {
            name:'沙和尚',
            age:38
        }
    ]
};

let str = JSON.stringify(obj);//log结果:{"name":"孙悟空","age":18,"brother":[{"name":"猪八戒","age":28},{"name":"沙和尚","age":38}]}

let obj2 = JSON.parse(str);//log结果:


```





### 闭包

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
 闭包在内部函数被垃圾回收时销毁
 
 
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

