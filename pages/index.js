/*
Queremos un programa que le pida al usuario una cantidad de
bitcoins y lo convierta a pesos.
Queremos que el usuario pueda ingresar varios y que finalice con un
'ESC'
*/

let ingresoDelUsuario;

function verificarIngresoValido(){
    while(ingresoDelUsuario === ''){
        alert("Ingresa un dato válido.");
        ingresoDelUsuario = prompt("Ingresame una cantidad de bitcoins a convertir en pesos o ESC para salir");
    }
}

ingresoDelUsuario = prompt("Ingresame una cantidad de bitcoins a convertir en pesos o ESC para salir");
verificarIngresoValido();

while(ingresoDelUsuario !== 'ESC'){
    let cantidadDeBitcoins = Number(ingresoDelUsuario);
    let factorDeConversionDeBTCaARS = 2000000;
    let cantidadDePesos = cantidadDeBitcoins * factorDeConversionDeBTCaARS;
    alert("Tus " + cantidadDeBitcoins + " bitcoins equivalen a " + cantidadDePesos + " de pesos.");
    ingresoDelUsuario = prompt("Ingresame una cantidad de bitcoins a convertir en pesos o ESC para salir");
    verificarIngresoValido();
}
alert("Gracias por usar mi programa.");