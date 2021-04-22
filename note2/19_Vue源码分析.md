## Vue源码分析

[toc]

```js
https://vue-course-doc.vercel.app/#_0-%E5%BE%AE%E4%BF%A1%E7%BE%A4

vue原理实现
```







## 0122

### 算法储备

### 1.指针思想

```js
//指针例子:连续重复出现的最长字符
```

### 2.str.match()方法

```js
//match()方法
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match
- 可以将字符串中符合正则表达式中的内容提取出来
- 它会将匹配到的结果保存到一个数组中返回
- 使用括号,结果数组中多了一个值.

//正则
- 圆括号在正则中表示捕获
- ^尖角号在正则中表示以它开始


var str = '手机100元电池200元鼠标300元我200斤12岁';
let resultArr=str.match(/(\d+)元/);
console.log(resultArr) 
//结果: ["100元", "100", index: 2, input: "手机100元电池200元鼠标300元我200斤12岁", groups: undefined]


let resultArr=str.match(/\d+元/)
//结果: ["100元", index: 2, input: "手机100元电池200元鼠标300元我200斤12岁", groups: undefined]

let resultArr=str.match(/(\d+)元/g)
//结果:  ["100元", "200元", "300元"]


var resultArr = str.match(/\d+元/g);
//结果:  ["100元", "200元", "300元"]
```



### 3.str.match配合指针使用

```js
//match与正则配合使用 打印出元之前的数字

var str='手机100元电池200元鼠标300元我200斤12岁';
var idx=0;
while(idx<str.length){
    let rest=str.substring(idx);
    if(/^\d+元/.test(rest)){
        let matchStr=rest.match(/(\d+)元/)[0];
        let matchNumer=rest.match(/(\d+)元/)[1];
        idx += matchStr.length;
        console.log(matchNumber); //输出数字
    }else{
        idx++;
    }
}
```



### 4.按类别拆分字符串

```js
// 题目：字符串中可能有小写字母、大写字母、数字，请按字符类别拆解字符串。比如字符串"abcMNdefgh1i234JK",拆解成汉字标识的双维数组.

var result=[];
var srt="abcMNdefgh1i234JK";
//指针
var idx = 0;

while(idx<str.length){
    //剩余部分,从指针开始的剩余字符串
    let rest=str.substring(idx);
    //看剩余部分是以什么开头
    if(/^[a-z]+/.test(rest)){
        let v=rest.match(/([a-z])+/)[0];
        //指针后移它的长度: 指针在小写字符串的第一位,加上小写字符串长度,指针在小写字符串之后的第一位上.
        idx += v.length;
        result.push(['小写',v]);
    }else if(/^[A-Z]+/.test(rest)){
        let v=rest.match(/[A-Z]+/)[0];
        idx += v.length;
        result.push(['大写',v]);
    }else if(/^\d+/.test(rest)){
        let v=rest.match(/\d+/)[0];
        result.push(['数字',v]);
        idx += v.length;
    }else{
        idx++;
    }
}
console.log(result);
```



### 5.拆分属性字符串

```js

// 以空格拆分属性字符串: 'class="box spec center" id="mybox" data-n="5"';
// 打印了console.log(k)
["class="box spec center"", "class", "box spec center", index: 0, input: "class="box spec center" id="mybox" data-n="5"", groups: undefined]

var str='class="box spec center" id="mybox" data-n="5"';
var idx=0;
var result=[];

while(idx<result.length){
    let rest=str.substring(idx);
    if(/^[a-z\-]+\=\".+\"/.test(rest)){
        let regexp=/^([a-z\-]+)\=\"([^\"]+)\"/; 
        //注意区分加括号和不加的区别; 要清楚的知道打印结果是什么
        let k=rest.match(regexp)[1];
        let v=rest.match(regexp)[2];
        let kv=rest.match(regexp)[0];
        
        result.push({
            name:k,
            value:v
        });
        idx+=kv.length;
    }else{
        idx++;
    }
}
```



### 栈

### 什么是栈?

题目：试编写“智能重复”smartRepeat函数，实现：

l 将3[abc]变为abcabcabc

l 将3[2[a]2[b]]变为aabbaabbaabb 

