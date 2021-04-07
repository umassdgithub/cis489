const express = require('express')
const app = express()
const fs = require('fs');


app.get('/',(req,res)=>{
    res.send(`Opened`);
    let data = req.query["q"]
    if(data===undefined){
        data = "Not Received data from query"
    }

    fs.readFile("./test.txt",(err,)=>{
        res.send(`data: ${data}`);
    })
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