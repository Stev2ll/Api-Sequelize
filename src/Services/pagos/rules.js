
const tipos = ['PAYPAL', 'MERCADO LIBRE', 'FISICO', 'TRANFERENCIA'];

export const verificarTipo = (tipo) => {

    if (tipos.includes(tipo)) {
        return true;
    }

    return false;
}

export const verificarMonto = (monto) =>{
    const montoAux = parseFloat(monto);
    if(isNaN(montoAux)){
        return false;
    }
    if(montoAux < 10 || montoAux > 5000){
        return false;
    }

    return true;
}
export const verificarFecha = (fecha) => {
    const fechaActual = new Date();
    const fechaNueva = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());

    if (fecha.getTime() === fechaNueva.getTime()) {
        return true;
    }

    return false;
};
