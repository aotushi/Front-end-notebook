## 接口调试工具

**资料地址**

> https://juejin.cn/post/6975533854555635726

### Hoppscotch(Postwoman)

#### 在线版本: 

[hoppscotch.io/cn/](https://hoppscotch.io/cn/)

#### Chrome插件

Hoppscotch Browser Extension



### Postman

> 用得少



### 插件类型

#### REST Client

> vscode 插件



#### Talend API Tester





## Git

Git 是一款开源免费的分布式的版本控制系统，是一个应用程序

### 资料

> [Git权威指南 — GotGit](https://gotgit.readthedocs.io/en/latest/index.html)



### 作用

版本控制系统在项目开发中作用重大，主要的功能有以下几点

- 代码备份
- 版本回退
- 协作开发
- 权限控制

### 下载安装

下载地址 <https://git-scm.com/>

安装方式与 QQ 安装相同，一路下一步，中间可以设置软件的安装路径



### Linux 常用命令

Linux 是一套开源免费的操作系统。与系统的交互通常用命令来实现，常用的命令有：

- <span style="color:red">ls</span>         查看文件夹下的文件 （list 单词的缩写）   
- <span style="color:red">cd</span>       进入某一个文件夹内 （change directory 缩写） cd .. 回到上一级  <span style="color:red">Tab 键自动补全路径</span>
- clear   清屏（也可以使用 <span style="color:red">ctrl + l </span> 快捷键）
- mkdir  创建文件夹（make directory）
- touch  test.html   创建一个文件
- rm   test.html   删除文件 remove
- rm  dir   -r   删除文件夹 (-r 删除文件夹选项  -f 强制) force 
- mv   test.html  t.html   移动文件，重命名  move  缩写
- cat   test.html  查看文件内容
- ctrl + c 取消命令 (cancel)
- Tab 自动补齐路径
- <span style="color:red">上下方向键</span>，可以查看命令历史 (history 查看所有的历史命令)

Vim 是一款命令行下的文本编辑器，编辑方式跟图形化编辑器不同

* `vim test.html`  编辑文件（文件不存在则创建）
* i    进入编辑模式(i  insert)
* `ESC` + `:wq` 保存并退出
* `ESC` + `:q!` 不保存并退出

![img](D:/0922frontend/习题&笔记/笔记/assets/vim-vi-workmodel.png)

### Git 使用

```js
官方文档:https://git-scm.com/docs
```





### git传输协议

> [通过 https / ssh 协议推拉代码 - Gitee.com](https://gitee.com/help/articles/4238#article-header0)



### 基本介绍

#### .git 目录

![1576587724690](D:/0922frontend/习题&笔记/笔记/assets/1576587724690.png)

* hooks 目录包含客户端或服务端的钩子脚本，在特定操作下自动执行
* info 信息文件夹. 包含一个全局性排除文件，可以配置文件忽略
* logs 保存日志信息
* objects <span style='color:red'>目录存储所有数据内容</span>,本地的版本库存放位置
* refs 目录存储指向数据的提交对象的指针（分支）
* config 文件包含项目特有的配置选项
* description 用来显示对仓库的描述信息
* HEAD 文件指示目前被检出的分支
* index 暂存区文件，是一个二进制文件  (git ls-files)

> 切记： <span style="color:red">不要手动去修改 .git 文件夹中的内容</span>

#### 版本库的三个区域

* 工作区（代码编辑区）
* 暂存区（修改待提交区）
* 仓库区（代码保存区）

![img](https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2469289094,3249956923&fm=26&gp=0.jpg)

#### 空文件夹无法提交

git和 svn不同，仅仅跟踪文件的变动，不跟踪目录。

```HTML
最主流的做法是，在空目录下创建 .gitkeep 或者 .keep 空文件，或者 .gitignore 文件，这只是一个约定俗成的空目录识别文件名，其实除了占位识别空目录
```



#### 关于颜色

* 红色   红色的文件 修改只存在于『工作区』
* 绿色   绿色的文件 此修改存在于『工作区与暂存区』



### 使用配置

#### 本地生成密钥连接远端

[文章来源](https://juejin.cn/post/6844904008163786765)

本地生成密钥是配合版本工具进行开发.一般本地只有一套密钥,但也可以根据不同的邮箱为多个远端生成相应的密钥.

1.**生成SSH-key**

在git中输入以下命令,路径不影响,会在window系统用户文件夹下的`.ssh`文件夹下生成相应密钥.

```cmd
//生成方法1
ssh-keygen -t ed25519 -C 'email@example.com'ssh-keygen -t ed25519 -C "email@example.com"  -f ~/.ssh/gitlab_id_rsa

//生成方法2
ssh-keygen -o -t rsa -b 4096 -C "email@example.com" -f ~/.ssh/gitlab_id_rsa

//以上两种方法加密方式不同
email@example.com 代表注册Gitlab账号时用的邮箱
-f 代表文件名
~/.ssh/ 代表ssh的文件路径
gitlab_id-rsa 代表ssh文件名（可以自定义）
```



2.**远端网站添加SSH-key**

3.**测试密钥**

以`GitHub`为例，在`GitBash`中输入以下的命令

```js
ssh -T git@github.com
//如果连接成功,会显示相应信息.
```





#### 同一电脑配置多个Git公钥

> [一些常用的 Git 进阶知识与技巧 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/431093836)





[同一台电脑配置Gitee、Github 的 Git SSH公钥](https://blog.csdn.net/u010698107/article/details/113485131)

1.清除git的全局设置

```javascript
//查看全局配置
git config --global --list


//删除全局用户名和邮箱
git config --global --unset user.name
git config --global --unset user.email
```

2.创建ssh key

进入`.ssh`文件夹下, 生成key

```javascript
cd ~/.ssh
ssh-keygen -t rsa -C "xxx@xxx.com" 
//邮件地址为gitee或github使用的邮件地址
```

3.配置github秘钥

```javascript
ssh-keygen -t rsa -C "github使用的邮箱地址"

//设置github的ssh key名称为id_rsa_github
```

4.配置gitee秘钥

```javascript
ssh-keygen -t rsa -C "gitee使用的邮箱地址"
//设置gitee的ssh key保存名称为 id_rsa_gitee
```

5.向github和gitee添加公钥public key

6.创建配置文件,解决ssh冲突

6.1在`.ssh`文件夹下创建config文件

6.2添加内容以区分两个ssh key

```javascript
cd ~/.ssh
vim config

#github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github

#gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitee
```

7.测试链接是否正常

```javascript
ssh -T git@github.com

ssh -T git@gitee.com
```





#### 使用个人令牌方法访问github

**背景**

> 在2021年8月停止使用账号和密码的方式访问github仓库，改为token认证的方式。

**token获取方式**

> setting-->Developer settings-->Personal access tokens--> Generate new token

**本地已有仓库更改密码为token**

> git config --local user.password token    //--local含义为只设置当前仓库的密码 --global就是设置全局的密码





#### 起始配置用户名和邮箱

第一次使用 Git 的时候，会要求我们配置用户名和邮箱，用于表示开发者的信息

```
git config --global user.name "Your Name" 

git config --global user.email "email@example.com" 
```

> 注意命令之间的空格

可以使用 `git config -l `命令来查看配置信息



#### 代理配置

##### HTTP

运行git config之后,可以看到options信息. 在config file location中可以看到又global,system,local,blob等关键字及解释.

global 即是读/写当前用户全局的配置文件(~/.gitconfig 文件，属于某个计算机用户).  --glboal 选项指的是修改 Git 的全局配置文件 ~/.gitconfig，而非各个 Git 仓库里的配置文件 .git/config。protocol 指的是代理的协议，如 http，https，socks5 等。port 则为端口号。

system 即是读写系统全局的配置文件(/etc/gitconfig 文件，属于计算机)

local 即是当前 clone 仓库 的配置文件(位于 clone 仓库下 .git/config)

```js
https://ericclose.github.io/git-proxy-config.html

//查看全局的http https代理 get前面好像没有横线
git config --global --get http.proxy
git config --global --get https.proxy



#http代理
// HTTP 代理 针对所有域名
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy http://127.0.0.1:1080

// Socks5 代理
git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080
这里的 socks5 仅仅是代理使用的协议，它依然是针对 http 设置的，所以仅对 http 协议的仓库有效。使用 git@xxx 这种 ssh 连接的不会使用代理。

//域名代理  git config –global http.url.proxy protocol://127.0.0.1:port Git 不认 https.proxy ，设置 http.proxy 就可以支持 https 了。

git config --global http.https://github.com.proxy http://127.0.0.1:1080


//取消http https代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```



##### SSH

```js
在这种情况下，Git 依靠 ssh 处理连接； 为了通过代理进行连接，您必须配置 ssh 本身，在 ~/.ssh/config 文件中设置 ProxyCommand 选项。Linux 和 macOS 是通过 nc 来执行 ProxyCommand 的，Windows 下则是通过 connect。

//https代理
1.编辑 ~/.ssh/config文件
2.文件添加如下内容
 Host github.com
 	User git
  ProxyCommand connect -H 127.0.0.1:7890 %h %p


Host 后面 接的 github.com 是指定要走代理的仓库域名。
在 ProxyCommand 中，Windows 用户用的是 connect 。
-H 选项的意思是 HTTP 代理。
在调用 ProxyCommand 时，％h 和 ％p 将会被自动替换为目标主机名和 SSH 命令指定的端口（ %h 和 %p 不要修改，保留原样即可）。

//socks5代理
1.编辑 ~/.ssh/config 文件
vim ~/.ssh/config

2.给文件加上如下内容：
Host github.com
    User git
    ProxyCommand connect -S 127.0.0.1:7891 %h %p


解释：
Host 后面 接的 github.com 是指定要走代理的仓库域名。
在 ProxyCommand 中，Windows 用户用的是 connect。
单独的 -S 选项指的就是 socks5 代理
在调用 ProxyCommand 时，％h 和 ％p 将会被自动替换为目标主机名和 SSH 命令指定的端口（ %h 和 %p 不要修改，保留原样即可）。
```





#### 使用ssh或https方式pull/push

```js
//https://www.cnblogs.com/zhoumiao/p/10493403.html

切换成https访问
git remote set-url origin https://...

切换成ssh方法
git remote set-url origin git@...
```



#### 查看本机ssh key公钥

```js
cat ~/.ssh/id_rsa.pub
```



#### 远程仓库

```js
//显示所有远程仓库
git remote -v

//添加远程版本库
git remote add [shortname][url] //shortname为本地的版本库: git rmeote add origin git@github.com:..

//删除远程仓库
git remote rm name

//修改远程仓库名称
git remote rename old_name new_name
```







#### 配置忽略文件.gitigonre

.gitignore 可以在子文件夹下创建

##### 仓库中没有提交该文件

项目中有些文件不应该存储到版本库中，Git 中需要创建一个文件 『.gitignore』 配置忽略，一般与 .git 目录同级。

常见情况有：

1. 临时文件.     
2. 多媒体文件，如音频，视频
3. 编辑器生成的配置文件  (.idea)
4. npm 安装的第三方模块

```js
//以#开始的行,被视为注释

//忽略所有的 .idea 文件夹
.idea
//忽略所有以 .test 结尾的文件
*.test
//忽略 node_modules 文件和文件夹 斜杠加不加都可以
/node_modules

//忽略掉所有文件名是foo.txt的文件
foo.txt

//忽略所有生成的html文件,除了foo.html
*.html
!foo.html

//忽略所有.o和.a文件
*.[oa]
```





##### 仓库中已经提交该文件

```js
//1.对于已经加入到版本库的文件，可以在版本库中删除该文件
git rm --cached .idea

//然后在 .gitignore 中配置忽略
.idea

//最后
add  和 commit 提交即可
```







### 基本操作

#### 初始化及提交

Git 的起始操作包括以下几个步骤

1. 创建并进入空文件夹
2. 右键 -> 点击 Git Bash Here 启动命令行
3. `git init` 仓库初始化
4. 创建一个初始化文件 index.html
5. `git add index.html` 将文件加入到暂存区
6. `git commit -m '注释'`   提交到仓库  m 是 message 单词的缩写





#### 查看暂存区文件

```git
git ls-files
```





#### 常用命令

```js
- git status 版本状态查看 
- git add -A 添加所有新文件到暂存区
- git commit -m '注释 ' 提交修改并注释
- git diff  查看工作区与暂存区的差异（不显示新增文件） 显示做了哪些修改
- git diff --cached 查看暂存区与仓库的差异

```









#### 状态查看

git status 查看当前 Git 仓库的状态

#### 常见状态

```
On branch master    在 master 分支上
nothing to commit, working tree clean  没有什么需要提交, 工作树是干净的
```

工作区的所有的修改都已经提交

```
Untracked files:    未跟踪的文件(新的文件)
  (use "git add <file>..." to include in what will be committed)
        cart.html   
```

有新增文件

```
Changes to be committed:  以下修改将会被提交
  (use "git restore --staged <file>..." to unstage)
        new file:   cart.html
```

暂存区有新的修改, 可以使用 git commit 命令进行提交

```
Changes not staged for commit:  为登上舞台修改提交
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   app.css
        modified:   app.js
```

在工作区对这几个文件进行了内容修改.



### git命令

#### 历史版本回滚

> HEAD指向的版本就是当前的版本,因此git允许我们在版本的历史之间穿梭.
>
> 使用git log查看提交历史,查询需要返回的版本的id
>
> 版本回退之后,需要再次回到回退前,可以使用git reflog查看命令历史, 里面会有需要的版本id

#### 版本回滚的[3种情况](https://blog.csdn.net/weixin_43410419/article/details/84672111):

#### 1.明确知道回退到第几个版本

```js
回到上一个版本: git reset --hard HEAD
回到上上一个版本: git reset --hard HEAD^^
回到20个版本之前: git reset --hard HEAD~20
```

#### 2. 回退版本不确定

```js
1.使用git log 查看每次的提交记录
2.借助id来回退
git reset --hard commit_id  //id可以只简写为前7位. 返回某个节点,不保留修改.

git commit之后,撤销commit提交,却保留代码:
git reset --soft HEAD^ //HEAD^是上一个版本,也可以写成HEAD~1
```

#### 3. 回退到某个文件之后,又需要返回最近更新的某个版本

```js
1. git reflog 查看每一次命令记录
2. git reset --hard commit_id 返回相应的版本
```

#### 4.放弃所有本地修改

```js
git checkout . //在add之前使用,撤销所有的更改. 在add之后使用,无效.
```











#### 分支

分支是 Git 重要的功能特性之一，开发人员可以在主开发线的基础上分离出新的开发线。branch

#### 基本介绍

```js
//为什么使用分支? https://blog.csdn.net/IAlexanderI/article/details/83239459
本来在master分支上开发的,如果我每实现一个小的功能,就进行一次commit的话?那么分支上不就有很多的commit的吗?推送上去,您会看见服务器上有很多不必要的提交,这样子就不简洁了,版本历史也不清楚.但是使用分支,完成一个完整的功能,然后主分支使用 git merge --squash branchName 合并分支,做一个整的提交推送,那么服务器上的历史只有这一个commit的了,这不就简洁了吗?
    

```



#### 基本操作

| 序号 | 参数                   | 描述                            |
| ---- | ---------------------- | ------------------------------- |
| 1    | git branch             | 查看分支                        |
| 2    | git branch name        | 新建分支,其中name为分支名称     |
| 2.5  | git checkout -b name   | 创建并切换分支                  |
| 3    | git checkout name      | 切换到name分支                  |
| 4    | git merge name         | 合并name分支到当前分支          |
| 5    | git branch -d name     | 删除name分支                    |
| 6    | git push -u name:name1 | 提交本地分支name到远程分支name1 |
| 7    | git log                | 查看commit日志                  |

##### 创建分支

name 为分支的名称

```sh
git branch name   
```

查看分支

```sh
git branch
```

##### 切换分支

```sh
git checkout name
```

##### 合并分支 //

```sh
git merge name 需要在主分支下合并
```

##### 删除分支

```sh
git branch -d name
```

##### 创建并切换分支

```sh
git checkout -b name   
```

> 注意:  <span style="color:red;font-weight:bold">每次在切换分支前 提交一下当前分支</span>



```HTML
- git仓库在切换分支前要做好初始化提交
- git仓库不能嵌套
- 分支在合并完毕之后,内容是会保留的
```



#### 冲突

当多个分支修改同一个文件后，合并分支的时候就会产生冲突。冲突的解决非常简单，『将内容修改为最终想要的结果』，然后继续执行 git add 与 git commit 就可以了。

1.定位产生冲突的文件(git status/目录结尾显示merging)

2.修改冲突文件的内容为最终想要的结果

3.git add -A 和 git commit

如何查看冲突: git status或者是目录最后是否出现merging



仓库不能嵌套.在外层使用git命令会报错,内层不会报错.

分支在合并完之后,内容会是保留的



#### commit信息

> [How to Write a Git Commit Message (cbea.ms)](https://cbea.ms/git-commit/?continueFlag=5736f6f7a67304664b0f56b2e45e0238)



**The seven rules of a great Git commit message**

* Separate subject from body with a blank line
* Limit the subject line to 50 characters
* Capitalize the subject line 
* Do not end the subject line with a period
* Use the imperative mood in the subject line
* Wrap the body at 72 characters
* Use the body to explain waht and why vs. how



#### revert commit 与 reset commit

Revert 的指令是**再做一个新的 Commit，来取消你想要撤回的 Commit, 所以会增加一条commit**

在[SourceTree](https://so.csdn.net/so/search?q=SourceTree&spm=1001.2101.3001.7020)中，如果想取消已经commit的code，**可以右击选reverse commit.（撤回 老commit的同时，新建了一个commit)**

如果想撤回[commit](https://so.csdn.net/so/search?q=commit&spm=1001.2101.3001.7020)又不想新加一个commit的话，不要用reverse commit，**而是用Reset 指令**



#### reset rebase  revert的区别

| 指令   | 改变历史记录 | 使用场景                                                     |
| ------ | ------------ | ------------------------------------------------------------ |
| reset  | 是           | 把目前的状态设定成某个指定的 Commit的状态，通常适用于尚未推出去的 Commit。 |
| rebase | 是           | 不管是新增、修改、删除Commit 都相当方便，用来整理、编辑没有推出去的 Commit 相当方便，但通常也只适用于尚未推出去的 Commit。 |
| revert | 是           | 新增一个Commit 来取消另一个Commit 的內容，原本的 Commit 依旧会保存在历史记录中。虽然会因此而增加 Commit 数，但通常比较适用于已经推出去的 Commit，或是不允许使用 Reset 或 Rebase 之修改历史记录的指令的场合。 |









## GitHub

### 介绍

GitHub 是一个 Git 仓库管理网站。可以创建远程中心仓库，为多人合作开发提供便利。

企业中使用的中心仓库大概率不是github,也可能不是码云.公司会搭建属于自己的Git中心仓库服务.

GitLab是一个软件,可以用来搭建类似与github的服务.

### 使用流程



#### 命令介绍

```js
- remote命令
git remove命令是对远程仓库'别名'进行管理
add 添加
origin 原始的起源 别名

 - 删除别名 remove
git remote remove 别名

 - 重命名
 git remote rename one two 把one改为two
 
- Linux命令使用技巧,获取命令帮助
 - 使用-h. 例如git remote -h
 - 使用--help. 两个可以配合使用,一方无法使用使用另一方


# 分支重命名
将当前分支的名称改为main
git branch -M main

# 推送命令
git push -u origin main

git push将本地仓库的[某个分支]推送到远端的仓库的某个分支
- origin 远端仓库的URL的别名(与远端仓库的URL等效的)
- main 本地仓库的分支名
- -u 设置分支的关联
  - 第一次推送时加-u之后,后续再次提交该分支,则不需要再写[别名与分支名]

# 代码推送
git push origin main
 - origin 远端仓库的别名
 - main 要更新的远端仓库的分支名

- 推送之前要先执行一次git pull(下载到本地的和现在云端的内容不一致,已有其他方的提交)

# 代码强制推送
git push -f origin main(或是master)


- github操作指导
…or create a new repository on the command line
echo "# one" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/aotushi/one.git
git push -u origin main
                
…or push an existing repository from the command line
git remote add origin https://github.com/aotushi/one.git
git branch -M main
git push -u origin main
```

#### 推送仓库步骤

```HTML
1.本地创建一个仓库, 并做提交
2.github上创建仓库
3.运行命令推送
 - 3.1 git remote add origin URL
 - 3.2 git branch -M main
 - 3.3 git push -u origin main


如果出现报错:hint: Updates were rejected because the tip of your current branch is behind...

可以强制推送: git push -f origin main

```



#### git clone仓库速度太慢的解决方法

来源:[知乎](https://www.zhihu.com/question/27159393)

1.使用镜像域名

只需要将 [www.github.com](https://link.zhihu.com/?target=http%3A//www.github.com/)/后面为代码库 改为[www.github.com.cnpmjs.org/后面为代码库地址](https://link.zhihu.com/?target=http%3A//xn--www-c88d846h.github.com.cnpmjs.org/%E5%90%8E%E9%9D%A2%E4%B8%BA%E4%BB%A3%E7%A0%81%E5%BA%93%E5%9C%B0%E5%9D%80) 

2.使用代理



GitHub 远程仓库使用流程较为简单，主要有以下几种场景：

#### <span style="color:red">本地有仓库</span>

1. 注册并激活账号

2. 创建仓库

3. 获取仓库的地址

4. 本地配置远程仓库的地址

   ```shell
   git remote add origin https://github.com/xiaohigh/test2.git  
   //远端仓库管理   弗拉基米尔·伊里奇·乌里扬诺夫
   add  添加
   origin 远端仓库的别名
   https://github.com/xiaohigh/test2.git    仓库地址
   
   ```

5. 本地提交（确认代码已经提交到本地仓库）

6. 将本地仓库内容推送到远程仓库

   ```shell
   git push -u origin master
   //
   push 推送
   -u   关联, 加上以后,后续提交时可以直接使用 git push
   origin 远端仓库的别名
   master 本地仓库的分支
   ```



#### git本地分支关联远程仓库分支

```js
git pull origin develop
获取远程仓库中 develop 分支上的 commits，然后把origin/develop merge 到你目前 checkout 下来的分支中

```



#### <span style="color:red">本地没有仓库</span>

1. 注册并激活账号

2. 克隆仓库

   ```shell
   git clone https://github.com/xiaohigh/test2.git 
   ```

3. 增加和修改代码

4. 本地提交

   ```shell
   git add -A
   git commit -m 'message'
   ```

5. 推送到远程

   ```shell
   git push origin master
   ```

> 克隆代码之后， 本地仓库会默认有一个远程地址的配置， 名字为 origin

#### <span style="color:red">多人合作</span>

##### 账号仓库配置

GitHub 团队协作开发也比较容易管理，可以创建一个组织

- 首页 -> 右上角 `+` 号-> new Organization
- 免费计划
- 填写组织名称和联系方式（不用使用中文名称）
- 邀请其他开发者进入组织（会有邮件邀请）

* 点击组织右侧的 settings 设置
* 左侧 Member privileges
* 右侧 Base permissions 设置 write 👌

##### 协作流程

第一次

* 得到 Git 远程仓库的地址和账号密码

* 将代码克隆到本地（地址换成自己的）

  ```shell
  git clone https://github.com/xiaohigh/test.git
  
  - 第二种写法
  git clone https://github.com/xiaohigh/test.git 文件夹名称
  ```

* 切换分支

  ```
  git checkout -b xiaohigh //命名规则:自己名字/当前开发功能命名
  ```

* 开发代码

* 本地提交

  ```shell
  git add -A
  git commit -m '注释内容'
  ```

* 合并分支

  ```shell
  git checkout master  //切换到主分支之下
  git merge xiaohigh
  ```

* 更新本地代码

  ```shell
  git pull  //前提远端仓库已有其他方进行了更新,和当前本地clone下来的已不一致
  ```

* 提交代码

  ```shell
  git push 
  ```

##### 工作流程

第二次流程(在原先的文件夹内)

1. 更新代码

   ```
   git checkout master
   git pull
   ```

2. 切换并合并分支 //切换并新建分支

   ```
   git checkout xiaohigh
   git merge master
   
   //
   git checkout -b newbranch
   ```

3. 开发功能

4. 提交

   ```
   git add -A
   git commit -m '注释'
   ```

5. 合并分支

   ```
   git checkout master
   git merge xiaohigh
   ```

6. 更新代码

   ```
   git pull
   ```

7. 推送代码

   ```
   git push
   ```

##### 冲突解决

同分支冲突一样的处理，将代码调整成最终的样式，提交代码即可。



### github使用场景

#### 1.github远程仓库名或地址更改,本地如何同步?

```js
1.查看本地仓库地址
git remote -v
2.删除远程仓库地址
git remote rm origin
3.添加远程仓库(修改过名字的)
git remote add origin 地址
4.同步
git pull origin master

//其他 推送可能遇到的问题 上游无分支
git push --set-upstream origin master
```



### GitFlow

GitFlow 是团队开发的一种最佳实践，将代码划分为以下几个分支

![img](D:/0922frontend/习题&笔记/笔记/assets/o_git-workflow-release-cycle-4maintenance.png)

- Master 主分支。上面只保存正式发布的版本
- Hotfix  线上代码 Bug 修复分支。开发完后需要合并回Master和Develop分支，同时在Master上打一个tag
- Feather 功能分支。当开发某个功能时，创建一个单独的分支，开发完毕后再合并到 dev 分支
- Release 分支。待发布分支，Release分支基于Develop分支创建，在这个Release分支上测试，修改Bug
- Develop 开发分支。开发者都在这个分支上提交代码

首次克隆完代码后，只要有4个分支(master hotfix release develop),需要切换到开发分支

```sh
//查看所有分支
git branch -a
//切换到开发分支
git checkout  dev

//提交的话一般只是提交更改的分支,其他分支不必提交
```

## 附录

### Git 官方书籍

[https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6](https://git-scm.com/book/zh/v2/起步-关于版本控制)

### CRLF

CRLF 是Carriage-Return Line-Feed 的缩写。

CR 表示的是 ASCII 码的第 13 个符号 \r 回车，LF 表示的是 ASCII 码表的第 10 个符号 \n 换行。

每个操作系统对回车换行的存储方式不同

* windows 下用 CRLF（\r\n）表示
* linux 和 unix 下用 LF（\n）表示
* mac 系统下用 CR（\r）表示

![打字机](D:/0922frontend/习题&笔记/笔记/assets/打字机.jpg)

### 

### 常见错误

#### 回车换行转换问题

```sh
warning: LF will be replaced by CRLF in 5.html.
The file will have its original line endings in your working directory
```

这个问题主要是 Git 在你提交时自动地把回车（CR）和换行（LF）转换成换行（LF），没有影响，<span style="color:red">这里建议大家保留这个状态</span>。可以通过下面的命令设置不转换，但是不推荐

```sh
git config --global core.autocrlf false // 不推荐
```

#### 提交报错

![img](D:/0922frontend/习题&笔记/笔记/assets/1532788288.bmp)

其他人已经提交过，本地代码需要更新，首先运行 git pull 命令



#### 冲突提醒

![1574235172869](D:/0922frontend/习题&笔记/笔记/assets/1574235172869.png)

编辑冲突

#### 提交错误

```sh
xiaohigh@DESKTOP-252ML8M MINGW64 /d/www/BJ0819/day13/代码/1-GitHub/7-test-ssh/8-https-to-ssh (master)
$ git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master
```

如果第一次将本地仓库分支提交到远程时，直接使用 `git push` 可能会报这个错误，解决方法

```sh
git push -u origin master
```

### 提交错误

![1576840150520](D:/0922frontend/习题&笔记/笔记/assets/1576840150520.png)

当前所在文件夹不是一个 git 仓库目录，切换目录工作

### 找不到 .git 的方法

![1582943996890](E:\github\notebook\note2\assets\1582943996890.png)





## VIM

### 基本操作

> [萌新的hhkb上手教程 | dOwOb](https://dowob.cn/2019/03/27/萌新的hhkb上手教程/)
>
> [VS Code 与 Vim | Jingchao's Blog (chengjingchao.com)](https://chengjingchao.com/2020/06/13/VS-Code-与-Vim/)
>
> [VSCodeVim 最佳实践_gneveek的博客-CSDN博客](https://blog.csdn.net/gneveek/article/details/104014551)
>
> [VSCodeVim 最佳实践 | 周岩的 BLOG (zhouyanlt.github.io)](https://zhouyanlt.github.io/vim/2019/09/20/vscode-vim-best-practices.html)



### 光标移动

#### 快速跳到下一个空格

* 大写E+小写l
* f+`<space>` 或 f+`<tab>`







### 操作



#### 对一个单词进行操作



### 记录与回放

例如: 多行添加相同注释

```vim
1. 按'q',进入记录与回放模式
2. 按'a',将接下来的操作记录到字符'a'中  //字母a不限制,也可以是其他字符
3. 具体操作过程. 注意: 鼠标移动使用vim快捷键
4. 光标移到下一行,按'q'结束记录
5. 按 '@a',重播记录
6. 按 'n@a', 在接下来的n行重播记录
```



### 替换

> [在 Vim 中优雅地查找和替换 | Harttle Land](https://harttle.land/2016/08/08/vim-search-in-file.html)

#### 语法

```
:{作用范围}s/{目标}/{替换}/{替换标志}
```

例如 `:%s/foo/bar/g` 会在全局范围(`%`)查找 `foo` 并替换为 `bar`，所有出现都会被替换（`g`）



#### 作用范围

作用范围分为当前行,全文,选取等等.

当前行替换:

```
:s/foo/bar/g
```

全文：

```
:%s/foo/bar/g
```

选区，在 Visual 模式下选择区域后输入 `:`，Vim 即可自动补全为 `:'<,'>`。

```
:'<,'>s/foo/bar/g
```

2-11 行：

```
:5,12s/foo/bar/g
```

当前行 `.` 与接下来两行 `+2`：

```
:.,+2s/foo/bar/g
```

#### 替换标志符

上文中命令结尾的 `g` 即是替换标志之一，表示全局 `global` 替换（即替换目标的所有出现）。 还有很多其他有用的替换标志：

空替换标志表示只替换从光标位置开始，目标的第一次出现：

```
:%s/foo/bar
```

`i` 表示大小写不敏感查找，`I` 表示大小写敏感：

```
:%s/foo/bar/i
# 等效于模式中的\c（不敏感）或\C（敏感）
:%s/foo\c/bar
```

`c` 表示需要确认，例如全局查找 `"foo"` 替换为 `"bar"` 并且需要确认：

```
:%s/foo/bar/gc
```

回车后 Vim 会将光标移动到每一次 `"foo"` 出现的位置，并提示

```
replace with bar (y/n/a/q/l/^E/^Y)?
```

按下 `y` 表示替换，`n` 表示不替换，`a` 表示替换所有，`q` 表示退出查找模式， `l` 表示替换当前位置并退出。`^E` 与 `^Y` 是光标移动快捷键，参考： [Vim 中如何快速进行光标移动](https://harttle.land/2015/11/07/vim-cursor.html)。



#### 在选中的文本中替换某个词

在步骤1的情况下,输入`:`, vim会在命令行中自动添加`'<,'>`,这个时候紧跟着在其后输入`s/pattern/word/g`.

```bash
'<,'>s/haha/hehe/g
```

回车结束后,选中文本中所有的haha都会被替换成hehe.

替换的时候,最好还是一个个确认,加上c:

```bash
'<,'>s/haha/hehe/cg
```



### 搜索

#### 在选中的段落中搜索

选中的段落是在视图模式下选中的,然后在搜索命令后添加加搜索目标单词targetWord

```bash
/\%VtargetWord
```

回车结束后,在选中的文本中搜索'hello'这个词.





#### 快速搜索某个变量

光标移到想搜索的那个函数名或变量名上，按`*`就可以搜索了，按`n`下一个，按`N`上一个

##### 示例

快速查询变量定义的位置

* 先在这个变量上按下`*`键
* 按`gg`回到首行
* 按`n`到下一个它出现的位置
* 按`zz`调整到屏幕中间,便于查看





### 行级操作

#### 删除一行

`dd`

#### 注释一行

`gcc`   `gc` 是 `go comment`, 两个 c 表示注释一行

#### 左移一行

`<<`

#### 右移一行

`>>`



### 多行操作

1. 光标移到想要删除或注释的第一行
2. 通过左边的相对行号，看一下想操作的最后一行的相对行号n
3. 得出要操作的行数 m = n+1 (因为光标所在那行相当于第0行，所以要+1)
4. 这时就可以用 Vim 的多行操作了，删除一行是 dd, **删除多行是 mdd**; 注释一行是 gcc, **注释多行是 mgcc**, 其他的类推



### 调整光标所在的位置

#### 快速调到某行号

* `:行号数字`
* `行号数字gg`





#### 调整光标所在行在屏幕中的位置

- `zz` 调整光标所在行到屏幕中间 (z 什么意思我也不知道，就硬记吧)
- `zt` 调整光标所在行到屏幕最上方 (t == top)
- `zb` 调整光标所在行到屏幕最下方 (b == bottom)







### 高亮显示搜索项

vscode中通过setting.json设置`vim.hlsearch: true`实现

### 取消高亮

`:noh`

或

`/aaa` 随便输入搜索内容,例如'aaa'





### 复制/粘贴/剪贴

#### 复制

在 vim 中，可以使用 `y` 命令进行复制，输入该命令之后，还需要再输入一个 *motion* 操作符来指定要复制字符、单词、还是行，具体说明如下：

- yw
  复制一个单词 (包括单词后面的空白字符)
- ye
  复制一个单词 (不包括单词后面的空白字符)
- yl
  复制当前光标下的字符
- yh
  复制光标前面的一个字符
- 4yl
  复制当前光标下的字符、以及后面三个字符，总共四个字符
- 4yh
  复制光标前面的四个字符 (不包括当前光标所在的字符)
- yy
  复制当前光标所在的一整行
- 4yy
  复制当前光标所在的行、以及后面三行，总共四行



**复制到空格之前的位置**

* y+E
* y+f+`<space> 或 <tab>`







#### 粘贴

* p(小写) 在光标位置之后粘贴
* P(大写) 在光标位置之前粘贴



### 折叠

> [VS Code VIM 插件高效使用|OhYee 博客](https://www.ohyee.cc/post/note_vim)

- zc 折叠代码块
- zo 展开代码块
- za 切换折叠
- zR 展开所有
- zM 折叠所有



## VSCODE

### 基本配置



### vscode调试vue/react

> https://mp.weixin.qq.com/s/ryBuaX6_KcBVEnd_whk8xw

[第一次使用VS Code时你应该知道的一切配置 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903826063884296)



### 用户设置

```
editor.codeActionsOnSave中的source.organizeImports属性，这个属性能够在保存时，自动调整 import 语句相关顺序，能够让你的 import 语句按照字母顺序进行排列，推荐设置为true,即"editor.codeActionsOnSave": { "source.organizeImports": true }；
```



















### 调试vue的步骤

##### 1. 新建`./vscode/launch.json`

##### 2.内容

```json
{
  "configurations": [
    {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "pwa-chrome",
      "url": "http://localhost:8080",
      "sourceMapPathOverrides": {
      	"webpack://test-vue-debug/src/App.vue?11c4 ": "${workspaceRoot}/src/*"
    	}
    }
  ]
}
```

##### 3.webpach设置output

```javascript
output: {
  devtoolModuleFilenameTemplate: 'webpack调试://[resource-path]'
}
```









## 杂项

### 代码分享工具

> [使用 Carbon 和 Polacode 创建代码截图_超级大洋葱806的博客-CSDN博客_polacode怎么截图](https://blog.csdn.net/u014779536/article/details/107309638)

* polacode
* Carbon







































