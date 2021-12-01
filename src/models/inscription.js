const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const InscriptionSchema = new Schema({

    project:{
        type:String,
    },
    user:{
        type:String,
    },
    rol:{
        type:String,
    },
    registration_status:{
        type:String,
    },
    
})


module.exports = mongoose.model('inscripcion', InscriptionSchema);