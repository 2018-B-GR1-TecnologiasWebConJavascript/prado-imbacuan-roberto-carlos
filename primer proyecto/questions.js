var require, module;
const questions_data = require('./questions.json');
var Questions = {};
Questions['crear'] = (tipo) => {
    let respuesta = {};
    switch (tipo) {
        case 'Ingresar un automóvil':
            respuesta = { id: 0, questions: questions_data[0] };
            break;
        case 'Listar automóviles':
            respuesta = { id: 1, questions: [] };
            break;
        case 'Buscar automóvil':
            respuesta = { id: 2, questions: questions_data[1] };
            break;
        case 'Actualizar automóvil':
            respuesta = { id: 3, questions: questions_data[1] };
            break;
        case 'iniciar_actualizacion':
            respuesta = { id: 4, questions: questions_data[2] };
            break;
        case 'Eliminar automóvil':
            respuesta = { id: 5, questions: questions_data[1] };
            break;
        case 'iniciar_eliminacion':
            respuesta = { id: 6, questions: questions_data[3] };
            break;
    }
    return respuesta;
};
module.exports = Questions;
