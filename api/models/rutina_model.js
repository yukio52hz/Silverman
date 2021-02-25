'use strict';

const mongoose = require('mongoose');

const schema_rutina = new mongoose.Schema({
    'creacion': { type: Date, require: true, unique: false },
    'vencimiento': { type: Date, require: true, unique: false },
    'lista_ejercicios': { type: Array, require: false, unique: false }
});

module.exports = mongoose.model('Rutina', schema_rutina, 'rutina');