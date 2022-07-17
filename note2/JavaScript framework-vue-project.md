## 前台项目

### 项目创建

#### 脚手架创建项目



#### 认识项目目录及各个项目作用



#### main.js基本编码



### 项目配置

#### assets和public文件夹区别

```
assets存放组件共用资源,后期会被webpack处理, 而public不会.
public代表根路径,后期打包的dist文件夹
```



#### eslint禁用

默认项目中安装了eslint语法检查工具,严格级别高. 开发阶段需要禁用eslint.否则语法上问题,导致项目经常操作

如何禁用?

* 创建脚手架webpack配置文件  `vue.config.js`
* 项目重启

```js
vue.config.js中配置lintOnSave:false
module.exports = {
	lintOnSave: false, //禁用eslint
}
```



#### `@`代替具体路径

#### 作用

别名的作用,代表的是我们`src`文件夹的路径

#### 配置

##### 1.更改路径

一般是将src文件夹改成缩写

```javascript
//原写法
import App from 'src/App.vue'
```



```javascript
//新写法
import App from '@/App.vue'   //此时输入@符后,是没有自动提示的
```



##### 2.配置@的提示

根目录创建`jsconfig.json`文件,并配置别名@提示	

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
        "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```



#### 其他

想看webpack相应版本的文档

如何查看vue-cli脚手架创建的项目搭配的webpack版本?

> 扩展 search node_modules
>
> 搜索webpack 查看关键字version
>
> 现在版本是5.72.1

