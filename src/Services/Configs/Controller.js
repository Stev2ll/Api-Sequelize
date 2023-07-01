import { getIVA, setIVA, getPrecioMinimo, setPrecioMinimo, getPrecioMaximo, setPrecioMaximo, getDiasMinimo, setDiasMinimo, getDiasMaximo, setDiasMaximo } from './ConfigVar.js';

export const DatosVar = (req, res) => {
    res.json({
        iva: getIVA(),
        precioMinimo: getPrecioMinimo(),
        precioMaximo: getPrecioMaximo(),
        diasMaximo: getDiasMaximo(),
        diasMinimo: getDiasMinimo()
    });
}

export const editaVars = (req, res) => {
    const {iva, precioMinimo, precioMaximo, diasMinimo, diasMaximo} = req.body;
    if (iva !== undefined) {
        setIVA(iva);
    }

    if (precioMinimo !== undefined) {
        setPrecioMinimo(precioMinimo);
    }

    if (precioMaximo !== undefined) {
        setPrecioMaximo(precioMaximo);
    }

    if (diasMinimo !== undefined) {
        setDiasMinimo(diasMinimo);
    }

    if (diasMaximo !== undefined) {
        setDiasMaximo(diasMaximo);
    }

    if (
        req.body.iva === undefined &&
        req.body.precioMinimo === undefined &&
        req.body.precioMaximo === undefined &&
        req.body.diasMinimo === undefined &&
        req.body.diasMaximo === undefined
    ) {
        res.status(400).json({ error: 'No se proporcionaron valores para actualizar' });
    } else {
        res.json({ message: 'Valores de configuración actualizados correctamente' });
    }
}
