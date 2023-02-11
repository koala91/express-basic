const exp = require('constants');
const express = require('express');
const fs = require('fs');
const { getDb, saveDb } = require('./db')

// 增删改查
const app =  express()
// 配置解析表单请求体：application/json
app.use(express.json())

// 配置解析表单请求体:application/x-www-form-urlencoded
app.use(express.urlencoded())

app.get('/todos', async (req, res) => {
  try {
    const db = await getDb()
    res.status(200).json(db.todos)
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
  // fs.readFile('./db.json', 'utf-8', (err, data) => {
  //   if (err) {
  //     res.status(500).json({
  //       error: err.message
  //     })
  //   }
  //   const db = JSON.parse(data)
  //   res.status(200).json(db.todos)
  // })
  // res.send('get todos');
})

app.get('/todos/:id', async(req, res) => {
  try {
    const db = await getDb()
    const todo = db.todos.find(item => item.id === Number(req.params.id))
    if (!todo) {
      return res.status(404).end()
    }
    res.status(200).json(todo)
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
  // fs.readFile('./db.json', 'utf-8', (err, data) => {
  //   if (err) {
  //     res.status(500).json({
  //       error: err.message
  //     })
  //   }
  //   const db = JSON.parse(data)
  //   const todo = db.todos.find(item => item.id === Number(req.params.id))
  //   if (!todo) {
  //     return res.status(404).end()
  //   }
  //   res.status(200).json(todo)
  // })
  // res.send('get /todos/:id');
})

app.post('/todos', async (req, res) => {
  console.log('req', req.body);
  try {
    // 1. 获取客户端的请求体参数
    const todo = req.body
    // 2. 数据验证
    if (!todo.title) {
      return res.status(422).json({
        error: "the field title is required"
      })
    }
    console.log('ssss');
    // 3. 数据验证通过，把数据存到db中
    const db = await getDb()
    console.log('db', db);
    const lastTodo = db.todos[db.todos.length - 1]
    todo.id = lastTodo ? lastTodo.id + 1 : 1
    console.log('todo-2', todo);
    db.todos.push(todo)
    await saveDb(db)
    // 4. 发送响应
    res.status(200).json(todo)
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
  
  // res.send('post todos');
})

app.patch('/todos/:id', async (req, res) => {
  try {
    // 1. 获取表单数据 
    const todo = req.body
    const db = await getDb()
    const ret = db.todos.find(todo => todo.id === Number(req.params.id))
    if (!ret) {
      return res.status(404).end()
    }
    Object.assign(ret, todo)
    await saveDb(db)
    res.status(200).json(ret)
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
  // res.send('patch /todos/:id');
})

app.delete('/todos/:id', async (req, res) => {
  try {
    const todoId = Number(req.params.id)
    const db = await getDb()
    const index = db.todos.find(item => item.id === todoId);
    if (index === -1) {
      return res.status(404).end()
    }
    db.todos.splice(index, 1)
    await saveDb(db)
    res.status(204).end()
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
  // res.send('delete /todos/:id');
})

app.listen(3000, () => {
  console.log('server running');
})