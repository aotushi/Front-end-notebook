## 1. setState

### 深入setState

```
setState()是同步的,但其状态的更改可能是异步的.(官方文档写的是'可能')

setState本身就是一个同步的函数,由程序员亲自调用,JS引擎在主线程执行调用.但setState引发的'动作'是异步的.
```





```
一、setState()更新状态的动作是异步还是同步的?----要看setState的执行位置
		(1). 在由react所控制的回调中更新的动作是【异步】的: 生命周期勾子、react事件监听回调 
		(2). 在非react控制的异步回调中更新的动作是【同步】的: 定时器回调、原生事件回调
			补充:原生事件的回调是异步的吗?必须是.例如按钮,点击之后才调用.
		
二、setState的两种写法：
	(1). 对象式写法：setState(stateChange, [callback])
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
					
	(2). 函数式写法：setState(updater, [callback])
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
		1.对象式的setState是函数式的setState的简写方式(语法糖)
		2.使用原则：
				(1).如果新状态不依赖于原状态 ===> 使用对象方式
				(2).如果新状态依赖于原状态 ===> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取。
```



```js
//这就是react中的一个bug
//案例1-1

import React, {Component} from 'react';

export default class Demo extends Component{
    state={sum:0};
	//add是由React控制的事件回调，所以其中的setState更新状态的动作是【异步的】
	add=()=>{
        const{sum}=this.state;
        this.setState({sum:sum+1});
        console.log(sum); //输出0
        //11行代码下面的所有代码执行完后,才进行2个操作:改state,调render. setState是我们调用的,不是回调函数,所以setState不是异步函数.
    }
    
    componentDidMount(){
        console.log(this.state.sum);//只打印一次初始值
    }
    
   render(){
       const{sum}=this.state;
       return(
       	<Fragment>
        	<h2>当前state状态中sum的值是:{sum}</h2>   //1
			<button onClick={this.add}>点我+1</button>
        </Fragment>
       )
   }
}

```



```js
//案例1-2
//挂载完成组件中: 
	更改state,打印state; 
	更改两次state,打印两次state; 
	加入事件回调函数(异步)
//输出:0 1
import React, {Component} from 'react';

export default class Demo extends Component{
    state={sum:0};

	//componentDidMount是由React控制的生命周期钩子，所以其中的setState更新状态的动作是【异步的】
    componentDidMount(){
        const{sum}=this.state;
        this.setState({sum:sum+1});
        console.log(sum);//0
    }
    
   render(){
       const{sum}=this.state;
       return(
       	<Fragment>
        	<h2>当前state状态中sum的值是:{sum}</h2>   //1
			//<button onClick={this.add}></button>
        </Fragment>
       )
   }
}

//在挂载完成的钩子里更改两次sum值. 输出:0 0 1
//但是, 两次执行都是将0设置为1,在 react 内部会被合并掉，只执行一次。设置完成后 state.sum 值为 1。
//参考链接:https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/18
import React, {Component} from 'react';

export default class Demo extends Component{
    state={sum:0};
    componentDidMount(){
        const{sum}=this.state;
        this.setState({sum:sum+1});
        console.log(sum);//0
        
        this.setState({sum:sum+1});
        console.log(sum);//0
    }
    
   render(){
       const{sum}=this.state;
       return(
       	<Fragment>
        	<h2>当前state状态中sum的值是:{sum}</h2>   //1
			//<button onClick={this.add}></button>
        </Fragment>
       )
   }
}
```





```js
//案例1-3
//声明周期函数中含有我们定义的回调函数 状态的更改是同步的
import React, {Component} from 'react';

export default class Demo extends Component{
    state={sum:0};

    componentDidMount(){
        const{sum}=this.state;
        const{btn}=this;
        btn.addEventListener('click', ()=>{
            const {sum}=this.state;
            this.setState({sum:sum+1});
            console.log(sum);//1
        })
    }
    
   render(){
       const{sum}=this.state;
       return(
       	<Fragment>
        	<h2>当前state状态中sum的值是:{sum}</h2>   //1
			<button ref={c=>this.btn=c}></button>
        </Fragment>
       )
   }
}
```



