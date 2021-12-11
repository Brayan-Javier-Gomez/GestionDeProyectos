const express = require('express')
const app = express()
const bcrypt  = require('bcrypt');
const User = require('../models/User');



app.get('/usuario', function(req, res) {

    User.find()

    .exec((err, usuarios) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        User.count({ estado: true }, (err, conteo) => {
            res.json({
                ok: true,
                usuarios,
                cuenta: conteo
            })
        })

    })
})

app.post('/usuario', (req, res) => {
    let body = req.body
    let usuario = new User({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        rol: body.rol,
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    })
})




app.put('/usuario/:id', (req, res) => {
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'rol']);
    let id = req.params.id;

    User.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        })


    })
})




module.exports = app;