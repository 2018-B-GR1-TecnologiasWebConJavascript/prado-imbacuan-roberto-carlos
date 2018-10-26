const version = require('./version');
const procesadores = require('./numero-procesadores');
const calculadora = require('./calculadora-simple');
const versionNode = require('./version-node/version-node');

const sinUso = require('../../04_operadores');


console.log(version);
console.log(procesadores);

console.log(calculadora.sumar(1,2))
console.log(calculadora.restar(1,2))
console.log(calculadora.multiplicar(1,2))
console.log(calculadora.dividir(1,2))

console.log(versionNode)