```js
//案例1-4
//自定义的异步回调函数:定时器
import React, {Component} from 'react';

export default class Demo extends Component{
    state={sum:0};
	add2=()=>{
        setTimeout(()=>{
            const{sum}=this.state;
            this.setState({sum:sum+1});
            console.log(sum);//1
        })
    }
    
    
   render(){
       const{sum}=this.state;
       return(
       	<Fragment>
        	<h2>当前state状态中sum的值是:{sum}</h2>   //1
			<button onClick={this.add2}></button>
        </Fragment>
       )
   }
}
```



```js
//案例1-5
//来源:https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md#%E7%AC%AC-19-%E9%A2%98react-setstate-%E7%AC%94%E8%AF%95%E9%A2%98%E4%B8%8B%E9%9D%A2%E7%9A%84%E4%BB%A3%E7%A0%81%E8%BE%93%E5%87%BA%E4%BB%80%E4%B9%88
//答案:https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/18
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};
```







```js
//更改state的两种方法:

import React, {Component} from 'react';
export default class Count extends Component{
    state={sum:0};
	add=()=>{
        //对象式的setState
        cont{sum}=this.state;
        this.setState({sum:sum+1})
        
        //函数式的setState
        this.setState(state=>({sum:state.sum+1}))
    }
    change=()=>{
        //新状态不依赖于原状态,适用于对象式的setState
        this.setState({sum:99})
    }
    render(){
        const{sum}=this.state;
        return(
            <div>
            	<h2>当前求和为:{sum}</h2>
				<button onClick={this.add}>点我加1</button>
				<button onClick={this.change}点我将和更改为99</button>
            </div>
        )
    }
}
```





## 2. lazyLoad

### 路由组件的lazyLoad

```js
	//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
	const Login = lazy(()=>import('xxx/xxxx/test'))
	
	//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
	<Suspense fallback={<h1>loading.....</h1>}>//fallback={<Loading/>}
        <Switch>
            <Route path="/xxx" component={Xxxx}/>
            <Redirect to="/login"/>
        </Switch>
    </Suspense>
```



```js

```







## 3. Hooks

#### 1. Hooks是什么?

```
(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在{函数组件}中使用 state 以及其他的 React 特性
```

#### 2. 三个常用的Hook

```
(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
```

#### 3. State Hook

```
(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值

5. setInterval中需要使用函数式更改state,setxxx(newvalue)不起作用.
```



```js
//目前react存在的小问题
function add(){
	setTimeout(()=>{
		//setSum(sum+3); 不起作用:页面只显示一个初始值,没有自动增加.
		setSum(sum=>sum+3)
	},500)
}
```









#### 4. Effect Hook

```
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount() 
```







```js
export default function Count(){
    const[sum, setSum]=React.useState(0);
    const[name]=React.useState('初始值');
    
    function add(){
        setSum(sum=>sum+3);
    }
    React.useEffect(()=>{//useEffect有两个参数,一个是函数,一个是数组.
        console.log(1); //只要sum状态一改变,就会打印.
    },[])//监测数组:空数组意味着谁都不监测.任何的改变都不会触发didupdate.监测谁就输入谁.如果不传数组,监测所有的改变.
    
    return(
    	<div>...</div>
    )
    
}

```



```js
export default function Count(){
    const[sum, setSum]=React.useState(0);
    const[name]=React.useState('初始值');
    
    function add(){
        setSum(sum=>sum+3);
    }
   
    React.useEffect(()=>{
        const time=setInterval(()=>{
            setSum(sum=>sum+3)
        },1000)  
        return()=>{clearInterval(time)}//return 返回一个函数.添加函数的返回值,相当于componentWillUnmount,所以可以添加清除定时器操作.
    })
    //
    //这么写后果会直接指数爆炸.1.useEffect相当于componentDidMount和componentDidUpdate等钩子,
    
}

```





#### 5. Ref Hook

```
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
```



------



## 4. Fragment

### 使用

	<Fragment><Fragment> 或 <></>

### 作用

> 避免无用的嵌套层级



<hr/>

## 5. Context

### 理解

> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

### 使用

