"use strict"

const Koa = require('koa')
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

// 应用bodyParser
app.use(bodyParser())

// 调用router
router(app)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})