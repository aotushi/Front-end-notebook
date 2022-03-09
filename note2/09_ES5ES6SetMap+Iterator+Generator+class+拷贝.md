ES5

### 严格模式

> 'use.strict'

#### 位置:

##### 1.全局

```js
- 代码块开始
'use strict'
```



##### 2.函数内部

```js
- 函数大括号之后开始的位置
function main(){
	'use strict'
}
```



#### 严格模式特性

1.不允许使用未声明的变量

2.函数内部的this不指向window

3.eval作用域

4.对象不能有重复的属性

5.严格模式下,函数不允许有同名的形参

6.新增了一些保留字

```js
-eval 是一个函数,接受字符串参数,会对字符串进行JS语法解析并运行

eval('var a=100; var b=200; console.log(a)');
console.log(a, b);//100   100 200  注意打印顺序,先打印了eval里的值

新增保留字:private protected implements
```



### Object.create

> 作用是创建一个新的对象,使用现有对象来提供新创建对象的\_\_proto\__

#### Object.create(prototype, [descriptors])

Object.create 方法可以以指定对象为原型创建新的对象，同时可以为新的对象设置属性, 并对属性进行描述

* value : 指定值
* writable : 标识当前属性值是否是可修改的, 默认为 false
* configurable：标识当前属性是否可以被删除 默认为 false
* enumerable：标识当前属性是否能用for in 枚举 默认为 false
* get:   当获取当前属性时的回调函数
* set:   当设置当前属性时,会自动执行, 并将返回结果, 作为该属性的值



#### 创建对象

```js
//创建对象的3种方式: 字面量{},new Object(), Object()

var car = {
	name: '汽车',
    drive: function(){console.log('可以行使');}
}

var passat = Object.create(car, {
    brand:{
        //属性值
        value: '帕萨特',
        writable: true, //该属性是否可以修改
        configurable: true, //该属性是否可以删除
        enumerable: true  //该属性是否可以枚举 是否可以使用for..in遍历
    },
    color:{
         value: '黑色',
         enumerable: true
    }
       
})
```



#### 通过getter和setter控制属性

```js
//getter作用:动态属性设置, getter方法 无需手动调用,当获取对象的该属性时,会自动执行,将返回结果作为该属性的值.
//getter和setter方法中  , this是指向新对象的
//setter 当修改对象的该属性的时候,会自动执行 例如: passat.price = 2500;
//getter和setter不能与value属性共存


var car = {
	name: '汽车',
    drive: function(){console.log('可以行使');}
}

var passat = Object.create(car, {
  brand:{
    //属性值
    value: '帕萨特',
    writable: true, //该属性是否可以修改
    configurable: true, //该属性是否可以删除
    enumerable: true  //该属性是否可以枚举
  },
  color:{},

  price:{//获取price的时候,方法会自动执行,返回值会作为属性值.
    get: function(){return this.jiage;},
    set: function(value){//参数value就是修改的时候赋的值.
      this.jiage = value; //给对象新添加了一个属性,方便get方法使用.
      //能否使用this.price,不可以,会出现无限递归
    }
  }    

});

passat.price = 20000;
console.log(passat);
```







### Object.defineProperties

> 为对象添加或修改属性
>
> 此方法执行在一个对象上定义新的属性或修改现有属性,并返回该对象.





## ES6

### let

```HTML
let声明变量的 
标识符规范:1.字母,数字,下划线,$,不能以数字开头,区分大小写;2.不能是系统保留字关键字;3.使用驼峰命名法(大小)

let声明的特点:
1.不允许重复声明
2.块级作用域
3.变量提升(临时性死区)
4.不影响作用域链
```



```js
function main(){
	let dance = 'aaa';
	function fn(){
		console.log(dance);//可以打印,不影响作用域链
	}
}
```





### let案例

```HTML
- 案例: 点击div变色

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      .item {
        width: 100px;
        height: 50px;
        border: solid 1px rgb(42, 156, 156);
        float: left;
        margin-right: 10px;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h2 class="page-header">点击切换颜色</h2>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>

    <script>
      var items = document.querySelectorAll('.item');
      //第一种方法: var+this
      //第二种方法: es5 立即执行函数模拟块级作用域
      //第三种方法: let取代var let+this/let+items[i]
      // for(var i=0; i<items.length; i++){
      //     items[i].onclick = function(){
      //         this.style.background = 'yellowgreen';
      //     }   //this是指向事件源. 如果使用items[i]代替,var是全局声明,没有块级作用域
      // }
      <!--        
      for(var i=0; i<items.length; i++){
        items[i].onclick=function(){
          console.log(i);//3
          items[i].style.background='yellowgroud';
        }
      }
      console.log(i);//3
      -->

        // for (var i = 0; i < items.length; i++) {
        //     (function (index) {
        //         items[index].onclick = function () {
        //             items[index].style.background = 'yellowgreen';
        //         }
        //     })(i)
        // }

        for(let i=0; i<items.length; i++){
          items[i].onclick = function(){
            items[i].style.background = 'yellowgreen';
          }
        }



    </script>
  </body>

</html>
```



### const

> 用来声明一个常量(值不变)  constable variable
>
> 一旦声明,就必须立即初始化, 常量的值就不能改变.
>
> 声明变量不提升,和let一样.



> `const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个==内存地址==所保存的数据不得改动。对于简单类型的数据（**数值、字符串、布尔值**），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（**主要是对象和数组**），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
>
> https://www.bookstack.cn/read/es6-3rd/spilt.3.docs-let.md



```html
- 声明特点:
1.声明的时候一定要赋初始值//不赋值报错
2.常量的名称一般为全大写 //潜规则
3.不允许修改常量的值
4.不允许重复声明
5.块级作用域: 只在声明所在的块级作用域内有效.
6.关于数组和对象元素的修改
 改变常量的地址(直接赋新值)就会报错,改数组和对象的值不会报错

const TEAM = ['a', 'b', 'c', 'd'];
TEAM.push('e');
console.log(TEAM);//没有报错, 打印a-e的值

const FAKER = {name: 'aaa'};
FAKER.name = 'bbb';//没有报错,只是更改属性,没有改对象的地址


- 应用场景: 声明对象类型使用const,非对象类型声明使用let// 引用类型, 基本数据类型
 
```

```js
{
    const ABC = 100;
    console.log(ABC);//100
}
console.log(ABC);//报错 is not defined . 如果常量为A,打印的是window 待补充


if (true) {
  console.log(MAX); // ReferenceError
  const MAX = 5;
}
//const声明的常量也是不提升,同样存在暂时性死区,只能在声明的位置后面使用.
```

### let const使用场景

```js
声明对象类型使用const, 非对象类型声明选择let
```





### 字符串的迭代与解构

> 字符串原型上暴露了一个@@iterator方法,表示可以迭代字符串的每个字符.
>
> 字符串通过解构转成类似数组的对象
>
> 字符串可通过数组来解构赋值.
>
> 有length属性.

```js
let message = 'abc';
let stringIterator=message[Symbol.iterator]();

console.log(stringIterator.next()); //{value:'a', done:false}
console.log(stringIterator.next());//{value:'b', done:false}
console.log(stringIterator.next());//{value:'c', done:false}
console.log(stringIterator.next());//{value:undefined, done:true}

在for-of循环中可以通过这个迭代器按序访问每个字符:
for(const i of 'abc'){
    console.log(i);
}
//log:
//a
//b
//c

有了这个迭代器后,字符串可以通过解构操作符来解构了.例如,可以更方便的把字符串分隔为字符数组:
let message='abcde';
console.log([...message]);//['a', 'b', 'c', 'd', 'e']


- 字符串也可以解构赋值,这是因为此时，字符串被转换成了一个类似数组的对象。
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let{length: len}='hello';
len//5
```





### 变量的解构赋值

> 解构赋值: ES6允许按照一定模式从数组和对象中提取属性/值, 对变量进行赋值, 这被称为解构赋值[Destructuring].
>
> 
>
> 1.数组的解构赋值需要按顺序进行赋值
>
> 2.对象的解构赋值则是通过对象属性进行赋值, 不需要按照顺序进行, 无法匹配的则为undefined.
>
> 3.如果**对象**解构赋值中**,属性名和变量名不同,则不能简写**. 例如 let{a:a}={a:1}可简写,let{a:b}={a:1}不能简写.



> 解构赋值语法是一种JavaScript表达式.通过解构赋值,可以将==属性/值==从==对象/数组==中取出, 赋值给其他变量.



#### 数组解构赋值

```js
- 数组的解构赋值

const arr = ['a', 'b', 'c', 'd'];
let [aa, bb, cc, dd] = arr;
let [aa, bb, cc, dd] = ['a', 'b', 'c', 'd'];//一一对应的关系
let [,,,d]=arr;
console.log(aa);//a
console.log(bb);//b
console.log(cc);//c
console.log(dd);//d
console.log(d); //d

- 默认值. 为了防止从数组中取出一个值为undefined的对象,可以在表达式左边的数组中为任意对象预设默认值.
var a, b;
[a=5, b=7]=[1];
console.log(a);//1
console.log(b);//7

- 案例//配合扩展运算符下的解构后依然是一个数组
let [a, ...arr]=[1,2,3,4]//log:a=1, arr=[2,3,4]
let [x, y, ...z]=['a'] //log: x='a', y=undefined, z=[]
let[a, [b], d]=[1, [2,3], 4];//log:a=1, b=2, d=4
let[a,b]=[1,2,3];//log: a=1, b=2

ES6内部使用严格相等运算符, 判断一个位置是否有值. 解构赋值可以使用默认值,只有当数组成员严格等于undefined时,默认值才有效
let[a,b='b']=['a', undefined]; //log: a='a', b='b'
let[a=1]=[null]//log:  a=null null不严格等于undefined
let[a=1]=[]//log: a=1

如果解构不成功,变量的值就等于undefined
let[foo]=[];
let[bar, foo]=[];  //bar和foo都是undefined
以上两种情况都属于解构不成功,foo的值都等于undefined

如果默认值是一个表达式,那么这个表达式是惰性求值,即只有在用到的时候,才会求值. //惰性求值
function f(){
    console.log('aaa');
}
let[x=f()]=[1];//log: x=1
let[y=f()]=[];
y;//'aaa'


默认值可以引用解构赋值的其他变量,但该变量必须已经声明.
let[a=1, b=a]=[];//log: b:1
let[x=1, y=x]=[2];//log: x=2, y=2
let[x=1, y=x]=[1,2];//log:x=1, y=2
let[a=b, b=1]=[];//报错: b is not defined
```





#### 对象解构赋值

```js
对象和解构和数组的解构有一个重要的不同. 数组的元素是按次序排列的,变量的取值由它的位置决定;而对象的属性没有次序,变量必须与属性名同名,才能取到正确的值.
```

```js
# let {属性名:变量名}={属性名:属性值,属性名:属性值}

- 对象解构赋值中,变量不像数组有位置要求
let{bar, foo}={foo:'aaa', bar:'bbb'};
foo//'aaa'
bar//'bbb'

- 变量没有对应的同名属性,导致取不到值,解构失败. 最后等于undefined
let{foo}={bar:'bar'};
foo//undefined

- 把对象的方法赋值到变量上
let{log, sin, cos}=Math;
const{log}=console;
log('hello');//hello

- 解构赋值变量名与属性名不同,必须的写法
let{属性名:变量名}={属性名:属性值,属性名:属性值}
let{foo:baz}={foo:'aaa', bar:'bbb'};
baz//'aaa'
foo//foo is not defined

let obj={first:'hello', last:'world'};
let{first:f, last:l}=obj;
f//'hello'
l//'world'

这实际上说明,对象的解构赋值实际上下面形式的简写.对象解构赋值的内部机制,是先找到同名属性,再赋给对应的变量.
let{foo:foo, bar:bar}={foo:'aaa', bar:'bbb'};

- 解构嵌套解构的对象
let obj={
    p:[
        'hello',
        {y:'world'}
    ]
};
let{p:[x,{y}]}=obj;
p//p is not defined
x//hello
y//world
 p也要作为变量赋值
 let{p,p:[x,{y}]}=obj;

const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};
let { loc, loc: { start }, loc: { start: { line }} } = node;
line//1
loc//Object{start:Object}
start//Object{line:1, column:5}
上面代码有三次解构赋值,分别是对loc,start,line三个属性的解构赋值. 注意,最后一次对line属性的解构赋值之中，只有line是变量，loc和start都是模式，不是变量。

let obj={};
let arr=[];
({foo:obj.prop, bar:arr[0]}={foo:123, bar:true});
obj//{prop:123}
arr//[true]

- 解构模式是嵌套的对象,且子对象所在的父属性不存在,将报错.
let{foo:{bar}}={baz:'baz'};
等号左边对象的foo属性，对应一个子对象。该子对象的bar属性，解构时会报错。原因很简单，因为foo这时等于undefined，再取子属性就会报错。

- 对象的解构赋值可以取到继承的属性
const obj1={};
const obj2={foo:'bar'};
Object.setPrototypeOf(obj1, obj2);

const {foo}=obj1;
foo//'bar'
对象obj1的原型对象是obj2。foo属性不是obj1自身的属性，而是继承自obj2的属性，解构赋值可以取到这个属性。

- 默认值
var {x = 3} = {};
x // 3
var {x, y = 5} = {x: 1};
x // 1
y // 5
var {x: y = 3} = {};
y // 3

var {x: y = 3} = {x: 5};
y // 5
var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"

- 默认值生效条件:对象的属性值严格(===)等于undefined
var {x = 3} = {x: undefined};
x // 3
var {x = 3} = {x: null};
x // null

注意点:
1.如果要将一个已经声明的变量用于解构赋值，必须非常小心。
// 错误的写法
let x;
{x} = {x: 1};
// SyntaxError: syntax error
上面代码的写法会报错，因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
// 正确的写法
let x;
({x} = {x: 1});

2.解构赋值允许等号坐标的模式之中, 不放置任何变量名.
({} = [true, false]);
({} = 'abc');
({} = []);
上面的表达式虽然毫无意义，但是语法是合法的，可以执行。

3.由于数组本质是特殊的对象,因此可以对数组进行对象属性的解构.
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
first // 1
last // 3
```



```js
- 对象的解构赋值
let redian = {
    name: 'targetName',
    chaozuo: function(){console.log('print chaozuo');},
    wushu: function(){console.log('print wushu');}
}

//提取内部函数的原始方法
let chaozuo = redian.chaozuo;
let wushu = redian.wushu;

//从对象中解构方法,使用频率较高. 变量名称需和相应属性或方法名称一致
let{chaozuo, wushu}=redian;
chaozuo();
wushu();
===========================================================

let guodegang = {
    name: '郭德纲',
    tags: ['郭a', '郭b', '郭c'],
    xiangsheng: function(){console.log('说相声')}
}

let {name, tags, xiangsheng};
let {name, tags:[a,b,c], xiangsheng} = guodegang;//此时tags不可用,只能用数组里的变量
let {tags:[a,b,c], name} = guodegang; //赋值对象里的变量没有顺序要求.
let {tags:[a,b,c], xiangsheng} = guodegang;
	console.log(xiangsheng());

```



#### 数组和对象解构赋值的其他例子

```js
- 数组的解构赋值
let [a,,c]=[1,2,3];
console.log(a);//1
console.log(c);//3
-对象的解构赋值
let{a,c}={a:1,b:2,c:3};
console.log(a);//1
console.log(c);//3

let{a,,c}={a:1,b:2,c:3};
console.log(a);//Uncaught SyntaxError: Unexpected token ','

let [a,b]=[1];
console.log(a);//1
console.log(b);//undefined


- 对象的解构赋值
let {a,b,c}={b:1, a:2};
console.log(a);//2
console.log(b);//1
console.log(c);//undefined

以上的完整写法:
let {a:a, b:b, c:c}={b:1, a:2};
console.log(a);//2
console.log(b);//1
console.log(c);//undefined
//因为等式左边属性名称和变量名相同,因此可以直接写成let{a,b,c}={b:1, a:2};
//如果属性名和变量名不同,则不能简写.
let {a:b}={a:1};
console.log(b);//1  b为变量名,a为属性名,不能直接输出a


- 对象解构赋值的应用
const {log} = console;
log('hello');//hello, 等同于console.log()
```



#### 数值和布尔值的解构赋值

```
解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

let {toString: s} = 123;
s === Number.prototype.toString // true
let {toString: s} = true;
s === Boolean.prototype.toString // true
上面代码中，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。

解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

 复制代码
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```



#### 函数参数的解构赋值 ?????

```
函数参数的解构赋值
函数的参数也可以使用解构赋值。
参数变量是默认声明的,所以不能使用let或const再次声明.
使用参数默认值时,函数不能有同名参数.
参数默认值是不传值的,而是每次都重新计算默认值表达式的值.也就是说,参数默认值是惰性求值的.

let x = 99;
function foo(p = x + 1) {
  console.log(p);
}
foo() // 100
x = 100;
foo() // 101
参数p的默认值是x + 1。这时，每次调用函数foo，都会重新计算x + 1，而不是默认p等于 100。




function add([x, y]){
  return x + y;
}
add([1, 2]); // 3
上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。

下面是另一个例子。

