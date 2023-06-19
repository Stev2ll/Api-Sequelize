import moment from 'moment';

export const verificarFechas = (fecha_recepcion) => {
    const fechaActual = moment();
    const fechaRecepcion = moment(fecha_recepcion);

    const diferenciaDias = fechaRecepcion.diff(fechaActual, 'days');

    if (!diferenciaDias >= 15) {
        console.log('NO SE ADMITE LICENCIAS CADUCADAS :(')
        return false;
    }

    return true;
};

export const verificarExtensionFoto = (foto) => {
    const extensionesValidas = ['jpg', 'jpeg', 'png', 'gif'];

    const extension = foto.split('.').pop().toLowerCase();

    if (!extensionesValidas.includes(extension)) {
        return false;
    }

    return true;
};
export const verificarEstado = (estado) => {
    if (!typeof estado !== 'boolean') {
      return false;
    }
    return true;
  };

  export const verificarCategorias =(categoria) =>{
    const categories = ['B', 'C', 'D', 'E', 'C1', 'D1']
    const categoriAux =  categoria.toUpperCase();

    return categories.includes(categoriAux);
  }

