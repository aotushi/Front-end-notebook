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



#### 2. this指向函数作用域(X)

需要明确的是，this在任何情况下都不指向函数的词法作用域。在JavaScript内部，作用域确实和对象类似，可见的标识符都是它的属性。但是作用域“对象”无法通过JavaScript代码访问，它存在于JavaScript引擎内部。



### this是什么

this是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。this就是这个记录的一个属性，会在函数执行的过程中用到。



学习this的第一步是明白this既不指向函数自身也不指向函数的词法作用域，抛开以前错误的假设和理解。

this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。