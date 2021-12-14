const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ObjetiveSchema = new Schema({

    name:{
        type:String,
    },
    project:{
        type: mongoose.Schema.Types.ObjectId, ref: "Proyecto"
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId, ref: "Usuario"
    },
    description:{
        type:String,
    },
    comments:{
        type:String,
    },
    tasks:{
        type:String,
    },
    
})


module.exports = mongoose.model('Objetivo', ObjetiveSchema);