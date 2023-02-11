const express = require('express');

const app =  express()

// 17.应用程序级别中间件

// 应用程序级别中间件：不做任何限定条件
app.use((req, res, next) => {
  console.log('不做任何限定条件', req.method,  req.url, Date.now());
  next()
})

// 应用程序级别中间件：限定请求路径
app.use('/user/:id', function (req, res, next) {
  console.log('限定请求路径', req.method,  req.url, Date.now());
  next()
})

// 应用程序级别中间件：限定请求方法+请求路径
app.get('/user/:id', function (req, res, next) {
  console.log('限定请求方法+请求路径', req.method,  req.url, Date.now());
  next()
})

// 应用程序级别中间件：多个处理函数
app.get('/user/:id', function (req, res, next) {
  console.log('多个处理函数', req.method,  req.url, Date.now());
  next()
}, function (req, res, next) {
  console.log('多个处理函数', req.method,  req.url, Date.now());
  next()
})



app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(3000, () => {
  console.log('server running');
})