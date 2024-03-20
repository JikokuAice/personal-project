

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Task = require('./schema/schema')
const saves = require('./schema/schema2')
const scriptJs = require('./routes/home') 
const updateJs = require('./routes/update')
const historyJS = require('./routes/history')


app.use(express.static('C:/Users/Ayush/personal-project/Task manager app/web content'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('',scriptJs)
app.use('/update',updateJs)

app.use('/taskcompleted',historyJS)

//saving variable as local so it can be avilabale in from any path and method
app.locals.ultimate=null;


//connection string to connect to our db
const dbu = 'mongodb+srv://ayush:Ayushlac321@atlascluster.sr1lmda.mongodb.net/taskManager?retryWrites=true&w=majority'
mongoose.connect(dbu)
.then((response)=>{
    console.log('connected')
  return  app.listen(5000, () => {
        console.log('server is listenisang');
    });
    
})
.catch((err)=>console.log(err))






