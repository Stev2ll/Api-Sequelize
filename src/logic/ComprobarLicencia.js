import { licencias } from "../models/licencias.js";
import moment from 'moment';

export const verificarLicencia = async (id_licencia) => {
    try {
        const licencia = await licencias.findOne({
            where: { id_licencia }
        });

        if (!licencia) {
            return false; // Licencia no encontrada
        }
        const fechaCaducidad = moment(licencia.fecha_caducidad);
        const fechaActual = moment().startOf('day');
        const diferenciaDias = fechaCaducidad.diff(fechaActual, 'days', true);

        return diferenciaDias > 5;
    } catch (error) {
        console.error(error);
        return false; // Error al consultar la base de datos
    }
}