[[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]
函数参数的解构也可以使用默认值。

function move({x = 0, y = 0} = {}) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。

注意，下面的写法会得到不一样的结果。

function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。

undefined就会触发函数参数的默认值。

 复制代码
[1, undefined, 3].map((x = 'yes') => x);
// [ 1, 'yes', 3 ]



```







### 模板字符串(template string)

> 字符串声明的3种方式, 单引号 双引号 反引号

```js
1.使用回车换行

2.变量,表达式拼接
${变量}
${表达式}//加减乘除,三元运算符等等

let wangning = '王宁';
// let str = '几年前'+wangning+'离开了开心麻花';
// let str = `几年前${wangning}离开了开心麻花`;
let str = `几年前${ '王' + '宁' }离开了开心麻花`;
console.log(str);


- 使用场景
拼接
保存HTML,换行字符串...
```





### 对象的简化写法

```js
- 使用变量替换属性名和属性值
- 对象方法的简化 省略冒号和function或者使用变量代替

let obj={
    name: 'abc',
    change: function(){console.log('example')},
    improve: function(){console.log('example')}
}

简化:

let name ='abc';
let change = function(){console.log('example')};

let obj = {
    //变量的简化 name:name
    name,
    change,
    //方法的简化 省略function和冒号
    improve(){console.log('example')}
}

- ${}中可以放入任意JS表达式,可以进行运算,以及引用对象属性,调用函数
- 如果需要引用模板字符串本身,在需要时执行,可以写成函数
let func=(name)=>`hello ${name}`
func('jack')// 'hello jack'

```





### 箭头函数

> ES6允许使用箭头(=>)定义函数



```HTML
1.声明格式
let fn=(形参)=>{代码体}


2.函数调用
fn(实参)


3.特性
- this是静态的.始终指向外层作用域下this的值.//箭头函数的外部还是箭头,那直接向上寻找.无论如何更改例如call,apply,bind等.
- 不能作为构造函数使用 //new fn()报错
- 不能使用arguments获取实参 //
	let main = ()=>{console.log(arguments)}; main(1,2,3) //报错 arguments未定义
- 箭头函数简写
 - 不写小括号: 当形参有且只有一个的时候
 - 不写大括号: 当代码体只有一条语句,并且语句的执行结果为函数返回值(不写大括号,return也不能写)

4.总结
- 适合箭头函数场景: 与this无关的回调设置.定时器,数组方法回调//filter
- 不适合箭头函数场景: 与this有关的回调设置. DOM事件的回调, 对象里的方法
```







#### 箭头函数案例

```html 
- 需求1:点击div 2s后颜色变成粉色

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>箭头函数实践</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background: #58a;
        }
    </style>
</head>
<body>
    <div id="ad"></div>
    <script>
        //需求-1  点击 div 2s 后颜色变成「粉色」
       let obj = document.querySelector('div');
       //es5实现,变量传递this
       obj.onclick = function(){
           let self = this;
           setTimeout(function(){
               self.style.background='pink';
           }, 2000)
       }
       //es6实现,箭头函数
       //箭头函数中的this取决于外层作用域中的this指向
       obj.onclick = function(){
           setTimeout(()=>{
               this.style.background='pink';
           }, 2000)
       }

       
    </script>
</body>

</html>
```



```js
- 需求2:从数组中返回偶数的元素

数组filter方法
let arr = [1,2,3,99,55,6,7,8,8,8,6,5,4,43,3];
let result = arr.filter(
    function(item){
        if(item % 2 === 0){
            return true;
        }else{
            return false;
        }
    }
)

        
let result = arr.filter(item=>item%2===0);
console.log(result);
```







### 参数的默认值

```js
ES6允许给函数参数赋值初始值

1. 参数直接设置默认值,具有默认值的参数,位置一般要靠后(潜规则)
function add(a,b,c=9){
     console.log(a+b+c);
 }
add(1,3);//13 1+3+9

function add(a,b=9,c){
     console.log(a+b+c);
 }
add(1,3);//NaN  

2. 与解构赋值结合使用,解构赋值的形式先后顺序不受影响

- 原始写法:
 function connect(options){
     console.log(options.host);
     console.log(options.port);
     console.log(options.name);
     console.log(options.pass);
 }
connect({
    host: '1.1.1.1',
    port: 27017,
    name: 'root',
    pass: 'admin'
});

- 与解构赋值结合使用, 解构赋值的顺序先后不影响.对应的是键位:
 function connect({host, port, name, pass='admin'}){ //赋值是等于号
     console.log(host);
     console.log(port);
     console.log(name);
     console.log(pass);
 }
connect({
    host: '127.0.0.1',
    port: 27017,
    name: 'root',
    //pass: 'admin' 使用函数的默认值来代替
});




```





### rest参数

> 剩余参数. 允许将一个不定数量的参数表示为一个==数组==.
>
> 如果参数的最后一个命名参数以`...`为前缀, 则它将成为一个由剩余参数组成的真数组, 其中从0(包括)到`theArgs.length`(排除)的元素由传递给函数的实际参数提供.

```HTML
- rest参数是用来替换arguments的. 
- 剩余参数(rest)和arguments对象之间的区别:
 - 1.剩余参数可包含那些没有对应形参的实参.而arguments包含了传给函数的所有实参
 - 2.arguments对象不是一个真正的数组, 剩余参数是真正的Array实例.(可以打印查看区别).
 - 3.arguments对象还有一些附加属性, 例如callee属性.


- 多个参数情况下,rest参数需要放在形参的最后一位


rest使用场景: 对于函数实参个数不确定的时候,
arguments使用场景: 对于实参个数不确定. 求最大值,求和...

- 解构剩余参数
剩余参数可以被解构,这意味这它们的变量可以被解包到不同的变量中.
function f(...[a,b,c]){
	return a+b+c;
}
f(1) //NaN b and c are undefined
f(1,2,3)//6
f(1,2,3,4)//6 the fourth parameter is not destructured
```





```js
//rest参数用来代替arguments
function main(...args){
    console.log(arguments);//[1, 2, 3, callee: (...), Symbol(Symbol.iterator): ƒ]
    console.log(args); //[1, 2, 3]
}
main(1,2,3,4,5)

//多个参数, rest参数放在最后一位
function sum(index1, index2, ...abc){
    var sum = 0;f
    abc.forEach(item=>sum += item);
    return sum+arguments[0]+arguments[1];
    //return sum + index1 +index2;
}
console.log(sum(1,2,3,4,5,6))

=======================================================
为了在arguments对象上使用Array方法,它首先必须被转换成一个数组
function sortArguments() {
  var sortedArgs = arguments.sort();
  return sortedArgs; // 不会执行到这里
}
 
alert(sortArguments(5,3,7,1)); // 抛出TypeError异常:arguments.sort is not a function

function sortArguments(){
    var args=Array.prototype.slice.call(arguments);
    var sortArgs=args.sort();
    return sortArgs;
}
console.log(sortArguments(5,3,7,1)); //log: 1,3,5,7
```





### spread扩展运算符

> 扩展运算符也是...   ,是rest参数的逆运算 把数组和对象展开,变成以逗号分隔的参数序列 .
>
> 可以展开实现了迭代器的的数据.(Array string set map Nodelist typearray arguments)
>
> 只能用于可迭代对象



#### 数组使用扩展运算符

```js
- 数组的展开
const arr = ['a0', 'b1', 'c2'];
function fn(){console.log(arguments)}
fn(...arr);//log结果: ["a0", "b1", "c2", callee: ƒ, Symbol(Symbol.iterator): ƒ]
fn(arr); //log结果: [Array(3), callee: ƒ, Symbol(Symbol.iterator): ƒ]



- 数组的克隆
const arr = [1,2,3,4]
const newArr = [...arr];
console.log(arr===newArr);//false
console.log(...arr);//log结果: 1 2 3 4
//解析:
...arr就是以逗号分隔的参数序列:1,2,3,4; 然后外层有中括号,所以newArr就是[1,2,3,4]

let [...tail] = [1, 2, 3, 4];
console.log(tail); //log: [1,2,3,4]


- 数组的合并
const arr = [1,2,3,4];
const arr2 = [4,5,6,7,8];
const newArr = [...arr, ...arr2];
console.log(newArr);//log结果: [1, 2, 3, 4, 4, 5, 6, 7, 8]



???错了
- 数组合并转换成对象4 没有这种用法,数值是不固定,是错误的.
const arr = [];//没有值
const arr2 = [5,6,7,8];
const arr3 = [9,10,11];
const newArr = {...arr, ...arr2, ...arr3};
console.log(newArr);//log结果: Object { 0: 9, 1: 10, 2: 11, 3: 8 }
```



#### 对象使用扩展运算符

```js
- 对象没有迭代结构,所以直接使用扩展运算符会报错.但可以使用大括号,浅克隆.但函数方法会丢失
let obj={a:1, b:2, c:3};
console.log(...obj);//报错 对象原型上没有迭代器
console.log({...obj});//正常输出

- 对象的合并(相同属性,前面的值会被后面相同属性的值覆盖)
const obj1 = {a:'aa'};
const obj2 = {b:'bb'};
const obj3 = {c:'cc'};
const obj4 = {d:'dd', c:'ll'};
const allobj={...obj1, ...obj2, ...obj3, ...obj4};
console.log(allobj);
//打印结果:
{a: "aa", b: "bb", c: "ll", d: "dd"}


- 对象的展开//注意参数外的大括号; 对象展开之后的对象和原对象不是一个对象,两者比较返回false
const obj={a:'aa', b:'bb', c:'cc'};
const newObj = {...obj};
console.log(newObj); //log结果: {a: "aa", b: "bb", c: "cc"}
console.log(obj===newObj);//false


- 对象合并转数组
const obj1 = {a:'aa'};
const obj2 = {b:'bb'};
const obj3 = {c:'cc'};
const obj4 = {d:'dd', c:'ll'};
const allobj=[...obj1, ...obj2, ...obj3, ...obj4];
console.log(allobj);//log结果: Uncaught TypeError: obj1 is not iterable  对象是不可以迭代的

var obj = {'key1': 'value1'};
var array = [...obj]; // TypeError: obj is not iterable

```



#### 字符串使用扩展运算符

```js
[...'hello'] //["h", "e", "l", "l", "o"]
```





### spread扩展运算符应用

```js
//1.数组的合并
const arr1 = ['a1', 'a2'];
const arr2 = ['b1', 'b2'];
const newArr = [...arr1, ...arr2];
console.log(newArr);
//打印结果:
["a1", "a2", "b1", "b2"]



//2.数组的克隆 是两个不同的数组,并非拷贝模式.数字是基本数据类型,不可变.对象是引用类型,需要引用地址.
const arrOld = ['a', 'b', 'c'];
const arrNew = [...arrOld];
console.log(arrNew);//log结果: Array(3) [ "a", "b", "c" ]
console.log(arrOld === arrNew);//false

arrNew[0]='d';
console.log(arrOld);//Array(3) [ "a", "b", "c" ]
console.log(arrNew);//Array(3) [ "d", "b", "c" ]




//3.伪数组转真数组
function fn(){
    return arguments;
}
var args = fn(1,2,3);
console.log(args, [...args]);
//打印结果
//[1, 3, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//[1, 3, 3]
```





## Symbol

### 1.简介

> ES6引入新的原始数据类型, 表示独一无二的值
>
> 每个从`Symbol()`返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的.
>
> symbol值不能跟任何值进行计算. 
>
> 使用for..in或者for...of循环遍历的时候,遍历不到symbol属性.  可以使用Object.getOwnpropertySymbols()获取对象的symbol属性,使用 **Reflect.ownKeys**(对象)来遍历获取对象所有的属性.

```js
const s1 = Symbol();
console.log(s1); //Symbol()
console.log(typeof s1); //symbol

const s2 = Symbol('aa');
console.log(s2); //Symbol(aa)
console.log(typeof s2); //symbol

//每个返回的symbol值都是唯一的,所以相同值的symbol比较运算,返回false.
Symbol('aa') === Symbol('aa') //false
```



#### 1.1 特点

**1. Symbol 值通过 Symbol 函数生成，使用 typeof，结果为 "symbol"**

```javascript
let s = Symbol();
console.log(typeof s); //'symbol'
```

**2. Symbol 函数前不能使用 new 命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。**

**3. instanceof 的结果为 false**

```javascript
let s = Symbol('foo');
console.log(s instanceof Symbol); //false
```

**4. Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。**

```javascript
let s1 = Symbol('foo');
console.log(s1); //Symbol(foo)
```

**5. 如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串，然后才生成一个 Symbol 值。**

```javascript
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
console.log(sym); // Symbol(abc)
```

**6. Symbol 函数的参数只是表示对当前 Symbol 值的描述，相同参数的 Symbol 函数的返回值是不相等的。**

```javascript
// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();

console.log(s1 === s2); // false

// 有参数的情况
var s1 = Symbol('foo');
var s2 = Symbol('foo');

console.log(s1 === s2); // false
```

**7. Symbol 值不能与其他类型的值进行运算，会报错。**

```javascript
var sym = Symbol('My symbol');

console.log("your symbol is " + sym); // TypeError: can't convert symbol to string
```

**8. Symbol 值可以显式转为字符串。**

```javascript
var sym = Symbol('My symbol');

console.log(String(sym)); // 'Symbol(My symbol)'
console.log(sym.toString()); // 'Symbol(My symbol)'
```

**9. Symbol 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性。**

```javascript
let mySymbol = Symbol();

//第一种写法
let a = {};
a[mySymbol] = 'Hello';

//第二种写法
let a = {
  [mySymbol]: 'Hello'
};

//第三种写法
let a = {};
Object.defineProperty(a, mySymbol, {value: 'Hello'})

// 以上写法都得到同样结果
console.log(a[mySymbol]); // "Hello!"
```

**10. Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名。**

```javascript
var obj = {};
var a = Symbol('a');
var b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols);
// [Symbol(a), Symbol(b)]
```

**11. 如果我们希望使用同一个 Symbol 值，可以使用 Symbol.for。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。**

```javascript
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

console.log(s1 === s2); // true
```

**12. Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。**

```javascript
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"

var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2) ); // undefined
```





### 2. 创建Symbol

> 所有原始值,除了Symbol依赖都有各自的字面形式(字符串,数字,布尔值,null,undefined).
>
> Symbol唯一且合理的使用方式, 是为对象添加[属性].
>
> 调用Symbol()函数时,也可以传入一个字符串参数作为对符号的描述,将来可以通过这个字符串来调试代码.但这个字符串参数与符号定义或标识符无关.



#### 0. 创建Symbol

可以通过全局的Symbol函数创建一个Symbol. 

```javascript
//创建了一个名为firstName的Symbol，用它将一个新的属性赋值给person对象
let firstName = Symbol(),
    person = {};

person[firstName] = 'Nicholas';
console.log(person[firstName]); //'Nicholas'
```

**注意**

>  由于Symbol是原始值，因此调用new Symbol()会导致程序抛出错误。也可以执行new Object（你的Symbol）创建一个Symbol的实例，但目前尚不清楚这个功能何时可以使用。



#### 1. Symbol函数

**Symbol函数接受<span style="color:blue;">一个可选参数</span>**，其可以让你添加一段文本描述即将创建的Symbol，这段描述不可用于属性访问，但是建议你在每次创建Symbol时都添加这样一段描述，以便于阅读代码和调试Symbol程序

```javascript
let firstName = Symbol('first name'),
    person = {};

person[firstName] = 'Nicholas';

console.log('first name' in person); //false
console.log(person[firstName]); //'Nicholas'
console.log(firstName); //'Symbol("first name")'
```

**[[Description]]**

Symbol的描述被存储在内部的[[Description]]属性中，只有当调用Symbol的toString()方法时才可以读取这个属性。在执行console.log()时隐式调用了firstName的toString()方法，所以它的描述会被打印到日志中，但<u>不能直接在代码里访问[[Description]].</u>

```javascript
let firstName = Symbol('first name'),
    result = firstName.toString();

console.log(result); //'Symbol(first name)'
```



**Symbole的辨识方法**

Symbol是原始值，且ECMAScript 6同时扩展了typeof操作符，支持返回"symbol"，所以可以用typeof来检测变量是否为Symbol类型。

通过其他间接方式也可以检测变量是否为Symbol类型，但是typeof操作符是最准确也是你最应首选的检测方式。

```javascript
let symbol = Symbol('test symbol');
console.log(teypof symbol); //'symbol'
```



### 3. Symbol的使用场景

使用场景包括: 

* 所有使用可计算属性名的地方
* Object.defineProperty()
* Object.defineProperties()

```javascript
let firstName = Symbol('first name');
//使用一个可计算对象字面量属性
let person = {
  [firstName]: 'Nicholas'
};

//将属性设置为只读
Object.defineProperty(person, firstName, {writable: false});

let lastName = Symbol('last name');
Object.defineProperty(person, {
  [lastName]: {
    value: 'Zakas',
    writable: false
  }
});

console.log(person[firstName]); //'Nicholas'
console.log(person[lastName]); //'Zakas'
```

尽管在所有使用可计算属性名的地方，都可以使用Symbol来代替，但是为了在不同代码片段间有效地共享这些Symbol，需要建立一个体系。



### 4. Symbol共享体系

#### 0. 背景

希望在不同的代码中共享同一个Symbol，例如，在你的应用中有两种不同的对象类型，但是你希望它们使用同一个Symbol属性来表示一个独特的标识符。一般而言，在很大的代码库中或跨文件追踪Symbol非常困难而且容易出错，出于这些原因，ECMAScript 6提供了一个可以随时访问的**全局Symbol注册表**。



#### 1. Symbol.for()

如果想创建一个可共享的Symbol，要使用Symbol.for()方法。它只接受一个参数，也就是即将创建的Symbol的字符串标识符，这个参数同样也被用作Symbol的描述

```javascript
let uid = Symbol('uid'),
    obj = {};

obj[uid] = '12345';

console.log(obj[uid]); //'12345'
console.log(uid); //'Symbol(uid)'
```

Symbol.for()方法首先在全局Symbol注册表中搜索键为"uid"的Symbol是否存在，如果存在，直接返回已有的Symbol；否则，创建一个新的Symbol，并使用这个键在Symbol全局注册表中注册，随即返回新创建的Symbol。

后续如果再传入同样的键调用Symbol.for()会返回相同的Symbol

```javascript
let uid = Symbol.for('uid'),
    obj = {
      [uid]: '12345'
    };

console.log(obj[uid]); //'12345'
console.log(uid); //'Symbol(uid)'

let uid2 = Symbol.for('uid');

console.log(uid === uid2); //true
console.log(obj[uid2]); //'12345'
console.log(uid); //'Symbol(uid)'
```



#### 2. Symbole.keyFor()

可以使用Symbol.keyFor()方法在Symbol全局注册表中检索与Symbol有关的键

```javascript
let uid = Symbol.for('uid');
console.log(Symbol.keyFor(uid)); //'uid'

let uid2 = Symbol.for('uid');
console.log(Symbole.keyFor(uid2)); //'uid'

