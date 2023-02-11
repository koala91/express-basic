const express = require('express');

const app =  express()

// 19. 错误处理中间件
// 与其他中间件函数相同的方式定义错误处理中间件函数。
// 错误处理函数始终带有四个参数
// 将任何内容传递给next()函数(字符串route)除外，express都会将当前请求视为错误，并且跳过所有剩余的非错误处理路由和中间件函数

app.get('/', (req, res) => {
  res.send('hello world');
})

// 20. 404中间件
// 请求从上到下依次匹配
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
})

// 21. 内置中间件
// express.json() 解析application/json格式的请求体
// express.urlencoded() 解析application/x-www-form-urlencoded
// express.raw() 解析application/octet-stream
// express.text() 解析text/plain
// express.static() 托管静态资源文件


app.listen(3000, () => {
  console.log('server running');
})