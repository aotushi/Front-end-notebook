# 前台管理项目总结

## 1. 功能模块

    首页
    商品搜索列表
    商品详情
    购物车
    登陆与注册
    订单交易/结算
    支付
    个人中心/订单列表

## 2. 使用的库

    vue
    vue-router
    vuex
    vee-validate
    vue-lazyload
    element-ui
    
    axios
    mockjs
    nprogress
    uuidjs
    
    swiper-
    qrcode
    lodash

## 3. Vue配置

    name
    data
    props
    computed
    watch
    methods
    mounted/created
    beforeCreate
    components

## 4. 2个重要方法:

    vm.$nextTick()与Vue.nextTick()
    vm.$set()与Vue.set()
    
    $set(): 给响应式对象添加一个响应属性, 直接通过.xxx的方式添加, 这个属性不是响应式的, 界面不会自动更新
    
    $nextTick(callback): 一般是在数据更新之后, 界面更新前调用, 回调函数延迟到界面更新后执行 

## 5. 与后台交互

    axios二次封装
        1). 配置通用的基础路径和超时
        2). 显示请求进度条
        3). 成功返回的数据不再是response, 而直接是响应体数据response.data
        4). 统一处理请求错误, 具体请求也可以选择处理或不处理
        5). 每次请求都携带一个userTempId请求头, 数据值在state中
        6). 每次请求(已登陆)都携带一个token请求头, 数据值在state中
    postman与测试接口
    定义接口请求函数模块,在vuex的异步action中调用接口请求函数
    将API挂载到Vue的原型对象上, 在组件中调用接口请求函数与后台交互: Vue.prototype.$API = this
    当后台接口还未完成时, 先mock数据, 可以使用mockjs, 当然有的公司可能有自己的一套

## 6. vuex

    基本组成: store / state / mutations / actions / modules /getters
    vuex多模块编程: 当要管理的数据过多时, 将每个模块的数据单独管理, 更方便, 更有扩展性
    带vuex的整体编码组成:
        component:
            触发action调用请求获取数据: dispatch()
            读取vuex中的数据: mapState() / mapGetters()
            模板动态显示数据: 插值与指令
        vuex:
            action: 调用API函数请求获取数据, 提交给mutation
            mutation: 更新state数据
        api:
            axios二次封装
            定义针对不同接口的请求函数

## 7. 路由相关

    跳转路由的2种基本方式: 声明式路由与编程式路由
    跳转路由携带参数的类型: params与query参数
    携带参数的2种方式: 字符串与对象形式
    参数相关问题:
        params与path配置能不能同时使用
        如何配置params参数可传可不传?
        路由组件能不能传递props参数
        编程式路由跳转到当前路由, 参数不变会报出错误
    如何让路由跳转后, 滚动条自动停留到起始位置
        scrollBehavior配置
    路由导航守卫的理解和使用
        全局前置守卫
        路由/组件前置守卫

## 8. 自定义通用型/复用型组件的基本步骤

    实现静态组件: 模板/样式写好
    设计从外部接收的数据: props
    设计内部的数据: data
    设计基于props和data的计算属性数据: computed
    根据props和data数据和computed进行动态显示
    更新数据, 更新界面, 通知父组件

## 9. 相关问题(具体内容看笔记)

    编程式路由跳转到当前路由, 参数不变会报出错误
        vue-router版本变化: 上一个项目没问题, 新的项目有问题
        重写VueRouter原型上的push/replace方法
    优化减小打包文件: 
        对UI组件库实现按需打包
        对lodash库实现按需引入
    什么时候需要使用编程式导航代替声明式导航
        有一定条件限定
        个数太多
    优化事件处理效率: 
        利用事件委托
    如何携带点击的分类的数据?
    	event.target得到a标签
    	利用自定义的data标签属性来保存分类信息
    对mouseEnter高频事件进行节流处理
    	使用lodash的throttle进行节流处理
    解决swiper动态页面轮播的bug
        watch + $nextTick()
    解决Floor组件中轮播有问题的bug
        watch的immediate
    分发异步action后, 如何能知道处理完成了
        回调函数
        dipatch()的返回值是异步action返回的promise
    区别userTempId与Token
    	userTempId: 未登陆的标识
    	Token: 登陆用户的标识
    2种懒加载的优化手段:
        路由组件懒加载
        图片懒加载注册





