const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hi Docker Rocketseat'})
})

app.listen(3000, () => {
  console.log('Server Started!!')
})