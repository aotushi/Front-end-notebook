##   1102

### DOM介绍

```html
- DOM就是文档对象模型
- DOM描述了处理网页内容的方法和接口
- window是浏览器窗口对象,所有东西都被当做是window的子对象
- 文档对象document是window下的一个属性,代表整个DOM文档对象
- 文档树(dom树) 以HTML为根节点,形成的一颗道理的树状结构.这个树上所有的东西叫做节点.一共有12种节点类型,常用的是4种.
 - 节点分类:
 		元素节点 元素/标签
		属性节点 属性
        文本节点 文本
        注释节点 注释
 - 这些节点我们通过DOM方法去获取或者操作使用,就称作DOM对象       
        

```

对DOM的所有操作都是以==document==对象开始.它是DOM的主'入口点',从它我们可以访问任何节点.

最顶层的树节点可以直接作为document的属性来使用:

\<html> = document.documentElement    

\<body> = document.body 

\<body> = document.head

**可能的问题**

document.body的值可能是null

脚本无法访问在运行时不存在的元素.尤其是如果一个脚本在head标签中,那么脚本是无法访问到document.body的,因为浏览器没有读到它.









### window.onload事件

```JavaScript
- 等待页面资源加载完成事件
- 一般情况下我们都是等待页面加载完成后才去操作DOM元素.如果页面没有加载完成就去获取DOM元素,有可能获取不到.
- 页面加载完成事件 加载完所有外部资源
- 当页面加载完成后 window.onload的回调函数 会自动执行

- 回调函数
	- 你定义 没调用 自动执行
```



```html
<script>
    window.onload = function(){
    	var pNode = document.getElementById('pNode');
	}
</script>    
```



### 事件的3大要素

```JavaScript
事件的3大要素:
事件的承受方 为事件源
事件的类型: 单击 移入 移出 移动 键盘 获得焦点 失去焦点
事件源承受事件后 给出的反馈:回调函数//事件源.事件名称 = 回调函数
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<button id="btn">按钮</button>
<script type="text/javascript">
    window.onload = function () {
		//获取页面元素（事件源）
        //通过id值来访问页面元素  返回的结果是一个对象 我们称之为dom对象
        var btnNode = document.getElementById('btn');
        var num = 0;
    
		//事件源.事件名称 = 回调函数
        btnNode.onclick = function () {
            num++; 
            console.log(num)
        }
    }
</script>
</body>
</html> 
```





### 操作元素通用属性

#### 1.获取DOM对象

#### 2.添加本身具有的属性(对象.属性, 对象[属性])

```html
- 通过id值获取元素的DOM对象(事件源)
document.getElementById('idname')

- 通过DOM对象为元素添加属性(天生固有属性)
1.dom对象.属性
2.dom对象[属性]

<!doctype html>
<html lang = 'en'>
<head>
	<meta charset='utf-8' >
    <title>title</title>
    <style>
        img{width:150px;}
    </style>
</head> 
<body>
	<a href="https://www.baidu.com" id=aNode>百度一下</a>
    <img src='1.jpg' id=imgNode>
    <button id="btn">按钮</button>
    <script>
    	window.onload = function(){
            //通过id获取元素的dom对象
            var aNode=document.getElementById('aNode');
            var btnNode = document.getElementById('btn');
            var imgNode = document.getElementById('imgNode');
            //给按钮绑定事件
            btnNode.onclick = function(){
                //操作a标签的href属性  获取的标签是dom对象,标签属性相当于对象的属性
                aNode.href = 'https://jd.com';
               //aNode['href'] = 'https://jd.com';
                imgNode.src = '2.jpg';
                imgNode[src] = '2.jpg';
            }
        }
    </script>
</body>    
</html>
```



### 实例: 图片来回切换(2种方法)

```html
- 使用DOM实现图片来回切换
 - 标准位
 - 变量取模

- 方法1:标准位

- 使用(标志位), 使得图片可以通过点击button来回切换
- 在没有语义的情况下不会过度关注标志位变量的默认值,而是区分好标志位不同状态对应的逻辑
- 标志位用法是在10.24日讲解for循环,质数时用到的

代码更新:
 var flag = true;// true代表图片1,false代表图片2
<script>
btnNode.onclick = function(){
    if(flag){
        imgNode.src = '2.jpg';
    }else{
        imgNode.src = '1.jpg';
    }
    flag = !flag;
}
</script>


- 方法2:  定义一个变量 使用取模换算
<script>
var num = 0;
btnNode.onclick = function(){
    num++;
    imgNode.src = num%2 + 1 + '.jpg'; //3张图片就除以3取模
}    
</script>
```







### 操作元素特殊属性

> 案例:点击按钮修改多选框 选中

#### 案例:input多选框切换

```html
- 案例,点击按钮,使input多选框来回切换

- 方法1:使用标准位
<body>
 <input type='checkbox' id='checkNode'>
 <button id='btn'>按钮</button>   
 <script>
 	window.onload = function(){
        var btnNode = document.getElementById('btn');
        var checkNode = document.getElementById('checkNode');
        var flag = true; //标志位
        
       btnNode.onclick = function(){
            if(flag){
            	checkNode.checked = false;
        	}else{
            	checkNode.checked = true;
        	}
        	flag = !flag;
       }
    }   
 </script>    
</body>    

- 方法2: 
更新: 只要遇到属性名和属性值都相同的属性,我们统一转换成布尔值操作

btnNode.onclick = function(){
	checkNode.checked = !checkNode. v;
}
```



#### 切换类名

```html
- 类名使用className代替class,class在JS中是保留字

```



```html
<style>
    .p1{backgorund:pink;}
    .p2{background:yellowgreen;}
</style>  
<body>
    <p id='pNode' class="p1">第一个p标签</p>
</body>

<script>
	window.onload = function(){
        var pNode = document.getElementById('pNode');
        pNode.onclick = function(){
            //alert(1); 测试dom方式,如果能运行,证明到这一步是对的
            //通过更换类名来实现p标签背景颜色改变
            //pNode.class = 'p2'; 错误,class为js保留字 在es6当中成为了 类的关键字,所以我们不能通过访问class这个属性 来操作元素的类名.我们需要使用 className
            pNode.className = 'p2';
            //或者 pNode['classNmae'] = 'p2';
            
        }
    }
</script>
```





### 操作元素自定义属性

#### setAttribute(属性名,属性值)

#### getAttribute(属性名)

```Markdown
- 根据属性是否天生就存在元素身上的额情况,我们可以将属性分为1.固有属性(天生属性), 2.自定义属性(自己随便添加).

- 对于固有属性,可以通过 对象.属性名和对象['属性名']来获取或设置

- 对于自定义属性,无法使用以上两种方法,只通过两个固定方法来操作:
 - setAttribute 设置自定义属性 两个参数 参数1,要设置的属性名称; 参数2,要设置的属性值
 - getAttribute 获取自定义属性 一个参数:要读取的属性名称 返回对应的属性值 返回结果为字符串
 
 - 固有属性可以通过自定义属性的2个方法来操作,但一般还是按照对象.属性名和对象['属性名']的方式
 - 使用setAttribute和getAttribute操作class类名,直接使用class来获取或设置.不使用className.
 


```



```html
<style>
    <p id='pNode' class='p1' aa='bb'>这是一个p标签</p>
    <button id="btn">按钮</button>
</style>

<script>
window.onload = function(){
    var pNode = document.setAttribute('aa', 'bb');
}

</script>
```





### 获取元素的其他方式

#### document.getElementByClassName 数组

#### document.getElementByTagName 数组

#### document.querySelector()  #id .className  

#### document.querySelectorAll(#id)

```html
<body>
<p id="p1" class="pItem">11111</p>
<p id="p2" class="pItem">22222</p>
<p id="p3" class="pItem">33333</p>
<p id="p4" class="pItem">44444</p>
<p id="p5" class="pItem">55555</p>
<div id="p6" class="pItem">66666</div>
<div class="box">
    <p>今天晚上吃点啥</p>
</div>
<script>
	window.onload = function(){
        // 1. 通过id获取元素 
        var p6Node = document.getElementById('p6');
        
        // 2. 通过class获取元素 返回一个伪数组,内部包含的是含有这个class的元素集合(nodelist)
        //当我们遇到元素集合时,如果想使用dom对象的方法或属性是不能直接使用的.
        //需要通过 遍历 或 索引取值的方式访问内部的dom对象
        var pItems = document.getElementByClassName('pItem');
        
        // 3. 通过标签名称获取元素 返回一个伪数组对象,内部包含的是这个标签名称的 元素集合.
        //当我们遇到元素集合时,如果想使用dom对象的方法或属性是不能直接使用的.
        //需要通过 遍历 或 索引取值的方式访问内部的dom对象
        var pList = document.getElementsByTagName('p');
        
        //我们通过类名或标签名称去查找元素时(或者所有能获取集合的方式),无论查询结果是一个对象还是一个集合,都是以伪数组对象返回.
        
        
        //推荐方式 querySelector querySelectorAll 直接使用选择器来查询元素
        //querySelector 查找单个元素 返回结果 直接为dom对象 就算选择器的范围是一个集合,只返回第一个  ****
        //querySelectorAll 用来查询元素集合 无论查询结果几个 都是讲匹配的dom对象,放在伪数组中       ****
        
        var pNode = document.querySelector('#p2');
        
        var pList = document.querySelectorAll('#p2');
        
        
        //可以将已获取的dom对象,再查询其内部的对象
        var boxNode = document.querySelector('.box');
        var pTask = boxNode.querySelector('p);
    }    
</script>    
</body>
```



