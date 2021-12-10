const jwt = require('jsonwebtoken');



/*
=========================
Autenticacion del token
=========================
*/

let autenticaToken = (req, res, next) => {

    // se trae los headers
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            res.status(401).json({
                ok: false,
                err: {
                    msg: 'El token no es valido',
                    err
                }
            })
        };

        req.User = decoded.User;

        console.log(req.User);

        next();
    })

}


/*
=========================
Autenticacion del Role
=========================
*/


let rolSuperAdmin = (req, res, next) =>{
    let usuario  = req.User;
    if(usuario.rol === "SUPERADMINISTRADOR"){
        next();
    }else {
        res.json({
            ok: false,
            err: {
                msg: 'El usuario no tiene permisos para la peticion'
            }

        })
    }
}


let rolAdministrador = (req, res, next) => {

    let usuario = req.User;

    if (usuario.rol === 'ADMINISTRADOR' || usuario.rol === "SUPERADMINISTRADOR") {
        next();
    } else {
        res.json({
            ok: false,
            err: {
                msg: 'El usuario no tiene permisos'
            }

        })
    }
}


let rolIntegrante = (req, res ,next)=>{
    let usuario = req.User;
    if (usuario.rol === 'ADMINISTRADOR' || usuario.rol === "SUPERADMINISTRADOR" ||usuario.rol ===  "USUARIO") {
        next();
    } else{
        res.json({
            ok: false,
            err: {
                msg: 'El usuario no tiene permisos'
            }

        })
    }

}

module.exports = {
    autenticaToken,
    rolSuperAdmin,
    rolAdministrador,
    rolIntegrante
};