## 10. 面试可说性强的功能

### 1) 三级分类列表

- 使用编程式导航代替声明式导航
  
- router-link太多 ==> 创建很多组件对象 ==> 占用内存大, 效率低
  
  ```js
  1.使用声明式导航 产生的组件过多,内存中组件对象多,卡顿
  2.使用编程式导航代替声明式 click事件. 每个a标签上都添加了点击事件,内存中有很多函数,内存占用大.
  3.使用事件委托
   -如何获取发生事件的元素和属性:event.target 自定义属性和元素的dataset属性
  4.对mouseEnter事件的高频进行节流处理: lodash的节流函数throttle函数+按需引入
  
  import _ from 'lodash'
  import throttle from 'lodash/throttle'
  ```
  
  
  
- 优化事件处理效率
  - 利用事件委托: event.target
  - 理解事件委托与事件冒泡

- 如何携带点击的分类的数据?
  - event.target得到a标签  获取发生事件的元素
  - 利用自定义的data标签属性来保存分类信息

- 对mouseEnter高频事件进行节流处理
  - 使用lodash的throttle进行节流处理
  - 对lodash库实现按需引入

### 2) 商品搜索列表
- 准备各种搜索条件
  - category1Id: '', // 一级分类ID
  - category2Id: '', // 二级分类ID
  - category3Id: '', // 三级分类ID
  - categoryName: '', // 分类名称
  - keyword: '', // 关键字
  - trademark: '', // 品牌  "ID:品牌名称"
  - props: [], // 商品属性的数组: ["属性ID:属性值:属性名"] 示例: ["2:6.0～6.24英寸:屏幕尺寸"]
  - order: '1:desc', // 排序方式  1: 综合,2: 价格 asc: 升序,desc: 降序  示例: "1:desc"
  - pageNo: 1, // 当前页码
  - pageSize: 10, // 每页数量
- 添加搜索条件
- 删除搜索条件
	- 删除分类或关键字条件后, 地址栏还有条件参数?
	- 删除关键字条件, 输入框中的关键字没有同步删除?
- 排序处理
	- 根据综合/价格/销量/评价排序
	- 升序/降序
	- 搞清条件数据结构
		- orderFlag:orderType
		- orderFlag: 1: 综合,2: 价格, 3: 销量, 4: 评价
		- orderType:  asc: 升序,desc: 降序

```js
//准备各种搜索条件
1.初始化搜索条件: data中的数据:搜索条件对象, dispatch只能接收一个参数
2.获取条件对象中的各个数据:
 获取对象数据: 从路由对象$route中获取query参数(点击的分类名称及id)和params参数(输入的关键字)
2.1优化条件对象-删除空属性: 对条件对象使用扩展运算符,更新.对象循环遍历Object.keys(obj),删除空属性
2.2处理对象的声明周期, 请求数据的声明周期: beforeMounte, mounted

//删除分类或关键字条件后, 地址栏还有条件参数
1.在搜索页重新输入关键字或者点击类别不会再发送请求，因为mounted只会执行一次，需要监视路由变化
2.解决: 使用watch监视$route,更新参数,重新发请求.

//删除关键字条件, 输入框中的关键字没有同步删除
1.使用自定义事件通知header组件清空关键字
2.重新发送请求this.searchParams.pageNo = 1  this.$router.replace({name:'search', query:this.$roue.query})

//商品排序处理(order:'2:desc')
0.data中初始化数据: order:'2:desc'
1.判断用户点击的是否是原来的排序标志sortFlag是否和原来一样,一样就更改排序类型sortType(asc,desc). 不一样就更改排序标志,排序类型默认.
2.更新页码,重新发送请求(this.getSearchInfo())
3.其他:阿里图标字体库的使用 ;计算属性的引入获取排序标志和类型
```







