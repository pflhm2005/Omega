# Omega

-   运行方法

确保有node与mongodb数据库，根目录运行

```javascript
//安装项目依赖
npm install
//先运行数据库
mongod -dbpath "your path"
//热加载模式与普通模式
node-dev app(node app)
```

连接成功后打开localhost:9000，账号密码默认admin



项目结构：

```javascript
|-database 					//数据库相关配置js文件
|---CRUP.js					//封装增删改查模块
|---teacher_information.js	//教师详细信息
|---teacher_list.js			//教师目录
|---user_list.js			//用户目录

|-router 					//路由配置文件夹
|---api_router.js			//负责转接页面请求
|---data_router.js			//负责转接数据请求

|-static					//静态资源文件夹
|---css						//样式文件夹
|------...					//一些样式文件

|---images					//图片资源
|------...					//一些图片资源

|---js						//主JS文件夹
|------common.js			//封装ajax 选择符 表单验证正则模块
|------main.js				//配置vue路由与根元素挂载

|---lib						//第三方js与css文件

|---vue						//vue单文件文件夹

|-app.js					//服务器配置相关
|-package.json				//项目依赖包目录
|-README.md					//略
|-webpack.config.js			//废弃 配置已经在服务器配置文件中合并
```



