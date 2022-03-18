const express = require('express')
const path =require('path')
const app=express()
app.use(express.json())

//routers
const postRouter= require("./routes/Posts")
app.use("/posts", postRouter)

const db= require('./models')
db.sequelize.sync().then(()=>{
    app.listen(3002, ()=>{
        console.log("Server running on port 3002")
    })
})