### 获取元素方式

```HTML
querySelector()
querySelectorAll()
getElementsById()
getElementsByTagName()
getElementsByClassName()
getElementsByName()

```







### 修改元素内容

```html
- innerText 
	获取元素内容,但只会获取文本,不会获取内部标签
	设置元素内容,如果文本中有标签,会作为文本被渲染,标签不会被解析
	

- innerHTML
	获取元素内部 标签+文本
	设置元素内容,文本中的标签,可以被渲染
	这也是我们向页面中添加元素的方法之一
	

- 当设置或读取的内容为纯文本,两种方法没有区别

- innerText
	获取或设置元素的内容  标签不会被渲染或者获取  所有浏览器都认识   只对可见元素有效
- textContent
	获取或设置元素的内容  标签不会被渲染或者获取  高级浏览器都认识   对隐藏元素也有效 但依然不显示

以上两个属性指的对可见元素是否有效,说的是占位隐藏(display:none; visibility:hidden;)
```





### 兼容性封装获取元素文本

```html
- 封装一个函数 既能获取元素的文本也能设置一个元素的文本
- 在设置和获取的时候  能够使用textContent的情况下 优先使用textContent  如果不能使用 再使用innerText


```



```JavaScript
<p id="pNode">今天晚上吃点啥</p>
<button id="btn">按钮</button>


window.onload = function(){
    var pNode = document.getElementById('pNode');
    var btnNode = document.getElementById('btn');
    btnNode.onclick = function(){
        setOrGetContent(pNode);
        setOrGetContent(pNode, '今天吃火锅');
    }
    
    function setOrGetContent(node, content){
        if(arguments.length == 1){
            if(node.textContent){
                return node.textContent;
            }else{
                return node.innerText
            }
        }else if(arguments == 2){
            if(content.textContent){
                node.textContent = content;
            }else{
                node.innerText = content;
            }
        }
    }
}
```





### 排它思想实现文本切换

```html
<body>
<p>哈哈哈1</p>
<p>哈哈哈2</p>
<p>哈哈哈3</p>
<p>哈哈哈4</p>
<p>哈哈哈5</p>
<p>哈哈哈6</p>
    
<script>
   window.onload = function(){
       var pList = document.querySelectorAll('p');
       for(var i=0; i<pList.length; i++){
           pList[i].onclick = function(){
               for(var i=0; i<pList.length; i++){
                   pList[i].innerHTML = '呵呵呵';
               }
           }
           this.innerHTML = 'gegege';
           //this在事件回调当中,指向当前触发事件的事件源
           //在使用排它思路,去处理如高亮切换等逻辑 一定是先操作集合后操作当前事件源
       }
   } 
    
</script>    
</body>
```



### this是什么

```html
- this在事件的回调中,指向当前触发事件的事件源

- 以函数方式调用时,this是window
- 以方法形式调用时,this是调用方法的对象
- 以构造函数调用时,this是新创建的对象
- 以apply()和call(),bind()函数调用时,this是它们的第一个参数
- 箭头函数的this,由外层作用域决定

```







## 1103

### 移入移出事件

```JavaScript
- 与css当中使用hover伪类实现的移入移出相比,JS当中的移入和移出是分开操作的,如果移入修改了某些内容,移出时是不会自动还原的
```



```JavaScript

- 第一种方法
window.onload = function(){
    var boxNode = document.querySelector('.box');
    boxNode.onmouseenter = fucntion(){
        console.log('移入');
        this.style.background = 'skyblue';
    }
    boxNode.onmouseleave = function(){
        console.log('移出');
        this.style.background = 'pink';
    }
}


- 第二种方法
.boxNode = document.querySelector('.box');
boxNode.onmouseover = function(){
    console.log('移入');
}
boxNode.onmouseouter = function(){
    console.log('移出');
}

-两种区别:经过子元素,是否会重复触发一个事件

onmouseover和onmouseouter 可以触发事件流

nomouseenter和onmouseleave 日常使用的多

```



### 事件流

```JavaScript

.boxNode = document.querySelector('.box');
boxNode.onmouseover = function(){
    console.log('移入');
}
boxNode.onmouseouter = function(){
    console.log('移出');
}

- 事件流:
当一个元素触发某些事件时,会向上一级传播,哪一层有回调函数,哪一层回应. 叫做事件流
```





### 修改元素样式

```html
- 通过JS修改的样式,都为行内样式 //选择器权重高
- 设置样式会出现在行内,读取样式也只能读取行内样式(能读非行内样式,但是需要加操作)
- css中所有原本样式名称上带有横杠的,一律使用小驼峰命名法
```



```JavaScript
- 格式:
 对象.style.属性 = '新值';
例: 变量.style.backgroundColor = '新值';
```





### 幽灵按钮

```JavaScript
- 使用鼠标移入移出来改变元素的style属性


```



### 二级菜单切换

```html
<ul class="list clearFix">
    <li>男装
        <ul class="item">
            <li>衬衫</li>
            <li>裤子</li>
            <li>鞋</li>
        </ul>
    </li>
    <li>女装
        <ul class="item">
            <li>衬衫</li>
            <li>裤子</li>
            <li>鞋</li>
        </ul>
    </li>
    <li>电器
        <ul class="item">
            <li>衬衫</li>
            <li>裤子</li>
            <li>鞋</li>
        </ul>
    </li>
</ul>

<script>
 window.onload = function(){

        var items = document.querySelectorAll('.item');
        var lists = document.querySelectorAll(('.list>li'));


        for(var i=0; i<lists.length; i++){
           lists[i].index = i;			
            //用for给li添加index属性索引,以实现和二级ul下标对应
		    //
            
            //lists[i].onclick = function(){
            //    console.log(this.index);
            //} 检查一级ul下的li的索引是否和index属性一一对应
           lists[i].onmouseenter = function(){
               items[this.index].style.display = 'block';
               //为什么不用i代替this.index? 
               //循环都执行后才会给每个li绑定事件.当触发事件时,外层循环早已执行完.i的值是循环终止的值.在循环外是i+1. 
           }//循环操作绑定事件回调的时候,在回调内部一定不能使用外部循环的变量,因为它一定是最后一个数
           lists[i].onmouseleave = function(){
               items[this.index].style.display = 'none';
           }
        }

    }
</script>

```



### 键盘事件

```JavaScript
- 键盘事件分为onkeyup(键盘抬起)和onkeydown(键盘按下)两种
- 实际开发中,onkeyup用的多一些.因为在一次交互逻辑中,抬起事件只会被触发一次,不会反复调用回调函数.但是onkeydown事件,如果不抬起键盘,会一直触发
- 判断用户输入哪个键
- 通过事件对象上一个叫做keycode的属性,来判断当前的按键
- 高级浏览器中,事件对象会作为回调函数的第一个形参传递过来供我们使用 常见名字event ev e
```



```html
<input type='text'>
<scirpt>
window.onload = function(){
    var inputNode = document.querySelector('input');
    inputNode.onkeyup = function(event){
    //通常判断按键时,直接写一个if,对按键进行判断,然后将后续逻辑写在if里面
    	if(event.keycode === 13){  //enter键的keycode值是13
    		this.value = '';	   //清空事件源input标签的内容
    		//this.value value的值是字符串
    		}
    	}
    }
</scirpt>
```



### 光标事件

```JavaScript
- 获得焦点 onfocus
- 失去焦点 onblur
```



```javascript
- 案例: 输入框得到焦点 背景色变pink 文字颜色

window.onload = function(){
    var inputNode = document.querySelector('input');
    
    inputNode.onfocus = fucntion(){
        console.log('获得焦点');
        this.style.backgroundColor = 'pink';
        this.style.color = 'yellow';
    }
}
```



### 爱好选择器

