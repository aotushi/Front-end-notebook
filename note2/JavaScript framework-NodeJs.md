

## NodeJS简介

### 资源

> https://nqdeng.github.io/7-days-nodejs/#1

#### 介绍

```
Node.js是一个基于Chrome v8引擎的JavaScript运行环境, 是一个应用程序.
官网: https://nodejs.org/en  
```

#### 作用

```
* 解析运行JS代码
* 操作系统资源,如内存,硬盘,网络
```

#### 应用场景

```
- app接口服务
- 网页聊天室
- 动态网站,个人博客, 论坛,商城等
- 后端的web服务,例如服务器端的请求（爬虫），代理请求（跨域）
- 前端项目打包(webpack,gulp)
```

#### 使用

```
https://npm.taobao.org/mirrors/node

Nodejs 的版本号奇数为开发版本，偶数为发布版本，我们选择偶数号的 LTS 版本（长期维护版本 long term service）

安装完成后，在 CMD 命令行窗口下运行 node -v，如显示版本号则证明安装成功，反之安装失败，重新安装。
```

#### 注意

```
在 nodejs 环境下，不能使用 BOM 和 DOM ，也没有全局对象 window，全局对象的名字叫 global
```

#### 安装及环境变量配置

来源:https://zhuanlan.zhihu.com/p/86241466

1.官网下载安装

2.安装时注意修改安装目录，建议放在非C盘目录下，一路默认安装即可

3.安装完成后启动命令行工具，输入 `node -v``npm -v` 查看安装版本，出现提示版本信息即为安装成功



**环境变量配置**

>  说明：这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似：npm install 模块名 [-g] 的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，占C盘空间。
>  本文是将 `nodejs` 安装在 `D:\soft\nodejs` 目录下,以下操作可根据实际安装目录情况进行对应调整。



1. 在安装目录下，如 `D:\soft\nodejs` 新建两个文件夹 `node_global`(全局包存放目录) 和 `node_cache`(缓存目录)；
2. 打开命令行工具，执行以下两句操作： `npm config set prefix "D:\soft\nodejs\node_global"``npm config set cache "D:\soft\nodejs\node_cache"`；
3. 配置环境变量：

- 打开系统属性-高级-环境变量，在系统变量中新建 变量名：`NODE_PATH`,变量值：`D:\soft\nodejs\node_global\node_modules`（见图2）;
- 编辑用户变量的 `path`，将默认的 `C` 盘下 `APPData/Roaming\npm` 修改为 `D:\soft\nodejs\node_global`（见图3）；
- 保存即可









### NodeJS初体验

#### 编写JS代码

```js
- 文件的名字不能写成node.js
```

#### Node运行js文件

```js
1.打开命令行
2.使用cd和dir命令,将命令行工作目录定位到文件位置// (dir查看文件, 盘符: 移动到相应盘下, cd 名字: 移动到相应文件名下)
3.运行文件 node 名字.js

========
快速打开文件夹
一.利用命令行
1.资源管理器中打开指定文件夹
2.路径导航-点击-可编辑
3.输入cmd

二.利用编辑器
集成终端中打开

==============================
node中不能运行BOM和DOM. 使用全局对象global
```





#### 练习题

```js
- 输出1-10 横向输出
编写js文件

for(let i=1; i<11; i++){
    a=a.concat(i+' ');//str += i+' ';
}
console.log(a);

- 在控制台输出如下符号(没有数字)
*               1 
***             3
*****           5
*******         7
*********       9

for(let i=0; i<5; i++){
    let str='';
    for(let j=0; j<2*i+1; j++){
        str += '*';
    }
    console.log(str);
}

- 在控制台输出如下符号:
    *          1 
   ***         3
  *****        5
 *******       7
*********      9

let str='';
for(let i=0; i<5; i++){
    for(let m=0; m<5-i; m++){
        str += ' ';
    }
    for(let j=0; j<2*i-1; j++){
        str += '*';
    }
    str += '\r\n';
}
console.log(str);

- 99乘法表
1*1=1
1*2=2  2*2=4  
1*3=3  2*3=6  3*3=9
1*4=4  2*4=8  3*4=12   4*4=16

for(let i=1; i<=9; i++){
    let str='';
    for(let j=1; j<=i; j++){
        str += `${j}*${i}=${i*j} `;
    }
    console.log(str);
}
```





