## 作用域

> 来自: 你不知道的JavaScript  笔记->再精简

### 背景

作用域是什么?

存储变量和查找变量的规则.

原因?

将变量引入程序带来的问题: 变量存储在哪里? 程序需要的时候如何找到它们?

### 作用域是什么

#### 编译原理

传统编译语言的3个步骤:

* 分词/词法分析(Tokenizing/Lexing)
  * 将字符串分解成对编程语言有意义的代码块(代码块又被称作词法单元token)
  * 分词(tokenizing)和词法分析(Lexing)的区别: 词法单元的识别是通过有状态还是无状态
* 解析/语法分析(Parsing): 将词法单元转换成抽象语法树(AST)
* 代码生成

JavaScript的编译过程:

* JavaScript的编译过程不是发生在构建之前的,大部分情况下编译发生在代码执行前的几微秒（甚至更短！）的时间内

#### 理解作用域

**参与处理的模块**

* 引擎

  * 从头到尾负责整个JavaScript程序的编译及执行过程。

* 编译器

  * 负责语法分析及代码生成等脏活累活

* 作用域

  * 负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。


**处理过程**

分解`var a = 2`:

* 编译器首先会将这段程序分解成词法单元，然后将词法单元解析成一个树结构。
* 遇到`var a`，<span style="color:blue;">编译器会询问作用域</span>是否在同作用域集合中存在同名变量
  * 是: 编译器会忽略该声明，继续进行编译；
  * 否: 它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为a
* 接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理`a = 2`这个赋值操作. <span style="color:blue;">引擎运行时会首先询问作用域</span>，在当前的作用域集合中是否存在一个叫作`a`的变量。
  * 如果是，引擎就会使用这个变量；
  * 如果否，引擎会继续查找该变量
    * 引擎寻找变量 `a`
      * 找到, 就会将2赋值给它; 
      * 没找到, 引擎就会举手示意并抛出一个异常！

> 总结:
>
> 变量的赋值操作会执行两个动作: 
>
> 首先编译器会在当前作用域中<span style="color:blue;">**声明一个变量**</span>（如果之前没有声明过）;
>
> 然后在运行时引擎会在作用域中<span style="color:blue;">**查找该变量**</span>，如果能够找到就会对它**赋值**。



**编译器的具体处理**

> 编译器在编译过程的第二步中生成了代码，引擎执行它时，会通过查找变量a来判断它是否已声明过。查找的过程由作用域进行协助，但是引擎执行怎样的查找，会影响最终的查找结果。

查找变量通过两种查询方式:

* LHS查询
* RHS查询

当变量出现在赋值操作的左侧时进行LHS查询，出现在右侧时进行RHS查询。(并不完全是)

“<span style="color:blue">赋值操作的目标是谁（LHS）</span>”以及<span style="color:blue">“谁是赋值操作的源头（RHS）”</span>。(完全是)



#### 作用域嵌套

**What?**

> 作用域是根据名称查找变量的一套规则.
>
> 当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套。

**How?**

> 查找规则:
>
> 引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都会停止。



#### 异常处理

在变量还没有声明（在任何作用域中都无法找到该变量）的情况下，这两种查询的行为是不一样的。具体表现如下:

* RHS查询遍寻不到所需的变量,引擎会抛出`ReferenceError`异常
* LHS查询遍寻不到所需变量,

  * 非严格模式: 全局作用域会创建一个具有该名称的变量,并返还给引擎(非'严格模式'下)
  * 严格模式: 抛出同RHS查询失败时类似的`ReferenceError`异常

* RHS查询找到一个变量,但对变量进行不合理操作(例如,对函数类型进行调用,引用null/undefined值中的属性), 引擎抛出`TypeError`.

> `ReferenceError` 同作用域判别失败相关
>
> `TypeError` 代表作用域判别成功了，但是对结果的操作是非法或不合理的。



### 作用域的分类

作用域共有两种主要的工作模型。

* 词法作用域: 最为普遍的，被大多数编程语言所采用的。
* 动态作用域，仍有一些编程语言在使用（比如Bash脚本、Perl中的一些模式等）

### 词法作用域

#### 背景介绍

大部分标准语言编译器的第一个工作阶段叫作词法化（也叫单词化）。词法化的过程会对源代码中的字符进行检查，如果是有状态的解析过程，还会赋予单词语义。这个概念是理解词法作用域及其名称来历的基础。

#### 词法阶段

<span style="color:blue;">词法作用域就是定义在词法阶段的作用域</span>。换句话说，词法作用域是由你在写代码时将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域不变（大部分情况下是这样的）。

**作用域查找时的一些规则**

* 作用域查找始终从运行时所处的最内部作用域开始，逐级向外或者说向上进行，直到遇见第一个匹配的标识符为止。作用域查找会在找到第一个匹配的标识符时停止。

* 在多层的嵌套作用域中可以定义同名的标识符，这叫作“遮蔽效应”（内部的标识符“遮蔽”了外部的标识符）。
* <span style="color:blue">词法作用域查找只会查找一级标识符</span>，如果代码中引用了foo.bar.baz，词法作用域查找只会试图查找foo标识符，找到这个变量后，<span style="color:blue">对象属性访问规则</span>会分别接管对bar和baz属性的访问。

#### 欺骗词法

**What?**

JavaScript中有两种机制来实现这个目的.欺骗词法作用域会导致性能下降。

* eval()
* with



### 词法作用域和动态作用域

> https://github.com/mqyqingfeng/Blog/issues/3

### 1.定义

作用域是指程序源代码中定义变量的区域。

作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。

JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。

### 2.作用域分类

* 全局作用域
* 函数作用域
* 块作用域(非函数大括号限制的空间)



### 3. 静态作用域和动态作用域

<u>因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。</u>

<u>而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。</u>

```javascript
//案例
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// 结果是 ???
```

假设JavaScript采用静态作用域，让我们分析下执行过程：

执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。

假设JavaScript采用动态作用域，让我们分析下执行过程：

执行 foo 函数，依然是从 foo 函数内部查找是否有局部变量 value。如果没有，就从调用函数的作用域，也就是 bar 函数内部查找 value 变量，所以结果会打印 2。

前面我们已经说了，JavaScript采用的是静态作用域，所以这个例子的结果是 1。

### 4.动态作用域

也许你会好奇什么语言是动态作用域？

bash 就是动态作用域，不信的话，把下面的脚本存成例如 scope.bash，然后进入相应的目录，用命令行执行 `bash ./scope.bash`，看看打印的值是多少。

```javascript
value = 1;
function foo() {
  echo $value;
}

function bar() {
  local value = 2;
  foo;
}
bar
```



### 5. 练习题

<JavaScript高级程序设计>中的例子

```javascript
var scope = 'global scope';
function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f();
}

checkscope();
```

```javascript
var scope = 'global scope';
function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f;
}

checkscope()();
```

两段代码都会打印：`local scope`。

原因也很简单，因为JavaScript采用的是词法作用域，函数的作用域基于函数创建的位置。





## JS中的作用域

### 全局作用域



### 函数作用域

#### 定义

属于这个函数的全部变量都可以在整个函数的范围内使用及复用

#### 隐藏变量和函数的好处

* 最小暴露原则(最小限度暴露必要内容)
* 避免同名标识符冲突
  * 全局命名空间(全局仅声明唯一一个对象,属性放到对象里)
  * 模块管理





### 块作用域

#### 概述

块作用域是一个用来对之前的最小授权原则进行扩展的工具，将代码从在函数中隐藏信息扩展为在块中隐藏信息。

#### JS中的块

<u>with</u>

用with从对象中创建出的作用域仅在with声明中而非外部作用域中有效。

<u>try.catch</u>

其中声明的变量仅在catch内部有效

<u>let</u>

let关键字可以将变量绑定到所在的任意作用域中（通常是{ .. }内部）。换句话说，let为其声明的变量<span style="color:blue;">隐式地劫持了所在的块作用域</span>



#### 块作用域的作用

<u>1.垃圾收集</u>

让引擎清除地知道没有必要继续保存某些数据

```javascript
function process(data) {
  //...
}
{ //在这个块中定义的内容完事可以销毁
	var someReallyBigData = {};
	process(someReallyBigData);
}

//
```

<u>2.let循环</u>

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

//说明了几件事情?
//1. for循环内存在块作用域
//2. let声明的变量会绑定到循环的每一次迭代中
```

<u>3.创建块作用域变量</u>

可以用来创建块作用域变量，但其值是固定的（常量）。之后任何试图修改值的操作都会引起错误。



#### 提升

<span style="color:blue">函数声明和变量var声明都会被提升。函数会首先被提升，然后才是变量。</span>

函数声明和变量声明相同, 变量声明会被覆盖;

函数表达式不会进行提升,如果进行函数调用会抛出`TypeError`异常()(RHS,不合理操作报错)

有多个相同函数声明,前面的会被最后的覆盖.







## 执行上下文栈

### 1. 顺序执行

```javascript
var foo = function() {
  console.log('foo1')
}
foo(); //'foo1'

var foo = function() {
  console.log('foo2')
}
foo(); //'foo2'
```

```javascript
function foo() {
  console.log('foo1')
}
foo(); //'foo2'
function foo() {
  console.log('foo2')
}
foo(); //'foo2'
```

 JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升。

这个“一段一段”中的“段”究竟是怎么划分的呢？JavaScript引擎遇到一段怎样的代码时才会做“准备工作”呢？

### 2. 可执行代码

JavaScript 的可执行代码(executable code)的类型有哪些?

就三种，全局代码、函数代码、eval代码

举个例子，<u>当**执行**到一个函数的时候，就会进行准备工作，这里的“准备工作”，就叫做"执行上下文(execution context)"。</u>

### 3. 执行上下文

我们写的函数多了去了，如何管理创建的那么多执行上下文呢？

所以 JavaScript 引擎创建了<u>**执行上下文栈（Execution context stack，ECS）**来管理执行上下文</u>

为了模拟执行上下文栈的行为，让我们定义执行上下文栈是一个数组：

```javascript
ECStack = [];
```

试想当 JavaScript 开始要解释执行代码的时候，最先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，我们用 globalContext 表示它，并且只有当整个应用程序结束的时候，ECStack 才会被清空，所以程序结束之前， ECStack 最底部永远有个 globalContext：

```javascript
ECStack = [
  globalContext
];
```

现在JavaScript遇到了这段代码:

```JavaScript
function fn3() {
  console.log('fn3');
}
function fn2() {
  fn3();
}
function fn1() {
  fn2();
}
fn1();
```

<span style='text-decoration: underline wavy blue'>当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。</span>知道了这样的工作原理，让我们来看看如何处理上面这段代码：

```javascript
//伪代码

//fn1()
ECStack.push(<fn1> functionContext)

//fn1中调用了fn2,需要创建fn2的执行上下文
ECStack.push(<fn2>, functionContext);

//fn2中调用了fn3,需要创建fn3的执行上下文
ECStack.push(<fn3>, functionContext);

//fn3执行完毕
ECStack.pop();

//fn2执行完毕
ECStack.pop();

//fn1执行完毕
ECStack.pop();

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext
```



### 4.练习题

让我们看看上篇文章[《JavaScript深入之词法作用域和动态作用域》](https://github.com/mqyqingfeng/Blog/issues/3)最后的问题：

```javascript
let scope = 'global scope';
function checkscope() {
  let scope = 'local scope';
  function f() {
    return scope;
  }
  return f();
}
checkscope();
```

```javascript
let scope = 'global scope';
function checkscope() {
  let scope = 'local scope';
  function f() {
    return scope;
  }
  return f;
}
checkscope()();
```

两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？

答案就是执行上下文栈的变化不一样。

让我们模拟第一段代码：

```javascript
ECStack.push(<checksopce> functionContext);
ECStack.push(<f>, functionContext);
ECStack.pop();
ECStack.pop();
```

模拟第二段代码:

```javascript
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();
```

这样概括的回答执行上下文栈的变化不同，是不是依然有一种意犹未尽的感觉呢，为了更详细讲解两个函数执行上的区别，我们需要探究一下执行上下文到底包含了哪些内容，所以欢迎阅读下一篇《JavaScript深入之变量对象》。



## 变量对象

### 1. 执行上下文的3个属性

当 JavaScript 引擎执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性：

- 变量对象(Variable object，VO)
- 作用域链(Scope chain)
- this

### 2. 变量对象

<u>变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。</u>

因为不同执行上下文下的变量对象稍有不同，所以我们来聊聊全局上下文下的变量对象和函数上下文下的变量对象。

### 3. 全局上下文

我们先了解一个概念，叫全局对象。在 [W3School](http://www.w3school.com.cn/jsref/jsref_obj_global.asp) 中也有介绍：

> 全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象、函数和属性。
>
> 在顶层 JavaScript 代码中，可以用关键字 this 引用全局对象。因为全局对象是作用域链的头，这意味着所有非限定性的变量和函数名都会作为该对象的属性来查询。
>
> 例如，当JavaScript 代码引用 parseInt() 函数时，它引用的是全局对象的 parseInt 属性。全局对象是作用域链的头，还意味着在顶层 JavaScript 代码中声明的所有变量都将成为全局对象的属性。

全局对象案例介绍:

1.可以通过this 引用，在客户端 JavaScript 中，全局对象就是 Window 对象。

```javascript
console.log(this);
```

2.全局对象是由 Object 构造函数实例化的一个对象。

```javascript
console.log(this instanceof Object);
```

3.预定义了一堆，嗯，一大堆函数和属性

```javascript
// 都能生效
console.log(Math.random());
console.log(this.Math.random());
```

4.作为全局变量的宿主

```javascript
var a = 1;
console.log(this.a);
```

5.客户端 JavaScript 中，全局对象有 window 属性指向自身。

```javascript
var a = 1;
console.log(window.a);

this.window.b = 2;
console.log(this.b);
```

**全局上下文中的变量对象就是全局对象呐！**



### 2.函数上下文

<u>在函数上下文中，我们用活动对象(activation object, AO)来表示变量对象</u>。

活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在 JavaScript 环境中访问，只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 activation object 呐，而只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。

活动对象是在进入函数上下文时刻被创建的，它通过函数的 arguments 属性初始化。arguments 属性值是 Arguments 对象。

### 3.执行过程

执行上下文的代码会分成两个阶段进行处理：分析和执行，我们也可以叫做：

1. 进入执行上下文
2. 代码执行

#### 进入执行上下文

当进入执行上下文时，这时候还没有执行代码，

变量对象会包括：

1. 函数的所有形参 (如果是函数上下文)
   - 由名称和对应值组成的一个变量对象的属性被创建
   - 没有实参，属性值设为 undefined
2. 函数声明
   - 由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
   - 如果变量对象已经存在相同名称的属性，则完全替换这个属性
3. 变量声明
   - 由名称和对应值（undefined）组成一个变量对象的属性被创建；
   - 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

举个例子:

```javascript
function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);
```

在进入执行上下文后，这时候的 AO 是：

```javascript
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
}
```



#### 代码执行

在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

还是上面的例子，当代码执行完后，这时候的 AO 是：

```javascript
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}
```

到这里变量对象的创建过程就介绍完了，让我们简洁的总结我们上述所说：

1. 全局上下文的变量对象初始化是全局对象
2. 函数上下文的变量对象初始化只包括 Arguments 对象
3. 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值
4. 在代码执行阶段，会再次修改变量对象的属性值

### 练习题

**第一题**

```javascript
function foo() {
  console.log(a);
  a = 1;
}
foo(); //

function bar() {
  a = 1;
  console.log(a);
}
bar(); //
```

第一段会报错：`Uncaught ReferenceError: a is not defined`。

第二段会打印：`1`。

这是因为函数中的 "a" 并没有通过 var 关键字声明，所有不会被存放在 AO 中。

第一段执行 console 的时候， AO 的值是：

```javascript
AO = {
  arguments: {
    length: 0
  }
}
```

没有 a 的值，然后就会到全局去找，全局也没有，所以会报错。

当第二段执行 console 的时候，全局对象已经被赋予了 a 属性，这时候就可以从全局找到 a 的值，所以会打印 1。



**第二题**

```javascript
console.log(foo);
function foo() {
  console.log('foo');
}
var foo = 1;
```

会打印函数，而不是 undefined 。

<u>这是因为在进入执行上下文时，首先会处理函数声明，其次会处理变量声明</u>，<u>如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性</u>。

```javascript
function fn(a) {
  var a;
  console.log(a);
  a = 3;
  console.log(a);
}
fn(2); //2 3
```





## 作用域链  ????

### 1.含义

当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。<u>这样由多个执行上下文的变量对象构成的链表就叫做作用域链</u>。

### 2. 用函数来模拟作用域链创建

下面，让我们以一个函数的创建和激活两个时期来讲解作用域链是如何创建和变化的。

在[《JavaScript深入之词法作用域和动态作用域》](https://github.com/mqyqingfeng/Blog/issues/3)中讲到，**函数的作用域在函数定义的时候就决定了**。

这是因为函数有一个内部属性 [[scope]]，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解 [[scope]] 就是所有父变量对象的层级链，但是注意：[[scope]] 并不代表完整的作用域链！

举个例子:

```javascript
function foo() {
  function bar() {
    ...
  }
}
```

函数创建时,各自的[[scope]]为:

```javascript
foo.[[scope]] = [globalContext.VO]

bar.[[scope]] = [
  fooContext.AO,
  globalContext.VO
]
```

### 3. 函数激活

当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。

这时候执行上下文的作用域链，我们命名为 Scope：

```javascript
Scope = [AO].concat([[Scope]]);
```

至此，作用域链创建完毕。

### 4. 案例

以下面的例子为例，结合着之前讲的变量对象和执行上下文栈，我们来总结一下<u>函数执行上下文中作用域链和变量对象的创建过程</u>：

```javascript
var scope = 'global scope';
function checkscope() {
  var scope2 = 'local scope';
  return scope2;
}
checkscope();
```

执行过程如下:

1.checkscope函数被创建,保存作用域链到内部属性[[scope]]

```javascript
checkscope.[[scope]] = [
  globalContext.VO
]
```

2.执行checkscope函数,创建checkscope函数执行上下文,checkscope函数执行上下文被压入执行上下文栈

```javascript
ECStack = [
  checkscopeContext,
  globalContext
]
```

3.checkscope函数并不立即执行,开始准备工作,第一步: 复制函数[[scope]]属性创建作用域链

```javascript
checkscopeContext = {
  Scope: checkscope.[[scope]];
}
```

4.第二步: 用arguments创建活动对象,随后初始化活动对象,加入形参,函数声明,变量声明

```javascript
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  Scope: checkscope.[[scope]]
}
```

5.第三步: 将活动对象压入checkscope作用域顶端

```javascript
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  Scope: [AO, [[Scope]]]
}
```

6.准备工作做完,开始执行函数,随着函数的执行,修改AO的属性值

```javascript
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: 'local scope'
  },
  scope: [AO, [[Scope]]]
}
```

7.查找到scope2的值,返回后的函数执行完毕,函数上下文从执行上文栈中弹出

```javascript
ECStack = [
  globalContext
];
```



## 关于this !!!!

> https://github.com/mqyqingfeng/Blog/issues/7

### 1.前言

当JavaScript代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性:

* 变量对象(Variable Object, VO)
* 作用域链(Scope chain)
* this

因为我们要从 ECMASciript5 规范开始讲起。

先奉上 ECMAScript 5.1 规范地址：

英文版：http://es5.github.io/#x15.1

中文版：http://yanhaijing.com/es5/#115



### 2. Types

首先是第8章的types

> Types are further subclassified into ECMAScript language types and specification types.
>
> An ECMAScript language type <u>corresponds to</u>(对应的) values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are Undefined, Null, Boolean, String, Number, and Object.
>
> A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types are Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, and Environment Record.

我们简单的翻译一下：

ECMAScript 的类型分为语言类型和规范类型。

ECMAScript 语言类型是开发者直接使用 ECMAScript 可以操作的。其实就是我们常说的Undefined, Null, Boolean, String, Number, 和 Object。

而规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record。

没懂？没关系，我们只要知道在 ECMAScript 规范中还有一种只存在于规范中的类型，它们的作用是用来描述语言底层行为逻辑。

今天我们要讲的重点是便是其中的 Reference 类型。它与 this 的指向有着密切的关联。

### Reference

#### 含义

8.7章 The Reference Specification Type:

> The Reference type is used to explain the behaviour of such operators as delete ,typeof, and the assignment operators.

所以 Reference 类型就是用来解释诸如 delete、typeof 以及赋值等操作行为的。

来自youyuxi的解释:

> 这里的 Reference 是一个 Specification Type，也就是 “只存在于规范里的抽象类型”。它们是为了更好地描述语言的底层行为逻辑才存在的，但并不存在于实际的 js 代码中。

#### 组成部分

> A Reference is a resolved name binding.
>
> A Reference consists of three components, the base value, the referenced name and the Boolean valued strict reference flag.
>
> The base value is either undefined, an Object, a Boolean, a String, a Number, or an environment record (10.2.1).
>
> A base value of undefined indicates that the reference could not be resolved to a binding. The referenced name is a String.

从上面的话可以看出,Reference主要包括3个部分:

* base value
* referenced name
* strict reference 

base value 就是属性所在的对象或者就是 EnvironmentRecord，它的值只可能是 undefined, an Object, a Boolean, a String, a Number, or an environment record 其中的一种。

referenced name 就是属性的名称.

举个例子:

```javascript
var foo = 1;
//对应的Reference是
var fooReference = {
  base: EnviromentRecord,
  name: 'foo',
  strict: false
}
```



```javascript
var foo = {
  bar: function() {
    return this;
  }
};

foo.bar();

//bar对应的Reference是
var BarReference = {
  base: foo,
  propertyName: 'bar',
  strict: false
}
```

而且规范中还提供了获取 Reference 组成部分的方法，比如 GetBase 和 IsPropertyReference。

1.GetBase

> GetBase(V). Returns the base value component of the reference V.

返回 reference 的 base value

2.IsPropertyReference

> IsPropertyReference(V). Returns true if either the base value is an object or HasPrimitiveBase(V) is true; otherwise returns false.

简单的理解：如果 base value 是一个对象，就返回true。



### GetValue

除此之外，紧接着在 8.7.1 章规范中就讲了一个用于从 Reference 类型获取对应值的方法： GetValue。

简单模拟 GetValue 的使用：

```javascript
var foo = 1;
var fooReference = {
  base: EnvironmentRecord,
  name: 'foo',
  strict: false
};
GetValue(fooReference); //1
```

GetValue 返回对象属性真正的值，但是要注意：

**调用 GetValue，返回的将是具体的值，而不再是一个 Reference**



### 如何确定this的值

看规范 11.2.3 Function Calls：

这里讲了当函数调用的时候，如何确定 this 的取值。

只看第一步、第六步、第七步：

> 1.Let *ref* be the result of evaluating MemberExpression.

> 6.If Type(*ref*) is Reference, then
>
> a. If IsPropertyReference(ref) is true, then
>
> ​	i. Let thisValue be GetBase(ref).
>
> b.Else, the base of ref is an Enviroment Record.
>
> ​	i.Let thisValue be the result of calling the ImplicitThisValue concreate method of GetBase(ref)
>
> 7.Else, Typeof(ref) is not Reference.
>
> a. Let thisValue be undefined.

让我们描述一下:

1.计算MemberExpression的结果赋值非ref

2.判断ref是不是一个Reference类型

 2.1 如果ref是Reference,并且IsPropertyReference(ref)是true, 那么this的值为GetBase(ref)

 2.2 如果ref是Reference,并且base value值是Environment Record,那么this 的值为ImplicitThisValue(ref)

3.ref不是一个Reference类型

 3.1 this的值是undefined.



### 具体分析

一步步看:

**1.计算MemberExpression的结果赋值给ref**

什么是MemberExpression? 看规范 11.2 Left-Hand-Side Expressions

- PrimaryExpression // 原始表达式 可以参见《JavaScript权威指南第四章》
- FunctionExpression // 函数定义表达式
- MemberExpression [ Expression ] // 属性访问表达式
- MemberExpression . IdentifierName // 属性访问表达式
- new MemberExpression Arguments // 对象创建表达式

举个例子:

```javascript
function foo() {
  console.log(this);
}

foo(); //MemberExpression是foo

function foo() {
  return function() {
    console.log(this);
  }
}
foo()(); //MemberExpression是foo()

var foo = {
  bar: function() {
    return this;
  }
}
foo.bar(); //MemberExpression是foo.bar
```

所以简单理解 MemberExpression 其实就是()左边的部分。



**2.判断ref是不是一个Reference类型**

关键就在于看规范是如何处理各种 MemberExpression，返回的结果是不是一个Reference类型

举个例子:

```javascript
var value = 1;
var foo = {
  value: 2,
  bar: function() {
    return this.value;
  }
};

//示例1
console.log(foo.bar());

//示例2
console.log((foo.bar)())

//示例3
console.log((foo.bar = foo.bar)());

//示例4
console.log((false||foo.bar)())

//示例5
console.log((foo.bar, foo.bar)())
```

#### foo.bar()

查看规范 11.2.1 Property Accessors，这里展示了一个计算的过程，什么都不管了，就看最后一步：

> Return a value of type Reference whose base value is baseValue and whose referenced name is propertyNameString, and whose strict mode flag is strict.

我们得知该表达式返回了一个 Reference 类型！

根据之前的内容，我们知道该值为：

```javascript
var Reference = {
  base: foo,
  name: 'bar',
  strict: false
}
```

接下来按照2.1的判断流程走:

> 2.1 如果ref是Reference, 并且IsPropertyReference(ref)是true,那么this的值为GetBase(ref)

该值是Reference类型,那么IsPropertyReference(ref)的结果是多少呢?

前面我们已经铺垫了 IsPropertyReference 方法，如果 base value 是一个对象，结果返回 true。

base value 为 foo，是一个对象，所以 IsPropertyReference(ref) 结果为 true。 

这个时候我们可以确定this 的值了

```javascript
this = GetBase(ref);
```

GetBase 也已经铺垫了，获得 base value 值，这个例子中就是foo，所以 this 的值就是 foo ，示例1的结果就是 2.

#### (foo.bar)()

示例2:

```javascript
console.log((foo.bar)());
```

foo.bar被()包住,查看规范11.1.6 The Grouping Operator

直接看结果部分:

> The production *PrimaryExpression: **(Expression)*** is evaluated as follows:

> Return the result of evaluating Expression. This may be of type Reference.
>
> Note This algorithm(运算法则) does not apply GetValue to the result of evaluating Expression.

实际上()并没有对MemberExpression进行计算,所以其实跟示例1的结果是一样的.



#### (foo.bar = foo.bar)()

示例3,有赋值操作运算符,查看规范11.13.1 Simple Assignment(=):

计算的第三步:

> 3. Let rval be GetValue(rref)

因为使用了GetValue,所以返回的值不是Reference类型

按照之前讲的判断逻辑

> 如果 ref 不是Reference，那么 this 的值为 undefined

this为undefined,非严格模式下,this的值为 undefined 的时候，其值会被隐式转换为全局对象。



#### (false || foo.bar)()

示例4，逻辑与算法，查看规范 11.11 Binary Logical Operators：

计算的第二步:

> 2.Let lval be GetValue(lref)

因为使用了 GetValue，所以返回的不是 Reference 类型，this 为 undefined



#### (foo.bar, foo.bar)()

示例5，逗号操作符，查看规范11.14 Comma Operator ( , )

计算的第二步:

> 2.Call GetValue(lref).

因为使用了 GetValue，所以返回的不是 Reference 类型，this 为 undefined



#### 揭晓结果

最后一个例子的结果是

```javascript
var value = 1;

var foo = {
  value: 2,
  bar: function() {
    return this.value;
  }
};

//示例1
foo.bar(); //2

//示例2
console.log((foo.bar)()); //2

//示例3
console.log((foo.bar = foo.bar)()); //1

//示例4
console.log((false || foo.bar)()); //1

//示例5
console.log((foo.bar, foo.bar)()); //1
```

注意：以上是在非严格模式下的结果，严格模式下因为 this 返回 undefined，所以示例 3 会报错。(接下去的不会执行了)



### 补充

还有一个最普通的情况

```javascript
function foo() {
  console.log(this);
}
foo();
```

MemberExpression是foo,解析标识符,查看规范 10.3.1 Identifier Resolution，会返回一个 Reference 类型的值：

```javascript
var fooReference = {
  base: EnvironmentRecord,
  name: 'foo',
  strict: false
}
```



## 执行上下文???? 未完成

### 1.思考题

```javascript
var scope = 'global scope';
function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f();
}
checkscope()
```

```javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
```

两段代码都会打印'local scope'。虽然两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？

紧接着就在下一篇[《JavaScript深入之执行上下文栈》](https://github.com/mqyqingfeng/Blog/issues/4)中，讲到了两者的区别在于执行上下文栈的变化不一样，然而，如果是这样笼统的回答，依然显得不够详细，本篇就会详细的解析执行上下文栈和执行上下文的具体变化过程。

### 2. 具体执行分析

我们分析第一段代码：

```javascript
var scope = 'global scope';

function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f();
}

checkscope();
```

执行过程如下：

1.执行全局代码，创建全局执行上下文，全局上下文被压入执行上下文栈

```javascript
ECStack = [
  globalContext
];
```

2.全局上下文初始化

```javascript
globalContext = {
  VO: [global],
  Scope: [globalContext.VO],
  this: globalContext.VO
}
```

3.初始化同时,checkscope 函数被创建，保存作用域链到函数的内部属性[[scope]]

```javascript
checkscope.[[scope]] = [
  globalContext.VO
]
```

4.执行checkscope函数,创建checkscope函数执行上下文,checkscope函数执行上下文被压入执行上下文栈

```javascript
ECStack = [
  checkscopeContext,
  globalContext
]
```

5.checkscope函数执行上下文初始化:

5.1 复制函数[[scope]]属性创建作用域链

5.2 用arguments创建活动对象

5.3 初始化活动对象,即加入形参,函数声明,变量声明

5.4 将活动对象压入checkscope作用域链顶端



同时f函数被创建，保存作用域链到 f 函数的内部属性[[scope]]

```javascript
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope: undefined,
    f: reference to function f() {}
  },
  Scope: [AO, globalContext.VO],
  this: undefined
}
```

6.执行f函数,创建f函数执行上下文, f函数执行上下文被压入执行上下文栈.

```javascript
ECStack = [
  fContext,
  checkscopeContext,
  globalContext
]
```

7.f函数执行上下文初始化,以下跟第5步相同

7.1 复制函数[[scope]]属性创建作用域链

7.2 用arguments创建活动对象

7.3 初始化活动对象,即加入形参,函数声明,变量声明

7.4 将活动对象压入f作用域链顶端

```javascript
fContext = {
  AO: {
    arguments: {
      length: 0
    }
  },
  Scope: [AO, checkscopeContext.AO, globalContext.VO],
  this: undefined
}
```

8.f函数执行,沿着作用域链查找scope的值,返回scope的值

9.f函数执行完毕, f函数上下文从执行上下文栈中弹出

```javascript
ECStack = [
  checkscopeContext,
  globalContext
]
```

10.checkscope函数执行完毕,checkscope执行上下文从执行上下文栈中弹出

```javascript
ECStack = [
  globalContext
]
```





## 闭包

> https://github.com/mqyqingfeng/Blog/issues/9

### 1.定义

一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（**closure**）。<u>闭包让你可以在一个内层函数中访问到其外层函数的作用域</u>。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。 --- MDN

特点:

* 内部函数引用外部函数的作用域
* 内部函数不再定义的作用域中执行

### 2.示例

让我们先写个例子，例子依然是来自《JavaScript权威指南》，稍微做点改动

```javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope();
foo();
```

首先我们要分析一下这段代码中执行上下文栈和执行上下文的变化情况

另一个与这段代码相似的例子，在[《JavaScript深入之执行上下文》](https://github.com/mqyqingfeng/Blog/issues/8)中有着非常详细的分析。如果看不懂以下的执行过程，建议先阅读这篇文章。

这里直接给出简要的执行过程：

1. 进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
2. 全局执行上下文初始化
3. 执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈
4. checkscope 执行上下文初始化，创建变量对象、作用域链、this等
5. checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出
6. 执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈
7. f 执行上下文初始化，创建变量对象、作用域链、this等
8. f 函数执行完毕，f 函数上下文从执行上下文栈中弹出

了解到这个过程，我们应该思考一个问题，那就是：

当 f 函数执行的时候，checkscope 函数上下文已经被销毁了啊(即从执行上下文栈中被弹出)，怎么还会读取到 checkscope 作用域下的 scope 值呢？

以上的代码，要是转换成 PHP，就会报错，因为在 PHP 中，f 函数只能读取到自己作用域和全局作用域里的值，所以读不到 checkscope 下的 scope 值。(这段我问的PHP同事……)

然而 JavaScript 却是可以的！

当我们了解了具体的执行过程后，我们知道 f 执行上下文维护了一个作用域链：

```javascript
fContext = {
  Scope: [AO, checkscopeContext.AO, globalContext.VO]
}
```



### 3.练习题

```javascript
var data = [];

for (var i=0; i<3; i++) {
  data[i] = function() {
    console.log(i);
  };
}

data[0]();
data[1]();
data[2]();
```

当执行到 data[0] 函数之前，此时全局上下文的 VO 为：

```javascript
globalContext = {
  VO: {
    data: [...],
    i: 3
  }
}
```

当执行 data[0] 函数的时候，data[0] 函数的作用域链为：

```javascript
data[0]Context = {
  Scope: [AO, globalContext.VO]
}
```

data[0]Context 的 AO 并没有 i 值，所以会从 globalContext.VO 中查找，i 为 3，所以打印的结果就是 3。

data[1] 和 data[2] 是一样的道理。

所以让我们改成闭包看看：

```javascript
var data = [];

for (var i=0; i<3; i++) {
  data[i] = (function(i) {
    return function() {
      console.log(i);
    }
  })(i);
}

data[0]();
data[1]();
data[2]();
```

当执行到 data[0] 函数之前，此时全局上下文的 VO 为：

```javascript
globalContext = {
  VO: {
    data: [...],
    i: 3
  }
}
```

跟没改之前的一样.

当执行data[0]函数的时候,data[0]函数作用域链发生了改变:

```javascript
data[0]Context = {
  Scope: [AO, 匿名函数Context.AO, globalContext.VO]
}
```

匿名函数执行上下文的AO为:

```javascript
匿名函数Context = {
  AO: {
    arguments: {
      0: 0,
      length: 1
    },
    i: 0
  }
}
```

data[0]Context 的 AO 并没有 i 值，所以会沿着作用域链从匿名函数 Context.AO 中查找，这时候就会找 i 为 0，找到了就不会往 globalContext.VO 中查找了，即使 globalContext.VO 也有 i 的值(值为3)，所以打印的结果就是0



### 4.闭包实例

在定时器, 事件监听器,Ajax请求,跨窗口通信,Web Works或者其他的异步(或同步)任务中,<span style="color:blue;"> 只要使用了回调函数,实际上就是在使用闭包.</span>

**IIFE模式是闭包吗?**

```javascript
var a = 2;
(function IIFE() {
  console.log(a);
})();
```

以上代码并不是严格的闭包:

* 因为函数（示例代码中的IIFE）并不是在它本身的词法作用域以外执行的。它在定义时所在的作用域中执行
* a是通过普通的词法作用域查找而非闭包被发现的。

#### 循环和闭包

```javascript
for (var i=1; i<=5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i*1000)
}
```

延迟函数的回调会在循环结束时才执行. 即使每个迭代中执行的setTimeout(..., 0), 所有的回调函数依然是在循环结束后才被执行.

**代码的问题:**

我们试图假设循环中的每个迭代在运行时都会给自己“捕获”一个i的副本。<u>但是根据作用域的工作原理，实际情况是尽管循环中的五个函数是在各个迭代中分别定义的，但是它们都被封闭在一个共享的全局作用域中，因此实际上只有一个i。</u>

**代码改进**

我们需要更多的闭包作用域，特别是在循环的过程中每个迭代都需要一个闭包作用域。

<u>1.IIFE</u>

IIFE会通过声明并立即执行一个函数来创建作用域。

```javascript
for (var i=0; i<=5; i++) {
  (setTimeout(function IIFE() {
    console.log(i);
  }, i*1000))(i)
}

