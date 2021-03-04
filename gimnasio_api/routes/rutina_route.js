'use strict';

const express = require('express');
const Rutina = require('../models/rutina_model');
const router = new express.Router();

router.post('/registrar-rutina', (req, res) => {
    let rutina = JSON.parse(req.body.obj);
    let nueva_rutina = new Rutina({
        'creacion': rutina.creacion,
        'vencimiento': rutina.vencimiento,
    });
    rutina.lista_ejercicio.forEach(ejercicio => {
        nueva_rutina.ejercicio.push(ejercicio._id);

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
router.get('/listar-rutinas', (req, res) => {
    Rutina.find().populate('ejercicios').exec((err, lista) => {
        if (err) {
            res.json({
                msj: 'La rutina no se pudo listar',
                err
            });
        } else {
            res.json({
                msj: 'Rutina listadas',
                lista
            });
        }
    })
});
router.put('eliminar-ejercicio-rutina', (req, res) => {
    let ejercicios_eliminar = JSON.parse(req.body.ejercicios)
    Rutina.findById(req.body._id, (err, rutina) => {
        if (err) {
            res.json({
                msj: 'La rutina no se pudo encotrar',
                err
            });
        } else {
            ejercicios_eliminar.forEach(ejer => {
                rutina.ejercicios.pull(ejer)
            });
            rutina.save((err, rutina) => {
                if (err) {
                    res.json({
                        msj: 'La rutina no se pudo registrar',
                        err
                    });
                } else {
                    res.json({
                        msj: 'Rutina guardada',
                        rutina
                    });
                }
            });

        }
    })
})
module.exports = router;