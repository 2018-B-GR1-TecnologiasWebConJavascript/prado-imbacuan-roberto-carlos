// 01-tipo-variables-ts

let edad:number | string= 13;
edad = 25;
edad = '25';
const nombre:string = 'Roberto'
// const casado: boolean = false;
let numeros: number[] = [1,2,3,4];

let variableLoca:any = '';
variableLoca = false;

const obj:
    {Name: string; edad: number}  // Definición/Interface
    ={ // Objeto
    Name: '',
    edad: 2
};


let  apellido = 'adasd';
//apellido = 12;

let casado = false;
casado = true;
casado = null;
casado = null;


let adrian: {
    nombre: string;
    apellido?: string;
};
console.log(adrian);
adrian.nombre = 'asdsad'


let fechaNacimiento:Date = new Date(); // Tipat clase
/*let  promesa: Promise<number> = new Promise((resolve, reject) => {
    resolve(1);
});*/

function saludar(
    nombre: string,
    apellido?: string,
    ...otrosNombres: string[]): any {
    return 'Hola';
}
let respuestaSaludar = <number> saludar('Vicente', 'Eguez', '','','','');

console.log();

const saludo = (nombre:string):number => {
    return 1;
}

class Usuario {
    public edad: number;
    nombre;
    apellido?: string;
    constructor(){}
    private saludar(nombre: string): string {
        return '';
    }
}
const personaInstancia = new Usuario();

interface UsurioInterface {
    nombre: string;
    apellido?: string;
}
class UsurioDummy {
    nombre: string;
    apellido?: string;
}

const vicente: UsurioInterface = {
    nombre: 'Vicente',
    apellido: 'Eguez'
};