### 预编译和执行



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





### 代码执行的两个阶段:

```js
- 代码预编译阶段
- 代码执行阶段
```

**预编译阶段**是前置阶段,会由编译器将js代码编译成可执行的代码.

**执行阶段**的主要任务是执行代码逻辑,执行上下文在这个阶段会全部创建完成.

通过语法分析,确认语法无误后,便会在预编译阶段对javascript代码中的变量的内存空间进行分配,变量提升便是在此阶段完成的.

#### 预编译(执行)注意细节:

* 在预编译阶段进行变量声明
* 在预编译阶段对变量声明进行提升,但是值为undefined
* 在预编译阶段对所有非表达式的函数声明进行提升



```js
//函数声明的函数名与普通对象的变量名没有什么区别（高级编程第三版）。说明函数名可以被变量覆盖。

function a(){}
var a;
console.log(a); //ƒ a(){}   var可以重复声明,如果没有赋值,依然指向第一次的声明.


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



```js
//在javascript中，函数声明及var声明的变量会得到提升。但是函数声明会先于var声明的变量被提升。即便function写在后面
var aa = 22;
function aa(){alert(11)};
console.log(aa); //函数声明先被提升了。而后面的var aa声明覆盖了aa函数，所以打印出来的是22. 函数声明的函数名与普通对象的变量名没有什么区别（高级编程第三版）。说明函数名可以被变量覆盖。

上面的语句在浏览器解析的时候如下:
function aa(){alert(11)};
var aa;
aa=22;
console.log(aa); //22
```



```js
js函数和变量的声明及执行顺序

1.倒叙调用
fn(); //2
function fn(){alert(2)};

2.声明式函数和表达式函数: 声明式函数可以被提升,表达式函数没有函数提升.
fn(); //2
function fn(){console.log(2)};
fn2(); //Uncaught TypeError: fn2 is not a function
var fn2 = function(){console.log(2)};

```



```js
//变量的执行顺序
1.js中全局var声明的为全局变量  函数体内var声明为局部变量（函数外部访问不到）但是，函数体内未用var声明的为全局变量（函数外部可以使用）

function f(){
    alert(a);
    a = 3;
}
f(); //Uncaught ReferenceError: a is not defined

2.函数内部再次声明赋值，会优先使用自己的变量
var a = 1;
function f(){
    alert(a);
    var a = 3;
    alert(a);
};
f(); //undefined 3

3.函数内部再次全局声明，会修改全局变量值
var a = 1;
function fn(){
    alert(a);
    a = 2;
    alert(a);
}
fn(); //1 2

4.函数内全局赋值一次，var声明一次    函数f()内还是会优先使用自己的变量
var a = 1;
function fn(){
    console.log(a);
    a = 2;
    console.log(a);
    var a = 3;
    console.log(a);
}
fn(); //undefined 2 3
console.log(a); //1

5.案例
var a,b;
(function(){
    console.log(a);   //undefined
    console.log(b);   //undefined
    var a=b=3;        //相当于var a=3,b=3 b是全局变量
    console.log(a);   //3
    console.log(b);   //3
})();
console.log(a);      //undefined
console.log(b);      //3
```



```js
//函数形参和函数内部声明的变量或内部定义的函数重名

1.内部声明的变量未赋值,会被形参顶替
function f(x){
    console.log(x)
    var x;
    console.log(x)
}
f(3); //3 3
2.内部声明的变量声明且赋值后,会覆盖之前的形参变量.
function f(x){
    console.log(x)
    var x=4;
    console.log(x)
}
f(3); //3 4