for (var i=1; i<=5; i++) {
  (function(){
    setTimeout(function timer() {
      console.log(i);
    },i*1000)
  })();
}

//正确代码
for (var i=1; i<=5; i++) {
  (function() {
    var j = i;
    setTimeout(function timer() {
      console.log(j);
    }, j*1000)
  })()
}
//改进
for (var i=1; i<=5; i++) {
  (function() {
    setTimeout(function timer() {
      console.log(i);
    }, i*1000)
  })(i);
}
```

<u>2.let代替IIFE</u>

使用let声明来代替IIFE创建新的作用域

```javascript
for (var i=1; i<=5; i++) {
  let j=i; //闭包的块作用域
  setTimeout(function timer() {
    console.log(j);
  }, j*1000);
}
```

改进:

for循环头部的let声明还会有一个特殊的行为。这个行为指出变量在循环过程中不止被声明一次，每次迭代都会声明。随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量。

```javascript
for (let i=1; i<=5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i*1000)
}
```

#### 模块

通过在模块实例的内部保留对公共API对象的内部引用，可以从内部对模块实例进行修改，包括添加或删除方法和属性，以及修改它们的值。

**用法**

* 接收参数
* 命名将要作为公共API返回的对象

```javascript
var foo = (function CoolModule(id) {
  function change() {
    //修改公共API
    publicAPI.identify = identify2;
  }
  
  function identify1() {
    console.log(id);
  }
  
  function identify2() {
    console.log(id.toUpperCase());
  }
  
  var publicAPI = {
    change: change,
    identify: identify1
  };
  
  return publicAPI;
})('foo module');

foo.identify(); //'foo module'
foo.change();
foo.identify(); //'FOO MODULE'
```



**现在模块机制**

大多数模块依赖加载器/管理器本质上都是将这种模块定义封装进一个友好的API。这里并不会研究某个具体的库，为了宏观了解我会简单地介绍一些核心概念：

```javascript
var myModules = (function Manager() {
  var modules = {};
  
  function define(name, deps, impl) {
    for (var i=0; i<deps.length; i++) {
      deps[i] = modules[deps[i]]
    } 
    modules[name] = impl.apply(impl, deps);
  }
  
  function get(name) {
    return modules[name];
  }
  
  return {
    define: define,
    get: get
  };
})();
```





**ES6模块机制**

ES6中为模块增加了一级语法支持。在通过模块系统进行加载时，ES6会将文件当作独立的模块来处理。每个模块都可以导入其他模块或特定的API成员，同样也可以导出自己的API成员。



**ES模块和现代模块(函数模块)的区别**

* 基于函数的模块并不是一个能被静态识别的模式（编译器无法识别），它们的API语义只有在运行时才会被考虑进来。因此可以在运行时修改一个模块的API（参考前面关于public API的讨论）。

* <u>ES6模块API是静态的</u>（API不会在运行时改变）。由于编辑器知道这一点，因此可以在（的确也这样做了）编译期检查对导入模块的API成员的引用是否真实存在。如果API引用并不存在，编译器会在编译时就抛出“早期”错误，而不会等到运行期再动态解析（并且报错）。



<u>import</u>可以将一个模块中的一个或多个API导入到当前作用域中，并分别绑定在一个变量上（在我们的例子里是hello）。

<u>module</u>会将整个模块的API导入并绑定到一个变量上（在我们的例子里是foo和bar）。

export会将当前模块的一个标识符（变量、函数）导出为公共API。这些操作可以在模块定义中根据需要使用任意多次。

```javascript
//bar.js
function hello(who) {
  return 'let me introduce: ' + who;
}
export hello;


//foo.js 从bar模块导入hello
import hello from 'bar';

let hungry = 'hippo';

function awesome() {
  console.log(
  	hello(hungry).toUpperCase();
  )
}

//baz.js 导入完整的foo和bar模块
module foo from 'foo';
module bar from 'bar';

console.log(
	bar.hello('rhino')
);
foo.awesome(); 
```



## 原型和原型链

### 来源

> [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2#)



### 原型链图

![chian prototype](https://programmer.help/images/blog/d59acf5d5aca9dad1461354443dd7c17.jpg)





### 构造函数创建对象

```javascript
function Person() {
  
}

let person = new Person();
person.name = 'Kevin';
console.log(person.name); //Kevin
```

在这个例子中，Person 就是一个构造函数，我们使用 new 创建了一个实例对象 person。

### 原型

#### 定义

可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会<u>与之关联另一个对象</u>，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

#### 构造函数与原型关系

* 每个函数都有一个 prototype 属性，它指向了一个对象，这个对象正是调用该构造函数而创建的**实例**的原型对象
 * 如果函数作为普通函数调用,则原型对象没有用;
 * 如果函数作为构造函数调用, 那么它所创建的对象都会由一个隐含的属性(__proto__)也指向该原型对象
 * 原型对象就相当于是一个公共区域,可以被类及该类的所有实例访问 //类-构造函数 实例-函数创建的对象



#### 实例与原型的关系

这是每一个JavaScript对象(除了 null )都具有的一个属性，叫\_\_proto\_\_，这个属性会指向该对象的原型.

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层(Object.prototype)为止。

```javascript
//可以在火狐或者谷歌中输入
function Person() {}

let person = new Person;
console.log(person.__proto__ == Person.prototype); //true
```

#### 原型与构造函数的关系

原型是否有属性指向构造函数或实例呢？

指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，每个原型都有一个 constructor 属性指向关联的构造函数。

```javascript
function Person() {}

console.log(Person.prototype.constructor === Person); //true
```



### 原型链

#### 定义

> 由相互关联的原型组成的链状结构就是原型链

#### 原型链终点

Object.prototype的原型为null

```javascript
console.log(Object.prototype.__proto__ === null); //true
```

null代表什么？

> null 表示“没有对象”，即该处不应该有值。

所以 Object.prototype.\_\_proto\_\_ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思

![原型链](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype5.png)

图中<u>由相互关联的原型组成的链状结构就是原型链</u>，也就是蓝色的这条线。

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



#### \_\_proto\_\_ !!!

绝大部分浏览器都支持这个非标准的方法访问原型，然而<u>它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype</u> ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.\_\_proto\_\_ 时，可以理解成返回了 Object.getPrototypeOf(obj)





#### 真的是继承吗？

> 最后是关于继承，前面我们讲到“每一个对象都会从原型‘继承’属性”，实际上，继承是一个十分具有迷惑性的说法，引用《你不知道的JavaScript》中的话，就是：
>
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





## 面向对象

面向对象语言的3大基本特征: 封装 继承 多态

类, 严格意义上来说,JS当中是没有类的概念的.但是我们可以将构造函数当做类来使用

到了es6版本,才有了class类的关键字. 其实es6的class也是构造函数, 就是个语法糖.







## 继承

### 介绍

> JavaScript各种继承方式和优缺点

### list

* 原型链继承
* 借用构造函数(经典继承)
* 组合继承
* 原型式继承
* 寄生式继承
* 寄生组合式继承



### 原型链继承

> 子类原型 = 父类实例  Child.prototype = new Parent()

**每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。**通俗点说就是，实例通过内部指针可以访问到原型对象，原型对象通过constructor指针，又可以找到构造函数

缺点: 

 1.引用类型的属性被所有实例共享.(基本类型的值更改后不会被共享, why?)

 2.子类不能向父类中传参

```js
function Parent() {
  this.name = 'kevin';
}

Parent.prototype.getName = function() {
  console.log(this.name);
}

Parent.prototype.stringVal = 'parentA';

function Child() {}

Child.prototype = new Parent();

let child1 = new Parent();

console.log(child1.getName()); //'kevin'
```



```javascript
//引用类型的属性被所有实例共享

function Parent() {
  this.names = ['kevin', 'daisy'];
  this.year = 1010
}

function Child() {}

Child.prototype = new Parent();

let child1 = new Child();
child1.names.push('yayu');
child1.year = 'abab';
console.log(child1.names); //['kevin', 'daisy', 'yayu']

let child2 = new Child();
console.log(child2.names); //['kevin', 'daisy', 'yayu']
console.log(child2.year); //1010
```





### 借助构造函数(经典继承)

> 在子类构造函数中,通过call()/apply()调用父类构造函数

在解决原型对象中包含引用类型值所带来问题的过程中，开发人员开始使用一种叫做**借用构造函数**的技术。实现原理是，在子类的构造函数中，通过 apply ( ) 或 call ( )的形式，调用父类构造函数，以实现继承。

核心: 使用父类的构造函数增强子类实例, 等于是复制父类的实例给子类(没用到原型)

优点:

* 避免原型链继承中引用类型的属性被所有实例共享
* 可以在子类中向父类传参

缺点:

* 方法都在构造函数中定义,每次创建实例都会创建一遍方法

* 只能继承父类的实例属性和方法,不能继承原型的属性/方法

```js
function Parent() {
  this.name = ['kevin', 'daisy'];
}

function Child() {
  Parent.call(this);
}

let child1 = new Child();
child1.names.push('yayu');
console.log(child1.names); //["kevin", "daisy", "yayu"]

let child2 = new Child();
console.log(child2.names); //["kevin", "daisy"]
```



```javascript
function Parent(name) {
  this.name = name;
}

function Child(name) {
  Parent.call(this, name);
}

let child1 = new Child('kevin');
console.log(child1.name); //'kevin'

let child2 = new Child('daisy');
console.log(child2.name); //'daisy'
```



```javascript
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



### 组合继承

> 组合继承（有时候也叫伪经典继承）综合了原型链和盗用构造函数，将两者的优点集中了起来。基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。
>
> 这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性'

优点: 融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式

方式一:

 1.借用父类的构造函数: Person.call(this,name,age)
 2.子类原型等于父类的实例 Student.prototype = new Person();
 3.子类原型构造器为子类型 Student.prototype.constructor = Student;

方式二:

 1.子类继承父类: class Student extends Person;
 2.子类构造器中调用父类的构造: super(name,age)

```javascript
function Parent(name) {
  this.name = naem;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function() {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();

let child1 = new Child('kevin', '18');
child1.colors.push('black');
console.log(child1.name); //'kevin'
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

let child2 = new Child('daisy', '20');
console.log(child2.name); //'daisy'
console.log(child2.age); //20
console.log(child2.colors); //["red", "blue", "green"]
```



### 原型式继承

Douglas Crockford的原型式继承. 这个object()函数会创建一个临时构造函数，将传入的对象赋值给这个构造函数的原型，然后返回这个临时类型的一个实例。本质上，object()是对传入的对象执行了一次浅复制.

这种原型式继承适用的情况: 你有一种对象,想在它的基础上再创建一个新对象.就是就是 ES5 Object.create 的模拟实现.

```javascript
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
```

原型式继承的缺点:

跟原型链继承一样., 包含引用类型的属性值始终都会共享相应的值

```javascript
let person = {
  name: 'kevin',
  frineds: ['daisy', 'kelly']
};

let person1 = object(person);
let person2 = object(person);

person1.name = 'person1';
console.log(person2.name); //'kevin'

person1.friends.push('taylor');
console.log(person2.frineds); //["daisy", "kelly", "taylor"]
```



### 寄生式继承

创建一个仅用于封装继承过程的函数,该函数在内部以某种形式来做增强对象,最后返回对象

```javascript
function createObj(o) {
  let clone = object.create(o);
  clone.sayName = function() {
    console.log('hi');
  }
  return clone;
}
```

缺点: 

跟借用构造函数模式一样,每次创建对象都会创建一遍方法



### 寄生组合式继承

组合式继承的最大缺点是会调用两次父构造函数. 一次是设置子类型实例的原型时;一次是创建子类实例时.

如何避免在子类构造函数中的重复调用呢?

```javascript
function Parent(name) {
  this.name = name;
  this.corlors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function() {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

//关键步骤
function F() {}
F.prototype = Parent.prototype;
Child.prototype = new F();

let child1 = new Child('kevi', '18');
```

封装下这个方法

```javascript
function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}

function prototype(child, parent) {
  let prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}
```

> 这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。



### ES6中类的继承







## 自定义模块化

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



## 事件循环机制Event Loop

### 1.介绍



### 2.可视化