### 详情页

```js
//图片实现放大镜效果
组件结构:详情页组件, 缩略图组件imgList, zoom大图组件

//缩略图组件imgList
1.引入swiper轮播图组件
2.处理思路: 使用watch监视props属性图片数组imgList,一旦有变化,实例化swiper.但是没有效果,因为页面还没有完全形成,所以需要等页面完全形成后再去实例化swiper,使用$nextTick(最近一次页面更新之后调用)
watch:{
    imgList:{
        immediate:true,
        handler(newValue,oldValue){
            this.$nextTick(()=>{
                new Swiper(this.$refs.imgSwiper,{
                    slidesPerView:4, //一个视图放几张
                    slidePerGroup:4, //切换一组,几张图片
                    navigation:{
                        nextEl:".swiper-button-next",
                        prevEl:".swiper-button-prev"
                    }
                })
            })
        }
    }
}
3.点击的当前图片添加边框
动态类判断当前索引和点击索引是否相同,初始化index数据0,点击后将当前图片索引赋值给初始index. 
4.其他: 缩略图列表和展示图列表同步,使用全局事件总线传递当前图片的index值 this.$bus.$emit('changeDefaultIndex',index)

//右侧大图组件
1.缩略图组件给大图组件传递的index,在mounted中指定全局事件总线接收 //全局事件总线接收,$on后是方法
mounted(){this.$bus.$on('changeDefaultIndex',this.changeDefaultIndex)}
methods:{changeDefaultIndex(index){this.defaultIndex=index}}
1.1 beforeDestroy解绑全局事件总线

2.图片展现问题
使用<img :src="imgList[0].imgUrl"/> 报错:can't read property of undefined
使用<img :src="defaultImg.imgUrl"/> 通过计算属性得到return this.imgList[this.defaultIndex]||[] 来解决


3.蒙版+右侧大图
<div class="spec-preview">
    <img :src="default.imgUrl"/>
    <div class="event" @mousemove="move"></div>
    <div class="big">
        <img :src="defaultImg.imgUrl" ref="bigImg">
    </div>
    <div class="mask" ref="mask"></div>
</div>

move(event){
    //鼠标动,蒙版动,转化为根据鼠标位置求蒙版位置
    //event.clientX 视口 event.pageX页面 event.offsetX元素
    let mask = this.$refs.mask;
    let bigImg = this.$refs.bigImg;
    
    //获取鼠标坐标
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    //根据鼠标位置和蒙版宽度计算蒙版位置
    let maskX = mouseX - mask.offsetWidth/2;
    let maskY = mouseY - mask.offsetHeight/2; //offsetWidth: 目标元素的宽度(加边框) 
    
    //设置蒙版位置前需要边界限定
    if(maskX<0){
        maskX=0;
    }else if(maskX>mask.offsetWidth){//因为整体宽度是蒙版的两倍
        maskX = mask.offsetWidth;
    } 
    if(maskY<0){
        maskY=0;
    }else if(maskY>mask.offsetHeight){
        maskY = mask.offsetHeight;
    }
    
    //设置蒙版的位置让蒙版活动
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';
    
    //蒙版动,大图动  大图是蒙版移动反方向的2倍
    bigImg.style.left = -2*maskX+'px';
    bigImg.style.top = -2*maskY+'px';   
}

//点击切换销售属性值的选中状态
1.排它实现: 第一步,让所有成员变为同一种状态;第二步,让当前点击的这个成员变为另一种状态

//购买数量输入框
1.blur失去焦点还是选择change事件,change事件:触发条件时当前数据和原来的数据不一样
2.使用三元表达式处理负数,非数值等. //这里需要使用大于等于,否则会失效
<input v-model="skuNum" @change="$event.target.value>=1?(skuNum=$event.target.value*1):(skuNum=1)"/>

//加入购物车按钮-需要发请求    
.加入购物车 需要发请求给后台让后台存储信息,请求成功后返回信息,根据这个信息再去跳转.否则,如果添加失败,而又跳转到下个页面,救出问题.
async addShopCart(){
    try{
        await this.$store.dispatch('addOrUpdateShopCart',{skuId:this.skuId,skuNum:this.skuNum});
        alert('添加购物车信息成功');
        sessionStorage.setItem('SKUINFO_KEY',JSON.stringify(this.skuInfo));
        this.$router.poush('/addcartsuccess?skuNum='+this.skuNum)
    }catch(error){
        alert(error.message)
    }
}

```



