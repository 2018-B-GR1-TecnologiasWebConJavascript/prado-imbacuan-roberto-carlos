var require, module;
const fs = require('fs');
const chalkPip = require('chalk-pipe');
var Archivo = {};
Archivo['agregar'] = (nombreArchivo: string, contenido: string): Promise<any> => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.appendFile(nombreArchivo, contenido, (error) => {
            if (error) {
                reject(error);
            } else {
                console.log(chalkPip('green.bold')('Datos guardados!'));
                resolve(contenido);
            }
        })
    })
}
Archivo['leer'] = (nombreArchivo: string): Promise<any> => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeido) => {
            if (error) {
                console.log(chalkPip('red.bold')('Archivo no encontrado!'));
                reject(error);
            } else {
                resolve(contenidoLeido);
            }
        })
    })
}
Archivo['crear'] = (nombreArchivo: string, contenido: string): Promise<any> => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, contenido, (error) => {
            if (error) {
                reject(error);
            } else {
                console.log(chalkPip('green.bold')('Datos guardados!'));
                resolve(contenido);
            }
        })
    });
}
module.exports = Archivo;