# 一、vue脚手架rem适配

1. 初始化vue脚手架

   ```
   vue create hello-world
   ```

2. 安装依赖：

   ```js
   yarn add postcss-loader postcss-px2rem
   ```

3. 根目录下建立：vue.config.js ，内容如下：

   ```js
   var px2rem = require('postcss-px2rem');
   
   module.exports = {
     css: {
       loaderOptions: {
         postcss: {
            plugins:[px2rem({remUnit: 375/10})] //375是设计稿宽度
         }
       }
     }
   }
   ```

4. src目录下建立rem.js，内容如下(给不同设备设置根字体大小)：

   ```js
   function adapter (){
   	const dp = document.documentElement.clientWidth
   	const rootFontSize = dp/10
   	document.documentElement.style.fontSize = rootFontSize + 'px'
   }
   adapter()
   window.onresize = adapter
   ```



# 二、react脚手架rem适配

1. 初始化react脚手架

   ```
   create-react-app hello_react
   ```

2. 安装依赖

   ```
   yarn add postcss-px2rem customize-cra react-app-rewired
   ```

3. 根目录下建立：config-overrides.js ，内容如下：

   ```js
   const { override,addPostcssPlugins } = require('customize-cra');
   
   module.exports = override(
       //此处375是设计稿宽度
   	addPostcssPlugins([require("postcss-px2rem")({ remUnit: 375/10 })])
   );
   ```

4. 更改package.json中的启动命令，如下：

   ```json
   "scripts": {
       "start": "react-app-rewired start",
       "build": "react-app-rewired build",
       "test": "react-app-rewired test",
       "eject": "react-app-rewired eject"
    },
   ```

5. src目录下建立rem.js，内容如下(给不同设备设置根字体大小)：

   ```js
   function adapter (){
   	const dp = document.documentElement.clientWidth
   	const rootFontSize = dp/10
   	document.documentElement.style.fontSize = rootFontSize + 'px'
   }
   adapter()
   window.onresize = adapter
   ```

