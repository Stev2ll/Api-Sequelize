import { usuarios } from "../../models/usuarios.js";
import { validarCorreoContrasena} from './rules.js'

export const getUsers = async (req, res) => {
    try {
        const totalUsuarios = await usuarios.findAll();
        // res.send(totalUsuarios)
        res.json(totalUsuarios);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}


export const insertarUser = async (req, res) => {
    const { id_rol, correo, contrasena } = req.body;

    const correoAux = correo.toLowerCase();
    if (!validarCorreoContrasena(correoAux, contrasena)) {
        return res.status(403).json({ message: "Error: Los datos ingresados son inválidos." });
    }

    try {
        // Verificar si el usuario ya existe
        const usuarioExistente = await usuarios.findOne({ 
            where: {
                correo: correoAux 
            }
        });
        if (usuarioExistente) {
            return res.status(403).json({ message: "Error: El usuario  no disponile" });
        }

        // Crear el nuevo usuario
        const nuevoUser = await usuarios.create({
            id_rol,
            correo: correoAux,
            contrasena,
        });

        console.log("Nuevo Usuario", nuevoUser);
        res.send("USUARIO CREADO BRO :3");
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const unUser = await usuarios.findOne({
            where: {
                id_usuario: id
            }
        })
        // res.send(unUser);
        res.json(unUser);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const actualizarUser = async (req, res) => {
    const { id } = req.params;
    const { correo, contrasena } = req.body;
  
    if (!validarCorreoContrasena(correo, contrasena)) {
      return res.status(403).json({ message: "Error: Los datos ingresados son inválidos." });
    }
  
    const correoAux = correo.toLowerCase();
  
    try {
      // Verificar si el usuario ya existe
      const usuarioExistente = await usuarios.findOne({ correo: correoAux });
      if (usuarioExistente && usuarioExistente.id_usuario !== id) {
        return res.status(403).json({ message: "Error: El usuario ya existe en el sistema." });
      }
  
      // Actualizar los datos del usuario
      const actualizar = await usuarios.update({ correo: correoAux, contrasena }, {
        where: {
          id_usuario: id
        }
      });
  
      res.send(actualizar);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
export const eliminarUser = async (req, res) => {
    const { id } = req.params;

    try {
        await usuarios.destroy({
            where: {
                id_usuario: id
            }
        })
        res.send("USUARIO ELINADO");
        res.sendStatus(200);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


