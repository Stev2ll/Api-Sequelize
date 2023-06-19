import { clientes } from '../models/clientes.js'
import { usuarios } from '../models/usuarios.js';

export const VerificarUsuario = async (id_cliente) => {
  try {
    const cliente = await clientes.findOne({
      where: { id_cliente },
      attributes: ['id_usuario']
    });

    if (!cliente) {
      return false; // Cliente no encontrado
    }

    const usuario = await usuarios.findOne({
      where: { id_usuario: cliente.id_usuario }
    });

    if (!usuario) {
      return false; // Usuario no encontrado
    }

    return usuario.estado === 'CONECTADO';
  } catch (error) {
    console.error(error);
    return false; // Error al consultar la base de datos
  }
};
