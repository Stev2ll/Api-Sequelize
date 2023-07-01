import { historials } from "../../models/historials.js";
import { Minuscula, verificarFecha } from "./helpers.js";


export const crearHistorials = async (req, res) => {

    const { id_cliente, id_pago, fecha_renta, comentario } = req.body;

    if (!id_cliente || !id_pago || !comentario || !fecha_renta) {
        return res.status(400).json({ message: 'COMPLETE TODOS  LOS CAMPOS' })
    }

    // if (!verificarFecha(fecha_renta)) {
    //     return res.status(400).json({ message: 'ERROR EN LA FECHA ' })
    // }
    const comentarioAux = Minuscula(comentario);
    try {
        const crearhistorial = await historials.create({
            id_cliente,
            id_pago,
            fecha_renta,
            comentario
        })

        res.send('INGRESADO CORRECTAMENTE')
    } catch (error) {
        return res.status(400).json({ message: 'NO SE PUDO INGRESAR EL MENSAJE' })
    }

}

export const obtenerHistoriales = async (req, res) => {
    try {
        const historial = await historials.findAll()
        res.send(historial)
    } catch (error) {
        return res.status(400).json({ message: 'NO SE PUDO OBTENER EL HISTORIAL' })

    }
}

export const obtenerHistorial = async (req, res) => {
    const { id } = req.params;
    try {
        const obtain = await historials.findAll({
            where: {
                id_cliente: id
            }
        })
        res.send(obtain)

    } catch (error) {
        return res.status(400).json({ message: 'NO SE PUDO OBTENER EL HISTORIAL' })

    }
}

export const eliminarHistorial = async (req, res) => {
    const { id_historial } = req.params;

    try {
        const eliminar = await historials.destroy({
            where: {
                id_historial: id_historial
            }
        })
        res.status(200);

    } catch (error) {
        return res.status(400).json({ message: 'NO SE PUDO ELIMINAR EL HISTORIAL' })
    }


}