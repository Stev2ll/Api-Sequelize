import { licencias } from "../../models/licencias.js";


export const getLicencias =  async( req, res) =>{
    try {
        const obtener = await licencias.findAll();
        res.json(obtener);
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
        
    }
}

export const getLicencia = async (req, res) =>{
    const {id} = req.params;
    try {
        const obtenerL = await licencias.findOne({
            where:{
                id_licencia: id
            }
        })
        res.json(obtenerL);
        
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
}

export const insertarLicencia = async (req, res) =>{

    const {id_licencia, fecha_emision, fecha_caducidad, estado, categoria} = req.body;

    try {
        const insert = await licencias.create({
        id_licencia,
        fecha_emision,
        fecha_caducidad,
        estado,
        categoria,
        })
        console.log('Licencia CREADO,', insert);
        res.send('Licencia CREADO BRO :3');
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
}
export const editarLicencia = async (req, res) =>{
    const {id} = req.params;
    const {fecha_emision, fecha_caducidad, estado, categoria} = req.body;
    try {
        const editar = await licencias.update({
            fecha_emision: fecha_emision,
            fecha_caducidad: fecha_caducidad,
            estado: estado,
            categoria: categoria
        },{
            where:{
                id_licencia: id
            }
        })
        res.send(editar);
        
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
}
export const eliminarLicencia = async(req, res) =>{
    const {id} = req.params;

    try {
        const deleteLicencia = await licencias.destroy({
            where:{
                id_licencia: id
            }
        })
        res.sendStatus(200);
        
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
}