```html
- if表达式的结果为true和false,可将直接表达式赋值给执行语句 缩减语句

<input type="checkbox" class="checkAllBox">全选/全不选
<br>
<input type="checkbox" class="item">学习
<input type="checkbox" class="item">买东西
<input type="checkbox" class="item">滑雪
<input type="checkbox" class="item">打游戏
<br>
<button class="btn1">全选</button>
<button class="btn2">全不选</button>
<button class="btn3">反选</button>


<script>
    window.onload = function(){
        var checkbox = document.querySelector('.checkAllBox');
        var items = document.querySelectorAll('.item');
        var btn1 = document.querySelector('.btn1');
        var btn2 = document.querySelector('.btn2');
        var btn3 = document.querySeletocr('.btn3');
        
        //全选和全不选
        btn1.onclick = function(){
            checkbox.checked = true;
            for(var i=0; i<items.length; i++){
                items[i].checked = true;
            }
        }
        btn2.onclick = function(){
            checkbox.checked = false;
            for(var i=0; i<items.length; i++){
                items[i].checked = false;
            }
        }
        //反选
        btn3.onclick = function(){
            for(var i=0; i<items.length; i++){
                items[i].checked = !items[i].checked;
            }
            //反选情况2:当反选按钮实现4个全选时,更新上面box状态
            var num = 0;
            for(var i=0; i<items.length; i++){
                if(items[i].checked){
                    num++;
                }
                //if(num === items.length){
                //    checkbox.checked = true;
                //}else{
                //    checkbox.checked = false;
                //} 使用如下语句代替if else判断
                checkbox.checked = num==items.length;
                
            }
            
        }
    }
</script>    
```



```js
# 爱好选择器 使用封装函数实现第三部分全选更新上面box

btn3.onclick = function(){
	for(var i=0; i<items.length; i++){
        items[i].checked = !items[i].checked;
    }
    checkAll();
}

for(var i=0; i<items.length; i++){
    items[i].onclick = function(){
        checkAll();
    }
}

function checkAll(){
    var num = 0;
    for(var i=0; i<items.length; i++){
        if(item[i].checked){
            num++;
        }
        checkAll.checked = num==items.length;
    }
}
```





## 1104



### 节点的概念和查找

**什么是节点**

文档树所有包含的东西都可以称作节点

**节点的分类**

元素 文本 属性 注释

元素内的文本形成**文本节点**,被标记为==#text== .一个文本节点只包含一个字符串.它没有子项,并且总是树的叶子.

请注意文本节点的特殊字符:

* 换行符 `↵`（在 JavaScript 中为 `\n`）
* 空格: `␣`

空格和换行符都是完全有效的字符,它们形成文本节点并成为DOM一部分.只有两个顶级排除项:

1.==<head>==之前的空格和换行符均被忽略.

2.==</body>==之后不能有空格.如果在其后放置东西,会被自动移动到body内,并处于body的最下方,因为HTML规范要求所有内容必须为于body内.



**注意事项**

按照DOM规范,表格必须具有==<tbody>==. 但HTML文档却忽略了它,浏览器在创建DOM时,自动创建了==<tbody>==.



### 查找元素的其他方式

#### 节点:

换行符会被当做文本节点,当文本连续时中间没有元素分割,换行与否都会当做一个节点

#### 子节点和子元素

##### childNodes(儿子节点)

拿到某个元素子节点:包括元素,文本,注释节点

高级浏览器: 元素, 文本(文本,空格,换行), 注释

低版本浏览器: 元素, 文本(不包括空格和换行), 注释

**实例**

参考下面的案例:

| 节点类型 | nodeName   | nodeType | nodeValue |
| -------- | ---------- | -------- | --------- |
| 文本节点 | #text      | 3        | 文本内容  |
| 元素节点 | 全大写英文 | 1        | null      |
| 注释节点 | #comment   | 8        | 注释内容  |



##### children

拿到的是某个元素的子元素节点

高级浏览器: 元素

低版本浏览器: 元素, 注释



##### 两者实例比较

```HTML
<div class="box">
    hahahaha
    <h2>哈哈哈</h2><p>今天中午吃点啥</p>
    <span>大米饭</span>
    <div>明天我休息了</div>
    <!--今天挺冷的-->
</div>
<script type="text/javascript">
    window.onload = function () {
        var boxNode = document.querySelector('.box');
        console.log(boxNode.childNodes);
        console.log(boxNode.children);

    }


NodeList(10) [text, h2, p, text, span, text, div, text, comment, text]
HTMLCollection(4) [h2, p, span, div]   
```





#### 获取元素的子节点和子元素

> 封装一个筛选所有子元素节点的方法

```html
<div class="box">
    hahahaha
    <h2>哈哈哈</h2><p>今天中午吃点啥</p>
    <span>大米饭</span>
    <div>明天我休息了</div>
    <!--今天挺冷的-->
</div>

<script>
 window.onload = function (){
     var boxNode = document.querySelector('.box');
     
     function allchildElementNodes(node){
         var arr = [];//声明一个数组,作为存储所有子元素节点的容器
         //遍历当前所有的子节点,通过判断nodeType是否为1 来确定是否加入数组
         for(var i=0; i<node.childNodes.length; i++){
             if(node.childNodes){
                 arr.push(node.childNodes[i]);
             }
         }
         return arr;
     }
     var result = allChildElementNodes(boxNode);
     console.log(result);
     
     //获取子元素节点 返回所有子元素节点 低版本浏览器会返回元素和注释节点
     console.log(node.children);
 }   
    
</script>    
```







### 查找元素的其他方式2

#### 查找子元素

firstChild 第一个子节点

firstElementChild 第一个子元素节点  //从父元素的视角进行获取  连标签也会获取

lastChild 最后一个子节点

lastElementChild 最后一个子元素节点

previousSibling 上一个兄弟节点    //从兄弟元素角度进行获取

previousElementSibling 上一个兄弟元素节点

nextSibling 下一个兄弟节点

nextElementSiling 下一个兄弟元素节点

#### 查找父元素

parentNode 获取父节点

parentElementNode 获取父元素节点



**总结**  ???

> 在获取某个元素的父元素时,以上的parentNode和parentElementNode方法, 得到的结果一样
>
> 所有获取元素节点的方式 都是高级浏览器生效 低级浏览器不能使用
>
> 所有获取节点的方式(不分类型的) 都是所有浏览器通用的.
>
> 父节点必须是元素节点



### 封装获取第一个子元素节点的方法

```html
<div class="box">
    hahahaha
    <h2>哈哈哈</h2><p>今天中午吃点啥</p>
    <span>大米饭</span>
    <div>明天我休息了</div>
    <!--今天挺冷的-->
</div>


<script>
    window.onload = function(){ 
        var boxNode = document.querySelector('.box');
        
        function getFirstElementChild(node){
            if(node.firstElementChild){
                return node.firstElementChild;
            }else{
                var result = node.firstElementChild
                while(result!==0 && reuslt.nodeType!==1){
                    result = result.nextSibling;
                }
                return result;
            }
        }
</script>    
```







### 创建节点3种方式

```html
<div class="box">
    <h2>哈哈哈</h2>
</div>

<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        //第一种方式
        document.write('<h1>文本内容会覆盖页面</h1>');
        
        //第二种方式
        boxNode.innerHTML = boxNode.innerHTML + '<h1>文本内容</h1>';
        //简化版
        boxNode.innerHTML += '<h1>文本内容</h1>';
        
        //第三种方式 开发中最常用的 适用于循环结构
        //1.创建节点 createElement 传递的参数为:标签名称 这个方法返回的就是创建好的这个标签的dom对象
        var hNode = document.creatElement('h1');
        //2.操作这个节点
        hNode.innerHTML = '文本内容';
        //3.将这个dom对象放入到元素中
        boxNode.appenChild(hNode);
    }
</script>
```



### 创建元素节点比较

```HTML
createElement 适用于添加可循环的数据

innerHTML  适用于不可循环区域
```





### 创建节点案例

```html
<div class='box'>
</div>

<script>
	windown.onload = function(){
        var boxNode = document.querySelector('.box');
        var arr = ['吃饭','睡觉','滑雪','打鼓','桌游'];
        
        str = '<ul>';
        for(var i=0; i<arr.length; i++){
            str += '<li>'+arr[i]+'<\li>';  
    }
        str += '<\ul>';
        console.log(str);
}
</script>
```







### 节点增删改

> 都是父元素调用

```html
<ul class="list">
        <li>泰坦泰尼克号</li>
        <li>变形金刚</li>
        <li class="test">钢铁侠</li>
        <li>蜘蛛侠</li>
        <li>美国队长</li>
    </ul>
```



#### appendChild

**添加节点** 由父元素调用,传递一个要添加的子元素

```html
- appendChild
<script>
   window.onload = function(){
       var list = document.querySelector('.list');
       var liNode = document.createElement('li');
       liNode.innerHTML = '新加的内容';//内容不限,可以是标签,属性,文本等
       list.appendChild('liNode');
   } 
</script>    
```



#### insertBefore

**插入节点** 由父元素调用,传递两个参数.第一个参数为新增节点,第二个为参照节点.如果参照物为null,则等同于追加元素

```html
- 以类名为test元素为参照节点
父元素.insertBeofre(新增节点, 参照节点)

<script>
	window.onload = function(){
        var testNode = document.querySelector('.test');
        var liNode = document.createElement('li');
        liNode.innerHTML = '替换的内容';
        list.insertBefore(liNode, testNode);
        list.insertBefore(liNode, null);//最后追加节点
    }
</script> 

```



