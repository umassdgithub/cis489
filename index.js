const express = require('express')
const app = express()
const fs = require('fs');


app.get('/',(req,res)=>{
    fs.readFile("./test.txt",(err,data)=>{
        res.send(`data: ${data}`);
    })
    
    const data = req.query["q"]
    fs.appendFile("./test.txt",data,(err)=>{
        if(err){
            console.log('err')
        }
        else{
            console.log('data appended')
        }
    })
})
let port = process.env.PORT || 3000
app.listen(port,()=>{console.log('Server running')})