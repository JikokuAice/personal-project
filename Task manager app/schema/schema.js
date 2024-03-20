const mongoose = require('mongoose');
const schema = mongoose.Schema;
const taskShema = new schema({
    taskName:{
        type:String,
        required:true
    }
},{timestamps:true});



const Task = mongoose.model('Task',taskShema)
module.exports=Task;


