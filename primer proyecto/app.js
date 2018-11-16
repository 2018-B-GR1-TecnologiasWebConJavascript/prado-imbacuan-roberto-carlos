var require;
const chalkPipe = require('chalk-pipe');
const inquirer = require('inquirer');
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const questions = require('./questions');
const automovil = require('./automovil');
const opciones_de_inicio = [
    {
        type: 'list',
        name: 'option',
        message: 'Elije una opción:',
        choices: [
            'Ingresar un automóvil',
            'Listar automóviles',
            'Buscar automóvil',
            'Actualizar automóvil',
            'Eliminar automóvil',
            new inquirer.Separator(),
            'Salir'
        ]
    }
];
const obtener_prompts = (answer, optional) => {
    console.log(chalkPipe('blue.bold')('Menú: ' + answer));
    const options = questions.crear(answer);
    // @ts-ignore
    return new Promise((resolve, reject) => {
        inquirer.prompt(options.questions)
            .then((respuesta) => {
            return llamar_acciones(options.id, respuesta, optional);
        })
            .then(respuesta_final => {
            if ([3, 5].indexOf(options.id) !== -1 && respuesta_final.length > 0) {
                let metodoAllamar = "";
                if (options.id === 3) {
                    metodoAllamar = "iniciar_actualizacion";
                }
                if (options.id === 5) {
                    metodoAllamar = "iniciar_eliminacion";
                }
                return obtener_prompts(metodoAllamar, respuesta_final);
            }
            else {
                return automovil.mostrar(options.id, respuesta_final);
            }
        })
            .then(_ => {
            resolve();
        })
            .catch(e => {
            reject(e);
        })
            .catch(e => {
            reject(e);
        });
    });
};
const llamar_acciones = (id, data, optional) => {
    // @ts-ignore
    switch (id) {
        case 0:
            return automovil.guardar(data);
            break;
        case 1:
            return automovil.listar();
            break;
        case 2:
        case 3:
            return automovil.buscar(data);
            break;
        case 4:
            return automovil.actualizar(data, optional);
            break;
        case 5:
            return automovil.buscar(data);
            break;
        case 6:
            return automovil.eliminar(data, optional);
            break;
        default:
            return null;
    }
};
const init = () => {
    console.log(chalkPipe('blue.bold')('Inicio'));
    let continuar = true;
    let openPrompt$ = rxjs.from(inquirer.prompt(opciones_de_inicio));
    openPrompt$
        .pipe(map((value, index) => {
        return value['option'];
    }))
        .subscribe((answer) => {
        if (answer === 'Salir') {
            continuar = false;
        }
        else {
            obtener_prompts(answer)
                .then(_ => {
                setTimeout(() => {
                    init();
                }, 250);
            }).catch(e => {
                // console.log(e);
                setTimeout(() => {
                    init();
                }, 250);
            });
        }
    }, (e) => { }, () => {
    });
};
init();
