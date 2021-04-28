## Vue

[Toc]



## 0112

### 安装

```
官网
使用开发版,完整的错误和警告
```



### 初识Vue

```js
1.引入script
2.index.html中准备好容器 <div id="root"></div>
3.页面脚本
 3.1创建Vue的实例对象并传入配置<对象> const v=new Vue({}); 常量v可接可不接收.
 	const v=new Vue({
 		el:'#root', //el用于指定当前Vue实例为哪个容器服务.值是选择器字符串,选择器的写法类似于jQuery. el是element缩写 index.html是public文件夹中index.html
 		data:{//data是存储数据的地方,为root容器提供数据.值为一个对象,相当于react中的state.
            world:'世界',
            other:{
                info:'aaa',
                address:'beijing'
            }
        }, 
 	})
 3.2 html中使用<双花括号>来接收数据. root容器中写的不是html,是Vue中的模板代码.
 	 所谓的模板代码,类似于React中的jsx,是HTML+js的混合体;
 	 {{xxx}},xxx会自动读取<data>中的xxx的属性,方法,对象都可以.xxx当表达式去解析,只要是vc身上的都是可以读取的.
     {{xxx+yyy}} 可以读取多个属性,使用+运算符,但不用逗号,只会读取逗号之前的第一个.使用&&只会读取都为true的第二个.
 	<div id='root'>
    	<h1>hello, {{world}}</h1> 
		<h2>{{other.info.toUpperCase()}}</h2>//读取的表达式可以直接使用JS语法
    </div>

4.HTML中可以有多个容器,相对应的js脚本中也应该有多个new Vue({}). el属性只能有一个参数.但一般是只有一个根容器.

5.Vue中源码部分开启了严格模式.慎用箭头函数,实例调用的函数this指向实例,非实例对象调用的函数:箭头函数this指实例,普通函数指window,开启了'use strict'后指向undefined.


6.data中的数据(属性)在data之外写:如果写在data之前,可以使用;如果使用在data之后,报错,但实例之后的属性,在vm._data中依然有被收集引用.
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
	data.age=18
</script>        
```



### 其他补充

```js
//表达式
{{other.info, other.address}}//输出other.info的值


//逻辑与
{{other.info && other.address}} //输出的是other.address,短路的与,找false的. 和三元表达式比较看情况使用

=====================
不加小括号取第1个,加小括号取最后一个.
var a=1;
var b=2;
var c=3;
var d=4;
var z=a,b,c,d; //隐藏着重新定义,所以也不适用于const,let
console.log(z);//1

var a=1;
var b=2;
var c=3;
var d=4;
var z=(a,b,c,d);
console.log(z);//4
```





### Vue模板语法分类

#### 总结

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



#### 插值

