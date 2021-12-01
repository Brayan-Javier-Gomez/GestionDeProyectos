const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ObjetiveSchema = new Schema({

    name:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    description:{
        type:String,
        required:[true, "El apellido es obligatorio"]
    },
    comments:{
        type:String,
    },
    advanceds:{
        type:String,  
    },
    tasks:{
        type:String,
    },
    
})


module.exports = mongoose.model('objetivo', ObjetiveSchema);