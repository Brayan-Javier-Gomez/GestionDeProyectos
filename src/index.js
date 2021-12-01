const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
port = process.env.PORT;


app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => res.send('Hello World!'))


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, resp) => {


    console.log('corriendo base de datos puerto 27017');

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

