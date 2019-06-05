const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')()
const app = new Koa()

router.get('user', '/users/:id', function (ctx, next) {
    ctx.response.body = '<h1>user page</h1>'
});

const userURL = router.url('user', 3);
console.log('userURL: ', userURL)
// => 生成路由 "/users/3"

const userURL2 = router.url('user', { id: 4 });
console.log('userURL2: ', userURL2)
// => 生成路由 "/users/4"

// router.use(function (ctx, next) {
//     // 重定向到路由名称为 “sign-in” 的页面
//     ctx.redirect(ctx.router.url('sign-in'));
// })

// 调用路由中间件
app.use(router.routes())

app.listen(3000, ()=>{
    console.log('server is running at http://localhost:3000')
})