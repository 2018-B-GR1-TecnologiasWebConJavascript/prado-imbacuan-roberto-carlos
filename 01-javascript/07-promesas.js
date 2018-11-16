// 07-promesas.js
const fs = require('fs');
const nombre = '06-ejemplo.txt';
const nuevaPromesa = (nombreArchivo) => {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeido) => {
            if (error) {
                reject(error);
                console.log('Fin');
            } else {
                resolve(contenidoLeido);
                console.log('Si');
            }
        })
    })
};
const nuevaPromesaEscritura = (nombreArchivo, contenido) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, contenido, (error) => {
            if (error) {
                reject(error);
                console.log('Fin');
            } else {
                resolve(contenido);
                console.log('Si');
            }
        })
    })
};

nuevaPromesa(nombre)
    .then((contenido) => {
        console.log('Ok', contenido);
        return nuevaPromesaEscritura('07.ejemplo.txt', contenido + '\nAdios amigos');
    }).then((contendioArcivoEscrito) => {
        console.log(contendioArcivoEscrito)
})
    .catch((e) => {
        console.error('Mal', e)
    });


// Recibe arrgelo de string ['A',  'B', 'C']
// Por cada uno se crea el archivo y se guarda el contendo
// 0-A.txt
// 1-B.txt
// 2-C.txt

function ejetcicio(arregloStrings, callback) {
    const respuestas = [];
    arregloStrings.forEach((cadena, indice) => {
        const nombreArchivo = `${indice}-${cadena}.txt`;
        const contenido = cadena;
        fs.writeFile(nombreArchivo, contenido, (err) => {
            const respuesta = {
                nombreArchivo: nombreArchivo,
                contenidoArchivo: contenido,
                error: err
            };
            respuestas.push(respuesta);
            const estaCompletoElArreglo = respuestas.length === arregloStrings.length;
            if (estaCompletoElArreglo) {
                callback(respuestas);
            }
        });
    });

    /*for (let i = 0; i < arregloStrings.length; i++) {
        const nombreArchivo = `${i}-${cadena}.txt`;
        const contenido = cadena;
        fs.writeFile(nombreArchivo, contenido, (err) => {
            const respuesta = {
                nombreArchivo: nombreArchivo,
                contenidoArchivo: contenido,
                error: err
            };
            respuestas.push(respuesta);
            const estaCompletoElArreglo = respuestas.length === arregloStrings.length;
            if (estaCompletoElArreglo) {
                callback(respuestas);
            }
        });
    }*/
}

ejetcicio(['A', 'B', 'C'], (respuesta) => {
    console.log(respuesta);
});

// Deber:
// Ejercicio
const appendFilePromesa = (nombreArchivo, contenidoLeidoDelArchivo) => {
    return nuevaPromesa(nombreArchivo);
};
const file = '09-ejemplo.txt';
const new_content = '\nHola amigos';
// appendFilePromesa(file, new_content)
//     .then((contenido) => {
//         return nuevaPromesaEscritura(file, contenido + new_content)
//     }).then((contenido_final) => {
//         console.log('Contenido añadido', content);
//     }).catch(e => {
//         console.log('Error leyendo el archivo');
//         return nuevaPromesaEscritura(file, contenido + new_content)
//     }).then(conten => {
//         console.log('nuevo contendio', conten);
//     }).catch(e2 => {
//     console.log('Erro escribiendo nuevo contenido')
// });

appendFilePromesa(file, new_content)
    .then((contenido1) => {
        return nuevaPromesaEscritura(file, contenido1 + new_content);
    }).
    catch(error1 => {
        return nuevaPromesaEscritura(file, new_content);
    }).then((contenido2) => {
        console.log("Resultado: ", contenido2)
    });


