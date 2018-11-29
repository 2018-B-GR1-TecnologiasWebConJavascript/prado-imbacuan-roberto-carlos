var require, module;
const questions_data = require('./questions.json');
// var Questions = {};
const Questions = (tipo: string): any => {
    let respuesta = {};
    switch (tipo) {
        case 'Crear':
            respuesta = {id: 0, questions: questions_data[0]};
            break;
        case 'Listar automóviles':
            respuesta = {id: 1, questions: []};
            break;
        case 'Buscar':
            respuesta = {id: 2, questions: questions_data[1]};
            break;
        case 'Actualizar':
            respuesta = {id: 3, questions: questions_data[1]};
            break;
        case 'init_actualizar':
            respuesta = {id: 4, questions: questions_data[2]};
            break;
        case 'Borrar':
            respuesta = {id: 5, questions: questions_data[1]};
            break;
        case 'init_borrar':
            respuesta = {id: 6, questions: questions_data[3]};
            break;
    }
    return respuesta;
}
module.exports = Questions;
