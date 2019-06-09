const router = require('koa-router')()
const HomeController = require('./controller/home')

module.exports = (app) => {
    router.get('/', HomeController.index)

    // 请求参数放在 URL 后面
    router.get('/home', HomeController.home)

    // 请求参数放在 URL 中间
    router.get('/home/:id/:name', HomeController.homeParams)

    router.get('/404', async (ctx, next) => {
        ctx.response.body = '<h1>404 Not Found</h1>'
    })

    // 增加返回表单页面的路由
    router.get('/user', HomeController.login)

    // 增加响应表单请求的路由
    router.post('/user/register', HomeController.register)

    // add router middleware:
    app.use(router.routes())
        .use(router.allowedMethods())
}