### buffer缓冲器

#### 介绍:

> Buffer是一个和数组类似的对象,不同的是buffer是专门用来保存二进制的数据的.



#### 特点

* 大小固定: 在创建时就确定了,且无法调整
* 性能较好: 直接对计算机内存进行操作
* 每个元素大小为1个字节(byte).//1个字节对应8个二进制位,存储的数值范围是0~255.



#### 创建

```js
3种方式:
let buf_1=Buffer.alloc(10);//创建一个长度为10个字节的Buffer
let buf_2=Buffer.allocUnsafe(10);//申请空间, 但是不对内存初始化 速度会稍微慢一些
let buf_3=Buffer.from('字符串');//把字符串内容保存起来了 保存的是字符对应的ascii码表对应的数字

console.log(buf_3);//<Buffer e5 ad 97 e7 ac a6 e4 b8 b2>
//为什么是9位?  一个utf-8的中文字符占3个字节.
```





#### 读取和写入

```js
可以直接通过 [] 的方式对数据进行处理，可以使用 toString 方法将 Buffer 输出为字符串
- [ ] 对 buffer 进行读取和设置
- toString 将 Buffer 转化为字符串

console.log(buf_3[0])//索引读取
console.log(buf_3.toString());//转换成字符串读取

//例子
buf_3[0] = 120;
conole.log(buf_3.toString());//
```



#### 溢出

```js
溢出的高位数据会舍弃

buf_3[0]=365;
console.log(buf_3.toString());//
溢出后,高位舍弃 高于8位的数字都舍弃.例如‭0001 0110 1101‬  => 0110 1101‬
```



#### 单位换算

```js
一个 UTF-8 的中文字符大多数情况都是占 3 个字节

let buf_4=Buffer.from('我爱你');
console.log(buf_4);//log: 只有9位

1Bit 对应的是 1 个二进制位
8 Bit = 1 字节（Byte）
1024Byte = 1KB 
1024KB = 1MB
1024MB = 1GB
1024GB = 1TB
平时所说的网速 10M 20M 100M 这里指的是 Bit ，所以理论下载速度 除以 8 才是正常的理解的下载速度 ?
https://www.zhihu.com/question/21271444
单位不同.
100M带宽,这里的M实际上是Mbps,也就是Mbit/s,兆比特每秒而非兆字节每秒.
上传和下载速度,M指的是MB(兆字节),1MB=1024kb,1kb=1024Byte,1Byte=8bit.

比如100M的宽带: 100Mbit/s=12.5MByte/s
```





### 文件系统fs

> 全称file system,是nodejs



#### 文件简单写入

```js
- 简单写入
fs.writeFile(file, data, [,option], callback)
fs.writeFileSync(file, data);
options选项:
encoding默认值:utf-8
mode默认值:0o666
flag默认值:w

-流式写入
fs.createWriteStream(path, [,option])
options:
flag默认值w
encoding默认值utf-8
mode默认值0o666
```



```js
1.引入fs模块
const fs=require('fs');//require 内置函数.

2.调用方法写入文件 './'表示当前文件夹;绝对路径写入: d:/文件夹/文件.类型
fs.writeFile();


语法:fs.writeFile('路径+目标文件', '内容', 回调函数);
实现:fs.writeFile('路径+目标文件', '内容', err=>{
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
})
======================
flag a:append w:write r:read  默认是w

fs.writeFile('文件名路径', 内容, {flag: 'a'}, err=>{
    if(err) throw err;  //if/else语句,代码块只有一条语句,大括号可省略
});
```



#### 文件简单写入同步API

```js
- 同步API 执行顺序和编写顺序是一致的

fs.writeFileSync(路径, Date.now());
console.log(Date.now());
```





##### d盘下写入文件

```js
前提: 
- 不能直接在c盘的根目录下写入文件.权限的默认设置
- 文件路径包含没有创建的文件夹,写入会失败的.

let fs=require('fs');
fs.writeFile('d:/index.html', 'content', err=>{
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
})
```



#### 读取和写入场景

