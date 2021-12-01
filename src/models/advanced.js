const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const AdvancedSchema = new Schema({

    name:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    description :{
        type:String,
    },
    comments:{
        type:String,
    },
    
})


module.exports = mongoose.model('advanced', AdvancedSchema);