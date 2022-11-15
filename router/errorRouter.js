import Router from 'koa-router';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

const router = new Router();

// 访问不存在路由会直接出现狗
router.get('/',  async (ctx) => {
    const filePath = path.join(__dirname, '../assets/dog.jpg');
    const file = fs.readFileSync(filePath); // 读取文件
    const mimeType = mime.lookup(filePath); // 读取文件类型
    ctx.set("content-type", mimeType);
    ctx.body = file
})


module.exports = router