let uid3 = Symbol('uid');
console.log(Symbol.keyFor(uid3)); //undefined
```

Symbol全局注册表是一个类似全局作用域的共享环境，也就是说你不能假设目前环境中存在哪些键。当使用第三方组件时，尽量使用Symbol键的命名空间以减少命名冲突。举个例子，jQuery的代码可以为所有键添加"jquery"前缀，就像"jquery.element"或其他类似的键。



### 4. Symbol与类型强制转换

自动转型是JavaScript中的一个重要语言特性，利用这个特性能够在特定场景下将某个数据强制转换为其他类型。然而，<u>其他类型没有与Symbol逻辑等价的值</u>，因而Symbol使用起来不是很灵活，<u>尤其是不能将Symbol强制转换为字符串和数字类型</u>，否则如果不小心将其作为对象属性，最终会导致不一样的执行结果。

**与字符串类型**

使用console.log()方法来输出Symbol的内容，它会调用Symbol的String()方法并输出有用的信息。也可以像这样直接调用String()方法来获得相同的内容

```javascript
let uid = Symbol.for('uid'),
    desc = String(uid);

console.log(desc); //'Symbol(uid)'
```

String()函数调用了uid.toString()方法，返回字符串类型的Symbol描述里的内容。但是，如果你尝试将Symbol与一个字符串拼接，会导致程序抛出错误：

```javascript
let uid = Symbol.for('uid'),
    desc = uid + ''; //报错
```

将uid与空字符串拼接，首先要将uid强制转换为一个字符串，而Symbol不可以被转换为字符串，故程序直接抛出错误。

**与数字类型**

将Symbol与每一个数学运算符混合使用都会导致程序抛出错误

```javascript
let uid = Symbol.for('uid'),
    sum = uid / 1; //报错
```

这个示例尝试将Symbol除1，程序直接抛出错误。而且无论使用哪一个数学操作符，都无法正常运行

**与逻辑操作符**

Symbol与JavaScript中的非空值类似，其等价布尔值为true

### 6. Symbol属性检索

Object.keys()方法和Object.getOwnPropertyNames()方法可以检索对象中所有的属性名：前一个方法返回所有可枚举的属性名；后一个方法不考虑属性的可枚举性一律返回。然而为了保持ECMAScript 5函数的原有功能，这两个方法都不支持Symbol属性，而是在ECMAScript 6中添加一个**Object.getOwnPropertySymbols()**方法来检索对象中的Symbol属性。

**Object.getOwnPropertySymbols()**

Object.getOwnPropertySymbols()方法的返回值是一个包含所有Symbol自有属性的数组

```javascript
let uid = Symbol.for('uid');
let obj = {
  [uid]: '12345'
};

let symbols = Object.getOwnPropertySymbols(obj);

console.log(symbols.length); //1
console.log(symbols[0]); //'Symbol(uid)'
```



**继承**

所有对象一开始都没有自己独有的属性，但是对象可以从原型链中继承Symbol属性。ECMAScript 6通过一些well-known Symbol预定义了这些属性。



```js
//要求: 向对象中添加方法up
//使用symbol为对象obj属性的两种方式: 
//		对象块作用域外: obj[属性名称];  
//		对象块作用域内: obj{[s]:值}

let game = {
    name: 'name1'
};

//添加方式0
//弊端: 无法判断对象里是否有重名的属性或方法
 game.up = function(){
     console.log('向上');
 }

//添加方式1 函数体外

let methodUp = Symbol('up');
game[methodUp] = function(){
    console.log('向上');
};

game[methodUp]();//调用方法

书写规范: 
game.methodUp的结果是game对象中有methodUp方法  不采纳
game[methodUp], 将methodUp变量对应的值作为对象的属性名,添加到对象中

//添加方式2  函数体内
let methodDown = Symbol('down');
let game = {
    name: 'name1',
    [methodDown]:function(){
        console.log('向下');
    }
}
game[methodDown]();


```



### 7. Symbol属性 ??





### 8. 其他

#### 1. Symbol内置属性

> 扩展对象内置的功能, 不需要手动调用, 某些场景下会被动执行. 

```js
//声明一个对象
let obj = {
    name: 'yourname',
    [Symbol.replace]: function(){//注意写法,obj中Symbol.replace方法
        console.log('replace方法');
        return '对象方法执行了';
    }
}

//声明一个字符串
let str = 'hello Symbol';
//通过replace方法使用obj对象
let result = str.replace(obj, 'abc'); //这里的replace方法返回结果就是obj对象里的replace方法调用结果

console.log(result);

//打印结果
replace方法
对象方法执行了
```



#### 2. symbol为什么没有包装类型

```js
https://www.zhihu.com/question/316717095/answer/628772556
```



> 除了`null`和`undefined`，JS 里的原始类型都有对应的包装对象类型。为什么要有包装对象？是为了能用`.`语法来读取属性、调用方法（对象才能有属性和方法），比如 `"foo".length`、`(1).toFixed(2)`等代码中，都隐式的用到了包装对象。`null`和`undefined`不需要属性和方法，所以不需要包装对象。
>
> symbol 也需要读取属性和方法，所以也需要有包装对象，但一样也不推荐直接使用包装对象。ES6 是个新的开始，可以做一些大胆的改革，所以`new Symbol()` 被故意设计为抛异常，而不是墨守成规返回包装对象。但仍然能用 `Object()`把 symbol 转换为包装对象，有一个原因是因为已经有代码用 `Object(value) === value` 来判断一个值是不是对象值。
>
> 而且比起写出 `new Number()`、`new String()`、`new Boolean()` 这样的代码，菜鸟们写出 `new Symbol()`的概率更大，因为 symbol 没有字面量，而老的三种原始类型都有，有字面量的话会更容易学会用字面量。
>
> 但其实这个决定是有争议的，因为造成了语言的不统一，凭什么那仨不报错而你要报错？而且即便真把 symbol 的包装对象误作为属性键来使用，其实也能正常使用，因为有自动解包装的逻辑。
>
> ```js
> s = Symbol()
> ({[s]:1})[Object(s)] // 1
> ```
>
> 
>
> 未来的第七种原始类型 `BigInt()`，因为同样的原因，也不能被 `new`





## 迭代器

### 定义

>  迭代器，其实就是一个具有 next() 方法的对象，每次调用 next() 都会返回一个结果对象，该结果对象有两个属性，value 表示当前的值，done 表示遍历是否结束。



**迭代器(Iterator)**是一种接口, 为各种不同的数据结构提供统一的访问机制.==任何数据结构==只要部署iterator接口,就可以完成遍历操作.

1.ES6创造了一种新的遍历命令for...of循环, 

2.原生具备iterator接口的数据(可用for of遍历): Array Arguments Set Map String TypeArray NodeList

==需要自定义遍历数据的时候, 要想到迭代器==

**ES5实现迭代器功能**

```javascript
function createIterator(items) {
  let i=0;
  return {
    next:function() {
      let done = i>= items.length;
      let value = !done ? items[i++] : undefined;
      
      return {
        done: done,
        value: value
      }
    }
  }
}

//iterator是一个迭代器对象
let iterator = createIterator([1,2,3]);

console.log(iterator.next()); // { done: false, value: 1 }
console.log(iterator.next()); // { done: false, value: 2 }
console.log(iterator.next()); // { done: false, value: 3 }
console.log(iterator.next()); // { done: true, value: undefined }
```





### for...of

除了迭代器之外，我们还需要一个可以遍历迭代器对象的方式，ES6 提供了 for of 语句，我们直接用 for of 遍历一下我们上节生成的遍历器对象试试：

```javascript
let iterator = createIterator([1,2,3]);

for(let value of iterator) {
  console.log(value);
}
```

结果报错 `TypeError: iterator is not iterable`，表明我们生成的 iterator 对象并不是 iterable(可遍历的)。

那什么才是可遍历的呢？

其实一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）。

<u>ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性</u>，或者说，一个数据结构只要具有 Symbol.iterator 属性，就可以认为是"可遍历的"（iterable）。

举个例子:

```javascript
const obj = {
    value: 1
};

for (value of obj) {
    console.log(value);
}

// TypeError: iterator is not iterable
```

我们直接 for of 遍历一个对象，会报错，然而如果我们给该对象添加 Symbol.iterator 属性：

```javascript
const obj = {
  value: 1
};

obj[Symbol.iterator] = function() {
  return createIterator([1,2,3]);
}

for (value of obj) {
  console.log(value);
}
// 1
// 2
// 3
```

我们也可以发现 for of 遍历的其实是对象的 Symbol.iterator 属性。



#### 默认可遍历对象

 ES6 默认部署了 Symbol.iterator 属性，当然我们也可以手动修改这个属性：

```javascript
var colors = ["red", "green", "blue"];

colors[Symbol.iterator] = function() {
    return createIterator([1, 2, 3]);
};

for (let color of colors) {
    console.log(color);
}

// 1
// 2
// 3
```



#### 使用范围

* 数组
* Set
* Map
* 类数组对象(arguments, DOM NodeList对象)
* Generator对象
* 字符串



#### 模拟实现for...of

模拟实现 for of 也比较简单，基本就是通过 Symbol.iterator 属性获取迭代器对象，然后使用 while 遍历一下：

```javascript
function forOf(obj, cb) {
  let iterable, result;
  if (typeof obj[Symbol.iterator] !== 'function') {
    throw new TypeError(obj + 'is not iterator')
  }
  if (typeof cb !== 'function') {
    throw new TypeError('cb must be callable')
  }
  iterable = obj[Symbol.iterator]();
  result = iterable.next();
  while(!result.done) {
    cb(result.value);
    result = iterable.next();
  }
}
```



### 内建迭代器

ES6 为数组、Map、Set 集合内建了以下三种迭代器：

1.entries()返回一个遍历器对象,用来遍历[键名,键值]组成的数组.对于数组,键名就是索引.

2.keys() 返回一个遍历器对象,用来遍历所有的键名.

3.values()返回一个遍历器对象,用来遍历所有的键值.





### 关闭迭代器

对于`for...of`的循环，可以由`break`, `throw continue `  或`return`终止。在这些情况下，迭代器关闭。





### 迭代器工作原理

```js
1.创建一个指针对象, 指向当前数据结构的起始位置
2.第一次调用对象的next方法,指针自动指向数据结构的第一个成员
3.接下来不断调用next方法,指针一直往后移动,直到指向最后一个成员 //会多循环一次
4.每调用next方法返回一个包含value和done属性的对象  //最后一次
```







#### 数组迭代器

```js
- 数组可以实现遍历的原因: 内部实现了迭代器iterator接口,内部有迭代器方法Symbol.iterator方法(在原型上的方法,通过浏览器可以查看到其原型上具有这个方法)
- [Symbol.iterator]()返回值类型是一个对象

const arr = ['唐僧', '孙悟空', '猪八戒', '沙僧'];
const iterator = arr[Symbol.iterator]();//在原型上有Symbol.iterator方法
console.log(iterator);//输出结果: 指针对象 Array Iterator{}

iterator.next();//log {value: '唐僧', done: false} //false表示迭代还没有结束
iterator.next();//log {value: '孙悟空', done: false}
iterator.next();//log {value: '猪八戒', done: false}
iterator.next();//log {value: '沙僧', done: false}
iterator.next();//log {value: undefined, done: true}

```



#### 迭代器自定义遍历对象

```js
- 配合浏览器报错完善函数功能
- 循环遍历的是对象里的members数组.

const team = {
    name: 'exampleName',
    members: ['a', 'b', 'c', 'd'],
    //添加迭代器方法,实现for..of功能
    [Symbol.iterator]: function(){
        //声明索引变量
        let index = 0;
        return{//TypeError:Result of Symbol.iterator method is not an object at... 
        	   //TypeError: undefined is not a function at ... //对象里需要next方法
        	next:()=>{
    			//TypeError: Iterator result undefined is not an object at ... 所以需要在next方法种也返回一个对象,对象的内容根据打印的结果来
    			//到这一步,刷新页面后,页面会一直返回undefined. 因为没有结束
    			//为了实现value遍历目标值, 需要声明一个索引/指针变量
    			//return{value:xxx, done:false};
                let result ={value: this.member[index]}
                //处理done
                if(index<this.member.length){
                    result.done = false;
                }else{
                    result.done = true;
                }
                index++;
                return result;
			}
    	}
    }
}

//this指向team.两种实现方式:箭头函数, this赋值(_this self that等)
const team = {
    name: 'exampleName',
    members: ['a', 'b', 'c', 'd'],
    [Symbol.iterator]:{
        let index = 0;
        return{
        	next:()=>{
    			let result={value:this.members[index]};
    			if(index<this.members.length){
                    result.done=false;
                }else{
                    result.done=true;
                }
    			return result;
				index++;
			}
    	}
    }
}

for(let i of team){
    console.log(i);//log结果: 
}

=======================================
const team2 = {
    name: 'exampleName',
    members: ['a', 'b', 'c', 'd']
}
for(let i of team2['members']){
    console.log(i);//log结果: a b c d
}
```





## Set集合

### 0. 背景

在ECMAScript 6标准制定以前，由于可选的集合类型有限，数组使用的又是数值型索引，因而经常被用于创建队列和栈。如果开发者们需要使用非数值型索引，就会用非数组对象创建所需的数据结构，而这就是Set集合与Map集合的早期实现。

Set集合是一种无重复元素的列表，通常的做法是检测给定的值在某个集合中是否存在。

Map集合内含多组键值对，集合中每个元素分别存放着可访问的键名和它对应的值，Map集合经常被用于缓存频繁取用的数据

Set集合常被用于检查对象中是否存在某个键名，而Map集合常被用于获取已存的信息



### 1. ES5实现set/map

在ECMAScript 5中，开发者们用对象属性来模拟这两种集合:

<u>这里的变量set是一个原型为null的对象，不继承任何属性</u>。在ECMAScript 5中，开发者们经常用类似的方法检查对象的某个属性值是否存在。

```javascript
//ES5模拟set集合

let set = Object.create(null);

set.foo = true;

//检查属性是否存在
if (set.foo) {
  //执行的代码
}
```

模拟这两种集合对象的唯一区别是存储的值不同,set中是布尔值.

```javascript
//ES5模拟map集合

let map = Object.create(null);
map.foo = 'bar';

//获取已存值
let value = map.foo;

console.log(value); //'bar'
```



### 2. ES5方案的缺点

#### 1. 类型转换

**数字转换为字符串**

如果程序很简单，确实可以用对象来模拟Set集合与Map集合，但如果触碰到对象属性的某些限制，那么这个方法就会变得更加复杂。例如，所有对象的属性名必须是字符串类型，必须确保每个键名都是字符串类型且在对象中是唯一的

```javascript
//number类型作为属性会自动类型转换为字符串
let map = Object.create(null);

map[5] = 'foo';

console.log(map['5']); //'foo'
```

对象的某个属性赋值为字符串"foo"，而这个属性的键名是数值型的5，它会被自动转换成字符串，所以<u>map["5"]和map[5]引用的其实是同一个属性。如果你想分别用数字和字符串作为对象属性的键名，则内部的自动转换机制会导致很多问题。当然，用对象作为属性的键名也会遇到类似的问题</u>

**对象转换为字符串**

```javascript
//对象作为属性会自动发生类型转换
let map = Object.create(null),
    key1 = {},
    key2 = {};
map[key1] = 'foo';

console.log(map[key2]); //'foo'
```

<span style="text-decoration: underline double red;">由于对象属性的键名必须是字符串，因而这段代码中的key1和key2将被转换为对象对应的默认字符串"[object Object]"，所以map[key2]和map[key1]引用的是同一个属性。</span>

**属性值为假值时**

对于Map集合来说，如果它的属性值是假值，则在要求使用布尔值的情况下（例如在if语句中）会被自动转换成false。强制转换本身没有问题，但如果考虑这个值的使用场景，就有可能导致错误发生。

如果map.count的值为0或者不存在，if语句中的代码块将不会被执行. <u>在大型软件应用中，一旦发生此类问题将难以定位及调试，从而促使ECMAScript 6在语言中加入Set集合与Map集合这两种新特性。</u>

```javascript
let map = Object.create(null);
map.count = 1;

//本意是检查'count'属性是否存在,实际上检查的是该值是否非零
if (map.count) {
  //执行的代码
}
```

在JavaScript中有一个**in运算符**，其不需要读取对象的值就可以判断属性在对象中是否存在，如果存在就返回true。但是，in运算符也会检索对象的原型，**只有当对象原型为null时使用这个方法才比较稳妥**。



### 3. Set集合

#### 0. 概要

ECMAScript 6中新增的Set类型是一种**有序列表**，其中含有一些**相互独立的非重复值**，通过Set集合可以快速访问其中的数据，更有效地追踪各种离散值。

ES6 新的数据结构 Set（集合）,它类似于数组，但**成员的值都是唯一的**，集合实现了iterator接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，  集合是键值对形式,但是键值是一样的.



#### 1. 创建Set集合

初始化的2种方式:

**1.new Set()**

调用**new Set()**创建Set集合,调用**add()方法**向集合中添加元素，访问集合的**size属性**可以获取集合中目前的元素数量。

```javascript
let set = new Set();
set.add(5);
set.add('5');

console.log(set.size); //2

//Set(2) {5, '5'}
```



##### 2. 使用数组

```javascript
new Set([1,2,3,4])
```





#### 2. 参数

<span style="text-decoration:underline double red">Set构造函数可以接受所有可迭代对象作为参数，数组、Set集合、Map集合都是可迭代的</span>，因而都可以作为Set构造函数的参数使用；构造函数通过**迭代器**从参数中提取值。

**在Set集合中，不会对所存值进行强制的类型转换**，数字5和字符串“5”可以作为两个独立元素存在（引擎内部使用第4章介绍的Object.is()方法检测两个值是否一致）。当然，<u>如果向Set集合中添加多个对象，则它们之间彼此保持独立：</u>

```javascript
//Set集合中添加多个空对象

let set = new Set(),
    key1 = {},
    key2 = {};

set.add(key1);
set.add(key2);

console.log(set.size); //2
```

由于key1和key2不会被转换成字符串，因而它们在Set集合中是两个独立的元素；如果被转换，则二者的值都是"[object Object]"。



### 4. 方法

#### 0. add()

**如果多次调用add()方法并传入相同的值作为参数，那么后续的调用实际上会被忽略**：

```javascript
let set = new Set();
set.add(5);
set.add('5');
set.add(5); //重复- 本地调用直接被忽略

console.log(set.size); //2
```

#### 1. size

访问集合的**size属性**可以获取集合中目前的元素数量

```javascript
let set = new Set(4);
//VM23977:1 Uncaught TypeError: number 4 is not iterable (cannot read property Symbol(Symbol.iterator))

