var require, module;
const fs = require('fs');

interface BDD {
    agregar?: any;
    leer?: any;
    crear?: any;
}

var archivo_: BDD = {};

archivo_.leer = (nombreArchivo: string): Promise<any> => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la Base de Datos',
                    bdd: null
                });
            } else {
                resolve({
                    mensaje: 'Base de datos leida',
                    bdd: JSON.parse(contenidoLeido)
                });
            }
        })
    })
}
archivo_.crear = (nombreArchivo: string, contenido: any, action: string): Promise<any> => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, JSON.stringify(contenido), (error) => {
            if (error) {
                reject({
                    mensaje: 'Error: ' + action + ' BDD',
                    error: 500
                });
            } else {
                // console.log(chalkPip('green.bold')('Datos guardados!'));
                resolve({
                    mensaje: action + ' BDD',
                    bdd: contenido
                });
            }
        })
    });
}

module.exports = archivo_;