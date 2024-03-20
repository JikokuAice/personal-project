const mongoose = require('mongoose');
const schema = mongoose.Schema;
const taskShema = new schema({
    item:{
        type:String,
        required:true
    }
},{timestamps:true});



const history = mongoose.model('history',taskShema)
module.exports=history;


