const express = require('express')

const app = express()

app.get('/', (req, res) => {
  const today = new Date()

  res.send(`${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`)
})

module.exports = app