```js
当需要持久化保存数据的时候, 想到'写入文件'
```





#### 写入流写入文件

```js
1.引入fs模块
2.调用方法,创建写入流对象
3.调用方法写入内容
4.关闭写入流

const fs=require('fs');
const ws=fs.createWriteStream('目录');
ws.write('*{margin:0;padding:0}\r\n');  \\转义字符,\r回车  \n换行
ws.write('body{height:100vh;background:#98c}');
ws.close();
```



#### 写入文件的两种方式比较

```js
writeFile 简单写入,应对简单的内容写入,次数较少

createWriteStream 应对批量内容写入
```



### 文件读取

```js
- 步骤:
1.引入fs模块
2.调用方法,读取文件内容

const fs=require('fs');
fs.readFile('路径', (err, data)=>{
    if(err) throw err;
    console.log(data.toString());//需要使用toString()方法,data是buffer文件
})



- 注意事项:
路径中的斜杠 使用转义字符: 再次转义
```



#### 文件读取同步API

```js
- 读取文件,同步API  阻塞线程,效率低
let result = fs.readFileSync('路径');
console.log(result.toString());
```







#### 流式读取文件

```js
1.引入fs模块
2.创建读取流对象
3.绑定事件 //每读取一段数据(64kb)触发一次

const rs=fs.createReadStream('路径');
rs.on('data', chunk=>{ 
    console.log(chunk.toString()); //案例中的音频里是二进制数据,toString看不到里面的原始内容,读取内容无意义.chunk文件是buff格式
    console.log(chunk.length);//每次打印的是65536(64kb)
});


65536 就是64kb 256*256
1kb


//读取流创建打开的时候
rs.on('open', ()=>{console.log('读取流打开了')})

//读取流关闭的时候触发
rs.on('close', ()=>{console.log('读取关闭了')})

//与close对应的事件,类似
rs.on('end', ()=>{console.log('读取流结束了')});
```



#### 读取文件方式选择

```js
对于小文件 readFile
对于大文件 createReadStream

使用场景:

```





#### 移动文件+重命名

```js
1.引入fs模块
2.移动文件


//移动
fs.rename('目标文件位置', '移动到的文件位置/同路径下的新名字', err=>{
    if(err) throw err;
    console.log('移动成功')
})

//重命名
fs.rename('目标文件位置', '移动到的文件位置newname',err=>{
    if(err) throw err;
    console.log('重命名成功');
})


```



#### 移动+重命名同步API

```js
renameSync

fs.renameSync()
```





#### 删除文件

```js
1.引入fs模块
2.删除 //不会进回收站,直接删除的

fs.unlink('要删除的文件路径', err=>{
    if(err) throw err;
    console.log('删除成功')
})


```



#### 删除文件同步API

```js
同步API
fs.unlinkSync('./project/index.html', err=>{
    if(err) throw err;
    console.log('删除成功');
})
```





### 文件夹操作

```js
const fs = require('fs');
//创建文件夹
fs.mkdir('路径', err=>{
    if(err) throw err;
    console.log('创建成功');
})

//读取文件夹 使用场景:搜索
fs.readdir('路径', (err, data)=>{
    if(err) throw err;
    console.log(data);//data文件夹下的文件列表,可以读其他盘
})

//删除文件夹
fs.rmdir('目录路径', err=>{
    if(err) throw err;
    console.log('删除成功');
})

//非空文件夹删除 添加参数 recursive:递归
fs.rmdir('目录路径', {recursive:true}, err=>{
    if(err) throw err;
    console.log('删除成功');
})
 
```



#### 创建文件夹场景

```js
安装软件 网盘
```



### 路径

```js
相对路径: 
./  当前文件所在的文件夹
../ 所在文件所处的上一级目录

绝对路径:
//1.  D:/文件夹/文件夹
//2. 以斜杠开头的路径也是绝对路径.: linux下斜杠表示根目录 /usr/share/local
```



#### 案例

