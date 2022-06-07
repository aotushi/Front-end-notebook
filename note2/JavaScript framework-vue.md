## Vue简介

> [Vue简介-Vue是什么？-CSDNVue入门技能树](https://edu.csdn.net/skill/vue/vue-712ec6452ab547478479a4509f787517?a=vue-f92d37226dc14bb58918663305bfc15b)

### 什么是Vue

> 是一套构建用户界面的**渐进式**（用到哪一块就用哪一块，不需要全部用上）前端框架，Vue 的核心库只关注视图层

### Vue兼容性及资源

#### 版本

**Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。 Vue.js 支持所有[兼容 ECMAScript 5 的浏览器](http://caniuse.com/#feat=es5)**

#### 资源

vue.js中文官网：http://cn.vuejs.org/

### 与React,angular框架比较

#### 与React比较

相同: 

* Virtual DOM; 
* 响应式和组件化; 
* 都有支持native的方案，React的RN，vue的Wee下; 
* 都支持SSR服务端渲染
* 都支持props进行父子组件间的通信
* 性能方面: React 和 Vue 在大部分常见场景下都能提供近似的性能。通常 Vue 会有少量优势

不同: 

* 数据绑定方面，vue实现了数据的双向数据绑定，react数据流动是单向的
* virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制
* state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理（如果要操作直接this.xxx）
* 组件写法不一样, React推荐的做法是 JSX , 也就是把HTML和CSS全都写进JavaScript了,即'all in js'; Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,js写在同一个文件

#### 与angular比较

* 在性能方面，这两个框架都非常的快
* 在大小方面, Vue要小得多
* 灵活性：Vue 相比于 Angular 更加灵活，Vue 官方提供了构建工具来协助你构建项目，但它并不限制你去如何组织你的应用代码



### 核心特点

#### 1.响应式数据绑定

传统的js操作页面：在以前使用js操作页面，需要操作某个html元素的数据，就的得使用js代码获取元素然后再处理业务逻辑

而响应式数据绑定的方式操作页面，可以直接使用像下面代码那样的写法就可以将数据填充到页面中

```vue
<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
```





#### 2.可组合的视图组件

一个页面映射为组件树。划分组件可维护、可重用、可测试，也就是一个页面由多个组件组合而成

##### Vue中实现组件引入示例:

第一步：import导入需要引入的组件文件；

第二步：注册组件；

第三步：在需要引入组件的文件中加上组件标签（这个标签的标签名就是注册的组件名字，多个单词的有xx-xx的形式）

需要注意的是：<u>组件可以嵌套引入，也就是说组件可以引入其他组件</u>

```vue
//创建组件 用于被引入的组件,组件名称叫Hello.vue

<template>
	<div class="hello">
    <h2>
      Essential Links
  	</h2>
  </div>
</template>

<script>
	export default {
    name: 'hello'
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
```



```vue
// 需要引入组件的组件

<template>
  <div id="app">
    {{ message }}
    <hello></hello> <!-- 3. 使用组件标签 标签名字就是注册的组件名,多个单词的有xx-xx形式 -->
  </div>
</template>

<script>
  //1.在需要被引入的组件中,先使用import导入组件
  import Hello from './components/Hello'
  export default {
    name: 'app',
    data () {
      return {
        message: 'Welcome to Your Vue.js App'
      }
    },
    //2.使用components注册这个组件
    components: {
      Hello
    }
  }
</script>

<style>
</style>
```

##### 单文件组件

Js，css，html 存在一个文件中，是一个单文件组件，上面vue模板文件里的Hello.vue就是一个单文件组件



#### 3.虚拟DOM

##### 概述

运行的js速度是很快的，大量的操作DOM就会很慢，时常在更新数据后会<u>重新渲染页面</u>，这样造成在没有改变数据的地方也重新渲染了DOM节点，这样就造成了很大程度上的资源浪费。

利用在内存中生成与真实DOM与之对应的数据结构，这个在内存中生成的结构称之为虚拟DOM. 当数据发生变化时，能够智能地计算出重新渲染组件的最小代价并应用到DOM操作上





#### 4.MVVM模式

**MVVM概述：**M：Model数据模型 ， V：view 视图模板  ， vm：view-Model：视图模型

**vue的MVVM实例（双向数据绑定）：**当输入框输入数据的时候，相应的message也会改变

```vue
<template>
  <div id="app">
    <input type="text" v-model="message"/>
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        message: 'Welcome'
      }
    }
  }
</script>

<style>
</style>
```

vue是如何实现双向数据绑定的：当数据发生改变—自动更新视图。利用`Object.definedProperty`中的`setter/getter`代理数据，监控对数据的操作

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8'>
    <title>Title</title>
  </head>
  <body>
    <input type='text' id='username'><br/>
    <span id='uName'></span>
  </body>
  <script>
  	var obj = {
      pwd: '123'
    }
    Object.defineProperty(obj, 'username', {
      set: function(val) {
        document.getElementById('uName').innerText = val
        document.getElementById('uName').value = val
        console.log('set')
      },
      get: function() {}
    })
    
    document.getElementById('username').addEventListener('keyup', function() {
      obj.username = event.target.value
    })
  </script>
</html>
```







#### 5.声明式渲染

Vue.js 的核心是一个允许采用简洁的模板语法来声明式的将数据渲染进 DOM，初始化根实例，vue自动将数据绑定在DOM模板上

**声明式渲染与命令式渲染区别**

声明式渲染：所谓声明式渲染只需要声明在哪里，做什么，而无需关心如何实现

命令式渲染：需要具体代码表达在哪里，做什么，如何实践

需求：求数组中每一项的倍数，放在另一个数组中实例

```html
//命令式渲染
<!Doctype html>
<html lang='en'>
  <head>
    
    <meta charset='utf-i'>
    <title>title</title>
  </head>
  <body>
    <script>
    	let arr = [1,2,3,4,5]
      let newArr = []
      for (let i=0,len=arr.length; i<len; i++) {
        newArr.push(arr[i]*2)
      }
    </script>
  </body>
</html>
```



```html
//声明式渲染
<!Doctype html>
<html lang='en'>
  <head>
    
    <meta charset='utf-i'>
    <title>title</title>
  </head>
  <body>
    <script>
    	let arr = [1,2,3,4,5]
      let newArr = arr.map(function(item) {
        return item*2
      })
    </script>
  </body>
</html>
```



## vue原理及MVVM响应式原理 ???

### 什么是MVVM

> MVVM采用分而治之的思想,把不同的代码放到不同的模块当中，然后通过特定的逻辑联系到一起

* M：model、就是模型数据，普通的JS对象.可以理解为data中的对象
* V：view、就是Dom
* VM：view-model、就是Vue，view和model不可以直接交互，需要通过VM联系到一起

<span style="background: #ccc">M 到 V（数据驱动视图）：Data Bindings：通过数据绑定联系到一起。</span>

<span style="background: #ccc">V 到 M（视图影响数据）：Dom Listeners：通过事件监听联系到一起。</span>

<span style="background: #ccc">只要数据进行了改变，同时视图也会同时更新。</span>

理解了基本思想之后，我们要做什么才能**实现VM呢？**

1.首先，需要利用Object.defineProperty，将要观察的对象，转化成getter/setter，以便拦截对象赋值与取值操作，称之为<span style="color:blue">Observer</span>，也就是<u>数据观察者</u>；

2.需要将DOM解析，提取其中的指令与占位符，并赋与不同的操作，称之为<span style="color:blue">Compile</span>，也就是<u>指令解析器</u>

3.需要将Compile的解析结果，与Observer所观察的对象连接起来，建立关系，在Observer观察到对象数据变化时，接收通知，同时更新DOM，称之为<span style="color:blue">Watcher</span>，也就是<u>订阅者</u>，它是Observer和Compile之间通信的桥梁；

4.最后，需要一个公共入口对象，接收配置，协调上述三者，称为vm，也就是Vue;



### 双向绑定

> 目前几种主流的mvc(vm)框架都实现了单向数据绑定（例如react就是典型的数据单向绑定），简单的理解双向数据绑定无非就是在单向绑定的基础上给可输入元素（input、textare等）添加了change(input)事件，来动态修改model和 view。



#### 实现数据绑定的做法

* 发布者-订阅者模式(backbond.js)
* 脏值检查(angular.js)
* 数据劫持(vue.js)

#### 发布者-订阅者模式

> 一般通过sub, pub的方式实现数据和视图的绑定监听，更新数据方式通常做法是 vm.set(‘property’, value)。
> 这种方式现在毕竟太low了，我们更希望通过 vm.property = value 这种方式更新数据，同时自动更新视图，于是有了下面两种方式。

#### 脏值检查

angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 setInterval() 定时轮询检测数据变动, angular只有在指定的事件触发时进入脏值检测，大致如下：

- .DOM事件，譬如用户输入文本，点击按钮等。( ng-click )
- 2.XHR响应事件 ( $http )
- 3.浏览器Location变更事件 ( $location )
- 4.Timer事件( timeout ,timeout,interval )
- 5.执行 digest() 或digest()或apply()



#### 数据劫持

vue.js 则是采用数据劫持结合`发布者-订阅者模式`的方式，通过`Object.defineProperty()`来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。



### vue.js数据劫持实现

#### 1.思路整理

vue是通过数据劫持的方式来做数据绑定的，其中最核心的方法便是通过`Object.defineProperty()`来实现对属性的劫持，达到监听数据变动的目的，无疑这个方法是本文中最重要、最基础的内容之一

要实现mvvm的双向绑定，就必须要实现以下几点:

- 1、实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
- 2、实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
- 3、实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图
- 4、mvvm入口函数，整合以上三者上述流程如图所示：

![data-binding](https://fastly.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/data-binding.6mm44bq2ngs0.webp)

#### 2. 指令解析器Compile实现

`指令解析器`的主要作用就是对指令进行解析。例如：v-text，v-html，v-on，v-bind等。解析指令之后，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图，如图所示：

![compile](https://fastly.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/compile.77rqen6dm140.webp)

在创建指令解析器之前，我们要提供入口类，也就是vm，用来接受配置，协调其它三者：

```javascript
// 入口类
class Myvue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;
    if (this.$el) {
      //2.实现执行的解析器
      new Compile(this.$el, this)
    }
  }
}
```

**指令解析器的解析过程：**

- 1.首先对el属性挂载的元素进行编译，将模板中的指令（v-text等）或者插值表达式（{{}}）进行替换，但是频繁的编译和替换会导致页面的<u>回流和重绘</u>，会影响页面的性能，所以我们要利用`文档碎片对象`，会减少页面的回流和重绘。文档碎片的作用：将替换之后的内容放到缓存中，需要使用时会进行获取。
- 2.将文档碎片对象作为模板进行编译。
- 3.将文档碎片追加到根元素中。
  指定解析器的部分代码如下：

```javascript
//指令解析器

class Compile {
  constructor(el, vm) {
    //当前传入的el是一个元素节点,则赋值给当前类的el,否则自行获取元素节点
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    
    /*
    	需要对根节点下的每一个节点进行编译,然后将页面中的数据(例如{{person.name}})进行替换
    	频繁的编译和替换会导致页面的回流和重绘,会影响页面的性能
    	文档碎片的作用: 将替换之后的内容放到缓存中,需要使用时会进行获取
    */
    //1.获取文档碎片对象,会减少页面回流和重绘
    const fragment = this.node2Fragment(this.el);
    
    //2.将文档碎片对象作为模板进行编译
    this.compile(fragment)
    
    //3.将文档碎片追加到根元素中
    this.el.appendChild(fragment)
  }
  
  //创建文档碎片对象
  node2Fragment(el) {
    // 创建文档碎片对象
    const f = document.createDocumentFragment();
    let firstChild;
    //遍历传入的DOM节点
    while (firstChild = el.firstChild) {
      //追加文档碎片
      f.appendChild(firstChild)
    }
    return f;
  }
  
  // 编译模板: 获取到的文档碎片内容
  /** 内容如下:
  <h2>{{person.name}}--{{person.age}}</h2>
        <h3>{{person.fav}}</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h3>{{msg}}</h3>
        <div v-text="msg"></div>
        <div v-html="msg"></div>
        <input type="text" v-model="msg">
   */
  
  compile(fragment) {
    // 1.获取子节点
    const childNode = fragment.childNodes;
    [...childNodes].forEach(child => {
      //元素节点
      if (this.isElementNode(child)) {
        //编译元素节点
        this.compileElement(child)
      } else {
        // 文本节点
        // 编译文本节点 主要处理{{}}形式的表达式
        this.compileText(child)
      }
      
      // 递归遍历
      if (child.childNodes && child.childNodes.length) {
        this.compile(child)
      }
    })
  }
}
```

在对文档碎片对象进行递归遍历时，我们从文档碎片对象中获取到的节点可能是元素节点，也可能是文本节点。对于元素节点和文本节点的编译过程是不一样的，所以我们在compile函数中进行了区分，对元素节点和文本节点的编译过程代码如下：

```javascript
// 编译元素节点
compileElement(node){
    // console.log(node);//<div v-text='msg'></div>
    // 获取属性节点
    const attributes = node.attributes;
    // console.log(attributes);//{0: v-on:click, v-on:click: v-on:click, length: 1}
    [...attributes].forEach(attr => {
        console.log(attr.name,'name') // v-text  v-on
        console.log(attr.value,'value') // msg  handleClick
        const {name,value} = attr;
        // 如果当前属性名是否是自定义指令 name的值可能是：v-text v-html v-model v-on:click
        if(this.isDirective(name)){
            const [,dirctive] = name.split('-'); // dirctive的值可能是： text html model on:click bind
            const [dirName,eventName] = dirctive.split(':'); // dirName的值可能是：text html model on bind
            // 根据dirName调用compileUtil对象中的对应方法,用来更新数据，体现了数据驱动视图。
            compileUtil[dirName](node,value,this.vm,eventName);

            // 删除有指令的标签上的属性 将v-text等从标签中去除
            node.removeAttribute('v-' + dirctive);
        }else if(this.isEventName(name)){ // 处理以@开头的事件绑定
            let [,eventName] = name.split('@');
            compileUtil['on'](node,value,this.vm,eventName);
        }else if(this.isAttrName(name)){ // 处理以:开头的属性绑定
            let [,attrName] = name.split(':');
            compileUtil['bind'](node,value,this.vm,attrName);
        }
    });
}
// 编译文本节点:主要处理 {{}} 形式的表达式 ,{{}} 实现原理和v-text一样，都是用的node.textContent
compileText(node){
    // 取出节点中的文本内容，包括换行、空格等
    const content = node.textContent;
    // 正则匹配出含{{}}的内容
    if(/\{\{(.+?)\}\}/.test(content)){
        // 调用
        compileUtil['text'](node,content,this.vm);
    }
}
// 判断当前属性名是否是自定义指令
isDirective(attrName){
    return attrName.startsWith('v-');
}
// 判断是否是一个事件名称
isEventName(attrName){
    return attrName.startsWith('@');
}
// 判断是否是一个事件名称
isAttrName(attrName){
    return attrName.startsWith(':');
}
// 判断当前传入的是否是元素节点
isElementNode(node){
    // DOM对象的nodeType属性
    // 元素节点的nodeType为1
    // 属性节点的nodeType为2
    // 文本节点的nodeType为3，文本节点包含文字、空格、换行等。
    return node.nodeType === 1;
}
```

大家可以看到在元素节点和文本节点的编译过程中使用到了compileUtil编译工具类，它是整个替换过程中的主要执行类，根据接收到不同的指令，执行对应的替换逻辑：

```javascript
// 编译工具类
const compileUtil = {
    /**
     * 处理 v-text 指令
     * @param {*} node 当前元素节点
     * @param {*} expr 表达式 msg vue.js中MVVM的实现原理
     * @param {*} vm 当前vm实例
     */
    text(node,expr,vm){
        let value;
        // 当前传入的表达式expr可能是$data中的一个属性，也可能是$data中对象.属性的形式，也可能是{{}}插值表达式
        // 如果当前传入的是插值表达式
        if(expr.indexOf('{{') !== -1){
            value = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
                // console.log(args);//["{{msg}}", "msg", 0, "{{msg}}"]
                return this.getVal(args[1],vm)
            });
        }else{
            value = this.getVal(expr,vm);
        }
        this.updater.textUpdater(node,value);
    },
    /**
     * 处理 v-html 指令
     * @param {*} node 当前元素节点
     * @param {*} expr 表达式
     * @param {*} vm 当前vm实例
     */
    html(node,expr,vm){
        const value = this.getVal(expr,vm);
        this.updater.htmlUpdater(node,value);
    },
    /**
     * 处理 v-model 指令
     * @param {*} node 当前元素节点
     * @param {*} expr 表达式
     * @param {*} vm 当前vm实例
     */
    model(node,expr,vm){
        const value = this.getVal(expr,vm);
        this.updater.modelUpdater(node,value);
    },
    /**
     * 处理 v-on 指令
     * @param {*} node 当前元素节点
     * @param {*} expr 表达式
     * @param {*} vm 当前vm实例
     * @param {*} eventName 当前事件名称
     */
    on(node,expr,vm,eventName){
        // 取出methods中的函数
        let fn = vm.$options.methods && vm.$options.methods[expr];
        // 调用函数时，同时改变this指向当前的vm实例
        node.addEventListener(eventName,fn.bind(vm),false);
    },
    /**
     * 处理 v-bind 指令
     * @param {*} node 当前元素节点
     * @param {*} expr 表达式
     * @param {*} vm 当前vm实例
     * @param {*} eventName 当前事件名称
     */
    bind(node,expr,vm,attrName){
        console.log(node,expr,attrName)
        const value = this.getVal(expr,vm);
        this.updater.bindUpdater(node,value,attrName);
    },
    // 更新的函数
    updater:{
        textUpdater(node,value){
            node.textContent = value;
        },
        htmlUpdater(node,value){
            node.innerHTML = value;
        },
        modelUpdater(node,value){
            node.value = value;
        },
        bindUpdater(node,value,attrName){
            node.setAttribute(attrName,value)
        },
    },
    // 根据表达式expr从data中获取值
    getVal(expr,vm){
        // 当前传入的表达式expr可能是$data中的一个属性，也可能是$data中对象.属性的形式
        // 可以获取data中属性值，也可以获取data中对象的属性值
        return expr.split('.').reduce((data,currentVal)=>{
            return data[currentVal];
        },vm.$data);
    },
}
```

小结：

- 1.v-text：使用的是node.nodeContent进行实现
- 2.v-html：使用的是node.innerHTML进行实现
- 3.v-model：用于实现表单对象的数据绑定，node.value
- 4.v-on/@：node.addEventListener（）；在addEventListener对this指向进行了改变，指向当前的vm实例，所以我们在使用vue时，this一直指向的是当前的vue实例。
- 5.v-bind(或者:)：node.setAttribute()

#### 3. 实现数据监听器Observer

vue的双向绑定原理是通过数据劫持实现的，数据劫持的底层又是基于`Object.defineProperty`中的getter和setter进行实现的。

**流程:**

- 1.在getter中我们要做的主要操作: 就是使用数据模型中的数据进行视图的初始化，同时向订阅器Dep中添加对应属性的订阅者，用于收集属性的依赖，实现一个属性对应一个订阅者。
- 2.在setter中我们要做的主要操作: 数据劫持是需要对每一个属性值进行劫持的，当我们获取到新值的时候，初始状态是不会对该值进行劫持的，所以要对新值做劫持操作。然后对传入的新值进行赋值。在赋值之后，我们的模型中的数据已经进行了更新，那么我们要通知订阅器Dep去通知变化，进行视图的更新，从而达到`数据驱动视图`的目的。


流程图

![Observer](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/Observer.3mznk18yqiq0.webp)

**数据监听器Observer以及订阅器Deposit的代码实现**

```javascript
// 订阅器/依赖收集器
class Dep{
    constructor(){
        // 定义依赖容器
        this.subs = [];
    }
    // 收集订阅者
    addSub(watcher){
        this.subs.push(watcher);
    }
    // 通知订阅者去更新视图
    notify(){
        // 遍历容器，找到对应订阅者，调用更新方法去更新视图
        this.subs.forEach(watcher => watcher.update())  
    }
}
// 数据观察者类，使用Object.defineProperty实现数据劫持
class Observer{
    constructor(data){
        this.observe(data)
    }
    // 劫持函数
    observe(data){
        // 此处仅对对象做数据观测
        if(data && typeof data === 'object'){
            // 遍历获取到到所有的key
            Object.keys(data).forEach(key => {
                // 使用监听函数进行数据监听
                this.defineReactive(data,key,data[key])
            })
        }
    }
    // 监听函数
    defineReactive(obj,key,value){
        // 传入的value是对象的一个属性值，属性值也可能是一个对象，所以需要递归遍历
        this.observe(value);
        // 创建依赖收集器
        const dep = new Dep();
        // 劫持所有的属性
        Object.defineProperty(obj,key,{
            // 是否可枚举
            enumerable:true,
            // 是否可更改
            configurable:false,
            // 获取数据进行初始化
            get(){
                // 订阅数据变化时，向订阅器Dep中添加订阅者，用于收集属性的依赖，实现一个属性对应一个订阅者
                Dep.target && dep.addSub(Dep.target)
                return value;
            },
            // 使用箭头函数是为了将函数内部的this指向外部的Observer类
            set:(newVal) => {
                // 获取到新的值时，初始状态是不会对该值进行劫持的，所以要对新值做劫持操作
                this.observe(newVal)
                // 当前传入的新值不等于旧值
                if(newVal !== value){
                    value = newVal;
                }
                // 更新数据之后，告诉Dep去通知变化
                dep.notify();
            }
        })
    }
```



#### 4. 实现数据订阅者Watcher

为每一个属性添加订阅者：需要注意的是，每一个模型数据中的每一个属性都要对应一个订阅者进行观测。所以属性与订阅者是一一对应的关系。既然是一一对应的关系，那么我们在进行初始化视图的时候就应该进行订阅者的添加。

初始化视图操作是在Compile指令解析器种进行的，所以修改指令解析器中的代码如下(此处仅对v-text和v-html进行演示，完整代码请看开头提到的github)：

```javascript
/**
 * 处理 v-text 指令
 * @param {*} node 当前元素节点
 * @param {*} expr 表达式 msg vue.js中MVVM的实现原理
 * @param {*} vm 当前vm实例
 */
text(node,expr,vm){
    let value;
    // 当前传入的表达式expr可能是$data中的一个属性，也可能是$data中对象.属性的形式，也可能是{{}}插值表达式
    // 如果当前传入的是插值表达式
    if(expr.indexOf('{{') !== -1){
        value = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(args);//["{{msg}}", "msg", 0, "{{msg}}"]
            // 添加订阅者，对数据进行监听，数据如果发生了变化，调用updater进行更新视图
            new Watcher(vm,args[1],() => {
                // 获取到新值之后，更新视图
                this.updater.textUpdater(node,this.getContentVal(expr,vm));
            })
            return this.getVal(args[1],vm)
        })
    }else{
        value = this.getVal(expr,vm);
    }
    // 初始化视图
    this.updater.textUpdater(node,value);
},
/**
 * 处理 v-html 指令
 * @param {*} node 当前元素节点
 * @param {*} expr 表达式
 * @param {*} vm 当前vm实例
 */
html(node,expr,vm){
    const value = this.getVal(expr,vm);
    // 添加订阅者，对数据进行监听，数据如果发生了变化，调用updater进行更新视图
    new Watcher(vm,expr,(newVal) => {
        // 获取到新值之后，更新视图
        this.updater.htmlUpdater(node,newVal);
    })
    // 初始化视图
    this.updater.htmlUpdater(node,value);
},
```



**订阅者的定义**

在初始化视图时添加了订阅者之后，那么订阅者拿到新值之后就可以利用新值进行视图的更新，订阅者代码实现：

```javascript
// 订阅者
class Watcher{
    /**
     * 
     * @param {*} vm 当前vm对象
     * @param {*} expr 取值表达式
     * @param {*} cb 回调函数，用于更新视图
     */
    constructor(vm,expr,cb){
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        // 获取旧值,并保存
        this.oldVal = this.getOldVal();
    }
    // 更新视图的函数
    update(){
        // 获取新值
       const newVal =  compileUtil.getVal(this.expr,this.vm);
        // 如果新值不等于旧值，利用回调将新值返回
        if(newVal !== this.oldVal){
            this.cb(newVal);
        }
    }
    // 获取旧值
    getOldVal(){
        // 将当前的订阅者挂载到订阅器中
        Dep.target = this;
       const oldVal =  compileUtil.getVal(this.expr,this.vm);
        // 销毁当前订阅者
        Dep.target = null;   
        return oldVal;
    }
}
```



**订阅者更新视图**

在订阅者的代码中可以看到，在构造函数时需要传入回调，数据更新之后，订阅者获取到新值，利用传入的回调将新值进行返回，在订阅者的外部进行视图的更新操作。也就是在指令解析器中添加订阅者时，传入回调，获取新值，进行视图的更新。

订阅者图示:

![watcher](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/watcher.5o9lq45wd240.webp)



#### 5. 双向数据绑定

双向数据绑定是针对于表单控件的，给元素节点绑定类似于input、change事件，通过事件对象来获取新值，获取到新值之后来改变模型数据data中的数据。由于是给表单对象绑定对应的事件，所以我们在处理v-model指令时进行事件绑定，修改compileUtil类的model函数如下

```javascript
/**
     * 处理 v-model 指令
     * @param {*} node 当前元素节点
     * @param {*} expr 表达式
     * @param {*} vm 当前vm实例
     */
    model(node,expr,vm){
        const value = this.getVal(expr,vm);
        // 添加订阅者，对数据进行监听，数据如果发生了变化，调用updater进行更新视图，数据驱动视图
        new Watcher(vm,expr,(newVal) => {
            // 获取到新值之后，更新视图
            this.updater.modelUpdater(node,newVal);
        })
        // 视图影响数据
        node.addEventListener('input',(e) => {
            // 拿到输入框的新值之后，去影响视图
            this.setVal(expr,vm,e.target.value)
        })
        // 初始化视图
        this.updater.modelUpdater(node,value);
    },
    /**
     * 获取到新值之后，将新值保存到vm的模型数据中
     * @param {*} expr 取值表达式
     * @param {*} vm 当前vm实例
     * @param {*} inputNewVal 通过input事件获取到的新的值
     */
    setVal(expr,vm,inputNewVal){
        return expr.split('.').reduce((data,currentVal)=>{
            // 旧值替换成新值
            data[currentVal] = inputNewVal;
        },vm.$data);
    },
```



### 实现proxy代理

大家在使用vue.js的时候，对数据进行操作时，都是以this.person.name = '张三’这样的形式进行操作的，而不是this.$data.person.name = '张三’的形式。想要使用我们常用的方式进行数据的操作，就要实现Proxy代理，使this代理成this.$data。修改入口类的代码如下:

```javascript
// 入口类
class Myvue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        this.$options = options;
        if(this.$el){
            // 1.实现数据观察者
            new Observer(this.$data)
            // 2.实现指令的解析器
            new Compile(this.$el,this)
            // 使用this代理this.$data
            this.proxyData(this.$data)
        }
    }
    // 使用this代理this.$data
    proxyData(data){
        for(const key in data){
            Object.defineProperty(this,key,{
                get(){
                    return data[key];
                },
                set(newVal){
                    data[key] = newVal;
                }
            })
        }
    }
}
```

这里主要还是利用了`Object.defineProperty()`这个方法来劫持了vm实例对象的属性的读写权，使读写vm实例的属性转成读写了vm.$data的属性值。



### 总结

Watcher, Observer , Dep 的关系进行一下梳理:

> 通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到`数据驱动视图；视图影响数据`的双向绑定效果。

**阐述你所理解的MVVM响应式原理**

- 1.vue是采用数据劫持配合发布者-订阅者模式的方式，通过 `Object.defineProperty()`来劫持各个属性的getter和setter，在数据变动时，发布消息给依赖收集器，去通知观察者，调用更新视图回调函数，进行视图的更新。
- 2.MVVM类作为绑定的入口，整合Oberser，Compile，Watcher三者，通过Obserser来监听model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer，Compile之间的通信桥梁，达到数据驱动视图，视图影响数据的双向绑定效果。



## Vue安装及环境配置

安装步骤如下:

1. nodejs安装配置
2. 安装vue及脚手架



### nodejs安装配置

见工具笔记

### 安装vue及脚手架

#### 1.安装vue.js

```
npm install vue -g`或者`cnpm install vue -g
```

根据自己的淘宝镜像源设置选择命令，其中-g是全局安装，指安装到global全局目录去

查看安装的vue信息: `npm info vue` / `cnpm info vue`

查看安装的版本: `npm list vue`

#### 2.安装脚手架vue-cli

> https://cli.vuejs.org/zh/guide/installation.html



**1.卸载旧版本**

卸载2.x版本 `npm uninstall vue-cli -g`

卸载3.x版本  `npm uninstall @vue/cli -g`



**2.安装新版本**

> npm i @vue/cli@3.12.1 -g    //指定版本安装
>
> npm i @vue/cli -g    //默认安装最新版

**3.新建项目**

> vue create 项目名称

**4.启动项目**

根据package.json中的启动命令启动



### vue项目结构

#### 1. build 构建脚本目录

* build.js 产生环境构建脚本
* check-version.js 检查npm,node.js版本
* utils.js 构建相关工具方法
* vue-loader.conf.js 配置css加载器及编译css之后自动添加前缀
* webpack.base.conf.js webpack基本配置
* webpack.dev.conf.js webpack开发环境配置
* webpack.prod.conf.js webpack生产环境配置

#### 2.config项目配置

* dev.env.js 开发环境配置
* index.js 项目配置文件
* prod.env.js 生产环境变量
* node_modules npm加载的项目依赖模块
* src 这里是要开发的目录,基本上要**做的事情都在这个目录里。里面包含了几个目录及文件：**
  * assets 资源目录，放置一些图片或者公共js、公共css。但是因为它们属于代码目录下，所以可以用 webpack 来操作和处理。意思就是你可以使用一些预处理比如 Sass/SCSS 或者 Stylus。
  * components 用来存放自定义组件的目录，目前里面会有一个示例组件。
  * router  前端路由目录，我们需要配置的路由路径写在index.js里面；
  * App.vue 根组件；这是 Vue 应用的根节点组件，往下看可以了解更多关注 Vue 组件的信息。
  * main.js应用的入口文件。主要是引入vue框架，根组件及路由设置，并且定义vue实例，即初始化 Vue 应用并且制定将应用挂载到index.html 文件中的哪个 HTML 元素上。通常还会做一些注册全局组件或者添额外的 Vue 库的操作。
  * static  **静态资源目录，如图片、字体等。不会被webpack构建**
  * index.html **首页入口文件，可以添加一些 meta 信息等。 这是应用的模板文件，Vue 应用会通过这个 HTML 页面来运行，也可以通过 lodash 这种模板语法在这个文件里插值。 注意：这个不是负责管理页面最终展示的模板，而是管理 Vue 应用之外的静态 HTML 文件，一般只有在用到一些高级功能的时候才会修改这个文件。**
  * package.json  **npm包配置文件，定义了项目的npm脚本，依赖包等信息**
  * README.md **项目的说明文档，markdown 格式**
  * .xxx **这些是一些配置文件，包括语法配置，git配置等**
    * .babelrc: babel 编译参数
    * .editorconfig 编辑器相关的配置,代码格式
    * .eslintignore 配置需要忽略的路径, 一半build, config, dist, test等目录都会配置忽略
    * .eslintrc.js 配置代码格式风格检查规则
    * .gitignore git上传需要忽略的文件配置
    * .postcssrc.js css转换工具



## Vue架构设计/项目结构???















## Vue实例方法/全局API/实现原理

### 实现原理

#### 项目代码

```javascript
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  
  this._init(options)
}


initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)


export default Vue
```

上面5个函数的作用是向Vue原型中挂载方法. 以函数initMixin为例,它的实现方式是:

```javascript
//当函数initMixin被调用时,会向Vue构造函数的prototype属性添加_init方法
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    //do something
  }
}
```

执行new Vue()时,会调用`_init()`方法,该方法实现了一系列初始化操作,包括整个生命周期的流程以及响应式系统流程的启动等.

### Vue实例

#### vue的使用

##### 初始化

> 每个Vue应用都是通过Vue函数创建一个新的Vue实例开始的

```javascript
let vm = new Vue({
  //选项
})
```

当创建一个 Vue 实例时，你可以传入一个**选项对象**。

作为参考，你也可以在 [API 文档](https://cn.vuejs.org/v2/api/#选项-数据)中浏览完整的选项列表

一个 Vue 应用由一个通过 `new Vue` 创建的**根 Vue 实例**，以及可选的嵌套的、可复用的组件树组成。举个例子，一个 todo 应用的组件树可以是这样的：

```javascript
根实例
└─ TodoList
   ├─ TodoItem
   │  ├─ TodoButtonDelete
   │  └─ TodoButtonEdit
   └─ TodoListFooter
      ├─ TodosButtonClear
      └─ TodoListStatistics
```



#####  Vue个版本的对比

> [Vue各版本对比 - 掘金 (juejin.cn)](https://juejin.cn/post/6904573979554807815)

UMD各版本

| 版本名称                 | 对应vue.js         | 区别                       |
| ------------------------ | ------------------ | -------------------------- |
| 完整版                   | vue.js             | 运行时版本+编译器+开发环境 |
| 只包含运行时版本         | vue.runtime.js     | 运行时版本+开发环境        |
| 完整版生产环境           | vue.min.js         | 运行时版本+编译器+生产环境 |
| 只包含运行时版本生产环境 | vue.runtime.min.js | 运行时版本+生产环境        |

完整版和运行时版本对比

完整版和运行版本相对比就是多了一个`编译器`

```javascript
// 完整版本写的代码
new Vue({
  template: '<div>{{ hi }}</div>'
})

// 运行时版本写出来的代码
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```







#### **在html页面上使用vue**

1.引入script静态链接
2.index.html中准备好容器`<div id="root"></div>`
3.页面脚本script
 3.1创建Vue的实例对象并传入配置<对象> const v=new Vue({}); 常量v可接可不接收.

```js
const v=new Vue({
 		el:'#root', 
 		data:{
            world:'世界',
            other:{
                info:'aaa',
                address:'beijing'
            }
        }, 
 	})

//el用于指定当前Vue实例为哪个容器服务.值是选择器字符串,选择器的写法类似于jQuery. el是element缩写 index.html是public文件夹中index.html

//data是存储数据的地方,为root容器提供数据.值为一个对象,相当于react中的state.
```

 3.2 html中使用<双花括号>来接收数据. root容器中写的不是html,是Vue中的模板代码.

* 所谓的模板代码,类似于React中的jsx,是HTML+js的混合体;
* {{xxx}},xxx会自动读取\<data>中的xxx的属性,方法,对象都可以.xxx当表达式去解析,只要是vc身上的都是可以读取的.
* {{xxx+yyy}} 可以读取多个属性,使用+运算符,但不用逗号,只会读取逗号之前的第一个.使用&&只会读取都为true的第二个.

```js
<div id='root'>
  <h1>hello, {{world}}</h1> 
	<h2>{{other.info.toUpperCase()}}</h2>//读取的表达式可以直接使用JS语法
</div>
```



4.HTML中可以有多个容器,相对应的js脚本中也应该有多个new Vue({}). el属性只能有一个参数.但一般是只有一个根容器.

5.Vue中源码部分开启了严格模式.慎用箭头函数,实例调用的函数this指向实例,非实例对象调用的函数:箭头函数this指实例,普通函数指window,开启了'use strict'后指向undefined.

6.data中的数据(属性)在data之外写:如果写在data之前,可以使用;如果使用在data之后,报错,但实例之后的属性,在vm._data中依然有被收集引用.

```js
<script>
  let data={name:'甲'}
	data.age=18
	new Vue({
        el:"#root";
        data
    })
</script> 
============之后写==============

 <script>
  let data={name:'甲'}
	new Vue({
	    el:"#root";
	    data
	})
	data.age=18  //报错

</script>   
```





### Vue实例的方法

> [Component Instance | Vue.js (vuejs.org)](https://vuejs.org/api/component-instance.html)
>
> [API — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/api/index.html#实例-property)

* $data 

* $props 使用这个属性可以接收上级组件向下传递的数据
* $options 获取vue实例属性,包含自定义属性
* $el vue实例的根dom元素
* $children 获取vue实例的直接子组件
* $root 获取当前组件树的根vue实例
* $attrs 可以获取组件的属性,不包括class, style,声明为props的属性



#### **$props**

```html
<script>
    Vue.component('my-component', {
      template: `<p @click='fun'>传过来的数据是: {{txt}}</p>`,
      props: ['txt', 'name'],
      methods: {
        fun() {
          console.log(this.$props)
        }
      }
    })
    let vm = new Vue({
      el: '#root',
      data: {
        msg: '我是要传过去的数据'
      }
    })
  </script>
```

打印的`this.$props`结果:

![20200521231726751.PNG (752×556) (csdnimg.cn)](https://img-blog.csdnimg.cn/20200521231726751.PNG)

#### **$options**

Vue实例初始化时,除了传入指定的属性,还可以传入自定义属性.自定义的属性可以是数组,对象,函数等,通过Vm.$options来获取.

```html
<div id="root">
    <p>$options <small>获取vue实例属性, 包含自定义属性</small></p>
    <button type="button" @click="show">查看</button>
    {{mydata}}
  </div>
<script>
  let vm = new Vue({
    el: '#root',
    cust: '我是自定义的属性',
    data: {
      msg: '我是要传过去的数据'
    },
    methods: {
      show() {
        console.log(this.$options)
      }
    },
    created() {
      this.mydata = this.$options.cust;
    }
  })
</script>
```

![image](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/image.2oy6633dubu0.webp)



#### **$el**

$el是用来访问vm实例使用的根DOM元素

```html
<div id="root">
    <!-- $el可以查看到这个div的所有内容-->
    <p>vm.$el <small>vue实例的根dom元素</small></p>
    <button @click="watch">查看</button>
  </div>
  <script>
    let vm = new Vue({
      el: '#root',
      cust: '我是自定义的属性',
      data: {
        msg: '我是要传过去的数据'
      },
      methods: {
        watch() {
          console.log(this.$el)
        }
      }
    })
  </script>
```

![](https://img-blog.csdnimg.cn/2020052123322925.PNG)

添加替换按钮,当前dom元素中的内容被替换成'我是替换后的内容'.

```html
 <div id="root">
    <!-- $el可以查看到这个div的所有内容-->
    <p>vm.$el <small>vue实例的根dom元素</small></p>
    <button @click="watch">查看</button>
    <button @cilck="change">替换</button>
  </div>
  <script>
    let vm = new Vue({
      el: '#root',
      cust: '我是自定义的属性',
      data: {
        msg: '我是要传过去的数据'
      },
      methods: {
        watch() {
          console.log(this.$el)
        },
        change() {
          this.$el.innerHTML = "<h1>我是替换后的内容</h1>"
        }
      }
    })
  </script>
```



#### $children

获取vue实例的直接子组件

```html
  <div id="root">
    <p>vm.$children <small>当前实例的直接子组件,不保证顺序,也不是响应式的</small></p>
    <button type="button" @click="show">查看子组件</button>
    <cpn></cpn>
  </div>
  <script>
    Vue.component('cpn', {
      template: `
        <div>我是子组件
          <cpn1></cpn1>  
        </div>
      `
    });
    Vue.component('cpn1', {
      template: `<div>我是第二个子组件</div>`
    })
    let vm = new Vue({
      el: '#root',
      methods: {
       show() {
         console.log(this.$children)
       }
      }
    })
  </script>
```

![](https://img-blog.csdnimg.cn/20200521234036570.PNG)

通过观察控制台效果，通过this.$children可以得到当前实例所有的直接子组件cpn不能得到cpn1，
特点：不保证顺序
需要说明:定义好的组件，必须在使用之后才能得到

注意: 在Edge和Chrome中打印的时候, 数组中的Vuecomponent变成了a(因为引入版本的问题, 如果引入vue.js,和示例效果相同)



#### **$root**

用来获取当前组件树的根Vue实例，如果当前实例没有父实例，则获取到的是该实例本身

```html
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.js"></script>
  <title>Document</title>
</head>
<body>
  <div id="root">
    <p>vm.$root <small>用获取当前组件树的根vue实例</small></p>
    <my-cpn></my-cpn>
  </div>
  <script>
    Vue.component('my-cpn', {
      template: `<button type="button" @click='show'>按钮</button>`,
      methods: {
        show() {
          console.log(this.$root)
          console.log(this.$root === vm.$root)
        }
      }
    })
   
    let vm = new Vue({
      el: '#root',
    })
  </script>
```

![](https://img-blog.csdnimg.cn/20200521234717675.PNG)

#### $attrs

可以获取组件的属性，但其获取的属性中<u>不包含class、style以及被声明为props的属性</u>。

```html
<div id="root">
    <my-cpn a="a" class="abc" id="dd" name="abc" :txt="msg"></my-cpn>
  </div>
  <script>
    Vue.component('my-cpn', {
      template: `<div>
          <button @click="show">查看组件属性</button>
          <p>我是父组件传来的值: {{txt}}</p>
        </div>`,
      props: ['txt'],
      methods: {
        show() {
          console.log(this.$attrs)
        }
      }
    })
   
    let vm = new Vue({
      el: '#root',
      data: {
        msg: '我是父组件的数据'
      }
    })
  </script>
```

![](https://img-blog.csdnimg.cn/20200521235053427.PNG)

#### vm.$refs

##### 类型: `Object`

#### 详细

一个对象,持有注册过`ref` attribute的所有DOM元素和组件实例.



### 数据与方法

当一个 Vue 实例被创建时，它将 `data` 对象中的所有的 property 加入到 Vue 的**响应式系统**中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值.

<span style="color:red">只有当**实例被创建时**就已经存在于 `data` 中的 property 才是**响应式**的</span>. 也就是说如果你添加一个新的 property，例如`vm.b='hi'`, 那么对b的改动将不会触发任何视图的更新。

如果你知道你会在晚些时候需要一个 property，但是一开始它为空或不存在，那么你仅需要设置一些<span style="color:red">初始值</span>

这里唯一的例外是使用 `Object.freeze()`，这会阻止修改现有的 property，也意味着响应系统无法再*追踪*变化

```html
<div id="#app">
  <!-- 这里的 `foo` 不会更新！ -->
  <p>
    {{foo}}  
  </p>
  <button v-on:click="foo = 'baz'">
    change it
  </button>
</div>
```



```javascript
var obj = {
  foo: 'bar'
}
Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
```



除了数据 property，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 `$`，以便与用户定义的 property 区分开来

```js
let data = {a:1}
Vue.component('cpn', {
  props: ['txt']
})
let vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data //true
vm.$el === document.getElementById('example') //true
vm.$children.name = 

//$watch是一个实例方法
vm.$watch('a', function(newValue, oldValue) {
  //这个回调将在'vm.a'改变后调用
})
```







### Vue全局API???

<span style="color:red">全局API和实例方法不同</span>,后再是在Vue的原型上挂载方法,也就是`Vue.prototype`上挂载方法,而前者是直接在Vue上挂载方法.

#### Vue.extend()

> [Vue中 Vue.extend() 详解及使用 - 掘金 (juejin.cn)](https://juejin.cn/post/6982558712149835790)
>
> [API — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/api/#Vue-extend)

##### 介绍

使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。

##### Vue.extend(obj)

定义一个Xxx组件(首字母大写)
	1.如何定义一个组件? 使用const Example=Vue.extend(options)去创建
	2.Example的本质是一个构造函数,我们以后去写\<Example/>,Vue帮我们去new Example.
	3.Vue.extend(options),options是一个配置对象,这个配置对象几乎和new Vue时的那个options一样.区别如下:
      3.1 不能写el去指定容器,所有组件实例最终要被一个vm所管理,vm中会指定好el,即组件放入那个容器.
	  3.2 data必须写成函数,返回值是对象.
	  3.3 组件的模板结构要配置在template属性中:值为html字符串,且用模板字符串;模板结构必须只有一个根标签

5. 5.1 Example确实是构造函数,但不是我们亲自写的Example,是Vue.extend生成的.
   5.2 Vue.extend调用的返回值是VueComponent构造函数,所以new Example()其实就是在new VueComponent()
   5.3 所谓组件的实例就是VueComponent的实例.简称vc; 所谓Vue的实例,就是Vue创建的实例,简称vm.
   5.4 组件的data函数以及methods中配置的函数中的this都是vc
6. 一个最重要的关系: VueComponent继承了Vue. 所以Vue.prototype上的属性和方法,vc都能看得见. ****





##### 应用场景

在 vue 项目中，初始化的根实例后，所有页面基本上都是通过 router 来管理，组件也是通过 import 来进行局部注册，所以组件的创建不需要去关注，相比 extend 要更省心一点点。但是这样做会有几个缺点：

1. 组件模板都是事先定义好的，如果我要从接口<u>动态渲染组件</u>怎么办？

2. 所有内容都是在 #app 下渲染，注册组件都是在当前位置渲染。如果我要实现一个类似于` window.alert() 提示组件`, 要求像调用 JS 函数一样调用它，该怎么办？

这时候，Vue.extend + vm.$mount 组合就派上用场了。

##### extend函数

```javascript
let ctor = Vue.extend({组件对象})

let aa = new ctor();


document.body.appendChild(aa.$mount().$el)

```



##### 使用

1.基础用法

<span style="color:blue">extend 创建的是 Vue 构造器</span>，而不是我们平时常写的组件实例，所以不可以通过 new Vue({ components: testExtend }) 来直接使用，需要通过 `new Profile().$mount('#mount-point') `来挂载到指定的元素上。

```html
<div di="mount-point"></div>

<script>
	let Profile = Vue.extend({
    template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
    data: function() {
      return {
        firstName: 'walter',
        lastName: 'white',
        alias: 'heisenberg'
      }
    }
  })
  
  //创建Profile实例,并挂载到一个元素上
  new Profile().$mount('#mount-point')

</script>
```



第二种写法

创建实例时传入一个元素,生成的组件将会挂载到这个元素上.

```javascript
//定义一个vue模板
let tem = {
  template: '{{firstName}} {{lastName}} aka {{alias}}',
  data: function() {
    return {
      firstName: 'walter',
      lastName: 'white',
      alias: 'heisenberg'
    }
  }
}

//调用
cosnt TemConstructor = Vue.extend(tem)
const instance = new TemConstructor({el: '#app'})
```



##### 使用案例

封装toast组件  ????

需要多看几遍

> [Vue.extend实现全局Toast提示组件和Dialog对话框组件封装 - 掘金 (juejin.cn)](https://juejin.cn/post/6904541556938637325)

<iframe src="https://codesandbox.io/embed/vue2-extend-6xuwrz?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue2/extend"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



实现Dialog对话框组件封装 ????

> [Vue.extend实现全局Toast提示组件和Dialog对话框组件封装 - 掘金 (juejin.cn)](https://juejin.cn/post/6904541556938637325)

> 在 components 目录下新建 Dialog 文件夹作为 Dialog 组件文件，新建 index.vue 和 index.js 文件进行组件封装，并在 main.js 中将组件挂载到 vue 原型上实现全局使用



### Vue.nextTIck([callback, context])

> 官网: 在下次DOM更新循环结束之后执行延迟回调. 在修改数据之后立即使用这个方法,获取更新后的DOM
>
> 简单理解: **当数据更新了，在dom中渲染后，自动执行该函数**

```js
//修改数据
vm.msg = 'hello';
//DOM还没有更新
Vue.nextTick(function() {
  //DOM更新了
})

//作为一个Promise使用
Vue.nextTick()
  .then(function() {
  //DOM更新了
})
```



```js
//资料
https://segmentfault.com/a/1190000020499713?utm_source=sf-similar-article

