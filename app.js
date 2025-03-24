// const express = require('express')
// const app = express()
// const {format} = require('date-fns')

// app.get('/', (response, request) => {
//   const today = new Date()
//   const formattedDate = format(today, 'dd-MM-yyyy')
//   response.send(formattedDate)
// })

// app.listen(3000)

// module.exports = app

const express = require('express')
const {format} = require('date-fns')

const app = express()

app.get('/', (req, res) => {
  const today = new Date()
  const formattedDate = format(today, 'dd-MM-yyyy')
  res.send(formattedDate)
})

module.exports = app