```js
1) 创建Context容器对象：
	const XxxContext = React.createContext()  
	
2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<xxxContext.Provider value={数据}>
		子组件
    </xxxContext.Provider>
    
3) 后代组件读取数据：

	//第一种方式:仅适用于类组件 
	  static contextType = xxxContext  // 声明接收context
	  const {value}=this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以使用
      import {xxxContext} from './context';
	  //const {Consumer}=xxxContext;
	  <xxxContext.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer>
```

### 备注

	在应用开发中一般不用context, 一般都用它的封装react插件

<hr/>

## 6. 组件通信方式总结

#### 组件间的关系：

- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）
- 其他关系

#### 几种通信方式：

		1.props：
			最简单的方式
		2.消息订阅-发布：
			pubs-sub、event等等(event从c#中来)
		3.集中式管理：
			redux、dva等等(dva react中路由和redux组合体体--第三方库dva)
		4.conText:
			生产者-消费者模式

#### 比较好的搭配方式：

		父子组件：props
		兄弟组件：消息订阅-发布、集中式管理
		祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)
		其他组件:pub-sub 集中式







## 案例

```

```













## 案例

### antd基本介绍

#### 文档

> https://ant.design/docs/react/use-with-create-react-app-cn



#### 按需引入

> 前提:antd.css体积大; 参考3.x版本

```sql
1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
		2.修改package.json
				....
					"scripts": {
						"start": "react-app-rewired start",
						"build": "react-app-rewired build",
						"test": "react-app-rewired test",
						"eject": "react-scripts eject"
					},
				....
		3.根目录下创建config-overrides.js
				//配置具体的修改规则
				const { override, fixBabelImports,addLessLoader} = require('customize-cra');
				module.exports = override(
					fixBabelImports('import', {
						libraryName: 'antd',//对哪个库进行按需引入
						libraryDirectory: 'es',//要按需引入的这个库,使用的是哪种模块化规范
						style: true,//对哪种文件进行按需引入.如果是布尔值,则true代表允许修改样式.
					}),
					addLessLoader({//此处按照未更新官网会报错,需要写这种形式
						lessOptions:{
							javascriptEnabled: true,//允许JS修改antd的less文件
							modifyVars: { '@primary-color': 'green' },
						}
					}),
				);
		
```



#### antd-mobile

```
https://mobile.ant.design/
```





### 复习: 请求参数

```js
1.HTTP有8大请求
2.请求方式:常用的4个: GET(查) POST(增) PUT(改) DELETE(删)
3.请求参数:
 常用的3种:
	query(查询字符串参数) 
	params 
    body(请求体参数)
 
4.body中两种参数形式: urlencoded编码形式: key=value&key=value...;json格式
5.其他:
	形如：key=value&key=value的结构，叫做urlencoded编码
	从理论上说，一次请求的3个参数，可以通过3中形式携带，但一般不这么做
	有请求体的请求（POST PUT DELETE ），一般都通过请求体携带数据


GET-带query参数:完整+精简
GET-带params参数:完整+精简
GET-带请求体(body)参数: 不能写

POST-带query参数:完整+不能简写,会导致参数丢失.
POST-带params参数:完整+精简
POST-带请求体(body)参数:完整+精简.

```