let set = new Set([4]);
console.log(set.size); //1
```

#### 2. has()

通过has()方法可以检测Set集合中是否存在某个值,返回值为布尔值

```javascript
let set = new Set();
set.add(5);
set.add('5');

console.log(set.has(5)); //true
console.log(set.has(6)); //false
```

#### 3. delete()/clear()

调用delete()方法可以移除Set集合中的某一个元素，调用clear()方法会移除集合中的所有元素

```javascript
let set = new Set();
set.add(5);
set.add('5');

console.log(set.has(5)); //true

set.delete(5);

console.log(set.has(5)); //false
console.log(set.size); //1

set.clear();

console.log(set.has('5')); //false
console.log(set.size); //0
```

#### 4. forEach()

如果你想在Set集合中添加元素并在每一个元素上执行操作

```javascript
mySet.forEach((value, value, set) => {}, thisArg)
```

forEach()方法的回调函数接收以下3个参数:

* 元素的值
* 元素的值(由于集合对象中没有索引(keys)，所以前两个参数都是`Set`中元素的值(**values**))
* 被遍历的Set集合本身

然而**Set集合没有键名**，ECMAScript 6标准制定委员会本可以规定Set集合的forEach()函数的回调函数只接受两个参数，但这可能导致几个方法之间分歧过大，于是他们最终决定所有函数都接受3个参数：**Set集合中的每个元素也按照键名和值的形式储存**，从而才能保证在所有forEach()方法的回调函数中前两个参数值具有相同含义。

在Set集合的forEach()方法中，第二个参数也与数组的一样，如果需要在回调函数中使用this引用，则可以将它作为第二个参数传入forEach()函数



#### 5. Set集合转数组

尽管Set集合更适合用来跟踪多个值，而且又可以通过forEach()方法操作集合中的每一个元素，但是你<u>不能像访问数组元素那样直接通过索引访问集合中的元素</u>。如有需要，最好先将Set集合转换成一个数组。

```javascript
let set = new Set([1,2,3,4,5,5,5,]),
    array = [...set];

console.log(array); //[1,2,3,4,5]
```



可以用数组来初始化Set集合，Set构造函数同样会过滤掉重复的值从而保证集合中的元素各自唯一。

```javascript
let set = new Set([1,2,3,4,5,5,5,5,5,5]);
console.log(set.size); //5
```

自动去重的功能对于将已有代码或JSON结构转换为Set集合执行得非常好。



### 4.2 方法2

#### 1. Symbol.prototype.valueOf()

**Define**

`**valueOf()**` 方法返回当前 symbol 对象所包含的 symbol 原始值

**Syntax**

```javascript
symbol.valueOf()
```

**Description**

在 JavaScript 中，虽然大多数类型的对象在某些操作下都会自动的隐式调用自身的 `valueOf()` 方法或者 `toString()` 方法来将自己转换成一个原始值，但 symbol 对象不会这么干，symbol 对象无法隐式转换成对应的原始值：

```javascript
Object(Symbol("foo")) + "bar";
// TypeError: can't convert symbol object to primitive
// 无法隐式的调用 valueOf() 方法

Object(Symbol("foo")).valueOf() + "bar";
// TypeError:  can't convert symbol to string
// 手动调用 valueOf() 方法，虽然转换成了原始值，但 symbol 原始值不能转换为字符串

Object(Symbol("foo")).toString() + "bar";
// "Symbol(foo)bar"，需要手动调用 toString() 方法才行
```





### 5. Weak Set集合

#### 0. 概要

将对象存储在Set的实例与存储在变量中完全一样，只要Set实例中的引用存在，垃圾回收机制就不能释放该对象的内存空间，于是之前提到的Set类型可以被看作是一个**强引用的Set集合**.

```javascript
let set = new Set(),
    key = {};

set.add(key);
console.log(set.size); //1

//移除原始引用
key = null;

console.log(set.size); //1

//重新取回原始引用
key = [...set][0]
```

将变量key设置为null时便清除了对初始对象的引用，但是Set集合却保留了这个引用，你仍然可以使用展开运算符将Set集合转换成数组格式并从数组的首个元素取出该引用。但有时候你会希望当其他所有引用都不再存在时，让Set集合中的这些引用随之消失。举个例子，如果你在Web页面中通过JavaScript代码记录了一些DOM元素，这些元素有可能被另一段脚本移除，而你又不希望自己的代码保留这些DOM元素的最后一个引用。（这个情景被称作内存泄露。）

ECMAScript 6中引入了另外一个类型：Weak Set集合（弱引用Set集合）,<span style="text-decoration:underline wavy blue">Weak Set集合只存储对象的弱引用，并且不可以存储原始值；集合中的弱引用如果是对象唯一的引用，则会被回收并释放相应内存</span>。

#### 1. 创建Weak Set集合

用WeakSet构造函数可以创建Weak Set集合，集合支持3个方法：add()、has()和delete()。

```javascript
let set = new WeakSet(),
    key = {};

set.add(key);

console.log(set.has(key)); //true

set.delete(key);

console.log(set.has(key)); //false
```

可以调用WeakSet构造函数并传入一个可迭代对象来创建Weak Set集合

```javascript
let key1 = [],
    key2 = [],
    set = new WeakSet([key1, key2]);

console.log(set.has(key1)); //true
console.log(set.has(key2)); //false
```



### 6. 强引用和弱引用Set的区别

**0. 两种Set类型之间最大的区别是Weak Set保存的是对象值的弱引用**

```javascript
let set = new WeakSet(),
    key = {};

//向set集合中添加对象
set.add(key);

console.log(set.has(key)); //true

//移除对象key的最后一个强引用(Weak Set中的引用也自动移除)
key = null;

console.log(set.has(key)); //false  在浏览器中可以打印出flase. 如果使用add添加原始类型就会报错

```

这段代码执行过后，就无法访问Weak Set中key的引用了。由于我们需要向has()方法传递一个强引用才能验证这个弱引用是否已被移除，因此测试有点儿难以进行下去，但是请你相信，JavaScript引擎一定会正确地移除最后一个弱引用。????

**1. 在WeakSet的实例中，如果向add()、has()和delete()这3个方法传入非对象参数都会导致程序报错**

浏览器环境中add(), delete()会正常报错,has()不会

```javascript
new WeakSet().has('a'); //测试,在浏览器环境中不会报错
```

**2.Weak Set集合不可迭代，所以不能被用于for-of循环**

```javascript

```

**3.Weak Set集合不暴露任何迭代器（例如keys()和values()方法），所以无法通过程序本身来检测其中的内容。**????

```javascript
```

4.Weak Set集合不支持forEach()方法

5.Weak Set集合不支持size属性





### 7. Set集合案例

如果你只需要跟踪对象引用，你更应该使用Weak Set集合而不是普通的Set集合。Set类型可以用来处理列表中的值，但是不适用于处理键值对这样的信息结构。ECMAScript 6也添加了Map集合来解决类似的问题。

#### 0. 数组去重

```javascript
const arr = ['大事儿','小事儿','好事儿','坏事儿','小事儿'];
const arr2 = [...new Set(arr)];

//封装函数
function eliminateDuplicates(items) {
  return [...new Set(items)];
}
```

#### 1. 数组交集

```javascript
//集合论中，设A，B是两个集合，由所有属于集合A且属于集合B的元素所组成的集合，叫做集合A与集合B的交集
let arr = [1,2,3,4,1,2],
		arr2 = [3,4,5,6,4,3];

let result = [...new Set(arr)].filter(item => [...new Set(arr2)].some(item2 => item2 === item));

let result = arr.filter(item => arr2.includes(item));
```



#### 2. 数组合集

```javascript
//给定两个集合A，B，把他们所有的元素合并在一起组成的集合，叫做集合A与集合B的并集
let arr = [1,2,3,4,1,2],
    arr2 = [3,4,5,6,4,3];

let result = [...new Set([...arr, ...arr2])];
```



#### 3. 数组差集

```javascript
//对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合
let arr = [1,2,3,4,1,2],
    arr2 = [3,4,5,6,4,3];

let result = [...new Set(arr)].filter(item => ![...new Set(arr2)].includes(item));
let result = [...new Set(arr)].filter(item => !(new Set(arr2)).has(item));
```



### 8.实现Set方法

```javascript
//https://juejin.cn/post/7033275515880341512#:~:text=%F0%9F%9B%AB%20ES6%E7%AF%87-,%E5%AE%9E%E7%8E%B0set,-class%20Set%20%7B%0A%20%20constructor

class Set {
  constructor() {
    this.items = {};
    this.size = 0;
  }
  has(ele) {
    return ele in this.items;
  }
  
  add(ele) {
    if (!this.has(ele)) {
      this.items[ele] = ele;
      this.size++;
    }
    return this;
  }
  delete(ele) {
    if (this.has(ele)) {
      delete this.items[ele];
      this.size--;
    }
    return this;
  }
  
  clear() {
    this.items = [];
    this.size = 0;
  }
  
  values() {
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }
    return values;
  }
}
```







## Map集合

### 0. 背景

ECMAScript 6中的Map类型是一种储存着许多**键值对的有序列表**，其中的键名和对应的值支持所有的数据类型。<u>键名的等价性判断是通过调用Object.is()方法实现的</u>，所以数字5与字符串“5”会被判定为两种类型，可以分别作为独立的两个键出现在程序中，这一点与对象中不太一样，因为对象的属性名总会被强制转换成字符串类型。

它类似于==对象和集合==，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map也实现了iterator接口，所以可以使用『扩展运算符』和『for…of…』进行遍历



### 1. Map集合

#### 0. 声明

```javascript
new Map(); //创建映射
```

在对象中，无法用对象作为对象属性的键名；但是在Map集合中，却可以这样做

```javascript
let map = new Map(),
    key1 = {},
    key2 = {};

map.set(key1, 5);
map.set(key2, 42);

console.log(map.get(key1)); //5
console.log(map.get(key2)); //42
```

在这段代码中，分别用对象key1和key2作为两个键名在Map集合里存储了不同的值。这些键名不会被强制转换成其他形式，所以这两个对象在集合中是独立存在的，也就是说，<u>以后你不再需要修改对象本身就可以为其添加一些附加信息</u>。

#### 1. 初始化方法

可以向Map构造函数传入**数组**来初始化一个Map集合，这一点同样与Set集合相似。数组中的每个元素都是一个子数组，子数组中包含一个键值对的键名与值两个元素

```javascript
let map = new Map([['name', 'Nicholas'], ['age', 25]]);

console.log(map.has('name')); //true
console.log(map.get('name')); //'Nicholas'
console.log(map.has('age')); //true
console.log(map.get('age')); //25
console.log(map.size); //2
```

数组包裹数组的模式看起来可能有点儿奇怪，但由于Map集合可以接受任意数据类型的键名，<u>为了确保它们在被存储到Map集合中之前不会被强制转换为其他数据类型，因而只能将它们放在数组中，因为这是唯一一种可以准确地呈现键名类型的方式</u>。!!!!????



### 2. 方法与属性

#### 0. set()

如果要向Map集合中添加新的元素，可以调用set()方法并分别传入键名和对应值作为两个参数

```javascript
let map = new Map();
map.set('title', 'Understanding ECMAScript 6');
map.set('year', 2016);

```



#### 1. get()

调用get()方法可以获得两个键名对应的值。如果调用get()方法时传入的键名在Map集合中不存在，则会返回undefined。

```javascript
let map = new Map();
map.set('title', 'Understanding ECMAScript 6');
map.set('year', 2016);

console.log(map.get('title')); //Understanding ECMAScript 6
console.log(map.get('year')); //2016
```



#### 2. has(key)

检测指定的键名在Map集合中是否已经存在

#### 3. delete(key)

从Map集合中移除指定键名及其对应的值

#### 4. clear()

移除Map集合中的所有键值对.clear()方法可以快速清除Map集合中的数据，同样，Map集合也支持批量添加数据????

#### 5. size

代表当前集合中包含的键值对数量

#### 6. forEach()

Map集合的forEach()方法与Set集合和数组中的forEach()方法类似，回调函数都接受3个参数

* Map集合中下一次索引的位置(值)
* 值对应的键名(键)
* Map集合本身

```javascript
let map = new Map([['name', 'Nicholas'], ['age', 25]]);

map.forEach((value, key, ownermap) => {
  console.log(key + ' ' + value);
  console.log(ownermap === map);
});

//name Nicholas
//true
//age 25
//true
```

可以指定forEach()函数的第二个参数作为回调函数的this值。

### 3. Weak Map集合

#### 0. 概要

Weak Map是弱引用Map集合，也用于存储对象的弱引用。**Weak Map集合中的键名必须是一个对象，如果使用非对象键名会报错**；集合中保存的是这些对象的弱引用，如果在弱引用之外不存在其他的强引用，引擎的垃圾回收机制会自动回收这个对象，同时也会移除Weak Map集合中的键值对。但是只有集合的键名遵从这个规则，键名对应的值如果是一个对象，则保存的是对象的强引用，不会触发垃圾回收机制。

**Weak Map集合最大的用途是保存Web页面中的DOM元素**，例如，一些为Web页面打造的JavaScript库，会通过自定义的对象保存每一个引用的DOM元素。

使用这种方法最困难的是，一旦从Web页面中移除保存过的DOM元素，如何通过库本身将这些对象从集合中清除；否则，可能由于库过于庞大而导致内存泄露，最终程序不再正常执行。如果用WeakMap集合来跟踪DOM元素，这些库仍然可以通过自定义的对象整合每一个DOM元素，而且当DOM元素消失时，可以自动销毁集合中的相关对象。

#### 1. 创建

Weak Map类型是一种存储着许多键值对的无序列表，列表的**键名必须是非null类型的对象，键名对应的值则可以是任意类型**。Weak Map的接口与Map非常相似，通过**set()方法添加数据，通过get()方法获取数据**

```javascript
let map = new Weak Map(),
  	element = document.querySelector('.element');

map.set(element, 'Original');

//移除element元素
element.parentNode.removeChild(element);
element = null;

//此时Weak Map集合为空
```

与Weak Set集合相似的是，Weak Map集合也不支持size属性，从而无法验证集合是否为空；同样，由于没有键对应的引用，因而无法通过get()方法获取到相应的值，Weak Map集合自动切断了访问这个值的途径，当垃圾回收程序运行时，被这个值占用的内存将会被释放。

#### 2. Weak Map集合初始化

Weak Map集合的初始化过程与Map集合类似，调用WeakMap构造函数并传入一个数组容器，容器内包含其他数组，每一个数组由两个元素构成：第一个元素是一个键名，传入的值必须是非null的对象；第二个元素是这个键对应的值（可以是任意类型）

```javascript
let key1 = {},
    key2 = {},
    map = new Weak Map([[key1, 'hello'], [key2, '42']]);

console.log(map.has(key1)); //true
console.log(map.get(key1)); //'hello'
console.log(map.has(key2)); //true
console.log(map.get(key2)); //42
```

如果给WeakMap构造函数传入的诸多键值对中含有非对象的键，会导致程序抛出错误。

#### 3. 方法

Weak Map集合只支持两个可以操作键值对的方法：

has()方法可以检测给定的键在集合中是否存在；

delete()方法可以移除指定的键值对。

**Weak Map集合与Weak Set集合一样，二者都不支持键名枚举，从而也不支持clear()方法**

Weak Map集合的键名只支持非null的对象值；调用delete()方法可以从Weak Map集合中移除指定的键值对，此时如果再调用has()方法检查这个键名会返回false，调用get()方法返回undefined。



#### 4. 私有对象数据!!!!????

尽管Weak Map集合会被大多数开发者用于储存DOM元素，但它其实也有许多其他的用途: 其中的一个实际应用是**存储对象实例的私有数据**。在ECMAScript 6中对象的所有属性都是公开的，如果想要储存一些只对对象开放的数据. 怎么做呢.

```javascript
function Person(name) {
  this._name = name;
}

Person.prototype.getName = function() {
  return this._name;
}
```

这段代码中，约定前缀为下划线\_的属性为私有属性，不允许在对象实例外改变这些属性。例如，只能通过getName()方法读取this.\_name属性，不允许改变它的值。然而没有任何标准规定如何写\_name属性，所以它也有可能在无意间被覆写。

在ECMAScript 5中，可以通过以下这种模式创建一个对象接近真正的私有数据：

```javascript
let Person = (function() {
  let privateDate = {},
      privateId = 0;
  
  function Person(name) {
    Object.defineProperty(this, '_id', {value: privateId++});
    privateDate[this._id] = {name: name};
  }
  
  Person.prototype.getName = function() {
    return privateData[this._id].name;
  };
  
  return Person;
})();
```

在上面的示例中，变量Person由一个立即调用函数表达式（IIFE）生成，包括两个私有变量：privateData和privateId。privateData对象储存的是每一个实例的私有信息，privateId则为每个实例生成一个独立ID。当调用Person构造函数时，属性_id的值会被加1，这个属性不可枚举、不可配置并且不可写。

然后，新的条目会被添加到privateData对象中，条目的键名是对象实例的ID；privateData对象中储存了所有实例对应的名称。调用getName()函数，即可通过this.\_id获得当前实例的ID，并以此从privateData对象中提取实例名称。在IIFE外无法访问privateData对象，即使可以访问this.\_id，数据实际上也很安全。

这种方法最大的问题是，如果不主动管理，由于无法获知对象实例何时被销毁，因此privateData中的数据就永远不会消失。而使用Weak Map集合就可以解决这个问题

```javascript
let Person = (function() {
  let privateData = new WeakMap();
  
  function Person(name) {
    privateData.set(this, {name: name});
  }
  
  Person.prototype.getName = function() {
    return privateData.get(this).name;
  };
  
  return Person;
})();
```

#### 5. 使用方式及限制

当你要在Weak Map集合与普通的Map集合之间做出选择时，需要考虑的主要问题是，是否只用对象作为集合的键名。如果是，那么Weak Map集合是最好的选择。当数据再也不可访问后集合中存储的相关引用和数据都会被自动回收，这有效地避免了内存泄露的问题，从而优化了内存的使用。

相对Map集合而言，Weak Map集合对用户的可见度更低，其不支持通过forEach()方法、size属性及clear()方法来管理集合中的元素。如果你非常需要这些特性，那么Map集合是一个更好的选择，只是一定要留意内存的使用情况。

当然，如果你只想使用非对象作为键名，那么普通的Map集合是你唯一的选择。



### 4. 实现Map

```javascript
//https://juejin.cn/post/7033275515880341512#:~:text=%E5%A4%8D%E5%88%B6%E4%BB%A3%E7%A0%81-,%E5%AE%9E%E7%8E%B0%20map,-function%20defaultToString(key
function defaultToString(key) {
  if (key === null) {
    return 'NULL';
  } else if (key === undefined) {
    return 'UNDEFINED';
  } else if (Object.prototype.toString.call(key) === '[object Object]' || Object.prototype.toString.call(key) === '[object Array]') {
    return JSON.stringify(key);
  }
  return key.toString();
}

