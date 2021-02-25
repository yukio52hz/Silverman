'use strict';

const express = require('express');
const Ejercicio = require('../models/ejercicios_model');
const router = new express.Router();

router.post('/registrar-ejercicio', (req, res) => {

    let new_ejercicio = new Ejercicio({
        'nombre': req.body.nombre,
        'zona': req.body.zona,
        'estado': 'Activo'
    });
    new_ejercicio.save((err, ejer) => {
        if (err) {
            res.json({
                'msj': 'Algo salio mal y no se puede registrar',
                err
            });
        } else {
            res.json({
                'msj': 'Registrado',
                ejer
            });
        }
    });
});


module.exports = router;