```js
//客户端

//axios发送get请求-带query参数-完整写法:
axios({
	url:'http://localhost:5000/test2',
	params:{name:'甲', age:16} //此处写的params,但携带的是query
}).then(
	response=>{console.log('请求成功了', response.data)},
    error=>{console.log('请求失败了', error)}
)

//axios发送get请求-带query参数-完整写法:
axios.get({'http://localhost:5000/test2', {params:{name:'甲', age:16}}}).then(
	response=>{console.log('请求成功了', response.data)},
    error=>{console.log('请求失败了', error)}
)

//axios发送get请求-带params参数-完整写法
axios({
    url:'http://localhost:5000/test3/甲/16/女'
}).then(
	response=>{console.log('请求成功了', response.data)},
    error=>{console.log('请求失败了', error)} 
)
//axios发送get请求-带params参数-精简写法
axios.get({'http://localhost:5000/test3/甲/16/女'}).then(
	response=>{console.log('请求成功了', response.data)},
    error=>{console.log('请求失败了', error)} 
)

//axios发送post请求-带query参数-完整写法
axios({
    url:'http://localhsot:5000/test4',
    method:'POST',
    params:{name:'甲', age:16, gender:'女'} //此处写的是params,但携带的是query参数
}).then(
	response=>{console.log('请求成功了', response.data)},
    error=>{console.log('请求失败了', error)} 
)

//axios发送post请求-带query参数-不能简写,会导致参数丢失!!!!
axios.post({'http://localhost:5000/test4', {params:{name:'甲', age:16, gender:'女'}}}).then(
	response=>{console.log('请求成功了', response.data)},
    error=>{console.log('请求失败了', error)} 
)


//axios发送post请求-带params参数-完整写法
axios({
    url:'http://localhsot:5000/test5/甲/16/女',
    method:'POST'
}).then(
	response=>{console.log('请求成功了', response.data)},
    error=>{console.log('请求失败了', error)} 
)
//axios发送post请求-带params参数-精简写法
axios.post('http://localhsot:5000/test5/甲/16/女').then(
	response=>{console.log('请求成功了', response.data)},
    error=>{console.log('请求失败了', error)} 
)

//axios发送post请求-带请求体参数-完整写法
axios({
    method:'POST',
    url:'http://localhost:5000/test6',
    //data:{name:'甲',age:16,gender:'女'} 第一种形式  json字符串形式
    data:'name=甲&age=16&gender=女'      //第二种形式 urlencoded形式
}).then(
	response=>{console.log('请求成功了', response.data)},
    error=>{console.log('请求失败了', error)} 
)

//axios发送post请求-带请求体参数-完整写法
axios.post('http://localhost:5000/test6', {name:'甲',age:16,gender:'女'}).then(
	response=>{console.log('请求成功了', response.data)},
    error=>{console.log('请求失败了', error)} 
)
```





```js
//服务端

const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());//urlencoded和json是能获取body请求体参数的中间件

app.get('/test1',(req,res)=>{
	console.log('有人请求test1了')
	res.send('我是test1返回的一些数据')
})
...
服务端获取query参数: request.query
服务端获取params参数: request.params
服务端获取body参数: request.body


app.get('/test3/:name/:age/:gender', (request, response)=>{   //params参数的获取形式
    console.log('我是test3，我接到的params参数是',request.params)
	response.send('我是test3返回的一些数据')
})
...

app.listen(8080, (err)=>{
    if(!err) console.log('服务器开启成功')
})
```





### 案例

#### 注意点

```shell
1.静态页面设置之前,需要重置css样式:reset.css
 1.1 github搜索reset, 推荐使用提交较小的minireset.css.
2.更改css样式:index.css
 1.2 更改antd-mobile样式,可能需要提高权重!import

3.手机号正则的获取 浏览器插件:FEhelp
4.跨域解决-服务器端: 
    //1.使用中间件cors
    import cors from 'cors';
    app.use(cors())
4.1 跨域解决-客户端:
	package中设置porxy或根目录下设置setProxy.js

5.state中codeTime和canClick相呼应,设置按钮失效和时间限制的思想

5.1 移动端disabled失效.

6.config文件夹的使用
  保存常量constant.js 
  保存正则reg.js
  保存路由route.js //用于专门统一管理路由

6.1 route.js
routes数组中存储着所有的路由配置,每个路由配置是一个对象
const routes=[
    {path:'/login', component:Login},
    {}
]

6.2 登录按钮的校验逻辑
6.3 获取验证码的校验逻辑

7.路由<Switch>中路由的简写形式 //jsx中批量传递
routes.map((routeObj)=>{ <Route key={routeObj.path} {...routeObj}/> })
                        
8.JSDOC注释
/**+回车

9.测试接口是否可用
 9.1使用axios.post发送请求
 9.2使用postman软件
 
10. 统一管理ajax请求
 - 发送请求,禁止在组件中立即使用axios.
 - 根目录下新建ajax文件夹,根据不同组件新建相关js文件.例如login.js verify.js
 
11.
```