class Map {
  constructor() {
    this.items = [];
    this.size = 0;
  }
  
  set(key, value) {
    if (!this.has(key)) {
      this.items[defaultToString(key)] = value;
      this.size++;
    }
    return this;
  }
  
  get(key) {
    return this.items[defaultToString(key)];
  }
  
  has(key) {
    return this.items[defaultToString(key)] !== undefined;
  }
  
  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      this.size--;
    }
    return this;
  }
  
  clear() {
    this.items = [];
    this.size = 0;
  }
  
  values() {
    let values = [];
    for (let key in this.items) {
      if (this.has(key)) {
        values.push(key);
      }
    }
    return values;
  }
}
```





## 迭代器(iterator)和生成器(generator)(未完成)????!!!!

### 0. 背景

迭代器的使用可以极大地简化数据操作，于是ECMAScript 6也向JavaScript中添加了这个迭代器特性。**新的数组方法和新的集合类型（例如Set集合与Map集合）都依赖迭代器的实现**，这个新特性对于高效的数据处理而言是不可或缺的，你也会发现在语言的其他特性中也都有迭代器的身影：**新的for-of循环、展开运算符（...），甚至连异步编程都可以使用迭代器**。

### 1. for循环的问题

```javascript
let colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

虽然循环语句的语法简单，但是<u>如果将多个循环嵌套则需要追踪多个变量</u>，代码的复杂度会大大增加，一不小心就错误使用了其他for循环的跟踪变量，从而导致程序出错。<u>迭代器的出现旨在消除这种复杂性并减少循环中的错误。</u>  (要解决循环内部索引跟踪的相关问题，要解决这个问题，需要两个工具：一个是迭代器，另一个是for-of循环。如此一来，便不需要再跟踪整个集合的索引，只需关注集合中要处理的内容。)

### 2. 迭代器

迭代器是一种特殊对象，它具有一些专门为迭代过程设计的专有接口，所有的迭代器对象都有一个next()方法，每次调用都返回一个结果对象。结果对象有两个属性：一个是value，表示下一个将要返回的值；另一个是done，它是一个布尔类型的值，当没有更多可返回数据时返回true。迭代器还会保存一个内部指针，用来指向当前集合中值的位置，每调用一次next()方法，都会返回下一个可用的值。

如果在最后一个值返回后再调用next()方法，那么返回的对象中属性done的值为true，属性value则包含迭代器最终返回的值，这个返回值不是数据集的一部分，它与函数的返回值类似，是函数调用过程中最后一次给调用者传递信息的方法，如果没有相关数据则返回undefined。

用ECMAScript 5的语法创建一个迭代器

```javascript
function createIterator(items) {
  let i = 0;
  return {
    next: function() {
      let done = (i >= items.length),
          value = !done ? item[i++] : undefined;
      
      return {
        done: done,
        value: value
      };
    }
    
  }
}

let iterator = createIterator([1,2,3]);

console.log(iterator.next()); //"{value: 1, done: false}"
console.log(iterator.next()); //"{value: 2, done: false}"
console.log(iterator.next()); //"{value: 3, done: false}"
console.log(iterator.next()); //"{value: undefined, done: true}"

//之后所有的调用都会返回相同内容
console.log(iterator.next()); //"{value: undefined, done: true}"
```

在ECMAScript 6中，迭代器的编写规则也同样复杂，但ECMAScript 6同时还引入了一个生成器对象，它可以让创建迭代器对象的过程变得更简单。

### 3. 生成器

#### 0. 定义

**生成器是一种返回迭代器的函数**，通过function关键字后的星号（*）来表示，函数中会用到新的关键字yield。星号可以紧挨着function关键字，也可以在中间添加一个空格. <u>不能用箭头函数来创建生成器.</u>

```javascript
//生成器
function *createIterator() {
  yield 1;
  yield 2;
  yield 3;
}

//生成器的调用方式与普通函数相同,只不过返回的是一个迭代器
let iterator = createIterator();
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
```

在这个示例中，createIterator()前的星号表明它是一个生成器；<u>yield关键字也是ECMAScript 6的新特性，可以通过它来指定调用迭代器的next()方法时的返回值及返回顺序</u>。生成迭代器后，连续3次调用它的next()方法返回3个不同的值，分别是1、2和3。

生成器的调用过程与其他函数一样，最终返回的是创建好的迭代器。

每当执行完一条yield语句后函数就会自动停止执行。举个例子，在上面这段代码中，执行完语句yield 1之后，函数便不再执行其他任何语句，直到再次调用迭代器的next()方法才会继续执行yield 2语句.

使用yield关键字可以返回任何值或表达式，所以可以通过生成器函数批量地给迭代器添加元素.例如，可以在循环中使用yield关键字：

```javascript
function *createIterator(items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
}

let iterator = createIterator([1,2,3]);
console.log(iterator.next()); //"{value: 1, done: false}"
console.log(iterator.next()); //"{value: 2, done: false}"
console.log(iterator.next()); //"{value: 3, done: false}"
console.log(iterator.next()); //"{value: undefined, done: true}"

//之后所有的调用都会返回相同内容
console.log(iterator.next()); //"{value: undefined, done: true}"
```

给生成器函数createIterator()传入一个items数组，而在函数内部，for循环不断从数组中生成新的元素放入迭代器中，每遇到一个yield语句循环都会停止；每次调用迭代器的next()方法，循环会继续运行并执行下一条yield语句。

生成器函数是ECMAScript 6中的一个重要特性，可以将其用于所有支持函数使用的地方。

#### 1. yield使用限制

yield关键字只可在生成器内部使用，在其他地方使用会导致程序抛出语法错误，即便在生成器内部的函数里使用也是如此

```javascript
function *createIterator(items) {
  items.forEach(function(item) {
    //语法错误
    yield item + 1;
  });
}
```

从字面上看，<u>yield关键字确实在createIterator()函数内部，但是它与return关键字一样，二者都不能穿透函数边界。</u>嵌套函数中的return语句不能用作外部函数的返回语句，而此处嵌套函数中的yield语句会导致程序抛出语法错误。

#### 2. 生成器函数表达式

可以通过函数表达式来创建生成器，只需在function关键字和小括号中间添加一个星号（*）即可

```javascript
let createIterator = function *(items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
};

let iterarot = createIterator([1,2,3]);
console.log(iterator.next()); //"{value: 1, done: false}"
console.log(iterator.next()); //"{value: 2, done: false}"
console.log(iterator.next()); //"{value: 3, done: false}"
console.log(iterator.next()); //"{value: undefined, done: true}"

//之后所有的调用都会返回相同内容
console.log(iterator.next()); //"{value: undefined, done: true}"
```

在这段代码中，createIterator()是一个生成器函数表达式，而不是一个函数声明。由于函数表达式是匿名的，因此星号直接放在function关键字和小括号之间。

#### 3. 生成器对象的方法

由于生成器本身就是函数，因而可以将它们添加到对象中。例如，在ECMAScript 5风格的对象字面量中，可以通过函数表达式来创建生成器

```javascript
let o = {
  createIterator: function *(items) {
    for (let i = 0; i < items.length; i++) {
      yield items[i];
    }
  }
};
let iterator = o.createIterator([1,2,3]);
```

也可以用ECMAScript 6的函数方法的简写方式来创建生成器，只需在函数名前添加一个星号（*）

```javascript
let o = {
  *createIterator(items) {
    for (let i = 0; i < items.length; i++) {
      yield items[i];
    }
  }
};
let iterator = o.createIterator([1,2,3]);
```

尽管可以在星号和方法名之间留白，但我们还是将星号紧贴在方法名之前。



### 4. 可迭代对象和for-of循环 ????!!!!

可迭代对象具有**Symbol.iterator**属性，是一种与迭代器密切相关的对象。Symbol.iterator通过指定的函数可以返回一个作用于附属对象的迭代器。在ECMAScript 6中，所有的集合对象（数组、Set集合及Map集合）和字符串都是可迭代对象，这些对象中都有默认的迭代器。

由于生成器默认会为Symbol.iterator属性赋值，因此所有通过生成器创建的迭代器都是可迭代对象。

#### 1. for-of循环

for-of循环每执行一次都会调用可迭代对象的next()方法，并将迭代器返回的结果对象的value属性存储在一个变量中，循环将持续执行这一过程直到返回对象的done属性的值为true

```javascript
let values = [1,2,3];
for (let num of values) {
  console.log(num);
}
```

这段for-of循环的代码通过调用values数组的Symbol.iterator方法来获取迭代器，这一过程是在JavaScript引擎背后完成的。随后迭代器的next()方法被多次调用，从其返回对象的value属性读取值并存储在变量num中，依次为1、2和3，当结果对象的done属性值为true时循环退出，所以num不会被赋值为undefined。

**使用场景**

如果只需迭代数组或集合中的值，用for-of循环代替for循环是个不错的选择。相比传统的for循环，for-of循环的控制条件更简单，不需要追踪复杂的条件，所以更少出错。

**注意事项**

如果将for-of语句用于**不可迭代对象、null或undefined**将会导致程序抛出错误。



#### 2. 访问默认迭代器

可以通过Symbol.iterator来访问对象默认的迭代器

```javascript
let values = [1,2,3];

let iterator = values[Symbol.iterator]();

console.log(iterator.next()); //'{value: 1, done: false}'
console.log(iterator.next()); //'{value: 2, done: false}'
console.log(iterator.next()); //'{value: 3, done: false}'
console.log(iterator.next()); //'{value: undefined, done: true}'
```

在这段代码中，通过Symbol.iterator获取了数组values的默认迭代器，并用它遍历数组中的元素。在JavaScript引擎中执行for-of循环语句时也会有类似的处理过程。

由于具有Symbol.iterator属性的对象都有默认的迭代器，因此可以用它来检测对象是否为可迭代对象：

```javascript
function isIterable(object) {
  return typeof object[Symbol.iterator] === 'function';
}

console.log(isIterat)
```

这里的isIterable()函数可以检查指定对象中是否存在默认的函数类型迭代器，而for-of循环在执行前也会做相似的检查。



#### 3. 创建可迭代对象

默认情况下，开发者定义的对象都是不可迭代对象，但如果给Symbol.iterator属性添加一个生成器，则可以将其变为可迭代对象

```javascript
let collection = {
  items: [],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  }
};

coollection.items.push(1);
coollection.items.push(2);
coollection.items.push(3);

for (let x of collection) {
  console.log(x);
}
```

在这个示例中，先创建一个生成器（注意，星号仍然在属性名前）并将其赋值给对象的Symbol.iterator属性来创建默认的迭代器；而在生成器中，通过for-of循环迭代this.items并用yield返回每一个值。



### 4. 内建迭代器 !!!!

#### 0. 背景

在ECMAScript 6中，已经默认为许多内建类型提供了内建迭代器，只有当这些内建迭代器无法实现你的目标时才需要自己创建。通常来说当你定义自己的对象和类时才会遇到这种情况. 否则，完全可以依靠内建的迭代器完成工作，而最常使用的可能是集合的那些迭代器。



#### 1. 集合对象迭代器

在ECMAScript 6中有3种类型的集合对象：数组、Map集合与Set集合。为了更好地访问对象中的内容，这3种对象都内建了以下三种迭代器：

* entries() 返回一个迭代器,其值为多个键值对
* values() 返回一个迭代器,其值为集合的值
* keys() 返回一个迭代器, 其值为集合中所有的键名

**entries()迭代器**

每次调用next()方法时，entries()迭代器都会返回一个数组，数组中的两个元素分别表示集合中每个元素的键与值。如果被遍历的对象是数组，则第一个元素是数字类型的索引；如果是Set集合，则第一个元素与第二个元素都是值（Set集合中的值被同时作为键与值使用）；如果是Map集合，则第一个元素为键名。

```javascript
let colors = ['red', 'green', 'blue'];

let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set('title', 'Understanding ECMAScript 6');
data.set('format', 'ebook');

for (let entry of colors.entries()) {
  console.log(entry);
}

for (let entry of tracking.entries()) {
  console.log(entry);
}

for (let entry of data.entries()) {
  console.log(entry);
}


//[0 ,'red']
//[1, 'green']
//[2, 'blue']
//[1234, 12345]
//[5678, 5678]
//[9012, 9012]
//['title', 'Understanding ECMAScript 2016']
//['format', 'ebook']
```

**values()迭代器**

调用values()迭代器时会返回集合中所存的所有值

```javascript
let colors = ['red', 'green', 'blue'];

let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set('title', 'Understanding ECMAScript 6');
data.set('format', 'ebook');

for (let value of colors.values()) {
  console.log(value);
}

for (let value of tracking.values()) {
  console.log(value);
}

for (let value of data.values()) {
  console.log(value);
}


//'red'
//'green'
//'blue'
//1234
//5678
//9012
//'Understanding ECMAScript 2016'
//'ebook'
```

**keys()**

keys()迭代器会返回集合中存在的每一个键。如果遍历的是数组，则会返回数字类型的键，数组本身的其他属性不会被返回；如果是Set集合，由于键与值是相同的，因此keys()和values()返回的也是相同的迭代器；如果是Map集合，则keys()迭代器会返回每个独立的键。

```javascript
let colors = ['red', 'green', 'blue'];

let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set('title', 'Understanding ECMAScript 6');
data.set('format', 'ebook');

for (let key of colors.keys()) {
  console.log(key);
}

for (let key of tracking.keys()) {
  console.log(key);
}

for (let key of data.keys()) {
  console.log(key);
}


//0
//1
//2
//1234
//5678
//9012
//'title'
//'format'
```

对于数组对象来说，无论是否为数组添加命名属性，打印出来的都是数字类型的索引；而for-in循环迭代的是数组属性而不是数字类型的索引

**不同集合类型的默认迭代器**

每个集合类型都有一个默认的迭代器，在for-of循环中，如果没有显式指定则使用默认的迭代器。<span style="text-decoration: underline double red">数组和Set集合的默认迭代器是values()方法，Map集合的默认迭代器是entries()方法。</span>有了这些默认的迭代器，可以更轻松地在for-of循环中使用集合对象。

```javascript
let colors = ['red', 'green', 'blue'];

let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set('title', 'Understanding ECMAScript 6');
data.set('format', 'ebook');

for (let value of colors) {
  console.log(value);
}

for (let value of tracking {
  console.log(value);
}

for (let entry of data.entrys()) {
  console.log(entry);
}

//'red'
//'green'
//'blue'
//1234
//5678
//9012
//['title', 'Understanding ECMAScript 6']
//['format', 'ebook']
```

WeakSet集合与WeakMap集合就没有内建的迭代器，由于要管理弱引用，因而无法确切地知道集合中存在的值，也就无法迭代这些集合了。

**解构与for-of循环**

如果要在for-of循环中使用解构语法，则可以利用Map集合默认构造函数的行为来简化编码过程

```javascript
let data = new Map();

data.set('title', 'Understanding ECMAScript 6');
data.set('format', 'ebook');

//与用data.entries()方法相同
for (let [key, value] of data) {
  console.log(key + '=' + value);
}
```

在这段代码的for-of循环语句中，将Map集合中每一个条目解构为key和value两个变量。使用这种方法后，便不再需要访问含有键和值的两元素数组，也不需要通过Map集合的内建方法取出每一个键和值。

<span style="text-decoration: underline double blue">除了Map集合外，我们也可将for-of循环中的解构方法应用于Set集合与数组</span>。



#### 2. 字符串迭代器

ECMAScript 5正式规定可以通过方括号访问字符串中的字符（也就是说，text[0]可以获取字符串text的第一个字符，并以此类推）。<u>由于方括号操作的是编码单元而非字符，因此无法正确访问双字节字符</u>.

```javascript
let msg = 'A𠮷B'
for (let i = 0; i < msg.length; i++) {
  console.log(msg[i]);
}

//'A'
//�
//�
//(空)
//(空)
//'B'


//在浏览器换种的打印失败的只有两行,不是文档中的声明的4行
```

由于双字节字符被视作两个独立的编码单元，从而最终在A与B之间打印出4个空行

ECMAScript 6的目标是全面支持Unicode，并且我们可以通过改变字符串的默认迭代器来解决这个问题，使其操作字符而不是编码单元。现在，我们修改前一个示例中字符串的默认迭代器，让for-of循环输出正确的内容.

```javascript
let msg = 'A𠮷B'
for (let str of msg) {
  console.log(str);
}
//'A'
//𠮷
//'B'
```



#### 3. NodeList迭代器

DOM标准中有一个NodeList类型，document对象中的所有元素都用这个类型来表示。

NodeList对象和数组之间的差异:

* 二者都使用length属性来表示集合中元素的数量
* 都可以通过方括号来访问集合中的独立元素；
* 在内部实现中，二者的表现非常不一致

自从ECMAScript 6添加了默认迭代器后，DOM定义中的NodeList类型（定义在HTML标准而不是ECMAScript 6标准中）也拥有了默认迭代器，其行为与数组的默认迭代器完全一致。所以可以将NodeList应用于for-of循环及其他支持对象默认迭代器的地方。

```javascript
let divs = document.getElementByTagName('div');

for (let div of divs) {
  console.log(div.id);
}
```

### 5. 展开运算符与非数组可迭代对象

**展开运算符可以操作所有可迭代对象**，并根据默认迭代器来选取要引用的值，从迭代器读取所有值。然后按照返回顺序将它们依次插入到数组中。

#### 0. 用于Set集合

```javascript
let set = new Set([1,2,3,3,3,3,4,5]),
    array = [...set];
```



