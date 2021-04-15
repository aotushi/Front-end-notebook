# 后台管理项目总结

## 1. 商品管理功能
    分类查询
    品牌管理
    平台属性管理
    SPU管理 //最小单元是参数
    SKU管理 //最小单元是商品

## 2. 使用的库
    vue
    vue-router
    vuex
    element-ui
    axios
    nprogress
    js-cookie
    lodash

## 3. Vue配置
    name
    data
    props
    computed
    watch
    methods
    mounted/created
    components

## 4. 2个重要方法:
    vm.$set()与Vue.set()
    vm.$nextTick()与Vue.nextTick()

## 5. 组件间通信
    父向子通信 / 父组件更新子组件的数据
        非函数props
        ref
        $children
    子向父通信 / 子组件更新父组件的数据
        函数props
        自定义事件
        $parent
    父子双向通信
        v-model
        .sync
    祖孙间通信
        $attrs & v-bind
        $listeners & v-on
    兄弟间通信
        全局事件总线
        vuex
    任意间通信
        全局事件总线
        vuex

## 6. element-ui
    Card: 卡片效果的块, 很简单
    Table: 列表表格组件, 最常用最复杂的组件之一
    Form: 表单组件, 包括数据收集与表单校验, 最常用最复杂的组件之一
    Select: 选择器, 基本的表单项组件
    Input: 单行输入, 基本的表单项
    Button: 按钮组件, 简单的基础的
    Popconfirm: 气泡确认框, 常用于删除操作的确认提示
    Tag: 标签, 比较简单
    Pagination: 分页组件, 与我们自定义的分页组件类似
    Drawer: 抽屉组件, 用得相对少些, 不太复杂
    Dialog: 对话框组件, 最常用最复杂的组件之一
    Upload: 文件上传组件, 封装度高, 最复杂的组件之一
    MessageBox: 消息警告框与确认框
    Message: 消息提示
    Row/Col: 行列布局
    Carousel: 轮播组件

## 7. 与后台交互
    axios二次封装
    swagger接口文件与测试接口
    定义接口请求函数模块
    整合所有接口请求函数模块并暴露
    将API挂载到Vue的原型对象上
    在组件中调用接口请求函数与后台交互

## 8. 数据处理/整理
    请求得到的数据: 整理后才保存到状态用于显示   ==> SpuForm的spuImageList
    组件间传递对象数据: 需要进行对象的浅拷贝或深拷贝  ==> 平台属性修改的取消功能
    在用户操作过程中: 需要将数据收集到特定对象或数组中, 用于提交请求的参数
    在提交请求前: 需要对收集的数据进行整理后才能完全满足接口参数的要求  spuImageList/spuSaleAttrList

## 9. 项目开发中数组常用方法

    forEach()
    map()
    filter()
    reduce()
    find()
    some()
    every()
    splice()



### 后台项目介绍

```js
使用vue-admin-template模板进行二次开发 (简洁)
```



### 基础配置

```js
//先写登录和退出登录功能

1.login静态页面
2.删除不需要的
3.login页面验证规则的修改
4.axios二次封装  //utils/request.js
5.修改代理 禁用mock,添加代理
6.修改api接口user中登录相关请求函数接口为真实接口
```



### 品牌管理增删改查

```js
//查:
1.静态页面实现, 使用el-table,先删除动态数据.添加分页器el-pagination(当前页数,总页数,每页数量,连续页数等)
2.页面加载时请求数据
3.展示数据(使用el-table中的动态data属性接收请求回来的数据进行展示)
3.1 使用作用域插槽展示结构数据,例如图片,按钮

//增加
1.实现增加的静态页面:dialog嵌套form表单和upload组件
2.实现添加动态交互和数据收集
 2.1 点击添加按钮,添加对话框显示
 2.2 upload组件中的上传地址action需要走代理,路径额外添加/dev-api.显示的是上传成功后重新请求的路径.
 2.3 点击添加按钮弹出dialog时,需要清空数据.而非在确定和取消按钮

//修改
1.修改和添加的公用一个页面,不需要重写
2.实现修改动态交互和数据收集
 2.1 收集数据在添加当中已经搞定，不需要再次写收集功能
 2.2 使用扩展运算符{...row}浅拷贝. 因为只是基本数据类型
3.点击确定发请求添加或者修改


//删除
1.使用messagebox处理删除.删除成功后重新获取数据 (messagebox-confirm是promise类型)
2.回到那一页: 正常删除哪个数据回到的还是哪个数据所在的页面.假设删除数据的那一页只有一条数据，我们需要回到前一页，而不是数据当前页
this.getTrademarkList(this.trademarkList.length>1?this.page:this.page-1)




//遇到的问题
浅拷贝还是深拷贝:基本数据类型使用浅拷贝即可
删除数据后判断是否要停留在那一页: 根据当前页数量是否大于1来决定页码是否为1
组件复用: 修改和添加.  使用同一个el-dialog. 
```



