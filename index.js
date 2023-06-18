const express = require('express')
const app = express()
const port = 3000
//route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Dc ip 127.0.0.1-locallhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})