#### 1. 用于Map集合

```javascript
let map = new Map([['name', 'Nicholas'],['age', 25]] ),
    array = [...map];

console.log(array);
//[['name', 'Nicholas'],['age', 25]]
```

在此示例中，展开运算符把Map集合转换成包含多个数组的数组，Map集合的默认迭代器返回的是多组键值对，所以结果数组与执行new Map()时传入的数组看起来一样。



#### 2. 数组字面量中使用多次

```javascript
let smallNumbers = [1,2,3],
    bigNumbers = [100, 101, 102],
    allNumbers = [0, ...smallNumbers, ...bigNumbers];

console.log(allNumbers.length); //7
console.log(allNumbers); //[0,1,2,3,100,101,102]
```

#### 3. 总结

由于展开运算符可以作用于任意可迭代对象，因此<u>如果想将可迭代对象转换为数组，这是最简单的方法</u>。

你既可以将字符串中的每一个字符（不是编码单元）存入新数组中，也可以将浏览器中NodeList对象中的每一个节点存入新的数组中



### 6. 高级迭代器

#### 0. 给迭代器传递参数

如果给迭代器的next()方法传递参数，则这个参数的值就会替代生成器内部上一条yield语句的返回值。而如果要实现更多像异步编程这样的高级功能，那么这种给迭代器传值的能力就变得至关重要。

```javascript
function *createIterator() {
  let first = yield 1,
      second = yield first + 2,
      yield second + 3;
}

let iterator = createIterator();
console.log(iterator.next()); //'{value: 1, done: false}'
console.log(iterator.next(4)); //'{value: 6, done: false}'
console.log(iterator.next(5)); //'{value: 8, done: false}'
console.log(iterator.next()); //'{value: undefined, done: true}'
```

这里有一个特例，**第一次调用next()方法时无论传入什么参数都会被丢弃**。由于传给next()方法的参数会替代上一次yield的返回值，而在第一次调用next()方法前不会执行任何yield语句，因此在第一次调用next()方法时传递参数是毫无意义的。



#### 1. 在迭代器中抛出错误

除了给迭代器传递数据外，还可以给它传递错误条件。通过throw()方法，当迭代器恢复执行时可令其抛出一个错误。将错误对象传给throw()方法后，在迭代器继续执行时其会被抛出。

```javascript
function *createIterator() {
  let first = yield 1,
      second = yield first + 2,
      yield second + 3; //永远不会被执行
}

let iterator = createIterator();
console.log(iterator.next()); //'{value: 1, done: false}'
console.log(iterator.next(4)); //'{value: 6, done: false}'
console.log(iterator.throw(new Error('Boom'))); //从生成器中抛出的错误
```

在这个示例中，前两个表达式正常求值，而<span style="text-decoration:underline wavy blue">调用throw()方法后，在继续执行let second求值前，错误就会被抛出并阻止了代码继续执行</span>。这个过程与直接抛出错误很相似，二者唯一的区别是抛出的时机不同。

知道调用throw()方法后生成器内部抛出错误的位置，你就可以在生成器内部通过try-catch代码块来捕获这些错误：

```javascript
function *createIterator() {
  let first = yield 1,
      second;
  try {
    second = yield first + 2;  //yield 4+2 然后抛出错误
  }catch (e) {
    second = 6;              //如果捕获到错误,则给变量second赋另外一个值
  }
  yield second + 3;
}

let iterator = createIterator()
console.log(iterator.next()); //"{value: 1, done: false}"
console.log(iterator.next(4)); //'{value: 6, done: false}'
console.log(iteartor.next(throw(new Error('Boom')))); //'{value: 9, done: false}'
console.log(iterator.next()); //'{value: undefined, done: false}'
```

try-catch代码块包裹着第二条yield语句。尽管这条语句本身没有错误，但在给变量second赋值前还是会主动抛出错误，catch代码块捕获错误后将second变量赋值为6，下一条yield语句继续执行后返回9。

调用throw()方法后也会像调用next()方法一样返回一个结果对象。由于在生成器内部捕获了这个错误，因而会继续执行下一条yield语句，最终返回数值9。

如此一来，next()和throw()就像是迭代器的两条指令，调用next()方法命令迭代器继续执行（可能提供一个值），调用throw()方法也会命令迭代器继续执行，但同时也抛出一个错误，在此之后的执行过程取决于生成器内部的代码。

在迭代器内部，如果使用了yield语句，则可以通过next()方法和throw()方法控制执行过程，当然，也可以使用return语句返回一些与普通函数返回语句不太一样的内容



#### 2. 生成器返回语句

由于生成器也是函数，因此可以通过return语句提前退出函数执行，对于最后一次next()方法调用，可以主动为其指定一个返回值。

在生成器中，return表示所有操作已经完成，属性done被设置为true；如果同时提供了相应的值，则属性value会被设置为这个值。

```javascript
function *createIterator() {
  yield 1;
  return;
  yield 2;
  yield 3;
}

let iterator = createIterator();
console.log(iterator.next()); //'{value: 1, done: false}'
console.log(iterator.next()); //'{value: undefined, done: true}'
```

return语句紧随第一条yield语句，其后的yield语句将不会被执行。

在return语句中也可以指定一个返回值，该值将被赋值给返回对象的value属性

```javascript
function *createIterator() {
  yield 1;
  return 42;
}

let iterator = createIterator();
console.log(iterator.next()); //'{value: 1, done: false}'
console.log(iterator.next()); //'{value: 42, done: true}'
console.log(iterator.next()); //'{value: undefined, done: true}'
```

通过return语句指定的返回值，只会在返回对象中出现一次，在后续调用返回的对象中，value属性会被重置为undefined。

展开运算符与for-of循环语句会直接忽略通过return语句指定的任何返回值，只要done一变为true就立即停止读取其他的值



#### 3. 委托生成器

在某些情况下，我们需要将两个迭代器合二为一，这时可以创建一个生成器，再给yield语句添加一个星号，就可以将生成数据的过程委托给其他生成器。当定义这些生成器时，只需将星号放置在关键字yield和生成器的函数名之间即可

```javascript
function *createIterator() {
  yield 1;
  yield 2;
}

function *createColorIterator() {
  yield 'red';
  yield 'green';
}

function *createCombinedIterator() {
  yield *createIterator();
  yield *createColorIterator();
  yield true;
}

let iterator = createCombinedIterator();

console.log(iterator.next()); //'{value: 1, done: false}'
console.log(iterator.next()); //'{value: 2, done: false}'
console.log(iterator.next()); //'{value: 'red', done: false}'
console.log(iterator.next()); //'{value: 'green', done: false}'
console.log(iterator.next()); //'{value: true, done: false}'

console.log(iterator.next()); //'{value: undefined, done: false}'
```

这里的生成器createCombinedIterator()先后委托了另外两个生成器create-NumberIterator()和createColorIterator()。仅根据迭代器的返回值来看，它就像是一个完整的迭代器，可以生成所有的值。直到最后由createNumberIterator()和createColorIterator()创建的迭代器无法返回更多的值，此时执行最后一条yield语句并返回true。

有了生成器委托这个新功能，你可以进一步利用生成器的返回值来处理复杂任务，例如：

```javascript
function *createNumberIterator() {
  yield 1;
  yield 2;
  return 3;
}

function *createRepeatingIterator(count) {
  for (let i=0; i<count; i++) {
    yield 'repeat';
  }
}

function *createCombinedIterator() {
  let result = yield *createNumberIterator();
  yield *createRepeatingIterator(result);
}

let iterator = createCombinedIterator();

console.log(iterator.next()); //'{value: 1, done: false}'
console.log(iterator.next()); //'{value: 2, done: false}'
console.log(iterator.next()); //'{value: 'repeat', done: false}'
console.log(iterator.next()); //'{value: 'repeat', done: false}'
console.log(iterator.next()); //'{value: 'repeat', done: false}'
console.log(iterator.next()); //'{value: 'repeat', done: false}'
console.log(iterator.next()); //'{value: undefined, done: true}'
```

在生成器createCombinedIterator()中，执行过程先被委托给了生成器createNumberIterator()，返回值会被赋值给变量result，执行到return 3时会返回数值3。这个值随后被传入createRepeatingIterator()作为它的参数，因而生成字符串"repeat"的yield语句会被执行三次。

注意，无论通过何种方式调用迭代器的next()方法，数值3永远不会被返回，它只存在于生成器createCombinedIterator()的内部。但如果想输出这个值，则可以额外添加一条yield语句，例如：

```javascript
function *createNumberIterator() {
  yield 1;
  yield 2;
  return 3;
}

function *createRepeatingIterator(count) {
  for (let i=0; i<count; i++) {
    yield 'repeat';
  }
}

function *createCombinedIterator() {
  let result = yield *createNumberIterator();
  yield result;
  yield *createRepeatingIterator(result);
}

let iterator = createCombinedIterator();
```



yield *也可直接应用于字符串，例如yield * "hello"，此时将使用字符串的默认迭代器。



### 7. 异步执行任务

由于生成器支持在函数中暂停代码执行，因而可以深入挖掘异步处理的更多用法。



#### 0. 简单任务执行器

由于执行yield语句会暂停当前函数的执行过程并等待下一次调用next()方法，因此你可以创建一个函数，在函数中调用生成器生成相应的迭代器，从而在不用回调函数的基础上实现异步调用next()方法

```javascript
function fun(taskDef) {
  //创建一个无使用限制的迭代器
  let task = taskDef();
  
  //开始执行任务
  let result = task.next();
  
  //循环调用next()的函数
  function step() {
    if (!result.done) {
      result = task.next();
      step();
    }
  }
  
  //开始迭代执行
  step();
}
```

借助这个run()函数，可以像这样执行一个包含多条yield语句的生成器

```javascript
run(function *() {
  console.log(1);
  yield;
  console.log(2);
  yield;
  console.log(3);
})
```



#### 1. 向任务执行器传递数据(未完成)

给任务执行器传递数据的最简单办法是，将值通过迭代器的next()方法传入作为yield的生成值供下次调用。

```javascript
```



#### 2. 异步任务执行器(未完成)









## class 类

在ECMAScript 6中引入了类的特性。ECMAScript 6中的类与其他语言中的还是不太一样，其语法的设计实际上借鉴了JavaScript的动态性

### ECMAScript 5中的近类结构:

首先创建一个构造函数，然后定义另一个方法并赋值给构造函数的原型

```javascript
function PersonType(name) {
  this.name = name;
}

PersonType.prototype.sayName = function() {
  console.log(this.name);
};

let person = new PersonType('Nicholas');
person.sayName(); //Nicholas

console.log(person instanceof PersonType); //true
console.log(person instanceof Object); //true
```



### 定义类的2种方式

#### 0. 类声明

要声明一个类，首先编写class关键字，紧跟着的是类的名字，其他部分的语法类似于对象字面量方法的简写形式，但不需要在类的各元素之间使用逗号分隔

```javascript
class PersonClass {
  //等价于PersonType构造函数
  constructor(name) {
    this.name = name;
  }
  
  //等价于PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
}

let person = new PersonClass('Nicholas');
person.sayName(); //'Nicholas'

console.log(person instanceof PersonClass); //true
console.log(person instanceof Object); //true

console.log(typeof PersonClass); //function
console.log(typeof PersonClass.prototype.sayName); //true
```

通过类声明语法定义PersonClass的行为与之前创建PersonType构造函数的过程相似

**构造函数**

这里直接在类中通过特殊的constructor方法名来定义构造函数. <u>除constructor外没有其他保留的方法名，所以可以尽情添加方法</u>。

**方法**

使用简洁语法来定义方法，因而不需要添加function关键字。

**私有属性**

<u>私有属性是实例中的属性，不会出现在原型上，且只能在类的构造函数或方法中创建</u>。<u>建议你在构造函数中创建所有私有属性，从而只通过一处就可以控制类中的所有私有属性</u>。

**总结**

类声明仅仅是基于已有自定义类型声明的语法糖。typeof PersonClass最终返回的结果是"function"，所以PersonClass声明实际上创建了一个具有构造函数方法行为的函数。

<u>与函数不同的是，类属性不可被赋予新值</u>，在之前的示例中，PersonClass.prototype就是这样一个只可读的类属性。

**1.类与自定义类型对象之间的差异**

* 函数声明可以被提升，而类声明与let声明类似，不能被提升；真正执行声明语句之前，它们会一直存在于临时死区中。
*  类声明中的所有代码将自动运行在严格模式下，而且无法强行让代码脱离严格模式执行.
* 在自定义类型中，需要通过Object.defineProperty()方法手工指定某个方法为不可枚举；而在类中，所有方法都是不可枚举的.
* 每个类都有一个名为**[[Construct]]**的内部方法，通过关键字new调用那些不含[[Construct]]的方法会导致程序抛出错误.
* 使用除关键字new以外的方式调用类的构造函数会导致程序抛出错误.
* 在类中修改类名会导致程序报错.

了解了这些差异之后，我们可以用除了类之外的语法为之前示例中的PersonClass声明编写等价代码：

```javascript
//等价PersonClass

let PersonType2 = (function() {
  'use strict';
  const PersonType2 = function(name) {
    //确保通过关键字new调用该函数
    if (typeof new.target === 'undefined') {
      throw new Error('必须通过关键字new调用构造函数');
    }
    
    this.name = name;
  }
  
  Object.defineProperty(PersonType2.prototype, 'sayName', {
    value: function() {
      //确保不会通过关键字new调用该方法
      if (typeof new.target !== 'undefined') {
        throw new Error('不可使用new关键字调用该函数');
      }
      
      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
  
  return PersonType2;
})();
```

这段代码中有两处PersonType2声明：一处是外部作用域中的let声明，一处是立即执行函数表达式（IIFE）中的const声明，<span style="text-decoration: underline wavy blue;">这也从侧面说明了为什么可以在外部修改类名而内部却不可修改</span>。

在构造函数中，先检查new.target是否通过new调用，如果不是则抛出错误；紧接着，将sayName()方法定义为不可枚举，并再次检查new.target是否通过new调用，如果是则抛出错误；最后，返回这个构造函数。

从这个示例我们可以看到，尽管可以在不使用new语法的前提下实现类的所有功能，但如此一来，代码变得极为复杂。

**常量类名**

类的名称只在类中为常量，所以尽管不能在类的方法中修改类名，但可以在外部修改

```javascript
class Foo {
  constructor() {
    Foo = 'bar'; // 执行时会抛出错误
  }
}

//但在类声明结束后就可以修改
Foo = 'bar';
```



#### 2.类表达式

类和函数都有两种存在形式：声明形式和表达式形式。声明形式的函数和类都由相应的关键字（分别为function和class）进行定义，随后紧跟一个标识符；表达式形式的函数和类与之类似，只是不需要在关键字后添加标识符。<u>类表达式的设计初衷是为了声明相应变量或传入函数作为参数。</u>

**类声明和类表达式区别**

* 二者均不会像函数声明和函数表达式一样被提升，所以在运行时状态下无论选择哪一种方式代码最终的执行结果都没有太大差别。
* 最重要的区别是name属性不同，匿名类表达式的name属性值是一个空字符串，而类声明的name属性值为类名
* 在JavaScript引擎中，类表达式的实现与类声明稍有不同: 类声明，通过let定义的外部绑定与通过const定义的内部绑定具有相同名称；而命名类表达式通过const定义名称，从而PersonClass2只能在类的内部使用。

##### 2.1 匿名类表达式

```javascript
let PersonClass = class {
  //等价于PersonType构造函数
  constructor(name) {
    this.name = name;
  }
  
  //等价于PersonClass.prototype.sayName
  sayName() {
    console.log(this.name);
  }
};

let person = new PersonClass('Nicholas');
person.sayName(); //Nicholas

console.log(person instanceof PersonClass); //true
console.log(person instanceof Object); //true

console.log(typeof PersonClass); //function
console.log(typeof PersonClass.prototype.sayName); //function
```

如上所述, 类表达式不需要标识符在类后。除了语法，类表达式在功能上等价于类声明。在匿名类表达式中，就像在之前的示例中，<u>PersonClass.name是一个空字符串</u>。当你使用一个类声明时，PersonClass.name将会是"PersonClass"字符串。



##### 2.2 命名类表达式

声明时，在关键字class后添加一个标识符即可定义为命名类表达式

```javascript
let PersonClass = class PersonClass2 {
  //等价于PersonType构造函数
  constructor(name) {
    this.name = name;
  }
  
  //等价于PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
};

console.log(typeof PersonClass); //function
console.log(typeof PersonClass2); //undefined
```

类表达式被命名为PersonClass2，由于标识符PersonClass2只存在于类定义中，因此它可被用在像sayName()这样的方法中。而在类的外部，由于不存在一个名为PersonClass2的绑定，因而typeof PersonClass2的值为"undefined"。

```javascript
//等价于命名类表达式PersonClass

let PersonClass = (function() {
  'use strict'
  const PersonClass2 = function(name) {
    //确保通过关键字new调用该函数
    if (typeof new.target === 'undefined') {
      throw new Error('必须通过关键字new调用该构造函数');
    }
    this.name = name;
  }
  
  Object.defineProperty(PersonClass2.prototype, 'sayName', {
    value: function() {
      //确保不会通过关键字new调用该方法
      if (typeof new.target !== 'undefined') {
        throw new Error('不可使用new调用该方法');
      }
      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
  
  return PersonClass2;
})();
```

在JavaScript引擎中，类表达式的实现与类声明稍有不同。对于类声明来说，通过let定义的外部绑定与通过const定义的内部绑定具有相同名称；而命名类表达式通过const定义名称，从而PersonClass2只能在类的内部使用。



### 类使用方式

#### 0. 一等公民-类

一等公民-类

<u>在程序中，一等公民是指一个可以传入函数，可以从函数返回，并且可以赋值给变量的值.</u> JavaScript函数,类都是一等公民（函数也被称作头等函数）

#### 1. 将类作为参数传入函数中 

```javascript
function createObject(classDef) {
  return new classDef();
}

let obj = createObject(class {
  sayHi() {
    console.log('Hi');
  }
});

obj.sayHi(); //Hi
```

在这个示例中，调用createObject()函数时传入一个匿名类表达式作为参数，然后通过关键字new实例化这个类并返回实例，将其储存在变量obj中。

