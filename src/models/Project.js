const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({

    name:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    owner:{
        type:String,
        required:[true, "El propietario es obligatorio"]
    },
    objetives:{
        type:String,
    },
    
    comments:{
        type:String,
        
    },
    project_status:{
        type:String,
    },
    n_participants:{
        type:String,
    }, 
    budget:{
        type:String,
    },   
})


module.exports = mongoose.model('proyecto', ProjectSchema);