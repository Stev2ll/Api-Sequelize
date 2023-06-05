import { roles } from "../../models/roles.js"

export const getRoles = async (req, res) => {
    try {
        const totalRoles = await roles.findAll();
        //    console.log('ROLES DENTRO DE LA BASE DE DATOS', totalRoles);
        res.send(totalRoles);
        // res.json(totalRoles);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const getRol = async (req, res) => {
    const { id } = req.params;
    try {
        const unRol = await roles.findOne({
            where: {
                id_rol: id
            }
        });
        res.send(unRol);
        // res.json(unRol);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

