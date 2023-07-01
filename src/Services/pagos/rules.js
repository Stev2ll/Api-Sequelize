
const tipos = ['PAYPAL', 'MERCADO LIBRE', 'FISICO', 'TRASNFERENCIA', 'OTRO'];

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

export const verificarFecha = (fecha_pago) => {
    const fechaPartes = fecha_pago.split('-');
    const anio = parseInt(fechaPartes[0]);
    const mes = parseInt(fechaPartes[1]) - 1; // Restar 1 al mes ya que en JavaScript los meses van de 0 a 11
    const dia = parseInt(fechaPartes[2]);
  
    const fecha = new Date(anio, mes, dia);
  
    return (
      fecha.getFullYear() === anio &&
      fecha.getMonth() === mes &&
      fecha.getDate() === dia &&
      !isNaN(fecha.getTime())
    );
  };
  