var require;
const fs = require('fs');
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const readFile= (nombreArchivo: string): Promise<any> => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la Base de Datos',
                    bdd: null
                });
            } else {
                resolve({
                    mensaje: 'Base de datos leida',
                    bdd: JSON.parse(contenidoLeido)
                });
            }
        })
    })
}

// Crear la funcion para leer el archivo
const leerArchivo= (nombreArchivo: string): Promise<any> => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la Base de Datos',
                    bdd: null
                });
            } else {
                resolve({
                    mensaje: 'Base de datos leida',
                    bdd: JSON.parse(contenidoLeido)
                });
            }
        })
    })
}
// Leer e archivo y guardarlo en una lista
const examen$ = rxjs.from(readFile('./pokemon/data.json'));

examen$
    .pipe(
        map((data: Respuesta) => { // pregunta 1
            let  resouesta1: any[] = data.bdd.map((value: any[]) => {
                return value['types'].map((slot) => slot.type.name);
            });
            const respuesta1_1 = [];
            resouesta1.forEach((lista: string[]) => {
                lista.forEach((texto) => {
                    const respuesta_1_i = {tipo: texto};
                    respuesta1_1.push(respuesta_1_i);
                });
            });
            console.log("1) Busque los tipos de \"types\" en el arreglo data.json");
            data.preguntas = [];
            data.preguntas.push({respuesta: respuesta1_1});
            console.log(respuesta1_1);
            return data;
        }),
        map((data: Respuesta) => { // pregunta2
            let  resouesta2: any[] = data.bdd.map((value: any[]) => {
                return value['abilities'].map((slot) => slot.ability.name);
            });
            const respuesta2_2 = [];
            resouesta2.forEach((lista: string[]) => {
                lista.forEach((texto) => {
                    const respuesta_2_i = {nombre: texto};
                    respuesta2_2.push(respuesta_2_i);
                });
            });
            console.log("\n2) Busque los tipos de \"abilities\" en el arreglo data.json");
            data.preguntas.push({respuesta: respuesta2_2});
            console.log(respuesta2_2);
            return data;
        }),
        map((data: Respuesta) => { // pregunta3
            let  resouesta3: any[] = data.bdd.map((value: any[]) => {
                return value['moves'].map((slot) => slot.move.name);
            });
            const respuesta3_3 = [];
            resouesta3.forEach((lista: string[]) => {
                lista.forEach((texto) => {
                    const respuesta_3_i = {nombre: texto};
                    respuesta3_3.push(respuesta_3_i);
                });
            });
            console.log("\n3) Busque los tipos de \"move\" en el arreglo data.json");
            console.log(respuesta3_3);
            data.preguntas.push({respuesta: respuesta3_3});
            return data;
        }),
        map((data: Respuesta) => {
            console.log("\n4) Clasifique a los pokemon por types");
            const types: any[] = data.preguntas[0].respuesta;
            const respueesta4 = [];
            types.forEach((type) => {
                const pokemons = [];
                data.bdd.forEach((pokemon) => {
                    const t = [];
                    const tipos: any[] = pokemon.types;
                    tipos.forEach(tipo => {
                        t.push(tipo.type.name);
                    });
                    pokemons.push({
                        id: pokemon.id,
                        name: pokemon.name,
                        types: t
                    });
                });

                respueesta4.push({
                    nombre: type.tipo,
                    pokemons: pokemons.filter((pokemon) => pokemon.types.includes(type.tipo))
                })
            });
            console.log(respueesta4);
            return data;
        }),
            map((data: Respuesta) => {
                console.log("\n5) Clasifique a los pokemon por abilities");
                const abilities: any[] = data.preguntas[1].respuesta;
                const respueesta5 = [];
                abilities.forEach((abilitie) => {
                    const pokemons = [];
                    data.bdd.forEach((pokemon) => {
                        const a = [];
                        const abilities_p: any[] = pokemon.abilities;
                        abilities_p.forEach(tipo => {
                            a.push(tipo.ability.name);
                        });
                        pokemons.push({
                            id: pokemon.id,
                            name: pokemon.name,
                            abilities: a
                        });
                    });

                    respueesta5.push({
                        nombre: abilitie.nombre,
                        pokemons: pokemons.filter((pokemon) => pokemon.abilities.includes(abilitie.nombre))
                    })
                });
                console.log(respueesta5);
                return data;
            }),
        map((data: Respuesta) => {
            console.log("\n6) Clasifique a los pokemon por move");
            const moves: any[] = data.preguntas[2].respuesta;
            const respueesta6 = [];
            moves.forEach((move) => {
                const pokemons = [];
                data.bdd.forEach((pokemon) => {
                    const m = [];
                    const moves_p: any[] = pokemon.moves;
                    moves_p.forEach(tipo => {
                        m.push(tipo.move.name);
                    });
                    pokemons.push({
                        id: pokemon.id,
                        name: pokemon.name,
                        abilities: m
                    });
                });

                respueesta6.push({
                    nombre: move.nombre,
                    pokemons: pokemons.filter((pokemon) => pokemon.abilities.includes(move.nombre))
                })
            });
            console.log(respueesta6);
            return data;
        }),
        map((data: Respuesta) => {
            console.log("\n7) Cree un arreglo del abecedario, revisar si existe al menos un pokemon con cada letra del abecedario.");
            const abc = "abcdefghijklmnñopqrstuvwxyz";
            const abc_arreglo = abc.split('');
            console.log(abc_arreglo);
            const arregloRespuesta = [];
            abc_arreglo.forEach((letra: string) => {
                const valor = data.bdd.every((value, index) => {
                    return value.name.substring(0,1) == letra;
                });
                arregloRespuesta.push({letra: valor});
            });
            console.log(arregloRespuesta);
            return data;
        })
    ),
    map((data: Respuesta) => {
        data.bdd.map((value) => {
        })
        return data;
    })
    .subscribe((data: Respuesta) => {
    console.log(data.bdd.length);
});
interface Pregunta {
    contenido: string;
    respsuesta: any;
}
interface Respuesta {
    preguntas: any[];
    bdd: any[]
}
