
const express = require('express')
const route = express.Router()
const saves = require('../schema/schema2')


route.get('/',(req,res)=>{
    saves.find().then((r)=>{
        res.status(200).send(r)
    })
})


route.post('/:id',(req,res)=>{
  let id =req.params.id;
saves.deleteOne({_id:id}).then((e)=>{
    res.status(200).send('history cleared')
})
    
})

module.exports=route;