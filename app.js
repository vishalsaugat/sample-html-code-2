const express = require('express')
const app = express()
const port = 80 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World! Version 2')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})