## 关于this

### 使用this的原因

this提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将API设计得更加简洁并且易于复用。



### 一些误解

#### 1.this指向自身

计算函数foo被调用的次数

使用词法作用域

```javascript
function foo(num) {
  console.log('foo: ' + num);
  
  //记录foo被调用的次数
  foo.count++;
}

var data = {
  count: 0
}

var i;

for (i=0; i<10; i++) {
  if (i>5) {
    foo(i);
  }
}

//foo: 6
//foo: 7
//foo: 8
//foo: 9

//foo被调用了多少次
console.log(data.count); //4
```

函数的词法标识符(变量)

* arguments.callee(弃用)
* 函数名称标识符

```javascript
function foo(num) {
  console.log('foo: ' + num);
  
  //记录foo被调用的次数
  foo.count++;
}

foo.count =0;

var i;

for (i=0; i<10; i++) {
  if (i>5) {
    foo(i);
  }
}

//foo: 6
//foo: 7
//foo: 8
//foo: 9

//foo被调用了多少次
console.log(data.count); //4
```

强制this指向foo函数本身:

```javascript
function foo(num) {
  console.log('foo: ' + num);
  
  //记录foo被调用的次数
  this.count++;
}

foo.count =0;

var i;

for (i=0; i<10; i++) {
  if (i>5) {
    foo.cal(foo,i);
  }
}

//foo: 6
//foo: 7
//foo: 8
//foo: 9

//foo被调用了多少次
console.log(data.count); //4
```



#### 2. this指向函数作用域(错误)

需要明确的是，this在任何情况下都不指向函数的词法作用域。在JavaScript内部，作用域确实和对象类似，可见的标识符都是它的属性。但是作用域“对象”无法通过JavaScript代码访问，它存在于JavaScript引擎内部。



### this是什么

this是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。this就是这个记录的一个属性，会在函数执行的过程中用到。



学习this的第一步是明白this既不指向函数自身也不指向函数的词法作用域，抛开以前错误的假设和理解。

this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。



## this解析

### 调用位置

#### 是什么

调用位置：调用位置就是函数在代码中被调用的位置（而不是声明的位置）。

#### 如何寻找调用位置

最重要的是要分析<span style="color:red">调用栈（就是为了到达当前执行位置所调用的所有函数）</span>。我们关心的调用位置就在当前正在执行的函数的前一个调用中。



#### 查看调用栈

* **把调用栈想象成一个函数调用链**,麻烦且容易出错
* **使用浏览器的调试工具.**
  * 可以在工具中给当前函数的第一行代码设置一个断点，或者直接在第一行代码之前插入一条debugger;语句。
  * 运行代码时，调试器会在那个位置暂停，同时会展示当前位置的函数调用列表，这就是你的调用栈。
  * 得到调用栈，然后找到<span style="color:red">栈中第二个元素</span>，这就是真正的调用位置。



### 绑定规则

* 默认绑定
* 隐式绑定
* 显式绑定
* new绑定

#### 默认绑定

独立函数调用.这条规则看作是无法应用其他规则时的默认规则。

**注意事项**

非严格模式下,默认绑定才绑定到全局对象;

严格模式下,默认绑定绑定到undefined



#### 隐式绑定

* 调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含，不过这种说法可能会造成一些<span style="color:red">误导。</span>

* 当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象
* 对象属性引用链中只有上一层或者说最后一层在调用位置中起作用

**误导的原因?**

无论是直接在obj中定义还是先定义再添加为引用属性，这个函数严格来说都不属于obj对



**存在的问题- 隐式丢失**

被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把this绑定到全局对象或者undefined上，取决于是否是严格模式。

如何解决呢? 固定this: call/apply/bind



#### 显式绑定

在某个对象上强制调用函数.

严格来说，JavaScript的宿主环境有时会提供一些非常特殊的函数，它们并没有这两个方法。但是这样的函数非常罕见，JavaScript提供的绝大多数函数以及你自己创建的所有函数都可以使用call(..)和apply(..)方法。



**装装/拆箱**

如果你传入了一个原始值（字符串类型、布尔类型或者数字类型）来当作this的绑定对象，这个原始值会被转换成它的对象形式（也就是new String(..)、new Boolean(..)或者newNumber(..)）。这通常被称为“装箱”。



显示绑定仍然无法解决前面提出的问题?

> 无论是哪种情况，this的改变都是意想不到的，实际上你无法控制回调函数的执行方式，因此就没有办法控制调用位置以得到期望的绑定。
>
> 虽然,call/apply可以空值调用位置,但是它们都是立即执行.如果在异步回调函数上使用call/apply,则会造成错误...



**解决没有办法控制调用位置以得到期望的绑定**

<u>硬绑定</u>

显示绑定的变种:

1.创建一个包裹函数,负责接收参数并返回值

```javascript
function foo(sth) {
  console.log(this.a, sth);
  return this.a + sth;
}

let obj = {
  a:2
};

let bar = function() {
  return foo.apply(obj, arguments);
};

let b = bar(3);//2 3
console.log(b);//5
```





2.可重复使用的辅助函数

```javascript
function foo(sth) {
  console.log(this.a, sth);
  return this.a + sth;
}

function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
  }
}

let obj = {
  a: 2
};

let bar = bind(foo, obj);

let b = bar(3); // 2 3
console.log(b); //5
```