```js

var result='';
function smartRepeat(str){
    let number=str.match(/(\d+)\[(\w+)\]/)[1];
    let word=str.match(/(\d+)\[(\w+)\]/)[2];
    
    return word.repeat(number);
}

var result=smartRepeat('5[m]');
console.log(result);
```



```js
//栈:
只一端开口的数组，就是栈，只能从一端进出。先放进去的羽毛球，必然是最后拿出来的。这一端被称为栈顶，相对地，把另一端称为栈底。

向一个栈插入新元素又称作进栈、入栈或压栈；从一个栈删除元素又称作出栈、退栈、弹栈。调用push()就是进栈；调用pop()就是弹栈；调用unshift()对不起，不能调！调用shift()对不起，不能调！

```



### smartRepeat函数栈

![image.png](https://i.loli.net/2021/01/24/G6mQtCAaJBWdP1O.png)

要求:

l 将3[abc]变为abcabcabc

l 将3[2[a]2[b]]变为aabbaabbaabb 

l 将2[1[a]3[b]2[3[c]4[d]]]变为abbbcccddddcccddddabbbcccddddcccdddd

l 将2[1[a]2[b]]变为什么abbabb

```js
let stack1=[];
let stack2=[];
function smartRepeat(str) {
    //指针
    let idx = 0;
    //循环语句
    while (idx < str.length) {
        //剩余部分
        let rest = str.substring(idx);
        //根据剩余部分开头的不同形式,做不同的事情
        if (/^\d+\[/.test(rest)) {
            //遇见'数组['的形式了
            let fullStr = rest.match(/^(\d+)\[/)[0];
            //提取数字
            let n = Number(rest.match(/^(\d+)\[/)[1]);
            //指针后移
            idx += fullStr.length;
            //遇见数字[，那么数字进栈1，空字符串进栈2
            stack1.push(n);
            stack2.push('');
        } else if (/^[a-z]+/.test(rest)) {
            //遇见'字母'形式了
            let word = rest.match(/^[a-z]+/)[0];
            idx += word.length;
            //遇见字母,改写栈2栈顶元素为字母
            stack2[stack2.length-1]=word;
        } else if (rest[0] === ']' && idx<str.length-1) {
            idx++;
            //遇见]了，那么栈1弹栈，栈2栈顶的这个元素要重复栈1弹出的那么多次，栈2弹栈，将字符串拼接到新栈顶
            let n = stack1.pop();
            let newWord= stack2[stack2.length-1].repeat(n);
            stack2.pop();
            stack2[stack2.length-1] += newWord;
        } else if(idx === str.length-1){
            // 遇见了最后一个字符，这个字符必然是方括号
            // 此时stack2长度是1，stack1的长度也必为1，[0]就是这唯一的一项
            return stack2[0].repeat(stack1[0]);
        }
    }
}

var result = smartRepeat('2[1[a]3[b]2[3[c]4[d]]]');
console.log(result);
```





### 抽象语法树AST

```js
//抽象语法树，就是JS对象，就是用JS对象表示HTML层次。

//HTML
<div>
    <h1>{{a}}</h1>
	<ul>
        <li>牛奶</li>
		<li>咖啡</li>
		<li>可乐</li>
	</ul>
</div>

//AST抽象语法树:
{
    tag: 'div',
    children: [
        {
            tag: 'h3',
            children: [
                { 'text': '{{a}}' }
            ]
        },
        {
            tag: 'ul',
            children: [
                {
                    tag: 'li',
                    children: [ {'text': '牛奶' }]
                },
                {
                    tag: 'li',
                    children: [ {'text': '咖啡' }]
                },
                {
                    tag: 'li',
                    children: [ {'text': '西瓜' }]
                }
            ]
        }
    ]
}

```

```js

```





## 0123

### ES5实现ES6中的filter方法

```js
Array.prototype.myFilter=function(fn){
    let result=[];
    for(let i=0; i<this.length; i++){
        if(fn(this[i])){
            result.push(this[i]);
        }
    }
    return result;
}

let arr=[11,22,33,44,55];
let newArr=arr.myFilter();
console.log(newArr);
    
//参考:
let newArr2=arr.filter((item)=>{
    return item%2===0;
})

//想法:
按照ES6来照着写很容易理解.但是第一次的接触是生疏,理解上还是慢半拍.
```



























































































































