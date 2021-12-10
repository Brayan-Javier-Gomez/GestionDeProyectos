const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    first_name:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    last_name:{
        type:String,
        required:[true, "El apellido es obligatorio"]
    },
    email:{
        type:String,
        unique:true,
        required:[true, "El correo es obligatorio"]
    },
    password:{
        type:String,
        required:[true , "La contraseña es obligatoria"]
        
    },
    rol:{
        type:String,
    },
    
})


module.exports = mongoose.model('Usuario', UserSchema);