> [JS Visualizer 9000 (jsv9000.app)](https://www.jsv9000.app/)

![Event Loop](https://wx1.sinaimg.cn/large/66fd066bgy1h05megk18vg224y1hge81.gif)

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

当我们调用一个方法的时候，js会生成一个与这个方法对应的执行环境（context），又叫执行上下文。这个执行环境中存在着这个方法的私有作用域，上层作用域的指向，方法的参数，这个作用域中定义的变量以及这个作用域的this对象。 而当一个脚本第一次执行的时候，js引擎会解析这段代码，并将其中的同步代码按照执行顺序加入执行栈中，然后从头开始执行。如果当前执行的是一个方法，那么js会向执行栈中添加这个方法的执行环境，然后进入这个执行环境继续执行其中的代码。当这个执行环境中的代码 执行完毕并返回结果后，js会退出这个执行环境并把这个执行环境销毁，回到上一个方法的执行环境。。这个过程反复进行，直到执行栈中的代码全部执行完毕。

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



### 事件循环模型

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





## JavaScript专题系列-GitHub冴羽的博客

> [mqyqingfeng/Blog: 冴羽写博客的地方，预计写四个系列：JavaScript深入系列、JavaScript专题系列、ES6系列、React系列。 (github.com)](https://github.com/mqyqingfeng/Blog)



### JavaScript专题之函数柯里化(未完成)

> https://juejin.cn/post/6844903490771222542

#### define

维基百科中的定义

> In mathematics and computer science, currying is the technique of translating the evaluation(评估) of a function that takes multiple arguments (or a tuple(数组) of arguments) into evaluating a sequence of functions, each with a single argument.

在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

举个例子

```javascript
function add(a, b) {
  return a + b;
}

//制定add函数,一次传入两个参数即可
add(1, 2); //3

//假设有一个curry函数可以做到柯里化
let addCurry = curry(add);
addCurry(1)(2);
```

#### implemention

curry 的这种用途可以理解为：参数复用。本质上是降低通用性，提高适用性。

//....

#### 1 edition

这个版本的柯里化函数只能用一次,也就是addCurry()函数只能用一次

```javascript
function curry(fn) {
  let argsOut = [].slice.call(arguments, 1);
  return function() {
    let argsInner = [].slice.call(arguments);
    return fn.apply(this, argsOut.concat(argsInner));
  }
}
```

```javascript
//应用
function add(a ,b) {
  return a + b;
}

let addCurry = curry(add, 1, 2);
addCurry() //3
//或者
let addCurry = curry(add, 1);
addCurry(2) //3
//或者
let addCurry = curry(add);
addCurry(1, 2); //3
```

已经有柯里化的感觉了，但是还没有达到要求，不过我们可以把这个函数用作辅助函数，帮助我们写真正的 curry 函数。

#### 2 edition

```javascript
function sub_curry(fn) {
  let argsOut = [].slice.call(arguments, 1);
  return function() {
    let argsInner = [].slice.call(arguments);
    return fn.apply(this, argsOut.concat(argsInner));
  }
}

function curry(fn, length) {
  length = length ||fn.length;
  let slice = Array.prototype.slice;
  return function() {
    if (length > arguments.length) {
      let combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  }
}
```



我们来验证下这个函数:

```javascript
let fn = curry(function(a, b, c) {
  return [a, b, c];
})

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]
```

效果已经达到我们的预期，然而这个 curry 函数的实现好难理解呐……

为了让大家更好的理解这个 curry 函数，我给大家写个极简版的代码：



```javascript
//简单版

function sub_curry(fn) {
  return function() {
    return fn()
  }
}

function curry(fn, length) {
  length = length || 4;
  return function() {
    if (length > 1) {
      return curry(sub_curry(fn), --length);
    } else {
      return fn();
    }
  }
}


let fn0 = function() {
  console.log(1);
}

let fn1 = curry(fn0);

fn1()()()(); //
```

当执行到fn1()时,函数返回:

```javascript
curry(sub_curry(fn0))
//相当于
curry(function() {
  return fn0()
})
```

当执行到fn1()()时,函数返回:

```javascript
curry(sub_curry(function() {
  return fn()
}))
//相当于
curry(function() {
  return (function() {
    return fn0()
  })()
})
//相当于
curry(function() {
  return fn0()
})
```

当执行 fn1()()() 时，函数返回：

```javascript
// 跟 fn1()() 的分析过程一样
curry(function(){
    return fn0()
})
```



当执行到fn1()()()()时, 因为此时length>1为false,所以执行fn():

```javascript 
fn();
//相当于
(function(){
  return fn0()
})()
//相当于
fn0();

```



#### 2.1 更易懂版本

如果你觉得还是无法理解，你可以选择下面这种实现方式，可以实现同样的效果：

```javascript
function curry(fn, args) {
  let length = fn.length;
  args = args || [];
  
  return function() {
    let _args = args.slice(0);
    let arg, i;
    
    for (let i=0; i<arguments.length; i++) {
      arg = arguments[i];
      _args.push(arg);
    }
    
    if (_args.length < length) {
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  }
}
```



#### 3 edition  ???? 看不懂

curry 函数写到这里其实已经很完善了，但是注意这个函数的传参顺序必须是从左到右，根据形参的顺序依次传入，如果我不想根据这个顺序传呢？

我们可以创建一个占位符，比如这样：

```javascript
function curry(fn, args, holes) {
  length = fn.length;
  args = args || [];
  holes = holes || [];
  
  return function() {
    let _args = args.slice(0),
    		_holes = holes.slice(0),
        argsLen = args.length,
        holesLen = holes.length,
        arg, i, index = 0;
    
    for (i=0; i<arguments.length; i++){
      arg = arguments[i];
      if (arg === _&&holesLen) {
        
      }
    }
  }
}
```



### JavaScript专题之偏函数

#### 定义

维基百科中对偏函数 (Partial application) 的定义为：

> In computer science, partial application(or partial function application) refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.
>
> 翻译:
>
> 在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。

什么是元? 元是指函数参数的个数,比如一个带有两个参数的函数被称为二元函数.

来个例子:

```javascript
function add(a, b) {
  return a + b;
}

//执行 add 函数，一次传入两个参数即可
add(1, 2)

//假设有一个 partial 函数可以做到局部应用
let addOne = partial(add, 1);
addOne(2); //3
```



#### 柯里化与局部应用

两者的区别:

* 柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。
* 局部应用则是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数。

如果说两者有什么关系的话，引用 [functional-programming-jargon](https://github.com/hemanth/functional-programming-jargon#partial-application) 中的描述就是：

> Curried functions are automatically partially applied.



#### 重写partial

目的是模仿 underscore 写一个 partial 函数

也许你在想我们可以直接使用 bind 呐，举个例子：

```javascript
function add(a, b) {
    return a + b;
}

var addOne = add.bind(null, 1);

addOne(2) // 3
```



##### 第一版

```javascript
function partial(fn) {
  let args = [].slice.call(arguments, 1);
  return function() {
    let newArrs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArrs);
  }
}
```



demo

```javascript
function add(a, b) {
  return a + b + this.value;
}

let addOne = partial(add, 1);

let value = 1;
let obj = {
  value: 2,
  addOne: addOne
}

obj.addOne(2); //???
//使用bind时, 结果是4
//使用partial时, 结果是5
```



##### 第二版 ????

然而正如 curry 函数可以使用占位符一样，我们希望 partial 函数也可以实现这个功能，我们再来写第二版：

```javascript
let _ = {};

function partial(fn) {
  let args = [].slice.call(arguments, 1);
  return function() {
    let position = 0,
        len = args.length;
    for (let i=0; i<len; i++) {
      args[i] = args[i] === _ ? arguments[position++] : args[i];
    }
    while(position < arguments.length) args.push(arguments[position++]);
    return fn.apply(this, args);
  }
}
```



### JavaScript专题之惰性函数

#### 需求

我们现在需要写一个 foo 函数，这个函数返回首次调用时的 Date 对象，注意是首次。



#### 解决方案

##### 1 普通方法

```javascript
let t;

function foo() {
  if (t) return t;
  t = new Date();
  return t;
}
```

问题有两个，一是污染了全局变量，二是每次调用 foo 的时候都需要进行一次判断。

##### 2 闭包

使用闭包避免污染全局变量

还是没有解决调用时都必须进行一次判断的问题。

```javascript
let foo = (function() {
  let t;
  return function() {
    if (t) return t;
    t = new Date();
    return t;
  }
})
```

##### 3. 函数对象

函数也是一种对象，利用这个特性，我们也可以解决这个问题。

依旧没有解决调用时都必须进行一次判断的问题。

```javascript
function foo() {
  if (foo.t) return foo.t;
  foo.t = new Date();
  return foo.t;
}
```



##### 4. 惰性函数

惰性函数就是解决每次都要进行判断的这个问题，解决原理很简单，<u>重写函数</u>。

如何重写?在函数体内重新赋值, 然后根据需要来返回.

```javascript
let foo = function() {
  let t = new Date();
  foo = function() {
    return t;
  };
  
  return foo();
}
```



#### 应用

DOM 事件添加中，为了兼容现代浏览器和 IE 浏览器，我们需要对浏览器环境进行一次判断：

```javascript
//简化写法

function addEvent(type, e1, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false);
  } else if (window.attachEvent) {
    el.attachEvent('on' + type, fn);
  }
}
```

问题在于我们每当使用一次 addEvent 时都会进行一次判断。

利用惰性函数，我们可以这样做：

```javascript
function addEvent(type, el, fn) {
  if (window.addEventListener) {
    addEvent = function(type, el, fn) {
      el.addEventListener(type, fn, false);
    }
  } else if (window.attachEvent) {
    addEvent = function (type, el, fn) {
      el.attachEvent('on' + type, fn);
    }
  }
}
```

当然,我们可以使用闭包形式

```javascript
let addEvent = (function() {
  if (window.addEventListener) {
    return function(type, el, fn) {
      el.addEventListener(type, fn, false);
    }
  } else if (window.attachEvent) {
    return function(type, el, fn) {
      el.attachEvent('on' + type, fn);
    }
  }
})();
```

当我们每次都需要进行条件判断，其实只需要判断一次，接下来的使用方式都不会发生改变的时候，想想是否可以考虑使用惰性函数。

#### 重要参考

> [peter.michaux.ca - Lazy Function Definition Pattern](http://peter.michaux.ca/articles/lazy-function-definition-pattern)



### JavaScript专题之函数组合   ????

> [JavaScript专题之函数组合 · Issue #45 · mqyqingfeng/Blog (github.com)](https://github.com/mqyqingfeng/Blog/issues/45)

#### 需求

我们需要写一个函数，输入 'kevin'，返回 'HELLO, KEVIN'。

#### 尝试

```javascript
let toUpperCase = function(x) {return x.toUpperCase()};
let hello = function(x) {return 'HELLO, ' + x}
function greet(x) {
  return hello(toUpperCase(x));
}
greet('kevin');
```



#### 优化

试想我们写个compose函数

```javascript
let compose = function(f, g) {
  return function(x) {
    return f(g(x));
  }
}
```

greet函数就可以被优化为:

```javascript
let greet = compose(hello, toUpperCase);
greet('kevin');
```

<u>利用 compose 将两个函数组合成一个函数，让代码**从右向左**运行，而不是由内而外运行，可读性大大提升。这便是函数组合。</u>

但是现在的 compose 函数也只是能支持两个参数，如果有更多的步骤呢？我们岂不是要这样做：

```javascript
compose(d, compose(c, compose(b, a)))
```

为什么我们不写一个帅气的 compose 函数支持传入多个函数呢？这样就变成了：

```javascript
compose(d, c, b, a)
```



#### compose

我们直接抄袭underscore的compose函数的实现:

```javascript
function compose() {
  let args = arguments;
  let start = args.length - 1;
  let i = start;
  return function() {
    let result = args[start].apply(this, arguments);
    while(i--) result = args[i].call(this, result);
    return result;
  }
}
```

现在的 compose 函数已经可以支持多个函数了，然而有了这个又有什么用呢？

在此之前，我们先了解一个概念叫做 pointfree。

#### pointfree

<u>pointfree 指的是函数无须提及将要操作的数据是什么样的</u>。依然是以最初的需求为例：

```javascript
// 需求：输入 'kevin'，返回 'HELLO, KEVIN'。

// 非 pointfree，因为提到了数据：name
let greet = function(name) {
  return ('hello ' + name).toUpperCase();
}

// pointfree
//先定义基本运算,这些可以封装起来复用
let toUpperCase = function(x) {return x.toUpperCase();};
let hello = function(x) {return 'HELLO, ' + x;};

let greet = compose(hello, toUpperCase);
greet('kevin')
```

我们再举个稍微复杂一点的例子，为了方便书写，我们需要借助在[《JavaScript专题之函数柯里化》](https://github.com/mqyqingfeng/Blog/issues/42)中写到的 curry 函数：

```javascript
// 需求：输入 'kevin daisy kelly'，返回 'K.D.K'

// 非 pointfree，因为提到了数据：name
let initials = function(name) {
  return name.split(' ').map(item => item[0].toUpperCase()).join('. ')
}

let initials = function(name) {
  return name.split(' ').map(compose(toUpperCase, head)).join('. ');
}

//pointfree 
// 先定义基本运算
let split = curry(function(separator, str) { str.split(separator) });
let head = function(str) { return str.slice(0, 1) };
let toUpperCase = function(str) { return str.toUpperCase() };
let join = curry(function(sepatator, arr) { return arr.join(separator) });
let map = curry(function(fn, arr) { return arr.map(fn) });

let initials = compose(join(' '), map(compose(toUpperCase, head), split(' ')));

initials('kevin daisy kelly')
```

从这个例子中我们可以看到，利用柯里化（curry）和函数组合 (compose) 非常有助于实现 pointfree。

也许你会想，这种写法好麻烦呐，我们还需要定义那么多的基础函数……可是如果有工具库已经帮你写好了呢？比如 [ramda.js](http://ramda.cn/docs/)：

```javascript
//使用ramda.js
let initials = R.compose(R.join(' '), R.map(R.compose(R.toUpper, R.head)), R.split(' '));
```

而且你也会发现：

> Pointfree 的本质就是使用一些通用的函数，组合出各种复杂运算。上层运算不要直接操作数据，而是通过底层函数去处理。即不使用所要处理的值，只合成运算过程。

那么使用 pointfree 模式究竟有什么好处呢？

> pointfree 模式能够帮助我们减少不必要的命名，让代码保持简洁和通用，更符合语义，更容易复用，测试也变得轻而易举。

#### 实战 ???? 懵逼

这个例子来自于 [Favoring Curry](http://fr.umio.us/favoring-curry/)：

假设我们从服务器获取这样的数据：

```javascript
var data = {
    result: "SUCCESS",
    tasks: [
        {id: 104, complete: false,            priority: "high",
                  dueDate: "2013-11-29",      username: "Scott",
                  title: "Do something",      created: "9/22/2013"},
        {id: 105, complete: false,            priority: "medium",
                  dueDate: "2013-11-22",      username: "Lena",
                  title: "Do something else", created: "9/22/2013"},
        {id: 107, complete: true,             priority: "high",
                  dueDate: "2013-11-22",      username: "Mike",
                  title: "Fix the foo",       created: "9/22/2013"},
        {id: 108, complete: false,            priority: "low",
                  dueDate: "2013-11-15",      username: "Punam",
                  title: "Adjust the bar",    created: "9/25/2013"},
        {id: 110, complete: false,            priority: "medium",
                  dueDate: "2013-11-15",      username: "Scott",
                  title: "Rename everything", created: "10/2/2013"},
        {id: 112, complete: true,             priority: "high",
                  dueDate: "2013-11-27",      username: "Lena",
                  title: "Alter all quuxes",  created: "10/5/2013"}
    ]
};
```

我们需要写一个名为 getIncompleteTaskSummaries 的函数，接收一个 username 作为参数，从服务器获取数据，然后筛选出这个用户的未完成的任务的 ids、priorities、titles、和 dueDate 数据，并且按照日期升序排序。

以 Scott 为例，最终筛选出的数据为：

```javascript
[
  {id: 110, title: "Rename everything", 
   dueDate: "2013-11-15", priority: "medium"},
  {id: 104, title: "Do something", 
   dueDate: "2013-11-29", priority: "high"}
]
```



```javascript
function getIncompleteTaskSummaties(username) {
  return username.tasks.map(item => {
    let obj = {};
  	for (const [key, value] of Object.entries(item)) {
      if (['id','title','dueDate','priority'].includes(key)) {
        obj[key] =  value;
      }
    }
    return obj;
  }).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
}
```

看不懂????

```javascript
//第一版 过程式编程
var fetchData = function() {
    // 模拟
    return Promise.resolve(data)
};

var getIncompleteTaskSummaries = function(membername) {
     return fetchData()
         .then(function(data) {
             return data.tasks;
         })
         .then(function(tasks) {
             return tasks.filter(function(task) {
                 return task.username == membername
             })
         })
         .then(function(tasks) {
             return tasks.filter(function(task) {
                 return !task.complete
             })
         })
         .then(function(tasks) {
             return tasks.map(function(task) {
                 return {
                     id: task.id,
                     dueDate: task.dueDate,
                     title: task.title,
                     priority: task.priority
                 }
             })
         })
         .then(function(tasks) {
             return tasks.sort(function(first, second) {
                 var a = first.dueDate,
                     b = second.dueDate;
                 return a < b ? -1 : a > b ? 1 : 0;
             });
         })
         .then(function(task) {
             console.log(task)
         })
};

getIncompleteTaskSummaries('Scott')
```

如果使用pointfree模式:

```javascript
// 第二版 pointfree 改写
var fetchData = function() {
    return Promise.resolve(data)
};

// 编写基本函数
var prop = curry(function(name, obj) {
    return obj[name];
});

var propEq = curry(function(name, val, obj) {
    return obj[name] === val;
});

var filter = curry(function(fn, arr) {
    return arr.filter(fn)
});

var map = curry(function(fn, arr) {
    return arr.map(fn)
});

var pick = curry(function(args, obj){
    var result = {};
    for (var i = 0; i < args.length; i++) {
        result[args[i]] = obj[args[i]]
    }
    return result;
});

var sortBy = curry(function(fn, arr) {
    return arr.sort(function(a, b){
        var a = fn(a),
            b = fn(b);
        return a < b ? -1 : a > b ? 1 : 0;
    })
});

var getIncompleteTaskSummaries = function(membername) {
    return fetchData()
        .then(prop('tasks'))
        .then(filter(propEq('username', membername)))
        .then(filter(propEq('complete', false)))
        .then(map(pick(['id', 'dueDate', 'title', 'priority'])))
        .then(sortBy(prop('dueDate')))
        .then(console.log)
};

getIncompleteTaskSummaries('Scott')
```

如果直接使用 ramda.js，你可以省去编写基本函数:

```javascript
// 第三版 使用 ramda.js
var fetchData = function() {
    return Promise.resolve(data)
};

var getIncompleteTaskSummaries = function(membername) {
    return fetchData()
        .then(R.prop('tasks'))
        .then(R.filter(R.propEq('username', membername)))
        .then(R.filter(R.propEq('complete', false)))
        .then(R.map(R.pick(['id', 'dueDate', 'title', 'priority'])))
        .then(R.sortBy(R.prop('dueDate')))
        .then(console.log)
};

getIncompleteTaskSummaries('Scott')
```

当然了，利用 compose，你也可以这样写：

```javascript
// 第四版 使用 compose
var fetchData = function() {
    return Promise.resolve(data)
};

var getIncompleteTaskSummaries = function(membername) {
    return fetchData()
        .then(R.compose(
            console.log,
            R.sortBy(R.prop('dueDate')),
            R.map(R.pick(['id', 'dueDate', 'title', 'priority'])
            ),
            R.filter(R.propEq('complete', false)),
            R.filter(R.propEq('username', membername)),
            R.prop('tasks'),
        ))
};

getIncompleteTaskSummaries('Scott')
```

compose 是从右到左依此执行，当然你也可以写一个从左到右的版本，但是从右向左执行更加能够反映数学上的含义。

ramda.js 提供了一个 R.pipe 函数，可以做的从左到右，以上可以改写为：

```javascript
// 第五版 使用 R.pipe
var getIncompleteTaskSummaries = function(membername) {
    return fetchData()
        .then(R.pipe(
            R.prop('tasks'),
            R.filter(R.propEq('username', membername)),
            R.filter(R.propEq('complete', false)),
            R.map(R.pick(['id', 'dueDate', 'title', 'priority'])
            R.sortBy(R.prop('dueDate')),
            console.log,
        ))
};
```



### JavaScript专题之函数记忆 ????

> [JavaScript专题之函数记忆 · Issue #46 · mqyqingfeng/Blog (github.com)](https://github.com/mqyqingfeng/Blog/issues/46)

#### 定义

函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。

举个例子:

```javascript
function add(a, b) {
  return a + b;
}

//假设memorize可以实现函数记忆
let memorizeAdd = memorize(add);

memorizeAdd(1, 2); //3
memorizeAdd(1, 2); //相同的参数，第二次调用时，从缓存中取出数据，而非重新计算一次
```



#### 原理

实现这样一个 memoize 函数很简单，原理上只用把参数和对应的结果数据存到一个对象中，调用时，判断参数对应的数据是否存在，存在就返回对应的结果数据。

#### 第一版

```javascript
function memorize(f) {
  let cache = {};
  return function() {
    let key = arguments.length + Array.prototype.join.call(arguments, ',');
    if (key in cache) {
      return cache[key]
    } else {
      return cache[key] = f.apply(this, arguments);
    }
  }
}

//key为什么要这么处理?
//担心 Array.prototype.join.call(arguments, ",") 会导致缓存的 key 值相同，比如在一些特殊情况下：
function add(a, b) {
  console.log(a + b);
}
let memorizeAdd = memorize(add);
memorizeAdd(1, 2); //3
memorizeAdd('1,2'); //3
```

我们来测试一下：

```
var add = function(a, b, c) {
  return a + b + c
}

var memoizedAdd = memoize(add)

console.time('use memoize')
for(var i = 0; i < 100000; i++) {
    memoizedAdd(1, 2, 3)
}
console.timeEnd('use memoize')

console.time('not use memoize')
for(var i = 0; i < 100000; i++) {
    add(1, 2, 3)
}
console.timeEnd('not use memoize')
```

在 Chrome 中，使用 memoize 大约耗时 60ms，如果我们不使用函数记忆，大约耗时 1.3 ms 左右。

#### 注意

什么，我们使用了看似高大上的函数记忆，结果却更加耗时，这个例子近乎有 60 倍呢！

所以，函数记忆也并不是万能的，你看这个简单的场景，其实并不适合用函数记忆。

需要注意的是，函数记忆只是一种编程技巧，本质上是牺牲算法的空间复杂度以换取更优的时间复杂度，在客户端 JavaScript 中代码的执行时间复杂度往往成为瓶颈，因此在大多数场景下，这种牺牲空间换取时间的做法以提升程序执行效率的做法是非常可取的。

#### 第二版

因为第一版使用了 join 方法，我们很容易想到当参数是对象的时候，就会自动调用 toString 方法转换成 `[Object object]`，再拼接字符串作为 key 值。我们写个 demo 验证一下这个问题：

```JavaScript
var propValue = function(obj){
    return obj.value
}

var memoizedAdd = memoize(propValue)

console.log(memoizedAdd({value: 1})) // 1
console.log(memoizedAdd({value: 2})) // 1
```

两者都返回了 1，显然是有问题的，所以我们看看 underscore 的 memoize 函数是如何实现的：

```javascript
// 第二版 (来自 underscore 的实现)
var memoize = function(func, hasher) {
    var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    memoize.cache = {};
    return memoize;
};
```

这个实现可以看出，underscore 默认使用 function 的第一个参数作为 key，所以如果直接使用

```javascript
var add = function(a, b, c) {
  return a + b + c
}

var memoizedAdd = memoize(add)

memoizedAdd(1, 2, 3) // 6
memoizedAdd(1, 2, 4) // 6
```

肯定是有问题的，如果要支持多参数，我们就需要传入 hasher 函数，自定义存储的 key 值。所以我们考虑使用 JSON.stringify：

```javascript
var memoizedAdd = memoize(add, function(){
    var args = Array.prototype.slice.call(arguments)
    return JSON.stringify(args)
})

console.log(memoizedAdd(1, 2, 3)) // 6
console.log(memoizedAdd(1, 2, 4)) // 7
```

如果使用 JSON.stringify，参数是对象的问题也可以得到解决，因为存储的是对象序列化后的字符串。

#### 使用场景

我们以斐波那契数列为例：

```
var count = 0;
var fibonacci = function(n){
    count++;
    return n < 2? n : fibonacci(n-1) + fibonacci(n-2);
};
for (var i = 0; i <= 10; i++){
    fibonacci(i)
}

console.log(count) // 453
```

我们会发现最后的 count 数为 453，也就是说 fibonacci 函数被调用了 453 次！也许你会想，我只是循环到了 10，为什么就被调用了这么多次，所以我们来具体分析下：

```
当执行 fib(0) 时，调用 1 次

当执行 fib(1) 时，调用 1 次

当执行 fib(2) 时，相当于 fib(1) + fib(0) 加上 fib(2) 本身这一次，共 1 + 1 + 1 = 3 次

当执行 fib(3) 时，相当于 fib(2) + fib(1) 加上 fib(3) 本身这一次，共 3 + 1 + 1 = 5 次

当执行 fib(4) 时，相当于 fib(3) + fib(2) 加上 fib(4) 本身这一次，共 5 + 3 + 1 = 9 次

当执行 fib(5) 时，相当于 fib(4) + fib(3) 加上 fib(5) 本身这一次，共 9 + 5 + 1 = 15 次

当执行 fib(6) 时，相当于 fib(5) + fib(4) 加上 fib(6) 本身这一次，共 15 + 9 + 1 = 25 次

当执行 fib(7) 时，相当于 fib(6) + fib(5) 加上 fib(7) 本身这一次，共 25 + 15 + 1 = 41 次

当执行 fib(8) 时，相当于 fib(7) + fib(6) 加上 fib(8) 本身这一次，共 41 + 25 + 1 = 67 次

当执行 fib(9) 时，相当于 fib(8) + fib(7) 加上 fib(9) 本身这一次，共 67 + 41 + 1 = 109 次

当执行 fib(10) 时，相当于 fib(9) + fib(8) 加上 fib(10) 本身这一次，共 109 + 67 + 1 = 177 次
```

所以执行的总次数为：177 + 109 + 67 + 41 + 25 + 15 + 9 + 5 + 3 + 1 + 1 = 453 次！

如果我们使用函数记忆呢？

```
var count = 0;
var fibonacci = function(n) {
    count++;
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci = memoize(fibonacci)

for (var i = 0; i <= 10; i++) {
    fibonacci(i)
}

console.log(count) // 12
```

我们会发现最后的总次数为 12 次，因为使用了函数记忆，调用次数从 453 次降低为了 12 次!

兴奋的同时不要忘记思考：为什么会是 12 次呢？

从 0 到 10 的结果各储存一遍，应该是 11 次呐？咦，那多出来的一次是从哪里来的？

所以我们还需要认真看下我们的写法，在我们的写法中，其实我们用生成的 fibonacci 函数覆盖了原本了 fibonacci 函数，当我们执行 fibonacci(0) 时，执行一次函数，cache 为 {0: 0}，但是当我们执行 fibonacci(2) 的时候，执行 fibonacci(1) + fibonacci(0)，因为 fibonacci(0) 的值为 0，`!cache[address]` 的结果为 true，又会执行一次 fibonacci 函数。原来，多出来的那一次是在这里！



### JavaScript专题之乱序

> [JavaScript专题之乱序 · Issue #51 · mqyqingfeng/Blog (github.com)](https://github.com/mqyqingfeng/Blog/issues/51)

#### 乱序

乱序的意思就是将数组打乱。

#### Math.random

一个经常会遇见的写法是使用 Math.random()：

```javascript
let values = [1,2,3,4,5];

values.sort(() => Math.random() - 0.5);

console.log(values)
```

`Math.random() - 0.5` 随机得到一个正数、负数或是 0，如果是正数则降序排列，如果是负数则升序排列，如果是 0 就不变，然后不断的升序或者降序，最终得到一个乱序的数组。

看似很美好的一个方案，实际上，效果却不尽如人意。不信我们写个 demo 测试一下：

```javascript
let times = [0,0,0,0,0];

for (let i=0; i<100000; i++) {
  let arr = [1,2,3,4,5];
  arr.sort(() => Math.random() - 0.5);
  times[arr[4] - 1]++;
}

console.log(times);
```

测试原理是：将 `[1, 2, 3, 4, 5]` 乱序 10 万次，计算乱序后的数组的最后一个元素是 1、2、3、4、5 的次数分别是多少。

一次随机的结果为：

```javascript
[30636, 30906, 20456, 11743, 6259]
```

结果表示 10 万次中，数组乱序后的最后一个元素是 1 的情况共有 30636 次，是 2 的情况共有 30906 次，其他依此类推。

我们会发现，最后一个元素为 5 的次数远远低于为 1 的次数，所以这个方案是有问题的。

#### 插入排序

如果要追究这个问题所在，就必须了解 sort 函数的原理，然而 ECMAScript 只规定了效果，没有规定实现的方式，所以不同浏览器实现的方式还不一样。

为了解决这个问题，我们以 v8 为例，v8 在处理 sort 方法时，当目标数组长度小于 10 时，使用插入排序；反之，使用快速排序和插入排序的混合排序。

所以我们来看看 v8 的源码，因为是用 JavaScript 写的，大家也是可以看懂的。

源码地址：https://github.com/v8/v8/blob/master/src/js/array.js

为了简化篇幅，我们对 `[1, 2, 3]` 这个数组进行分析，数组长度为 3，此时采用的是插入排序。

插入排序的源码是：

```javascript
function InsertionSort(a, from, to) {
  for (let i = from+1; i<to; i++) {
    let element = a[i];
    for (let j=i-1; j>=from; j--) {
      let tmp = arr[j];
      let order = comparefn(tmp, element);
      if (order > 0) {
        a[j+1] = tmp;
      } else {
        break;
      }
    }
    a[j+1] = element;
  }
}
```

其原理在于将第一个元素视为有序序列，遍历数组，将之后的元素依次插入这个构建的有序序列中。

我们来个简单的示意图：

![](https://camo.githubusercontent.com/dd3f21a42c693891a11a5ec75e56d8be95c269e3399969c6aeec05cce2aa7d82/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f736f72742f696e73657274696f6e2e676966)



#### 具体分析

明白了插入排序的原理，我们来具体分析下 [1, 2, 3] 这个数组乱序的结果。

演示代码为：

```javascript
let values = [1,2,3];

values.sort(() => Math.random() - 0.5);
```

注意此时 sort 函数底层是使用插入排序实现，InsertionSort 函数的 from 的值为 0，to 的值为 3。

我们开始逐步分析乱序的过程：

因为插入排序视第一个元素为有序的，所以数组的外层循环从 `i = 1` 开始，a[i] 值为 2，此时内层循环遍历，比较 `compare(1, 2)`，因为 `Math.random() - 0.5` 的结果有 50% 的概率小于 0 ，有 50% 的概率大于 0，所以有 50% 的概率数组变成 [2, 1, 3]，50% 的结果不变，数组依然为 [1, 2, 3]。

假设依然是 [1, 2, 3]，我们再进行一次分析，接着遍历，`i = 2`，a[i] 的值为 3，此时内层循环遍历，比较 `compare(2, 3)`：

有 50% 的概率数组不变，依然是 `[1, 2, 3]`，然后遍历结束。

有 50% 的概率变成 [1, 3, 2]，因为还没有找到 3 正确的位置，所以还会进行遍历，所以在这 50% 的概率中又会进行一次比较，`compare(1, 3)`，有 50% 的概率不变，数组为 [1, 3, 2]，此时遍历结束，有 50% 的概率发生变化，数组变成 [3, 1, 2]。

综上，在 [1, 2, 3] 中，有 50% 的概率会变成 [1, 2, 3]，有 25% 的概率会变成 [1, 3, 2]，有 25% 的概率会变成 [3, 1, 2]。

另外一种情况 [2, 1, 3] 与之分析类似，我们将最终的结果汇总成一个表格：

| 数组          | i = 1           | i = 2         | 总计          |
| ------------- | --------------- | ------------- | ------------- |
| [1, 2, 3]     | 50% [1, 2, 3]   | 50% [1, 2, 3] | 25% [1, 2, 3] |
| 25% [1, 3, 2] | 12.5% [1, 3, 2] |               |               |
| 25% [3, 1, 2] | 12.5% [3, 1, 2] |               |               |
| 50% [2, 1, 3] | 50% [2, 1, 3]   | 25% [2, 1, 3] |               |
| 25% [2, 3, 1] | 12.5% [2, 3, 1] |               |               |
| 25% [3, 2, 1] | 12.5% [3, 2, 1] |               |               |

为了验证这个推算是否准确，我们写个 demo 测试一下：

```
var times = 100000;
var res = {};

for (var i = 0; i < times; i++) {
    
    var arr = [1, 2, 3];
    arr.sort(() => Math.random() - 0.5);
    
    var key = JSON.stringify(arr);
    res[key] ? res[key]++ :  res[key] = 1;
}

// 为了方便展示，转换成百分比
for (var key in res) {
    res[key] = res[key] / times * 100 + '%'
}

console.log(res)
```

这是一次随机的结果：

[![Math random 效果演示](https://camo.githubusercontent.com/cee66d8a65ef2c9ea96826083cf8af395c3d3e73e78f4428c3eaacaae5c51606/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f73687566666c652f6d61746852616e646f6d2e706e67)](https://camo.githubusercontent.com/cee66d8a65ef2c9ea96826083cf8af395c3d3e73e78f4428c3eaacaae5c51606/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f73687566666c652f6d61746852616e646f6d2e706e67)

我们会发现，乱序后，`3` 还在原位置(即 [1, 2, 3] 和 [2, 1, 3]) 的概率有 50% 呢。

所以根本原因在于什么呢？其实就在于在插入排序的算法中，当待排序元素跟有序元素进行比较时，一旦确定了位置，就不会再跟位置前面的有序元素进行比较，所以就乱序的不彻底。

那么如何实现真正的乱序呢？而这就要提到经典的 Fisher–Yates 算法。

#### Fisher-Yates

为什么叫 Fisher–Yates 呢？ 因为这个算法是由 Ronald Fisher 和 Frank Yates 首次提出的。

话不多说，我们直接看 JavaScript 的实现：

```javascript
function shuffle(a) {
  let j, x, i;
  for (i=a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i-1];
    a[i-1] = a[j];
    a[j] = x;
  }
  return a;
}
```

原理很简单，就是遍历数组元素，然后将当前元素与以后随机位置的元素进行交换，从代码中也可以看出，这样乱序的就会更加彻底。

如果利用 ES6，代码还可以简化成：

```javascript
function shuffle(a) {
  for (let i=a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i-1], a[j]] = [a[j], a[i-1]];
  }
  return a;
}
```



<<<<<<< HEAD

### JavaScript专题之偏函数

#### 定义

维基百科中对偏函数 (Partial application) 的定义为：

> In computer science, partial application(or partial function application) refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.
>
> 翻译:
>
> 在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。

什么是元? 元是指函数参数的个数,比如一个带有两个参数的函数被称为二元函数.

来个例子:

```javascript
function add(a, b) {
  return a + b;
}

//执行 add 函数，一次传入两个参数即可
add(1, 2)

//假设有一个 partial 函数可以做到局部应用
let addOne = partial(add, 1);
addOne(2); //3
```



#### 柯里化与局部应用

两者的区别:

* 柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。
* 局部应用则是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数。

如果说两者有什么关系的话，引用 [functional-programming-jargon](https://github.com/hemanth/functional-programming-jargon#partial-application) 中的描述就是：

> Curried functions are automatically partially applied.



#### 重写partial

目的是模仿 underscore 写一个 partial 函数

也许你在想我们可以直接使用 bind 呐，举个例子：

```javascript
function add(a, b) {
    return a + b;
}

var addOne = add.bind(null, 1);

addOne(2) // 3
```



#### 第一版

```javascript
function partial(fn) {
  let args = [].slice.call(arguments, 1);
  return function() {
    let newArrs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArrs);
  }
}
```



demo

```javascript
function add(a, b) {
  return a + b + this.value;
}

let addOne = partial(add, 1);

let value = 1;
let obj = {
  value: 2,
  addOne: addOne
}

obj.addOne(2); //???
//使用bind时, 结果是4
//使用partial时, 结果是5
```



#### 第二版 ????

然而正如 curry 函数可以使用占位符一样，我们希望 partial 函数也可以实现这个功能，我们再来写第二版：

```javascript
let _ = {};

function partial(fn) {
  let args = [].slice.call(arguments, 1);
  return function() {
    let position = 0,
        len = args.length;
    for (let i=0; i<len; i++) {
      args[i] = args[i] === _ ? arguments[position++] : args[i];
    }
    while(position < arguments.length) args.push(arguments[position++]);
    return fn.apply(this, args);
  }
}
```



### JavaScript专题之惰性函数

#### 需求

我们现在需要写一个 foo 函数，这个函数返回首次调用时的 Date 对象，注意是首次。



#### 解决方案

##### 1 普通方法

```javascript
let t;

function foo() {
  if (t) return t;
  t = new Date();
  return t;
}
```

问题有两个，一是污染了全局变量，二是每次调用 foo 的时候都需要进行一次判断。

##### 2 闭包

使用闭包避免污染全局变量

还是没有解决调用时都必须进行一次判断的问题。

```javascript
let foo = (function() {
  let t;
  return function() {
    if (t) return t;
    t = new Date();
    return t;
  }
})
```

##### 3. 函数对象

函数也是一种对象，利用这个特性，我们也可以解决这个问题。

依旧没有解决调用时都必须进行一次判断的问题。

```javascript
function foo() {
  if (foo.t) return foo.t;
  foo.t = new Date();
  return foo.t;
}
```



##### 4. 惰性函数

惰性函数就是解决每次都要进行判断的这个问题，解决原理很简单，重写函数。

```javascript
let foo = function() {
  let t = new Date();
  foo = function() {
    return t;
  };
  
  return foo();
}
```



#### 应用

DOM 事件添加中，为了兼容现代浏览器和 IE 浏览器，我们需要对浏览器环境进行一次判断：

```javascript
//简化写法

function addEvent(type, e1, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false);
  } else if (window.attachEvent) {
    el.attachEvent('on' + type, fn);
  }
}
```

问题在于我们每当使用一次 addEvent 时都会进行一次判断。

利用惰性函数，我们可以这样做：

：

```
function addEvent (type, el, fn) {
    if (window.addEventListener) {
        addEvent = function (type, el, fn) {
            el.addEventListener(type, fn, false);
        }
    }
    else if(window.attachEvent){
        addEvent = function (type, el, fn) {
            el.attachEvent('on' + type, fn);
        }
    }
}
```

当然我们也可以使用闭包的形式：

```
var addEvent = (function(){
    if (window.addEventListener) {
        return function (type, el, fn) {
            el.addEventListener(type, fn, false);
        }
    }
    else if(window.attachEvent){
        return function (type, el, fn) {
            el.attachEvent('on' + type, fn);
        }
    }
})();
```

当我们每次都需要进行条件判断，其实只需要判断一次，接下来的使用方式都不会发生改变的时候，想想是否可以考虑使用惰性函数。

重要参考

[Lazy Function Definition Pattern](http://peter.michaux.ca/articles/lazy-function-definition-pattern)





### JavaScript专题之解读 v8 排序源码

> https://github.com/mqyqingfeng/Blog/issues/52)




### JavaScript专题之如何判断两个参数相等

#### 前言

> https://github.com/mqyqingfeng/Blog/issues/41





## JavaScript underscore系列 (未开始)

### 来源:

> [mqyqingfeng/Blog: 冴羽写博客的地方，预计写四个系列：JavaScript深入系列、JavaScript专题系列、ES6系列、React系列。 (github.com)](https://github.com/mqyqingfeng/Blog)







## 防抖函数

> https://github.com/mqyqingfeng/Blog/issues/22

### 前言

在前端开发中会遇到一些频繁的事件触发，比如：

1. window 的 resize、scroll
2. mousedown、mousemove
3. keyup、keydown
   ……

如果是复杂的回调函数或是 ajax 请求呢? 假设 1 秒触发了 60 次，每个回调就必须在 1000 / 60 = 16.67ms 内完成，否则就会有卡顿出现。

来个例子:

index.html文件:

```html
<!doctype html>
<html>
	<head>
    <meta charset='utf-8'>
    <meta http-equiv='x-ua-compatible' content='IE=edge, chrome=1'>
    <title>debounce</title>
    <style>
      #container{
        width:100%; height:200px;line-height:200px;text-align:center;
      }
    </style>
  </head>
  <body>
    <div id='container'></div>
    <script src='debounce.js'></script>
  </body>
</html>
```



JS文件:

```javascript
let count = 1;
let container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
}

container.onmousemove = getUserAction;
```





为了解决这个问题，一般有两种解决方案：

1. debounce 防抖
2. throttle 节流

**防抖原理**

* 尽管触发事件，但是我一定在事件<span style="color:red">触发 n 秒后才执行</span>;

* 如果你在一个事件触发的 n 秒内又触发了这个事件，以新的事件的时间为准，n 秒后才执行.
* 就是要等你触发完事件 n 秒内不再触发事件

### 第一版

```javascript
function debounce (func, wait) {
  let timeId;
  return function () {
    clearTimeout(timeId);
    timeId = setTimeout(func, wait);
  }
}

//使用闭包的原因?
//1.需要获取函数调用产生的标志,如果不使用闭包,调用标志应该声明在全局中,变量污染问题
//2.
```

如果我们要使用它，以最一开始的例子为例：

```
container.onmousemove = debounce(getUserAction, 1000);
```

现在随你怎么移动，反正你移动完 1000ms 内不再触发，我才执行事件。从 165 次降低成了 1 次!.看看使用效果：

![1](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/1.13oxbw7r57ng.gif)



**存在的问题**

> this指向问题

如果我们在 `getUserAction` 函数中 `console.log(this)`，在不使用 `debounce` 函数的时候，`this` 的值为：

```html
<div id="container"></div>
```

如果使用我们的 debounce 函数，`getUserAction`函数中的this 就会指向 Window 对象,因为setTimeout中的函数是在全局环境中执行的.

所以我们需要将 this 指向正确的对象。

debounce函数中的this指向的是window

debounce内的闭包函数中的this指向的是绑定的DOM节点

```javascript
let count = 1,
    container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
}

container.onmousemove = getUserAction;

//添加防抖函数后
container.onmousemove = debounce(getUserAction, 1000);
```



但如果我们使用debounce函数,this就会指向Window对象.



### 第二版(修复this问题)

```javascript
function debounce(func, wait) {
  let timeId;
  // 这个层级中的this指向window 因为在JS环境中直接调用
  return function() {
    //这个执行上下文中的this指向DOM节点
    let context = this;
    clearTimeout(timeId);
    timeId = setTimeout(function() { func.call(context) }, wait);
  }
}
```

**存在的问题**

JavaScript 在事件处理函数中会提供事件对象 event，我们修改下 getUserAction 函数：

```javascript
function getUserAction(e) {
  console.log(e);
  container.innerHTML = count++;
}
```

如果我们不使用debounce函数, 这里会打印MouseEvent对象, 如图所示:

![](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/image.b4rj2g2gg3c.webp)



但是,我们在debounce函数中,却指回打印undefined

### 第三版(修复事件对象传递)

```javascript
function debounce(func, wait) {
  let timeId;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timeId);
    timeId = setTimeout(function() {func.apply(context, args)}, wait);
  }
}
```



### 第四版(立即执行)

新增需求: 

不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。

通过加一个immediate参数来判断是否是立即执行.

```javascript
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this,
        args = arguments;
    
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      console.log('timeId', timeId); //第一次为undefined 以后均为null
      //如果已经执行, 不再执行
      let callNow = !timeout;
      timeout = setTimeout(function() { timeout = null }, wait);
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function() {func.apply(context, args)}, wait);
    }
  }
}
```

这个函数没有第一时间理解. onmousemove事件绑定的函数是debounce内返回的那个函数.

这个函数需要常回来看看 ,理解的并不好.

效果如图:

![68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f6465626f756e63652f6465626f756e63652d342e676966](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f6465626f756e63652f6465626f756e63652d342e676966.2lfn802pm700.gif)

### 第五版(返回值) ????

此时注意一点，就是getUserAction 函数可能是有返回值的，所以我们也要返回函数的执行结果，但是当 immediate 为 false 的时候，<span style="text-decoration: underline wavy">因为使用了 setTimeout ，我们将 func.apply(context, args) 的返回值赋给变量，最后再 return 的时候，值将会一直是 undefined</span>，所以我们只在 immediate 为 true 的时候返回函数的执行结果。

```javascript
function debounce(func, wait, immeidate) {
  let timeout, result;
  return function() {
    let context = this,
        args = arguments;
    
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(function() { timeout = null }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function() { func.apply(context, args)}, wait);
    }
    return result;
  }
}
```

Note:

setTimeout(fn, wait)定时器中函数的返回值问题,需要找资料加深理解.



### 第六版(取消防抖立即触发)

最后我们再思考一个小需求，我希望能取消 debounce 函数，比如说我 debounce 的时间间隔是 10 秒钟，immediate 为 true，这样的话，我只有等 10 秒后才能重新触发事件，现在我希望有一个按钮，点击后，取消防抖，这样我再去触发，就可以又立刻执行.

```javascript
function debounce(func, wait, immediate) {
  let timeout, result;
  let debounced = function() {
    let context = this,
        args = arguments;
    
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait)
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function() {func.apply(context, args)}, wait);
    }
    return result;
  }
  deboundced.cancel = function() {
    cleatTimeout(timeout);
    timeout = null;
  }
  return debounced;
}
```



## 节流函数

> [JavaScript专题之跟着 underscore 学节流 · Issue #26 · mqyqingfeng/Blog (github.com)](https://github.com/mqyqingfeng/Blog/issues/26)



### 原因

同防抖函数中的原因: 

高频事件需要在一定时间内处理,如果函数处理的时间大于平均每次的时间,那么就会造成卡顿.

### 原理

如果你持续触发事件，<span style="color:red">每隔一段时间只执行一次事件</span>。

根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。

关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。



### 时间戳方案

使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。

```javascript
//第一版

function throttle(func, wait) {
  let context, args;
  let previous = 0;
  return function() {
    let now = +new Date();
    context = this;
    args = arguments;
    
   	if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    } 
  }
}
```

例子依然是用讲 debounce 中的例子，如果你要使用：

```javascript
container.onmousemove = throttle(getUserAction, 1000);
```

效果如图:

![tt](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/tt.k0kq8gr42u8.gif)



### 定时器方案

当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。

```javascript
function throttle(func, wait) {
  let timeout,
      previous = 0;
  
  return function() {
    context = this;
    args = arguments;
    if (!timeout) {
      timeout = setTimeout(function() {
        timeout = null;
        func.apply(context, args)
      }, wait)
    }
  }
}
```

为了让效果更加明显，我们设置 wait 的时间为 3s，效果演示如下：

![ttt](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/ttt.4dx160w341e0.gif)

我们可以看到：当鼠标移入的时候，事件不会立刻执行，晃了 3s 后终于执行了一次，此后每 3s 执行一次，当数字显示为 3 的时候，立刻移出鼠标，相当于大约 9.2s 的时候停止触发，但是依然会在第 12s 的时候执行一次事件。



所以比较两个方法：

1. 第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
2. 第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件





### 时间戳+定时器方案 ????

功能要求: 鼠标移入能立刻执行，停止触发的时候还能再执行一次.

```javascript
function throttle(func, wait) {
  let timeout, context, args, result;
  let previous = 0;
  
  let later = function() {
    previous = +new Date();
    timeout = null;
    func.apply(context, args)
  };
  
  let throttled = function() {
    let now = +new Date();
    //下次触发 func 剩余的时间
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    
    //如果没有剩余时间了或者你改了系统时间
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
  
  return throttled;
}
```

效果图如下:

鼠标移入，事件立刻执行，晃了 3s，事件再一次执行，当数字变成 3 的时候，也就是 6s 后，我们立刻移出鼠标，停止触发事件，9s 的时候，依然会再执行一次事件。

![68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f7468726f74746c652f7468726f74746c65332e676966](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f7468726f74746c652f7468726f74746c65332e676966.4uxh87j1z9q0.gif)

### 优化 ????

我有时也希望无头有尾，或者有头无尾，这个咋办？

那我们设置个 options 作为第三个参数，然后根据传的值判断到底哪种效果，我们约定:

leading：false 表示禁用第一次执行
trailing: false 表示禁用停止触发的回调

```javascript
// 第四版
function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    return throttled;
}
```



### 取消

在 debounce 的实现中，我们加了一个 cancel 方法，throttle 我们也加个 cancel 方法：

```javascript
// 第五版 非完整代码，完整代码请查看最后的演示代码链接
...
throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
}
...
```



### 注意

我们要注意 underscore 的实现中有这样一个问题：

那就是 `leading：false` 和 `trailing: false` 不能同时设置。

如果同时设置的话，比如当你将鼠标移出的时候，因为 trailing 设置为 false，停止触发的时候不会设置定时器，所以只要再过了设置的时间，再移入的话，就会立刻执行，就违反了 leading: false，bug 就出来了，所以，这个 throttle 只有三种用法：

```javascript
container.onmousemove = throttle(getUserAction, 1000);
container.onmousemove = throttle(getUserAction, 1000, {
    leading: false
});
container.onmousemove = throttle(getUserAction, 1000, {
    trailing: false
});
```







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

### 概述

在 JavaScript 中，**迭代器**是一个对象，它定义一个序列，并在终止时可能返回一个返回值。

迭代器是通过使用 `next()` 方法实现 [Iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol) 的任何一个对象.

一旦创建，迭代器对象可以通过重复调用next（）显式地迭代。 

迭代一个迭代器被称为消耗了这个迭代器，因为它通常只能执行一次。 



### 实现

> [迭代器和生成器 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables)

它允许创建一个简单的范围迭代器，它定义了从开始（包括）到结束（独占）间隔步长的整数序列。 

它的最终返回值是它创建的序列的大小，由变量iterationCount跟踪。

```javascript
function makeRangeIterator(start=0, end=Infinity, step=1) {
  let nextIndex = start;
  let iterationCount = 0;
  
  const rangeIterator = {
    next: function() {
      let result;
      if (nextIndex < end) {
        result = {value: nextIndex, done: false}
        nextIndex += step;
        iterationCount++;
        return result;
      }
    }
  }
  
  return rangeIterator;
}
```



> > > > w未完



### 迭代协议

迭代协议具体分为两个协议：[可迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)和[迭代器协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)。

### 可迭代协议

**可迭代协议**允许 JavaScript 对象定义或定制它们的迭代行为，例如，在一个 [`for..of`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 结构中，哪些值可以被遍历到。

#### Symbol.iterator / @@iterator

要成为**可迭代**对象， 一个对象必须实现 `**@@iterator**` 方法。这意味着对象（或者它[原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)上的某个对象）必须有一个键为 `@@iterator` 的属性，可通过常量 [`Symbol.iterator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 访问该属性：

| 属性                | 值                                                  |
| ------------------- | --------------------------------------------------- |
| `[Symbol.iterator]` | 一个无参数的函数,其返回值为一个符合迭代器协议的对象 |





### 迭代器协议















2.原生具备iterator接口的数据(可用for of遍历): 

* Array 
* Arguments 
* Set 
* Map 
* String 
* TypeArray 
* NodeList

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



### 5.实例

#### Map对象排序

> https://juejin.cn/post/6940644097652703246

* Array.from(将类数组对象或可遍历对象转换成数组)
* sort
* 转回map对象(Map([ [a,b], [c,d] ])会生成{a=>b, c=>d})

```javascript
const map = new Map() // 我偏偏要乱序，你能咋地
map.set(2, '林二心')
map.set(1, '林一心')
map.set(5, '林五心')
map.set(4, '林四心')
map.set(3, '林三心')
console.log(map) // Map { 2 => '林二心', 1 => '林一心', 5 => '林五心', 4 => '林四心', 3 => '林三心' }



const arr = Array.from(map);
console.log(arr);
console.log(arr) 
/* [ [ 2, '林二心' ],
     [ 1, '林一心' ],
     [ 5, '林五心' ],
     [ 4, '林四心' ],
     [ 3, '林三心' ] ] */

arr.sort((a,b) => a[0] - b[0]);
console.log(arr);
/* [  [ 1, '林一心' ],
      [ 2, '林二心' ],
      [ 3, '林三心' ],
      [ 4, '林四心' ],
      [ 5, '林五心' ] ] */


const map2 = new Map(arr);
console.log(map2)
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

在ECMAScript 6中引入了类的特性。ECMAScript 6中的类与其他语言中的还是不太一样，其语法的设计实际上借鉴了<u>JavaScript的动态性</u> ???

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
* 类声明中的所有代码将自动运行在严格模式下，而且无法强行让代码脱离严格模式执行.
* 在自定义类型中，需要通过Object.defineProperty()方法手工指定某个方法为不可枚举；<span style="color:blue">而在类中，所有方法都是不可枚举的.</span>
* 每个类都有一个名为**[[Construct]]**的内部方法，通过关键字new调用那些不含[[Construct]]的方法会导致程序抛出错误.
* 使用除关键字new以外的方式调用类的构造函数会导致程序抛出错误.
* <span style="color:blue">在类中修改类名会导致程序报错.</span>

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

ECMAScript 6的类语法简化了创建静态成员的过程，在<u>方法或访问器属性名</u>前使用正式的<span style="color:blue">**静态注释**</span>即可

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


//存在的问题:

问题: new Boolean( new Boolean(false) ) 的结果是 Boolean {true}
解决: new Boolean( new Boolean(false).valueOf()); //Boolean {false}
其他: 不推荐,ES6后不推荐使用[new 基本类型()]这样的语法
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
    if (target.hasOwnProperty(key)) { //原因?
      cloneTarget[key] = deepClone(target[key], map);
    }
  }
  return cloneTarget;
}
```



```javascript
let isObject = target => typeof target === 'object' || typeof target === 'function' && typeof target !== null;

let getType = obj => Object.prototype.toString.call(obj);

const canTraverse = {
  '[object Map]': true,
  '[object Set]': true,
  '[object Array]': true,
  '[object Object]': true,
  '[object Arguments]': true,
};

const booleanTag = '[object Boolean]';
const stringTag = '[object String]';
const numberTag = '[objectc Number]';
const errorTag = '[object Error]';
const dateTag = '[object Date]';
const funcTag = '[object Function]';
const regexpTag = '[object RegExp]';
const symbolTag = '[object Symbol]';


const handleRegExp = target => {
  const {source, flags} = target;
  return new target.constructor(source, flags);
}

const handleFunc = func = {
  if (!target.prototype) return func;
  const bodyReg = /(?={)(.|\n)+(?=})/m;
  const paramReg = /(?=\().+(?=\)\s+{)/;
  const funcString = func.toString();

	const body = bodyReg.exec(funcString);
	const param = paramReg.exec(funcString);

	if (!body) return null;
	if (param) {
    const paramArr = param[0].split(',');
    return new Function(...paramArr, body[0]);
  } else {
    return new Function(body[0]);
  }
}

function handleNotTraverse(target, type) {
  let ctor = target.constructor();
  switch (type) {
    case booleanTag:
      return new Object(Boolean.prototype.valueOf.call(target));
    case numberTag:
      return new Object(Number.prototype.valueOf.call(target));
    case stringTag:
      return new Object(String.prototype.valueOf.call(target));
    case errorTag:
    case dateTag:
      return new ctor(target);
    case regexpTag:
      return handleRegExp(target);
    case funcTag:
      return handleFunc(target);
    default:
      return new ctor(target);
  }
}

function deepClone(target ,map=new WeakMap()) {
  if (!isObject) return target;
  let type = getType(target);
  let cloneTarget;
  
  if (!canTraverse[type]) {
    //处理不能遍历的对象
    return handleNotTraverse(target, type);
  } else {
    let ctor = target.constructor;
    cloneTarget = new ctor();
  }
  
  
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









## 原生AJAX

### AJAX简介

```
Asynchronous JavaScript and XML
AJAX 全称为Asynchronous Javascript And XML，就是异步的 JS 和 XML。
通过AJAX可以在浏览器中向服务器发送异步请求，最大的优势：无刷新获取数据。
AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。

```



### XML简介

```
extensible markup language 可扩展标记语言
XML 可扩展标记语言。
XML 被设计用来传输和存储数据。
XML和HTML类似，不同的是HTML中都是预定义标签，而XML中没有预定义标签，全都是自定义标签，用来表示一些数据。

- 已被JSON代替
```



### AJAX特点

```
- 优点
1)	可以无需刷新页面而与服务器端进行通信。
2)	允许你根据用户事件来更新部分页面内容

- 缺点
1)	没有浏览历史，不能回退
2)	存在跨域问题
3)	SEO不友好

```





### AJAX基本使用

#### 其他

```
http://c.biancheng.net/view/5995.html
```



#### 实现方式

```
1.原生ajax
2.封装:axios jQuery
3.fetch 系统自带
```





#### 核心对象

```
XMLHttpRequest ajax的所有操作都是通过该对象进行的.
```



#### 使用步骤

```js
设置ajax步骤:
1.创建ajax请求对象 const xhr=new XMLHttpRequest()
2.初始化          xhr.open('GET', 'url')
3.发送请求         xhr.send(body); ///get请求不传body参数，只有post请求传参.传参形式一般a=100&b=200类.
4.事件响应         xhr.onreadystatechange=function(){
				 if(xhr.readyState===4){
                     console.log(xhr.responseText);
                     //xhr.responseXML 接收xml格式的响应数据
					 //xhr.responseText 接收文本格式的响应数据

                 }
			 }
```



### GET请求

```js
XMLHttpRequest ajax的所有操作都是通过该对象进行的


====================页面中script=================
//ajax使用步骤
    
//0.创建ajax请求对象
const xhr=new XMLHttpRequest();
//1.初始化
xhr.open('GET', 'http://127.0.0.1/server');
//2.发送请求
xhr.send();
//3.绑定事件
xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        //查看服务器响应结果
        //响应状态码
        console.log(xhr.status);
        //响应状态码字符串
        console.log(xhr.statusText);
        //响应头
        console.log(xhr.getAllResponseHeaders());
        //响应体
        console.log(xhr.responseText);
    }
}


====================后台=================
const express=require('express');
const app=express();

app.get('/server', (request, respones)=>{
    //添加响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello, ajax');
});

app.listen(80);
```



### GET请求发送参数

```
URL中添加参数 url?keyword=abc
```



### POST请求



```js
==========服务端==============
const express=require('express');
const app=express();

app.post('/server', (request, respones)=>{
    //添加响应头
    response.setHeader('Access-Control-Allow-Origin', '*');//解决跨域
    response.setHeader('Access-Control-Allow-Headers', '*');//解决请求头设置报错
    response.setHeader('');
    response.send('Hello, ajax');
});

app.listen(80);


==========客户端==============
<script>
    const result=document.querySelector('#result');
	//绑定事件
	result.onmouseover=function(){
        //0.创建ajax对象
        const xhr=new XMLHttpRequest();
        //1.初始化[请求行]
        xhr.open('POST', 'http://127.0.0.1/server');
        //设置[请求头] 请求头的报文不能使用空文
        xhr.setRequestHeader('name', 'daydayup');
        //设置content-type 将[请求体]内容格式化 在Chrome-network中的最下格式化显示
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
        //2.发送 设置[请求体]
        xhr.send('username=admin&&password=admin');
        //3.绑定事件
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                result.innerHTML=xhr.responseText;
            }
        }
    }
<script>   
        
//浏览器中请求体在哪里查看?
点击xhr中的初始化URL, 在headers中的一栏        
```



### AJAX请求状态

```js
xhr.readyState 可以用来查看请求当前的状态
https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
0: 表示XMLHttpRequest实例已经生成，但是open()方法还没有被调用. 创建
1: 表示send()方法还没有被调用，仍然可以使用setRequestHeader()，设定HTTP请求的头信息。//初始化与服务端链接
2: 表示send()方法已经执行，并且头信息和状态码已经收到。//
3: 表示正在接收服务器传来的body部分的数据。
4: 表示服务器数据已经完全接收，或者本次接收已经失败了

```





### IE中缓存问题

```js
IE会对ajax请求响应的结果进行缓存,若下次请求与本次请求的URL完全一致,则以缓存结果作为响应结果.不向服务器发送请求.

问题：在一些浏览器中(IE),由于缓存机制的存在，ajax只会发送的第一次请求，剩余多次请求不会在发送给浏览器而是直接加载缓存中的数据。
解决方式：浏览器的缓存是根据url地址来记录的，所以我们只需要修改url地址即可避免缓存问题
xhr.open("get","/testAJAX?t="+Date.now());


//ajax使用步骤:
//1.创建ajax请求对象
const xhr=new XMLHttpRequest();
//2.初始化
xhr.open('GET', 'http://127.0.0.1/server?keyword=abc&t='+Date.now());
//3.发送请求
xhr.send();
//4.绑定事件onreadystatechange 处理响应结果. readyState是xhr对象中的一个属性,总共有5个值
xhr.onreadystatechange=function(){
    //判断
    if(xhr.readyState === 4){
        ....
    }
}

```



### AJAX响应JSON数据

```js
需要将响应体中的JSON字符串转换为对象

服务端: 对象数据转换成json字符串
客户端: json字符串转换成json对象
...
===============客户端======================
xhr.onreadystatechange=function(){
	if(xhr.readyState === 4){
        //响应体字符串 转换为 JS对象
        let data = JSON.parse(xhr.responseText);
         
               
    }
}
    
    
==================服务端==========================    
//发送的数据需要先转换为JSON字符串
 data={name:'sss',pos:['北京', '上海', '深圳', '武汉']};
 let str=JSON.stringify(data);
 response.send(str)   ;
    
# 针对JSON数据自动化转为对象的方式    
1.设置响应体类型后,响应体结果可简写:xhr.response.
xhr.responseType='json';
2.使用响应体的时候,用xhr.response
console.log(xhr.response)    
```



### 超时反馈与手动取消请求

```html
<input type='text'><br>
<button>点击取消</button>
<script>
    //获取元素
    const input=document.querySeclector('input');
    const btn=document.querySeclector('button');
    let xhr;//ajax请求对象的变量   
    
    
    //绑定事件 丧失焦点的时候发送ajax请求
    input.onblur=function(){ 
        //判断 避免多次发送请求,占用服务器资源.
        if(xhr){//判断xhr是否是一个对象.
            xhr.abort();
        }
        xhr=new XMLHttpRequest();
        //设置超时时间 超过1000毫米之后没有返回结果则断开连接,status更改为canceled
        xhr.timeout=1000;
        //超时以后自动触发的回调函数. 
        xhr.ontimeout=function(){console.log('请求超时啦, 请稍后再试!')};
        xhr.open('GET', 'http://127.0.0.1/dalay-server');
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                console.log(xhr.responseText);
            }
        }
    }
    //按钮绑定取消发送ajax请求.
    btn.onclick=function(){
        xhr.abort();// 第一,xhr更改声明类型,const-->let;第二,将xhr声明在全局中
    }
</script>    
```





### 实现Ajax

```javascript
//https://juejin.cn/post/7033275515880341512#:~:text=%E8%80%83%E5%AF%9F%E9%A2%91%E7%8E%87%3A%20(%E2%AD%90%E2%AD%90%E2%AD%90)-,%E5%AE%9E%E7%8E%B0ajax,-function%20ajax(%7B%0A%20%20%20%20url

function ajax({url=null, method='GET', dataType='JSON', async=true}) {
  return new Promise({resolve, reject} => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.responseType = dataType;
    xhr.onreadystatechange = () => {
      if (!/^[23]\d{2}$/.test(xhr.status)) return;
      if (xhr.readyState === 4) {
        let res = xhr.responseText;
        resolve(result);
      }
    }
    xhr.onerror = err => reject(err);
    xhr.send();
  })
}
```





## jQuery发送AJAX



### jQuery复习

```js
jQuery复习:
- 获取元素
$('#d')
$('.class')
$('div')
$('#id .class .class div')

- 属性操作
$('selector').attr() //设置和读取属性
 $('selector').attr('属性名称')//获取 $('selector').attr('属性名称', '属性值')
$('selector').removeAttr() //移除属性

- 文本操作
$('selector').html() //会对标签进行解析
$('selector').text() //不会对标签进行解析

- 样式操作
$('selector').css(样式名:样式值) //
$('selector').css('background') //获取样式值
$('selector').addClass(); //添加class
$('selector').removeClass(); //移除class
```



### jQuery中的ajax

#### get请求

```js
 $.get(url, [data], [callback], [type])
url:请求的URL地址。
data:请求携带的参数。
callback:载入成功时回调函数。
type:设置返回内容格式，xml, html, script, json, text, _default。

```



#### post请求

```
$.post(url, [data], [callback], [type])
url:请求的URL地址。
data:请求携带的参数。
callback:载入成功时回调函数。
type:设置返回内容格式，xml, html, script, json, text, _default。

```



#### get案例

```html
//如果你是get请求,参数放在URL中;如果是post请求,参数放在请求体中
//jQuery中的get方法中参数设置的时候是一个对象,但会转换成URL中的参数.
==========客户端=================
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>  //引入jQuery
<button>GET</button>
<button>POST</button>
<button>通用方法发送</button>
<script>
    $('button').eq(0).click(function(){
        //$.get(url, 参数, 回调函数) 当请求成功的时候,执行回调 get请求,参数在浏览器network-headers中查看
        $.get('http://127.0.0.1/jquery-server', {name:'abc', keyword:'def'},function(data){
            	console.log(data);//请求成功时,在浏览器console中输出结果  data是响应体
        })
    })
</script> 

============服务端=================
const express=require('express');
const app=express();
app.all('/jquery-server', (request, response)=>{
    //添加响应头
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
    //数据对象
		response.send('hello, jquery ajax');
})
app.listen(80, ()=>{console.log('80端口监听中...')});
```



#### post请求

```html
<script>
    $('button').eq(1).click(function(){
        //$.post(url, 参数, 回调函数) 当请求成功的时候,执行回调. post请求时,参数在浏览器中network-headers中查看
        $.post('http://127.0.0.1/jquery-server', {name:'abc', keyword:'def'},function(data){
            	console.log(data);//请求成功时,在浏览器console中输出结果
        })
    })
</script> 
```



#### 通用方法ajax

```html
jQuery API文档地址:https://jquery.cuishifeng.cn/
$.ajax()方法接收一个对象类型的参数,
<script>
    $('button').eq(2).click=(function(){
        //通用方法发送ajax请求 接收一个对象类型的参数
        $.ajax({
            //请求类型
            type: 'GET',
            //URL
            url:'http://127.0.0.1/jquery-server',
            //请求头信息 请求报文
            headers:{
              键:值,
              键:值
            }
            //发送的数据 get类型下是URL中的参数,post类型下是请求体中的数据
            data:{
                a:200,
                b:200
            }
            //成功的回调  打印的响应体内容
            success:function(data){
            	console.log(data);
        	},
            //失败的回调 出错误执行 浏览器console面板打印内容
            error:function(){
                console.log('发送失败');
            },
           //超时时间  服务端延时3秒
           timeout:2000  //两秒内数据没有回来,断开连接; 请求类型变更为canceled   
            	
        })
    })
</script>     


============服务端=================
app.all('/jquery-server', (request, response)=>{
    //添加响应头
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
    //数据对象
	setTimeout(()=>{
		response.send('hello, jquery ajax');
	}, 3000)
})
```







## 跨域

> [跨域资源共享 CORS 详解- 阮一峰](https://www.ruanyifeng.com/blog/2016/04/cors.html)
>
> [跨源资源共享(CORS) - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
>
> 





### what

`跨源资源共享` ([CORS](https://developer.mozilla.org/zh-CN/docs/Glossary/CORS))（或通俗地译为跨域资源共享）是一种基于 [HTTP](https://developer.mozilla.org/zh-CN/docs/Glossary/HTTP) 头的机制，该机制通过允许服务器标示除了它自己以外的其它 [origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin)（域，协议和端口），使得浏览器允许这些 origin 访问加载自己的资源。

**CORS**是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。

<span style="color:blue">它允许浏览器向跨源服务器，发出[`XMLHttpRequest`](https://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html)请求，从而克服了AJAX只能 [同源](https://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html) 使用的限制。</span>

**实例**

运行在 `https://domain-a.com` 的 JavaScript 代码使用 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 来发起一个到 `https://domain-b.com/data.json` 的请求。



### 简介

CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。

整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信



### 两种请求

浏览器将CORS请求分成两类：**简单请求（simple request）**和 **非简单请求（not-so-simple request）**。

只要同时满足以下两大条件，就属于简单请求。

- 使用下列方法之一：

  - [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)
  - [`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD)
  - [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST)

- 除了被用户代理自动设置的首部字段（例如`Connection` , `User-Agent`）和在 Fetch 规范中定义为

   禁用首部名称的其他首部，允许人为设置的字段为 Fetch 规范定义的对 CORS 安全的首部字段集合

  。该集合为：

  - [`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept)
  - [`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language)
  - [`Content-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Language)
  - [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) （需要注意额外的限制）

- `Content-Type`的值仅限于下列三者之一：

  - `text/plain`
  - `multipart/form-data`
  - `application/x-www-form-urlencoded`

- 请求中的任意 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 对象均没有注册任何事件监听器；[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 对象可以使用 [`XMLHttpRequest.upload`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/upload) 属性访问。

- 请求中没有使用 [`ReadableStream`](https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream) 对象。



这是为了兼容表单（form），因为历史上表单一直可以发出跨域请求。AJAX 的跨域设计就是，只要表单可以发，AJAX 就可以直接发。

浏览器对这两种请求的处理，是不一样的。



### 简单请求

#### 基本流程

对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个`Origin`字段。

下面是一个例子，浏览器发现这次跨源AJAX请求是简单请求，就自动在头信息之中，添加一个`Origin`字段。

```javascript
GET /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

上面的头信息中，`Origin`字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。

<u>如果`Origin`指定的源，不在许可范围内</u>，服务器会返回一个正常的HTTP回应。浏览器发现，这个回应的头信息没有包含`Access-Control-Allow-Origin`字段（详见下文），就知道出错了，从而抛出一个错误，被`XMLHttpRequest`的`onerror`回调函数捕获。注意，这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200。

<u>如果`Origin`指定的域名在许可范围内</u>，服务器返回的响应，会多出几个头信息字段。

```javascript
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
```

上面的头信息之中，有三个与CORS请求相关的字段，都以`Access-Control-`开头。

##### Access-Control-Allow-Origin

该字段是必须的。它的值要么是请求时`Origin`字段的值，要么是一个`*`，表示接受任意域名的请求

##### Access-Control-Allow-Credentials

该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。

设为`true`，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。

这个值也只能设为`true`，如果服务器不要浏览器发送Cookie，删除该字段即可。

##### Access-Control-Expose-Headers

该字段可选。CORS请求时，`XMLHttpRequest`对象的`getResponseHeader()`方法只能拿到6个基本字段：

> `Cache-Control`、
>
> `Content-Language`、
>
> `Content-Type`、
>
> `Expires`、
>
> `Last-Modified`、
>
> `Pragma`。

如果想拿到其他字段，就必须在`Access-Control-Expose-Headers`里面指定。上面的例子指定，`getResponseHeader('FooBar')`可以返回`FooBar`字段的值。



#### withCredentials属性

CORS请求默认不发送Cookie和HTTP认证信息。如果要把Cookie发到服务器:

一方面要服务器同意，指定`Access-Control-Allow-Credentials`字段。

```javascript
Access-Control-Allow-Credentials: true
```

另一方面，开发者必须在AJAX请求中打开`withCredentials`属性。

```javascript
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```

否则，即使服务器同意发送Cookie，浏览器也不会发送。或者，服务器要求设置Cookie，浏览器也不会处理。

但是，如果省略`withCredentials`设置，有的浏览器还是会一起发送Cookie。这时，可以显式关闭`withCredentials`。

```javascript
xhr.withCredentials = false;
```

要注意的是，如果要发送Cookie，`Access-Control-Allow-Origin`就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且（跨源）原网页代码中的`document.cookie`也无法读取服务器域名下的Cookie。



### 非简单请求

#### 预检请求

非简单请求是那种对服务器有特殊要求的请求，比如请求方法是`PUT`或`DELETE`，或者`Content-Type`字段的类型是`application/json`。

非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。

浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的`XMLHttpRequest`请求，否则就报错。

下面是一段浏览器的JavaScript脚本。

```javascript
let url = 'http://api.alice.com/cors'
let xhr = new XMLHttpRequest()
xhr.open('PUT', url, true)
xhr.setRequestHeader('X-Custom-Header', 'value')
xhr.send()
```



上面代码中，HTTP请求的方法是`PUT`，并且发送一个自定义头信息`X-Custom-Header`。

浏览器发现，这是一个非简单请求，就自动发出一个"预检"请求，要求服务器确认可以这样请求。下面是这个"预检"请求的HTTP头信息。

> ```http
> OPTIONS /cors HTTP/1.1
> Origin: http://api.bob.com
> Access-Control-Request-Method: PUT
> Access-Control-Request-Headers: X-Custom-Header
> Host: api.alice.com
> Accept-Language: en-US
> Connection: keep-alive
> User-Agent: Mozilla/5.0...
> ```

"预检"请求用的请求方法是`OPTIONS`，表示这个请求是用来询问的。头信息里面，关键字段是`Origin`，表示请求来自哪个源。

除了`Origin`字段，"预检"请求的头信息包括两个特殊字段。

**（1）Access-Control-Request-Method**

该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法，上例是`PUT`。

**（2）Access-Control-Request-Headers**

该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段，上例是`X-Custom-Header`。



#### 预检请求回应

服务器收到"预检"请求以后，检查了`Origin`、`Access-Control-Request-Method`和`Access-Control-Request-Headers`字段以后，确认允许跨源请求，就可以做出回应。

> ```http
> HTTP/1.1 200 OK
> Date: Mon, 01 Dec 2008 01:15:39 GMT
> Server: Apache/2.0.61 (Unix)
> Access-Control-Allow-Origin: http://api.bob.com
> Access-Control-Allow-Methods: GET, POST, PUT
> Access-Control-Allow-Headers: X-Custom-Header
> Content-Type: text/html; charset=utf-8
> Content-Encoding: gzip
> Content-Length: 0
> Keep-Alive: timeout=2, max=100
> Connection: Keep-Alive
> Content-Type: text/plain
> ```

上面的HTTP回应中，关键的是`Access-Control-Allow-Origin`字段，表示`http://api.bob.com`可以请求数据。该字段也可以设为星号，表示同意任意跨源请求。

> ```http
> Access-Control-Allow-Origin: *
> ```

如果服务器否定了"预检"请求，会返回一个正常的HTTP回应，但是没有任何CORS相关的头信息字段。这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被`XMLHttpRequest`对象的`onerror`回调函数捕获。控制台会打印出如下的报错信息。

> ```bash
> XMLHttpRequest cannot load http://api.alice.com.
> Origin http://api.bob.com is not allowed by Access-Control-Allow-Origin.
> ```

服务器回应的其他CORS相关字段如下。

**（1）Access-Control-Allow-Methods**

该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求。

**（2）Access-Control-Allow-Headers**

如果浏览器请求包括`Access-Control-Request-Headers`字段，则`Access-Control-Allow-Headers`字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。

**（3）Access-Control-Allow-Credentials**

该字段与简单请求时的含义相同。

**（4）Access-Control-Max-Age**

该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。



#### 浏览器的正常请求和回应

一旦服务器通过了"预检"请求，以后每次浏览器正常的CORS请求，就都跟简单请求一样，会有一个`Origin`头信息字段。服务器的回应，也都会有一个`Access-Control-Allow-Origin`头信息字段。

下面是"预检"请求之后，浏览器的正常CORS请求。

> ```http
> PUT /cors HTTP/1.1
> Origin: http://api.bob.com
> Host: api.alice.com
> X-Custom-Header: value   //自定专用消息头 已经弃用
> Accept-Language: en-US
> Connection: keep-alive
> User-Agent: Mozilla/5.0...
> ```

上面头信息的`Origin`字段是浏览器自动添加的。

下面是服务器正常的回应。

> ```http
> Access-Control-Allow-Origin: http://api.bob.com
> Content-Type: text/html; charset=utf-8
> ```

上面头信息中，`Access-Control-Allow-Origin`字段是每次回应都必定包含的。









### 原因

> [同源安全策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy) 默认阻止“跨域”获取资源。但是 CORS 给了web服务器这样的权限，即服务器可以选择，允许跨域请求访问到它们的资源。

```
1.同源策略
2.浏览器特有的一个问题,服务器之间是没有这个问题的.
3.跨域问题是浏览器的ajax引擎阻挡了返回的服务器数据
```



### 使用场景

这份 [cross-origin sharing standard](https://fetch.spec.whatwg.org/#http-cors-protocol) 允许在下列场景中使用跨站点 HTTP 请求：

- 前文提到的由 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 或 [Fetch APIs](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API) 发起的跨源 HTTP 请求。
- Web 字体 (CSS 中通过 `@font-face` 使用跨源字体资源)，[因此，网站就可以发布 TrueType 字体资源，并只允许已授权网站进行跨站调用](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)。
- [WebGL 贴图](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- 使用 [`drawImage`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage) 将 Images/video 画面绘制到 canvas。
- [来自图像的 CSS 图形](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)



### 功能概述

跨源资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。

对那些可能对服务器数据产生副作用的 HTTP 请求方法(GET之外及其他),浏览器必须首先使用 [`OPTIONS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS) 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨源请求。

在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 [Cookies](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies) 和 [HTTP认证](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication) 相关数据）。

#### 错误检查

CORS 请求失败会产生错误，但是为了安全，在 JavaScript 代码层面是无法获知到底具体是哪里出了问题。你只能查看浏览器的控制台以得知具体是哪里出现了错误。





### 解决方案

* JSONP
* document.domain
* window.name
* CORS
* proxy
* window.postMessage()

#### JSONP

>  script 标签 src 属性中的链 接却可以访问跨域的 js 脚本，利用这个特性，服务端不再返回 JSON 格式的数据，而是 返回一段调用某个函数的 js 代码，在 src 中进行了调用，这样实现了跨域。



```javascript
//动态创建script

let script = document.createElement('script')

//设置回调函数
function getDate(data) {
  console.log(data)
}


//设置script的src属性
script.src = 'http://localhost:3000/?callback=getData'

//让script生效
document.body.appendChild(script)
```





## 同源策略

> [浏览器的同源策略 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)
>
> 

### 概述

> **同源策略**是一个重要的安全策略，它用于限制一个[origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin)的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。

### 同源

> 如果两个 URL 的 [protocol](https://developer.mozilla.org/zh-CN/docs/Glossary/Protocol)、[port (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Port) (如果有指定的话)和 [host](https://developer.mozilla.org/zh-CN/docs/Glossary/Host) 都相同的话，则这两个 URL 是*同源*。

```
- 同源策略(Same-Origin Policy)最早由 Netscape 公司提出，是浏览器的一种安全策略。
- 同源： 两者的协议、域名、端口号 必须完全相同。 两个资源必须来自同一个服务.
- 违背同源策略就是跨域。
- AJAX 的请求默认是要遵循『同源策略的』

```



### 同源策略带来的问题

> https://juejin.cn/post/7003232769182547998

1. 一级域名相同，只是二级域名不同的同一所有者的网页被限制（Cookie、LocalStorage、IndexDB的读取）
2. 无法跨域发送 AJAX 请求 ???
3. 无法操作 DOM

Q：为什么 Form 表单可以跨域发送请求，而 AJAX 不可以。
 A：因为 Form 表单提交之后会刷新页面，所以即使跨域了也无法获取到数据，所以浏览器认为这个是安全的。而 AJAX 最大的优点就是在不重新加载整个页面的情况下，更新部分网页内容。如果让它跨域，则可以读取到目标 URL 的私密信息，这将会变得非常危险，所以浏览器是不允许 AJAX 跨域发送请求的。








### 跨源网络访问

同源策略控制不同源之间的交互.这些交互通常分为三类：

- 跨域***写操作**（Cross-origin writes）*一般是被允许的*。*例如链接（links），重定向以及表单提交。特定少数的HTTP请求需要添加 [preflight](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#附带身份凭证的请求)。
- 跨域***资源嵌入**（Cross-origin embedding）*一般是被允许（后面会举例说明）。
- 跨域***读操作**（Cross-origin reads）*一般是不被允许的*，*但常可以通过内嵌资源来巧妙的进行读取访问。例如，你可以读取嵌入图片的高度和宽度，调用内嵌脚本的方法，或[availability of an embedded resource](https://grepular.com/Abusing_HTTP_Status_Codes_to_Expose_Private_Information). !!(这篇文章没看完, 挺有意思的  未完成)



#### **嵌入跨源的资源示例**

* \<script src="..."\>\</script\> 标签嵌入跨域脚本
* `<link rel="stylesheet" href="...">` 标签嵌入CSS。由于CSS的[松散的语法规则](http://scarybeastsecurity.blogspot.dk/2009/12/generic-cross-browser-cross-domain.html)，CSS的跨域需要一个设置正确的 HTTP 头部 `Content-Type` 。不同浏览器有不同的限制： [IE](http://msdn.microsoft.com/zh-CN/library/ie/gg622939(v=vs.85).aspx), [Firefox](https://www.mozilla.org/security/announce/2010/mfsa2010-46.html), [Chrome](https://code.google.com/p/chromium/issues/detail?id=9877), [Safari](https://support.apple.com/kb/HT4070) (跳至CVE-2010-0051)部分 和 [Opera](https://www.opera.com/support/kb/view/943/)。
* 通过 [`<img>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 展示的图片。支持的图片格式包括PNG,JPEG,GIF,BMP,SVG,...
* 通过 [\<video\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video) 和 [\<audio\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio) 播放的多媒体资源。
* 通过 [\<object\>](https://developer.mozilla.org/zh-CN/docs/web/html/element/object)、 [\<embed\>](https://developer.mozilla.org/zh-CN/docs/HTML/Element/embed) 和 `<applet>` 嵌入的插件。
* 通过 [`@font-face`](https://developer.mozilla.org/zh-CN/docs/web/css/@font-face) 引入的字体。一些浏览器允许跨域字体（cross-origin fonts），一些需要同源字体（same-origin fonts）。
* 通过 [\<iframe\>](https://developer.mozilla.org/zh-CN/docs/web/html/element/iframe) 载入的任何资源。站点可以使用 [X-Frame-Options](https://developer.mozilla.org/zh-CN/docs/HTTP/X-Frame-Options) 消息头来阻止这种形式的跨域交互。



#### 如何允许跨源访问

可以使用 [CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS) 来允许跨源访问。CORS 是 [HTTP](https://developer.mozilla.org/zh-CN/docs/Glossary/HTTP) 的一部分，它允许服务端来指定哪些主机可以从这个服务端加载资源。



#### 如何阻止跨源访问(暂时了解)

- 阻止跨域写操作，只要检测请求中的一个不可推测的标记(CSRF token)即可，这个标记被称为 [Cross-Site Request Forgery (CSRF)](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)) 标记。你必须使用这个标记来阻止页面的跨站读操作。
- 阻止资源的跨站读取，需要保证该资源是不可嵌入的。阻止嵌入行为是必须的，因为嵌入资源通常向其暴露信息。
- 阻止跨站嵌入，需要确保你的资源不能通过以上列出的可嵌入资源格式使用。浏览器可能不会遵守 `Content-Type` 头部定义的类型。例如，如果您在HTML文档中指定 `<script>` 标记，则浏览器将尝试将标签内部的 HTML 解析为JavaScript。 当您的资源不是您网站的入口点时，您还可以使用CSRF令牌来防止嵌入。

#### 跨源脚本API访问(暂时了解)

https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy



#### 跨源数据存储访问

访问存储在浏览器中的数据，如 [localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 和 [IndexedDB](https://developer.mozilla.org/zh-CN/docs/IndexedDB)，是以源进行分割。每个源都拥有自己单独的存储空间，一个源中的 JavaScript 脚本不能对属于其它源的数据进行读写操作。





### 如何解决跨域

```
1)	JSONP是什么
JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求。
2)	JSONP怎么工作的？
在网页有一些标签天生具有跨域能力，比如：img link iframe script。
JSONP就是利用script标签的跨域能力来发送请求的。案例:例如网页中script标签有不同地址的src


1)	CORS是什么？ 
CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持get和post请求。
2)	CORS怎么工作的？
CORS是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。

```





### 原生JSONP实现跨域

#### JSONP介绍

```
1)JSONP是什么
JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求。
2)JSONP怎么工作的？
在网页有一些标签天生具有跨域能力，比如：img link iframe script。
JSONP就是利用script标签的跨域能力来发送请求的。

```



#### JSONP案例

```html
--第一版 点击事件 使用script标签获取跨域内容,并将内容写入到页面中

================浏览器端=======================
<style>
    #abc {
        width: 400px;
        height: 200px;
        border: solid 1px #000;
    }
</style>
</head>
<body>
    <button>点击发送跨域请求</button>
    <div id="abc"></div>
<script>
	//获取元素
    const btn=document.querySelector('button');
    const abc=document.querySelector('#abc');
    
    btn.addEventListener('click', function(){
        //1.创建script标签
        let script=document.createElement('script');
        //2.设置script标签的src
        script.src='http://localhost:8001/jsonp-server';
        //3.将script标签插入到文档中
        document.body.appendChild(script);
    })
</script>  
    
================服务端=======================
<script>//为了代码格式添加
	const express=require('express');
    const app=express();
    app.all('/jsonp-server', (requeset, response)=>{
        response.send('跨域');
        //问题:浏览器通过script的src获取内容,但script标签无法解析中文.console控制台报错,is not defined.
        //如果返回的是response.send('alert(13)'),浏览器可正常执行.
    })
    app.listen(80);
</script>
```



```html
- 第二版 服务端使用jQuery+模板字符串+引号传递JS语句.
- 

================浏览器端=======================

================服务端=======================
<script>
    ...
    let data='中文汉字';
	response.send(
    	result.innerHTML= `${data}`;
    )
    ...
</script>
```



```HTML
- 第三版 服务器返回结果的数据处理代码不能放在服务器端. 客户端更改变量名字,服务端的JSON语句就无法使用
================浏览器端=======================
<body>
    <button>点击发送跨域请求</button>
    <div id="abc"></div>
<script>
	//获取元素
    const btn=document.querySelector('button');
    const result=document.querySelector('#abc');
    //重要:创建一个回调函数
    function callback(data){
        result.innerHTML=data;
    }
    ...
</script>


================服务端=======================
<script>//为了代码格式添加
	const express=require('express');
    const app=express();
    app.all('/jsonp-server', (requeset, response)=>{
        let data='中文汉字';
        response.send(`callback('${data}')`);
    })
    app.listen(80);
</script>
```



```html
- last版 去掉服务端和客户端的耦合, 函数名称
- 使用URL参数来传递函数名称
================浏览器端=======================
<body>
    <button>点击发送跨域请求</button>
    <div id="abc"></div>
<script>
	//获取元素
    const btn=document.querySelector('button');
    const result=document.querySelector('#abc');
    //重要:创建一个回调函数
    function callback2(data){
        result.innerHTML=data;
    }
    btn.addEventListener('click', function(){
        //1.创建script标签
        let script=document.createElement('script');
        //2.设置script标签的src
        script.src='http://localhost/jsonp-server?callback=callback2';
        //3.将script标签插入到文档中
        document.body.appendChild(script);
    })    
</script>


================服务端=======================
<script>//为了代码格式添加
	const express=require('express');
    const app=express();
    app.all('/jsonp-server', (requeset, response)=>{
        //获取URL中的参数
        let callback=request.query.callback;
        let data='中文汉字';
        response.send(`${callback}('${data}')`); //函数调用形式的字符串
    })
    app.listen(80);
</script>

```





```js
========HTML页面===============
<button>点击发送跨域请求</button>
<div id='abc'></div>
<script>
    //获取元素
    const button=document.querySelector('button');
	const abc=document.querySelector('#abc');

	//4.创建回调函数 
	//构建逻辑:1.服务端返回的处理代码不能放在服务端,原因之一是应对变量更名产生的后端操作.
    //2.解决方法: 本地创建回调函数
    //3.服务端返回的函数调用,名称需要和本地保持动态的一致
	//4.使用URL参数形式将函数名称发送到服务端. 只要前端两处名称保持一致即可.
	function ccc(data){
        abc.innerHTML=data;
    }
	//绑定事件
	button.addEventListener('click', function(){
        //1.创建script标签
        let script=document.createElement('script');
        //2.设置script标签的src
        script.src='http://127.0.0.1:8001/jsonp-server?callback=ccc';
        //3.将script标签插入到文档中
        document.body.appendChild(script);
    })
</script>

===============jsonp-server.js====================
app.all('/jsonp-server', (request, response)=>{
        //获取callback参数
        let callback=request.query.callback;
        //数据
        let data='test test';
        response.end(`
			${callback}(`${data}`); //内容发送到网页上script标签内,类型只能是JS代码
		`)
    })        
```



### AJAX功能调试步骤

```
1.检查console是否有报错
2.检查network 是否有请求
 2.1 如果没有请求
 2.1.1 检查事件绑定
 2.1.2 检查请求发送
 2.2 如果请求已经发送
 	2.2.1 检查响应体是否满足条件
     2.2.1.0 响应体是否满足条件,如果不满足:服务端人员
     2.2.1.1 如果数据OK,检查(回调函数)
     


```





### CORS

#### CORS介绍

```
CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持get和post等请求。

2)	CORS怎么工作的？
CORS是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。
```



#### CORS使用

```js
3)	CORS的使用
//* 表示任何客户端网页都可跨域向我发送请求
//可将*号更改为特定的网站.例如a.com
主要是服务器端的设置：
router.get("/testAJAX" , function (req , res) {
	//通过res来设置响应头，来允许跨域请求
	//res.set("Access-Control-Allow-Origin","http://127.0.0.1:3000");  
	res.set("Access-Control-Allow-Origin","*");
	res.send("testAJAX返回的响应");
});

```





#### CORS案例

```html

================客户端====================
<button>点击</button>
<script>
	const btn=document.querySelector('button');
    btn.onclick=function(){
        const xhr=new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/cors-server');
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                console.log(xhr.responseText);
            }
        }
    }
</script>

================客户端====================
<script>
	const express=require('expres');
	const app=express();

	app.all('/cors-server', (request, response)=>{
		response.setHeader('Access-Control-Allow-Origin', '*');
        response.send('CORS');
	})
</script>
设置CORS响应头    
response.setHeader('Access-Control-Allow-Origin', '*');//星号表示允许任何客户端网页发送请求
```



### 练习

#### 歌曲列表

```HTML
<script>
	const btn=document.querySelector('button');
    const table=document.querySelector('tbody');
    
    btn.onclick=function(){
        const xhr=new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1/songs');
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState === 4){
                let result = responseText;
                let data=JSON.parse(result);
                //遍历数据
                data.data.forEach(item=>{
                 //创建tr td,然后插入元素
                 const tr = document.createElement('tr');
                 const td1 = document.createElement('td');
                 td1.innerHTML=item.id;
                 const td2 = document.createElement('td');
                 td2.innerHTML=item.name   
                 const td3 = document.createElement('td');
                 td3.innerHTML=item.time_public;   
                 const td4 = document.createElement('td');
                 td4.innerHTML=item.singer[0].name;   
                 const td5 = document.createElement('td');
                 td5.innerHTML=item.album.name;
                    
                 //将td插入到tr中
                 tr.appendChild(td1);
                 tr.appendChild(td2);   
                 tr.appendChild(td3);
                 tr.appendChild(td4);
                 tr.appendChild(td5);   
                 //将tr插入到table中
                 table.appendChild(tr);   
                })
            }
        }
    }
</script>
```



```html
=====服务端======
<script>
const express=require('exprss');
const app=express();
    
app.all('/songs', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Header', '*');
    response.setHeader('Content-Type','application/json;charset=utf-8');
    response.end(require('fs').readFileSync('./data.json'));
    
});
app.all('*', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('404');
})    


</script> 

===================客户端=======================
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>歌曲表格</title>
    <link crossorigin='anonymous' href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <h2 class="page-header">歌曲表格 <button class="btn btn-sm btn-info">点击获取歌曲列表</button></h2>
    <table class="table table-striped table-hover table-border">
        <tr>
            <td>ID</td>
           <td>歌曲名称</td>
            <td>发布时间</td>
            <td>歌手名称</td>
            <td>专辑名称</td>
        </tr>
    </table>
</div>
<script>
	const btn=document.querySelector('button');
    btn.onclick=function(){
        const xhr=new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1/songs');
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status>=200 && xhr.status<300){
                    let obj=JSON.parse(xhr.responseText);
                    
                    obj.data.forEach(items=>{
                        const tr=document.createElement('tr');
                        const td1=document.createElement('td');
                        const td2=document.createElement('td');
                        const td3=document.createElement('td');
                        const td4=document.createElement('td');
                        const td5=document.createElement('td');
                        
                        td1.innerHTML=items.id;
                        td2.innerHTML=items.name;
                        td3.innerHTML=items.time_public;
                        td4.innerHTML=items.singer[0].name;
                        td5.innerHTML=items.album.name;
                        
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                        tr.appendChild(td3);
                        tr.appendChild(td4);
                        tr.appendChild(td5);
                        
                        table.appendChild(tr);
                    })
                }
            }
        }
    }
</script>    
    
```





### 封装jquery中的ajax

```js
//get请求类型中,jQuery发送ajax,参数对象的位置是作为URL的参数.


let $={
    get:function(url, data, callback){
        let xhr=new XMLHttpRequest();
        let str='';
        for(let i in data){
            str += `${i}=${data[i]}`;
        }
        let url=(str+'?'+url).slice(0, -1);
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readystate===4){
                if(xhr.status>=200 && xhr.status<300){
                    callback(xhr.responseText);
                }
            }
        }
    }
}

$.get('http://127.0.0.1', {a:100, b:200}, function(data){console.log(data)})
```



## Promise🌈

### 异步编程背景

* JavaScript引擎是基于<span style="background: #ccc;">单线程（Single-threaded）事件循环</span>的概念构建的，<u>同一时刻只允许一个代码块在执行</u>
* 即将运行的代码存放在<span style="background: #ccc;">任务队列（job queue）</span>中，每当一段代码准备执行时，都会被添加到任务队列
* 事件循环（eventloop）是JavaScript引擎中的一段程序，负责监控代码执行并管理任务队列，会执行队列中的下一个任务



#### Promise使用原因

* 指定回调函数的方式更加灵活
  * 旧的:必须在启动异步任务前指定(实际生活中订阅必须在活动开始之前,而promise更加灵活,可随时添加处理程序.)
  * promise:启动异步任务->返回promise对象->给promise对象绑定回调函数(甚至可以在异步任务结束后指定多个)
* 支持链式调用,解决回调地域的问题
  * 回调地域:回调函数嵌套调用,外部回调函数异步执行的结果是嵌套的回调执行的条件
  * 终极解决方案:async/await



### Promise之前的异步处理

#### 事件模型

> 用户点击按钮或按下键盘上的按键会触发类似onclick这样的事件，它会向任务队列添加一个新任务来响应用户的操作，这是JavaScript中最基础的异步编程形式，直到事件触发时才执行事件处理程序，**且执行时上下文与定义时的相同**

```javascript
let button = document.getElementById('my-btn');
button.onclick = function(event) {
  console.log('clicked');
};
//赋值给onclick的函数被添加到任务队列中，只有当前面的任务都完成后它才会被执行
```

总结：

* 事件模型适用于处理简单的交互；必须要保证事件在添加事件处理程序之后才被触发

* 多个独立的异步调用连接在一起会使程序更加复杂，因为你必须跟踪每个事件的事件目标（如此示例中的button）。
* 尽管事件模型适用于**响应用户交互**和完成类似的**低频功能**，但其对于更复杂的需求来说却不是很灵活。



#### 回调模式

> 回调模式与事件模型类似，异步代码都会在未来的某个时间点执行，二者的区别是回调模式中被调用的函数是作为参数传入的

一个知识点:任何回调函数,都会有闭包的产生.

##### **二种类型的回调函数**

* 同步回调
  * 立即执行,完全执行完了才结束,不会放入回调队列中. 
  * 例如,数组的API. promise执行器函数

* 异步回调
  * 不会立即执行,会放入回调队列中将来执行.编写顺序和执行顺序不相同
  * 定时器, 文件系统fs,mongoose, ajax请求回调



#### **异步回调案例** 

##### 在网页中加载脚本和模块

```javascript
//使用给定的src加载脚本
function loadScript(src) {
	let script = document.createElement('script');
  script.src = src;
  dcoument.head.appen(script);
}
```

<u>使用函数: 在给定路径下加载并执行脚本</u>

* 脚本是异步调用的,加载执行完成后内部函数才能使用
* 下面若有代码,不会等到脚本加载完再执行

```javascript
loadScript('/my/script.js')
```

脚本是异步调用的,因为它从现在开始加载,但是在这个加载函数执行完成后才运行.

如果`loadScript()`下面有任何其他代码,它们不会等到脚本加载完成才执行.

假设我们需要在脚本加载后立即使用它.但如果我们在`loadScript()`调用后立即执行此操作,这将不会有效.

```javascript
loadScript('/my/scirpt.js'); //这个脚本有 "function newFunction() {…}"

newFunction(); //没有这个函数
```

自然情况下，浏览器可能没有时间加载脚本。到目前为止，`loadScript` 函数并没有提供跟踪加载完成的方法。

<u>我们希望了解脚本何时加载完成，以使用其中的新函数和变量。</u>

添加一个 `callback` 函数作为 `loadScript` 的第二个参数，该函数应在脚本加载完成时执行：

```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  
  script.onLoad = () => callback(script);
  
  document.head.append(script);
}
```

实际案例:

以下被称为“基于回调”的异步编程风格。异步执行某项功能的函数应该提供一个 `callback` 参数用于在相应事件完成时调用。

```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`${script.src} is loaded`);
  alert(_); //所加载脚本中声明的函数
})
```



##### **在回调中回调**

我们如何<span style="color:blue">依次加载两个脚本</span>：第一个，然后是第二个？

自然的解决方案是将第二个 `loadScript` 调用放入回调中，如下所示：

```javascript
loadScript('/my/script.js', function(script) {

  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function(script) {
    alert(`Cool, the second script is loaded`);
  });

});
```

**处理Error**

在上述示例中，我们并没有考虑出现 error 的情况。如果脚本加载失败怎么办？我们的回调应该能够对此作出反应。

这是 `loadScript` 的改进版本，可以跟踪加载错误：

```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
```

加载成功时，它会调用 `callback(null, script)`，否则调用 `callback(error)`。

```javascript
loadScript('/my/script.js', function(error, script) {
  if (error) {
    // 处理 error
  } else {
    // 脚本加载成功
  }
});
```

我们在 `loadScript` 中所使用的方案其实很普遍。它被称为<u>“Error 优先回调（error-first callback）”风格</u>。

它的约定是:

* `callback` 的第一个参数是为 error 而保留的。一旦出现 error，`callback(err)` 就会被调用。
* 第二个参数（和下一个参数，如果需要的话）用于成功的结果。此时 `callback(null, result1, result2…)` 就会被调用。

##### **厄运金字塔**(回调地狱)

以上代码模式在多个异步行为中,代码层次变深,维护难度增加.尤其是我们使用的是可能包含了很多循环和条件语句的真实代码

<figure><div class="image" style="width:467px">
      <object type="image/svg+xml" data="https://zh.javascript.info/article/callbacks/callback-hell.svg" width="467" height="279" class="image__image" data-use-theme="">
        <img src="https://zh.javascript.info/article/callbacks/callback-hell.svg" alt="" width="467" height="279">
      </object>
      </div></figure>




嵌套调用的“金字塔”随着每个异步行为会向右增长。很快它就失控了

以通过使每个行为都成为一个独立的函数来尝试减轻这种问题:

```javascript
loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...加载完所有脚本后继续 (*)
  }
}
```

以上代码的优缺点:

* 没有深层的嵌套了
* 可读性很差，在阅读时你需要在各个代码块之间跳转。
* 名为 `step*` 的函数都是一次性使用的，创建它们就是为了避免“厄运金字塔”。没有人会在行为链之外重用它们。因此，这里的命名空间有点混乱。



### Promise介绍

#### 概述

> Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
>
> 所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。

#### 类比

> 你是一位歌手, 你承诺（promise）会在单曲发布(结果)的第一时间发给他们。
>
> 你给了粉丝们一个列表。他们可以在上面填写他们的电子邮件地址，以便当歌曲发布后，让所有订阅了的人能够立即收到。
>
> 即便遇到不测，例如录音室发生了火灾，以致你无法发布新歌，他们也能及时收到相关通知





#### 特点和缺点

**Promise对象有两个特点:**

* 对象的状态不受影响
  * Promise对象代表一个异步操作,有3种状态: pending,fulfilled,rejected
  * 只有异步操作的结果,可以决定当前是哪一种状态,任何其他操作均无效.
* 一旦状态改变,就不会再发生变化.
  * Promise状态改变,只有两种可能.从pending->fulfilled或从pending->rejected
  * 如果状态已改变(称为resolved,已定型).再对Promise对象添加回调,也会立即得到这个结果.

**Promise的缺点:**

* 无法取消Promise,一旦建立就会立即执行,无法中途取消.
* 如果不设置回调,Promise内部抛出的错误,不会反应到外部.
* 当处于pending状态时,无法得知目前进展到哪一步(刚开始还是即将完成)
* 单一值. 

Promise只能有一个完成值或拒绝原因,而在实际使用中,往往需要传递多个值,一般做法是构造一个对象或数组,然后再传递,then中获得这个值后,又会进行取值赋值的操作,每次封装和解封会让代码变的笨重. 建议使用ES6的解构赋值.

```javascript
Promise.all([Promise.resolve(1), Promise.resolve(2)])
.then(([x, y]) => {
  console.log(x, y);
})
```







### 基本用法

ES6 规定，`Promise`对象是一个构造函数，用来生成`Promise`实例。

#### 构造函数语法:

```javascript
let promise = new Promise(function (resolve, reject) {
  //executor (生产者代码, 也就是'歌手')
})
```

#### 执行器函数

> 生产者代码, 歌手

`Promise`构造函数接受一个函数作为参数，其被称为**executor**,当`new Proimse`被创建, executor会自动运行.   //(executor就是歌手)

该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

当executor获得了结果,无论是早还是晚,它应该调用以下回调之一:

* resolve(value) -- 如果任务成功完成并带有结果value
* reject(error) -- 如果出现了error, error即为error对象



**`resolve`函数的作用**，将`Promise`对象的状态从<span style="background:#ccc">“未完成”变为“成功”</span>（即从 pending 变为 fulfilled），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；

**`reject`函数的作用**，将`Promise`对象的状态从<span style="background:#ccc">“未完成”变为“失败”</span>（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

与最初的 “pending” promise 相反，一个 resolved 或 rejected 的 promise 都会被称为 <span style="background:#ccc">“settled”。</span>

```javascript
//成功完成任务

let promise = new Promise((resolve, reject) => {
  setTimeout(()=>resolve('done'), 1000)
});

//失败的任务
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('ddd')), 1000)
})
```



#### 返回值

由`new Promise`构造函数<span style="color:blue">返回的`promise`对象</span>具有以下内部属性:

* `state`   
  * 最初是`pending`, 
  * 然后在 `resolve` 被调用时变为 `"fulfilled"`，
  * 或者在 `reject` 被调用时变为 `"rejected"`

* `result` 
  * 最初是 `undefined`，
  * 然后在 `resolve(value)` 被调用时变为 `value`，
  * 或者在 `reject(error)` 被调用时变为 `error`。


所以，executor 最终将 `promise` 移至以下状态之一:

<svg xmlns="http://www.w3.org/2000/svg" width="512" height="246" viewBox="0 0 512 246"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="promise" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="promise-resolve-reject.svg"><path id="Rectangle-1" fill="#FBF2EC" stroke="#DBAF88" stroke-width="2" d="M1 91h182v70H1z"/><text id="new-Promise(executor" fill="#7E7C7B" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="2" y="82">new Promise(executor)</tspan></text><text id="state:-&quot;pending&quot;-res" fill="#AF6E24" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="13" y="115.432">state: "pending"</tspan> <tspan x="13" y="135.432">result: undefined</tspan></text><path id="Line" fill="#C06334" fill-rule="nonzero" d="M196.51 134.673l.908.419 103.284 47.574 2.51-5.45L313 189.433l-15.644.5 2.509-5.45-103.283-47.574-.909-.418.837-1.817z"/><path id="Line-Copy" fill="#C06334" fill-rule="nonzero" d="M297.38 56L313 57l-10.173 11.896-2.335-5.528-103.103 43.553-.921.39-.778-1.843.92-.39 103.104-43.552-2.334-5.527z"/><text id="resolve(value)" fill="#C06334" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" transform="rotate(-23 244.39 72.63)"><tspan x="185.59" y="77.13">resolve(value)</tspan></text><text id="reject(error)" fill="#C06334" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" transform="rotate(25 251.634 150.64)"><tspan x="197.034" y="155.141">reject(error)</tspan></text><path id="Rectangle-1-Copy" fill="#FBF2EC" stroke="#478964" stroke-width="2" d="M323 10h182v64H323z"/><text id="state:-&quot;fulfilled&quot;-r" fill="#478964" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="338" y="34.432">state: "fulfilled"</tspan> <tspan x="338" y="54.432">result: value</tspan></text><path id="Rectangle-1-Copy-3" fill="#FEF1F0" stroke="#D35155" stroke-width="2" d="M323 177h182v64H323z"/><text id="state:-&quot;rejected&quot;-re" fill="#AF6E24" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="338" y="201.432">state: "rejected"</tspan> <tspan x="338" y="221.432">result: error</tspan></text></g></g></svg>



#### 总结

1.**只能有一个结果或一个 error**

* executor 只能调用一个 `resolve` 或一个 `reject`。
* `resolve/reject` 只需要一个参数（或不包含任何参数），并且将忽略额外的参数。
* 任何状态的更改都是最终的。所有其他的再对 `resolve` 和 `reject` 的调用都会被忽略：

```javascript
let promise = new Promise((resolve, reject) => {
  resolve('done');
  
  reject(new Error('...')); //被忽略
  setTimeout(() => resolve('...')); //被忽略
})
```

2.**以** `Error` **对象 reject**

* `reject`可以使用任何类型的参数来完成（就像 `resolve` 一样）。建议使用 `Error` 对象（或继承自 `Error` 的对象）

3.**Resolve/reject 可以立即进行**

* executor 通常是异步执行某些操作，并在一段时间后调用 `resolve/reject`，但这不是必须的.我们还可以立即调用 `resolve` 或 `reject`

```javascript
let promise = new Promise(function(resolve, reject) {
  // 不花时间去做这项工作
  resolve(123); // 立即给出结果：123
});
```

4.`state` **和** `result` **都是内部的**

* Promise 对象的 `state` 和 `result` 属性都是内部的。我们无法直接访问它们。

* 但我们可以对它们使用 `.then`/`.catch`/`.finally` 方法。



#### then catch finally

> 消费者代码 歌手的粉丝

##### 生产者代码和消费者代码关系

* Promise对象充当的是 executor（“生产者代码”或“歌手”）和消费函数（“粉丝”）之间的连接，后者将接收结果或 error。

* 可以通过使用 `.then`、`.catch` 和 `.finally` 方法为消费函数进行注册。(为粉丝进行订阅)



##### then

<u>概述</u>

* `then`方法可以接受两个回调函数作为参数,回调函数都接受`Promise`对象传出的值作为参数。
  * 第一个回调函数是`Promise`对象的状态变为`resolved`时调用，
  * 第二个回调函数是`Promise`对象的状态变为`rejected`时调用。
* 这两个参数都是可选的，不一定都要提供.可以按照任意组合的方式来监听

```javascript
promise.then(function(value) {
  //...
}, function(error) {
  //...
})
```



```javascript
let promise = readFile('example.txt');

promise.then(function(contents) {
  //完成
  console.log(contents);
}, function(err) {
  //拒绝
  console.log(err.message);
});

promise.then(function(contents) {
  //完成
  console.log(contents);
});

promise.then(null, function(err) {
  //拒绝
  console.log(err.message);
})
```

上面这3次then()调用操作的是同一个Promise。第一个同时监听了执行完成和执行被拒；第二个只监听了执行完成，错误时不报告；第三个只监听了执行被拒，成功时不报告。





##### catch()

<u>概述</u>

* catch()方法，相当于只给其传入拒绝处理程序的then()方法
* 使用`null`作为第一个参数: `then(null, errorHandleingFunction)`
* 或使用: `.catch(errorHandlingFunction)`, 其`.catch(f)`调用时`.then(null, f)`的完全模拟,它知识一个简写形式.



```javascript
promise.catch(function(err) {
  //拒绝
  console.log(err.message);
});

//与以下调用相同
promise.then(null, function(err) {
  //拒绝
  console.log(err.message);
})
```



<u>执行器错误</u>

如果执行器内部抛出一个错误，则Promise的拒绝处理程序就会被调用.<span style="color:blue">**每个执行器中都隐含一个try-catch块**</span>，所以错误会被捕获并传入拒绝处理程序. 例如

```javascript
let promise = new Promise(function(resolve, reject) {
  throw new Error('Explosion');
});

promise.catch(function(error) {
  console.log(error.message); //'Explosion'
})

//以上等价于
let promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('Explosion');
  } catch(err) {
    reject(err);
  }
});

promise.catch(function(error) {
  console.log(error.message); //Explosion
})
```

为了简化这种常见的用例，执行器会捕获所有抛出的错误，但只有当拒绝处理程序存在时才会记录执行器中抛出的错误，否则错误会被忽略掉.







##### then() + catch()

* then()方法和catch()方法一起使用才能更好地<u>处理异步操作结果</u>。

* 如果不给Promise添加拒绝处理程序，那所有失败就自动被忽略.

* 如果一个Promise处于已处理状态，在这之后添加到任务队列中的处理程序仍将执行。所以无论何时你都可以添加新的完成处理程序或拒绝处理程序，同时也可以保证这些处理程序能被调用。

```javascript
let promise = readFile('example.txt');

//最初的完成处理程序
promise.then(function(contents) {
  console.log(contents);
  
  //现在又添加一个
  promise.then(function(contents) {
    console.log(contents);
  })
})
```

**注意**

每次调用then()方法或catch()方法都会<span style="color:blue">创建一个新任务</span>，当Promise被解决（resolved）时执行。

<span style="color:blue">这些任务最终会被加入到一个为Promise量身定制的独立队列中</span>，这个任务队列的具体细节对于理解如何使用Promise而言不重要，通常你只要理解任务队列是如何运作的就可以了。



##### finally

像常规 `try {...} catch {...}` 中的 `finally` 子句一样，promise 中也有 `finally`。

* `.finally(f)` 调用与 `.then(f, f)` 类似，在某种意义上，`f` 总是在 promise 被 settled 时运行：即 promise 被 resolve 或 reject。
* `finally` 是执行清理（cleanup）的很好的处理程序（handler），例如无论结果如何，都停止使用不再需要的加载指示符（indicator）。

```javascript
new Promise((resolve, reject) => {
  //do something
}).finally(() => stop loading indicator)
 // 所以，加载指示器（loading indicator）始终会在我们处理结果/错误之前停止
	.then(res => show res, err => show err)
```





**finally 与 then 的区别**

* `finally` 处理程序（handler）没有参数。在 `finally` 中，我们不知道 promise 是否成功。
* `finally` 处理程序将 <u>结果和 error</u> 传递给下一个处理程序。









#### **实例**

0.重写loadScript

```javascript
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
  	script.src = src;
    //注意,没有传递参数
  	script.onload = () => resolve(script);
    script.onerror = () => reject(new Error('error'));
    
    document.body.head.append(script);
  })
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));
```



1.Promise新建后就会立即执行

```javascript
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved');
})

console.log('Hi');
//Promise
//Hi
//resolved
```

上面代码中，Promise 新建后立即执行，所以首先输出的是`Promise`。然后，`then`方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以`resolved`最后输出。



2.异步加载图片

```javascript
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const img = new Image();
    
    img.onload = function() {
      resolve(img);
    };
    
    img.onerror = function() {
      reject(new Error('could not load image at ' + url));
    }
    
    img.src = url;
  })
}
```

上面代码中，使用`Promise`包装了一个图片加载的异步操作。如果加载成功，就调用`resolve`方法，否则就调用`reject`方法。

3.实现Ajax操作

```javascript
cosnt getJSON = function(url) {
  const promise = new Promise(function(resolve, reject) {
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    
    const client = new XMLHttpRequest();
    client.open('GET'url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();
  });
  
  return promise;
}

getJSON('/posts.json').then(function(json){
  console.log('content: ' + json);
}, function(error) {
  console.log('出错了', error);
})
```

上面代码中，`getJSON`是对 XMLHttpRequest 对象的封装，用于发出一个针对 JSON 数据的 HTTP 请求，并且返回一个`Promise`对象。需要注意的是，在`getJSON`内部，`resolve`函数和`reject`函数调用时，都带有参数。

如果调用`resolve`函数和`reject`函数时带有参数，那么它们的参数会被传递给回调函数。`reject`函数的参数通常是`Error`对象的实例，表示抛出的错误；`resolve`函数的参数除了正常的值以外，还可能是另一个 Promise 实例



4.resolve()函数可以是另一个Promise实例

```javascript
const p1 = new Promise((resulve, reject) => {
  //...
});

const p2 = new Promise((resolve, reject) => {
  //..
  resolve(p1);
})
```

代码说明:

1.`p2`的`resolve`方法将`p1`作为参数,即一个异步操作的结果是返回另一个异步操作

2.`p1`的状态传递给了`p2`, 也就是<span style="color:red; font-weight:bold;">`p1`的状态决定了`p2`的状态</span>.

3.如果`p1`的状态是`pending`，那么`p2`的回调函数就会等待`p1`的状态改变；

4.如果`p1`的状态已经是`resolved`或者`rejected`，那么`p2`的回调函数将会立刻执行。

```javascript
const p1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
	.then(result => console.log(result))
	.catch(error => console.log(error))
```

代码说明:

* 由于`p2`返回的是另一个 Promise，导致`p2`自己的状态无效了，由`p1`的状态决定`p2`的状态。
* 后面的`then`语句都变成针对后者（`p1`）。又过了 2 秒，`p1`变为`rejected`，导致触发`catch`方法指定的回调函数。



5.调用resolve() 或 reject() 并不会终结Promise的参数函数的执行

```javascript
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
```

代码说明及最佳实践:

* 立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。
* 一般来说,调用`resolve`或`reject`以后，Promise 的使命就完成了，后继操作应该放到`then`方法里面，而不应该直接写在`resolve`或`reject`的后面.
* 最好在他们前面加上return

6.返回一个promise

如果向Promise.resolve()方法或Promise.reject()方法传入一个Promise，那么这个Promise会被直接返回。

```javascript
let promise = Promise.resolve(new Promise(function() {}));
console.log(promise); //Promise {<pending>}
promise.then(function(value) {
  console.log(value);  //不会执行 因为返回的未完成状态的promise
});


let promise2 = Promise.reject(new Promise(function() {}));
console.log(promise2); //Promise{<rejected>: Promise}
promise2.catch(function(value) {
  console.log(value); // 会执行
});
```







**任务编排**

如果你曾经使用过setTimeout()或setInterval()函数，你应该熟悉这种名为**任务编排（job scheduling）**的过程。当编排任务时，会向任务队列中添加一个新任务，并明确指定将任务延后执行。

**调用resolve()后会触发一个异步操作，传入then()和catch()方法的函数会被添加到任务队列中并异步执行**

```javascript
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  
  resolve();
});

promise.then(function() {
  console.log('Resolved');
});

//输出结果
Promsie
Hi
Resolved
```



#### 使用Promise进行错误处理

当一个 promise 被 reject 时，控制权将移交至最近的 rejection 处理程序（handler）。

##### 隐式try...catch

Promise 的执行者（executor）和 promise 的处理程序（handler）周围有一个“隐式的 `try..catch`”。如果发生异常，它（译注：指异常）就会被捕获，并被视为 rejection 进行处理。

下面两段代码工作上完全相同:

```javascript
//1
new Promise((resolve, reject) => {
  throw new Error('Whoops');
}).catch(alert)
```

```javascript
//2
new Promise((resolve, reject) => {
  reject(new Error('Whoops'));
}).catch(alert);
```

**处理范围**

* executor周围
* executor函数的处理程序(then, catch)

在 executor 周围的“隐式 `try..catch`”自动捕获了 error，并将其变为 rejected promise。

如果我们在 `.then` 处理程序（handler）中 `throw`，这意味着 promise 被 rejected，因此控制权移交至最近的 error 处理程序（handler）

```javascript
new Promise((resolve, reject) => {
  resolve('ok');
}).then(res => {
  throw new Error('whoops');
}).catch(alert);//Error: Whoops!
```



如果是多个报错的话:

只会处理从顺序上出现的第一个错误

```javascript
Promise.resolve(1)
.then(() => a())
.then(() => b())
.catch(alert) //ReferenceError: a is not defined

Promise.reject(1)
.then(() => a())
.then(() => b())
.catch(alert) //1
```

**再次抛出**

对于 promise 来说, 错误如果无法处理它，可以将其再次抛出,这也是可以的。

在 `.catch` 中 `throw`，那么控制权就会被移交到下一个最近的 error 处理程序（handler）。如果我们处理该 error 并正常完成，那么它将继续到最近的成功的 `.then` 处理程序（handler）。

catch 正常处理错误(返回除错误之外的其他值: promise或其他任意)

```javascript
//执行流: catch=>then
new Promise((resolve, reject) => {
  throw new Error("Whoops");
}).catch((err) => alert('aaa'))
.then(() => alert('success')); //success
```

catch 抛出错误

```javascript
//执行流 catch => catch

new Promise((resolve, reject) => {
  throw new Error('Whoops');
})
.catch(err => {throw err}) //必须只为{},否则识别不了throw
.then()  //不走这一步,写不写没关系,最好写上
.catch(alert); //弹出报错信息: Error: Whoops
```



**未处理的rejection**

当一个error没有被处理会发生什么? 例如，我们忘了在链的尾端附加 `.catch`

```javascript
new Promise(function() {
  noSuchFunction(); // 这里出现 error（没有这个函数）
})
  .then(() => {
    // 一个或多个成功的 promise 处理程序（handler）
  }); // 尾端没有 .catch！
```

如果出现 error:

* promise 的状态将变为 “rejected”，
* 然后执行应该跳转至最近的 rejection 处理程序（handler）。
* 但上面这个例子中并没有这样的处理程序（handler）。因此 error 会“卡住（stuck）”。没有代码来处理它。



对于在 promise 中未被处理的 rejection，JavaScript 引擎会跟踪此类 rejection，在这种情况下会生成一个全局的 error, 你可以在控制台（console）中看到。

在浏览器中，我们可以使用 `unhandledrejection` 事件来捕获这类 error：

```javascript

window.addEventListener('unhandledrejection', function(event) {
  // 这个事件对象有两个特殊的属性：
  alert(event.promise); // [object Promise] - 生成该全局 error 的 promise
  alert(event.reason); // Error: Whoops! - 未处理的 error 对象
})

Promise.reject(3);
```

其他文章: 

> unhandledrejection 处理没有显式捕获Promise异常
>
> https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/issues/7
>
> Chrome现在均无触发



##### Fetch错误处理示例

比较完善的fetch错误处理

```javascript
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
  	.then(response => {
    	if (response.status === 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
  })
}

loadJson('no-such-user.json')
.catch(alert); //HttpError: 404
```



从 GitHub 加载给定名称的用户。如果没有这个用户，它将告知用户填写正确的名称;

拥有我们自己的错误处理类的好处是我们可以使用 `instanceof` 很容易地在错误处理代码中检查错误。

```javascript
function getGitHubUser() {
  let name = prompt('enter a name?', 'iliakan');
  
  return loadJson(`https://api.github.com/users/${name}`)
  .then(user => user)
  .catch(err => {
    if (err instanceof HttpError && err.response.status === 404) {
      return getGitHubUser();
    } else {
      throw err;
    }
  })
}
```







### 全局的Promise拒绝处理

有关Promise的其中一个最具争议的问题是，如果在没有拒绝处理程序的情况下拒绝一个Promise，那么不会提示失败信息，这是JavaScript语言中唯一一处没有强制报错的地方.

Promise的特性决定了很难检测一个Promise是否被处理过

```javascript
let rejected = Promise.reject(42);

//此时,rejected还没有被处理

//过了一会
rejected.catch(function(value) {
  //现在rejected已经被处理
  console.log(value);
})
```

任何时候都可以调用then()方法或catch()方法，无论Promise是否已解决这两个方法都可以正常运行，但这样就很难知道一个Promise何时被处理。在此示例中，Promise被立即拒绝，但是稍后才被处理。

#### 4.1 Node.js

在Node.js中，处理Promise拒绝时会触发process对象上的两个事件：

* unhandledRejection 在一个事件循环中，当Promise被拒绝，并且没有提供拒绝处理程序时被调用。
* rejectionHandled      在一个事件循环后，当Promise被拒绝，并且没有提供拒绝处理程序时被调用

**unhandledRejection**

拒绝原因（通常是一个错误对象）及被拒绝的Promise作为参数被传入unhandledRejection事件处理程序中，以下代码展示了unhandledRejection的实际应用：

```javascript
let rejected;

process.on('unhandledRejection', function(reason, promise) {
  console.log(reason.message); //'Explosion'
  console.log(rejected === promise); //true
});

rejected = Promise.reject(new Error('Explosion'));
```

这个示例创建了一个已拒绝Promise和一个错误对象，并监听了unhandledRejection事件，事件处理程序分别接受错误对象和Promise作为它的两个参数。

**rejectionHandled**

rejectionHandled事件处理程序只有一个参数，也就是被拒绝的Promise

```javascript
let rejected;

process.on('rejectionHandled', function(promise) {
  console.log(rejected === promise); //true
});

rejected = Promise.reject(new Error('Explosion'));

//等待添加拒绝处理程序
setTimeout(() => {
  rejected.catch(function(value) {
    console.log(value.message); //Explosion
  })
},1000)
```

这里的rejectionHandled事件在拒绝处理程序最后被调用时触发，如果在创建rejected之后直接添加拒绝处理程序，那么rejectionHandled事件不会被触发，因为rejected创建的过程与拒绝处理程序的调用在同一个事件循环中，此时rejectionHandled事件尚未生效。

通过事件rejectionHandled和事件unhandledRejection将潜在未处理的拒绝存储为一个列表，等待一段时间后检查列表便能够正确地跟踪潜在的未处理拒绝。例如下面这个简单的未处理拒绝跟踪器

```javascript
let possiblyUnhandledRejections = new Map();

//如果一个拒绝没被处理,则将它添加到map集合中
process.on('unhandledRejection', function(reason, promise) {
  possiblyUnhandleRjections.set(promise, reason);
});

process.on('rejectionHandled', function(promise) {
  possiblyUnhandleRejections.delete(promise);
});

setInterval(function() {
  possiblyUnhandledRejections.forEach(function(reason, promise) {
    console.log(reason.message ? reason.message : reason);
    
    //做一些什么来处理这些拒绝
    handleRejection(promise, reason);
  });
  
  possiblyUnhandledRejections.clear();
}, 60000);
```

这段代码使用Map集合来存储Promise及其拒绝原因，每个Promise键都有一个拒绝原因的相关值。每当触发unhandledRejection事件时，会向Map集合中添加一组Promise及拒绝原因；每当触发rejectionHandled事件时，已处理的Promise会从Map集合中移除。结果是，possiblyUnhandledRejections会随着事件调用不断扩充或收缩。setInterval()调用会定期检查列表，将可能未处理的拒绝输出到控制台（实际上你会通过其他方式记录或者直接处理掉这个拒绝）。在这个示例中使用的是Map集合而不是WeakMap集合，这是因为你需要定期检查Map集合来确认一个Promise是否存在，而这是WeakMap无法实现的。



#### 4.2 浏览器

浏览器也是通过触发两个事件来识别未处理的拒绝的，虽然这些事件是在window对象上触发的，但实际上与Node.js中的完全等效。

* unhandledrejection　在一个事件循环中，当Promise被拒绝，并且没有提供拒绝处理程序时被调用。
* rejectionhandled　    在一个事件循环后，当Promise被拒绝，并且没有提供拒绝处理程序时被调用。

在Node.js实现中，事件处理程序接受多个独立参数；而在浏览器中，事件处理程序接受一个有以下属性的事件对象作为参数：

* type　事件名称（"unhandledrejection"或"rejectionhandled"）
* promise　被拒绝的Promise对象
* reason　来自Promise的拒绝值

浏览器实现中的另一处不同是，在两个事件中都可以使用拒绝值（reason），例如：

```javascript
let rejected;

window.onunhandledrejection = function(event) {
  console.log(event.type); //unhandledrejection
  console.log(event.reason.message); //Explosion
  console.log(rejected === event.promise); //true
}

window.onrejectionhandled = function(event) {
  console.log(event.type); //rejectionhandled
  console.log(event.reason.message); //Explosion
  console.log(rejected === event.promise); //true
}

rejected = Promise.reject(new Error('Explosion'));
```

这段代码用DOM 0级记法的onunhandledrejection和onrejectionhandled给两个事件处理程序赋值，如果你愿意的话也可以使用addEventListener("unhandledrejection")和addEventListener("rejectionhandled")，每个事件处理程序接受一个含有被拒绝Promise信息的事件对象，该对象的属性type、promise和reason在这两个事件处理程序中均可使用。在浏览器中，跟踪未处理拒绝的代码也与Node.js中的非常相似：

```javascript
//深入理解Es6 11.3章
```



### Promise链

#### 概况

如果异步任务要一个接一个地执行, Promise 提供了一些方案来做到这一点。

```javascript
new Proise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}).then(value => {
  alert(value); //1
  return value * 2; //2
}).then(value => {
  alert(value);
  return value * 2; 
}).then(value => {
  alert(value);   //4
  return value * 2;
})
```

#### 返回Promise

`.then(handler)` 中所使用的处理程序（handler）可以<span style="color:blue">**显式创建并返回**</span>(`return new Promise())`一个 promise。(显式两个字是自己添加的, 因为then的回调函数本身返回一个promise)

在这种情况下，其他的处理程序（handler）将等待它 settled 后再获得其结果（result）

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}).then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result*2), 1000);
  });
}).then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000)
  })
}).then(res => alert(res)); //4
```

<span style="color:blue;">返回Promise,使我们能够建立异步行为链</span>



#### 实例1-loadScript

实现上面的多个loadScript调用,按顺序次序加载脚本

```javascript
loadScript("/article/promise-chaining/one.js")
  .then(function(script) {
    return loadScript("/article/promise-chaining/two.js");
  })
  .then(function(script) {
    return loadScript("/article/promise-chaining/three.js");
  })
  .then(function(script) {
    // 使用在脚本中声明的函数
    // 以证明脚本确实被加载完成了
    one();
    two();
    three();
  });
```

从技术上讲，我们可以向每个 `loadScript` 直接添加 `.then`，就像这样：

```javascript
loadScript("/article/promise-chaining/one.js").then(script1 => {
  loadScript("/article/promise-chaining/two.js").then(script2 => {
    loadScript("/article/promise-chaining/three.js").then(script3 => {
      // 此函数可以访问变量 script1，script2 和 script3
      one();
      two();
      three();
    });
  });
});
```

这段代码做了相同的事儿：按顺序加载 3 个脚本。但它是“向右增长”的。所以会有和使用回调函数一样的问题。



#### Thenables  ????

<span style="color:blue;">then处理程序（handler）返回的不完全是一个 promise</span>，而是返回的被称为 “thenable” 对象 — 一个具有方法 `.then` 的任意对象。它会被当做一个 promise 来对待。

按照这个想法是，第三方库可以实现自己的“promise 兼容（promise-compatible）”对象。它们可以具有扩展的方法集，但也与原生的 promise 兼容，因为它们实现了 `.then` 方法。

```javascript
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);// function() { native code }
    
    setTimeout(() => resolve(this.num * 2), 1000)// (**)
  }
}

new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result); // (*)
  })
  .then(alert); // 1000ms 后显示 2
```

JavaScript 检查在 `(*)` 行中由 `.then` 处理程序（handler）返回的对象：如果它具有名为 `then` 的可调用方法，那么它将调用该方法并提供原生的函数 `resolve` 和 `reject` 作为参数（类似于 executor），并等待直到其中一个函数被调用。在上面的示例中，`resolve(2)` 在 1 秒后被调用 `(**)`。然后，result 会被进一步沿着链向下传递。

这个特性允许我们将自定义的对象与 promise 链集成在一起，而不必继承自 `Promise`。



#### 实例2-fetch

使用 [fetch](https://zh.javascript.info/fetch) 方法从远程服务器加载用户信息,基本语法很简单:

```javascript
let promise = fetch(url);
```

执行这条语句，向 `url` 发出网络请求并返回一个 promise。

当远程服务器返回 header（是在 **全部响应加载完成前**）时，该 promise 使用一个 `response` 对象来进行 resolve。

向 GitHub 发送一个请求，加载用户个人资料并显示头像：

```javascript
fetch('article/promise-chaining/user.json')
.then(response => response.json())
.then(user => fetch(`https://api.github.com/users/${user.name}`))
.then(response => response.json())
.then(githubUser => {
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = 'promise-avatar-example';
  document.body.append(img);
  
  setTimeout(() => img.remove(), 3000)
})
```

这段代码存在的问题: 在头像显示结束并被移除 **之后** 做点什么？就目前而言是做不到的.

解决: 使链可扩展，我们需要返回一个在头像显示结束时进行 resolve 的 promise。

```javascript
fetch('/article/promise-chaining/user.json')
	.then(response => response.json())
	.then(user => fetch(`https://api.github.com/users/${user.name}`))
	.then(response => response.json())
	.then(githUser => new Promise((reseolve, reject) => {
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = 'promise-avatar-example';
      document.body.append(img);
      
      setTimeout(() => {
        img.remove();
        resolve(githubUser);
      }, 3000)
  }))
  .then(githubUser => alert(`Finished showing ${githubUser.name}`))
```

拆分可重用的代码:

```javascript
function loadJson(url) {
  return fetch(url).then(response => response.json())
}

function loadGithubUser(name) {
  return loadJson(`https://api.github.com/users/${name}`);
}

function showAvatar(githubUser) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    document.body.append(img);
    
    setTimeout(() => {
      img.remove();
      resolve(githubUser)
    }, 3000)
  });
}

//使用它们
loadJson('/article/promise-chaining/user.json')
	.then(user => loadGithubUser(user.name))
	.then(showAvatar)
	.then(githubUser => alert(`Finished showing ${githubUser.name}`))
```









### Promise继承

Promise与其他内建类型一样，也可以作为基类派生其他类，所以你可以定义自己的Promise变量来扩展内建Promise的功能。例如，假设你想创建一个既支持then()方法和catch()方法又支持success()方法和failure()方法的Promise，则可以这样创建该Promise类型

```javascript
class MyPromise extends Promise {
  //使用默认的构造函数
  success(resolve, reject) {
    return this.then(resolve, reject);
  }
  
  failure(reject) {
    return this.catch(reject);
  }
}

let promise = new MyPromise(function(resolve, reject) {
  resolve(42);
});

promise.success(function(value) {
  console.log(value); //42
}).failur(function(value) {
  console.log(value);
})
```

由于静态方法会被继承，因此派生的Promise也拥有MyPromise.resolve()、MyPromise.reject()、MyPromise.race()和MyPromise.all()这4个方法，后二者与内建方法完全一致，而前二者却稍有不同。

由于MyPromise.resolve()方法和MyPromise.reject()方法通过Symbol.species属性（参见第9章）来决定返回Promise的类型，故调用这两个方法时无论传入什么值都会返回一个MyPromise的实例。如果将内建Promise作为参数传入其他方法，则这个Promise将被解决或拒绝，然后该方法将会返回一个新的MyPromise，于是就可以给它的成功处理程序及失败处理程序赋值。

```javascript
//es6 第11章 

```





### Promise实现 🚩🚩🚩

> https://juejin.cn/post/6945319439772434469
>
> 非常重要的一道题.需要多阅读多理解,Promise理解的并不好



```javascript
//version 1 实现基本功能

const PENDING = 'pending'
const 'FULFILLED' = 'fulfilled'
const 'REJECTED' = 'rejected'

class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  
  status = PENDING
  value = null
  reason = null
  
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
    }
  }
  
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.value = reason
    }
  }
  
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    else if (this.status === Rejected) {
      onRejected(this.reason)
    }
  }
}
```



```javascript
//version 2
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  
  status = PENDING
  value = null
  reason = null
  
  // 添加异步处理
  onFulfilledCallback = null
  onRejectedCallback = null
  
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      
      //添加异步处理
      this.onFulfilledCallback && this.onFulfilledCallback(this.value)
    }
  }
  
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.value = reason
      
      //添加异步处理
      this.onRejectedCallback && this.onRejectedCallback(this.reason)
    }
  }
  
  
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    else if (this.status === REJECTED) {
      onRejected(this.value)
    }
    else if (this.status === PENDING) {
      // 因为不知道后面状态的变化,所以将成功和失败的回调储存起来
      // 等到执行成功失败函数的时候再进行传递
      onFulfilledCalback = onFulfilled
      onRejectedCallback = onRejected
    }
  }
}
```



```javascript
// version 3 实现then方法多次调用添加多个处理函数

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  
  status = PENDING
  value = null
  reason = null
  
  //
  onFulfilledCallback = []
  onRejectedCallback = []
  
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      
      //this.onFulfilledCallback.length && this.onFulfilledCallback.shift()(value) 只会执行一次
      while(this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value)
      }
    }
  }
  
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.value = reason
      
      //this.onRejectedCallback.length && this.onRejectedCallback.shift()(reason)
      while(this.onRejectedCalback.length) {
        this.onRejectedCallback.shift()(reason)
      }
    }
  }
  
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    else if (this.status === REJECTED) {
      onRejected(this.value)
    }
    else if (this.status === PENDING) {
      this.onFulfilledCallback.push(onFulfilled)
      this.onRejectedCallback.push(onRejected)
    }
  }
}
```



4 实现then方法的链式调用

then方法要链式调用就需要返回一个Promise对象

then方法里面return一个返回值作为下一个then方法的参数,如果return一个Promise对象,那么就需要判断它的状态

```javascript
class MyPromise {
  //...
  then(onFulfilled, onRejected) {
    //为了链式调用这里直接创建一个 MyPromise, 并在后面return出去
    const promise2 = new MyPromise((resolve, reject) => {
      //这里的内容在执行器中,会立即执行
      if (this.status === FULFILLED) {
        //获取成功回调的执行结果
        const x = onFulfilled(this.value)
        //传入 resolvePromise 集中处理
        resolvePromise(x, resolve, reject)
      }
      else if (this.status === REJECTED) {
        onRejected(this.value)
      }
      else if (this.status === PENDING) {
        this.onFulfilledCallback.push(onFulfilled)
        this.onRejectedCallback.push(onRejected)
      }
    })
    return promise2
  }
}

function resolvePromise(x, resolve, reject) {
  if (x instanceof MyPromise) {
    //执行x, 调用then方法, 目的是将其状态变为 fulfilled 或 rejected
    // x.then(value => resolve(value), reason=>reject(reason))
    //简化之后
    x.then(resolve, reject)
  }
  else {
    //普通纸
    resolve(x)
  }
}
```



5 then方法链式调用识别 Promise 是否返回自己

如果then方法返回的是自己的Promise对象,则会发生循环调用,这个时候程序会报错

```javascript
//test.js

const promsie = new MyPromise((resolve, reject) => {
  resolve(100)
})

const p1 = promise.then(value => {
  console.log(value)
  return p1
})
```

使用原生Promise执行上面的代码,会报类型错误

```javascript
Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>
```

在MyPromise中实现一下:

```javascript
class MyPromise {
  ....
  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve,reject)=> {
      if (this.status === FULFILLED) {
        const x = onFulfilled(this.value)
      	//resolvePromise 集中处理,将promise2 传入
      	resolvePromise(promise2, x, resolve, reject)
      }
      else if (this.status === REJECTED) {
        onRejected(this.reason)
      }
      else if (this.status === PENDING) {
        this.onFulfilledCallback.push(onFulfilled)
        this.onRejectedCallback.push(onRejected)
      }
    })
    return promise2
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  //如果相等了,说明return的是自己,抛出类型错误并返回
  if (promise2 === x) {
    return TypeError(new TypeError('Chaing cycle detected for promise #<Promise>'))
  }
  
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  }else {
    resolve(x)
  }
}
```

执行报错:

```javascript
resolvePromise(promise2, x, resolve, reject);
                       ^

ReferenceError: Cannot access 'promise2' before initialization
```

我们必须要等 promise2 完成初始化。这个时候我们就要用上宏微任务和事件循环的知识了，这里就需要创建一个异步函数去等待 promise2 完成初始化，前面我们已经确认了创建微任务的技术方案 --> `queueMicrotask`

```javascript
//MyPromise

class MyPromise {
  //...
  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        //创建一个微任务 等待promise2 完成初始化
        queueMicrotask(() => {
          //获取成功回调函数的执行结果
          const x = onFulfilled(this.value)
          //传入 resolvePromise 集中处理
          resolvePromise(promise2, x, resolve, reject)
        })
      } else if (this.status === REJECTED) {
        //...
      }
    })
    
    return promise2
  }
}
```



6 捕获错误及then链式调用其他状态代码补充

6.1捕获执行器错误

```javascript
// MyPromise

constructor(executor) {
  try {
    executor(this.resolve, this.reject)
  } catch(error) {
    this.reject(error)
  }
}
```

验证:

```javascript
const MyPromise = require('./MyPromise')
const promise = new MyPromise((resolve, reject) => {
    // resolve('success')
    throw new Error('执行器错误')
})
 
promise.then(value => {
  console.log(1)
  console.log('resolve', value)
}, reason => {
  console.log(2)
  console.log(reason.message)
})
```

执行结果

```javascript
2
执行器错误
```

6.2then执行时错误捕获

```javascript
//MyPromise

then(onFulfilled, onRejected) {
  const promise2 = new MyPromise((resolve, reject) => {
    if (this.status === FULFILLED) {
    	queueMicrotask(() => {
        try {
          const x = onFulfilled(this.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch(error) {
          reject(error)
        }
      })
    }
    else if (this.status === REJECTED) {
      cosnt x = onRejected(this.reason)
      resolvePromise(promise2, x, resolve, reject)
    }
    else if (this.status === PENDING) {
      this.onFulfilledCallback.push(onFulfilled)
      this.onRejectedCallback.push(onRejected)
    }
  })
}
```

7 对rejected和pending状态进行改造,参考fulfilled

> 改造内容:
>
> 1. 增加异步状态下的链式调用
> 2. 增加回调函数执行结果的判断
> 3. 增加识别 Promise 是否返回自己
> 4. 增加错误捕获

```javascript
//MyPromise.js

then(onFulfilled, onRejected) {
  const promise2 = new MyPromise((resolve, reject) => {
  	if (this.status === FULFILLED) {
      queueMicrotask(() => {
        try {
          const x = onFulfilled(this.value)
          resolveProimse(promise2, x, resolve, reject)
        } catch(error) {
          reject(error)
        }
      })
    }
    else if (this.status === REJECTED) {
      queueMicrotask(() => {
        try {
          const x = onRejected(this.reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch(error) {
          reject(error)
        }
      })
    }
    else if (this.status === PENDING) {
      this.onFulfilledCallback.push(() => {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch(error) {
            reject(error)
          }
        })
      })
      this.onRejectedCallback.push(() => {
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch(error) {
            reject(error)
          }
        })
      })
    }
  })
  
  reurn promise2
}
```



8 then中的参数变为可选

上面我们处理 then 方法的时候都是默认传入 onFulfilled、onRejected 两个回调函数，但是实际上原生 Promise 是可以选择参数的单传或者不传，都不会影响执行。

```javascript
//MyPromise

then(onFulfilled, onRejected) {
  // 如果不传,就使用默认函数
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
  onRejected = typeof onRejected === 'function' ? 
onRejected : reason => {throw reason}
  
  const promise2 = new MyPromise((resolve, reject) => {
    
  })
}
```



9 实现resolve与reject的静态调用

` Promise.resolve` 来返回一个 Promise 对象

```javascript
MyPromise {
  //...
  
  //resolve静态方法
  static resolve(parameter) {
    if (parameter instanceof MyPromise) {
      return parameter
    }
    
    //转成常规方式
    return new MyPromise(resolve => {
      resolve(parameter)
    })
  }
  
  //rejec静态方法
  static reject(parameter) {
    return new MyPromise((resolve, reject) => {
      
    })
  }
}
```





## Promise API

### 原型方法

#### Promise.prototype.then()

Promise实例具有then方法,也就是说,then方法是定义在原型对象上的.

**作用**: 为Promise实例添加状态改变时的回调函数.

**参数**: then方法的第一个参数是resolved状态的回调函数,第二个参数是rejected状态的回调函数,都是可选的.

**返回值**: **then方法返回一个新的Promise实例**(注意,不是原来的Promise实例). 因此可以采用链式写法, 即then方法后再调用一个then方法.

前一个回调函数，有可能返回的还是一个`Promise`对象（即有异步操作），这时后一个回调函数，就会等待该`Promise`对象的状态发生变化，才会被调用。





#### Promise.prototype.catch()

Promise.prototype.catch()是then(null, rejection)或then(undefined, rejection)的别名,用于指定发生错误时的回调函数.

```javascript
const promise = new Promise(function(resolve, reject) {
  throw new Error('test');
});

promise.catch(function(err) {
  console.log(error);
});

//Error: test
```

上面代码中，`promise`抛出一个错误，就被`catch()`方法指定的回调函数捕获。注意，上面的写法与下面两种写法是等价的。

```javascript
//写法一

const promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('test');
  } catch(e) {
    reject(e);
  }
});

