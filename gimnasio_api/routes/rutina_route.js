'use strict';

const express = require('express');
const Rutina = require('../models/rutina_model');
const router = new express.Router();

router.post('/registrar-rutina', (req, res) => {
    let rutina = JSON.parse(req.body.obj);
    let nueva_rutina = new Rutina({
        'creacion': rutina.creacion,
        'vencimiento': rutina.vencimiento,
        'lista_ejercicio': rutina.lista_ejercicio
    });
    rutina.lista_ejercicio.forEach(Ejercicio => {
        nueva_rutina.ejercicio.push(Ejercicio);

    });
    nueva_rutina.save((err, rutina) => {
        if (err) {
            res.json({
                msj: 'La rutina no se pudo registrar',
                err
            });
        } else {
            res.json({
                msj: 'La rutina se registró correctamente',
                rutina
            });
        }
    });
});
module.exports = router;