#### replaceChild

**替换节点** 由父元素调用,传递两个参数.第一个参数是替换的节点,第二个参照节点.replaceChild(替换, 参照)

```html
- 替换类名为test的元素

<script>
	window.onload = function(){
        var testNode = document.querySelector('.test');
        var liNode = document.createElement('li');
        liNode.innerHTML = '内容内容内容';
        list.replaceChild(liNode, testNode);
    }

</script>
```



#### removeChild

**删除节点** 由父元素调用,需要填入要删除的子元素

```html
- removeChild() 和 remove()
<script>
	window.onload = function(){
        var testNode = document.querySelector('.test');
        list.removeChild(testNode);
    }
</script>

- 上面的代码可以使用testNode.remove()实现同样效果.但IE里无法使用
```



#### 其他

```js
element.cloneNode(true) 能对一个节点进行深度克隆
```





#### 案例-input与li

```HTML
//1.鼠标移到li标签内容上方,变换背景颜色,包括新增li的.
//2.键盘事件，触发回车之后，把表单的内容动态创建li标签，所有的li标签移入变色

<html>
    <head>
        <meta charset='utf-8'>
        <title>title</title>
    </head>
    <body>
        <input type="text" >
        <ul class="list">
    	<li>七里香</li>
        <li>七里香</li>
        <li>七里香</li>
		</ul>
        <script>
        	window.onload = function(){
                //获取键盘输入,判断输入内容
                var inputNode = document.querySelector('input');
                var ulNode = document.querySelector('.list');
                var liNodes = document.querySelector('.list>li');
                
                inputNode.onkeyup = function(event){
                    //1.判断是否是回车按键
                    if(event === 13){
                        //2.获取输入内容
                        var content = this.value;//2.1 value是input的属性 赋值操作
                        //3.判断输入内容是否为空
                        if(content.trim()){//没考虑到输入前后空格情况
                            //4.将内容添加到ul列表中
                            var newLi = document.createElement('li');
                            newLi.innerHTML = content;
                            ulNode.appendChild('newLi');
                            
                            //z.为新加元素绑定事件
                            newLi.onmouseenter = function(){
                                this.style.background = 'pink';
                            };
                            newLi.onmouseenter = function(){
                                this.style.background = '';
                            };
                        }else{
                            alert('请输入正确信息');
                        }
                        this.value = '';//清空输入内容
                    }
                }; //注意此处分号
                for(var i=0; i<liNodes.length; i++){
                    liNodes[i].onmouseenter = function(){
                        //liNodes[i].style.background = 'pink';
                        this.style.background = 'pink';
                    }
                    liNodes[i].onmouseleave = function(){
                        //liNodes[i].style.background = '';
                        this.style.background = '';
                    }
                }
                //for循环存在两个问题.
                //1.新添加的li标签无法获得背景色,使用console打印只有0,1,2三个数字.必须在新增li标签处添加鼠标移入事件.
                //2.使用liNodes[i]+let可以实现效果,但换成var报错.
            }
        </script>
    </body>
</html>
```



### DOM0级事件绑定解绑

```markdown 
- 事件是JavaScript和HTML交互的基础,任何文档或者浏览器窗口发生的交互,都要通过绑定事件进行交互.

- 事件有DOM0, DOM2, DOM3的区分

- DOM0直接通过onclick写在html里面的事件

- DOM2是通过addEventListener绑定的事件,还有IE下的DOM2事件通过attachEvent绑定

```







```HTML
来源:https://www.cnblogs.com/diligenceday/p/4175721.html

<input onclick="alert(event)" />
<form>
    <input name="hehe" value="hehe" />
    <input onclick="alert(hehe.value)">
    所有DOM0的事件作用域被扩展了;
</form>    
```





**绑定**:  DOM0级事件中,我们就是对一个元素的事件属性赋值一个回调函数.所以也只能设置一个回调函数.如果设置多个,就是覆盖操作,只能最后一个生效.  不可以同时添加同一类事件多次,如果添加后面覆盖前面的.

**解绑**: DOM0级事件解绑的本质, 就是断开事件属性与回调函数的链接



```HTML
<html>
    <head>
        <meta charset='utf-8'>
    	<title>title</title>
        <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 200px;
            height: 200px;
            background: pink;
        }
    </style>
    </head>
    <body>
        <div class="box"></div>
        <script>
        	window.onload = function(){
                var boxNode = document.querySelector('.box');
                boxNode.onclick = function(){
                    console.log('点击1');  //会被覆盖
                };
                boxNode.onclick = function(){
                    console.log('点击2');  //会执行
                };
                
                //解绑
                boxNode.onclick = null;
            }
        
        </script>
    </body>
</html>
```



### DOM2级事件绑定解绑

有些事件是不能通过DOM0级事件的绑定方式去绑定,只能用DOM2级事件.比如transitionEnd

**绑定**: DOM2事件的绑定,可以接受3个参数.

1.事件类型(字符串传递, 并且不带on)

2.回调函数

3.事件是否冒泡



**解绑**:

DOM2级事件的解绑 一共可接受3个参数:

1.事件类型(字符串传递,不带on)

2.回调函数

3.事件是否冒泡

在DOM2事件的解绑中,必须和绑定时传入的参数一模一样,函数地址必须保持一致. 所以若解绑DOM2事件, 回调函数必须在外边定义成 有名称的函数.



#### 高级浏览器

```JavaScript
var boxNode = document.querySelector('.box');

boxNode.addEventListener('click', fn1);  //绑定1
fn1(){
    console.log('点击1');
}


- DOM2事件 是允许给一个事件类型 指定多个回调函数的,高级浏览器触发的顺序是 从上到下

boxNode.addEventListener('click', function(){ //绑定2
    console.log('点击2');
})



- 解绑
boxNode.removeEventListener('click', fn1); 
```



#### 低级浏览器

```JavaScript
attachEvent 第一个参数:事件类型(字符串传递,且带on) 第二个参数回调函数

boxNode.attachEvent('onclick', fn2);
function fn(){
	console.log('点击1');
}

- 低级浏览器中,如果一个事件类型,指定多个回调函数,触发的顺序由下至上
boxNode.attachEvent('onclick', function(){
	console.log('点击2');
});

- 和高级浏览器相同, 解绑时一定要保证参数和绑定时完全一致 //函數需要放在外面
boxNode.detachEvent('onclick', fn2);

```



### DOM2事件&兼容性绑定

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 200px;
            height: 200px;
            background: pink;
        }
    </style>
</head>
<body>
<div class="box"></div>
</body>


<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        addEvent(boxNode, 'click', function(){
            console.log("点击");
        })
        
        //3个参数:1.要绑定的元素 2.要绑定的事件 3.事件的回调函数
        function addEvent(node, eventName, callback){
            //写兼容性函数时,需要通过判断一个方法时能使用 写函数访问不写函数调用
            if(node.addEventListener){
                node.addEventListener(eventName, callback);
                console.log('高级');
            }else{
                node.attachEvent(on+'eventname', callback);
                console.log('低级');
            }
        }
        
        function removeEvent(eventName, callback){}
    }
</script>
```





## 1106



### 事件流

> 事件流是客观存在的,不论元素身上是否有事件的回调函数. 回调函数只决定了当事件触发时,是否会给与反馈.



#### 事件流图

![事件流图](https://images0.cnblogs.com/blog/497865/201412/201817210161425.png)





#### 事件流程

> 捕获阶段  由外向内 进行事件传播
>
> 目标阶段  
>
> 冒泡阶段  由目标元素的回调函数最先执行 然后逐层向上传播(由内向外); 



```HTML
- 事件流传播过程是客观存在的, 不论元素身上是否有事件的回调函数, 回调函数只决定了当事件触发时是否会给予反馈.
- 事件传播过程中,是相同类型的事件回调函数能执行
```





#### 阻止事件冒泡

```HTML
- 阻止事件冒泡 当我们在事件的传播过程中,需要禁止事件传播, 需要使用事件对象上的stopPropagation()方法
- 阻止事件冒泡 在谁的回调函数中调用这个方法 ,就是阻止这个元素的时间不再向上传播

```



#### 实例

```HTML


<style>
    *{
        margin: 0;
        padding: 0;
    }
    .laoda{
        width: 300px;
        height: 300px;
        background: yellowgreen;
    }
    .laoer{
        width: 200px;
        height: 200px;
        background: skyblue;
    }
    .laosan{
        width: 100px;
        height: 100px;
        background: pink;
    }
</style>

<div class="laoda">
    <div class="laoer">
        <div class="laosan"></div>
    </div>
</div>


