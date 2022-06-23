## Node.js安装配置

### 1.下载安装Node.js

> 官网下载最新版本：https://nodejs.org/en/download/

可以下载安装包, 或者下载zip文件找个目录保存，解压下载的文件，然后配置环境变量，将解压文件所在的路径配置到环境变量中。



### 2.配置默认安装目录和缓存日志目录

> 这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似：npm install express [-g] （后面的可选参数-g，g代表global全局安装的意思）的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，占C盘空间。

####  2.1 创建默认安装目录和缓存日志目录

#### 1. 创建文件夹

希望将全模块所在路径和缓存路径，放在我node.js安装的文件夹中，则在我安装的文件夹【"D:\Program Files \nodejs】下创建两个文件夹【node_global】及【node_cache】分别作为默认安装目录和缓存日志目录。

#### 2.执行命令

```shell
node config set prefix "D:\Program Files\ndoejs\node_global"
node config set cache  "D:\Promgram Files\nodejs\node_cache"
```

输入`npm list -global`命令来查看全局安装目录：



### 3.node.js环境配置

> 这里默认是D:\Program Files\nodejs为node的安装路径
>
> 如果是安装安装的,环境变量会自动配置的

#### 1.进入环境变量配置

> 我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”，进入环境变量对话框

1、【系统变量】下新建【NODE_PATH】，此处设置第三方依赖包安装目录
如果跟着第2步修改了全局安装目录，则输入【D:\Program Files\nodejs\node_global\node_modules 】

2、【系统变量】下的【Path】添加上node的路径【D:\Program Files\nodejs\】

3、如果设置了全局安装目录，【用户变量】下的【Path】将默认的 C 盘下 APPData/Roaming\npm 修改为【D:\Program Files\nodejs\node_global】，【D:\Program Files\nodejs\node_cache】，这是nodejs默认的模块调用路径



### 4.配置淘宝镜像

#### 查看npm下载源 

> npm config get registry

将npm的模块下载仓库从默认的国外站点改为国内的站点，这样下载模块的速度才能比较快，现在用的都是淘宝镜像源（https://registry.npmmirror.org），使用淘宝镜像源有两种方式：

1）临时使用

> npm --registry https://registry.npmmirror.org install cluster

这个代码就是只在安装cluster的使用淘宝镜像下载，每次安装一个模块都用挺长的代码，比较繁琐，所以推荐第二种方式。

2）永久使用

这里有也两种配置选择，一是直接修改npm命令的仓库地址为淘宝镜像源，另一种是安装cnpm命令。

第一种: 直接修改npm的默认配置

> npm config set registry https://registry.npmmirror.org

验证：配置后可以根据 `npm config get registry`或 `npm config list` 命令查看npm下载源是否配置成功，

第二种: 安装cnpm

> npm i -g cnpm --registry=https://registry.npmmirror.org

验证方式变成了`cnpm config get registry` 或 `cnpm config list`



## 使用nvm管理多个nodejs版本

NVM就是一个比较好用node管理工具，切换node版本。 

官网教程

```bash
https://github.com/nvm-sh/nvm#usage
```



### 配置教程

#### 0. 下载nvm安装包

* 安装版本使用最新
* 点击执行exe文件, 注意修改nvm的安装根目录以及node的安装根目录，后者是以后管理多版本node的源文件储存地址

#### 1.安装情况

安装完成后, 在cmd命令行窗口中查看是否安装成功

* `nvm version` 检查nvm是否安装成功





#### 2.管理nodejs

**注意:**在1.1.9版本中, 先前安装的版本没有删除,但是使用`nvm use 版本号`中会报错. 必须先卸载之前安装的nodejs,删除其安装文件夹. 

##### 查看已安装的版本版本

```bash
nvm list
```



##### 查看可安装的版本

```bash
nvm list available
```

##### 安装指定版本

```bash
nvm install 版本号

//如果只写大的版本号,那么会安装当前版本号的最新版本
```



##### 指定node版本

```bash
nvm use 版本号
```



##### 卸载指定的版本

```bash
nvm uninstall 版本号
```



#### 其他命令

- nvm arch：表示node是运行在32位还是64位。
- nvm on ：开启node.js版本管理。
- nvm off：关闭node.js版本管理。
- nvm list [available]：查看已安装的node版本。available可选参数，查看所有可安装的node版本。list可简化成ls。
- nvm install [version]：安装指定的node版本。
- nvm use [version] [arch]：使用指定版本的node。可指定32位或64位。
- nvm uninstall <version>: 卸载指定版本的node。
- nvm version：查看nvm版本号。version可简化为v。



