## Project

项目代码配置及特色记录学习，同时也更新涉及到的基础知识。搭配Microsoft TODO

| data       | 更新内容 | 其他 |
| ---------- | -------- | ---- |
| 2021/10/18 |          |      |
|            |          |      |
|            |          |      |
|            |          |      |
|            |          |      |





### 1 基础配置

#### 1.1 第三方调试工具vconsole

移动端项目添加本地代码调试工具vconsole，同时添加插件devtools，获得浏览器中vue开发者工具体验

vconsole项目地址：[链接](https://github.com/Tencent/vConsole)

vue-vconsole-devtools项目地址： [链接](https://github.com/Zippowxk/vue-vconsole-devtools)

代码位置： 实例化项目之前

灰度环境和测试环境开启代码调试工具，生产环境需要关闭

```javascript
//main.js


import Vconsole from 'vconsole';
import { initPlugin } from 'vue-vconsole-devtools';

if ([2,3]).indexOf(private_environment) >= 0) {
  initPlugin(new Vconsole());
  window.__Vue_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue);
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
```



#### 1.2 import()方法使用







### 2 通信

#### 2.1 axios封装



### 3 动态组件





### 4 公共方法





### 5 样式SCSS

#### 



### 其他 正则语法

```js
```