<script>
	window.onload = function(){
        var laoda = function.querySelector('.laoda');
        var laoer = function.querySelector('.laoda');
        var laosan = function.querySelector('.laoda');
        
        laoda.onclick = function(){ 
            event.stopPropagation();
            console.log('老大');
        };
        laoer.onclick = function(event){
         //用DOM对象laoer代替事件对象event 也可以运行.
        //不能使用this,this代表的是事件对象,
            event.stopPropagation();
            console.log('老二'); //此步会执行.阻止事件冒泡是阻止了冒泡的传播,父元素回调函数不会被执行
        };
        laosan.onclick = function(){
            console.log('老三');
        };
    }
</script>
```







### 事件委托

#### 概要

> 事件委托(委派), 就是将原本应该绑定给子元素的事件,绑定给父元素. 当父元素的 ==回调函数==触发时, 根据 ==事件目标(event.target)==来 ==处理子元素==的逻辑. 我们能够使用事件委托,是基于事件冒泡的机制.
>
> 事件委托必须委托给一个一直都存在的父元素. 尽量离着目标元素近一点.

#### 优势:

1. 减少了事件绑定的次数
2. 新增元素也会有绑定过的事件响应. 因为我们将事件的回调函数,设置为那些原本就存在于页面当中的父元素或祖先元素.



#### event.target

> 事件目标, 就是真正触发事件的那个离你最近的元素,  target是事件对象上的一个属性



#### 实例

```HTML
<ul>
    <li>11111</li>
    <li>22222</li>
    <li>33333</li>
    <li>44444</li>
    <li>55555</li>
</ul>
<button id="btn">新增标签内容</button>

============================第一版=============================
- 存在的问题: 点击ul范围内非li范围,会出现ul背景颜色全部发生变化的现象
- 改进: 使用事件对象属性
<script>
	window.onload = function(){
        var ulNode = document.querySelector('ul');
        var btnNode = document.querySelector('#btn');
        
        ulNode.onclick = function(event){
            event.target.style.background = 'pink';
          
        }
        btnNode.conclick = function(event){
            var liNode = document.createElement('li');
            liNode.innerHTML = '新增元素内容';
            ulNode.appendChild(liNode);
            };
        }
</script>


============================第二版=============================
<script>
	window.onload = function(){
        var ulNode = document.querySelector('ul');
        var btnNode = document.querySelector('#btn');
        
        ulNode.onclick = function(event){
            if(event.target.nodeName === 'LI'){    
                //使用节点的nodeName来判断是否是相应的元素. 从而用 事件委托 将背景色的改变控制在元素节点内,而非整个绑定事件中.
                event.target.style.background = 'pink';
            }
        };
        
        btnNode.conclick = function(event){
            var liNode = document.createElement('li');
            liNode.innerHTML = '新增元素内容';
            ulNode.appendChild(liNode);
            };
        }
</script>
```



#### 实例2-学生管理系统

```html 

```





### 事件对象

#### 概要

> 事件对象event及目标元素属性target存在高级低级浏览器兼容问题



**事件对象**在高级浏览器中会作为**事件回调函数**的**第一个形参**供我们使用.但是在低级浏览器中, 它会作为window的一个属性存在.这个属性叫做==event==.(  事件对象第一次出现是在1103日键盘事件中)

事件对象上目标元素的属性 ==target== 也是存在兼容问题的,高级浏览器使用target, 低级浏览器需要通过事件对象上一个叫做 ==target.srcElement==  的属性



#### 目标元素节点兼容处理

获取事件对象和目标元素属性的固定写法

```js
event = event || window.event;
var target = event.target || target.srcElement;
```





#### 实例

```HTML
- 鼠标移入移出,搭配事件委托,实现背景色更换
- 使用事件委托需要使用onmouseover 和 onmouseout. *enter和*leave绑定事件后,经过子元素,不会触发冒泡事件流程,也找不到目标元素
- 获取事件对象和目标元素属性的固定写法
 

<ul>
    <li>1111</li>
    <li>2222</li>
    <li>3333</li>
</ul>

<script>
	window.onload = function(){
        var list = document.querySelector('ul');
        var liNodes = document.querySelectorAll('li');
        
        list.onmouseenter = function(event){
            event = event || window.event;
            var target = event.target || event.srcElement;
            target.style.background = 'pink';
        };
        
        list.onmouseleave = function(event){
            event = event || window.event;
            var target = event.target || event.srcElement;
            target.style.background = 'none';//或者直接空字符串
        }
    }
</script>
```





### 事件坐标(鼠标的位置)++

#### 概要

> 事件坐标,就是事件发生时,鼠标所在的位置 



#### 类型

##### clientX && clientY

取值是鼠标相对视口的水平和垂直距离,相对于 ==视口的左上角==(以视口左上角为原点) 最常用 受滚动条影响

##### pageX && pageY

取值鼠标相对于页面的水平和垂直距离, 相对的是==页面的左上角== (以页面左上角为原点) 不受滚动条影响

##### offsetX && offsetY

取值鼠标相对于自身元素的水平距离和垂直距离, 相对的是==元素自身左上角==(以自身元素左上角为原点)



#### 事件-onmousemove

鼠标移动事件, 在绑定了这个事件的元素内, 只要移动,就会持续高频次触发, 一直检测你的移动状态

只要想绑定一个事件, 让它在整个页面当中都可以生效,直接绑定给==document==



#### 实例



```HTML
- 图片跟随鼠标移动而移动, 使用循环定时器快速切换


<style>
img{
    width: 100px;
    position: absolute;
    left:0;
    top:0;
         }
</style>

<img src="1.jpg">

<script>
	window.onload = function(){
        var imgNode = document.querySelector('img');
        var num = 0;
        setInterval(function(){
            num++;
            imgNode.src = num%2 + 1 + 'jpg';
        }, 50);
        
        document.onmousemove = function(event){
            imgNode.style.left = event.clientX + 'px';
            imgNode.style.top = event.clientY + 'px';
            
        };
    }

</script>

```



### 定时器

#### 延迟定时器/单次定时器

##### 参数

1. 回调函数 当设置的时间到达后,执行此回调函数
2. 延迟时间. 单位为ms.

##### 定时器ID

定时器的方法在执行后, 会返回一个值, 我们将这个值叫做定时器ID.

定时器的id的本质就是通过数值去记录定时器的顺序.如果只有一个定时器,清除定时器也可以用clearTimeout(1),不建议使用

定时器如果不设置时间或者设置时间为0 ,也是异步操作.

##### 清除定时器

clearTimeout(定时器对象)

要清楚定时器, 使用相应的方法, 传入要清楚的定时器id. 定时器id的本质就是通过数值去记录定时器的顺序.但不要使用这种方式去去除,而是要使用**定时器id的变量**(方法赋值一个变量)

##### 实例

```HTML
<button id='btn'>按钮</button>

<script>
	window.onload = function(){
        vat btnNode = document.querySelector('#btn');
        btnNode.onclick = function(){
            clearTimeout(timer1);//clearTimeout(1) 不建议使用
        }
        var timer2 = setTimeout(function(){
            console.log('计时完成2'); //第二位输出
        }, 0);
        var timer1 = setTimeout(function(){
            console.log('计时完成1'); //最后输出
        }, 0);
        console.log('aaaaa');  //首先输出
    }
</script>
```







#### 循环定时器

##### 参数:

1. 回调函数
2. 间隔时间



##### 定时器清除

循环定时器的清除, 我们大多数情况下都是在循环定时器 ==回调函数的内部==,通过判断进行自动清除的.



##### 实例

```HTML
<button id="btn">按钮</button>

<script>
	window.onload = function(){
        var btnNode = document.querySelector('#btn');
        //btnNode.onclick = function(){
        //    clearInterval(timer);
        //};
        var num = 10;
        var timer = setInterval(function(){//timer回调函数返回值 
            num--;
            if(num === 0){
                clearInterval(timer);
            }
            console.log(num);
        },1000);
    }
</script>
```





##### 实例/阅读协议

```HTML
- 按钮倒计时

<input type="button" disabled value="请阅读（10）秒">
<script>
	window.onload = function(){
        var iptNode = document.querySelector('#btn');
        var num = 10;
        var timer = setInterval(function(){
            num--;
            if(num === 0){
                clearInterval(timer);
                iptNode.disabled = false; // 只要遇到属性名和属性值都相同的属性进行if判断,统一转换成布尔值操作
                iptNode.value = '关闭';
            }else{
                iptNode.value = "请阅读（"+ num +"）秒";
                
            }
        },1000);
    }
</script>
```





## 1107

### 浏览器滚动条

#### 介绍

需要获取浏览器滚动条的偏移量. 有的浏览器(Chrome)使用html能够获取到值,body为0. 有的浏览器是使用body获取到值,但html为0. 它俩是一个互斥的状态,有且只有一个能够获取到值,另外一个为0. 所以使用兼容方案,==两个值相加==或者使用 ==或运算==.

虽然scroll事件发生在window上,但实际上反映的是页面中相应元素的变化.

#### scrollTop

内容区顶部隐藏的像素数,设置这个属性可以改变元素的滚动位置.. scrollTop和scrollLeft可以确定当前元素滚动的位置,或者用于设置它们的滚动位置.元素未滚动时,这两个属性都等于0. 如果元素在垂直方向上滚动, 则scrollTop会大于0, 表示元素顶部不可见区域的高度.如果元素在水平方向上滚动, 则scrollLeft会大于0, 表示元素左侧不可见区域的宽度. 因为这两个属性是可写的, 所以把它们设置为0,就可以重置元素的滚动位置.

#### scrollTop实例

```html
# 点击按钮 滚动条归0.
<style>
    button{
        margin-top: 300px;
    }