promise.catch(function(error) {
  console.log(error);
});

//写法二
const promise = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});

promise.catch(function(error) {
  console.log(error);
})
```

比较上面两种写法，可以发现<u>`reject()`方法的作用，等同于抛出错误。</u>

如果Promise状态已经变成resolved, 再抛出错误是无效的.

```javascript
const promise = new Promise(function(resolve, reject) {
  resolve('ok');
  throw new Error('test');
});

promise
	.then(function(value) { console.log(value) })
	.catch(function(error) { console.log(error) });
```

上面代码中，Promise 在`resolve`语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。

Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个`catch`语句捕获。

```javascript
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
```

上面代码中，一共有三个 Promise 对象：一个由`getJSON()`产生，两个由`then()`产生。它们之中任何一个抛出的错误，都会被最后一个`catch()`捕获。

一般来说，<u>不要在`then()`方法里面定义 Reject 状态的回调函数（即`then`的第二个参数）</u>，总是使用`catch`方法。

```javascript
//bad
promise
	.then(function(data) {
  //success
}, function(err) {
  //error
});

//good
promise
	.then(function(data) {
  	//success
	})
	.catch(function(err) {
  	//error
	});
```

上面代码中，第二种写法要好于第一种写法，理由是第二种写法可以捕获前面`then`方法执行中的错误，也更接近同步的写法（`try/catch`）。因此，建议总是使用`catch()`方法，而不使用`then()`方法的第二个参数。



**与try/catch比较**

跟传统的`try/catch`代码块不同的是，<span style="background:#ccc">如果没有使用`catch()`方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。</span>

```javascript
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    //下面一行会报错,因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
//Uncaught (in promise) ReferenceError: x is not defined
//123
```

上面代码中，`someAsyncThing()`函数产生的 Promise 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示`ReferenceError: x is not defined`，但是不会退出进程、终止脚本执行，2 秒之后还是会输出`123`。这就是说，<u>Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。</u>

再比如:

```javascript
const promise = new Promise(function(resolve, reject) {
  resolve('ok');
  setTimeout(function() {throw new Error('tset')}, 0)
});
promise.then(function(value) { console.log(value) });

