import  {Router } from 'express';

import { getRol, getRoles } from '../Services/roles/controller.js';
import { actualizarUser, eliminarUser, getUser, getUsers, insertarUser } from '../Services/usuarios/controllerUser.js';
import { getAuto, getAutos, editarAutos, eliminarAutos, insertarAuto } from '../Services/autos/controller.js';
import { getClientes, getCliente, editarCliente, eliminarCliente, insertarCliente } from '../Services/clientes/controller.js';
import { editarLicencia, eliminarLicencia, getLicencia, getLicencias, insertarLicencia } from '../Services/licencias/controller.js';
// import { rolesRutas } from '../Services/roles/routes.js'
// const roles = require('../Services/roles/routes.js');


const router = new Router();

router.get('/roles', getRoles); 
router.get('/roles/:id', getRol); 

router.get('/user', getUsers)   
router.get('/user/:id', getUser)
router.post('/user', insertarUser);
router.put('/user/:id', actualizarUser);
router.delete('/user:id', eliminarUser);

router.get('/licencia', getLicencias);
router.get('/licencia/:id', getLicencia);
router.put('/licencia/:id', editarLicencia);
router.post('/licencia', insertarLicencia);
router.delete('/licencia:id', eliminarLicencia);


router.get('/clientes', getClientes);
router.get('/clientes/:id', getCliente);
router.post('/cliente', insertarCliente);
router.put('/clientes/:id', editarCliente);
router.delete('/clientes/:id', eliminarCliente);

router.get('/autos', getAutos);
router.get('/autos/:id', getAuto)
router.post('/autos', insertarAuto)
router.delete('/autos/:id', eliminarAutos);
router.put('/autos/:id', editarAutos);

export default router;