### 平台属性管理

```js

//实现页面功能: 使用el-card组件,放置三级联动类组件

//3级分类组件的实现:
一加载第一个分类就要有数据，所以我们要mouted发请求拿数据给第一项分类去遍历展示数据
	选中了第一项当中的某个分类，才会发请求拿第二项的数据进行遍历展示
	选中了第二项当中的某个分类，才会发请求拿第三项的数据进行遍历展示
	选中第一项需要清空第23项的数据
	选中第二项需要清空第三项的数据
	选中123项都要和父组件通信，把id传递到父组件当中 自定义事件(id,level)
    
    父组件当中判断level保存三个id
	在父组件获取子组件传递过来的数据，保存1级id的时候需要清空父组件的23级id及属性列表数据
	在父组件获取子组件传递过来的数据，保存2级id的时候需要清空父组件的3级id及属性列表数据
    在父组件获取子组件传递过来的数据，保存3级id的时候需要发请求获取属性数据
    
//查-属性列表页
1.数列列表页静态页面实现: el-table 添加按钮
2.动态页面实现: 属性值列表使用vfor与作用域插槽.
3.操作的按钮，使用的是之前封装的HintButton，把之前的a标签改为el-tooltip ???
    
//增
1. 实现增加属性的静态页面
   增加属性的静态页面和列表页都是在第二个card当中，但是同时只能显示一个
   用两个div，一个div包含列表页相关的，另外一个包含添加和修改的页面
   定义标识数据'isShowList'控制card当中显示的是哪一个 必须使用vshow
   增加属性的静态页面包含:一个行内form  两个按钮  一个table  两个按钮  尝试自己动手写写

2.增加属性页面的动态交互
  点击列表页面的添加属性按钮，切换到添加页面，就是把isShowList改为false
  点击添加页面的取消按钮，再切换回到列表页面，就是把isShowList改为true
  列表页添加属性按钮和添加页面的添加属性值按钮的可操作性 disabled
  
3.增加属性动态收集数据
   使用v-model
  3.1添加属性的属性值列表，一上来是一个空数组
  3.2添加属性值时:属性值的列表（数组）当中添加一个属性值空对象,占位使用.并实现自动聚焦
  3.3出现了输入框之后，用户输入新添的属性值名称以后,收集属性值对象
  3.4当用户失去焦点或者回车的时候，这个属性值对象才算完成收集
  3.5用户添加完成，点击取消再次点击添加原来的数据还在的bug: '点击添加'按钮,清空收集的对象
    //为新添加的input自动获取焦点
    addAttrValue(){
        this.arrtForm.attrValueList.push({addId:this.arrtForm.id, valueName:'', isEdit:true});
        //让新添加的这个属性值input自动获取焦点 新添加的永远是最后一个
        this.$nextTick(()=>{
            this.$refs[this.attrForm.attrValueList.length-1].focus();
        })
    }
  



//改   响应式修改this.$set 
1.实现属性修改的静态页面->和添加用的同一个div结构.
2.修改属性的动态交互:点击修改按钮,切换修改页面,并把当前数据row带上.
3.修改属性值的收集,和添加收集一样不需要再写.
4.属性值添加模式和查看模式. 先添加的使用input标签,已经存在的使用span标签,可以相互切换.每个属性值都有这两个模式:编辑模式,查看模式.
 4.1 为每个属性值添加'模式识别数据',用于确定属性值当前是input还是span.
     添加每个属性值时,都添加一个属性isEdit：true，代表添加的属性值是编辑模式
     修改属性的时候，遍历每个已有的属性值对象都添加一个属性isEdit = false,必须使用$set才能实现响应式.
     使用条件渲染vif搭配isEdit来决定显示input还是span
 4.2 响应式对象数据属性的添加和删除 
 4.3 模式的切换
     a.在input上我们需要添加失去焦点和回车事件，切换为查看模式，本质就是修改isEdit属性值.input在切换为span之前要判断数据合法性(数据不为空,除了自己是否还有相同重复的属性值)
     b.在span上我们需要添加点击事件，切换为编辑模式，本质就是修改isEdit属性值	
 4.4 样式问题(input输入框过大,span点击区域过小,自动获取焦点)
     input输入框大的问题   直接添加size = "mini"; pan点击区域过小的问题    直接把span变为block  宽高100%
     自动获取焦点:
     a.什么时候要自动获取焦点: 1、添加新属性值的时候  2、从span变为input的时候
     b.如何获取: el-input需要添加ref,ref的值是各自的下标$index. 需要搭配this.$nextTick
      编辑模式下自动获取焦点: this.$nextTick(()=>{this.$refs[index].focus()})
      添加按钮自动获取焦点: this.$nextTick(()=>{this.$refs[this.attrForm.attrValueList.length-1].focus()})


showUpdateDiv(row){
    this.isShowList=false;
    this.attrForm = cloneDeep(row);
    this.attrForm.attrValueList.forEach((item)=>{
        //this.$set 或者 Vue.set 为响应式对象添加新属性才是响应式属性
        this.$set(item,'isEdit', false);
    })
}




<el-input
 :ref="$index"
 v-if='row.isEdit'
 v-model = 'row.valueName'
 @blur='toLook(row)'
 @keyup.enter.native = 'toLook(row)'></el-input>
<span v-else @click=toEdit(row,$index) style="display:block;width:100%;">{{ row.valueName }}</span>

toLook(row){
    //1、失去焦点或回车,要判定数据中是否有属性值名称,如果没有值或者值不合法，不会变为span
    if(row.valueName.trim()===''){row.valueName=''; return}
    //2、还得判断当前输入的这个属性值名称，在除去自身以外，其余的属性值当中是否存在，如果存在就重复了，不能变为span
    let isRepeat = this.attrForm.attrValueList.some((item)=>{
        if(item!== row){
            return item.valueName === row.valueName;
        }
    });
    if(isRepeat){
        this.$message.info('输入属性值不能重复');
        row.valueName = '';
        return;
    }
    row.isEdit = false;  //编辑模式input切换为span查看模式
}

toEdit(row,index){
    row.isEdit = true;
    //从span变为input我们需要自动获取焦点
    //直接写this.$refs[index]，input标签其实还没有创建成功，所以报错this.$refs[index]是undefined
    this.$nextTick(()=>{
        this.$refs[index].focus();
    })
}



    
 

//删-删除属性值
1.不用发请求,使用气泡确认框el-popconfirm  事件名称是onConfirm,官网写错了
//删除-属性
1.点击列表页删除按钮删除属性
2.发请求
3.成功 提示 重新获取数据
4.失败 提示


//保存

    //保存按钮(获取参数->整理参数->发请求->成功干嘛,失败干嘛)
     async save(){
         //1.获取参数
         let attr = this.attrForm;
         //2.整理参数: 
         //清除属性值为空串的项;清除自定义属性isEdit.
         attr.attrValueList = attr.attrValueList.filter((item)=>{
             if(item.valueName!==''){
                 delete item.isEdit;
                 return true;
             }
         })
         //.属性值列表如果没有属性值,不发请求
         if(attr.attrValueList.length===0){
             this.$message.info('必须有属性值才能保存');
             return;
         }
         //3.发请求
         try{
             //4.成功
             await this.$API.attr.addOrUpdate(attr);
             this.$message.success('保存成功');
             this.isShowList = true;
             this.getAttrList();
         }catch(error){
             //失败
             this.$message.error(error.message)
         }
     }

//其他
处理保存按钮的可操作性  处理三级联动的可操作性
CategoySelector组件内部的form使用disabled disabled的值恰好和父组件的isShowList是相反的
```





