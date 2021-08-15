## ES5

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

```js
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

var thingPad={
    name: 'ThinkPad',
    price: 4000
};
Object.definedProperties(thinkPad, {
    //添加属性
    screen:{
        value:'14inch',
        writable: true,
        configurable: true,
        enumerable: true
    },
    
    weight: {
        get: function(){return '1.5kg';}
    }
});

console.log(thinkPad);
console.log(thinkPad.weight);
```





#### 案例

```js
//要求添加 total 属性, 获得班级的总分数
var banji = {
    name: 'HTML',
    scores: [
        {
            name: '张三',
            score: 90
        },
        {
            name: '李四',
            score: 85
        },
        {
            name: '王五',
            score: 95
        },
        {
            name: '赵六',
            score: 88
        }
    ]
};

Object.defineProperties(banji, {
    total:{
        get:function(){
            var total = 0;
            for(var i=0; i<banji.scores.length; i++){
                total += this.scores[i].score;
            }
			return total;
        }
    }
})

console.log(banji.total);
```







### call-apply-bind

```js
-bind使用方式与call和apply相同, 返回结果是新的函数
-复制函数时,要想到bind
-bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

function add(a,b,c){
    console.log(this);
    console.log(a+b+c);
}

//调用函数
add(1,2,3);// window, 6
add.call({}, 1,2,3); //{}, 6
add.apply({}, [1,2,3]); //{}, 6
var fn = add.bind({name:'test'});
fn(3,4,5);// {name: 'test'}  12
```







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

> 解构赋值: ES6允许按照一定模式从==数组和对象==中提取==属性/值==, 对==变量==进行赋值, 这被称为解构赋值[Destructuring].
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





#### Array.prototype.filter

```js
reference:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- 所有返回true或等价于true的值的元素创建一个新数组.

filter为数组中每个元素调用一次callback函数,并利用所有使得callback返回true或等价于true的值的元素创建一个新数组. 

filter不会改变原数组,它会返回过滤后的新数组.
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
console.log(s2); //log结果: Symbol(aa)
console.log(typeof s2); //symbol

//每个返回的symbol值都是唯一的,所以相同值的symbol比较运算,返回false.
Symbol('aa') === Symbol('aa') //false
```





### 2.Symbol创建对象的属性和方法

> Symbol唯一且合理的使用方式, 是为对象添加[属性]
>
> 调用Symbol()函数时,也可以传入一个字符串参数作为对符号的描述,将来可以通过这个字符串来调试代码.但这个字符串参数与符号定义或标识符无关.
>
> 属性:值为基本数据类型的
>
> 方法:函数

