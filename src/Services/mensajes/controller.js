
import { mensajes } from "../../models/mensajes.js";



export const crearMensaje = async (req, res) => {
    const { id_emisor, id_receptor, mensaje, fecha_envio } = req.body;

    try {

        const nuevoMensaje = await mensajes.create({
            id_emisor,
            id_receptor,
            mensaje,
            fecha_envio
        })
        console.log('MENSAJE ENVIADO');
        return res.status(200).json({ message: 'Mensaje enviado' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const obtenerMensaje = async (req, res) => {
    const { id_cliente } = req.params;
    try {
        const obtain = await mensajes.findAll({
            where: {
                id_cliente: id_cliente
            }
        })
        res.json(obtain);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}