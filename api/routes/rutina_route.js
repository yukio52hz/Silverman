'use strict';

const express = require('express');
const Rutina = require('../models/rutina_model');
const router = new express.Router();

router.post('/registrar-rutina', (req, res) => {

    let new_rutina = new Rutina({
        'creacion': req.body.creacion,
        'vencimiento': req.body.vencimiento,
        'lista_ejercicio': req.body.lista_ejercicio
    });
    new_rutina.save((err, rtm) => {
        if (err) {
            res.json({
                'msj': 'Algo salio mal y no se puede registrar',
                err
            });
        } else {
            res.json({
                'msj': 'Registrado',
                rtm
            });
        }
    });
});
module.exports = router;