3.内部声明的函数和形参重名(函数声明会被提升到第一行)
function f(x){
    console.log(x)
    function x(){
        console.log('我是函数')
    };
    console.log(x)
}
f(3); 
//打印两次:
ƒ x(){
　　　　console.log("我是函数")
　　}
```















#### 创建执行环境都要经历3件事:

1.收集变量生成变量对象(预解析只是这个环节的一部分)

2.确定this指向(确定执行者)

3.确定当前环境的作用域链

执行环境创建完, 再创建全局执行环境,入栈.







### 执行上下文

> 执行上下文就是当前代码的执行环境/作用域,和作用域链相辅相成. 直观上看,执行上下文包含了作用域链, 同时它们又像时一条河的上下游:有了作用域链,才会有执行上下文的一部分.



执行上下文(执行上下文环境)//有两种: 全局环境 函数环境.  程序在解析和运行的时候所依赖和使用的环境: 全局执行上下文环境和函数执行上下文环境(全局环境和函数环境)



### 执行上下文栈(执行栈,call Stack)

程序为了管理执行上下文(确保程序的执行顺序)所创建的一个栈数据结构,被称作执行上下文栈.















<hr/>

### 作用域

#### 1.定义

用来规定代码作用的范围及变量查询的范围

#### 2.作用

隔离变量, 防止命名冲突

#### 3.产生及销毁

代码定义时产生;函数执行完销毁的是变量对象而非作用域;作用域从代码定义时就一直在,除非没有当前代码.

#### 作用域分类

* 全局作用域
* 函数作用域
* 块作用域(非函数大括号限制的空间)



### 作用域链

真实存在的,作用域链是使用执行上下文当中变量对象所组成的链条结构(数组结构) //scope: local - closure - Global

查找的时候其实真正是先去自身的变量对象当中查找.如果没有, 去上级执行上下文的变量对象当中查找, 直到找到全局执行上下文的变量对象.    函数调用的时候上一级的变量对象其实是在函数定义的时候都已经确定好的(与函数调用位置无关,  )



作用域链什么时候确定的,在函数定义时候确定的.



### 程序开始执行(全局环境和函数环境)

#### 全局执行上下文(分为创建阶段和执行阶段)

##### 1.全局执行上下文 压入执行上下文栈

创建上下文阶段:

1. 收集变量形成变量对象( 函数 var的变量会收集)

   1.1预解析(其实在创建变量对象的时候已经做了预解析)

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

![chian prototype](https://programmer.help/images/blog/d59acf5d5aca9dad1461354443dd7c17.jpg)

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



#### 借用原型链继承

**每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。**通俗点说就是，实例通过内部指针可以访问到原型对象，原型对象通过constructor指针，又可以找到构造函数

核心: 将父类的实例作为子类的原型

缺点: 

 1.**对原型中引用类型值的误修改**:  原型上任何类型的属性值都不会通过实例被重写，但是引用类型的属性值会受到实例的影响而修

 2.原型链不能实现子类向父类中传参

```js
//https://www.cnblogs.com/sarahwang/p/6879161.html

    //父类：人
    function Person () {
      this.head = '脑袋瓜子';
      this.emotion = ['喜', '怒', '哀', '乐']; //人都有喜怒哀乐
    }
    //子类：学生，继承了“人”这个类
    function Student(studentID) {
      this.studentID = studentID;
    }
    Student.prototype = new Person();

    var stu1 = new Student(1001);
    console.log(stu1.emotion); //['喜', '怒', '哀', '乐']

    stu1.emotion.push('愁');
    console.log(stu1.emotion); //["喜", "怒", "哀", "乐", "愁"]
    
    var stu2 = new Student(1002);
    console.log(stu2.emotion); //["喜", "怒", "哀", "乐", "愁"]
```





#### 借助构造函数继承

在解决原型对象中包含引用类型值所带来问题的过程中，开发人员开始使用一种叫做**借用构造函数**的技术。实现原理是，在子类的构造函数中，通过 apply ( ) 或 call ( )的形式，调用父类构造函数，以实现继承。

核心: 使用父类的构造函数增强子类实例, 等于是复制父类的实例给子类(没用到原型)

缺点:

 1.只能继承父类的实例属性和方法,不能继承原型的属性/方法

 2.无法实现函数复用,每个子类都有父类实例函数的副本,影响性能

```js
在子类函数中，通过call ( ) 方法调用父类函数后，子类实例 stu1, 可以访问到 Student 构造函数和 Person 构造函数里的所有属性和方法。这样就实现了子类向父类的继承，而且还解决了原型对象上对引用类型值的误修改操作。

