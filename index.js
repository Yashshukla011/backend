const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000
app.get('/yash', (req, res) => {
const arr = {
    Teacher: "Homework kyun nahi kiya?",
    Student: "Sir, light nahi thi."
  };

  const arr1 = {
    Teacher: "Homework kyun nahi kiya?",
    Student: "Sir, light nahi thi."
  };

  const arr2 = {
    Teacher: "Homework kyun nahi kiya?",
    Student: "Sir, light nahi thi."
  };

  res.json([arr, arr1, arr2]); 
})
app.get('/p', (req, res) => {
res.send("mohan")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
