export const Minuscula  = (comentario) =>{
    return comentario.toLowerCase();
}


export const verificarFecha = (fecha_pago) => {
    const fechaActual = new Date(); // Obtiene la fecha actual
    
    // Convierte la fecha de pago en un objeto Date
    const fechaPago = new Date(fecha_pago);
    
    // Verifica si la fecha de pago es válida comparándola con la fecha actual
    if (isNaN(fechaPago.getTime()) || fechaPago > fechaActual) {
      return false; // La fecha de pago es inválida
    }
    
    return true; // La fecha de pago es válida
  };
  