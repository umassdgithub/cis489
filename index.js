const express = require('express')
const app = express()
const fs = require('fs');


app.get('/',(req,res)=>{
    let data = req.query["q"]

    if(data===undefined){
        data = `The query should contain key and value ?q=language`
        res.status(400).send(data)    
    }
    else{
        fs.readFile("./Data/Some_Books.json",(err,booksData)=>{
            booksData = JSON.parse(booksData);
            if(err){
                res.status(400).send('Data was not Accessable!') 
            }
            const results = 
            booksData.filter(d=>d.language
                                .toLowerCase()
                                .includes(data.toLowerCase().trim()))
            if(results.length<=0){
                res.status(400).send('No results found!') 
            }   
            else{
                res.status(200).end(JSON.stringify(results))
            }                             
            
        })
    }
})
let port = process.env.PORT || 3000
app.listen(port,()=>{console.log('Server running')})