#### 2. 通过立即调用类构造函数可以创建单例 ????

用new调用类表达式，紧接着通过一对小括号调用这个表达式

```javascript
let person = new class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}('Nicholas');

person.sayName(); //Nicholas
```

这里先创建一个匿名类表达式，然后立即执行。<u>依照这种模式可以使用类语法创建单例，并且不会在作用域中暴露类的引用</u>，其后的小括号表明正在调用一个函数，而且可以传参数给这个函数。



### 访问器属性(getter/setter)

尽管应该在类构造函数中创建自己的属性，但是<span style="text-decoration:underline wavy blue">类也支持直接在原型上定义访问器属性</span>。

* 创建getter时，需要在关键字get后紧跟一个空格和相应的标识符； `get 标识符() {}` 
* 创建setter时，只需把关键字get替换为set即可  `set 标识符(value) {}`

```javascript
class CustomeHTMLElement {
  constructor(element) {
    this.element = element;
  }
  
  get html() {return this.element.innerHTML;}
  set html(value) {this.element.innerHTML = value;}
}

let descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html');
console.log('get' in descriptor); //true
console.log('set' in descriptor); //true
console.log(descriptor.enumerable); //false
```



```javascript
//非类形式下等价实现

let CustomHTMLElement = (function() {
  'use stric'
  const CustomHTMLElement = function(element) {
    //确保通过关键字new调用该函数
    if (typeof new.target === 'undefined') {
      throw new Error('必须通过关键字new调用该函数');
    }
    this.element = element;
  }
  
  Object.defineProperty(CustomeHTMLElement.prototype, 'html', {
    enumerable: false,
    configurable: true,
    get: function() {return this.element.innerHTML},
    set: function(value) {this.element.innerHTML = value;}
  })
})
```

由上可见，比起非类等效实现，类语法可以节省很多代码。在非类等效实现中，仅html访问器属性定义的代码量就与类声明一样多。



### 可计算成员名称

类方法和访问器属性也支持使用可计算名称。就像在对象字面量中一样，用方括号包裹一个表达式即可使用可计算名称.

通过相同的方式可以在访问器属性中应用可计算名称

```javascript
let methodName = 'sayName';

class PersonClass {
  constructor(name) {this.name = name;}
  [methodName]() {console.log(this.name);}
};

let me = new PersonClass('Nicholas');
me.sayName(); //Nicholas
```

### 生成器方法

在对象字面量中，可以通过在方法名前附加一个星号（*）的方式来定义生成器，在类中亦是如此，可以将任何方法定义成生成器。

```javascript
class MyClass {
  *createIterator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

let instance = new MyClass();
let iterator = instance.createIterator();
```

如果用对象来表示集合，又希望通过简单的方法迭代集合中的值，那么生成器方法就派上用场了。数组、Set集合及Map集合为开发者们提供了多个生成器方法来与集合中的元素交互。



尽管生成器方法很实用，但如果你的类是用来表示值的集合的，那么为它定义一个默认迭代器会更有用。通过Symbol.iterator定义生成器方法即可为类定义默认迭代器

```javascript
class Collection {
  constructor() {
    this.items = [];
  }
  
  *[Symbol.iterator]() {
    yield *this.items.values();
  }
}

let collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for let x of collection) {
  console.log(x);
}

//1
//2
//3
```

这个示例用可计算名称创建了一个代理this.items数组values()迭代器的生成器方法。任何管理一系列值的类都应该引入默认迭代器，因为一些与特定集合有关的操作需要所操作的集合含有一个迭代器。

如果不介意在对象的实例中出现添加的方法和访问器属性，则可以将它们添加到类的原型中；如果你希望它们只出现在类中，那么需要使用静态成员.



### 静态成员

#### 0. ES5

在ECMAScript 5及早期版本中，直接将方法添加到构造函数中来模拟静态成员是一种常见的模式

```javascript
function PersonType(name) {
  this.name = name;
}

//静态方法
PersonType.create = function(name) {
  return new PersonType(name);
};

//实例方法
PersonType.prototype.sayName = function() {
  console.log(this.name);
}
```

由于工厂方法PersonType.create()使用的数据<u>不依赖PersonType的实例，因而其会被认为是一个静态方法</u>。

#### 1. ES6

ECMAScript 6的类语法简化了创建静态成员的过程，在<u>方法或访问器属性名</u>前使用正式的**静态注释**即可

**注意事项**

* 类中的所有方法和访问器属性都可以用static关键字来定义，唯一的限制是不能将static用于定义构造函数方法。

* 不可在实例中访问静态成员，必须要直接在类中访问静态成员。

```javascript
class PersonClass {
  
  //等价于PersonType构造函数
  constructor(name) {this.name = name; }
  
  //等价于PersonType.prototype.sayName
  sayName() {console.log(this.name); }
  
  //等价于PersonType.create
  static create(name) {return new PersonClass(name); }
}

let person = PersonClass.create('Nicholas');

//
class PersonClass2 {
  
  constructor(name) {
    this.name = name;
  }
  
  static get getValue() {
    return this.name;
  }
  
}

let personclass2 = new PersonClass2('jack');
console.log(PersonClass2.nameValue); //'jack'
```



### 继承与派生类

#### 0. ES5继承与ES6继承实现 ????

```javascript
//ES5
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
}

function Square(length) {
  Rectangle.call(this,length,length);
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    writable: true,
    configurable: true
  }
});

let square = new Square(3);

console.log(square.getArea()); //9
console.log(square instanceof Square); //true
console.log(square instanceof Rectangle); //true


// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
// Square.prototype.__proto__ === Rectangle.prototype
```

Square继承自Rectangle，为了这样做，必须用一个创建自Rectangle.prototype的新对象重写Square.prototype并调用Rectangle.call()方法。

使用熟悉的extends关键字可以指定类继承的函数。原型会自动调整，通过调用super()方法即可访问基类的构造函数

```javascript
//ES6
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  
  getArea() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    //等价于 Rectangle.call(this, length, length)
    super(length, length);
  }
}

let square = new Square(3);

console.log(square.getArea()); //9
console.log(square instanceof Sqaure); //true
console.log(square instanceof Rectangle); //true
```



#### 1. 派生类

继承自其他类的类被称作派生类，如果在派生类中指定了构造函数则必须要调用super()，如果不这样做程序就会报错。如果选择不使用构造函数，则当创建新的类实例时会自动调用super()并传入所有参数。

```javascript
class Square extends Rectangle {
  //没有构造函数
}

//等价于
class Square extends Rectangle {
  constructor(...args) {
    super(...args);
  }
}
```

示例中的第二个类是所有派生类的等效默认构造函数，所有参数按顺序被传递给基类的构造函数。这里展示的功能不太正确，因为Square的构造函数只需要一个参数，所以最好手动定义构造函数。

#### 3. 使用super注意

* 只可在派生类的构造函数中使用super()，如果尝试在非派生类（不是用extends声明的类）或函数中使用则会导致程序抛出错误。·
* 在构造函数中访问this之前一定要调用super()，它负责初始化this，如果在调用super()之前尝试访问this会导致程序出错。
* 如果不想调用super()，则唯一的方法是让类的构造函数返回一个对象。



### 类方法遮蔽

派生类中的方法总会覆盖基类中的同名方法。举个例子，给Square添加getArea()方法来重新定义这个方法的功能：

```javascript
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
  
  //覆盖并遮蔽Rectangle.prototype.getArea()方法
  getArea() {
    return this.length * this.length;
  }
}
```

由于为Square定义了getArea()方法，便不能在Square的实例中调用Rectangle.prototype.getArea()方法.

如果你想调用基类中的该方法，则可以调用super.getArea()方法

```javascript
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
  
  //覆盖并遮蔽Rectangle.prototype.getArea()方法
  getArea() {
    return super.getArea();
  }
}
```



### 静态成员继承

如果基类有静态成员，那么这些静态成员在派生类中也可用。JavaScript中的继承与其他语言中的继承一样，只是在这里继承还是一个新概念。

```javascript
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  
  getArea() {
    return this.length * this.width;
  }
  
  static create(length ,width) {
    return new Rectangle(length, width);
  }
}


class Square extends Rectangle {
  constructor(length) {
    //等价于 Rectangle.call(this, length, length)
    super(length, length);
  }
}

let rect = Square.create(3, 4);

console.log(rect.instanceof Rectangle); //true
console.log(rect.getArea()); //12
console.log(rect instanceof Square); //false
```



### 派生自表达式的类 ????!!!!

CMAScript 6最强大的一面或许是从表达式导出类的功能了。只要表达式可以被解析为一个函数并且具有[[Construct]]属性和原型，那么就可以用extends进行派生。

```javascript
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

let x = new Square(3);
console.log(x.getArea()); //9
console.log(x instanceof Rectangle); //true
```

Rectangle是一个ECMAScript 5风格的构造函数，Square是一个类，由于Rectangle具有[[Construct]]属性和原型，因此Square类可以直接继承它

<u>extends强大的功能使得类可以继承自任意类型的表达式</u>，从而创造更多可能性，例如动态地确定类的继承目标。

```javascript
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

function getBase() {
  return Rectangle;
}

class Square extends getBase() {
  constructor(length) {
    super(length, length);
  }
}

let x = new Square(x);
console.log(x.getArea()); //9
console.log(x instanceof Rectangle); //true
```

getBase()函数是类声明的一部分，直接调用后返回Rectangle，此示例实现的功能与之前的示例等价。

由于可以动态确定使用哪个基类，因而可以创建不同的继承方法。例如，可以像这样创建mixin：

```javascript
let SerializableMixin = {
  serialize() {
    return JSON.stringify(this);
  }
};

let AreaMixin = {
  getArea() {
    return this.length * this.width;
  }
};

function mixin(...mixins) {
  let base = function() {};
  Object.assign(base.prototype, ...mixins);
  return base;
}

class Square extends mixin(AreaMixin, SerializableMixin) {
  constructor(length) {
    super();
    this.length = length;
    this.width = width;
  }
}

let x = new Square(3);
console.log(x.getArea()); //9
console.log(x.serialize()); //"{"length": 3, "width": 3}"
```





在extends后可以使用任意表达式，但不是所有表达式最终都能生成合法的类。如果使用null或生成器函数（曾在第8章讲解）会导致错误发生，类在这些情况下没有[[Consturct]]属性，尝试为其创建新的实例会导致程序无法调用[[Construct]]而报错。



### 内建对象的继承????

自JavaScript数组诞生以来，开发者一直都希望通过继承的方式创建属于自己的特殊数组。在ECMAScript 5及早期版本中这几乎是不可能的，用传统的继承方式无法实现这样的功能

```javascript
//内建数组行为
let colors = [];
colors[0] = 'red';
console.log(colors.length); //1

colors.length = 0;
console.log(colors[0]); //undefined


//尝试通过ES5语法继承数组
function MyArray() {
  Array.apply(this, arguments);
}

MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

let colors = new MyArray();
colors[0] = 'red';
console.log(colors.length); //0
```

这段代码最后console.log()的输出结果与预期不符，MyArray实例的length和数值型属性的行为与内建数组中的不一致，这是因为通过传统JavaScript继承形式实现的数组继承没有从Array.apply()或原型赋值中继承相关功能。

ECMAScript 6类语法的一个目标是支持内建对象继承，因而ES6中的类继承模型与ECMAScript 5及早期版本中的稍有不同，主要体现在两个方面:

* 在ECMAScript 5的传统继承方式中，先由派生类型（例如，MyArray）创建this的值，然后调用基类型的构造函数（例如Array.apply()方法）。这也意味着，this的值开始指向的是MyArray的实例，但是随后会被来自Array的其他属性所修饰。
* ECMAScript 6中的类继承则与之相反，先由基类（Array）创建this的值，然后派生类的构造函数（MyArray）再修改这个值。所以一开始可以通过this访问基类的所有内建功能，然后再正确地接收所有与之相关的功能。

以下示例是一个基于类生成特殊数组的实践

```javascript
class MyArray extends Array {
  //空
}

let colors = new MyArray();
colors[0] = 'red';

colors.length = 0;
console.log(colors[0]); //undefined
```

MyArray直接继承自Array，其行为与Array也很相似，操作数值型属性会更新length属性，操作length属性也会更新数值型属性。于是，可以正确地继承Array对象来创建自己的派生数组类型，当然也可以继承其他的内建对象。添加所有的这些功能后，内建对象继承的最后一个特殊情况便被ECMAScript 6及派生类语法有效解决了，只是这个特殊情况仍值得我们探索一番。



### Symbol.species属性 ????

内建对象继承的一个实用之处是，原本在内建对象中返回实例自身的方法将自动返回派生类的实例。所以，如果你有一个继承自Array的派生类MyArray，那么像slice()这样的方法也会返回一个MyArray的实例。

```javascript
class MyArray extends Array {
  //空
}

let items = new MyArray(1,2,3,4),
    subitems = items.slice(1, 3);

console.log(items instanceof MyArray); //true
console.log(subitems instanceof MyArray); //true
```

正常情况下，继承自Array的slice()方法应该返回Array的实例，但是在这段代码中，slice()方法返回的是MyArray的实例。在浏览器引擎背后是通过Symbol.species属性实现这一行为。

Symbol.species是诸多内部Symbol中的一个，它被用于定义返回函数的静态访问器属性。被返回的函数是一个构造函数，每当要在实例的方法中（不是在构造函数中）创建类的实例时必须使用这个构造函数。以下这些内建类型均已定义Symbol.species属性：

* Array
* ArrayBuffer
* Map
* Promise
* RegExp
* Set
* Typed arrays

列表中的每个类型都有一个默认的Symbol.species属性，该属性的返回值为this，这也意味着该属性总会返回构造函数。如果在自定义的类中实现这个功能，则代码看起来可能是这样的：

```javascript
//几个内建类型像这样使用species
class MyClass {
  static get [Symbol.species]() {
    return this;
  }
  
  constructor(value) {
    this.value = value;
  }
  
  clone() {
    return new this.constructor[Symbol.species](this.value);
  }
}
```

在这个示例中，Symbol.species被用来给MyClass赋值静态访问器属性，请注意，这里只有一个getter方法却没有setter方法，这是因为在这里不可以改变类的种类。调用this.constructor[Symbol.species]会返回MyClass，clone()方法通过这个定义可以返回新的实例，从而允许派生类覆盖这个值。举个例子：

```javascript
class MyClass {
  static get [Symbol.species]() {
    return this;
  }
  
  constructor(value) {
    this.value = value;
  }
  
  clone() {
    return new this.constructor[Symbol.species](this.value);
  }
}


class MyDerivedClass1 extends MyClass {
  //空
}

class MyDerivedClass2 extends MyClass {
  static get [Symbol.species]() {
    return MyClass;
  }
}

let instance1 = new MyDerivedClass1('foo'),
    clone1 = instace1.clone(),
    instance2 = new MyDerivedClass2('bar'),
    clone2 = instance2.clone();


console.log(clone1 instanceof MyClass); //true
console.log(clone1 instanceof MyDerivedClass1); //true
console.log(clone2 instanceof MyClass); //true
console.log(clone2 instanceof MyDerivedClass1); //false
```

在这里，MyDerivedClass1继承MyClass时未改变Symbol.species属性，由于this.constructor[Symbol.species]的返回值是MyDerivedClass1，因此调用clone()返回的是MyDerivedClass1的实例；MyDerivedClass2继承MyClass时重写了Symbol.species让其返回MyClass，调用MyDerivedClass2实例的clone()方法时，返回值是一个MyClass的实例。通过Symbol.species可以定义当派生类的方法返回实例时，应该返回的值的类型。

未完成...



### 在类的构造函数中使用new.target

new.target及它的值根据函数被调用的方式而改变。在类的构造函数中也可以通过new.target来确定类是如何被调用的。在简单情况下，new.target等于类的构造函数

```javascript
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length; 
    this.width = width;
  }
}

//new.target的值是Rectangle
let obj = new Rectangle(3, 4); //输出true
```

这段代码展示了当调用new Rectangle(3, 4)时等价于Rectangle的new.target。类构造函数必须通过new关键字调用，所以总是在类的构造函数中定义new.target属性。但是其值有时会不同，请看这段代码：

```javascript
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length; 
    this.width = width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

//new.target的值是Square
let obj = new Square(3); //输出false
```

Square调用Rectangle的构造函数，所以当调用发生时new.target等于Square。这一点非常重要，因为每个构造函数都可以根据自身被调用的方式改变自己的行为。例如，可以用new.target创建一个抽象基类（不能被直接实例化的类），就像这样：

```javascript
//抽象基类
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('这个类不能被直接实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
}

let x = new Shape(); //抛出错误

let y = new Rentangle(3, 4);
console.log(y instanceof Shape); //true
```

这个示例中，每当new.target是Shape时构造函数总会抛出错误，这相当于调用new Shape()时总会出错。但是，仍可用Shape作为基类派生其他类，示例中的Rectangle便是这样。super()调用执行了Shape的构造函数，new.target与Rectangle等价，所以构造函数继续执行不会抛出错误。

因为类必须通过new关键字才能调用，所以在类的构造函数中，new.target属性永远不会是undefined。





## 数值扩展(了解)

#### 1.进制

```js
- 使用0b表示二进制
let b = 0b1011;

- 使用0o表示八进制
let o = 0o666;

-使用0x表示16进制
let x = 0xff;

- 转换10进制,使用Number方法
Number(0xff);//255
Number(0o666;//438
Number(0b1011);//11
```





#### 2.Number方法

##### Number.isFinite

```js
- 检查一个数值是否为有限数
- 参数类型不是数值,一律返回false

console.log(Number.isFinite(1/0));//true
console.log(Number.isFinite(Infinity));//false
```



##### Number.isNaN

```js
- 检测一个数值是否为NaN
- 如果参数类型不是NaN,一律返回false

console.log(Number.isNaN(undefined+1));//true

Number.isNaN()与Number.isFinite()方法,与传统的isFinite(),isNaN()方法区别在于,传统方法先调用Number()方法将非数值的值转换为数值,再进行判断,而这两个新方法只对数值有效.
```



##### Number.parseInt Number.parseFloat

```js
- ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变
这样做的目的，是逐步减少全局性方法，使得语言逐步模块化

Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true

```



##### Number.trunc

