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





## 作用域

> 你不知道的JavaScript

### 背景

储存变量当中的值，并且能在之后对这个值进行访问或修改。事实上，正是这种储存和访问变量的值的能力将状态带给了程序。

但是将变量引入程序会引起几个很有意思的问题:

* 变量储存在哪里?
* 程序需要时如何找到他们

这些问题说明需要一套设计良好的规则来存储变量，并且之后可以方便地找到这些变量。这套规则被称为作用域。

究竟在哪里而且怎样设置这些作用域的规则呢?

### 作用域是什么?

#### 1. 编译原理

JavaScript,它是一门编译语言。

与传统的编译语言不同，它不是提前编译的，编译结果也不能在分布式系统中进行移植。

JavaScript引擎进行编译的步骤和传统的编译语言非常相似，在某些环节可能比预想的要复杂。

<u>传统编译语言流程中, 程序中的源代码在执行前会经历3个步骤, 统称为编译</u>

 1.<span style="color: blue;">分词/词法分析(Tokenizing/Lexing)</span>

* 将字符串分解成对编程语言有意义的代码块(代码块又被称为词法单元token.)
* 分词(tokenizing) 和 词法分析(Lexing)的区别: 词法单元的识别是通过有状态还是无..

> 这个过程会将由字符组成的字符串分解成（对编程语言来说）有意义的代码块，这些代码块被称为词法单元（token）。例如，考虑程序var a =2;。这段程序通常会被分解成为下面这些词法单元：var、a、=、2 、;。空格是否会被当作词法单元，取决于空格在这门语言中是否具有意义。

>分词（tokenizing）和词法分析（Lexing）之间的区别是非常微妙、晦涩的，主要差异在于词法单元的识别是通过有状态还是无状态的方式进行的。简单来说，如果词法单元生成器在判断a是一个独立的词法单元还是其他词法单元的一部分时，调用的是有状态的解析规则，那么这个过程就被称为词法分析。

2.<span style="color: blue;">解析/语法分析(Parsing)</span>

* 将词法单元转换成抽象语法树(AST)

> 这个过程是将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”（AbstractSyntax Tree, AST）。

> var a = 2；的抽象语法树中可能会有一个叫作VariableDeclaration的顶级节点，接下来是一个叫作Identifier（它的值是a）的子节点，以及一个叫作AssignmentExpression的子节点。AssignmentExpression节点有一个叫作NumericLiteral（它的值是2）的子节点。

例如:

```javascript
var a = 2;的抽象语法树

VariableDeclaration: [
  Identifier: a,
  AssignmentExpreresion: [
  	NumbericLiteral: 2
	]
]
```

3.<span style="color: blue;">代码生成</span>

* 将AST转换为可执行代码的过程

> 将AST转换为可执行代码的过程被称为代码生成。这个过程与语言、目标平台等息息相关。
>
> 抛开具体细节，简单来说就是有某种方法可以将var a = 2；的AST转化为一组机器指令，用来创建一个叫作a的变量（包括分配内存等），并将一个值储存在a中。



<u>JavaScript的编译过程</u>

比起那些编译过程只有三个步骤的语言的编译器，JavaScript引擎要复杂得多。

大体对比介绍:

* 首先，JavaScript引擎不会有大量的（像其他语言编译器那么多的）时间用来进行优化，因为与其他语言不同，JavaScript的编译过程不是发生在构建之前的。
* 对于JavaScript来说，大部分情况下编译发生在代码执行前的几微秒（甚至更短！）的时间内。在我们所要讨论的作用域背后，JavaScript引擎用尽了各种办法（比如JIT，可以延迟编译甚至实施重编译）来保证性能最佳。
* 简单地说，任何JavaScript代码片段在执行前都要进行编译（通常就在执行前）。
  * JavaScript编译器首先会对var a = 2；这段程序进行编译，然后做好执行它的准备，并且通常马上就会执行它。



#### 2. 理解作用域

通过对程序`var a = 2`的处理过程来解释作用域及相关

**2.1 参与处理的模块**

* 引擎 
  * 从头到尾负责整个JavaScript程序的编译及执行过程。
* 编译器 
  * 负责语法分析及代码生成等脏活累活
* 作用域
  * 负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。



