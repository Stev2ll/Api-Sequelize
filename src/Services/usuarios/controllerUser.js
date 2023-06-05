import { usuarios } from "../../models/usuarios.js";

export const getUsers = async (req, res)  =>{
    try {
        const totalUsuarios = await usuarios.findAll();
        // res.send(totalUsuarios)
        res.json(totalUsuarios);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const insertarUser = async (req, res) => {
    const {id_rol, correo, contrasena} = req.body;
    
    try {
          const nuevoUser = await usuarios.create({
        id_rol,
        correo,
        contrasena
    })

    console.log('Nuevo Usuario' , nuevoUser)
    res.send('USUARIO CREADO BRO :3')

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  
}
export const getUser  =  async (req, res)  =>{
    const {id} = req.params;
    try {
        const unUser = await usuarios.findOne({
            where:{
                id_usuario: id
            }
        })
        // res.send(unUser);
        res.json(unUser);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const actualizarUser =  async (req, res)  =>{
    const { id} = req.params;
    const {correo, contrasena} = req.body;
    try {
        // const actualizarUse = await usuarios.findByPk(id);
        // usuarios.correo = correo
        // usuarios.contrasena = contrasena
        // await actualizarUse.save();

        // res.send(actualizarUse);
        const actualizar = await usuarios.update({correo: correo, contrasena: contrasena} ,{
            where:{
                id_usuario: id
            }
        })
        res.send(actualizar);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const eliminarUser = async (req, res) =>{
    const { id} = req.params;

    try {
        await usuarios.destroy({
            where:{
                id_usuario: id
            }
        })
        res.send("USUARIO ELINADO");
        res.sendStatus(200);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