### 遇到的问题??? (待解决)

在管理员权限下使用cmd窗口命令, 只有使用全局安装`-g`才能将下载的包安装到nvm设置的目录中.否则将安装在当前命令行位置下的目录.



#### 安装yarn后,无法识别

**全局安装yarn**

```bash
npm install yarn -g
```

**检查**

```bash
yarn -v
```

**解决**

需要进行环境变量的配置（就是把yarn.cmd命令配置到环境变量中). 一般来说，这两个命令都在相应的bin目录下，但这里比较特殊，系统自动保存在了node_global目录下.

重启cmd窗口,重新检查yarn版本





## NPM

### 介绍

全称：Node Package Manager , Node 的包管理器，也是一个应用程序。是随同NodeJS一起安装的包管理和分发工具，它很方便让JavaScript开发者下载、安装、上传以及管理已经安装的包。

### 包是什么

Node.js 的包基本遵循 CommonJS 规范，将一组相关的模块组合在一起，形成一个完整的工具

### 作用

通过 NPM 可以对 Node 的工具包进行**搜索、下载、安装、删除、上传**。借助别人写好的包，可以让我们的开发更加方便。

### 安装

安装完 nodejs 之后会自动安装 npm

详见Node安装教程





### 背景知识(开发+生产)

```js
开发环境:项目处在编码阶段,
    用到的辅助工具依赖就安装到devDependencies下,使用npm install 包名 --save-dev||-D
	例如:css预处理器:Less, Sass, Stylus; ESlint; Webpack打包工具
    
    
生产环境: 上线服务
	如果项目运行需要的依赖,就安装到dependencies下, 使用npm install 包名  --save||-S
    例如:Vue.js,React框架; axios; ElementUI组件库
```



### 常用命令