### SPU增删改查

```js
SPU 最小单元是参数
SKU 最小单元是商品
一个SPU下面有多个对应的SKU

平台属性是让用户搜索用的
销售属性是让用户买东西用

//查
1.spu列表页的静态页面
 结构:第一个card里面是，三级联动组件CategorySelector,第二个card里面是列表页+分页器
2.动态数据展示 
3. 3个页面切换
  spu列表页 添加和修改SPU页面  以及添加SKU页面.三个页面共享第二个card，同时只能显示一个
  列表页在一个div,剩余的两个页面做成2个组件  SpuForm和SkuForm
  data当中设计两个数据  isShowSpuForm和isShowSkuForm控制三个页面的显示和隐藏切换
  对三个按钮添加点击事件达成三个页面之间的切换
  <div v-show="!isShowSpuForm&&!isShowSkuForm">
  <SpuForm v-show="isShowSpuForm" :visible.sync="isShowSpuForm"/> 
      //子组件中点击取消this.$emit('update:visible',false)
  <SkuForm v-show="isShowSkuForm" :visible.sync="isShowSkuForm"/>
   :visible是vue当中的一个写法,指的是属性绑定，表示弹框/组件的显示隐藏，当：visible的值诶true时，弹框显示，当为false时，弹框隐藏。


//改-修改spu
1.搭建修改spu和添加spu的静态页面 同一个页面<-数据双向绑定
2.在显示SpuForm的时候需要发送4个请求获取初始化数据
3.在父组件当中通过$ref获取到子组件对象，调用子组件对象的一个方法，在这个方法当中去发请求
4.将获取到的动态数据初始化展示
5.展示销售属性 el-tag 查看和编辑模式
 5.1 这次编辑模式和查看模式每个属性只有一个，而不是每个属性值都有
6.发请求更新数据 返回父组件
 
 
//增
1.点击添加spu要显示SpuForm子组件
2.在父组件当中通过$ref获取到子组件对象，调用子组件对象的一个方法

//删
1.气泡确认框
2.请求
3.成功:信息提示,重新获取数据,注意页码.  失败提示

//注意事项
1. 三个页面共享第二个card，同时只能显示一个: 两个标识数据
2. .sync组件通信. 点击子组件取消按钮后,组件隐藏
3. 后台数据属性和组件属性存在差异,如何更新
4. el-select组件的使用: 数据收集,数据格式设计 <el-option :value="`${unUseSaleAttr.id}:${unUseSaleAttr.name}`">
5. 根据已有的销售属性列表和所有的销售属性列表计算出未使用的销售属性列表
computed:{
    //saleAttrList 完整的销售列表  spuSaleAttrList 自定义的销售列表
    unUseSaleAttrList(){
        return this.saleAttrList.filter(saleAttr=>{
            return this.spuForm.spuSaleAttrList.every((spuSaleAttr)=>{
                return spuSaleAttr.saleAttrName !== saleAttr.name;
            })
        })
    }
}

```





