var arreglo = [];
arreglo = [
    1,
    "Adrian",
    false,
    null,
    new Date(),
    {
        nombre: "Vicente"
    },
    [1, 2, false, true]
];

console.log(arreglo[3]);

var arregloNumeros = [1, 2, 3];

arregloNumeros.push(4);

console.log(arregloNumeros);

arregloNumeros.pop();

console.log(arregloNumeros);

arregloNumeros.splice(0, 1);

console.log(arregloNumeros);

arregloNumeros.splice(0, 2);

console.log(arregloNumeros);

arregloNumeros.splice(0, 0, 3);
arregloNumeros.splice(1, 0, 4, 5, 6, 7, 8, 9, 10);

console.log(arregloNumeros);

var indice6 = arregloNumeros.indexOf(6);

arregloNumeros.splice(indice6, 1);

console.log(arregloNumeros);
// [0,10] cerrado
// [0,10[ abierto
var arreglo1 = arregloNumeros.slice(0, 3)
console.log("arreglo1", arreglo1);

var arreglo2 = arregloNumeros.slice(3, 7);

console.log("arreglo2", arreglo2);

// arreglo2.push(7);
var indice7 = arreglo2.indexOf(7);
console.log(arreglo1);
console.log(arreglo2);
console.log(indice7);

var arreglo12 = [1, 2];
var arreglo6 = [6];

// [1, 2 ,3 ,4 ,5 ,6 ,7 ,8, ,9 10]
// Destructuracion de arreglos
console.log(...arreglo12);
console.log(1, 2);

var arregloTotal = [...arreglo12, ...arreglo1, ...arreglo6, ...arreglo2];

console.log(arregloTotal);
var arregloSiguientesNumeros = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
arregloTotal.splice(arregloTotal.length, 0, ...arregloSiguientesNumeros);

console.log(arregloTotal);
