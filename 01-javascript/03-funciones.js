holaMundo();
function holaMundo() {
    console.log("Hola mundo");
}


console.log(holaMundo());


function sum(numeroUno, numeroDos) {
    var numeroUnoEsValido = typeof  numeroUno == 'number';
    var numeroDosEsValido = typeof  numeroDos == 'number';
    if (numeroUnoEsValido && numeroDosEsValido) {
        return numeroUno + numeroDos;
    } else {
        return 0;
    }
}

console.log(sum(true, undefined ,undefined, 4 ,5 ,6));


function  sumarNumeros(...numeros) {

    var resultado = calcularResSumNum(numeros);
    if (resultado.esValido) {
        return resultado.suma;
    } else {
        return 0;
    }
}

function calcularResSumNum(numeros) {
    var sumar = 0;
    var todoLosNumerosSonValidos = true;
    for (var i = 0; i <numeros.length; i++) {
        if (typeof numeros[i] == 'number') {
            sumar = sumar + numeros[i];
        } else {
            todoLosNumerosSonValidos = false;
        }
    }
    var resultado = {
        suma: sumar,
        esValido: todoLosNumerosSonValidos
    };
    return resultado;
}

console.log(sumarNumeros(1, 2, 3, 4, 5));

function saludar(nombre, funcion) {
    return `Hola ${funcion(nombre)}`;
}

console.log(saludar("Adrian", nombreEnMayusculas));
console.log(saludar("Adrian", nombreEnMinuscula));
console.log(saludar("Adrian", nommbreConPuntoFinal));

function nombreEnMayusculas(nombre) {
    return nombre.toUpperCase();
}
function  nombreEnMinuscula(nombre) {
    return nombre.toLowerCase();
}
function  nommbreConPuntoFinal(nombre) {
    return nombre + ".";
}

var arreglo = [1,2,3,1,1];
arreglo.findIndex(function (valorDelArreglo, indice, arreglo) {
   return 2;
});