> [CLI Commands | npm Docs (npmjs.com)](https://docs.npmjs.com/cli/v8/commands)

#### 查看 npm 的版本

```sh
npm -v 
```

#### 初始化

//主要是用来创建package.json文件,如果已经存在,则不需要重新创建.
//包名字不能使用中文,大写和npm

##### 基础语法

```shell
npm init [-f| --force| -y | --yes]
```



```sh


npm init
//简洁写法, 输入都采用默认值
npm init --yes
```

运行后会创建 package.json 文件  //一般放在根目录下           

```json
{
  "name": "1-npm",      #包的名字
  "version": "1.0.0",   #包的版本
  "description": "",    #包的描述
  "main": "index.js",   #包的入口文件
  "scripts": {			#脚本配置
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",			#作者
  "license": "ISC"		#版权声明
}
```

> ==注意生成的包名不能使用中文，大写 ！！！ 不能使用 npm 作为包的名字==

关于开源证书扩展阅读

<http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html>

#### 搜索

```sh
npm search jquery
npm s jquery
```



#### 安装模块

##### 基础语法

```markdown
npm install [<@scope>/]<pkg>
npm install [<@scope>/]<pkg>@<tag>
npm install [<@scope>/]<pkg>@<version>
npm install [<@scope>/]<pkg>@<version range>
npm install <alias>@npm:<name>
npm install <folder>
npm install <tarball file>
npm install <tarball url>
npm install <git:// url>
npm install <github username>/<github project>

aliases: add, i, in, ins, inst, insta, instal, isnt, isnta, isntal, isntall

common options: [-S|--save| -D|--save-dev| -O|--save-optional] [-E| --save-exact] [--dry-run]
            
```

安装包,默认会安装最新的版本

```tiki wiki
npm install gulp
```

安装指定版本的包

```tiki wiki
npm install gulp@3.9.1
```

安装包并将信息保持到项目的package.json文件中;

6 版本的 npm ，安装包时会自动保存在 dependencies 中，可以不用写 --save

命令行可以添加多个包 npm i chalk ludash



项目对模块的依赖可以使用下面的 3 种方法来表示（假设当前版本号是 1.1.0 ）：

- 兼容模块新发布的补丁版本：~1.1.0、1.1.x、1.1
- 兼容模块新发布的小版本、补丁版本：^1.1.0、1.x、1
- 兼容模块新发布的大版本、小版本、补丁版本：*、x



安装包信息到**生产环境(dependencies)** `-S | -save`

```markdown
npm i gulp --save
npm i gulp -S
```

package.json文件的 dependencies 字段：

```shell
## 安装并在 package.json 中保存包的信息(dependencies 属性)
"dependencies": { 
    "gulp": "^3.9.1"
}
```



安装包信息到**开发环境(devDependencies)** `-D | --save-dev`

```sh
//安装并在 package.json 中保存包的信息(devDependencies 属性) 主要用来保存一些开发依赖包,例如webpack
npm i gulp --save-dev
npm i gulp -D
```

package.json 文件的 devDependencies字段：

```markdown
"devDependencies": {
    "gulp": "^3.9.1"
}
```

安装包信息到**可选阶段(optionalDependencies)** `-O | --save-optional`

```markdown
npm i gulp --save-optional
npm i gulp -O
```

package.json 文件的optionalDependencies字段：

```markdown
"optionalDependencies": {
    "gulp": "^3.9.1"
}
```

**精确安装指定模块**版本 `-E | --save-exact`

```markdown
npm i gulp --save-exact
npm i gulp -E
```

输入命令npm install gulp -ES，留意package.json 文件的 dependencies 字段，以看出版本号中的^消失了

```markdown
"dependencies": {
    "gulp": "3.9.1"
}
```



**本地安装**

```markdown
npm i gulp
```



**全局安装** 使用`-g` 或 `--global`

```shell
//package.json没有变化,对单个项目没有影响
//全局安装位置的查看命令: npm root -g 打印结果就是下面的文件夹
//安装位置: .../AppDate/Roaming/npm/node_modles
//会创建全局的命令: 


npm install less -g
npm install nodemon -g 
```

全局安装一般用于安装==全局工具==，如 cnpm，yarn，webpack ，gulp等，全局命令的安装位置

```
C:\Users\你的用户名\AppData\Roaming\npm
```

> 全局安装命令在任意的命令行下, 都可以执行



#### 查看安装的模块

##### 基础语法

```shell
npm ls [[<@scope>/]<pkg> ...]

aliases: list, la, ll
```

查看全局安装的模块及依赖

```shell
npm ls -g
```



#### 卸载模块

##### 基础语法

```html
npm uninstall [<@scope>/]<pkg>[@<version>]... [-S|--save|-D|--save-dev|-O|--save-optional]

aliases: remove, rm, r, un, unlink
```

如卸载开发版本的模块, 一行可以写多个包名

```javascript
npm uninstall gulp --save-dev

npm remove jquery
npm remove jquery chalk //可以在写法上移出多个包
```



#### 更新模块

##### 基础语法

```html
npm update [-g] [<pkg>...]
```



#### 检查模块是否已过时

##### 基础语法

```html
npm outdated [[<@scope>/]<pkg>...]
```



#### 全局变量配置

```js
window电脑
环境变量的设置 path路径
```







#### 安装依赖

根据 package.json 中的依赖声明， 安装工具包.我们上传仓库的时候,是不会上传node_module中的文件的.所以下载后,需要在本地将package.json中的补充完整.

```sh
npm i //等价于install
npm install

npm i --production // 只安装 dependencies 属性中的依赖
```



#### 查看某条命令的帮助

##### 基础语法

```shell
npm help <term> [<terms..>]
```

例如输入`npm help install`，系统在默认的浏览器或者默认的编辑器中打开本地nodejs安装包的文件/nodejs/node_modules/npm/html/doc/cli/npm-install.html



#### 查看包安装路径

输出 node_modules的路径

```shell
npm root [-g]
```

#### 查询安装包

```js
1.查询全局是否安装过某个包
npm list 包名 -g

2.查询全局安装过的包
npm list -g --depth 0
```



####  配置npm

##### 基础语法

 ```shell
 npm config set <key> <value> [-g|--global] 
 npm config get <key>
 npm config delete <key>
 npm config list
 npm config edit
 npm get <key>
 npm set <key> <value> [-g | --global]
 ```

##### NPM设置代理及修改镜像

首先查看当前配置是否已经存在代理: 

```javascript
npm config ls   //ls <== list的缩写
```

设置网络代理

```bash
npm config set proxy="代理路径" //一般从代理软件上获取
```

将npm默认下载地址更改成国内淘宝镜像

```bash
npm config set registry https://registry.npmmirror.com
```

再次查看确认是否更改

```bash
npm config ls
```

更新

```bash
npm update
```





#### 管理模块缓存

基础语法

 ```shell
 npm cache add <tarball file>
 npm cache add <folder>
 npm cache add <tarball url>
 npm cache add <name>@<version>
 
 npm cache ls [<path>]
 
 npm cache clean [<path>]
 ```

最常用命令无非清除npm本地缓存

 ```shell
 npm cache clean
 ```



#### 启动模块

##### 基础语法

 ```shell
 npm start [--<args>]
 ```

该命令写在package.json文件scripts的start字段中，可以自定义命令来配置一个服务器环境和安装一系列的必要程序，如

```json
"scripts": {
    "start": "gulp -ws"
}
```

此时在cmd中输入npm start命令相当于执行gulpfile.js文件自定义的watch和server命令。

如果package.json文件没有设置start，则将直接启动node server.js



#### 停止模块

##### 基础语法

```shell
npm stop [-- <args>]
```



#### 重新启动模块

##### 基础语法

 ```shell
 npm restart [--<args>]
 ```



#### 测试模块

##### 基础语法

```
npm test [-- <args>]
npm tst [-- <args>]
```

该命令写在package.json文件scripts的test字段中，可以自定义该命令来执行一些操作，如

```
"scripts": {
    "test": "gulp release"
},
```

此时在cmd中输入npm test命令相当于执行gulpfile.js文件自定义的release命令。



### 常见问题

#### 初始化项目,node-sass下载失败

> [node-sass安装失败解决方法汇总 · Issue #311 · iuap-design/blog (github.com)](https://github.com/iuap-design/blog/issues/311)

##### 报错信息

```bash
Downloading binary from https://github.com/sass/node-sass/releases/download/v4.11.0/win32-x64-72_binding.node
Cannot download "https://github.com/sass/node-sass/releases/download/v4.11.0/win32-x64-72_binding.node":

HTTP error 404 Not Found

Hint: If github.com is not accessible in your location
      try setting a proxy via HTTP_PROXY, e.g.

      export HTTP_PROXY=http://example.com:1234

or configure npm proxy via

      npm config set proxy http://example.com:8080
```

根据报错提示,可以通过添加代理的方式来解决问题.但是添加代理后依然会报错. 因为请求的地址返回的404, 这个页面是个空页面.

稳重提到了3种解决方案,我们这里只采用第三种更改特定模块淘宝镜像的方法:

```bash
npm set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

//or

npm i cnpm -g --registry=https://registry.npmmirror.com
cnpm i node-sass
```





### package.json

> 英文原版：https://docs.npmjs.com/files/package.json
>
> 国内整理：《[npm的package.json中文文档](https://github.com/ericdum/mujiang.info/issues/6/)》

以下指示选取了其中几个比较重要的字段:

**name**

在package.json中最重要的就是name和version字段。他们都是必须的，如果没有就无法install。name和version一起组成的标识在假设中是唯一的。改变包应该同时改变version。

name是这个东西的名字。注意：

- 不要把node或者js放在名字中。因为你写了package.json它就被假定成为了js，不过你可以用"engine"字段指定一个引擎（见后文）。
- 这个名字会作为在URL的一部分、命令行的参数或者文件夹的名字。任何non-url-safe的字符都是不能用的。
- 这个名字可能会作为参数被传入require()，所以它应该比较短，但也要意义清晰。
- 在你爱上你的名字之前，你可能要去npm registry查看一下这个名字是否已经被使用了。http://registry.npmjs.org/

**version**

version必须能被[node-semver](https://github.com/isaacs/node-semver)解析，它被包在npm的依赖中。（要自己用可以执行`npm install semver`）

**scripts**

“scripts”是一个由脚本命令组成的hash对象，他们在包不同的生命周期中被执行。key是生命周期事件，value是要运行的命令。

**dependencies**

依赖是给一组包名指定版本范围的一个hash。这个版本范围是一个由一个或多个空格分隔的字符串。依赖还可以用tarball或者git URL。

请不要将测试或过渡性的依赖放在`dependencies`hash中

**devDependencies**

如果有人要使用你的模块，那么他们可能不需要你开发使用的外部测试或者文档框架。

在这种情况下，最好将这些附属的项目列在`devDependencies`中。

这些东西会在执行`npm link`或者`npm install`的时候初始化，并可以像其他npm配置参数一样管理。



### 使用流程

```js
- 在页面中直接调用地址
1.下载到本地
2.页面中使用链接引入

- node环境下如何使用

//引入lodash包
const _=require('lodash');
console.log(_.random(1, 100));
//node调用js文件


- 其他:
包是存在依赖的,下载一个包,可能在下载了多个包
```



#### 团队开发使用流程

```js
# node_modules文件夹是不进入git仓库的,需要在.gitignore中忽略.
# 远端仓库 强推会覆盖远端仓库内容, 语法: git push -u origin master -f

1. 从仓库中拉取仓库代码 //git clone 远端地址
2. 运行 npm install 安装相关依赖 //npm i
3. 运行项目，继续开发


```







```js
npm -version/-v
npm init/i 初始化
npm i --yes 简洁写法 全部采用默认值,但上级路径中不能存在中文
npm search/s name 搜索包
npm install/i name 安装包

//安装到依赖中  包名会被注册在package.json中的dependencies里面,在生产环境下这个包的依赖依然存在.
//安装包并添加到生产中(devdependencies)  6版本可省略,自动添加到依赖中
npm i name --save-dev
npm i name -D

//安装包并添加到开发中(dependencies)
//
npm i name --save
npm i name -S


npm i name -g 全局安装

npm i/install  安装全部依赖
npm i --production 只安装dependencies中的依赖

npm remove/r name1 name2 移除包,可以添加多个包的名字
```



### 封装 NPM 包

创建自己的 NPM 包可以帮助代码进行迭代进化，使用步骤也比较简单

0. 修改为官方的地址 (npm config set registry https://registry.npmjs.org/) 使用非官方地址时才要(淘宝镜像才使用此步)

1. 创建文件夹，并创建文件 **index.js**， 在文件中声明函数，使用 module.exports 暴露
2. 文件夹下 npm 初始化工具包(npm init)，package.json 填写包的信息
3. 账号注册（激活账号）,==完成邮箱验证==
4. 文件夹下,命令行下 『npm login』 填写相关用户信息
5. 文件夹下, 命令行下『 npm publish』 提交包 👌

> npm 有垃圾检测机制，如果名字简单或做测试提交，很可能会被拒绝提交
>
> ==可以尝试改一下包的名称来解决这个问题==



### 升级npm包

升级 NPM 包，需要修改 package.json 中的版本号修改，只需要执行『npm publish』就可以能提交

1. 修改包代码
2. 修改 package.json 中版本号
3. npm publish 提交

### 删除 npm 包

```
npm unpublish 包名 --force
```

### CNPM

#### 介绍

cnpm 是淘宝对国外 npm 服务器的一个完整镜像版本，也就是淘宝 npm 镜像，网站地址:

* 旧地址 http://npm.taobao.org/  (2022.05.31到期)
* 新地址 https://npmmirror.com

#### 安装

安装配置方式有两种

* npm install -g cnpm --registry=https://registry.npmmirror.com
* alias cnpm="npm --registry=https://registry.npmmirror.com \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://registry.npmmirror.com/dist \
  --userconfig=$HOME/.cnpmrc"       (只能在Linux下使用)

#### 使用

配置完成后，就可以使用 cnpm 命令来管理包，使用方法跟 npm 一样

```sh
cnpm install lodash
```

#### npm 配置淘宝镜像地址

```sh
//查看配置的镜像
npm get registry

//淘宝镜像
npm config set registry https://registry.npmmirror.com
//官方镜像   
npm config set registry https://registry.npmjs.org/

```

> 在发布工具的时候, 一定要将仓库地址, 修改为官方的地址

### Yarn

#### 介绍

yarn 是 Facebook 开源的新的包管理器，可以用来代替 npm。

#### 特点

yarn 相比于 npm 有几个特点

* 本地缓存。安装过的包下次不会进行远程安装
* 并行下载。一次下载多个包，而 npm 是串行下载
* 精准的版本控制。保证每次安装跟上次都是一样的

#### 安装

##### yarn 安装: 命令行+安装包

只需要一行命令即可安装 yarn, 缺点:yarn全局命令不生效 解决:添加path变量

```sh
npm install yarn -g
```

##### msi 安装包安装

<https://classic.yarnpkg.com/en/docs/install#windows-stable>

#### 相关命令

yarn 的相关命令

1)  yarn --version //yarn -v

2)  yarn init  //生成package.json   

3)  yarn global add  packageName (全局安装)

​	全局安装路径 `C:\Users\你的用户名\AppData\Local\Yarn\bin`

4)  yarn global remove less (全局删除)

5)  yarn add packageName (局部安装)  //安装在当前文件夹下的node_modules文件夹

