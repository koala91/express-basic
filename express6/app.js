const express = require('express');

const app =  express()
const router = require('./router')

// 18 路由器级别中间件

// 路由器中间件与应用程序级中间件 的工作方式相同，只不过它绑定到的实例express.Router()

// 挂载路由
app.use(router)

// 给路由限定访问前缀
app.use('/test', router)

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(3000, () => {
  console.log('server running');
})