> 模板表达式都被放在沙盒中，只能访问[全局变量的一个白名单](https://github.com/vuejs/vue/blob/v2.6.10/src/core/instance/proxy.js#L9)，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量





#### 指令

> 指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。指令 attribute 的值预期是**单个 JavaScript 表达式** (`v-for` 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM.



##### 参数

> 一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，`v-bind` 指令可以用于响应式地更新 HTML attribute：

```html

<a v-bind:href='url'>...</a>  href是参数,告知v-bind指令将该元素的href attribute与表达式url的值绑定
<a v-on:click="doSomething">...</a> click是参数
```



##### 动态参数

> 从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：

```HTML
<a v-bind:[attributename]='url'>xxx</a>  //attributeName官网文档中的大写应为小写.
```

`attributeName` 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。若Vue实例有一个data property attributename, 其值为'href', 那么这个绑定将等价于`v-bind:href`

你也可以使用动态参数为一个动态的事件名绑定处理函数

```html
<a v-on:[eventname]='functionName()'>xxxx</a>
```



##### 对动态参数的值的约束

> 动态参数预期会求出一个字符串，异常情况下值为 `null`。这个特殊的 `null` 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。



##### 对动态参数表达式的约束

> 动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的. 变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。
>
> 在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写



```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['hr' + bar]="value"> ... </a>
===============
<a v-bind:[attributetest]="value"> ... </a>

<script>
	new Vue({
		el:'#root',
		data:{
            bar:'ef'
        },
        computed:{
            attributetest(){
                return 'hr' + this.bar;
            }
        }
	})
</script>
```



##### 事件修饰符

> 修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

```HTML
<form v-on:submit.prevent='onSubmit'>XXX</form>
    

```





#### 缩写 ++

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





### 数据绑定 单向+双向

```html
//react中的受控组件 onChange

- 单向数据绑定(v-bind): 数据只能从data流向页面
- 双向数据绑定(v-model):数据不仅能从data流向页面,还可以从页面流向data.
- 备注:
	1.双向数据绑定一般都是针对/表单类/元素
    2.v-model:value='msg' 可以简写为v-model='msg',因为v-model默认收集value值.!!!!!

普通的输入框input,v-model自动拿value,可以省略value.
<div id='root'>
    单向数据绑定(v-bind):<input type='text' :value='msg' ><br/><br/>
	双向数据绑定(v-model):<input type='text' v-model:value='msg'>
    双向数据绑定(v-model):<input type='text' v-model='msg'> //简写形式   
</div>
<script>
	new Vue({
        el:"#root",
        data:{
            msg:'test'
        }
    })
</script>
```



#### 限制范围

```
//https://cn.vuejs.org/v2/api/#v-model

input
select
textarea
components
```



#### 事件修饰符

```
.lazy - 取代 input 监听 change 事件.
	//通过vue detools插件查看:失去焦点或回车之后,msg的值才会改变.在 change 事件_之后_进行同步
.number - 输入字符串转为有效的数字
.trim - 输入首尾空格过滤  

<input v-model.lazy='msg'/> //在change时而非input时更新
```



### 自定义组件如何使用v-model ++

```js
//自定义组件中使用model来定义双向绑定的值，model是个对象，它必须有prop属性和event属性，缺一不可。prop属性表示父亲的v-model=””引号中的那个东西到底是谁。props: []数组中必须“迎接一下这个值”。自定义组件中要改变值，必须使用event中定义的这个方法，如果要通知父亲改变，就$emit()这个函数即可。

//代码实现


```









### MVVM模型

<img src="https://i.loli.net/2021/01/12/TJDuSXlkyE9rbjK.png" alt="aa.png" style="zoom:80%;" />

```js
//如何理解MVVM模型? https://zhuanlan.zhihu.com/p/141473404
在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，ViewModel与两者之间的交互是双向的， 因此使得View层和Model层的同步工作完全是自动的。。开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理.


M:模型(Model):对应data中的数据
V:视图(View):模板代码
VM:视图模型(ViewModel): Vue实例对象 ****

const vm=new Vue({
    el:'#root',
    data:{
        msg:'甲乙丙丁',
        address:'天南海北'
    }
})
console.log(vm); data中的属性是放在vm这个实例对象身上的.

const vm=new Vue({
    el:'#root',
    data:{
        msg:'甲乙丙丁',
        address:'天南海北'
    }
},1000)

//观察发现：通过vm能看到data中的属性（注意不是看到data）
setTimeout(()=>{
    console.log(vm.msg);//通过vm可以读取data中的数据
    vm.msg='魑魅魍魉';   //通过vm可以修改data中的数据,修改后页面会自动更新
})


```



#### el和data的两种写法

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







### 数据代理

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





#### 复习:Object.defineProperty

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





## 0113



### 事件处理

```js
事件绑定注意事项:
0.v-on指令监听DOM事件,接收JS代码或方法名称(事件回调).//
1.事件的回调都配置在methods对象中
2.methods中的函数,都是被Vue所管理的,,this的指向是vm/组件实例对象
3.methods中配置的函数,不能使用箭头函数,this会丢失.
```



### 指令语法 写法 参数event++

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



#### 事件修饰符

> Vue.js 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

```js
.stop //阻止冒泡
.prevent //阻止默认事件
.capture //捕获. 内部元素触发的事件先在此处理,然后才交由内部元素进行处理
.self    //只当在event.target是当前元素自身时才触发处理函数
.once	 //只触发一次回调
.passive //不阻止默认事件

更多:https://www.jianshu.com/p/72c5f29c8c02
```



```html
//self的用法

//https://blog.csdn.net/wangxiaoxiaosen/article/details/73841703

 <div id="root">
        <div id="content">
            <div id="obj1" v-on:click="doc">
                obj1
                <div id="obj2" v-on:click.self="doc">
                    obj2
                    <!--只有点击obj2才可以触发其点击事件。-->
                    <div id="obj3" v-on:click="doc">
                        obj3
                        <div id="obj4" v-on:click="doc">
                            obj4

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        new Vue({
            el: '#root',
            data: {
                id: ''
            },
            methods: {
                doc() {
                    this.id = event.currentTarget.id;
                    alert(this.id)
                }
            }
        })
    </script>
```



#### 事件修饰符顺序

> 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。
>  因此，用 `v-on:click.prevent.self` 会阻止`所有的点击`，而 `v-on:click.self.prevent` 只会阻止`对元素自身的点击`
>
>  `.prevent`修饰符在前，修饰的是**元素的`v-on`事件**，所以它会阻止`所有的点击`，自身点击和事件冒泡；
>  `.prevent`修饰符在后，修饰的是**元素的`v-on`事件在被`.self`修饰后的事件**，所以它只能阻止`对元素自身的点击`，无法阻止事件冒泡。
>
> 来源:https://www.jianshu.com/p/72c5f29c8c02



#### 按键修饰符

> 在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符

```HTML
//使用有效按键名
<input @keyup.enter='submit'>
<button @keyup.arrow-left='xxx'></button>

//使用按键码
    

```



#### 系统按键修饰键

```
.ctrl
.alt
.shift
.meta


//注意事项:
请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。
```



##### .exact修饰符(+2.5.0)

> `.exact` 修饰符允许你控制由精确的系统修饰符组合触发的事件。

```HTML
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button v-on:click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button v-on:click.exact="onClick">A</button>

```





##### 鼠标按钮修饰符

> 这些修饰符会限制处理函数仅响应特定的鼠标按钮。

```
.left
.right
.middle
```





### 计算属性computed

```js
事件处理中,加不加小括号都可以
插值语法中调用事件,要加小括号
data中的数据发生变化时,会重新分析模板结构,如果用到的就会重新生成.但是方法中不知道有没有用,所以会重新生成.

0. 可读可改的数据
1.计算属性computed：要显示的数据不存在，要通过计算得来,只要是/* vc */身上有的都可以加工.
2.(fullName)函数底层用到的是对象setter和getter方法
3.执行的时机：
(1).初始显示会执行一次，得到初始值去显示。
(2).当依赖的数据发生改变时会被再次调用。
4.优势：与methods实现相比，内部有缓存机制，效率更高。
5.备注：计算属性是用于直接读取使用的，不要加().因为本质是一个属性
6. 在watch中修改源数据,会导致原数据的丢失.这种场景适合使用计算属性 **
```



```html
//
<div id="root">
    姓:<input type='text' v-model='firstName'><br /><br />
    名:<input type='text' v-model='lastName'><br /><br />
    <span>全名:{{fullName}}</span><br /><br /><br />  
    <!-- <span>全名:{{fullName}}</span><br /><br /><br /> -->
    全名:<input type='text' v-model='fullName'>
</div>
<script>
	new Vue({
        el:'#root',
        data:{
            firstName:'张',
            lastName:'三',
            fullName:''
        },
        computed:{
            //1.fullName谁在调用,Vue
            //2.fullName什么时候调用? 初次渲染,依赖的属性发生变化
            //fullName 精简写法
            fullName(){//fullName直接放在vm身上
                return this.firstName+'-'+this.lastName;
            }
            
            //fullName 完整写法
            fullName:{
            	set(value){//fullName被修改时set被调用,set中的this是vm,set会收到修改后的fullName,即value  set这里是监视回调函数
        			const arr=value.split('-');
    				this.firstName=arr[0];
    				this.lastName=arr[1];
    			},
                get(){//fullName被读取时get被调用,get中的this是vm
                    return this.firstName+'-'+this.lastName;
                }
        	}
        }
    })
</script>
```





#### 其他实现方式

```js
Object.defineProperty
//不适用框架加工,什么时候用defineProperty?要追加的属性,来自其他值的加工.
Object.defineProperty(p, 'fullName', {
    set(){},
    get(){}
})

插值语法

methods
```





### 动态数据监视

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









### 动态绑定样式

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




二.绑定style样式
:style="{fontSize:size+'px'}" //size是data中的属性

=================================================
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



### 条件渲染

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



```js
使用逻辑运算符搭配条件渲染

//复杂
v-show=" $route.path!=='/login' && $route.path!=='/search' "

//简单 在login和search路由定义中添加属性meta,值为对象
v-show=" !$route.meta.isHidden "
```







## 0115



### 列表渲染

#### 基本列表

```HTML
动态标签属性需要加冒号,指令语法不需要加冒号

v-for指令:
1.用于展示列表数据
2.语法：v-for="(item/值, index/索引) in arr" :key="item.id"
3.可遍历：数组、对象、字符串

v-for遍历数组:值,索引
<li v-for="(item, index) in arr" :key="item.id">{{item.name}}--{{item.age}}</li>
v-for遍历对象:value,key是对象的value,key
<li v-for="(value, key) in object" :key="key">{{value}}</li>   //指令语法解析标签体内容
v-for遍历字符串:值,索引
<li v-for="(data,index) in r" :key="index">{{data}} --- {{index}}</li>
```





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





#### Vue实例的生命周期

##### 图片

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





#### 过渡

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





#### 动画

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





#### 过滤器filter

```HTML
//使用库来实现数据格式化 
//moment  dsyjs
//2.0只有全局过滤器

1. 理解过滤器
 功能: 对要显示的数据进行特定格式化
 注意: 不改变原数据, 而是产生新数据
2. 编码
1).定义过滤器
Vue.filter(过滤器名字, function(value[,arg1,arg2,...]){
	// 进行一定的数据处理
	return newValue
})

//注册过滤器
Vue.filter('dataFormater', function(value, str='YYYY-MM-DD'){
	return moment(value).format(str);
})
2).使用过滤器
<div>{{myData | filterName}}</div>
<div>{{myData | filterName(arg)}}</div>

```



```html 
1.函数形参默认值

fmtDate(str='YYYY-MM-DD'){
	return moment(this.time).format(str)
}

2.多个root容器,需要引入
 2.0 引入
<h2>显示格式化后的时间</h2>
<h3>{{time | dataFormat}}</h3>
<h3>{{time | dataFormat('YYYY-MM-DD HH:mm:ss')}}</h3>    



 2.1new Value()之前注册过滤器, 放在Vue的原型上
//function函数接收两个参数,value就是接收的time的值.第二个参数使用参数默认值形式.
<script>
Vue.filter('dataFormate', function(value, str='YYYY-MM-DD')){
	return moment(value).format(str)
}
new Vue({
	el:'#root',
    data:{
        time:Date.now()
    }
})
</script>
```





#### 指令9种

```HTML
常用内置指令:

v-model 双向数据绑定
v-if   条件渲染(动态控制节点是否存在)
v-else 条件渲染(动态控制节点是否存在)
v-show 条件渲染(动态控制节点是否display)
v-for	遍历数组/对象
v-bind:xxx  强制绑定解析表达式,可简写为 :xxx
v-on:   绑定事件监听,可简写为@
v-text 更新元素的innerText
v-html 更新元素的innerHTML //'<h4>xxxxx</h4>''
   
```



## 0116



### 自定义指令

```HTML
对普通DOM元素进行底层操作
//全局指令 局部指令
指令禁止使用大写字母

//全局指令(不加s):
Vue.directive('指令名称', function(ele, binding){}) 
//ele是代表当前真实的DOM节点,binding是一个有绑定当前节点信息的对象,其中value属性是传入的'name'的值

//局部指令(加s):
<script>
	new Vue({
		el:'#root',
        data:{name:'atBeiJing'},
        directives:{
            'upper-text'(ele,binding){
            ele.innerText += binding.value.toUpperCase();
        }}
})
</script>
```



```HTML
//需求:
需求: 自定义2个指令
1. 功能类似于v-text, 但转换为全大写  v-upper-text
2. 功能类似于v-text, 但转换为全小写  v-lower-text

<div id='root'>
    <h2 v-upper-text='name'></h2>    
    <h2 v-Lower-text='name'></h2>    
</div>
<script>
	Vue.directive('upper-text', function(ele,binding){
        ele.innerText += binding.value.toUpperCase();
    })
    new Vue({
        el:'#root',
        data:{name:'atBeiJing'},
        directives:{
            'lower-text'(ele,binding){
                ele.innerText=binding.value.toLowerCase();
            }
        }
    })
</script>
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





### 模块,组件, 模块化与组件化

|      | 模块                                        | 组件                                   |
| ---- | ------------------------------------------- | -------------------------------------- |
| 理解 | 向外提供特定功能的js程序,一般就是一个js文件 | 用来实现特定界面功能效果的代码资源集合 |
| 原因 | 复杂                                        | 一个界面的功能很复杂                   |
| 作用 | 复用,简化,提高效率                          | 复用编码,简化项目编码                  |



|      | 模块化                 | 组件化                                       |
| ---- | ---------------------- | -------------------------------------------- |
| 定义 | 应用的js都以模块来编写 | 应用是以多组件方式实现. 是组件化的应用和开发 |











### 组件+

```HTML

单文件组件: 一个文件就是一个组件,且文件的后缀是.vue. 开发中使用的.
非单文件组件:所有组件都定义在一个文件中,文件的后缀不是.vue
```



#### 非单文件组件 ++

```js
//组件使用基本流程:
 1.定义组件
 2.注册组件
 	2.1 全局注册
    2.2 局部注册
 3.写组件标签
 
 
//一.定义一个Xxx组件(首字母大写)
	1.如何定义一个组件? 使用const Example=Vue.extend(options)去创建
	2.Example的本质是一个构造函数,我们以后去写<Example/>,Vue帮我们去new Example.
	3.Vue.extend(options),options是一个配置对象,这个配置对象几乎和new Vue时的那个options一样.区别如下:
      3.1 不能写el去指定容器,所有组件实例最终要被一个vm所管理,vm中会指定好el,即组件放入那个容器.//其他可写
	  3.2 data必须写成函数,返回值是对象.原因:为了确保多个Xxx组件中的数据互不干扰.//(每次调用函数,函数作用域不同.如果是对象,更改了一次,其他的调用也会更改.)
	  3.3 组件的模板结构要配置在template属性中:值为html字符串,且用模板字符串;模板结构必须只有一个根标签
    4. 所有的组件定以后,必须注册后才能使用. 注册分为全局,局部.
    
    5. 5.1 Example确实是构造函数,但不是我们亲自写的Example,是Vue.extend生成的.
       5.2 Vue.extend调用的返回值是VueComponent构造函数,所以new Example()其实就是在new VueComponent()
       5.3 所谓组件的实例就是VueComponent的实例.简称vc; 所谓Vue的实例,就是Vue创建的实例,简称vm.
       5.4 组件的data函数以及methods中配置的函数中的this都是vc
    6. 一个最重要的关系: VueComponent继承了Vue. 所以Vue.prototype上的属性和方法,vc都能看得见. ****
//二.注册组件. 
	1.全局注册      
	Vue.component('组件名', 组件)
	2.局部注册
    在vm中添加components属性
    components:{组件名:组件} //局部注册可以

//其他:
Student{} 表明是Student函数创造的实例对象

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





### Vue脚手架

```HTML
vue-cli //command line interface https://cli-vuejs.org/zh/

vue-cli是vue官方提供的脚手架工具,最新版是4. 3.x版与4.x版变化不大,但与2.x版本比较变化大.

```



### 安装及文件结构

```HTML
1.创建脚手架3/4的vue项目:
 1.1 npm install -g @uve/cli
 1.2 vue create vue-demo
 1.3 npm run serve /yarn serve

2.脚手架结构
|-- node_modules
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







## 0118



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
3. 配置文件vue.config.js  参考文档:https://cli.vuejs.org/zh/config/#lintonsave
	3.1 官网 vue-cli
	3.2 根目录下创建vue.config.js文件
	3.3 lintOnSave:false  //临时关闭语法检查
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





## 0119

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
1.store.js中: 引入-use-定义-暴露-注册, 声明4个对象
2.4个属性的值都是对象

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store=new Vuex.Store({});

export default store;

// main.js中导入并添加到配置对象中
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





## 0120 ++



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



### axios拦截器

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





### vue中组件通信方式总结 ++++

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



<hr>

### 组件间10种通信

### 组件间10种通信方式:

    0). pubsub
    1). 组件间通信最基本方式: props
    2). 组件间通信高级1: vue自定义事件与全局事件总线
    3). 组件间通信高级2: v-model
    4). 组件间通信高级3: .sync 属性修饰符
    5). 组件间通信高级4: $attrs与$listeners
    6). 组件间通信高级5: $children与$parent
    7). 组件间通信高级6: 作用域插槽slot-scope
    8). 组件间通信高级7: vuex



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







### 组件间通信最基本方式: props

    用来实现父子之间相互通信的最基本方式, 也是用得最多的方式
    父 ==> 子, 传递的是非函数类型的属性
    子 ==> 父, 传递的是函数类型的属性
    问题: 其它关系的组件使用props就会比较麻烦
    
    props子组件接收属性3种写法
    
    特殊:路由中配置props(3种) 
     路由配置props的3种形式:
     路由配置props优点:如果不使用,那么组件内要用数据必须要写成this.$route.params/query.XXX形式







### vue自定义事件与事件总线

#### Vue自定义事件

```js

vue自定义事件
    绑定vue自定义事件监听
        只能在组件标签上绑定
        事件名是任意的, 可以与原生DOM事件名相同
    只当执行$emit('自定义事件名', data)时分发自定义事件, 才会触发自定义事件监听函数调用
    $event: 就是分发自定义事件时指定的data数据
    $event可以是任意类型, 甚至可以没有

vue的自定义事件: 
    用来实现子向父组件通信, 功能相当于函数类型的props


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



```js
原生dom事件在html标签和组件标签上的区别   （Event1组件测试）
		在html标签上添加就是原生的dom事件
		在组件标签上添加都是自定义事件，想成为原生的事件得添加修饰符.native,就是把原生dom事件添加到组件根元素上,并形成事件委派, 根元素:template下的最外层元素.)

vue自定义的事件在html标签和组件标签上的区别 （Event2组件测试）
	在html标签上添加自定义事件无意义，没有响应. 所以自定义事件是给组件标签添加的(参数自定义,不传参数event打印结果为undefined)	
	组件上事件名可以任意，也可以和原生的dom事件名相同，但是在组件标签身上即使添加原生dome事件也是自定义的

```





#### Vue全局事件总线

```js
//
全局事件总线:
    理解:
        Vue原型对象上有3个事件处理的方法: $on() / $emit() / $off()
        组件对象的原型对象是vm对象: 组件对象可以直接访问Vue原型对象上的方法
        实现任意组件间通信
    编码实现:
        将入口js中的vm作为全局事件总线对象: 
            beforeCreate() {
                Vue.prototype.$bus = this
            }
        分发事件/传递数据的组件: this.$bus.$emit('eventName', data)
        处理事件/接收数据的组件: this.$bus.$on('eventName', (data) => {})

//理解
所有场合都可使用. 

全局事件总线的角色标准
本质是一个对象
1、所有的组件对象都可以看到它
2、可以使用$on和$emit方法

怎么添加事件总线
1、安装总线
2、在接收数据的组件对象当中  获取总线给总线绑定自定义事件   this.$bus.$on
3、在发送数据的组件对象当中  获取总线触发总线身上绑定的自定义事件   this.$bus.$emit
```









### 组件间通信高级2: v-model

```js
//1.本质:
原生input上的v-model的本质:  动态的value属性(单向数据绑定v-bind)与原生input事件监听

组件标签上的v-model的本质: 是单向数据绑定v-bind与自定义input事件监听的组合
<input type='text' v-model='name2'>
<input type="text" :value="name2" @input="name2=$event.target.value">

//2.在组件身上使用
父组件: 
<CustomInput :value="name4" @input="name4=$event"/>
子组件: 
props: ['value']
<input type="text" :value="value" @input="$emit('input', $event.target.value)">

        
        
        
//使用场景
v-model不仅能实现原生标签与其父组件间数据双向通信(同步)也能实现父子组件间数据双向通信(同步)
一般用于封装带表单项的复用性组件
elment-ui中: Input/CheckBox/Radio/Select等表单项组件都封装了v-model
```













### 组件间通信高级3: .sync 属性修饰符

```js
//本质: 
绑定一个自定义事件监听, 用来接收子组件分发事件携带的最新数据来更新父组件的数据

//案例:
1.不使用.sync修饰符
 子组件中:
<button @click="$emit('update:money', money-100)">花钱</button>
 父组件中:
<Child :money="total" @update:money="total=$event"/> //父组件更新了money属性
    
2.使用sync修饰符
<button @click="$emit('update:money', money-100)">花钱</button>
<Child :money.sync="total"/>



//使用场景:
实现父子组件间数据双向同步,常用于封装可复用组件(需要更新父组件数据)

//v-model与sync的区别:
v-model一般用于带表单项的组件
sync一般用于不带表单项标签的组件
 element-ui中: Dialog就利用sync来实现组件的隐藏
```













### 组件间通信高级4: $attrs与$listeners

```js
//本质: 
父组件中给子组件传递的所有属性组成的对象及自定义事件方法组成的对象

//传递方式: $attrs, $listeners
$attrs
父组件传递给子组件的属性,除了props已经声明接收的属性及父组件的style,class属性.
 ~如果已经在props中声明接收,$attrs中看不到;props没有接收则可以获取
 
$listeners
组件标签绑定的所有自定义事件监听的对象

//绑定方式:
可以通过v-bind 一次性把父组件传递过来的属性添加给子组件
可以通过v-on   一次性把父组件传递过来的事件监听添加给子组件

v-bind: 的特别使用: <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
v-on: 的特别使用: <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
一般: v-bind与$attrs配合使用, v-on与$listeners配合使用
    
    
//案例: 对<el-button>组件二次封装成HintButton组件
1.从父组件中接收不定数量/名称的属性或事件监听
2.在组件内部, 绑定给它的子组件:组件HintButton中的子组件<el-button>
 2.1绑定方式: 通过v-bind="$attts",v-on="$listeners"分别绑定所有属性和事件
    例如: <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    element-ui中: Input就使用了v-bind与$attrs来接收不定的属性传递给input
    
    
扩展
双击监听:
<el-button type="primary" @dblclick="test">点击</el-button> //组件内部没有绑定自定义事件的触发
@dblclick="add2"
绑定是自定义事件监听, 而el-button内部并没处理(没有绑定对应的原生监听, 没有分发自定义事件)
双击时, 不会有响应

@dblclick.native="add2"
绑定的是原生的DOM事件监听, 最终是给组件的根标签<a>绑定的原生监听
当双击a内部的<button>能响应, 因为事件有冒泡
```



```js
//子组件使用父组件传递过来的属性和事件, 绑定到el-button组件上
<template>
  <a href="javascript:;" :title="title">
      <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </a>
</template>
```











### 组件间通信高级5: $children与$parent属性

```js

$children: 所有直接子组件对象的数组, 利用它可以更新多个子组件的数据
$parent: 父组件对象, 从而可以更新父组件的数据
$refs: 包含所有有ref属性的标签对象或组件对象的容器对象

父组件当中可以通过$children找到所有的子组件数组去操作子组件的数据（当然可以找孙子组件）
子组件当中可以通过$parent找到父组件（当然可以继续找爷爷组件）操作父组件的数据

//使用场景
能方便的得到子组件/后代组件/父组件/祖辈组件对象, 从而更新其data或调用其方法
官方建议不要大量使用, 优先使用props和event
在一些UI组件库定义高复用组件时会使用$children和$parent, 如Carousel组件

//案例
1.给子组件标签添加ref属性,调用其属性/方法
<Son ref="son"/>
this.$refs.son.xxx
2.调用多个子组件属性/方法
this.$children.forEach(item=>item.money-=money);
3.子组件中调用父组件属性/方法
this.$parent.money += money;
4.使用混入mixin代替

    
=============混合mixin=============    
扩展:混入mixin(导出的是对象)
问题: 多个组件有部分相同的js代码 ?
如何实现vue组件中js代码的复用呢?  利用vue的mixin技术实现
什么时候使用: 当多个组件的JS配置部分有一些相同重复的代码时
本质: 实现Vue组件的JS代码复用, 简化编码的一种技术
例如:
export default {
    methods:{
        //重复的methods代码
    }
}

// https://cn.vuejs.org/v2/guide/mixins.html#%E5%9F%BA%E7%A1%80    

```









### 组件间通信高级6: 作用域插槽slot-scope

```js
命名插槽中的内容可被认作是默认值, 可以显示可以被覆盖

//作用域插槽
1.数据在父组件中
2.数据最终传递给了子组件进行vfor展示
3.子组件在展示过程中,数据的结构由父组件决定.

父组件要把需要子组件展示的数据传递给子组件
子组件在展示的过程当中，需要改变结构的数据传回给父组件
父组件再把结果和数据一并传回给子组件


//通信内容
父组件需要向子组件传递标签结构内容
但决定父组件传递怎样标签结构的数据在子组件中

//案例
子组件:
<slot :row="item" :$index="index">  <!-- slot的属性会自动传递给父组件,传递的是一个对象 --></slot>
父组件:
<template slot-scope="{row, $index}">
    <span>{{$index+1}}</span> &nbsp;&nbsp;
<span :style="{color: $index%2===1 ? 'blue' : 'green'}" >{{row.text}}</span>
</template>

//使用场景
对于封装列表之类的组件特别需要
element-ui中: Table组件中就用到了slot-scope
```







### 组件间通信高级7: vuex

    vuex用来统一管理多个组件共享的状态数据
    任意要进行通信的2个组件利用vuex就可以实现
        A组件触发action或mutation调用, 将数据保存到vuex的状态中
        B组件读取vuex中的state或getters数据, 得到最新保存的数据进行显示



