6)  yarn add package --dev (开发依赖 相当于npm中的--save-dev)

7)  yarn (global) remove package  移除命令

8)  yarn list //列出已经安装的包名 用的很少

9)  yarn info packageName //获取包的有关信息  几乎不用

10)  yarn //安装package.json中的所有依赖  和npm i的作用一样



> npm 5 引入离线缓存，提高了安装速度，也引入了 package-lock.json 文件增强了版本控制

yarn 修改仓库地址

```sh
yarn config set registry https://registry.npm.taobao.org
```

### CYarn

跟 npm 与 cnpm 的关系一样，可以为 yarn 设置国内的淘宝镜像，提升安装的速度. 基本上用不着

```sh
npm install cyarn -g --registry "https://registry.npm.taobao.org"
```

配置后，只需将yarn改为cyarn使用即可

### bower

```js
下载后,使用link标签引用
```



### 局部装和全局安装

```js
- 局部安装较多
- 全局安装(特定的)有: cnpm nodemon 
```







### 附录

### 关于版本号

版本格式：主版本号.次版本号.修订号

* "^3.0.0" ：锁定主版本，以后安装包的时候，保证包是3.x.x版本，x默认取最新的。
* "~3.2.x" ：锁定小版本，以后安装包的时候，保证包是3.1.x版本，x默认取最新的。
* "3.1.1" ：锁定完整版本，以后安装包的时候，保证包必须是3.1.1版本。

