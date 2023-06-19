

export const verificarFecha = (fecha) => {
    const fechaActual = new Date();
    const fechaNueva = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());

    if (fecha.getTime() === fechaNueva.getTime()) {
        return true;
    }

    return false;
};