```js
- 将数字的小数部分抹掉,返回整数部分
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0

- 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
Math.trunc('123.456') // 123
Math.trunc(true) //1
Math.trunc(false) // 0
Math.trunc(null) // 0

- 对于空值和无法截取整数的值，返回NaN。
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
Math.trunc(undefined) // NaN


```





##### Number.isInteger

```js
- 判断一个数是否为integer整数类型
- 参数不是数值,返回false

- JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
Number.isInteger(25)//true
Number.isInteger(25.0)//true
Number.isInteger(25.1)//false


Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false
```

##### Number.isSafeInteger()和安全整数

```js
https://www.bookstack.cn/read/es6-3rd/spilt.6.docs-number.md
- JS能精确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。

Math.pow(2, 53);//9007199254740992
9007199254740992  // 9007199254740992
9007199254740993  // 9007199254740992 超过2的53次方之后,一个数就不精确了.
Math.pow(2, 53) === Math.pow(2, 53) + 1
// true

ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。


```







##### 幂运算

```js
- ES7 Math.pow()

const result = 3**5;
const res = Math.pow(3, 5);

console.log(result);
console.log(res);
```





## 对象扩展

#### Object.is

```js
- 判断两个值是否完全相等
- 和'==='相似,但是在NaN比较上不一致.
Object.is(a, b); //判断a与b是否全等
Object.is(NaN, NaN); //true
console.log(NaN === NaN); //false
Object.is(100, '100'); //false

```



#### Object.assign

> 于将所有==可枚举属性的值==从一个或多个源对象分配到目标对象。它将返回目标对象。

```js
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
- 对象的合并, 应用场景:配置对象的合并

- 语法:
Object.assign(proto, [, propertiesObject]); 
 - 参数:proto:必须.表示新建对象的原型对象,即该参数会被赋值到目标对象(即新对象,或说是最后返回的对象)的原型上.该参数可以是null(创建空的对象时需传入null),对象,函数的prototype属性. 否则会抛出TypeError错误.
 - prototiesObject:可选.该参数对象是一组属性与值//[,] mdn上的语法,表示可选参数
该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，值是属性描述符（这些属性描述符的结构与 Object.defineProperties() 的第二个参数一样）。这些属性是新对象自身的属性，而不是新对象原型链上的属性。

- 案例:
let obj={a:1, b:2};
let obj2={c:3, d:4, a:100}; //属性相同,后面的覆盖前面的
const result = Object.assign(obj, obj2);
console.log(result); //{a: 100, b: 2, c: 3, d: 4}
console.log(obj);// {a: 100, b: 2, c: 3, d: 4}
console.log(result === obj);//true


Object.assign方法只会拷贝源对象自身的并且可枚举(数组,对象等)的属性到目标对象.
修改属性和属性值为变量和字符串-,新对象会跟着改变.

继承属性和不可枚举属性是不能拷贝的
const obj=Object.create({foo:1},{//foo是个继承属性
    bar:{
        value:2 //bar是不可枚举属性
    },
    baz:{
        value:3,
        enumerable:true //baz是个自身可枚举属性
    }
})

const copy=Object.assign({}, obj);
console.log(copy);//{baz:3}

```



#### 直接修改\_\_proto\_\_设置原型

```js
let obj={a:1, b:2};
let obj2={c:3, d:4, a:100};

obj.__proto__ = obj2;
console.log(obj);//打印显示obj__proto__的obj2
```



## 深拷贝与浅拷贝

### 概念

* 浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以**如果其中一个对象改变了这个地址，就会影响到另一个对象**
* 深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且**修改新对象不会影响原对象**。







```js
https://blog.csdn.net/chaopingyao/article/details/105432129
2021.05.27

https://juejin.cn/post/6844904197595332622

https://segmentfault.com/a/1190000018874254

https://segmentfault.com/a/1190000039310119#:~:text=%E6%B5%85%E6%8B%B7%E8%B4%9D%E5%8F%AA%E5%A4%8D%E5%88%B6%E6%8C%87%E5%90%91,%E4%BC%9A%E6%94%B9%E5%88%B0%E5%8E%9F%E5%AF%B9%E8%B1%A1%E3%80%82
```



### 赋值,深拷贝浅,拷贝比较

这三者的区别如下，不过比较的前提都是**针对引用类型**：

- 当我们把一个对象赋值给一个新的变量时，**赋的其实是该对象的在栈中的地址，而不是堆中的数据**。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。
- 浅拷贝：重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一块内存，会相互影响。
- 深拷贝：从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝,拷贝前后的两个对象互不影响。




### 浅拷贝

#### 定义

#### 实现方式

* Object.assign
* Array.prototype.slice()
* Array.prototype.concat()
* 扩展运算符实现的复制
* 函数库lodash的_.clone方法

#### 案例

`Object.assign()`

```javascript
let obj = {
  age: 18,
  natrue: ['smart', 'good'],
  names: {
    name1: 'fx',
    name2: 'xka'
  },
  love: function() {
    console.log('fx is a great girl')
  }
};

let newObj = Object.assign({}, obj)
newObj.names.name1 = 'fx2';

console.log(obj.names.name1); //'fx2'
```

`Array.prototype.slice()`

```javascript
let arr = [
  {item1: 'a', item2: 'b'},
  {item2: 'c', item2: 'd'}
];

let newArr = arr.slice();
newArr[0].item1 = 'aa';

console.log(arr[0].item1); //'aa'
```

`Array.prototype.concat()`

```javascript
let arr = [1, 3, {
    username: 'kobe'
    }];
let arr2 = arr.concat();    
arr2[2].username = 'wade';
console.log(arr); //[ 1, 3, { username: 'wade' } ]
```

`扩展运算符`

```javascript
//obj
let obj1 = { name: 'Kobe', address:{x:100,y:100}}
let obj2= {... obj1}
obj1.address.x = 200;
obj1.name = 'wade'
console.log('obj2',obj2) // obj2 { name: 'Kobe', address: { x: 200, y: 100 } }

//array
let arr1 = [1,2,{a: {b: 3}}];
let arr2 = [...arr1];
arr1[2].a.b = 4;
console.log(arr2[2].a.b); //4
```

`_.clone`

```javascript
let _ = require('lodash');
let obj1 = {
  a: 1,
  b: {f: {g: 1}},
  c: [1,2,3]
};

let obj2 = _.clone(obj1);
console.log(obj1.b.f === obj2.b.f); //true
```

#### 手写浅拷贝

遍历对象，然后把属性和属性值都放在一个新的对象

```javascript
let copyObj = function(obj) {
  //只拷贝对象
  if (typeof obj !== 'object') return;
  //根据obj类型判断,是新建数组还是对象
  let newObj = obj instanceof Array ? [] : {};
  //遍历obj,并且判断是obj属性才拷贝
  for (let key in obj) {   //Object.keys()只包含自身可枚举的属性
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
```







### 深拷贝

#### 定义

#### 实现方式

* _.cloneDeep()

* Jquery.extend()

* 递归手写

* JSON.parse(JSON.stringify())

  

#### 1. _.cloneDeep()

```javascript
let _ = require(lodash);
let obj1 = {
  a: 1,
  b: {f: {g: 1}},
  c: [1,2,3]
};
let obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f); //false
```

#### 2.Jquery.extend()

```javascript
$.extend(deepCopy, target, object1, [bojectN]); 

let $ = require('jquery');
let obj1 = {
  a: 1,
  b: {f: {g: 1}},
  c: [1,2,3]
};
let obj2 = $.extend(true, {}, obj1);
console.log(obj1.b.f === obj2.b.f); //false
```

#### 3-A1.手写递归

递归方法实现深度克隆原理：**遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝**。

> 来源: https://segmentfault.com/a/1190000020255831  

解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。

```javascript
//对象和数组的深拷贝
//对自身引用的处理+WeakMap; for...in低效

function cloneDeep(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    
    for (const key in target) {
      cloneTarget[key] = cloneDeep(target[key]);
    }
    
    return cloneTarget;
    
  } else {
    return target;
  }
}
```



#### 3-A2.手写递归

```javascript
//性能优化

//工具 循环函数 
//使用for或者while循环解决低效的for...in(不同测试环境或工具下 for循环和while 时间有差异)
function forEach(array, callback) {
  let index = -1;
  const len = array.length;
  while(++index < len) {
    callback(array[index], index);
  }
  return array;
}

function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target);
    let cloneTarget = isArray ? [] : {};
    
    // solve circular reference
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    
    // recursion assignment
    let keys = isArray ? undefined : Object.keys(target);
    forEach( keys || target, (value, idx) => {
      if (keys) {
        idx = value;
      }
      cloneTarget[idx] = clone(target[idx]);
    })
    return cloneTarget;
  } else {
    return target;
  }
}
```

#### 3-A3.手写递归

```javascript

//完整版


function isObject(target) {
  let type = typeof target;
  return type !== 'null' && (type === 'object' || type === 'function');
}

function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target));
}

function cloneRegExp(target) {
  let regFlag = /\w*$/;
  let result = new target.constructor(target.source, regFlag.exec(target));
  result.lastIndex = target.lastIndex;
  return result;
}

function cloneFunction(target) {
  let paramReg = /(?=\().+(?=\)\s*{$)/;
  let bodyReg = /(?={)(.|\n)+(?=})/m;
  let funcString = target.toString();
  if (target.prototype) {
    let body = bodyReg.exec(funcString);
    let param = paramReg.exec(funcString);
    if (body) {
      let paramArr = param[0].split(',');
      if (param) {
        return new Function(...paramArr, body[0]);
      } else {
        // no parameter
        return new Function(body[0]);
      }
    } else {
      return null;
    }
  } else {
    // arrow function
    return eval(target);
  }
}

function getInit(target, type) {
  switch	(type) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Date':
    case 'Error':  //浏览器和nodejs在拷贝Error时报错
      return new target.constructor(target);
    case 'Symbol':
      return cloneSymbol(target);
    case 'RegExp':
      return cloneRegExp(target);
    case 'Function':
      return cloneFunction(target);
  }
}

function clone(target, map = new WeakMap()) {
  if (!isObject) {
    return target;
  }
  
  let type = getType(target);
  let cloneTarget;
  
  if (cloneDeepType.includes(type)) {
    cloneTarget = getInit(target);
  } else {
    return cloneOtherType(target, type);
  }
  
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);
  
  if (type === 'Set') {
    target.forEach(value => cloneTarget.add(clone(value)))
    return cloneTarget;
  }
  
  if (type === 'Map') {
    target.forEach((value, key) => cloneTarget.set(key, clone(value));
    return cloneTarget;
  }
  
  let keys = type === 'Array' : undefined ? Object.keys(target);
  forEach(keys || target, (value, idx) => {
    if (keys) {
      idx = value;
    }
    
    cloneTarget[idx] = clone(target[idx]);
  })
  
  return cloneTarget;
}


//error msg:
"Error: Error
    at cloneOtherType (<anonymous>:84:20)
    at clone (<anonymous>:109:16)
    at <anonymous>:140:28
    at forEach (<anonymous>:24:9)
    at clone (<anonymous>:136:5)
    at <anonymous>:183:14"
```



```javascript
const map = new Map();
map.set('key', 'value');
map.set('ConardLi', 'code秘密花园');

const set = new Set();
set.add('ConardLi');
set.add('code秘密花园');

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    symbol: Object(Symbol(1)),
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    func1: () => {
        console.log('code秘密花园');
    },
    func2: function (a, b) {
        return a + b;
    }
};
```



#### 3-A4 另一种方案

```javascript
////https://juejin.cn/post/6844903986479251464#:~:text=%E5%A4%8D%E5%88%B6%E4%BB%A3%E7%A0%81-,%E7%AC%AC%E4%BA%8C%E5%8D%81%E4%B8%89%E7%AF%87%3A%20%E8%83%BD%E4%B8%8D%E8%83%BD%E5%86%99%E4%B8%80%E4%B8%AA%E5%AE%8C%E6%95%B4%E7%9A%84%E6%B7%B1%E6%8B%B7%E8%B4%9D%EF%BC%9F,-%E4%B8%8A%E4%B8%80%E7%AF%87%E5%B7%B2%E7%BB%8F
```



```javascript
const getType = obj => Object.prototype.toString.call(obj);
const isObject = target => typeof target === 'object' || typeof target === 'function' && target !== null;

const canTraverse = {
  '[object Map]': true,
  '[object Set]': true,
  '[object Object]': true,
  '[object Array]': true,
  '[object Arguments]': true
};

const mapTag = '[object Map]';
const setTag = '[object Set]';
const boolTag = '[object Boolean]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const handleRegExp = (target) => {
  const {source, flags} = target;
  return new target.constructor(source, flags);
};

const handleFunc = (func) => {
  //箭头函数直接返回自身
  if (!func.prototype) return func;
  const bodyReg = /(?<={)(.|\n)+(?=})/;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  
  //分别匹配函数参数 和 函数体
  const param = paramReg.exec(funcString);
  const body = bodyReg.exec(funcString);
  if (!body) return null;
  if (param) {
    const paramArr = param[0].split(',');
    return new Function(...paramArr, body[0]);
  } else {
    return new Function(body[0]);
  }
}

const handleNotTraverse = (target, tag) => {
  const Ctor = target.constructor;
  switch(tag) {
    case boolTag:
      return new Object(Boolean.prototype.valueOf.call(target));
    case numberTag:
      return new Object(Number.prototype.valueOf.call(target));
    case stringTag:
      return new Object(String.prototype.valueOf.call(target));
    case symbolTag:
      return new Object(Symbol.prototype.valueOf.call(target));
    case errorTag:
    case dateTag:
      return new Ctor(target);
    case regexpTag:
      return handleRegExp(target);
    case funcTag:
      return handleFunc(target);
    default:
      return new Ctor(target);
  }
};


const deepClone = (target, map = new WeakMap()) {
  if (!isObject) return target;
  let type = getType(target);
  let cloneTarget;
  
  if (!canTraverse[type]) {
    //处理不能遍历的对象
    return hadleNotTraverse(target, type);
  } else {
    //包装对象原型不丢失
    let ctor = target.construcotr;
    cloneTarget = new ctor();
  }
  
  if (map.get(target)) {
    return target;
  }
  map.set(target, true);
  
  if (type === mapTag) {
    target.forEach((item, key) => {
      cloneTarget.set(deepClone(key, map), deepClone(item, map));
    })
  }
  
  if (type === setTag) {
    target.forEach(item => {
      cloneTarget.add(deepClone(item, map));
    })
  }
  
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      cloneTarget[key] = deepClone(target[key], map);
    }
  }
  return cloneTarget;
}
```





#### 3-B1 直接赋值

简略版,赋值操作,可复用性很低

```javascript
const target = {
    name: 'aaa',
    pos: ['a','b','c'],
    founder: {
        name:'man'
    },
    fn() {}
};

let container = [];

container.name = target.name;
container.pos = []; //不能直接引用target.pos, 否则两个属性公用一个内存地址,一个改动另一个也会跟着变
container.pos[0] = target.pos[0];
container.pos[1] = target.pos[1];
container.pos[2] = target.pos[2];
container.founder = {};
container.founder['name'] = target.founder.name;
container.fn = target.fn.bind(container);
```



#### 3-B2.手写递归

上面简略版提高复用性,函数

```javascript
//工具函数 判断数据类型
function targetType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

//深拷贝函数
function clone(target) {
  let container = target instanceof Array ? [] : {};
  
  for (const key in target) {
    let type = targetType(target[key]);
    if (type === "Object" || type === "Array")  {
      container[key] = clone(target[key]);
    } else if (type === 'Function') {
      container[key] = target[key].bind();
    } else {
      container[key] = target[key];
    }
  }
  
  return container;
}

//问题
开始写成了 type === "Object" || "Array" Node环境中没有报错,浏览器环境中会报错

//属性值没有对象的深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}
```





#### 4. JSON方式

```javascript
let cloneObj = JSON.parse(JSON.stringify(obj));
```



```js
- 会忽略undefined
- 会忽略symbol
- 如果对象属性为Function,因为JSON格式字符串不支持Function,在序列化的时候回自动删除;
- 诸如Map, Set, RegExp, Date, ArrayBuffer和其他内置类型在进行序列化时会丢失
- 不支持循环引用对象的拷贝.
```







##### 4.1 JSON深拷贝缺点

```js
https://www.jianshu.com/p/52db1d0c1780
```

###### 1  属性值对象里有时间对象

```js
JSON返回结果是字符串形式,不是对象形式

let test = {
  name: 'e',
  data: [new Date(1536627600000), new Date(1540047600000)]
};

let result = JSON.parse(JSON.stringify(test));
console.log(b);

{name: "e", data: Array(2)}
{name: "e", ["2018-09-11T01:00:00.000Z", "2018-10-20T15:00:00.000Z"]  }

```



###### 2 属性值对象里有正则缩写,Error对象

```js
//序列号结果得到空对象
const test = {
  name: 'e',
  data: new RegExp('\\w+')
}
const result = JSON.parse(JSON.stringify(test));
test.name = 'test';
console.log(result); //{name: 'e', data: {}}
```



###### 3 属性值对象里有函数,undefined

```js
//
const test = {
  name: 'e',
  data: function fn() {
    console.log('fff');
  },
 	obj: {a: undefined}
}

const result = JSON.parse(JSON.stringify(test));
test.name = 'test';
console.error('ddd', test, result);
//result的打印结果是
{name: 'e', obj: {}}
//test打印结果
{name: 'e', obj: {a: undefined}, data:fn()}
```



###### 4 如果属性值对象里由NaN, Infinity和-Infinity, 序列化结果是变成null



###### 5 不可枚举属性

JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；

```js
function Person(name) {
  this.name = name;
  console.log(name);
}

const lilai = new Person('lilai');

const test = {
  name: 'a',
  data: lilai,
}

const result = JSON.parse(JSON.stringify(test));
test.name = 'test';
console.log(test, result);
```



###### 6 对象中存在循环引用的情况也无法实现深拷贝



#### 总结

序列化JS对象,所有函数和原型成员对象会被忽略.能被深拷贝的数据类型有**字符串,数值,布尔值,扁平对象.**

性能问题:  尽管使用深拷贝会完全的克隆一个新对象，不会产生副作用，但是深拷贝因为使用递归，性能会不如浅拷贝，在开发中，还是要根据实际情况进行选择

