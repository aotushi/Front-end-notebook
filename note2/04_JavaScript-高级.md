## 1111

### 单词

> anonymous 美[əˈnɑːnɪməs] adj.匿名的
>



程序的执行和代码的执行不是一回事.

代码的执行需要环境:全局环境和函数环境  全局作用域就是全局环境的作用域



```Markdown
Chrome开发者工具
call Stack 执行栈
anonymous  全局执行上下文环境(window执行环境)
scope 作用域链
	Global 全局作用域
	closure(闭包)
	local(代表当前)
```





代码的解析做了3件事: 程序先执行 解析代码 创建(1.全局执行上下文环境 ; 2.....)

创建执行环境都要经历3件事: 

1.收集变量生成变量对象(预解析只是这个环节的一部分)

2.确定this指向(确定执行者)

3.确定当前环境的作用域链

执行环境创建完, 再创建全局执行环境,入栈.

```HTML
<script type="text/javascript">
    var a = 10;
    var b = 20;
    function fn() {
      var a = 100;
      b = 200;
      function fn1() {
        var c = 300;
        console.log(a,b,c);//  100 200 300
      }
      fn1();
    }
    fn();
</script>

- fn1不用fn的变量,fn不会出现在fn1的作用域链上

案例解释:
预解析的时候 fn()函数在堆里存了函数,在栈里存了变量指向函数地址


左栈右堆

1.堆里存在一个函数fn
2.解析函数fn 地址0x100
3.栈里 调用了函数fn 先去堆里通过函数地址找函数内容.
4.函数内容先从堆里出来做解析:3件事
5.3件做完, 函数环境才生成
6.把这个函数环境压入栈内. 栈里就多了一个函数fn的执行环境,代码才又回到栈里执行.
```





执行上下文 执行上下栈 预解析 作用域 作用域链

### 执行上下文

执行上下文(执行上下文环境)//有两种: 全局环境 函数环境

程序在解析和运行的时候所依赖和使用的环境

全局执行上下文环境和函数执行上下文环境(全局环境和函数环境)



### 执行上下文栈(执行栈,call Stack)

程序为了管理执行上下文(确保程序的执行顺序)所创建的一个栈数据结构,被称作执行上下文栈.



### 预解析(变量声明提升)

先解析函数:函数重名覆盖

再解析变量 变量重名忽略. 函数是一等公民, 变量名和函数名重名,忽略变量名.



```js
function a(){}
var a;
console.log(a); //ƒ a(){}
变量名和函数名重复,忽略变量名,所以打印的是函数a. 函数是一等公民,两个function a,后面的覆盖前面的.

function a(){}
var a = 10;
console.log(a);//10

简化:
function a(){}
var a;
a = 10;
console.log(a);
变量a开始是函数a,但赋值是执行的.故打印的10.
```



### 作用域

> 抽象的概念, 代码定义的时候作用域就定死了

变量起作用的范围;

作用域: 隔离变量,防止变量命名污染

**作用域定义时候确定**





### 作用域链

真实存在的,作用域链是使用执行上下文当中变量对象所组成的链条结构(数组结构) //scope: local - closure - Global

查找的时候其实真正是先去自身的变量对象当中查找.如果没有, 去上级执行上下文的变量对象当中查找, 直到找到全局执行上下文的变量对象.    函数调用的时候上一级的变量对象其实是在函数定义的时候都已经确定好的(与函数调用位置无关,  )



作用域链什么时候确定的,在函数定义时候确定的.



### 程序开始执行(全局环境和函数环境)

#### 全局执行上下文(分为创建阶段和执行阶段)

##### 1.全局执行上下文 压入执行上下文栈

创建上下文阶段:

1. 收集变量形成变量对象( 函数 var的变量会收集)
   1. 预解析(其实在创建变量对象的时候已经做了预解析)