### 购物车成功页面

```js
//请求需要携带用户临时身份标识,才能获取到数据

//用户临时标识
1.创建保存
 浏览器端创建,每次请求需要携带;
 应用一打开就创建保存在localStorage
 在state中也去保存一份,可以更快获取
2.使用
 请求拦截器每个请求都带上
3.做法
 工具函数去创建保存uuid
 在state中调用这个函数
 ajax发送请求,所有请求头中携带这个标识

//utils/userabout.js
import{v4 as uuid} from 'uuid';
export function getUserTempId(){
    let userTempId = localStorage.getItem('USERTEMPID_KEY');
    if(!userTempId){
        userTempId = uuidv4();
        localStorage.setItem('USERTEMPID_KEY', userTempId)
    }
    return userTempId;
}

//store/user.js
import{getUserTempId} from '@/utils/userabout';



//数据存储到data,方便后期使用

beforeMount(){
    this.skuNum = this.$route.query.skuNum;
    this.skuInfo = JSON.parse(sessionStorage.getItem('SKUINFO_KEY'))
}



```



### 购物车页面

```js
修改数量,修改选中状态,删除商品都需要发请求,请求成功后再请求更新页面数据

//修改购物车数量
<input autocomplete="off" type="text" :value="cart.skuNum" minnum='1' @change="changeCartNum(cart,$event.target.value*1, false)"
@click="changeCartNum(cart,-1,true)"
@click="changeCartNum(cart,1,true)"
async changeCartNum(cart,disNum,flag){
    //获取本身的数量
    let originNum = cart.skuNum;
    if(flag){
        if(originNum+disNum<1){disNum = 1-originNum}
    }else{
        if(disNum<1){
            disNum=1-originNum;  //disNum是变化的值
        }else{
            disNum = disNum - originNum;
        }
    }
    try{
        //发请求修改数量
    	await this.$store.dispatch('addOrUpdateShopCart',{skuId:cart.skuId,skuNum:disNum});
        alert('更改成功');
        //发请求重新获取购物车列表数据
        this.getshopCartInfo();
    }catch(error){
        alert(error.message);
    }
}

//修改购物车的全选状态
利用input标签:checked属性选中与否来决定配置属性isChecked是0还是1

  //使用计算属性读取和更新全选状态
  isCheckAll:{
      get(){
          return this.cartInfoList.every((item)=>{item.isChecked})
      },
      async set(val){
          try{
              const result = await this.$store.dispatch('updateCartIscheckAll', val?1:0);
              alert('修改成功')
              this.getshopCartInfo();
          }catch(error){
              alert(error.message)
          }
      }
  }

//vuex中全选 使用promise.all处理
async updateCartIscheckAll({commit,dispatch,getters}, isChecked){
    let promises=[];
    getters.cartInfo.cartInfoList.forEach(item=>{
        if(item.isChecked===isChecked) return;
        let promise = dispatch('updateCartIscheck', {skuId:item.skuId, isChecked})
        promises.push(promise);
    })
    return Promise.all(promises)
}

//页面数据计算

//统计已选的数量
computed:{
    checkNum(){
        return this.cartInfoList.reduce((prev,item)=>{
            if(item.isChecked){
                prev += item.skuNum;
            }
            return prev;
        },0)
    },
    
    //统计总价
    allMoney(){
        return this.cartInfoList.reduce((prev,item)=>{
            if(item.isChecked){
                prev += item.skuNum*item.skuPrice;
            }
            return prev;
        },0)
    }
}

//删除购物车数据

```



### 注册页面

