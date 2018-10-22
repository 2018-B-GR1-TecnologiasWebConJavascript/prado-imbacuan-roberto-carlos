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

function restar(a, b){
    return a - b;
}

console.log(restar(4,2)); // Ejecucion undefined
console.log(typeof restar); // Tipo function
console.log(restar); // Definicion de funcion

// Anonymus function
var ejemplo = function () { // funcion anonima

}
//nombreDos();

var adrian = {
    trabajo: function () {

    }
};
adrian.trabajo();

var arreglo = [
    function () {

    }
];
arreglo[0]();

saludar("Maria", function (nombre) {
   return nombre + 'Eg';
});

// tipos de variables
var variable; // Nunca mas
let variableDos = 2; // Si
variableDos = 3;

const edad = 29; // Siempre que puedan
// edad = 30;

const vicente = {
    nombre: 'Vicente'
};
vicente.nombre = 'Adrian';


const arregloUnoDos = [1, 2];

arregloUnoDos[0] = 3;

const nombre = 'Adrian';
// nombre = 'Vicente';

const casado = true;
// casado = false;

const hijos = null;
// hijos = 3;

const ganarDinero = function () {}
// ganarDinero = function () {}


// vicente = {
//   algo: 'mas'
// };

// arregloUnoDos = [1,2,3,4,5];

vicente.isPrototypeOf();

arregloUnoDos.push(5);

nombre.toUpperCase();

// Nunca vamos a usar funciones anonimas
// FAT ARROW FUNCTION
const elevarAlCuadrado = function (numero) {
  return numero * numero;
};

const  elevarAlCuadradoV2 = (numero) => numero * numero;

const elevarALCuadradoV3 = numero => numero * numero;

const restarDosNumeros = (numUno,numDos) => numUno - numDos;