安装指定版本的工具包

```shell
yarn add jquery@1.11.2
```

#### npm 清除缓存

```
npm cache clean
```







### 模块化

#### 组件化好处

```
1.复用性
2.维护性
```



### 介绍

模块化指的就是将一个大的功能拆分为一个一个小的模块，通过不同的模块的组合来实现一个大功能。

- 在node中一个 js 文件就是一个模块
- 模块内部代码对于外部来说都是不可见的，可以通过两种方式向外部暴露

### 模块创建

```js
在模块JS文件中使用module_exports暴露需要引入的对象
```



在文件中对外暴露的两种方法: **module_exports=模块  exports.模块**

```js
function test(){
    return 11;
}

//exports=module.exports={
//一个对象
module.exports = test;
}

//多个对象 ES6对象语法=
module.exoprts={
    test,
    test2
}
=========第二种==============
exports.test=test;
exports.test2=test2;
```

这里有几点注意：

* module.exports 可以暴露任意数据
* 可以使用 module.exports 暴露多个数据
* exports 也可以暴露数据，不过不能使用 `exports = xxx` 的形式
* require返回的是目标模块module.exports的值





### 模块引入

使用 require 引入文件即可

```js
var test = require('./test.js');  
//路径问题: 引入文件时, 无需使用绝对路径.写相对路径就可以,即使更改位置,也不会产生影响.
//require 返回的是目标模块 module.exports 的值
原始多个类型
```

这里有几点注意：

* 如果没有加文件后缀，会按照以下后缀的**顺序**来加载文件
  * .js    fs模块同步读取文件编译执行
  * .json  fs模块同步读取文件，用JSON.parse()解析返回结果. 必须使用双引号,最后一个不写逗号
  * .node 这是c/c++编写的扩展文件，通过dlopen()方法编译
* 其他扩展名  会以.js文件载入
* 如果是文件夹则会默认加载该文件夹下 package.json 文件中 main 属性对应的文件   npm init --yes
* 如果 main 属性对应的文件不存在，则自动找 index.js  index.json 
* 如果是内置模块或者是 npm 安装的模块，直接使用包名字即可 //例如http, fs
* npm 引入包时，如果当前文件夹下的 node_modules 没有，则会自动向上查找

### 简化

引入

```js
下载到本地的包 了解

const _ = require('./node_modules/lodash/lodash.js');
const _ = require('./node_modules/lodash/');
```



导出

```
module.exports       
```

导入

```
var res = require('./module.js');
var name=require('name');
```