```js
//点击注册按钮的逻辑
根据请求成功还是失败有后续操作（所以action里面函数要有return，来让vue当中判断成功和失败）
如果请求验证码成功，我们需要把验证码自动添加到页面上，修改data的code为state里面获取的
如果请求验证码失败，提示
async register(){
    //点击完成注册首先对所有的表单项做整体验证，验证通过返回的true,没通过返回的false
    const success = await this.$validator.validateAll();
    if(success){
        //发请求把收集的数据，作为参数传递给后台存储数据库
        let {phone, password, code} = this;
        try{
            await this.$store.dispatch('userRegister',{phone,password,code});
            alert('注册成功');
            this.$router.push('/login')
        }catch(error){
            alert(error.message)
        }
    }
}

main.js中  import '@/utils/validate'  //引入vee-validate相关配置

utils/validate.js
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文message
Vue.use(VeeValidate)
```





### 登录页面

```js
//登录按钮回调

登录跳转前,进入到全局路由前置守卫中进行判断.
先判断是否又token:
有->访问的依然是login页面->跳转到首页
有->访问其他页面->再判断是否已经获取用户信息
用户信息有->放行
用户信息没有->dispatch一下请求,获取用户信息(保存到vuex中)


methods:{
    aysnc login(){
        let{phone,password}=this;
        if(phone&password){
            try{
                await this.$store.dispatch('userLogin',{phone,password});
                //登录成功后,跳转到之前前往的页面
                let targetPath = this.$route.query.redirect||'/';
                this.$route.push(targetPath);
            }catch(error){
                alert('登录失败')
            }
        }
    }
}



//路由器对象中配置全局路由守卫
const router = new VueRouter({
    routes,
    scrollBehavior(to,from,savedPosition){
        return {x:0,y:0}
    }
})
//注册全局前置导航守卫，用来对token校验（根据token获取用户信息）
router.beforeEach(async(to,from,next)=>{
    //第一步：守卫拦截住，先去获取用户的token和用户的信息
    let token = store.state.user.token;
    let userInfo = store.state.user.userInfo.name;
    
    if(token){
        //如果token存在,代表用户登录过
        if(to.path==='/login'){
            next('/')
        }else{
            //如果用户已经登录,但跳转的不再是登录页,需要查看用户信息获取了没有
            if(userInfo){
                //如果已经获取
                next()
            }else{
                //用户已经登录,但还没获取用户信息,需要请求用户信息
                try{
                    await store.dispath('getUserInfo') //用户根据token获取信息
                    next();
                }catch(error){
                    //根据token获取用户信息失败，代表token可能过期
          			//把用户的过期token给清理掉，重新跳转到登录页
                    store.dispatch('clearToekn');
                    next('/login')
                }
            }
        }
    }else{
        //用户没有登录,如果用户访问的是 交易相关  支付相关 个人中心相关，那么跳转到登录页面
        let accessPath=['/trade','/center','/pay'];
        let targetPaht = to.path;
        let result = accessPath.some((item)=>{item === targetPath})
        if(result){
            next('/login?redirect='+targetPath)
        }else{
            next();
        }
    }
})


//vuex中 user.js
const actions={
    //请求登录
    async userLogin({commit}, userInfo){
        const reuslt = await reqUserLogin(userInfo);
        if(result.code === 200){
            commit('RECEIVE_TOKEN', result.data.token);
            //自动登录就是需要保存token到localStorage
      	    //保证第一次登录完成，后期的登录都可以免了
            locationStorage.setItem('TOKEN_KEY',result.data.token)
            return 'ok';
        }else{
            return Promise.reject(new Error('failded'))
        }
    }
}

//ajax.js
//登录成功后，需要把token添加到请求头当中，从今往后所有的请求当中都要带上这个token
let token = store.state.user.token;
if(token){
    config.headers.token = token;
}

//用户临时标识和token区别
userTempId  未登录状态下的用户身份识别标识
token       登录状态下的用户身份识别标识 
如果没登陆，请求头当中只带了临时标识，添加的购物车信息是和临时身份标识对应的信息
如果登录了，那么我们同时在请求头添加临时标识和登录后标识，
那么此时后台会把临时标识对应的数据，转移到真正登录的标识数据里面，而临时标识对应的数据就不见了
两个标识都存在的话，后台会合并临时id对应的信息到token对应的信息上 token是老大
```







