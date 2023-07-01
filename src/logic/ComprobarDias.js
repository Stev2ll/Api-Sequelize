import moment from 'moment';
import { getDiasMaximo } from '../Services/Configs/ConfigVar.js';

export const verificarDias = (fecha_entrega, fecha_devolucion) => {
  const fechaEntregaMoment = moment(fecha_entrega, 'YYYY-MM-DD', true);
  const fechaDevolucionMoment = moment(fecha_devolucion, 'YYYY-MM-DD', true);
  const fechaActual = moment().startOf('day');
  const fechaMaxima = fechaActual.clone().add(getDiasMaximo(), 'days');

  if (!fechaEntregaMoment.isValid() || !fechaDevolucionMoment.isValid()) {
    return false; // Fechas inválidas
  }

  if (!fechaEntregaMoment.isSameOrAfter(fechaActual, 'day') || !fechaEntregaMoment.isSameOrBefore(fechaMaxima, 'day')) {
    return false; // La fecha de entrega no cumple con las condiciones
  }

  if (!fechaDevolucionMoment.isAfter(fechaEntregaMoment, 'day') || !fechaDevolucionMoment.isSameOrBefore(fechaMaxima, 'day')) {
    return false; // La fecha de devolución no cumple con las condiciones
  }
  return true; // Cumple todas las condiciones
};

