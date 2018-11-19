const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;

const preguntaMenu = { 
    type: 'list',
    name: 'opcionMenu',
    message: 'Que quieres hacer',
    choices: [
        'Crear',
        'Borrar',
        'Buscar',
        'Actualizar',
    ]
};

const preguntaUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es tu id'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es tu nombre'
    },
];

const preguntaUsuarioBusquedaPorNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe el nombre del usuario a buscar'
    }
];


const preguntaUsuarioNuevoNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe tu nuevo nombre'
    }
];


function main() {
    console.log('Empezo');

    // 1) Si existe el archivo, leer, sino crear

    // 2) Pregunto que quiere hacer -> Crear

    // 3) Preguntar los datos -> Datos nuevo Registro

    // 4) Accion!

    // 5) Guardar la Base de Datos


    /*
    try {
        await inicializarBase();
        const respuesta = await inquirer.prompt(preguntaMenu);
        switch (respuesta.opcionMenu) {
            case 'Crear':

                const respuestaUsuario = await inquirer.prompt(preguntaUsuario);
                await anadirUsuario(respuestaUsuario);
                main();
                break;

            case 'Actualizar':

                const respuestaUsuarioBusquedaPorNombre = await inquirer.prompt(preguntaUsuarioBusquedaPorNombre);

                const existeUsuario = await buscarUsuarioPorNombre(respuestaUsuarioBusquedaPorNombre.nombre);

                if (existeUsuario) {
                    const respuestaNuevoNombre = await inquirer.prompt(preguntaUsuarioNuevoNombre);
                    await editarUsuario(respuestaUsuarioBusquedaPorNombre.nombre, respuestaNuevoNombre.nombre);
                } else {
                    console.log('El usuario no existe');

                    main();
                    break;
                }


        }
    } catch (e) {
        console.log('Hubo un error');
    }
    */
}

function inicializarBase():Observable<> {

    const bddLeida$ = rxjs.from(leerBDD());

    bddLeida$
        .pipe(
            mergeMap(
                (respuestaBDD: RespuestaBDD) => {
                    if(respuestaBDD.bdd) {
                        return rxjs.of(1);
                    } else {
                        return rxjs.from(crearBDD())
                            .pipe(
                                map()
                            )
                    }
                }
            )
        )

    /*
    return new Promise(
        (resolve, reject) => {

            // CALLBACK HELL !!!

            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        fs.writeFile('bdd.json',
                            '{"usuarios":[],"mascotas":[]}',
                            (err) => {
                                if (err) {
                                    reject({mensaje: 'Error'});
                                }
                                resolve({mensaje: 'ok'});
                            });
                    } else {
                        resolve({mensaje: 'ok'});
                    }
                });
        }
    );
    */
}

function leerBDD() {
    return new Promise(
        (resolve) => {
            fs.readFile(
                'bdd.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        resolve({
                            mensaje: 'No existe la Base de Datos',
                            bdd: null
                        });
                    } else {
                        resolve({
                            mensaje: 'Base de datos leida',
                            bdd: JSON.parse(contenidoArchivo)
                        });
                    }
                }
            );
        }
    );
}

function crearBDD() {
    const contenido = '{"usuarios":[],"mascotas":[]}';
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'bdd.json',
                contenido,
                (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error creando bdd',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'BDD creada',
                            bdd: JSON.parse(contenido)
                        });
                    }
                }
            );
        }
    );
}


function anadirUsuario(usuario) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);


                        bdd.usuarios.push(usuario);


                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Creado'});
                                }
                            }
                        );
                    }
                });
        }
    );
}

function editarUsuario(nombre, nuevoNombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);


                        const indiceUsuario = bdd.usuarios
                            .findIndex(
                                (usuario) => {
                                    return usuario.nombre = nombre;
                                }
                            );

                        bdd.usuarios[indiceUsuario].nombre = nuevoNombre;


                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Editado'});
                                }
                            }
                        );
                    }
                });
        }
    );
}

function buscarUsuarioPorNombre(nombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);

                        const respuestaFind = bdd.usuarios
                            .find(
                                (usuario) => {
                                    return usuario.nombre === nombre;
                                }
                            );

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

main();
export interface RespuestaBDD {
    mensaje: string;
    bdd: BaseDeDatos;
}
export interface BaseDeDatos {
    usuarios: Usuario[];
    mascotas: Mascota[];
}
export interface Usuario {
    id: number;
    nombre: string;
}
export  interface Mascota {
    id: number;
    nombre: string;
    idUsuario: number;

}