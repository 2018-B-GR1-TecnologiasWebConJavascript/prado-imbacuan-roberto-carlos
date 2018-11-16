var require, module;
const archivo = require('./archivo');
const transformaciones = require('./transformaciones');
const chalkP = require('chalk-pipe');
var Automovil = {};
Automovil['guardar'] = (automovil: any) => {
    const id1 = Math.floor((Math.random() * 100) + 1);
    const id2 = Math.floor((Math.random() * 10) + 0);
    automovil['id'] = id1 + '' + id2;
    const auto = transformaciones.jsonAtexto(automovil);
    return archivo.agregar('./data/autos.txt', auto);
}
Automovil['listar'] = () => {
    return archivo.leer('./data/autos.txt');
}
Automovil['buscar'] = (buscar: any) => {
    // console.log('buscandi', buscar)
    // @ts-ignore
    return new Promise((resolve, reject) => {
        archivo.leer('./data/autos.txt')
            .then((texto) => {
                const lista: any[] = transformaciones.textToList(texto);
                // console.log(lista);
                const buscado = lista.filter((automovil) => {
                    return automovil.id === buscar.id
                });
                resolve(buscado);
            })
            .catch(e => {
                reject(e);
            });
    });
}
Automovil['actualizar'] = (informacion: any, item: any) => {
    informacion['key'] = transformaciones.keyEnToEsp(informacion['key']);
    // @ts-ignore
    return new Promise((resolve, reject) => {
        archivo.leer('./data/autos.txt')
            .then((texto) => {
                let lista: any[] = transformaciones.textToList(texto);
                let index = -1;
                    lista.forEach((value, i ) => {
                    if (value.id === item[0].id) {
                        index = i;
                    }
                });
                item[0][informacion['key']] = informacion['value'];
                lista.splice(index,1, item[0]);
                const contenido = transformaciones.listToText(lista);
                return archivo.crear('./data/autos.txt', contenido);
            }).then(texto => {
                resolve(texto);
            })
            .catch(e => {
                reject(e);
            });
    });
}
Automovil['eliminar'] = (informacion: any, item: any) => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        if (informacion['delete']) {
            archivo.leer('./data/autos.txt')
                .then((texto) => {
                    let lista: any[] = transformaciones.textToList(texto);
                    let index = -1;
                    lista.forEach((value, i ) => {
                        if (value.id === item[0].id) {
                            index = i;
                        }
                    });
                    lista.splice(index,1);
                    const contenido = transformaciones.listToText(lista);
                    return archivo.crear('./data/autos.txt', contenido);
                }).then(texto => {
                    resolve(texto);
                })
                .catch(e => {
                    reject(e);
                });
        } else {
            reject();
        }
    })
}
Automovil['mostrar'] = (tipo: number, body: any) => {
    // console.log(tipo, body)
    let tabla = null;
    switch (tipo) {
        case 0: // un objeto
            const automovil = transformaciones.textTojson(body);
            tabla = transformaciones.listToTable([automovil]);
            break;
        case 1: // una archivo
        case 4:
        case 6:
            const autos = transformaciones.textToList(body);
            tabla = transformaciones.listToTable(autos);
            break;
        case 2: // para listas
        case 3:
        case 5:
        //case 4:
            const encontrado: any[] = body;
            if (encontrado.length === 0) {
                console.log(chalkP('red.bold')('No existen datos!'));
            }
            tabla = transformaciones.listToTable(body);
            break;
    }
    // @ts-ignore
    return new Promise((resolve, reject) => {
        if (tabla !== null) {
            console.log(tabla.toString());
            resolve();
        } else {
            reject('TABLA VACIA');
        }
    })
}

module.exports = Automovil;
