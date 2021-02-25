'use strict';

const mongoose = require('mongoose');

const schema_ejercicio = new mongoose.Schema({
    'nombre': { type: String, require: true, unique: false },
    'zona': { type: String, require: true, unique: true },
    'esatdo': { type: String, require: false, unique: false }
});

module.exports = mongoose.model('Ejercicio', schema_ejercicio, 'ejercicio');