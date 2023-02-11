const express = require('express');

const app =  express()

// 22 第三方中间件
// 早期express内置了很多中间件。后来express在4.x之后移除了这些中间件。
// 官方把这些功能性中间件以包的 形式单独提供出来，这样做的目的是保持express本身极简灵活的特性
// 开发人员可以根据自己的需要去灵活的使用
// http://expressjs.com/en/resources/middleware.html (中间件)


app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(3000, () => {
  console.log('server running');
})