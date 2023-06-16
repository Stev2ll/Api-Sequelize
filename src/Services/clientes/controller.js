import { clientes } from '../../models/clientes.js'
import { usuarios } from '../../models/usuarios.js';
import {verificarNombre, 
    verificarCedula, 
    verificarEstado, 
    verificarExtensionFoto, 
    verificarGenero,
    
} from './rules.js'


export const getCliente = async (req, res) => {
    const { id } = req.params
    try {
        const obtenerCliente = await clientes.findOne({
            where: {
                id_cliente: id
            }
        });
        res.json(obtenerCliente);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getClientes = async (req, res) => {
    try {
        const obtenerClientes = await clientes.findAll();
        res.json(obtenerClientes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const insertarCliente = async (req, res) => {
    const { nombre, apellido, cedula, genero, estado, foto, id_usuario, id_licencia } = req.body;

    if (!verificarNombre(nombre)) {
        return res.status(400).json({ message: 'Error: El nombre ingresado es inválido.' });
    }

    if (!verificarCedula(cedula)) {
        return res.status(400).json({ message: 'Error: La cédula ingresada es inválida.' });
    }

    if (!verificarGenero(genero)) {
        return res.status(400).json({ message: 'Error: El género ingresado es inválido.' });
    }

    if (!verificarEstado(estado)) {
        return res.status(400).json({ message: 'Error: El estado ingresado es inválido.' });
    }

    if (!verificarExtensionFoto(foto)) {
        return res.status(400).json({ message: 'Error: La extensión de la foto es inválida.' });
    }

    try {
        const cedulaExistente = await clientes.findOne({
            where: {
                cedula: cedula
            }
        });

        if (cedulaExistente) {
            return res.status(400).json({ message: 'La cédula ya está registrada' });
        }

        // Insertar el cliente en la base de datos
        const crearCliente = await clientes.create({
            nombre,
            apellido,
            cedula,
            genero,
            estado,
            foto,
            id_usuario,
            id_licencia
        });

        res.send('Cliente ingresado correctamente');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const editarCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, cedula, genero, estado, foto } = req.body;

    if (!verificarNombre(nombre)) {
        return res.status(400).json({ message: 'Error: El nombre ingresado es inválido.' });
    }

    if (!verificarCedula(cedula)) {
        return res.status(400).json({ message: 'Error: La cédula ingresada es inválida.' });
    }

    if (!verificarGenero(genero)) {
        return res.status(400).json({ message: 'Error: El género ingresado es inválido.' });
    }

    if (!verificarEstado(estado)) {
        return res.status(400).json({ message: 'Error: El estado ingresado es inválido.' });
    }

    if (!verificarExtensionFoto(foto)) {
        return res.status(400).json({ message: 'Error: La extensión de la foto es inválida.' });
    }

    try {
        const updateCliente = await clientes.update(
            {
                nombre: nombre,
                apellido: apellido,
                cedula: cedula,
                genero: genero,
                estado: estado,
                foto: foto
            },
            {
                where: {
                    id_cliente: id
                }
            }
        );

        res.send(updateCliente);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



export const eliminarCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteClient = await usuarios.destroy({
            where: {
                id_cliente: id
            }
        })
        res.sendStatus(200);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}