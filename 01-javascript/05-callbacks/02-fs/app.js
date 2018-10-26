const fs = require('fs');
console.log('Inicio');

const nombreArchivo = 'ejemplo.txt';
const contenidoArchivo = new Date();

fs.readFile(nombreArchivo, 'utf-8', (error, textoDelArchivo) => {
   if (error) {
       try {
           throw  new Error(error)
       } catch (e) {
           console.error(e)
       }
   }  else {
       console.log(textoDelArchivo);
       fs.writeFile(nombreArchivo, textoDelArchivo + '\n' + contenidoArchivo, (err) => {
           if (err) throw err;
           console.log('Archivo guardado');
           fs.writeFile(nombreArchivo, textoDelArchivo + '\n' + contenidoArchivo, (err) => {
               if (err) throw err;
               console.log('Archivo guardado');
               fs.writeFile(nombreArchivo, textoDelArchivo + '\n' + contenidoArchivo, (err) => {
                   if (err) throw err;
                   console.log('Archivo guardado');
               });
           });
       });
   }
});



console.log('Fin');