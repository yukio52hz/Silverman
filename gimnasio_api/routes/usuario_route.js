'use strict';

const express = require('express');
const Usuario = require('../models/usuarios_model');
const router = new express.Router();

router.post('/registrar-usario', (req, res) => {
    let new_usuario = new Usuario({
        'cedula': req.body.cedula,
        'nombre': req.body.nombre,
        'edad': req.body.edad,
        'estatura': req.body.estatura,
        'peso': req.body.peso,
        'lista_rutinas': req.body.lista_rutinas
    });
    new_usuario.save((err, uso) => {
        if (err) {
            res.json({
                'msj': 'Algo salio mal y no se puede registrar',
                err
            });
        } else {
            res.json({
                'msj': 'Registrado',
                uso
            });
        }
    });
});
router.post('/iniciar-sesion', (req, res) => {
    let correo = req.body.correo;
    let contrasenna = req.body.contrasenna;

    Usuario.findOne({ correo: correo }, (err, usuario) => {
        if (err) {
            res.json({
                msj: 'El correo electrónico o la contraseña no son correctos',
                inicio: false,
                err
            });
        } else {
            if (usuario && usuario.contrasenna == contrasenna) {
                res.json({
                    correo: usuario.correo,
                    tipo: usuario.tipo,
                    nombre: usuario.nombre,
                    inicio: true
                });
            } else {
                res.json({
                    msj: 'El correo electrónico o la contraseña no son correctos',
                    inicio: false,
                    err
                });
            }


        }
    });
});
module.exports = router;