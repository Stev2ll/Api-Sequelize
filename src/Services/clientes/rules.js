export const verificarNombre = (nombre) => {
    const nombreP = nombre;
    if (nombreP.length <= 2) {
        return false;
    }
    // Verificar si el nombre tiene letras repetidas más de 2 veces seguidas
    if (nombreP.match(/([A-Za-z])\1{2,}/)) {
        return false;
    }

    // Verificar si el nombre contiene solo letras y espacios
    if (!nombreP.match(/^[A-Za-z\s]+$/)) {
        return false;
    }

    if (!nombreP || nombreP.trim() === '') {
        return false;
    }

    // Verificar si el nombre tiene una longitud válida (entre 2 y 50 caracteres)
    if (nombreP.length < 2 || nombreP.length > 28) {
        return false;
    }


    return true;
}
export const verificarGenero = (genero) => {
    const generoV = ['MASCULINO', 'FEMENINO', 'OTRO'];

    const generoP = genero.toUpperCase();

    if (!generoV.includes(generoP)) {
        return false;
    }
    return true;
}

export const verificarEstado = (estado) => {

    const estadoV = ['HABILITADO', 'NO HABILITADO', 'PENDIENTE'];
    const estadoP = estado.toUpperCase();
    if (!estadoV.includes(estadoP)) {
        return false;
    }
    return true;

}

export const verificarExtensionFoto = (foto) => {
    const extensionesValidas = ['jpg', 'jpeg', 'png', 'gif'];

    const extension = foto.split('.').pop().toLowerCase();

    if (extensionesValidas.includes(extension)) {
        return true;
    }
    
    return false;
};


export const verificarCedula = (cedulaP) => {
    const cedula = cedulaP;
    if (cedula.length == 10) {

        //Obtenemos el digito de la region que sonlos dos primeros digitos
        var digito_region = cedula.substring(0, 2);

        //Pregunto si la region existe ecuador se divide en 24 regiones
        if (digito_region >= 1 && digito_region <= 24) {

            // Extraigo el ultimo digito
            var ultimo_digito = cedula.substring(9, 10);

            //Agrupo todos los pares y los sumo
            var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));

            //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
            var numero1 = cedula.substring(0, 1);
            var numero1 = (numero1 * 2);
            if (numero1 > 9) { var numero1 = (numero1 - 9); }

            var numero3 = cedula.substring(2, 3);
            var numero3 = (numero3 * 2);
            if (numero3 > 9) { var numero3 = (numero3 - 9); }

            var numero5 = cedula.substring(4, 5);
            var numero5 = (numero5 * 2);
            if (numero5 > 9) { var numero5 = (numero5 - 9); }

            var numero7 = cedula.substring(6, 7);
            var numero7 = (numero7 * 2);
            if (numero7 > 9) { var numero7 = (numero7 - 9); }

            var numero9 = cedula.substring(8, 9);
            var numero9 = (numero9 * 2);
            if (numero9 > 9) { var numero9 = (numero9 - 9); }

            var impares = numero1 + numero3 + numero5 + numero7 + numero9;

            //Suma total
            var suma_total = (pares + impares);

            //extraemos el primero digito
            var primer_digito_suma = String(suma_total).substring(0, 1);

            //Obtenemos la decena inmediata
            var decena = (parseInt(primer_digito_suma) + 1) * 10;

            //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
            var digito_validador = decena - suma_total;

            //Si el digito validador es = a 10 toma el valor de 0
            if (digito_validador == 10)
                var digito_validador = 0;

            //Validamos que el digito validador sea igual al de la cedula
            if (digito_validador != ultimo_digito) {
                console.log('la cedula:' + cedula + ' es incorrecta');
                return false;
            }

        } else {
            // imprimimos en consola si la region no pertenece
            console.log('Esta cedula no pertenece a ninguna region');
            return false;
        }
    } else {
        //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
        console.log('Esta cedula tiene menos de 10 Digitos');
        return false;
    }

    return true;
}