### SKU增删改查

```js
//略
```



### 其他商品管理功能

```js
//spu列表中sku列表展示 使用loading组件的功能  加载数据时显示动效。

//表格组件-树形数据懒加载

<el-table
      border
      :data="categorys"
      style="width: 900px;margin-bottom: 20px;"

      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :row-key="getRowKey"
      :row-class-name="tableRowClassName"
    >
    <!-- 
      lazy代表是否懒加载
      :load="load"  懒加载的回调
      :tree-props 固定写法  是否是树型 前面有没有>
      :row-key="getRowKey"  设置表格当中每行的标识数据key
      :row-class-name="tableRowClassName" 为我们的行设置单独的样式
    -->
异步加载下一级分类列表显示
    */
    async load (row, treeNode, resolve) {
      // console.log('---', row, treeNode)
      if (row.level===1) {
        const categorys2 = await this.getCategory2(row)
        resolve(categorys2)
      } else if (row.level===2) {
        const categorys3 = await this.getCategory3(row)
        resolve(categorys3)
      }
    },
        
        
        
//sku管理 栅格系统+抽屉
 布局栅格系统 过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
 <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>

//sku管理 

scoped添加和不添加的区别
			scoped不写，那么当前组件的样式会影响其它组件
			scoped写上，把样式作用在当前组件内部及子组件的根元素身上 *******************


		
			scoped如何把样式作用在本组件和子组件根元素身上
				加了scoped就会有唯一的一个标识值，而这个标识数据会作为被影响到的元素的属性
				这个元素的样式会在选择器的最右侧添加这个属性选择器，交集选择器。

				不加scoped   
					h2{
						color:hotpink
					}

				加了scoped
					h2[data-v-6c1c67aa]{
						color:hotpink
					}

		
			
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



### 路由

```js
//略
```

















































