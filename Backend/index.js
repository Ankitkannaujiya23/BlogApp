const connectToMongo=require('./database');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000


app.use(express.json())
app.use(cors())
 
//Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/books', require('./routes/books'))
app.listen(port, () => {
  console.log(`Library App Backend listening at http://localhost:${port}`)
})