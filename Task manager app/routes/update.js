const express = require('express')
const route = express.Router()
const Task = require('../schema/schema')
const saves = require('../schema/schema2')


route.get('/real',(req,res)=>{
    //sending ultimate variable having  specific document from mongoDB to renovate.js
    res.status(200).send(ultimate)
})



route.put('/set',(req,res)=>{
    let {key,update} = req.body;
    let filter = {
        _id:key
    }
    let change = {
        taskName:update
    }
    //mongoose findByIdAndUpdate method to filter document by id and change its taskName we send from update.html fields
Task.findByIdAndUpdate(filter,change).then((r)=>{
  res.status(200).send('updated')
}).catch((err)=>{
    res.status(401).send(err)
})
  
})


module.exports=route