// const Koa = require('koa2');  esmodule插件之前的引入写法

import Koa from "koa2";
import cors from "koa2-cors";
import bodyParser from "koa-bodyparser";
import sta from "koa-static";
import path from "path";
import router from "./router/index.js";
import mongoose from "mongoose";
var os = require("os");




const app = new Koa();
const port = 5050;

// 跨域访问
app.use(
  cors({
    maxAge: 100,
    credentials: true,
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "X-Custom-Header",
      "anonymous",
    ],
  })
);




mongoose.connect("mongodb://localhost/testDB");

// 账户的数据库模型
var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});
var User = mongoose.model("User", UserSchema);

// 新增数据
var user = {
  username: "bxy",
  password: "123123",
  email: "",
};
var newUser = new User(user);
newUser.save();

global.User = User;



// 在 router.routes 之前注入 bodyParser
app.use(bodyParser()); // 解析request的body


/**
 * 测试中间件调用顺序
 */

app.use(async (ctx, next) => {
    console.log('log1 start');
    await next();
    console.log('log1 end');
})
app.use(async (ctx, next) => {
    console.log('log2 start');
    await next();
    console.log('log2 end');
})



/**
 * 给所有未匹配到的路由一个去处
 */

// 所有匹配不到的都走404
app.use(async (ctx, next) => {
  await next();
  if (parseInt(ctx.status) === 404) {
    ctx.response.redirect("/404");
  }
});

// 静态资源访问
// 这样添加后直接访问 http://localhost:5050/dog.jpg 就出现狗了
app.use(sta(path.join(__dirname, "/assets")));

/**
 * 如果这里有一个没有使用next()的中间件
 * 那后面的router中间件将不会调用，路由失效
 */
// app.use(async () => {
//     console.log('3');
// })


/**
 * 应用实际路由
 */
app.use(router.routes(), router.allowedMethods());


app.listen(port, () => {
  console.log("Server is running...");
// CPU 的字节序
// 操作系统名
// 系统内存总量
// 操作系统空闲内存量
console.log(`
endianness : ${os.endianness()}
type: ${os.type()}
platform : ${os.platform()}
total memory : ${os.totalmem()} bytes
free memory : ${os.freemem()} bytes
`);
});
