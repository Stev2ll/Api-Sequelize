import { clientes } from '../../models/clientes.js'
import { usuarios } from '../../models/usuarios.js';


export const getCliente = async (req, res) =>{
    const { id} = req.params
    try {
        const obtenerCliente = await clientes.findOne({
            where:{
                id_cliente: id
            }
        });
        res.json(obtenerCliente);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getClientes = async (req, res) =>{
    try {
        const obtenerClientes = await clientes.findAll();
        res.json(obtenerClientes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const insertarCliente = async (req, res) =>{
    const {nombre, apellido, cedula, genero, estado, foto, id_usuario, id_licencia} = req.body;
    try {
        const crearCliente = clientes.create({
            nombre,
            apellido,
            cedula,
            genero,
            estado,
            foto,
            id_usuario,
            id_licencia
        }
        )
        res.send('Cliente ingresado correctamente');
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const editarCliente = async (req, res) =>{

    const {id} = req.params;
    const {nombre, apellido, cedula, genero, estado, foto} = req.body;
    try {
        const updateCLiente = clientes.update({
            nombre: nombre,
            apellido: apellido,
            cedula: cedula,
            genero: genero,
            estado: estado,
            foto: foto
        },{
            where:{
                id_cliente: id
            }
        })
        res.send(updateCLiente)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}   
export const eliminarCliente = async (req, res) =>{
    const {id} = req.params;
    try {
        const deleteClient = await usuarios.destroy({
            where:{
                id_cliente: id
            }
        })
        res.sendStatus(200);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}