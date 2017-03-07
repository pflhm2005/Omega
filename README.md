# Omega

-   运行方法

确保有node，根目录运行

```javascript
npm install
//热加载模式与普通模式
node-dev app(node app)
```



项目结构：

```javascript
-router 					//路由配置文件夹
--api_router.js				//路由js文件 负责转接请求

-static						//静态资源文件夹
--css						//样式文件夹
---...

--images					//图片资源
---...

--js						//主JS文件夹
---common.js				//暂时封装了一个ajax模块
---main.js					//配置vue路由与根元素挂载

--lib						//第三方js与css文件

--vue						//vue单文件文件夹

-app.js						//服务器配置相关
-package.json				//项目依赖包目录
-README.md					//略
-webpack.config.js			//废弃 配置已经在服务器配置文件中合并
```