//父类：人
function Person () {
  this.head = '脑袋瓜子';
  this.emotion = ['喜', '怒', '哀', '乐']; //人都有喜怒哀乐
}
//子类：学生，继承了“人”这个类
function Student(studentID) {
  this.studentID = studentID;
  Person.call(this);
}

//Student.prototype = new Person();

var stu1 = new Student(1001);
console.log(stu1.emotion); //['喜', '怒', '哀', '乐']

stu1.emotion.push('愁');
console.log(stu1.emotion); //["喜", "怒", "哀", "乐", "愁"]

var stu2 = new Student(1002);
console.log(stu2.emotion); //["喜", "怒", "哀", "乐"]

```





#### 混合继承

[原型链继承](http://www.cnblogs.com/sarahwang/p/6870072.html)和[借用构造函数继承](http://www.cnblogs.com/sarahwang/p/6879161.html#3976607)。这两种模式都存在各自的缺点，所以，我们考虑是否能将这二者结合到一起，从而发挥二者之长。即在继承过程中，既可以保证每个实例都有它自己的属性，又能做到对一些属性和方法的复用

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



### 事件循环机制Event Loop

来源:[知乎](https://zhuanlan.zhihu.com/p/33058983?utm_source=com.microsoft.todos&utm_medium=social&utm_oi=41541510889472)

javascript从诞生之日起就是一门**单线程的非阻塞**的脚本语言。这是由其最初的用途来决定的：与浏览器交互。

单线程意味着，javascript代码在执行的任何时候，都只有一个主线程来处理所有的任务。

非阻塞则是当代码需要进行一项异步任务（无法立刻返回结果，需要花一定时间才能返回的任务，如I/O事件）的时候，主线程会挂起（pending）这个任务，然后在异步任务返回结果的时候再根据一定规则去执行相应的回调。

**采用单线程的原因**: 如果javascript是多线程的，那么当两个线程同时对dom进行一项操作，例如一个向其添加事件，而另一个删除了这个dom，此时该如何处理呢？因此，为了保证不会 发生类似于这个例子中的情景，javascript选择只用一个主线程来执行代码，这样就保证了程序执行的一致性。

单线程在保证了执行顺序的同时也限制了javascript的效率，因此开发出了web worker技术。这项技术号称让javascript成为一门多线程语言。使用web worker技术开的多线程有着诸多限制,



#### 执行栈与事件队列

**执行栈**: 当一系列方法被依次调用的时候，因为js是单线程的，同一时间只能执行一个方法，于是这些方法被排队在一个单独的地方.

**事件队列:** 当一个异步事件返回结果后，js会将这个事件加入与当前执行栈不同的另一个队列.(非阻塞的关键)

当javascript代码执行的时候会将不同的变量存于内存中的不同位置：堆（heap）和栈（stack）中来加以区分. 堆里存放着一些对象。而栈中则存放着一些基础类型变量以及对象的指针.

当我们调用一个方法的时候，js会生成一个与这个方法对应的执行环境（context），又叫执行上下文。这个执行环境中存在着这个方法的私有作用域，上层作用域的指向，方法的参数，这个作用域中定义的变量以及这个作用域的this对象。 而

当一个脚本第一次执行的时候，js引擎会解析这段代码，并将其中的同步代码按照执行顺序加入执行栈中，然后从头开始执行。如果当前执行的是一个方法，那么js会向执行栈中添加这个方法的执行环境，然后进入这个执行环境继续执行其中的代码。当这个执行环境中的代码 执行完毕并返回结果后，js会退出这个执行环境并把这个执行环境销毁，回到上一个方法的执行环境。。这个过程反复进行，直到执行栈中的代码全部执行完毕。

图中的stack表示我们所说的执行栈，web apis则是代表一些异步事件，而callback queue即事件队列。

![event loop](https://pic4.zhimg.com/80/v2-da078fa3eadf3db4bf455904ae06f84b_720w.jpg)





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

##### 如何证明JS执行是单线程的?

* setTimeout()的回调函数是在主线程执行的
* **定时器, 回调函数**只有在运行栈中的代码全部执行完后才有可能执行  //定时器是同步,回调函数是异步. 事件是同步, 回调是异步.

##### 为什么JS要用单线程模式, 而非多线程模式





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



