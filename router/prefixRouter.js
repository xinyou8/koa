import Router from 'koa-router';

const router = new Router({
    prefix: '/prefix-router' // 公共前缀，也可使用下面方法2配置
});


// router.prefix('/prefix-router') // 方法2

router.get('/',  async (ctx) => {
    ctx.body =  {errno:0 ,message: 'this is json'} // 自动设置application/json
})


module.exports = router
