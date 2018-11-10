declare var require: any;
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;

const numeros$ = rxjs.of(1,"Adrian", 1,1,1,true,{nombre: 'adsad'},[1,2,3], new Date());

console.log(numeros$);


const promesita = (correcto) => {
    return new Promise((resolve,reject) => {
        if (correcto) {
            resolve(':)');
        } else {
            reject(':(');
        }
    })
};
const promesita$ = rxjs.from(promesita(true));
const promesitaNoOk$ = rxjs.from(promesita(false));
numeros$
    .pipe(
        concat(promesitaNoOk$),
        concat(promesita$))
    .pipe(
        distinct(),
        map(
            (valorActual) => {
                return {
                    data: valorActual
                }
            }
        )
    )
    .subscribe((ok)=> {
        console.log('En ok',  ok);
    }, (error) => {
        console.log('Error',  error);
    }, () => {
        console.log('Completado');
    });




/*
promesita$.subscribe(
    (ok) => {
        console.log('En promesita ', ok);
    },
    (e) => {
        console.log(e);
    },
    () =>{
        console.log('Completado')
    });*/