### 支付界面

```js
//支付流程
1.结算按钮 提交订单信息(push页面的时候,query参数传递订单编号)
2.根据接收的订单编号请求商品信息(支付url,金额)
3.支付1: 根据支付url生成支付二维码,引入qrcode
4.支付2: 扫码支付
5.支付3:使用定时器setInterval轮询请求支付状态
 5.1 支付成功: 存储支付状态->消息提示->关闭定时器(clearInterval,null)->跳转页面




//点击提交订单的逻辑
1.根据订单id获取支付信息 awati this.$API.reqPayInfo(this.orderNum)
2.可以根据支付信息获取支付url和金额
3.支付
3.1 根据支付url生成支付二维码图片显示 使用插件qrcode
3.2 扫码支付
3.3 轮询请求获取订单状态


async pay(){
    try{
        //第一步：根据支付信息当中codeUrl生成二维码进行弹框展示
    let imgUrl = await QRCode.toDataURL(this.payInfo.codeUrl);
    //生成的二维码图片链接进行展示
    this.$alert(`<img src="${imgUrl}" />`, '请使用微信扫码支付',{
        dangerouslyUseHTMLString:true,
        showClose:false,
        showCancelButton:true,
        cancelButtonText:'支付遇到问题',
        confirmButtonText:'我已支付成功',
        center:true,
        beforeClose:(action,instance,done)=>{
            //action代表用户点击的是哪个按钮 'confirm确定按钮', 'cancel取消'或'close关闭'；
            if(action==='confirm'){
                //判断如果没有支付
                if(!this.payStatus){
                    this.$message.info('请确保支付成功,成功后自动跳转支付页面')
                }
            }else if(action==="cancel"){
                //1.提示
                this.$message.warning('支付遇到问题请练习客服');
                //2.清除定时器
                clearInterval(this.timer);
                this.timer = null;
                //3.关闭消息盒子
                done();
            }
        }
    }).then(()=>{}).catch(()=>{});
     //.then() 是对应点击确定按钮之后的操作 .catch();是对应点击取消按钮之后的操作
     //如果采用这两个去操作，都会强制关闭我们的弹出框msgBox,而我们现在并不是要直接关闭，是需要判断用户是不是支付了，才决定关闭不关闭
    
    //轮询 隔2秒发一个请求， 为了让后台给我返回这个订单的支付状态
    //用以判断用户到底是支付了还是没支付
    if(!this.timer){
        this.timer = setInterval(async()=>{
            const result = await this.$API.reqPayStatus(this.orderNum);
            if(result.code === 200){
                //1、把成功的标志存储起来用于用户点击按钮的时候进行判断
                this.payStatus = 200;
                //2、提示支付成功
                this.$message.success('支付成功');
                //3、把定时器清除
                clearInterval(this.timer);
                this.timer = null;
                //4,自动跳转到支付成功页面
                this.$msgbox.close(); //强制关闭弹出框
                this.$router.push('/paysuccess');
                
            }
        },2000)
    }
    }catch(error){
        //生成二维码图片失败 提示
        this.$message.error(error.message)
    }
}

```





### 个人中心页面

```js
//路由权限控制
全局路由守卫: 隐私页面(个人中心,交易及支付相关页面)没登录情况下需要先登录,之后会自动跳转到个人中心页面


```



### 路由守卫在项目中使用

```js
//只有从购物车页面才能跳转到交易页面

//只有从交易页面才能跳转到支付页面

//只有从支付页面才能跳转到支付成功页面, 且需要携带必要的参数订单号,商品信息
```





### 补充