通过查询[解析(Resolve) | webpack 中文文档 (docschina.org)](https://webpack.docschina.org/configuration/resolve/#resolvealias)来具体配置

##### resolve.alias

创建 `import` 或 `require` 的别名，来确保模块引入变得更简单。例如，一些位于 `src/` 文件夹下的常用模块：



#### jsconfig.json配置文件

> [VScode的jsconfig.json配置文件说明 - 掘金 (juejin.cn)](https://juejin.cn/post/7079769333471117343)
>
> [jsconfig.json Reference (visualstudio.com)](https://code.visualstudio.com/docs/languages/jsconfig)  vscode下的配置文件

##### 是什么

* `jsconfig.json`表明其所在目录为JS项目的根目录
* `jsconfig.json`文件指定根目录文件及通过JS语言服务提供的特别选项



##### 原因

* 显式的项目. 

> A JavaScript project is defined via a `jsconfig.json` file. The presence of such a file in a directory indicates that the directory is the root of a JavaScript project. The file itself can optionally list the files belonging to the project, the files to be excluded from the project, as well as compiler options (see below).



##### 实例

Using the "exclude" property

> The `exclude` attribute (a glob pattern) tells the language service what files are not part of your source code. This keeps performance at a high level. If IntelliSense is slow, add folders to your `exclude` list (VS Code will prompt you to do this if it detects the slow down).

```json
//vscode文档实例

{
  "compilerOptions": {
    "module" : "commonjs",
    "target": "es6"
  },
  "exclude": ["node_modules"]
}

//vue-cli脚手架生成实例
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ],
  }
}
```



Using the "include" property

> If no `include` attribute is present, then this defaults to including all files in the containing directory and subdirectories. 
>
> When a `include` attribute is specified, only those files are included.
>
> Tips: The file paths in `exclude` and `include` are relative to the location of `jsconfig.json`.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6"
  },
  "include": ["src/**/*"]
}
```



##### 使用webpack 别名

For IntelliSense to work with webpack aliases, you need to specify the `paths` keys with a glob pattern.

For example, for alias 'ClientApp':

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "ClientApp/*": ["./ClientApp/*"]
    }
  }
}
```

and then to use the alias

```
import Something from 'ClientApp/foo';
```



##### 最佳实践

> **Tip:** If you do not have a `jsconfig.json` in your workspace, VS Code will by default exclude the `node_modules` folder.



下面是一个将常见项目组件映射到其安装文件夹的表，建议将其排除在外：

| 组件                        | 要排除的文件夹             |
| --------------------------- | -------------------------- |
| node                        | 排除node_modules文件夹     |
| webpack, webpack-dev-server | 排除内容文件夹，例如dist。 |
| bower                       | 排除bower_components文件夹 |
| ember                       | 排除tmp和temp文件夹        |
| jspm                        | 排除jspm_packages文件夹    |





### git基本操作

#### git介绍

```
git基本操作
		先有本地代码
			创建本地库
			创建远程库
			关联本地和远程
			修改本地
			修改远程

		先有远程代码
			直接克隆



	git分支扩展
		分支创建和合并
			本地创建分支   git checkout -b dev
			本地推送新分支自动在远程库建立新分支  git push origin dev
			合并分支之前如果是多人协作先拉取一下远程master，以防止别人已经做了更改
			本地切换到master 然后再合并分支  git merge dev 
			合并之后再次推送到远程master
		分支删除
			项目开发完成可以删除分支		  
			git push origin --delete dev  删除远程分支
			git branch -d dev  删除本地分支 
```



```bash
//项目操作
git init // 创建本地库
xxx      // 创建远程库
git remote add origin xxx.git //本地库关联远程库   origin是远程库的别名
git add .                     //放到暂存区
git commit -m "update"        //提交到仓库区  单引号在git中会被视作提交信息的一部分
git push origin master        //推送到origin地址中的master分支上
```



#### 工程化下的git提交规范

> [代码规范 | 带你入门前端工程 (gitee.io)](https://woai3c.gitee.io/introduction-to-front-end-engineering/02.html#git-规范)





### 页面

```js
1.
//页面结构:上中下
//切换页面无刷新:请求是ajax,这个是单页面应用,中间的部分是我们的路由组件切换  ++

2.文件结构
components下新建文件夹 组件的name/index.vue

3.组件3步

4.路由组件和一般组件的区别?
相同:使用都是3大步:定义-注册-使用;
不同:存储文件夹不同;
	注册的文件夹不同(非路由注册在要使用的组件中,路由组件在路由配置中注册);
	使用(非路由使用组件标签, 路由组件使用声明式(router-link,view)+编程式导航(push replace)来使用);
	生命周期不一样(路由组件在切换时会销毁重建(keep-alive),非路由组件不会)


5.路由组件步骤
 this.$router(路由器对象) this.$route(路由对象)

6.<style lang="less" scoped>  lang表示以什么语言来解析
前提是安装了less, less-loader模块
按钮点击需要编程式路由导航
重定向路由

7.如何撤销git add操作
git reset HEAD 整体回到上一次操作

8.官方插件和第三方插件 区别: Vue.use(官方插件),第三方直接导入引用

9.router中 路由对象的meta对象配置

访问哪个页面 vc中的$route中就会有响应页面的配置信息


10.路由路径的3种写法
1.

```





### 面试题

```js

1: 描述: 编程式路由跳转到当前路由(参数不变), 多次执行会抛出NavigationDuplicated的警告错误
声明式路由跳转内部已经处理

原因：vue-router3.1.0之后, 引入了promise的语法.如果没有通过参数指定成功或者失败回调函数就返回一个promise且内部会判断如果要跳转的路径和参数都没有变化,会抛出一个失败的promise

解决: 
1：在跳转时指定成功或失败的回调函数, 或者catch处理错误
2: 修改Vue原型上的push和replace方法 (优秀)


5)面试问题3: 指定params参数时可不可以用path和params配置的组合?（对象写法）
不可以用path和params配置的组合, 
只能用name和params配置的组合,query配置可以与path或name进行组合使用


4)面试问题2: 如何指定params参数可传可不传  
    path: '/search/:keyword?'  //?代表params参数可传可不传

6)面试问题4: 如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题
前提是路由params参数要可传可不传
解决1: 不指定params
解决2: 指定params参数值为undefined  使用params:this.keyword||undefined **


7)面试问题5: 路由组件能不能传递props数据?
    可以: 可以将query或且params参数映射/转换成props传递给路由组件对象
实现: props: (route)=>({keyword1:route.params.keyword, keyword2: route.query.keyword })
```



```js
//练习 重写router中的push,replace方法

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '.@/pages/home';

const originPush=VueRouter.prototype.push;

VueRouter.prototype.push=function(location, onResolve, onRejected){
    if(onResolve===undefined && onRejected===undefined){
        return originPush.call(this, location).catch(()=>{})
    }else{
        return originPush.call(this,location,onResolve, onRejected)
    }
}



Vue.use(VueRouter);

const router=new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        }
    ]
})
```







### 路径改变切换路由组件的过程

```js
//第一步: 用户改变路径


//第二步: 匹配路由组件
当用户改变路径,这个路径就会到路由器中的路由数组内部与路由对象的路径进行匹配. 匹配到就显示对应路由组件.

//第三步: 切换显示刚匹配成功的路由组件
显示组件的同时会把刚匹配的路由对象, 也放在这个组件的$route中.  ** 都能在里面找到设置的信息.
```









```js
//axios复习

//axios.create()方法 https://github.com/axios/axios#axioscreateconfig

axios.create([config])
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


// nprogress包

```





### vuex中使用modules模块

```js
//modules代表模块化 将不同组件的数据放在不同的模块中

1.组件之间的解构

2.总vuex模块结构,其他vuex模块结构/写法



3.导入与使用
const store=new Vuex.Store({
    state,
    actions,
    mutations,
    modules:{
        home,
        user
    }
})

4.总store模块中state写法







// store合并 小的store(每个模块对应的小的store)

合并注意事项: 除了state,其他三项(getters,mutations,actions)和原来形式一样.
合并前后区别:如果没有模块化,那么home和user组件中的4个数据都在总的store的state内部存储
如果一旦模块化,那么home和user中的state,可以合并到总的store内部. 形式是:

const state={
    user:(a,b),
    home:(c,d)
}


```



### 接口函数验证的2种方式

```js
//main.js
import '@/api'
//api/index.js
reqCategoryList();

//main.js
import {reqCategoryList} from '@/api';
reqCategoryList();
```





### vuex中拿数据和方法的区别

```js
//从vuex当中把数据捞到vue组件当中使用
  //以后只要从vuex拿的是数据(state和getters当中的东西)，都在computed当中拿， 
  //以后只要从vuex拿的是方法(mutations和actions当中的东西)，都在methods当中去拿，一般用的很少

```



### 映射方法的简写形式

```js
//函数内部可以是数组也可以是对象
//是数组必须要满足条件：
//1、数据直接就是总的state当中的数据，不能是模块里面的
//2、数组当中的名字必须和state当中的名字一致
// ...mapState(['categoryList'])
```



### ajax中的小点

```js
//错误回调中弹出错误
(error)=>{
    NProgress.done();
    alert('请求失败'+error.message||'未知错误'); //<-- here 
    return new Promise(()=>{})
}
```



### axios拦截器

```js
import axios from 'axios';
import NProgress from 'nprogress/nprogress';
import 'nprogress/nprogress.css';

const service=axios.create({
    baseURL:'/api',
    timeout:20000
})

service.interceptors.request.use(
	(config)=>{
        NProgress.start();
        return config;
    },
    //()=>{}
);

service.interceptors.response.use(
	(response)=>{
        NProgress.done();
        return response.data;
    },
    (error)=>{
        NProgress.done();
        return new Promise(()=>{})
    }
)
```





### 流程

```
axios的二次封装
 配置基础路径, 
 添加进度条信息(nprogress), 
 请求拦截器和响应拦截器
  修改响应为可直接获取的数据, 
  统一处理请求错误和响应失败
接口请求参数(里面都是函数)

vuex传递数据
 4个核心概念
 模块化
 对应组件的vuex模块
 
组件中发送请求+获取数据
 组件挂载完成发请求
 使用计算属性获取store>state中的数据
 
 
 
```



```js
复习默写的: 不重要

// api/index.js

import request from './ajax.js';

const reqCategoryList=()=>{
    return request({
        url:'',
        method:'get'
    })
}
export reqCategoryList

// store/home.js actions
import reqCategoryList from '@/api'

async getCategoryList({commit}){
    const result=await reqCategoryList();
    if(result.code === 200){
        commit('RECEIVE_CATEGORYLIST', result.data)
    }
}


```





### 动态绑定样式

```js
//动态样式代替css中的hover, 样式类名不确定用不用,所以使用对象写法
//这种思想很重要,需要多次回顾

<div 
	class="item" 
	v-for="(c1, index) in categoryList"
	:key="c1.categoryId"
	:class="{item_on= currentIndex===index }"  //绑定动态样式,类名不确定要用对象形式
	@mouseenter="currentIndex=index"		   // 绑定移入事件,赋值
/>
        
//为什么不能直接使用布尔值,例如currentIndex赋值为false,鼠标移入时变为false. 循环后所有的都统一为true/false了.
```



### 防抖和节流

```js
/*
1.英文词汇翻译成中文
2.一句话描述该技术的用途
3.描述该技术的核心概念或运作流程
4.口述该技术的代码书写思路
5.该技术的优点
6.该技术的缺点
7.如何弥补缺点
*/


https://juejin.cn/post/6844903773010133005
https://juejin.cn/post/6844903669389885453#heading-5
https://juejin.cn/post/6844903662519599111#heading-9
https://juejin.cn/post/6844903651278848014
https://segmentfault.com/a/1190000018445196


1.出现的原因:
1.1 肉眼只能分辨一定频率的变化.1000次/秒=60次/秒. 同理,一定时间内js代码频率不用太高.
1.2 客户端性能问题. js执行频率过高导致的卡顿.
 1.2.1 浏览器的resize,scroll,鼠标的mousemove,mouseover, input输入框的keyup等事件被高频率触发,不断调用绑定在事件身上的回调函数,极大浪费计算机资源和导致不好的前端浏览体验.

2.定义:
函数防抖(debounce)
定义:在事件被触发的n秒后再执行回调(规定在一个单位时间内,只能触发一次函数),如果在这n秒内又被触发,则重新计时.(只有足够的空闲时间,才执行代码一次.多次变为1次)

函数节流(throttle)
定义:规定在一个单位时间内,只能触发一次函数.如果这个单位时间内触发多次函数,只有一次生效.(一定时间内只跑一次)

3.应用场景:
3.1函数防抖的应用场景:
连续的事件,只需触发一次的回调的场景有:
* 搜索框搜索输入.只需要用户最后一次输入完,再发请求
* 手机号,邮箱验证码输入监测
* 窗口大小Resize. 只需要窗口调整完成后,计算窗口大小.防止重复渲染

3.2函数节流的应用场景:
间隔一段时间执行一次回调的场景有:
* 滚动加载,加载更多或滚动到底部监听
* 谷歌搜索框,搜索联想功能
* 高频点击提交,表单重复提交.
```



### 节流函数书写形式?

```js
使用lodash模块中的throttle函数

原方法名称:throttle(
	function(){},
    20, {'trailing':false} //trailing  是否在时间间隔之后执行函数.
    使用的原因:二三级不消失,重新看视频.
)
```





### 页面跳转实现的3种方式及选择

```js
// 
声明式路由导航
编程式路由导航
事件委托(依托事件冒泡)

//事件委托 
设置自定义属性 :data-category1Id='c1.categoryId'
获取自定义属性: let{category1id}=event.target.dataset; //属性转换时大写会替换成小写



```



### 自定义属性(data-)

```js
//为html标签添加自定义属性,结构是data-xxx="..."
标签的data-开头的属性，叫做自定义属性,通过它我们可以给标签添加上自定义的属性.
获取:通过事件属性 event.target.dataset来获取这个属性.

注意:Vue会把其中的大写变为小写.

```





### 事件委托

```js

```







### mock数据

```js
作用:生成随机数据,拦截ajax请求
mockjs.com

1.新建文件夹 src/mock 准备数据新建文件xxx.json
2.安装mock模块 yarn add mockjs
3.模拟接口 src/mock/mockServer.js
Mock.mock('/mock/banner',{code:200,data:banner}) 
//第一个参数，代表我们以后请求的路径，第二个参数代表返回的数据

4.在main.js中引入 import '@/mock/mockServer'
5.ajax文件中,新建mockAjax.js文件, 基础路径改为/mock
```





### 轮播图

```js
//swiper用法参考官网

1.安装模块   安装的swiper@5.  yarn add swiper@5
2.原始js,css //可以查看页面结构是否正常,正常代表css没问题.
3.书写swiper结构
4.实例化swiper实例对象(出现轮播效果)

注意:
1.swiper必须在页面的数据结构显示完成创建才会生效
2.组件中引入swiper的js模块,main中引入css样式,(通过search node_modules查询路径)
3.





解决方案: watch+nextTick
```



### nextTick和updated

```js
updated 只要页面有数据更新就会执行

nextTick 页面最近一次更新完成后才执行
```







### actions中的commit占位

```js
actions={
    dispatchName({commit}, value){
        ...
    }
}
```



### dispatch的位置统一放到methods

```js
//方便管理
mounted(){
    this.getInfo();
    this.getInfo2();
},
methods:{
    getInfo(){
        this.$store.dispatch('dispatchName')
    },
    getInfo2(){
        this.$store.dispatch('dispatchName');
    }
}
```





### dispatch里的多个参数需要组成一个对象+actions

```js
//dispatch方法只能传递两个参数,一个字符串一个值.如果有多个值,需要组成对象形式

//dispatch 如果传递多个参数，那么多个参数必须构成一个对象去传递,也就是说 dispatch只能传递一个参数

this.$store.dispatch('ggg',{a:xx,b:yy})
```



### 在项目中,相同的函数要封装,相同的功能尽量组件化

```
xx
```



### 解构赋值形式拿数据,可以多加,没有则为undefined

```
let {
        category1Id,
        category2Id,
        category3Id,
        categoryName,
      } = this.$route.query;
```









### Object .keys

```js
//遍历对象的方法是使用forEach, 是把对象属性转换为数组然后进行遍历

//Object.keys(object)是把一个对象转换为数组,这个数组当中存储的是这个对象所有的属性

```



### v-for可以遍历数字

```js
//
```





### 阿里图标库使用

```js
使用链接形式

//引入
<link rel="stylesheet" href="https://at.alicdn.com/t/font_xxxx.css">
    
//页面中使用
<i class='iconfont' :class="theiconfontName"></i>  //通过表达式来求true/false
<i class='iconfont theiconfontName' ></i>
```



### 循环4种 for

```js
for
for..in 主要用来遍历对象的可枚举属性.效率最低,不仅遍历自身,还遍历原型上的.
for..of 遍历前提是可迭代的,对象不可迭代
forEach 遍历对象最快的方法,但需要配合Object.keys将对象属性转换为数组
```



### v-for与v-if配合使用

```js
可以配合使用
v-for优先级高于v-if

<button :class="{active:currentPageNo === page}" v-for="page in startEnd.end" :key="page" v-if="page>=startEnd.start" @click="$emit('changePageNo', page)">{{page}}</button>
```





### css钩子|钩子标签

```js
b u i. 这些标签准备抛弃
可以代替css提供样式,而不单单是原始的解构标签作用.
可以放iconfont图标字体等
只要用就是放小图标的.
```



### total是undefined

```js
根据searchInfo传来的数据,是请求回来的数据.
当searchInfo还没回来的时候, 就是空对象,所以传递过去就是undefined.

所以props中的total接收数据的时候,需要规定默认值 

props:{
    total:{
        type:Number,
        default:0
    }
}
```



### 分页器实现+++

```js

```



### 路由模块化routes.js

```js
//store文件夹下新建一个routes.js 将原文件中的routes:[]移动到新文件中,使用export default[]形式导出

export default [
    {},
    {}
]
```



### store中的 || 使用

```
逻辑运算符或的使用

数据没有回来, getters(mutations)中的值是undefined
数据回来了, 其中的数据才会为正确的格式+内容

一般在数据之后使用 ||{}, ||[]的形式来防止传递的undefined.

但是注意: 如果使用vfor遍历了undefined的数据, vfor遍历任何东西都不会报错. 
```





### 解决props传递过来数据为空数组出现的>假报错

```js
假报错.先报错数据回来后又重新生成了,但是错误还在.
出现在传递过来一个数组,且数组中的项时对象.  要避免数据为空,产生的undefined问题.
undefined
//子组件: 设置data初始值

解决方法:
1.data中初始值搭配computed和或运算符
```



### methods中dispatch参数+生命钩子

```js
//简化methods中dispatch方法参数过多的问题
methods:{
    getDetailInfo(){
        this.$store.dispatch('getDetailInfo', this.$route.params.goodsId)
    }
}


```



### 将数据初始化存储在data中的思想

```js
//处理初始化参数的形式(也可以用computed)
//使用了钩子beforeMount获取数据 !!
改成data初始化数据+beforeMount的形式, 简化参数的使用形式
data(){
    return{
        skuId:''
    }
},
beforeMount(){
    this.skuId=this.$route.params.goodsId;
}

methods:{
    getDetailInfo(){
        this.$store.dispatch('getDetailInfo', this.skuId);
    }
}
```







### 初始化vuex中的state数据

```js
//页面刷新后,vuex中的state数据就会重新初始化,
所以引入了缓存 localStorage sessionStorage



// state是vuex存储数据的地方，但是这个state并不是永久存储
// 当我们刷新页面或者重新启动项目（可以认为刷新页面就是重启了一下项目）
// 那么vuex当中所有的数据，都要重新初始化，重新发请求去获取
// state里面的数据一开始就是有的，只不过是我们初始化的，不是请求回来的
// 但是state这个初始化的数据，也会影响组件（组件也是可以获取这个初始化数据）

// 就是因为vue和vuex没办法去永久存储数据，才有以下两个存储方案
// localStorage
// sessionStorage
```



### 排它思想

```js
//步骤
1.所有成员变为同一状态
2.点击的当前成员变为另一种状态

这个地方设计的很聪明,感觉比以前要省力许多.
如何将所有成员变为同一状态? 请求回来的数据时个数组,每一个成员时数组里的一个值. 使用forEach配合每个索引值里的isChecked, 统一变为一个值

如何将点击的当前成员改成另一种状态呢? 循环配置的时候,单个的spuSaleAttrValue就是每一个销售属性本身, 自带isChecked.
```





### input输入框的blue与change事件+++

```js
输入框的blur事件，是失去焦点事件，只要添加了它，失去焦点就会触发这个事件.但是不好，因为它不会去判断这次输入的数据和之前的数据是不是一样再触发

输入框的change事件内部包含了失去焦点事件，当用户失去焦点的时候，也会选择性触发change事件
触发这个事件的前提是当前这个数据，必须和之前的数据不一样，才能触发。否则不触发

    
    
@change="$event.target.value>=1?skuNum=$event.target.value:skuNum=1"

1.$event.target.value拿到的是字符串
2.上面字符串与数组进行比较时,隐式类型转换
3.使用大于等于判断,可以将乱码全部等于1. 省了判断
很厉害啊.这么想

加的 @click="skuNum++"
减的 @click="skuNum>1?skuNum--:skuNum=1"
减的 @click="skuNum=skuNum--<=1?1:skuNum"

@click="cartInfo.skuNum--<=1?cartInfo.skuNum=1:cartInfo.skuNum=cartInfo.skuNum--"
cartInfo.skuNum<=1?1:cartInfo.skuNum--
```



### 添加购物车的逻辑++++

```js
//1.先发请求添加购物车,到后台数据库
//2.根据请求返回信息决定是否跳转到添加购物车页面

只能通过dispatch的返回值来判断请求是成功的还是失败的

另一套做法
```





### async函数(异步函数) ++++

```js
//async 函数称作异步函数，一般内部都是有异步操作的
// async 函数返回值，一定是promise对象，不看return 
// 返回的promise对象的成功和失败及结果，要看return
// return的结果如果是非promise对象 那么promise一定是成功的，成功的结果就是return的结果
// return的结果如果是promise对象，那么要看这个return后面的promise对象是成功的还是失败的
//如果return的promise对象是成功的，那么promise对象就是成功的，成功的结果就是return的promise的成功结果
//如果return的promise对象是失败的，那么promise对象就是失败的，失败的原因就是return的promise的失败原因

// 如果没有return结果而是抛出错误，promise也是失败的，原因就是抛出的错误原因
```



```js
//第一种写法   action的异步函数，返回的promise永远是成功的，要看action异步函数的return
      // const result = await this.$store.dispatch('addOrUpdateShopCart',{skuId:this.skuId,skuNum:this.skuNum})
      // if(result === 'ok'){
      //   //代表请求成功
      // }else{
      //   //代表请求失败
      // }
      //第二种写法   action的异步函数，返回的promise可能成功也可能失败，成功就代表请求成功，返回结果ok 
      //失败就拿到return的失败的promise的原因
      try {
        //请求成功了
        await this.$store.dispatch('addOrUpdateShopCart',{skuId:this.skuId,skuNum:this.skuNum})
        //第二步：根据请求添加购物车返回信息决定是否跳转到添加购物车成功页面
        //请求成功跳转到添加购物车成功页面
        // 往添加购物车成功页面跳转的时候，需要带两个东西。skuNum和商品详情信息
        //skuNum是一个简单数据，我们直接通过路由传参query参数带过去
        // 商品详情信息是一个复杂的数据，我们最好你不要通过路由传参传递对象，因此我们采用存储方案，sessionStorage
        alert('添加购物车成功，准备去往成功页面')
        //localStorage(真正的永久存储)   sessionStorage（关闭浏览器数据就不再了）
        sessionStorage.setItem('SKUINFO_KEY',JSON.stringify(this.skuInfo))
        this.$router.push('/addcartsuccess?skuNum='+this.skuNum)
      } catch (error) {
        alert(error.message)
      }


async和await一般是搭配try catch使用
```





### 路径传参



### sessionStorage和localStorage在vue中使用

```js
向购物车跳转的时候,需要带两个东西.skuNum和商品详情信息.
商品详情信息时一个复杂的数据,最好不要通过路由传参传递对象. 因为采用存储方案. 使用sessionStorage


```



### 什么时候取存储在storage中的数据

```js
beforeMount

```











### 用户临时标识解决返回的data是空的问题

```js
// 新建utils工具类函数文件夹 src/utils/userabout.js 搭配uuid生成唯一数据标识

import {v4 as uuidv4} from 'uuid';
export function getUserTempId(){
    //1.先从localStorage中获取用户的临时标识. localStorage中获取不到会返回null
    let userTempId = localStorage.getItem('USERTEMPID_KEY');
    //2.如果获取到了,返回
    //3.如果没获取到,再通过uuid重新创建,并存储到localStorage
    if(!userTempId){
        userTempId = uuidv4();
        localStorage.setItem('USERTEMPID_KEY', userTempId);
    }
    return userTempId;
}

//vuex中的user模块, state中初始化userTempId.

const state={
    userTempId: getUserTempId();
}

//api/ajax.js中在请求拦截器中添加userTmepId信息
import stor from '@/store';

service.interceptors.request.use(
	(config)=>{
        NProgress.start();
        let userTempId = store.state.user.userTempId;
        //
        if(userTempID){
            config.headers.userTempId = userTempId;
        }
        return config;
    }
)
```



### v-model与多选框 布尔值|表单输入绑定

```js
//input输入框的Checked属性

单个复选框 绑定到布尔值
<input type="checkbox" v-model="checked">  //v-model的值是checked属性的值,也是布尔值.


多个复选框 绑定到数组 //过个复选框的v-model相同, value不同.
```



### 结算页面中购物车点击更改数量的逻辑

```js
//点击->发请求->更改数据库->重新发送请求拿数据

//更改多选框的逻辑是一样的. 更改后->发请求更改后台数据->发请求拿数据



判断逻辑重要:

changeSkuNum(disNum, flag, cart){
    const originNum = cart.skuNum;
    if(flag){
        // flag为true, 证明是点击(+, -)进来的. disNum的值是(1, -1). 
        // 变化的值是(1, -1). 最小的值只能为1, 小于零的情况也只有一种:disNum为-1, originNum为1. 其他情况下传进来的参数disNum的值就是变化的量.
        if(disNum + originNum <1){
            disNum = 1 - originNum;
        }
    }else{
        if(disNum < 1){
            disNum = 1 - originNum;
        }else{
            disNum = disNum - originNum;
        }
    }

}
```



### 输入框可读可写使用完整计算属性(set+get)

```js
单个复选框使用click事件

总复选框使用计算属性
```





### input多选框使用单次更改接口实现全选全不选

```js
// 2种方案: 1.使用可以全改的接口; 2.使用单词更改的接口来实现

使用v-modle="isCheckAll"

isAllChecked:{
          get(){
            return this.cartInfoList.every(item => item.isChecked)
          },
          async set(value){
            // 点击输入框. 获得的是全选/全不选的布尔值  使用的v-model获取
            try {
              await this.$store.dispatch('updateCartIsCheckAll', value?1:0);
              alert('更改成功')
              this.getShopCartInfo();     
            } catch (error) {
              alert(error.message);
            }   
          }
      },
```



### 使用every判断

```js

isAllChecked:{
          get(){
            return this.cartInfoList.every(item => item.isChecked)
          },
          async set(value){
            // 点击输入框. 获得的是全选/全不选的布尔值  使用的v-model获取
            try {
              await this.$store.dispatch('updateCartIsCheckAll', value?1:0);
              alert('更改成功')
              this.getShopCartInfo();     
            } catch (error) {
              alert(error.message);
            }   
          }
      },
```





### dispatch/commit/getters可以在actions中使用

```js
//都是store身上的属性/方法
//可以通过解构赋值形式拿到.

req({commit, dispatch, getters}, 形参){
    ....
}

store对象之间,可以使用dispatch传递数据. 在actions中可以使用dispatch
```







### promise和async+await函数

```js
//使用Promise.all，采用单个修改的接口去修改多个，但是真正不是这样做的
  //真正就应该有一个修改多个的接口
  //Promise.all() 是promise的一个api 
  //功能:   批量处理多个promise对象
  //参数:   promise对象的数组
  //返回值：返回一个新的promise对象

  //新的promise对象是成功还是失败 
  //只有所有的promise都成功才成功 只要有一个失败了就直接失败
  //新的promise对象成功的结果：是参数promise对象数组当中每个promise对象成功的结果组成的数组
  //新的promise对象失败的结果：是参数promise对象数组当中第一个失败的promise对象失败的原因

```



### new Error()

```js
只能传递字符串


```



### 如何拿到响应中的报错原因

```js
actions中的async请求函数调用, return Promise.reject(result) 
```







### 用户注册

```js
//对用户注册信息进行基本判断
if(phone&&code&&password&&password2&&password===password2){}

//直接获取state中的数据
this.$store.state.user.code
```



### 用户登录

```js
// 登录成功以后,返回的应该只有token数据,用来验证用户身份. 其他用户数据,重新发请求获取

//token获取以后,需要存储到localStorage中.(在过期时间之内不需要更改)
localStorage.setItem('TOKEN_KEY', result.data.token)
 1.token在state中不能初始化为空串,因为刷新后又变为初始值空串
 2.

//login页面中的form 阻止事件冒泡

//登录之后的token,需要添加到请求头里.
\
```



### token校验+++

```js
//router.beforeEach( async(to,from,next)=>{
	
})
```





### 使用token获取用户信息

```js
//在路由器中发送dispatch请求
```



### 自动登录

```js
//state中的token通过localStorage获取

//用户请求登录成功后,将token保存到localStorage中
```



### token和tempId的区别

```js
userTempId  未登录状态下的用户身份识别标识

token       登录状态下的用户身份识别标识 

如果没登陆，请求头当中只带了临时标识，添加的购物车信息是和临时身份标识对应的信息

如果登录了，那么我们同时在请求头添加临时标识和登录后标识，
那么此时后台会把临时标识对应的数据，转移到真正登录的标识数据里面，而临时标识对应的数据就不见了


两个标识都存在的话，后台会合并临时id对应的信息到token对应的信息上 token是老大

```





### 交易和结算

```js

```





### 发送请求的第二种方式$API

```js
//1.main中引入ajax文件api
import API from '@/api';

//2.vm实例身上绑定$API
Vue.prototype.$API = API;
```



#### element-ui

```js
//引入和使用element-ui
 1.快速上手 https://element.eleme.cn/#/zh-CN/component/quickstart
  1.1 单独的文件或者直接在main中导入
  1.2 安装 yarn add element-ui
  1.3 按需引入前提安装相应模块: yarn add babel-plugin-component -D
  1.4 修改.babelrc文件.(Vue项目中babel.config.js)
  1.4.1  复制黏贴plugins部分
  1.5 在main.js中引入
  1.5.1 两种类型的引入:
  0. import {Button, MessageBox, Message} from 'element-ui';
		
  1. Vue.comopnent(Button.name, Button) 或 Vue.use(Button)
  2.
    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;

  2.组件中使用MessageBox弹框 - HTML片段

  
  3.其他 关闭弹出框
  this.$msgbox.close();
```



#### qrcode

```js
1.安装  yarn add qrcode 
2.使用 github搜索 node-qrcode
3.ES6/ES7中用法

// With async/await
import QRCode from 'qrcode';
const generateQR = async text => {
  try {
    console.log(await QRCode.toDataURL(text))
  } catch (err) {
    console.error(err)
  }
}

await QRCode.toDataURL(text)
```





#### 轮询

```js
//间隔x秒发一个请求,让后台返回这个订单的支付状态.以判断用户是否已经支付;一个订单只能开启一个定时器
//必须添加if,确保订单支付轮询只开启一个定时器

if(!this.timer){
    this.timer=setInterval( async()=>{
        let result = await this.$API.reqPayStatus(this.orderNum);
        if(result.code === 200){
            //支付状态成功
            //0.存储成功的code, 当用户点击确定跳转时进行判断
            this.payStatus = 200;
            //1.提示支付成功
            this.$alert.success('支付成功');
            //2.关闭定时器++(两步完整清除,可以使用clearTimeout,相应的也可以)
            clearInterval(this.timer);
            this.timer = null;
            //3.关闭消息盒子, 跳转
            this.$msgbox.close();
            this.$router.push('/paysuccess');
        }
    }, 2000)
}

//完全清除定时器
clearInterval(this.timer);
this.timer = null;
```







### 口述

```js
//添加购物车

//支付
```





### 0222

### 



### 图片懒加载

```js
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片

//1.安装插件

//2.入口main.js文件中引入
import VueLazyload from 'vue-lazyload';
import loading from '@/assets/images/loading.gif';

Vue.use(VueLazyload, { //内部自定义了一个指令lazy
    loading    //指定未加载得到图片之前的loading图片
})


//3.更换图片动态的引入
图片正常请求:
<img :src="goods.defaultImg">
设置懒加载:
<img v-lazy="goods.defaultImg">
```



### 路由懒加载

在路由组件中: routers.js
使用improt from的方式是同步执行,将所有的路由组件一次性打包在一个大的文件(chunk-vendors.js 控制台查看js)当中.
存在的问题:1.打包文件体积大;2.浏览器访问加载效率低

所以我们将所有的路由组件,分别打包为一个小文件.浏览器访问哪个组件,再加载哪个组件.效率就会提升,这就是路由懒加载.

```js
//第一种形式
import Home from '@/pages/Home';

//第二种 懒加载
const Home = ()=>import('@/pages/Home');

//第二种简化 懒加载
{
    path:'/home',
    component:()=>import('@/pages/Home')
}



调用import函数把一次性打包的所有路由组件分开去打包加载  

路由懒加载特点
每个路由组件打包会打包成一个单独的文件
第一次访问哪一个路由组件，再去加载哪一个打包好的文件

(1）	当打包构建应用时，JS包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，
 然后当路由被访问的时候才加载对应组件，这样就更加高效了

 (2)	本质就是Vue 的异步组件在路由组件上的应用

(3)	需要使用动态import语法, 也就是import()函数

(4)	import('模块路径'): webpack会对被引入的模块单独打包一个小文件

(5)     当第一次访问某个路径对应的组件时，此时才会调用import函数去加载对应的js打包文件

```



### vee-validate

```js

//1.安装插件
yarn add vee-validate@2 -S

//2.main.js引入或在utils文件夹中新建文件utils引入使用
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

//3.main.js中引入
import '@/utils/validate'

//4.组件中使用
4.1 input使用

4.2 注册按钮使用

```



### 全局路由守卫

```js
//如果没有登录,却又访问的是交易,支付,个人中心等隐私页面,需要重定向通过next跳转到login

//login页面登录后通过query参数redirect,跳往之前想去往的页面
```



### 路由内导航守卫



### 组件内守卫

```js
//执行在组件created之前, this还没有创建

//如何使用this. 传递回调函数使用实例对象

```





### 打包网站

```js
yarn build
```





















































































## 后台

```js
github仓库:
简洁版: https://github.com/PanJiaChen/vue-admin-template
加强版: https://github.com/PanJiaChen/vue-element-admin
```



### 模板启动命令和文件一览

```js
//模板

//模板调用命令
yarn dev
npm run dev

//文件夹一览
public  项目根目录,
src
tests 测试单元

.env.devlopment 开发环境配置的变量
.env.production 生产环境配置的变量
.env.staging 
.estlintignore eslint检查规范要忽略的内容
.eslintrc.js eslint配置文件
.gitignore  git相关忽略文件
.travis.yml 测试相关
babel.config.js
debug.log 调试日志,可写可不写
jest.config.js webpack中配置的
jsconfig.json 可写@符联想
LICENSE 证书
package-lock.json
package.json
postcss.config.js 自动给css添加前缀 例如使用css2还是css3
vue.config.js


//src文件夹一览
api 接口请求函数 
assets      图片
components  共用非路由组件
icons       svg图片 矢量图方法不失真
layout      一级路由组件: 对应后台首页整体框架 //应用中只有2个一级路由组件:登录页+layout
router
store
styles      项目共用的css文件,使用scss格式, 
    index.scss引入到main.js中
utils
utils/requests  axios的二次封装文件
	baseURL:process.env.VUE_APP_API
	process.env根据现在所处的环境,自动选择VUE_APP_API的值

views
App.vue
main.js
permission.js
setting.js


```



### 跨域

```js
//webpack官网查找


//pathRewrite
```





### Object.assign

```js
合并后面的对象到前面的对象当中

```



### 路由redirect

```js
{
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
      
  {
    path: '/product',
    component: Layout,
    name: 'Product',
    redirect: '/product/trademark/list',
    meta: { title: '商品管理', icon: 'el-icon-s-shop' },
    children: [
      {
        path: 'trademark/list',
        component: () => import('@/views/product/trademark/List'),
        name: 'Trademark',
        meta: { title: '品牌管理' }
      },
     ]
      
  }
```



### sidebar下动态生成子项

```js
//子项-->路由name
 <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
```



### 模块化在api中使用

```js
//1.
export default {}  //最终暴露的形式是{ default:{} }

//2.
export {default as trademark} from './trademark';
export {default as attr} from './attr';
最终暴露的形式是: {trademark, attr}

//3.在main.js中使用暴露的api
import * as API from '@/api';
Vue.prototype.$API = API;
```



### trademark组件中静态页面

```js
//分页器
<el-pagination
    style="text-align: center"
    :current-page="page"
    :page-size="limit"
    :total="total"
    :pager-count="5"
    :page-sizes="[3, 5, 7]"  //如果设置偶数,总数又为奇数.可能会出错,没有细查.
    layout="prev, pager, next, jumper,->, sizes, total "
    @size-change="handleSizeChange"
    @current-change="getTrademarkList"
></el-pagination>


//messageBox弹出框
在删除按钮中使用Messagebox的确认消息


//getTrademarkList中参数的设置
this.getTrademarkList(this.trademarkList.length>1?this.page:this.page-1)
this.getTrademarkList(trademark.id?this.page:1)

//修改按钮的浅克隆

//Form表单验证(单个+全部)
自定义校验规则

 var validatetmName = (rule, value, callback) => {
     if (value.length<2||value.length>20) {
         callback(new Error('tmName长度需在2-20之间'));
     } else {
         callback();
     }
 };
```



### api中请求

```js
获取spu的详情信息  2种写法

addUpdate(spuInfo){
    //return request.post(`/admin/product/${spuInfo.id?'update':'save'}SpuInfo`, spuInfo)
    return request({
        url:`/admin/product/${spuInfo.id?'update':'save'}SpuInfo`,
        method:'post',
        data:spuInfo
    })
}
```





### scope和深度作用选择器

```js
scoped添加和不添加的区别
scoped不写，那么当前组件的样式会影响其它组件
scoped写上，把样式作用在当前组件内部及子组件的根元素身上 

scoped如何把样式作用在本组件和子组件根元素身上
加了scoped就会有唯一的一个标识值，而这个标识数据会作为被影响到的元素的属性
这个元素的样式会在选择器的最右侧添加这个属性选择器，交集选择器。


scoped中有些元素直接添加样式就会生效，而有些元素直接添加样式就不会生效？
一句话：scoped只能把样式作用延长到自身元素还有子组件的根元素身上
如果在scoped书写的样式，刚好是作用在子组件的根元素身上，就会生效
如果在scoped书写的样式，不是作用在子组件根元素而是子组件根元素内部元素身上，就不会生效


加了scoped，还想让子组件根元素内部元素的样式生效（使用深度作用选择器）
1、把子组件内部元素的样式重新写一个style写，不加scoped，用的不多

2、深度作用选择器的写法    ********************
如果是原生css 深度作用选择器  
父元素 >>> 选中的元素 
如果是less  scss 预编译的css文件
/deep/ 用于less
::v-deep  都行


添加深度作用选择器css怎么处理的
不加添加深度作用选择器的时候，scoped的唯一标识会作为属性选择器添加在css选择器最右侧选中的元素身上，去限制
添加了深度作用选择器的时候，scoped的唯一标识会作为属性选择器添加在css选择器最左侧元素身上，限制不了选中的元素
```



### echarts与vchart

```js
1.安装包  yarn add echarts@4 v-charts vue-count-to
2.引入echarts和v-charts
2.1 main.js中 import '@/plugins/vcharts'
2.2 
```



```js
//引入echarts的几种方式
1.cdn
2.安装包

//页面使用
1.为Echarts准备一个具备大小的DOM
<div id='main' style="width:600px; height:600px"></div>

2.基于准备好的DOM,初始化echarts实例
var myCharts = echarts.init(document.getElementById('main'), 'macarons');

3.指定图标配置项和数据
var option = {}

4.使用刚指定的配置项和数据显示图表
myCharts.setOption(option);

//webpack中使用
1.安装包并引入
 1.1 主题引入需要使用require
2.页面加载初始化图表
```





### 用户权限设置

#### 路由分类

```js
常量路由
是任意用户都能操作的路由，就是都能看到这个路由组件

异步路由
就是权限路由，用户拥有这个路由对应的name信息，这个路由组件才能被用户操作，才能看到

任意路由，
随意的不合法的路由，全部转向404组件页面，添加路由器的时候，必须最后一个注册
```



```js
//路由组件中不同类型的分类
```





### 用户权限

```js
//发请求一般在mounted中, 也可以在created中发


//搜索小技巧
使用分页器和搜索按钮使用的数据是两个对象, 浅拷贝

//全选框的全选和部分选择的展示

```









<hr style="border:2px solid red"/>

## view-product-attr

### 三级分类

```js
三级分类:
1.数据展示 
 写三级分类接口请求函数
 一上来第一个分类就要有数据，所以我们要mouted发请求拿数据给第一项分类去遍历展示数据
 选中了第一项当中的某个分类，才会发请求拿第二项的数据进行遍历展示
 选中了第二项当中的某个分类，才会发请求拿第三项的数据进行遍历展示
 选中第一项需要清空第23项的数据
 选中第二项需要清空第三项的数据
 选中123项都要和父组件通信，把id传递到父组件当中

2.组件通信(自定义事件)
 父组件当中判断level保存三个id
 在父组件获取子组件传递过来的数据，保存3级id的时候需要发请求获取属性数据
 在父组件获取子组件传递过来的数据，保存1级id的时候需要清空父组件的23级id及属性列表数据
 在父组件获取子组件传递过来的数据，保存2级id的时候需要清空父组件的3级id及属性列表数据

```



```js
form表单的行内样式实现:添加属性 :inline="true"
form表单收集数据: 
<el-form :model="cForm">
    <el-select v-model="cForm.category1Id">
        <el-option :value="c1.id">
            
自定义事件@change="handlerCategory1"需要添加在select组件中, 事件名称必须是change
自定义事件属性值传递的方式{categoryId:category1Id, level:1} ++ //对象形式参数,添加了标志符
```



### HintButton

```js
//定义 注册 使用
```



### 使用v-show展示隐藏

```js
//页面上同一个位置的要展示两个div, 使用v-show来展示与隐藏
<div v-show="isShowList"></div>
<div v-show="!isShowList"></div>
```



### table如何收集数据

```js
input使用v-model既能展示数据又能收集数据:

<el-table :data="attrForm.attrValueList">
  <el-table-column>
    <template slot-scope="{row, $index}">
        <el-input v-model="row.valueName">
```





### 深拷贝

```js
拷贝:必须出现另外一个内存空间.
深拷贝: 对象当中所有的对象数据在拷贝给另一个内存的时候,拷贝数据而非地址
浅拷贝: 对象当中所有的对象数据再拷贝给另一个内存的时候,拷贝地址

如何深拷贝?使用lodash中的cloneDeep方法
import cloneDeep from 'lodash/cloneDeep';
this.xxx = cloneDeep(yyy)
```



### 编辑模式和查看模式的切换

```js
给每个属性值添加<模式标识>数据,用于确定这个属性值当前是input还是span
 添加属性值时,都添加一个属性isEdit:true, 代表添加属性值是编辑模式
 修改属性值时,都添加一个属性isEdit:false, 这里需要使用$set才能实现响应式.!!
 每个属性值根据isEdit决定展示input还是span,使用v-if
```



```js
<el-input 
	v-if="row.isEdit"
	@blur="toLook(row)"
	@keyup.enter.native="toLook(row)"
></el-input>

<span v-else @click="toEdit(row)"> {{row.valueName}} </span>

//点击添加属性值回调
addAttrValue() {
    this.attrForm.attrValueList.push({
        attrId: this.attrForm.id, //这个id代表属性值所属属性的id,有id就是修改页面,没有就是增加页面undefined
        valueName: '', //需要用户输入的属性值名称
        isEdit: true  // 这个属性标识证明这个属性值的模式是编辑模式
    })
}

//点击添加修改属性按钮显示修改属性的页面
showUpdateDiv(row) {
    this.isShowList = true;
    this.attrForm = cloneDeep(row);
    
    this.attrForm.attrValueList.forEach((item)=>{
        this.$set(item, 'isEdit', false)
    })
}

//input失去焦点或回车,切换为查看模式
toLook(row) {
    //1.失去焦点或回车后,需要判断数据中是否有属性值名称,没有值或值不合法,不会变为span
    if(row.valueName.trim()==='') {
        return row.valueName = '';
    }
    //2.还需要判断当前输入的值,是否和已经存在的属性值相同.如果重复,不能变为span
    let isRepeat = this.attrForm.attrValueList.some(item=>{
        if(item !== row){
            return item.valueName === row.valueName
        }
    })
    if(isRepeat){
        this.$message.info('重复了');
        row.valueName = '';
        return;
    }
    row.isEdit = false;
}

//对span进行点击时,切换为编辑模式
toEdit(row) {
    row.isEdit = true;
}
```



### 响应式对象数据属性的添加和删除

```js
//响应式数据添加this.$set(),  Vue.set()
this.$set(item, 'isEdit', false) //需要添加属性的对象,添加的属性性,属性值

//响应式数据删除 this.$delete() Vue.delete()
错误: 直接delete删除对象当中的属性，不会导致页面更改.因为响应式属性只是在检测属性值的改变而不是检测属性的删除
正确：我们需要使用Vue.delete this.$delete方法  除了删除，还添加了更新界面的操作
```



### 自动获取焦点

```js
//什么时候: 1.添加属性值  2.从span变为input的时候
//使用方法: 元素添加focus()方法
//如何获取当前元素? ref+下标index
//注意事项: 使用this.$nextTick()方法, 避免元素还未创建成功就读取产生的错误.
 //this.$nextTick() 页面更新完成后自动调用

addAttrValue() {
    this.$nextTick(()=>{
        this.$refs[this.attrForm.attrValueList.length - 1].focus();
    })
}

toEdit(row,index) {
    this.$nextTick(()=>{
        this.$refs[index].focus();
    })
}
```



### 气泡确认框

```js
//按钮点击事件为onConfirm
```





### 保存属性操作

```js
//
async save(){
    //1.获取参数
    let attr = this.attrForm;
    //2.整理参数
    //2.1 如果属性值名称如果为空串,从属性值列表中删除(没有失去焦点的情况保存)
    //2.2 属性值中试试isEdit属性
    attr.attrValueList = attr.attrValueList.filter((item)=>{
        if(item.valueName !==''){
            delete item.isEdit;
            return true;
        }
    })
    //2.3 属性值列表中如果没有属性值,不发请求
    if(attr.attrValueList.length === 0){
        this.$message.info('须有属性才能保存');
        return;
    }
    //3.发请求
    try{
        //4.成功
        await this.$API.attr.addOrUpdate(attr);
        this.$message.success('保存成功')
        this.isShowList = true;
        this.getAttrList();
    }catch(error){
        //5.失败
        this.$message.error('失败')
    }
}
```





## view-product-component-spuform





### refs子组件获取

```js
//高级组件通信中
 $refs: 包含所有有ref属性的标签对象或组件对象的容器对象
 能方便的得到子组件/后代组件/父组件/祖辈组件对象, 从而更新其data或调用其方法
```





### .sync父子组件通信同步

```js
<SpuForm v-show="isShowSpuForm" @update:visible="isShowSpuForm=$event" />
<SpuForm v-show="isShowSpuForm" :visible.sync="isShowSpuForm" />
    
子组件中
<el-button @click="$emit('update:visible', false)" ></el-button>
```



### el-table中的列数据展示获取

```js
<el-table :data="xx" border> //通过data获取数据 border关键字有无为边框显示的true/false

<el-table-column prop="prop" label="label"> 
//每列获取的prop都是xx(对象或数组)中按顺序的一项
//label显示列的名称
//width 直接数字赋值,无需单位px等
//一般在内部的select, input组件上有v-model属性,自动收集到:data对应的变量中
```





### 销售属性值的收集

```js
//点击添加销售属性值列表当中的按钮
showInput(row) {
    //1.实现后添加的属性响应式
    this.$set(row, 'inputVisible', true);
    //2.自动获取焦点
    this.$nextTick(()=>{
        this.$refs.saveTagInput.focus();
    })
}

//el-select中属性的收集
<el-select v-model="xxx"> 展示和收集,'xxx'一般在data中设置好,格式根据要求
 <el-option  vfor :label="xx.xx" :value="xx.xx" > label是展示,value是收集到xxx中
```





## view-product-sku





### 数据展示和收集

```js
//不用template直接展示动态数据
<el-form-item  lable="label" label-width="100px" >
  {{spu.spuName}}
</el-form-item>

//select组件中的数据收集 v-model收集的就是option中value的值
<el-select  v-model="attr.attrIdValueId">
    <el-option :value="`${attr.id}:${attrValue.id}`" >
        
//图片列表的收集 selection-change会自动获取选中的图片的信息
<el-form-item label="图片列表">
    <el-table @selection-change="handleSelectionChange">
```





### 图片操作:设为默认|默认

```js
//在获取图片列表的同时,配置isDefault属性,避免后期使用$set
//这这里添加好属性后,直接将其赋值给响应式属性this.spuImageList,所以内部也都是响应式的
spuImageList.forEach((item)=>{item.isDefault = '0'});
this.spuImageList = spuImageList;

//排它实现 设为默认和默认的切换
setDefaultImg(row, spuImageList) {
    spuImageList.forEach((item)=>(item.isDefault = '0'));
    row.isDefault = '1';
}
```





### 平台/销售属性值列表中reduce方法使用

```js
//
skuForm.skuAttrValueList = attrList.reduce((prev, item)=>{
    if(item.attrIdValueId){
        let [attrId, valueId] = item.attrIdValueId.split(':');
        let obj = { attrId, valueId };
        prev.push(obj)
    }
    return prev;
},[])
```





## view-product-spu





### 三级联动组件

```js

```



### 分页器

```js
<el-pagination>
```



### 3个页面显示隐藏

```js
3个页面显示隐藏通过2个数据实现,通过v-show实现
isShowSpuForm=false;
isShowSpuForm=false;

<div v-show="!isShowSpuForm && !isShowSpuForm">
<SpuForm v-show="isShowSpuForm"></SpuForm>
<SkuForm v-show="isShowSkuForm"></SkuForm>
```



#### 三级联动组件可操作性

```js
3级联动组件的可操作性在spu页面时根据是否进入SpuForm,SkuForm页面相关.没有进入可点击,进入了不能点击.

2种实现:
2.1 当点击相关回调时,直接将this.isShowList的值变为false
2.2 监视.当SpuForm,SkuForm状态改变时,更改this.isShowList状态
watch:{
    isShowSpuForm(newVal, oldVal){
      this.isShowList = !newVal;
    },
    isShowSkuForm:{
      handler(newVal, oldVal){
        this.isShowList = !newVal;
      }
    }
  },
```





## view-product-SpuForm





### 显示sku列表功能

```js
使用dialog弹出框显示sku列表信息+table组件搭配loading样式

在两个el-card组件之外,引入el-dialog组件
loading样式引入前后的true/false
```





### 抽屉

```js
<el-drawer
:visible.sync="isShowSkuInfo"
:with-header="false"   //标头是否显示
size="50%">  //size表示占据浏览器的多少
<el-row>

//span表示占据几格(一行被分为24格)    
<el-col :span='5'></el-col>
```





### scoped和深度作用选择器

```js
scoped添加和不添加的区别
scoped不写，那么当前组件的样式会影响其它组件
scoped写上，把样式作用在当前组件内部及子组件的根元素身上 

scoped如何把样式作用在本组件和子组件根元素身上
加了scoped就会有唯一的一个标识值，而这个标识数据会作为被影响到的元素的属性
这个元素的样式会在选择器的最右侧添加这个属性选择器，交集选择器。


scoped中有些元素直接添加样式就会生效，而有些元素直接添加样式就不会生效？
一句话：scoped只能把样式作用延长到自身元素还有子组件的根元素身上
如果在scoped书写的样式，刚好是作用在子组件的根元素身上，就会生效
如果在scoped书写的样式，不是作用在子组件根元素而是子组件根元素内部元素身上，就不会生效


加了scoped，还想让子组件根元素内部元素的样式生效（使用深度作用选择器）
1、把子组件内部元素的样式重新写一个style写，不加scoped，用的不多

2、深度作用选择器的写法    ********************
如果是原生css 深度作用选择器  
父元素 >>> 选中的元素 
如果是less  scss 预编译的css文件
/deep/ 用于less
::v-deep  都行


添加深度作用选择器css怎么处理的
不加添加深度作用选择器的时候，scoped的唯一标识会作为属性选择器添加在css选择器最右侧选中的元素身上，去限制
添加了深度作用选择器的时候，scoped的唯一标识会作为属性选择器添加在css选择器最左侧元素身上，限制不了选中的元素
```





## view-product-trademark



### api文件格式

```js
//将本来可以存在在index.js中的所有接口请求函数,按照页面归属拆分成相应的文件夹. 并将index.js改成引入并暴露的方式. 最终在main.js中可以导入使用.

api/product/trademark.js
api/product/attr.js
api/product/index.js

//index.js中引入并暴露的方式, default不能省略. 所有的暴露本质上都是一个对象
export {default as trademark} from './trademark';
export {default as attr} from './attr';

//main.js
import * as API from '@/api/product';
Vue.prototype.$API = API;

//页面中使用
this.$API.trademark.addOrUpdate();
```



### el-table中数据的展现

```js
//1.属性介绍
data="data" 这个属性是用来展示数据的，但是现在我们还没数据,data必须是一个数组
            表格展示数据的时候，数据的格式必须是数组，数组内部是对象
border 这个属性代表是否需要边框

//数据传递
table当中:data="trademarkList"，代表的是表格要展示的数组
当我们写上这个的时候，table会把这个数组给每个列传递一份
每个列内部都是在展示我们的这个数组数据 v-for.每个列在展示数据的时候，结构可自定义,也就是说table列内部是有作用域插槽的

table的列在展示数据的时候，如果我们的数据就是要展示的数据，那么直接写prop就行
如果我们的数据不是直接展示的数据，而是需要其它的结构，那么必须使用作用域插槽
<template slot-scope="{row, $index}"
row代表当前遍历的对象
$index代表当前遍历对象的下标
```



### el-table中的列column

```js
//属性展示
prop="prop" 需要展示数据当中的某个属性时使用,可直接使用数据中的属性
label="label" 代表这一列的名称
width="width" 代表这一列的宽度 直接写数字不需要px.不写则列平分
align="center" 可以让某个列中的数据居中显示
```



### 分页器

```js
//属性介绍
这次我们用的是element-ui给我们封装的分页器组件
    :current-page="pageNum"  传递的当前页码  
    :page-size="pageSize"    传递的每页数量
    :total="totalCount"      传递的总数
    :pager-count="5"         传递的连续页数，如果写的是5，连续数是3 5包含了首页和尾页
    @current-change="handleCurrentChange"  切换页面的事件

    以前没写过的
    :page-sizes="[10, 20, 50]" 在页面可以改变当前页的数量
    @size-change="handleSizeChange" 改变当前页数量的事件

    layout="total, sizes, prev, pager, next, jumper" //可以改变分页器前后顺序（布局顺序）

    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
//回调函数

//请求当前页面回调的2种写法
```



### 嵌套表格Dialog对话框

```js
//Dialog 对话框 <el-Dialog> 自定义内容-嵌套表单的dialog
el-form代表的是表单,表单里面是表单项,每个表单项都可以通过label-width设置表单项名称的宽度,每个表单项都可以通过label设置表单项名称
form当中都会写：model="对象" 
 作用：1、以后用来去对这个form表单验证 2、用来标识这个form收集的数据收集到哪


```



### upload

```js
在拷贝upload组件的时候，把html  css   js相关的东西全拷贝
action 控制的是上传的接口地址
上传图片分为两步：
我们在上传的时候需要调用接口，把本地的图片传到后端服务器.然后,后端服务器会给我们返回这个图片在后端服务器上的地址（线上路径). 我们要收集的东西就是返回来的这个路径
          

:show-file-list="false"代表显示的只有一张图片，不是多个（照片墙） 
:on-success="handleAvatarSuccess" 代表图片上传成功后的回调
:before-upload="beforeAvatarUpload" 代表图片上传前的回调

beforeAvatarUpload(file) {
    //file代表的是你上传的那个图片
    const isJPG = file.type === "image/jpeg"; //判断上传的图片是否是jpg格式
    const isLt2M = file.size / 1024 / 1024 < 2; //判断上传的图片大小是不是小于2M
}

handleAvatarSuccess(res, file) {
      //res代表上传成功后返回的响应数据
      //file代表上传成功后返回的图片文件本身
      // console.log(res,file)
}
```



### 图片上传取消按钮bug

```js
//在增加按钮点击的回调中,将tmForm对象数据清空  如果是弹出框的取消按钮也可以

```



### 修改按钮

```js
如果采用this.tmForm = 对象的形式,会出现数据修改同步的bug. 因为引用的是对象地址,在弹出框中修改,列表中的数据也会跟着发生变化.
使用数据拷贝解决,因为都是基本数据类型, 所以使用扩展运算符(...)实现浅拷贝. 扩展运算符是最简单的浅拷贝方式.

1.浅拷贝
 this.tmForm = {...row} //最简单的浅拷贝形式 扩展运算符
2.属性赋值
this.tmForm.tmName = row.tmName;
```



### 弹出框dialog 成功失败回调

```js
//成功的流程
1.弹出提示信息
2.关闭弹出框
3.重新发请求获取列表页数据
 3.1 如果添加成功,重新请求的是第一页的数据,添加的新数据在最后一页(不存在id属性)
 3.2 如果修改成功,发请求获取当前页数据
this.$API.trademark.addOrUpdate(trademark.id?this.page:1)

//失败的流程 
弹出信息提示
```





### 删除按钮回调

```js
//使用MessageBox弹框中的'确认消息' this.$confirm

//删除成功
1.删除成功后的提示 await this.$API.trademark.delete(row.id)
2.重新发送请求获取列表数据 
 2.1 如果当前页只有一个数据,那么要请求前一页数据
 2.2 如果当前页大于1个数据,那么请求当前页数据
this.getTardemarkList(this.trademarkList.length>1?this.page:this.page-1)
```





### '添加按钮'增加表单验证

```js
'添加'按钮 加上表单验证+自定义校验规则

//表单验证
1.规则
 每个要验证的字段规则都是一个数组.数组里面是对象,每个对象就是一个规则
 每个规则对象里包含3个:1.规则 2.错误提示信息 3.触发时机
 触发时机有3种: 1.失去焦点blue 2.内容改变的时候change 3.整体验证时
2.代码
<el-form>中添加 :rules='rules'
data(){}中return返回对象中添加el-form-item的验证对象 rules{} 
 验证规则rules的格式:
 rules:{
     tmName(使用prop获取):[
         {required:true, message:'报错信息', trigger:'blur'},
         {min:3,max:5,message:'长度在3-5个字符', trigger:'blur'}
     ]
 }

3.使用自定义校验规则代替rules中的规则
 需要在相应规则验规里添加配置: { validator: validatePass, trigger: 'blur' }
 需要在data中定义配置的函数: validatePass
 var validateTmName = (rule, value, callback) => {
     if (value.length<2 || value.length>20) {
         // value就是后期验证的用户输入的数据
         // callback是回调,如果cb调用时传递了参数,代表验证失败;如果没有传递参数,代表验证成功
         callback(new Error("tmName长度必须是2-20之间"));
     } else {
         callback();
     }
 };

4.在添加/修改按钮中,添加表单验证的回调
 submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

5.点击取消按钮后,将报错信息消除
 在取消按钮添加回调,并打上ref标记
 <el-button @click="cancelUpload('tmForm')" ref="cancelUpload">取 消</el-button
 cancelUpload(tmForm){
     this.$refs[tmForm].resetFields();
     this.dialogFormVisible = false;
 }
```



## view-product-category





### 表格懒加载

```js
 <el-table
      border
      lazy
      :data="categorys"
      :load="load"
      style="width: 900px;margin-bottom: 20px;"
      :row-key="getRowKey"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :row-class-name="tableRowClassName"
    >
```





### 表格树形结构







## 知识点

### 不使用脚手架配置vue项目

```js
webpack：实现模块化，js文件可以使用require、exports、import、export进行连结。
webpack-dev-server：可以提供一个虚拟服务器，实时预览，8080端口本质上就是webpack-dev-server在提供服务。打包的bundle.js不会真正物理生成

```

### webpack配置

```js
npm i webpack@4  vue@2 vue-loader vue-template-compiler css-loader style-loader -S
npm i webpack-dev-server@3 -g  //代理服务需要全局安装 ??



//1.安装webpack 4版本.  最新5版本和和webpack-dev-server有点不兼容

//2.配置文件 webpack.config.js

//3.webpack缺点 需要引入webpack-dev-server
 3.1 不能实时打包，代码一变化，就进行打包
 3.2 没有8080服务器，网页需要双击打开，这意味着js文件不能虚拟生成。

 //4.安装webpack-dev-server，装版本3
 
 //5.更新配置webpack.config.js

 //6.安装其他需要的扩展  css-loader style-loader
 
 //7.安装其他需要的插件 vue-loader vue-template-compiler
 
 //8.手写基本的vue项目文件结构
```



```js
//webpack.config.js
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
     entry:"./src/main.js"
     output:{
     	filename:'bundle.js',
 		publicPath:'可自定义'    	
 	},
     devServer:{
         //根目录
         contentBase:'./public',
         port:8080   
     },
     //写loader的地方，让webpack能够识别更多类型文件
     module:{   //不是modules
         rules:[
             {
                 test:/\.css$/,
                 use:['style-loader', 'css-loader']
             },
             {
                 test:/\.vue$/,
                 use:['vue-loader']
             }
         ]
     },
     // 写loader的地方，让webpack能够识别更多类型文件
     plugins:[
         new VueLoaderPlugin()
     ]
 }
```





### 扩展

```js
nodejs中的方法 http://nodejs.cn/api/querystring.html

//1.作用: 用于解析和格式化URL查询字符串

//2.使用
 2.1 引入 const querystring = require('querystring');
 2.2 使用stringify方法 通过遍历对象的自身属性从给定的 obj 生成 URL 查询字符串。

 
 querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// 返回 'foo=bar&baz=qux&baz=quux&corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// 返回 'foo:bar;baz:qux'
```



### 小程序补充知识

```js
1. 所有{{ }}插值不能有函数的调用. 解决方法就是使用wxs文件

2. wxs文件使用
 主文件:
 <wsx src="./test.wxs" module="test"/>    
 <view {{test.xxx(arr)}}>
 </view>

3.类名如果要动态使用函数,必须写wxs文件
```



### 小程序和vue比较

```js
vue循环不需要加{{}}

小程序循环有{{}}
<view wx:for="{{arr}}" :key="index">
    
小程序中事件监听不加{{}}, 但是data-n要有{{}}
<button bindtap="taphandle" data-n="{{index}}"></button>

小程序可以迭代所有对象,相当于(value,index) in object
二层循环要必会键名相同, 使用wx:for-item="xxx" wx:for-index="yyy"来更新键名和值

```





### 筛选器 ++

```js

```





### 双色球

```js

```





### 小程序中使用有赞 Vant weap Ui库

```js
vant ui 是服务于vue的
vant weapp ui是服务于小程序的
```





### 比较数组中的对象和对象是否相同

```js
//比较属性名是否存在

 for(let i = 0 ; i < this.nowChoosed.length ;i++) {
     if(this.nowChoosed[i].n == item.n) return true;
 }
```





### vue 小程序中图片路径

```js
根路径public文件夹

<img src="`./image/${xx}/xx.jpg`">
    
<view>
    <image src="/images/xx.jpg">
</view>
```



### 

### 小程序/vue 动态样式

```js
 wx:for="{{33}}" wx:key="index"

<view>   小程序中是表达式  vue中是对象
    <image src="{{}}" class="imgStyle, {{index+1===idx?'current':""}}"
</view>

<view>  ??
    <image src="{{}}" class="imgStyle, {{current: index+1===idx}}"
</view>


:class="['redBalls', {current: a>b}]"
```



### 小方法

```js
//随机数 取整

parseInt(Math.random()*33) + 1;
~~(Math.random()*33) + 1;     //运算符, 取整

//小程序中data中数组更新 使用数组的拆包形式 不能使用push push返回的是新的数组长度

data:{
    allArr:[],
    redArr:[],
    blueNumber:4
}
this.setData({
    allArr:[...this.data.allArr, {red:this.data.redArr,blue:this.data.blueNu}]
})


//排序
getOrder(arr){
    arr=arr.sort(function(a,b){
        return a-b;
    });
    return arr.join(',')
}

//删filter改map增加...

 deleteBrand(car){ //如果将形参car改为item,则是全部删除
      this.carChoosed = this.carChoosed.filter(item=>item!==car)
    }
```









### 工作相关

```js
蓝湖


```





### 小程序自定义事件

```js
this.triggerEvent('事件名称', value)
```





### vue中$data用法

```js
$data对应的data中的数据, 可以再模板中实现this的功能. 但2.6版本中this也可以使用.

可以传动态值  $data[name]

data(){
    return {
        a:1,
        b:2,
        name:{a:33,b:44}
    }
}

$data[name]
```



### 父子组件受控++

```js
//受控: 相互通信

子组件改变自定义属性的值, 因为不能双向数据绑定, 所以有两种模式:克隆+watch, value+onchange


父组件给子组件传一个引用类型值，此时有两种处理方法：
①	子组件克隆一下这个值，就可以愉快的v-model到这个克隆值上了（因为不能直接v-model到props上，不允许），v-model要结合watch使用，watch中写this.$emit()；
②	子组件不克隆，直接用props，但是当改变的时候，直接$emit父亲。


增加表单：正则表达式的验证、不能都用复选框（也要有下拉选择、单选按钮）、PCAS的集成。


//element-ui种 input的checked属性是惰性的, 更改以后不会再变化. 需要将他封装成一个函数

//判断数组种一项是否选中来更新样式, 一般使用includes方法
```





### Vue中v-model是如何实现的?

```js
Ojbect.defineProperty()数据劫持

Vue中自定义组件如何使用v-model？？
答：自定义组件中使用model来定义双向绑定的值，model是个对象，它必须有prop属性和event属性，缺一不可。prop属性表示父亲的v-model=””引号中的那个东西到底是谁。props: []数组中必须“迎接一下这个值”。自定义组件中要改变值，必须使用event中定义的这个方法，如果要通知父亲改变，就$emit()这个函数即可。



//2.如何影响data中的值
两种方式: data中更改或生命周期中更改
```





### element-ui相关

```js
1.form表单中的rules验证,添加正则验证: pattern   //文档中没有找到
rules:{
 name: [
   { required: true, message: '请输入姓名', trigger: 'blur' },
   { pattern: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/, message: '请输入合乎常理的姓名', trigger: 'blur' }
 ],
}
 
 
 2.
```





### json-server

```js
//使用json-server生成相应开头的手机号码
var mockjs = require('mockjs');
const random = mockjs.Random();

mobile = Number(random.pick(['139', '176','186','135'])+random.integet(0,99999999).toString().padStart(8,'0'))
```



















































































































































































































































