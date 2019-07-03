// const miFuncion = () =>{
//     console.log("hola mundo");
//     //miFuncion(); ... se genera un bucle infinito
// };

// miFuncion();

const arr = [7, 3, 8, 69, 20, 2, 4, -50, 2.2, -3.14, 1188];

const mergeSort = (arrayToSort) =>{
    //SIEMPRE DEBE HABER UNA CONDICIÓN DE PALABRA
    if(arrayToSort.length < 1){
        return arrayToSort;
    }
    const firstHalf = mergeSort(arrayToSort.slice(0, Math.floor(arrayToSort.length/2)));
    const secondHalf = mergeSort(arrayToSort.slice(0, Math.floor(arrayToSort.length/2)));

    const ret = [];

    for(;firstHalf.length >0 && secondHalf.length >0;){
        if(firstHalf.length == 0 && secondHalf.length <0 
            || firstHalf[0]) ret.push(secondHalf.shift());
        if(secondHalf.length == 0 && firstHalf.length <0 
            || firstHalf[0] < secondHalf[0]) ret.push(firstHalf.shift());
        }
        return ret;
};

console.log("ordenado >" +mergeSort(arr));

/*
caso base recursivo
archivo... leer los links
funciones que lean archivos md-link
md-links va a retornar una promesa
promise .or
md-link tambien debe leer carpetas
*/