//ok
//Uncaught Error: test
```

上面代码中，Promise 指定在下一轮“事件循环”再抛出错误。到了那个时候，Promise 的运行已经结束了，所以这个错误是在 Promise 函数体外抛出的，会冒泡到最外层，成了未捕获的错误。

一般建议, Promise 对象后面要跟`catch()`方法，这样可以处理 Promise 内部发生的错误。<span style="background:#ccc">`catch()`方法返回的还是一个 Promise 对象</span>，因此后面还可以接着调用`then()`方法。

```javascript
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    //下面一行代码会报错,因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing()
.catch(function(error) {
  console.log('oh, no', error);
})
.then(function() {
  console.log('carry on');
});

// oh no, [RefferenceError: x is not defined]
// carry on
```

上面代码运行完`catch()`方法指定的回调函数，会接着运行后面那个`then()`方法指定的回调函数。如果没有报错，则会跳过`catch()`方法。

```javascript
Promise.resolve()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
});
// carry on
```

catch方法之中还能再抛出错误

```javascript
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  return someOtherAsyncThing();
}).catch(function(error) {
  console.log('oh no', error);
  // 下面一行会报错，因为 y 没有声明
  y + 2;
}).then(function() {
  console.log('carry on');
});
// oh no [ReferenceError: x is not defined]
```

上面代码中，`catch()`方法抛出一个错误，因为后面没有别的`catch()`方法了，导致这个错误不会被捕获，也不会传递到外层。如果改写一下，结果就不一样了。

```javascript
someAsyncThing().then(function() {
  return someOtherAsyncThing();
}).catch(function(error) {
  console.log('oh no', error);
  // 下面一行会报错，因为y没有声明
  y + 2;
}).catch(function(error) {
  console.log('carry on', error);
});
// oh no [ReferenceError: x is not defined]
// carry on [ReferenceError: y is not defined]
```

第二个`catch()`方法用来捕获前一个`catch()`方法抛出的错误。



#### Promise.prototype.finally()

the method returns a `Promise`. when the promises is finally either fulfilled or rejected, the specified callback function is executed. this provides a way for code to be run whether the promise was fulfilled successfully, or instead rejected.

**Syntax**

```javascript 
p.finally(onFinally)