**2.2 处理过程**

当看见`var a = 2` 时, 引擎认为这里有两个完全不同的声明: 一个由编译器在编译时处理; 一个由引擎在运行时处理

<u>分解`var a = 2`</u>

* 编译器首先会将这段程序分解成词法单元，然后将词法单元解析成一个树结构。
* 遇到`var a`，<span style="color:blue;">编译器会询问作用域</span>是否在同作用域集合中存在同名变量

  * 是: 编译器会忽略该声明，继续进行编译；
  * 否: 它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为a
* 接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理`a = 2`这个赋值操作. <span style="color:blue;">引擎运行时会首先询问作用域</span>，在当前的作用域集合中是否存在一个叫作`a`的变量。
  * 如果是，引擎就会使用这个变量；
  * 如果否，引擎会继续查找该变量
    * 引擎寻找变量 `a`
      * 找到了, 就会将2赋值给它; 
      * 没找到, 引擎就会举手示意并抛出一个异常！




> 总结:
>
> 变量的赋值操作会执行两个动作: 
>
> 首先编译器会在当前作用域中**声明**一个变量（如果之前没有声明过）;
>
> 然后在运行时引擎会在作用域中**查找**该变量，如果能够找到就会对它**赋值**。



**2.3 编译器的具体处理**

> 编译器在编译过程的第二步中生成了代码，引擎执行它时，会通过查找变量a来判断它是否已声明过。查找的过程由作用域进行协助，但是引擎执行怎样的查找，会影响最终的查找结果。

在我们的例子中，引擎会为变量a进行<span style="color:blue">LHS查询</span>。另外一个查找的类型叫作<span style="color:blue">RHS查询</span>。

L 和 R 分别代表左 和 右. 这里的左侧和右侧是指赋值操作的左侧和右侧.(不一定)

换句话说，<span style="color:blue">当变量出现在赋值操作的左侧时进行LHS查询，出现在右侧时进行RHS查询。</span>

讲得更准确一点，RHS查询与简单地查找某个变量的值别无二致，而LHS查询则是试图找到变量的容器本身，从而可以对其赋值。从这个角度说，RHS并不是真正意义上的“赋值操作的右侧”，更准确地说是“非左侧”。

实例1:

```Javascript
console.log(a); 
//对a的引用是一个RHS引用，因为这里a并没有赋予任何值。相应地，需要查找并取得a的值，这样才能将值传递给console.log(..)。


a = 2;
//这里对a的引用则是LHS引用，因为实际上我们并不关心当前的值是什么，只是想要为=2这个赋值操作找到一个目标。
```

注意:

LHS和RHS的含义是“赋值操作的左侧或右侧”并不一定意味着就是“=赋值操作符的左侧或右侧”。

赋值操作还有其他几种形式，因此在概念上最好将其理解为“<span style="color:blue">赋值操作的目标是谁（LHS）</span>”以及<span style="color:blue">“谁是赋值操作的源头（RHS）”</span>。

实例2:

```javascript
function foo(a) { //LHS查询 为了给参数a(隐式地)分配值,需要一次LHS查询
  console.log(a); //RHS查询
}

foo(2);//对foo的RHS引用: 去找到foo的值,把它给我
```

注意:

