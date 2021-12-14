const express = require('express');
const app = express();

const { autenticaToken , rolAdministrador, rolSuperAdmin, rolIntegrante } = require('../Middelwares/funciones');


const Projects = require('../models/Project');
const Member = require('../models/member');


app.get('/proyectos', [autenticaToken, rolIntegrante],(req,res) => {

Projects.find()

.populate("owner", "first_name last_name email")

.exec((err, proyectos)=>{
    if (err) {
        return res.status(400).json({
            ok: false,
            error: 'Error desconocido',
            err
        });
    }

    Projects.count((err, conteo)=>{
        res.json({
            ok:true,
            proyectos,
            numero_de_proyectos: conteo
        })
    })
})

})




app.post('/proyectos', [autenticaToken, rolAdministrador],(req,res)=>{
    let body = req.body;
    let proyecto = new Projects({
        name : body.name,
        owner : req.User._id,
        comments : body.comments,
        project_status : body.project_status,
        n_participants : body.n_participants,
        budget : body.budget
    })

proyecto.save((err, proyecto)=>{
    if(err){
        return res.status(400).json({
            ok:false,
            err
        })
    }

    res.json({
        ok: true,
        proyecto,

    })
})

})
 

//Asignar proyecto a usuario

app.post('/proyectos/:idproyecto/:idusuario' , [autenticaToken, rolAdministrador], (req, res)=>{

    let idProyecto = req.params.idproyecto;

    let idUsuario = req.params.idusuario;

    let newMember = new Member({
        user: idUsuario,
        project : idProyecto
    })

    newMember.save((err, newMemberDB)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
    
        res.json({
            ok: true,
            newMemberDB,
        })
    })
})

//obtener miembros del equipo
app.get('/proyectos/members/:id', [autenticaToken, rolIntegrante], (req,res)=>{
    let idProject = req.params.id;
    Member.find({project:idProject})
    .exec((err, members)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
    
        res.json({
            ok: true,
            team:members,
        })
    })
})

module.exports = app;