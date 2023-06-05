const {Router } = require('express');
import { getRol, getRoles } from './controller.js';
// const controller = require('./controller.js')

const rolesRutas = Router();

rolesRutas.get('/:id', getRol);
rolesRutas.get('/', getRoles);


export default rolesRutas;