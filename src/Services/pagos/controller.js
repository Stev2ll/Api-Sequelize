import { pagos } from "../../models/pagos.js"


export const getPagos = async (req, res) => {
    try {
        const obtenerPagos = await pagos.findAll();

        res.json(obtenerPagos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getPago = async (req, res) => {
    const { id } = req.params;

    try {
        const obtenerUnPago = await pagos.findOne({
            where: {
                id_pago: id,
            }
        })
        res.json(obtenerUnPago);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getPagosUser = async (req, res) => {
    const { id } = req.params;
    try {
        const pagos1 = await pagos.findAll({
            where: {
                id_cliente: id
            }
        });
        res.json(pagos1);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const crearPago = async (req, res) => {
    const { fecha_pago, tipo, monto, id_cliente, id_auto } = req.body;
    try {
        const insert = await pagos.create({
            fecha_pago: fecha_pago,
            tipo: tipo,
            monto: monto,
            id_cliente: id_cliente,
            id_auto: id_auto
        })
        console.log('PAGO REGISTRADO', insert);
        res.send('Pago realizado');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const cancelarPago = async (req, res) => {
    const { id } = req.params;
    try {
        const cancelar = await pagos.destroy({
            where: {
                id_pago: id
            }
        })
        res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}