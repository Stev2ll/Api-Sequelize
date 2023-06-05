import { autos } from "../../models/autos.js";


export const getAuto = async (req, res) =>{
    const  {id} = req.params;

    try {
        const obtenerAuto = await autos.findOne({
            where:{
                id_auto: id
            }
        });
        res.json(obtenerAuto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const getAutos = async (req, res) =>{

    try {
        const obtenerAutos = await autos.findAll();

        res.json(obtenerAutos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const insertarAuto = async (req, res) =>{
    const{ placas, marca, modelo, anio, fotos, detalles, estado } = req.body;
try {
    const insertarAuto = await autos.create({
        placas,
        marca,
         modelo,
        anio,
        detalles,
        fotos,
        estado
    })
    //Esto debemos borrar
    console.log('AUTO CREADO,', insertarAuto);
    res.send('AUTO CREADO BRO :3')
    
} catch (error) {
    return res.status(500).json({ message: error.message });
}
}

export  const eliminarAutos = async (req, res) =>{
    const id= res.params;

    try {
        const eliminar = autos.destroy({
            where:{
                id_auto: id
            }
        })
        res.send('AUTO ELIMINADO');
        res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const editarAutos = async  (req, res) =>{
    const {id} = req.params;
    const {placas,marca, modelo, anio, fotos, detalles, estado } = req.body;

    try {
        const editar = autos.update({ 
            placas: placas,
            marca: marca, 
            modelo: modelo, 
            anio: anio, 
            fotos: fotos,
             detalles: detalles,
             estado: estado
            },{
                where:{
                    id_auto: id
                }
            })
            res.send(editar);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });   
    }
}