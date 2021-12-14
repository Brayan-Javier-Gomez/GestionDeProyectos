const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require("cors");
port = process.env.PORT;

app.use(cors())
 
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use(require('./Routes/routes'))

app.get('/', (req, res) => res.send('<h1>Api del software de gestion de proyectos</h1>'))


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, resp) => {


    console.log('corriendo base de datos puerto 27017');

});

app.listen(port, () => console.log(`Servidor del project iniciado en el puerto ${port}!`))

