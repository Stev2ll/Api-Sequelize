
import { reservas } from "../../models/reservas.js";

export const getReservas = async (req, res) => {
    try {
        const obtenerReserva = await reservas.findAll();
        res.json(obtenerReserva);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const obtenerReserva = await reservas.findOne(
            {
                where: {
                    id_reserva: id
                }
            }
        );
        res.json(obtenerReserva);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getUserReservas = async (req, res) => {
    const { id } = req.params;

    try {
        const obtenerReserva = await reservas.findAll(
            {
                where: {
                    id_cliente: id
                }
            }
        );
        res.json(obtenerReserva);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createReserva = async (req, res) => {

    const { id_cliente, id_auto, fecha_entrega, fecha_devolucion, monto, estado } = req.body;
    try {
        const crearReserva = await reservas.create({
            id_cliente,
            id_auto,
            monto,
            estado,
            fecha_entrega,
            fecha_devolucion
        });
        console.log('RESERVA REALIZADA: ' + crearReserva);
        res.json('Reserva hecha');

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const updateReserva = async (req, res) => {
    const { id } = req.params;
    const { id_cliente, id_auto, fecha_entrega, fecha_devolucion, monto, estado } = req.body;
    try {
        const editarReserva = await reservas.update({
            id_cliente,
            id_auto,
            monto,
            estado,
            fecha_entrega,
            fecha_devolucion
        }, {
            where: {
                id_reserva: id
            }
        })
        res.send(editarReserva);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const updateEstado = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    try {
        const editarReserva = await reservas.update({
            estado
        }, {
            where: {
                id_reserva: id
            }
        })
        res.send(editarReserva);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
