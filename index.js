const Koa = require('koa');
const app = new Koa();
var Router = require('koa-router');
var router = new Router();
const PORT = 8088;
 
router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello World!';
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

//成功启动应用
// start   
app.listen(PORT, () => {
    console.log('Server started at port', PORT);
});

module.exports = app