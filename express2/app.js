const express = require('express');

const app =  express()

app.get('/', (req, res) => {
  // console.log('req', req);
  // console.log('res', res);
  res.send('hello world');
})

app.post('/', (req, res) => {
  res.send('post-request');
})

app.put('/', (req, res) => {
  res.send('put-request');
})

app.delete('/', (req, res) => {
  res.send('delete-request');
})

app.listen(3000, () => {
  console.log('server running');
})