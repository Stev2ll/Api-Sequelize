
import fs from 'fs';
import path from 'path'

export const letrasMayusculas = (carro) => {
  const autos = carro.toUpperCase();
  return autos;
}

export const aEntero = (precio) => {
  const precioAux = parseInt(precio);

  return precioAux;
}

export const guardarImagen = (foto) => {
  return new Promise((resolve, reject) => {
    if (!foto || !foto.buffer) {
      reject(new Error('La foto no es válida'));
      return;
    }

    const nombreArchivo = `${Date.now()}_${foto.originalname}`;
    const rutaDestino = path.join('../../img/autos/', nombreArchivo);

    fs.writeFile(rutaDestino, foto.buffer, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(rutaDestino);
      }
    
    });
  });
};
