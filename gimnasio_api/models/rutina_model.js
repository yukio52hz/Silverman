'use strict';

const mongoose = require('mongoose');

const schema_rutina = new mongoose.Schema({
    'creacion': { type: Date, require: true, unique: false },
    'vencimiento': { type: Date, require: true, unique: false },
    'lista_ejercicios': [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ejercicios'
        }]
        //de esta manera podemos referenciar los ejercicios
});

module.exports = mongoose.model('Rutina', schema_rutina, 'rutinas');