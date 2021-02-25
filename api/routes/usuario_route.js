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
module.exports = router;