# 创建项目
1. 创建空白文件夹
2. 创建npm管理 
  npm init -y
3. 安装koa2
  npm i koa2 -S
4. 实时更新
  发现没有热更新，每次都要重新启动，安装 nodemon 
   npm install nodemon --save
   修改 package.json
5. esmodule语法
   // https://juejin.cn/post/6844903685164646413 四里
   node不支持import..记得重新启动

# 入口文件

1. 测试中间件执行顺序，log1 和 log2
3. 写路由，安装 koa-router
   npm i koa-router -S
4. 路由拆分文件夹
5. 允许跨域请求  
   npm i --save koa2-cors
6. 解析post请求body参数
   npm install koa-bodyparser --save
6. 读取静态资源文件
   npm i --save koa-static
7. 文件读取
   npm i --save mime-types

# mongodb
1. 安装，自行搜索文章  https://blog.csdn.net/crsitin_spade/article/details/121383699    https://www.cnblogs.com/TM0831/p/10606624.html
   https://blog.csdn.net/zhongkaigood/article/details/81475904  记得不要勾选那个图形化工具
2. 可以傻一点，主动点击 mongod.exe，启动mongodb
2. npm install mongoose --save
3. 编写代码，可以读取数据库
