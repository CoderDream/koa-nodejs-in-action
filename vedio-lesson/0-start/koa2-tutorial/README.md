
## 

```
中间件1 doSomething
中间件2 doSomething
中间件3 doSomething
中间件3 end
中间件2 end
中间件1 end
请求地址: /，响应时间：2ms
```

```javascript
app.use(async (ctx, next) => {
    console.log('中间件2 doSomething')
    // 注意，这里我们删掉了 next
    // await next()
    console.log('中间件2 end')
})
```

```
中间件1 doSomething
中间件2 doSomething
中间件2 end
中间件1 end
请求地址: /，响应时间：2ms
```