p.finally(function() {
  //settled
})
```

**parameters**

`onFinally`

* A function called when the `Promise` is settled.

**Return values**

> returns a `Promise` whose `finally` handler is set to the specified function, `onFinally`.
>
> 我觉的这句话说的非常模糊.

**Desc**

如果你想在 promise 执行完毕后无论其结果怎样都做一些处理或清理时，`finally()` 方法可能是有用的。

`finally()` 虽然与 `.then(onFinally, onFinally)` 类似，它们不同的是：

- 调用内联函数时，不需要多次声明该函数或为该函数创建一个变量保存它。
- 由于无法知道`promise`的最终状态，所以`finally`的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。
- 与`Promise.resolve(2).then(() => {}, () => {})` （resolved的结果为`undefined`）不同，`Promise.resolve(2).finally(() => {})` resolved的结果为 `2`。
- 同样，`Promise.reject(3).then(() => {}, () => {})` (fulfilled的结果为`undefined`), `Promise.reject(3).finally(() => {})` rejected 的结果为 `3`。

> Note:  在finally回调中 throw (货返回被闪退的promise) 将以 throw() 指定的原因拒绝新的promise.



`finally`方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是`fulfilled`还是`rejected`。这表明，`finally`方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。

`finally`本质上是`then`方法的特例。

```javascript
promise
.finally(() => {
  //语句
})

//等同于
promise
.then(result => {
  //语句
  return result;
}),
  error => {
  //语句
  throw error;
}
```

上面代码中，如果不使用`finally`方法，同样的语句需要为成功和失败两种情况各写一次。有了`finally`方法，则只需要写一次。

它的实现也很简单。

 ```javascript
Promise.prototype.finally = function(callback) {
  let P = this.constructor;
  return this.then(
  	value => P.resolve(callback()).then(() =>vlaue),
    reason => P.resolve(callback()).then(() =>{ throw reason })
  );
};
 ```

上面代码中，不管前面的 Promise 是`fulfilled`还是`rejected`，都会执行回调函数`callback`。

从上面的实现还可以看到，`finally`方法总是会返回原来的值。????

```javascript
// resolve 的值是 undefined
Promise.resolve(2).then(() => {}, () => {})

// resolve 的值是 2
Promise.resolve(2).finally(() => {})

// reject 的值是 undefined
Promise.reject(3).then(() => {}, () => {})

// reject 的值是 3
Promise.reject(3).finally(() => {})
```

**实现Promise.finally**

```javascript
Promise.prototoype.Finally = function(cb) {
  return this.then(
    (value) => {
    	return Promise.resolve(cb()).then(() => value)
  }, (err) => {
    	return Promise.reject(cb()).then(() => throw err)
  })
}
```



```javascript
Promise.prototype.finally = function(cb) {
  return this.then(
    val => Promise.resolve(cb()).then(() => val),
    err => Promise.reject(cb()).then(() => throw err)
  )
}
```



### 静态方法 6种

#### Promise.resolve()



##### 实现

```javascript
Promise.myResolve = function(val) {
  if (val instanceof Promise) {
    return val
  }
  
  return new Promise(resolve => resolve(val))
}
```



#### Promise.reject()



##### 实现

```javascript
Promise.myReject = function(err) {
  return new Promise((resolve, reject) => reject(err))
}
```







#### Promise.all()

##### 概述

这个方法接收多个promise组成的可迭代的对象(Array, Set, Map, String), 返回一个输入的promises结果的数组的Promise实例.

当所有输入的promise成功或输入可迭代对象不包含promise,返回的promise将会成功

当任意输入的promise失败 或 非promise抛出错误, 返回的promise会立即失败,失败信息是第一个失败promise或错误

返回的promise的两种状态原因

* resolve
  * 当所有输入的promises已经成功 resolved
  * 可迭代对象不包含promises
* reject
  * 当任意一个输入的promise拒绝
  * 非promise抛出一个错误



##### Syntax

```javascript
Promise.all(iterable)
```



##### Param

`iterable`

An [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) object such as an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

##### Return value

* An **already resovled**(已完成) Promise if the iterble passed is empty.(是同步完成的, 见下面)
* An **asynchronously resolved**(异步已完成) Promise if the iterable passed contained no promises.
* A **pending Promise** (处理中)in all other cases
* This returned promise is then resolved/rejected asynchronously(as soon as the stack is empty) when all the promises in the given *iterable* have resolved, or if any of the promises reject.

> 以上关于返回值的描述中:
>
> 已完成和异步已完成有什么区别吗???
>
> 'as soon as the stack is empty'  怎么理解呢?



##### Desc

* the method can be useful for aggregating the results of multiple promises.
* it is typically used when there are multiple related asynchronous tasks that the overrall code relied on to work successfully - all of whom we want to fulfill before the code execution continues.
* `Promise.all()` will reject immediatelly upon **any** of the input promises rejecting. In comparison, the promise returned by `Promise.allSettled()` will wait for all input promises to complete, regardless of whether or not one rejects.
* the order of the promise array is preserved upon completion of this method.(描述不清晰, 返回promise数组的顺序和传入的顺序一样)

##### Fulfillment

* the returned promise is fulfilled(执行, 结束, 满足) with an array containing **all** the resolved values(including non-promise values) in the *iterable* passed as the argumetn:
  * If an <span style="color:blue">**empty *iterable*** </span>is passed, then the promise returned by this method is <span style="color:blue">**fulfilled synchronously**</span>. The resolved values is an empty array.
  * If a nonempty *iterable* is passed, and **all** of <u>the promises fulfill, or are not promsies</u>, then the promise returned by this method is **fulfilled asynchronously**

##### Rejecttion

If any of the passed-in promises reject, `Promise.all` asynchronously rejects with the value of the promises that rejected, whether or not other promise have resolved.



##### **实现Promise.all**

```javascript
//https://juejin.cn/post/7033275515880341512#:~:text=%E5%8F%82%E8%80%83%E4%BB%A3%E7%A0%81-,%E5%AE%9E%E7%8E%B0promise.all,-%E8%80%83%E5%AF%9F%E9%A2%91%E7%8E%87%3A%20(%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90)

function promisesAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError('promises must be an array');
    }
    
    let resArr = [];
    let count = 0;
    promises.forEach((promise, idx) => {
      promise.then(res => {
        resArr[idx] = res;
        count++;
        count === promises.length && resolve(resArr);
      }, err => { reject(err) });
    })
  })
}
```



##### 实例

Promise.all的异步或同步

异步:

```javascript
let resolvedpromisesArray = [Promise.resolve(33), Promise.resolve(44)];

let p = Promise.all(resolvedpromisesArray);

console.log(p);

setTimeout(() => {
  console.log('the stack is not empty');
  console.log(p);
})

//Promise {<pending>}
//2
//the stack is not empty
//Promise {<fulfilled>: Array(2)}
```

如果Promise.all() reject的话, 会有同样的打印顺序:

```javascript
let p = Promise.all([Promise.resolve(3), Promise.reject(4)]);

console.log(p);
setTimeout(() => {
  console.log('the stack is not empty');
  console.log(p);
})
//Promise {<pending>}
//3
//the stack is not empty
//Promise {<rejected>: 4}
```

存储URL的数组,将一个任务数组映射成promise数组,然后将其包装到promise

```javascript
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let request = urls.map(url => fetch(url));

Promise.all(request)
	.then(responses => responses.forEach(
		response => alert(`${response.url}: ${response.status}`)
	))
```

一个更真实的示例，通过 GitHub 用户名来获取一个 GitHub 用户数组中用户的信息（我们也可以通过商品 id 来获取商品数组中的商品信息，逻辑都是一样的）：

```javascript
let names = ['iliakan', 'remy' ,'jeresig'];

let request = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(request)
	.then(responses => responses)
	.then(responses => Promise.all(responses.map(r => r.json())))
	.then(users => users.forEach(user => alert(user.name)))
```



#### Promise.allSettled

##### 概述

the method returns a promise that resolves after all of the fulfilled or rejected, with an array of objects that each describes the outcome of each promise.



##### Syntax

```javascript
Promise.allSettled(iterable)
```

##### Parameters

`iterable`

* an iterable Object, such as an array, in which each member is a Promise.

##### Return values

* 
* 当且仅当传进一个空迭代对象作为参数,返回一个已经完成状态的Promise空数组对象.
* 对于每个结果对象，都有一个 `status` 字符串。如果它的值为 `fulfilled`，则结果对象上存在一个 `value` 。如果值为 `rejected`，则存在一个 `reason` 。value（或 reason ）反映了每个 promise 决议（或拒绝）的值。

```javascript
//status是显式存在的

Promise.allSettled([1,2,3]).then(val => console.log(val));

//log:
[
  {status: 'fulfilled', value: 1},
  {status: 'fulfilled', value: 2},
  {status: 'fulfilled', value: 3}
]
```

##### 实现

```javascript
Promise.myAllSettled = function (promises) {
  
  // 判断数组长度
  if (promises.length === 0) return Promise.resolve([]);

  // 非promise对象包装成promise对象
  const _promises = promises.map(promise => promise instanceof Promise ? promsie : Promise.resolve(promise));

  return Promise((resolve, reject) => {
    
    const res = [];
    let unPromisesCount = _promises.length;
    
    _promises.forEach((promise, idx) => {
      promise.then(val => {
        res[idx] = {
          status: 'fulfilled',
          val
        };
        unPromisesCount -= 1;
        if (unPromisesCount === 0) {
          return resolve(res);
        }
      });
  
      promise.catch(err => {
        res[idx] = {
          status: 'rejected',
          err
        };
        unPromisesCount -= 1;
        if (unPromisesCount === 0) {
          return reject(res);
        }
      })
    })
  })
}
```





#### Promise.any

##### 概述

* `Promise.any()` 接收一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)可迭代对象，只要其中的一个 `promise` 成功，就返回那个已经成功的 `promise` 。
* 如果可迭代对象中没有一个 `promise` 成功（即所有的 `promises` 都失败/拒绝），就返回一个失败的 `promise `和[`AggregateError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)类型的实例，它是 [`Error`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error) 的一个子类，用于把单一的错误集合在一起。
* 本质上，这个方法和[`Promise.all()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)是相反的。



##### Syntax

```javascript
Promise.any(iterable)
```

##### Parameter

`iterable`

一个可迭代对象,例如Array

##### Return values

- 如果传入的参数是一个空的可迭代对象，则返回一个 **已失败（already rejected）** 状态的 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。
- 如果传入的参数不包含任何 `promise`，则返回一个 **异步完成** （**asynchronously resolved**）的 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。
- 其他情况下都会返回一个**处理中（pending）** 的 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。 
- 只要传入的迭代对象中的任何一个 `promise` 变成成功（resolve）状态，或者其中的所有的 `promises` 都失败，那么返回的 `promise` 就会 **异步地**（当调用栈为空时） 变成成功/失败（resolved/reject）状态。

##### Desc

* 这个方法用于返回第一个成功的 `promise` 。只要有一个 `promise` 成功此方法就会终止，它不会等待其他的 `promise` 全部完成。
* 不像 [Promise.all()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 会返回一组完成值那样（resolved values），我们只能得到一个成功值（假设至少有一个 `promise` 完成）
* 也不像 [Promise.race()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) 总是返回第一个结果值（resolved/reject）那样，这个方法返回的是第一个 *成功的* 值。
* Fulfillment
  * 如果传入的参数是一个空的可迭代对象, 这个方法将会同步返回一个已经完成的 `promise`。
  * 如果传入的任何一个 `promise` 已成功, 或者传入的参数不包括任何 `promise`, 那么 `Promise.any` 返回一个异步成功的 `promise`。
* Rejection
  * 如果所有传入的 `promises` 都失败, `Promise.any` 将返回异步失败，和一个 [AggregateError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) 对象，它继承自 [Error](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)，有一个 `error` 属性，属性值是由所有失败值填充的数组。



##### 实现

```javascript
//https://juejin.cn/post/7033275515880341512#heading-35
Promise.myAny = function(promises) {
  return new Promise((resolve, reject) => {
    let idx = 0;
    if (promises.length === 0) return;
    
    promises.forEach((p, i) => {
      Promise.resolve(p).then(
      	val => resolve(val),
        err => {
          idx++;
          if (idx === promises.length) {
            return new AggregateError('all promise were rejected')
          }
        }
      )
    })
  })
}
```



#### Promise.race

##### 概述

返回一个Promise,一旦迭代器中的某个promise解决或拒绝,返回的promise就会解决或拒绝.

##### Syntax

```javascript
Promise.race(iterable)
```

##### Parameter

`iterable`

可迭代对象,类似Array.

##### Return values

一个**待定的** [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 只要给定的迭代中的一个promise解决或拒绝，就采用第一个promise的值作为它的值，从而**异步**地解析或拒绝（一旦堆栈为空）????



##### Desc

* `race` 函数返回一个 `Promise`，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。

* 如果传的迭代是空的，则返回的 promise 将永远等待。

* 如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则` Promise.race` 将解析为迭代中找到的第一个值



##### 实现

```javascript
Promise.myRace = function (promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach(p => {
      Promise.resolve(p).then(val => resolve(val), err => reject(err))
    })
  })
}
```



## Promise的使用案例

#### 如何串行执行多个Promise

案例: 一个封装的延迟函数，然后一个装有3,4,5的数组，需求就是在开始执行时依次等待3, 4, 5秒，并在之后打印对应输出

```javascript
//https://juejin.cn/post/6844903801296519182

function delay(time) {
  return new Promise((resolve, reject) => {
    console.log(`wait ${time}s`);
    setTimeout(() => {
      console.log('execute');
      resolve();
    }, time*1000)
  })
}

const arr = [3,4,5];
```

1.reduce

```javascript
arr.reduce((s,v) => {
  return s.then(() => delay(v))
}, Promise.resolve())
```

2.async + 循环+await

```javascript
(
	async function() {
    for (const v of arr) {
      await delay(v)
    }
  }
)()
```

3.普通循环

```javascript
let p = Promise.resolve();
for (const i of arr) {
  p = p.then(() => delay(i));
}

//while循环存在一定的问题
//思路没啥问题，问题就在于i放在外层时实际上每次都被改动，这和一道经典的面试题一样
let i;
let p = Promise.resolve();
while(i = arr.shift()) {
  p = p.then(() => delay(i))
}

//更正
let i;
let p = Promise.resolve();
while(i = arr.shift()) {
  let s = i;
  p = p.then(() => delay(s))
}
```



4.递归

```javascript
function dispatch(i, p=Promise.resolve()) {
  if (!arr[i]) return Promise.resolve();
  return p.then(() => dispatch(i+1, delay(arr[i])))
}

dispatch(0)
```



5.for await of 

 待完成

6.generator

```javascript
待完成
```





//

```html
<script>
  // 1) 创建promise对象(pending状态), 指定执行器函数
  const p = new Promise((resolve, reject) => {
    // 2) 在执行器函数中启动异步任务
    setTimeout(() => {
      const time = Date.now()
      // 3) 根据结果做不同处理
      // 3.1) 如果成功了, 调用resolve(), 指定成功的value, 变为resolved状态
      if (time%2===1) {
        resolve('成功的值 '+ time)
      } else { // 3.2) 如果失败了, 调用reject(), 指定失败的reason, 变为rejected状态
        reject('失败的值' + time)
      }
    }, 2000)
  })

  // 4) 用promise指定成功或失败的回调函数来获取成功的vlaue或失败的reason
  p.then(
    value => { // 成功的回调函数onResolved, 得到成功的vlaue
      console.log('成功的value: ', value)
    },
    reason => { // 失败的回调函数onRejected, 得到失败的reason
      console.log('失败的reason: ', reason)
    }
  )
</script>

```



#### 30%中奖案例

```html
 // 点击按钮, 1s 后显示是否中奖.  30%概率中奖
// 中奖弹出   恭喜恭喜  显示中奖号码
// 未中奖弹出  再接再厉  显示号码

//回调函数写法
<body>
    <button id='btn'>点击按钮</button>
    <script>
        function rand(m, n){
            return Math.round(Math.random()*(n-m)+m);
        }
    	const btn=document.querySelector('#btn');
        btn.onclick=function(){
            setTimeout(()=>{
                let n = random(1,100);
                if(n<=30){
                    alert('恭喜恭喜,中奖号码'+n);
                }else{
                    alert('再接再厉,中奖号码'+n);
                }
            },1000)
        }
    </script>   
</body>

//Promise方法
<script>
	btn.onclick=function(){
        let p=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let n = random(1,100);
                if(n<=30){
                    //alert('恭喜恭喜,中奖号码'+n);
                    resolve(n);
                }else{
                    //alert('再接再厉,中奖号码'+n);
                    reject(n);
                }
            },1000)
        });
        
        p.then((value)=>{
            console.log('成功啦, 恭喜中奖啦!! 中奖号码为 '+value );
        }, (reason)=>{
            console.log('失败啦, 再接再厉  号码为' + reason );
        })
    }
</script>
```





#### 读取文件

```html
//resource文件下有名称为1,2,3的html文件

//无promise版本
<script>
const fs = require('fs');

fs.readFile('./resource/1.htmlx', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});
    
