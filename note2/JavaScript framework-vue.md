## 前端框架出现前的比较

### 页面局部刷新

> [前端框架的出现 | 深入理解Vue.js实战 (godbasin.github.io)](https://godbasin.github.io/vue-ebook/vue-ebook/0.html#前端的飞速发展)

一般看来，浏览器生成了最终的 Render 树，页面也已经渲染完毕，似乎浏览器已经完成了它的工作了。但现实中我们的页面更多的不只是静态的页面，还会包括点击、拖拽等事件操作，以及接口请求、数据渲染到页面等动态的交互逻辑，这时候我们会需要更新页面的信息。

我们的业务代码中情况会复杂得多，除了插入内容，还包括内容更新、删除元素节点等。不管是哪种情况，目前来说前端一般分为两种方式：

(1) 字符串模版：使用拼接的方式生成 DOM 字符串，直接通过`innerHTML()`插入页面。
(2) 节点模版：使用`createElement()`/`appendChild()`/`textContent`等方法，动态地插入 DOM 节点。

假设页面中存在`<div id="div"></div>`这样一个元素，我们需要插入一些内容如`<p>测试<a>test</a></p>`：

```javascript
var div = document.getElementById('div')

/** 1.字符串模板 **/
div.innerHTML = "<p>测试<a>test</a></p>"

/** 2.节点模板 **/
const p = document.createElement('p')
p.textContent = '测试'
const a = document.createElement('a')
a.textContent = 'test'

p.appendChild(a)
div.appendChild(p)
```

我们使用 DOM API 和 CSS API 的时候，通常会触发浏览器的两种操作：**Repaint（重绘）和 Reflow（回流）**：

- Repaint：页面部分重画，通常不涉及尺寸的改变，常见于颜色的变化。
- Reflow：意味着节点需要重新计算和绘制，常见于尺寸的改变。

在 Reflow 的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成 Reflow 后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为 Repaint。

回流的花销跟 render tree 有多少节点需要重新构建有关系，所以使用`innerHTML()`可能会导致更多的开销。

### 非框架和框架就某个功能的实现比较

> [前端框架的出现 | 深入理解Vue.js实战 (godbasin.github.io)](https://godbasin.github.io/vue-ebook/vue-ebook/0.html#前端框架的出现-2)

省略











## Vue简介

> [Vue简介-Vue是什么？-CSDNVue入门技能树](https://edu.csdn.net/skill/vue/vue-712ec6452ab547478479a4509f787517?a=vue-f92d37226dc14bb58918663305bfc15b)

### 什么是Vue

> 是一套构建用户界面的**渐进式**（用到哪一块就用哪一块，不需要全部用上）前端框架，Vue 的核心库只关注视图层



### 渐进式框架

> 所谓的渐进式框架,就是把框架分层.
>
> 最核心的部分是视图层渲染,然后往外是组件机制,在这个基础上再加入路由机制,再加入状态管理,最外层是构建工具.
>
> 所谓分层,就是说你既可以只用最核心的视图层渲染功能来快速开发一些需求,也可以使用一整套全家桶来开发大型应用.

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



### Vue 5 种特点

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

### vue基本原理

当一个Vue实例创建时，Vue会<span style="color:blue">遍历</span>data中的属性，用 <span style="color:blue">Object.defineProperty（vue3.0使用proxy ）</span>将它们转为 getter/setter，并且在内部<span style="color:blue">追踪相关依赖</span>，在属性<span style="color:blue">被访问和修改时</span>通知变化。 

每个组件实例都有相应的 <span style="color:blue">watcher 程序实例</span>，它会在<span style="color:blue">组件渲染的过程</span>中把<span style="color:blue">属性记录为依赖</span>，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。



### 什么是MVVM

Model–View–ViewModel （MVVM） 是一个软件架构设计模式,

* M：model、就是模型数据，普通的JS对象.可以理解为data中的对象
* V：view、就是Dom
* VM：view-model、就是Vue，view和model不可以直接交互，需要通过VM联系到一起

<span style="background: #ccc">M 到 V（数据驱动视图）：Data Bindings：通过数据绑定联系到一起。</span>

<span style="background: #ccc">V 到 M（视图影响数据）：Dom Listeners：通过事件监听联系到一起。</span>

<span style="background: #ccc">只要数据进行了改变，同时视图也会同时更新。</span>

#### MVVM组成图示

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/4/17/16a2afb76e831546~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)



理解了基本思想之后，我们要做什么才能**实现VM呢？**

1.首先，需要利用Object.defineProperty，将要观察的对象，转化成getter/setter，以便拦截对象赋值与取值操作，称之为<span style="color:blue">Observer</span>，也就是<u>数据观察者</u>；

2.需要将DOM解析，提取其中的指令与占位符，并赋与不同的操作，称之为<span style="color:blue">Compile</span>，也就是<u>指令解析器</u>

3.需要将Compile的解析结果，与Observer所观察的对象连接起来，建立关系，在Observer观察到对象数据变化时，接收通知，同时更新DOM，称之为<span style="color:blue">Watcher</span>，也就是<u>订阅者</u>，它是Observer和Compile之间通信的桥梁；

4.最后，需要一个公共入口对象，接收配置，协调上述三者，称为vm，也就是Vue;



### 双向绑定及原理

> CSDN vue教程
>
> 面试题: https://www.yuque.com/cuggz/interview/hswu8g

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



#### 双向数据绑定的原理

> https://www.yuque.com/cuggz/interview/hswu8g

Vue.js 是采用**数据劫持**结合**发布者-订阅者模式**的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤：

1. 需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
2. compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
3. Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是: ①在自身实例化时往属性订阅器(dep)里面添加自己 ②自身必须有一个update()方法 ③待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
4. MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。

![](https://cdn.nlark.com/yuque/0/2021/png/1500604/1618656573096-ebdc520c-5d60-4d12-ad04-5df4ebbb5fe7.png)





### vue.js数据劫持实现 ????

> CSDN vue教程

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



### 深入响应式原理

Vue 最独特的特性之一，是其非侵入性的响应式系统。数据模型仅仅是普通的 JavaScript 对象。而当你修改它们时，视图会进行更新。这使得状态管理非常简单直接



#### 如何追踪变化

* 当你把一个普通的 JavaScript 对象传入 Vue 实例作为 `data` 选项
* Vue 将遍历此对象所有的 property，并使用 [`Object.defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 把这些 property 全部转为 [getter/setter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#定义_getters_与_setters)。
  * `Object.defineProperty` 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。
* 每个组件实例都对应一个 **watcher** 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。



#### 检测变化的注意事项

由于 JavaScript 的限制，Vue **不能检测**数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。 ?

##### 对于对象

Vue 无法检测 property 的添加或移除。由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 `data` 对象上存在才能让 Vue 将它转换为响应式的。例如：

```javascript
var vm = new Vue({
  data:{
    a:1
  }
})

// `vm.a` 是响应式的

vm.b = 2
// `vm.b` 是非响应式的
```

对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property。但是，可以使用2种方法<span style="color:blue">向嵌套对象添加响应式 property</span>。

*  `Vue.set(object, propertyName, value)` 
* vm.$set

```javascript
Vue.set(vm.seomObject, 'b', 2)

this.$set(this.someObj, 'b', 2)
```



<span style="color:blue">为已有对象赋值多个新 property</span>，比如使用 `Object.assign()` 或 `_.extend()`。但是，这样添加到对象上的新 property 不会触发更新。在这种情况下，你应该用原对象与要混合进去的对象的 property 一起创建一个新的对象.

```javascript
// 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```



##### 对于数组

Vue 不能检测以下数组的变动：

1. 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
2. 当你修改数组的长度时，例如：`vm.items.length = newLength`

举个例子：

```javascript
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // 不是响应性的
vm.items.length = 2 // 不是响应性的
```



<u>解决第一类问题: 利用索引设置数组项失效</u>

方法: 

* Vue.set(vm.items, indexOfItem, newValue) / vm.$set(vm.items, indexOfItem, newValue)



<u>解决第二类为题: 修改数组长度</u>

方法:

* splice

```javascript
vm.items.splice(newLength)
```



#### 声明响应式property

由于 Vue 不允许动态添加根级响应式 property，所以你必须在初始化实例前声明所有根级响应式 property，哪怕只是一个空值：

```javascript
var vm = new Vue({
  data: {
    // 声明 message 为一个空值字符串
    message: ''
  },
  template: '<div>{{ message }}</div>'
})
// 之后设置 `message`
vm.message = 'Hello!'
```

如果你未在 `data` 选项中声明 `message`，Vue 将警告你渲染函数正在试图访问不存在的 property。



#### 异步更新队列

Vue 在更新 DOM 时是**异步**执行的。

只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。

Vue 在内部对异步队列尝试使用原生的 `Promise.then`、`MutationObserver` 和 `setImmediate`，如果执行环境不支持，则会采用 `setTimeout(fn, 0)` 代替。



例如，当你设置 `vm.someData = 'new value'`，该组件不会立即重新渲染。当刷新队列时，组件会在下一个事件循环“tick”中更新。如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手.

为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 `Vue.nextTick(callback)`。这样回调函数将在 DOM 更新完成后被调用

```html
<div id="example">{{message}}</div>

<script>
  var vm = new Vue({
    el: '#example',
    data: {
      message: '123'
    }
  })
  vm.message = 'new message' // 更改数据
  vm.$el.textContent === 'new message' // false
  Vue.nextTick(function () {
    vm.$el.textContent === 'new message' // true
  })
</script>
```

在组件内使用 `vm.$nextTick()` 实例方法特别方便，因为它不需要全局 `Vue`，并且回调函数中的 `this` 将自动绑定到当前的 Vue 实例上：

```javascript
Vue.component('example', {
  template: '<span>{{ message }}</span>',
  data: function () {
    return {
      message: '未更新'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = '已更新'
      console.log(this.$el.textContent) // => '未更新'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => '已更新'
      })
    }
  }
})
```

因为 `$nextTick()` 返回一个 `Promise` 对象，所以你可以使用新的 [ES2017 async/await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 语法完成相同的事情：

```javascript
methods: {
  updateMessage: async function () {
    this.message = '已更新'
    console.log(this.$el.textContent) // => '未更新'
    await this.$nextTick()
    console.log(this.$el.textContent) // => '已更新'
  }
}
```









## Vue环境快速搭建

### 直接引入CDN



### Vue CLI脚手架

安装步骤如下:

1. nodejs安装配置
2. 安装vue及脚手架

#### 1.安装vue.js

```
npm install vue -g`或者`cnpm install vue -g
```

根据自己的淘宝镜像源设置选择命令，其中-g是全局安装，指安装到global全局目录去

查看安装的vue信息: `npm info vue` / `cnpm info vue`

查看安装的版本: `npm list vue`

#### 2.安装脚手架vue-cli

> https://cli.vuejs.org/zh/guide/installation.html

**安装新版本**

> npm i @vue/cli@3.12.1 -g    //指定版本安装
>
> npm i @vue/cli -g    //默认安装最新版

**新建项目**

> vue create 项目名称

**启动项目**

一般来说，比较规范的项目都会有个 README.md 文件，我们可以通过该文件看到项目相关的一些内容，包括项目背景、项目启动和构建、相关负责人等说明

如果没有readme.md文件,可以查看`package.json`文件：

```json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  }
}
```

一般来说，开发环境是`dev`、`serve`等，生产环境是`build`，`scripts`里是一些任务，运行命令`npm run taskName`就可以启动了



#### CLI与Webpack介绍

> [第2章 Vue 环境快速搭建 | 深入理解Vue.js实战 (godbasin.github.io)](https://godbasin.github.io/vue-ebook/vue-ebook/2.html#_2-2-vue-cli-脚手架)
>
> [vue-cli 源码分析 | vue-cli-analysis (kuangpf.com)](https://kuangpf.com/vue-cli-analysis/)



Vue CLI 服务是构建于 webpack 和 webpack-dev-server 之上的，它包含了：

- 加载其它 CLI 插件的核心服务
- 一个针对绝大部分应用优化过的内部的 webpack 配置
- 项目内部的 vue-cli-service 命令，提供 serve、build 和 inspect 命令

要理解 CLI 的一些配置，我们先要来理解一下 Webpcak 的一些概念。本质上，Webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 Webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。这里我们主要介绍搭建时涉及的一些配置。

**四个核心概念：入口(entry)、输出(output)、loader、插件(plugins)。**

##### 入口(entry)

入口(entry)将您应用程序的入口起点认为是根上下文(contextual root)或 app 第一个启动文件。这个概念的理解可以举例来说明下，例如在 Vue 中是`new Vue()`位置所在的文件，在 Angular 中是启动`.bootstrap()`的文件，在 React 中则是`ReactDOM.render()`或者是`React.render()`的启动文件。

```javascript
// 将entry指向启动文件即可
module.exports = {
  entry: "./path/to/my/entry/file.js"
};

// 我们来看看，Vue CLI里源码是怎样的：
webpackConfig
  .entry("app")
  .add("./src/main.js")
  .end();
```

显然，Vue CLI 的默认入口文件是./src/main.js。我们能看到 Vue CLI 内部的 webpack 配置是通过链式调用的，该能力通过 webpack-chain 库提供的。这个库提供了一个 webpack 原始配置的上层抽象，使其可以定义具名的 loader 规则和具名插件，并有机会在后期进入这些规则并对它们的选项进行修改。



##### 出口(output)

出口(output)属性描述了如何处理归拢在一起的代码(bundled code)，在哪里打包应用程序。简单来说，就是最终打包好的代码放哪。一般需要以下两点配置：
(1) filename: 编译文件的文件名(main.js/bundle.js/index.js 等)。
(2) path：对应一个绝对路径，此路径是你希望一次性打包的目录。

```javascript
// 这是一般的Webpack写法
module.exports = {
  output: {
    filename: "bundle.js",
    path: "/home/proj/public/assets"
  }
};

// 我们来看看，Vue CLI源码的实现：
webpackConfig.output
  .path(api.resolve(options.outputDir))
  .filename(isLegacyBundle ? "[name]-legacy.js" : "[name].js")
  .publicPath(options.publicPath);
```



##### loader

Webpack 把每个文件(.css, .html, .scss, .jpg, etc.) 都作为模块处理，但 Webpack 只理解 JavaScript。如果你看过生成的 bundle.js 代码就会发现，Webpack 将所有的模块打包一起，每个模块添加标记 id，通过这样一个 id 去获取所需模块的代码。而我们的 loader 的作用，就是把不同的模块和文件转换为这样一个模块，打包进去。

loader 支持链式传递。能够对资源使用流水线(pipeline)。loader 链式地按照先后顺序进行编译，从后往前，最终需要返回 javascript。不同的应用场景需要不同的 loader，这里我简单介绍几个常用的（loader 使用前都需要安装，请自行查找依赖安装）。

**babel-loader**
babel-loader 将 ES6/ES7 语法编译生成 ES5，当然有些特性还是需要 babel-polyfill 支持的（Babel 默认只转换新的 JavaScript 句法，而不转换新的 API，如 Promise 等全局对象）。而对于 babel-loader 的配置，可以通过`options`进行，但一般更常使用.babelrc 文件进行（使用 Vue CLI 生成的项目目录中，可以使用 babel.config.js 文件来配置）：

**css 相关 loader**

- css-loader: 处理 css 文件中的 url()
- style-loader: 将 css 插入到页面的 style 标签
- less-loader: less 转换为 css
- postcss-loader(autoprefixer-loader): 自动添加兼容前缀(`-webkit-`、`-moz-`等)

**其他 loader**

- url-loader/file-loader: 修改文件名，放在输出目录下，并返其对应的 url
  - url-loader 在当文件大小小于限制值时，它可以返回一个 Data Url
- html-loader/raw-loader: 把 Html 文件输出成字符串
  - html-loader 默认处理 html 中的`<img src="image.png">`为`require("./image.png")`，需要在配置中指定 image 文件的加载器

说了这么多，我们来看看 Vue CLI 里自带了多少的 Loader：

省略





##### 解析(resolve)

这些选项能设置模块如何被解析，因为这里会使用到所以也介绍一下用到的：

- resolve.extensions
  - 自动解析确定的扩展。默认值为：`[".js", ".json"]`
- resolve.modules
  模块将在 resolve.modules 中指定的所有目录内搜索。
- resolve.alias
  - 创建`import`或`require`的别名，来确保模块引入变得更简单。如果使用 typescript 的话，我们还需要配置 tsconfig.json

我们来看看 Vue CLI 提供的默认配置：

```javascript
bpackConfig.resolve.extensions // 此处为支持解析的文件名后缀
  .merge([".mjs", ".js", ".jsx", ".vue", ".json", ".wasm"])
  .end()
  .modules // 这里所有的模块，我们都在 node_modules 目录下搜索
  .add("node_modules")
  .add(api.resolve("node_modules"))
  .add(resolveLocal("node_modules"))
  .end()
  .alias // 我们能看到，在Vue CLI生成的项目里，可以直接使用 @ 映射到 src 目录下
  .set("@", api.resolve("src"))
  .set(
    "vue$",
    options.runtimeCompiler
      ? "vue/dist/vue.esm.js"
      : "vue/dist/vue.runtime.esm.js"
  );
```



#### 在Vue CLI里配置Webpack

调整 webpack 配置有几种种方式

(1) 最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象：

```javascript
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      // 没办法，我还是需要使用jQuery
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
      })
    ]
  }
};
```

(2) 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象：

```javascript
// vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
};
```



(3) 在 vue.config.js 中的 chainWebpack 修改，允许我们更细粒度的控制其内部配置。例如：

```javascript
// vue.config.js
module.exports = {
  filenameHashing: false,
  chainWebpack: config => {
    // 我不想要预加载的preload和prefetch
    // delete删除HTML相关的preload和prefetch webpack插件
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    // 我想要使用typescript
    // 加个loader
    config
      .rule("ts")
      .test(/\.ts$/)
      .use("ts-loader");
  }
};
```













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





### Vue实例的选项

> [Component Instance | Vue.js (vuejs.org)](https://vuejs.org/api/component-instance.html)
>
> [API — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/api/index.html#实例-property)

Vue 实例提供了非常丰富的选项（`new Vue()`时传入的选项），除了上面介绍的生命周期之外，最常见的大概是这几个了：

实例常用选项

| 选项名       | 说明                                                         | 类型                                                         |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `el`         | 通过 CSS 选择器或者 HTMLElement 实例的方式，提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标 | `string`/`Element`                                           |
| `template`   | 字符串模板，将会替换挂载的元素                               | `string`                                                     |
| `render`     | 字符串模板的代替方案，该渲染函数接收一个`createElement`方法作为第一个参数用来创建 VNode | `(createElement: () => VNode) => VNode`                      |
| `data`       | Vue 实例的数据对象，用于数据绑定                             | `Object`/`Function` 组件只支持`Function`                     |
| `props`      | 用于接收来自父组件的数据                                     | `Array<string>`/`Object`                                     |
| `methods`    | Vue 实例的事件，可用于事件绑定                               | `{ [key: string]: Function }`                                |
| `computed`   | 计算属性，用于简化模板的复杂数据计算                         | `{ [key: string]: Function or { get: Function, set: Function } }` |
| `watch`      | 观察 Vue 实例变化的一个表达式或计算属性函数                  | `{ [key: string]: string or Function or Object or Array }`   |
| `directives` | 自定义指令                                                   | `Object`                                                     |
| `filters`    | 过滤器                                                       | `Object`                                                     |
| `components` | 组件                                                         | `Object`                                                     |

Vue 实例中的这些选项，大多数都可以作为全局实例属性来获取或者访问:

```javascript
const vm = new Vue({
  //一些选项
})

vm.$data //获取data
vm.$props //获取props
vm.$el; // 获取挂载元素
vm.$options; // 获取 Vue 实例的初始选项
vm.$parent; // 获取父实例
vm.$root; // 获取根实例
vm.$children; // 获取当前实例的直接子组件
vm.$refs; // 获取持有注册过 ref 特性 的所有 DOM 元素和组件实例

vm.$watch; // 观察 Vue 实例变化的一个表达式或计算属性函数
vm.$set; // 向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新
vm.$delete; // 删除对象的属性。如果对象是响应式的，确保删除能触发更新视图
```





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

详细

一个对象,持有注册过`ref` attribute的所有DOM元素和组件实例.



#### vm.$watch

**参数**

* `{ string | Function } expOrFn`
* `{ Function | Object } callback`
* `{Object} [options]`
  * `{boolean} deep`
  * `{boolean} immediate`



**返回值**

`{Function} unwatch`

`vm.$watch` 返回一个取消观察函数，用来停止触发回调：

```javascript
var unwatch = vm.$watch('a', cb)
// 之后取消观察
unwatch()
```



**使用方法**

* 观察 Vue 实例上的一个表达式或者一个函数计算结果的变化。
* 回调函数得到的参数为新值和旧值。
* 表达式只接受简单的键路径。对于更复杂的表达式，用一个函数取代。

注意：在变更 (不是替换) 对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变更之前值的副本。



**示例**

```javascript
// 键路径
vm.$watch('a.b.c', function (newVal, oldVal) {
  // 做点什么
})

// 函数
vm.$watch(
  function () {
    // 表达式 `this.a + this.b` 每次得出一个不同的结果时
    // 处理函数都会被调用。
    // 这就像监听一个未被定义的计算属性
    return this.a + this.b
  },
  function (newVal, oldVal) {
    // 做点什么
  }
)
```



**选项：deep**

为了发现对象内部值的变化，可以在选项参数中指定 `deep: true`。注意监听数组的变更不需要这么做。

```
vm.$watch('someObject', callback, {
  deep: true
})
vm.someObject.nestedValue = 123
// callback is fired
```



**选项：immediate**

在选项参数中指定 `immediate: true` 将立即以表达式的当前值触发回调：

```
vm.$watch('a', callback, {
  immediate: true
})
// 立即以 `a` 的当前值触发回调
```

注意在带有 `immediate` 选项时，你不能在第一次回调时取消侦听给定的 property。

```
// 这会导致报错
var unwatch = vm.$watch(
  'value',
  function () {
    doSomething()
    unwatch()
  },
  { immediate: true }
)
```

如果你仍然希望在回调内部调用一个取消侦听的函数，你应该先检查其函数的可用性：

```
var unwatch = vm.$watch(
  'value',
  function () {
    doSomething()
    if (unwatch) {
      unwatch()
    }
  },
  { immediate: true }
)
```









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



```vue
 <div>
    <h2>显示格式化的日期时间</h2>
    <p>{{ date }}</p>
    <p>{{ date | filterDate }}</p>
    <p>年月日: {{ date | filterDate("YYYY-MM-DD") }}</p>
 </div>
 ......
  filters: {
    filterDate(value, format = "YYYY-MM-DD HH:mm:ss") {
      console.log(this)//undefined 过滤器没有this指向的
      return moment(value).format(format);
    }
  },
  data() {
    return {
      date: new Date()
    };
  }
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

### new Vue时参数el和data的两种写法

#### el

* 直接传递el属性
* 通过`实例.$mount('#root')`指定容器

```javascript
new Vue({
  el: '#root',
})


new Vue().$mount('#root')
```





#### data

* 对象 非组件实例可以是对象,也可以是函数
* 函数  组件实例必须使用函数

组件内的data数据必须是一个函数的原因?

> 





#### 数据代理

##### 1.什么是数据代理？

(1).配置对象data中的数据，会被收集到vm._data中，然后通过Object.defineProperty让vm上拥有data中所有的属性。
(2).当访问vm的msg时，返回的是_data当中同名属性的值
(3).当修改vm的msg时，修改的是_data当中同名属性的值

##### 2.为什么要数据代理？

为了更加方便的读取和修改_data中的数据，不做数据代理，就要：vm._data.xxx访问原始数据

##### 3.扩展思考？—— 为什么要先收集在_data中，然后再代理出去呢？

更高效的监视数据（直接收集到vm上会导致监视效率太低）











## 生命周期

### 概述

> 每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会
>
> 生命周期钩子的 `this` 上下文指向调用它的 Vue 实例
>
> 注意:
>
> 不要在选项 property 或回调上使用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`。因为箭头函数并没有 `this`，`this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。





Vue 中要渲染一块页面内容的时候，会有这么几个过程：

（1) 解析语法生成 AST。
（2) 根据 AST 结果，完成 data 数据初始化。
（3) 根据 AST 结果和 data 数据绑定情况，生成虚拟 DOM。
（4) 将虚拟 DOM 生成真正的 DOM 插入到页面中，此时页面会被渲染。

当我们绑定的数据进行更新的时候，又会产生以下这些过程：

(5) 框架接收到数据变更的事件，根据数据生成新的虚拟 DOM 树。比较新旧两棵虚拟 DOM 树，得到差异。
(6) 把差异应用到真正的 DOM 树上，即根据差异来更新页面内容。

当我们清空页面内容时，还有：
(7) 注销实例，清空页面内容，移除绑定事件、监听器等。



Vue生命周期说明

| 生命周期钩子    | 说明                                                         | 对应上述步骤   |
| --------------- | ------------------------------------------------------------ | -------------- |
| `beforeCreate`  | 初始化实例前，`data`、`methods`等不可获取                    | 1 之后，2 之前 |
| `created`       | 实例初始化完成，此时可获取`data`里数据和`methods`事件，无法获取 DOM | 2 之后，3 之前 |
| `beforeMount`   | 虚拟 DOM 创建完成，此时未挂载到页面中，`vm.$el`可获取未挂载模板 | 3 之后，4 之前 |
| `mounted`       | 数据绑定完成，真实 DOM 已挂载到页面，`vm.$el`可获取真实 DOM  | 4 之后         |
| `beforeUpdate`  | 数据更新，DOM Diff 得到差异，未更新到页面                    | 5 之后，6 之前 |
| `updated`       | 数据更新，页面也已更新                                       | 6 之后         |
| `beforeDestroy` | 实例销毁前                                                   | 7 之前         |
| `destroyed`     | 实例销毁完成                                                 | 7 之后         |



Vue生命周期钩子使用说明

```html
<div id="app"></div>
<script>
  new Vue({
    el: "#app",
    template: "<div>{{ message }}</div>",
    data() {
      return {
        message: "欢迎来到Vue的世界"
      };
    },
    methods: {
      test() {}
    },
    beforeCreate: function() {
      // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
      console.log("beforeCreate", this.message, this.test, this.$el);
    },
    created: function() {
      // 在实例创建完成后被立即调用
      // 在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调
      // 挂载阶段还没开始，$el 属性目前不可见
      console.log("created", this.message, this.test, this.$el);
    },
    beforeMount: function() {
      // 在挂载开始之前被调用：相关的 render 函数首次被调用
      console.log("beforeMount", this.message, this.test, this.$el);
    },
    mounted: function() {
      // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
      // 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内
      // mounted 不会承诺所有的子组件也都一起被挂载
      // 如果希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted
      console.log("mounted", this.message, this.test, this.$el);
      this.$nextTick(function() {
        // 此处整个视图已渲染完毕
      });
    },
    beforeUpdate: function() {
      // 数据更新时调用，发生在虚拟 DOM 打补丁之前
      // 这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器
    },
    updated: function() {
      // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
      // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作
    },
    beforeDestroy: function() {
      // 实例销毁之前调用。在这一步，实例仍然完全可用
    },
    destroyed: function() {
      // Vue 实例销毁后调用
      // 调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
    }
  });
</script>
```

页面中我们可以看到输出结果，验证了几个生命周期的`data`、`methods`、DOM 挂载等情况：

![](https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/vue-3-3.jpg)











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

加载渲染过程

父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted

子组件更新过程

父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

父组件更新过程

父 beforeUpdate -> 父 updated

销毁过程

父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed




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

#### 背景

模板内的表达式(插值和指令)非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护.

```html
<div id="example">
  {{ msg.split('').reverse().join('')}}
</div>
```

在这个地方，模板不再是简单的声明式逻辑.对于任何复杂逻辑,你都应当使用**计算属性**。

#### 语法

```javascript
{ [key: string]: Function | {get: Function, set: Function }}
```

```javascript
export default {
  computed: {
    //仅读取
    keyString: function() {
      return this.a * 2
    },
    //读取的简写,适用于对象方法的简写
    keyString() {
      return this.a * 2
    }
    
    //读取和设置
    aPlus: {
      get: function() {
        return this.xxx
      },
      set: function(val) {
        this.a = val - 1
      }
    }
  }
}
```



#### 详细

计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。

注意如果你为一个计算属性使用了箭头函数，则 `this` 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。

```javascript
computed: {
  aDouble: vm => vm.a * 2
}
```







#### 特点

* 计算属性computed：要显示的数据不存在，要通过计算得来,只要是/* vc */身上有的都可以加工.可读可改的数据
* 函数底层用到的是对象setter和getter方法
* 执行的时机：
  * 初始显示会执行一次，得到初始值去显示。
  * 当依赖的数据发生改变时会被再次调用。
* 优势：与methods实现相比，内部有缓存机制，效率更高。
* 计算属性是用于直接读取使用的，不要加`()`.因为本质是一个属性. ??
* 在watch中修改源数据,会导致原数据的丢失.这种场景适合使用计算属性 **



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

### 概述

#### 背景

当需要在数据变化时**执行异步或开销较大**的操作时，使用侦听器

#### 语法

```javascript
{
  [key: string]: string | Function | Object | Array
}
```

多种写法

```javascript
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 若其值为true,则handler在初始化会调用一次,firstName改变调用一次
    d: {
      handler: 'someMethod',
      immediate: true
    },
    // 你可以传入回调数组，它们会被逐一调用
    e: [
      'handle1',
      function handle2 (val, oldVal) { /* ... */ },
      {
        handler: function handle3 (val, oldVal) { /* ... */ },
        /* ... */
      }
    ],
    // watch vm.e.f's value: {g: 5}
    'e.f': function (val, oldVal) { /* ... */ }
  }
})
vm.a = 2 // => new: 2, old: 1
```



#### 详细

* 一个对象，键是需要观察的表达式，值是对应回调函数。
* 值也可以是方法名，或者包含选项的对象。
* Vue 实例将会在实例化时调用 `$watch()`，遍历 watch 对象的每一个 property。



#### 特点

* 属性必须先存在，才能进行监视！！
* 当被监视的属性(data中的属性)变化时, 回调函数自动调用, 进行相关操作
* 监视的两种写法：
  * new Vue时传入watch配置 (精简写法是函数, 完整写法是对象)
  * 通过vm.$watch监视
* 深度监视 deep:true
* 在watch中修改源数据,会导致原数据的丢失.这种场景适合使用计算属性 **



### computed和watch之间的区别

* 只要是computed能完成的功能，watch都可以完成; watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作
* computed依赖缓存,值不变前提下多次读取使用缓存; watch多次读取会多次调用



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



### 实例方法 vm.$watch





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

**2种引入**

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

> 文档

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



##### 其他方法

> https://mp.weixin.qq.com/s/0Yekkc08ozbNxuquHVGveg

先在components文件夹（这里面都是些高频组件）添加一个叫global.js的文件，在这个文件里使用require.context 动态将需要的高频组件统统打包进来。然后在main.js文件中引入global.js的文件。

```javascript
//global.js

import Vue from 'vue'
function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const requireComponent = require.context('./', false, /\.vue$/)

const install = () => {
  requireComponent.keys().forEach(fileName => {
    let config = requireComponent(fileName)
    console.log(config) // ./child1.vue 然后用正则拿到child1
    let componentName = changeStr(
    	fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    )
    
    Vue.component(comopnentName, config.default || config)
  })
}

export default {
  install //对外暴露install方法
}

//main.js
import index from './components/globals.js'
Vue.use(index)
```



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

### prop案例 !!!

#### 1. v-bind=$attrs应用封装公共组件

<iframe src="https://codesandbox.io/embed/vue-attrs-gl5inh?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/$attrs"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



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

> 这么折腾, 还不够麻烦的呢

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







## 可复用性&组合 ?

### 混入mixin

> 文档
>
> https://mp.weixin.qq.com/s/0Yekkc08ozbNxuquHVGveg

#### 是什么

> 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。



#### 使用场景

当某段代码重复出现在多个组件中，并且这个重复的代码块很大的时候，将其作为一个minxin常常能给后期的维护带来很大的方便。



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



##### 高精度权限控制

> https://mp.weixin.qq.com/s/0Yekkc08ozbNxuquHVGveg

我们通常给一个元素添加v-if / v-show，来判断该用户是否有权限，但如果判断条件繁琐且多个地方需要判断，这种方式的代码不仅不优雅而且冗余。针对这种情况，我们可以封装了一个指令权限，能简单快速的实现按钮级别的权限判断。我们先在新建个array.js文件，用于存放与权限相关的全局函数

```javascript
//array.js

export function checkArray(key) {
  let arr = ['admin', 'editor']
  let index = arr.indexOf(key)
  if (index > -1) {
    return true //有权限
  } else  {
    return false //无权限
  }
}
```

然后将array文件挂载到全局

```javascript
//mian.js

import {checkArray} from './common/array'
Vue.config.productionTop = false;
Vue.directive('permission', {
  inserted(el, binding) { 
    let permission = binding.value; // 获取到 v-permission的值
    if (permission) {
      let hasPermission = checkArray(permission);
      if (!hasPermission) { // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  }
})
```

最后我们在页面中可以通过自定义指令v-permission来判断

```html
 <div class="btns">
    <button v-permission="'admin'">权限按钮1</button>  // 会显示
    <button v-permission="'visitor'">权限按钮2</button> //无显示
    <button v-permission="'editor'">权限按钮3</button> // 会显示
  </div>
```





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





### 渲染函数 & JSX  ???  待完成

#### 基础

Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用**渲染函数**，它比模板更接近编译器。

案例: 要生成一些带锚点的标题,分别使用模板和渲染函数来实现, 对比实现的难易度:



```html
//实现效果
<h1>
  <a name="hello-world" href="#hello-world">
    Hello world!
  </a>
</h1>
```

定义组件如下:

```HTML
<anchored-heading :level="1">Hello world!</anchored-heading>
```



**模板**

存在的问题: 代码冗长，而且在每一个级别的标题中重复书写了 `<slot></slot>`，在要插入锚点元素时还要再次重复。

```html
<script type="text/x-template" id="anchored-heading-template">
  <h1 v-if="level === 1">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 2">
    <slot></slot>
  </h2>
  <h3 v-else-if="level === 3">
    <slot></slot>
  </h3>
  <h4 v-else-if="level === 4">
    <slot></slot>
  </h4>
  <h5 v-else-if="level === 5">
    <slot></slot>
  </h5>
  <h6 v-else-if="level === 6">
    <slot></slot>
  </h6>
</script>
```



```javascript
Vue.component('anchored-heading', {
  template: '#anchored-heading-template',
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```



**渲染函数**

```javascript
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```



#### 节点, 树和虚拟DOM

##### 浏览器工作原理了解

```html
<div>
  <h1>My title</h1>
  Some text content
  <!-- TODO: Add tagline -->
</div>
```

当浏览器读到这些代码时，它会建立一个[“DOM 节点”树](https://javascript.info/dom-nodes)来保持追踪所有内容，如同你会画一张家谱树来追踪家庭成员的发展一样。

上述 HTML 对应的 DOM 节点树如下图所示：

![](https://cn.vuejs.org/images/dom-tree.png)

每个元素都是一个节点。每段文字也是一个节点。甚至注释也都是节点。一个节点就是页面的一个部分

高效地更新所有这些节点会是比较困难的，不过所幸你不必手动完成这个工作。你只需要告诉 Vue 你希望页面上的 HTML 是什么，这可以是在一个模板里

```html
<h1>{{ blogTitle }}</h1>
```

或者一个渲染函数里：

```javascript
render: function (createElement) {
  return createElement('h1', this.blogTitle)
}
```

在这两种情况下，Vue 都会自动保持页面的更新，即便 `blogTitle` 发生了改变。



##### 虚拟DOM

Vue 通过建立一个**虚拟 DOM** 来追踪自己要如何改变真实 DOM。请仔细看这行代码：

```javascript
return createElement('h1', this.blogTitle)
```

`createElement` 返回的不是一个*实际的* DOM 元素。它更准确的名字可能是 `createNodeDescription`，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。

我们把这样的节点描述为“虚拟节点 (virtual node)”，也常简写它为“**VNode**”。

<span style="color:blue">“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。</span>





#### createElement参数

你需要熟悉的是如何在 `createElement` 函数中使用模板中的那些功能。这里是 `createElement` 接受的参数：

```javascript
// @returns {VNode}
createElement(
  // {String | Object | Function}
  // 一个 HTML 标签名、组件选项对象，或者
  // resolve 了上述任何一种的一个 async 函数。必填项。
  'div',

  // {Object}
  // 一个与模板中 attribute 对应的数据对象。可选。
  {
    // (详情见下一节)
  },

  // {String | Array}
  // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”。可选。
  [
    '先写一些文字',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)
```



##### 深入数据对象

有一点要注意：正如 `v-bind:class` 和 `v-bind:style` 在模板语法中会被特别对待一样，它们在 VNode 数据对象中也有对应的顶层字段。该对象也允许你绑定普通的 HTML attribute，也允许绑定如 `innerHTML` 这样的 DOM property (这会覆盖 `v-html` 指令)

```javascript
{
  // 与 `v-bind:class` 的 API 相同，
  // 接受一个字符串、对象或字符串和对象组成的数组
  'class': {
    foo: true,
    bar: false
  },
  // 与 `v-bind:style` 的 API 相同，
  // 接受一个字符串、对象，或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 普通的 HTML attribute
  attrs: {
    id: 'foo'
  },
  // 组件 prop
  props: {
    myProp: 'bar'
  },
  // DOM property
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器在 `on` 内，
  // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
  // 需要在处理函数中手动检查 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // 作用域插槽的格式为
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其它组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其它特殊顶层 property
  key: 'myKey',
  ref: 'myRef',
  // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor: true
}
```



完整实例  ????

有了这些知识，我们现在可以完成我们最开始想实现的组件：

```javascript
var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}

Vue.component('anchored-heading', {
  render: function (createElement) {
    // 创建 kebab-case 风格的 ID
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')

    return createElement(
      'h' + this.level,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

















## 工具??

### 单文件组件

#### 背景

在很多 Vue 项目中，我们使用 `Vue.component` 来定义全局组件，紧接着用 `new Vue({ el: '#container '})` 在每个页面内指定一个容器元素.

在更复杂的项目中，或者你的前端完全由 JavaScript 驱动的时候，下面这些缺点将变得非常明显：

- **全局定义 (Global definitions)** 强制要求每个 component 中的命名不得重复
- **字符串模板 (String templates)** 缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 `\`
- **不支持 CSS (No CSS support)** 意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏
- **没有构建步骤 (No build step)** 限制只能使用 HTML 和 ES5 JavaScript，而不能使用预处理器，如 Pug (formerly Jade) 和 Babel



#### 单文件组件

文件扩展名为 `.vue` 的 **single-file components (单文件组件)** 为以上所有问题提供了解决方法，并且还可以使用 webpack 或 Browserify 等构建工具。

**特点**

- [完整语法高亮](https://github.com/vuejs/awesome-vue#source-code-editing)
- [CommonJS 模块](https://webpack.js.org/concepts/modules/#what-is-a-webpack-module)
- [组件作用域的 CSS](https://vue-loader.vuejs.org/zh-cn/features/scoped-css.html)

可以使用预处理器来构建简洁和功能更丰富的组件，比如 Pug，Babel (with ES2015 modules)，和 Stylus

如果搭配 `vue-loader` 使用 webpack，它也能为 CSS Modules 提供头等支持 ????



##### 关注点分离

**关注点分离不等于文件类型分离。**在现代 UI 开发中，我们已经发现相比于把代码库分离成三个大的层次并将其相互交织起来，把它们划分为松散耦合的组件再将其组合起来更合理一些。在一个组件里，其模板、逻辑和样式是内部耦合的，并且把他们搭配在一起实际上使得组件更加内聚且更可维护。

即便你不喜欢单文件组件，你仍然可以把 JavaScript、CSS 分离成独立的文件然后做到热重载和预编译。

```vue
<!-- my-component.vue -->
<template>
  <div>This will be pre-compiled</div>
</template>
<script src="./my-component.js"></script>
<style src="./my-component.css"></style>
```



##### 案例-TODOlist



#### 搭建工具 ???

##### 脚手架工具-CLI3



##### 从零搭建-Vue-Loader



### 组件测试??



### TypeScript支持??





### 生产环境部署??

以下大多数内容在你使用 [Vue CLI](https://cli.vuejs.org/zh/) 时都是默认开启的。该章节仅跟你自定义的构建设置有关。

#### 开启生产环境模式

开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。

```javascript
//main.js
Vue.config.productionTip = false;
```



##### 不使用构建工具

如果用 Vue 完整独立版本，即直接用 `<script>` 元素引入 Vue 而不提前进行构建，请记得在生产环境下使用压缩后的版本 (`vue.min.js`)。两种版本都可以在[安装指导](https://cn.vuejs.org/v2/guide/installation.html#直接用-lt-script-gt-引入)中找到。



##### 使用构建工具

当使用 webpack 或 Browserify 类似的构建工具时，Vue 源码会根据 `process.env.NODE_ENV` 决定是否启用生产环境模式，默认情况为开发环境模式。在 webpack 与 Browserify 中都有方法来覆盖此变量，以启用 Vue 的生产环境模式，同时在构建过程中警告语句也会被压缩工具去除。所有这些在 `vue-cli` 模板中都预先配置好了

**webpack**

在 webpack 4+ 中，你可以使用 `mode` 选项：

```
module.exports = {
  mode: 'production'
}
```

但是在 webpack 3 及其更低版本中，你需要使用 [DefinePlugin](https://webpack.js.org/plugins/define-plugin/)：

```
var webpack = require('webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
```



**Browserify**

了解

**Gulp**

了解下



#### 模板预编译

当使用 DOM 内模板或 JavaScript 内的字符串模板时，模板会在运行时被编译为渲染函数。通常情况下这个过程已经足够快了，但对性能敏感的应用还是最好避免这种用法。

预编译模板最简单的方式就是使用[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)——相关的构建设置会自动把预编译处理好，所以构建好的代码已经包含了编译出来的渲染函数而不是原始的模板字符串。

如果你使用 webpack，并且喜欢分离 JavaScript 和模板文件，你可以使用 [vue-template-loader](https://github.com/ktsn/vue-template-loader)，它也可以在构建过程中把模板文件转换成为 JavaScript 渲染函数。





#### 提取组件的CSS

当使用单文件组件时，组件内的 CSS 会以 `<style>` 标签的方式通过 JavaScript 动态注入。这有一些小小的运行时开销，如果你使用服务端渲染，这会导致一段“<span style="color:blue">无样式内容闪烁 (fouc)</span>”。

将所有组件的 CSS 提取到同一个文件可以避免这个问题，也会让 CSS 更好地进行压缩和缓存。

查阅这个构建工具各自的文档来了解更多：

- [webpack + vue-loader](https://vue-loader.vuejs.org/zh-cn/configurations/extract-css.html) (`vue-cli` 的 webpack 模板已经预先配置好)
- [Browserify + vueify](https://github.com/vuejs/vueify#css-extraction)
- [Rollup + rollup-plugin-vue](https://vuejs.github.io/rollup-plugin-vue/#/en/2.3/?id=custom-handler)



#### 跟踪运行时的错误

如果在组件渲染时出现运行错误，错误将会被传递至全局 `Vue.config.errorHandler` 配置函数 (如果已设置)。

利用这个钩子函数来配合错误跟踪服务是个不错的主意。比如 [Sentry](https://sentry.io/)，它为 Vue 提供了[官方集成](https://sentry.io/for/vue/)。







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



## 风格指南

> https://cn.vuejs.org/v2/style-guide/



### A级(必要)

#### 组件名为多个单词

根组件 `App` 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外

样做可以避免跟现有的以及未来的 HTML 元素[相冲突](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)，因为所有的 HTML 元素名称都是单个单词的



#### 组件数据

**组件的 `data` 必须是一个函数。**



#### Prop定义

**Prop 定义应该尽量详细。**

细致的 [prop 定义](https://cn.vuejs.org/v2/guide/components-props.html#Prop-验证)有两个好处：

- 它们写明了组件的 API，所以很容易看懂组件的用法；
- 在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。



#### v-for设置键值

**总是用 `key` 配合 `v-for`。**

在组件上*总是*必须用 `key` 配合 `v-for`，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的[对象固化 (object constancy)](https://bost.ocks.org/mike/constancy/)，也是一种好的做法。



#### 避免v-for和v-if用在一起

**永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上。**

一般我们在两种常见的情况下会倾向于这样做：

- 为了过滤一个列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。在这种情形下，请将 `users` 替换为一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表。
- 为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。这种情形下，请将 `v-if` 移动至容器元素上 (比如 `ul`、`ol`)。



当 Vue 处理指令时，`v-for` 比 `v-if` 具有更高的优先级，所以这个模板：

```
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

将会经过如下运算：

```
this.users.map(function (user) {
  if (user.isActive) {
    return user.name
  }
})
```

因此哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。

通过将其更换为在如下的一个计算属性上遍历：

```
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

我们将会获得如下好处：

- 过滤后的列表*只*会在 `users` 数组发生相关变化时才被重新运算，过滤更高效。
- 使用 `v-for="user in activeUsers"` 之后，我们在渲染的时候*只*遍历活跃用户，渲染更高效。
- 解耦渲染层的逻辑，可维护性 (对逻辑的更改和扩展) 更强。

为了获得同样的好处，我们也可以把：

```
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

更新为：

```
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

通过将 `v-if` 移动到容器元素，我们不会再对列表中的*每个*用户检查 `shouldShowUsers`。取而代之的是，我们只检查它一次，且不会在 `shouldShowUsers` 为否的时候运算 `v-for`。









#### 为组件样式设置作用域

**对于应用来说，顶级 `App` 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。**

这条规则只和[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)有关。你*不一定*要使用 [`scoped` attribute](https://vue-loader.vuejs.org/zh-cn/features/scoped-css.html)。设置作用域也可以通过 [CSS Modules](https://vue-loader.vuejs.org/zh-cn/features/css-modules.html)，那是一个基于 class 的类似 [BEM](http://getbem.com/) 的策略，当然你也可以使用其它的库或约定。

**不管怎样，对于组件库，我们应该更倾向于选用基于 class 的策略而不是 `scoped` attribute。**





#### 私有property名

**使用模块作用域保持不允许外部访问的函数的私有性。如果无法做到这一点，就始终为插件、混入等不考虑作为对外公共 API 的自定义私有 property 使用 `$_` 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 `$_yourPluginName_`)。**

Vue 使用 `_` 前缀来定义其自身的私有 property，所以使用相同的前缀 (比如 `_update`) 有覆写实例 property 的风险。即便你检查确认 Vue 当前版本没有用到这个 property 名，也不能保证和将来的版本没有冲突。

对于 `$` 前缀来说，其在 Vue 生态系统中的目的是暴露给用户的一个特殊的实例 property，所以把它用于*私有* property 并不合适。

不过，我们推荐把这两个前缀结合为 `$_`，作为一个用户定义的私有 property 的约定，以确保不会和 Vue 自身相冲突。



```
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
// 甚至更好！
var myGreatMixin = {
  // ...
  methods: {
    publicMethod() {
      // ...
      myPrivateFunction()
    }
  }
}

function myPrivateFunction() {
  // ...
}

export default myGreatMixin
```



### B级(强烈推荐)

> 增强可读性

#### 组件文件

**只要有能够拼接文件的构建系统，就把每个组件单独分成文件。**

当你需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。

反例

```
Vue.component('TodoList', {
  // ...
})

Vue.component('TodoItem', {
  // ...
})
```

好例子

```
components/
|- TodoList.js
|- TodoItem.js
components/
|- TodoList.vue
|- TodoItem.vue
```



#### 单文件组件文件的大小写

**[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。**

单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。



#### 基础组件名

**应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App` 或 `V`。**

反例

```
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

好例子

```
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue
components/
|- VButton.vue
|- VTable.vue
|- V
```



#### 单例组件名

**只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。**

这不意味着组件只可用于一个单页面，而是*每个页面*只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，*只是目前*在每个页面里只使用一次。



#### 紧密耦合的组件名

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。**

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。



#### 组件名中的单词顺序

**组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。**



反例

```
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

好例子

```
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```



#### 自闭合组件

**在[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)、字符串模板和 [JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。**

自闭合组件表示它们不仅没有内容，而且**刻意**没有内容。其不同之处就好像书上的一页白纸对比贴有“本页有意留白”标签的白纸。而且没有了额外的闭合标签，你的代码也更简洁。

不幸的是，HTML 并不支持自闭合的自定义元素——只有[官方的“空”元素](https://www.w3.org/TR/html/syntax.html#void-elements)。所以上述策略仅适用于进入 DOM 之前 Vue 的模板编译器能够触达的地方，然后再产出符合 DOM 规范的 HTML。



好例子

```
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent/>
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```



#### 模板中的组件名大小写

**对于绝大多数项目来说，在[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。**





#### JS/JSX中的组件名大小写

**JS/[JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 中的组件名应该始终是 PascalCase 的，尽管在较为简单的应用中只使用 `Vue.component` 进行全局组件注册时，可以使用 kebab-case 字符串。**







#### 完整单词的组件名

**组件名应该倾向于完整单词而不是缩写。**

编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。





#### Prop名大小写

**在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 [JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 中应该始终使用 kebab-case。**

我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

反例

```
props: {
  'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>
```

好例子

```
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```





#### 多个attribute的元素分行撰写

**多个 attribute 的元素应该分多行撰写，每个 attribute 一行。**

在 JavaScript 中，用多行分隔对象的多个 property 是很常见的最佳实践，因为这样更易读。模板和 [JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 值得我们做相同的考虑。





#### 模板中简单的表达式

**组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。**

复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的*是什么*，而非*如何*计算那个值。而且计算属性和方法使得代码可以重用。





#### 简单的计算属性

**应该把复杂计算属性分割为尽可能多的更简单的 property。**





反例

```
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}
```

好例子

```
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```



#### 带引号的attribute值

**非空 HTML attribute 值应该始终带引号 (单引号或双引号，以 JS 中未使用的为准)。**

在 HTML 中不带空格的 attribute 值是可以没有引号的，但这鼓励了大家在特征值里*不写*空格，导致可读性变差。

反例

```
<input type=text>
<AppSidebar :style={width:sidebarWidth+'px'}>
```

好例子

```
<input type="text">
<AppSidebar :style="{ width: sidebarWidth + 'px' }">
```



#### 指令缩写

**指令缩写 (用 `:` 表示 `v-bind:`、用 `@` 表示 `v-on:` 和用 `#` 表示 `v-slot:`) 应该要么都用要么都不用。**





### C级(推荐)

#### 组件/实例的选项的顺序

**组件/实例的选项应该有统一的顺序。**

这是我们推荐的组件选项默认顺序。它们被划分为几大类，所以你也能知道从插件里添加的新 property 应该放到哪里。

1. **副作用** (触发组件外的影响)
   - `el`
2. **全局感知** (要求组件以外的知识)
   - `name`
   - `parent`
3. **组件类型** (更改组件的类型)
   - `functional`
4. **模板修改器** (改变模板的编译方式)
   - `delimiters`
   - `comments`
5. **模板依赖** (模板内使用的资源)
   - `components`
   - `directives`
   - `filters`
6. **组合** (向选项里合并 property)
   - `extends`
   - `mixins`
7. **接口** (组件的接口)
   - `inheritAttrs`
   - `model`
   - `props`/`propsData`
8. **本地状态** (本地的响应式 property)
   - `data`
   - `computed`
9. **事件** (通过响应式事件触发的回调)
   - `watch`
   - 生命周期钩子 (按照它们被调用的顺序)
     - `beforeCreate`
     - `created`
     - `beforeMount`
     - `mounted`
     - `beforeUpdate`
     - `updated`
     - `activated`
     - `deactivated`
     - `beforeDestroy`
     - `destroyed`
10. **非响应式的 property** (不依赖响应系统的实例 property)
    - `methods`
11. **渲染** (组件输出的声明式描述)
    - `template`/`render`



#### 元素attribute的顺序

**元素 (包括组件) 的 attribute 应该有统一的顺序。**

这是我们为组件选项推荐的默认顺序。它们被划分为几大类，所以你也能知道新添加的自定义 attribute 和指令应该放到哪里。

1. **定义** (提供组件的选项)
   - `is`
2. **列表渲染** (创建多个变化的相同元素)
   - `v-for`
3. **条件渲染** (元素是否渲染/显示)
   - `v-if`
   - `v-else-if`
   - `v-else`
   - `v-show`
   - `v-cloak`
4. **渲染方式** (改变元素的渲染方式)
   - `v-pre`
   - `v-once`
5. **全局感知** (需要超越组件的知识)
   - `id`
6. **唯一的 attribute** (需要唯一值的 attribute)
   - `ref`
   - `key`
7. **双向绑定** (把绑定和事件结合起来)
   - `v-model`
8. **其它 attribute** (所有普通的绑定或未绑定的 attribute)
9. **事件** (组件事件监听器)
   - `v-on`
10. **内容** (覆写元素的内容)
    - `v-html`
    - `v-text`



#### 组件/实例选项中的空行

**你可能想在多个 property 之间增加一个空行，特别是在这些选项一屏放不下，需要滚动才能都看到的时候。**

当你的组件开始觉得密集或难以阅读时，在多个 property 之间添加空行可以让其变得容易。在一些诸如 Vim 的编辑器里，这样格式化后的选项还能通过键盘被快速导航。

#### 好例子

```
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue: function () {
    // ...
  },

  inputClasses: function () {
    // ...
  }
}
// 没有空行在组件易于阅读和导航时也没问题。
props: {
  value: {
    type: String,
    required: true
  },
  focused: {
    type: Boolean,
    default: false
  },
  label: String,
  icon: String
},
computed: {
  formattedValue: function () {
    // ...
  },
  inputClasses: function () {
    // ...
  }
}
```





#### 单文件组件的顶级元素的顺序

**[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)应该总是让 `<script>`、`<template>` 和 `<style>` 标签的顺序保持一致。且 `<style>` 要放在最后，因为另外两个标签至少要有一个。**

#### 好例子

```
<!-- ComponentA.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
<!-- ComponentA.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```



### D级(谨慎使用,潜在危险)

#### [没有在 `v-if`/`v-else-if`/`v-else` 中使用 `key`](https://cn.vuejs.org/v2/style-guide/#没有在-v-if-v-else-if-v-else-中使用-key-谨慎使用)





#### scope的中的元素选择器

**元素选择器应该避免在 `scoped` 中出现。**



#### 隐性父子组件通信

**应该优先通过 prop 和事件进行父子组件之间的通信，而不是 `this.$parent` 或变更 prop。**

一个理想的 Vue 应用是 prop 向下传递，事件向上传递的。遵循这一约定会让你的组件更易于理解。然而，在一些边界情况下 prop 的变更或 `this.$parent` 能够简化两个深度耦合的组件。

问题在于，这种做法在很多*简单*的场景下可能会更方便。但请当心，不要为了一时方便 (少写代码) 而牺牲数据流向的简洁性 (易于理解)。



#### 非Flux的全局状态管理 ??







## 规模化(路由/状态管理/服务端/安全)

### 路由

#### 官方路由

对于大多数单页面应用，都推荐使用官方支持的 [vue-router 库](https://github.com/vuejs/vue-router)





#### 简单路由

如果你只需要非常简单的路由而不想引入一个功能完整的路由库，可以像这样动态渲染一个页面级的组件：

```javascript
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home,
  '/about': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
```



#### 整合第三方路由??

如果你有更偏爱的第三方路由，如 [Page.js](https://github.com/visionmedia/page.js) 或者 [Director](https://github.com/flatiron/director)，整合起来也[一样简单](https://github.com/chrisvfritz/vue-2.0-simple-routing-example/compare/master...pagejs)。这里有一个使用了 Page.js 的[完整示例](https://github.com/chrisvfritz/vue-2.0-simple-routing-example/tree/pagejs)。



### 状态管理

由于状态零散地分布在许多组件和组件之间的交互中，大型应用复杂度也经常逐渐增长。为了解决这个问题，Vue 提供 [vuex](https://github.com/vuejs/vuex)



#### 简单状态管理起步

Vue 应用中原始 `data` 对象的实际来源——当访问数据对象时，一个 Vue 实例只是简单的代理访问。所以，如果你有一处需要被多个实例间共享的状态，可以简单地通过维护一份数据来实现共享

```javascript
var sourceOfTruth = {}

var vmA = new Vue({
  data: sourceOfTruth
})

var vmB = new Vue({
  data: sourceOfTruth
})
```

现在当 `sourceOfTruth` 发生变更，`vmA` 和 `vmB` 都将自动地更新它们的视图。子组件们的每个实例也会通过 `this.$root.$data` 去访问。现在我们有了唯一的数据来源，但是，<span style="color:blue">调试将会变为噩梦。任何时间，我们应用中的任何部分，在任何数据改变后，都不会留下变更过的记录</span>。

为了解决这个问题，我们采用一个简单的 **store 模式**：

```javascript
var store = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}
```

需要注意，所有 store 中 state 的变更，都放置在 store 自身的 action 中去管理。

这种集中式状态管理能够被更容易地理解哪种类型的变更将会发生，以及它们是如何被触发。当错误出现时，我们现在也会有一个 log 记录 bug 之前发生了什么。

此外，每个实例/组件仍然可以拥有和管理自己的私有状态：

```javascript
var vmA = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  }
})

var vmB = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  }
})
```

![](https://cn.vuejs.org/images/state.png)

注意:

* 注意你不应该在 action 中 替换原始的状态对象 - 组件和 store 需要引用同一个共享对象，变更才能够被观察到。

* 组件不允许直接变更属于 store 实例的 state，而应执行 action 来分发 (dispatch) 事件通知 store 去改变.


我们最终达成了 [Flux](https://facebook.github.io/flux/) 架构。这样约定的好处是，我们能够记录所有 store 中发生的 state 变更，同时实现能做到记录变更、保存状态快照、历史回滚/时光旅行的先进的调试工具。



### 服务端渲染

#### [SSR 完全指南](https://cn.vuejs.org/v2/guide/ssr.html#SSR-完全指南)

在 2.3 发布后我们发布了一份完整的构建 Vue 服务端渲染应用的指南。这份指南非常深入，适合已经熟悉 Vue、webpack 和 Node.js 开发的开发者阅读。请移步 [ssr.vuejs.org](https://ssr.vuejs.org/zh/)。



### 安全 ???

#### 第一原则

在使用 Vue 的时候最基本的安全规则是**永远不要将不可信任的内容作为模板内容使用**。

这样做等价于允许在应用程序中执行任意的 JavaScript——甚至更糟的是如果在服务端渲染的话可能导致服务器被攻破。举个例子：

```javascript
new Vue({
  el: '#app',
  template: `<div>` + userProvidedString + `</div>` // 永远不要这样做
})
```

Vue 的模板是被编译为 JavaScript 的，而其中的表达式会作为渲染流程的一部分执行。尽管该表达式是在一个特定的渲染上下文中进行运算的。考虑到潜在的全局运行环境的复杂性，作为类似 Vue 的框架，想要完全让代码远离潜在的恶意代码执行而不导致性能问题，是不切实际的。最直接的回避这类问题的方式就是确保 Vue 模板的内容始终是可信的且完全由你掌控。



#### Vue的安全措施

##### HTML内容

##### Attribute绑定



#### 潜在危险

##### 注入HTML



##### 注入URL



##### 注入样式



注入javascript



#### 最佳实践

通用的规则是只要允许执行未过滤的用户提供的内容 (不论作为 HTML、JavaScript 甚至 CSS)，你就可能令自己处于被攻击的境地。这些建议实际上不论使用 Vue 还是别的框架甚至不使用框架，都是成立的。

除了上述关于[潜在危险](https://cn.vuejs.org/v2/guide/security.html#潜在危险)的建议，我们也推荐自行熟悉以下资料：

- [HTML5 Security Cheat Sheet](https://html5sec.org/)
- [OWASP’s Cross Site Scripting (XSS) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

然后利用学到的知识，对那些包含了第三方组件或通过其它方式影响渲染到 DOM 的内容的依赖的源代码进行重新审查，以发现潜在的危险模式。



#### 后端写作



#### 服务端渲染



## API

#### render函数

> https://mp.weixin.qq.com/s/0Yekkc08ozbNxuquHVGveg

有时候项目中template里存在一值多判断，如果按照下方代码书写业务逻辑，代码冗余且杂乱。

```vue
<template>
  <div>
    <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="level === 6">
      <slot></slot>
    </h6>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
}
</script>
```

使用 render 函数重写上面的例子：

```javascript
<script>
  export default {
		props: {
      level: {
        require: true,
        type: Number
      }
    },
    render(createElement) {
      return createElement('h' + this.level, this.$slots.default)
    }
}
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





## Vuex

### 基本介绍

1.	专门在Vue中实现{/*集中式状态管理*/}的一个插件，对vue应用中多个组件的共享状态进行集中式的管理(读/写)，也可以认为是一种组件间通信的方式，且适用于任意组件间通信。
2.	github站点: https://github.com/vuejs/vuex
3.	在线文档: https://vuex.vuejs.org/zh-cn/

什么时候使用Vuex
1. 多个组件依赖于同一状态
2. 来自不同组件的行为需要变更同一状态
3. 多个组件要共享状态 

//生成的$store可以在vm身上访问到

### 背景

应用遇到**多个组件共享状态**时，单向数据流的简洁性很容易被破坏：

- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。

对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。

对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

因此，把组件的共享状态抽取出来，以一个全局单例模式管理. 通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护。









### 流程图

![vuex图](https://img2018.cnblogs.com/blog/1581023/201902/1581023-20190222191642909-1072295625.png)



### 配置Vuex

#### 1.项目中创建vuex文件

推荐如下几种格式:

`vuex/store.js`

`store/index.js`

#### 2.Vuex的引入和暴露

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {}
const mutations = {}
const actions = {}
const getters = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
```



#### 3.在项目main.js中引入

```javascript
import store from './store'
import router from './router'

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  el: '#app',
  router,
  store,
  render: h=>h(App)
}
```



### store容器介绍

每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的**状态 (state)**。

Vuex 和单纯的全局对象有以下两点不同：

1. Vuex 的状态存储是响应式的。
2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地**提交 (commit) mutation**。



<iframe src="https://codesandbox.io/embed/vue-store-simplecase-8w423d?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue/store/simpleCase"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>





### state

#### 单一状态树

Vuex 使用**单一状态树**，用一个对象就包含了全部的应用层级状态，作为一个“唯一数据源 ([SSOT (opens new window)](https://en.wikipedia.org/wiki/Single_source_of_truth))”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。

单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。

#### 要求

存储在 Vuex 中的数据和 Vue 实例中的 `data` 遵循相同的规则，例如状态对象必须是纯粹 (plain) 的。

#### 在vue组件中获取Vuex状态

由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在[计算属性 (opens new window)](https://cn.vuejs.org/guide/computed.html)中返回某个状态

```javascript
// 创建一个 Counter 组件
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}
```

每当 `store.state.count` 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。



##### 存在的问题

这种模式导致组件依赖全局状态单例。在模块化的构建系统中，在每个需要使用 state 的组件中需要频繁地导入，并且在测试组件时需要模拟状态。??



##### 解决

Vuex 通过 `store` 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 `Vue.use(Vuex)`）

```javascript
const app = new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```

通过在根实例中注册 `store` 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 `this.$store` 访问到。让我们更新下 `Counter` 的实现：

```javascript
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
```



#### 辅助函数mapState

当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性，让你少按几次键：

```javascript
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  // ...
  computed: mapState({    //???
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
```

当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 `mapState` 传一个字符串数组



##### mapState方法介绍

```javascript
mapState放在那里?  获取state属性,放在computed计算属性对象中

//代替computed获取state中的数据

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



##### 函数

```javascript
//https://unpkg.com/vuex@3 

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
  var mapState = normalizeNamespace(function (namespace, states) {
    var res = {};
    if ( !isValidMap(states)) {
      console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
    }
    normalizeMap(states).forEach(function (ref) {
      var key = ref.key;
      var val = ref.val;

      res[key] = function mappedState () {
        var state = this.$store.state;
        var getters = this.$store.getters;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, 'mapState', namespace);
          if (!module) {
            return
          }
          state = module.context.state;
          getters = module.context.getters;
        }
        return typeof val === 'function'
          ? val.call(this, state, getters)
          : state[val]
      };
      // mark vuex getter for devtools
      res[key].vuex = true;
    });
    return res
  });
```





#### mutations

值为一个对象,包含:n个真正用于加工状态的函数

官方建议修改同步数据 
vuex是集中管理状态数据,如果是异步修改,请求回来的数据不一定是正确的数据.
问题 ==> vuex的调用工具监视不到mutation中的异步更新, 工具记录还是更新前的数据(不对)

```javascript
const mutations={
    JIA(state, value){ //函数名称要大写,和actions中做区分
    state.sum += value
	}
}
```



#### actions

值为一个对象,包含:n个响应组件'动作'的函数

context是一个mini版的$store,要用context.commit()去通知mutations加工状态



```javascript
const actions={
  jia(context, vlaue){ 
      context.commit('JIA', value) //大写原因:区分mutations和actions中'jia'
    },
    //第二种写法:解构赋值
   jia({commit}, value){
       commit('JIA', value);
   }
};

jia({state, commit, rootState, dispatch}, value) {}
```





### getters

#### 背景

有时候需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数

如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。

Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，<span style="color:blue">getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</span>



#### 语法

Getter 接受 state 作为其第一个参数, 也可以接收其他getter作为第二个参数

```javascript
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

getters: {
  // ...
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
```



#### 通过属性访问

Getter 会暴露为 `store.getters` 对象, 可以以属性的形式访问这些值

```javascript
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}
```

Getter 也可以接受其他 getter 作为第二个参数

```javascript
getters: {
  // ...
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
```

在组件中使用

```javascript
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}
```



注意，getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的



#### 通过方法访问

通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。

```javascript
getters: {
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id)
  }
}
```

```javascript
store.getters.getTodoById(2)
```

注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果



#### mapGetters辅助函数

`mapGetters` 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：

```javascript
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
```

如果你想将一个 getter 属性另取一个名字，使用对象形式：

```javascript
...mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
```





### Mutations

#### 介绍

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。

每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：

```javascript
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
```

#### 如何提交

你不能直接调用一个 mutation handler. 以相应的 type 调用 **store.commit** 方法：

```javascript
store.commit('increment')
```





#### 提交载荷(Payload)

你可以向 `store.commit` 传入额外的参数，即 mutation 的 **载荷（payload）**：

载荷的形式: 

* 字符串
* 对象等

```javascript
// ...
mutations: {
  increment (state, n) {
    state.count += n
  }
}

```

```javascript
store.commit('increment', 10)
```

在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读

```javascript
// ...
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
```

```javascript
store.commit('increment', {
  amount: 10
})
```





#### 提交commit的形式

* 普通的提交  type字符串类型
* 对象风格的提交

##### 对象风格的提交方式

提交 mutation 的另一种方式是直接使用包含 `type` 属性的对象：

当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变

```javascript
store.commit({
  type: 'increment',
  amount: 10
})
```



```javascript
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }

```



#### 组件中提交Mutation

组件中提交mutation的方式有: 

* `this.$store.commit('xxx')`
* `mapMutations`  将组件中的methods映射为`$store.commit`调用

```javascript
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```









#### 注意事项

##### Mutation需遵循Vue的响应规则

* 最好提前在store中初始化好所有所需属性

* 当需要在对象上添加新属性时:

  * 使用`Vue.set(obj, 'newProp', 123)`, 或者

  * 以新对象替换老对象.例如利用[对象展开运算符](https://github.com/tc39/proposal-object-rest-spread)

    * ```javascript
      state.obj = { ...state.obj, newProp: 123 }
      ```



##### 使用常量代替Mutation事件类型

使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。这样可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然

多人协作的大型项目中，这会很有帮助. 不强制使用

```javascript
// mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'
```

```javascript
// store.js
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'

const store = new Vuex.Store({
  state: { ... },
  mutations: {
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [SOME_MUTATION] (state) {
      // mutate state
    }
  }
})
```



##### Mutation必须是同步函数

总结; 如果是异步函数, 本地无法监测mutation触发时,数据的前后变化





### Actions

#### 与mutations的比较

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。



#### action语法

简单示例:

```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    increment2 ({commit}) {
      commit('increment')
    }
  }
})
```

Action 函数接受一个与 store 实例具有相同方法和属性的 **context 对象**，

通过 `context.commit` 提交一个 mutation，

通过 `context.state` 和 `context.getters` 来获取 state 和 getters。

实践中,经常使用ES6的参数解构来简化代码.



#### 分发(调用)action

Action 通过 `store.dispatch` 方法触发：

```javascript
store.dispatch('increment')
```

Actions 支持同样的载荷方式和对象方式进行分发(调用);

```javascript
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```



#### 组件中分发(调用)Action

组件中分发Action的方式有:

* 使用`this.$store.dispatch('xxx')`
* 使用 `mapActions` 辅助函数将组件的 methods 映射为 `store.dispatch` 调用

```javascript
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```





#### 组合Action

问题:

Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程？



首先，你需要明白 `store.dispatch` 可以处理被触发的 action 的处理函数返回的 Promise，并且 `store.dispatch` 仍旧返回 Promise：

```js
actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  }
}
```

现在你可以：

```js
store.dispatch('actionA').then(() => {
  // ...
})
```

在另外一个 action 中也可以：

```js
actions: {
  // ...
  actionB ({ dispatch, commit }) {
    return dispatch('actionA').then(() => {
      commit('someOtherMutation')
    })
  }
}
```

最后，如果我们利用 [async / await (opens new window)](https://tc39.github.io/ecmascript-asyncawait/)，我们可以如下组合 action：

```js
// 假设 getData() 和 getOtherData() 返回的是 Promise

actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
```

> 一个 `store.dispatch` 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。



### Module

#### 背景

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

```javascript
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```



#### 模块的局部状态

对于模块内部的 mutation 和 getter，接收的第一个参数是**模块的局部状态对象**。

```javascript
const moduleA = {
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },

  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
```

对于模块内部的 action，局部状态通过 `context.state` 暴露出来，根节点状态则为 `context.rootState`：

```javascript
const moduleA = {
  // ...
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
```

对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：

```javascript
const moduleA = {
  // ...
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}
```



#### 命名空间

默认情况下，模块内部的 action、mutation 和 getter 是注册在**全局命名空间**的——这样使得多个模块能够对同一 mutation 或 action 作出响应。

如果希望你的模块具有更高的封装度和复用性，你可以通过添加<span style="color:blue"> `namespaced: true` </span>的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名

```javascript
const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,

      // 模块内容（module assets）
      state: () => ({ ... }), // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
      getters: {
        isAdmin () { ... } // -> getters['account/isAdmin']
      },
      actions: {
        login () { ... } // -> dispatch('account/login')
      },
      mutations: {
        login () { ... } // -> commit('account/login')
      },

      // 嵌套模块
      modules: {
        // 继承父模块的命名空间
        myPage: {
          state: () => ({ ... }),
          getters: {
            profile () { ... } // -> getters['account/profile']
          }
        },

        // 进一步嵌套命名空间
        posts: {
          namespaced: true,

          state: () => ({ ... }),
          getters: {
            popular () { ... } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
})
```

启用了命名空间的 getter 和 action 会收到局部化的 `getter`，`dispatch` 和 `commit`。换言之，你在使用模块内容（module assets）时不需要在同一模块内额外添加空间名前缀。更改 `namespaced` 属性后不需要修改模块内的代码



#### 在带命名空间的模块访问全局内容

如果你希望使用全局 state 和 getter，`rootState` 和 `rootGetters` 会作为第三和第四参数传入 getter，也会通过 `context` 对象的属性传入 action。

若需要在全局命名空间内分发 action 或提交 mutation，将 `{ root: true }` 作为第三参数传给 `dispatch` 或 `commit` 即可。

```javascript
modules: {
  foo: {
    namespaced: true,

    getters: {
      // 在这个模块的 getter 中，`getters` 被局部化了
      // 你可以使用 getter 的第四个参数来调用 `rootGetters`
      someGetter (state, getters, rootState, rootGetters) {
        getters.someOtherGetter // -> 'foo/someOtherGetter'
        rootGetters.someOtherGetter // -> 'someOtherGetter'
      },
      someOtherGetter: state => { ... }
    },

    actions: {
      // 在这个模块中， dispatch 和 commit 也被局部化了
      // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
      someAction ({ dispatch, commit, getters, rootGetters }) {
        getters.someGetter // -> 'foo/someGetter'
        rootGetters.someGetter // -> 'someGetter'

        dispatch('someOtherAction') // -> 'foo/someOtherAction'
        dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

        commit('someMutation') // -> 'foo/someMutation'
        commit('someMutation', null, { root: true }) // -> 'someMutation'
      },
      someOtherAction (ctx, payload) { ... }
    }
  }
}
```



#### 在带命名空间的模块注册全局 action

若需要在带命名空间的模块注册全局 action，你可添加 `root: true`，并将这个 action 的定义放在函数 `handler` 中

```javascript
{
  actions: {
    someOtherAction ({dispatch}) {
      dispatch('someAction')
    }
  },
  modules: {
    foo: {
      namespaced: true,

      actions: {
        someAction: {
          root: true,
          handler (namespacedContext, payload) { ... } // -> 'someAction'
        }
      }
    }
  }
}
```

#### 带命名空间的绑定函数

当使用 `mapState`, `mapGetters`, `mapActions` 和 `mapMutations` 这些函数来绑定带命名空间的模块时，写起来可能比较繁琐：

```js
computed: {
  ...mapState({
    a: state => state.some.nested.module.a,
    b: state => state.some.nested.module.b
  })
},
methods: {
  ...mapActions([
    'some/nested/module/foo', // -> this['some/nested/module/foo']()
    'some/nested/module/bar' // -> this['some/nested/module/bar']()
  ])
}
```

对于这种情况，你可以将模块的空间名称字符串作为第一个参数传递给上述函数，这样所有绑定都会自动将该模块作为上下文。于是上面的例子可以简化为：

```js
computed: {
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  })
},
methods: {
  ...mapActions('some/nested/module', [
    'foo', // -> this.foo()
    'bar' // -> this.bar()
  ])
}
```

而且，你可以通过使用 `createNamespacedHelpers` 创建基于某个命名空间辅助函数。它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数：

```javascript
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

export default {
  computed: {
    // 在 `some/nested/module` 中查找
    ...mapState({
      a: state => state.a,
      b: state => state.b
    })
  },
  methods: {
    // 在 `some/nested/module` 中查找
    ...mapActions([
      'foo',
      'bar'
    ])
  }
}
```



####  给插件开发者的注意事项 ??

如果你开发的[插件（Plugin）](https://v3.vuex.vuejs.org/zh/guide/plugins.html)提供了模块并允许用户将其添加到 Vuex store，可能需要考虑模块的空间名称问题。对于这种情况，你可以通过插件的参数对象来允许用户指定空间名称：

```javascript
// 通过插件的参数对象得到空间名称
// 然后返回 Vuex 插件函数
export function createPlugin (options = {}) {
  return function (store) {
    // 把空间名字添加到插件模块的类型（type）中去
    const namespace = options.namespace || ''
    store.dispatch(namespace + 'pluginAction')
  }
}
```



#### 模块动态注册?

在 store 创建**之后**，你可以使用 `store.registerModule` 方法注册模块：

```js
import Vuex from 'vuex'

const store = new Vuex.Store({ /* 选项 */ })

// 注册模块 `myModule`
store.registerModule('myModule', {
  // ...
})
// 注册嵌套模块 `nested/myModule`
store.registerModule(['nested', 'myModule'], {
  // ...
})
```

之后就可以通过 `store.state.myModule` 和 `store.state.nested.myModule` 访问模块的状态。

模块动态注册功能使得其他 Vue 插件可以通过在 store 中附加新模块的方式来使用 Vuex 管理状态。例如，[`vuex-router-sync` (opens new window)](https://github.com/vuejs/vuex-router-sync)插件就是通过动态注册模块将 vue-router 和 vuex 结合在一起，实现应用的路由状态管理。

你也可以使用 `store.unregisterModule(moduleName)` 来动态卸载模块。注意，你不能使用此方法卸载静态模块（即创建 store 时声明的模块）。

注意，你可以通过 `store.hasModule(moduleName)` 方法检查该模块是否已经被注册到 store。

##### [#](https://v3.vuex.vuejs.org/zh/guide/modules.html#保留-state)保留 state

在注册一个新 module 时，你很有可能想保留过去的 state，例如从一个服务端渲染的应用保留 state。你可以通过 `preserveState` 选项将其归档：`store.registerModule('a', module, { preserveState: true })`。

当你设置 `preserveState: true` 时，该模块会被注册，action、mutation 和 getter 会被添加到 store 中，但是 state 不会。这里假设 store 的 state 已经包含了这个 module 的 state 并且你不希望将其覆写。



#### 模块重用

有时我们可能需要创建一个模块的多个实例，例如：

- 创建多个 store，他们公用同一个模块 (例如当 `runInNewContext` 选项是 `false` 或 `'once'` 时，为了[在服务端渲染中避免有状态的单例 (opens new window)](https://ssr.vuejs.org/en/structure.html#avoid-stateful-singletons))
- 在一个 store 中多次注册同一个模块

如果我们使用一个纯对象来声明模块的状态，那么这个状态对象会通过引用被共享，导致状态对象被修改时 store 或模块间数据互相污染的问题。

实际上这和 Vue 组件内的 `data` 是同样的问题。因此解决办法也是相同的——使用一个函数来声明模块状态（仅 2.3.0+ 支持）：

```javascript
const MyReusableModule = {
  state: () => ({
    foo: 'bar'
  }),
  // mutation, action 和 getter 等等...
}
```



#### 实践案例

store文件夹解构如下：

```javascript
store
	--basemodules
  --localStandardData
  --modules
  	--anhui
    	--meteringpoint.js
			--powerplantMeteringpoint.js
    --beiJing
    	--xxx.js
    --xinjiang
    	--xxx.js
  	--xxx1.js
		--xxx2.js
```

问题及解决方法：

store文件夹下存在多个js文件多个文件夹，结构有嵌套，单一结构数量又多。如果在默认文件中使用import方法引入，写法繁琐。

使用require.context自动导入模块

```javascript
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')

  // 处理多层级文件 让第二层级首字母大写
  if (moduleName.includes('/')) {
    let multipleFolderName = moduleName.split('/')
    
    // for (let idx = 1, len = multipleFolderName.length; idx < len; idx++) {
    //   const item = multipleFolderName[idx]
    //   multipleFolderName[idx] = item.slice(0, 1).toUpperCase() + item.slice(1)
    // }
    // moduleName = multipleFolderName.join('')
   

    multipleFolderName.forEach((item, idx) => idx != 0 && item[0].toUpperCase())
    moduleName = multipleFolderName.join('')
  }

  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
 }, {})
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



## Vue路由

### 安装

#### 网页/CDN

[Unpkg.com (opens new window)](https://unpkg.com/)提供了基于 NPM 的 CDN 链接。

安装最新版本:

`https://unpkg.com/vue-router/dist/vue-router.js`

安装指定版本:

`https://unpkg.com/vue-router@2.0.0/dist/vue-router.js`

省略的写法:

`https://unpkg.com/vue-router@2`



实例

```html
<script src="https://unpkg.com/vue@2"></script>
<script src="https://unpkg.com/vue-router@3"></script>
```



#### NPM

在模块化工程中使用, 必须通过`Vue.use()`明确安装路由功能

```javascript
npm i vue-router

// router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.sue(VueRouter)
```

如果使用全局的 script 标签，则无须如此 (手动安装)。



#### Vue CLI



#### 构建开发版



### 基础

#### vue-router插件

```js
//使用方法和Vuex插件用法相似.

1.	vue的一个插件库
2.	专门用来实现一个SPA应用
3.	基于vue的项目基本都会用到此库
4.	中文文档: http://router.vuejs.org/zh-cn/
5.	下载: npm install vue-router -S
```



#### 路由介绍及分类

1.	什么是路由?
1.1.一个路由就是一个映射关系(key:value)
1.2.key为路径, value可能是function或component

2.	路由分类
2.1.后端路由：
1)	理解： value是function, 用来处理客户端提交的请求。
2)	注册路由： `router.get(path, function(req, res))`
3)	工作过程：当服务器接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据
2.2.前端路由：
1)	浏览器端路由，value是component，用于展示页面内容。
2)	注册路由: `<Route path="/test" component={Test}>`
3)	工作过程：当浏览器的path变为/test时, 当前组件就会变为Test组件



#### 起步案例

将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们

HTML

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

JavaScript

```javascript
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')
```



**注意事项**

通过注入路由器，在任何组件内通过 `this.$router` 访问路由器，也可以通过 `this.$route` 访问当前路由：

留意一下 `this.$router` 和 `router` 使用起来完全一样。我们使用 `this.$router` 的原因是我们并不想在每个独立需要封装路由的组件中都导入路由。

当 `<router-link>` 对应的路由匹配成功，将自动设置 class 属性值 `.router-link-active`



### 动态路由匹配

#### 背景

<span style="color:blue">有时候我们要将所有路由，全都映射到同个组件</span>. 例如，我们有一个 `User` 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 `vue-router` 的路由路径中使用<span style="color:blue">“动态路径参数”(dynamic segment) </span>来达到这个效果

#### 代码实现

<span style="color:blue">动态路径参数 以冒号开头</span>

像 `/user/foo` 和 `/user/bar` 都将映射到相同的路由。

```javascript
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```



#### 获取路径参数的值

一个“路径参数”使用冒号 `:` 标记。当匹配到一个路由时，参数值会被设置到<span style="color:blue"> this.<span style="color:red">$route</span>.params</span>，可以在每个组件内使用。

你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 `$route.params` 中。例如：

| 模式                          | 匹配路径            | $route.params                          |
| ----------------------------- | ------------------- | -------------------------------------- |
| /user/:username               | /user/evan          | `{ username: 'evan' }`                 |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: '123' }` |





#### query参数 params参数

> $route 路由组件的实例对象身上有一个$route属性(对象).身上有params, query属性



##### query参数设置流程

* 路由定义: query参数无需声明

* from路由组件, 通过`<router-link>`或路由器实例方法进行路由跳转
  * path接收的参数: path字符串/path对象/命名路由/path+query对象
  * 形成的路径: `/route?id=123`
* to路由组件, 通过路由实例对象`$route.query`来获取







##### params参数设置

* 路由定义:  路由对象path属性, 添加后缀`:xxx`
* from路由组件: 通过`<router-link to>`或路由器实例方法进行路由跳转
  * push等接收的参数类型: path字符串/path对象/命名路由
  * 形成的路径: `/route/id`
  * 如果路径中同时存在params和query参数, params参数需要设置在前.
* to路由组件: 通过路由实例对象`$route.params`来获取





#### 响应路由参数的变化

当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar`，**原来的组件实例会被复用**。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。**不过，这也意味着组件的生命周期钩子不会再被调用**。



复用组件时，想对路由参数的变化作出响应的话:

* watch
* beforeRouteUpate
* router key



##### watch

```javascript
watch: {
  $route(to, from) {
    //对路由变化作出响应....
  }
}
```



##### beforeRouteUpdate

```javascript
beforeRouteUpate(to, from, next) {
  
}
```



##### router key

> https://mp.weixin.qq.com/s/0Yekkc08ozbNxuquHVGveg

```html
<router-view v-bind="$route.fullpath"></router-view>
```







#### 捕获所有路由或404Not found路由

##### 如何配置

常规参数只会匹配被 `/` 分隔的 URL 片段中的字符。如果想匹配**任意路径**，我们可以使用<span style="color:blue">通配符 (`*`)</span>

```javascript
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
```



##### 注意事项

* 含有*通配符*的路由应该放在最后。
* 路由 `{ path: '*' }` 通常用于客户端 404 错误。如果你使用了*History 模式*，请确保[正确配置你的服务器](https://v3.router.vuejs.org/zh/guide/essentials/history-mode.html)。



##### 获取通配符匹配的内容

当使用一个*通配符*时，`$route.params` 内会自动添加一个名为 `pathMatch` 参数。它包含了 URL 通过*通配符*被匹配的部分：

```javascript
// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'
```



#### 高级匹配模式 !!

`vue-router` 使用 [path-to-regexp (opens new window)](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)作为路径匹配引擎，所以支持很多高级的匹配模式，例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配。查看它的[文档 (opens new window)](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)学习高阶的路径匹配，还有[这个例子 (opens new window)](https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js)展示 `vue-router` 怎么使用这类匹配。

<iframe src="https://codesandbox.io/embed/vuerouter-advancedmatch-565fmm?autoresize=1&fontsize=12&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vueRouter/advancedMatch"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>





##### 根路径

路径: '/'

路由path: '/'

$route序列化结果:

```javascript
{
  "meta": {},
  "path": "/",
  "hash": "",
  "query": {},
  "params": {},
  "fullPath": "/",
  "matched": [
    {
      "path": "",
      "regex": {
        "keys": []
      },
      "components": {},
      "alias": [],
      "instances": {},
      "enteredCbs": {},
      "meta": {},
      "props": {}
    }
  ]
}
```



##### 动态路由

路径: '/params/foo/bar'

路由path: '/params/:foo/:bar'

$route序列化结果:

```javascript
{
  "meta": {},
  "path": "/params/foo/bar",
  "hash": "",
  "query": {},
  "params": {
    "foo": "foo",
    "bar": "bar"
  },
  "fullPath": "/params/foo/bar",
  "matched": [
    {
      "path": "/params/:foo/:bar",
      "regex": {
        "keys": [
          {
            "name": "foo",
            "prefix": "/",
            "delimiter": "/",
            "optional": false,
            "repeat": false,
            "partial": false,
            "asterisk": false,
            "pattern": "[^\\/]+?"
          },
          {
            "name": "bar",
            "prefix": "/",
            "delimiter": "/",
            "optional": false,
            "repeat": false,
            "partial": false,
            "asterisk": false,
            "pattern": "[^\\/]+?"
          }
        ]
      },
      "components": {},
      "alias": [],
      "instances": {},
      "enteredCbs": {},
      "meta": {},
      "props": {}
    }
  ]
}
```



##### 可选参数

> *a param can be made optional by adding "?"*

路径: '/optional-params'

路由路径: '/optional-params/:foo?'   //如果去掉问号, 使用原来的path路径就访问不过来了

$route序列化结果

```javascript
{
  "meta": {},
  "path": "/optional-params",
  "hash": "",
  "query": {},
  "params": {},
  "fullPath": "/optional-params",
  "matched": [
    {
      "path": "/optional-params/:foo?",
      "regex": {
        "keys": [
          {
            "name": "foo",
            "prefix": "/",
            "delimiter": "/",
            "optional": true,
            "repeat": false,
            "partial": false,
            "asterisk": false,
            "pattern": "[^\\/]+?"
          }
        ]
      },
      "components": {},
      "alias": [],
      "instances": {},
      "enteredCbs": {},
      "meta": {},
      "props": {}
    }
  ]
}
```



##### 正则表达式

> *a param can be followed by a regex pattern in parens*
>
> this route will only be matched if :id is all numbers

组件中的路径: '/params-with-regex/123'

路由路径: `path:/params-with-regex/:id(\\d+)`

```javascript
{
  "meta": {},
  "path": "/params-with-regex/123",
  "hash": "",
  "query": {},
  "params": {
    "id": "123"
  },
  "fullPath": "/params-with-regex/123",
  "matched": [
    {
      "path": "/params-with-regex/:id(\\d+)",
      "regex": {
        "keys": [
          {
            "name": "id",
            "prefix": "/",
            "delimiter": "/",
            "optional": false,
            "repeat": false,
            "partial": false,
            "asterisk": false,
            "pattern": "\\d+"
          }
        ]
      },
      "components": {},
      "alias": [],
      "instances": {},
      "enteredCbs": {},
      "meta": {},
      "props": {}
    }
  ]
}
```



组件中的路径: `/params-with-regex/abc`

$route序列化结果:

```json
{
  "name": null,
  "meta": {},
  "path": "/params-with-regex/abc",
  "hash": "",
  "query": {},
  "params": {},
  "fullPath": "/params-with-regex/abc",
  "matched": []
}
```





##### 通配符

> asterisk can match anything

路由路径: `path: '/asterisk/*'`

组件中的路径: `to="/asterisk/foo"`

$route序列化结果:

```json
{
  "meta": {},
  "path": "/asterisk/foo",
  "hash": "",
  "query": {},
  "params": {
    "pathMatch": "foo"   //params对象有属性'pathMatch'
  },
  "fullPath": "/asterisk/foo",
  "matched": [
    {
      "path": "/asterisk/*",
      "regex": {
        "keys": [
          {
            "name": 0,
            "prefix": "/",
            "delimiter": "/",
            "optional": false,
            "repeat": false,
            "partial": false,
            "asterisk": true,
            "pattern": ".*"
          }
        ]
      },
      "components": {},
      "alias": [],
      "instances": {},
      "enteredCbs": {},
      "meta": {},
      "props": {}
    }
  ]
}
```



路由路径: 同上

组件中的路径: `/asterisk/foo/bar`

$route的序列化结果

```json
{
  "meta": {},
  "path": "/asterisk/foo/bar",
  "hash": "",
  "query": {},
  "params": {
    "pathMatch": "foo/bar"
  },
  "fullPath": "/asterisk/foo/bar",
  "matched": [
    {
      "path": "/asterisk/*",
      "regex": {
        "keys": [
          {
            "name": 0,
            "prefix": "/",
            "delimiter": "/",
            "optional": false,
            "repeat": false,
            "partial": false,
            "asterisk": true,
            "pattern": ".*"
          }
        ]
      },
      "components": {},
      "alias": [],
      "instances": {},
      "enteredCbs": {},
      "meta": {},
      "props": {}
    }
  ]
}
```



##### 圆括号和?

> *make part of the path optional by wrapping with parens and add "?"*

路由路径: `/optional-group/(foo/)?bar`

组件路径: `/optional-group/bar`

$route序列化结果

```json
{
  "meta": {},
  "path": "/optional-group/bar",
  "hash": "",
  "query": {},
  "params": {},
  "fullPath": "/optional-group/bar",
  "matched": [
    {
      "path": "/optional-group/(foo/)?bar",
      "regex": {
        "keys": [
          {
            "name": 0,
            "prefix": "/",
            "delimiter": "/",
            "optional": true,
            "repeat": false,
            "partial": true,
            "asterisk": false,
            "pattern": "foo\\/"
          }
        ]
      },
      "components": {},
      "alias": [],
      "instances": {},
      "enteredCbs": {},
      "meta": {},
      "props": {}
    }
  ]
}
```



路由路径: 同上

组件中的路径: `/optional-group/foo/bar`

$route序列化结果

```json
{
  "meta": {},
  "path": "/optional-group/foo/bar",
  "hash": "",
  "query": {},
  "params": {
    "pathMatch": "foo/"
  },
  "fullPath": "/optional-group/foo/bar",
  "matched": [
    {
      "path": "/optional-group/(foo/)?bar",
      "regex": {
        "keys": [
          {
            "name": 0,
            "prefix": "/",
            "delimiter": "/",
            "optional": true,
            "repeat": false,
            "partial": true,
            "asterisk": false,
            "pattern": "foo\\/"
          }
        ]
      },
      "components": {},
      "alias": [],
      "instances": {},
      "enteredCbs": {},
      "meta": {},
      "props": {}
    }
  ]
}
```











#### 匹配优先级

匹配的优先级就按照路由的定义顺序：路由定义得越早，优先级就越高。



### 嵌套路由

#### 背景

实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：

```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```



#### 如何实现嵌套路由

组件中的设置:

一个被渲染组件同样可以包含自己的嵌套 `<router-view>`。例如，在 `User` 组件的模板添加一个 `<router-view>`：

```javascript
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
```

路由中的设置:

要在嵌套的出口中渲染组件，需要在 `VueRouter` 的参数中使用 `children` 配置：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```



#### 注意事项

* **以 `/` 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。**

* `children` 配置就是像 `routes` 配置一样的路由配置数组



#### 空的子路由设置

基于上面的配置，当你访问 `/user/foo` 时，`User` 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中 when /user/:id is matched
        { path: '', component: UserHome }

        // ...其他子路由
      ]
    }
  ]
})
```



### 编程式导航

#### 是什么

除了使用 `<router-link>` 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。

`router.push(location, onComplete?, onAbort?)`

`router.replace(location, onComplete?, onAbort?)`

**注意：在 Vue 实例内部，你可以通过 `$router` 访问路由实例。因此你可以调用 `this.$router.push`。**

#### push

#### push原理解析

`router.push` 会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

当你点击 `<router-link>` 时，这个方法会在内部调用，所以说，点击 `<router-link :to="...">` 等同于调用 `router.push(...)`。



#### 声明式和编程式

| 声明式                    | 编程式             |
| ------------------------- | ------------------ |
| `<router-link :to="...">` | `router.push(...)` |



#### 参数(location)的形式

* 字符串 字符串路径
* 对象  描述地址的对象

```javascript
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```



#### 参数(location)注意事项

**如果提供了 `path`，`params` 会被忽略**

**需要提供路由的 `name` 或手写完整的带有参数的 `path`**

```javascript
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```

同样的规则也适用于 `router-link` 组件的 `to` 属性



#### onComplete / onAbort

在 2.2.0+，可选的在 `router.push` 或 `router.replace` 中提供 `onComplete` 和 `onAbort` 回调作为第二个和第三个参数。

这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。

在 3.1.0+，可以省略第二个和第三个参数，此时如果支持 Promise，`router.push` 或 `router.replace` 将返回一个 Promise。



#### replace



#### 与push的比较

它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

#### 声明式与编程式

| 声明式                            | 编程式                |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |



#### go

##### 介绍

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`。



##### 实例

```javascript
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```



#### 操作History ??

如果你已经熟悉 [Browser History APIs (opens new window)](https://developer.mozilla.org/en-US/docs/Web/API/History_API)，那么在 Vue Router 中操作 history 就是超级简单的。

还有值得提及的，Vue Router 的导航方法 (`push`、 `replace`、 `go`) 在各类路由模式 (`history`、 `hash` 和 `abstract`) 下表现一致。



### 命名路由

#### 背景

有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。

#### 配置

1.在创建 Router 实例的时候，在 `routes` 配置中给某个路由设置名称

```css
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
```

2.给 `router-link` 的 `to` 属性传一个对象 / 给路由方法(push/replace)添加含有name属性的对象

```html
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

//类似的编程式导航
$router.push({name: 'user', params:{userId: 123}})
```



#### 完整实例

> https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js



<iframe src="https://codesandbox.io/embed/strange-dew-g1l0mq?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="strange-dew-g1l0mq"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



### 命名视图

#### 背景

有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 `sidebar` (侧导航) 和 `main` (主内容) 两个视图，这个时候命名视图就派上用场了.   (非嵌套路由??)

#### 定义

一个单路由可以定义多个命名的组件,通过相应的名字被渲染成`<router-view>`



#### 设置

1.路由对象中添加**components**配置

一个视图使用一个组件渲染，因此对于同个路由下的多个视图就需要多个组件

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```

2.组件中

在组件中使用多个`<router-view name="xxx">`. 如果 `router-view` 没有设置名字，那么默认为 `default`。

```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```



#### 实例

<iframe src="https://codesandbox.io/embed/vuerouter-namedview-20qrtn?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vueRouter/namedView"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



#### 嵌套命名视图

我们也有可能使用命名视图创建嵌套视图的复杂布局。这时你也需要命名用到的嵌套 `router-view` 组件。

我们以一个设置面板为例：

```md
/settings/emails                                       /settings/profile
+-----------------------------------+                  +------------------------------+
| UserSettings                      |                  | UserSettings                 |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
| | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
| |     +-------------------------+ |                  | |     +--------------------+ |
| |     |                         | |                  | |     | UserProfilePreview | |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
+-----------------------------------+                  +------------------------------+
```

- `Nav` 只是一个常规组件。
- `UserSettings` 是一个视图组件。
- `UserEmailsSubscriptions`、`UserProfile`、`UserProfilePreview` 是嵌套的视图组件。



`UserSettings` 组件的 `<template>` 部分应该是类似下面的这段代码：

```html
<!-- UserSettings.vue -->
<div>
  <h1>User Settings</h1>
  <NavBar/>
  <router-view/>
  <router-view name="helper"/>
</div>
```

*嵌套的视图组件在此已经被忽略了，但是你可以在[这里 (opens new window)](https://jsfiddle.net/posva/22wgksa3/)找到完整的源代码。*

然后你可以用这个路由配置完成该布局：

```javascript
{
  path: '/settings',
  // 你也可以在顶级路由就配置命名视图
  component: UserSettings,
  children: [{
    path: 'emails',
    component: UserEmailsSubscriptions
  }, {
    path: 'profile',
    components: {
      default: UserProfile,
      helper: UserProfilePreview
    }
  }]
}
```

**实例**

<iframe src="https://codesandbox.io/embed/vuerouter-nestednamedview-mhxnuh?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vueRouter/nestedNamedView"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>





### 重定向

“重定向”的意思是，当用户访问 `/a`时，URL 将会被替换成 `/b`，然后匹配路由为 `/b`

**redirect属性的值可以是 路径字符串, 命名的路由, 方法**

注意[导航守卫](https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html)并没有应用在跳转路由上，而仅仅应用在其目标上

#### 字符串

```javascript
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```



#### 命名路由

```javascript
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```



#### 方法

```javascript
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
    }}
  ]
})
```

注意[导航守卫](https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html)并没有应用在跳转路由上，而仅仅应用在其目标上. 在下面这个例子中，为 `/a` 路由添加一个 `beforeEnter` 守卫并不会有任何效果。(文档中没有案例)

#### 案例 !!!

* relative redirect to a sibling route
* absolute redirect
* dynamic redirect, 
* named redirect
* redirect with params
* redirect with caseSensitive
* redirect with pathToRegexpOptions
* catch all redirect

<iframe src="https://codesandbox.io/embed/vuerouter-redirect-s634z9?autoresize=1&fontsize=12&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vueRouter/redirect"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



### 别名

**`/a` 的别名是 `/b`，意味着，当用户访问 `/b` 时，URL 会保持为 `/b`，但是路由匹配则为 `/a`，就像用户访问 `/a` 一样。**

```javascript
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})
```



### 路由组件props传参

#### 背景

在组件中使用 `$route` 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

#### 解决

使用`props`将组件和路由解耦,取代与`$route`的耦合

```javascript
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const router = new VueRouter({
  routes: [{ path: '/user/:id', component: User }]
})
```

通过`props`解耦

```javascript
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项： !!!
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
})
```

这样你便可以在任何地方使用该组件，使得该组件更易于重用和测试。



#### props传参 3种形式

未使用路由props传参时,接收路由参数的方法(computed等)

```javascript
//直接使用$route.params.xxx

//计算属性等
computed: {
  id(){ return this.$route.params.id },
  title(){ return this.$route.query.title },
  content(){ return this.$route.query.content } 
}
```



##### 布尔模式

> 如果 `props` 被设置为 `true`，`route.params` 将会被设置为组件属性。

在路由配置中添加`props: true`后, 路由组件的`$attrs`会接收到相应的params参数, 一半是使用props来接收它.

注意：对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项





##### 对象模式

如果 `props` 是一个对象，它会被按原样设置为组件属性。<span style="color:red">当 `props` 是静态的时候有用。 ???</span>

这里的'静态'不理解. 在组件中使用props传递数据根据是否绑定v-bind分为静态和动态, 但是和接收路由props是没关系的吧.

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/promotion/from-newsletter',
      component: Promotion,
      props: { newsletterPopup: false }  //props对象形态, 只能传递布尔值
    }
  ]
})
```



##### 函数模式

可以创建一个函数返回 `props`。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/search',
      component: SearchUser,
      props: route => ({ query: route.query.q })
    }
  ]
})
```

URL `/search?q=vue` 会将 `{query: 'vue'}` 作为属性传递给 `SearchUser` 组件。

请尽可能保持 `props` 函数为无状态的，因为它只会在路由发生变化时起作用。如果你需要状态来定义 `props`，请使用包装组件，这样 Vue 才可以对状态变化做出反应。

##### 案例

<iframe src="https://codesandbox.io/embed/vuerouter-routecomponentdeliverparams-rhk23r?autoresize=1&eslint=1&fontsize=12&hidenavigation=1&moduleview=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vueRouter/routeComponentDeliverParams"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



### 路由传参的 3 种方式???





### 路由Hash模式

> [浅谈前端路由原理hash和history - 掘金 (juejin.cn)](https://juejin.cn/post/6993840419041706014)
>
> 

>  `vue-roter` 的两种路由模式，及差异化，简单来讲就是，`hash` 路由兼容梗好，但是带#显得丑些， `histroy` 和正常 url 路径一样，但是需要在服务器进行单独配置。大

#### Hash概述及特点

##### 定义

> `hash` 模式是一种把前端路由的路径用井号 `#` 拼接在真实 `url` 后面的模式。当井号 `#` 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 `onhashchange` 事件。





`vue-router` 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

 `hash`（#）是 `URL` 的锚点，代表的是网页中的一个位置，单单改变 `#` 后的部分，浏览器只会滚动到相应位置，不会重新加载网页.

同时每一次改变 `#` 后的部分，都会在浏览器的访问历史中增加一个记录，使用 "后退" 按钮，就可以回到上一个位置，所以说 `hash` 模式通过锚点值的改变，根据不同的值，渲染指定 `DOM` 位置的不同数据。

`#` 符号本身以及它后面的字符称之为 `hash`，可通过` window.location.hash` 属性读取。



##### 特点

- `hash` 虽然出现在URL中，但不会被包括在 `HTTP` 请求中。它是用来指导浏览器动作的，对服务器端完全无用，因此，改变 `hash` 不会重新加载页面

- 可以为 `hash` 的改变添加监听事件onhasChange()：

- ```
  window.addEventListener("hashchange", fncEvent, false)
  ```

- 每一次改变 hash（`window.location.hash`），都会在浏览器的访问历史中增加一个记录

- url 带一个 `#` 号



#### 如何获取页面的hash变化

##### 监听$route变化

```javascript
// 监听,当路由发生变化的时候执行
watch: {
  $route: {
    handler: function(val, oldVal){
      console.log(val);
    },
    // 深度观察监听
    deep: true
  }
},
```



##### window.location.has

window.location.hash 的值可读可写，读取来判断状态是否改变，写入时可以在不重载网页的前提下，添加一条历史访问记录。





### History模式

#### History概述及特点

##### 定义

history模式的URL中没有#，它使用的是传统的路由分发模式，即用户在输入一个URL时，服务器会接收这个请求，并解析这个URL，然后做出相应的逻辑处理。

##### 特点

- URL中不含#号
- 需要后配支持,否则容易返回404.







### 前端路由的理解

> [Vue 了解前端路由 hash 与 history 差异 - 掘金 (juejin.cn)](https://juejin.cn/post/7096034733649297421)
>
> https://www.yuque.com/cuggz/interview/hswu8g#054faf174e3bbcf9f4d162773ee937b0

#### 出现的背景

在前端技术早期，一个 url 对应一个页面，如果要从 A 页面切换到 B 页面，那么必然伴随着页面的刷新。

用户只有在刷新页面的情况下，才可以重新去请求数据。

Ajax 的出现允许人们在不刷新页面的情况下发起请求；与之共生的，还有“不刷新页面即可更新页面内容”这种需求。在这样的背景下，出现了 **SPA（单页面应用**）

在 SPA 诞生之初，人们并没有考虑到“定位”这个问题——在内容切换前后，页面的 URL 都是一样的，这就带来了两个问题：

- SPA 其实并不知道当前的页面“进展到了哪一步”。可能在一个站点下经过了反复的“前进”才终于唤出了某一块内容，但是此时只要刷新一下页面，一切就会被清零，必须重复之前的操作、才可以重新对内容进行定位——SPA 并不会“记住”你的操作。
- 由于有且仅有一个 URL 给页面做映射，这对 SEO 也不够友好，搜索引擎无法收集全面的信息

为了解决这个问题，前端路由出现了。

#### SPA页面介绍

- `SPA` 单页面及应用方式:单一页面应用程序，只有一个完整的页面；它在第一次加载页面时,就将唯一完整的 `html` 页面和所有其余页面组件一起下载下来，这样它在切换页面时，不会加载整个页面，而是只更新某个指定的容器中内容。
- 单页面应用(`SPA`)的核心之一是: 更新视图而不重新请求页面。
- 路由器对象底层实现的三大步骤即(1)**监视**地址栏变化；(2)**查找**当前路径对应的页面组件；(3)将找到的页面组件**替换**到 `router-vieW` 的位置。
- `vue-router` 在实现单页面前端路由时，提供了两种方式：`Hash` 模式和 `History` 模式；vue2 是根据 `mode` 参数来决定采用哪一种方式，vue3 则是 `history` 参数











#### 缓存路由组件keep-alive

```js
//路由组件不显示了会被销毁,通过生命周期(mounted, beforeDestroy)查看验证

//使用keep-alive阻止路由组件销毁. 使用include='组件名称'来指定不销毁的组件.如果都不销毁,占内存.
<keep-alive include='子组件名称'>
    <router-view></router-view>
</keep-alive>


```



### 导航守卫

`vue-router` 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：<span style="color:blue">全局的, 单个路由独享的, 或者组件级的</span>

**参数或查询的改变并不会触发进入/离开的导航守卫**。你可以通过[观察 `$route` 对象](https://v3.router.vuejs.org/zh/guide/essentials/dynamic-matching.html#响应路由参数的变化)来应对这些变化，或使用 `beforeRouteUpdate` 的组件内守卫。

#### 导航守卫的分类

```md
	全局导航守卫： 
		无论是从哪个页面往哪个页面跳转，只要有路由跳转，就会拦住，进行检测

		
		前置守卫   配置的比较靠前       匹配路由前拦截，用的最多     
		解析守卫   配置的位置中间       匹配路由中拦截，用的比较少
		后置守卫   配置的比较靠后       匹配路由完成拦截，用的比较少

	路由独享守卫：

		只能去拦住固定的往某个页面跳转的，是配置在当前路由当中，时间比较靠前
		前置守卫   配置的比较靠前       匹配路由前拦截，用的最多     
		解析守卫   配置的位置中间       匹配路由中拦截，用的比较少
		后置守卫   配置的比较靠后       匹配路由完成拦截，用的比较少


	组件内守卫：	
		只能去拦住固定的往某个页面跳转的，是配置在组件内部，也就是路由匹配已经完成了，时间比较靠后

		只有一个，就是解析完了，已经跳转到组件的时候，但是组件还没创建成功的时候拦截
```



#### 全局前置守卫

##### 注册

使用 `router.beforeEach` 在路由器构造函数中,注册一个全局前置守卫：

```javascript
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 **等待中**。



##### 参数

每个守卫方法接收三个参数：

- **`to: Route`**: 即将要进入的目标 [路由对象](https://v3.router.vuejs.org/zh/api/#路由对象)
- **`from: Route`**: 当前导航正要离开的路由
- **`next: Function`**: 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。
  - **`next()`**: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。
  - **`next(false)`**: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址。
  - **`next('/')` 或者 `next({ path: '/' })`**: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true`、`name: 'home'` 之类的选项以及任何用在 [`router-link` 的 `to` prop](https://v3.router.vuejs.org/zh/api/#to) 或 [`router.push`](https://v3.router.vuejs.org/zh/api/#router-push) 中的选项。
  - **`next(error)`**: (2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 [`router.onError()`](https://v3.router.vuejs.org/zh/api/#router-onerror) 注册过的回调。



**确保 `next` 函数在任何给定的导航守卫中都被严格调用一次。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错**。??



#### 全局解析守卫

用 `router.beforeResolve` 注册一个全局守卫。这和 `router.beforeEach` 类似，区别是在导航被确认之前，**同时在所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用

在`beforeRouteEnter`调用之后调用



#### 全局后置守卫

你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 `next` 函数也不会改变导航本身：

实例: 跳转之后滚动条滚到顶部

```javascript
router.afterEach((to, from) => {
  // ...
  window.scrollTo(0, 0)
})
```



#### 路由独享守卫

可以在路由配置上直接定义 `beforeEnter` 守卫. 这些守卫与全局前置守卫的方法参数是一样的

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```



#### 组件内的守卫

可以在路由组件内直接定义以下路由导航守卫：

- `beforeRouteEnter`
- `beforeRouteUpdate` (2.2 新增)
- `beforeRouteLeave`



```javascript
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```



##### beforeRouteEnter()中无法访问this的原因及解决

`beforeRouteEnter` 守卫 **不能** 访问 `this`，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。

不过，你可以通过传一个回调给 `next`来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。

```javascript
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

注意 `beforeRouteEnter` 是支持给 `next` 传递回调的唯一守卫



##### beforeRouteLeave

通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 `next(false)` 来取消

```javascript
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```



#### 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。



#### 触发钩子的完整顺序

> https://www.yuque.com/cuggz/interview/hswu8g#2c3f563ad7506984575f1a323937c5c0

路由导航、keep-alive、和组件生命周期钩子结合起来的，触发顺序，假设是从a组件离开，第一次进入b组件

- beforeRouteLeave：路由组件的组件离开路由前钩子，可取消路由离开。
- beforeEach：路由全局前置守卫，可用于登录验证、全局路由loading等。
- beforeEnter：路由独享守卫
- beforeRouteEnter：路由组件的组件进入路由前钩子。
- beforeResolve：路由全局解析守卫
- <u>afterEach：路由全局后置钩子</u>
- beforeCreate：组件生命周期，不能访问this。
- created;组件生命周期，可以访问this，不能访问dom。
- beforeMount：组件生命周期
- <u>deactivated：离开缓存组件a，或者触发a的beforeDestroy和destroyed组件销毁钩子。</u>
- mounted：访问/操作dom。
- <u>activated：进入缓存组件，进入a的嵌套子组件（如果有的话）。</u>
- 执行beforeRouteEnter回调函数next。







### 路由元信息

##### 如何定义meta字段?

定义路由的时候可以配置 `meta` 字段：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
```



##### 如何访问meta字段?

一个路由匹配到的所有路由记录会暴露为 `$route` 对象 (还有在导航守卫中的路由对象) 的 `$route.matched` 数组。因此，我们需要遍历 `$route.matched` 来检查路由记录中的 `meta` 字段。



##### 案例,在导航守卫中检查元字段

```javascript
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
```



### 过渡动效 ???

`<router-view>` 是基本的动态组件，所以我们可以用 `<transition>` 组件给它添加一些过渡效果

```html
<transition>
  <router-view></router-view>
</transition>
```



### 数据获取

#### 背景

有时候，进入某个路由后，需要从服务器获取数据。例如，在渲染用户信息时，你需要从服务器获取用户的数据。我们可以通过两种方式来实现：

- **导航完成之后获取**：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。
- **导航完成之前获取**：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。



#### 导航完成之后获取

当你使用这种方式时，我们会马上导航和渲染组件，然后在组件的 `created` 钩子中获取数据。这让我们有机会在数据获取期间展示一个 loading 状态，还可以在不同视图间展示不同的 loading 状态。 ??

##### 案例

假设我们有一个 `Post` 组件，需要基于 `$route.params.id` 获取文章数据：

```html
<template>
  <div class="post">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
```



```javascript
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
```



#### 在导航完成前获取数据

通过这种方式，我们在导航转入新的路由前获取数据。我们可以在接下来的组件的 `beforeRouteEnter` 守卫中获取数据，当数据获取成功后只调用 `next` 方法。

```javascript
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post))
    })
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    this.post = null
    getPost(to.params.id, (err, post) => {
      this.setData(err, post)
      next()
    })
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
}
```

在为后面的视图获取数据时，用户会停留在当前的界面，因此建议在数据获取期间，显示一些进度条或者别的指示。如果数据获取失败，同样有必要展示一些全局的错误提醒。



### 滚动行为??





### 路由懒加载

#### 背景

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

结合 Vue 的[异步组件 (opens new window)](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#异步组件)和 Webpack 的[代码分割功能 (opens new window)](https://doc.webpack-china.org/guides/code-splitting-async/#require-ensure-/)，轻松实现路由组件的懒加载。



#### 如何做?

首先，可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)：

```javascript
const Foo = () =>
  Promise.resolve({
    /* 组件定义对象 */
  })
```

第二，在 Webpack 2 中，我们可以使用[动态 import (opens new window)](https://github.com/tc39/proposal-dynamic-import)语法来定义代码分块点 (split point)：

```javascript
import('./Foo.vue') // 返回 Promise
```

结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件

```javascript
const Foo = () => import('./Foo.vue')
```

在路由配置中什么都不需要改变，只需要像往常一样使用 `Foo`：

```js
const router = new VueRouter({
  routes: [{ path: '/foo', component: Foo }]
})
```



#### 把组件按组分块???



#### 懒加载实现的 3 种技术

> https://www.yuque.com/cuggz/interview/hswu8g#2c3f563ad7506984575f1a323937c5c0

* 箭头函数+import动态加载
* 箭头函数+require动态加载
* webpack的require.ensure技术

##### 箭头函数+import

```javascript
const List = () => import('@/components/list.vue')
const router = new VueRouter({
  routes: [
    { path: '/list', component: List }
  ]
})
```

##### 箭头函数+require

```javascript
const router = new Router({
  routes: [
   {
     path: '/list',
     component: resolve => require(['@/components/list'], resolve)
   }
  ]
})
```

##### require.ensure

这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。

```javascript
// r就是resolve
const List = r => require.ensure([], () => r(require('@/components/list')), 'list');
// 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
const router = new Router({
  routes: [
  {
    path: '/list',
    component: List,
    name: 'list'
  }
 ]
}))
```





### 导航故障

#### 背景

当使用 `router-link` 组件时，Vue Router 会自动调用 `router.push` 来触发一次导航。 虽然大多数链接的预期行为是将用户导航到一个新页面，但也有少数情况下用户将留在同一页面上：

- 用户已经位于他们正在尝试导航到的页面
- 一个[导航守卫](https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html)通过调用 `next(false)` 中断了这次导航
- 一个[导航守卫](https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html)抛出了一个错误，或者调用了 `next(new Error())`

当使用 `router-link` 组件时，**这些失败都不会打印出错误**。然而，如果你使用 `router.push` 或者 `router.replace` 的话，可能会在控制台看到一条 *"Uncaught (in promise) Error"* 这样的错误，后面跟着一条更具体的消息。让我们来了解一下如何区分*导航故障*。



#### 检测导航故障

*导航故障*是一个 `Error` 实例，附带了一些额外的属性。要检查一个错误是否来自于路由器，可以使用 `isNavigationFailure` 函数：

```javascript
import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter

// 正在尝试访问 admin 页面
router.push('/admin').catch(failure => {
  if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
    // 向用户显示一个小通知
    showToast('Login in order to access the admin panel')
  }
})
```



##### `NavigationFailureType`

`NavigationFailureType` 可以帮助开发者来区分不同类型的*导航故障*。有四种不同的类型：

- `redirected`：在导航守卫中调用了 `next(newLocation)` 重定向到了其他地方。
- `aborted`：在导航守卫中调用了 `next(false)` 中断了本次导航。
- `cancelled`：在当前导航还没有完成之前又有了一个新的导航。比如，在等待导航守卫的过程中又调用了 `router.push`。
- `duplicated`：导航被阻止，因为我们已经在目标位置了



#### 导航故障的属性

所有的导航故障都会有 `to` 和 `from` 属性，分别用来表达这次失败的导航的目标位置和当前位置。

```js
// 正在尝试访问 admin 页面
router.push('/admin').catch(failure => {
  if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
    failure.to.path // '/admin'
    failure.from.path // '/'
  }
})
```









## Vue脚手架配置代理

```js
参考：vue脚手架配置代理.md
```



## axios

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





## UI组件库-element

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



### Vue项目优化

> https://juejin.cn/post/6844903918753808398#heading-20









## Vue开发问题

> https://juejin.cn/post/6844903632815521799 (待完成)





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



### 如何保存页面当前的状态?

> https://www.yuque.com/cuggz/interview/hswu8g#02b671eb804c1a7a0e637fb68e91d8ac



既然是要保持页面的状态（其实也就是组件的状态），那么会出现以下两种情况：

- 前组件会被卸载
- 前组件不会被卸载

那么可以按照这两种情况分别得到以下方法：

#### 组件会被卸载

##### 将状态存储在**LocalStorage / SessionStorage**

只需要在组件即将被销毁的生命周期中在 LocalStorage / SessionStorage 中把当前组件的 state 通过 JSON.stringify() 储存下来就可以了。在这里面需要注意的是组件更新状态的时机。



缺点:

* json序列化有无法处理的数据类型
* ???

##### 路由传值



#### 组件不会卸载

##### 单页面渲染

要切换的组件作为子组件全屏渲染，父组件中正常储存页面状态



#### 其他

keep-alive









## 面试题整理 >>>>>

https://juejin.cn/post/6844903918753808398#heading-20

https://www.yuque.com/cuggz/interview/hswu8g#02b671eb804c1a7a0e637fb68e91d8ac

[史上最强vue总结---面试开发全靠它了 - 掘金 (juejin.cn)](https://juejin.cn/post/6850037277675454478)