```js
//代码优化
1.图片懒加载:在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
import  lazyload from 'vue-lazyload';
import loading from '@/assets/images/loading.gif'
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
  loading,  // 指定未加载得到图片之前的loading图片
})

<img v-lazy="goods.defaultImg" />
    
//2.路由懒加载
通常路由组件使用import..from..方式同步将所有路由组件一次性打包在一个文件中.(体积大,加载效率低).
路由懒加载是使用动态import分别打包文件,浏览器请求哪个组件再去加载哪个组件(效率高)

形式: const Home = ()=>import('@/pages/home');
{
    name:'Home',
    component:()=>import('@/pages/home')
}
//3.第三方插件按需引入
element-ui  lodash

//4.大数组优化: 冻结列表+虚拟列表

//5.事件销毁
全局事件总线在beforeDestroy(){this.$bus.$off('eventname')}

//webpack优化

```





### 3) 下单支付流程

- 去结算 ==> 获取订单交易数据
- 提交订单 ==>提交下单请求, 得到订单ID
- 根据订单ID获取支付信息
	- 金额
	- 支付url
- 支付
	- 根支付Url生成支付二维码图片显示, 使用qrcode
	- 扫码支付
	- 轮询请求获取订单状态
- 分页显示订单列表

### 4) 注册流程

- 前台: 输入注册需要的相关信息(用户名/密码/...), 进行前台表单校验, 如果不通过, 提示错误
- 前台: 发送注册的ajax请求(post), 携带注册接口需要的相关数据(用户名/密码/...)

- 后台: 获取到注册请求携带的参数, 去数据库中判断是否已经存在
  - 如果已经存在, 返回提示此用户已存在的提示信息
  - 如果不存在, 保存到数据库, 返回成功的数据
- 前台: 接收到响应
  - 如果是不成功的数据, 提示
  - 如果是成功的数据, 自动跳转到登陆页面

### 5) 登陆流程

- 前台: 输入登陆需要的相关信息(用户名/密码),  进行前台表单校验, 如果不通过, 提示错误
- 前台: 发送登陆的ajax请求(post), 携带登陆接口需要的相关数据(用户名/密码)
- 后台: 获取到登陆请求携带的参数, 去数据库中查询看是否存在
  - 如果不存在, 返回登陆失败的信息
  - 如果存在, 生成一个新的token字符串, 将token与用户信息一起返回
- 前台: 接收到响应
  - 如果是不成功的数据, 提示
  - 如果是成功的数据, 
    - 将用户信息和token都保存到vuex中
    - 将token保存到localStorage中   ==> 不保存用户信息
    - 跳转到首页或redirect页面

### 6) 自动登陆流程

- 简单说: 页面一加载时, 发送请求根据token获取用户信息
- 利用全局前置守卫:
  -  一旦发再当前没有登陆, 但前面登陆过(有token, 没有用户信息)
  - 发送请求根据token获取用户信息
    - 成功了, 保存用户信息及token
    - 失败了(说明token过期了): 清除token, 强制跳转到登陆页面

### 7) 购物车模块

- 购物车数据是保存在后台的, 标识是什么?
  - 未登陆: 标识为用户临时ID(userTempId)
    - 第一次访问时前台利用uuid库生成的唯一字符串, 保存保存在local中
    - 每次请求时通过请求头自动携带它(利用请求拦截器)
  - 登陆: 登陆用户对应的token
    - 用户请求登陆时, 服务器端生成并返回给浏览器, 浏览器收到后自动保存到local中
    - 每次请求时通过请求头自动携带它(利用请求拦截器)
- 添加购物车 / 修改购物项数量
  - 提交请求时, 携带商品的skuid和数量
  - 这2个操作是同一个接口, 也就是数量有可能是负数
- 获取购物车列表
  - 请求获取时不需要携带额外参数, 会自动携带标识: userTempId / token
  - 一旦用户登陆上, 后台会将关联在usertempId上的购物车数据合并到token对应用户关联的购物车数据
- 删除购物项(一个/多个)
  - 请求接口, 携带一个skuId或多个skuId的数组
- 勾选购物项(一个/多个)
  - 请求接口, 携带一个skuId或多个skuId的数组 和 是否勾选的标识数据(0/1)

