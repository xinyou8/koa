import Router from "koa-router";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = "mongo 默认";
});

router.get("/get-user", async (ctx) => {
  const data = await global.User.findOne({ username: "bxy" });
  const result = {
    code: 200,
    response: data,
    ts: new Date(),
  };
  ctx.response.body = result;
  return result;
});

router.post("/post", async (ctx) => {
  ctx.body = ctx.request.body;
});

module.exports = router;
