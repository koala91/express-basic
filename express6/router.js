// 路由模块
const express = require('express')

// 1. 创建路由实例
// 路由实例相当于一个mini版本的express
const router = express.Router()

// app.get()
// app.post()

// 2. 配置路由
router.get('/foo', (req, res) => {
  res.send('get foo')
})

router.post('/foo', (req, res) => {
  res.send('post /foo')
})

// 3. 导出路由实例
module.exports = router

// 4. 路由继承到express实例中