</style>

<button id='btn'>按钮</button>

<script>
	window.onload = function(){
      var btnNode = document.querySelector('#btn');
      btnNode.onclick = function(){
        var sopValue = document.documentElement.scrollTop||document.body.scrollTop;
        if(sopValue != 0){
            sopValue = 0;
        }
      };  
    }
</script>
```





#### 获取滚动条位置

**浏览器1:** document.documentElement.scrollTop

**浏览器2:** document.body.scrollTop



#### 设置滚动条位置

设置滚动条位置,其实就是修改HTML和body的scrollTop值.但是情况和获取相同,不同的浏览器需要分别通过html和body来操作.所以兼容设置的方案就是两个都设置,不会有其他影响.

一个元素的**scrollTop值**是这个**元素内容**顶部到它的**视口可见内容**的顶部的距离.例如如果设置300(没有单位),元素会向视口位置移动300px的距离. 没有负数.



#### 浏览器兼容性设置

document.documentElement.scrollTop || document.body.scrollTop

document.documentElement.scrollTop + document.body.scrollTop

#### 实例

```HTML

<style>
    button{
        margin-top: 300px;
    }
</style>

<button id="btn">按钮</button>

<script>
	window.onload = function(){
        var btnNode = document.querySelector('#btn');
        btnNode.onclick = function(){
            document.documentElement.scrollTop = document.body = 200;
        };
    }
</script>


```



### 滚动条动画实例-回顶部

#### 回到顶部2种方法

时间固定 : 路程越远, 则速度越快, 现在最常用

速度固定: 路程越远,时间越长.



#### 动画时长及帧

> 使用循环定时器,  在帧时长的单位上移动

动画总时长,  

动画帧时长(范围是30-16, 小于16和16效果在肉眼下区别很小)

总帧数= 动画总时长 / 帧时长.

总偏移(就是当前浏览器的scrollTop)

单次偏移 = 总偏移 / 总帧数.



#### 实例

```HTML
# 时间固定的前提下,点击按钮,滚动条返回顶部


<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        height: 2000px;
    }
    #btn{
        position: fixed;
        bottom: 100px;
        right:50px;
    }
</style>

<button id="btn">回到顶部</button>

<script>
	window.onload = function(){
        var btnNode = document.querySelector('#btn');
        var allTime = 2000; //定义总时长
        var itemTime = 20;  //定义动画帧时长
        btnNode.onclick = function(){
            //获取总偏移
            var offset = document.documentElement.scrollTop || document.body.scrollTop;
            //计算单次偏移
            var itemOffset = offset / (allTime / itemTime);//单次偏移=总偏移/(总时长/动画帧时长)
			var timer = setInterval(function(){
                if(offset <= 0){
                   	clearInterval(timer);
                   }
                
                offset -= itemOffset; 
                document.documentElement.scrollTop = document.body.scrollTop = offset;
            }, itemTime);
            
        }
    }
</script>

单次偏移 * 动画帧时长 * 总帧数 = 总偏移

```





### 元素的宽度与位置

```HTML
- clientWidth和clientHeight 可以获取初始包含块的宽度和高度,相当于视口但不是视口

clientWidth: 目标元素的宽度
clientWidth = width+paddingleft+paddingright;

clientHeight:目标元素的高度
clientHeight = height+paddingtop+paddingbottom

offsetWidth: 目标元素的宽度(加边框)
offsetWidth = width+paddingleft+paddingright+borderleft+borderright;

offsetHeight: 目标元素的高度(加边框)
offsetHeight = height+paddingtop+paddingbottom+bordertop+borderbotton

相对于包含块的偏移,就和绝对定位一样.不是相对于视口,目前所学的没有直接获取的
offsetLeft:
offsetTop:


clientLeft: 
clientTop:
内容边界到边界的距离,可以理解为border.但并不是border

遇到xy就要想到鼠标对象

```





### 导航跟随

```HTML
# 滚动条超过一屏的距离后, 导航漂浮.低于一屏的距离,回到原来的位置
# onscroll BOM事件,用于检测浏览器滚动条是否正在被移动
# 视口高度 获取的固定方式: var H = document.documentElement.clientHeight;

 <style>
     *{
         margin: 0;
         padding: 0;
     }
     body{
         height: 2000px;
     }
     .box{
         width: 100%;
         height: 80px;
         background: pink;
     }
</style>

<div class="box"></div>

<script>
	window.onload = function(){
        var H = document.documentElement.clientHeight;//视口高度
        var box = document.querySelector('.box');
        window.onscroll = function(){//用于检测浏览器滚动条,是否正在被移动,无论是什么方式
            var scrollT = document.documentElement.scrollTop||document.body.scrollTop;
            //兼容获取当前浏览器滚动条的偏移
            if(scrollT > H){
                box.style.position = 'fixed';//当前滚动的距离超过一屏, 导航漂浮
            }else{
                box.style.position = 'static';
            }
        }
    }
</script>
```



### 盒子来回移动

```HTML
# 页面上的盒子在浏览器视口宽度范围内来回移动

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 100px;
        height: 100px;
        background: pink;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>

<div class="box"></div>

<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        var startLeft = 0;
        var step = 5;
        setInterval(function(){
            startLeft += step;
            if(startLeft > document.documentElement.clientWidth - boxNode.clientWidth){
                startLeft = document.documentElement.clientWidth - boxNode.clientWidth;
                step = -5; 
                //这个地方第一次的写法是 startLeft -= step; 是不正确的.这样会造成死循环
            }else if(startLeft <= 0){
                startLeft = 0;
                step = 5;
            }
            boxNode.style.left = startLeft;
        },10)
    }
</script>
```





### 拖拽基础

```HTML

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 100px;
        height: 100px;
        background: pink;
        position: absolute;
        left: 0;
        top: 0;

    }
</style>
<div class="box"></div>
<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        boxNode.onmousedown = functio(event){
            //鼠标坐标使用event.clientX的原因? 打印event就是鼠标事件
            //获取鼠标开始坐标
            var startX = event.clientX;
            var startY = event.clientY;
            //获取元素坐标
            var eleX = boxNode.offsetLeft;
            var eleY = boxNode.offsetTop;
            boxNode.onmousemove = function(event){
                //获取鼠标结束坐标
                var endX = event.clientX;
                var endY = event.clientY;
                //获取鼠标移动距离差
                var disX = endX - startX;
                var disY = endY - startY;
                
                //更新目标元素的坐标:原始坐标+移动距离
                boxNode.style.left = eleX + disX + 'px';
                boxNode.style.top = eleY + disY + 'px';
            };
            boxNode.onmouseup = function(){
                boxNode.onmousemove = boxNode.onmouseup = null; //鼠标按键抬起所有动作结束.注销函数.否则点击和移动事件不会结束.
            };
        };
       
    }
</script>

```





### 拖拽问题的解决

```HTML
# 鼠标移动过快,元素跟不上.
鼠标会脱离元素, 因为先移动鼠标,然后获取鼠标坐标,然后经过计算,最终设置元素.这个过程中页面渲染是需要时间的,元素没有第一时间跟随鼠标移动,鼠标就脱离出来了.脱离之后, 鼠标不再事件源身上,代码失效.

# 消除文字图片等内容可以被拖拽的浏览器默认行为
1.dom0级事件 阻止默认行为就是在时间回调函数的结尾添加 return false;
 - 低版本id中,文字的拖拽不算做默认行为范畴,只能通过开启全局捕获的方式进行
 - 开启全局捕获之后,就是将后续所有的事件,都聚焦在这个元素身上.相当于无论点击那里都是在点击这个元素.切记,全局捕获有开启就一定有释放.



<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        boxNode.onmousedown = functio(event){
            //开启全局捕获.因为高版本浏览器不认识这个方法,所以先访问.如果存在则结果为真,再调用.
            boxNode.setCapture && boxNode.setCapture();
            
            //鼠标坐标使用event.clientX的原因? 打印event就是鼠标事件
            //获取鼠标开始坐标
            var event = event || window.event;
            var startX = event.clientX;
            var startY = event.clientY;
            //获取元素坐标
            var eleX = boxNode.offsetLeft;
            var eleY = boxNode.offsetTop;
            document.onmousemove = function(event){
                var event = event || window.event;
                //获取鼠标结束坐标
                var endX = event.clientX;
                var endY = event.clientY;
                //获取鼠标移动距离差  
                var disX = endX - startX;
                var disY = endY - startY;
                
                //更新目标元素的坐标:原始坐标+移动距离  这个地方理解起来有困难.前提是鼠标在元素上位置是固定的.画图需要一条辅助线来理解
                boxNode.style.left = eleX + disX + 'px';
                boxNode.style.top = eleY + disY + 'px';
            };
            document.onmouseup = function(){
                boxNode.onmousemove = boxNode.onmouseup = null; //鼠标按键抬起所有动作结束.注销函数.否则点击和移动事件不会结束.
                //释放全局捕获
                boxNode.releaseCapture && boxNode.releaseCapture();
            };
        };
       return false;//阻止默认行为
    }
