const express = require('express')
const cors = require('cors')

const app = express()

const { verify, overDue } = require('./Middleware/verify')

const article = require('./Routes/article')
const user = require('./Routes/user')
//设置允许任何源访问
app.use(cors())

app.use(express.json())

app.use('/api/article', verify, overDue, article)
app.use('/api/user', user)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