2. 确定this的指向(可以认为确定执行者)
3. 创建自身执行上下文的作用域链
   * 注意: 同时确定函数在调用时候的上级作用域链(根据ECMA词法去确定, 看内部是否引用外部变量来确定)



##### 2.执行全局执行上下文

执行全局上下文阶段:

为变量真正赋值

顺着作用域链查找要使用的变量或者函数执行



#### 函数执行上下文

##### 1.函数执行上下文压栈

1.1.收集变量(var 形参 arguments 函数)

1.2.确定this的指向(可以认为确定执行者)

1.3.创建自身执行上下文的作用域链. 注意:同时确定函数在调用时候的上级作用域链.(根据ECMA词法去确定, 看内部是否引用外部变量来确定)



函数的作用域链: 自己定义的时候已经确定了函数在调用时候的上级作用域链.因此, 在函数调用的时候,只需要将自己的变量对象添加上级作用域链的顶端.就形成了自己的作用域链.



##### 2.执行函数执行上下文

为变量真正赋值

顺着作用域链查找要使用的变量或者函数执行



全局:创建全局执行上下文 -- 全局执行上下文压栈--执行全局执行上下文

函数:创建函数执行上下文 -- 函数执行上下文压栈 -- 执行函数执行上下文 -- 函数执行上下文出栈 -- 执行全局执行上下文 -- 全局执行上下文出栈



### 上下文实例

```js
var x = 10;
function fn() {
    console.log(x);
}
function show(f) {
    var x = 20;
    f();
}
show(fn); //10
=========================================
var a;
function a() {}
console.log(typeof a)// function
===========================================
if (!(b in window)) {
    var b = 1;
}
console.log(b)//条件判断没有作用域,条件判断式为false. b没有定义, 输出为undefined
============================================
var c = 1;
function c(c) {
    console.log(c)
    var c = 3
}
c(2)//c is not a function

简化:
函数变量提升:
function c(c) {
    console.log(c)
    var c = 3
}
var c;
c = 1;
c(2) //可以看出此时的c为1,所以输出结果是c is not a function

=====================================================
var fn = function () {
    console.log(fn)
}
fn()//ƒ () {console.log(fn)}  

======================================================
function fn(){console.log(fn)};
fn();// ƒ fn() {console.log(fn)}  

====================================================    
var obj = {
    fn2:function () {
        console.log(fn2)
    }
}
obj.fn2()//fn2 is not a defined;    
    
  
```





### 终极原型链

* 终极原型链图:

![终极原型链](https://i.loli.net/2020/11/11/FEKHg4ewqOSCWYR.png)



#### 原型链理解流程:

1.构造函数Computer的**显式原型对象**prototype的地址是0X200, 原型对象中的**构造器constructor**包含的是构造函数.

​	 故,构造函数和原型对象是相互指向的.

2.构造函数Computer的实例化对象c1的**隐式原型对象\__proto\_\_ ** , 指向构造函数的prototype.

 	故, \__proto__的地址是指向构造函数的prototype的.

3.**所有对象都是Object的实例,或者说是由Object创建的.**  

​	故,Computer的prototype是Object(0x004)的实例化对象. (0x200是Object的实例化对象)

​	Object又是构造函数, 所以有原型对象0x500. 相互指向.

​	故, Computer的显示原型对象的\_\_proto\_\_的地址是0x500.

4.所有对象都是Object创建的.

​	故, 0x500既是0x400的原型对象,又是其实例. (所以添加了一条new线条. 实例创建)

​	实例化对象的隐式原型指向其构造函数的显式原型

​	0x500的隐式原型指向0x400的显式原型, 是同一个对象

​	对象Object实例的隐式原型\_\_proto\__(0x500),    是构造函数0x400的prototype(0x500).

这是一个死循环,所以在设计的时候将Object实例化对象的\_\_proto\__的值设置为==null==

5.js中有一个专门构造函数的构造函数Function. 无论什么方式声明的函数本质上都是new Function.

构造函数Function地址:0x600, 其原型对象0x700.

故, 0x100是0x600(Function)的实例化对象. (new)

故,0x100的隐式原型(\_\_ proto\__)指向0x600(Function)的显式原型0x700.

6.**Object对象也是Function的实例对象**.new

故,0x400(Object)的隐式原型\__proto\_\_指向0x600(Function)的显式原型0x700.

7.0x700是一个对象. 是对象就是Object的实例,new

故,实例具有的隐式原型对象\__proto\_\_ 指向其构造函数(Object)的显式原型0x500.

8.**Function是哪里来的?**

Function是自己new了自己, 自己既是自己的构造函数,也是实例化对象.(既是构造函数, 又是实例化对象)

既是实例化对象,自身具有的\__proto\_\_指向的是构造函数的prototype.

故,` Function.prototype === Function.__proto__`



### 面向对象

面向对象语言的3大基本特征: 封装 继承 多态

类, 严格意义上来说,JS当中是没有类的概念的.但是我们可以将构造函数当做类来使用

到了es6版本,才有了class类的关键字. 其实es6的class也是构造函数, 就是个语法糖.







### 继承

```HTML
- 原型继承
让父类的实例作为子类的原型, 将子类的原型构造器补充完整(为了让子类继承方法)

- 借用构造函数继承
在子类当中去调用父类的构造函数, 当普通函数调用(为了让子类继承属性)

- 混合继承
原型继承, 借用构造函数继承一起使用
```



```js
//父类

//定义一个类
function Animal(name){
    //
}
```







#### 原型继承

核心: 将父类的实例作为子类的原型

缺点: 

 1.子类新增属性或方法,必须在new Animal()之后执行,不能放到构造器中;

 2.无法实现多继承

 3.来自原型对象的所有属性被所有实例共享

 4.创建子类实例时, 无法向父类构造函数传参

```js
function Animal(name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function () {
    console.log(this.name + '正在睡觉!');
  }
}

// 原型方法
Animal.prototype.eat = function (food) {
  console.log(this.name + '正在吃' + food);
}

// 1.原型链继承  子类原型=父类实例
function Cat() { }

Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal);
console.log(cat instanceof Cat)
```





#### 借助构造函数继承

核心: 使用父类的构造函数增强子类实例, 等于是复制父类的实例给子类(没用到原型)

缺点:

 1.只能继承父类的实例属性和方法,不能继承原型的属性/方法

 2.无法实现函数复用,每个子类都有父类实例函数的副本,影响性能

```js
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());//undfined
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true

```





#### 混合继承

就是将原型继承和构造函数继承一起用.

```js
//父类
function Dog(name, age, color){
    this.name = name;
    this.age = age; 
    this.color = color;
}
Dog.prototype.run = function(){
    console.log(`${name}今年${age}岁了,颜色是${color}`);
}
//子类
function Taidi(name, age ,color){
    //this.name =name;
    //this.age = age;
    //this.color = color;
    //使用父类.call方法代替以上的3个this
    //本作用域中的this指向Taidi的实例化对象,也就是call中的this 
    Dog.call(this, name , age , color);
}

Taidi.prototype = new Dog();
Taidi.prototype.constructor = Taidi.
//子类的实例化对象(t1)调用一个方法,自己没有,顺着原型链找到其构造函数(Taidi)的显示原型(prototype).
//但是现在构造函数的显式原型, 被我们指向父类的实例, 所以:
//通过子类的实例化对象(t1)调用一个方法,自己没有,顺着原型链,找到父类Dog的实例化对象.
//如果这个Dog的实例化对象也没有这个方法,则会顺着这个实例化对象的隐式原型, 找到Dog的显式原型.
//这种只能继承方法

//缺点: 如果存在一种场景,需要知道当前实例是由谁构造出来的,所以需要手动给这个实例添加一个构造器.
// Taidi.prototype是Dog的实例, Taidi的__proto__指向Dog构造函数,Taidi的__proto__的__proto__就是Dog函数的




var dog1 = new Dog('wangcai', 1, 'black');
console.log(dog1); //Dog {name: "wangcai", age: 3, color: "black"}
dog1.run();//跑得快

var t1 = new Taidi('abc', 1, 'brown');
console.log(t1);//Taidi {name: "ritian", age: 1, color: "brown"}
t1.run();//跑得快
```







## 1113

### 闭包

#### 闭包3大要素

1. 函数存在嵌套关系

2. 内部函数引用外部函数的局部变量

3. 外部函数必须调用.  //内部函数作为外部函数的**返回值**, 或直接在外部函数中**调用**内部函数, 或将外部函数返回值(内部函数) 赋值给一个**参数**

```html
<script type="text/javascript">
    function fn() {
        var a = 0;
        function fn1() {
            a++;
            console.log(a)
        }
        return fn1; //fn1() 这种形式也是可以的
    }
</script>    
```

#### 闭包数量

究竟存在几套闭包, 取决于外部函数执行了几次



#### 闭包是什么

理解1: 闭包是嵌套的内部函数(不完整)

理解2: 包含被引用变量(外部函数)的对象(不完整)

理解3: 所谓的闭包是一个**引用关系**, 该引用关系存在于**内部函数**中,  引用的是外部函数的**变量对象**.



#### 闭包常见形式

1.将函数作为另一个函数的返回值

2.将函数作为实参传递给另一个函数调用  //call

3.使用闭包实现私有方法操作独立的私有属性



#### 闭包的作用

1.延长外部函数的生命周期

2.让函数外部可以操作(读写)到函数内部的数据(变量/函数),通过闭包间接的操作

3.注意： 浏览器为了性能后期将外部函数中不被内部函数使用的变量清除了



#### 闭包生命周期

1.产生: 在嵌套内部函数定义完时就产生了(不是在调用外部函数调用的时候)

2.死亡: 在嵌套的内部函数成为垃圾对象时  //赋值null



#### 闭包的缺点和解决

内存泄露: 内存无法释放

内存溢出: 内存被撑爆

**解决方式**:  让闭包机制清楚, 必须删除外部函数调用的时候生成定义的那个对应的内部函数



#### 实例1

```HTML
<script type="text/javascript">
    function fn() {
        var a = 0;
        function fn1() {
            a++;
            console.log(a)
        }    
        return fn1; //fn1()效果等同于return fn1;
    }
    
fn();//1  fn的第一次执行 和fn1的第一次执行 形成了闭包
fn();//1  fn的第二次执行 和fn1的第二次执行 形成了闭包
fn();//1
    
    
var f = fn(); //将外部函数fn()执行返回值内部函数,赋值给了变量f. fn执行了一次,fn1执行了3次,因为fn1使用外部变量,所以外部函数fn没有在栈内创建新的执行环境. . 
//堆里不存在嵌套关系    
f();// 1  内部函数fn1执行, 外部函数没有消失.a++自增后的值,加给了fn函数中的变量a.
f();// 2  fn中的变量a由1-->2
f();// 3
    
# 闭包有几个,取决于外部函数执行了几次.  

```





#### 实例2面试题

```js
var name = 'The Window';
var object = {
	name: 'My Object',
    getNameFunc: function(){   
        return function(){
            return this.name;
        }
    }
}

console.log(object.getNameFunc()()); //'The Window'
解析:
1.不存在闭包,因为内部函数没有引用外部函数的局部变量
2.object.getNameFunc()是匿名函数,加括号是函数调用.一般函数调用,this是指window.
```



```js
- 1115添加

var name = 'The Window';
var object = {
    name: 'My Object',
    getNameFunc: function(){
        console.log(this);   //方法形式调用下的this {name: "My Object", getNameFunc: ƒ}
        console.log(this.name);//'My Object'
        return function(){
            return this.name; //'函数形式调用下的this
        }
    }
}

console.log(object.getNameFunc()());//
```





```js
var name2 = 'The Window';
var object2 = {
    name2: 'My Object',
    getNameFunc: function(){
        var that = this;   //写法: _this = this;向上找一级 __this = this; 向上找两级
        return function(){
            return that.name2;
        };
    }
};
console.log(object2.getNameFunc()());//'My Object'
解析:
1.存在闭包函数,内部函数引用了外部变量that,而它有保存了当前作用域中的this.谁调用它谁就是this,object2.getNameFunc()是用方法形式调用的,this就是调用方法的对象,就是object2.
故, return that.name2就是使用了object2的name变量.
```



```js
function fun(n, o){
    console.log(o);
    return{
        fun:function(m){
            return fun(m, n)
        }
    }
}
var a = fun(0)
a.fun(1)  //0
a.fun(2)  //0	
a.fun(3)  //0
解析:
1. fun(0),形参o没有值.所以输出是undefined. 返回值是一个对象,赋值给a 
2. a.fun(1), 调用的是对象的方法,执行的是function(m)函数. 返回值的函数是最外部的函数fun. m是1,n是0,m和n是实参,对象是没有作用域的,内部函数的变量n找外部函数的n,为0.
3. a.fun(1) 执行,console输出0之后,又返回一个新的对象.但新的对象没有保存,也就是n=1, o=0的环境没有保存, 返回的对象和第二次调用fun()的环境,产生了闭包.没存对象,就是没有闭包.

4.n=0, o=undefined 和a这个对象上的fun是闭包.
fun(0)的执行环境和a的fun方法形成了闭包

a=fun(0)是函数调用,函数调用创建自己的执行环境, 函数执行后返回一个对象,对象有一个方法, 这个方法对n有引用. 所以是闭包.
    
fun(0)的执行环境 a的fun方法 形成了闭包
fun(1, 0)的执行环境 和新返回的对象中的fun方法形成了闭包.如果是var b = a.fun(1),那么b会和fn(1,0)形成闭包.因为没有保存,所以还是第一次执行环境.

```





```js
function fun(n, o){
    //0, unde
    //1, 0
    //2, 1
    console.log(o);
    return{
        fun:function(m){
            return fun(m, n)
        }
    }
}
var b = fun(0).fun(1).fun(2).fun(3)

fun(0)输出的undefined,返回的是一个对象
相当于obj1.fun(1).fun(2).fun(3)
obj1.fun(1)执行,产生了一个新的函数环境,m是1,n是0.  返回了新的对象obj2
obj2.fun(2).fun(3) obj2和1,0形成了闭包. m传入2,n是1. 
obj3.fun(3) obj3和obj2.fun(2)环境形成了闭包,m传入3, n是2.
```



#### 实例3-知乎

```HTML
<script>
	window.onload = function(){
        var li = document.getElementByTagName('li');
        for(var i=0; i<li.length; i++){
            li[i].onclick = function(){
                alert(i);//每次点击li标签都是5
            }
        }
    }
</script>
</head>
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</body>
for循环属于同步任务, 事件属于异步任务.
异步代码.click事件的监听器函数被调用的时候,for循环早执行完了,这个时候i早已经变成了5.(代码为源文件中的先后顺序,不等于它被执行的顺序)



-  两种解决方案: 定义一个索引变量 / 使用let  / 使用立即执行函数?
<script>
	window.onload = function(){
        var li = document.getElementsByTagName('li');
        for(var i=0; i<li.length; i++){
            li[i].index = i
            li[i].onclick = function(){
                console.log(this.index);
            }
        }
    }
</script>


<script>
	window.onload = function(){
        var li = document.getElementsByTagName('li');
        for(let i=0; i<li.length; i++){
            li[i].onclick = function(){
                console.log(i);
            }
        }
    }
</script>
```





```HTML
<script>
	window.onload = function(){
        var li = document.getElementByTagName('li');
        for(var i=0; i<li.length; i++){
            li[i].onclick = (function(n){
                return function(){
                    alert(i);//
                }
            })(i);
        }
    }
</script>
</head>
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</body>


```



```js
for(var i=0; i<5; i++){
    function a(){
        console.log(i);
    }
}
a();//输出一次5.
//简化:执行顺序入手,for循环先执行了5次,再执行函数a的调用.当函数a调用的时候,i已经是5了,所以输出5.




for(var i=0; i<5; i++){
    console.log(i);
}

for(var i=0; i<5; i++){
    (function(){
        console.log(i);
    })()
} 0 1 2 3 4
//立即执行函数
```






```js
-1116添加 1112例题

for(var i=0; i<3; i++){
    setTimeout(()=> console.log(i), 1); //3,3,3
}

for(let i=0; i<3; i++){
    setTimeout(()=> console.log(i), 1);//0,1,2
}

for(var i=0; i<4; i++){
    (function(){
        setTimeout(function(){
            console.log(i);
        }, 300);
    })(i)//i是实参, 但没有形参接收
}
//异步函数执行,先执行完for循环,再执行setTimeout函数,但每次setTimeout函数都会被保存(?).所以会向上找i的值,i是全局变量,最后一次是4.所以打印了4次4.

for(let i=0; i<4; i++){
    setTimeout(function(){
        console.log(i);
    },0)
}
//let有块作用域 ? 每个i的值会指向函数的地址?. 所以打印的是0,1,2,3.
```







### 自定义模块化

#### 简介

* 具有特定功能的js文件
* 将所有的数据和功能都封装在一个函数内部(私有的)
* 只向外暴露一个包含n个方法的对象或函数
* 模块的使用者, 只需要通过模块暴露的对象, 调用方法来实现对应的功能



#### 自定义模块化方法

##### 返回一个对象, 将内部函数作为对象的方法

##### 将内部函数作为window的方法

​	- 一般是公共方法, 不具有隐私性.







#### 实例

```js
- head.js

function fun(){
    var money = 10000;
    function getMoney(){
        return money;
    }
    function setMoney(a){
        return money += a;
    }
    return{
        getMoney: getMoney,
        setMoney: setMoney
    }
}
```



```js
- footer.js


(function(){
    var money = 20000;
    function getMoney(){
        return money;
    }
    function setMoney(a){
        return money += a;
    }
    window.setMoney = setMoney;
    window.getMoney = getMoney;
})()
```





```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
<!--    <script type="text/javascript" src="header.js"></script>-->
    <script type="text/javascript" src="footer.js"></script>
    <script type="text/javascript">
       var obj = fun();
       console.log(obj.getMoney());
       console.log(obj.setMoney(1000))
//         console.log(getMoney())
//         console.log(setMoney(2000))
    </script>
</head>
<body>
<div class="header"></div>
</body>
</html>
```



### 事件循环机制

#### 多进程和多线程

1.进程: 程序的一次执行, 它占有一片独有的内存空间

2.线程: CPU的基本调度单位, 是程序执行的一个完整流程



##### 进程与线程

1.一个进程中一般至少有一个运行的线程: 主线程

2.一个进程中也可以同时运行多个线程, 我们会说程序是多线程的

3.一个进程内的数据可以供其中的多个线程直接共享

4.多个进程之间的数据是不能直接共享的,可桥接



#### 浏览器进程分类

Firefox, IE: 单进程

Chrome, edge: 多进程



##### 查看浏览器是否多进程

任务管理器-进程



##### 浏览器运行是单线程还是多线程?

都是多线程运行的.



#### JS单线程

* 如何证明JS执行是单线程的?
  * setTimeout()的回调函数是在主线程执行的
  * **定时器, 回调函数**只有在运行栈中的代码全部执行完后才有可能执行  //定时器是同步,回调函数是异步. 事件是同步, 回调是异步.
* 为什么JS要用单线程模式, 而非多线程模式
  * JS的单线程, 和它的用途有关
  * 作为浏览器脚本语言, JS的主要用途是与用户互动, 以及操作DOM.
  * 这决定了它只能是单线程, 否则会带来很复杂的同步问题.//顺序问题
* 代码的分类
  * 初始化代码(同步代码)  
  * 回调代码(异步代码)
* JS引擎执行代码的基本流程
  * 先执行初始化代码: 包含一些特别的代码
    * 设置定时器
    * 绑定监听
    * 发送ajax请求
  * 后面在某个时刻才会执行回调代码



#### 实例

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script type="text/javascript">
//      定时器方法执行 本身是同步的  回调函数的执行是异步的
//      事件的绑定是同步的  但是事件回调函数的触发执行  是异步的
    box.onclick = function () {
          setTimeout(function () {
            console.log('哈哈哈')
        },3000);
    }
    var a = 0;
    for (var i = 0; i < 50000; i++) {
        for (var j = 0; j < 50000; j++) {
            a++;
        }
    }
    console.log(a)
   //setTimeout()
</script>
</body>
</html>
```



 

#### 同步异步

同步: 同步执行完成才会去执行异步

异步: 只要是异步的任务都会有自己的管理模块进行托管



#### 事件循环模型

1.所有代码分类

* 初始化执行代码(同步代码): 包含绑定dom事件监听, 设置定时器, 发送ajax请求的代码
* 回调执行代码(异步代码): 处理回调逻辑

2.JS引擎执行代码的基本流程:

​	初始化代码 ---> 回调代码

3.模型的2个重要组成部分

* 事件管理模块
* 回调队列

4.模型的运转流程

* 执行初始化代码, 将事件回调函数交给对应模块管理
* 当事件发生时, 管理模块会将回调函数及其数据添加到回调队列中





### webworker

webworker模拟多线程

1.H5规范提供了JS分线程的实现, 取名为: Web Worker

2.相关API

* Worker: 构造函数, 加载分线程执行的JS文件
* Worker.prototype.onmessage: 用于接收另一个线程的回调函数
* Worker.prototype.postMessage: 向另一个线程发送消息

每个线程可以向不同线程发送消息, 也可以接收不同线程传来的消息

主线程操作

 发送消息: worker.postMessage(消息可以是任何数据)

 接收消息: worker.onmessage = function(event){console.log(event.date)} //接收到的消息或者数据在时间对象的data属性当中



子线程操作

发送消息: this.postMessage(消息可以是任何数据)

接受消息: this.onmessage = function(event){ console.log(event.data)} //接收的消息或者数据在时间对象的data属性当中



3.不足:

* worker内代码不能操作DOM
* 不能跨域加载JS
* 不是每个浏览器都支持这个新特性



```html
- webworker.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script type="text/javascript">
    console.log('今天晚上吃点啥');
//    var a = 0;
//    for (var i = 0; i < 30000; i++) {
//        for (var j = 0; j < 30000; j++) {
//            a++
//        }
//    }
    
//  构造函数调用  传入用于启动分线程的文件路径
    var myWorker = new Worker('mywork.js');
//  postMessage 由主线程 向子线程  传输数据
    myWorker.postMessage(50000);
//  主线程接收子线程 传回来的数据
    myWorker.onmessage = function (event) {
      console.log(event.data);
    }
</script>
</body>
</html>
```



```js
- mywork.js

function fun(a){
	var b = 0;
	for(var i=0; i<a; i++){
        for(var j=0; j<a; j++){
            b++;
        }
    }
    return b;
}
// onmessage 当主线程向子线程传输信息之后, 这个事件的回调函数就会触发
// 用事件对象上的一个属性来获取主线程post过来的数据, event.data
self.onmessage = function(event){
    var result = fun(event.data);
    self.postMessage(result);
}
```




