const express = require('express')
const app = express()

const Objetive = require('../models/objetive');
const { autenticaToken , rolAdministrador, rolSuperAdmin, rolIntegrante } = require('../Middelwares/funciones');

app.post('/objetivo/:idproyecto' , [autenticaToken, rolAdministrador], (req, res)=>{
    let body = req.body

    let idProyecto = req.params.idproyecto;

    let idUsuario = req.User._id;

    let newObjetive = new Objetive({
        name: body.name,
        description: body.description,
        owner:  req.User._id,
        project : idProyecto,
        

    })

    newObjetive.save((err, newObjetiveDB)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                err:"error"
            })
        }
    
        res.json({
            ok: true,
            newObjetiveDB,
        })
    })
})

//obtener objetivos
app.get('/objetivo/:id', [autenticaToken, rolIntegrante], (req,res)=>{
    let idProject = req.params.id;
    Objetive.find({project:idProject})
    // .populate("project")
    .exec((err, objetivos)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
    
        res.json({
            ok: true,
            tasks:objetivos,
        })
    })
})

app.get('/objetivo',[autenticaToken, rolIntegrante], (req,res)=>{
    Objetive.find({})
    .exec((err, objetivos)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
    
        res.json({
            ok: true,
            tasks:objetivos,
        })
    })
})

module.exports = app;