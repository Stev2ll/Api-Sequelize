import moment from 'moment';
import { getDiasMaximo, getDiasMinimo, getPrecioMaximo, getPrecioMinimo } from "../Configs/ConfigVar.js";

export const validarFechaEntrega = (fecha) => {
  const fechaIngresada = moment(fecha, 'YYYY-MM-DD', true);

  if (!fechaIngresada.isValid()) {
    return false; // Fecha inválida
  }

  const fechaActual = moment().startOf('day');

  return fechaIngresada.isSameOrAfter(fechaActual, 'day');
};

export const determinarFechaDevolucion = (fechaIngreso, fechaEntrega) => {
  const fechaIngresoMoment = moment(fechaIngreso, 'YYYY-MM-DD', true);
  const fechaEntregaMoment = moment(fechaEntrega, 'YYYY-MM-DD', true);

  if (!fechaIngresoMoment.isValid() || !fechaEntregaMoment.isValid()) {
    return false; // Fecha inválida
  }

  const diferenciaDias = fechaEntregaMoment.diff(fechaIngresoMoment, 'days');
  const diasMaximo = getDiasMaximo();

  return diferenciaDias <= diasMaximo && fechaEntregaMoment.isSameOrAfter(fechaIngresoMoment, 'day');
};


// export const determinarFechaDevolucion = (fechaIngreso, fechaEntrega) => {
//   const fechaIngresoMoment = moment(fechaIngreso, 'YYYY-MM-DD', true);
//   const fechaEntregaMoment = moment(fechaEntrega, 'YYYY-MM-DD', true);

//   if (!fechaIngresoMoment.isValid() || !fechaEntregaMoment.isValid()) {
//     return false; // Fecha inválida
//   }

//   const fechaMaxima = fechaIngresoMoment.clone().add(getDiasMaximo(), 'days');

//   return fechaEntregaMoment.isSameOrAfter(fechaIngresoMoment, 'day') && fechaEntregaMoment.isSameOrBefore(fechaMaxima, 'day');
// }


export const verificarMonto = (monto) => {
  const montoAux = parseFloat(monto);
  if (isNaN(montoAux)) {
    return false;
  }
  if (montoAux < getPrecioMinimo() || montoAux > getPrecioMaximo()) {
    return false;
  }

  return true;
}

