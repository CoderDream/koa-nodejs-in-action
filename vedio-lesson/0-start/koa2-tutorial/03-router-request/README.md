
## Http 请求

### 请求参数放在 URL 后面

```javascript
http://localhost:3000/home
```

```javascript
[Object: null prototype] {}
```



```javascript
http://localhost:3000/home?id=12&name=ikcamp
```

```javascript
[Object: null prototype] { id: '12', name: 'ikcamp' }
id=12&name=ikcamp
```

### 请求参数放在 URL 中间

```javascript
http://localhost:3000/home/123/Jack
```

```javascript
HOME page 123 Jack
```

- 控制台
```javascript
{ id: '123', name: 'Jack' }
```

### 请求参数放在 body 中

- 先引用，再使用
```javascript
const bodyParser = require('koa-bodyparser')

// 应用bodyParser
app.use(bodyParser())
```

- 增加表单方法和响应方法
```javascript
// 增加返回表单页面的路由
router.get('/user', async (ctx, next) => {
    ctx.response.body =
        `
      <form action="/user/register" method="post">
        <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456"/>
        <br/> 
        <button>GoGoGo</button>
      </form>
    `
})

// 增加响应表单请求的路由
router.post('/user/register', async (ctx, next) => {
    let {name, password} = ctx.request.body
    if (name === 'ikcamp' && password === '123456') {
        ctx.response.body = `Hello， ${name}！`
    } else {
        ctx.response.body = '账号信息错误'
    }
})
```

- 浏览器URL
```javascript
http://localhost:3000/user
```

- 输入正确信息（ikcamp和123456）和错误信息，返回不同结果
```javascript
Hello， ikcamp！

账号信息错误
```