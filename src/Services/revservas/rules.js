import moment from 'moment';

export const validarFechaEntrega = (fecha) => {
  const fechaIngresada = moment(fecha, 'YYYY-MM-DD', true);

  if (!fechaIngresada.isValid()) {
    return false; // Fecha inválida
  }

  const fechaActual = moment().startOf('day');
  const fechaMinima = fechaActual.clone().add(2, 'days');

  return fechaIngresada.isSame(fechaActual, 'day') || fechaIngresada.isAfter(fechaMinima, 'day');
}


export const determinarFechaDevolucion = (fechaIngreso, fechaEntrega) => {
  const fechaIngresoMoment = moment(fechaIngreso, 'YYYY-MM-DD', true);
  const fechaEntregaMoment = moment(fechaEntrega, 'YYYY-MM-DD', true);

  if (!fechaIngresoMoment.isValid() || !fechaEntregaMoment.isValid()) {
    return false; // Fecha inválida
  }

  const fechaMaxima = fechaIngresoMoment.clone().add(3, 'days');

  return fechaEntregaMoment.isSameOrAfter(fechaIngresoMoment, 'day') && fechaEntregaMoment.isSameOrBefore(fechaMaxima, 'day');
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