```js
- 在d盘下创建project文件夹,包含css(app.css),js(app.js),images(logo.png),index.html文件.

const fs=require('fs');

//同步写法
fs.mkdirSync('d:/project');
fs.mkdirSync('d:/project/css');
fs.mkdirSync('d:/project/js');
fs.mkdirSync('d:/project/images');

fs.writeFileSync('d:/project/index.html', '');
fs.writeFileSync('d:/project/css/app.css', '');
fs.writeFileSync('d:/project/js/app.js', '');
fs.writeFileSync('d:/project/images/logo.png', '');



//异步写法
fs.mkdir('d:/project', err=>{
    if(err) throw err;
   
    
    fs.mkdir('d:/project/css', err=>{
        if(err) throw err;
        fs.writeFile('d:/project/css/app.css', '',  err=>{
            if(err) throw err;
            console.log('yes');
        })
    });
    
    fs.mkdir('d:/project/js', err=>{
        if(err) throw err;
        fs.writeFile('d:/project/js/app.js', '',  err=>{
            if(err) throw err;
            console.log('yes');
        })
    });
    
    fs.mkdir('d:/project/images', err=>{
        if(err) throw err;
        fs.writeFile('d:/project/images/logo.png', '',  err=>{
            if(err) throw err;
            console.log('yes');
        })
    })

    fs.writeFile('d:/project/index.html','', err=>{
        if(err) throw err;
        console.log('yes');
    });
});
```





### 路径问题 +dirname

```js
node中, fs模块中的相对路径和平常的相对路径不同:
./ ../ 相对的都是执行命令时所在的工作目录.

改进:
相对路径转绝对路径
# 全局特殊变量: __dirname, 始终保存的是当前执行文件所在文件夹的绝对路径.
作用:将相对路径可以拼接成绝对路径,使每一次运行的结果,都是一致的.

案例: 
fs.writeFile(__dirname+'/app.js', 内容, 回调函数)
```





### stat  查看文件状态

```js
方法: 用来查看文件的状态

const fs = require('fs');

fs.stat(__dirname+'/index.html', (err, stats)=>{
    if(err) throw err;
    console.log(stats);
 //打印结果:Stats {
  dev: 4000601358,
  mode: 16822,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 844424930181990,
  size: 0,
  blocks: 0,
  atimeMs: 1607572139193.629,
  mtimeMs: 1607417686385.6775,
  ctimeMs: 1607417686385.6775,
  birthtimeMs: 1607158453023.9072,
  atime: 2020-12-10T03:48:59.194Z,
  mtime: 2020-12-08T08:54:46.386Z,
  ctime: 2020-12-08T08:54:46.386Z,
  birthtime: 2020-12-05T08:54:13.024Z
}
    
    
    
    
    //stats.size 文件大小
    //stats.mtime 最后修改时间
    //调用方法
    console.log(stats.isDirectory());//判断是否是一个文件夹 返回true/false
})
```



### Node在Vue中的使用

```js
http://yulilong.cn/doc/tool/002-webpack-require.context.html#_1-%E5%B8%A6%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84-require-%E8%AF%AD%E5%8F%A5


https://www.cnblogs.com/cangqinglang/p/12671008.html
```



#### 0.reuqire.context

> 通过 `require.context()` 函数来创建自己的 context;
>
> 可以给这个函数传入三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式。

```js
//示例
require.context('./text', true, /\.test\.js$/);
```

#### 0.1 context moduel API

> 一个 context module 会导出一个（require）函数，此函数可以接收一个参数：request。
>
> 此导出函数有三个属性：`resolve`, `keys`, `id`。
>
> - `resolve` 是一个函数，它返回 request 被解析后得到的模块 id。
> - `keys` 也是一个函数，它返回一个数组，由所有可能被此 context module 处理的请求. 例如["./xinJiang/equipmentInfo.js",...]







#### 1.require.context实现不用写import导入模块(或组件)

```js
const moduleFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((module, modulePath) => {
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  //处理多层文件
  if (moduleName.inclues('/')) {
    let moduleNameParts = moduleName.split('/');
    for (let index=1; index<moduleNameParts.length; index++) {
      const item = moduleNameParts[index];
      moduleNameParts[index] = item.slice(0, 1).toUpperCase() + item.slice(1);
    }
    
    moduleName = moduleNameParts.join('');
  }
  const value = modulesFiles(modulePath);
	modules[moduleName] = value.default;
  return modules;
},{})

```



