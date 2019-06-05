const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const Router = require('koa-router')
const app = new Koa()

const forums = new Router()
const posts = new Router()

const router = new Router({
    prefix: '/users'
})

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>responds to "/users"</h1>'
}) // responds to "/users"

router.get('/:id', async (ctx, next) => {
    ctx.response.body = '<h1>responds to "/users/:id"</h1>'
}) // responds to "/users/:id"

app.use(router.routes())

app.listen(3000, ()=>{
    console.log('server is running at http://localhost:3000')
})