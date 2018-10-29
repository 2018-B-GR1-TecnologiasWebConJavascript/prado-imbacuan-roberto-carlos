// 06-callback-propio.js
var fs = require('fs');

function appendFile(nombreArchivo, contenidoLeidoDelArchivo, callback) {
    // 1) Leer archivo
    // 2.1) Si existe, le añado el contenido al archivo
    // 2.2) Si no existe, le creo el archivo con el contenido
    // Devuelve el contendo completo del archivo
    fs.readFile(nombreArchivo, 'utf-8',(error, contenido) => {
        if (error) {
            // escribimos el archivo
            fs.writeFile(nombreArchivo, contenidoLeidoDelArchivo, (error) => {
                if (error) {
                    console.log('Error escribiendo');
                    callback(undefined, error);
                } else {
                    // Devolver el contenido
                    callback(contenido);
                }
            });
        } else {
            // añadimos el contendio leido al archivo
            fs.writeFile(nombreArchivo, contenidoLeidoDelArchivo + contenido,  (err) => {
                if (err) {
                    console.log('Error escribiendo');
                    callback(undefined, err);
                } else {
                    // Devolver el contenido
                    callback(contenidoLeidoDelArchivo + contenido);
                }
            });
        }
    });
}
const respuestaAppendFile =  appendFile('06-ejemplo.txt', '\nHola amigos', (contenido, err) => {
    console.log('Contendio: ', contenido);
    if (err) {
        console.log(err);
    } else {
        console.log(contenido);
    }
});