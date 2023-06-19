import { licencias } from "../../models/licencias.js";
import { verificarCategorias, verificarEstado, verificarExtensionFoto, verificarFechas } from "./rules.js";
import { letrasMayusculas } from './helpers.js';


export const getLicencias = async (req, res) => {
    try {
        const obtener = await licencias.findAll();
        res.json(obtener);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const getLicencia = async (req, res) => {
    const { id } = req.params;
    try {
        const obtenerL = await licencias.findOne({
            where: {
                id_licencia: id
            }
        })
        res.json(obtenerL);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const insertarLicencia = async (req, res) => {
    const { id_licencia, foto, fecha_caducidad, estado, categoria } = req.body;
    const estadoAux = letrasMayusculas(estado);
    const categoriaAux = letrasMayusculas(categoria);

    if (!id_licencia || !foto || !fecha_caducidad || !estado || !categoria) {
        return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    if (!verificarCategorias(categoriaAux)) {
        return res.status(400).json({ message: 'ERROR: No se encuentra la categoria' });
    }
    if (!verificarExtensionFoto(foto)) {
        return res.status(400).json({ message: 'La extension de la foto no es compatible' });
    }
    if (!verificarEstado(estadoAux)) {
        return res.status(400).json({ message: 'ERROR: EL ESTADO DEBE SER BOLEANO' });
    }
    if (!verificarFechas(fecha_caducidad)) {
        return res.status(400).json({ message: 'LICENCIA CADUCADA O PRONTO CADUCARA' });
    }
    try {
        const insert = await licencias.create({
            id_licencia,
            foto,
            fecha_caducidad,
            estado: estadoAux,
            categoria: categoriaAux,
        });
        res.sendStatus(200).json({message: 'Licencia Creada'});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const editarLicencia = async (req, res) => {
    const { id } = req.params;
    const { foto, fecha_caducidad, estado, categoria } = req.body;
    try {
        const editar = await licencias.update({
            foto: foto,
            fecha_caducidad: fecha_caducidad,
            estado: estado,
            categoria: categoria
        }, {
            where: {
                id_licencia: id
            }
        })
        res.send(editar);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const eliminarLicencia = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteLicencia = await licencias.destroy({
            where: {
                id_licencia: id
            }
        })
        res.sendStatus(200);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}