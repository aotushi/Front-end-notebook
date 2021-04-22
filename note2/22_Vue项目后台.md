### 后台模板

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



































































































































































































































