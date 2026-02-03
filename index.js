const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send([{
    id:"yash",
    name:"34"
},
{
    id:"yash",
    name:"34"
}])
})
app.get('/p', (req, res) => {
res.send("yash shukla")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
