"use strict"

const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
})
// 请求参数放在 URL 中间
router.get('/home/:id/:name', async (ctx, next) => {
    console.log(ctx.params)
    ctx.response.body = '<h1>HOME page ' + ctx.params.id + ' ' + ctx.params.name + '</h1>'
})

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>'
})

// add router middleware:
app.use(router.routes())

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})