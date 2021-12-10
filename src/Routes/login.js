const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

app.post('/login', (req, res) => {
    let body = req.body;



    User.findOne({ email: body.email }, (err, UserDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            if (!UserDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        msg: 'Usuario o contraseña incorrectos',
                        err
                    }
                })
            }

            if (bcrypt.compareSync(body.password, UserDB.password) === false) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        msg: 'Usuario o contraseña incorrectos',
                        err
                    }
                })
            }

            let token = jwt.sign({
                User: UserDB
            }, process.env.SEED, { expiresIn: 60 * 60 * 24 * 30 * 12 })


            res.json({
                ok: true,
                User: UserDB,
                token: token
            })


        }

    )

})

module.exports = app;
