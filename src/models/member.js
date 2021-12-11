const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({

   user:{
    type: mongoose.Schema.Types.ObjectId, ref: "Usuario"
   },
   project:{
    type: mongoose.Schema.Types.ObjectId, ref: "Proyecto"
   }
    
})


module.exports = mongoose.model('Member', UserSchema);