你可能会倾向于将函数声明function foo(a) {..．概念化为普通的变量声明和赋值，比如var foo、foo = function(a) {...。如果这样理解的话，这个函数声明将需要进行LHS查询。

编译器可以在代码生成的同时处理声明和值的定义，比如在引擎执行代码时，并不会有线程专门用来将一个函数值“分配给”foo。因此，将函数声明理解成前面讨论的LHS查询和赋值的形式并不合适。



**2.4 引擎和作用域**

```javascript
function foo(a) {
  console.log(a);
}

foo(2);
```

引擎 ==> 作用域: 对foo进行RHS引用,需要你提供;  作用域查找并提供;

引擎 ==> 作用域: 对变量a进行LHS查询,需要你提供; 作用域查找并提供; 引擎给a赋值2

引擎 ==> 作用域: 对console进行RHS引用; 作用域查找并提供; 引擎查找到log;

引擎 ==> 作用域: 对变量a进行RHS引用; 作用域查找并提供.



### 3. 作用域嵌套

作用域是根据名称查找变量的一套规则.

当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套。

<u>遍历嵌套作用域链的规则</u>

引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都会停止。



### 4. 异常处理

在变量还没有声明（在任何作用域中都无法找到该变量）的情况下，这两种查询的行为是不一样的。具体表现如下:

* RHS查询遍寻不到所需的变量,引擎会抛出`ReferenceError`异常
* LHS查询遍寻不到所需变量,

  * 非严格模式: 全局作用域会创建一个具有该名称的变量,并返还给引擎(非'严格模式'下)
  * 严格模式: 抛出同RHS查询失败时类似的`ReferenceError`异常

* RHS查询找到一个变量,但对变量进行不合理操作(例如,对函数类型进行调用,引用null/undefined值中的属性), 引擎抛出`TypeError`.

> `ReferenceError` 同作用域判别失败相关
>
> `TypeError` 代表作用域判别成功了，但是对结果的操作是非法或不合理的。

  

### 5. 总结

* 作用域是一套规则,用于何处记忆如何查找变量(标识符).如果查找变量是用来赋值,使用LHS查询; 如果获取变量值,使用RHS查询.
* 赋值操作符会导致LHS查询. `=`操作符或调用函数时传入参数的操作都会导致关联作用域的赋值操作.
* JavaScript引擎首先会在代码执行前对其进行编译，在这个过程中，像var a =2这样的声明会被分解成两个独立的步骤：
  * 首先，var a在其作用域中声明新变量。这会在最开始的阶段，也就是代码执行前进行。
  * 接下来，a = 2会查询（LHS查询）变量a并对其进行赋值
* LHS和RHS查询都会在当前执行作用域中开始，如果有需要就会向上级作用域继续查找目标标识符，最后抵达全局作用域（顶层），无论找到或没找到都将停止。
* 不成功的RHS引用会导致`ReferenceError`异常. 不成功的LHS引用会导致自动隐式创建一个全局变量(非严格模式下),该变量使用LHS引用的目标作为标识符, 或抛出`ReferenceError`错误(严格模式下)







### 词法作用域

### 函数作用域和块作用域

### 提升

### 作用域闭包



## 词法作用域和动态作用域

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
>  a. Let thisValue be undefined.

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

MDN 对闭包的定义为：(理论上的)

> 闭包是指那些能够访问自由变量的函数。

那什么是自由变量呢？

> 自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。

由此，我们可以看出闭包共有两部分组成：

> 闭包 = 函数 + 函数能够访问的自由变量

ECMAScript中，闭包指的是：(实践上的)

1. 从理论角度：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。
2. 从实践角度：以下函数才算是闭包：
   1. 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
   2. 在代码中引用了自由变量

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





## 闭包

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

你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件

### 第一版

```javascript
function debounce (func, wait) {
  let timeId;
  return function () {
    clearTimeout(timeId);
    timeId = setTimeout(func, wait);
  }
}
```

如果我们要使用它，以最一开始的例子为例：

```
container.onmousemove = debounce(getUserAction, 1000);
```

现在随你怎么移动，反正你移动完 1000ms 内不再触发，我才执行事件。从 165 次降低成了 1 次!.看看使用效果：

![1](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/1.13oxbw7r57ng.gif)



**存在的问题**

> this指向问题

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

在`getUserAction`函数中打印this, 值为如下:

```
<div id="container"></div>
```

但如果我们使用debounce函数,this就会指向Window对象.



### 第二版(修复this问题)

```javascript

function debounce(func, wait) {
  let timeId;
  return function() {
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



## 节流函数(未完成)

> [JavaScript专题之跟着 underscore 学节流 · Issue #26 · mqyqingfeng/Blog (github.com)](https://github.com/mqyqingfeng/Blog/issues/26)

### 原理

如果你持续触发事件，每隔一段时间，只执行一次事件。

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





### 时间戳+定时器方案

鼠标移入能立刻执行，停止触发的时候还能再执行一次！

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



### 优化

我有时也希望无头有尾，或者有头无尾，这个咋办？

那我们设置个 options 作为第三个参数，然后根据传的值判断到底哪种效果，我们约定:

leading：false 表示禁用第一次执行
trailing: false 表示禁用停止触发的回调

```javascript
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

