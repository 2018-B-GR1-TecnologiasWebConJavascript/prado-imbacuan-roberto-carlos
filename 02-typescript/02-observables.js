const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const numeros$ = rxjs.of(1, "Adrian", true, { nombre: 'adsad' }, [1, 2, 3], new Date());
console.log(numeros$);
numeros$
    .pipe(map((valorActual) => {
    return {
        data: valorActual
    };
}))
    .subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('Error', error);
}, () => {
    console.log('Completado');
});
