const express = require('express')
const route = express.Router()
const Task = require('../schema/schema')
const saves = require('../schema/schema2')


route.get('/as', (req, res) => {
    Task.find().then((r)=>{
     res.send(r)
    }).catch((err)=>{
    return console.log(err)
    })
    
    });
    
    //taskName db field
    
   route.post('/id', (req, res) => {
    const {data} = req.body;
    const task = new Task({
        taskName:data
    });
    task.save().then((result)=>{
    }).catch((err)=>{
        console.log(err)
    })
        res.redirect('/')
    });
    
    
    //delete method
   route.delete('/:id',async (req,res)=>{
    let id = req.params.id;
    
    await Task.findOne({_id:id}).then((r)=>{
       let history = new saves({
        item:r.taskName
       })
    
       history.save()
    })
       await Task.deleteOne({_id:id}).then((result)=>{
        res.status(200).send('sucess')
       })
  
    })
     
    
    //from js after click update button we send key as post to express
    
    //post method
   route.post('/update', (req,res)=>{
        // destructuring key from req.body
       let {key}= req.body;
    //finding task in mongodb using key name send from script.js     
    let value = Task.findOne({_id:key}).then( (result)=>{
        //passing result we get from mongodb to ultimate variable.
       ultimate=result;
       
       res.status(200).send('post request completed')
    })
    })

    module.exports=route;