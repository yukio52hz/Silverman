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

router.get('/listar-ejercicios', (req, res) => {
    Ejercicio.find((err, lista_ejercicios) => {
        if (err) {
            res.json({
                'msj': 'No se puede registra ejercicios',
                err
            });
        } else {
            res.json({
                'msj': 'Ejercicios listados',
                lista_ejercicios
            });
        }

    });
});


module.exports = router;