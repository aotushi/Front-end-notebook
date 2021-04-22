## 0126

### 配置信息



### assets和public文件夹区别

```
assets存放组件共用资源,后期会被webpack处理, 而public不会.
public代表根路径,后期打包的dist文件夹
```



### eslint禁用

```js
//3种方式

vue.config.js中配置lintOnSave:false
module.exports={
    lint
}
```



### @代替src配置

```js

// @表示src文件夹
文档:webpack:resolve->alias->
使用: 使用import App from '@/App' 代替import APP from './App' 
设置:

jsconfig.json配置别名@提示     import XXX from '@/'
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



### git基本操作

```
//本地->远程


//远程->本地
git clone url


//项目操作
git remote add origin url...
git add .
git commit -m "update"  //单引号在git中会被视作提交信息的一部分
git push origin master

git pull origin master
```





### 页面

```js
1.
//页面结构:上中下
//切换页面无刷新:请求是ajax,这个是单页面应用,中间的部分是我们的路由组件切换  ++

2.文件结构
components下新建文件夹 NAME/index.vue

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





## 0127



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



## 0129

### 动态绑定样式

```js
//动态样式代替css中的hover, 样式类名确定但不确定用不用,所以使用对象写法
//这种思想很重要,需要多次回顾

<div 
	class="item" 
	v-for="(c1, index) in categoryList"
	:key="c1.categoryId"
	:class="{item_on= currentIndex===index }"  // 绑定动态样式,类名确定值不确定使用对象形式
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
定义:在事件被触发的n秒后再执行回调,如果在这n秒内又被触发,则重新计时.(只有足够的空闲时间,才执行代码一次.多次变为1次)

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





## 0130

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





## 0201

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







## 0202

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



## 0203

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









## 0204

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



## 0205

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



### 导航守卫

```js
路由导航守卫的理解（参考官网去写代码）
		当路由跳转的时候，这个守卫可以去拦住，检测你是否有去往这个页面的条件
		有特定条件才能去到相应的页面的功能  
		拦截路由，查看是否满足条件，满足的放行，不满足的处理




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













































