//throw err报错信息: err是一个对象
[Error: ENOENT: no such file or directory, open 'D:\0922frontend\1215\day15\课堂\Promise\代码\1-Promise\1-基础\resource\1.htmlx'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\0922frontend\\1215\\day15\\课堂\\Promise\\代码\\1-Promise\\1-基础\\resource\\1.htmlx'
}
    
</script>

//promise版本
<script>
	const fs=require('fs');
    let p=new Promise((resolve, reject)=>{
        let data=fs.readFile('./resource/1.html', (err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    });
    p.then((value)=>{
        console.log(value.toString())
    }, (reason)=>{
        console.log(reason.code);//
    })
</script>


```



#### 发送ajax请求

```js
<scirpt>
    cosnt btn=document.querySelector('button');
	btn.onclick=function(){
        let p = new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http:');
            xhr.send();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status >= 200 && xhr.status < 300){
                        //成功的情况,成功的值是非常灵活可自定义的
                        resolve({
                            status:xhr.status,
                            statustext:xhr.statusText,
                            headers:xhr.getAllResponseHeaders(),
                            body:xhr.responseText
                        })
                    }else{ 
                        //失败的情况  失败的情况也是放在readyState这个判断中的.
                        reject(xhr.status);
                    }
                }
            }
        })
    }
//对成功和失败的情况进行处理
//格式:p.then(成功函数1, 失败函数2)
p.then((value)=>{
		console.log(value);
    },(reason)=>{
		console.log(reason);
    })
</script>    
```



#### 连接mongoose数据库

```js
//db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/h5200922');

//实例化 Promise 对象
let p = new Promise((resolve, reject) => {
    //连接成功
    mongoose.connection.on('open', () => {
        resolve();
    });
    //连接失败
    mongoose.connection.on('error', () => {
        reject();
    });
});

//暴露
module.exports = p;


//html
const mongoose = require('mongoose');
//引入 db.js
const p = require('./db/db');

p.then(value => {
    //结构对象
    const UserSchema = new mongoose.Schema({
        username:String,
        password:String,
        age: Number,
        gender: String
    })

    const UserModel = mongoose.model('users', UserSchema);

    //mongoose 提供 promise 的结果处理
    UserModel.find({username: 'abc'}).then(data => {
        console.log(data);
    });
}, reason => {
    console.log('连接失败, 请重试');
})


```



#### 封装函数读取文件内容

```js
/**
 * 作用: 读取文件的中的内容
 * 封装一个函数 mineReadFile
 * 参数        path 文件路径
 * 返回结果    Promise 对象
 */

根据函数使用形式倒推封装函数:
mineReadFile('./resource/1.html')
.then(value=>{console.log(value.toString())}, reason=>{console.log('读取失败')})

//函数封装
const fs=require('fs');
function mineReadFile(path){
    return new Promise((resoleve, reject)=>{ //返回一个Promise对象
        //使用readFile读取文件内容
        fs.readFile(path, (err, data)=>{
            if(err){
                //调用reject函数
                reject(err);
            }
            //成功的状态,调用resolve函数
            resolve(data);
        })
    })
}

mineReadFile(path).then(value=>{console.log(value), reason=>{console.log(reason)}});

========================彻底封装=======================
const fs=require('fs');
function mineReadFile(path){
    return new Promise((resolve, reject)=>{
        fs.readFile(path,(err,data)=>{
            if err reject err;
            resolve(data);
        })
    }).then(value=>{console.log(value)}, reason=>{console.log(reason)})
}

mineReadFile(path);
```





#### promisify

```
可以将 fs 模块中的异步的 API, 转化成返回 promise 对象形式的函数
```



```js
//nodejs中的内置模块
//传入一个错误优先的回调函数
const util=require('util');
const fs=require('fs');

//获取读取文件的函数 将函数转换为promise形态
const mineReadFile=util.promisify(fs.readFile);

========第二种形式===============
const {promisify}=require('util');
const myReadFile=promisify(require('fs').readFile);

//读取文件
mineReadFile('./resource/1.html')
.then(value=>{
    console.log(value.toString());
}, reason=>{
    console.log(reason);
})

```



####  如何将Promise.then中的值直接return出来

> https://www.wenyuanblog.com/blogs/javascript-how-to-return-value-in-promise.html

需求: 定义一个 `foo` 函数，在里面执行异步操作，然后取得 `Promise.then` 中的值并 `return` 出来，以便在别的地方使用该返回值。

不可能实现直接将 `Promise.then` 中的值 `return` 出来. 直接return那只将结果return到then中,如果赋值给外部变量,则存在同步异步问题

```javascript
//直接return

function foo() {
  let p = new Promise((resolve, reject) => {
    resolve('hello');
  });
  p.then(value => value);
}
let result = foo();
console.log(result); //undefined  foo函数没有返回值


//没有返回正确的值
function foo() {
  let result = '';
  let p = new Promise((resolve, reject) => {
    resolve('hello');
  })
  p.then(value => {
    result = value;
  })
  
  return result;
}

result = foo();
console.log(result); //''

前面声明了 result，而后面对它的赋值发生在异步操作中
```

正确的使用方式只能是：`return` 出 `Promise` 对象，然后在 `.then` 的执行体中处理异步请求得到的值（或者用 `async/await`）

```javascript
//异步请求封装成一个方法 并return异步请求的结果给变量

function getSomething() {
  return new Promise((resolve, reject) => {
    service.getList().then(res => {
      resolve(res);
    })
  })
}
//Promise + async实现
async function asyncFn() {
  let resultData = await getSomething();
  return result;
}

//then 不正确
asyncFn().then(value => {
  let data = value;
})
```



#### 创建未完成状态的Promise

用Promise构造函数可以创建新的Promise,构造函数只接收一个参数: 包含初始化Promise代码的执行器(executor)函数. 执行器接受两个参数,分别是resolve()函数和reject()函数. 执行器成功完成时调用resolve()函数,反之失败则调用reject()函数. Promise的执行器会立即执行,然后才执行后续流程中的代码.

```javascript
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  
  resolve();
});
console.log('Hi');

//输出的内容
Promise
Hi
```

在执行器中，无论是调用resolve()还是reject()，都会向任务队列中添加一个任务来解决这个Promise。

#### 如何改变promise的状态?

3种方式改变状态:

* resolve(value): 如果当前是pending就会变为fulfilled
* reject(reason): 如果当前是pending就会变为rejected
* 抛出异常: 如果当前是pending就会变为rejected

- 其他情况下的状态值都是pending.

```js
let p = new Promise((resolve, reject) => {
    // resolve();
    // reject();
    // throw '有点问题';  手动抛出错误
    // console.log(a);   a没有定义,由执行环境去抛出错误
});

console.log(p);
         
         
```



#### 为Promise对象指定多个成功或失败的回调

```js
//当promise改变为对应状态时都会调用 多次调用then方法
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error');
    }, 1000);
});

// //指定回调
p.then(value => {
    console.log(value);
}, reason => {
    console.error(reason);
});

p.then(value => {
    alert(value);
}, reason => {
    alert(reason);
});
```





#### 改变promise状态和指定回调函数(then)谁先谁后

1.都有可能. 正常是先指定回调再改变状态

2.先改变状态再指定回调//同步

* 直接调用resolve()/reject()
* 延迟更长时间调用回调函数

```javascript
let p = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('ok'), 1000})
});

setTimeout(() => {p.then(val => console.log(val)), 3000});
```

3.先指定回调函数再改变状态

```javascript
let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('ok'), 1000);
});
p.then(val => console.log(val));
```

4.什么时候得到数据

* 如果先指定的回调函数,当状态发生改变时调用回调,得到数据
* 如果先改变的状态,当指定回调时候就会调用,得到数据





#### promise.then()返回新的promise的结果状态由什么决定

> then方法的返回结果是一个promise对象

* 简单表达: 由then()指定的回调函数执行结果决定(<u>执行结果就是函数的返回值</u>)
* 详细表达:                                    
  * 如果抛出异常, 新promise变为rejected, reason为抛出的异常(throw抛出的值)
  * 如果返回非promise的任意值, 新promise变为fulfilled, 其值为返回值
  * 如果返回的是另一个新promise, 此promise的结果就会成为新promise的结果,其值也会为then方法的返回值.







#### promise如何串连多个操作任务?

* promise的then()返回一个新的promise, 可以开成then()的链式调用
* 通过then的链式调用串连多个同步/异步任务



链式调用实例-读取多个文件

```js
//合并1-3个HTML文件

//普通写法 回调地狱
const fs=require('fs');

fs.readFile('./resource/1.html', (err, data)=>{
    if(err) throw err;
    fs.readFile('./resource/2.html', (err, data2)=>{
        if(err) throw err;
        fs.readFile('./resource/3.html', (err, data3)=>{
            if(err) throw err;
            console.log(data+data2+data3);//加号 自动转换成字符串
        })
    })
})

//promise
const fs=require('fs');

const p=new Promise((resolve, reject)=>{
    fs.readFile('./resource/1.html', (err, data)=>{
        if(err) reject(err);
        resolve(data);
    })
});

p.then(vlaue=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./resource/2.html', (err, data)=>{
            if(err) reject(err);
            resolve([value, data]);
        })
    })
}).then(value=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./resource/3.html' (err, data)=>{
            if(err) reject(err);
            resolve([...value, data])
        })
    })
}).then(vlaue=>{
    console.log(value.join(''));
}).catch((reaso n)=>{
    console.log(reason);
    fs.writeFileSync('./error.log', reason.path+'\r\n', {falg:'a'});//错误路径
})

//promisify
const {promisify}=require('util');
const mineReadFile=promisify(require('fs').readFile);
const p1 = mineReadFile('./resource/1.html');
const p2 = mineReadFile('./resource/2.html');
const p3 = mineReadFile('./resource/3.html');

const result=Promise.all([p1, p2, p3]);
result.then(value=>{
    console.log(value.join(''));
}, reason=>{
    console.log('读取失败');
})


//async和await
const {promisify}=require('util');
const readFile=promisify(require('fs').readFile);

async function mine(){
    const one = await readFile('./resource/1.html');
    const two = await readFile('./resource/2.html');
    const three = await readFile('./resource/3.html');
    
    return console.log(one+two+three);
}

mine();
```







#### Promise异常穿透

* 当使用promise的then链式调用时, 可以在最后指定失败的回调, 
* 前面任何操作出了异常, 都会传到最后失败的回调中处理

```js

new Promise((resolve, reject) => {
    resolve('ok');
    // reject('error'); 假如是失败promise,依然会向后执行到catch
}).then(value => {
    //console.log(value);// ok 
    throw 'oh no'; //返回失败回调,向下执行,被catch获取
}).then(value => {
    console.log(value);// undefined
}).catch(reason => {
    console.error(reason);
});
```



#### Promise中断链条

* 返回一个pending状态的promise对象 有且只有这一种方法
* 传一个错误的promise对象值,会被catch捕获,如果没有catch方法会报错
* 中断方法 return new Promise(()=>{})

```js
const p=new Promise((resolve, reject)=>{
    console.log(11);
    resolve();
});
p.then((value)=>{
    console.log(22);
    return new Promise(()={});
}).then((value)=>{
    console.log(33);
}).then((value)=>{
    console.log(44);
}).then((value)=>{
    console.log(55);
})
```



## Async / await

async/await 是以更舒适的方式使用promise的一种特殊语法.

### 实现原理 /未完成

> [Async 是如何被 JavaScript 实现的 (qq.com)](https://mp.weixin.qq.com/s/FfDe9mpEvJF17lW8eqMLLQ)





### async function

#### 概述

async是一个关键字,用来描述函数: 即这个函数总是会返回一个promise. 其他值将自动被包装在一个 resolved的promise中.



### await

#### 概述

* 只能在async函数内部使用. 关键字await让JavaScript引擎等待直到promise完成(settle)并返回结果.

* await右侧的表达式一般为promise对象, 但也可以是其它的值
* 如果表达式是promise对象, await返回的是promise成功的值.如果是失败的值,await会把promise的异常抛出,可以使用try..catch捕获错误.
* 如果表达式是其它值, 直接将此值作为await的返回值

案例:

```Javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('don'), 1000)
  });
  
  let result = await promise; //等待, 直到 promise resolve
  
  alert(result); //'done'
}

f();
```

这个函数在执行的时候，“暂停”在了 `(*)` 那一行，并在 promise settle 时，拿到 `result` 作为结果继续往下执行。所以上面这段代码在一秒后显示 “done!”。



#### 总结

* <span style="color:red; font-weight: bold;">`await` 实际上会暂停函数的执行</span>，直到 promise 状态变为 settled，然后以 promise 的结果继续执行。

* 这个行为不会耗费任何 CPU 资源，因为 JavaScript 引擎可以同时处理其他任务：执行其他脚本，处理事件等。

* 相比于 `promise.then`，它只是获取 promise 的结果的一个更优雅的语法。并且也更易于读写。

#### 注意事项

* 不能在普通函数中使用 `await`, 会报语法错误`Syntax error`
* 现在浏览器在 modules 里 允许顶层 await
* await 接收 `thenables`
* Class 中的 async 方法

<u>现在浏览器在 modules 里 允许顶层 await</u>

>  在现代浏览器中，当我们处于一个 module 中时，那么在顶层使用 `await` 也是被允许的。我们将在 [模块 (Module) 简介](https://zh.javascript.info/modules-intro) 中详细学习 modules。

```javascript
// 我们假设此代码在 module 中的顶层运行
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

console.log(user);
```

```javascript
//polyfill: 包装到匿名的异步函数中。

(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let users = await response;
})();

```



<u>await 接收 'thenables'</u>

> 像 `promise.then` 那样，`await` 允许我们使用 thenable 对象（那些具有可调用的 `then` 方法的对象）。这里的想法是，第三方对象可能不是一个 promise，但却是 promise 兼容的：如果这些对象支持 `.then`，那么就可以对它们使用 `await`。

```javascript
class Thenable {
  constructor (num) {
    this.num = num;
  }
  
  then(resolve, reject) {
    alert(resolve);
    setTimeout(() => resolve(this.num * 2), 1000);
  }
}


async function f() {
  let res = await new Thenable(1);
  alert(res);
}

f();
```



<u>Class 中的 async 方法</u>

要声明一个 class 中的 async 方法，只需在对应方法前面加上 `async` 即可：

```javascript
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(alert); // 1（alert 等同于 result => alert(result)）
```



### Error 处理

#### 概述

如果一个 promise 正常 resolve，`await promise` 返回的就是其结果。但是如果 promise 被 reject，它将 throw 这个 error，就像在这一行有一个 `throw` 语句那样。

```javascript
//下面两段代码是一样的:

async function f() {
  await Promise.reject(new Error('whoops'));
}


async function f() {
  throw new Error('whoops');
}
```



#### 处理

在真实开发中，promise 可能需要一点时间后才 reject。在这种情况下，在 `await` 抛出（throw）一个 error 之前会有一个延时。

* 可以用 `try..catch` 来捕获上面提到的那个 error，与常规的 `throw` 使用的是一样的方式：
* try 可以包装多行 await 代码
* 没有使用`try...catch`,可以在函数调用后面添加`.catch` 来处理这个error

```javascript
//try...catch
async function f() {
  try {
    let response = await fetch('http://no-such-url');
  } catch (e) {
    alert(e); //TypeError: failed to fetch
  }
}

f();
```



```javascript
//try 包含多行await

async function f() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch (e) {
    //捕获 fetch 和 response.json 中的错误
    alert(e);
  }
}

f();
```



```javascript
//使用.catch来处理

async function f() {
  let response = await fetch('http://no-such-url');
}

//f()变成一个rejected的promise
f().catch(alert); // TypeError: failed to fetch
```









```js
await等的是右侧「表达式」的结果
右侧如果是函数，那么函数的return值就是「表达式的结果」
右侧如果是一个 'hello' 或者什么值，那表达式的结果就是 'hello'

async function async1() {
    console.log( 'async1 start' )
    await async2()
    console.log( 'async1 end' )
}
async function async2() {
    console.log( 'async2' )
}
async1()
console.log( 'script start' )

上面例子中， 'async2' 和 'script start' 谁先打印呢？
实践的结论是，从右向左的。先打印async2，后打印的script start

await 等到之后,对于await来说，分2个情况:不是promise对象,是promise对象

如果不是 promise , await会阻塞后面的代码，先执行async外面的同步代码，同步代码执行完，再回到async内部，把这个非promise的东西，作为 await表达式的结果

如果它等到的是一个 promise 对象，await 也会暂停async后面的代码，先执行async外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。

分析一下 await async2()
前文提过await，1.它先计算出右侧的结果，2.然后看到await后，中断async函数

先得到await右侧表达式的结果。执行async2()，打印同步代码console.log('async2'), 并且return Promise.resolve(undefined)
await后，中断async函数，先执行async外的同步代码
目前就直接打印 console.log('async2')

回到async内部，执行await Promise.resolve(undefined)
如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。
在我们这个例子中，就是Promise.resolve(undefined)正常处理完成，并返回其处理结果。那么await async2()就算是执行结束了。
目前这个promise的状态是fulfilled，等其处理结果返回就可以执行await下面的代码了。

那何时能拿到处理结果呢？
需要在then的第一个参数里，才能拿到结果。
所以这里的 await Promise.resolve() 就类似于 Promise.resolve(undefined).then((undefined) => {})
把then的第一个回调参数 (undefined) => {} 推入微任务队列。then执行完，才是await async2()执行结束。
await async2()执行结束，才能继续执行后面的代码

```









### async和await结合使用

#### 注意事项

```
1.	await必须写在async函数中, 但async函数中可以没有await
2.	如果await的promise失败了, 就会抛出异常, 需要通过try...catch捕获处理

```



#### 案例+++

```js
//https://www.cnblogs.com/fundebug/p/10095355.html

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}

async function async2() {
    console.log("async2");
}

console.log("script start");

setTimeout(function() {
    console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
    console.log("promise1");
    resolve();
}).then(function() {
    console.log("promise2");
});

console.log("script end");
```





```js
//await右侧不是promise对象
async function main(){
    let result = await 123;
    console.log(result);
}
main();//执行结果是123


//右侧为promise类型的值 即使是异步函数,也能正常获取成功的结果
async function main(){
    let result = await (new Promise((resolve, reject)=>{
        resolve('ok');
    }));
    console.log(result);
}
main();//执行结果是ok

async function main(){
    let p = Promise.resolve('ok');
    let result = await p;
    console.log(result);
}
main();//执行结果是ok

//如果promise的对象是失败 会抛出错误,使用try..catch
async function main(){
    try(
         let p = await (new Promise(resolve, reject)=>{
        	reject('error');
        });
    	console.log(p);
    )catch(e){
       console.log(e);
    }
}
main();//输出结果为catch函数输出的'error'
```



#### 案例2

```js
- 读取resource文件夹下的1-3个HTML文件

const fs=require('fs');
const {promisify}=require('util');
let readfile=promisify(fs.readFile);

async function main(){
    let p1=await readfile('./resource/1.html');
    let p2=await readfile('./resource/2.html');
    let p3=await readfile('./resource/3.html');

    console.log(p1+p2+p3);
}
mian();
```



#### 案例3-封装ajax

```html
- 封装ajax函数,实现获取url接口结果
<button>点击获取天气</button
<script>
function sendAjax(url){
    let xhr=new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange=function(){
       return new Promise((resolve, reject)=>{
        if(xhr.readyState === 4){
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.status)
            }
        }
    }
   })
}

const btn=document.querySelector('button');
btn.onclick=async function(){
	let url='';
	let result = await sendAjax(url);
	console.log(result);
    <!--promise方法 sendAjax.then()   -->
                                                
};
</script>
```



### map中遍历使用async函数

```js
//https://zhuanlan.zhihu.com/p/88695806

当 async 函数被执行时，将立即返回 pending 状态的Promise（ Promise 是 Truthy 的）！因此，在 map 循环时，不会等待 await 操作完成，而是直接进入下一次循环，所以应当配合 for 循环使用 async。
对于 forEach 而言，参考 MDN 中它的 Polyfill 可知，若回调函数为异步操作，它将会表现出并发的情况，因为它不支持等待异步操作完成后再进入下一次循环。


//来个例子: 自定义Sleep函数阻塞代码一段时间
//方案1
const sleep = ms => new Promise(resolve=>{
  setTimeout(()=>{
    resolve()
  },ms)
});
const mapResult = [1,2].map(async num => {   //使用async函数后map的返回值为 //[Promise{<pending>}, Promise{<pending>]}
  await sleep(3000);
})

//方案2
const sleep = wait => new Promise(resolve=>setTimout(resolve, wait));
const __main = async function () {
  const tasks = [1,2,3];
  let results = await tasks.reduce(async (previousValue, currentValue) => {
    let results = await previousValue;
    console.log(`task ${currentValue} start`);
    await sleep(1000 * currentValue);
    console.log(`${currentValue}`);
    console.log(`task ${currentValue} end`);
    results.push(currentValue);
    return results;
  }, []);
  console.log(results);
}
__main();
```





## try catch



### try catch

```js
- 捕获错误 try...catch
- 抛出错误 throw error

* 语法固定 try...catch   try 尝试的意思  catch 捕获
* 1. try catch捕获到错误之后, 后续代码可以继续执行
* 2. catch 可以将错误信息捕获到. e 是一个对象, 有message和stack两个属性
* 3. 抛出错误之后, 在后续的 try 里面的代码不会执行
* 4. try 不能捕获语法错误. 其他三种类型错误可以捕获.
* 5. 允许使用 throw 手动的抛出错误
* 6. 抛出任意类型的数据





- 运行流程
1.try catch捕获到错误之后,后续代码是可以继续执行的
2. catch可以将错误信息捕获到,e是一个对象,有message和stack两个属性
 2.1 message: 发生错误的信息; stack:发生错误的位置,配合使用console.dir(e)
3.抛出错误之后,在后续的try里的代码是不会执行的
4.try不能捕获语法错误,其他三种类型错误可以捕获
5.允许使用throw手动抛出错误
   Throw new Error(‘xxx’)   catch(e) 
6.抛出任意类型的数据


- err对象的结构
1.	message属性: 错误相关信息
2.	stack属性: 函数调用栈记录信息 错误发生的位置信息
```



```js
try捕获到错误之后,把错误信息变成对象, 然后传递给catch
try{
    console.log(a);
    console.log(111);//出错之后的代码不会执行
}catch(e){
    console.log(e);//结果是字符串
    console.dir(e);//
}
console.log('可继续执行'); 
```









## JS异步之宏队列和微队列

> [从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节 - 掘金 (juejin.cn)](https://juejin.cn/post/6945319439772434469)

### 原因

* Js 是单线程都，但是一些高耗时操作就带来了进程阻塞问题。为了解决这个问题，Js 有两种任务的执行模式：**同步模式（Synchronous）和异步模式（Asynchronous）**。
* 在异步模式下，创建**异步任务主要分为宏任务与微任务两种**。ES6 规范中，宏任务（Macrotask） 称为 Task， 微任务（Microtask） 称为 Jobs。宏任务是由宿主（浏览器、Node）发起的，而微任务由 JS 自身发起。

分类

### 宏任务和微任务的几种创建方式

| 宏任务                 | 微任务                        |
| ---------------------- | ----------------------------- |
| setTimeout             | requestAnimationFrame(有争议) |
| setInterval            | MutationObserver(浏览器环境)  |
| MessageChannel         | Promise.[then/catch/finally]  |
| I/O, 事件队列          | process.nextTick(Node环境)    |
| setImmediate(Node环境) | queueMicrotask                |
| script(整体代码)       |                               |



<u>如何理解script整体代码是个宏任务呢?</u>

实际上如果同时存在两个 script 代码块，会首先在执行第一个 script 代码块中的同步代码，如果这个过程中创建了微任务并进入了微任务队列，第一个 script 同步代码执行完之后，会首先去清空微任务队列，再去开启第二个 script 代码块的执行。所以这里应该就可以理解 script（整体代码块）为什么会是宏任务。






```
1.	JS中用来存储[待执行回调函数]的队列包含2个不同特定的列队
2.	宏列队: 用来保存待执行的宏任务(回调函数), 比如: 定时器回调/DOM事件回调/ajax回调
3.	微列队: 用来保存待执行的微任务(回调), 比如: promise的回调/MutationObserver的回调
4.	JS执行时会区别这2个队列
(1)	JS引擎首先必须先执行所有的初始化同步任务代码
(2)	每次准备取出第一个宏任务执行前, 都要将所有的微任务一个一个取出来执行.微队列等级高于宏队列

```



```js
//因为是一道前端面试题，所以答案是以浏览器的eventloop机制为准的，在node平台上运行会有差异。
// https://www.cnblogs.com/fundebug/p/10095355.html

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}

async function async2() {
    console.log("async2");
}

console.log("script start");

setTimeout(function() {
    console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
    console.log("promise1");
    resolve();
}).then(function() {
    console.log("promise2");
});

console.log("script end");

//打印结果:
script start
async1 start
async2
promise1
script end
async1 end
promise2
undefined
setTimeout
```







#### 试题1

```js
<script type="text/javascript">
//宏队列 1
//微队列 3 4
//同步 2 5
 
    setTimeout(() => {
        console.log(1)
    }, 0)
    new Promise((resolve) => {
        console.log(2)
        resolve()
    }).then(
        () => {
        console.log(3)
    }).
    then(
        () => {
        console.log(4)
    })
    console.log(5)

</script> 
```





#### 案例2

```HTML
<script type="text/javascript">
    //同步  3 7 4
    //微队列 1 2
    //宏队列 5 
    let first = () => (new Promise((resolve, reject) => {
        console.log(3)
        let p = new Promise((resolve, reject) => {
            console.log(7)
            setTimeout(() => {
                console.log(5)
                resolve(6)
            }, 0)
            resolve(1)
        })
        resolve(2)
        p.then((arg) => {
            console.log(arg)
        })
    }))
    first().then((arg) => {
        console.log(arg)
    })
    console.log(4)
</script>
```



#### 案例3

```js
<script type="text/javascript">
    
    setTimeout(() => {
        console.log("0")
    }, 0);

    new Promise((resolve, reject) => {
        console.log("1")
        resolve()
    }).then(() => {
        console.log("2")
        new Promise((resolve, reject) => {
            console.log("3")
            resolve()
        }).then(() => {
            console.log("4")
        }).then(() => {
            console.log("5")
        })
    }).then(() => {
        console.log("6")
    });

    new Promise((resolve, reject) => {
        console.log("7")
        resolve()
    }).then(() => {
        console.log("8")
    })

    
</script>
```





#### Promise+setTimeout+Async执行顺序

> [setTimeout+Promise+Async输出顺序？很简单呀！ - 掘金 (juejin.cn)](https://juejin.cn/post/7016298598883131423)

##### JS执行机制

* 遇到 同步代码 直接执行
* 遇到 异步代码 先放一边, 并将它的回调函数存起来,存的地方叫做 事件队列
* 等所有同步代码都执行完, 再从事件队列中把存起来的所有 异步回调函数 拿出来按顺序执行



##### 宏任务和微任务

`事件队列`是用来存异步回调的，但是异步也分类型啊，异步任务分为`宏任务`和`微任务`，并且**微任务执行时机先于宏任务**

| #                         | 浏览器 | Node |
| ------------------------- | ------ | ---- |
| **I/O**                   | ✅      | ✅    |
| **setTimeout**            | ✅      | ✅    |
| **setInterval**           | ✅      | ✅    |
| **setImmediate**          | ❌      | ✅    |
| **requestAnimationFrame** | ✅      | ❌    |

##### 微任务

| #                                        | 浏览器 | Node |
| ---------------------------------------- | ------ | ---- |
| **Promise.prototype.then catch finally** | ✅      | ✅    |
| **process.nextTick**                     | ❌      | ✅    |
| **MutationObserver**                     | ✅      | ❌    |

##### 执行顺序

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df0c109150d34369913d7039a6f41370~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)



##### 案例

**步骤:**

1.标记区分异步和同步

2.异步中,标记区分宏任务和微任务

3.分轮数,一轮一轮慢慢走

```javascript
console.log(1) //同步
setTimeout(() => {
  console.log(2) //异步: 宏任务 setTimeout1
  Promise.resolve().then(() => { //异步: 微任务 then1
    console.log(3)
  })
});
console.log(4) //同步
new Promise((resolve,reject) => {
  console.log(5)//同步
  resolve()
}).then(() => {//异步 微任务 then2
  console.log(6)
  setTimeout(() => {//异步 宏任务 setTimeout2
    console.log(7)
  })
})
console.log(8) //宏任务

```

分轮:

| 轮数   | 说明                    | 输出       | 产生                                        | 剩余                                                |
| ------ | ----------------------- | ---------- | ------------------------------------------- | --------------------------------------------------- |
| 第一轮 | 执行外层同步输出        | 1，4，5，8 | 宏任务：`setTimeout1` <br />微任务：`then2` | 宏任务：`setTimeout1` <br />微任务：`then2`         |
| 第二轮 | 执行微任务`then2`       | 6          | 宏任务：`setTimeout2` 微任务：无            | 宏任务：`setTimeout1，setTimeout2` <br />微任务：无 |
| 第三轮 | 执行宏任务`setTimeout1` | 2          | 宏任务：无 微任务：`then1`                  | 宏任务：`setTimeout2` 微任务：`then1`               |
| 第四轮 | 执行微任务`then1`       | 3          | 宏任务：无 微任务：无                       | 宏任务：`setTimeout2` 微任务：无                    |
| 第五轮 | 执行宏任务`setTimeout2` | 7          | 宏任务：无 微任务：无                       | 宏任务：无 微任务：无                               |



```javascript
new Promise((resolve,reject)=>{
  console.log(1)  //同步
  resolve()
}).then(()=>{ //异步 then1
  console.log(2)
  new Promise((resolve,reject)=>{
      console.log(3) //同步
      resolve()
  }).then(()=>{ //异步then2
      console.log(4)
  }).then(()=>{ //异步then3
      console.log(5)
  })
}).then(()=>{ //异步then4
  console.log(6)
})
```

这里执行then1,产生微任务then2, then4的解释 ????



| 轮数 | 说明             | 输出 | 产生                                 | 剩余                                 |
| ---- | ---------------- | ---- | ------------------------------------ | ------------------------------------ |
| 1    | 执行同步输出     | 1    | 宏任务: 无<br />微任务: then1        | 宏任务: 无<br />微任务: then1        |
| 2    | 执行微任务then1  | 2,3  | 宏任务: 无<br />微任务: then2, then4 | 宏任务: 无<br />微任务: then2, then4 |
| 3    | 执行then2, then4 | 4,6  | 宏任务: 无<br />微任务: then3        | 宏任务: 无<br />微任务: then3        |
| 4    | 执行微任务then3  | 5    | 宏任务: 无<br />微任务: 无           | 宏任务: 无<br />微任务: 无           |

```javascript
setTimeout(() => {
  console.log("0") //异步 宏任务 setTimeout1
}, 0)

new Promise((resolve,reject)=>{
  console.log("1") //同步
  resolve()
}).then(()=>{ //异步 微任务 then1        
  console.log("2")
  new Promise((resolve,reject)=>{
    console.log("3") //同步
    resolve()
  }).then(()=>{      //异步 微任务 then4
    console.log("4")    
  }).then(()=>{      //异步 微任务 then5
    console.log("5")    
  })
}).then(()=>{       //异步 微任务 then6
  console.log("6")
})

new Promise((resolve,reject)=>{
  console.log("7")  //同步
  resolve()
}).then(()=>{       //异步 微任务 then8
  console.log("8")
})
```

| 轮数 | 说明                     | 输出  | 产生                                          | 剩余                                          |
| ---- | ------------------------ | ----- | --------------------------------------------- | --------------------------------------------- |
| 1    | 执行同步输出             | 1,7   | 宏任务: setTimeout1<br />微任务: then1, then8 | 宏任务: setTimeout1<br />微任务: then1, then8 |
| 2    | 执行微任务: then1,then8  | 2,3,8 | 宏任务: setTimeout1<br />微任务: then4, then6 | 宏任务: setTimeout1<br />微任务: then4, then6 |
| 3    | 执行微任务: then4, then6 | 4,6   | 宏任务: setTimeout1<br />微任务: then5        | 宏任务: setTimeout1<br />微任务: then5        |
| 4    | 执行微任务: then5        | 5     | 宏任务: setTimeout1<br />微任务: 无           | 宏任务: setTimeout1<br />微任务: 0            |
| 5    | 执行宏任务               | 0     | 宏任务: 无<br />微任务: 无                    |                                               |





```javascript
new Promise((resolve, reject) => {
  console.log(1)
  resolve()
}).then(() => {
  console.log(2)
  // 多了个return
  return new Promise((resolve, reject) => {
    console.log(3)
    resolve()
  }).then(() => {
    console.log(4)
  }).then(() => { // 相当于return了这个then的执行返回Promise
    console.log(5)
  })
}).then(() => {
  console.log(6)
})
```



```javascript
async function async1() {
  console.log(1); //同步
  await async2(); //同步
  console.log(2); //同步
}
async function async2() {
  console.log(3);
}
console.log(4);//同步
setTimeout(function () { //异步 宏任务
  console.log(5);
});
async1()//同步
new Promise(function (resolve, reject) {
  console.log(6); //同步
  resolve();
}).then(function () { //异步 微任务
  console.log(7);
});
console.log(8); //同步

```

第一步: 

```javascript
async function async1() {
  console.log(1);
  await async2();
  console.log(2);
}
async function async2() {
  console.log(3);
}

new Promise((resolve, reject) => {
  setTimeout(() => { //异步, 宏任务 setTimeout1
    resolve()
    console.log(4)
  }, 1000);
}).then(() => { //异步 微任务 then1
  console.log(5)
  new Promise((resolve, reject) => {
    setTimeout(() => { //异步 宏任务setTimeout3
      async1() //异步 微任务async1
      resolve()
      console.log(6)
    }, 1000)
  }).then(() => { //异步 微任务then7
    console.log(7)
  }).then(() => { //异步 微任务8
    console.log(8)
  })
}).then(() => {//异步 微任务9
  console.log(9)
})

new Promise((resolve, reject) => {
  console.log(10) // 同步
  setTimeout(() => { //异步, 宏任务 setTimeout2
    resolve()
    console.log(11)
  }, 3000);
}).then(() => { //异步 微任务 then12
  console.log(12)
})
```



```javascript
async1 转换成 new Promise



new Promise((resolve, reject) => {
  setTimeout(() => { //异步 宏任务 setTimeout1
    resolve()
    console.log(4)
  }, 1000);
}).then(() => { //异步 then5
  console.log(5)
  new Promise((resolve, reject) => {
    setTimeout(() => { //异步 宏任务 setTimeout3
      // async1()
      console.log(1);
      new Promise((resolve, reject) => {
        console.log(3)
      }).then(() => { //异步 then2
        console.log(2)
      })
      resolve()
      console.log(6)
    }, 1000)
  }).then(() => { //异步then7
    console.log(7)
  }).then(() => { //异步then8
    console.log(8)
  })
}).then(() => { //异步then9
  console.log(9)
})