</script>
```





### 拖拽边界值测试

#### 边界值判断2种逻辑

范围限定类: 大于最大值等于最大值, 小于最小值等于最小值

首尾相接类: 大于最大值等于最小值, 小于最小值等于最大值  例如轮播图



```html
# 让元素在视口范围活动,如果移动到视口边界,则禁止继续向边界外侧移动.
# 为什么不能直接使用鼠标移动后元素的offsetLeft和offsetTop, 再加上这两个值的初始值. 错误. *******

- 因为鼠标移动之后,offsetLeft是设置出来的,是无法获取的.
- 1.offsetLeft 返回元素上边界到它的包含元素的上边界的偏移量,以像素为单位.
- 2.什么叫偏移量, 就是指绝对位置.
- 3.无论鼠标移动元素到哪里, 绝对位置不会变.
- 4.如何获取视觉位置 this.getBoundingClientRect().top


<script>
	window.onload = function(){
        var boxNode = document.querySelector('.box');
        boxNode.onmousedown = function(event){
            boxNode.setCapture && boxNode.setCapture();
            var event = event||window.event;
            var startX = event.clientX;
            var startY = event.clientY;
            var eleX = boxNode.offsetLeft;
            var eleY = boxNode.offsetTop;
            
            boxNode.onmousemove = function(event){
                var endX = event.clientX;
                var endY = event.clientY;
                var disX = endX - startX;
                var disY = endY - startY;
                
                var lastX = disX + eleX;
                var lastY = disY + eleY;
                if(lastX > document.documentElement.clientWidth - boxNode.clientWidth){
                    lastX = document.documentElement.clientWidth - boxNode.clientWidth;
                }else if(lastX <= 0){ //实现吸附效果,将最小值改为10.将最大值减去10;
                    lastX = 0;
                }
                if(lastY > document.documentElement.clientHeight - boxNode.clientHeight){
                    lastY = document.documentElement.clientHeight - boxNode.clientHeight;
                }else if(lastY <= 0){
                    lastY = 0;
                }
                
                boxNode.style.left = lastX + 'px';
                boxNode.style.top + lastY + 'px';
            }
        	boxNode.onmouseup = function(){
                boxNode.onmousemove = boxNode.onmouseup = null;
                boxNode.releaseCapture && boxNode.releaseCapture();//释放全局捕获
            }
            return false;//阻止默认行为
        }//阻止默认行为和释放全局捕获的位置不一样
        
    }
</script>
```





## 1109

### 拖拽九宫格碰撞

```js
## 浏览器在每个元素上都getBoudingClientRect()方法 返回一个DOMrect对象,包含6个属性:left, top, right, bottom, height和width. 这些元素给出了元素在页面中相对于视口的位置.


<style>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 100px;
        height: 100px;
        background: pink;
        position: absolute;
        left: 0;
        top: 0;

    }
    img{
        width: 150px;
        height: 140px;
        position: absolute;
        left:0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
</style>

<div class='box'>文本内容</div>
<img src="1.jpg" alt="">
<scripot>
	window.onload = function(){
    	var boxNode = document.querySelector('.box');
    	var imgNode = document.querySelector('img');
    	
    	boxNode.onmousedown = function(event){
    		var event = event||window.event;
            boxNode.setCapture && boxNode.setCapture();
    		var startX = event.clientX;
    		var startY = event.clientY;
    		var eleX = boxNode.offsetLeft;
    		var eleY = boxNode.offsetTop;
            
            
            boxNode.onmousemove = function(event){
    		var event = event||window.event;
    		var endX = event.clientX;
    		var endY = event.clientY;
    		var disX = endX - startX;
    		var disY = endY -startY;
    		
    		var lastX = eleX + disX;
    		var lastY = eleX + disY;
    		
            if(lastX > document.documentElement.clientWidth - boxNode.clientWidth){
                lastX = document.documentElement.clientWidth - boxNode.clientWidth;
            }else if(lastX <= 0){
                lastX = 0;
            }
            if(lastY > document.documentElement.clientHeight - boxNode.clientHeight){
                lastY = document.documentElement.clientHeight - boxNode.clientHeight;
            }else if(lastY <= 0){
                lastY = 0;
            }
            
            boxNode.style.left = lastX + 'px';
    		boxNode.style.top = lastY + 'px';
            
            var boxNodeL = boxNode.offsetLeft + boxNode.clientWidth;
            var imgNodeL = imgNode.getBoundingClientRect().left;
            
            var boxNodeT = boxNode.offsetTop + boxNode.clientTop;
            var imgNodeT = imgNode.getBoundingClientRect().top;
            
            var boxNodeR = boxNode.offsetLeft;
            var imgNodeR = imgNode.getBoundingClientRect().left + imgNode.clientWidth;
            
            var boxNodeB = boxNode.offsetTop;
            var imgNodeB = imgNode.getBoundingClientRect().top + imgNode.clientHeight;
            
            //将所有不相邻的条件集中,通过或运算,全部写在if中,如果都不满足,则说明一定为真
            if(boxNodeL<imgNodeL||boxNodeT<imgNodeT||boxNodeR>imgNodeR||boxNodeB>imgNodeB){
                //如果有任意一个条件为true, 则原图不变
                imgNode.src = '1.jpg';
            }else{
                imgNode.src = '2.jpg';
            }
    		
    }
    	boxNode.onmouseup = function(){
            boxNode.onmousemove = boxNode.onmouseup = null;
            boxNode.releaseCapture && boxNode.releaseCapture();
            
        }
            return false;
    }
    
    
    	
    }
</scripot>
```



### 禁用浏览器滚动条

如果给body或html其中的某个设置overflow属性,都是将overflow属性设置给了document, 作用于整个页面.如果同时给html和body设置overflow属性,则html设置的属性作用于document, body的作用于自身. 背景background同样作用.

页面当中,其实一共有两个浏览器的滚动条(document和body), 所以通常写页面时,都会讲html和body共同禁止.

```HTML
html, body{
	height:100%;
	overflow:hidden;
}
```







### 自定义滚动条布局-PC



```HTML
<style>
    *{
        margin:0;
        padding:0;
    }
    html,body{
        height:100%;
        overflow:hidden;
    }
    .wrap{
        width:100%;
        height:100%;
        background:pink;
    }
    .scrollWrap{
        width:20px;
        height:100%;
        background:deeppink;
        position:fixed;
        right:0;
        top:0;
    }
    .scrollIn{
        width:10px;
        height:100px;
        background:yellowgreen;
        position:absolute;
        left:2px;
        top:0;
    }
</style>


<body>
    <!--自定义滚动条结构 滑槽 -->
    <div class='scrollWrap'>
        <!-- 滑块 -->
        <div class='scrollIn'></div>
    </div>
</body>
```



### 自定义滚动条-滑块移动

#### 自定义滚动条的万能比例:

滚动条高度/屏幕的高度 = 屏幕的高度/内容的高度 = 滚动条的滚动距离/内容的滚动距离

滚动条高度/滑槽的高度 = 屏幕的高度/内容的高度 = 滚动条的滚动距离/内容的滚动距离 屏幕高度与滑槽高度是相等的

```HTML
<style>
    *{
        margin:0;
        padding:0;
    }
    html,body{
        height:100%;
        overflow:hidden;
    }
    .wrap{
        width:100%;
        height:100%;
        background:pink;
    }
    .scrollWrap{
        width:20px;
        height:100%;
        background:deeppink;
        position:fixed;
        right:0;
        top:0;
    }
    .scrollIn{
        width:10px;
        height:100px;
        background:yellowgreen;
        position:absolute;
        left:2px;
        top:0;
    }
    .content{
        width:100%;
        position:absolute;
        left:0;
        top:0;
    }
</style>


<body>
<div class="wrap">
    <!--内容区-->
    <div class="content">
        <ul class="list"></ul>
    </div>
    <!--自定义滚动条结构     滑槽-->
    <div class="scrollWrap">
        <!--滑块-->
        <div class="scrollIn"></div>
    </div>
</div>
</body>


<script>
    window.onload = function(){
        var scrollIn = document.querySelector('.scrollIn');
        var list = document.querySelector('.list');
        var content = document.querySelector('.content');

        for(let i=0; i<300; i++){
            var liNode = document.createElement('li');
            liNode.innerHTML = i;
            list.appendChild(liNode);
        }

        // 滑块的高度/屏幕的高度 = 屏幕的高度/内容的高度 = 滚动条的滚动距离/内容的滚动距离
        // 比例 = 屏幕的高度 /内容的高度
        var scale = document.documentElement.clientHeight / list.offsetHeight;
        // 设置滑块高度 屏幕高度*scale
        scrollIn.style.height = document.documentElement.clientHeight * scale + 'px';
        scrollIn.onmousedown = function(event){
            //鼠标起始位置
            var startY = event.clientY;
            var eleY = scrollIn.offsetTop;

            document.onmousemove = function(event){
                var endY = event.clientY;
                var disY = endY - startY;

                //滑块最终的位置
                var lastY = eleY + disY;

                //滑块范围限定
                if(lastY < 0){
                    lastY = 0
                }else if(lastY > document.documentElement.clientHeight - scrollIn.clientHeight){
                    lastY = document.documentElement.clientHeight - scrollIn.clientHeight;
                }

                //设置给滑块
                scrollIn.style.top = lastY + 'px';
                //让内容区跟随滚动 滑块的滚动距离/scale
                var contentY =lastY / scale;
                content.style.top = - contentY + 'px'; //注意负值
            }
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            }
        }


    }
