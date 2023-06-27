import { licencias } from "../../models/licencias.js";
import { verificarCategorias, verificarEstado, verificarFechas } from "./rules.js";
import { letrasMayusculas } from './helpers.js';
import multer from 'multer';
import path from 'path'


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'img/clientes')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
export const uploadLicencias = multer({
    storage: storage,
    limits: {
        fileSize: '10000000'
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/
        const mimType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimType && extname) {
            return cb(null, true)
        }
        cb('DAME UN FORMATO CORRECTO')
    }

}).single('fotolicencia')

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

    const { id_licencia, fecha_caducidad, estado, categoria } = req.body;
    const fotolicencia = req.file.path;

    if (!id_licencia || !fotolicencia || !fecha_caducidad || !estado || !categoria) {
        return res.status(400).json({ message: 'Faltan campos obligatorios' + estado + categoria });
    }
    const estadoAux = letrasMayusculas(estado);
    const categoriaAux = letrasMayusculas(categoria);


    if (!verificarCategorias(categoriaAux)) {
        return res.status(400).json({ message: 'ERROR: No se encuentra la categoria' });
    }
    // if (!verificarExtensionFotolicencia(fotolicencia)) { 
    //     return res.status(400).json({ message: 'La extension de la fotolicencia no es compatible' });
    // }
    // if (!verificarEstado(estadoAux)) {
    //     return res.status(400).json({ message: 'ERROR: EL ESTADO DEBE SER BOLEANO' });
    // }
    if (!verificarFechas(fecha_caducidad)) {
        return res.status(400).json({ message: 'LICENCIA CADUCADA O PRONTO CADUCARA' });
    }

    try {
        const insert = await licencias.create({
            id_licencia,
            fotolicencia,
            fecha_caducidad,
            estado: estadoAux,
            categoria: categoriaAux,
        });
        res.sendStatus(200).json({ message: 'Licencia Creada' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const editarLicencia = async (req, res) => {

    try {

        const { id } = req.params;
        const { fecha_caducidad, estado, categoria } = req.body;
        const fotolicencia = req.file.path;

        const estadoAux = letrasMayusculas(estado);
        const categoriaAux = letrasMayusculas(categoria);


        try {
            const editar = await licencias.update({
                fotolicencia,
                fecha_caducidad: fecha_caducidad,
                estado: estadoAux,
                categoria: categoriaAux
            }, {
                where: {
                    id_licencia: id
                }
            })
            res.send(editar);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
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