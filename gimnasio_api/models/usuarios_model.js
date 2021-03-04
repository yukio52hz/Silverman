'use strict';

const mongoose = require('mongoose');

const schema_usuario = new mongoose.Schema({
    'cedula': { type: String, require: true, unique: true },
    'nombre': { type: String, require: true, unique: false },
    'edad': { type: Number, require: true, unique: false },
    'estatura': { type: Number, require: true, unique: false },
    'peso': { type: Number, require: true, unique: false },
    'lista_rutinas': { type: Array, require: false, unique: false },
});

module.exports = mongoose.model('Usuarios', schema_usuario, 'usuario');