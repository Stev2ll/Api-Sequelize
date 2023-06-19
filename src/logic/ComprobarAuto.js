import { autos } from "../models/autos.js";

export const verificarAuto = async (id_auto) => {
  try {
    const auto = await autos.findOne({
      where: { id_auto }
    });

    if (!auto) {
      return false; // Auto no encontrado
    }

    return auto.estado === 'DISPONIBLE';
  } catch (error) {
    console.error(error);
    return false; // Error al consultar la base de datos
  }
}
