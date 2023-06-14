import { autos } from "../../models/autos.js";
import { verificarTipo, Formato, PrimerLetra, segundaLetra, estados, verificarAnio } from "./rules.js";


export const getAuto = async (req, res) => {
    const { id } = req.params;

    try {
        const obtenerAuto = await autos.findOne({
            where: {
                id_auto: id
            }
        });
        res.json(obtenerAuto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const getAutos = async (req, res) => {

    try {
        const obtenerAutos = await autos.findAll();

        res.json(obtenerAutos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const insertarAuto = async (req, res) => {
    const { placas, marca, modelo, anio, fotos, detalles, estado, tipo } = req.body;

    // Verificar si algún campo está vacío
    if (!placas || !marca || !modelo || !anio || !fotos || !detalles || !estado || !tipo) {
        return res.status(400).json({ message: 'Error: Todos los campos deben ser completados' });
    }

    // Validar formato de la placa
    if (!Formato(placas)) {
        return res.status(400).json({ message: 'Error: El formato de la placa es inválido' });
    }

    // Validar primera letra de la placa
    if (!PrimerLetra(placas)) {
        return res.status(400).json({ message: 'Error: La primera letra de la placa es inválida' });
    }

    // Validar segunda letra de la placa
    if (!segundaLetra(placas)) {
        return res.status(400).json({ message: 'Error: La segunda letra de la placa es inválida' });
    }

    // Validar estado
    if (!estados(estado)) {
        return res.status(400).json({ message: 'Error: El estado ingresado es inválido' });
    }

    // Validar año
    if (!verificarAnio(anio)) {
        return res.status(400).json({ message: 'Error: El año ingresado es inválido' });
    }

    if (!verificarTipo(tipo)) {
        return res.status(400).json({ message: 'Error: El tipo ingresado es inválido' });
    }
    // Validar extensión de la foto
    if (!verificarExtensionFoto(fotos)) {
        return res.status(400).json({ message: 'Error: La extensión de la foto es inválida' });
    }

    try {
        const insertarAuto = await autos.create({
            placas,
            marca,
            modelo,
            anio,
            detalles,
            fotos,
            estado,
            tipo
        });

        console.log('AUTO CREADO,', insertarAuto);
        res.send('AUTO CREADO BRO :3');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const eliminarAutos = async (req, res) => {
    const { id } = req.params;

    try {
        const eliminar = await autos.destroy({
            where: {
                id_auto: id
            }
        })
        // res.send('AUTO ELIMINADO');
        res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const editarAutos = async (req, res) => {
    const { id } = req.params;
    const { placas, marca, modelo, anio, fotos, detalles, estado, tipo } = req.body;

    try {
        const editar = await autos.update({
            placas: placas,
            marca: marca,
            modelo: modelo,
            anio: anio,
            fotos: fotos,
            detalles: detalles,
            estado: estado,
            tipo: tipo
        }, {
            where: {
                id_auto: id
            }
        })
        res.send(editar);

    } catch (error) {

    }
}