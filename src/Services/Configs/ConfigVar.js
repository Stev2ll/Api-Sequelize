// config.js
let iva = 0.16; // Valor predeterminado del IVA
let precioMinimo = 10;
let precioMaximo = 100;
let diasMinimo = 1;
let diasMaximo = 30;

export const getIVA = () => iva;
export const setIVA = (newIVA) => {
  iva = newIVA;
};

export const getPrecioMinimo = () => precioMinimo;
export const setPrecioMinimo = (newPrecioMinimo) => {
  precioMinimo = newPrecioMinimo;
};

export const getPrecioMaximo = () => precioMaximo;
export const setPrecioMaximo = (newPrecioMaximo) => {
  precioMaximo = newPrecioMaximo;
};

export const getDiasMinimo = () => diasMinimo;
export const setDiasMinimo = (newDiasMinimo) => {
  diasMinimo = newDiasMinimo;
};

export const getDiasMaximo = () => diasMaximo;
export const setDiasMaximo = (newDiasMaximo) => {
  diasMaximo = newDiasMaximo;
};
