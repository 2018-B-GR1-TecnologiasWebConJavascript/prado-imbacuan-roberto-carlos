// No usar el for
// Operadores
const arreglo = ['A', 'b', 'C'];

const respuesta = arreglo.forEach((valorActualDeLaIteracion, indice, arreglo) => {{
    console.log('Valor: ', valorActualDeLaIteracion);
    console.log('Indice: ', indice);
    console.log('Arreglo: ', arreglo);
}});

console.log(respuesta);

arreglo.forEach(v => console.log(v));

// map
// retorn el objeto mutado
const respuestMap = arreglo.map(valorActual => valorActual.toUpperCase());
console.log(respuestMap, arreglo);

const arregloNUmeros = [9,1,5,4,3,7,8,2,6,10];
// filter
const respuestaFilter = arregloNUmeros
    .filter(valorActual => valorActual > 5) // array
    .map(n => n + 1) // array
    .filter(n => n > 7) // array
    .forEach( n => console.log(n)); // undefined

// Siempre usar triple igual
if (0 === '') {
    console.log('Es verdad');
} else {
    console.log('No es verdad')
}
console.log(respuestaFilter);

// findIndex
const respuestaFindIndex = arregloNUmeros
    .findIndex(v => v === 7);

console.log(arregloNUmeros.indexOf(7))
console.log(respuestaFindIndex);

// find
const respuestaFind = arregloNUmeros
    .find(v => v === 7);

console.log(respuestaFind);

// some
const respuestSome = arregloNUmeros.some(n => n%11 === 0);
console.log(respuestSome);

const respuestaEvery = arregloNUmeros.every(n => n < 5);
console.log(respuestaEvery);

// reduce

const  respuestaReduce = arregloNUmeros.reduce((valorActualDeLaOperacion, valorActualDelArreglo) => {
    return valorActualDeLaOperacion + valorActualDelArreglo
}, 0); // valor de inicio de  la operacion

console.log(respuestaReduce);

const  respuestaReduce = arregloNUmeros.reduce((a,b) =>  a - b,100); // valor de inicio de  la operacion