</script>
```



### 滚轮事件

mousewheel 既能使用dom0绑定,也能使用dom2绑定. Chrome/IE支持. 使用event.wheelDelta, 滚动向上输出120. 向下输出-120

DOMMouseScroll 只能使用dom2绑定. Firefox支持. 使用event.detail. 滚轮向上输出-3, 向下输出3.



```HTML
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 100px;
        height: 100px;
        margin-top: 150px;
        background: pink;
    }
</style>

<script>
	window.onload = function(){
        var box = document.querySelector('.box');
        var flag = true;//true代表向上, false代表向下
        document.addEventListener('mousewheel', fun); //chrome/IE 支持
        document.addEventListener('DOMMouseScroll', fun); //Firefox支持
        //虽然绑定事件时,需要根据不同的浏览器绑定不同的事件,不过我们在事件回调函数中处理的逻辑相同.所以,将事件的回调函数单独定义成有名函数,同时指定给两个事件.
        //滚轮事件是可以给元素使用的,只是实际应用场景不多.大多数情况下,都是在整个页面当中操作
        
        function fun(event){
            if(event.wheelDelta){//ie/chrome浏览器  负值向下 正值向上
                if(event.wheelDelta < 0){
                    flag = false;//向下
                }else{
                    flag = true;//向上
                }
            }else if(evnet.detail){
                if(event.detail > 0){
                    flag = false; //向下
                }else{
                    flag = true; //向上
                }
            }
            //通过flag赋值,统一上下方向
            
            if(flag){
                box.style.height = box.offsetHeight - 10 + 'px';
            }else{
                box.style.height = box.offsetheight + 10 + 'px';
            }
        }
        
    }
</script>
```



#### 阻止浏览器默认行为

`return false`阻止的是dom0所触发的默认行为

dom2通过event下面的event.preventDefault()





### 自定义滚动条滚轮控制滑块

```HTML
<style>
    *{
        margin: 0;
        padding: 0;
    }
    html,body{
        height: 100%;
        overflow: hidden;
    }
    .wrap{
        width: 100%;
        height: 100%;
        background: pink;
    }
    .scrollWrap{
        width: 20px;
        height: 100%;
        background: deeppink;
        position: fixed;
        right:0;
        top: 0;
    }
    .scrollIn{
        width: 16px;
        /*height: 100px;*/
        background: yellowgreen;
        position: absolute;
        left:2px;
        top:0;
    }
    .content{
        width: 100%;
        position: absolute;
        left:0;
        top:0;
    }
</style>

<div class='wrap'>
    <div class='content'>
        <ul class='list'></ul>
    </div>
    
    <div class='scrollWrap'>
        <div class='scrollIn'></div>
    </div>
</div>


<script>
	window.onload = function(){
        var scrollIn = document.querySelector('.scrollIn');
        var list = document.querySelector('.list');
        var content = document.querySelector('.content');
        
        //创建内容
        for(let i=1; i<300; i++){
            var liNode = document.createElement('li');
            liNode.innerHTML = i;
            list.appendChild(liNode);
        }
        
        //公式: 滑块的高度/屏幕的高度 = 屏幕的高度/内容的高度 = 滚动条的滚动距离/内容的滚动距离
        var scale = document.documentElement.clientHeight / content.offsetHeight;
        //求滑块高度
        scrollIn.style.height = document.documentElement.clientHeight * scale + 'px';
        
        scrollIn.onmousedown = function(event){
            //鼠标起始位置
            var startY = event.clientY;
            //元素距离包含块元素的距离
            var eleY = srcollIn.offsetTop;
            
            document.onmousemove = function(event){
                var endY = event.clientY;
                var disY = endY - startY;
                //滑块最终的位置
                var lastY = disY + eleY;
                
                //滑块范围限定
                if(lastY < 0){
                    lastY = 0;
                }else(lastY > document.documentElement.clientHeight - scrollIn.clientHeight){
                    lastY = document.documentElement.clientHeight - scrollIn.clientHeight;
                }
                
                //设置滑块滑动的距离
                scrollIn.style.top = lastY + 'px';
                //内容的滚动距离 滚动条的滚动距离/scale
                var contentY = lastY / scale;
                content.style.top = -contentY + 'px';
            };
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            };
        }
        
        //滚轮相关逻辑
        document.addEventListener('mousewheel', fun);
        document.addEventListener('DOMMouseScroll', fun);
        var flag = true;
        function fun(event){
            if(event.wheelDelta){
                //ie chrome
                if(event.wheelDelta < 0){
                    flag = false;
                }else{
                    flag = true;
                }
            }else if(event.detail){
                if(event.detail > 0){
                    flag = false;
                }else{
                    flag = true;
                }
            }
            if(flag){
                var scrollT = scrollIn.offsetTop - 10;
                if(scrollT < 0){
                    scrollT = 0;
                }
                scrollIn.style.top = scrollT + 'px';
                content.style.top = -scrollT / scale +'px';
                
            }else{
                var scrollT = scrollIn.offsetTop - 10;
                if(scrollT > document.documentElement.clientHeight - scrollIn.clientHeight){
                    scrollT = document.documentElement.clientHeight - scrollIn.clientHeight;
                }
                scrollIn.style.top = scrollT + 'px';
                content.style.top = -scrollT / scale + 'px';
            }
            
        }
    }
</script>
```



### 自定义滚动条优化

```js
document.addEventListener('mousewheel', fun);
document.addEventListener('DOMMouseScroll', fun);

var flag = true;
function fun(event){
	if(event.wheelDelta){
		if(event.wheelDelta > 0){
            flag = true;
        }else{
            flag = false;
        }
	}else if(event.detail){
        if(event.detail > 0){
            flag = false;
        }else{
            flag = true;
        }
    }
    
    if(flag){
        var scrollT = scrollIn.offsetTop - 10;
        if(scrollT < 0){
            scrollT = 0;
        }
        scrollIn.style.top = scrollT + 'px';
        content.style.top = -scrollT / scale + 'px';
    }else{
        var scrollT = scrollIn.offsetTop + 10;
        if(scrollT > document.documentElement.clientHeight - scrollIn.clientHeight){
            scrollT = document.documentElement.clientHeight -scrollIn.clientHeight;
        }
        scrollIn.style.top = scrollT + 'px';
        content.style.top = -scrollT / scale + 'px';
    }
}
```





```js
document.addEventListener('mousewheel', fun);
document.addEventListener('DOMMouseScroll', fun);

var flag = true;
var step = 10;
function fun(event){
	if(event.wheelDelta){
		if(event.wheelDelta > 0){
            step = 10;
        }else{
            step = -10;
        }
	}else if(event.detail){
        if(event.detail > 0){
            step = -10;
        }else{
            step = 10;
        }
    }
    
    if(flag){
        
        if(scrollT < 0){
            scrollT = 0;
        }
    }else{ 
        if(scrollT > document.documentElement.clientHeight - scrollIn.clientHeight){
            scrollT = document.documentElement.clientHeight -scrollIn.clientHeight;
        }
       
    }
     var scrollT = scrollIn.offsetTop + 10;
     scrollIn.style.top = scrollT + 'px';
     content.style.top = -scrollT / scale + 'px';
}
```



## 1110

### 轮播图

#### HTML部分

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset = 'utf-8'>
        <title>title</title>
    </head>
    <body>
        <div class='container'>
            <ul class='list'>
                <li><img src='img/1.jpg' alt=''></li>
                <li><img src='img/2.jpg' alt=''></li>
                <li><img src='img/3.jpg' alt=''></li>
                <li><img src='img/4.jpg' alt=''></li>
                <li><img src='img/5.jpg' alt=''></li>
            </ul>
        </div>
    </body>
</html>
```



#### JavaScript部分

```js

```



















