ES5提供的辅助函数的API-bind函数

Function.prototype.bind

bind(..)会返回一个硬编码的新函数，它会把你指定的参数设置为this的上下文并调用原始函数。



<u>2.API调用的上下文</u>

第三方库的许多函数，以及JavaScript语言和宿主环境中许多新的内置函数，都提供了一个可选的参数，通常被称为“上下文”（context），其作用和bind(..)一样，确保你的回调函数使用指定的this。

这些函数实际上就是通过call(..)或者apply(..)实现了显式绑定，这样你可以少写一些代码。

举例:

```javascript
function foo(el) {
  console.log(el, this.id);
}

let obj = {
  id: 'awesome'
}

[1,2,3].forEach(foo, obj);
```



#### new绑定

JS<u>与其他语言关于构造函数的比较</u>

* 在传统的面向类的语言中，“构造函数”是类中的一些特殊方法，使用new初始化类时会调用类中的构造函数
* 在JavaScript中，构造函数只是一些使用new操作符时被调用的函数。它们并不会属于某个类，也不会实例化一个类。实际上，它们甚至都不能说是一种特殊的函数类型，它们只是被new操作符调用的普通函数而已。

<u>使用new来调用函数,会自动执行下面的操作?</u>

1.创建(或者说构造)一个全新的对象

2.这个新对象会被执行[[Prototype]]连接。

3.这个新对象会绑定到函数调用的this。

4.如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。



### 绑定规则的优先级



1.毫无疑问，默认绑定的优先级是四条规则中最低的

2.显式绑定优先级高于隐式绑定

来个例子:

```javascript
function foo() {
  console.log(this.a);
}

var obj1 = {a:2}, obj2 = {a:3};

obj1.foo.call(obj2); //3
obj2.foo.call(obj1); //2
```

3.new绑定优先级大于隐式绑定

来个例子:

```javascript
//我的例子
function fn() {
  console.log(this.a);
}

let obj = {
  a: 1,
  fn:fn
};

new obj.fn(); //undefined
```

```javascript
//书上的例子
function fn(sth) {
  this.a = sth;
}

var obj1 = {foo:foo};
var obj2 = {};

obj1.foo(2);
console.log(obj1.a); //2

obj1.foo.call(obj2,3 );
console.log(obj2.a); //3

let bar = new obj1.foo(4);
console.log(obj1.a); //2
console.log(bar.a); //4
```



4.new绑定 大于 显式绑定

ew和call/apply无法一起使用，因此无法通过new foo.call(obj1)来直接进行测试。但是我们可以使用硬绑定来测试它俩的优先级。

```javascript
function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
  }
}


function fn(a) {
  this.a = a;
}

let obj1 = {};

let bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); //2

let baz = new bar(3);
console.log(obj1.a); //2
console.log(baz.a); //3
```



#### 判断this

1.函数是否在new中调用（new绑定）？如果是的话this绑定的是新创建的对象。



2.函数是否通过call、apply（显式绑定）或者硬绑定调用？如果是的话，this绑定的是指定的对象。



3.函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this绑定的是那个上下文对象。



4.如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefined，否则绑定到全局对象。



### 绑定例外

#### 被忽略的this

如果你把null或者undefined作为this的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认绑定规则：



**什么情况下会传入null呢?**

* 一种非常常见的做法是使用apply(..)来“展开”一个数组，并当作参数传入一个函数。

* bind(..)可以对参数进行柯里化（预先设置一些参数）



**使用null的副作用**

如果某个函数确实使用了this（比如第三方库中的一个函数），那默认绑定规则会把this绑定到全局对象（在浏览器中这个对象是window），这将导致不可预计的后果（比如修改全局对象）。



**解决null的副作用**

一种“更安全”的做法是传入一个特殊的对象，把this绑定到这个对象不会对你的程序产生任何副作用。

```javascript
//空对象
let ∅ = Object.create(null);


```





#### 间接引用

你有可能（有意或者无意地）创建一个函数的“间接引用”，在这种情况下，调用这个函数会应用默认绑定规则。

间接引用最容易在赋值时发生：





#### 软绑定

**硬绑定存在的问题**

硬绑定会大大降低函数的灵活性，使用硬绑定之后就无法使用隐式绑定或者显式绑定来修改this



**如何解决**

如果可以给默认绑定指定一个全局对象和undefined以外的值，那就可以实现和硬绑定相同的效果，同时保留隐式绑定或者显式绑定修改this的能力。



通过一种被称为软绑定的方法来实现:

```javascript
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj) {
    let fn = this;
    let curried = [].slice.call(arguments);
    let bound = function() {
      return fn.apply(
        !this||this===(window||globalThis) ?
      	obj: this,
        curried.concat.apply(curried, arguments)
      );
    };
    
    bound.prototype = Object.create(fn.prototype);
    
    return bound;
  }
}
```



### this词法

S6中介绍了一种无法使用这些规则的特殊函数类型：箭头函数。

箭头函数并不是使用function关键字定义的，而是使用被称为“胖箭头”的操作符=>定义的。箭头函数不使用this的四种标准规则，而是根据外层（函数或者全局）作用域来决定this。



箭头函数中的this传递的两种写法:

* 只使用词法作用域并完全抛弃错误this风格的代码;
* 完全采用this风格，在必要时使用bind(..)，尽量避免使用self = this和箭头函数。
