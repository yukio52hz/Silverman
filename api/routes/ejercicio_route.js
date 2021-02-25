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
router.get('/listar-ejercicio', (req, res) => {
    Ejercicio.findOne({ _id: req.query._id }, (err, ejercicio) => {
        if (err) {
            res.json({
                'msj': 'No se puede registra ejercicios',
                err
            });
        } else {
            res.json({
                'msj': 'Ejercicios listados',
                ejercicio
            });
        }

    });
});

router.put('/modificar-ejercicio', (req, res) => {
    Ejercicio.updateOne({ _id: req.body._id }, {
        $set: {
            nombre: req.body.nombre,
            zona: req.body.zona,
            estado: req.body.estado
        }
    }, (err, info) => {
        if (err) {
            res.json({
                'msj': 'No se puede modificar el ejercicio',
                err
            });
        } else {
            res.json({
                'msj': 'Ejercicios modificado',
                info
            });
        }
    });
});


module.exports = router;