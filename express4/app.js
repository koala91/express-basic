const express = require('express');

const app =  express()

const myLogger = (req) => {
  console.log(req.method,  req.url, Date.now());
}
// 中间件的顺序很重要
// req 请求对象
// res 响应对象
// next下一个中间件
app.use((req, res, next) => {
  console.log(req.method,  req.url, Date.now());
  next()
})
// 15.
// AOP面向切面编程
// 将日志、性能统计、安全控制、事物处理、异常处理等代码从业务逻辑中划分出来
// 总结：在现有代码程序中，在程序生命周期或者横向流程中 加入或者减去 一个或者多个功能，不影响原有功能。

// 16.
// 中间件是一个可以请求访问对象、响应对象和调用next方法的一个函数

// express中的中间件分为
// 应用程序级别中间件：app.use()或者app.get()
// 路由级别中间件、
// 错误处理中间件、
// 内置中间件、
// 第三方中间件



app.get('/', (req, res) => {
  res.send('get /');
})

app.get('/about', (req, res) => {
  myLogger(req)
  res.send('get about')
})

app.post('/login', (req, res) => {
  res.send('post /login')
})

app.listen(3000, () => {
  console.log('server running');
})