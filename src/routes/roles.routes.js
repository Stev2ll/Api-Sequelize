import  {Router } from 'express';

import { getRol, getRoles } from '../Services/roles/controller.js';
import { actualizarUser, eliminarUser, getUser, getUsers, insertarUser } from '../Services/usuarios/controllerUser.js';
import { getAuto, getAutos, editarAutos, eliminarAutos, insertarAuto } from '../Services/autos/controller.js';
// import { rolesRutas } from '../Services/roles/routes.js'
// const roles = require('../Services/roles/routes.js');


const router = new Router();

router.get('/roles', getRoles); 
router.get('/roles/:id', getRol); 

router.get('/user', getUsers)   
router.get('/user/:id', getUser)
router.post('/user', insertarUser);
router.put('/user/:id', actualizarUser)
router.delete('/user:id', eliminarUser)

router.get('/autos', getAutos);
router.get('/autos/:id', getAuto)
router.post('/autos', insertarAuto)
router.delete('autos7:id', eliminarAutos);
router.put('/autos/:id', editarAutos);

export default router;