JS的事件循环和任务队列是理解nextTick的关键(https://juejin.cn/post/6844903476527366151)
                           

```





## 模板语法

> Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

> 在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

> 如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，[直接写渲染 (render) 函数](https://cn.vuejs.org/v2/guide/render-function.html)，使用可选的 JSX 语法



### **0.总结**

```js
模板语法: 插值语法(双大括号表达式), 指令语法(以v-开头的标签属性)

- 插值语法:
	- 功能:解析标签体内容
	- 语法:{{xxx}} xxx是js表达式解析
- 指令语法:
	- 功能:解析标签(包括:标签属性,标签体内容,绑定事件...)
	- 语法:v-bind:href="xxx", xxx会作为JS表达式被解析.
    - 举例:
    	<a v-bind:href="xxx">aaa</a>
		<a v-bind:id='dynaicId'></a>
		<button v-bind:disabled='isButtonDisabled'>Button</button>
		<a :href='xxx' v-bind:x="yyy">aaa</a> //v-bind可以省略,只保留冒号.也只有它可以省略.
        
//对于布尔attribute(它们只要存在就意味着值为true).v-bind工作的不同点:如果isButtonDisabled的值为null,undefined,false,则disabled不会出现在渲染出来的button元素中.
 
其他:对于所有的数据绑定,Vue都提供了表达式支持.有个限制就是，每个绑定都只能包含单个表达式，
{{number+1}}
{{ok?'yse':'no'}}
{{message.split('-').reverse().join('')}}
<div v-bind:id=" 'list-'+id "></div>

下面的例子不会生效:
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```



### 插值

- 在vue语法**内部**，可以使用`{{}}`称为插值表达式; vue语法外部，使用不了插值表达式
- 插值表达式内部，可以放置变量或者表达式或者函数
- 插值表达式内部放置的变量，只能是在data中声明过的，外部的数据不能使用



#### 1.1 文本插值

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值

```js
<span>message: {{msg}} </span>
```

Mustache 标签将会被替代为对应数据对象上 `msg` property 的值。无论何时，绑定的数据对象上 `msg` property 发生了改变，插值处的内容都会更新

通过使用 [v-once 指令](https://cn.vuejs.org/v2/api/#v-once)，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

```html
<span v-once>message:{{msg}}</span>
```



#### 1.2 原始HTML

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 [`v-html` 指令](https://cn.vuejs.org/v2/api/#v-html)：

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

//解析后的内容:
Using mustaches: <span style="color: red">This should be red.</span>(显示为文本内容)
Using v-html directive: This should be red.(红色的)
```

这个 `span` 的内容将会被替换成为 property 值 `rawHtml`，直接作为 HTML——会忽略解析 property 值中的数据绑定。注意，你不能使用 `v-html` 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。



#### 1.3 Attribute

Mustache 语法(双大括号)不能作用在 HTML attribute 上，遇到这种情况应该使用 [`v-bind` 指令](https://cn.vuejs.org/v2/api/#v-bind)：

```html
<div v-bind:id="dynamicId"></div>
```

对于布尔 attribute (它们只要存在就意味着值为 `true`)，`v-bind` 工作起来略有不同，在这个例子中：

```html
<button v-bind:disabled="isButtonDisabled">Button</button>
```

如果 `isButtonDisabled` 的值是 `null`、`undefined` 或 `false`，则 `disabled` attribute 甚至不会被包含在渲染出来的 `<button>` 元素中。



#### 1.4 js表达式

这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含**单个表达式**,下面的例子都**不会**生效

```js
//对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list-' + id"></div>
这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含单个表达式,所以下面的例子都不会生效。
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

模板表达式都被放在沙盒中，只能访问[全局变量的一个白名单](https://github.com/vuejs/vue/blob/v2.6.10/src/core/instance/proxy.js#L9)，如 `Math` 和 `Date` 。你不应该在模板表达式中试图访问用户定义的全局变量。

```js
沙盒（英语：sandbox，又译为沙箱）：计算机术语，在计算机安全领域中是一种安全机制，为运行中的程序提供的隔离环境。沙盒通常严格控制其中的程序所能访问的资源。

vue定义的全局变量白名单:
Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent，Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require

用户定义的全局变量：参考链接–> 在vue项目中 如何定义全局变量 全局函数
```



#### 1.5 [项目中定义全局(变量/函数)]([在vue项目中 如何定义全局变量 全局函数 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903505832968199))

> 在项目中，经常有些函数和变量是需要复用，比如说网站服务器地址，从后台拿到的：用户的登录token,用户的地址信息等，这时候就需要设置一波全局变量和全局函数

> 存疑,为什么没有直接暴露js文件而暴露的是vue文件

#### 1.5.1 定义全局变量

**原理**  设置一个专用的的全局变量模块文件，模块里面定义一些变量初始状态，用export default 暴露出去，在main.js里面使用Vue.prototype挂载到vue实例上面或者在其它地方需要使用时，引入该模块便可。

全局变量模块文件: Global.vue文件

```js
<script>
const serverSrc='www.baidu.com';
const token='12345678';
const hasEnter=false;
const userSite="中国钓鱼岛";
  export default
  {
    userSite,//用户地址
    token,//用户token身份
    serverSrc,//服务器地址
    hasEnter,//用户登录状态
  }
</script>
```



**使用方式1**

在需要的地方引用进全局变量模块文件，然后通过文件里面的变量名字获取全局变量参数值

```vue
<template>
    <div>{{ token }}</div>
</template>

<script>
import global_ from '../../components/Global'//引用模块进来
export default {
 name: 'text',
data () {
    return {
         token:global_.token,//将全局变量赋值到data里面，也可以直接使用global_.token
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
```



**使用方式2**

在程序入口的main.js文件里面，将上面那个Global.vue文件挂载到Vue.prototype

```js
import global_ from './component/Global'

Vue.prototype.GLOBAL = global_ //挂载到vue实例上
```

接着在整个项目中不需要再通过引用Global.vue模块文件，直接通过this就可以直接访问Global文件里面定义的全局变量。

```js
<template>
    <div>{{ token }}</div>
</template>

<script>
export default {
 name: 'text',
data () {
    return {
         token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
```



#### 1.5.2 定义全局函数

**原理**  新建一个模块文件，然后在main.js里面通过Vue.prototype将函数挂载到Vue实例上面，通过this.函数名，来运行函数。

**1.main.js里面直接写函数**

简单的函数可以直接在main.js里面直接写

```js
Vue.prototype.changeData = function() {
  //...
}
```



**2.写一个模块文件,挂载到main.js上**

base.js文件，文件位置可以放在跟main.js同一级，方便引用

```js
export.install = funtion(Vue,options) {
  Vue.prototype.text1 = function() {
    //全局函数1
  };
  Vue.prototype.text2 = function() {
    //全局函数2
  }
}
```

main.js入口文件:

```js
import base from './base'
Vue.use(base);
```

组件里调用

```js
this.text1();
this.text2();
```







### 指令

> 指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。指令 attribute 的值预期是**单个 JavaScript 表达式** (`v-for` 是例外情况)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM.
>

#### 语法

##### 参数

> 一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，`v-bind` 指令可以用于响应式地更新 HTML attribute：

```html
<a v-bind:href='url'>...</a>  href是参数,告知v-bind指令将该元素的href attribute与表达式url的值绑定
<a v-on:click="doSomething">...</a> click是参数
```



##### 动态参数

> 从 2.6.0 开始，可以用方括号括起来的 **JavaScript 表达式**作为一个指令的参数：

```HTML
<a v-bind:[attributename]='url'>xxx</a> 
```

`attributeName` 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。若Vue实例有一个data property attributename, 其值为'href', 那么这个绑定将等价于`v-bind:href`

你也可以使用动态参数为一个动态的事件名绑定处理函数

```html
<a v-on:[eventname]='functionName()'>xxxx</a>
```

在这个示例中，当 `eventName` 的值为 `"focus"` 时，`v-on:[eventName]` 将等价于 `v-on:focus`。



##### 对动态参数的值的约束

> 动态参数预期会求出一个字符串，异常情况下值为 `null`。这个特殊的 `null` 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。



##### 对动态参数表达式的约束

> 动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的. 

```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['hr' + bar]="value"> ... </a>
===============
<a v-bind:[attributetest]="value"> ... </a>
```

变通的办法是**使用没有空格或引号的表达式**，或用**计算属性替**代这种复杂表达式。

在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写

```js
<!--在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
除非在实例中有一个名为“someattr”的 property，否则代码不会工作。-->
<a v-bind:[someAttr]="value"> ... </a>
```





##### 修饰符

> 修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

```HTML
<form v-on:submit.prevent='onSubmit'>XXX</form>
    

```





##### 缩写

> `v-` 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，`v-` 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue 管理所有模板的[单页面应用程序 (SPA - single page application)](https://en.wikipedia.org/wiki/Single-page_application) 时，`v-` 前缀也变得没那么重要了。因此，Vue 为 `v-bind` 和 `v-on` 这两个最常用的指令，提供了特定简写：



```html
v-bind:
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>
 //使用回调让子给父传数据中, v-bind:test='fun' func是methods中的方法

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>

v-on:
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```





### 事件

#### what

事件结构`v-on:事件类型="方法名()"`



#### 事件绑定注意事项

0.v-on指令监听DOM事件,接收JS代码或方法名称(事件回调).//
1.事件的回调都配置在methods对象中
2.methods中的函数,都是被Vue所管理的,,this的指向是vm/组件实例对象
3.methods中配置的函数,不能使用箭头函数,this会丢失.



#### 指令语法 写法 参数event++

```js
event.target.innerText

event.target.value
even.preventDefault
event.stopPropogation
```



```html
//指令语法中的函数名称可加可不加小括号,除非需要传递参数.
//不加小括号,Vue在执行时也会添加补全括号. 会自动传递一个event参数,event是事件对象.event传不传,都可以打印出来.

//event.target=> disabled className innerHTML innerText type(绑定事件类型) on事件
//事件中函数的形参如果是变量,会去data中找.例如 @click='show($event, name)'
//事件修饰符 stop prevent
//event占位符:$event, 和其他参数没有位置要求.但一般都把event放在开头的位置,原生的js中event必须是第一个参数.

//event是事件对象,每一次触发事件,系统(浏览器内核)都会把这一次触发事件相关的信息,封装成一个对象.在浏览器调用回调函数的时候,自动传递给回调函数的第一个形参

<div id='root'>
	<h2>欢迎来到{{aim}}</h2>
    <!-- 绑定事件---标准方式 -->
	<button v-on:click="show1">点我提示：信息1（v-on绑定）</button> <br/><br/>

	<!-- 绑定事件---简写方式 -->
	<button @click="show1">点我提示：信息1（@绑定）</button> <br/><br/>

	<!-- 绑定事件---传递参数 -->
	<button @click="show2($event,name)">点我提示：信息2 + 传递的参数</button> <br/><br/>

	<!-- 绑定事件---阻止默认行为，prevent叫事件修饰符 -->
	<a href="https://www.baidu.com" @click.prevent="show3">点我提示：信息3 （阻止默认行为）</a> <br/><br/>

	<!-- 绑定事件---阻止冒泡，事件修饰符可以连写，且顺序可以随意改变 -->
	<div @click="show4">
	<a href="https://www.baidu.com" @click.stop.prevent="show4">点我提示：信息4 （阻止冒泡）</a>
</div><br/>
    <!-- 键盘事件 -->
    <input @keyup.enter="show5" type="text" placeholder="按下回车提示数据">
    <!-- <input @keyup.13="show5" type="text" placeholder="按下回车提示数据"> -->
    <!-- <input @keyup.37="show5" type="text" placeholder="按下左箭头提示数据"> -->
    <!-- <input @keyup.arrow-left="show5" type="text" placeholder="按下左箭头提示数据"> -->
    <!-- <input @keyup.left="show5" type="text" placeholder="按下左箭头提示数据"> -->
    <!-- <input @keyup.16="show5" type="text" placeholder="按下shift提示数据"> -->
</div>

<script>
	new Vue({
        el:"#root",
        data:{//配置数据,相当于react中的state
            aim:'world'
        },
        methods:{//用于配置方法
            show1(event){//show1不要写成箭头函数,否则this就是window
                console.log(this);//this是vm
                console.log(evnet.target.innerText);
                alert('信息1')
            },
            show2(evnet,name){//实参是变量name,会去data中寻找,但是没有必要,可直接使用this来获取.
                console.log(event);
                alert('信息2'+name);//
            },
            show3(event){
                //evnet.preventDefault(); 手动阻止默认行为
                alert('信息3');
            },
            show4(evnet){
                //event.stopPropagation(); 手动阻止冒泡
                alert('信息4')
            },
            show5(evnet){
                //if(event.keyCode!==13) return; 自己判断按键
                console.log(event.key); //判断按键名称
                console.log(event.keyCode); //判断按键编码值
                console.log(evnet.target.value);
            }
        }
    })
</script>
    
 
```



#### $event

* 自定义组件的\$event 代表传参
* html原生的$event 此时获取的dom元素

### Class与Style绑定

> 操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是 attribute，所以我们可以用 `v-bind` 处理它们：只需要通过表达式计算出字符串结果即可。
>
> 不过，字符串拼接麻烦且易错。因此，在将 `v-bind` 用于 `class` 和 `style` 时，Vue.js 做了专门的增强。表达式结果的类型除了**字符串**之外，还可以是**对象或数组**



#### 1.绑定class

```js
一.绑定样式(3种:字符串,对象,数组)
:class='xxx' xxx可以是字符串,对象,数组

1.class的字符串写法: 适用场景,类名不确定,要动态获取;
<h2 class='xx' :class='myStyle'>{{title}}</h2> //myStyle是data中的属性

2.class的对象写法: 适用于类名确定,但不确定用不用
<h2 class='xx' :class='{classB:hasB, classC:hasC}'>{{title}}</h2>
//对象里的key都是字符串,所以classB相当于'classB',所以找的是变量hasB,hasC

3.class的三元运算符写法: 适用于类名确定,但不确定用不用
<h2 class='xx' :class=" classB ? 'hasB' : '' ">{{title}}</h2>

4.class的数组写法: 适用于同时应用多个class
<h2 class='xxx' :class="[a, b, c, 'd']">{{title}}</h2>
//Vue拿到数组之后,发现有3个变量,会去data中寻找.如果是字符串('d')就去样式中去找.但是字符串形式在数组中基本不用,麻烦.
//变量去data中寻找,字符串去style中找

new Vue({
    el:"#root",
    data:{
        title:'同学过年好',
        myStyle:'classA',
        hasB:true, //标识是否使用classB样式
        hasC:true, //标识是否使用classC样式
        a:'classA',
        b:'classB',
        c:'classC',
        size:40   //繁琐的方式是size:'font-size:40px'  :style="size"
    }
})
```



##### 1.1 对象语法

可以传给`v-bind:class`一个对象,以**动态切换class**:

```js
<div v-bind:class="{active: isActive}"></div>
```

可以在对象中传入更多字段来动态切换多个 class。此外，`v-bind:class` 指令也可以与普通的 class attribute 共存.

```js
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

也可以返回一个对象的计算属性

```js
<div v-bind:class="classObject"></div>
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```



##### 1.2 数组语法

我们可以把一个数组传给 `v-bind:class`，以应用一个**class列表**：

```js
<div v-bind:class="[activveClass, errorClass]"></div>

data:{
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

渲染结果:

```js
<div class='active text-danger'></div>
```



**1.2.1三元表达式**

```js
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

**1.2.2对象语法**

当有多个条件 class 时这样写有些繁琐。所以在数组语法中也可以使用**对象语法**

```js
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```





##### 1.3 在组件上使用

当在一个自定义组件上使用 `class` property 时，这些 class 将被添加到**该组件的根元素**上面。这个元素上已经存在的 class 不会被覆盖。

例如，如果你声明了这个组件：

```
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
```

然后在使用它的时候添加一些 class：

```
<my-component class="baz boo"></my-component>
```

HTML 将被渲染为：

```
<p class="foo bar baz boo">Hi</p>
```

对于带数据绑定 class 也同样适用：

```
<my-component v-bind:class="{ active: isActive }"></my-component>
```

当 `isActive` 为 truthy 时，HTML 将被渲染成为：

```
<p class="foo bar active">Hi</p>
```









#### 2.绑定style

##### 2.1 对象语法

`v-bind:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名.

**对象语法常常结合返回对象的计算属性使用**

```js
<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```



##### 2.2 数组语法

`v-bind:style` 的数组语法可以将<span style="color:blue;">**多个样式对象**</span>应用到同一个元素上

```js
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

##### 2.3 自动添加前缀

当 `v-bind:style` 使用需要添加[浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)的 CSS property 时，如 `transform`，Vue.js 会自动侦测并添加相应的前缀



##### 2.4 多重值

从 2.3.0 起你可以为 `style` 绑定中的 property 提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```js
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 `display: flex`。

```js
绑定style样式
:style="{fontSize:size+'px'}" //size是data中的属性
```







### 过渡

```HTML
1. 基本编码
(1).在目标元素外包裹<transition name="xxx"> //使用name的值代替下面6个类的前缀
(2).编写style样式：
    进入：
    进入起始点(xxx-enter)
    进入过程中(xxx-enter-active)、
    进入结束点 的样式(xxx-enter-to)
    离开:
    离开起始点(xxx-leave)、
    离开过程中(xxx-leave-active)、
    离开结束点 的样式(xxx-leave-to)
    
 
```



```HTML
//案例
<style>
    //离开的起点,进入的终点
    .xxx-leave, .xxx-enter-to{ height:0; opacity:0}
    //离开过程中 进入过程中
    .xxx-leave-active, xxx-enter-active{transition:all 2s}
    //离开的终点,进入的起点
    .xxx-leave-to, xxx-enter{ height:110; opacity:1}
</style>
```





### 动画

```HTML
1. 基本编码
(1).在目标元素外包裹<transition name="xxx">
(2).编写：进入动画、离开动画 的样式
3. 类名规范:
进入动画样式：xxxx-enter-active
离开动画样式：xxxx-leave-active    
```



```HTML
<style>
    .xxx-enter-active{animation:xxx 1s}
    .xxx-leave-active{animation:xxx 1s reverse}
    @keyframes xxx{
        0%{}
        50%{}
        100%{}
    }
</style>
```





### 过滤器

#### 是什么

用来文本格式化

#### 使用

过滤器可以用在两个地方：**双花括号插值和 `v-bind` 表达式** (后者从 2.1.0+ 开始支持)。

过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示

```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在v-bind中 -->
<div v-bind:id="rawId | formatId"></div>
```

在组件的选项中定义本地的过滤器 或 在创建Vue实例之前定义全局过滤器

```javascript
//本地过滤器
filters: {
  capitalize: function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

//全局过滤器
Vue.filters('capitaliza', function(value) {
  if(!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(0)
})
new Vue({
  //...
})
```



过滤器可以串联,从左到右执行,返回的结果被下一个过滤器接收并处理

过滤器是JS函数,可以接收参数.但管道符左侧实为第一个参数.

```javascript
//过滤器串联
{{ message | filterA | filterB }}

//过滤器接收参数
{{ message | filterA('arg1', 'arg2')}}  //第一个参数是message,第二个为'arg1', 第三个为'arg2'
```



#### 注意事项

* 全局过滤器与本地过滤器重名, 使用全局过滤器
* 过滤器函数总是接收表达式的值(之前的操作链的结果)作为第一个参数.



#### 实例

过滤器函数的默认参数

使用库来进行辅助格式化

```javascript
//默认参数
Vue.filter('dataFormater', function(value, str='YYYY-MM-DD'){
	return moment(value).format(str);
})

//使用库 例如时间处理的 moment dayjs

```







### 模块,组件, 模块化与组件化

|      | 模块                                        | 组件                                   |
| ---- | ------------------------------------------- | -------------------------------------- |
| 理解 | 向外提供特定功能的js程序,一般就是一个js文件 | 用来实现特定界面功能效果的代码资源集合 |
| 原因 | 复杂                                        | 一个界面的功能很复杂                   |
| 作用 | 复用,简化,提高效率                          | 复用编码,简化项目编码                  |



|      | 模块化                 | 组件化                                       |
| ---- | ---------------------- | -------------------------------------------- |
| 定义 | 应用的js都以模块来编写 | 应用是以多组件方式实现. 是组件化的应用和开发 |









## el和data的两种写法

```js
//总结:
1.el有两种写法：
(1). new Vue时候直接传递el属性 ---- 常用
(2). 先new Vue(),再通过vm.$mount('#root')指定容器 ---- 不常用
2.data有两种写法：
(1).对象: 非组件编码可以写对象，也可以写函数。
(2).函数：组件化编码必须使用函数式的data。对象属性为函数可以简写.

Vue中最重要的一个原则:由Vue所调用的函数都不要写成箭头函数,一旦写成箭头函数,this就会错误(或是window,或undefined)

//el的第一种写法(常用):
new Vue({
    el:'#root',
    data:{
        msg:'甲乙丙丁',
        address:'天南海北'
    }
})
//el的第二种写法(不常用):
const vm=new Vue({
    data:{
        msg:'甲乙丙丁',
        address:'天南海北'
    }
})
vm.$mount('#root')

//data的第一种写法, data是一个对象:
new Vue({
    el:'#root',
    data:{
        msg:'甲乙丙丁',
        address:'天南海北'
    }
})
//data的第二种写法(组件中用的多),data是一个函数,返回数据对象,组件中必须使用函数式data:
//特别注意: 
1.若使用函数式data,Vue会帮我们调用data函数.Vue就会得到返回的数据对象,从而使用,this是Vue的实例对象.
2.data不要写成箭头函数,要写成普通函数.否则this的指向就是window.
//官网不建议写箭头函数,this或指向window或undefined,取决于是否开启严格模式,而非实例对象;对象属性值为函数的简写,去掉:function
new Vue({
    el:'#root',
    data:function(){ 
        return {
        msg:'甲乙丙丁',
        address:'天南海北'
    	}
    }
})
```







## 数据代理

```js
关于Vue中的数据代理：
1.什么是数据代理？
(1).配置对象data中的数据，会被收集到vm._data中，然后通过Object.defineProperty让vm上拥有data中所有的属性。
(2).当访问vm的msg时，返回的是_data当中同名属性的值
(3).当修改vm的msg时，修改的是_data当中同名属性的值
2.为什么要数据代理？
为了更加方便的读取和修改_data中的数据，不做数据代理，就要：vm._data.xxx访问原始数据
3.扩展思考？—— 为什么要先收集在_data中，然后再代理出去呢？
更高效的监视数据（直接收集到vm上会导致监视效率太低）
```



```js
https://cn.vuejs.org/v2/api/#data

# data
类型:Object|Function
限制:组件的定义只接受function
实例创建后,可以通过vm.$data访问原始数据对象.Vue实例也代理了data对象上所有的property,因此访问vm.a等价于访问vm.$data.a
以_或$开头的property不会被Vue实例代理.可以使用例如vm.$data._property的方式访问这些property.



const vm=new Vue({
    data:{
        name:'甲乙丙丁',
        address:'天南海北',
        _name:'贾宝玉'
    }
});
vm.name===vm._data.name===vm.$data.name; //true
vm._data===vm.$data;//true

```





### 复习:Object.defineProperty

```js
let person={};
//set和get中的this是当前对象
Object.defineProperty(person, 'name', {
	set(value){//当修改person.name时,set被调用.set会收到:新的值
        
    },
	get(){//当读取person.name时,get被调用,get的返回值就是name的值.
        
    }
})



  <script>
    let _data={msg:'甲乙丙丁'};

let vm={}
Object.defineProperty(vm, 'msg', {
    set(value){
        _data.msg=value;
    },
    get(){
        return _data.msg;
    }
})

</script>
```





## 生命周期

### 概述

> 每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会
>
> 生命周期钩子的 `this` 上下文指向调用它的 Vue 实例
>
> 注意:
>
> 不要在选项 property 或回调上使用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`。因为箭头函数并没有 `this`，`this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。





### 1.图示

![vue生命周期-2.png](https://i.loli.net/2021/01/15/JMm3HIuOPCYQwjB.png)



```HTML
//本地使用vue.js,关闭生产提示: Vue.config.productionTip = false

this.$destroy() //vm还在，只是vm不管理root容器中的数据了，数据的监听也没了

mounted //vm挂载完毕
beforeDestroy //vm将要销毁
```



![](https://pic2.zhimg.com/80/v2-8ed5f9b516d6b4b50c91bf46e2935859_720w.jpg)

```js
图文来源:https://zhuanlan.zhihu.com/p/71958016

每个Vue实例在被创建之前都要经过一系列的初始化过程,这个过程就是vue的生命周期

beforeUpdate:视图层的数据改变时触发
updated: 在updated函数里更改data,会触发beforeUpdate.


https://frank-deng.github.io/vue_notes.html
watch列表中immediate为true时，监听回调将在beforeCreate和created生命周期之间执行。如需在此监听回调中访问子组件或DOM元素，请使用this.$nextTick()。

组件刚加载时，render函数在beforeMount和mounted之间执行，之后每次在数据发生更新时都会被执行，在beforeUpdate和updated之间执行
```



### 阶段分类

#### 初始化阶段

从`new Vue()`到`created`之间的阶段

这个阶段的主要目的是在Vue.js实例上<span style="color:blue">初始化一些属性,事件以及响应式数据</span>, 如props, methods, data, computed, watch, provide, inject等.



#### 模板编译阶段

在created到beforeMount之间的阶段.

这个阶段的主要目的:

* 将模板编译为渲染函数,只存在于完整版中
* 如果只在包含运行时的构建版本中执行`new Vue()`,则不会存在这个阶段.



#### 



###  2.Vue各阶段数据可使用情况

Props，methods,data和computed的初始化都是在beforeCreated和created之间完成的。

computed实在props之后执行的

```js
https://juejin.cn/post/6844903904585449486
```

**加载顺序**

| 类型     | 加载顺序 | 加载时间                  | 写法       | 作用               | 备注                                                         |
| -------- | -------- | ------------------------- | ---------- | ------------------ | ------------------------------------------------------------ |
| prop     | 1        | beforeCreate与created之间 | 对象或数组 | 接收父组件传递的值 |                                                              |
| data     | 3        | 同上                      | 对象或数组 | 定义以及初始化数据 | 最后是用于视图上展示的数据,否则最好定义在外面或vm对象内(减少开支,提高性能); 组件内只接收函数 |
| computed | 4        | 同上                      | 函数       | 简单数据计算(相对) |                                                              |
| watch    | 2        | 函数                      | 函数       | 复杂的数据计算     |                                                              |



### 3.父子组件的生命周期

#### 3.1 父子组件生命周期



#### 3.2 其他情况

```js
1.异步情况
 父组件中的created
 async created() {
   let response = await this.$publicApi.downLoadImg(this.value[i].fileId).catch((err) => false);
 }

结果: 通过打印结果可知, await之后的内容需要在子组件执行完成生命周期(created之后)才会执行
渲染多个子组件的话, 子组件的mounted是在所有的created之后才执行的

需要写个案例来验证下.
```



### 4. 生命周期钩子里的异步请求

```js
//https://juejin.cn/post/6844903721558769678
1.vue声明周期不是阻塞设计的
2.async/await 不会阻塞钩子函数, 是让钩子内的多个异步函数同步调用(!)，并不是为了阻塞钩子


```





## 计算属性

### 概述

#### what

在computed中定义一个函数(看起来是一个函数,其实是一个属性),命名按照属性规范命名(一般为名词)

```vue
new Vue({
	computed: {}
})
```

#### 特点

* 计算属性computed：要显示的数据不存在，要通过计算得来,只要是/* vc */身上有的都可以加工.可读可改的数据
* 函数底层用到的是对象setter和getter方法
* 执行的时机：
  * 初始显示会执行一次，得到初始值去显示。
  * 当依赖的数据发生改变时会被再次调用。
* 优势：与methods实现相比，内部有缓存机制，效率更高。
* 计算属性是用于直接读取使用的，不要加().因为本质是一个属性. ??
* 在watch中修改源数据,会导致原数据的丢失.这种场景适合使用计算属性 **

#### why?

模板内的表达式(插值和指令)非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护.

```html
<div id="example">
  {{ msg.split('').reverse().join('')}}
</div>
```

在这个地方，模板不再是简单的声明式逻辑.对于任何复杂逻辑,你都应当使用**计算属性**。

### how

#### 基本使用

可以像绑定普通property一样在模板中绑定计算属性. 在模板中不能使用括号来调用计算属性,会报错.

data 中内容依赖变更时，data 属性不会变更（它的设计目标就是保存组件的局部状态数据而已）。而

computed 则是通过【依赖追踪】实现的，在 computed 求值时引用的 Vue 变量变化时，会触发对 computed 的重新计算。

```javascript 
[Vue warn]: Error in render: "TypeError: reversedMsg is not a function"
```



```html
<div>
  <p>
    Original message: "{{msg}}"
  </p>
  <p>
    Computed reversed msg: "{{ reversedMsg }}"
    Computed reversed msg: "{{ reversedMsg() }}"
  </p>
</div>

<script>
	let vm = new Vue({
    el: '#root',
    data: {
      msg: 'Hello'
    },
    computed: {
      reversedMsg: function() {
        return this.msg.split('').reverse().join('')
      }
    }
  })
</script>
```

#### 计算属性的写法

##### 完整写法

```javascript
// ...
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```

##### 只有get方法

```javascript
computed: {
  totalPrice: function() {
    //
  }
}
```



##### 简化写法-语法糖

计算属性默认只有 getter，不过在需要时你也可以提供一个 setter

```javascript
computed: {
	totalPrice() {

	}
}
```





### 计算属性缓存vs方法

#### 比较

* 在表达式中调用方法可以达到计算属性取值的同样效果.
* **计算属性是基于它们的响应式依赖进行缓存的**. 只在相关响应式依赖发生改变时它们才会重新调用函数求值; 每当触发重新渲染时，调用方法将**总会**再次执行函数

#### 缓存原因

性能开销

假设我们有一个性能开销比较大的计算属性 **A**，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 **A**。如果没有缓存，我们将不可避免的多次执行 **A** 的 getter！





### 计算属性 vs 侦听属性

<span style="color:blue">当需要在数据变化时执行**异步或开销较大**的操作时， `watch` 方式是最有用的</span>。

侦听属性允许执行<span style="color:blue">异步操作 (访问一个 API)</span>，限制我们执行该操作的频率，并在我们得到最终结果前，<span style="color:blue">设置中间状态</span>。这些都是计算属性无法做到的。



`watch` 完全可以替代 `computed` ？什么情况下，只能使用`computed`呢？

`computed` 最大特点就是缓存，所以上述问题可以转换为：哪些情况下，我们需要依赖缓存？

现在有这样一个需求，子组件中需要同时显示改变前和改变后的值。如果使用watch,会出现新值和旧值相同,因为前提是如果父组件传递给子组件的数据类型是引用类型.







## 侦听属性

### 背景

当需要在数据变化时**执行异步或开销较大**的操作时，使用侦听器





```js
监视属性watch：
1.属性必须先存在，才能进行监视！！
2.当被监视的属性(data中的属性)变化时, 回调函数自动调用, 进行相关操作
3.监视的两种写法：
 (1). new Vue时传入watch配置 (精简写法是函数, 完整写法是对象)
 (2). 通过vm.$watch监视
4.深度监视 deep:true  1.18日案例
5.在watch中修改源数据,会导致原数据的丢失.这种场景适合使用计算属性 **
  


computed和watch之间的区别：
1.只要是computed能完成的功能，watch都可以完成
2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作
3.computed依赖缓存,值不变前提下多次读取使用缓存;watch多次读取会多次调用


备注：
1.所有被Vue所调用（管理）的函数，都不要写箭头函数 ----- 例如：watch中的函数、computed中的函数
2.所有不是被Vue所调（管理）的函数，都要写成箭头函数 --- 例如：定时器的回调、ajax的回调等等
3.watch就是Vue给我提供的一个监测数据改变的手段，至于数据发生改变后，要做什么，得看具体的业务了逻辑。
例如：
需要新的值、旧的值作比较，决定接下来要干什么
不要值，只要数据改变了，就要发请求等等
```



```html
<div id="root">
    姓：<input type="text" v-model="firstName"> <br/><br/>
    名：<input type="text" v-model="lastName"><br/><br/>
    <span>全名:{{fullName}}</span><br/><br/>
</div>

<script>
	const vm=new Vue({
        el:"#root",
        data:{
            firstName:'张',
            lastName:'三',
            fullName:''
        },
        watch:{
            //监测firstName,完整写法:
            firstName:{
                //若其值为true,则handler在初始化会调用一次,firstName改变调用一次
                immediate:true, 
            	handler(newValue, oldValue){//固定的属性名称handler newValue和oldValue是firstName的新旧值
                	this.fullName=newValue+this.lastName;
            	}
            }
            //监测firstName,精简写法:
            firstName(newValue, oldValue){//当firstName变化时,函数才会被vm调用.
        		this.fullName=newValue+this.lastName;
    		}
            
            //监测lastName, 精简写法
            lastName(newValue, oldValue){
        		this.fullName=this.firstName+newValue;
   			}
        }
    })
    //watch的第二种写法:
    vm.$watch('firstName', {
        immediate:true,
        handler:function(newValue, oldValue){
            setTimeout(()=>{//此处的定时器函数一定要写箭头函数
                this.fullName=newValue+this.lastName;
            },1000)
        }
    })
    
</script>
```









## 条件渲染

### 1.v-if

```js
使用逻辑运算符搭配条件渲染

//复杂
v-show=" $route.path!=='/login' && $route.path!=='/search' "

//简单 在login和search路由定义中添加属性meta,值为对象
v-show=" !$route.meta.isHidden "
```

#### 1.2.用key管理可复用元素

Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。

```js
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>

<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```

在上面的代码中切换 `loginType` 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，`<input>` 不会被替换掉——仅仅是替换了它的 `placeholder`。

所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 `key` attribute 即可.

```js
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

注意，`<label>` 元素仍然会被高效地复用，因为它们没有添加 `key` attribute。



### 2. v-show

#### 2.1 v-if与v-show的比较

与v-if用法大体相同,不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS property `display`

注意，`v-show` 不支持 `<template>` 元素，也不支持 `v-else`



### 3.v-if与v-show区别

```js
v-if v-else-if v-else
v-show
注意:适用v-if时,DOM节点可能无法获取到;适用v-show一定可以获取DOM节点.

//v-if和v-else 只有在v-if中写入对象属性才正常工作
```

| 条件渲染 |      适用场景      |              特点               |
| :------: | :----------------: | :-----------------------------: |
|   v-if   | 切换频率很低的场景 |     不展示的DOM节点直接删除     |
|  v-show  | 切换频率很高的场景 | 不展示的DOM节点隐藏display:none |



### 4. v-if与v-for一起使用

**不推荐**同时使用 `v-if` 和 `v-for`

当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级





## 列表渲染

> 可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**

> 在 `v-for` 块中，我们可以访问所有父作用域的 property。`v-for` 还支持一个可选的第二个参数，即当前项的索引

> 也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 JavaScript 迭代器的语法



### 1.基本列表

```HTML
动态标签属性需要加冒号,指令语法不需要加冒号

v-for指令:
1.用于展示列表数据
2.语法：v-for="(item/值, index/索引) in arr" :key="item.id"
3.可遍历：数组、对象、字符串

v-for遍历数组:值,索引
<li v-for="(item, index) in arr" :key="item.id">{{item.name}}--{{item.age}}</li>

v-for遍历对象:value,key是对象的value,key  第三个参数为索引
<li v-for="(value, key, index) in object" :key="key">{{value}}</li>   //指令语法解析标签体内容


v-for遍历字符串:值,索引
<li v-for="(data,index) in r" :key="index">{{data}} --- {{index}}</li>
```



在遍历对象时，会按 `Object.keys()` 的结果遍历，但是**不能**保证它的结果在不同的 JavaScript 引擎下都一致



### 2.维护状态(key)

当 Vue 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。

这个默认的模式是高效的，但是**只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` attribute：

```js
<div v-for="item in items" v-bind:key="item.id">
  <!-- 内容 -->
</div>
```



#### 2.1 vue/react中的key作用

```js
经典面试题:
1). react/vue中的key有什么作用？（key的内部原理是什么？）
2). 为什么遍历列表时，key最好不要用index?

1. 虚拟DOM中key的作用：
1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。
2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 
随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
(1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
(2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
根据数据创建新的真实DOM，随后渲染到到页面

2. 用index作为key可能会引发的问题：
1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

2. 如果结构中还包含输入类的DOM：
会产生错误DOM更新 ==> 界面有问题。

3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
仅用于渲染列表用于展示，使用index作为key是没有问题的。

3. 开发中如何选择key?:
1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
2.如果确定只是简单的展示数据，用index也是可以的。
```



#### 2.2 一种安全获取key的方法

```js
//https://juejin.cn/post/6844903823757180941#heading-1

两种不太合适的方案:
1.使用index  //这个列表进行增删的操作，可能会出现渲染错乱的问题
2.使用Math.random()  //把key="Math.random()"直接写在了模板中，导致我们每次渲染，key都会变. 固定下key，从而解决上述问题。但是这种方案的问题是，污染了数据。如果后续我们要把这份儿list存到数据库，我们不得不再过滤掉这些key


data() {
    return {
        // 数据初始化时加上key
        list: [{}, {}, {}].map(item => {
            item.key = Math.random()
            return item
        })
    }
},
methods: {
    // 每次添加项目时，也事先加上key
    addItem2List() {
        this.list.push({
            key: Math.random()
        })
    }
}


```

```html
<template>
    <div>
        <ul>
            <li v-for="item in list" :key="getUID(item)"></li>
        </ul>
    </div>
</template>

<script>
let uid = 0

// WeakMap保证了Map的key可以被及时GC
const Item2UIDMap = new WeakMap()

export default {
    data() {
        return {
            list: [{}, {}, {}]
        }
    },
    methods: {
        getUID(item) {
            const persistedUID = Item2UIDMap.get(item)
            if (!persistedUID) {
                Item2UIDMap.set(item, ++uid)
                return uid
            }
            return persistedUID
        }
    }
}
</script>

//这种也是有问题.ue组件销毁了之后再重新激活, 打印这个weakMap, 之前item的还在weakmap里面
```



### 3.数组更新检测

#### 3.1变更方法

Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

```js
push
pop
shift
unshift
reverse
splice
sort
```



#### 3.2替换数组

变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 `filter()`、`concat()` 和 `slice()`。它们不会变更原始数组，而**总是返回一个新数组**。当使用非变更方法时，可以用新数组替换旧数组：

```js
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
```

Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作

**注意** 由于 JavaScript 的限制，Vue **不能检测**数组和对象的变化



#### 3.3过滤/排序

有时，我们想要显示一个数组经过过滤或排序后的版本，而不实际变更或重置原始数据。在这种情况下，可以创建一个计算属性，来返回过滤或排序后的数组。

在计算属性不适用的情况下 (例如，在嵌套 `v-for` 循环中) 你可以使用一个方法：

### 4. v-for使用值范围

`v-for` 也可以接受整数。在这种情况下，它会把模板重复对应次数

```js
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>

结果: 1,2,3,4,5,6,7,8,9,10
```



### 5. template上使用v-for

类似于 `v-if`，你也可以利用带有 `v-for` 的 `<template>` 来循环渲染一段包含多个元素的内容

```js
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

#### 5.1 不推荐在template上进行列表渲染

```html
//https://blog.csdn.net/weixin_43487782/article/details/108909901
如果试图给<template>绑定key，那么控制台就会报错. <template> cannot be keyed. Place the key on real elements instead.
<template>元素不会出现在最终的渲染结果中。假如给<template>元素绑定key，相当于key值就丢失了，等于没有绑定  
key可以给内部元素绑定吗？答案是可以的，但强烈不推荐。原因是如果内部有很多平级的元素，就得给每个元素都加一个key,而且会报错.
```



### 6. v-for与v-if一同使用

> 注意我们**不**推荐在同一元素上使用 `v-if` 和 `v-for`

当它们处于同一节点，`v-for` 的优先级比 `v-if` 更高，这意味着 `v-if` 将分别重复运行于每个 `v-for` 循环中。当你只想为*部分*项渲染节点时，这种优先级的机制会十分有用

```js
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```

上面的代码将只渲染未完成的 todo。

而如果你的目的是有条件地跳过循环的执行，那么可以将 `v-if` 置于外层元素 (或template) 上

```js
<ul v-if="todos.length">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>
```



### 7.组件上使用v-for

自定义组件上，你可以像在任何普通元素上一样使用 `v-for`

2.2.0+ 的版本里，当在组件上使用 `v-for` 时，`key` 现在是必须的。

```js
<my-component v-for="item in items" :key="item.id"></my-component>
```

然而，任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用 prop：

```js
<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
></my-component>
```

不自动将 `item` 注入到组件里的原因是，这会使得组件与 `v-for` 的运作紧密耦合。明确组件数据的来源能够使组件在其他场合重复使用。





#### 列表过滤

```HTML
在watch中修改源数据,会导致原数据的丢失.这种场景适合使用计算属性
想要对数据加工后再展示且不破坏源数据,最好使用计算属性.

return arrs.filter(arr=>arr.name.indexOf(xxx)!==-1)
```



#### 列表排序 ++

```js
//数组排序
使用计算属性.来返回排序后的数组
 
//要点:
1.这里有一个重要点是,触发点击事件后,给属性赋值的操作.
<button @click='sortType=1'></button> //当点击这个按钮后,data中的sortType的值就会变为1
2.数组的方法sort
数组.sort((a,b)=>{
    return a-b;
})

arr.sort(a,b){
    if(this.sortType===1) return a.age-b.age;
    else return b.age-a.age;
}

//html
<input v-model="keyWord" type="text" placeholder="请输入姓名">
<button @click="sortType=1">年龄升序</button>
<button @click="sortType=2">年龄降序</button>
<button @click="sortType=0">原顺序</button>
<ul>
	<li v-for="(p,index) in fmtPersons" :key="p.id">
        {{p.name}}--{{p.sex}}--{{p.age}}岁
    </li>
</ul>

//vue
<script type="text/javascript">
    new Vue({
    	el:"#root",
    	data:{
            keyWord:'',
            sortType:0,
            persons:[
                {}..
            ]
        },
    	computed:{
            fmtPersons(){
                const {persons, keyWord, sortType}= this;
                //根据输入的keyworld过滤出符合条件的p
                let arr = persons.filter(p=>p.name.indexOf(keyWord)!==-1);
                //若需要排序
                if(sortType){
                    arr.sort((a,b)=>{
                        if(sortType===1) return a.age-b.age;
                        else return b.age-a.age;
                    })
                }
            }
        }
	})
</script>         //0219
```





#### 更新列表 +

```HTML
//文档: https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B
Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括:
push()
pop()
shift()
unshift()
splice()
sort()
reverse()


工具呈现数据却没有变化 数组的监视
数组更新监测,需要使用封装后的方法

Vue数据绑定的原理
1. vue会监视<data>中所有层次对象的属性 //包括数组中的对象的属性
2. 对象中的属性数据通过添加set方法来来实现监视
3. 数组中也实现了监视: 重写数组一系列更新元素的方法，做了两件事：
 1).调用原生对应的方法对数组进行处理
 2).去更新界面

    
    
```



```HTML
//案例
更新奏效的方式:
this.persons[0].name='甲'; //这是更新数组里元素(对象)的属性
this.persons[0].age=17;
this.persons[0].sex='男';

//失败方式
this.persons[0]={name:'甲', age:17, sex:'男'}; 
//这是更改的数组里的元素,也会失去对persons[0]的监视,后续改变也不会显示.
this.persons.push(); //vue做了两件事:调用了原生push,更新了页面.但也只能更新这么一次,后续无法检测
console.log(this.persons[0])
```







#### 收集表单数据+++

```HTML
若:<input type='text'/> 则v-model收集的是value值
若:<input type='radio'/> 则v-model收集的是value值,需要提前配置name属性标识一组
若:<input type='checkbox' v-model='checked'/> :

	1.若没有配置input的value值,那么收集的就是checked(勾选or不勾选,是布尔值)
	2.配置了input的value值:
	2.1 v-model的初始值是非数组,那么收集的就是checked(勾选or不勾选,是布尔值)
    2.2 v-model的初始值是数组, 那么收集的就是value组成的数组
```



```JS
//案例
form表单中收集表单数据可以在data中新建一个对象,使用多个对象.属性的形式在dom中来收集数据
input中type类型为text password radio checkbox 
	- text,password默认收集的就是value的值;
	- radio和checkbox需要添加value值来共v-model来收集
select
	- 可以添加一个value值为空的选项用来默认展示
     //初始化时,v-model的值也为空 v-model获取的是value的值
textarea

用户协议类的可以直接赋值为布尔值,默认是false
```





## 事件处理

### 1.监听事件

可以用 `v-on` 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码

### 2.事件处理方法

许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 `v-on` 指令中是不可行的。因此 `v-on` 还可以接收一个需要调用的方法名称.

```html
<div id='example'>
  <button v-on:click='greet'>
    greet
  </button>
</div>
```

```js
var example = new Vue({
  el:'example',
  data:{name:'vuejs'},
  //methods对象中定义方法
  methods:{
    greet:function(event) {
      //event是原生DOM事件
      alert('hello'+this.name+'!');
      //this指向当前vue实例
      
      if(event) {
        alert(event.target.tagName);
      }
    }
  }
})

//也可以js直接调用方法
exmaple.greet(); //
```



### 3.内联处理器中的方法

除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法

```html
<div id='example2'>
  <button v-on:click='say(hi)'>
    say hi
  </button>
  <button v-on:click='say(what)'>
    say what
  </button>
</div>
```

```js
let example2 = new Vue({
  el:'#example2',
  methods:{
    say:function(msg) {
      alert(msg);
    }
  }
})
```

有时也需要在内联语句处理器中**访问原始的 DOM 事件**。可以用特殊变量 `$event` 把它传入方法

```html
<button v-on:click="warn(form can't be submitted yet',$event)">
  submit
</button>
```

```js
//..
methods:{
  warn:function(msg,event) {
    //可以访问原生的事件对象
    if(event) {
      event.preventDefault();
    }
    alert(msg);
  }
}
```



### 4.事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的

```js
.stop 阻止时间冒泡
.prevent 阻止标签的默认行为
.capture 
.self 只监听自身标签触发的事件
.once 该事件只触发一次
.passive
```



```html
//阻止单击事件继续传播
<a v-on:click.stop='doThis'></a>

//提交事件不再重载页面
<form v-on:submit.prevent='onSubmit'></form>
  
//修饰符可以串联
<a v-on:click.stop.prevent='doThat'></a>

//只有修饰符
<form v-on:submit.prevent></form>
  
<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>

Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符。
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```



**注意**

使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

不像其它只能对原生的 DOM 事件起作用的修饰符，`.once` 修饰符还能被用到自定义的[组件事件](https://cn.vuejs.org/v2/guide/components-custom-events.html)上

不要把 `.passive` 和 `.prevent` 一起使用，因为 `.prevent` 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，`.passive` 会告诉浏览器你*不*想阻止事件的默认行为



### 5.按键修饰符

在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符

你可以直接将 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的任意有效按键名转换为 kebab-case 来作为修饰符。

```html
<input v-on:keyup.page-down='onPageDown'>
```

在上述示例中，处理函数只会在 `$event.key` 等于 `PageDown` 时被调用

#### 5.1 按键码

`keyCode` 的事件用法[已经被废弃了](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)并可能不会被最新的浏览器支持

使用 `keyCode` attribute 也是允许的

```html
<input v-on:keyup.13='submit'>
```

为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：

- `.enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`



#### 5.2 一个标签/组件上绑定多个标签

```js
<baseForm
	@click.capture = 'doThis'
	@click = 'doThat'
/>
  
其他:
1.事件执行顺序  先执行了doThis, 再执行doThat
2.如果子组件是二次封装的UI框架,capture可能会失效,不会执行
```





### 6.系统修饰符

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器

```js
.ctrl
.alt
.shift
.meta
//在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)
```

例如:

```html
<!-- Alt + C -->
<input v-on:keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div v-on:click.ctrl="doSomething">Do something</div>
```



### 7.其他

#### 7.1 Vue如何劫持所有的click事件

```js
//https://www.zhihu.com/question/290066361

1.事件冒泡方案的问题
1.1 事件冒泡可能会被阻止 click.stop
1.2 页面可能存在多个vue实例

2.混入方案
混入会对所有的组件有效,在每个组件渲染完成后把当前实例的context传进要进行捕获click的函数中.
Vue.mixin({
  mounted() {
    this.$nextTick(() => {
      delegateBehavior(this);
    })
  }
})

delegateBehavior(context:any) {
  //在context的$el上添加_uid的赋值
  if (context.$el) {
    context.$el.setAttribute('vueautoreport-uid', context._uid);
  }
  //在root上做标记,不以次数, 可能页面存在多个vue实例
  if (context.$root.$el && !context.$root.$el._isBindDelegate) {
    eventTypes.forEach((eventType) => {
      //root组件绑定捕获事件,处理冒泡阻止的情况
      context.$root.$el.addEventListener(eventType, (e:Event) => {
        this.captureEvent(e, this.captureContexts, eventType);
      }, true);
    })
    context.$root.$el._isBindDelegate = true;
  }
}
```



## 表单输入绑定

###  v-model

v-model可以实现表单元素和数据的双向绑定,本质上是语法糖

v-model在内部为不同的输入元素使用不同的属性并抛出不同的事件

#### 写法

```HTML
  单向数据绑定(v-bind):<input type='text' :value='msg' ><br/><br/>
	双向数据绑定(v-model):<input type='text' v-model:value='msg'>
  双向数据绑定简写(v-model):<input type='text' v-model='msg'> //简写形式   
```



#### 限制

* `<input>`
* `<select>`
* `<textarea>`
* components

#### 实现原理

##### 1.作用在普通表单元素上

动态绑定了 `input` 的 `value` 指向了 `messgae` 变量，并且在触发 `input` 事件的时候去动态把 `message` 设置为目标值

```html
<input v-model="sth" />   
<input v-model:value='sth'> 
//  等同于
<input 
    v-bind:value="message" 
    v-on:input="message=$event.target.value"
>
//$event 指代当前触发的事件对象;
//$event.target 指代当前触发的事件对象的dom;
//$event.target.value 就是当前dom的value值;
//在@input方法中，value => sth;
//在:value中,sth => value;
```

##### 2.作用在组件上

在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件

因此父组件`v-model`语法糖本质上可以修改为 `'<child :value="message" @input="function(e){message = e}"></child>'`

在组件的实现中，我们是可以通过 **v-model属性** 来配置子组件接收的prop名称，以及派发的事件名称。

```vue
//父组件中
<aa-input v-model='aa'></aa-input>
//等价于
<aa-input v-bind:value='aa' v-on:input='aa=$event.target.value'></aa-input>

//子组件中
<input v-bind:value="aa" v-on:input="onmessage"></input>
props:{value: aa,}
methods: {
	onmessage(e) {
		this.$emit('input', e.target.value)
	}
}
```

```html
//以上功能的代码实现:
<div id="root">
   <aa-input txt="txt" v-model="aa"></aa-input>
   //等价于
  <aa-input txt="txt" v-bind:value="aa" v-on:input="aa=$event.target.value">
  </div> 
  <script> 
    Vue.component('aa-input', {
      template: `
        <div>
          <input :value="value" v-on:input="onmessage"></input>  
        </div>
      `,
     props: [
      'txt',
      'value'
    ],
      methods: {
        onmessage(e) {
          this.$emit('input', e.target.value)
        }
      }
    })
    let vm = new Vue({
      el: '#root',
      data: {
        question: '',
        answer: 'I cannot give you an answer until you ask me a question!',
        sex:'男',
        isAgree: false,
        aa: '父组件内容'
      },
      methods: {
        change(e) {
          console.log(e.target.checked)
          e.target.checked = false
        }
      }
    })
  </script>
```



默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event.



##### 缺点和解决

v-model应用到组件上，它会默认把value作为组件的属性，把input作为给组件绑定的事件时的事件名; 但有时候我们不想用value当做默认的属性名和不想input作为给组件绑定的时间时的事件名

解决方法:

在vue2.2版本之后，可以在定义组件时通过model选项方式定制prop/event

```vue
export default {
	model: {
		prop: 'num', //自定义属性名
		event: 'addNum' //自定义事件名
	}
}
```







### 基础用法

用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。

 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

<span style='color:blue;'>`v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 `data` 选项中声明初始值。</span>

v-model 在内部使用不同的属性为不同的输入元素并抛出不同的事件：

- text(input) 和 textarea 元素使用 value 属性和 input 事件；
- checkbox(input)  和 radio(input)  使用 checked 属性和 change 事件；
- select 元素将 value 作为 prop 并将 change 作为事件。



#### 单行文本输入

 v-model 只是 v-bind 和 v-on 的语法糖，当使用文本 input(包括 email，number 等) textarea 时，v-model=”message” 等价于:value=”message” @input=”e => { message = e.target.value}”

```html
<div id="app">
  <input type="text" v-model="message">
  //等同于
  <input type="text" :value="message" @input="message=$event.target.value">
  <p>
    {{message}}
  </p>
</div>


<script>
	let vm = new Vue({
    el: "#app",
    data: {
      message: "hello"
    }
  })
</script>
```





#### 单选按钮

单选按钮在<u>单独使用</u>时，不需要 v-model，直接使用 v-bind 绑定一个布尔类型的值，为真时选中，为否时不选中

```html
<div id="app">
  <label>
    单选按钮
    <input type="radio" :checked="picked">
  </label>
  {{ picked }}
</div>
<script>
	let app = new Vue({
  el: "#app",
  data: {
    picked: true
  }
})
</script>
```

<u>单选按钮的组合使用</u>

使用value+v-model实现组合排斥效果

radio单选按钮属性. name属性用于对提交到服务器后的表单数据进行标识.

name一样时,为单选;name不一样,多选. 若绑定同样的v-model为互斥单选.

```html
<div id='example'>
  <input type='radio' id='one' value='One' v-model='picked'>
  <label for='one'>One</label>
  <br>
  <input type='radio' id='two' value='Two' v-model='picked'>
  //等同于
  <input type="radio" id="two" value="two" :checked="value" @change="value=$event.target.checked"/>
  <label for='two'>Two</label>
  <br>
  <span>Picked:{{picked}}</span>
</div>

<script>
new Vue({
  el:'#example',
  data() {
    return {
      picked:''
    }
  }
})
</script>
```







#### 复选框

##### 单个复选框

单个复选框，使用 v-bind 和 checked 属性模拟：

```html
<div id="root">
  <label for="license">
    <input type="checkbox" v-model="isAgree">
    //等同于
  	<input type="checkbox" id="license" :checked="isAgree" @change="isAgree=!isAgree">同意协议
  </label>
  <h2>
    您选择的是: {{isAgree}}
  </h2>
  <button :disabled="!isAgree">下一步</button>
</div>

<script>
	let vm = new Vue({
    el: "#root",
    name: "rootName",
    data: {
      isAgree: false
    }
  })
</script>
```



##### 多个复选框

多个复选框共享一个数据源(v-model 指定的值)时，经常有这种情况的使用，如购物车、菜单树等，配合 v-model 与 value 一起使用，勾选的值 value 会被绑定到同一个数组，要注意指定该值为数组类型。

```html
<div id="root">
	<!-- CheckBox复选框 -->
	<input type="checkbox" value="basketball" v-model="hobbies">篮球
	<input type="checkbox" value="badminton"  v-model="hobbies">羽毛球
	<input type="checkbox" value="football"   v-model="hobbies">足球
	<input type="checkbox" value="table tennis" v-model="hobbies">乒乓球
  //等同于  ????
  <input type="checkbox" value="table tennis" :checked="" @change="onChange">乒乓球
	<h2>您的爱好：{{hobbies}}</h2>
  </div>
<script>
	let vm = new Vue({
    el: "#root",
    name: "rootName",
    data: {
      hobbies: []
    },
    methods: {
      onChange(e) {
        let targetValue = e.target.value;
        if (this.hobbies.includes(targetValue)) {
          this.hobbies = this.hobbies.filter(item => item !== targetValue)
        } else {
          this.hobbies.push(target.value)
        }
      }
    }
  })
</script>
```





#### 选择框



##### 单选

<iframe height="300" style="width: 100%;" scrolling="no" title="表单输入绑定-select" src="https://codepen.io/westover/embed/WNjdbVz?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/WNjdbVz">
  表单输入绑定-select</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


**注意:** 如果 `v-model` 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

##### 多选

> ???? 存在问题, 出不来多选效果. 先一放.

绑定到一个数组. 元素multiple属性规定可同时选择多个选项.格式是`multiple='multiple'`,也可以简写成multiple.

<iframe height="300" style="width: 100%;" scrolling="no" title="" src="https://codepen.io/westover/embed/poPpJgQ?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/poPpJgQ">
  </a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


##### v-for渲染动态选项

<iframe height="300" style="width: 100%;" scrolling="no" title="表单输入绑定-vfor" src="https://codepen.io/westover/embed/jOmYPMe?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/westover/pen/jOmYPMe">
  表单输入绑定-vfor</a> by xxl (<a href="https://codepen.io/westover">@westover</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


#### 值绑定 ???

对于<span style="color:blue">单选按钮，复选框及选择框</span>的选项，`v-model` 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：

```html
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但是有时我们可能想把值绑定到 Vue 实例的一个动态 property 上，这时可以用 `v-bind` 实现，并且这个 property 的值可以不是字符串。

##### 复选框

> 这里的 `true-value` 和 `false-value` attribute 并不会影响输入控件的 `value` attribute，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(即“yes”或“no”)，请换用单选按钮。

这几部分的文档真是晦涩不明,没有达到百科全书的功效.哎....

```html
<div id="root">
  <input 
         type="checkbox" 
         name="" 
         id="" 
         v-model="toggle" 
         true-value="yes" 
         false-value="no"
         >input值测试
  <h2>toggle: {{toggle}}</h2>
</div>

<script>
  let vm = new Vue({
    el: "#root",
    data: {
      toggle: ''
    },
    methods: {

    }
  });
</script>


```



##### 单选按钮

```html
<input type="radio" v-model="pick" v-bind:value="a">

// 当选中时
vm.pick === vm.a
```



##### 选择框的选项

```html
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>

// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```



#### 3.修饰符

##### lazy

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转为在 `change` 事件_之后_进行同步：

v-model中将不同的输入元素分成了3类,只有一类(text/textarea)使用input事件.

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg">
```



##### number

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符

```html
<input 
	v-model.number="age" 
  type="number"
  v-bind:value="a"  
  //没有显示.  前面讲过,使用v-model时会忽略表单元素value/checked/selected属性的初始值,并总是将实例的数据作为数据来源.
>

<script>
  let vm = new Vue({
    el: "#root",
    data: {
      age:'',
      a: "1111"
    }
  });
</script>
```

因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

##### trim

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符

```html
<input v-model.trim="msg">
```



### 组件上使用v-model

```js
//自定义组件中使用model来定义双向绑定的值，model是个对象，它必须有prop属性和event属性，缺一不可。prop属性表示父亲的v-model=””引号中的那个东西到底是谁。props: []数组中必须“迎接一下这个值”。自定义组件中要改变值，必须使用event中定义的这个方法，如果要通知父亲改变，就$emit()这个函数即可。

//代码实现


vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

动态属性和自定义事件,绑定value,通过v-on触发,从而更新数据.
双向绑定得的实现主要依赖于Object.defineProperty(),通过这个函数可以监听到get,set事件
```























## 组件

### 简介

组件提供了一种抽象，让我们可以使用独立可复用的小组件来构建大型应用，任意类型的应用界面都可以抽象为一个组件树

### 组件快速熟悉

#### 基本示例

组件是可复用的 Vue 实例，所以它们与 `new Vue` 接收相同的选项, 仅有的例外是像 `el` 这样根实例特有的选项。

<iframe src="https://codesandbox.io/embed/vue-components1-l1u9fc?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/components1"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



#### 组件复用

**一个组件的 `data` 选项必须是一个函数**，因此每个实例可以维护一份被返回对象的独立的拷贝

<iframe src="https://codesandbox.io/embed/vue-components1-l1u9fc?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/components1"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

#### 组件的组织

通常一个应用会以一棵嵌套的组件树的形式来组织：

![](https://cn.vuejs.org/images/components.png)

为了能在模板中使用，这些组件必须先注册以便 Vue 能够识别。这里有两种组件的注册类型：**全局注册**和**局部注册**。

全局注册的组件可以用在其被注册之后的任何 (通过 `new Vue`) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。

#### 通过Prop向子组件传递数据

##### 是什么

Prop 是你可以在组件上注册的一些自定义 attribute。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property。

在子组件上用一个 `props` 选项将其包含在该组件可接受的 prop 列表中.

```vue
Vue.component('blog-post', {
	props: ['title'],
	template: '<h3>{{title}}</h3>'
})
```



##### 特点

* 一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。
* 能在组件实例中访问这个值，就像访问 `data` 中的值一样

##### 向子组件传递自定义attribute的 2 种方式

一个 prop 被注册之后，你就可以像这样把数据作为一个自定义 attribute 传递进来

<u>传递静态attribute</u>

```html
<blog-post title="My journey with Vue"></blog-post>
```



<u>使用`v-bind`传递动态prop</u>

无论何时为 `post` 对象添加一个新的 property，它都会自动地在 `<blog-post>` 内可用(响应式)

```html
<blog-post
	v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
></blog-post>

// 其他情况 简化接收一个对象
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
  v-bind:content="post.content"
  v-bind:publishedAt="post.publishedAt"
  v-bind:comments="post.comments"
></blog-post>
//简化
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
></blog-post>
```



#### 单个根元素

当构建一个 `<blog-post>` 组件时, **每个组件必须只有一个根元素**

```html
<div class="blog-post">
  <h3>{{ title }}</h3>
  <div v-html="content"></div>
</div>
```



#### 监听子组件事件

通过监听子组件事件来和父组件进行沟通.

案例: 引入一个辅助功能来放大博文的字号，同时让页面的其它部分保持默认的字号



Vue 实例提供了一个自定义事件的系统:

* 父级组件可以像处理 native DOM 事件一样通过 `v-on` 监听子组件实例的任意事件

* 子组件可以通过调用内建的 [**`$emit`** 方法](https://cn.vuejs.org/v2/api/#vm-emit)并传入事件名称来触发一个事件

<iframe src="https://codesandbox.io/embed/vue-components1-l1u9fc?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/components1"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

##### 使用事件抛出一个值

使用 `$emit` 的第二个参数来提供这个值

子组件中:

```html
<button v-on:click="$emit('enlarge-text', 0.1)">
  Enlarge text
</button>
```

父组件中:

```html
<blog-post
  ...
  v-on:enlarge-text="postFontSize += $event"
></blog-post>
```

或者，如果这个事件处理函数是一个方法, 那么这个值将会作为第一个参数传入这个方法:

```html
<blog-post
  ...
  v-on:enlarge-text="onEnlargeText"
></blog-post>

methods: {
  onEnlargeText: function (enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
}
```



##### 在组件上使用v-model

自定义事件也可以用于创建支持 `v-model` 的自定义输入组件

```html
<input v-model="searchText">
```

等价于:

```html
<input
	v-bind:value="searchText"
  v-on:input="searchText=$event.target.value"
>
```

当用在组件上时，`v-model` 则会这样：

```html
<custom-input
	v-bind:value="searchText"
  v-on:input="searchText=$event"              
></custom-input>
```

为了让它正常工作，这个组件内的 `<input>` 必须

- 将其 `value` attribute 绑定到一个名叫 `value` 的 prop 上
- 在其 `input` 事件被触发时，将新的值通过自定义的 `input` 事件抛出

写成代码之后是这样的：

```javascript
Vue.component('custom-input', {
  props: ['value'],
  template: `
  	<input
  		v-bind:value="value"
  		v-on:input="$emit('input', $event.target.value)"
  	>  
  `
})
```





#### 通过插槽分发内容



#### 动态组件



#### 解析DOM模板注意事项





### 组件名称

#### 组件名定义方式

定义组件名称有两种方式:

##### kebab-case((短横线分隔命名)

```js
Vue.component('my-component-name', { /* ... */ })
```

当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 `<my-component-name>`

##### 使用PascalCase(首字母大写命名)

"当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时<span style="color:blue">两种命名法都可以使用</span>。也就是说 `<my-component-name>` 和 `<MyComponentName>` 都是可接受的. 注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。



### 组件注册

#### 全局注册

##### 注册及使用

1. 利用`Vue.component()`方法,传入自定义组件名称,然后传入组件的配置
2. 在Vue实例挂载的DOM元素上使用它,以 *标签* 形式使用组件.

**全局注册**

它们在注册之后可以用在任何新创建的 Vue 根实例 (`new Vue`) 的模板中

##### 案例

```html

<div id="app">
  <component-a></component-a>
  <component-b></component-b>
  <component-c></component-c>
</div>

<script>
	Vue.component('component-a', { /* ... */ }) //定义一个名为component-a的新组件
	Vue.component('component-b', { /* ... */ })
	Vue.component('component-c', { /* ... */ })

	new Vue({ el: '#app' })
</script>
```

##### 总结

* 创建全局组件时，应该使用Vue对象的component方法，这个方法接收<span style="color:blue">两个参数</span>。第一个字符串：表示组件名称， 第二个为一个对象：表示组件内容
* 组件要<span style="color:blue">渲染的内容</span>应该写在template选项中，作为其值进行处理
* 注册时，<span style="color:blue">推荐组件名称</span>为【小写加分隔符链接的形式】，类似于css属性名的写法
* 组件全局注册后，在任何vue实例中都可以使用，但前提是相关vue实例应该在注册后在声明; 在所有子组件中也是如此，也就是说<span style="color:blue">这三个组件*在各自内部*也都可以相互使用</span>。
* 组件在使用时，应该以标签形式调用

##### 组件内容的其他选项

<u>组件中的data必须是函数</u>

> 与创建Vue实例不同,data属性必须是一个函数. 解决对象共享数据的问题(组件中多处引入会共享/操作同一个对象)

<u>HTML</u>限制

在某些时候，vue组件会受到html的限制，比如table内就只能写行列，select内只能写option等，这个时候组件直接写进去就会无效，此时我们就可以使用<span style="color:blue">is属性</span>来实现

![](https://img-blog.csdnimg.cn/20190408200155622.png)

自定义组件 被认为是无效的内容，因此在渲染的时候会导致错误。这时应使用特殊的 is 属性：

![](https://img-blog.csdnimg.cn/20190408200335372.png)

标准HTML中，一些元素中只能放置特定的子元素，另一些元素只能存在于特定的父元素中。比如table中不能放置div，tr的父元素不能div等。所以，**当使用自定义标签时，标签名还是那些标签的名字，但是可以在标签的is属性中填写自定义组件的名字**

<u>在非单文件组件时的项目文件的开发调用</u>

1. index.html单独一个文件
2. 每个组件一个js文件
3. 实例化vue对象一个文件
4. 然后在js文件里面调用，各个js文件，创建vue实例的那个js应该放在最后面调用

![](https://img-blog.csdnimg.cn/20190408201200556.png)



##### 全局组件的进阶

<u>组件复用的基本体现</u>

定义后的组件可以通过标签多次调用

```html

<div id="app">
    <my-component></my-component><!-- 以标签形式使用组件 -->
    <my-component></my-component><!-- 以标签形式使用组件 -->
    <my-component></my-component><!-- 以标签形式使用组件 -->
    <my-component></my-component><!-- 以标签形式使用组件 -->
</div>
<script>
    // 定义一个名为 my-component 的新组件
    Vue.component('my-component', {
        //组件内容写这里
        template: "<div>这是一个全局组件</div>",
    })
    //声明一个vue实例
    var vueApp = new Vue({
        el: '#app',
    })
</script>
```

<u>组件的template选项</u>

注意：组件中的template只能有一个根元素。

```html
<div id="app">	<!-- 在第一个vue实例中调用全局组件 -->
    <my-component></my-component><!-- 以标签形式使用组件 -->
</div>
<div id="app1">	<!-- 在第二个vue实例中调用全局组件 -->
    <my-component></my-component><!-- 以标签形式使用组件 -->
</div>
<script>
    // 定义一个名为 my-component 的新组件
    Vue.component('my-component', {
        //组件内容写这里
        template: "<div>这是一个全局组件</div>",
    })
    //声明一个vue实例
    var vueApp = new Vue({
        el: '#app',
    });
    var vueApp = new Vue({
        el: '#app1',
    });
</script>
```

<u>声明在前面的全局组件可以直接使用声明在后面的全局组件</u>

```html
<div id="app">
    <component-1></component-1><!-- 以标签形式使用组件 -->
</div>
<script>
    Vue.component('component-1', {
        template: `<div>这是第一个组件
                   <component-2></component-2>
                   <component-3></component-3>
                   </div>`,
    });
    Vue.component('component-2', {
        template: "<div>这是第二个组件</div>",
    });
    Vue.component('component-3', {
        template: "<div>这是第三个组件</div>",
    });
    //声明一个vue实例
    var vueApp = new Vue({
        el: '#app',
    });
</script>
```



#### 局部注册

##### 背景

全局注册往往是不够理想的。比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用这个组件了，它仍然会被包含在你最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。

##### 2种引入方式

**定义**

Vue实例中有个选项components可以注册局部组件，注册后就只在该实例作用域下有效

**引入**

* 通过一个普通的 JavaScript 对象来定义组件
* 使用`import`函数返回`Promise`

```js
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }

new Vue({
  el:"#app",
  components: {
    'component-a':ComponentA,
    'component-b':ComponentB,
    'component-d': () => import('./components/componentD')
  }
})
```

对于 `components` 对象中的每个 property 来说，其 property 名就是自定义元素的名字，其 property 值就是这个组件的选项对象。注意<span style="color:blue">**局部注册的组件在其子组件中不可用**</span>

##### 使用形式

<u>组件中嵌套</u>

```html
<div id="app">
    <my-component></my-component>	
</div>
<script>
    var vueApp = new Vue({
        el: '#app',
        components: {
            'my-component': {
            	//调用该局部组件下的局部组件<next-component>
                template: '<div>{{message}}<next-component></next-component></div>',
                data: function () {
                    return {
                        message: '这是一个局部组件',
                    }
                },
                components:{
                    'next-component':{
                        template:'<div>这是局部组件下的局部组件</div>'
                    }
                }
            }
        }
    });
</script>
```



<u>在组件中定义子组件时,可以使用外部定义对象作为组件内容</u>

```html
div id="app">
    <my-component></my-component>
</div>
<script>
    var obj1 = {
        template:`<div>我是第一个子div</div>`
    }
    var obj2 = {
        template:`<div>我是第二个子div</div>`
    }
    Vue.component('my-component',{
        template:`<div>
                    <sub1></sub1>
                    <sub2></sub2>
                  </div>`,
        components: {
            sub1:obj1,
            sub2:obj2
        }
    })
    var vueApp = new Vue({
        el: '#app',
    });
</script>
```



##### 在模板中使用

<u>组件调用时可以直接使用单标签形式</u>

当用单标签多次调用同一组件，只会产生组件一次

```html
<div id="app">
<person-message></person-message>
<person-message/>
</div>
```



#### 模块系统

如果你通过 `import`/`require` 使用一个模块系统，那么我们会为你提供一些特殊的使用说明和注意事项。

##### 在模块系统中局部注册

使用了诸如 Babel 和 webpack 的模块系统。在这些情况下，我们推荐创建一个 `components` 目录，并将每个组件放置在其各自的文件中。然后你需要在局部注册之前导入每个你想使用的组件。

```js
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
  // ...
}

//在 ComponentA 和 ComponentC 都可以在 ComponentB 的模板中使用了。
```





##### 基础组件的自动化全局注册

**背景**

某些组件是相对通用的,有时候会把它们称为[基础组件](https://cn.vuejs.org/v2/style-guide/#基础组件名-强烈推荐)，它们会在各个组件中被频繁的用到。所以会导致很多组件里都会有一个包含基础<span style="color:blue">组件的长列表</span>

如果你恰好使用了 webpack (或在内部使用了 webpack 的 [Vue CLI 3+](https://github.com/vuejs/vue-cli))，那么就可以使用 `require.context` 只在<span style="color:blue">全局注册通用的基础组件</span>。

**案例**

应用入口文件 (比如 `src/main.js`) 中全局导入基础组件的示例代码：

```js
import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context(
	//其组件目录的相对路径
  './compoennts',
  //是否查询其子目录
  false,
  //匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  //获取组件配置
  const componentConfig = requirecomponent(fileName);
  
  //获取组件的PascalCase命名
  const componentName = upperFirst(
  camelCase(
  	//获取和目录深度无关的文件名
    fileName
    	.split('/')
    	.pop()
    	.replace(/\.\w+$/, '')
  ))
})

// 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})


//项目示例
https://github.com/bencodezen/vue-enterprise-boilerplate/blob/main/src/components/_globals.js
```

**全局注册的行为必须在根 Vue 实例 (通过 `new Vue`) 创建之前发生**





### Prop

#### 基本使用

> 详见 组件-->基本使用-->prop



#### Prop的大小写(camelCase vs kebab-case)

HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。

这意味着当你使用 DOM 中的模板时，**camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名**

如果你使用字符串模板，那么这个限制就不存在了。

```js
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
```

```html
<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```



#### Prop类型

##### 数组字符串形式

```js
props:['title', 'likes', 'author', 'callback']
```



##### 对象形式

property的名称和**值**分别是prop各自的名称和**类型**:

```js
props: {
  title:String,
  likes: Number,
  author: Object,
  callback: Function,
  contactsPromise: Promise //or any other constructor
}
```



#### 传递静态/动态Prop

*任何*类型的值都可以传给一个 prop

给prop传递静态的值

```js
<blog-post title="My journey with Vue"></blog-post>
```

给prop传递动态的值

```html
<!-- 动态赋予一个变量的值 -->
<blog-post v-bind:title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post
  v-bind:title="post.title + ' by ' + post.author.name"
></blog-post>
```





#### prop数据流

所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：

* 父级 prop 的更新会向下流动到子组件中，但是反过来则不行。
* 这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

**每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值**。这意味着<span style="color:blue;">**你不应该在一个子组件内部改变 prop**</span>。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

**两种变更prop的情形**(prop为原始值)

1.用prop来传递一个初始值;这个子组件希望其作为<span style="text-decoration:underline blue">本地的prop数据</span>来使用.

```js
props:['initialCounter'],
data:function() {
  return {
    counter: this.initialCounter
  }
}
```

2.prop以原始的值传入并且需要进行转换. 这种情况下,最好使<span style="text-decoration:underline blue">用prop值来定义一个计算属性</span>

```js
props:['size'],
computed: {
  normalizedSize: function() {
    return this.size.trim().toLocalLowerCase();
  }
}
```

**注意**: 在 JavaScript 中**对象和数组是通过引用传入**的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身**将会**影响到父组件的状态。



#### Prop验证

##### 获取prop的时机

prop 会在一个组件实例创建**之前**进行验证，所以实例的 property (如 `data`、`computed` 等) 在 `default` 或 `validator` 函数中是不可用的

在beforeCreate中获取不到prop中的值,在created中可以获取到prop中的值.

##### 验证案例

可以为组件的 prop 指定验证要求，例如你知道的这些类型。如果有一个需求没有被满足，则 Vue 会在浏览器控制台中警告你。

为了定制 prop 的验证方式，你可以为 `props` 中的值提供一个带有验证需求的对象.

type表示用来验证数据的类型

default表示如果父组件没有向子组件传参，则使用默认值

默认项和required不能同时声明

如果prop是对象类型, 默认值应该是一个返回对应类型的函数`() =>({}) () => []`

```js

Vue.component('my-component', {
  props: {
    //基础的类型检查(null,undefined会通过任何类型检查)
    propA: Number,
    
    //多个可能的类型
    propB: [String, Number],
    
    //必填的字符串
    propC: {
      type: String,
      required: true
    },
    
    //带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    
    //带有默认值的对象
    propE: {
      type: Object,
      default: function() {
        return {message: 'hello'}
      }
    },
    
    
    //自定义验证函数
    propF: {
      validator: function(vlaue) {
        //这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1;
      }
    }
  }
})
```

当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。



##### 类型检查 type的值

<u>原生构造函数</u>

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`

<u>一个自定义的构造函数，并且通过 `instanceof` 来进行检查确认。</u> ????

例如，给定下列现成的构造函数：来验证 `author` prop 的值是否是通过 `new Person` 创建的。

```js
function Person(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName
}

Vue.component('blog-post', {
  props: {
    author: Person
  }
})
```



#### 非prop的attribute

一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 prop 定义的 attribute

因为显式定义的 prop 适用于向一个子组件传入信息，然而组件库的作者并不总能预见组件会被用于怎样的场景。这也是为什么组件可以接受任意的 attribute，而<span style="color:blue">这些非prop的 attribute 会被添加到这个组件的根元素上</span>。

```html
<!-- data-date-picker="activated" attribute 就会自动添加到 <bootstrap-date-input> 的根元素上。 -->

<bootstrap-date-input data-date-picker="activated"></bootstrap-date-input>
```



##### 替换/合并已有的attribute

* 对于绝大多数 attribute 来说，从外部提供给组件的值会替换掉组件内部设置好的值
* `class` 和 `style` attribute 不会覆盖而是合并

例如: 组件`<bootstrap-date-input>`的模板如下:

```html
<input type="date" class="form-control">
```

在组件标签上绑定的attribute有:

```html
<bootstrap-data-input
	data-date-picker="activated"
  class="date-picker-theme-dark"
></bootstrap-data-input>
```

两个class会合并,得到最终的值`form-control date-picker-theme-dark`



##### 禁用attribute继承

如果你**不**希望组件的根元素继承 attribute，你可以在组件的选项中设置 `inheritAttrs: false`

```js
Vue.component('my-component', {
  inheritAttrs: false
})
```

这尤其适合配合实例的 `$attrs` property 使用，该 property 包含了传递给一个组件的 attribute 名和 attribute 值，

有了 `inheritAttrs: false` 和 `$attrs`，你就可以手动决定这些 attribute 会被赋予哪个元素。在撰写[基础组件](https://cn.vuejs.org/v2/style-guide/#基础组件名-强烈推荐)的时候是常会用到的：

```js
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
		<label>
			{{label}}
			<input
				v-bind="$attrs"
				v-bind:value="value"
				v-on:input="$emit('input', $event.target.value)"
		</label>
	`
})
```

**注意**:  `inheritAttrs: false` 选项**不会**影响 `style` 和 `class` 的绑定。

这个模式允许你在使用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是真正的根元素：

```html
<base-input
	label='Username'
	v-model='username'
	required
  placeholder='Enter your name'
></base-input>
```



### 组件使用基本流程

#### 定义组件 ?



#### 注册组件

> 所有的组件定以后,必须注册后才能使用. 注册分为全局,局部.



##### 全局注册

Vue.component('组件名', 组件)    

##### 局部注册

在vm中添加components属性 components:{组件名:组件}

#### 写组件标签

​    




### 动态组件

#### 背景

在不同组件之间进行动态切换是非常有用的，比如在一个多标签的界面里

#### 语法

通过Vue 的 `<component>` 元素加一个特殊的 `is` attribute 来实现

```html
<component v-bind:is="currentTabComponent"></component>
```

##### 属性值类型

* 已注册组件的名字
* 一个组件的选项对象

##### 属性的处理

> 请留意，这个 attribute 可以用于常规 HTML 元素，但这些元素将被视为组件，这意味着所有的 attribute **都会作为 DOM attribute 被绑定**。对于像 `value` 这样的 property，若想让其如预期般工作，你需要使用 [`.prop` 修饰器](https://cn.vuejs.org/v2/api/#v-bind)。

##### DOM property 与 attribute的差别  !!!!

> [API — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/api/#v-bind)
>
> [javascript - What is the difference between properties and attributes in HTML? - Stack Overflow](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html#answer-6004028)

###### property vs. attribute

当你写HTML时,可以在HTML元素上定义*attributes*; 

当浏览器解析代码,相关DOM节点将会被创建.这个节点是一个对象,它有*properties*.

对于一个DOM节点对象,*properties*是这个对象的属性, *attributes*是对象的`attributes`属性的元素.

当为一个给定HTML元素创建DOM节点时,很多它的*properties*都与有同样或相似名字的*attributes*相关,但不是一对一的关系.例如:

```html
<input id="the-input" type="text" value="Name:">
```

相关DOM节点有`id`, `type`, `value`属性(包括其他)

* The `id` property is a *reflected property* for the `id` attribute: Getting the property reads the attribute value, and setting the property writes the attribute value. `id` is a *pure* reflected property, it doesn't modify or limit the value.
* The `type` property is a *reflected property* for the `type` attribute: Getting the property reads the attribute value, and setting the property writes the attribute value. `type` isn't a pure reflected property because it's limited to *known values* (e.g., the valid types of an input). If you had `<input type="foo">`, then `theInput.getAttribute("type")` gives you `"foo"` but `theInput.type` gives you `"text"`.
* In contrast, the `value` property doesn't reflect the `value` attribute. Instead, it's the *current value* of the input. When the user manually changes the value of the input box, the `value` property will reflect this change. So if the user inputs `"John"` into the input box, then:

```javascript
theInput.value //returns 'John'
```

whereas:

```javascript
theInput.getAttribute('value') //returns 'Name:'
```

The <span style="color:blue">`value` property </span>reflects the **current** text-context inside the input box, whereas the <span style="color:blue">`value` attribute</span> contains the **initial** text-context of the `value` attribute from the HTML source code.

<span style="color:blue">你想知道现在文本框内的值, 读取*property*; 如果你想知道文本框的初始值, 读取*attribute*.</span>

你可以使用*defaultValue* 属性,是*value* attribute的纯粹反映.

```javascript
//如何获取节点在vue中(ref; id/class)
//或者直接使用事件对象 e.target.defaultValue e.target.getAttribute('value') e.target.value

theInput.value //returns 'John'
theInput.getAttribute('value') // returns 'Name:'
theInput.defaultValue  //returns 'Name:'
```







#### 两种示例

<u>已注册组件的名字</u>

```html
<div id="root">
  <button
  	v-for="tab in tabs"
    v-bind:key="tab"
    v-on:click="currentTab=tab"
  >
    {{tab}}
  </button>
  
  <component v-bind:is="currentTabComponents"></component>
</div>

<script>
	Vue.component('tab-home', {
    template: '<div>Home components</div>'
  })
  Vue.component("tab-posts", {
    template: "<div>Posts component</div>"
  });
  Vue.component("tab-archive", {
    template: "<div>Archive component</div>"
  });
  
  new Vue({
    el: '#root',
    data: {
      currentTab: 'Home',
      tabs:['Home', 'Posts', 'Archive'],
    },
    computed: {
      currentTabComponent: function() {
        return 'tab-'+this.currentTab.toLowerCase()
      }
    }
  })
</script>
```





<u>一个组件的选项对象</u>

```html
<div id="root">
  <button
  	v-for="tab in tabs"
    v-bind:key="tab.name"
    v-on:click="currentTab=tab"
  >
    {{tab}}
  </button>
  <component v-bind:is="currentTab.component"></component>
</div>

<script>
	let tabs = [
    {
     name: 'Home', 
     components: {
      template:'<div>Home component</div>'
    	}
    },
    {
      name:'Posts',
      components: {
        template:'<div>Posts component</div>'
      }
    },
    {
      name:'Archive',
      components: {
        template:'<div>Archive component</div>d'
      }
    }
  ];
  
  new Vue({
    el:'#root',
 		data: {
      tabs,
      currentTab: tabs[0]
    }
  })

</script>
```





#### keep-alive

##### 背景

当在这些组件之间切换的时候，你有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题。更希望那些标签的组件实例能够被在它们第一次被创建的时候缓存下来。为了解决这个问题，我们可以用一个 `<keep-alive>` 元素将其动态组件包裹起来

```html
//失活组件将会被缓存

<keep-alive>
	<component v-bind:is="currentTabComponent"></component>
</keep-alive>
```



**注意事项** 注意这个 `<keep-alive>` 要求被切换到的组件都有自己的名字，不论是通过组件的 `name` 选项还是局部/全局注册。

##### 实例

[这个示例](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-keep-alive-with-dynamic-components)

<iframe src="https://codesandbox.io/embed/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-keep-alive-with-dynamic-components?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-20-keep-alive-with-dynamic-components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



### 异步组件

在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了简化，Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。例如

```js
Vue.component('async-example', function(resolve, reject) {
  setTimeout(function() {
    //向resolve回调传递组件定义
    resolve({
      template: '<div>i am aysnc'</div>'
    })
  },1000)
})
```

#### 具体用法

##### 异步组件和 [webpack 的 code-splitting 功能](https://webpack.js.org/guides/code-splitting/)一起配合使用

```javascript
Vue.component('async-webpack-example', function (resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./my-async-component'], resolve)
})
```

##### 在工厂函数中返回一个 `Promise`

```javascript
Vue.component(
  'async-webpack-example',
  // 这个动态导入会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)
```



#### 实例



#### 特点

* 可以实现组件的按需加载,性能优化,提高页面加载速度
* '路由懒加载'就是使用异步组件的原理



#### 处理加载状态????



### 访问元素&组件

#### 背景

> 在绝大多数情况下，我们最好不要触达另一个组件实例内部或手动操作 DOM 元素。不过也确实在一些情况下做这些事情是合适的。

#### 访问根实例

> 在每个 `new Vue` 实例的子组件中，其根实例可以通过 `$root` property 进行访问
>
> 所有的子组件都可以将这个实例作为一个全局 store 来访问或使用。

```javascript
//Vue根实例
new Vue({
  data: {
    foo: 1
  },
  computed: {
    bar: function () { /* ... */ }
  },
  methods: {
    baz: function () { /* ... */ }
  }
})

//子组件中
 //获取根组件数据
this.$root.foo

 //写入根组件的数据
this.$root.foo = 2

 //访问根组件的计算属性
this.$root.bar

 //调用根组件的方法
this.$root.baz()
```

#### 最佳实践

> 在demo或少量组件的应用使用. 中大型应用推荐使用vuex



### 访问子级组件实例

#### 背景

在 JavaScript 里直接访问一个子组件, 而不是间接通过`prop` 和 `事件`

#### ref

##### 定义及调用

> 通过`ref`这个attribute为**子组件或元素**赋予一个自定义ID引用, 使用`this.$refs.ID`来访问这个子组件



##### 使用场景

* ref加在普通元素上,`this.$refs.name`获取的是dom元素
* ref加在子组件上, 获取的组件实例
* 当v-for用于元素或组件,ref获取的将是一组数组或dom节点



##### 实例

<u>从父级组件自动聚焦到子组件的输入框</u>

<iframe src="https://codesandbox.io/embed/vue-ref-40woi2?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/ref"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



<u>`ref`与`v-for`一起使用</u>

当 `ref` 和 `v-for` 一起使用的时候，你得到的 ref 将会是一个包含了对应数据源的这些子组件的数组或dom节点数组. 这里的ref的值是固定值,所以`this.$refs.ID`获得是一个数组.

同样,如果存在多个`v-for`循环,并且绑定在上面的`ref`的值相同,那么

<iframe src="https://codesandbox.io/embed/boring-panna-3usu2q?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="boring-panna-3usu2q"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



##### 注意事项

* `$refs` 只会在组件渲染完成之后生效，并且它们不是响应式的。其本身是作为渲染结果被创建的,在初始渲染的时候不能访问它们,还不存在.
* 避免在模板或计算属性中访问 `$refs`, 因为不是响应式的





### 访问父级组件实例

#### $parent

> 用来从一个子组件访问父组件的实例。替代将数据以 prop 的方式传入子组件的方式。



#### 使用场景

需要特别地共享一些组件库,例如 Google 地图组件. `<google-map>` 组件可以定义一个 `map` property，所有的子组件都需要访问它

```html
<google-map>
  <google-map-markers v-bind:places="iceCreamShops"></google-map-markers>
</google-map>
```

<iframe src="https://codesandbox.io/embed/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-accessing-parent-component-instance?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-20-accessing-parent-component-instance"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



#### 存在问题

组件层级变化,导致`this.$parent`访问的不是原来的组件.例如: 添加一个新的 `<google-map-region>` 组件

```html
<google-map>
  <google-map-region v-bind:shape="cityBoundaries">
    <google-map-markers v-bind:places="iceCreamShops"></google-map-markers>
  </google-map-region>
</google-map>
```

紧接着的处理方法:

```javascript
var map = this.$parent.map || this.$parent.$parent.map
```



#### 最佳实践-依赖注入



### 依赖注入 ???

#### 背景

子组件访问父组件实例使用`$parent`, 但是组件层级发生变化的话(例如之间插入一个新的组件,改变原先的父子关系),`$parent`取到的实例不会是原先的那个组件实例.

#### provide

`provide` 选项允许我们指定我们想要**提供**给后代组件的数据/方法

```javascript
provide: function() {
  return {
    getMap: this.getMap
  }
}
```



#### inject

在任何后代组件中,都可以使用`inject`选项来接收指定的想要添加在这个实例上的 property

```javascript
inject: ['getMap']
```

**示例**

<iframe src="https://codesandbox.io/embed/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-dependency-injection?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vuejs/vuejs.org"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



#### 存在的问题

* 它将你应用程序中的组件与它们当前的组织方式耦合起来，使重构变得更加困难。
* 所提供的 property 是非响应式的



#### 实例

##### 使用provide与inject实现响应式数据更改

传递一个响应式对象

<iframe src="https://codesandbox.io/embed/immutable-bash-ez3q1w?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="immutable-bash-ez3q1w"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



### 实例事件监听器???

#### 背景

Vue实例在事件接口中提供了如下方法:

除了`$emit(eventName, [...args])`触发一个事件,参数传给监听器回调外, 事件监听器有:

* 通过`$on(eventName, eventHandler)`侦听一个事件
* 通过`$once(eventName, eventHandler)`一次性侦听一个事件
* 通过`$off(eventName, eventHandler)`停止侦听一个事件

#### 使用场景

需要在一个组件实例上手动侦听事件时

#### 案例

将一个日期选择器附加到输入框上,同时在组件被销毁之前,也销毁这个日期选择器

```javascript
// 一次性将这个日期选择器附加到一个输入框上
// 它会被挂载到 DOM 上。
mounted: function () {
  // Pikaday 是一个第三方日期选择器的库
  this.picker = new Pikaday({
    field: this.$refs.input,
    format: 'YYYY-MM-DD'
  })
},
// 在组件被销毁之前，
// 也销毁这个日期选择器。
beforeDestroy: function () {
  this.picker.destroy()
}
```



#### 存在问题???

> 表述晦涩,较难理解

- 它需要在这个组件实例中保存这个 `picker`，如果可以的话最好只有生命周期钩子可以访问到它。这并不算严重的问题，但是它可以被视为杂物。
- 我们的建立代码独立于我们的清理代码，这使得我们比较难于程序化地清理我们建立的所有东西。



#### 解决,程序化的侦听器

```javascript
mounted: function () {
  var picker = new Pikaday({
    field: this.$refs.input,
    format: 'YYYY-MM-DD'
  })

  this.$once('hook:beforeDestroy', function () {
    picker.destroy()
  })
}
```

使用了这个策略，我甚至可以让多个输入框元素同时使用不同的 Pikaday，每个新的实例都程序化地在后期清理它自己：

```javascript
mounted: function () {
  this.attachDatepicker('startDateInput')
  this.attachDatepicker('endDateInput')
},
methods: {
  attachDatepicker: function (refName) {
    var picker = new Pikaday({
      field: this.$refs[refName],
      format: 'YYYY-MM-DD'
    })

    this.$once('hook:beforeDestroy', function () {
      picker.destroy()
    })
  }
}
```



<iframe src="https://codesandbox.io/embed/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-programmatic-event-listeners?autoresize=1&fontsize=12&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-20-programmatic-event-listeners"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



### 组件循环引用 (未完成)????

#### 递归组件

> 组件是可以在它们自己的模板中调用自身的。不过它们只能通过 `name` 选项来做这件事



##### how

如何获取组件name值?

* 显示声明的name值
* Vue.component全局注册的一个组件,全局ID自动设置为组件的name



##### 潜在问题

递归组件可能导致无限循环

```javascript
name: 'stack-overflow'
template: '<div><stack-overflow></stack-overflow></div>'
```

类似上述的组件将会导致“max stack size exceeded”错误，所以请确保递归调用是条件性的 (例如使用一个最终会得到 `false` 的 `v-if`)。





#### 组件之间的循环引用????



### 模板定义的替代品(未完成)

#### 内联模板

> 当 `inline-template` 这个特殊的 attribute 出现在一个子组件上时，这个组件将会使用其里面的内容作为模板，而不是将其作为被分发的内容。这使得模板的撰写工作更加灵活。





#### X-Template



### 组件控制更新

#### 强制更新

> 如果你发现你自己需要在 Vue 中做一次强制更新，99.9% 的情况，是你在某个地方做错了事。
>
> 可能还没有留意到[数组](https://cn.vuejs.org/v2/guide/list.html#注意事项)或[对象](https://cn.vuejs.org/v2/guide/list.html#对象变更检测注意事项)的变更检测注意事项，或者你可能依赖了一个未被 Vue 的响应式系统追踪的状态。
>
> 通过 [`$forceUpdate`](https://cn.vuejs.org/v2/api/#vm-forceUpdate) 来做这件事。





#### `v-once`创建低开销静态组件

> 组件包含了**大量**静态内容。在这种情况下，你可以在根元素上添加 `v-once` attribute 以确保这些内容只计算一次然后缓存起来

```vue
Vue.component('terms-of-service', {
  template: `
    <div v-once>
      <h1>Terms of Service</h1>
      ... a lot of static content ...
    </div>
  `
})
```





### 7. 父子组件

#### 7.1 父组件触发子组件每次都需要重新渲染

```html
//需要动态触发的组件，添加一个key，key值为时间毫秒，类似于js防止缓存的后缀
<template>
	<div :key='(new Date()).getTime()'>
    /...
  </div>
</template>
```



#### 7.2  子组件修改父组件值的方法

```markdown
vue中父组件向子组件传值时，其父子prop之间形成单向下行绑定，反过来则不行，这样可以防止子组件意外改变父组件的值，怕子组件污染父组件，造成不可控； 此外，每次父组件的数据发生更新时，子组件的值都会更新到最新的数据，但不能直接在子组件内部改变prop（父组件传过来的值），否则浏览器就会发出警告
```

需要在子组件修改父组件值的需求，这里介绍三种方法实现：

#### 7.2.1 自定义事件

通过$emit派发一个自定义事件,父组件收到后,由父组件进行更改

#### 7.2.2  引用类型直接更改

只要prop是对象或者数组(引用类型)，在子组件里面就可以修改从而改变父组件的值

#### 7.2.3 vuex

虽然有两种方法可以实现子组件修改父组件值，但是官方是不推荐在子组件内修改通过prop传入的父组件的值，推荐使用[vuex](https://vuex.vuejs.org/zh/guide/)











## 可复用性&组合

### 混入

#### 是什么

> 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。



#### 使用

```javascript
// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // => "hello from mixin!"
```





### 自定义指令

#### 背景

在 Vue2.0 中，代码复用和抽象的主要形式是组件。有的情况下，你仍然需要<span style="color:blue">对普通 DOM 元素进行底层操作</span>，这时候就会用到自定义指令。

#### 分类

指令分为**全局指令**和**局部指令**

#### 全局指令

##### 语法

```javascript
Vue.directive(id, [denfinition])
```

##### 参数

* id  `{string}`
* [denfinition] `{Function | Object}`

##### 用法

注册或获取全局指令

```javascript
//注册
Vue.directive('my-directive', {
  bind: function() {},
  inserted: function() {},
  update: function() {},
  componentUpdated: function() {},
  unbind: function() {}
})

// 注册 (指令函数)
Vue.directive('my-directive', function () {
  // 这里将会被 `bind` 和 `update` 调用   ???why
})

// getter，返回已注册的指令
var myDirective = Vue.directive('my-directive')
```







#### 局部指令

##### 语法

组件中也接受一个 `directives` 的选项

```javascript
directives: {
  
}
```



#### 钩子函数

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

* `bind`: 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
* `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
* `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
* `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
* `unbind`：只调用一次，指令与元素解绑时调用。



#### 钩子函数参数

- `el`：指令所绑定的元素，可以用来直接操作 DOM。
- `binding`: 一个对象，包含以下 property：
  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- `vnode`：Vue 编译生成的虚拟节点。移步 [VNode API](https://cn.vuejs.org/v2/api/#VNode-接口) 来了解更多详情。
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用

除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 [`dataset`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset) 来进行。

#### 注意事项

* 自定义指令中,不能直接使用this
* 自定义指令中的update和componentUpdated相当于钩子函数中的mounted和updated. 其他项也类似



**案例**

<iframe src="https://codesandbox.io/embed/vue-directive-fipq1q?fontsize=11&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/directive"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>




#### 实例

##### 禁止使用大写字母

<iframe src="https://codesandbox.io/embed/vue-directive-fipq1q?fontsize=12&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/directive"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>




##### 复制黏贴指令v-copy

> [Michael-lzg/v-directives: vue自定义指令集合 (github.com)](https://github.com/Michael-lzg/v-directives)

思路：

1. 动态创建 textarea 标签，并设置 readOnly 属性及移出可视区域
2. 将要 copy 的值赋给 textarea 标签的 value 属性，并插入到 body
3. 选中值 textarea 并复制
4. 将 body 中插入的 textarea 移除
5. 在第一次调用时绑定事件，在解绑时移除事件

<iframe src="https://codesandbox.io/embed/vue-directives-3hj3o3?fontsize=11&hidenavigation=1&moduleview=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/directives"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>






##### 长按指令 v-longpress

需求：实现长按，用户需要按下并按住按钮几秒钟，触发相应的事件

思路：

1. 创建一个计时器， 2 秒后执行函数
2. 当用户按下按钮时触发 mousedown 事件，启动计时器；用户松开按钮时调用 mouseout 事件。
3. 如果 mouseup 事件 2 秒内被触发，就清除计时器，当作一个普通的点击事件
4. 如果计时器没有在 2 秒内清除，则判定为一次长按，可以执行关联的函数。
5. 在移动端要考虑 touchstart，touchend 事件



<iframe src="https://codesandbox.io/embed/vue-directives-3hj3o3?fontsize=11&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/directives"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


##### v-debounce

背景：在开发中，有些提交保存按钮有时候会在短时间内被点击多次，这样就会多次重复请求后端接口，造成数据的混乱，比如新增表单的提交按钮，多次点击就会新增多条重复的数据。

需求：防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次。

思路：

1. 定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算执行时间。
2. 将时间绑定在 click 方法上。

<iframe src="https://codesandbox.io/embed/vue-directives-3hj3o3?fontsize=11&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/directives"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>




##### v-emoji

背景：开发中遇到的表单输入，往往会有对输入内容的限制，比如不能输入表情和特殊字符，只能输入数字或字母等。

我们常规方法是在每一个表单的@change 事件上做处理。

<iframe src="https://codesandbox.io/embed/vue-directives-3hj3o3?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/directives"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>





##### v-lazyLoad

> 图片懒加载.  dom笔记

背景：在类电商类项目，往往存在大量的图片，如 banner 广告图，菜单导航图，美团等商家列表头图等。图片众多以及图片体积过大往往会影响页面加载速度，造成不良的用户体验，所以进行图片懒加载优化势在必行。

需求：实现一个图片懒加载指令，只加载浏览器可见区域的图片。

思路：

1. 图片懒加载的原理主要是判断当前图片是否到了可视区域这一核心逻辑实现的
2. 拿到所有的图片 dom ，遍历每个图片判断当前图片是否到了可视区范围内
3. 如果到了就设置图片的 src 属性，否则显示默认图片

图片懒加载有两种方式可以实现，一是绑定 srcoll 事件进行监听，二是使用 IntersectionObserver 判断图片是否到了可视区域，但是有浏览器兼容性问题。

下面封装一个懒加载指令兼容两种方法，判断浏览器是否支持 IntersectionObserver API，如果支持就使用 IntersectionObserver 实现懒加载，否则则使用 srcoll 事件监听 + 节流的方法实现。

<iframe src="https://codesandbox.io/embed/vue-directives-3hj3o3?fontsize=11&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/directives"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



##### v-permission

背景：在一些后台管理系统，我们可能需要根据用户角色进行一些操作权限的判断，很多时候我们都是粗暴地给一个元素添加 `v-if / v-show` 来进行显示隐藏，但如果判断条件繁琐且多个地方需要判断，这种方式的代码不仅不优雅而且冗余。针对这种情况，我们可以通过全局自定义指令来处理。

需求：自定义一个权限指令，对需要权限判断的 Dom 进行显示隐藏。

思路：

1. 自定义一个权限数组
2. 判断用户的权限是否在这个数组内，如果是则显示，否则则移除 Dom

<iframe src="https://codesandbox.io/embed/vue-directives-3hj3o3?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/directives"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



##### vue-waterMarker

> 这个方案实现的并不完善, 需要改善????

需求：给整个页面添加背景水印

思路：

1. 使用 `canvas` 特性生成 `base64` 格式的图片文件，设置其字体大小，颜色等。
2. 将其设置为背景图片，从而实现页面或组件水印效果





##### v-draggable

需求：实现一个拖拽指令，可在页面可视区域任意拖拽元素。

思路：

1. 设置需要拖拽的元素为相对定位，其父元素为绝对定位。
2. 鼠标按下`(onmousedown)`时记录目标元素当前的 `left` 和 `top` 值。
3. 鼠标移动`(onmousemove)`时计算每次移动的横向距离和纵向距离的变化值，并改变元素的 `left` 和 `top` 值
4. 鼠标松开`(onmouseup)`时完成一次拖拽







### 自定义插件

```HTML
自定义插件: 
插件就是一个集合

1. 自定义的插件是一个对象,对象里有一个install方法
2. 使用Vue.use(对象名称)来调用对象里的install方法
3. 插件中可以自定义指令, 给Vue添加属性, 给Vue原型上添加数据供实例vm使用(原型上添加的属性或方法,一般之前添加$)

使用Vue.use(插件名称)来调用里面的的install方法
原型上添加方法/属性,建议添加$
```



```js
//自定义插件 test.js

const extension={};
extension.install=function(Vue, options){//Vue, options是配置对象
	//添加两个全局指令
    Vue.directive('upper-text', function(ele, binding){
        ele.innerText=binding.value.toUpperCase();
    });
    Vue.directive('lower-text', function(ele, binding){
        ele.innerText = binding
    });
    //给Vue自身添加属性
    Vue.projectName='管理系统';
    Vue.version='1.0';
    Vue.showInfo=function(){ console.log('xxxx') };
    //给Vue原型上添加数据，供vm使用. 建议添加$符
    Vue.prototype.$random=function(min, max){
        return Max.floor(Math.random()*max+min);
    }

}

//index.html
<script src='./test.js'></script>
<div id='root'>
	<h2 v-upper-text='name'></h2>
	<h2 v-lower-text='name'></h2>   
	<h2>{{$random(2,8)}}</h2>
</div>
<script>
	Vue.config.productionTip=false;
	Vue.use(test);
	new Vue({
        el:'#root',
        data:{name:'atBeiJing'},
        
    })
</script>
```







## 自定义事件

### 1 事件名

**始终推荐使用kebab-case事件名**

不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。

原因: 1.事件名不会被用作一个js变量或属性,没有理由使用camelCase/PascalCase; 2. `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent`——导致 `myEvent` 不可能被监听到。



### 2 自定义组件的v-model

一个组件上的 `v-model` 默认会利用名为 `value` 的 prop 和名为 `input` 的事件

但是像单选框、复选框等类型的输入控件可能会将 `value` attribute 用于[不同的目的](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Value)。<span style="color:blue;">**`model` 选项**可以用来声明v-model传递的属性和事件名称</span>,仍需要在组件的props选项中声明这个属性.

```html

<script>
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean  //props中需要接收绑定传递的v-model属性
  },
  template: `
  	<input
  		type="checkbox"
  		v-bind:checked="checked"
  		v-on:change="$emit('change', $event.target.value)"
  `
})
</script>  


<base-checkbox v-model="test"></base-checkbox>
```



### 3 原生事件绑定到组件

#### 背景

在一个组件的根元素上直接监听一个**原生事件**。

原生事件不需要添加任何事件也能自动(浏览器)触发,这也就是$emit中的`$event.target.value`为事件对象的原因之一

#### 与自定义事件区别

如果不加`.native`修饰符就是自定义事件,两者差异在于事件接收的返回值的不同

#### 实现

使用 `v-on` 的 `.native` 修饰符

```js
<base-input v-on:focus.native="onFocus"></base-input>
```

```html
<template>
	<div id='app'>
    {{abc}}
    <base-input
    	v-on:input="onInput"
      //v-on:input.native="onInput"
    ></base-input>
  </div>
</template>

<script>
	const baseInput = {
    template: `
			<input 
				v-on:input="$emit('input', $event.target.value)"  
			/>
		`
  };
  
  new Vue({
    el: '#app',
    data: {abc:''},
    components: {baseInput},
    methods: {
      onInput(event) {
        console.log(event); //打印值
        this.abc = event;
      }
    }
  })
</script>


//自定义事件的返回值  子组件返回'$event.target.value'
返回的是输入的值

//.native修饰符绑定原生事件的返回值  子组件返回'$event.target.value'
返回的实际上是事件对象 以下是浏览器打印的结果
InputEvent 
{isTrusted: true, data: 's', isComposing: false, inputType: 'insertText', dataTransfer: null, …}
isTrusted: true
bubbles: true
cancelBubble: false
cancelable: false
composed: true
currentTarget: null
data: "s"
dataTransfer: null
defaultPrevented: false
detail: 0
eventPhase: 0
inputType: "insertText"
isComposing: false
path: (7) [input, div, div#root, body, html, document, Window]
returnValue: true
sourceCapabilities: null
srcElement: input
target: input
timeStamp: 1240.2000000178814
type: "input"
view: null
which: 0
[[Prototype]]: InputEvent
```

#### 存在的问题

如果子组件根元素不是触发事件的直接元素(例如被label包裹的input元素),那么父级的 `.native` 监听器将静默失败,不会产生任何报错，但是 `onFocus` 处理函数不会如你预期地被调用。

```html
<base-input v-on:focus.native="onFocus"></base-input>

<label>
	{{label}}
  <input
  	v-bind="$attrs"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
</label>
```



#### 解决-$listeners ????

 `$listeners` ，**它是一个对象，里面包含了作用在这个组件上的所有监听器**。例如：

注意:如果添加了`.native`事件修饰符,其事件是不包含在`$listeners`中

```js
{
  foucs: function(event) {/**/} 
  input: function(value) {/**/}
}
```

配合 `v-on="$listeners"` 将所有的事件监听器指向这个组件的某个特定的子元素。

对于类似 `<input>` ,你希望它也可以配合 `v-model` 工作的组件来说，为这些监听器创建一个类似下述 `inputListeners` 的计算属性通常是非常有用的：

```html
<div>
	<base-input
    label='username'
  	v-model='lovingVue'
  ></base-input>
  <br/>
  <p>
    lovingVue's value: {{lovingVue}}
  </p>
</div>

<script>
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function() {
      var vm = this;
      return Object.assign({}, 
      	this.$listeners,
        {
        	input: function(event) {
            vm.$emit('input', event.target.value)
          }
      	}
      )
    }
  },
  template: `
		<label>
			{{label}}
			<input
				v-bind='$attrs'
				v-bind:value='value'
				v-on='inputListeners'
		</label>
	`
})

new Vue({
  el: '#app',
  data: {lovingVue: 'aaa'}
})
</script>
```





### 4 `.sync修饰符 `



#### 背景

在有些情况下，我们可能需要**对一个 prop 进行“双向绑定”**。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以变更父组件，且在父组件和子组件两侧都没有明显的变更来源。

(这里的prop双向绑定,就是普通的prop传值形式,区别在于,在子组件上直接使用这个父组件传递过来属性而非先将其复制到一个空属性再操作)

子组件更改父组件的内容

#### 语法

推荐使用以 `update:myPropName` 的模式触发事件代替直接更改prop。

举个例子.在一个包含 `title` prop 的的组件中，我们可以用以下方法赋新值

```html
//父组件(监听事件并根据需要来更新一个本地数据的property)
<text-document
	v-bind:title='doc.title'
	v-on:update:title="doc.title=$event"   //
></text-document>

//缩写
<text-document v-bind:title.sync='doc.title'></text-document>

//子组件上
this.$emit('update:title', newTitle)
```



#### 注意

* 带有 `.sync` 修饰符的 `v-bind` **不能**和表达式一起使用 (例如 `v-bind:title.sync=”doc.title + ‘!’”` 是无效的)。

* `v-bind.sync="doc"` 可以绑定一个对象,相当于设置多个 prop, 同时可以各自添加用于更新的`v-on`监听器.但<span style="color:red">不能直接使用字面量对象形式, 也无法使用数组</span>

```html
//绑定对象
<text-document v-bind.sync="doc"></text-document>

//禁止的样式
<text-document v-bind.sync="{title: 'title'}"></text-document>
```



`v-bind.sync='data中的对象doc'`, 把 `doc` 对象中的每一个 property (如 `title`) 都作为一个独立的 prop 传进去，<u>然后各自添加用于更新的 `v-on` 监听器</u>。 (注意写法)

```html
<text-document v-bind.sync="doc"></text-document>


<script>
  Vue.component('text-component', {
    template: '<div>
    <p @click="changeTitle">接收的prop--title: {{title}}</p>
    <p>接收的prop--name: {{name}}</p>
  	</div>',
  
  	methods: {
      changeTitle() {
        this.$emit('update:title', 'string') //子组件-->父组件的更新 然后子组件也更新
      }
    }
  })
	let vm = new Vue({
    el: '#root',
    data: {
      doc: {
        title: 'title',
        name: 'jack',
        age: '33'
      }
    }
  })
</script>
```



### 5. 自定义事件与原生dom事件

#### 5.1 定义比较

```markdown
自定义事件：子组件在父组件中使用时，直接绑定在子组件上的事件就是自定义事件，必须经过子组件的触发vm.$emit()才能执行
原生事件：直接在子组件里的模板上绑定的事件，子组件引入后是可以直接触发的

在dom元素上绑定的事件，触发的是dom的原生事件
在组件上绑定的事件，触发的是自定义事件，需要用this.$emit(‘eventName’)来触发。
```



#### 5.2 直接触发绑定的自定义事件,通过`.native`修饰符







## 插槽

在 2.6.0 中，我们为<u>具名插槽</u>和<u>作用域插槽</u>引入了一个新的统一的语法 (即 `v-slot` 指令)。它取代了 `slot` 和 `slot-scope` 这两个目前已被废弃但未被移除且仍在[文档中](https://cn.vuejs.org/v2/guide/components-slots.html#废弃了的语法)的 attribute。

### 1.插槽内容

Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 [Web Components 规范草案](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md)，**将 `<slot>` 元素作为承载分发内容的出口**。

插槽内可以插入任何`模板代码`,`html`,`其他组件`

它允许你这样合成组件

```html
<navigation-link url='/profile'>
  your profile
</navigation-link>
```

然后你在`<navigation-link>`的模板中可能会写为:

```html
<a
	v-bind:href='url'
	class="nav-link"
>
  <slot></slot>
</a>
```

当组件渲染的时候，`<slot></slot>` 将会被替换为“Your Profile”。插槽内可以包含任何模板代码，包括 HTML：

```html
<navigation-link url='/profile'>
	//添加一个Font Awesome图标
  <span class="fa fa-user"></span>
  your profile
</navigation-link>
```

插槽内插入其他组件:

```html
<navigation-link url='/profile'>
  //添加一个图标的组件
  <font-awesome-icon name='user'></font-awesome-icon>
  your profile
</navigation-link>
```

如果 `<navigation-link>` 的 `template` 中**没有**包含一个 `<slot>` 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。

### 2.编译作用域

> 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

当你想在一个插槽中使用数据时,

```html
<navigation-link url='/profile'>
  Logged in as {{user.name}}
</navigation-link>

<navigation-link url="/profile">
  Clicking here will send you to: {{ url }}
  <!--
  这里的 `url` 会是 undefined，因为其 (指该插槽的) 内容是
  _传递给_ <navigation-link> 的而不是
  在 <navigation-link> 组件*内部*定义的。
  -->
</navigation-link>
```

该插槽跟模板的其它地方一样可以访问相同的实例 property (也就是相同的“作用域”)，而**不能**访问 `<navigation-link>` 的作用域。例如 `url` 是访问不到的：



### 3.插槽默认内容(\<slot>)

默认内容在没有提供内容的时候被渲染。

```html
//如在一个 <submit-button> 组件中,希望这个 <button> 内绝大多数情况下都渲染文本“Submit”。 将“Submit”作为后备内容，我们可以将它放在 <slot> 标签内

<button type="submit">
  <slot>Submit</slot>
</button>
```

当我在一个父级组件中使用 `<submit-button>` 并且不提供任何插槽内容时,后备(默认)内容“Submit”将会被渲染.如果提供内容将会取代默认内容



### 特点

- 父组件中子组件起始标签和结束标签之间添加`模板, HTML, 其他组件`的方式来放置插槽内容
- 在子组件中的template模板中, 使用`<slot></slot>`来接收, 并将其替换成接收的内容
  - 如果子组件中`template`中没有`<slot></slot>`标签,则组件标签之间的<span style="color:blue">内容会被抛弃</span>
  - 父级组件中使用组件标签但不提供内容时,组件模板`template`内`<slot>xxx</slot>`之间的内容`xxx`会<span style="color:blue">默认显示</span>
- 插槽的作用域是在父作用域内编译的,不能访问子作用域的内容;(父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。)







#### 作用域插槽

插槽内容能访问子组件中的数据

- 实现: 
  - 绑定: 将子组件中的数据作为`<slot>`元素的一个属性绑定上去 `<slot v-bind:user="user">`
  - 获取: 父级作用域中,使用带值的`v-slot`来定义**插槽Prop**: `<template v-slot:default="slotProps">` //default代表默认插槽
    - 将包含所有插槽prop的对象命名为`slotProps`,但没有限制
  - 使用:  在子组件开始和结束标签之间, 访问`{{slotProps.user.name}}` .合法语法即可
- 默认插槽的缩写
  - 省略`v-slot:default="slotProps"`中的`:default`
  - 默认插槽缩写语法不能和具名插槽混用; 只有出现多个插槽,请始终未所有插槽使用完整的基于`<template>`的语法
- 解构插槽Prop
  - Why 插槽内容包裹在一个拥有单个参数的函数里, `v-slot` 的值可为 JavaScript 表达式
  - How `<cName v-slot="{user}"`
  - prop重命名: `<cName v-slot="{user: person}"`
  - 定义默认内容:  `<cName v-slot="{user = {name: 'guest'}"`



动态插槽名

具名插槽缩写
- 实现: 把参数之前的所有内容 (`v-slot:`) 替换为字符 `#`
- 条件: 只在其有参数的时候才可用
  - 警告: `<cName #="{user}">`
  - How: `<cName #default="{user}">`

- 插槽转换为可复用模板, 其可以基于输入的prop渲染除不同的内容
  - 场景: 设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时



### 4.具名插槽+默认插槽

#### 背景

前提: 有时候,<span style="color:blue">一个组件需要多个插槽</span>.例如如下一个带有如下模板的`<base-layout>`组件:

#### 实例

```html
// base-layout组件 模板内容

<div class="container">
  <header>
  	//希望把页头放在这里
  </header>
  <main>
  	//主要内容放这里
  </main>
  <footer>
  	//页脚放这里
  </footer>
</div>
```

对于这种情况,`<slot>`元素有一个特殊的attribute: `name`. 这个attribute可以用来定义额外的插槽:

```html
<div class="container">
  <header>
  	<slot name="header"></slot>
  </header>
  
  <main>
  	<slot></slot>   //一个不带 name 的 <slot> 出口会带有隐含的名字“default”。
  </main>
  
  <footer>
  	<slot name="footer"></slot>
  </footer>
</div>
```

父组件中在向子组件中的具名插槽提供内容的时候，我们可以在一个 `<template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称：

```html
<base-layout>
	<template v-slot:header>
  	<h1>
      Here might be a page title
    </h1>
  </template>
  
	<p>A paragraph for the main content.</p>
  <p>And another one.</p>
  
  <template v-slot:footer>
  	<p>
      Here's some contact info
    </p>
  </template>

</base-layout>
```

现在 `<template>` 元素中的所有内容都将会被传入相应的插槽。子组件标签内任何没有被包裹在带有 `v-slot` 的 `<template>` 中的内容都会被视为**默认插槽**的内容。

如果你希望更明确一些，仍然可以在一个 `<template>` 中包裹默认插槽的内容：

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

以上两种写法都会渲染出来同样的结果

```html
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```



```html
//综合

<body>
  <div id="app">
    <base-layout>
    	<template v-slot:header>
      	<h1>
          here might be a page title
        </h1>
      </template>
      <template v-slot:default>
      	<p>
          a paragraph for the main content
        </p>
        <p>
          and another one
        </p>
      </template>
      <template v-slot:footer>
      	<p>
          here's some contact info
        </p>
      </template>
    </base-layout>
  </div>
</body>
<script>
	Vue.component('base-layout', {
    template:`
			<div id="container">
  			<header>
  				<slot name="header"></slot>
  			</header>

				<main>
  				<slot></slot>
  			</main>

				<footer>
  				<slot name="footer"></slot>
  			</footer>
  		</div>
		`
  })
  
  new Vue({
    el: '#app',
    data: {}
  })
</script>
```



#### 具名插槽的特点

* 可以满足一个组件需要多个插槽的需求
* 子组件`template`模板中, 定义多个插槽: 
  * `<slot>`使用`name`属性来接收相应的内容: `<slot name="typicalName"></slot>`
  * 一个不带`name`的`<slot>`出口会带有隐含的名字"default".

- 父组件内的子组件标签之间, 需要使用多个`<template v-slot=xxxx>`标签来发送内容:
  - 使用`v-slot`指令: 用`<template v-slot:子组件中对应的name名(不加引号)>xxx</template>`来声明且向具名插槽提供内容

- 默认插槽
  - 没有包裹在带有 `v-slot` 的 `<template>` 中的内容, 使用`<slot></slot>`来接收
  - 插槽也可以使用`<template v-slot:default>xx</template>`来声明默认插槽, 依然用`<slot></slot>`来接收





#### 具名插槽的缩写

跟 `v-on` 和 `v-bind` 一样，`v-slot` 也有缩写，即把参数之前的所有内容 (`v-slot:`) 替换为字符 `#`。

例如 `v-slot:header` 可以被重写为 `#header`：

```html
<base-layout>
	<template #header>
  	<h1>
      here is page title
    </h1>
  </template>
  
  <template>
  
  </template>
  
  <template #footer>
  	<p>
      here's some footer info
    </p>
  </template>
</base-layout>
```

和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的

如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：

```html
//以下内容会触发警告
<base-layout #="{user}">
	{{user.name}}
</base-layout>

//有效
<base-layout #default="{user}">
	{{user.name}}
</base-layout>
```





### 作用域插槽

让插槽内容能够访问子组件中才有的数据.

#### 定义插槽prop

子组件中将传递的数据作为`<slot>`元素的属性绑定上去,绑定在 `<slot>` 元素上的 attribute 被称为**插槽 prop**

```html
//匿名插槽
<slot v-bind:data="变量名"></slot>

//具名插槽
<slot name="插槽名" v-bind:data="变量名"></slot>
```

#### 获取插槽prop

父级作用域中，可使用带值的 `v-slot` 来定义我们提供的插槽 prop 的名字,名称没有限制. 使用双花括号获取prop的值.

```html
//匿名插槽
<template v-slot="slotProps">
	{{slotProps.data}}
</template>

//具名插槽
<template v-slot:插槽名="slotProps">
	{{slotProps.data}}
</template>

//v-slot缩写为#
<template #default="slotProps">
	{{slotProps.data}}
</template>
```

##### 独占默认插槽的缩写语法

在上述情况下，当被提供的内容*只有*默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 `v-slot` 直接用在组件上：

```html
<base-layout v-slot:default="sonProp">
	{{sonProp.user.name}}
</base-layout>
```

更简化的写法:

就像假定未指明的内容对应默认插槽一样，不带参数的 `v-slot` 被假定对应默认插槽：

```html
<base-layout v-slot='sonProp'>{{sonProp.user.name}}</base-layout>
```

默认插槽的缩写语法**不能**和具名插槽混用，因为它会导致作用域不明确, 会导致警告

只要出现多个插槽，请始终为*所有的*插槽使用完整的基于 `<template>` 的语法

```vue
<current-user>
	<template v-slot:default="slotProps">
  	{{slotProps.user.firstName}}
  </template>
  
  <template v-slot:other="otherSlotProps">
  	...
  </template>
</current-user>
```



##### 解构插槽Prop

**原因**

作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里

```js
function (sonProp) {
  //插槽内容
}
```

**实现**

这意味着 `v-slot` 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。所以在支持的环境下 ([单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)或[现代浏览器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#浏览器兼容))，你也可以使用 [ES2015 解构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#解构对象)来传入具体的插槽 prop，如下：

* 解构
* 其他形式,例如重命名

```html
<base-layout v-slot="{user}">
	{{user.name}}
</base-layout>

//重命名
<base-layout v-slot="{user: person}">
	{{person.name}}
</base-layout>

//定义后备内容 用于插槽 prop 是 undefined 的情形：
<base-layout v-slot="{user = {name: 'jack'}}">
	{{user.name}}
</base-layout>
```

**作用**

这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。





### 动态插槽名

[动态指令参数](https://cn.vuejs.org/v2/guide/syntax.html#动态参数)也可以用在 `v-slot` 上，来定义动态的插槽名：

```html
<base-layout>
	<template v-slot:[dynamicSlotName]>
  	...
  </template>

</base-layout>
```



### 插槽prop示例-可复用模板

**插槽 prop 允许我们将插槽转换为可复用的模板，这些模板可以基于输入的 prop 渲染出不同的内容。**这在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的。

例如，我们要实现一个 `<todo-list>` 组件，它是一个列表且包含布局和过滤逻辑：

```html
<ul>
  <li v-for="todo in filterTodos" v-bind:key="todo.id">
  	{{todo.text}}
  </li>
</ul>
```

我们可以将每个 todo 作为父级组件的插槽，以此通过父级组件对其进行控制，然后将 `todo` 作为一个插槽 prop 进行绑定：

```html
<ul>
  <li v-for="todo in filterTodos" v-bind:key="todo.id">
  	//为每一个todo准备一个插槽,将'todo'对象作为一个prop传入
    <slot name="todo" v-bind:todo="todo">
    	//后备内容
      {{todo.text}}
    </slot>
  </li>
</ul>
```

现在当我们使用 `<todo-list>` 组件的时候，我们可以选择为 todo 定义一个不一样的 `<template>` 作为替代方案，并且可以从子组件获取数据：

```html
<todo-list v-bind:todos="todos">
  <template v-slot:todo="{ todo }">
    <span v-if="todo.isComplete">✓</span>
    {{ todo.text }}
  </template>
</todo-list>
```



<iframe src="https://codesandbox.io/embed/zuo-yong-yu-cha-cao-gnw3wj?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="作用域插槽"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



#### 作用域插槽示例1-[Vue Virtual Scroller](https://github.com/Akryum/vue-virtual-scroller)



#### 作用域插槽示例2-[Vue Promised](https://github.com/posva/vue-promised) 



#### 作用域插槽示例3- [Portal Vue](https://github.com/LinusBorg/portal-vue) 





## sss

#### 非单文件组件 ++

```js

```



![QQ图片20210118092331.png](https://i.loli.net/2021/01/18/FCrtGB5HEpmKTJa.png)







#### 继承的关系

```HTML
1.Vue.extend调用的返回值是VueComponent构造函数,所以new Example()其实就是在new VueComponent()

vue中简略的源代码解析:
<script>
	const Vue={
        extend(){
            function VueComponent(){}
        }
        return VueComponent; //Vue中返回的是VueComponent函数
    }
    const School=Vue.extend();
    const s = new School();
    console.log(s); //打印形式:VueComponent{}, 意思是VueComponent new出来的实例.
</script>
<!--
继承本质: 子类原型=父类实例
子类的实例化对象.__proto__===子类.prototype===父类实例
父类实例.__proto__===父类.prototype
子类的实例化对象.__proto__.__protot__===父类.prototype
-->
s.__proto__.__proto__===Person.prototype

2.vc和vm的关系 //vm是Vue实例对象

vm.$children[0].__proto instanceof Vue
vm.$children[0].__proto__.__proto__ === Vue.prototype
```



```HTML
//非单文件组件 缺点:
1.  模板编写没有提示
2.	没有构建过程, 无法将ES6转换成ES5
3.	不支持组件的CSS
4.	真正开发中几乎不用


```





```js
//定义组件 简略版
const Xxx=Vue.extend({
    //data中存放组件所需的数据
	data(){
		return{
            name:'xxx',
            age:'xxx'
        }
	},
    //template中配置组件的模板结构
    template:`
		<div>	
			...{{name}}
		</div>
	`
})

//注册组件 全局
Vue.comopnent('School', School)

//定义vm,管理所有组件
new Vue({
    el:'#root',
    //注册组件-局部
    components:{
        School:School
    }
})
```



```js
//定义组件 复杂版使用App父组件包裹其他组件

<body>
    <div id='root'>
        <App/> //此步骤可以使用实例中的template属性替换,实现干净的HTML
    </div>
</body>
<script>
const Xxx=Vue.extend({
    //data中存放组件所需的数据
	data(){
		return{
            name:'xxx',
            age:'xxx'
        }
	},
    //template中配置组件的模板结构
    template:`
		<div>	
			...{{name}}
		</div>
	`
})

const Hello=Vue.extend({
    template:`<h2>我是Hello组件内容 </h2>`
})

const App=Vue.extend({
    components:{Xxx:Xxx, Hello:Hello},
    template:`
		<div>
			<Xxx/>
			<Hello/>
		</div>
	`
})



//定义vm,管理所有组件
new Vue({
    el:'#root',
    //注册组件-局部
    components:{App},
    template:`<App/>`  //这种写法可以省略
})

</script>
```





#### 单文件组件

```js
文件结构:
components/School.vue
App.vue
index.html

School.vue:
//严格来说,并非一个组件,而是一个组件的所有配置
 /*配置组件模板结构*/
 <template> 
     <div>//需要一个根标签
     	<h2 class='name'>{{name}}</h2>
     </div>
 </template>
/* 配置组件的数据,交互等 */
<script>
     //暴露组件配置,并没有创建组件,因为没有调用Vue.extend
     export default{
		data(){
            return{}
        },
        methods:{}
	}
</script>

/* 配置组件的样式 */
<style>
	.name{
        background-color:yellow;
    }	    
</style>
======================
App.vue
<template>
    <div>
    	...
		<School/>
    </div>
</template>

<script>
    import School from './components/School.vue';
	export default{
        data(){return{}}
        components:{School:School} //触发对象简写形式
    }
</script>
<style>
</style>

=======================
index.html
<body>
    <App/>
</body>

<script>
import App from './App.vue'
new Vue({
    el:'#root',
    components:{App}
})
</script>
```



## 其他

### Vue脚手架

```HTML
vue-cli //command line interface https://cli-vuejs.org/zh/

vue-cli是vue官方提供的脚手架工具,最新版是4. 3.x版与4.x版变化不大,但与2.x版本比较变化大.

```



### 安装及文件结构

```HTML
0.问题
在cdm正常运行,但是在git中会出现错误. 
解决: https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

1.创建脚手架3/4的vue项目:
 1.1 npm install -g @uve/cli  //全局安装脚手架
 1.2 vue create vue-demo      //创建项目名称
 1.3 npm run serve /yarn serve //运行项目

2.脚手架结构
|-- node_modules   包文件夹
|-- public
	|-- index.html: 主页面文件
|-- src
	|-- main.js: 应用入口js
|-- babel.config.js: babel的配置文件
|-- vue.config.js: vue的配置文件，需要手动添加
|-- .gitignore: git版本管制忽略的配置
|-- package.json: 应用包配置文件 
|-- README.md: 应用描述说明的readme文件
```



### 代码解释

```HTML
//run-time 运行环境/生产环境

vue.runtime.common.js和vue.js有何区别？
vue.runtime.common.js（项目中用的多） : 
1.不包含模板解析器，打包后体积小
2.配置项中的不能写template，要用render: h => h(App)代替
vue.js : 
1.包含解模板析器，打包后体积大
2.配置可以写template
```







### ref

```html 
ref使用:
1.标签中直接写 ref='xxx'
2.通过this.$refs.xxx获取
3. 3.1若给html内置标签加ref,获取到的是真实DOM节点
   3.2若给组件标签加ref,获取到的是组件实例对象.


```



### props

```html
//作用: 父组件给子组件传递数据
//接收位置: 子组件<script>中,与data函数同级的props.
//读取方式:
	1.只指定名称: props:['xxx','yyy']
	2.指定名称和类型:props:{xxx:String, yyy:Number}
	3.指定名称/类型/必要性/默认值: props:{xxx:{type:String,required:true, default:xxx}}

=============================
//声明传递  -通过父级组件模板标签中的子组件标签传递属性

<template>
	<组件名称 :username='username'/>
</template>

//声明接收
//声明的props和data是平级的.可以直接使用插值语法访问.
//模板中如何访问

- 最完整的写法:限制了类型,控制了必要性,指定了默认值
data(){},
props:{
	username:{       //usename和被传递的属性要保持一致
		type:String, //类型
    required:true,//必需要传, 不传报错.
    default:'默认值' //默认值
                
	}
}

- 次完整写法:只限制了类型
props:{
    type:String
}

- 精简写法:不限制.数组形式接收
props:['username']
```





### 解决样式冲突scoped

```HTML
<style scoped> //关键字scope,让多个组件的重名样式互不干扰;公共样式不加,App中的style不加.
    .demo{}
</style>
```

### 组件名称固定

```HTML
//在组件script交互中,指定name属性.用来固定组件名称,加上之后再父组件中更改,也不影响其在开发者工具中的名称显示.

export default{
	name:'School',
	data(){}
}
```



### 临时关闭eslint语法检查

```js
//3种方法:

1. /* eslint-disable-next-line */ 会被eslint识别,下一句不会进行语法检查.
2. /* eslint-disable */ 放在script标签下,所有的交互脚本不进行语法检查
3. 脚手架环境下,配置文件vue.config.js  参考文档:https://cli.vuejs.org/zh/config/#lintonsave
	3.1 官网 vue-cli
	3.2 根目录下创建vue.config.js文件,暴露一个对象
//例如:
module.exports={
    lintOnSave:false
}
```





### todo-list案例

```HTML
(1).组件data中的数据、接到的props、methods中的方法、computed中的属性，都在vc对象上。
(2).<input v-model="x" @click="demo"/> 会先执行demo函数，再维护x的值.所以在事件回调中打印checked的值还是之前的.
(3).使用计算属性时，只是读取用get，修改记得要用set
(4).methods、computed、watch并没有严格意义上的界定，视具体功能而定，有时用什么都可以实现。
5. 计算属性中可以套娃,例如里面的属性可以借用.


```



### 浏览器本地存储Web Storage

```HTML
//浏览器查看位置: application=>storage

(1). Cookie, SessionStorage, LocalStorage这三者都可以被用来在浏览器端存储数据，而且都是字符串类型的键值对！
(2). 注意：session和SessionStorage不是一个概念！！！
在服务端有一种存储方式叫做：session会话存储，常常被简称session。


SessionStorage和LocalStorage都是浏览器本地存储，统称为Web Storage。
(3). 存储内容大小一般支持5-10MB
(4). 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。
(5). 相关API：
1. xxxStorage.setItem('key', 'value'); //value必须是json数据. JSON.stringify(value)
该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。

2. var data = xxxxxStorage.getItem('person');
该方法接受一个键名作为参数，返回键名对应的值。

3. xxxxxStorage.removeItem('key');
该方法接受一个键名作为参数，并把该键名从存储中删除。

4. xxxxxStorage.clear()
调用该方法会清空存储中的所有键名

备注：
SessionStorage存储的内容会随着浏览器窗口关闭而消失。
LocalStorage存储的内容，需要手动清除才会消失。
xxxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null
JSON.parse(null)的结果依然是null
使用try catch语句进行读取操作

```



```js
sessionStorage.setItem('name', JSON.stringify(变量)) //变量可以是数组,对象

const result=sessionStorage.getItem('person');
try{
	console.log(JSON.parse(result))
}catch(error){
    console.log(error.message);
    sessionStorage.removeItem('person')
}
```





### todo-list本地存储

```HTML
data() {
	let localData = localStorage.getItem("todos");
	let todos;
try {
///解析localStorage中的数据，如有数据直接使用，无数据null使用空数组。
	todos = JSON.parse(localData)||[];
} catch (error) {
	alert("浏览器缓存异常 数据重置");
	localStorage.clear("todos");
	todos = [];
}

return { todos };
}


```



### todo-list深度监视

```js
//监视两种: 自定义的watch,vue的监视
(1).Vue中的watch默认只能监测自身一层的数据,浅层次的监视.
(2).配置deep:true可以检测所有层次的数据. 默认没有开启,效率问题

如果data是一个函数,使用watch监视data中属性的变化,只能获取到最新的属性值.因为更改一次,data就会重新调用一次,函数作用域不同,无法获取到原先的值.

watch:{
	todos:{
        deep:true,
        handler(vlaue){ 如果data是函数形式,只能获取到newValue值 
            console.log(value)
        }
    }
}

```



### 自定义事件(2种)++

```js
//自定义事件: 给Demo组件实例对象定义了一个事件,只要Demo组件实例对象触发了事件,那么就会调用对应的函数.

1.绑定自定义事件: 子组件给父组件传递数据
 第1种方式：
 - 父组件中:<Demo @haha="test"/> 添加'@自定义事件=回调函数'.回调函数test的参数是子组件传递的值.
 - 子组件中:一般在methods中的回调函数中触发, 也可以直接绑定到事件上.
   - methods中触发的: this.$emit('haha', 传递的值)可提供多个value
   - 绑定到事件上: <button @click="$emit('自定义事件名称', 传递的值)" >

 第2种方式： $on 表示绑定
    父组件中:<Demo ref="demo"/>, mounted函数中：this.$refs.demo.$on('haha',this.test)
    子组件中(同上,没变化):一般在methods中触发, this.$emit('haha', value)


//总结:
1.适用范围: 适合子组件给父组件传数据.代替通过props传递的回调函数,不适合兄弟组件和隔层组件,因为有嵌套.
2.使用方法: 
    2.1 若,父组件想让子组件给自己传数据，那么就要给子组件绑定自定义事件   $emit
    2.2.父组件需要在子组件身上绑定自定义事件 @自定义事件名称="回调函数" //回调函数的参数是传递的值


//扩展: props传递回调函数实现子到父的组件通讯
 1.父组件中,给子组件绑定动态属性: <Demo :test='test'/> + 父组件的methods中有名为test()的函数
 2.子组件中,使用props获取: props:['test'], test在实例身上. 可在methods中调用this.test(value)
 3.子组件中调用父组件中的函数并传参
```



```HTML
//App.vue 建议采用第一种简单形式
<template>
	<h2></h2>
    <!--自定义事件-第一种方式: 给Demo组件实例绑定了一个自定义事件 -->
    <Demo @haha='test'/>
    <!--自定义事件-第二种方式: 给Demo组件实例绑定了一个自定义事件 -->
    <Demo ref='demo'/>
</template>

<script>
	import Demo from './components/Demo';
    export default{
        name:'App',
        components:{Demo},
        methods:{
            test(x,y,z){console.log('收到了数据:',x,y,z)}
        },
        mounted(){
            this.$refs.demo.$on('haha', this.test);
        }
    }
</script>
<style>
....
</style>

================
//Demo
<template>
	<button @click='sendData'>点我给ap传递数据</button>
</template>
<script>
	export default{
        name:'Demo',
        data(){
            name:'xxx'
        },
        methods:{
            sendData(){
                //触发传过来的自定义事件
                //$emit 是vue原型上的,用来触发自定义事件的.
                this.$emit('haha', this.name)
            }
        }
    }
</script>
<style>

</style>
```





### 全局事件总线+++

#### 基本介绍

```js
//基本介绍 全局事件总线GlobalEventBus  基于vue自定义事件的事件总线

1.	Vue原型对象上包含事件处理的方法
1)	$on(eventName, listener): 绑定自定义事件监听
2)	$emit(eventName, data): 分发自定义事件
3)	$off(eventName): 解绑自定义事件监听
4)	$once(eventName, listener): 绑定事件监听, 但只能处理一次

2.	//所有组件对象的原型对象的原型对象就是Vue的原型对象  +++
1)	所有组件对象都能看到Vue原型对象上的属性和方法
2)	Vue.prototype.$bus = new Vue(), 所有的组件对象都能看到$bus这个属性对象

3.	全局事件总线
1)	包含事件处理相关方法的对象(只有一个)
2)	所有的组件都可以得到

```

#### 解析+

```JS
$bus:总线
// 全局事件总线优缺点:
 优点: 适用任何组件间通信
 缺点: 管理不够集中

//使用
 给谁绑定的事件,就去触发谁的emit


//为什么全局事件总线要绑定在Vue的原型上?
0.组件实例对象VueComponent(vc)是源码生成的,
1.每一个组件生成的实例化对象VueComponent都是不一样的.
2.每个组件的实例化对象都能访问Vue原型上的属性和方法

// 查看原型链:
打印组件的this,顺序: 
//打印版:
VueComponent->__proto__->__proto__->__protot__
//解释:
实例对象vc-> VueComponent.prototype||Vue的实例 ->Vue.prototype->Object

继承的原理:子类的原型对象(VueComponent.prototype)等于父类的实例(new Vue/Vue.prototype)


<!--  *****
  
组件对象vc-->原型对象-->原型对象(Vue原型对象)
组件对象vc-->__proto__-->__proto__
    
继承本质: 子类原型=父类实例
子类的实例化对象.__proto__===子类.prototype===父类实例
父类实例.__proto__===父类.prototype
子类的实例化对象.__proto__.__proto__===父类.prototype
-->

//Vue.prototype.p=100, 在main.js中的位置不能在new Vue()之后
//$on, $emit在Vue的原型上.?? 
//谁能调用$on,$emit? vm和vc,vc也是找到的vm身上的.
//this.$bus.$on/$emit  $bus是原型上的 $on/$emit是this(vm)身上的.
    
    
    
```



#### 流程步骤+

```js
================流程步骤================
(1).安装全局事件总线，在main.js中配置
    new Vue({
        beforeCreate() {
            Vue.prototype.$bus = this //安装事件总线到vm身上.
    },
        el:'#app',
        render:h => h(App)
    })
(2).要提供数据的组件中触发事件： //给谁绑定的事件就去触发谁的$emit  数据可以传多个,一般包装成对象.
    this.$bus.$emit('xxxx',数据)


(3).需要接收数据的组件在 [mounted] 中给$bus绑定自定义事件和在 [beforeDestroy] 中给$bus绑定销毁
mounted() {
    this.$bus.$on('xxxx',this.y)   //y函数没有括号, 是methods中的方法,可接受参数,但这里不用传递.
   //this.$bus.$on('xxxx', function test(){this})  //函数中的this是vm 
}
beforeDestroy(){
	this.$bus.$off('xxxx')
}
备注：上方的y，若要配置在当前组件的methods中，则this是当前组件vc
     上方的y, 若直接写成函数形式, 则函数中的this是vm.
     


(4).注销事件总线
	在绑定的位置注销.  

//其他:
1.谁接数据，谁就$on('xxx-xxx',this.yyy)
2.谁发数据，谁就$emit('xxx-xxxx',数据)
3.上方的数据可以传递多个，例如$emit('xxx-xxxx',数据1,数据2，数据3),但一般传递多个的时候，我们包装成一个对象传递
```





```js
const vm=new Vue({
	el:'#app',
    render:h=>h(App)
})
Vue.prototype.p=vm; //报错,vm实例已经生成,无法再向上添加属性. 所以需要beforeCreate钩子

new Vue({
    beforeCreate(){
        Vue.prototype.p=this;
    },
	el:'#app',
    render:h=>h(App)
})

```





### 复习

```HTML
1.vue浏览器插件,如果页面没有使用,则更改后不会再插件上更新
2.自定义事件的书写形式
3.
```





### 插槽slot

```JS
//作用：向组件指定位置中插入html结构
//分类：
    默认插槽：<slot></slot>
    命名插槽：<slot name="s1"></slot>
    作用域插槽：后期项目中会讲到
//使用：	
    
    - 父组件中：
	<子组件名称 title='game'>//父传子props属性 以前的:title="game"是获取动态属性值
        <template slot="s1">
            具体html结构
        </template>
	</子组件名称>

    - 子组件中：//使用<slot>标签来占位,<slot></slot>标签之间没有内容
    <slot></slot>  //搭配默认template模板,没有name属性. 
	或
	<slot name="s1"></slot> //搭配模板中有name属性的模板

```



```HTML
1.父组件中:子组件引入,注册,和使用子组件名称的双标签<子组件名称></子组件名称>
2.<子组件名称>标签中使用模板标签<template slot='name'><div>...</div></template> //div是根标签 name不加表示这是默认插槽
    2.1 可以在父组件模板中使用多组相同的子组件标签
3.div中加入动态HTML结构
4.子组件中使用插槽: <slot></slot>||<slot name='name'></slot>    
    
```





### github搜索案例

```HTML
1.link中url写法: <link rel="stylesheet" href="<%= BASE_URL %>css/bootstrap.css">
2.查询字符串写法:
3.import不分家,中间混入其他语句也是在所有的import执行后再执行的.
4.List组件中多个状态使用一个对象包裹
5.消息订阅与发布中,订阅消息的
6.query查询参数的写法:params  在axios中讲过.

```



#### 全局事件总线版

```HTML

```

#### Pubsub版

```HTML

```



#### vue-resource版

```HTML

```





### vuex

#### 基本介绍

```js
//基本介绍
1.	专门在Vue中实现{/*集中式状态管理*/}的一个插件，对vue应用中多个组件的共享状态进行集中式的管理(读/写)，也可以认为是一种组件间通信的方式，且适用于任意组件间通信。
2.	github站点: https://github.com/vuejs/vuex
3.	在线文档: https://vuex.vuejs.org/zh-cn/

//什么时候使用Vuex
1. 多个组件依赖于同一状态
2. 来自不同组件的行为需要变更同一状态
3. 多个组件要共享状态 

//生成的$store可以在vm身上访问到
```



#### 流程图

![vuex图](https://img2018.cnblogs.com/blog/1581023/201902/1581023-20190222191642909-1072295625.png)



#### vuex/store.js配置

```js
//命名格式:
src目录新建vuex/store.js(建议) 或 store/index.js

//要点:
1.v-model.number='word' 将v-model获取的字符串转换为数字传递给data中的word属性
2.Vue.use(Vuex)+引入store插件后,vc和vm身上都会有一个$store属性, 是一个对象

```

#### vuex/store.js格式

```js
//1.store文件夹下的store.js或store/index.js中: 引入-use-定义(4个对象属性)-注册与暴露
//2.main.js中引入

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {};
const mutations = {};
const actions = {};
const getters = {};

const store=new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;

// main.js中导入并添加到配置对象中
import store from '.../store';
import router from '.../router';
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  el:"#app",
  router,
  store,
  render:h=>h(App)
})
================================

2.添加state,actions,mutations,getters4个对象
//state用来初始化状态(数据) 要写成一个对象，包含n组key-value，因为该state要管理n多个组件的状态

//初始化actions,值为一个对象,包含:n个响应组件'动作'的函数
//context是一个mini版的$store,要用context.commit()去通知mutations加工状态

//初始化mutations,值为一个对象,包含:n个真正用于加工状态的函数
const state={}

const actions={
  jia(context, vlaue){ 
      context.commit('JIA', value) //大写原因:区分mutations和actions中'jia'
    },
    //第二种写法:解构赋值
   jia({commit}, value){
       commit('JIA', value);
   }
};

const mutations={
    JIA(state, value){ //函数名称要大写,和actions中做区分
    state.sum += value
	}
}
const store=new Vuex.Store({
    state,
    actions,
    mutations
})

export default store;
```



#### mutations

```js
官方建议修改同步数据 
vuex是集中管理状态数据,如果是异步修改,请求回来的数据不一定是正确的数据.
问题 ==> vuex的调用工具监视不到mutation中的异步更新, 工具记录还是更新前的数据(不对)
```







#### 6大模块

```js
//0127 
modules模块

命名空间namespaced:true

Vuex核心概念
1.store对象
2.state状态数据
3.mutations
 3.1 本质:函数
 3.2 同步修改状态数据
4.actions
 4.1 本质:函数 所以mapActions放在methods中,mapState放在computed中
 4.2 获取异步数据
 4.2 触发commit,同时将异步数据提交给mutations
5.getters
 5.1 根据已有的状态数据计算得到新的状态数据
 5.2 等同于Vue中的computed
6.dispatch
 6.1.分发actions
7.modules
 7.1 Vuex中的模块化
```









#### getters (值是对象)+

```js
//存在$store身上的一个属性,
//和组件中使用computed,过滤功能相同,实现同样效果.
$store身上有一个getters属性,值是对象, $store可以获取到其返回值($store.getters.demo)
 
// vuex/store.js
const getters={
    //第一种属性形式-属性是函数的简写形式
    demo(state){  //函数会接收两个参数,第二个参数可省略.
        return state.sum * 100;
    }
    //第二种属性形式
    demo:function(state){
        return state.sum * 100;
    }
}

// 组件.vue使用getters属性的返回值

插值语法: 
{{ $store.getters.demo}}

computed计算属性:
computed:{
    return this.$store.getters.demo;
}
```



#### 求和基本版优化++

```JS
// 组件中使用computed简化模板中{{$store.state.sum}} 
1.手写计算属性,定义简化求和中的值

2.引入mapState生成计算属性
import {mapState} from 'vuex';

```



#### 辅助函数

```js
//mapState mapGetters   mapActions mapMutations
1.mapState mapGetters 是用在组件计算属性computed中用来获取$store中的state和getters
2.mapActions mapMutations 是用在组件方法methods中用来获取actions, mutations的.

3.辅助函数内部可以是对象也可以是数组,
    使用数组的前提条件: 数组中名字需要和vuex插件中对象相应的名字一样; 数据也是插件中不能是模块里的
```





#### 优化-mapState

```js
mapState放在那里?  获取state属性,放在computed计算属性对象中

//代替computed,获取state中的数据

mapState是vuex中的一个方法(需要import),形参是对象或数组,返回值是一个对象({he:f}),可以简写成数组. //和计算属性的get函数相似
mapState({sum:'sum'}) 变量sum对应页面上的sum,字符串sum对应可以获取vc上的state上的sum的值的函数,代替computed繁琐获取
放在computed中需要对mapState使用扩展运算符 ...mapState({sum:'sum'}). 变成key:value形式
mapState可以简写的条件: 传入对象的属性名和值相同可省略,对象变数组形式,带着引号.

//手动获取sum的值(也是mapState生成的代码形式):
computed:{
    he(){
        return this.$store.state.sum;
    }
}

//靠mapState生成计算属性
computed:{
    ...mapState({he:'sum'})
}

//简化mapState 如果对象属性和属性值同名,可以变成数组形式
computed:{
    ...mapState(['sum'])
}
```



#### 优化-mapGetters

```js
//介绍:
mapGetters获取的是vuex插件vuex/store中getters方法的返回值,也是vc身上getters属性的值.
mapGetters是vuex中的一个方法(需要import),参数是对象或数组,返回值是一个对象

//手动获取bigSum的值:
import {mapGetters} from 'vuex'
computed:{
    bigSum(){
        return this.$store.getters.bigSum;
    }
    //模块形式下的
    bigSum:state=>state.detail.detailInfo;
}

//靠mapState生成计算属性
computed:{
    ...mapGetters({bigSum:'bigSum'})
}

//简化mapGetters 如果对象属性和属性值同名,可以变成数组形式 冒号不能省略
computed:{
    ...mapState(['bigSum'])
}
```



#### commit替换dispatch

```js
//简介
如果actions中业务逻辑不复杂,可以省略,直接使用组件.commit的形式将信息发送到mutations中

//复杂版:
- 1组件中
methods:{
    //dispatch
    increment(){
        this.$store.dispatch('jia', this.n) //this.n是data中的属性,jia传递到store中的actions对象中
    }
}
- 1vuex插件中:
const actions={
    jia(context,value){
        context.commit('JIA', value);
    }
}

//简略版:
- 1组件中
methods:{
    //commit
    increment(value){
        this.$store.commit('JIA', value)
    }
}
```





#### 优化-mapMutations

```JS
//简介:
靠mapMutations生成x方法,和vuex插件中的mutations中的x函数对话,完成

//methods中手动写事件回调函数:
increment(value){
    this.$store.commit('JIA',value)
}

//靠mapMutations生成increment函数，和mutations中的JIA对话，完成加. 参数value自动获取自动传递
...mapMutations({
    increment:'JIA'
})

//简写成数组: 前提mutations中的函数名称和组件中的事件回调同名
...mapMutations(['JIA', 'JIAN'])

```



#### 优化-mapActions

```js
//简介
靠mapActions生成x方法,和actions中的函数对话,完成操作

//methods中手写事件回调:
incrementIfOdd(value){
    this.$store.dispathc('jiaOdd', value)
}

//methods中 mapActions生成incrementIfOdd方法,和actions中的jiaOdd对话,完成操作
...mapActions({
    incremntIfOdd:'jiaOdd',
    incremntAsync:'jiaAsync'
})

//mapActions简写 若组件事件回调和actions中的函数名一样,可简写数组形式
...mapActions(['jiaOdd', 'jianAsync'])

```







### vuex开发者工具devtool

```
//插件: vue devtools

//通过this.$store.state实现组件通信
```



### Vue路由

#### vue-router插件

```js
//使用方法和Vuex插件用法相似.

1.	vue的一个插件库
2.	专门用来实现一个SPA应用
3.	基于vue的项目基本都会用到此库
4.	中文文档: http://router.vuejs.org/zh-cn/
5.	下载: npm install vue-router -S
```



#### 路由的理解

```js
1.	什么是路由?
1.1.一个路由就是一个映射关系(key:value)
1.2.key为路径, value可能是function或component

2.	路由分类
2.1.后端路由：
1)	理解： value是function, 用来处理客户端提交的请求。
2)	注册路由： router.get(path, function(req, res))
3)	工作过程：当服务器接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据
2.2.前端路由：
1)	浏览器端路由，value是component，用于展示页面内容。
2)	注册路由: <Route path="/test" component={Test}>
3)	工作过程：当浏览器的path变为/test时, 当前组件就会变为Test组件


```



#### 路由器及路由

```js

```







#### 案例-一级路由

```js
//编写路由的3步
1.定义路由组件 pages文件夹下
	//src/pages/Home.vue, About.vue
 1.1 路由组件位置: src/pages/Name.vue
2.创建路由器,管理所有路由
 2.1 新建路由文件夹 src/router/index.js
 2.2 注册路由 Vue.use(VueRouter) + new VueRouter({})
 2.3 配置对象中是routes:[{path:'/xx', component:xx }]  路径+路由组件
 2.4 暴露路由器
	
3.使用路由
 3.1 main.js中导入,添加到配置对象中
     app组件中不用再引入路由器组件(pages/name.vue)了
 3.2 用<router-link to='/about'>代替<a>标签 ,to代替href /about代替./about.html
 3.3 高亮使用active-class='active'代替active
 3.3 使用<router-view></router-view>占位
	 
其他:
//一个路径匹配多个组件
路由器插件中,component改components,改为对象{h1:'Home',h2:'Home2'}
模板页面的路由器占位符添加name属性: name='h1'

//vc和vm身上多了$route, $router两个属性  都是导入router插件并添加到配置对象身上的
```



#### 一级路由匹配多个组件

```js
// 如果home路径需要匹配多个组件,要配置components,且要写成对象

//一级路由
const router=new VueRtouer({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            components:{
                Home:Home,
                Home2:Home2
            }
        }
    ]
})
```



```JS
//多级路由中可省略前面的路由,同时也需要去掉斜杠

//一级路由
const router=new VueRtouer({
    routes:[
        {
            path:'/about',
            component:About,
            children:[
                {
                    path:about1,
                    component:About1
                },
                {
                    path:about2,
                    component:About2
                }
            ]
        },
        {
            path:'/home',
            component:Home
        }
    ]
})

//二级/多级路由
1. 父路由组件的配置对象中添加children属性,值是数组,将子组件的对应的path和component放到数组中的对象里
2. 子路由对象的path有两种写法.
 2.1 基本写法: path:'/home/message'
 2.2 精简写法: path:'message' //注意要省略斜杠,同时父组件中的path也要省略斜杠.
3. 如何区体现组件的层级关系: 1.文件夹;2.文件名字 父-子.vue;3.路由器文件中



```



#### 路由传参

```js
路由传参有两种形式:params query
 - params和query参数在匹配的时候都会被收集到当前路由对象中的属性当中;
 - params参数需要占位接收,query参数不用占位.

路径带参数的3种写法:
1.字符串写法
 this.$router.push('/search/'+this.keyword+"?keyword1="+this.keyword.toUpperCase())
2.模板字符串
this.$router.push(`/search/'+${this.keyword}+"?keyword1="+${this.keyword.toUpperCase()}`)

3.对象写法
this.$router.push({
    name:'search', 
    params:{keyword:this.keyword},
    query:{keyword1:this.keyword.toUpperCase()}
})
```





#### params参数+

```js
//$route  路由组件的实例对象身上有一个$route属性(对象),身上有一个params属性.
$route: Object
    fullPath: "/home/message/detail/?id=001&title=%E6%B6%88%E6%81%AF1&content=%E7%88%B1%E6%8A%BD%E7%83%9F"
    hash: ""
    matched: (3) [{…}, {…}, {…}]
    meta: {}
    name: undefined
    params: {}
    path: "/home/message/detail/"
    query: {id: "001", title: "消息1", content: "爱抽烟"}
__proto__: Object


=======================================================
    
//流程:
1.传参: 路由链接标签通过to属性,
   <router-link :to="`url/${id}/${title}/${content}`">标签体内容</router-link>
2.接参-注册路由处: 通过路由配置对象里的path属性占位接收. path:'url/:id/:title/:content'
 2.1 收集传递过来的params参数,会被放到当前路由对象的params对象当中.
3.用参-路由组件: 通过computed属性获取到this.$route.params中的id,title和content值.

//
this.$router.push('/login/'+this.keyword)

path:'/login/:params'
```





#### query参数+

```js
//$route 路由组件的实例对象身上有一个$route属性(对象).身上有一个query属性

//流程:
1.其他路由组件-传参:路由链接标签里传递query参数 以?开头以&链接以key=value值形式添加参数,例如 "`xx.com/?id=${..}&title=${..}`"
2.注册路由处-接收参数,query参数无需声明即可接收
3.目标路由组件-使用参数: 通过computed属性获取到this.$route.query中id,title和content的值.通过data只能获取到第一次的.

```





#### query+params

```js
//流程:
1.传参-其他组件: params参数要写在前面,query紧随后面. 例:"`xxx.com/${id}?title=${y.title}&content=${y.content}`"
2.接参-路由注册: path:'detail/:id'  //同时接收params和query，要先声明params
3.用参-目标路由组件: 使用computed获取对象的this.$router.query或this.$route.params中的对象的属性值.


```



#### 命名路由简化路由跳转|传参+

#### 声明式+编程式路由导航

```js
//简介:
通过一个名称来标识一个路由显得更方便一些.   命名路由才能配合to的对象写法
//格式:
- 父路由组件中

//声明式路由导航
<router-link 
	:to="{
		name:'xiangqing',   //相应在路由注册处,也有个相同的name属性
        params:{id:msg.id}, //传递params参数
        query:{title:msg.title, content:msg.content} //传递query参数
	}">{{msg.title}}</router-link>

//编程式路由导航 name可以搭配params,query,但是path只能搭配query
this.$router.push({
    name:'xiangqing', //路由组件名称
    params:{id:msg.id},
    query:{title:msg.title, content:msg.content}
})

this.$router.push({
    path:'/xiangqing',
    query:{title:msg.title, content:msg.content}
})

- 路由注册:
children:[
    {
        path:'detail/:id',
        component:Detail,
        name:'xiangqing'
    }
]
```



#### 路由元信息meta

```js
//定义路由时可以配置meta字段,值为一个对象形式



//访问位置
当访问目标组件时(meta配置所在的组件),在vc实例身上的,其他组件标签当然可以使用:
1. 在$route.meta身上


//使用案例 当访问某个路由组件的时候通过meta属性来决定是否显示某个公共组件

//App组件中的公共组件标签<Footer/>
模板中Footer组件标签:
<Footer v-show="$router.meta.isHidden"/>

路由器配置中,search组件:
const router=new VueRouter({
    routes:[
        {
            path:'/foo',
            component:Foo,
            meta:{isHidden:true}
        }
    ]
})
```







#### 路由配置的props属性+

```js
//介绍:
1.原因:
 1.1在组件中使用 $route 会使之与其对应路由形成高度耦合,从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。(使用 props 将组件和路由解耦)
 1.2通过路由配置传递给路由组件传递props属性,简化了以往需要computed计算得到$route.params/query.属性名来获取url参数

2. 路由新增一个属性props:{},有3种形式(静态数据,布尔值,函数):  ****
 2.1 映射自定义的静态数据给当前路由,但只能传递非params和query参数
 2.2 布尔值为true, 映射params参数为props,传给路由组件
 2.3 路由对象中的属性props可以为一个函数,参数route(vc或vm身上的$route),返回一个对象.对象key-value作为传递给组件props的key-value
	

 2.3.1 $route身上有params和query参数
 例如:
children:[
    {
        // path:'detail/:id/:title/:content', //声明接收params参数
		// path:'detail', //query参数无需声明即可接收
        path:'detail/:id',
        component:Detail,
        name:'xiangqing',
       // props:{carName:'马自达·阿特兹'} //通过props对象形式, 映射自定义的静态数据
	   // props:true //映射params参数为props传给路由组件中的属性
		props(route){ //此处接收到的route是vc或vm身上的$route 当前的路由对象
            const{id}=route.params;
            const{title, content}=route.query;
            return {
                id, title, content
            }
        }
    }
]

 
3.接收props参数
<script>
export default{
    name:'Detail',
    props:['id', 'title', 'content'],
    computed:{
        /*
        id(){ return this.$route.params.id },
        title(){ return this.$route.query.title },
        content(){ return this.$route.query.content }
        */
    }
}
</script>
```



#### 编程式路由导航++

```js
//介绍
除了使用<router-link>创建a标签来定义导航链接,还可以借助router的实例方法来实现.
在Vue实例内部,可以通过$router访问路由实例,可以调用this.$router.push

```

#### api(go back push replace)

```js
$router 是router为VueRouter的实例

//api
1.	this.$router.push(path): 相当于点击路由链接(可以返回到当前路由界面,浏览器可以回退)
2.	this.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)
3.	this.$router.back(): 请求(返回)上一个记录路由
4.	this.$router.go(-1): 请求(返回)上一个记录路由
5.	this.$router.go(1): 请求下一个记录路由

```



```js
//不保留历史痕迹 在路由链接里添加关键字 replace
//使用$router, 是new VueRouter的实例化对象身上的属性.

methods:{
    事件回调(x){
        this.$router.push(path);  path就是路径, 事件函数可以传参
    }
}
```





#### 缓存路由组件keep-alive

```js
//路由组件不显示了会被销毁,通过生命周期(mounted, beforeDestroy)查看验证

//使用keep-alive阻止路由组件销毁. 使用include='组件名称'来指定不销毁的组件.如果都不销毁,占内存.
<keep-alive include='子组件名称'>
    <router-view></router-view>
</keep-alive>


```





### 路由模式

```js
//hash路由 browser路由

路由配置文件中默认hash模式,URL根目录后有个'#'号. 通过mode属性启用browser路由,去除URL后的'#'号

const router=new VueRouter({
    mode:'history', //hisroty/hash
    routes:[..]
})
```



### 模糊匹配

```js
//vue里默认严格匹配,开启模糊匹配,在path路径之后添加'*'号.  了解
```





### 默认显示页面

```js
//默认显示页面设置
在要设置的路由同层级的最后配置一个对象,属性有path和redirect.

const router=new VueRouter({
    mode:'hisroty',
    routes:[
        {},
        {},
        {
            path:'/',
            redirect:'/about'  //写路径而不是写组件s
        }
    ]
})
```



### 路由里开启异步任务++

```js
//消息延迟出现  使用watch,可以添加定时器
//和 react中的异步actions类似

//获取detail路由组件中URL参数,延后显示
//在detail组件的script标签中的配置添加methods方法
watch:{
    $route:{  //监视的是vc身上的$route属性
        deep:true,
        immediate:true,
        handler(value){
            setTimeout(()=>{
                this.content=value.query.content;
            })
        }
    }
}

```



### Vue脚手架配置代理

```js
参考：vue脚手架配置代理.md
```



### axios

#### 1.axios拦截器

```js
axios拦截器
(1).axios请求拦截器:
 1.是什么？
 在真正发请求前执行的一个回调函数
 2.作用：
 对每次请求做一些处理，例如：统一直追加某些请求头、处理参数等
(2).axios响应拦截器:
 1.是什么？
 得到响应之后执行的两个回调函数（一个给成功用，一个给失败用）
 2.作用：
 若请求成功，对成功的数据进行处理 请求拦截器中失败的回调一般不写
 若请求失败，对失败进行进一步操作 
```

```js
//设置文件夹
src同级目录下设置ajax/axios.js //或者是axios/index.js
import axios from 'axios';

//请求拦截器 本质上是一个函数.请求真正发出去之前会调用该函数,调完该函数,再发请求
axios.interceptors.request.use((config)=>{
    //config.headers.demo=123; 给所有ajax请求追加请求头
    //config.params.age=18; 给所有ajax请求追加query参数
    return config;
})

axios.interceptors.response.use(
	(response)=>{ //响应成功走这个函数,状态码2开头 response=响应报文
        return response.data;
    },
    (error)=>{ //响应失败走这个函数(状态码不是2开头)
        //此处返回的若是非promise值,则组件中走成功的回调
        //此处返回的若是成功的promise值,则组件中走成功的回调
        //此处返回的若是失败的promise值,则组件中走失败的回调
         //此处返回的若是初始化的promise值,则组件啥也不走
        alert(error.message);       //可以省略在组件中的trycatch
        return new Promise(()=>{})
    }
)

export default axios;


//组件中导入拦截器
<script>
	import axios from './ajax/axios'

	export default {
		name:'App',
		methods:{
			async getData(){
				const result = await axios.get('https://v1.hitokoto.cn/',{params:{name:'tom'}})
				console.log(result) //可以省略try..catch语句
			}
		}
	}
</script>
```



#### 2.项目中的axios的使用

#### 2.1 axios

```js
//axios封装 请求和响应拦截,错误统一处理
import axios from 'axios';
import {Toast} from 'vant';

const service = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 6000,
  withCredentials: false //设置跨域是否允许携带凭证(开发环境需要配置，因为要使用跨域；生产环境可能需要将其注释掉！)
});

// 设置post请求头
const contentTypeUTF8 = 'application/x-www-form-urlencoded;charset=UTF-8';
const contentTypeJSON = 'application/json';
service.defaults.headers.post['Content-Type'] = false ? contentTypeUTF8 : contentTypeJSON;

//请求拦截器
service.interceptors.request.use(
  (config) => {
  	Toast.loading({
    	overlay: true,
    	duration: 0,
    	forbidClidk: true,
    	message: '加载中''
  	});
  	return config;
	},
  (error) => {
    Toast.clear();
    Toast({
      message: '请求错误',
      duration: 1000,
      forbidClick: true
    })
    return Promise.reject(error);
  }                           
)

//响应拦截器
service.interceptors.response.use(
	(response) => {
    Toast.clear();
    return Promise.reject(response.data);
  },
  (error) => {
    Toast.clear();
    let {response, message} = error;
    
    //状态码404
    if (response?.status === 404) {
    	Toast({
      	message: '网络请求不存在',
        duration: 1000,
        forbidClick: true
      });
    	return error;
    }
  
  	//网络异常
  	if (!window.navigator.onLine) {
  		Toast({
        message: '请检查网络是否连接正常',
        duration: 1500,
        forbidClick: true
      })
  		return;
		}

		//请求超时
		if (message.includes('timeout')) {
      Toast({
        message: '请求超时',
        duration: 1500,
        forbidClick: true
      })
      return error
    }

		return error
  }
)



/**********************************************
 * get方法，对应get请求 
 * @param url     @type {String}  [请求的url地址] 
 * @param params  @type {Object}  [请求时携带的参数] 
 */
export const axiosGet = ({url, data}) => service.get(url, data);

/********************************************** 
 * post方法，对应post请求 
 * @param url     @type {String}  [请求的url地址] 
 * @param datas  @type {Object}  [请求时携带的参数] 
 */
export const axiosPost = ({url, data}) => service.post(url, data);



/********************************************** 
 * post方法，对应post请求 
 * @param url     @type {String}  [请求的url地址] 
 * @param datas  @type {Object}  [请求时携带的参数] 
 */
// export const post = (url, data) => service.post(url, datas);

// export const post = (url, params) => {
//     return new Promise((resolve, reject) => {
//       if(isAddPassword === 'true'){
      
//         // let authTokenUrl = sessionStorage.getItem("authTokenUrl") ? JSON.parse(sessionStorage.getItem("authTokenUrl")) : {};
//         // let obj = {auth_token: authTokenUrl.authToken ||  ENV.VUE_APP_TOKEN}
//         // params = {...params,...obj}
//         let paramsData = testencrypt(JSON.stringify(params)) 

//         service.post(url,paramsData).then(res => {
//             resolve(res);
//         })
//         .catch(err => {
//             reject(err)
//         })
//       } else {
        
//         service.post(url,params).then(res => {
//           resolve(res);
//         })
//         .catch(err => {
//             reject(err)
//         })
//       }
        
//     });
// }

/********************************************** 
 * put方法，对应put请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
// export function put(url, params) {
//     return new Promise((resolve, reject) => {
//         service.put(url, JSON.stringify(params))
//             .then(res => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     });
// }


/********************************************** 
 * delete方法，对应delete请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
// export function del(url, params) {
//     return new Promise((resolve, reject) => {
//         service.delete(url, JSON.stringify(params))
//             .then(res => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     });
// }
```





### UI组件库-element

```js
//主页
element.eleme.cn

//使用
1.完整引入
1.1 引入:main.js中
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
1.2 使用组件标签
<el-button>默认按钮</el-button> //直接在模板中添加即可
========================================================	
2.按需引入
 2.0 yarn add element-ui
 2.1 安装 yarn add babel-plugin-component
 2.2 在babel.config.js中设置   //官网更新慢,按此处来设置
  2.2.1  
 module.exports = {
     presets: [
         '@vue/cli-plugin-babel/preset',
         ["@babel/preset-env", { "modules": false }]
     ],
     plugins:[
         [参考：vue脚手架配置代理.md
          "component",
          {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
          }
     ]
     ]
 }
   
 2.3 引入和全局注册需要使用的组件 在main.js中
 2.3.1 引入和注册
	import {Button,Message,MessageBox} from 'element-ui';
	Vue.component(Button.name, Button)  //注册全局组件
	Vue.component(Message.name, Message)

  2.3.2 标签书写样式
    <el-button>xxx</el-button>
 
 2.4 在组件.vue中引入和局部注册 
	import {Button} from 'element-ui'
	export default{
        name:'App',
        components:{Button}
    }
 2.5 写样式
```



#### 自定义主题

```js
//介绍
https://element.eleme.cn/#/zh-CN/component/custom-theme
//主题编辑器

//仅替换主题色 使用在线主题生成工具 
1.下载
2.src下导入theme文件夹
3.重设vue.config.js文件, 将theme变为~src/theme 

```



## vue中组件通信方式总结

```js
组件间通信方式总结
组件之间的关系:
1.父子
2.祖孙
3.兄弟
4.其它
vue组件间通信方式:
1.props
2.自定义事件  
3.全局事件总线
4.消息订阅与发布(Pubsub)
5.slot插槽
6.vuex

1.props:
1.此方式用于父组件与子组件之间传递数据
2.所有标签属性都会成为组件对象的属性, 模板页面可以直接引用
问题: 
1.如果需要向非子后代传递数据必须多层逐层传递
2.兄弟组件间也不能直接props通信, 必须借助父组件才可以

2.vue自定义事件
1. 用来实现子组件向父组件通信的方式, 功能类似于函数类型的props
2. 实现流程
(1)	父组件: 
1.组件标签属性或mounted(): 给子组件对象绑定事件监听, 用于接收数据
2.在beforeDestroy(): 通过子组件对象解绑对应的事件监听
(2)	子组件: 
通过当前组件对象分发事件, 传递数据值

3.消息订阅与发布
1. 消息订阅与发布与全局事件总线一样都可以实现任意组件间通信
2. 但需要额外引入第三方实现库, 而全局事件总线不用, 一般在vue项目中不用
3. 实现流程
(1)	在接收数据的组件: 
1.mounted(): 订阅消息, 在回调函数中接收数据并处理
2.beforeDestroy(): 取消订阅
(2)	在发送数据的组件: 发布消息

4.slot插槽
1. 当一个组件有不确定的结构时, 就需要使用slot技术
2. 注意: 插槽内容是在父组件中编译后, 再传递给子组件
(1)	当只有一个不确定的结构时, 可以使用默认slot
(2)	当有多个不确定的结构时, 可以使用命名slot
3. 特殊情况：如果决定结构的数据在子组件, 那需要使用作用域插槽


5.全局事件总线(是什么,作用, 流程)
1. 全局事件总线是任意关系的组件间通信(传值/数据)的解决方案
2. 全局事件总线是一个对象, 有事件处理的相关方法, 在vue中就是vm对象
3. 实现流程
(1)	将新创建的vm或最外层已有的vm作为总线对象保存到Vue的原型对象上
(2)	需要传值/数据的组件: 得到总线对象, 调用其$emit()分发事件, 携带数据
(3)	需要接收消息/数据的组件: 
①	在mounted()中: 得到总线对象, 调用其$on()绑定监听, 接收数据
②	在beforeDestroy()中: 得到总线对象, 调用其$off()解绑监听
```





## vue脚手架配置代理总结



### 方法一

> 在vue.config.js中追加如下配置

```json
devServer:{
    "proxy":"http://localhost:5000"
}
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （有限匹配前端资源）



### 方法二

编写vue.config.js配置具体代理规则：

```js
module.exports = {
	devServer: {
    proxy: {
      '/api1': {// 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api1': ''}
      },
      '/api2': {// 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:5001',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      }
    }
  }
}
```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。





## 组件间10种通信

**组件间10种通信方式:**

    0). pubsub
    1). 组件间通信最基本方式: props
    2). 组件间通信高级1: vue自定义事件与全局事件总线
    3). 组件间通信高级2: v-model
    4). 组件间通信高级3: .sync 属性修饰符
    5). 组件间通信高级4: $attrs与$listeners
    6). 组件间通信高级5: $children与$parent
    7). 组件间通信高级6: 作用域插槽slot-scope
    8). 组件间通信高级7: vuex

#### 分类

父子间通信: 

* props 
* $emit 
* eventBus 
* .sync 
* $attrs&$listeners 
* provide$inject 
* $parent&$child 
* $root 
* vuex

### PubsubJs

```js
//一般使用全局事件总线代替. 比全局总线, 有体积缺点.
```



### Vuex

```js
//任何组件间通信都可以使用
看项目大小决定是否使用.项目如果小,使用veux反而会降低效率,因为vuex需要占用打包体积.

6个核心概念
```







### props

#### 特征

* 用来实现父子之间相互通信的最基本方式, 也是用得最多的方式; Vue设计理念是单向数据流,父子组件数据传递应自上而下.
* 父 ==> 子, 传递的是非函数类型的属性
* 子 ==> 父, 传递的是函数类型的属性
* 其它关系的组件使用props就会比较麻烦.需要经过父组件传递



#### 实例

父=>子

父组件传给子组件数值，子组件不要对其进行修改，而是需要找个变量将父组件传递的数值给赋值过来然后对变量进行操作.

代码中的方式只适合prop里面的数值是原始类型，不能是对象类型，如果count是对象类型，需要进行深拷贝进行赋值，不然的话，改变number的数值，count的数值还是会改变的

```html
<div id="app">
  <counter :count='1'></counter>
  <counter :count='2'></counter>
</div>
<script>
  Vue.component('counter', {
    props: ['count'],
    data: function() {
      return {
        number: this.count
      }
    },
    template: '<div @click="add">{{number}}----{{count}}</div>',
    methods: {
      add: function() {
        this.number++,
      }
    },
  })
  let vm = new Vue({
    el: "#app",
  })
</script>
```

子=>父

> [Vue通过props来实现子组件给父组件传递参数 - 问某完红 - 博客园 (cnblogs.com)](https://www.cnblogs.com/renag/p/15686418.html)
>
> 通过props属性让父组件传递给子组件传递一个函数,子组件再调用这个函数,把要传递的数据通过参数的形式传递给父组件,父组件可以接收数据.
>
> 注意: 如果我们传递data中的一个数据(函数类型)来实现这种效果呢? 很麻烦

```html
		<div id="root">
      <counter :add-Count="addCount"></counter>  //vue推荐使用kebab-case写法
      <h3>子组件中num的值是: {{count}}</h3>
		</div>

		<script>
      Vue.component('counter', {
        template: `
          <div @click="add">num的值是(点击新增): {{num}}!</div>
        `,
        data(){
          return {
            num: 0
          }
        },
        props: ['addCount'],
        methods: {
          add() {
            this.num++;
            this.addCount(this.num)
          }
        }
      })
			let vm = new Vue({
				el: "#root",
        data: {
          count: 0,
        },
        methods: {
          addCount(num) {
            this.count = num
          }
        }
			});
		</script>
```





###  `.sync 属性修饰符`

#### 语法

```html
<my-component
	v-bind:title.sync="doc.title"
></my-component>

//语法糖
<my-component
  v-bind:title="doc.title"
  v-on:udpate:title="doc.title=$event"
 ></my-component>
```

#### 特点

* 绑定一个自定义事件监听, 用来接收子分组分发事件携带的数据来更新父组件的数据.

* 功能与v-model相似,实现父子组件相互通信,更准确的是双向数据同步.

* 语法本质:任意名称props与event的语法


#### sync和v-model比较

  相同: sync和v-model用在组件标签上,都可以达到父子组件数据同步
  不同: sync达到数据同步: 子组件内部不是表单类元素; v-model达到数据同步: 子组件内部一定是表单类元素

#### 利用sync能做什么呢?

* 实现父子组件间数据双向同步;常用于封装可复用组件(需要更新父组件数据)
* v-model一般用于带表单项的组件;sync一般用于不带表单项标签的组件
* 代码实现 子组件中的数值改变后父组件中的值也跟着变化
  ​ 
  ​ 





### v-model

#### 语法糖

原生input上的v-model的本质:  动态的value属性(单向数据绑定v-bind)与原生input事件监听

```html
组件标签上的v-model的本质: 是单向数据绑定v-bind与自定义input事件监听的组合
<input type='text' v-model='name2'>
<input type="text" :value="name2" @input="name2=$event.target.value">


//2.在组件身上使用
父组件: 
<CustomInput :value="name4" @input="name4=$event"/>
子组件: 
props: ['value']
<input type="text" :value="value" @input="$emit('input', $event.target.value)">
```



#### 特点

* v-model不仅能实现原生标签与其父组件间数据双向通信(同步), 也能实现父子组件间数据双向通信(同步)
* 一般用于封装带表单项的复用性组件

#### 使用



```js

```









### 自定义事件与事件总线

#### Vue自定义事件

vue的自定义事件: 用来实现子向父组件通信, 功能相当于函数类型的props

绑定vue自定义事件监听,只能在组件标签上绑定,事件名是任意的, 可以与原生DOM事件名相同
只当执行$emit('自定义事件名', data)时分发自定义事件, 才会触发自定义事件监听函数调用
$event: 就是分发自定义事件时指定的data数据 $event可以是任意类型, 甚至可以没有

```js
vue自定义事件

//其他: 原生DOM事件介绍

原生DOM事件
绑定原生DOM事件监听的2种情况
在html标签上绑定DOM事件名的监听
在组件标签上绑定DOM事件名的监听, 事件绑定在组件的根标签上
当用户操作对应的界面时, 浏览器就会自动创建并封闭包含相关数据的事件对象, 分发对应的事件, 从而触发事件监听回调函数调用
事件对象event, 本质是 "事件数据对象"
event对象内的数据属性: target / offsetX / offsetY / keyCode等
$event就是浏览器创建的event对象, 默认传递给事件监听回调函数的就是它
```



| 类型          | 事件类型 | 回调函数   | 谁调用                       | event事件对象                           |
| ------------- | -------- | ---------- | ---------------------------- | --------------------------------------- |
| DOM事件       | 固定几个 | 自己去定义 | 系统调用浏览器去调用         | 浏览器调用回调,传递的默认参数event      |
| Vue自定义事件 | 无数个   | 自己去定义 | 自己去调用 使用$emit触发调用 | 默认传递自己给的参数(没有就是undefined) |



```html

<div id="root">
  <counter @inc="addNumber"></counter>
</div>

<script>
  Vue.component("counter", {
    template: `
          <div @click="add">点击一下</div>
        `,
    methods: {
      add() {
        this.$emit('inc', '传递的数据')
      },
    },
  });
  let vm = new Vue({
    el: "#root",
    data: {
      count: 0,
    },
    methods: {
      addNumber(step) {
        console.log(step)
      },
    },
  });
</script>

//自定义事件相当于
vm.$on('inc', function addNumber(step) { console.log(step)} )
vm.$emit('inc', '传递的数据')
```





#### Vue全局事件总线EventBus

##### 是什么

> 思路就是声明一个全局Vue实例变量EventBus，把所有的通信数据，事件监听都存储到这个变量上，这样就到达在组件间实现数据共享，有点类似Vuex。但是这种方式只适合极小的项目，复杂的项目还是推荐Vuex。

##### 实现

*  Vue原型对象上有3个事件处理的方法: `$on() / $emit() / $off()`

* 组件对象的原型对象是vm对象: 组件对象可以直接访问Vue原型对象上的方法


```javascript
//入口js中的vm作为全局事件总线对象: 
beforeCreate() {
  Vue.prototype.$bus = this
}
//分发事件/传递数据的组件: 
this.$bus.$emit('eventName', data)


//处理事件/接收数据的组件: 
this.$bus.$on('eventName', (data) => {})
```



```html
//另一种形式 兄弟组件之间的通信

<div id="app">
  <a-name></a-name>
  <b-name></b-name>
</div>
<script>
	const bus = new Vue()
  Vue.component('a-name', {
    template: '<h1>我是前面的组件</h1>',
    created() {
      bus.$on('aa', result => { console.log(result)})
    }
  });
  
  Vue.component('b-name', {
    template: '<h1 @click="click(2)">我是后面的组件</h1>',
    created() {
      click(id) {
        bus.$emit('aa', id)
      }
    }
  })
</script>
```



### 4: $attrs与$listeners

#### 是什么

父组件中给子组件传递的所有属性组成的对象及自定义事件方法组成的对象

#### 传递方式

**$attrs**

> 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (`class` 和 `style` 除外)

**$listeners**

> 包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件——在创建更高层次的组件时非常有用。
>
> 在Vue3中已经被删除,放到$attrs中

可以通过v-bind 一次性把父组件传递过来的属性添加给当前组件的子组件 `v-bind="$attrs"`
可以通过v-on   一次性把父组件传递过来的事件监听添加给子组件 `v-on="$listeners"`

v-bind: 的特别使用: `<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>`
v-on: 的特别使用: `<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>`

```html
<div id="app">
  <child 
  	:foo="foo" 
    :bar="bar" 
    @one.native="triggerOne" 
    @two="triggerTwo"
  ><child>
</div>
    
<script>
	let Child = Vue.extend({
    template: '<h2>{{ foo }}</h2>',
    props: ['foo'],
    create() {
      console.log(this.$attrs, this.$listeners)
      // -> {bar: "parent bar"}
      // -> {two: fn}

      // 这里我们访问父组件中的 `triggerTwo` 方法
      this.$listeners.two()
      // -> 'two'
    }
  })   
  
  new Vue({
    el: '#app',
    data: {
      foo: 'parent foo',
      bar: 'parent bar'
    },
    methods: {
      triggerOne() {
        alert('one')
      },
      triggerTwo() {
        alert('two')
      }
    }
  })
</script>
```







### provide/inject

#### 类型

* provide: `Object | () => Object`
  * `provide` 选项应该是一个对象或返回一个对象的函数,该对象包含可注入其子孙的 property
  * 在该对象中可以使用Symbols 作为 key，但是只在原生支持 `Symbol` 和 `Reflect.ownKeys` 的环境下
* inject: `Array<string> | {[key: string]: string | Symbol | Object}`
  * `inject` 选项应该是：
    * 一个字符串数组 或
    * 一个对象: 对象的 key 是<u>本地的绑定名</u>(写死的要和传递过来的一致)，value 是：
      * 在可用的注入内容中搜索用的 key (字符串或 Symbol)，或 
      * 一个对象，该对象的的:
        * `from` property 是在可用的注入内容中搜索用的 key (字符串或 Symbol)
        * `default` property 是降级情况下使用的 value



> 以上地方没理解. ????

#### 注意事项

* `provide` 和 `inject` 绑定并不是可响应的。这是刻意为之的。

* 如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的



#### 详细

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效。









### 5: $children与$parent属性

```js
$children：所有子组件对象的数组
$parent：代表父组件对象

父组件当中可以通过$children找到所有的子组件去操作子组件的数据（当然可以找孙子组件）
子组件当中可以通过$parent找到父组件（当然可以继续找爷爷组件）操作父组件的数据


理解:
    $children: 所有直接子组件对象的数组, 利用它可以更新多个子组件的数据
    $parent: 父组件对象, 从而可以更新父组件的数据
    $refs: 包含所有有ref属性的标签对象或组件对象的容器对象
利用它们能做什么?
    能方便的得到子组件/后代组件/父组件/祖辈组件对象, 从而更新其data或调用其方法
    官方建议不要大量使用, 优先使用props和event
    在一些UI组件库定义高复用组件时会使用$children和$parent, 如Carousel组件
    
```

#### 扩展

```js
//mixin

 多个组件有部分相同的js代码
 html js  css 相同     封装组件
 单个组件js代码重复    封装函数
 不同的组件js代码重复  封装混合  
 
 实现组件之间js代码的复用  利用vue的mixin技术   参考官网
 比如多个组件的methods里面很多函数都是重复的 那么我们可以定义单独的模块去把这些相同的代码定义到外部
 export const xxxMixin = {
     methods:{
         重复的代码写在这
     }
 }
```







### 作用域插槽slot-scope

```js
命名插槽中的内容可被认作是默认值, 可以显示可以被覆盖

//作用域插槽
1.数据在父组件中
2.数据最终传递给了子组件进行vfor展示
3.子组件在展示过程中,数据的结构由父组件决定.

父组件要把需要子组件展示的数据传递给子组件
子组件在展示的过程当中，需要改变结构的数据传回给父组件
父组件再把结果和数据一并传回给子组件


什么情况下使用作用域插槽?
    父组件需要向子组件传递标签结构内容
    但决定父组件传递怎样标签结构的数据在子组件中
编码:
    
子组件:
<slot :row="item" :$index="index">  <!-- slot的属性会自动传递给父组件,传递的是一个对象 -->
</slot>
父组件:
<template slot-scope="{row, $index}">
 <span>{{$index+1}}</span> &nbsp;&nbsp;
<span :style="{color: $index%2===1 ? 'blue' : 'green'}" >{{row.text}}</span>
</template>
使用作用域插槽:
    对于封装列表之类的组件特别需要
    element-ui中: Table组件中就用到了slot-scope
```







### 7: vuex

    vuex用来统一管理多个组件共享的状态数据
    任意要进行通信的2个组件利用vuex就可以实现
        A组件触发action或mutation调用, 将数据保存到vuex的状态中
        B组件读取vuex中的state或getters数据, 得到最新保存的数据进行显示









## Vue开发问题

### 1.Vue数据更新但页面没有更新的7种情况

> https://segmentfault.com/a/1190000022772025
> 如果你发现你自己需要在 Vue 中做一次强制更新，99.9% 的情况，你错了

#### 1.1

```js
//1.Vue 无法检测实例被创建时不存在于 data 中的 property
原因：由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 data 对象上存在才能让 Vue 将它转换为响应式的。
```





#### 1.2

```js
//2.Vue 无法检测对象 property 的添加或移除
原因：官方 - 由于 JavaScript（ES5） 的限制，Vue.js 不能检测到对象属性的添加或删除。因为 Vue.js 在初始化实例时将属性转为 getter/setter，所以属性必须在 data 对象上才能让 Vue.js 转换它，才能让它是响应的。
解决: 
 动态添加
 Vue.set(vm.obj, propertyName, newValue);
 vm.$set(vm.obj, propertyName, newValue);
 this.obj = Object.assign({}, this.obj, {a:1, b:2})
 动态移除
 Vue.delete(vm.obj, propertyName);
 vm.$delete(vm.obj, propertyName);
```



#### 1.3

```js
//3.Vue 不能检测通过数组索引直接修改一个数组项
原因：官方 - 由于 JavaScript 的限制，Vue 不能检测数组和对象的变化；尤雨溪 - 性能代价和获得用户体验不成正比。
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)

// vm.$set
vm.$set(vm.items, indexOfItem, newValue)

// Array.prototype.splice  使用重写的数组的7个方法
vm.items.splice(indexOfItem, 1, newValue)

//扩展: Object.defineProperty() 可以监测数组的变化
Object.defineProperty() 可以监测数组的变化。但对数组新增一个属性（index）不会监测到数据变化，因为无法监测到新增数组的下标（index），删除一个属性（index）也是。
```



```js
var arr = [1, 2, 3, 4]
arr.forEach(function(item, index) {
    Object.defineProperty(arr, index, {
    set: function(value) {
      console.log('触发 setter')
      item = value
    },
    get: function() {
      console.log('触发 getter')
      return item
    }
  })
})
arr[1] = '123'  // 触发 setter
arr[1]          // 触发 getter 返回值为 "123"
arr[5] = 5      // 不会触发 setter 和 getter
```



#### 1.4

```js
//4.Vue 不能监测直接修改数组长度的变化
原因：官方 - 由于 JavaScript 的限制，Vue 不能检测数组和对象的变化；尤雨溪 - 性能代价和获得用户体验不成正比。

var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items.length = 2 // 不是响应性的

//解决 数组方法
vm.items.splice(newLength)

```



#### 1.5

```js
//5.在异步更新执行之前操作 DOM 数据不会变化
原因：Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。


```

```js
//场景
<div id='example'>{{message}}</div>

let vm = new Vue({
  el: '$example',
  data: {
    message: '123'
  }
})

vm.message = 'new message'; //更改数据
vm.$el.textContent === 'new message'; //false
vm.$el.style.color = 'red'; //页面没有变化
```

```js
//解决方法

//场景
<div id='example'>{{message}}</div>

let vm = new Vue({
  el: '$example',
  data: {
    message: '123'
  }
})

vm.message = 'new message'; //更改数据
Vue.nextTick(function() {
  vm.$el.textContent === 'new message';
	vm.$el.style.color = 'red';
})
```

#### 1.5.1 异步更新带来的数据响应的误解

```js
<!-- 页面显示：我更新啦！ -->
<div id="example">{{message.text}}</div>
var vm = new Vue({
  el: '#example',
  data: {
    message: {},
  }
})
vm.$nextTick(function () {
  this.message = {}
  this.message.text = '我更新啦！'
})

那是因为 Vue.js 的 DOM 更新是异步的，即当 setter 操作发生后，指令并不会立马更新，指令的更新操作会有一个延迟，当指令更新真正执行的时候，此时 text 属性已经赋值，所以指令更新模板时得到的是新值。

模板中每个指令/数据绑定都有一个对应的 watcher 对象，在计算过程中它把属性记录为依赖。之后当依赖的 setter 被调用时，会触发 watcher 重新计算 ，也就会导致它的关联指令更新 DOM。
具体流程如下所示：

执行 this.message = {}; 时， setter 被调用。
Vue.js 追踪到 message 依赖的 setter 被调用后，会触发 watcher 重新计算。
this.message.text = '我更新啦！'; 对 text 属性进行赋值。
异步回调逻辑执行结束之后，就会导致它的关联指令更新 DOM，指令更新开始执行。
所以真正的触发模版更新的操作是 this.message = {};这一句引起的，因为触发了 setter，所以单看上述例子，具有响应式特性的数据只有 message 这一层，它的动态添加的属性是不具备的。
```



#### 1.6

```js
//6.循环嵌套层级太深，视图不更新？
针对上述情况有人给出的解决方案是使用强制更新：vm.$forceUpdate()
```



#### 1.7

```js
//7.拓展：路由参数变化时，页面不更新（数据不更新）
原因：路由视图组件引用了相同组件时，当路由参会变化时，会导致该组件无法更新，也就是我们常说中的页面无法更新的问题。
<div id="app">
  <ul>
    <li><router-link to="/home/foo">To Foo</router-link></li>    
    <li><router-link to="/home/baz">To Baz</router-link></li>    
    <li><router-link to="/home/bar">To Bar</router-link></li>    
  </ul>    
  <router-view></router-view>
</div>
const Home = {
  template: `<div>{{message}}</div>`,
  data() {
    return {
      message: this.$route.params.name
    }
  }
}

const router = new VueRouter({
  mode:'history',
    routes: [
    {path: '/home', component: Home },
    {path: '/home/:name', component: Home }
  ]
})

new Vue({
  el: '#app',
  router
})


上段代码中，我们在路由构建选项 routes 中配置了一个动态路由 '/home/:name'，它们共用一个路由组件 Home，这代表他们复用 RouterView
当进行路由切换时，页面只会渲染第一次路由匹配到的参数，之后再进行路由切换时，message 是没有变化的。

解决方法(多种,只列举几种常见的):
1.通过watch监视$route的变化
watch: {
  '$route': function() {
    this.message = this.$route.param.name;
  }
}

2.给<router-view>绑定key属性
给 <router-view> 绑定 key 属性，这样 Vue 就会认为这是不同的 <router-view>。
弊端：如果从 /home 跳转到 /user 等其他路由下，我们是不用担心组件更新问题的，所以这个时候 key 属性是多余的

```





















