// Int edad = 10;
// No tipado

var edad = 10;
edadString = "10";

var sueldo = 1.234;
var casado = false;
var hijos = null;
var dato = undefined;


var fechaNacimiento = new Date();

var persona = {
    "nombre": "Adrian",
    'segundoNombre': 'Vicente',
    apellidoPaterno: `Eguez`,
    edad: 29,
    casado: false,
    hijos: null,
    mascotas: {
        nombre: "Cachetes"
    }
}; // object


console.log("Hola mundo");

console.log("edad", typeof edad);
console.log("edadString", typeof edadString);
console.log("sueldo", typeof sueldo);
console.log("casado", typeof casado);
console.log("hijos", typeof hijos);

console.log("dato valor", dato);
console.log("dato tipo", typeof dato);

console.log("fechaNacimiento", typeof  fechaNacimiento);

console.log(persona.mascotas.nombre);
console.log(persona);

delete persona.hijos;
console.log(persona);

persona.hija = {
    nombre: '???'
};

// console.log(persona.abuelo.nombre);

if(true) {
    console.log("Si");
} else {
    console.log("No")
}

if(false) {
    console.log("Si");
} else {
    console.log("No")
}

if(1) { // Truthy
    console.log("Si");
} else {
    console.log("No")
}
if(0) { // Falsy
    console.log("Si");
} else {
    console.log("No")
}

if(-1) { // Truthy
    console.log("Si");
} else {
    console.log("No")
}

if("") { // Truthy
    console.log("Si");
} else {
    console.log("No")
}

if(null) { // Falsy
    console.log("Si");
} else {
    console.log("No")
}

if("a") { // Truthy
    console.log("Si");
} else {
    console.log("No")
}

if({}) { // Truthy
    console.log("Si");
} else {
    console.log("No")
}

if({a: 2}) { // Truthy
    console.log("Si");
} else {
    console.log("No")
}

if(new Date()) { // Truthy
    console.log("Si");
} else {
    console.log("No")
}

if(undefined) { // Falsy
    console.log("Si");
} else {
    console.log("No")
}




