import Router from 'koa-router';

const mongoRouter = require('./mongoRouter');
const prefixRouter = require('./prefixRouter');
const errorRouter = require('./errorRouter');

const router = new Router();

// 支持exact "/prefix"
router.get('/prefix', async (ctx) => {
    ctx.body = 'prefix列表'
})

router.use('/mongo', mongoRouter.routes(), mongoRouter.allowedMethods())
router.use('/prefix', prefixRouter.routes(), prefixRouter.allowedMethods())
router.use('/404', errorRouter.routes(), errorRouter.allowedMethods())


router.redirect('/', '/mongo'); //重定向
module.exports = router;
