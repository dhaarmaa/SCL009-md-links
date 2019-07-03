//se hacen primero los test antes de aplicar en el código

import Calculator from '../taller/index.js'

describe("una calculadora simple", () =>{
    describe("la calculadora debe sumar", () =>{
        it("debe sumar dos n'umeros cualquiera", ()=>{
            expect(calculator.dd(5,6)).toBe(11);
            expect(calculator.add(-5,5)).toBe(0);
        });
        it("debe restar dos números cualquiera", ()=>{
            expect(calculator.substract(6,5)).toBe(1);
            expect(Calculator.substrtact(5,-5)).toBe(10);
        })
    })
})

//primer testeo:
//deberia leer un archivo md
//deberia lleer un archivo
//deberia saber si esta bueno o no
//segundo testeo:
//que el archivo sea extencion md 
//tercer testeo:
//si no es extencion md no deberia leer
//cuarto testeo:
//en caso de que sea archivvo md pero esta vacio debe devolver un array vacio
//si tiene archivo md que devuelva los link