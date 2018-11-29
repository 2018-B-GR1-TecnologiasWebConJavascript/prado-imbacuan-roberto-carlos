var require;

const chalkPipe = require('chalk-pipe');
const inquirer = require('inquirer');
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const mergeMap = require('rxjs/operators').mergeMap;

// Aux
const questions = require('./questions');
const archivo = require('./archivo');

// Interfaces
interface Respuesta {
    mensaje: string;
    bdd?: BaseDeDatos;
    opcionMenu?: OpcionMenu;
    automovil?: Automovil;
    mapeo?: Mapeo;
}
interface BaseDeDatos {
    automoviles: Automovil[];
}
interface Automovil {
    id: string;
    brand: string;
    model: string;
    year: string;
    color: string;
    price: string;
    status: string;
}
interface OpcionMenu {
    opcionMenu: 'Crear' | 'Borrar' | 'Actualizar' | 'Buscar' | 'actualizar_init';
}
interface Mapeo {
    key: string;
    value: string;
}

// init()
// Correccion Observables

const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Ingrese una opcióm:',
    choices: [
        'Crear',
        'Buscar',
        'Actualizar',
        'Borrar',
    ]
};

function main() {
    console.log(chalkPipe('blue.bold')('Inicio'));
    inicializarBase()
        .pipe(
            preguntarOpcionesMenu(),
            preguntarDatos(),
            ejecutarAccion(),
            actualizarBDD()
        )
        .subscribe(
            (respuesta: Respuesta) => {
                switch (respuesta.opcionMenu.opcionMenu) {
                    case 'Crear':
                        if (respuesta.automovil) {
                            console.log(chalkPipe('green.bold')('Automovil creado!'));
                            console.log(respuesta.automovil);
                        }
                        break;
                    case 'Buscar':
                        if (respuesta.automovil) {
                            console.log(chalkPipe('green.bold')('Encontrado!'));
                            console.log(respuesta.automovil);
                        } else {
                            console.log(chalkPipe('red.bold')('El automóvil no existe!'));
                        }
                        break;
                    case 'Actualizar':
                        if (respuesta.automovil) {
                            console.log(chalkPipe('green.bold')('Actualizado!'));
                            console.log(respuesta.automovil);
                        } else {
                            console.log(chalkPipe('red.bold')('El automóvil no existe!'));
                        }
                        break;
                    case 'Borrar':
                        if (respuesta.automovil == null) {
                            console.log(chalkPipe('green.bold')('Eliminado!'));
                        } else {
                            console.log(chalkPipe('red.bold')('No se pudo eliminar!'));
                            console.log(respuesta.automovil);
                        }
                        break;
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                console.log('complete');
                main();
            }
        );
}

function inicializarBase() {
    const bddLeida$ = rxjs.from(archivo.leer('./data/autos.json'));
    return bddLeida$
        .pipe(
            mergeMap(  // Respuesta anterior Observable
                (respuesta: Respuesta) => {
                    if (respuesta.bdd) {
                        return rxjs
                            .of(respuesta);
                    } else {
                        // crear la base
                        return rxjs
                            .from(archivo.crear('./data/autos.json', {"automoviles": []}, 'Crear'));
                    }
                }
            )
        );
}

function preguntarOpcionesMenu() {
    return mergeMap(
        (respuesta: Respuesta) => {
            return rxjs
                .from(inquirer.prompt(preguntaMenu))
                .pipe(
                    map(
                        (opcionMenu: OpcionMenu) => {
                            respuesta.opcionMenu = opcionMenu;
                            return respuesta;
                        }
                    )
                )
        }
    );
}

function preguntarDatos() {
    return mergeMap(
        (respuesta: Respuesta) => {
            return rxjs
                .from(inquirer.prompt(questions(respuesta.opcionMenu.opcionMenu)['questions']))
                .pipe(
                    map(
                        (automovil: Automovil) => {
                            respuesta.automovil= automovil;
                            return respuesta;
                        }
                    )
                )
                .pipe(
                    mergeMap((sig_respuesta: Respuesta) => {
                        switch (sig_respuesta.opcionMenu.opcionMenu) {
                            case 'Actualizar':
                                const automovil = respuesta.bdd.automoviles
                                    .find(auto => auto.id == sig_respuesta.automovil.id);
                                if (typeof automovil !== 'undefined') {
                                    return rxjs
                                        .from(inquirer.prompt(questions('init_actualizar')['questions']))
                                        .pipe(
                                            map(
                                                (mapeo: Mapeo) => {
                                                    sig_respuesta.automovil = automovil;
                                                    sig_respuesta.mapeo = mapeo;
                                                    return sig_respuesta;
                                                }
                                            )
                                        );
                                } else {
                                    return rxjs.of(sig_respuesta);
                                }
                            case 'Borrar':
                                const automovilAeliminar = respuesta.bdd.automoviles
                                    .find(auto => auto.id == sig_respuesta.automovil.id);
                                if (typeof automovilAeliminar !== 'undefined') {
                                    return rxjs
                                        .from(inquirer.prompt(questions('init_borrar')['questions']))
                                        .pipe(
                                            map(
                                                (mapeo: Mapeo) => {
                                                    sig_respuesta.automovil = automovilAeliminar;
                                                    sig_respuesta.mapeo = mapeo;
                                                    return sig_respuesta;
                                                }
                                            )
                                        );
                                } else {
                                    return rxjs.of(sig_respuesta);
                                }
                            default:
                                return rxjs.of(sig_respuesta);
                        }
                    })
                );

        }
    );
}
function ejecutarAccion() {
    return map(
        (respuesta: Respuesta) => {
            switch (respuesta.opcionMenu.opcionMenu) {
                case 'Crear':
                    const id1 = Math.floor((Math.random() * 100) + 1);
                    const id2 = Math.floor((Math.random() * 10) + 0);
                    respuesta.automovil.id = id1 + '' + id2;
                    respuesta.bdd.automoviles.push(respuesta.automovil);
                    break;
                case 'Buscar':
                    const encontrado: Automovil[] = respuesta.bdd.automoviles
                        .filter(auto => auto.id == respuesta.automovil.id);
                    if (encontrado.length > 0) {
                        respuesta.automovil = encontrado[0];
                    } else {
                        respuesta.automovil = null;
                    }
                    break;
                case 'Actualizar':
                    const index = respuesta.bdd.automoviles.indexOf(respuesta.automovil);
                    if (index != -1) {
                        respuesta.automovil[respuesta.mapeo.key] = respuesta.mapeo.value;
                        respuesta.bdd.automoviles[index] = respuesta.automovil;
                    } else {
                        respuesta.automovil = null;
                    }
                    break;
                case 'Borrar':
                    const indexBorrar = respuesta.bdd.automoviles.indexOf(respuesta.automovil);
                    if (indexBorrar != -1 && respuesta.mapeo.value) {
                        console.log(respuesta.mapeo);
                        respuesta.bdd.automoviles.splice(indexBorrar,1);
                        respuesta.automovil = null;
                    }
                    break;
            }
            return respuesta;
        }
    );
}

// BDD
function actualizarBDD() {
    return mergeMap(
        (respuesta: Respuesta) => {
            return rxjs.from(archivo.crear('./data/autos.json', respuesta.bdd, 'Actualizar'))
                .pipe(
                    map((respuesta_bdd: Respuesta) => {
                        respuesta_bdd.opcionMenu = respuesta.opcionMenu;
                        respuesta_bdd.automovil = respuesta.automovil;
                        return respuesta_bdd;
                    })
                );
        }
    );
}


main();