new Promise((resolve, reject) => {
  console.log(10) // 同步
  setTimeout(() => { //异步, 宏任务setTimeout2
    resolve()
    console.log(11)
  }, 3000);
}).then(() => { //异步then12
  console.log(12)
})
```



| 轮数 | 执行                             | 输出    | 产生                                              | 剩余                                               |
| ---- | -------------------------------- | ------- | ------------------------------------------------- | -------------------------------------------------- |
| 1    | 同步输出                         | 10      | 宏任务: setTimeout1, setTimeout2<br />微任务: 无  | 宏任务: setTimeout1, setTimeout2<br />微任务: 无   |
| 2    | 宏任务: setTimeout1, setTimeout2 | 4       | 宏任务: setTimeout2<br />微任务:  then5, then12   | 宏任务: setTimeout2<br />微任务: then5, then12     |
| 3    | 微任务: then5                    | 5       | 宏任务: setTimeout3,setTimeout2<br />微任务:then9 | 宏任务: setTimeout3 setTimeout2<br />微任务: then9 |
| 4    | 微任务: then9                    | 9       | 宏任务: setTimeout3 setTimeout2<br />微任务: 无   | 宏任务: setTimeout3 setTimeout2<br />微任务: 无    |
| 5    | 宏任务: setTimeout3              | 1,3,6,2 | 宏任务: setTimeout2<br />微任务: then7            | 宏任务: setTimeout2<br />微任务: then7             |
| 6    | 微任务: then7                    | 7       | 宏任务: setTimeout2<br />微任务: then8            | 宏任务: setTimeout2<br />微任务: then8             |
| 7    | 微任务: then8                    | 8       | 宏任务: setTimeout2<br />微任务: 无               | 宏任务: setTimeout2<br />微任务: 无                |
| 8    | 宏任务: setTimeout2              | 11      | 宏任务: 无<br />微任务: then12                    | 宏任务: 无<br />微任务: then12                     |
| 9    | 微任务 then12                    | 12      | 宏任务: 无<br />微任务: 无                        | 宏任务: 无<br />微任务: 无                         |



##### 案例4

> [从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节 - 掘金 (juejin.cn)](https://juejin.cn/post/6945319439772434469#heading-15)

```javascript
Promise.resolve().then(() => { //then0
  console.log(0);
  return Promise.resolve(4); //
}).then((res) => {  //then4
  console.log(res)
})

Promise.resolve().then(() => { //then1
  console.log(1);
}).then(() => { //then2
  console.log(2);
}).then(() => { //then3
  console.log(3);
}).then(() => { //then5
  console.log(5);
}).then(() =>{ ////then6
  console.log(6);
})
```

| 分轮 | 说明                | 输出 | 产生      | 剩余 |
| ---- | ------------------- | ---- | --------- | ---- |
| 1    | 执行异步then0,then1 | 0,1  | 新Promise |      |









## axios

```js
文档:http://www.axios-js.com/zh-cn/docs/
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

- 引用:
网页端: bootcdn.cn找链接: 
//<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js"></script>
服务端:npm i axios

- 特点:
1.从浏览器中创建 XMLHttpRequests
2.从 node.js 创建 http 请求
3.支持 Promise API
4.拦截请求和响应
5.转换请求数据和响应数据
6.取消请求
7.自动转换 JSON 数据
8.客户端支持防御 XSRF

```











## 模块化详解

### 来源

> https://segmentfault.com/a/1190000017466120

### 概况

> 前端代码日益膨胀，此时在JS方面就会考虑使用模块化规范去管理





### 模块化介绍



#### 什么是模块

* 模块是自动运行在严格模式下并且没有办法退出运行的JavaScript代码。

* 在模块顶部创建的变量不会自动被添加到全局共享作用域，这个变量仅在模块的顶级作用域中存在，而且模块必须导出一些外部代码可以访问的元素。
* 模块顶部，this的值是undefined
* 模块不支持HTML风格的代码注释





#### 模块化进化史

1.全局function阶段

- 全局函数模式: 将不同的功能封装成不同的全局函数
- 问题: Global被污染了, 很容易引起命名冲突

```javascript
function m1() {
  //...
}

function m2() {
  //...
}
```



2.namespace模式(命名空间)//将数据放在对象中,字面量创建对象方式

- namespace 模式: 简单对象封装
- 作用: 减少了全局变量,解决命名冲突
- 问题: 会暴露所有模块成员，内部状态可以被外部改写

```javascript
let myModule = {
  data: 'www.baidu.com',
  foo() {
    console.log(`foo() ${this.data}`)
  },
  bar() {
    console.log(`bar() ${this.data}`)
  }
};

myModule.data = 'other data'; //能直接修改模块内部的数据
myModule.foo(); //foo() other data
```



3.IIFE模式(立即执行函数)

- IIFE模式: 匿名函数自调用(闭包)
- IIFE : immediately-invoked function expression(立即调用函数表达式)
- 作用: 数据是私有的, 外部只能通过暴露的方法操作
- 问题: 如果当前这个模块依赖另一个模块怎么办?

```html
//index.html
<script type="text/javascript" src="module.js"></script>
<script type="text/javascript">
    myModule.foo()
    myModule.bar()
    console.log(myModule.data) //undefined 不能访问模块内部数据
    myModule.data = 'xxxx' //不是修改的模块内部的data
    myModule.foo() //没有改变
</script>
```



```javascript
//module.js
(function(window) {
  let data = 'www.baidu.com'
  //操作数据的函数
  function foo() {
    //用于暴露的函数
    console.log(`bar() ${data}`)
  }
  function bar() {
    //用于暴露有函数
    console.log(`bar() ${data}`)
    otherFun() //内部调用
  }
  function otherFun() {
    //内部私有的函数
    console.log('otherFun()')
  }
  //暴露行为
  window.myModule = { foo, bar } //ES6写法
})(window)
```

```javascript
//最后得到的结果
foo() www.baidu.com
bar() www.baidu.com
otherFun()
undefined
foo() www.baidu.com
```

IIFE模式增强： 引入依赖

这是现在模块实现的基石

```javascript
//module.js
(function(window, $) {
  let data = 'www.baidu.com'
  //操作数据的函数
  function foo() {
    //用于暴露有函数
    console.log(`foo() ${data}`)
    $('body').css('background', 'red')
  }
  function bar() {
    //用于暴露有函数
    console.log(`bar() ${data}`)
    otherFun() //内部调用
  }
  function otherFun() {
    //内部私有的函数
    console.log('otherFun()')
  }
  //暴露行为
  window.myModule = { foo, bar }
})(window, jQuery)
```

```html
// index.html文件
  <!-- 引入的js必须有一定顺序 -->
  <script type="text/javascript" src="jquery-1.10.1.js"></script>
  <script type="text/javascript" src="module.js"></script>
  <script type="text/javascript">
    myModule.foo()
  </script>
```

上例子通过jquery方法将页面的背景颜色改成红色，所以必须先引入jQuery库，就把这个库当作参数传入。**这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显**。



#### 模块化好处

- 避免命名冲突(减少命名空间污染)
- 更好的分离, 按需加载
- 更高复用性
- 高可维护性



#### 引入多个\<script>后出现的问题

* 请求过多
* 依赖模糊
* 难以维护



## 模块化规范

### 1. CommonJS

#### 说明

```js
//说明
在浏览器端: 模块需要提前编译打包处理
在服务器端: 模块的加载是运行时同步加载的
每个文件都可当作一个模块


CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。AMD规范则是非同步加载模块，允许指定回调函数。由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以CommonJS规范比较适用。但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范。
```

#### 基本语法

```js
CommonJS暴露的模块到底是什么? CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

require命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。

- 暴露模块:
module.exports=value
exports.xxx=value

- 引入模块:
require(xxx);
 - 如果是第三方模块,xxx为模块名
 - 自定义模块,xxx为模块文件路径
 
 
 如果导出的模块为单独的function功能(一个实例化对象),推荐exports.xx
 如果导出的模块为特定的类型,例如类包含了很多方法,推荐module.exports
```



```js
//定义模块代码
//module1.js
module.exports={
    msg:'module1',
    foo:function(){}, //对象方法的完整写法
    foo(){    //对象方法的简写形式   微信小程序中不能使用简化写法
        console.log(this.msg);
    }
}
//module2.js
module.exports=fucntion(){
    console.log('module2')
}

//module3.js
exports.foo=function(){
    console.log('foo()module3');
}
exports.arr=[1,2,3,3,2]

//引入第三方库,应该放置在最前面
let uniq=require('uniq');
let module1=require('./modules/module1')
let module2=require('./modules/module2')
let module3=require('./modules/module3')

module1.foo() //module1
module2() //module2
module3.foo()  //foo() module3
console.log(uniq(module3.arr)) //[1,2,3]
```



### 2. AMD

> https://segmentfault.com/a/1190000017466120



### 3. CMD

> https://segmentfault.com/a/1190000017466120



### 4. ES6模块Module

#### 介绍

> 来源： https://wangdoc.com/es6/module.html

在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

ES6 模块编译时就能确定模块的依赖关系，以及输入和输出的变量。

CommonJS 和 AMD 模块，都只能在运行时确定这些东西。

```javascript
//commonJS模块
let {stat, exists, readfile } = require('fs');

//等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;

//上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。
```



```javascript
//ES6模块
import {stat, exists, readFile } from 'fs';
```

上面代码实质是从fs模块加载3个方法，其他方法不加载。这种加载称为**“编译时加载”或者静态加载**，即 ES6 可以在编译时就完成模块加载，效率要比CommonJS方式高。<u>这也导致了无法引用ES6模块本身，因为它不是对象</u> 。



#### 严格模式

ES6 的模块自动采用严格模式，无论模块头部加不加`"use strict";`。

严格模式有以下限制：

* 不能对只读属性赋值，否则报错
* 不能删除变量`delete prop` ，会报错。只能删除变量`delete global[prop]`
* 禁用this指向全局对象
* ......

#### export命令

一个模块就是一个独立的文件，内部所有变量外部无法获取。外部读取模块内部的某个变量，必须使用export关键字输出该变量。

任何未显式导出的变量、函数或类都是模块私有的，无法从模块外部访问。

export用于规定模块的对外接口，`import`命令用于输入其他模块提供的功能。

`export`可以输出变量，函数或类。

**`export`写法**：

```javascript
//export输出变量
export const firstName = 'Michael';
export const lastName = 'Jackson';

//export输出大括号
const firstName = 'Michael';
const lastName = 'Jackson';
export {firstName, lastName}; //等价于上面的写法，优先使用，因为在底部可以清除知道输出了哪些变量。
```



**`export`重命名**

```javascript
function v1() {}
function v2() {}

export {
	v1 as streamV1,
  v2 as streamV2,
  v2 as streamLastestVersion
}

//上面代码使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。
```





**export的3种暴露方式**

1.分别暴露

```js
export 函数/其他数据

===========================================
export function fn(){};
export const data='中文汉字';
```



2. 统一暴露

```js
// 这里不是对象的简写,不能写对象的完整形式(变量名:对象名)
// 用的比较少.可以分别暴露和全部暴露
export{
	变量名,
    变量名
}
==========================================
function fn(a, b){
    return a+b;
}
const name='中文汉字';

export{
	fn,
    name
}
```



3.默认暴露

当使用import命令的时候，不需要知道所要加载的变量名或函数名，这就需要用到`export default`命令，为模块制定默认输出。

```javascript
//export-default.js
export default function() {
  console.log('foo');
}

//import-default.js  其他模块加载该模块时，import命令可以为该匿名函数指定任意名字
import customName from './export-default';
customName(); //'foo'
```

`export default`命令用在非匿名函数前也是可以的：

```javascript
//export-default.js
export default function foo() {
  console.log('foo');
}

//或者写成如下形式：
function foo() {
  console.log('foo');
}
export default foo;
```

上面代码中，`foo`函数的函数名`foo`，在模块外部是无效的。**加载的时候，视同匿名函数加载。**

`export default`命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此`export default`命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应`export default`命令。

本质上，`export default`就是输出一个叫做`default`的变量或方法，然后系统允许你为它取任意名字。

```javascript
//module.js
function add(x, y) {
  return x * y;
}
export { add as default };

//等同于 export default add;

//app.js
import { default as foo } from 'modules';
//等同于 import foo from 'modules';
```

```javascript
//√
export let a = 1;

//×
let a = 1;
export a;

//×
export default let a = 1;
```

上面代码中，`export default a`的含义是将变量`a`的值赋给变量`default`。所以，最后一种写法会报错。

`export default`命令的本质是将后面的值，赋给`default`变量，所以可以直接将一个值写在`export default`之后：

```javascript
//正确
export default 42;

//错误
export 42;
```

   



**注意事项**

1 `export`命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系

```javascript
//报错
export 1;

//报错
let m = 1;
export m;

//上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。

//正确写法
//写法1
export let m = 1;

//写法2
let m = 1;
export { m };

//写法3
let m = 1;
export {newm as m };
```



2 `export`语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

```javascript
export let foo = 'bar';
setTimeout(() => foo = 'baz', 500);

//上面代码输出变量foo，值为bar，500 毫秒之后变成baz
```



3 `export`命令, `import`命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错

```javascript
//处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。

function foo() {
  export default 'bar'; //SyntaxError
}

foo()
```



#### import命令

使用`export`命令定义了模块的对外接口以后，其他 JS 文件就可以通过`import`命令加载这个模块。

import后面的大括号表示从给定模块导入的绑定（binding），关键字from表示从哪个模块导入给定的绑定，该模块由表示模块路径的字符串指定（被称作模块说明符）。

导入绑定的列表看起来与解构对象很相似，但它不是。

**变量重命名**

```javascript
//main.js
import { lastName as surname } from './profile.js';
```

`import`命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。

如果对引入变量重新赋值就会报错，因为其只是一个只读接口，但是如果变量是一个对象，改写其属性是允许的。

```javascript
import { a } from './xxx.js';
a = {}; //Syntax Error: 'a' is read-only;

import { a } from './xxx.js';
a.foo = 'hello'; //合法操作
```

**路径**

`import`后面的`from`指定模块文件的位置，可以是相对路径，也可以是绝对路径。如果不带有路径，只是一个模块名，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。



**注意事项**

1 `import`具有动态提升效果，会提升到整个模块的头部，首先执行。

```javascript
foo();
import { foo } from 'my_module';
```

上面的代码不会报错，因为`import`的执行早于`foo`的调用。这种行为的本质是，<span style="color:blue;">`import`命令是编译阶段执行的，在代码运行之前</span>。

2 不能使用表达式和变量,if语句

由于`import`是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

```javascript
//报错
import {'f' + 'oo' } from 'my_module';

//报错
let module = 'my_module';
import { foo } from module;

//报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
```

上面三种写法都会报错，因为它们用到了表达式、变量和`if`结构。在静态分析阶段，这些语法都是没法得到值的。

3 多次引入只执行一次

如果多次重复执行同一句`import`语句，那么只会执行一次，而不会执行多次。、

```javascript
import 'lodash';
import 'lodash';
```

上面代码加载了两次`lodash`，但是只会执行一次。



**引入方式import**

1.通用引入

整体加载，即用星号（`*`）指定一个对象，所有输出值都加载在这个对象上面。

```javascript
//特点:通杀
//* 所有
//as 设置别名
//将所有暴露的数据都保存在变量m1当中
import * as m1 from './m1'
```



模块整体加载所在的那个对象，应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。

```javascript
import * as circle from './circle';

//下面两行都是不允许的
circle.foo = 'foo';
circle.area = function() {};
```



2.解构赋值形式引入

```js
分别暴露的引入 import {变量1, 变量2} from './m1'
统一暴露的引入 import {变量3, 变量4, 变量2 as 新变量2} from './m2' 
默认暴露的引入 import {default as aaa} from '路径/name.js' //aaa代表暴露的数据 as有设置别名的意思

//一个网页中引入多个模块,模块之间有重名变量的情况,则将其中重名变量使用as更新下变量名
```



3.简便导入

```js
//只支持默认暴露
//默认暴露,导入名称可以与暴露名称不一致



export default{
    cls:'aaaa',
    type:'niu',   //最后可以加引号
}

import _ from 'lodash';
```

如果想在一条`import`语句中，同时输入默认方法和其他接口，可以写成下面这样。

```javascript
//import-default.js
import _, {each, forEach } from 'lodash';

//export-default.js
export default function (obj) {...}
export function each(obj, iterator) {...}
export { each as forEach };
```

上面代码的最后一行的意思是，暴露出`forEach`接口，默认指向`each`接口，即`forEach`和`each`指向同一个方法。

#### 无绑定导入

某些模块可能不导出任何东西，它们可能只修改全局作用域中的对象。尽管模块中的顶层变量、函数和类不会自动地出现在全局作用域中，但这并不意味着模块无法访问全局作用域。**内建对象（如Array和Object）的共享定义可以在模块中访问，对这些对象所做的更改将反映在其他模块中。**

例如，给数组新增一个pushAll方法：

```javascript
//没有export或import的模块代码

Array.prototype.pushAll = function(items) {
  //items必须是一个数组
  if (!Array.isArray(items)) {
    throw new TypeError('参数必须是一个数组');
  }
  
  //使用内建的push()和展开运算符
  return this.push(...items);
}
```

**注意:**

无绑定导入最有可能被应用于创建polyfill和Shim.





#### export与import复合写法(?)

如果在一个模块之中，先输入后输出同一个模块，`import`语句可以与`export`语句写在一起。

```javascript
export {foo, bar} from 'my_module';

//可以简单理解为
import {foo, bar} from 'my_module';
export {foo, bar};
```

上面代码中，`export`和`import`语句可以结合在一起，写成一行。但需要注意的是，写成一行以后，`foo`和`bar`实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用`foo`和`bar`。



#### 模块的继承

模块之间也可以继承。假设有一个`circleplus`模块，继承了`circle`模块。

```javascript
//circleplus.js

export * from 'circle';
export let e = 2.71828182846;
export default function(x) {
  return Math.exp(x);
}
```

上面代码中的`export *`，表示再输出`circle`模块的所有属性和方法。注意，**`export *`命令会忽略`circle`模块的`default`方法**。

也可以将`circle`的属性或方法，改名后再输出

```javascript
//circleplus.js
export {area as circleArea } from 'circle';
```



#### 跨模块常量

`const`声明的常量只在当前代码块有效。如果想设置跨模块的常量（即跨多个文件），或者说一个值要被多个模块共享，可以采用下面的写法。

```javascript
//constants.js模块

export const A = 1;
export const B = 3;

//test1.js
import * as constant from './constants';
console.log(constant.A); //1

//test2.js
import {A,B} from './constants';
console.log(A); //1
```

如果要使用的常量非常多，可以建一个专门的`constants`目录，将各种常量写在不同的文件里面，保存在该目录下。

然后，将这些文件输出的常量，合并在`index.js`里面。

```javascript
// constants/db.js
export const db = {
  url: 'http://my.couchdbserver.local:5984',
  admin_username: 'admin',
  admin_password: 'admin password'
};

// constants/user.js
export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];
```

```javascript
//constants/index.js
export {db} from './db';
export {users} from './users';
```

使用的时候，直接加载`index.js`就可以了。

```javascript
//script.js
import {db, users} from './constants/index';
```



#### 模块语法的限制

export和import的一个重要的限制是，它们必须在其他语句和函数之外使用

```javascript
if (flag) {
  export flag; //语法错误
}
```

export语句不允许出现在if语句中，不能有条件导出或以任何方式动态导出。模块语法存在的一个原因是要让JavaScript引擎静态地确定哪些可以导出。因此，只能在模块顶部使用export。

同样，import命令也只能在顶部使用。

```javascript
function tryImport() {
  import flag from './example.js'; //语法错误
}
```



#### import和export的怪异之处

ECMAScript 6的import语句为变量、函数和类创建的是只读绑定，而不是像正常变量一样简单地引用原始绑定。**标识符只有在被导出的模块中可以修改，**即便是导入绑定的模块也无法更改绑定的值。例如，假设我们想使用这个模块：

```javascript
//export

export var name = 'Nicholas';
export function setName(newName) {
  name = newName;
};

//import
import {name, setName} from './example.js';
console.log(name); //Nicholas
setName('Greg'); //Greg
console.log(name); //Greg
name = 'Nicholas'; //抛出错误
```

调用setName("Greg")时会回到导出setName()的模块中去执行，并将name设置为"Greg"。请注意，此更改会自动在导入的name绑定上体现。其原因是，name是导出的name标识符的本地名称。**本段代码中所使用的name和模块中导入的name不是同一个**



#### import()方法

`import`命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行（`import`命令叫做“连接” binding 其实更合适）。所以，下面的代码会报错。

```javascript
//报错
if (x === 2) {
  import MyModule from './myModule';
}
```

上面代码中，引擎处理`import`语句是在编译时，这时不会去分析或执行`if`语句，所以`import`语句放在`if`代码块之中毫无意义，因此会报句法错误，而不是执行时错误。也就是说，**`import`和`export`命令只能在模块的顶层，不能在代码块之中**（比如，在`if`代码块之中，或在函数之中）。

这样的设计，固然有利于编译器提高效率，但也导致无法在运行时加载模块。在语法上，条件加载就不可能实现。如果`import`命令要取代 Node 的`require`方法，这就形成了一个障碍。因为`require`是运行时加载模块，`import`命令无法取代`require`的动态加载功能。

```javascript
const path = './' + fileName;
const myModule = require(path);
```

上面的语句就是动态加载，`require`到底加载哪一个模块，只有运行时才知道。`import`命令做不到这一点

**1 使用说明**

[ES2020提案](https://github.com/tc39/proposal-dynamic-import) 引入`import()`函数，支持动态加载模块。

```javascript
import(specifier)
```

`import`函数的参数`specifier`，<u>指定所要加载的模块的位置</u>。`import`命令能够接受什么参数，`import()`函数就能接受什么参数，两者区别主要是后者为动态加载。

<u>import()返回一个Promise对象</u>：

```javascript
const main = document.querySelector('main');

import(`./section-modules/${someVariable}.js`)
 .then(module => {
  module.loadPageInto(main);
})
 .catch(err => {
 	main.textContent = err.message; 
 })
```

**2 使用位置加载时机**

可以用在任何地方。运行时执行（什么时候运行到这一句，就会加载指定的模块）

**3 与require的区别**

`import()`函数与所加载的模块没有静态连接关系，这点也是与`import`语句不相同。`import()`类似于 Node 的`require`方法，区别主要是前者是异步加载，后者是同步加载。

#### import()适用场景

**1 按需加载**

`import()`可以在需要的时候，再加载某个模块。

```javascript
button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    //Error handling
  })
})
```

上面代码中，`import()`方法放在`click`事件的监听函数之中，只有用户点击了按钮，才会加载这个模块。



**2 条件加载**

`import()`可以放在`if`代码块，根据不同的情况，加载不同的模块

```javascript
if (condition) {
  import ('modlueA').then(...);
} else {
	import ('moduleB').then(...);
}
```

**3 动态的模块路径**

`import()`允许模块路径动态生成。

```javascript
import(f())
.then(...);
```

上面代码中，根据函数`f`的返回结果，加载不同的模块。



#### import()注意事项

`import()`加载模块成功以后，这个模块会作为一个对象，当作`then`方法的参数。因此，可以使用对象解构赋值的语法，获取输出接口

```javascript
import('./myModule.js')
.then(({export1, export2}) => {
  //...
})
```

如果模块有`default`输出接口，可以用参数直接获得。

```javascript
import('./myModule.js')
.then(myModule => {
  console.log(myModule.default);
})
```

上面的代码也可以使用具名输入的形式

```javascript
import('./myModule.js')
.then(({default: theDefault}) => {
  console.log(theDefault);
})
```

如果想同时加载多个模块，可以采用Promise.all写法

```javascript
Promise.all([
  import('./module1.js'),
  import('./module2.js'),
  import('./module3.js'),
])
.then(([module1,module2,module3]) => {
  ...
})
```

import()也可以用在async函数中

```javascript
async function main() {
  const myModule = await import('./myModule.js');
  const {export1, export2 }  = await import('./myModule.js');
  const [module1, module2, module3 ] = 
  	await Promise.all([
      import('./module1.js'),
      import('./module2.js'),
      import('./module3.js'),
    ]);
}
```





#### 模块语法总结

```js
- 依赖模块需要编译打包处理
- 文档 https://es6.ruanyifeng.com/

无论什么样的暴露方式,向外暴露的都是对象,只是形式不一样.
默认暴露:
 export default 100; 
//暴露的是一个对象,这个对象是以default为属性名,暴露内容为vi的对象
{default: 100}

//引入:
默认暴露的引入: import a from '..'
默认暴露的全写: import {default as a} from '..'
由于默认暴露全写麻烦,所以才出现简写形式

分别暴露:
export const a = 100;
export const reqxx = () => {}
//最终暴露出文件的时候,会自动把分别暴露的信息封装为一个对象
{
    a:a,
    reqxx:reqxx
}
引入的时候:
import {reqxx} from './xx.js';

整体暴露
const a = 100;
const obj = {a:100};
//最终暴露的是export后面的对象
export {
	a,
    obj
}

引入:
import {a, obj} from './xx.js';

//无论什么暴露方式,如果想拿到所有暴露出文件的那个整体对象,
import * as xx from './xx.js';
```







#### ES6模块化代码使用流程

```
1.使用ES6模块化语法编写代码
2.安装
 2.1  全局安装 npm i babel-cli browserify -g
 2.2  局部安装 npm i babel-preset-es2015
3.将ES6语法转化为ES5
 3.1 项目文件下创建.babelrc填写配置内容 //.babelrc是 babel 运行配置文件,rc=run control
 {
    "presets": ["es2015"]
 }
 3.2 babel ES6文件夹路径 -d 输出的ES5的存放目录路径
    //例如:babel ./src/js -d ./build/js
4.将转换后的代码进行打包
 browserify 入门文件路径 -o 输出文件路径
 //例如 browserify ./build/js/app.js -o ./dist/js/bundle.js
 
5.HTML文件引入输出后的文件路径 
```



#### ES6模块-抽奖案例

```html
src文件下
<script>
===========app.js=================
//npm i jquery   安装jQuery  
//导入jQuery
improt $ from 'jquery';
//导入其他模块
import {percent} from './percent';
import {rand}    from './rand';
$.('button').on('click', function(){
    if(percent(30)){
        console.log('恭喜恭喜');
    }else{
        console.log('再接再厉');
    }
})  
===========percent.js=================
//概率算法 percent(10) 有10%概率返回true  
import {rand} from './rand';
export function percent(n){
    let num=random(1, 100);
    if(num<=n){           //重要
        return true;
    }else{
        return false;
    }
}   
===========rand.js=================
export function(x,y){
    return Math.round(Math.random()*(y-x)+x);
    //return Math.ceil(Math.random() * (n - m + 1)) + m - 1);
}    
</script>
===========index.html=================
<body>
    ...
    <button>
        点击抽奖-ES6语法
    </button>
    <script src='./dist/js/bundle.js'></script>  //js引入需要放在按钮之后.放在上面无法获取到按钮元素,会报错.
</body> 
```









## gulp

### 介绍

  * gulp 是一个基于 Nodejs 的自动化构建工具，中文主页: http://www.gulpjs.com.cn/
  * 能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务

### 使用步骤：

1. 安装 nodejs

2. 全局安装 gulp

   ```shell
   npm install gulp -g
   ```

3. 局部安装gulp

   ```shell
   npm init 
   npm install gulp --save-dev
   ```

4. 创建一个简单的应用，文件结构如下：

   ```js
   |- gulpfile.js  								//gulp运行的配置文件 和package.json文件同级,根目录
   |- package.json
   ```

5. 配置编码: gulpfile.js

   ```js
   //引入gulp模块
   const gulp = require('gulp');
   
   //定义任务
   gulp.task('任务名', function() {
     // 将你的任务的任务代码放在这
   });
   ```

6. 构建命令: 

   ```shell
   gulp 任务名
   ```

   > The following tasks did not complete: default
   >
   > Did you forget to signal async completion?
   >
   > 错误的解决方法：
   >
   > 1. 返回一个可读流
   > 2. 传入一个回调并执行
   > 3. 回调函数设置为 async 函数

### gulp 插件

gulp 插件是专门针对 gulp 开发的工具包（npm包），用来实现特定的功能。

#### gulp-jshint 语法检查：

JSHint 是一个 JavaScript 的代码质量检查工具。gulp-jshint 是为 gulp 封装的插件

使用步骤：

1. 安装插件

   ```shell script
   npm install jshint gulp-jshint --save-dev
   ```

2. 创建配置文件 .jshintrc（选项配置地址 <https://jshint.com/docs/options/>）

   ```json
   {
       "esversion": 6,  
       "asi":true,				// 是否允许不写结尾处的分号
       "undef": true, 			// 是否使用之前必须定义
       "devel": true, 			// 是否没有定义也可以使用 console，alert 进行调试
       "eqeqeq": true,			// 是否强制使用 === 
       "unused": true, 		// 是否定义了必须使用
       "globals": { 			// 配置全局变量，直接使用不会报错
           "$": true 
       }
   }
   ```

   

3. gulpfile.js 引入 jshint

   ```js
   const jshint = require('gulp-jshint')
   ```

4. 定义任务

   ```js
   gulp.task('jshint', function() {
     // 将你的任务的任务代码放在这
     return gulp.src('./src/js/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
   });
   ```

   4.运行命令

```
    gulp jshint 
```

#### gulp-babel 语法转换

Babel 是一个 JavaScript 编译器，可以将新的 JS 语法（ES6、7、8）转化为浏览器识别的 ES5 语法。

gulp-babel 是 babel 为 gulp 封装的插件

1. 安装插件： 

   ```shell
   npm install --save-dev gulp-babel @babel/core @babel/preset-env
   ```

   @babel/core 是 babel 的核心包

   @babel/preset-env  预设的包 (babel-preset-es2015)

2. gulpfile.js 引入：

   ```js
   const babel = require('gulp-babel');
   ```

3. 定义任务:

   ```js
   gulp.task('babel', () => {
       return gulp.src('./src/js/*.js')
           .pipe(babel({ //进行语法转换
               presets: ['@babel/env']
           })).pipe(gulp.dest('build/js'))//输出到指定目录
   });
   ```

4. 运行命令：

   ```
   gulp babel
   ```

> ==经过 babel 转换后的 ES6 模块化语法变成了 CommonJs 语法，还需要用 browserify 转换==

#### gulp-browserify 转换 CommonJs 模块化语法

1. 安装插件：

   ```shell
   npm install --save-dev gulp-browserify
   ```

2. 安装插件（用于重命名）

   ```
   npm install --save-dev gulp-rename
   ```

3. 引入：

   ```js
   const browserify = require('gulp-browserify');
   const rename = require('gulp-rename');
   ```

4. 定义任务:

   ```js
   gulp.task('browserify', function() {
     return gulp.src('./build/js/index.js') //入口文件
       .pipe(browserify())					//将CommonJs语法转换为浏览器能识别的语法
       .pipe(rename('built.js'))			//为了防止冲突将文件重命名
       .pipe(gulp.dest('build/js'))		//输出到指定位置
   });
   ```

5. 运行命令

   ```shell
   gulp browserify
   ```


#### 配置默认任务，让多个任务依次执行

定义默认任务

```js
gulp.task('default', gulp.series('jshint', 'babel', 'browserify'));
```




#### gulp-uglify 压缩 JavaScript

1. 安装插件

   ```shell script
   npm install --save-dev gulp-uglify
   ```

2. 引入插件

   ```js
   const uglify = require('gulp-uglify');
   ```

3. 定义任务

   ```js
   gulp.task('uglify', function () {
     return gulp.src('build/js/built.js')
       .pipe(uglify())  //压缩js
       .pipe(rename('dist.min.js'))
       .pipe(gulp.dest('dist/js'))
   });
   ```

4. 运行命令

   ```shell script
   gulp uglify
   ```


#### gulp-less 编译 less 文件及使用 less-plugin-autoprefix 扩展前缀

1. 安装插件 

   ```shell script
   npm install gulp-less less-plugin-autoprefix
   ```

2. 引入插件

   ```js
   const less = require('gulp-less');
   const LessAutoprefix = require('less-plugin-autoprefix');
   const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
   ```

3. 定义任务：

   ```js
   gulp.task('less', function () {
     return gulp.src('./src/css/*.less')
       .pipe(less({
         plugins: [autoprefix]//自动扩展前缀
       }))
       .pipe(gulp.dest('./build/css'));
   });
   ```

4. 运行命令：

   ```shell
   gulp less 
   ```

#### 使用 gulp-concat 合并 CSS 文件

1. 安装插件

   ```shell script
   npm install --save-dev gulp-concat
   ```

2. 引入

   ```js
   const concat = require('gulp-concat');
   ```

3. 定义任务

   ```js
   gulp.task('concat', function () {
       return gulp.src('./build/css/*.css')
           .pipe(concat('built.css'))
           .pipe(gulp.dest('./build/css/concat'));
   });
   ```

4. 运行命令：`gulp concat` 

#### gulp-cssmin 压缩 CSS 文件

1. 安装插件：

   ```shell script
   npm install --save-dev gulp-cssmin
   ```

2. 引入

   ```js
   const cssmin = require('gulp-cssmin');
   ```

3. 定义任务

   ```js
   gulp.task('cssmin', function () {
       return gulp.src('build/css/concat/built.css')
           .pipe(cssmin())
           .pipe(rename('dist.min.css'))
           .pipe(gulp.dest('dist/css'));
   });
   ```

#### gulp-htmlmin 压缩 HTML 文件

1. 安装插件

   ```shell script
   npm install --save gulp-htmlmin
   ```

2. 引入

   ```js
   const htmlmin = require('gulp-htmlmin');
   ```

3. 定义任务

   ```js
   gulp.task('htmlmin', () => {
     return gulp.src('src/index.html')
       .pipe(htmlmin({
         collapseWhitespace: true ,//去除空格
         removeComments:true //去除注释
       }))
       .pipe(gulp.dest('dist'));
   });
   ```

#### 自动化配置

1. 安装模块

   ```shell script
   npm install gulp-livereload gulp-connect opn --save-dev
   ```


2. 引入模块

   ```js
   const livereload = require('gulp-livereload');
   const connect = require('gulp-connect');
   const opn = require('opn');
   ```

3. 自动执行任务，编译代码

   ```js
   //1. 在所有可能要执行任务后面加上 .pipe(livereload());
   gulp.task('watch', function () {
       //2. 启动热加载服务
       livereload.listen();
       //3. 通过自己服务器打开项目，自动刷新
       connect.server({
           root: 'dist',
           port: 3000,
           livereload: true  // 自动刷新
       });
       //3. 自动打开浏览器
       opn('http://localhost:3000/index.html');
       //4. 监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
       gulp.watch('src/css/*.less', gulp.series(['less', 'concat', 'cssmin']));
       gulp.watch('./src/js/*.js', gulp.series(['jshint', 'babel', 'browserify', 'uglify']));
       gulp.watch('./src/index.html', gulp.series('htmlmin'));
   });
   ```


> 备注：必须要在 src 文件夹中修改 index.html 中引入样式和脚本的路径，gulp 不会自动处理路径。

### 相关插件:

* gulp-concat : 合并文件(js/css)
* gulp-uglify : 压缩js文件
* gulp-rename : 文件重命名
* gulp-less : 编译less
* gulp-livereload : 实时自动编译刷新

### 重要API

* gulp.src(filePath/pathArr) : 
  * 指向指定路径的所有文件, 返回文件流对象
  * 用于读取文件
* gulp.dest(dirPath/pathArr)
  * 指向指定的所有文件夹
  * 用于向文件夹中输出文件
* gulp.task(name, [deps], fn) 
  * 定义一个任务
* gulp.watch() 
  * 监视文件的变化![]()