```js
//要求: 向对象中添加方法up
//使用symbol为对象obj属性的两种方式: 对象块作用域外: obj[属性名称];  对象块作用域内: obj{[s]:值}

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



### Symbol内置属性

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



### symbol为什么没有包装类型

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





### 迭代器

在JS中是一种特殊的方法

迭代器(Iterator)是一种接口, 为各种不同的数据结构提供统一的访问机制.==任何数据结构==只要部署iterator接口,就可以完成遍历操作.

1.ES6创造了一种新的遍历命令for...of循环, 

2.原生具备iterator接口的数据(可用for of遍历): Array Arguments Set Map String TypeArray NodeList

==需要自定义遍历数据的时候, 要想到迭代器==



### for...of

**`for...of`语句**在[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)（包括 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)，[`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)，[`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)，[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)，[`TypedArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)，[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

```js
//语法
for(variable of iterable){
  //statements
}
variable 在每次迭代中,将不同属性的值分配给变量
iterable 被迭代枚举其属性的对象
```

迭代Array

```js
let iterable = [10,20,30];
for(const value of iterable){
  value += 1;
  console.log(value);
}//11 21 31

如果你不想修改语句块中的变量 , 也可以使用const代替let
```

迭代string

```js
let iterable = 'boo';
for(let value of iterable){
  console.log(value);
}//'b' 'o' 'o'
```

迭代Map

```js
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ["a", 1]
// ["b", 2]
// ["c", 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```



关闭迭代器

对于`for...of`的循环，可以由`break`, `throw continue `  或`return`终止。在这些情况下，迭代器关闭。





#### 迭代器工作原理

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





### set集合

> ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了iterator接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，
>
> 无法使用普通for循环, 因为==set是无序==的.  集合是键值对形式,但是键值是一样的.



```js
//声明集合
const s =new Set(); //打印结果: Set(0) {}
const s1 =new Set([1,2,3,4,1,2,3]); //打印结果: Set(4) {1, 2, 3, 4}

//1.size  元素个数
console.log(s1.size);//4 自动去重后的结果

//2.add() 添加  更改的是原set结构
s1.add(5);
console.log(s1);// Set(5) {1, 2, 3, 4, 5}

//3.delete 删除
s1.delete(1);
console.log(s1); //Set(3) {2, 3, 4}

//4.has() 检测集合是否包含某个元素
console.log(s1.has(2));//true

//5. clear() 清空
s1.clear();
console.log(s1); //Set(0)

//6. for..of遍历

for(let i of s1){
    console.log(i);//遍历的是集合里的值
}

7.扩展运算符 ...  展开集合
let arr = [...s1];
console.log(arr);//[1, 2, 3, 4]
```



### Set类型案例

```js
//1.数组去重
const arr = ['大事儿','小事儿','好事儿','坏事儿','小事儿'];
const arr2 = [...new Set(arr)];

//2.取交集
let arr = [1,2,3,4,1,2];
let arr2 = [3,4,5,6,4,3];

let jiaoji = [...new Set(arr)].filter(item=>{
    let s2 = new Set(arr2);
    if(s2.has(item)){
        return true;
    }else{
        return false;
    }
});

console.log(jiaoji);


//3. 求并集
let arr = [1,2,3,4,1,2];
let arr2 = [3,4,5,6,4,3];

let union =[...new Set([...new Set(arr), ...new Set(arr2)])];
console.log(union);

//4.差集  以a集合为主, a集合里有的b集合里没有,a集合里的这部分就是差集. arr与arr2差集是1和2,以arr为主arr2为从.
let diff = [...new Set(arr)].filter(item=>!(new Set(arr2)).has(item))

let inter =[...new Set(arr)].filter(item=>{
    let s2=new Set(arr2);
    return !s2.has(item);
})
```





### Map数据类型

> 它类似于==对象和集合==，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map也实现了iterator接口，所以可以使用『扩展运算符』和『for…of…』进行遍历
>
> 使用场景: 缓存.

 

#### 声明

```HTML
let m = new Map(); //创建映射
console.log(m);//Map(0) {}
```



#### 返回元素个数size

```js
let count = m.size;
console.log(count);
```



#### 设置元素set

```js
- 键值对形式
- 增加一个新元素, 返回当前mMap

m.set('name', 'target');
let key ={n:'school'};
m.set(key, function(){alert('nihao')})

console.log(m)
```





#### 获取元素get

```js
console.log(m.get('name'));
console.log(m.get(key));

如果map映射中键的值是个对象,那么使用m.get()方法无法获取到这个对象的值,会返回undefined.
例如:
let m =new Map();
m.set({name:'guigu'}, function(){console.log('print')});
m.get({name:'guigu'});//log结果: undefined. 因为不是同一个对象,是两个地址.解决方法:变量传递.

//变量传递
let m = new Map();
let key = {name:'guigu'};
m.set(key, function(){console.log('print')})
console.log(m.get(key));//function()
```



#### 删除元素delete

```js
m.delete('name');
console.log(m);
```



#### 检测是否包含has

```js
m.has('name');//有返回true,没有返回false
```



#### 元素个数

```js
console.log(m.size);//
```



#### 清空clear

```js
m.clear();
console.log(m);//
```









### 对象声明

> ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已.



#### class要点

```
类中的赋值语句是加到实例上的,相当于在构造器中添加了this.变量=值的形式

类中的4种方法: 构造方法,一般方法, 赋值语句, 静态属性


```





#### ES5 对象声明

```js
//构造方法
function Phone(brand, price){
    this.brand = brand;
    this.price = price;
}
//原型添加方法
Phone.prototype.call = function(someone){console.log('可以给'+someone+'打电话')}
Phone.prototype.sendMessage = function(somebody){console.log('`我可以给${somebody}发送短信`')}

//实例化
const hw = new Phon('华为', 2500);
console.log(hw);

```



#### ES6 class类的声明

```js
//类的声明 里面只有构造方法和一般方法

class Phone{
    constructor(brand, price){//构造方法,名字constructor不能修改.且构造方法只能有一个.
        this.brand = brand;//实例化参数
        this.price = price;
    }
    
    //声明成员方法  一般方法
    call(someone){
        //代码体
        console.log('可以给'+someone+'打电话');
    }
    
    sendMessage(somebody){
        console.log(`可以给${somebody}发短信`);
    }
    
}
//实例化对象
let xiaomi = new Phone('xiaomi', 5000);
console.log(xiaomi);//log结果:{brand: "小米", price: 5000}
```







### 对象的静态属性和方法

> 静态成员是属于类(构造函数)的, 不属于实例对象(通过new创建的对象)

```js
-ES5添加构造函数属性

function Phone(){
     //添加属性 静态成员
     Phone.name='手机';
     Phone.change=function(){console.log('改变了世界');}
 }

console.dir(Phone);//属于构造函数对象的,静态成员
```





```js
- ES6 添加静态成员(也就是给类添加的)

class Phone{
    //构造方法不是必须的.
    //关键字: static
    static name='手机';
	static change(){console.log('改变了世界')}
}

console.dir(Phone);
console.log(Phone.name);//log结果: 手机
Phone.change();//log结果: 改变了世界

let oppo = new Phone();
console.log(oppo);//Phone {} 可以看出没有静态成员.所以静态成员是属于类的,不属于实例.
```









### 对象继承

#### ES5 对象继承

```js
- 原型继承,继承父类的方法;
- 借用构造函数继承: 在子类中去调用父类的构造函数,使用call方法劫持子类中的this指向.

//手机类
function Phone(brand, price){
    this.brand = brand;
    this.price = price;
}
Phone.prototype.call = function(someone){console.log('可以给'+someone+'打电话')}
Phone.prototype.sendMessage = function(somebody){console.log('`我可以给${somebody}发送短信`')}

//智能手机
function SmartPhone(brand, price, screen, pixel ){
    //如果要继承父类, 需要先调用父类的函数
    Phone.call(this, brand, price);
    //子类属性初始化
    this.screen=screen;
    this.pixel=pixel;
}

//方法
SmartPhone.prototype=new Phone();
SmartPhone.prototype.constructor=SmartPhone;

//添加子类独有的方法
SmartPhone.prototype.playGame=function(){console.log('我可以玩游戏');}
SmartPhone.prototype.surfInternet=function(){console.log('我可以上网');}

const vivo = new SmartPhone('vivo', 3000, '5.6inch', '3000w');
vivo.call('aa');
vivo.sendMessage('bb');
```



#### ES6 对象继承

```js
- 静态属性的继承

class Phone{
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    call(){console.log('打电话')};
    sendMessage(){console.log('发短信')};
    
    static namefm = 'mobile';
}

class SmartPhone extends Phone{
    constructor(brand, price, screen, pixel){//初始化
        super(brand, price);//父类构造方法的调用 super之前不能有this出现,否则报错
        this.screen = screen;
        this.pixel = pixel;
    }
    
    playGame(){console.log('paly games')}
    surfInternet(){console.log('surf Internet')}
    
}

const onePlus = new SmartPhone('1+', 3999, '6.5inch', '4800w');
console.log(onePlus)

//使用子类获取父类的静态成员
console.log(onePlus.namefm)



========================================================
//父类
class Phone(brand, price){
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    
    call(someone){
        console.log('可以打电话');
    }
    sendMessage(someone){
        console.log('可以发短信');
    }
}

class smartPhone extends Phone{
    //子类的构造方法
    constructor(brand, price, screen, pixel){
        //调用父类的构造方法,初始化
        super(brand, price);
        
        this.screen = screen;
        this.pixel = pixel;
    }
    
    //方法声明
    palyGame(){console.log('可以玩游戏');}
    surfInternet(){console.log('可以上网');}
}

//实例化
const onePlus = new smartPhone('1+', 3999, '5.5inch', '5000w');
console.log(onePlus);
```







#### class的set-get

```js
- 静态成员是属于类的, 不属于实例对象

class Phone{
    get price(){return this.jiage;}
    set price(v){this.jiage = v;}
    
    static get storage(){return this.cun;}
    static set storage(v){this.cun = v;}
}

Phone.storage = 128g;
console.log(Phone.storage);//



====================================
class Computer{
    //对实例对象的price属性进行动态控制
    //什么时候触发? 当在获取实例属性的时候
    get price(){
        return this.jiage; //类对象内部, this指向实例对象.实例化对象调用
    }
    //price属性设置
    set price(v){//形参获取设置的值.
        this.jiage = v;
    }
    
    //静态成员也可以通过get和set控制. 
    //静态成员方法什么时候触发? 当在获取静态成员属性时,自动触发.(如果是方法也不需要添加调用括号.)
    //静态属性如何获取? 通过类
    static get storage(){
        return this.cun;
    }
    
    static set storage(v){
        this.cun = v;
    }
}

const weixing = new Computer();
weixing.price = 200;//自动触发方法
console.log(weixing.price);//200


Computer.storage = '128g';
console.log(Computer.storage);//128g   Computer.storage没有括号调用,自动触发
```







### 数值扩展(了解)

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





### 对象扩展

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



## 拷贝

```js
https://blog.csdn.net/chaopingyao/article/details/105432129
2021.05.27
```



| -      | 和原数据是否指向同一对象 | 第一层数据为基本数据类型 | 原数据中包含子对象       |
| ------ | ------------------------ | ------------------------ | ------------------------ |
| 赋值   | 是                       | 改变会使原数据一同改变   | 改变会使原数据一同改变   |
| 浅拷贝 | 否                       | 改变不会使原数据一同改变 | 改变会使原数据一同改变   |
| 深拷贝 | 否                       | 改变不会使原数据一同改变 | 改变不会使原数据一同改变 |









### 浅拷贝

> 拷贝一般是拷贝==数组和对象==,很少涉及基本数据类型.  浅拷贝和深拷贝的区别, 新对象和旧对象是否还有联系.如果更改新对象, 旧对象也发生了变化.这就是浅拷贝.
>
> 深拷贝与浅拷贝的概念只存在与引用数据类型.

```js
ECMAScript变量包含两种不同数据类型的值:[基本数据类型]和[引用数据类型].
基本数据类型:名值存储于栈内存中;
引用数据类型:名存储于栈内存中,值存储与堆内存中.但是栈内存会提供一个引用地址指向堆内存中的值.
基本数据类型有:Boolean,Number,String,Symbol,Null,Undefined.
引用数据类型有:Object,Array,Function,RegExp,Date.
=============================================================================
- 拷贝就是复制, 对象和数组
- 浅拷贝: 更改拷贝对象后, 被拷贝对象也会发生变化;
- 深拷贝: 更改拷贝对象后, 被拷贝对象不会发生变化;

1.直接赋值
let arr = [1,2,3,4]
let result = arr;
result[0]='000'; //更改拷贝对象, 被拷贝对象arr也会发生变化

2.数组复制(concat,slice, ...扩展运算符) 只能实现一维数组的深拷贝
const arr = [1,2,3,{name: 'atguigu'}];

2.1 concat
const arr2 = [].concat(arr);
let result = arr;
result[3].name='美国硅谷';

console.log(arr);//arr改变

2.2 slice
const result = arr.slice(0);
result[3].name = '美国硅谷';

console.log(arr);//arr改变

2.3 扩展运算符 //扩展运算符拷贝数组的时候,如果数组里有对象.更改拷贝后的数组,原数组也会发生变化.如果数组都是基本数据类型, 数字是基本数据类型,不可变.对象是引用类型,引用的地址.
const arr = [1,2,3,{name: 'guigu'}];
const result =[...arr];
result[3].name = '美国硅谷1';
console.log(arr);//美国硅谷1

//扩展运算符 搭配
const arrOld = ['a', 'b', 'c'];
const arrNew = [...arrOld];
console.log(arrOld === arrNew);//false
arrNew[0]='d';
console.log(arrOld);//['a', 'b', 'c']; 原数组不会发生变化
    




===================================================================
3. 对象复制 Object.assign方法 //只能实现一维对象的深拷贝
const school={
    name: '美国硅谷',
    pos: ['北京','上海','深圳'],
    founder: {
        name:'刚哥',
        age: 45
    }
};
const result = Object.assign({}, school);
result.pos[0]='beijing';
console.log(school);//scholl.pos[0]发生变化

```





### 深拷贝-JSON

> 使用JSON实现深拷贝.   
>
> JSON深拷贝缺点: 无法拷贝对象里的方法

#### 1. JSON方式

```js
- 会忽略undefined
- 会忽略symbol
- 如果对象属性为Function,因为JSON格式字符串不支持Function,在序列化的时候回自动删除;
- 诸如Map, Set, RegExp, Date, ArrayBuffer和其他内置类型在进行序列化时会丢失
- 不支持循环引用对象的拷贝.
```



```js
- JSON方法
JSON.stringify() 将字符串转换成对象 typeof类型是string 利于数据的传递和持久化保存
JSON.parse() 将对象转换成字符串



//源对象  
const school = {
    name: 'abc',
    pos: ['北京','上海','深圳'],
    founder: {
        name:'创始人',
        age: 45
    },
    improve: function(){
        console.log('提升');
    }
};
//将对象转换为字符串
const str =JSON.stringify(school);
//将JSON字符串转换为新的对象
const result = JSON.parse(str);
//修改新对象的属性
result[3].name='beijing';
console.log(school);//原对象school没有发生改变

//stringify和parse组合写法:
const result=JSON.parse(JSON.stringify(school));
```



#### 1.1 JSON深拷贝缺点

```js
https://www.jianshu.com/p/52db1d0c1780
```

#### 1.1.1  属性值对象里有时间对象

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



#### 1.2 属性值对象里有正则缩写,Error对象

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



#### 1.3 属性值对象里有函数,undefined

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



#### 1.4 如果属性值对象里由NaN, Infinity和-Infinity, 序列化结果是变成null



#### 1.5 不可枚举属性

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



#### 1.6 对象中存在循环引用的情况也无法实现深拷贝



#### 1.7 总结

序列化JS对象,所有函数和原型成员对象会被忽略.能被深拷贝的数据类型有**字符串,数值,布尔值,扁平对象.**







### 深拷贝-普通方法



```js
- 普通方法

const school = {
    name: 'aaa',
    pos: ['北京','上海','深圳'],
    founder: {
        name:'创始人',
        age: 45
    },
    improve: function(){
        console.log('提升');
    }
};

//创建一个容器
let container ={};
//添加属性 name
result.name = school.name;
//添加属性pos
//result.pos= school.pos; 错误写法,都指向了属性值的地址.更改新对象会影响到旧对象.解决方法,赋值为空.
result.pos=[];
result.pos[0]=school.pos[0];
result.pos[1]=school.pos[1];
result.pos[2]=school.pos[2];

//添加属性founder
result.founder={};
result.founder.name=school.founder.name;
result.founder.age=school.founder.age;

//添加方法
result.improve=school.improve.bind(result);
```



### 深拷贝-递归

```js
- 递归方法

const school = {
            name: 'aaa',
            pos: ['北京','上海','深圳'],
            founder: {
                name:'创始人',
                age: 45
            },
            improve: function(){
                console.log('提升');
            }
        };


//封装函数 深度拷贝对象
function deepClone(data){
    let container;
    let type = getDataType(data);
    if(type === 'Object'){
        container = {};
    }
    if(type === 'Array'){
        container === [];
    }
    
    for(let i in data){
        let type = getDataType(data[i]);
        if(type === 'Array' || type === 'Object'){
            container[i]=deepClone(data[i]);
        }else if(type === 'Function'){
            container[i]=data[i].bind();
        }else{
            container[i]=data[i];
        }
    }
}

//封装函数判断对象的数据类型
function getDataType(data){
    return Object.prototype.toString.call(data).slice(8, -1);
}
//typeof的弊端: 对象和数组返回的都是object,无法细分
//数据类型获取的方法 Object.prototype.toString
//改变this指向,固定写法: Object.prototype.toString.call(目标数据) 返回值样式[object Object]

//使用封装函数,实现对象的深拷贝
console.log(deepClone(school);
```





```js
https://github.com/coffe1891/frontend-hard-mode-interview/blob/master/1/1.3.1.md


```

